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

### Adding Liquidity

JLP can be acquired by swapping directly on Jupiter Swap to achieve the best price, which can be either purchasing it off the open market (like from other AMMs) or swapping it to one of JLP's underlying tokens and depositing that into JLP directly.

While JLP is still being minted, your assets may be deposited into the relevant token pool increasing the current weightage. At the point of depositing assets into the JLP pool, the protocol will re-price the TVL in the USD value.

### Removing Liquidity

JLP can also be sold via Jupiter Swap to any tradable token. It can be either transferred to another trader or redeemed by the JLP Pool, which the JLP token will be burned and releasing some of the currency contained in the pool.

:::info
This automatic minting/burning mechanism is unique to Jupiter Swap and programs that route via Jupiter Swap. If you're interacting directly on a different DEX, you will trade JLP at the price offered by the DEX instead of the virtual price of JLP.

**Only the Jupiter Perpetuals program (which is integrated in Jupiter Swap) has the authority to mint and burn JLP tokens.**
:::

---

## Advantages of the JLP System

The JLP system offers a user-friendly method for participants to earn passive income while contributing to the liquidity and stability of the trading environment:

- LPs do not need to actively "stake" tokens or "harvest" yields - APR earnings are embedded within each JLP token and accumulate automatically (reflected as an increase in the JLP token price).
- The JLP token is also an SPL token, making it easily transferable and tradable like other SPL tokens within the Solana ecosystem.
- AMM pools can be established for trading JLP tokens.

## How to Become a Liquidity Provider

Anyone can become a Liquidity Provider by contributing assets or tokens to the Jupiter Liquidity Provider Pool (JLP Pool).

- JLP tokens represent your share of the pool.
- You can buy JLP tokens directly on Jupiter Swap, using any tradable tokens.
- There are fees associated with buying into the JLP pool (see Target Ratio and Fees).
