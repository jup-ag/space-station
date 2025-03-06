---
description: "Use the Jupiter Recurring API to create orders."
title: "Create Order"
---

<head>
    <title>Create Order</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Recurring API's create order endpoint is as such.

```
https://api.jup.ag/recurring/v1/createOrder
```

## Create Order

This is a POST request to `/createOrder` endpoint, where you pass in the necessary parameters and our backend will create the transaction for you to sign and send to the network seamlessly.

:::info
The Recurring API supports both Recurring and Smart Recurring strategies.

The `createOrder` endpoint is used to create both types of orders based on the parameters you pass in.
:::

### Recurring Order

Pass in the **`recurring`** object in the `params` field.

```jsx
const createOrderResponse = await (
    await fetch('https://api.jup.ag/recurring/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: wallet.publicKey.toBase58(),
            inputMint: "So11111111111111111111111111111111111111112",
            outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            params: {
                recurring: {
                    inAmount: 200000000, // Raw amount of input token to deposit now (before decimals)
                    inAmountPerCycle: 100000000, // Raw amount of input token to deposit per cycle (before decimals)
                    cycleFrequency: 300, // Cycle frequency in unix seconds
                    minPrice: null, // Minimum price or null
                    maxPrice: null, // Maximum price or null
                    startAt: null, // Unix timestamp of start time or null - null starts immediately
                },
            },
        }),
    })
).json();
```

### Smart Recurring Order

Pass in the **`smartRecurring`** object in the `params` field.

```jsx
const createSmartOrderResponse = await (
    await fetch('https://api.jup.ag/recurring/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: wallet.publicKey.toBase58(),
            inputMint: "So11111111111111111111111111111111111111112",
            outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            params: {
                smartRecurring: {
                    depositAmount: 200000000, // Raw amount of input token to deposit now (before decimals)
                    incrementUsdcValue: 1, // USDC value to increment per cycle
                    orderInterval: 300, // Cycle frequency in unix seconds
                    startAt: null, // Unix timestamp of start time or null - null starts immediately
                },
            },
        }),
    })
).json();
```

Now that you have the order transaction, you can sign and send to the network. There are 2 methods, after signing the transaction, you can either send it to the network yourself or use the Recurring API's `/execute` endpoint to do it for you.

[Let's execute the order](/docs/recurring-api/execute-order)!

## Create Order Response

The response from the `createOrder` endpoint is as follows.

:::info
Do note that both recurring and smart recurring orders will return the same response structure.
:::

```json
{
  "id": "1d1f3586-eb72-4337-8c7e-1bbb9870ee4b",
  "tx": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAgNRL7cu4ZNuxh1wI9W7GVURyr3A06dH348HDpIQzcAJ4o8bJlCl2Wc6MzpcvkV0INcJ7u23GV89soNJ/8i5QPLuk+NOvCjbAbTzOyNoSWuhO5fYq+hNGrGQ2JdDy82Gw0bv28tkzlck1LrvR2ACB/vAL7AIssgVYeCOBbHfYskycnT/icRrhr4nbjk0DzDqAkM4ntju8NXHrILEpE0TUKNKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAGm4hX/quBhPtof2NGGMA12sQ53BrrO1WYoPAAAAAAAQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FmwdagGY3nKb+NwN/8MKNVUpuTWNtnoUYz+brrpP1I2/rUn1F1kDj7BX2FdWw4jpUqWuD8Lggv3BjXyQ0rGQMwExvp6877brTo9ZfNqq8l0MbG75MLS9uDkfKYCA0UvXWG7njQ5EK9zaEM059+IQanso4m+YzpvFchLCtBxOCdR5QcGAAUCGSwAAAYACQNADQMAAAAAAAkGAAMABwUIAQEFAgADDAIAAAAAwusLAAAAAAgBAwERCw0EAAAHDAMBAgUICQoLK453K22iNAuxgF7IZwAAAAAAwusLAAAAAADh9QUAAAAALAEAAAAAAAAAAAAIBAMAAAABCQ=="
}
```