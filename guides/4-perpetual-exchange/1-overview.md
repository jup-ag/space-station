---
sidebar_label: "Overview"
description: Perpetual Exchange Overview
---

# Summary

Our perpetual exchange is a novel LP-to-trader perpetual exchange on Solana, offering up to 100x leverage. Utilizing LP pool liquidity and oracles, it ensures zero price impact, zero slippage, and deep liquidity. Oracles enable stable market operations during liquidations and stop-loss events, removing risks of position bankruptcy and LP pool fund loss. Users can open and close positions in one simple step, eliminating the need for additional accounts or deposits. With the Jupiter Swap integration, any Solana token can be used to open positions.

The LP pool is also integrated into Jupiter to provide liquidity to the overall Solana ecosystem. Jupiter users can swap using the liquidity from the LP pool.

---
### Overview
![Perp1](../img/perps1.jpg)

1. **Trade Tab -** This is where all the trading action happens. You can trade long or short on the three main blue-chip markets we offer: SOL, ETH, and WBTC, with leverage of up to 100x.

2. **Earn Tab -** This is where passive users can participate. Users can join the liquidity pool and earn passive fees generated from trading activities.

3. **Different Perp Markets -** Currently, we only support the three main blue-chip markets: SOL, ETH, and BTC.

4. **Price Stats -** Here, you can find a quick overview of the current real-time stats, including the current index price, 24-hour price movement, 24-hour highs, and 24-hour lows.

5. **Long/Short -** Choose whether you want to go 'Long' or 'Short' on the respective market.

6. **Token Selector (Input) -** This is the input section where you can select any SPL tokens to use as collateral to enter a position.

7. **Price Chart -** This real-time price chart is generated using Pyth Oracle price data and displayed with the TradingView charting tool.

8. **Leverage (1.1x - 100x) -** Here, users can increase their trading size with leverage ranging from 1.1x to a maximum of 100x.

9. **Order Summary -** This section provides an order summary with all the information and stats calculated. (Please review and confirm your order before submitting the transaction).

---
### Earn Tab 

![Perp2](../img/perps2.jpg)

1. **Earn Tab -** The Earn tab is where users can participate by depositing into the JLP Pool to earn passive fees generated from all trading activities.

2. **JLP Pool -** The JLP Pool consists of a collection of tokens, including SOL, ETH, WBTC, USDC, and USDT. Each asset has its respective pool size, current and target weightage, and utilization.

    - **Pool Size:** The current size of the pool.
    - **Current / Target Weightage:** A comparison of the current weightage to the target weightage.
    - **Utilization:** A measure of how the pool's assets are currently being used.

3. **Total Value Locked (TVL)** - TVL represents the total value of pool assets at their current token prices.

4. **JLP Price & Total Supply -** Here, you can find the current `JLP Price` and `Total Supply` displayed.

5. **Deposit & Withdraw -** This is where users can deposit SPL tokens into the JLP token and withdraw from the JLP token into SPL tokens.

---
### Positions Tab
![Perp3](../img/perps3.jpg)

1. **Positions Tab -** The Positions tab is where you can view and manage all your current open positions.

|Item| Description|
|---|---|
|**Position**|Displays your current open position, including the market ticker, leverage level, and whether it's a long or short position.|
|**Net Value**|Net value represents the current value of your position, accounting for fees. For example, it includes the initial collateral, PnL (Profit and Loss), borrow fees, and close fees.|
|**Size**|Size indicates the current size of your order, factoring in the leverage level. For example, it's calculated as the initial collateral multiplied by the leverage level.|
|**Collateral**|Collateral is the initial amount you provided when opening your long or short position.|
|**Entry Price**|The entry price is the price at which you entered a new position.|
|**Mark Price**|The mark price is the current market price.|
|**Liq. Price**|The liquidation price is the threshold at which the mark price reaching this level triggers liquidation. This process is to repay any loan associated with opening the position.|
|**Take Profit**|Take profit is the price set by the user. When the mark price hits this level, it will automatically close the position to lock in and realize gains.|
|**Stop Loss**|Stop loss is the price set by the user. When the mark price reaches this level, it will automatically close the position to limit losses.|

2. **Close Order / Share -** This button allows you to immediately close the current position, securing gains or losses at the current market price.

---
### Trade History Tab
![Perp4](../img/perps4.jpg)

**Trade History Tab -** The Trade History tab is where you can review all your past actions and activities that have occurred with your open positions and orders.

|Item| Description|
|---|---|
|**Position**|This column represents your position where the action or event was triggered, along with the current market ticker and the timestamp of when it occurred.|
|**Action**|In the Action column, you can see the specific action or event that occurred for the respective position.|
|**Order Type**|This column indicates the type of order that occurred for the position. For example, it could be Market, Trigger, or Liquidation.|
|**Deposit/Withdraw**|Here, you can find the amount that was either deposited into or withdrawn from the position.|
|**Price**|The Price column displays the mark price at which the action or event occurred, triggering the action order.|
|**Size**|This column reveals the size of the position that triggered the action or event.|
|**PnL**|The PnL column shows the Profit and Loss associated with the position.|
|**Txn**|In this column, you can find a transaction link to the action or event that took place on-chain.|