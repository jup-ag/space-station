---
sidebar_position: 1
title: API Migration Notice
description: "Jupiter API will be migrated to new hostnames with new API structure to serve developers better."
---

<head>
    <title>Jupiter API Migration Notice</title>
    <meta name="twitter:card" content="summary" />
</head>

By end of 2024, we will be executing a migration plan for our API infrastructure. Please take note of the following to ensure a smooth transition.

## What’s New?

- API will be served through new Hostnames.
- API will be served through API keys.
- New documentation.

:::caution
Do note that they are not live yet.
:::

### API Service Types

| Service Types | Description |
|---|---|
|Free with no API Key|Gradual decrease in rate limits, only for testing|
|Fixed paid plan with API Key|Fixed rate limits, fixed monthly/annual payments.|
|Custom with API Key|Custom rate limits, pricing to be discussed|

### Hostnames Migration

#### Swap

| Old Hostnames | New Hostnames |
|---|---|
|https://quote-api.jup.ag/v6/quote|https://api.jup.ag/quote/v1|
|https://quote-api.jup.ag/v6/swap|https://api.jup.ag/swap/v1|
|https://quote-api.jup.ag/v6/swap-instructions|https://api.jup.ag/swap-instructions/v1|
|https://quote-api.jup.ag/v6/program-id-to-label|https://api.jup.ag/program-id-to-label|

#### Price

| Old Hostnames | New Hostnames |
|---|---|
|https://price.jup.ag/v4 or /v6|https://api.jup.ag/price/v2|

#### Token

| Old Hostnames | New Hostnames |
|---|---|
|https://tokens.jup.ag/token/:mint|https://api.jup.ag/tokens/v1/token/:mint|
|https://tokens.jup.ag/tokens?tags=:tags|https://api.jup.ag/tokens/v1/tagged/:tag|
|https://tokens.jup.ag/tokens_with_markets|https://api.jup.ag/tokens/v1/mints/tradable|