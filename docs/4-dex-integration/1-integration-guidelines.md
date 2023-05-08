---
description: Guidelines on getting your DEX / AMM into Jupiter
---
# Integration Guidelines

## Overview

Jupiter is one of the most widely integrated protocols, so a lot of work is involved in minimizing issues on new integrations and making each integration valuable to our users and partners.

Our top priority is securing best prices, best token selection for our users, so we will focus on DEXes that will bring the most benefits to our users.

:::tipWe do not charge fees for integration.
:::

## Guidelines

- **Minimum DEX TVL of $500k**
    - Given the amount of integration work involved, a DEX must have enough liquidity to be useful for trading and to attract volume.
    - Each market/pool must have a minimum liquidity of $500 to show up on Jupiter. You can keep up to date on how we list tokens [here](../apis/token-list/getting-tokens-on-jup)
- **An API for listing/delisting pools on the DEX**
    - This will allow us to automatically track new markets as you add them to your DEX.
- **Provide a Rust SDK**
    - Your SDK should implement this interface: [DEX Integration](/docs/dex-integration/rust-integration).
    - We are soon migrating to a Rust SDK and so are asking all integrated DEXes to create a Rust SDK version or give access to the code for us to include.
- **Security Audit**
    - If you're not using Solana's audited SPL token swap (https://github.com/solana-labs/solana-program-library/tree/master/token-swap), we ask that you get your code audited.
- **Referral Programs**
    - If your DEX charges a fee and has a referral program for parties that refer volume to you, we would consider prioritizing it. For example, when someone takes a trade on Openbook or GooseFx, part of the proceeds is given to the user or protocol who facilitated that trade. We think these referral programs are healthy for a vibrant ecosystem and offset some of the costs involved.