---
sidebar_label: "API Usage"
description: "Introduction to Jupiter APIs"
title: "API Usage"
---

<head>
    <title>API Usage</title>
    <meta name="twitter:card" content="summary" />
</head>

Since beginning of 2025, Jupiter have introduced new hostnames and the usage of our APIs through API keys to facilitate better developer support.

## What's New?

*Last updated: 1 December 2024*
- API will now be served through new hostnames.
- API will now be served through API keys.
- API Keys will be distributed via https://portal.jup.ag (Refer to [API Setup](./api-setup) to get started).

| Service Types | Description |
| --- | --- |
| Free with no API key | Decreased rate limits to only accommodate for testing. |
| Paid plan with API key | Fixed rate limits, self served through an API dashboard. |
| Custom with API key | Custom rate limits, mainly for partner usage. |

#### Swap

| Old Hostnames | New Hostnames |
|---|---|
|`https://quote-api.jup.ag/v6/quote`|`https://api.jup.ag/quote/v1`|
|`https://quote-api.jup.ag/v6/swap`|`https://api.jup.ag/swap/v1`|
|`https://quote-api.jup.ag/v6/swap-instructions`|`https://api.jup.ag/swap-instructions/v1`|
|`https://quote-api.jup.ag/v6/program-id-to-label`|`https://api.jup.ag/program-id-to-label`|

#### Price

| Old Hostnames | New Hostnames |
|---|---|
|`https://price.jup.ag/v6`|`https://api.jup.ag/price/v2`|

#### Token

| Old Hostnames | New Hostnames |
|---|---|
|`https://tokens.jup.ag/token/:mint`|`https://api.jup.ag/tokens/v1/token/:mint`|
|`https://tokens.jup.ag/tokens?tags=:tags`|`https://api.jup.ag/tokens/v1/tagged/:tag`|
|`https://tokens.jup.ag/tokens_with_markets`|`https://api.jup.ag/tokens/v1/mints/tradable`|

## What's Old?

- Old hostnames will be fully deprecated in the next 6 months on **1 June 2025**.
- Old hostnames during this period will have reduced rate limits to facilitate migration to the new API.
- Self hosted API will not be maintained moving forward.

## Help us help you

Please reach out to us
- If you need have increasing demand and growth in your app.
- If you have questions or need support.
- Join the [Telegram channel](https://t.me/jup_dev) or [Discord channel](https://discord.com/channels/897540204506775583/1115543693005430854) to subscribe to updates.