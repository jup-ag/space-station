---
sidebar_label: "JLP Overview"
description: "Explore what $JLP is, its role in Jupiter, and how it benefits traders. Boost your trading strategy with $JLP with our beginners guide."
title: "JLP Overview"
---

<head>
    <title>What is  $JLP: Jupiter Liquidity Provider Explained | Jupiter Station</title>
    <meta name="twitter:card" content="summary" />
</head>

The **Jupiter Liquidity Provider (JLP)** Pool is a liquidity pool that acts as a counterparty to traders on [Jupiter Perps](https://jup.ag/perps). Traders borrow tokens from the pool to open leveraged positions on the Jupiter Perpetuals exchange.

The JLP token derives its value from:

- An index fund of **SOL, ETH, WBTC, USDC, USDT**.
- Trader's **profit and loss**.
- **75%** of the generated fees from **opening** and **closing** fees, **price impact**, **borrowing fees**, and **trading fees** of the pool.

### Jupiter Liquidity Providers (JLPs)

Jupiter Liquidity Providers (JLPs) play a crucial role in the trading ecosystem by supplying the necessary liquidity for perpetual traders. 

Liquidity providers (LPs) ensure there is sufficient liquidity, allowing traders to test their perpetual trading strategies. As a result, Jupiter can offer its trading service without needing to hold huge amounts of liquidity, and LPs are rewarded with the majority of the fees.


### How to Become a Liquidity Provider (LP)

Anyone can become a Liquidity Provider by contributing assets or tokens to the Jupiter Liquidity Provider Pool (JLP Pool).
 - JLP tokens represent your share of the pool.
 - Any asset traded on JUP can be used to buy into JLP.
 - There are fees associated with buying into the JLP pool (see [Target Ratio and Fees](../jlp/How-JLP-Works#target-ratio-and-fees)).

More details on how to get the token in [How To Get JLP](../jlp/How-To-Get-JLP).

:::tip
The best way to purchase or exit JLP is always via [Jupiter Swap](https://jup.ag/swap/USDC-JLP).
:::

 ### Advantages of the JLP System

 The JLP system offers a user-friendly method for participants to earn passive income while contributing to the liquidity and stability of the trading environment:

- LPs do not need to actively "stake" tokens or "harvest" yields - APR earnings are embedded within each JLP token and accumulate automatically (reflected as an increase in the JLP token price).
- The JLP token is also an SPL token, making it easily transferable and tradable like other SPL tokens within the Solana ecosystem.
- AMM pools can be established for trading JLP tokens.

:::info
JLP is a liquidity token for the Jupiter Perpetuals platform, and JUP is the governance token of the JUP DAO.
:::

### Rewards and Earnings

The **APY** of JLP is calculated based on 75% of fees generated from perps trading activities (not including assets appreciation and traders PnL). 

The generated fees are distributed back to liquidity providers by redepositing the fees into the pool weekly (at the same time APY is updated).

More details on how JLP generates yield in [How JLP Works](../jlp/How-JLP-Works).

---

### JLP UI Walkthrough
![jlp](../img/jlp/jlp-1.png)


1. **Earn Tab:** Where users can participate by depositing into the JLP Pool to earn passive fees generated from all perpetual trading activities.

2. **APY:** This measure shows the current trajectory of yield from holding the JLP token.

3. **Trade:** Here a user can Trade, Buy or Sell JLP.

4. **Total Value Locked (TVL):** `TVL` represents the total value of pool assets at their current token prices.

5. **Token Selector:** The user can choose the token they would like to trade or receive.

6. **Token(List):** The list of tokens currently held in the JLP pool.

7. **Pool Size:** The current size of each token's pool. Traders' collateral assets are included in the pool.

8. **Current / Target Weightage:** A comparison of the current weightage to the target weightage.

9. **Utilization:** A measure of how the pool's assets are currently being used.

10. **Estimations and Fees:** The user is shown the estimated fee for trading the token they pick and the estimated JLP to be received.

11. **JLP Price & Total Supply:** Here, you can find the current virtual `JLP Price` and `Total Supply` displayed. The virtual price is obtained by dividing `TVL` by `Total Supply`.
    - More information on the **Virtual Price** and **Market Price** of JLP [here](./4-JLP-Economics.md#virtual-price-market-price-and-aum-limit).