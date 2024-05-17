---
sidebar_label: "Trading"
title: "Trading on Jupiter Perpetual Exchange"
description: Trading on Jupiter Perpetual Exchange
---

## Opening a Position

Commence by selecting the perpetual market you wish to open a position on, such as **SOL-PERP**, **ETH-PERP**, or **WBTC-PERP**. Proceed to choose `Long` or `Short` on the trading form based on your desired position.

**Long Position:**

- Yields profit if the token price increases.
- Incurs losses if the token price decreases.

**Short Position:**

- Yields profit if the token price decreases.
- Incurs losses if the token price increases.

Upon selecting your side, navigate to the `You're Paying` tab, choose the token, input the desired payment amount, and specify the leverage. Above the `LONG/SHORT` button, find a concise summary of your `collateral` and `size in USD` with the leverage multiplier _(ranging from 1.1x to 100x)_.

Below the `LONG/SHORT` button, review order details, including:

- Entry Price
- Liquidation Price
- Trading Fee (0.1% for opening and closing positions)
- Borrow Fee (calculated hourly based on pool utilization)
- Available Liquidity

While trades incur no price impacts, slippage may occur due to price variations between transaction submission and blockchain confirmation. Slippage, the difference between expected and execution prices, can be customized in the icon at the top right of the trading form.

When entering a position, whether Long or Short, it hinges on the available liquidity within the JLP pool.

- Long Positions: For SOL, ETH, WBTC, it relies on the availability of the respective assets within the JLP pool.
- Short Positions: In the case of SOL, ETH, WBTC, it depends on the availability of stablecoin assets, specifically USDC and USDT.

## Managing Positions

Upon opening a position, it becomes accessible in your `Positions` list. To adjust leverage and liquidation price, click on `Edit`. This feature enables efficient management of your positions.

When initiating a position or depositing collateral, a snapshot of your collateral's USD value is captured. For instance, if your collateral is 1 SOL and SOL's price is 40 USD, your collateral is valued at 40 USD, remaining constant despite SOL price fluctuations.

Profit and loss are proportionate to your position size. For instance, a long SOL position of 1,000 USD with a 10% SOL price increase yields a profit of 100 USD, while a 10% decrease results in a 100 USD loss. Conversely, a short position with a 10% SOL price decrease garners a 100 USD profit, but a 10% increase incurs a 100 USD loss.

Leverage for a position is represented as `Size (position size) / Collateral (position collateral)`.

## Closing a Position

You can close a position by clicking on the `Close` button in the position row.

- **Long Positions:** Profits from long positions are disbursed in the asset you are longing. For instance, if you've gone long on SOL, your profits will be received in SOL.

- **Short Positions:** Profits from short positions are paid out in the same stablecoin used to open the position, such as USDC or USDT.

## Take-Profit / Stop-Loss Orders

You can set take-profit and stop-loss trigger orders by selecting the `Add TP` or `Add SL` button in the position row.

Once you create a trigger order, it will be displayed in your position's row under the `Take Profit` and `Stop Loss` columns. You have the flexibility to edit the order and adjust the trigger price as needed.

In the event of manually closing a position, the associated trigger orders will be automatically canceled and closed, providing a seamless experience when opening new future positions.

_Note: While `TP/SL` orders are set, keepers will monitor the mark price, when reaching the specified price level, TP/SL will close the whole position._

## Liquidations

In the scenario of opening a long position in SOL, where the position size surpasses the collateral value, there exists a critical point known as the Liquidation Price. This price is calculated based on the threshold where the loss amount, collateral value, and borrow fee collectively dip below 0.2% of your position's size. If the token's price surpasses this point, the system will automatically close the position.

It's crucial to note that the liquidation price is subject to change over time, particularly with leverage exceeding 10x and extended position durations. Regularly monitoring your liquidation price is essential. To mitigate the risk of liquidation, collateral adjustments and leverage fine-tuning can be performed through the `Edit` button in the position row, offering an avenue to add collateral and enhance the liquidation price.

Upon liquidation, any remaining collateral, net of losses and fees, will be kept as liquidation fee to the JLP pool.

## Pricing

On Jupiter Perpetual Exchange, **trades incur no price impact**, allowing for the execution of large trades precisely at the mark price.

Mark prices are conveniently presented in the same row as the market name _(e.g., SOL-PERP)_. Notably, long positions and short positions are opened and closed at the same price as `Mark Price` when initiating market order.

## Fees

Opening or closing a position on Jupiter Perpetual Exchange incurs a fee equivalent to 0.1% of the position size. You also have to pay an hourly borrow fee as calculated as such:

```
hourly borrow fee = (tokens borrowed / tokens in the pool) x hourly borrow rate x position size
```

For long positions, the collateral is the token being longed _(e.g., SOL for SOL longs, BTC for BTC longs)_, while short positions are collateralized with supported stablecoins like USDC or USDT.

Jupiter Perpetual Exchange seamlessly integrates Jupiter Swap. Consequently, when a swap is required during the opening or closing of a position, regular DEX fees and slippages are applicable.

### Solana Fee

Users will have to pay SOL for submitting transactions onto the Solana chain. At the same time, a minor SOL amount will be used for rent to create an escrow account ([PDA](https://solanacookbook.com/core-concepts/pdas.html#facts)). The SOL rent will be returned to you once you close your position.

## Keepers

Jupiter Perpetual Exchange works based on a keeper model. A typical trader action involves a 2-step process:

1. Trader submits a request transaction onto the Solana chain.
2. Keeper monitors the request transaction and executes it as a separate transaction onto the Solana chain.

Sometimes, if the oracle price is stale or the oracle price hits the trader slippage, the keeper will close the trader's request and return the SOL rent on the request and collateral (when opening a position) back to the trader. You will see this a separate transaction on your wallet submitted by our keeper.

You may also notice multiple failed transactions on your wallet submitted by our keepers. You can safely ignore these failed transactions, they don't alter any state on your wallet. This happens because we have multiple keepers to execute your request in order to make sure that the trader experience is swift.
