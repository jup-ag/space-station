---
sidebar_label: JLP Pool and Token
title: JLP Pool and Token
description: Introduction to the JLP Pool and Token
---

<head>
    <title>JLP Pool and Token</title>
    <meta name="twitter:card" content="summary" />
</head>

The Jupiter Liquidity Provider (JLP) Pool is a liquidity pool that acts as a counterparty to traders on Jupiter Perps. Traders borrow tokens from the pool to open leveraged positions on the Jupiter Perpetuals exchange.

---

## The Pool

The Jupiter Perpetuals exchange is a trader-to-LP exchange which means traders borrow tokens from the liquidity pool (the JLP pool) for leverage.

Instead of periodic funding payments between long and short traders, Jupiter Perpetuals implements an hourly borrow fee mechanism.

Traders pay these fees to the pool based on the amount of tokens they've borrowed. This mechanism helps secure the balance of the pool's assets and compensates liquidity providers for the use of their tokens.

:::note Relationship between the pool and traders
The pool is a counterparty to traders on Jupiter Perps. Traders borrow tokens from the pool to open leveraged positions on the Jupiter Perpetuals exchange.

It is very important to everyone that the relationship between the liquidity providers and traders remain healthy yet competitive, to provide a vibrant experience for everyone.
:::

---

## The JLP Token

The JLP token is an SPL token that represents a share of the JLP Pool. The value of the token is dervied from:

- The index fund of **SOL, ETH, WBTC, USDC, USDT**.
- The trader's profit and loss.
- 75% of all trading fees.
    - Base fees.
    - Price impact fees.
    - Borrow fees.

---

## How to Become a Liquidity Provider

Anyone can become a Liquidity Provider by contributing assets or tokens to the Jupiter Liquidity Provider Pool (JLP Pool).

- JLP tokens represent your share of the pool.
- You can buy JLP tokens directly on Jupiter Swap, using any tradable tokens.
- There are fees associated with buying into the JLP pool (see Target Ratio and Fees).
