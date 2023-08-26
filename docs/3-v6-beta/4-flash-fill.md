---
sidebar_label: Flash Fill
description: Coming Soon
draft: true

---

# Flash Fill

Integrate your program with Jupiter Swap without the limitations of CPI via the "Flash Fill" approach.

Flash fill is one of two approaches to integrate Jupiter swap with your protocol. The other approach is [CPI](/docs/v6-beta/cpi-example).

> *In order to get the best prices and maximum out amount for any swaps, Jupiter splits and routes an order across multiple dexes in a single transaction to minimize price impact while prioritizing routes with the lowest prices. This results in a single transaction that may involve too many accounts. Transactions on Solana has a maximum of 1232 bytes (as of August 2023) and each account would take up 32 bytes. On top of that, instruction data would also use up precious bytes. As such, the CPI approach would generally fail. Although there is a way to force Jupiter's quote API to limit the number of accounts, in doing so, you would sacrifice the best routes - not ideal, hence, flash fill!*

When constructing a transaction off-chain, you have the option to use [Versioned Transaction](https://docs.solana.com/developing/versioned-transactions) in combination with [Address Lookup Tables](https://docs.solana.com/developing/lookup-tables), thus, reducing the "size" of each account from 32 bytes to 1 byte - something we can't do via the CPI approach.

Our team has engineered a solution which we coin as "flash-fill" to allow developers and integrators to utilize the full potential of Jupiter swap with their programs.

## Example
Here's the minimum number of steps (and corresponding instructions) involved:
1. Take a loan from PDA
2. Perform a swap while repaying the PDA

These 2 instructions will need to be performed within the same transaction.

> _**Warning!** Unlike a typical flash loan, the repayment is in a different mint from the loan. As such, there is no easy way to ensure that the repayment amount is appropriate, do to take extra steps to minimize the surface area of exploits. That's beyond the scope of this guide._

**Program code example:**
```rust
#[event_cpi]
#[derive(Accounts)]
pub struct FlashFill<'info> {
    admin: Signer<'info>,

    #[account(mut)]
    escrow: Account<'info, Escrow>,

    input_mint: Account<'info, Mint>,
    output_mint: Account<'info, Mint>,

    /// the admin's input_mint account
    #[account(
        init_if_needed,
        payer=admin,
        associated_token::mint=input_mint,
        associated_token::authority=admin,
    )]
    admin_input_token_account: Account<'info, TokenAccount>,

    /// The account to borrow from
    #[account(
      mut,
      associated_token::mint=input_mint,
      associated_token::authority=escrow,
    )]
    escrow_input_token_account: Account<'info, TokenAccount>,

    /// The account to repay to
    #[account(
        init_if_needed,
        payer=admin,
        associated_token::mint=output_mint,
        associated_token::authority=escrow,
    )]
    escrow_output_token_account: Account<'info, TokenAccount>,

    /// CHECK: Solana Instructions Sysvar
    #[account(address = sysvar::instructions::ID)]
    pub instructions_sysvar: UncheckedAccount<'info>,

    system_program: Program<'info, System>,
    token_program: Program<'info, Token>,
    associated_token_program: Program<'info, AssociatedToken>,
}

pub fn flash_fill(ctx: Context<FlashFill>, amount: u64) -> Result<()> {
    let instructions_sysvar = ctx.accounts.instructions_sysvar.to_account_info();

    // check #1: make sure the current instruction isn't a cpi call
    let current_idx = load_current_index_checked(&instructions_sysvar)? as usize;
    let current_ixn = load_instruction_at_checked(current_idx, &instructions_sysvar)?;
    require_keys_eq!(
        current_ixn.program_id,
        crate::ID
    );

    // check #2: check that the next instruction in the transaction performs a swap
    let swap_ix_index = current_idx + 1;
    if let Ok(jup_swap_ixn) = load_instruction_at_checked(swap_ix_index, &instructions_sysvar) {
        // check #2a: check that it calls Jup v6 program
        require_keys_eq!(
            jup_swap_ixn.program_id,
            Pubkey::from_str("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4").unwrap()
        );

        // check #2b: check that it calls Jup's swap instruction
        let ixn_identifier = u64::from_be_bytes(jup_swap_ixn.data[..8].try_into().unwrap());
        require!(
            ixn_identifier == get_instruction_discriminator(&[b"global:shared_accounts_route"])
        );

        // check #2c: check that the correct input and output mint is used for the swap
        require_keys_eq!(
            jup_swap_ixn.accounts[7].pubkey,
            ctx.accounts.input_mint.key()
        );
        require_keys_eq!(
            jup_swap_ixn.accounts[8].pubkey,
            ctx.accounts.output_mint.key()
        );

        // check #2d: check that destinationTokenAccount for Jup ix
        require_keys_eq!(
            jup_swap_ixn.accounts[6].pubkey,
            ctx.accounts.escrow_output_token_account.key()
        );

        // check #2e: check that the full amount of input_mint is used to swap
        let swap_amount_start_at = jup_swap_ixn.data.len() - 19;
        let swap_amount = u64::from_le_bytes(
            jup_swap_ixn.data[swap_amount_start_at..swap_amount_start_at + 8]
                .try_into()
                .unwrap(),
        );
        require_eq!(swap_amount, actual_swap_amount);
    } else {
        return Err(error!(MissingSwapInstructions)); // create your own error here
    }

    require_gte!(ctx.accounts.escrow_input_token_account.amount, amount);

    let idx_bytes = ctx.accounts.escrow.idx.to_le_bytes();
    let signer_seeds: &[&[&[u8]]] = &[...];
    let now = Clock::get()?.unix_timestamp;

    // transfer to admin for swap
    anchor_spl::token::transfer(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Transfer {
                from: ctx.accounts.escrow_input_token_account.to_account_info(),
                to: ctx.accounts.admin_input_token_account.to_account_info(),
                authority: ctx.accounts.escrow.to_account_info(),
            },
            signer_seeds,
        ),
        amount,
    )?;

    Ok(())
}
```

**Client code example:**

First, we define some helper functions. Learn more about these endpoints from [Swap API](/docs/v6-beta/swap-api). You could also opt to use our [Jup SDK](https://www.npmjs.com/package/@jup-ag/api).
```ts
async function getQuote(
  fromMint: PublicKey,
  toMint: PublicKey,
  amount: bigint | string,
  slippage_bps: number
) {
  return fetch(
    `https://quote-api.jup.ag/v6/quote?outputMint=${toMint.toBase58()}&inputMint=${fromMint.toBase58()}&amount=${amount.toString()}&slippageBps=${slippage_bps.toString()}`
  ).then((response) => response.json());
}

