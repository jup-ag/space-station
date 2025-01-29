---
sidebar_label: "Limit Order API"
description: "Use the Jupiter Limit Order API to create/cancel orders or view open/historical orders."
title: "Limit Order API"
---

<head>
    <title>Limit Order API</title>
    <meta name="twitter:card" content="summary" />
</head>

In this guide, we will walkthrough integrating our Limit Order (LO) program through our Limit Order API. LO can be useful if you are building a trading bot, integrating into existing apps or for buying into tokens.

Before you get started, you might want to understand how our LO product works in this guide and get yourself set up in [Get Started](../1-get-started.md) guide with the necessary libraries and RPC connection.

## Let’s Get Started

The root URL of the LO API is as such.

```markdown
https://api.jup.ag/limit/v2
```

## Create Limit Order Transaction

This is a POST request to `/createOrder` endpoint. Similar to Swap API, you pass in the necessary parameters and our backend will create the Limit Order transaction for you to sign and send to the network seamlessly.

:::tip Optional Parameters
Do note that there are a few optional parameters that you can use, such as:

- Setting an expiry date on the order.
- Adding fees through our referral program, please ensure that your `referralAccount` has the necessary `referralTokenAccount`s of the output mint of the limit order for it to work, you can learn more about creating them dynamically in the [Add Fees To Swap](../100-swap-api/4-add-fees-to-swap.md) guide.

This is another parameter that is optional but it is important to check if you support all tokens.

- Specifying the token program if input or output mint is a Token2022 token.
:::

#### Define the mints and programs of these mints.

```jsx
const inputMint = new PublicKey("So11111111111111111111111111111111111111112");
const outputMint = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

const inputMintTokenProgram = (await connection.getAccountInfo(inputMint)).owner.toString();
const outputMintTokenProgram = (await connection.getAccountInfo(outputMint)).owner.toString();

console.log(inputMintTokenProgram);
console.log(outputMintTokenProgram);
```

#### Create a POST request to the `/createOrder` endpoint.

```jsx
const createOrderResponse = await (
    await fetch('https://api.jup.ag/limit/v2/createOrder', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // 'x-api-key': '' // enter api key here
        },
        body: JSON.stringify({
            inputMint: inputMint.toString(),
            outputMint: outputMint.toString(),
            maker: "5dMXLJ8GYQxcHe2fjpttVkEpRrxcajRXZqJHCiCbWS4H",
            payer: "5dMXLJ8GYQxcHe2fjpttVkEpRrxcajRXZqJHCiCbWS4H",
            params: {
                makingAmount: "1000000",
                takingAmount: "300000",
                // expiredAt: "", // In unix seconds (e.g. Date.now()/1_000) or optional
                // feeBps: "", // Requires referral account or optional
            },
            computeUnitPrice: "auto",
            // referral: "", // Optional but if specified it is the referral token account of the output mint
            inputTokenProgram: inputMintTokenProgram, // Default to token program if empty or specify e.g. token2022 program
            outputTokenProgram: outputMintTokenProgram, // same as above
            // wrapAndUnwrapSol: true, // Default true or optional
        })
    })
).json();

console.log(createOrderResponse);
```

From the above example, you should see this sample response.

```json
{
  order: 'CFG9Bmppz7eZbna96UizACJPYT3UgVgps3KkMNNo6P4k',
  tx: 'AQAAAAAAAAAAAAAAAAAAAAAA......AgAKCAkBAQsPAAADBAEMCwcKCQkIBg0LIoVuSq9wn/WfdskdmHlfUulAQg8AAAAAAICpAwAAAAAAAAAJAwEAAAEJAA=='
}
```

## Send Limit Order Transaction

This step is the same as what we do in Swap API, you can read more about how to reformat the serialized create order response, sign and send to the network.

[We recommend you to read that walkthrough to understand better.](../100-swap-api/3-send-swap-transaction.md)

```jsx
const transactionBase64 = createOrderResponse.tx
const transaction = VersionedTransaction.deserialize(Buffer.from(transactionBase64, 'base64'));

transaction.sign([wallet.payer]);

const transactionBinary = transaction.serialize();

const signature = await connection.sendRawTransaction(transactionBinary, {
    maxRetries: 2,
    skipPreflight: true
});

const confirmation = await connection.confirmTransaction({ signature }, "finalized");

if (confirmation.value.err) {
    throw new Error(`Transaction failed: ${JSON.stringify(confirmation.value.err)}\n\nhttps://solscan.io/tx/${signature}/`);
} else console.log(`Transaction successful: https://solscan.io/tx/${signature}/`);
```

## View Open Orders

This is a GET request to `/openOrders` endpoint. Underneath it, we are proxying the [getProgramAccounts](https://solana.com/docs/rpc/http/getprogramaccounts) RPC method and returning all order accounts associated to the specified wallet account.

:::tip
You can optionally pass in the input and output token mint addresses to filter the open orders.
:::

```jsx
const openOrderResponse = await (
    await fetch(
        'https://api.jup.ag/limit/v2/openOrders?wallet=ReplaceWithWallet'
    )
).json();
  
