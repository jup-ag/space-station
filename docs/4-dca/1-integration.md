---
sidebar_label: Integrate DCA
description: Master Jupiter DCA Integration for efficient DCA orders on Solana. Get setup tips and SDK details.
title: Integrating Jupiter DCA
---

<head>
    <title>Jupiter DCA Integration: Seamless Solana Orders</title>
    <meta name="twitter:card" content="summary" />
</head>

<style jsx>
{`
  .api-method-box {
    border-radius: 8px;
    margin: 16px 0;
    display: inline;
    padding: 4px;
    font-weight: 700;
    margin-right: 8px;
    font-size: 12px;
    color: white
  }

.get {
  border: 1px solid #018847;
  background-color: #018847 !important;
}

.post {
  border: 1px solid #eaba0c;
  background-color: #eaba0c !important;
}

  .api-method-path {
    font-size: 14px;
    display: inline;
  }
`}</style>

Jupiter Dollar Cost Average (DCA) provides users with the quickest and easiest way to place DCA orders on Solana! DCA allows users to receive tokens directly in their wallet as each order is filled!

This page will serve as a general guide on integrating DCA into your use case. whether you are building a bot for yourself or looking to integrate with existing (d)apps, Jupiter's DCA program will work regardless of programming language used. If you are trying to build a DCA bot in Typescript / Javascript, look at [DCA SDK](/docs/dca/dca-sdk)

You can learn more about the mechanics of Jupiter's DCA here: [How DCA Works](/guides/dca/how-dca-work)

## Address

DCA Program (mainnet-beta): `DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M`

## Big Picture

There are 2 key instructions that can be executed

- Creating a DCA
- Cancelling (and receiving excess tokens) an existing DCA

## Instructions

### 1. Setting up a DCA

A DCA Account is a Program Derived Address (PDA) account. In order to start dollar cost averaging, you will need to construct and send a Transaction containing an Instruction to open this DCA account. _(if you are not familiar with constructing a transaction on Solana, take a look at using [DCA SDK](/docs/dca/dca-sdk). This guide provides more thorough code examples)_.

Each DCA account has unique parameters. If you want to have different parameters, you can create any number of DCA accounts.

**Instruction**

```rust
pub fn open_dca_v2(
    ctx: Context<OpenDcaOnBehalf>,
    application_idx: u64,
    in_amount: u64,
    in_amount_per_cycle: u64,
    cycle_frequency: i64,
    min_out_amount: Option<u64>,
    max_out_amount: Option<u64>,
    start_at: Option<i64>,
) -> Result<()> {
```

**Arguments needed (in this order):**

| Arguments        | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applicationIdx   | `u64`         | A unix timestamp in seconds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| inAmount         | `u64`         | Total input mint amount to sell.<br />_For e.g. if you are trying to buy SOL using 100 USDC every day over 10 days, `inAmount` should be `100 _ 10 _ (10^6)` - USDC has 6 decimals_                                                                                                                                                                                                                                                                                                                                                                           |
| inAmountPerCycle | `u64`         | Input mint amount to sell each time.<br/>_For e.g. if you are trying to buy SOL using 100 USDC every day over 10 days, `inAmountPerCycle` should be `100 _ (10^6)`\*                                                                                                                                                                                                                                                                                                                                                                                          |
| cycleFrequency   | `i64`         | The number of seconds between each periodic buys. For e.g. if you are trying to DCA on a daily basis, `cycleFrequency` should be 60 _ 60 _ 24 = 86,400                                                                                                                                                                                                                                                                                                                                                                                                        |
| minOutAmount     | `Option<u64>` | This is an optional field. Following the examples above, let's say you only want to buy SOL if SOL is below SOL-USDC $20, that means for each cycle, with every 100 USDC, you want to receive a minimum of `100 / 20 = 5 SOL`. You can then pass `5 * LAMPORTS_PER_SOL` as argument here. This ensures that you receive > 5 SOL for each order.                                                                                                                                                                                                               |
| maxOutAmount     | `Option<u64>` | This is just the inverse scenario of `minOutAmount`. While `maxOutAmount` is a little counter intuitive, it can be used by advanced traders / investors who believe an asset is at risk of further decline in prices if it goes beyond a certain threshold. Say in the case of output mint being a stablecoin, if the stablecoin drops to $0.5, you will get more buying into it, but that may not necessary be a good thing since the risk of a stablecoin going to $0 is very real if it could depeg to $0.5. This is where `maxOutAmount` could be useful. |
| startAt          | i64           | Unix timestamp in seconds of when you would like DCA to start. Pass `0` if you want to start immediately or pass a future time as a unix timestamp in seconds                                                                                                                                                                                                                                                                                                                                                                                                 |

**Context Accounts needed:**

