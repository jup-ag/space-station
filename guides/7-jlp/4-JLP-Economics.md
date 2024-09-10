---
sidebar_label: "JLP Economics"
description: "JLP Economics"
title: "JLP Economics"
---

# JLP Pool

The JLP pool serves as the liquidity pool and and counterparty for the Jupiter Perpetuals exchange. It also integrates with Jupiter Swap, functioning as a standard liquidity pool for token swaps.

This section summarizes the JLP pool, as well as describing several examples of hedging strategies for the JLP and FAQs.

[For more info on the JLP, check out the detailed guide on the Jupiter station.](https://station.jup.ag/guides/jlp)

## Liquidity pool

The Jupiter Perpetuals exchange is a trader-to-LP exchange which means traders borrow tokens from the liquidity pool (the JLP pool) for leverage.

Instead of periodic funding payments between long and short traders, Jupiter Perpetuals implements an hourly borrow fee mechanism.&#x20;

Traders pay these fees to the pool based on the amount of tokens they've borrowed. This mechanism helps secure the balance of the pool's assets and compensates liquidity providers for the use of their tokens.

## Custodies

The JLP pool manages several custodies (tokens) for liquidity providers:

* SOL: [https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz](https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz)
* ETH: [https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn](https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn)
* BTC: [https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm](https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm)
* USDC: [https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa](https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa)
* USDT: [https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk](https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk)

## The JLP token

The [JLP token](https://birdeye.so/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4?chain=solana) is the token given to users who provide liquidity to the JLP pool. JLP can be acquired either through [Jupiter Swap](https://jup.ag/) or through the [Earn page](https://jup.ag/perps-earn), which mints or burns JLP tokens directly from the pool.

:::info
It is almost always cheaper to purchase JLP through Jupiter Swap instead of interacting directly with the pool.
:::

### Virtual price and market price

The virtual price of the JLP token is used to mint and burn JLP tokens. The virtual price is calculated with the following formula:

`jlp_virtual_price = pool_aum / total_jlp_supply`

The JLP token's market price is determined by trading activity on platforms like Jupiter Swap and other decentralized exchanges. This market price typically aligns closely with the token's virtual price.&#x20;

However, the market price for the JLP can trade at a premium when the JLP pool reaches its AUM cap. In such cases, the market price may exceed the virtual price, as new JLP tokens cannot be minted until either the cap is raised or the AUM decreases.

### AUM

The JLP pool's AUM is calculated as follows:

For each `Custody` account in the pool:

#### Stablecoins (USDC, USDT)

`aum = owned * current_price`

#### Non-stablecoins (SOL, ETH, wBTC)

1. Global Short PNL (Unrealized PnL in USD):

`unrealized_pnl = global_short_sizes * (global_short_average_prices - current_price)`

*NOTE: If `current_price` > `global_short_average_prices`, traders are losing on short positions.*

2. Net Asset Value (NAV):

`available_tokens = owned - locked`
`nav = available_tokens * current_token_price`
`nav += guaranteed_usd`

:::info
The `guaranteed_usd` value in each `Custody` account represents an estimate of the total size of all long positions. It is only an estimate as `guaranteed_usd` is only updated when positions are updated (i.e. opening / closing positions, updating collateral). It does update in real-time when asset prices change. `guaranteed_usd` is used to calculate the pool's AUM as well as the overall PNL for all long positions efficiently.
:::

3. Assets Under Management (AUM)

If traders are losing on short positions, the losses are added to the pool's AUM:

`aum = nav + unrealized_pnl`

Otherwise, traders' profits are deducted from the pool's AUM:

`aum = nav - unrealized_pnl`

#### Total AUM Calculation

The Total AUM is calculated as the sum of all the custodies' AUM:

`total_aum = Σ(aum)`

:::info
More info on the `Custody` account is explained in [#custody-account](https://www.example.com)
:::

:::note
The pool sizes displayed on the [Earn page](https://jup.ag/perps-earn) do not add up to the pool's AUM. This discrepancy occurs because the Earn page shows each custody's `owned` value in USD without accounting for:

1. Traders' unrealized PNL
2. The `locked` amount reserved for potential profit payouts on open positions

This simplified representation on the Earn page provides a quick overview of the pool's holdings but doesn't reflect the JLP pool's true AUM.
:::

## Yield

The JLP token adopts a growth-focused approach, similar to accumulating ETFs like VWRA or ARKK. Rather than distributing yield through airdrops or additional token mints, the JLP token's value is designed to appreciate over time. This appreciation is driven by the growth of the JLP pool's AUM, which is used to derive the virtual price as shown above.

75% of all fees generated from Jupiter Perpetuals trading, token swaps, and JLP minting/burning are reinvested directly into the JLP pool.&#x20;

This mechanism continuously enhances the pool's liquidity and value for token holders. The remaining 25% is allocated to Jupiter as protocol fees, supporting ongoing development and maintenance.

For example, if trading activities generate 10 SOL in fees, 7.5 SOL would be added to the JLP pool, increasing its SOL holdings and AUM.

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

* Market volatility
  * Rapid price movements can negatively impact the JLP.
  * Extreme market events or black swan scenarios may cause correlations between assets to break down, potentially amplifying losses instead of mitigating them.
* Counterparty risk
  * The JLP pool poses a counterparty risk to JLP holders, as smart contract vulnerabilities or platform issues could potentially impact the ability to maintain or close hedge positions. That said, Jupiter works with leading firms in the field to audit and maintain our contracts to protect the Jupiter Perpetuals exchange and JLP holders.
* Opportunity cost
  * Capital allocated to acquiring JLP could potentially earn higher returns if allocated elsewhere. In bull markets for example, JLP may underperform compared to simply holding the underlying assets.

JLP holders should thoroughly research and understand the advantages and risks of the JLP token before acquiring them.