export async function getSwapIx(
  user: PublicKey,
  inputAccount: PublicKey,
  outputAccount: PublicKey,
  quote: any
): Promise<{
  tokenLedgerInstruction: any;
  computeBudgetInstructions: any;
  setupInstructions: any;
  swapInstruction: {
    accounts: {
      pubkey: string;
      isSigner: boolean;
      isWritable: boolean;
    }[];
    programId: string;
    data: string;
  };
  cleanupInstruction: any;
  addressLookupTableAddresses: string[];
}> {
  const data = {
    quoteResponse: quote,
    userPublicKey: user.toBase58(),
    wrapUnwrapSOL: true,
    sourceTokenAccount: inputAccount.toBase58(),
    destinationTokenAccount: outputAccount.toBase58(),
    useSharedAccounts: true,
  };

  const resp = await fetch(`https://quote-api.jup.ag/v6/swap-instructions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = resp.json();

  if ("error" in result) {
    console.log({ result });
    throw new Error(JSON.stringify(result));
  }

  return result;
}

async function getAddressLookupTableAccounts(
  conn: Connection,
  keys: string[]
): Promise<AddressLookupTableAccount[]> {
  const addressLookupTableAccountInfos = await conn.getMultipleAccountsInfo(
    keys.map((key) => new PublicKey(key))
  );

  return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
    const addressLookupTableAddress = keys[index];
    if (accountInfo) {
      const addressLookupTableAccount = new AddressLookupTableAccount({
        key: new PublicKey(addressLookupTableAddress),
        state: AddressLookupTableAccount.deserialize(accountInfo.data),
      });
      acc.push(addressLookupTableAccount);
    }

    return acc;
  }, new Array<AddressLookupTableAccount>());
}
```

Next, let's construct the transaction to complete flash-filling:
```ts
// first we get a quote from Jup's API
const quote = await getQuote(
  inputMint,
  outputMint,
  amount,
  slippageBps,
);

// then we get the swap IX and lookup tables from Jup's API
const { swapInstruction, addressLookupTableAddresses } =
  await getSwapIx(
    admin,
    inputAccount,
    walletOutputAccount,
    quote,
  );

// construct the swap IX
const swapIx = new TransactionInstruction({
  programId: new PublicKey(swapInstruction.programId),
  keys: swapInstruction.accounts.map((key) => ({
    pubkey: new PublicKey(key.pubkey),
    isSigner: key.isSigner,
    isWritable: key.isWritable,
  })),
  data: Buffer.from(swapInstruction.data, 'base64'),
});

// construct our flashFillIx
const flashFillIX = await program.methods
  .flashFill(new BN(amount.toString()), new BN(feeBps.toString()))
  .accounts({
    admin: admin.publicKey,
    escrow,
    inputMint,
    outputMint,
    adminInputTokenAccount,
    escrowInputTokenAccount,
    escrowOutputTokenAccount,
    instructionsSysvar: SYSVAR_INSTRUCTIONS_PUBKEY,
  })
  .instruction();

// prepare to send tx
const blockhash = (
  await connection.getLatestBlockhash()
).blockhash;

const addressLookupTableAccounts = await getAddressLookupTableAccounts(
  this.program.provider.connection,
  addressLookupTableAddresses
);

const txInstructions: TransactionInstruction[] = [
  ComputeBudgetProgram.setComputeUnitLimit({
    units: 1_400_000,
  }),
  flashFillIX,
  swapIx,
];

const messageV0 = new TransactionMessage({
  payerKey: admin.publicKey,
  recentBlockhash: blockhash,
  instructions: txInstructions,
}).compileToV0Message(addressLookupTableAccounts);

const tx = new VersionedTransaction(messageV0);
// then sign and send this tx
```