| Accounts               | Description                                                                                                                                                                                                                                                            | isSigner? | isWritable? |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| dca                    | You will need to derive a DCA PDA here. The 4 buffers used to generate the PDA are seed -> 'dca', user public key, input token public key, output token public key and a uid (use a unix timestamp). See [code example](/docs/dca/integration#getting-a-dca-pda) below | false     | true        |
| user                   | This is the user's pubkey. Needs to be a signer of the transaction.                                                                                                                                                                                                    | true      | false       |
| payer                  | This is the payer's pubkey. Needs to be a signer of the transaction. Pays for the rent to open token accounts needed as well as user's DCA (PDA) account. This can be the same as user.                                                                                | true      | true        |
| inputMint              | Token to sell                                                                                                                                                                                                                                                          | false     | false       |
| outputMint             | Token to buy                                                                                                                                                                                                                                                           | false     | false       |
| userAta                | User's token account holding the token to sell. Does not necessarily need to be a associated token account. Will transfer inputMint tokens from this account to DCA PDA's inputMint ATA                                                                                | false     | true        |
| inAta                  | The associated token account's address of DCA PDA for inputMint. Example: `getAssociatedTokenAddressSync(inputMint, dcaPubKey, true)` from `@solana/spl-token` library                                                                                                 | false     | true        |
| outAta                 | The associated token account's address of DCA PDA for outputMint. Example: `getAssociatedTokenAddressSync(outputMint, dcaPubKey, true)` from `@solana/spl-token` library                                                                                               | false     | true        |
| systemProgram          | The usual `new PublicKey("11111111111111111111111111111111")`                                                                                                                                                                                                          | false     | false       |
| tokenProgram           | `new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');` DCA has not been tested to work with Token 2022 yet                                                                                                                                                    | false     | false       |
| associatedTokenProgram | `new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');`                                                                                                                                                                                                       | false     | false       |
| eventAuthority         | `new PublicKey('Cspp27eGUDMXxPEdhmEXFVRn6Lt1L7xJyALF3nmnWoBj')` This is DCA Program's event authority for Anchor `0.28.0`'s event CPI feature.                                                                                                                         | false     | false       |
| program                | The DCA program itself `new PublicKey('DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M')`                                                                                                                                                                                 | false     | false       |

#### Getting a DCA PDA

```js
const [dca] = await PublicKey.findProgramAddressSync(
  [
    Buffer.from("dca"),
    userPubKey.toBuffer(),
    inTokenPubKey.toBuffer(),
    outTokenPubKey.toBuffer(),
    new BN(parseInt((Date.now() / 1000).toString())).toArrayLike(
      Buffer,
      "le",
      8
    ),
  ],
  new PublicKey("DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M")
);
```

Phew! That's all that is necessary to construct the instruction. Next, you will need to sign and send the transaction!

Here's what a successful transaction to create a [DCA account looks like](https://explorer.solana.com/tx/24kSsH2uLnjSEsYp1mZ6ZmCeGZ8KmYFMDrNJs3nbU6SVH9jwYfcEA6oeRf72CxmzAuUZwFwkyNYvX8ABFc6ABAtv).
### 2. Cancelling a DCA

If you decide to stop your DCA program, you can close the DCA account. Closing the DCA account also returns any leftover tokens to the owner of the DCA account.

Similar to opening a DCA account, you will need to send a transaction containing an instruction to `close_dca`.

Closing a DCA is relatively simple. There are no arguments needed. The accounts necessary are

**Accounts needed:**

| Accounts               | Description                                                                                                                                                              | isSigner? | isWritable? |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| user                   | This is the user's account that owns the DCA Account. This account will also be the signer and payer of the transaction                                                  | true     | true       |
| dca                    | The DCA account you want to close                                                                                                                                        | false     | true       |
| inputMint              | Token to sell                                                                                                                                                            | false     | false       |
| outputMint             | Token to buy                                                                                                                                                             | false     | false       |
| inAta                  | The associated token account's address of DCA PDA for inputMint. Example: `getAssociatedTokenAddressSync(inputMint, dcaPubKey, true)` from `@solana/spl-token` library   | false     | true       |
| outAta                 | The associated token account's address of DCA PDA for outputMint. Example: `getAssociatedTokenAddressSync(outputMint, dcaPubKey, true)` from `@solana/spl-token` library | false     | true       |
| userInAta              | User's token account for input_mint. If not initialized, will initialize.                                                                                                | false     | true       |
| userOutAta             | User's token account for output_mint. If not initialized, will initialize.                                                                                               | false     | true       |
| systemProgram          | The usual `new PublicKey("11111111111111111111111111111111")`                                                                                                            | false     | false       |
| tokenProgram           | `new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');` DCA has not been tested to work with Token 2022 yet                                                      | false     | false       |
| associatedTokenProgram | `new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');`                                                                                                         | false     | false       |
| eventAuthority         | `new PublicKey('Cspp27eGUDMXxPEdhmEXFVRn6Lt1L7xJyALF3nmnWoBj')` This is DCA Program's event authority for Anchor `0.28.0`'s event CPI feature.                           | false     | false       |
| program                | The DCA program itself `new PublicKey('DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M')`                                                                                   | false     | false       |
