---
sidebar_label: "Deposit Order"
description: "Use the Jupiter Recurring API to deposit orders."
title: "Deposit Order"
---

<head>
    <title>Deposit Order</title>
    <meta name="twitter:card" content="summary" />
</head>

The root URL of the Recurring API's execute endpoint is as such.

```
https://api.jup.ag/recurring/v1/depositOrder
```

The `/depositOrder` endpoint is used to deposit funds into a smart recurring order. As the smart recurring order is opened indefinitely until the user closes them, the user can deposit more funds into the order to continue executing.

## Deposit Order

If you want to deposit funds into a smart recurring order, you need to do these steps:

1. Keep track of the order account that an account has opened.
2. Use the order account to make a post request to the `/depositOrder` endpoint to get the transaction to deposit the order.
3. Sign then send the transaction to the network either via `/execute` endpoint or by yourself.

```jsx
const depositOrderResponse = await (
    await fetch('https://api.jup.ag/recurring/v1/smartDeposit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            order: "2A9BWzLCpsvRuAbruATYYXaaMDRkSYPPZoAey67ywYqx",
            user: wallet.publicKey.toBase58(),
            amount: 100000000
        }),
    })
).json();
```

## Deposit Order Response

**Success Example Response**

```json
{
  "id": "5f393dda-957c-49c5-ae4c-378411d845f9",
  "tx": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUJRL7cu4ZNuxh1wI9W7GVURyr3A06dH348HDpIQzcAJ4oRMyo0n0Vy3vNzz/Qmrb8jFY+GzZO5RPfaIch6Q9v2Y6S9VpPamn6grxndxSdZDoCDDsQrKrILU+Qd0CLBzolBv28tkzlck1LrvR2ACB/vAL7AIssgVYeCOBbHfYskyckDBkZv5SEXMv/srbpyw5vnvIzlu8X3EmssQ5s6QAAAAAabiFf+q4GE+2h/Y0YYwDXaxDncGus7VZig8AAAAAABBt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkHNtIX+MwRgQakd3fYovqoEXuKqaHTmdCmjuWoQiMib9tmwp+vo2sOMjtDszYKoCq4fjWD0Axu1otg9+Ycyps3zNIY+RVfU5WMLiYp2DZvVGVSQwMa204qWiPuhns9/wcDBAAFAoQ3AAAEAAkDQA0DAAAAAAAHCAABBQIDBggHEPIjxolS4fK2AOH1BQAAAAA="
}
```

**Failed Example Response**

```json
{
  "code": 400,
  "message": "Failed to deserialize account data: failed to fill whole buffer",
  "status": "Bad Request"
}
```

## Execute Deposit Order

To sign then send the transaction to the network to execute the deposit, you can use the `/execute` endpoint or by yourself.

Refer to the [Execute Order](/docs/recurring-api/execute-order) section for more details.
