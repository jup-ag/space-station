---
sidebar_label: "Get Trigger Orders"
description: "Use the Jupiter Trigger API to get trigger orders."
title: "Get Trigger Orders"
---

<head>
    <title>Get Trigger Orders</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Trigger API's get trigger orders endpoint is as such.

```
https://api.jup.ag/trigger/v1/getTriggerOrders
```

This is a GET request to `/getTriggerOrders` endpoint.

The response is paginated for every 10 orders and you can view different pages using the `page` parameter. The `hasMoreData` boolean will indicate if you have more data in the next page.

:::warning Change of Response Format
The `/getTriggerOrders` endpoint does not provide the same data format as `orderHistory` or `openOrders` endpoint.
:::

## Active Orders

To get the active orders, you can pass in the `orderStatus` parameter as `active`.

:::tip
You can optionally pass in the input and output token mint addresses to filter the open orders.
:::

```jsx
const openOrdersResponse = await (
    await fetch(
        'https://api.jup.ag/trigger/v1/getTriggerOrders?user=devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4&orderStatus=active'
    )
).json();
```

## Active Orders Response

```json
{
  "user": "devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4",
  "orderStatus": "active",
  "orders": [
    {
      "userPubkey": "devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4",
      "orderKey": "AqFhgzxT1P8vRxyBHrH1gfCHseiDyWjA7uwe7sddJ3BF",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "makingAmount": "0.05",
      "takingAmount": "100",
      "remainingMakingAmount": "0.05",
      "remainingTakingAmount": "100",
      "rawMakingAmount": "50000000",
      "rawTakingAmount": "100000000",
      "rawRemainingMakingAmount": "50000000",
      "rawRemainingTakingAmount": "100000000",
      "expiredAt": null,
      "createdAt": "2025-03-10T14:40:08Z",
      "updatedAt": "2025-03-10T14:40:08Z",
      "status": "Open",
      "openTx": "SHov1egf8UZtcyrDnjRPy3Ccwtz4xR8UT37FjwyM1KN4LdRFBEfHytaniKqEwtMBknXjRQRDhTGg9SUDtNMbakw",
      "closeTx": "",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": []
    }
  ],
  "totalPages": 1,
  "page": 1
}
```

## Order History

To get the order history, you can pass in the `orderStatus` parameter as `history`.

```jsx
const orderHistoryResponse = await (
    await fetch(
        'https://api.jup.ag/trigger/v1/getTriggerOrders?user=ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D&orderStatus=history'
    )
).json();
```

## Order History Response