console.log(openOrderResponse);
```

An example response is as such.

```json
[
  {
    account: {
      borrowMakingAmount: '0',
      createdAt: '2024-11-20T07:40:56.000Z',
      expiredAt: null,
      makingAmount: '1000000',
      oriMakingAmount: '1000000',
      oriTakingAmount: '240000',
      takingAmount: '240000',
      uniqueId: '18070363443762671260',
      updatedAt: '1732088456',
      feeAccount: 'APWoLnZc8g8iXLA8qLdHJ4w42ybRrq2Vm8UGQhH7TJ3r',
      inputMint: 'So11111111111111111111111111111111111111112',
      inputMintReserve: 'HGeoc1bAvfSCWjMZi3brwv9t76J9s8GBWAL1a9SQ4qgk',
      inputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      maker: ...,
      outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      outputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      feeBps: 10,
      bump: 255
    },
    publicKey: AccountOrderPublicKey
  },
  {
    account: {
      borrowMakingAmount: '0',
      createdAt: '2024-11-20T07:48:29.000Z',
      expiredAt: null,
      makingAmount: '1000000',
      oriMakingAmount: '1000000',
      oriTakingAmount: '240000',
      takingAmount: '240000',
      uniqueId: '17052427428481482637',
      updatedAt: '1732088909',
      feeAccount: 'APWoLnZc8g8iXLA8qLdHJ4w42ybRrq2Vm8UGQhH7TJ3r',
      inputMint: 'So11111111111111111111111111111111111111112',
      inputMintReserve: '6oQUyifngb4tgZ1gEmirw4keFB1LeEE2tkoVEj3tu7Ee',
      inputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      maker: ...,
      outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      outputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      feeBps: 10,
      bump: 254
    },
    publicKey: AccountOrderPublicKey
  }
]
```

## Cancel Limit Order Transaction

This is a POST request to `/cancelOrder` endpoint. This will also return with the serialized transaction to be signed by the order account owner and then sent to the network. You will need to pass in the exact public keys of your open orders to cancel them, so you might need to use the `/openOrders` endpoint to get the public keys or other methods if you have a user interface.

:::tip
If no orders are specified, the API would return the serialized transactions to cancel **ALL** open orders, batched in groups of 5 orders.
:::

#### Fetch open orders data to get pubkeys

```jsx
const openOrderResponse = await (
    await fetch(
        'https://api.jup.ag/limit/v2/openOrders?wallet=ReplaceWithWallet'
    )
).json();
```

#### Choose what orders to cancel
If you have a user interface, you will need to have the user choose the order to cancel and then pass its pubkey in here. For example sake, we will just slice the array of pubkeys to take the first in the array.

```jsx
// To CANCEL ALL orders, pass in the entire array of public keys or do not pass in any
const publicKeys = openOrderResponse.map(item => item.publicKey);

// To CANCEL SPECIFIC orders, select specific public keys but keep it as an array to be passed in
const publicKeyToCancelArray = publicKeys.slice(0, 1);

console.log(publicKeyToCancelArray);
```

#### Build cancel order transaction(s)

```jsx
const cancelOrderResponse = await (
    await fetch('https://api.jup.ag/limit/v2/cancelOrders', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // 'x-api-key': '' // enter api key here
        },
        body: JSON.stringify({
            maker: "5dMXLJ8GYQxcHe2fjpttVkEpRrxcajRXZqJHCiCbWS4H",
            computeUnitPrice: "auto",
            orders: publicKeyToCancelArray, // a list of order accounts, if non are passed in, it will attempt to cancel ALL
        })
    })
).json();
    
