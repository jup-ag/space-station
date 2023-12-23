---
sidebar_label: Adding Fees
description: Adding your own platform fee to Jupiter swap
---
# Adding Your Own Platform Fee To Jupiter Swap
![cat_flying](./cat_flying_money.png)

There are no protocol fees on Jupiter, but integrators can introduce a platform fee on swaps. The platform fee is provided in basis points, e.g. **20 bps** for **0.2%** of the token output.

If a platform fee is set, Jupiter will take 2.5% of the platform fee charged by the integrators.

We are using the [Referral Program](https://github.com/TeamRaccoons/referral) to power our platform fee. You can check out how the [Referral Program](/docs/additional-topics/referral-program) works.

## Usage

### Jupiter API

#### 1. Obtain a referral account

Go to the [referral dashboard](https://referral.jup.ag/dashboard) to create your own referral account. After creating your own referral account, remember to look up `Referral Key` on the page, that is your referral account public key.

#### 2. Set your referral fee

To set your referral fee with the Jupiter API, you can just add in the `platformFeeBps` parameter to the `/quote` endpoint:

[# 5. Get the route for a swap](/docs/apis/swap-api#5-get-the-route-for-a-swap)

```js
// Swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const quoteResponse = await (
  await fetch('https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50\
&platformFeeBps=20' // 20 BPS
  )
).json();
// console.log({ quoteResponse })
```

#### 3. Set your fee token account

On the `/swap` endpoint, remember to add your `feeAccount` parameter.

[# 6. Get the serialized transactions to perform the swap](/docs/apis/swap-api#6-get-the-serialized-transactions-to-perform-the-swap)

```js
// get the feeAccount.
const [feeAccount] = await PublicKey.findProgramAddressSync(
  [
    Buffer.from("referral_ata"),
    referralAccountPubkey.toBuffer(), // your referral account public key
    mint.toBuffer(), // the token mint, output mint for ExactIn, input mint for ExactOut.
  ],
  new PublicKey("REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3") // the Referral Program
);

// get serialized transactions for the swap
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      // auto wrap and unwrap SOL. default is true
      wrapAndUnwrapSol: true,
      feeAccount,
    })
  })
).json();
```

:::note
The fee token account should be the same mint as your output mint on the swap for ExactIn. For ExactOut, the fee is being taken as the same mint as the input mint. Also, make sure that the fee token account has been created. You can create the fee token account on the referral dashboard.
:::

## Referral Program

For more information on how the Referral Program works, check it out [here](/docs/additional-topics/referral-program).

:::note
The Jupiter Swap's project account for the Referral Program is `45ruCyfdRkWpRNGEqWzjCiXRHkZs8WXCLQ67Pnpye7Hp`.
:::
