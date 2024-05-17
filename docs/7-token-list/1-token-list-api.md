---
sidebar_label: Token List API
description: Elevate your DApp with Jupiter Token List API, providing access to validated, liquidity-backed tokens for safer trading.
title: Token List API
---

<head>
    <title>Jupiter Token List API: Verified DApp Tokens Overview</title>
    <meta name="twitter:card" content="summary" />
</head>

![cat_list](./cat_list.png)

The Jupiter Token List API is an **open, collaborative, and dynamic** token list. The Token List makes trading on Solana more transparent and safer for users and developers.

## Core Principles

1. **Safety:** Only validated token addresses are shown by default on the 'Strict List'.
2. **Open:** Automatically adds new tokens with sufficient liquidity into the ‘Full’ list. The full list will always contain all tokens available for trade to give open access to all projects.
3. **Un-opinionated:** All data (market, partner, community) is included and you can pick the tokens you need.
4. **Collaborative:** We engage ecosystem partners to build a robust and comprehensive list with us by including their data.
5. **Community Driven:** Our community drives the validation process.

## 'Strict' and 'All' Lists

:::info Our lists only show tokens that satisfy our minimum liquidity requirements
Our lists are designed for trading -- The "All" list only shows tokens that satisfy our minimum liquidity requirements. Tokens will automatically be picked up once they are above the threshold, and will fall off when they are below. See [Getting Your Token on Jupiter](/docs/get-your-token-onto-jup) for more details on liquidity requirements.
:::

For your convenience, we packed the lists into 2 endpoints for you to choose from.

- **Strict:** https://token.jup.ag/strict
    - Only tokens that are tagged "old-registry", "community", or "wormhole" verified.
    - No unknown and banned tokens.
- **All:** https://token.jup.ag/all
    - Everything including unknown/untagged tokens that are picked up automatically.
    - It does not include banned tokens by default. 
    - To bring up banned tokens, append this flag to the endpoint. (?includeBanned=true). Often, projects notice that the token got banned and withdraw liquidity. As our lists are designed for trading, banned tokens that used to, but no longer meet our minimum liquidity requirements will not appear in this response. If you require the entire list of banned tokens -- please refer to [this banned tokens file in our Github repo.](https://github.com/jup-ag/token-list/blob/main/banned-tokens.csv)


## Tags & Extensions:

Each token can have 1 or more of the following:

- `tags` Old-registry: From the archived [Solana Labs token list repo](https://github.com/solana-labs/token-list). These tokens were added to the repo before July 2022. As this is the original token list in Solana, the tokens here are generally more recognised.
- `tags` Community: Attested by Jupiter's communities. This includes newer and widely traded tokens created after the old-registry was archived like Bonk and Hades.
- `tags` [Wormhole](https://github.com/wormhole-foundation/wormhole-token-list/blob/main/content/dest_solana.md): Bridged assets to Solana via wormhole
- `tags` [SolanaFM](https://docs.solana.fm/api-reference/tokens): Tokens that are "verified" on the solana-fm list.
- `tags` Unknown: Assets that were [picked up automatically by Jupiter](/docs/get-your-token-onto-jup).
- `tags` Token2022: Tokens on the [Token-2022 Program](https://spl.solana.com/token-2022).
- `extensions` isBanned: Generally fake tokens trying to impersonate another project (E.g. fake wSOL), flagged by our community.

## Our UI on Jup.ag

On our UI, we have 2 modes. The default that all users land on is the "strict" mode, without unknown and banned tokens. Users can choose to toggle on the full list with the "all" mode at the bottom of the token selection modal.

![token list](token-list.jpg)

## Community Validation for Strict Mode (BETA)

Anyone can propose an addition to the strict list. You can refer to [Getting on the strict list](/docs/get-your-token-onto-jup#getting-on-the-strict-list) to know more about our community-driven process. This new process is still in its early days, and we ask for your patience as we iterate.


## Collaborate with us 🤝 

The Jupiter Token API is still in its early stages, and we want to work with everyone – users, community members, protocols, and data consumers – to build a better one for the ecosystem.

If you have your own data (e.g. your own validation process, bridged / staked token lists) -- talk to us.

**Join the Token Revolution, Together We List!**