console.log(cancelOrderResponse);
```

An example response is as such. Then take the serialized transaction response and follow the steps to [sign and send to the network](#send-limit-order-transaction).

```json
// Open orders response
[
  {
    account: {
      borrowMakingAmount: '0',
      createdAt: '2024-11-20T10:32:20.000Z',
      expiredAt: null,
      makingAmount: '1000000',
      oriMakingAmount: '1000000',
      oriTakingAmount: '300000',
      takingAmount: '300000',
      uniqueId: '12459093665923607188',
      updatedAt: '1732098740',
      feeAccount: 'APWoLnZc8g8iXLA8qLdHJ4w42ybRrq2Vm8UGQhH7TJ3r',
      inputMint: 'So11111111111111111111111111111111111111112',
      inputMintReserve: 'HbaSeXEBMDsdHz7GtNoMjRZVN8nZ9CAdjhgBAngBhZhX',
      inputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      maker: Wallet,
      outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      outputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      feeBps: 10,
      bump: 255
    },
    publicKey: AccountOrderPublicKey0
  },
  {
    account: {
      borrowMakingAmount: '0',
      createdAt: '2024-11-20T10:37:36.000Z',
      expiredAt: null,
      makingAmount: '1000000',
      oriMakingAmount: '1000000',
      oriTakingAmount: '300000',
      takingAmount: '300000',
      uniqueId: '11785358119410645298',
      updatedAt: '1732099056',
      feeAccount: 'APWoLnZc8g8iXLA8qLdHJ4w42ybRrq2Vm8UGQhH7TJ3r',
      inputMint: 'So11111111111111111111111111111111111111112',
      inputMintReserve: 'ARnUVsGURQMvkmQ684Uko8U2pFhC4dXjw8fNZt7fLQ6G',
      inputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      maker: Wallet,
      outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      outputTokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      feeBps: 10,
      bump: 255
    },
    publicKey: AccountOrderPublicKey1
  }
]

// Console log publicKeys
[
  'AccountOrderPublicKey0',
  'AccountOrderPublicKey1'
]

// Console log publicKeyToCancelArray
[ 'AccountOrderPublicKey0' ]

// Console log cancelOrderResponse
{
  txs: [
    'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA......FWPqnIQMDAAkDvRcoAAAAAAADAAUCY10AAAQJAAABAgQFBgcECF+B7fAIMd+EAA=='
  ]
}
```

## View Order History

This is a GET request to `/orderHistory` endpoint. The response is paginated for every 10 orders and you can view different pages using the `page` parameter. The `hasMoreData` boolean will indicate if you have more data in the next page.

```jsx
const orderHistoryResponse = await (
    await fetch(
        'https://api.jup.ag/limit/v2/orderHistory?wallet=ReplaceWithWallet&page=1'
    )
).json();
  
console.log(orderHistoryResponse);
```

An example response is as such.

```json
{
  orders: [
    {
      userPubkey: 'Wallet',
      orderKey: 'AccountOrderPublicKey',
      inputMint: 'So11111111111111111111111111111111111111112',
      outputMint: '6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump',
      makingAmount: '3.599980699',
      takingAmount: '119999.356633',
      remainingMakingAmount: '0',
      remainingTakingAmount: '0',
      expiredAt: null,
      createdAt: '2024-07-18T12:01:02Z',
      updatedAt: '2024-07-21T03:07:19Z',
      status: 'Completed',
      openTx: 'OpenTransaction',
      closeTx: 'CloseTransaction',
      programVersion: 'j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X',
      trades: [Array]
    },
		... 8 other in between ...
    {
      userPubkey: 'Wallet',
      orderKey: 'AccountOrderPublicKey',
      inputMint: 'EKEWAk7hfnwfR8DBb1cTayPPambqyC7pwNiYkaYQKQHp',
      outputMint: 'So11111111111111111111111111111111111111112',
      makingAmount: '65007.744521',
      takingAmount: '25.650235771',
      remainingMakingAmount: '65007.744521',
      remainingTakingAmount: '25.650235771',
      expiredAt: null,
      createdAt: '2024-06-30T23:23:51Z',
      updatedAt: '2024-07-22T07:31:27Z',
      status: 'Cancelled',
      openTx: 'OpenTransaction',
      closeTx: 'CloseTransaction',
      programVersion: 'j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X',
      trades: []
    }
  ],
  hasMoreData: true,
  page: 1
}
```

## Best Practices

The Limit Order program has some caveats.

| Item | Recommendation |
| --- | --- |
| The LO program will accept any value to create an order. | On jup.ag, our frontend enforces a minimum of 5 USD per order to be created, this will ensure our keepers can accommodate for no loss in transaction fees coverage. However, programatically, if you do not enforce this, the user can still create an order. |
| The LO program does not check the price or rate of the order, and the keeper will execute as instructed. | On our frontend, when user attempts to set the rate to buy above market price, we provide warnings and disable the execution if above 5%.<br /><br />If the order is created with such rates, the keeper will execute as instructed. For example, if user sets to Sell 1000 USDC to Buy 1 SOL at the rate of 1000 SOL/USDC, the keeper will execute as instructed and the additional funds will be lost. |
| Tokens with transfer tax extension are disabled. | Our frontend informs the user if the token has transfer tax. |