---
title: Perps Quickstart
description: Introduction to the Jupiter Perpetual Exchange
---

<head>
    <title>Perps Quickstart</title>
    <meta name="twitter:card" content="summary" />
</head>

Apart from Spot products like Swap or DCA, Jupiter has its own Perpetual Exchange, providing both liquidity provisioning opportunities and leverage trading! Don’t worry if you’re new to this, we’ve got your back. This guide will help you navigate the basics of Jupiter Perps.

---

## Overview

Welcome to Jupiter Perpetuals, a perpetual exchange where you can trade with leverage (**up to 100x!**) on popular tokens like **SOL**, **ETH**, **wBTC**.

:::tip Perps V2!
Try out the new Perps UI at **https://jup.ag/perps-v2**, featuring a new design and other features like Limit Orders, Gasless Orders and more!
:::

:::info Statistics Dashboards
You can find various metrics on Jupiter Perpetuals on the following dashboards:
1. [Chaos Labs Dashboard](https://community.chaoslabs.xyz/jupiter/risk/overview)
2. [Gauntlet Dashboard](https://app.gauntlet.xyz/protocols/jupiter)
3. [Dune Analytics](https://dune.com/jupiterexchange/jupiter-perps)
:::

The Jupiter Perpetuals exchange is a trader-to-LP exchange which means liquidity providers (LPs) provide liquidity to the exchange, while the traders borrow tokens from the liquidity pool (the JLP pool) for leverage.

1. **Jupiter Liquidity Providers**

    Liquidity for the Jupiter Perpetuals exchange is provided by the JLP Pool, which holds SOL, ETH, wBTC, USDC, and USDT as the underlying tokens. The pool provides ample liquidity for traders to open highly-leveraged positions, while earning an attractive return on a portion of the trading fees.

    [Learn more about how the JLP Pool works here](./jlp-pool-and-token).

2. **Traders**

    Traders can deposit collateral to enter positions and borrowing the rest of the position from the pool. Subsequently, they can manage their positions by withdrawing collateral to close their positions fully or partially. The Jupiter Perpetuals Exchange features a simple interface and underlying trading mechanisms to provide a safe and seamless trading experience.

    [Learn more about how trading works here](./position-management).

---

## Key Features for Liquidity Providers

- **Rewards and Earnings**

    By contributing to the JLP Pool, liquidity providers earn a portion of the trading fees and traders' profits and losses, which is redistributed to pool.

- **Composability**

    The JLP token is an SPL token, making it easily transferable and tradable like any other SPL tokens within the Solana ecosystem. This also allows for AMM pools to be established for trading JLP tokens.

- **No Active Management**

    LPs do not need to actively "stake" tokens or "harvest" yields - APR earnings are embedded within each JLP token and accumulate automatically (reflected as an increase in the JLP token price).

## Key Features for Traders

- **Liquidity and Leverage**
    
    The JLP Pool provides ample liquidity for traders to open highly-leveraged positions, up to 100x.

- **Collateral**

    Traders can use any tokens as collateral, this is powered by Jupiter Swap, where traders can indicate the token they want to use as collateral and Jupiter Swap will swap the token to the required collateral token.

- **Price Oracles**

    The exchange uses price oracles for pricing, this benefits traders by allowing them to trade with leverage without worrying about price impact like traditional derivatives platforms (however, there is a [price impact fee](./fees#price-impact-fees)).

- **Risk and Economic Management**

    Jupiter Perps is working closely with different economic and risk teams to ensure a stable, fair yet competitive trading environment. Refer to the assessments at https://www.jupresear.ch/tag/risk.

- **Limit Orders ([New in Perps V2](https://jup.ag/perps-v2))**

    Traders can place limit orders to enter their long or short positions at a specific price. This allows for more control over the entry price of their positions.

- **Gasless Orders ([New in Perps V2](https://jup.ag/perps-v2))**

    Traders can place orders without paying for transaction fees. This is powered by a new keeper execution model where you submit a request to execute an order (direct to keepers instead of a transaction on-chain), and the keeper will execute the order for you.
