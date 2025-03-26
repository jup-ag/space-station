---
sidebar_position: 1
sidebar_label: "⚠️ New API Usage"
description: "Introduction to Jupiter APIs"
title: "New API Usage"
---

<head>
    <title>API Usage</title>
    <meta name="twitter:card" content="summary" />
</head>

Since beginning of 2025, Jupiter have introduced new hostnames and the usage of our APIs through API keys to facilitate better infrastructure and developer support.

## What's New?

:::caution API Gateway: New Hostnames and API Keys
*Last updated: January 2025*

- API will now be served through new hostnames.
- API will now be served through API keys.
- API Keys will be distributed via https://portal.jup.ag (Refer to [API Setup](/docs/api-setup) to get started).

| Service Types          | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| Free with no API key   | Decreased rate limits to only accommodate for testing.   |
| Paid plan with API key | Fixed rate limits, self served through an API dashboard. |

<details>
    <summary>
        Hostname Changes
    </summary>
#### Swap

| Old Hostnames                                     | New Hostnames                                    |
| ------------------------------------------------- | ------------------------------------------------ |
| `https://quote-api.jup.ag/v6/quote`               | `https://api.jup.ag/swap/v1/quote`               |
| `https://quote-api.jup.ag/v6/swap`                | `https://api.jup.ag/swap/v1/swap`                |
| `https://quote-api.jup.ag/v6/swap-instructions`   | `https://api.jup.ag/swap/v1/swap-instructions`   |
| `https://quote-api.jup.ag/v6/program-id-to-label` | `https://api.jup.ag/swap/v1/program-id-to-label` |

#### Price

| Old Hostnames             | New Hostnames                 |
| ------------------------- | ----------------------------- |
| `https://price.jup.ag/v6` | `https://api.jup.ag/price/v2` |

#### Token

| Old Hostnames                               | New Hostnames                                 |
| ------------------------------------------- | --------------------------------------------- |
| `https://tokens.jup.ag/token/:mint`         | `https://api.jup.ag/tokens/v1/token/:mint`    |
| `https://tokens.jup.ag/tokens?tags=:tags`   | `https://api.jup.ag/tokens/v1/tagged/:tag`    |
| `https://tokens.jup.ag/tokens_with_markets` | `https://api.jup.ag/tokens/v1/mints/tradable` |
</details>
:::

:::caution Trigger API: New Hostname and Breaking Changes
*Last updated: March 2025*

- The `/limit/v2` path will be deprecated soon, please update your API calls to use the `/trigger/v1` path immediately.
- `/execute` endpoint is introduced.
- `/createOrder` endpoint now includes an additional `requestId` parameter to be used with the `/execute` endpoint.
- `/cancelOrder` endpoint only builds the transaction for 1 order, while `/cancelOrders` endpoint builds the transaction for multiple orders.
- The `tx` field in the responses are now `transaction` or `transactions`.
- `/getTriggerOrders` endpoint is introduces a new format to get either active or historical orders (based on the query parameters).
- [Please refer to the documentation for usage](/docs/trigger-api/create-order).

<details>
    <summary>
        Hostname Changes
    </summary>
#### Trigger

| Old Hostnames                               | New Hostnames                                 |
| ------------------------------------------- | --------------------------------------------- |
| `https://api.jup.ag/limit/v2/createOrder`   | `https://api.jup.ag/trigger/v1/createOrder`   |
| `https://api.jup.ag/limit/v2/executeOrder`  | `https://api.jup.ag/trigger/v1/executeOrder`  |
| `https://api.jup.ag/limit/v2/cancelOrder`   | `https://api.jup.ag/trigger/v1/cancelOrder`<br />`https://api.jup.ag/trigger/v1/cancelOrders` |
| `https://api.jup.ag/limit/v2/openOrders`<br />`https://api.jup.ag/limit/v2/orderHistory`    | `https://api.jup.ag/trigger/v1/getTriggerOrders` |
</details>
:::

## What's Old?

- Old hostnames will be fully deprecated in the next 6 months on **1 June 2025**.
- Old hostnames during this period will have reduced rate limits to facilitate migration to the new API.

## Help us help you

Please reach out to us

- If you need help increasing demand and growth in your app.
- If you have questions or need support.
- Join the [Telegram channel](https://t.me/jup_dev) or [Discord channel](https://discord.com/channels/897540204506775583/1115543693005430854) to subscribe to updates.
