---
sidebar_label: "To be merged and removed"
description: "To be merged and removed"
---


# How does the Jupiter Perpetuals DEX work?

The Jupiter Perpetuals decentralized exchange allows traders to open leveraged (up too 100x) long and short positions for the following tokens:

* SOL
* wETH
* wBTC

Traders can deposit or withdraw collateral to manage their position, and close their positions fully or partially. The Jupiter Perpetuals exchange uses price oracles for token prices. So, large trades will not incur price impact like traditional derivatives platforms.

Liquidity for the Jupiter Perpetuals exchange is provided by the [JLP Pool](https://jup.ag/perps-earn), which holds SOL, wETH, wBTC, USDC, and USDT as the underlying tokens. The pool provides attractive returns for liquidity providers, while providing ample liquidity for traders to open highly-leveraged positions.

## Position management

### Longs

Traders can open long positions or increase the size for existing positions for SOL, wETH, and wBTC with up to 100x leverage based on the initial margin (collateral).

#### Collateral management

Traders can deposit or withdraw collateral from the position to manage the position's margin.&#x20;

When traders deposit collateral, the liquidation price and leverage for the long position decreases as the maintenance margin increases.

When traders withdraw collateral, the liquidation price and leverage for the long position increases as the maintenance margin decreases.

#### Underlying collateral

The underlying collateral for a long position is the token for the open position, as shown below:

| Position  | Collateral |
| --------- | ---------- |
| Long SOL  | SOL        |
| Long wETH | wETH       |
| Long wBTC | wBTC       |

Profits and collateral withdrawals are disbursed to traders in the token that is being longed.&#x20;

For example, a trader with a profit long SOL position will receive SOL when they close the position.

### Shorts

Traders can open short positions or decrease the size for existing positions for SOL, wETH, and wBTC with up to 100x leverage based on the initial margin (collateral).

#### Collateral management

Traders can deposit or withdraw collateral from the position to manage the position's margin.&#x20;

When traders deposit collateral, the liquidation price and leverage for the short position increases as the maintenance margin increases.&#x20;

When traders withdraw collateral, the liquidation price and leverage for the short position decreases as the maintenance margin decreases.

#### Underlying collateral

The underlying collateral for a short position is either one of the USDC or USDT stablecoin, depending on the stablecoins' utilization rates at the time when the position is opened:

| Position   | Collateral  |
| ---------- | ----------- |
| Short SOL  | USDC / USDT |
| Short wETH | USDC / USDT |
| Short wBTC | USDC / USDT |

Profits and collateral withdrawals are paid out to traders in the stablecoin used as the underlying collateral for the position.

For example, a trader with a profitable short SOL position with USDC as the underlying collateral will receive USDC when they close the position or withdraw collateral.

### Take Profit / Stop Loss

Traders can set take profit (TP) or stop loss (SL) prices to automatically close the position when the token price hits the specified TP / SL prices.&#x20;

:::info
Partial TP / SL orders are not available at the moment.
:::

:::info
The Jupiter Perpetuals exchange uses oracle prices to determine token mark prices when executing take profit (TP) and stop loss (SL) orders. During price spikes or flash crashes, TP/SL orders may not be fulfilled as expected due to network congestion. If you believe a valid TP/SL order was not executed, please open a support ticket on the official Jupiter [Discord channel](https://discord.gg/jup) for assistance.
:::

### Fees

The Jupiter Perpetuals exchange charges three types of fees:

1. Base fee
   * A flat rate of **0.06%**
   * Applied to the notional position size
   * Charged when opening or closing a position. The base fee is also charged when a position is closed partially
2. Price impact fee
   * Simulates the effect of order book depth on trade execution
   * Varies based on the notional size of the trade:
     * Smaller trades incur lower price impact fees
     * Larger trades incur higher price impact fees
   * Helps compensate JLP token holders more accurately based on the trade size
   * Protects the JLP pool from order manipulation from large trades
   * Reduces the need for a high and rigid flat fee structure
3. Borrow fee
   * Applies to open positions
   * Charged hourly
   * Based on the notional size of the position
   * Represents the cost of maintaining a leveraged position
4. Transaction and priority fees
   * Traders pay the transaction fee to create trade requests
   * Traders also pay priority fees or Jito bundle tips (or both) depending on their settings

#### Price impact fee

Large trades on the Jupiter Perpetuals exchange inherently incur no price impact since token prices are sourced from price oracles. While this is favourable for traders, it poses risks to the Jupiter Liquidity Pool (JLP):

1. Large, profitable trades can negatively impact the liquidity pool's reserves.
2. The platform becomes vulnerable to order manipulation.

To address these risks, Jupiter Perpetuals implements a price impact fee. This fee is designed to simulate trading conditions in traditional exchanges, where larger orders typically experience more price slippage due to limited liquidity at each price level.

Benefits of the price impact fee:

1. Trader incentives:
   * Encourages traders to consider trade size when placing orders.
   * Larger trades incur higher price impact fees.
   * Splitting orders exposes traders to potential price changes between oracle updates.
2. Fair compensation for JLP holders:
   * The liquidity pool receives reasonable trading fees regardless of whether traders open large trades or split them up.
3. Market integrity:
   * The fee structure mimics traditional order book dynamics, helping to prevent price manipulation.

This tiered fee structure ensures that costs are more proportional to the potential market impact of each trade, creating a fairer trading environment for both traders and liquidity providers.

:::info
Jupiter partners with [Gauntlet](https://www.gauntlet.xyz/) to optimize the price impact fee and analyze its impact on the exchange. Consult [Gauntlet's proposal and analysis on the price impact fee here](https://www.jupresear.ch/t/gauntlet-comprehensive-analysis-jupiter-perpetuals-price-impact-structure-implementation-and-proposed-adjustments/19127) for additional information on calculating the price impact fee and other useful information.
:::

#### Borrow fee

On the Jupiter Perpetuals exchange, traders can open leveraged positions by borrowing assets from the liquidity pool.

Borrow fees serve two main purposes:

1. To compensate liquidity providers for the use of their assets.
2. To manage the risk associated with leveraged trading.

Unlike other perpetuals exchanges, the Jupiter Perpetuals exchange does not charge funding rates for open positions. Instead, traders pay borrow fees that compound hourly based on the borrowed amount for the leveraged position.

The borrow fees are reinvested back into the JLP pool to increase the pool's yield and available liquidity. It also acts as an incentive for the token mark price to align with it's market spot price.

The formula for the hourly borrow fee is:

> * `Tokens Borrowed`: The amount of tokens borrowed from the pool for the leveraged position
> * `Total Tokens in Pool`: The amount of tokens deposited into the pool for the position's underlying token
> * `Hourly Borrow Rate`: The base rate for the hourly borrow fees (**0.01%** at the time of writing)
> * `Position Size`: The size (USD) of the leveraged position

$$
\text{Hourly Borrow Fee} = \frac{\text{Tokens Borrowed}}{\text{Total Tokens in Pool}} \times \text{Hourly Borrow Rate} \times \text{Position Size}
$$

For example, assume the price of SOL is $100. The SOL liquidity pool has 1,000 SOL under custody, and has not lent out any SOL yet (i.e. it's utilization is 0%). A trader opens a $10,000 position with an initial margin of $1,000. The remaining $9,000 is borrowed from the pool to open the leveraged position.

* `Tokens Borrowed`: `$9,000 (amount to borrow) / $100 (SOL price) =` 90 SOL
* `Total Tokens in Pool`: 1,000 SOL
* `Hourly Borrow Rate`:  0.01% (0.0001 in decimal format / 1 BPS)
* `Position Size`: $10,000

Calculation:

```
Hourly Borrow Fee = (90 / 1000) * 0.0001 * 10000 = 0.09
```

This means your position will accrue a borrow fee of $0.09 every hour it remains open.

:::info
The utilization level of the liquidity pool is dynamic and changes over time, which directly impacts the hourly borrow fee.
:::

:::info
Borrow fees are paid off when depositing or withdrawing collateral, not just when closing positions.
:::

:::info
Borrow fees are continuously accrued and deducted from your collateral. This ongoing deduction has two important consequences:

1. Your effective leverage increases over time as your collateral decreases.
2. Your liquidation price moves closer to the current market price.

It's crucial to regularly monitor your borrow fees and liquidation price. Failure to do so may result in unexpected liquidation, especially during periods of high market volatility or extended position duration.
:::

#### Priority fees and Jito bundle tips

Traders can choose to submit their transactions via normal Solana transactions, Jito bundles, or both. Traders pay variable transaction and priority fees depending on their settings.

:::info
There is no "best" setting for priority fees as it varies from trader to trader.

If the goal is to land trade requests as quickly as possible, mixed transactions combined with a high priority fee level (Turbo or Ultra) will provide the best results.

Set a max cap for priority fees to prevent overpaying, or set an exact fee if your goal is to land the trade request no matter the fee.

Consult the [Jupiter Discord channel](https://discord.gg/jup) for advice and guidance on setting priority fees.
:::

### PNL

Profit and loss calculations directly corresponds to the size of your position. Here are two examples to illustrate this:

1. Long position example:
   * Position: 1,000 USD long on SOL
   * If SOL price increases by 10%: You profit 100 USD
   * If SOL price decreases by 10%: You lose 100 USD
2. Short position example:
   * Position: 1,000 USD short on SOL
   * If SOL price decreases by 10%: You profit 100 USD
   * If SOL price increases by 10%: You lose 100 USD

In both cases, the profit or loss is 10% of the position size, matching the percentage change in SOL's price.

### Leverage

A position's leverage is calculated with the following formula:

$$
positionSize / positionCollateralSize
$$

For example, a position with size $50,000 and collateral size $5,000 would have **10x** leverage, based on the formula above:

$$
50000 / 5000 = 10
$$

:::info
The actual leverage for a position will be slightly lower as the calculation takes into account all fees associated with maintaining the position.
:::

:::info
When reducing the size of a position, the collateral amount is reduced as well to maintain the leverage for the position. For example, if a position has a 10x leverage, and reduces its size by 50%, the same amount of collateral will be withdrawed from the position to maintain the 10x leverage.
:::

### Liquidation

The liquidation price for open positions represent the price at which the position will be automatically closed by the system to prevent further losses.

* For long positions:
  * Liquidation occurs when the current token price falls below the liquidation price
  * Example: If the liquidation price is $90, the long position will be closed if the token's price drops to $90 or lower.
* For short positions:
  * Liquidation occurs when the current token price rises above the liquidation price
  * Example: If the liquidation price is $110, the short position will be closed if the token price rises to $110 or higher.

The liquidation price can be calculated with the following formulas.

> * `price`: The current price (USD) of the asset
> * `collateral_size`: The collateral size (USD) for the position
> * `close_fee`: The fee (USD) charged for closing the position
> * `borrow_fee`: The accumulated borrowing fees (USD) for maintaining a leveraged position
> * `size`: The size (USD) of the position
> * `max_lev`: The maximum allowed leverage (**500x** is the maximum allowed leverage in the Jupiter Perpetuals exchange for now)

**For long positions:**

$$
\text{price} - \frac{\left|\text{collateral_size} - \text{close_fee} - \text{borrow_fee} - \frac{\text{size}}{\text{max_lev}}\right| \times \text{price}}{\text{size}}
$$

**For short positions:**

$$
\text{price} + \frac{\left|\text{collateral_size} - \text{close_fee} - \text{borrow_fee} - \frac{\text{size}}{\text{max_lev}}\right| \times \text{price}}{\text{size}}
$$

:::info
The actual liquidation price in the platform may change over time due to the borrow fees accumulated for leveraged positions.
:::

### Price oracles

The Jupiter Perpetuals exchange uses a new Oracle Network, co-designed by Jupiter and another key ecosystem player (to be announced at Breakpoint), and audited by Offside Labs.

This new Oracle Network, known as Signal will be announced at Breakpoint.

This oracle is used as the mark price for opening and closing trades, calculating margin requirements, and triggering SL/TP orders and liquidations on the Jupiter platform.

This oracle was co-designed with Jupiter, with the usage of Jupiter Perps in mind, and comes with key benefits while having an independent team provide the price feed.

This oracle is extremely compute-efficient, allowing us to update all 5 oracles (SOL, BTC, ETH, USDC, USDT) when opening and closing positions.

#### Key benefits

| Benefits    | Old oracle                                                                                                                             | New oracle                                                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Reliability | User makes a position request, Keepers wait for 45s for the oracle to update, if the oracle doesnt update, the position request fails. | User makes a trade, Keepers update the oracle and open the position with the same transaction.                                           |
| Latency     | User makes a request, Keepers have to wait for the oracle before placing the trade.                                                    | User makes a trade, Keepers immediately process the trade with the oracle.                                                               |
| Chart       | Discrepancy between trades placed and the chart.                                                                                       | Signal powers the trading view chart and all position requests, which means there is no discrepancy between trades placed and the chart. |

## FAQs

### Collateral sizes are fixed

When providing the initial margin or depositing collateral, the exchange records the position's collateral value in USD. The recorded USD value remains constant, even if the collateral token's price fluctuates.

For example, if a trader deposits $100 USD worth of SOL to open a position, their collateral will always be valued at $100 for this position. Even if the price of SOL changes by 50% in either direction, the trader's collateral size for this position remains fixed at $100.

### Why do long and short positions use different collateral tokens?

Traders can deposit any [SPL token supported by Jupiter Swap](https://station.jup.ag/docs/token-list) as the initial margin to open a position or to deposit collateral for an existing open position.&#x20;

The deposited tokens will then be converted to the collateral tokens for the position (SOL / wETH / wBTC for long positions, USDC / USDT stablecoin for short positions).

:::info
The platform will automatically swap the deposited tokens to the right collateral token so traders don't need to swap tokens manually before opening a position or increasing their collateral.
:::

The underlying collateral for long positions are the tokens themselves (SOL, wBTC, wETH) and stablecoins (USDC, USDT) for short positions.

This is to protect the pool from scenarios that might put the pool at risk, for example a series of ongoing profitable trades that deplete the pool's reserves.

For more information on this, consult the [JLP pool documentation](https://station.jup.ag/guides/jlp/How-JLP-Works#risks-associated-with-holding-jlp) which describes the dynamics between traders and the liquidity pool for long and short scenarios.

### How are token prices determined?

Token prices for SOL, wETH, wBTC, USDC, and USDT are determined by onchain price oracles.&#x20;

The prices sourced from the oracles are used as the mark price for:

* Opening and closing positions
* Increasing or reducing position sizes
* Depositing or withdrawing collateral
* Calculating PNL
* Calculating liquidation prices
* Triggering TP / SL requests
* Price charts

Jupiter works with trusted oracle providers that provide fast, accurate, and reliable price data for the supported tokens on the Jupiter Perpetuals exchange. All of our oracle providers are audited and go through extensive integration tests.

:::info
Price data used in the Jupiter Perpetuals exchange may differ from other onchain and offchain price aggregators. Traders should use the Jupiter Perpetuals price chart and historical prices as the source of truth when making trade decisions.
:::

### How many positions can be opened at one time?

Traders can open up to 9 positions at one time:

* Long SOL
* Long wETH
* Long wBTC
* Short SOL (USDC)
* Short SOL (USDT)
* Short wETH (USDC)
* Short wETH (USDT)
* Short wBTC (USDC)
* Short wBTC (USDT)

When a trader opens multiple positions for the same side (long / short) and token:

1. Open positions: Price and fee calculations are based on the existing open position. This is essentially increasing or decreasing the size of an open position.
2. Deposits, withdrawals, and closing: Price, PNL, and fee calculations are also based on the existing open position.
