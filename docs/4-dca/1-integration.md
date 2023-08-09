---
sidebar_label: Integrate DCA
description: Integrate DCA
---
# Integrating DCA (language agnostic)

Jupiter DCA provides users with the simplest way to place DCA orders on Solana and receive tokens directly in their wallet as each order is filled!

This page will serve as a general guide on integrating DCA whether you are building a bot for yourself or to integrate with existing (d)apps regardless of programming language used. If you are trying to build a DCA bot in Typescript / Javascript, look at [DCA SDK](/docs/dca/dca-sdk)

## Address
DCA Program (mainnet-beta): `DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M`

## Big Picture

There are 2 key instructions that can be executed
- Creating a DCA
- Cancelling (and receiving excess tokens) an existing DCA


### Instructions
**1. Create a DCA Account**

A DCA Account is a PDA account. In order to start dollar cost averaging, you will need to construct and send a Transaction containing an Instruction to open this DCA account. *(if you are not familiar with constructing a transaction on Solana, we suggest you look at using [DCA SDK](/docs/dca/dca-sdk) with more thorough code examples)*

**Arguments needed (in this order):**

|Arguments|Type|Description|
|---|---|---|
|applicationIdx|u64|A unix timestamp in seconds|
|inAmount|u64|Total token amount to DCA. For e.g. if you are trying to buy 1 SOL every day over 10 days, `inAmount` should be 10|
|inAmountPerCycle|u64|Total token amount to DCA. For e.g. if you are trying to buy 1 SOL every day over 10 days, `inAmountPerCycle` should be 1|
|cycleFrequency|i64|The number of seconds between each periodic buys. For e.g. if you are trying to buy 1 SOL every day over 10 days, `cycleFrequency` should be 60 * 60 * 24 = 86,400|
|minPrice*|u64|Let's say you're trying to do a "reverse" DCA ie you want to take profit. Say you bought SOL at $10 and now SOL is at $300 🚀 and you only want to DCA sell SOL for USDC above 300 USDC, you can use this argument. Just pass in `30000` as a u64 equivalent (`BN` in the case of JS). If you can pass in `0` if you do not care about the execution price. Note: We will still try to execute your order based on `cycleFrequency` but if it does not meet the `minPrice` criteria, it will just keep retrying until the price condition is met|
|maxPrice*|u64|This is just the inverse scenario of `minPrice` ie you want to buy below a maximum price. Remember if you are try to buy SOL below 30 SOL/USDC, pass in 30 * 100 = 3000|
|startAt|i64|Unix timestamp in seconds of when you would like DCA to start. Pass `0` if you want to start immediately or pass a future time as a unix timestamp in seconds|
|closeWsolInAta|bool|If you are trying to sell SOL for something else (you are depositing SOL into your DCA account), the best practise is to first wrap SOL to a WSOL token account. If you pass `true`, it will auto close the WSOL token account and refund the rent to your account, otherwise, if you pass `false`, your wSOL token account will just remain open and you can close it manually|

*Currently, `minPrice` and `maxPrice` are not enforced in the program but by off-chain keepers.

**Accounts needed:**

|Accounts|Description|
|---|---|
|dca|You will need to derive a DCA PDA here. The 4 buffers used to generate the PDA are seed -> 'dca', user public key, input token public key, output token public key and a uid (use a unix timestamp). See [code example](/docs/dca/integration#getting-a-dca-pda) below|
|user|This is the user's pubkey. Needs to be a signer of the transaction. Is also the payer to open token accounts needed to open the input and output token account for DCA PDA account|
|inputMint|Token to sell|
|outputMint|Token to buy|
|userAta|User's token account holding the token to sell. Does not necessarily need to be a associated token account. Will transfer inputMint tokens from this account to DCA PDA's inputMint ATA|
|inAta|The associated token account's address of DCA PDA for inputMint. Example: `getAssociatedTokenAddressSync(inputMint, dcaPubKey, true)` from `@solana/spl-token` library|
|outAta|The associated token account's address of DCA PDA for outputMint. Example: `getAssociatedTokenAddressSync(outputMint, dcaPubKey, true)` from `@solana/spl-token` library|
|systemProgram|The usual `new PublicKey("11111111111111111111111111111111")`|
|tokenProgram|`new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');` DCA has not been tested to work with Token 2022 yet|
|associatedTokenProgram|`new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');`|
|eventAuthority|`new PublicKey('Cspp27eGUDMXxPEdhmEXFVRn6Lt1L7xJyALF3nmnWoBj')` This is DCA Program's event authority for Anchor `0.28.0`'s event CPI feature.|
|program|The DCA program itself `new PublicKey('DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M')`|



#### Getting a DCA PDA
```js
const [dcaPubKey] = await PublicKey.findProgramAddressSync(
  [Buffer.from('dca'), userPubKey.toBuffer(), inTokenPubKey.toBuffer(), outTokenPubKey.toBuffer(), new BN(parseInt((Date.now() / 1000).toString())).toArrayLike(Buffer, 'le', 8)],
  new PublicKey('DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M'),
);
```

Phew! That's all that is necessary to contruct the instruction. Next, you will need to sign and send the transaction!

Here's what a success transaction to create a DCA account look like [see on Solana Explorer](https://explorer.solana.com/tx/24kSsH2uLnjSEsYp1mZ6ZmCeGZ8KmYFMDrNJs3nbU6SVH9jwYfcEA6oeRf72CxmzAuUZwFwkyNYvX8ABFc6ABAtv)