```json
{
  "orders": [
    {
      "userPubkey": "ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D",
      "orderKey": "DFbtjb7ZZcgZfgADjRDeLTzChPmt3xM1doMRsyPviTqd",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
      "makingAmount": "3.599980699",
      "takingAmount": "119999.356633",
      "remainingMakingAmount": "0",
      "remainingTakingAmount": "0",
      "rawMakingAmount": "3599980699",
      "rawTakingAmount": "119999356633",
      "rawRemainingMakingAmount": "0",
      "rawRemainingTakingAmount": "0",
      "expiredAt": null,
      "createdAt": "2024-07-18T12:01:02Z",
      "updatedAt": "2024-07-21T03:07:19Z",
      "status": "Completed",
      "openTx": "3oYHmtNqjhGsFirUjKcxZSeSQFb3Ctb484sWivBRSQYTZwHL7Ex9Uwv9fMgGGLghtpfRovSrw1skf6yfxR87e761",
      "closeTx": "NPehrVSwkUQzqBjDY9VeaVDyP8drg2pcRBPsntZgDQiLRSQ8ngGvMt4fcQPPiBGxFAcb3CeJacKnyEABdn5pPvt",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": [
        {
          "orderKey": "DFbtjb7ZZcgZfgADjRDeLTzChPmt3xM1doMRsyPviTqd",
          "keeper": "j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "3.599980699",
          "outputAmount": "119999.356633",
          "rawInputAmount": "3599980699",
          "rawOutputAmount": "119999356633",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "119.999356",
          "rawFeeAmount": "119999356",
          "txId": "NPehrVSwkUQzqBjDY9VeaVDyP8drg2pcRBPsntZgDQiLRSQ8ngGvMt4fcQPPiBGxFAcb3CeJacKnyEABdn5pPvt",
          "confirmedAt": "2024-07-21T03:07:19Z",
          "action": "Fill",
          "productMeta": null
        }
      ]
    },
    {
      "userPubkey": "ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D",
      "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
      "makingAmount": "15",
      "takingAmount": "468750",
      "remainingMakingAmount": "0",
      "remainingTakingAmount": "0",
      "rawMakingAmount": "15000000000",
      "rawTakingAmount": "468750000000",
      "rawRemainingMakingAmount": "0",
      "rawRemainingTakingAmount": "0",
      "expiredAt": null,
      "createdAt": "2024-07-17T13:35:53Z",
      "updatedAt": "2024-07-17T15:37:24Z",
      "status": "Completed",
      "openTx": "3KxqznfpCyzTUEuNWFvYu6hzgH1YieBp4ZqN2fkiievpoC5935gM16y8f92y3bUVNEF2uTrXJrrVasQWnTDfxPoF",
      "closeTx": "2v2rG6jNNP4QhBzuE1VbWcnhTFbAtZfVdEWwTjKgdRdmudjizZsHNMC6kvPPXkkWf7GRbw2MFuH5bud8brDHKSz5",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": [
        {
          "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
          "keeper": "j1oeQoPeuEDmjvyMwBmCWexzCQup77kbKKxV59CnYbd",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "10.5984",
          "outputAmount": "331200",
          "rawInputAmount": "10598400000",
          "rawOutputAmount": "331200000000",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "331.2",
          "rawFeeAmount": "331200000",
          "txId": "2v2rG6jNNP4QhBzuE1VbWcnhTFbAtZfVdEWwTjKgdRdmudjizZsHNMC6kvPPXkkWf7GRbw2MFuH5bud8brDHKSz5",
          "confirmedAt": "2024-07-17T15:37:24Z",
          "action": "Fill",
          "productMeta": null
        },
        {
          "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
          "keeper": "j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "2.6496",
          "outputAmount": "82800",
          "rawInputAmount": "2649600000",
          "rawOutputAmount": "82800000000",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "82.8",
          "rawFeeAmount": "82800000",
          "txId": "3TNk59Br3nRWWisRy7N8owmCBkHhrqyzBZmzbmLNeuAJcbwBoR1Md4twjxXxMnViHVsytLGeRqUPq5fxzoTnfzv4",
          "confirmedAt": "2024-07-17T15:13:31Z",
          "action": "Fill",
          "productMeta": null
        },
        {
          "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
          "keeper": "j1oeQoPeuEDmjvyMwBmCWexzCQup77kbKKxV59CnYbd",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "0.576",
          "outputAmount": "18000",
          "rawInputAmount": "576000000",
          "rawOutputAmount": "18000000000",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "18",
          "rawFeeAmount": "18000000",
          "txId": "5Ru1zAnqMX56roxm6zpsiQGY5ojRfYri9XqtwqV8AeyGQt8xrt9rd9Wa46kFcgPVnDAvtdSfKJaLch4C4Pzh1Nkx",
          "confirmedAt": "2024-07-17T15:11:06Z",
          "action": "Fill",
          "productMeta": null
        },
        {
          "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
          "keeper": "j1oeQoPeuEDmjvyMwBmCWexzCQup77kbKKxV59CnYbd",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "0.576",
          "outputAmount": "18000",
          "rawInputAmount": "576000000",
          "rawOutputAmount": "18000000000",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "18",
          "rawFeeAmount": "18000000",
          "txId": "23qaoyoBnVeodSKrmHPT2M2J2aoUBVE33sYxQgBNd2uU26nFroE16yZxzQ7JaZcXXU52F1t6vJMEJHsvGuVnGGWu",
          "confirmedAt": "2024-07-17T15:11:06Z",
          "action": "Fill",
          "productMeta": null
        },
        {
          "orderKey": "5MimaBqTHHb6Pb5b1YHaq6V7Toa8F6qy6ZNyVuJcdann",
          "keeper": "j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "6SUryVEuDz5hqAxab6QrGfbzWvjN8dC7m29ezSvDpump",
          "inputAmount": "0.6",
          "outputAmount": "18750",
          "rawInputAmount": "600000000",
          "rawOutputAmount": "18750000000",
          "feeMint": "HBp8qNLNgkqxBZzP6yPh3UMGXGATK9Bu6vGbUadmaPVK",
          "feeAmount": "18.75",
          "rawFeeAmount": "18750000",
          "txId": "4s7NfjFCbabQAdr5iWJAB2VEa8Vs44Y8wQ3tFaedmoEPAzARSkYfQ2HViLvHS2zFZRotF9Yi3MzG9smFsUvbNFD9",
          "confirmedAt": "2024-07-17T14:52:46Z",
          "action": "Fill",
          "productMeta": null
        }
      ]
    },
  ],
  "totalPages": 4,
  "page": 1,
  "user": "ErJKdNoarixqGGQTHbBtvHtg2nkcCqcKtYjGbVKUxY7D",
  "orderStatus": "history"
}
```
