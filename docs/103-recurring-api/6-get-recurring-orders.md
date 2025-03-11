---
sidebar_label: "Get Recurring Orders"
description: "Use the Jupiter Recurring API to get both active or historical recurring orders."
title: "Get Recurring Orders"
---

<head>
    <title>Get Recurring Orders</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Recurring API's get recurring orders endpoint is as such.

```
https://api.jup.ag/recurring/v1/getRecurringOrders
```

This is a GET request to `/getRecurringOrders` endpoint. The response is paginated for every 10 orders and you can view different pages using the `page` parameter.

## Get Recurring Orders

:::note
- orderStatus can be either `active` or `history`
- recurringType can be either `time` or `price`
- includeFailedTx can be either `true` or `false`
:::

```jsx
const getRecurringOrders = await (
    await fetch(
        `https://api.jup.ag/recurring/v1/getRecurringOrders?user=InsertWalletPublicKey&includeFailedTx=false&orderStatus=active&recurringType=time&page=1`
    )
).json();
```

## Get Recurring Orders Response

```json
{
  "user": "5dMXLJ8GYQxcHe2fjpttVkEpRrxcajRXZqJHCiCbWS4H",
  "orderStatus": "active",
  "data": {
    "time": {
      "orders": [
        {
          "userPubkey": "5dMXLJ8GYQxcHe2fjpttVkEpRrxcajRXZqJHCiCbWS4H",
          "orderKey": "5T3NGmbD8R59UWEaRaDq79r7fDxDUNidze3CVT94vrUb",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "inDeposited": "1",
          "inWithdrawn": "0",
          "rawInDeposited": "1000000000",
          "rawInWithdrawn": "0",
          "cycleFrequency": "60",
          "outWithdrawn": "0",
          "inAmountPerCycle": "0.5",
          "minOutAmount": "100",
          "maxOutAmount": "0",
          "inUsed": "0",
          "outReceived": "0",
          "rawOutWithdrawn": "0",
          "rawInAmountPerCycle": "500000000",
          "rawMinOutAmount": "100000000",
          "rawMaxOutAmount": "0",
          "rawInUsed": "0",
          "rawOutReceived": "0",
          "openTx": "2Nbo1SYKhYXiEaLsLTkFTXgtkafBnUpNhtqMnQMRL2K8eLxGxj7m5WRcecsnNbLKPBxDGvDT5ijnWM2VyNoreFrb",
          "closeTx": "",
          "userClosed": false,
          "createdAt": "2025-03-06T05:51:50Z",
          "updatedAt": "2025-03-06T05:51:50Z",
          "trades": []
        }
      ],
      "totalPages": 1,
      "page": 1
    }
  }
}
```
