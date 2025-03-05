---
sidebar_label: "View Open Orders"
description: "Use the Jupiter Trigger API to view open orders."
title: "View Open Orders"
---

<head>
    <title>View Open Orders</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Trigger API's open orders endpoint is as such.

```
https://api.jup.ag/trigger/v1/openOrders
```

This is a GET request to `/openOrders` endpoint. Underneath it, we are proxying the [getProgramAccounts](https://solana.com/docs/rpc/http/getprogramaccounts) RPC method and returning all order accounts associated to the specified wallet account.

:::warning Change of Response Format
The `/openOrders` endpoint does not provide the same data format as `orderHistory` endpoint.

We have added a query parameter `responseV2=1` to the endpoint to return the data in the same format as `orderHistory` endpoint. However, the `/openOrders` endpoint is not paginated.

The current format will be deprecated in the future.
:::

## Open Orders

```jsx
const openOrdersResponse = await (
    await fetch(
        'https://api.jup.ag/trigger/v1/openOrders?wallet=ReplaceWithWallet'
    )
).json();
```

:::tip
You can optionally pass in the input and output token mint addresses to filter the open orders.
:::

## Open Orders Response

**For the `responseV2=1` format**

```json
{
  "orders": [
    {
      "userPubkey": "8dWvkXwceAdbam4qUGWJkQ6G7RQ2cmatRNaNcXXn5hM",
      "orderKey": "3g2jF8txqXPp6GUStwtXMrWydeYWxU4qoBA8UDLoTnK7",
      "inputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outputMint": "So11111111111111111111111111111111111111112",
      "makingAmount": "5",
      "takingAmount": "0.05",
      "remainingMakingAmount": "5",
      "remainingTakingAmount": "0.05",
      "rawMakingAmount": "5000000",
      "rawTakingAmount": "50000000",
      "rawRemainingMakingAmount": "5000000",
      "rawRemainingTakingAmount": "50000000",
      "expiredAt": null,
      "createdAt": "2025-03-05T03:33:38Z",
      "updatedAt": "2025-03-05T03:33:38Z",
      "status": "Open",
      "openTx": "37moUfmViwVwAsvgvszUd8wvEbShNyjtD9YvXzt8afu7xG4cRYeALNTNUZskNHWwZ3aU1juSiTAr7JAfaoXbeiey",
      "closeTx": "",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": []
    }
  ],
  "totalPages": 1,
  "page": 1,
  "hasMoreData": false
}
```

**For the current format (will be deprecated in the future)**

```json
[
  {
    "account": {
      "borrowMakingAmount": "0",
      "createdAt": "2025-03-05T09:30:08.000Z",
      "expiredAt": null,
      "makingAmount": "100000000",
      "oriMakingAmount": "100000000",
      "oriTakingAmount": "3000000000",
      "takingAmount": "3000000000",
      "uniqueId": "16841849496248181344",
      "updatedAt": "1741167008",
      "feeAccount": "...",
      "inputMint": "So11111111111111111111111111111111111111112",
      "inputMintReserve": "...",
      "inputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "maker": "...",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "feeBps": 10,
      "bump": 254,
      "slippageBps": 0
    },
    "publicKey": "..."
  },
  {
    "account": {
      "borrowMakingAmount": "0",
      "createdAt": "2025-03-05T09:30:50.000Z",
      "expiredAt": null,
      "makingAmount": "100000000",
      "oriMakingAmount": "100000000",
      "oriTakingAmount": "3000000000",
      "takingAmount": "3000000000",
      "uniqueId": "4580366755623904293",
      "updatedAt": "1741167050",
      "feeAccount": "...",
      "inputMint": "So11111111111111111111111111111111111111112",
      "inputMintReserve": "...",
      "inputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "maker": "...",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "feeBps": 10,
      "bump": 254,
      "slippageBps": 0
    },
    "publicKey": "..."
  }
]
```
