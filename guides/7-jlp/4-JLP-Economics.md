---
sidebar_label: "JLP Economics"
description: "JLP Economics"
title: "JLP Economics"
---



## The JLP Token

The [JLP token](https://birdeye.so/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4?chain=solana) is the token given to users who provide liquidity to the JLP pool. JLP can be acquired either through [Jupiter Swap](https://jup.ag/) or through the [Earn page](https://jup.ag/perps-earn), which mints or burns JLP tokens directly from the pool.

More information on how to get JLP [here](./3-How-To-Get-JLP.md).

## Custodies

The JLP pool manages several custodies (tokens) for liquidity providers:

* SOL: [7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz](https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz)
* ETH: [AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn](https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn)
* BTC: [5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm](https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm)
* USDC: [G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa](https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa)
* USDT: [4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk](https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk)

More info on the `Custody` account is explained in [Onchain Account Types](../8-perpetual-exchange/3-onchain-accounts.md).

### Assets Under Management

The AUM for each `Custody` account in the pool is calculated as follows:

#### Stablecoins (USDC, USDT)

`aum = owned * current_price`

#### Non-stablecoins (SOL, ETH, wBTC)

1. Calculate the global short position profit/loss (Unrealized PnL in USD):

`unrealized_pnl = (global_short_sizes * (|global_short_average_prices - current_price|)) / global_short_average_prices)`

:::tip
If `current_price` > `global_short_average_prices`, traders are losing on short positions.
:::

2. Net Asset Value (NAV):

`available_tokens = owned - locked`

`nav = available_tokens * current_token_price`

`guaranteed_usd = size of all trades (USD) - collateral of all trades (USD)`

`nav += guaranteed_usd`

:::info
The `guaranteed_usd` value in each `Custody` account represents an estimate of the total size of all long positions. It is only an estimate as `guaranteed_usd` is only updated when positions are updated (i.e. opening / closing positions, updating collateral). It does not update in real-time when asset prices change. 

`guaranteed_usd` is used to calculate the pool's AUM as well as the overall PnL for all long positions efficiently.
:::

3. Assets Under Management (AUM)

If traders are losing on short positions, the losses are added to the pool's AUM:

`aum = nav + unrealized_pnl`

Otherwise, traders' profits are deducted from the pool's AUM:

`aum = nav - unrealized_pnl`

The Total AUM is then calculated as the sum of all the custodies' AUM:

`total_aum = Σ(aum)`

:::note
The pool sizes displayed on the [Earn page](https://jup.ag/perps-earn) do not add up to the pool's AUM. This discrepancy occurs because the Earn page shows each custody's `owned` value in USD without accounting for:

1. Traders' unrealized PnL
2. The `locked` amount reserved for potential profit payouts on open positions

This simplified representation on the Earn page provides a quick overview of the pool's holdings but doesn't reflect the JLP pool's true AUM.
:::

### Virtual Price, Market Price and AUM Limit

`Virtual Price = Sum of all JLP Assets (in USD) / Total Quantity of JLP in circulation`

When the AUM limit is hit:

`Market Price = Virtual Price + Market-assigned Premium`

Usually, users can mint new JLP or redeem (burn) them at the Virtual Price. However, when the AUM limit is hit, new minting of JLP is disabled to cap the amount of TVL in the pool.

When this happens, the demand for JLP on the market usually leads to a premium for JLP compared to the virtual price.

You may sell your JLP for the Market Price at any time. If the Market Price is below the Virtual Price, your JLP tokens are redeemed (burned) at the virtual price instead of the market price.

![image](../img/jlp/jlp-TVL.png)

You can view the current TVL and AUM Limit on the [JLP UI](https://jup.ag/perps-earn).

Every Monday, the estimated APY figure is updated with the above calculation by using the previous week's fees.

## Yield

The JLP token adopts a growth-focused approach, similar to accumulating ETFs like VWRA or ARKK. Rather than distributing yield through airdrops or additional token mints, the JLP token's value is designed to appreciate over time. This appreciation is driven by the growth of the JLP pool's AUM, which is used to derive the virtual price as shown above.

75% of all fees generated from Jupiter Perpetuals trading, token swaps, and JLP minting/burning are reinvested directly into the JLP pool.

This mechanism continuously enhances the pool's liquidity and value for token holders. The remaining 25% is allocated to Jupiter as protocol fees, supporting ongoing development and maintenance.

For example, if trading activities generate **10 SOL** in fees, **7.5 SOL** would be added to the JLP pool, increasing its SOL holdings and AUM.

Fees generated by the pool are reinvested directly back into the JLP pool, mirroring how accumulating ETFs reinvest dividends. This reinvestment strategy compounds the pool's growth, steadily increasing the JLP token's price and intrinsic value.

## Exposure

The intrinsic value of the JLP token is linked to the price movements of the liquidity pool's underlying tokens (SOL, ETH, BTC, USDC, and USDT).&#x20;

As a JLP holder, your portfolio is exposed to market movements, particularly to the performance of the non-stablecoin tokens: SOL, ETH, and BTC. If these tokens decrease in price, the value of your JLP position will likely decrease as well.

That said, JLP holders earn yield from fees generated by trading activities. When traders incur losses, these are reinvested into the JLP pool, benefiting JLP holders. Conversely, when traders profit, it comes at the expense of the JLP pool.

The JLP usually outperforms its underlying assets during sideways or bearish market conditions since traders often struggle to be profitable in bear markets. However, during strong bull markets, the situation can reverse. Traders may open more long positions which can lead to trader profitability at the expense of JLP holders.

To navigate market fluctuations, JLP investors have two primary strategies:

1. **Time the market**: Attempt to exit JLP positions before or during bullish trends.
2. **Hedging**: Maintain JLP holdings for yield while implementing hedges against the underlying assets in the pool. This approach aims to mitigate downside risk during adverse market movements.

## Risks

JLP holders are exposed to risks that can impact their portfolio, such as:

* **Market volatility**
  * Rapid price movements can negatively impact the JLP.
  * Extreme market events or black swan scenarios may cause correlations between assets to break down, potentially amplifying losses instead of mitigating them.
* **Counterparty risk**
  * The JLP pool poses a counterparty risk to JLP holders, as smart contract vulnerabilities or platform issues could potentially impact the ability to maintain or close hedge positions. That said, Jupiter works with leading firms in the field to audit and maintain our contracts to protect the Jupiter Perpetuals exchange and JLP holders.
* **Opportunity cost**
  * Capital allocated to acquiring JLP could potentially earn higher returns if allocated elsewhere. In bull markets for example, JLP may underperform compared to simply holding the underlying assets.

**JLP holders should thoroughly research and understand the benefits and risks of the JLP token before acquiring them.
**