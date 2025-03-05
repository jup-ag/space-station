---
sidebar_label: "View Order History"
description: "Use the Jupiter Trigger API to view order history."
title: "View Order History"
---

<head>
    <title>View Order History</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Trigger API's order history endpoint is as such.

```
https://api.jup.ag/trigger/v1/orderHistory
```

This is a GET request to `/orderHistory` endpoint. The response is paginated for every 10 orders and you can view different pages using the `page` parameter. The `hasMoreData` boolean will indicate if you have more data in the next page.

## Order History

```jsx
const orderHistoryResponse = await (
    await fetch(
        'https://api.jup.ag/trigger/v1/orderHistory?wallet=ReplaceWithWallet'
    )
).json();
```

## Order History Response

```json
{
  "orders": [
    ...
    {
      "userPubkey": "ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D",
      "orderKey": "3kQp3EsFnQxpW1WuDhSq2xxB3jZzbbfdX43BMd9WZGN3",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
      "makingAmount": "15",
      "takingAmount": "197368.421053",
      "remainingMakingAmount": "0",
      "remainingTakingAmount": "0",
      "rawMakingAmount": "15000000000",
      "rawTakingAmount": "197368421053",
      "rawRemainingMakingAmount": "0",
      "rawRemainingTakingAmount": "0",
      "expiredAt": null,
      "createdAt": "2024-07-03T03:58:21Z",
      "updatedAt": "2024-07-03T19:40:21Z",
      "status": "Completed",
      "openTx": "3HeA6PWGSz5YZ4BzyZoViqKqAmyfUjgqtfvXVxWj6nn6PYH71RDh9rwwsALXaqpgXfxVxYq1skpQn8T58cCBacAd",
      "closeTx": "4ETirAFk1TpUT4X8Qh2cUZRXWKk97ipBEmmpVojJCYyaocJjKrCb7Z5vmhFBnuEEpg62CWLfx17jETdJPihuqGJC",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": [
        {
          "orderKey": "3kQp3EsFnQxpW1WuDhSq2xxB3jZzbbfdX43BMd9WZGN3",
          "keeper": "j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "12",
          "outputAmount": "157894.736842",
          "rawInputAmount": "12000000000",
          "rawOutputAmount": "157894736842",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "157.894736",
          "rawFeeAmount": "157894736",
          "txId": "4ETirAFk1TpUT4X8Qh2cUZRXWKk97ipBEmmpVojJCYyaocJjKrCb7Z5vmhFBnuEEpg62CWLfx17jETdJPihuqGJC",
          "confirmedAt": "2024-07-03T19:40:21Z",
          "action": "Fill",
          "productMeta": null
        },
        {
          "orderKey": "3kQp3EsFnQxpW1WuDhSq2xxB3jZzbbfdX43BMd9WZGN3",
          "keeper": "j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "3",
          "outputAmount": "39473.684211",
          "rawInputAmount": "3000000000",
          "rawOutputAmount": "39473684211",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "39.473684",
          "rawFeeAmount": "39473684",
          "txId": "DA94JvLUHMHwhudHPcg8SZJspphfSg3ynzLLcfiQuqFMWQoFUdSS1FaSJGWHiEDz26gBbztgvbaWpY9xx8MToRv",
          "confirmedAt": "2024-07-03T19:35:09Z",
          "action": "Fill",
          "productMeta": null
        }
      ]
    },
    {
      "userPubkey": "ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D",
      "orderKey": "bVZUzDkwzmAyd6VKtfWsvUUwNeEnc6DZyzPYRVKxaHd",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
      "makingAmount": "15",
      "takingAmount": "197368.421053",
      "remainingMakingAmount": "15",
      "remainingTakingAmount": "197368.421053",
      "rawMakingAmount": "15000000000",
      "rawTakingAmount": "197368421053",
      "rawRemainingMakingAmount": "15000000000",
      "rawRemainingTakingAmount": "197368421053",
      "expiredAt": null,
      "createdAt": "2024-07-02T01:10:41Z",
      "updatedAt": "2024-07-03T03:57:06Z",
      "status": "Cancelled",
      "openTx": "FzLgrjY71a6NM7W5CJ8je4c6CuCKXyETw3XJQHaJVtHTa1zp9DGsrxZMTHKXJD7uvFutNXttEVaajMSJvCxsRSW",
      "closeTx": "5VNaHFKi18GGGbYykS9N1okii4JrmpTRkzRV9yah8f6V4wYqLgM4SBJ1tJX91s4XYo2LgT8TsTiae6HMexye1Lu7",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": []
    },
    ...
  ],
  "totalPages": 4,
  "page": 1,
  "hasMoreData": true
}
```