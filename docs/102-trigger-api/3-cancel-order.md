---
sidebar_label: "Cancel Order"
description: "Use the Jupiter Trigger API to cancel orders."
title: "Cancel Order"
---

<head>
    <title>Cancel Order</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Trigger API's cancel order endpoint is as such.

```
https://api.jup.ag/trigger/v1/cancelOrder
```

If you want to cancel order(s), you need to do these steps:

1. Get a list of the order accounts you want to cancel via `/openOrders` endpoint.
2. Use the list of order accounts to make a post request to the `/cancelOrders` endpoint to get the transaction to cancel one or multiple orders.
3. Sign then send the transaction to the network either via `/execute` endpoint or by yourself.

:::info Get Open Orders
[Refer to the `/openOrders` section](/docs/trigger-api/view-open-orders) to prepare the list of order accounts you want to cancel.
:::

:::warning
If no orders are specified, the API will return the transaction to cancel **ALL** open orders, batched in groups of 5 orders.
:::

## Cancel Order

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
            orders: orderAccounts, // a list of order accounts, if non are passed in, it will attempt to cancel ALL
        })
    })
).json();
```

## Cancel Order Response

**Success Example Response**

```json
{
  "txs": [
    "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUQCWPK8t5w2W1nIsonBw2T/TCNCKkrgBQia9/YVlLEcjNZdb/xAd3nnPdCRScMgavewVDB8wNnaYNgU3l08jNDwAGlTrhKyBAqbImPOFvPVVvi8/Lu2Oy5STSv15YZLOzWYIxgY1+NPQrg/it0uaGFE4OREOh/ZcD0LJpeneXjy12NHqMQaDsZbTYy6+9gmqUKxUJbAYzIkNlvjRi6IhE3kpjoZMCiaeKbX6CsA5bjRtxcLRxYJtzfcFx8A5e/aJo7wuVnV8uBf7OIEIWzxldTxJnx1a7qLrsIYWoF1rfb6ZjKCBkXaQHHKe8TjDdzNadZ9fQ+M5eNL/PoKR0MaCcgp+PLuFoHIfXz0uFbiRdu4X9cHyb4h/uIikooeVs9401z8Jfvt5FRWahhXg878F/ddj9unATV53Aq9rDAZDn7rx4MNssRliHvzwJXI46yIuPypgAn1XRqJ6lSsm5azWJJ55J/bIfsQxAFl9kuyA4eD8LlLIu//HUPgwdmBFfuM7LhAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAKw0qWwWZxWmDBIz7KJYoN8wseyFjgdFxzahJiZmNLIgabiFf+q4GE+2h/Y0YYwDXaxDncGus7VZig8AAAAAABBt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKlDJD7vWxB9gSxw35TGlHsZdI2k67JDJlsy7AQAVamvJQcMAAUCwEsDAAwACQMuPAAAAAAAAA0JAAAICg0ODwsNCF+B7fAIMd+EDQkAAAYEDQ4PCw0IX4Ht8Agx34QNCQAABwENDg8LDQhfge3wCDHfhA0JAAAJBQ0ODwsNCF+B7fAIMd+EDQkAAAMCDQ4PCw0IX4Ht8Agx34Q=",
    "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUICWPK8t5w2W1nIsonBw2T/TCNCKkrgBQia9/YVlLEcjNSVgmRSs266bQT4r+K2Sr0z7wdBYGo1mOBq5cjrOYuSuqGpUJmbPxOpbMZZA9oHs4zfIIrBpEMn42VUCLrCDdAkn9sh+xDEAWX2S7IDh4PwuUsi7/8dQ+DB2YEV+4zsuEDBkZv5SEXMv/srbpyw5vnvIzlu8X3EmssQ5s6QAAAAArDSpbBZnFaYMEjPsolig3zCx7IWOB0XHNqEmJmY0siBpuIV/6rgYT7aH9jRhjANdrEOdwa6ztVmKDwAAAAAAEG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqUMkPu9bEH2BLHDflMaUexl0jaTrskMmWzLsBABVqa8lAwQABQLAqAAABAAJAy48AAAAAAAABQkAAAIBBQYHAwUIX4Ht8Agx34Q="
  ]
}
```

**Failed Example Response**

```json
{
  "error": "no matching orders found",
  "code": 400
}
```

## Execute Cancel Order

To sign then send the transaction to the network to execute the cancellation, you can use the `/execute` endpoint or by yourself.

Refer to the [Execute Order](/docs/trigger-api/execute-order) section for more details.

:::tip
Do note that you will receive an array of transactions, so you will need to access each transaction in the array and sign and send each transaction individually.
:::
