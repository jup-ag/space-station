---
sidebar_label: "Rust Integration"
description: Learn to integrate your DEX with Jupiter using Rust. Simplify processes with our APIs and DEX SDK for better performance.
title: Rust Integration
---

<head>
    <title>Jupiter DEX Integration Guidelines: Enhance Your Crypto Exchange</title>
    <meta name="twitter:card" content="summary" />
</head>

![thinking cat](./thinking_cat.png)

## Overview

Jupiter is one of the most widely integrated protocols, so a lot of work is involved in minimizing issues on new integrations and making each integration valuable to our users and partners.

Our top priority is securing the best prices and the best token selection for our users, so we will focus on DEXes that will bring the most benefits to them.

:::warning We do not charge fees for integration.
:::

## Guidelines

### Minimum DEX TVL of $500k
- Given the amount of integration work involved, a DEX must have enough liquidity to be useful for trading and to attract volume.
- Each market/pool must have a minimum liquidity of $500 to show up on Jupiter. You can keep up to date on how we list tokens [here](/docs/get-your-token-onto-jup)

### An API for listing/delisting pools on the DEX
- This will allow us to automatically track new markets as you add them to your DEX.

### Provide a Rust SDK
- Your SDK should implement this interface: [DEX Integration](/docs/projects-and-dexes/rust-integration).
- We are soon migrating to a Rust SDK and so are asking all integrated DEXes to create a Rust SDK version or give access to the code for us to include.

### Security Audit

- If you're not using Solana's audited SPL token swap (https://github.com/solana-labs/solana-program-library/tree/master/token-swap), we ask that you get your code audited.