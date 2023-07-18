# CPI /Flash Swap

This section pertains to Dapps and Protocols that has a need to perform swaps programmatically with access to the best prices and liquidity for program-owned accounts.

While it has always been possible to perform swaps for program-owned accounts using Jupiter swap via CPI calls, there has always been some limitations such as the large transaction size and the hassle of initialising intermediary token accounts. These obstacles has prevented the CPI approach from being able to use the best routes on Jupiter with the best prices and lowest possible slippage.

With the advent of Jupiter V5 / V6, you are no longer required to initialise intermediary accounts prior to performing the swap instruction / transaction and in combination with address lookup tables, it is now 10x simpler to access the best prices and liquidity when performing swaps.

Rather than taking a CPI approach, we recommend performing a “flash-swap” to bypass the limitations of CPI ie transaction size limit. Unlike a typical flash loan, the token used to repay is different from the token taken for the loan. As such, various on-chain validations would need to be performed (we'll get to this later).

## Here’s how “flash-swap” works conceptually:

1.  An off-chain process takes a “flash loan” from the program owned account’s token account
2.  The off-chain process then invokes the swap instruction on Jupiter and repays the loan in the same instruction

These are the corresponding 2 instructions that should be bundled in a single transaction to perform a “flash swap”.

In order to avoid exploits, you should perform rigorous checks on-chain aka in your program.

Let’s jump into some code with a practical example:

**Scenario:** Your program is a TWAPP program. Users use your protocol to split up their large order of USDC -> SOL to multiple large orders. Hence, the users' USDC is likely stored in a program account which will then be used to swap to SOL periodically.

Here's a minimal program instruction example:
_(you will need to tweak the code according to your program for this example to work)_

```rust
pub fn initiate_flash_swap(ctx: Context<InitiateFlashSwap>, borrow_amount: u64) -> Result<()> {
    let instructions_sysvar = ctx.accounts.instructions_sysvar.to_account_info();

    // check #1: make sure the current instruction isn't a cpi call
    let current_idx = load_current_index_checked(&instructions_sysvar)? as usize;
    let current_ixn = load_instruction_at_checked(current_idx, &instructions_sysvar)?;
    require_keys_eq!(
        current_ixn.program_id,
        crate::ID,
        InstructionError
    );

    // check #2: check that the next instruction in the transaction performs a swap
    let swap_ix_index = current_idx + 1;
    if let Ok(jup_swap_ixn) = load_instruction_at_checked(swap_ix_index, &instructions_sysvar) {
        // check #2a: check that it calls Jup v5 program
        require_keys_eq!(
            jup_swap_ixn.program_id,
            Pubkey::from_str("JUP5jSkuNHeHLoapB97P7MpckomsS4kLSG1Y31VZoLv").unwrap(),
            InvalidJupiterProgram
        );

        // check #2b: check that it calls Jup's swap instruction
        let ixn_identifier = u64::from_be_bytes(jup_swap_ixn.data[..8].try_into().unwrap());
        require!(
            ixn_identifier == get_instruction_discriminator(&[b"global:route"]),
            InvalidSwapInstruction
        );

        // check #2c: check that destinationTokenAccount for Jup ix is the correct out acount
        // the out account is recommended to be this account out token account
        // e.g. PDA Account's Associated Token Account
        require_keys_eq!(
            jup_swap_ixn.accounts[3].pubkey,
            ctx.accounts.out_ata.key(), // make sure there's some form of check on out_ata
            InvalidDestinationAccount
        );

        // check #2d: check that the output mint is the desired output mint
        require_keys_eq!(
            jup_swap_ixn.accounts[5].pubkey,
            ctx.accounts.twapp.output_mint, // make sure there's some form of check on out_ata
            InvalidDestinationAccount
        );


        // check #2e: check that the full amount (or adjust to the correct amount) is used to swap
        let swap_amount_start_at = jup_swap_ixn.data.len() - 19;
        let swap_amount = u64::from_le_bytes(
            jup_swap_ixn.data[swap_amount_start_at..swap_amount_start_at + 8]
                .try_into()
                .unwrap(),
        );
        require_eq!(swap_amount, borrow_amount, ShortChanged);
    } else {
        return Err(error!(MissingSwapInstructions));
    }

    // transfer from pool to keeper
    let idx_bytes = ctx.accounts.twapp.idx.to_le_bytes();
    let signer_seeds: &[&[&[u8]]] = &[twapp_seeds!(ctx.accounts.twapp, idx_bytes)];

    anchor_spl::token::transfer(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            anchor_spl::token::Transfer {
                from: ctx.accounts.in_account.to_account_info(),
                to: ctx.accounts.borrower_in_account.to_account_info(),
                authority: ctx.accounts.twapp.to_account_info(),
            },
            signer_seeds,
        ),
        borrow_amount,
    )?;

    Ok(())
}

#[derive(Accounts)]
pub struct InitiateFlashFill<'info> {
    #[account(mut)]
    borrower: Signer<'info>,

    #[account(mut)]
    twapp: Account<'info, Twapp>,

    /// The token to borrow
    #[account(
      address=twapp.input_mint
    )]
    input_mint: Account<'info, Mint>,

    /// The account to send borrowed tokens to
    #[account(
        init_if_needed,
        payer = borrower,
        associated_token::mint=input_mint,
        associated_token::authority=borrower,
    )]
    borrower_in_account: Box<Account<'info, TokenAccount>>,

    /// The account to borrow from
    #[account(
      mut,
      address=twapp.in_account
    )]
    in_account: Account<'info, TokenAccount>,

    /// The account to repay to
    #[account(
      address=twapp.out_account // this check is very important
    )]
    out_account: Account<'info, TokenAccount>,

    /// Solana Instructions Sysvar
    /// CHECK: Checked using address
    #[account(address = sysvar::instructions::ID @ AddressMismatch)]
    pub instructions_sysvar: UncheckedAccount<'info>,

    system_program: Program<'info, System>,
    token_program: Program<'info, Token>,
    associated_token_program: Program<'info, AssociatedToken>,
}

```

A sample client code:

```typescript
async function getAddressLookupTableAccounts(
  conn: Connection,
  keys: string[],
): Promise<AddressLookupTableAccount[]> {
  const addressLookupTableAccountInfos = await conn.getMultipleAccountsInfo(keys.map((key) => new PublicKey(key)));

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
};

async function getQuote(fromMint: PublicKey, toMint: PublicKey, amount: bigint | string, slippage_bps: number) {
  // { "inputMint": "So11111111111111111111111111111111111111112", "inAmount": "1000000000000", "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "outAmount": "20863297827", "otherAmountThreshold": "20758981338", "swapMode": "ExactIn", "slippageBps": 50, "platformFee": null, "priceImpactPct": "0.0014608420901521676715475165", "routePath": { "chain": { "routePaths": [{ "swap": { "info": { "ammKey": "4DoNfFBfF7UokCC2FQzriy7yHK6DY6NVdYpuekQ5pRgg", "label": "Phoenix", "inputMint": "So11111111111111111111111111111111111111112", "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "inAmount": "1000000000000", "outAmount": "20863297827", "feeAmount": "4173495", "feeMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } } }] } }, "mintPath": "So11111111111111111111111111111111111111112", "ammPath": "Phoenix", "timeTaken": 0.007179685 }
  return fetch(
    `${JUP_API_ENDPOINT}/quote?outputMint=${toMint.toBase58()}&inputMint=${fromMint.toBase58()}&amount=${amount.toString()}&slippage=${(
      slippage_bps / 100
    ).toString()}&quoteType=bellman-ford`,
  ).then((response) => response.json());
}

async function getSwapIx(
  user: PublicKey,
  inputAccount: PublicKey,
  outputAccount: PublicKey,
  quote: any,
): Promise<{
  swapInstruction: {
    accounts: {
      pubkey: string;
      isSigner: boolean;
      isWritable: boolean;
    }[];
    programId: string;
    data: string;
  };
  lookupTableAddresses: string[];
}> {
  const data = {
    quoteResponse: quote,
    userPublicKey: user.toBase58(),
    sourceTokenAccount: inputAccount.toBase58(),
    destinationTokenAccount: outputAccount.toBase58(),
  };

  const resp = await fetch(`${API_ENDPOINT}/swap-ix`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = resp.json();

  if ('error' in result) {
    console.log({ result });
    throw new Error(JSON.stringify(result));
  }

  return result;
}

function flashSwap() {
  const quote = await getQuote(<INPUT_MINT>, <OUTPUT_MINT>, <FILL_AMOUNT>, <SLIPPAGE_BPS>);
  const result = await getSwapIx(<BORROWER_PUBLIC_KEY>, <BORROWER_TOKEN_ACCOUNT>, <PROGRAM_ACCOUNT_OUT_TOKEN_ACCOUNT>, quote);

  const { swapInstruction: swapInstructionPayload, lookupTableAddresses } = result;
  const swapIx = new TransactionInstruction({
    programId: new PublicKey(swapInstructionPayload.programId),
    keys: swapInstructionPayload.accounts.map((key) => ({
      pubkey: new PublicKey(key.pubkey),
      isSigner: key.isSigner,
      isWritable: key.isWritable,
    })),
    data: Buffer.from(swapInstructionPayload.data, 'base64'),
  });

  const initiateFlashFillIX = await <anchor.Program>.methods
    .initiateFlashFill()
    .accounts({
      borrower: <BORROWER_PUBLIC_KEY>,
      twapp: <TWAPP_PUBLIC_KEY>,
      inputMint: <INPUT_MINT>,
      borrowerInAccount: <BORROWER_TOKEN_ACCOUNT>,
      inAccount: <PROGRAM_ACCOUNT_IN_TOKEN_ACCOUNT>,
      outAccount: <PROGRAM_ACCOUNT_OUT_TOKEN_ACCOUNT>,
      instructionsSysvar: web3.SYSVAR_INSTRUCTIONS_PUBKEY,
    })
    .instruction();

  const blockhash = (await connection.getLatestBlockhash()).blockhash;

  const addressLookupTableAccounts = await getAddressLookupTableAccounts(connection, lookupTableAddresses);

  const txInstructions: TransactionInstruction[] = [
    ComputeBudgetProgram.setComputeUnitLimit({
      units: 1_400_000,
    }),
    initiateFlashFillIX,
    swapIx,
  ];

  const messageV0 = new TransactionMessage({
    payerKey: BORROWER.publicKey,
    recentBlockhash: blockhash,
    instructions: txInstructions,
  }).compileToV0Message(addressLookupTableAccounts);

  const tx = new VersionedTransaction(messageV0);

  const provider = <anchor.Program>.provider as AnchorProvider;
  const txid = await provider.sendAndConfirm(tx, [BORROWER_KEYPAIR], {
    skipPreflight: false,
  });
}
```
