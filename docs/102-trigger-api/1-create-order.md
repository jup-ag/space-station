---
sidebar_label: "Create Order"
description: "Use the Jupiter Trigger API to create orders."
title: "Create Order"
---

<head>
    <title>Create Order</title>
    <meta name="twitter:card" content="summary" />
</head>

In this guide, we will walkthrough integrating our Trigger Order program through our Trigger API. Trigger Order can be useful if you are building a trading bot, integrating into existing apps or for buying into tokens.

Before you get started, you might want to understand how our Trigger Order product works in this guide and get yourself set up in [Get Started](../1-get-started.md) guide with the necessary libraries and RPC connection.

:::warning New Paths
 Please use the `/trigger/v1` path as `/limit/v2` path is being deprecated in favor of the new path.

Currently, the `/limit/v2` path is still available via redirect, but if you have redirect disabled, you will need to update your API calls to use the `/trigger/v1` path immediately.
:::

## Let’s Get Started

The root URL of the Trigger API is as such.

```markdown
https://api.jup.ag/trigger/v1
```

## Create Order

This is a POST request to `/createOrder` endpoint, where you pass in the necessary parameters and our backend will create the transaction for you to sign and send to the network seamlessly.

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
    await fetch('https://api.jup.ag/trigger/v1/createOrder', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
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

Now that you have the order transaction, you can sign and send to the network. There are 2 methods, after signing the transaction, you can either send it to the network yourself or use the Trigger API's `/execute` endpoint to do it for you.

[Let's execute the order](/docs/trigger-api/execute-order)

## Create Order Response

**Success Example Response**

```json
{
  "order": "CFG9Bmppz7eZbna96UizACJPYT3UgVgps3KkMNNo6P4k",
  "tx": "AQAAAAAAAAAAAAAAAAAAAAAA......AgAKCAkBAQsPAAADBAEMCwcKCQkIBg0LIoVuSq9wn/WfdskdmHlfUulAQg8AAAAAAICpAwAAAAAAAAAJAwEAAAEJAA==",
  "lastValidBlockHeight": 301627959
}
```

**Failed Example Response**

```json
{
  "error": "invalid create order request",
  "cause": "input mint making amount must be at least 100 USD, received: 50",
  "code": 400
}
```
