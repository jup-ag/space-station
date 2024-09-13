---
sidebar_label: "Frequently Asked Questions"
description: Frequently Asked Questions
---

# Frequently Asked Questions

### 1. I tried opening a position/adding collateral and it was not successful. Where are my funds?

Under normal circumstances, funds will be returned to your wallet in about 1-2 minutes. During periods of congestion on the Solana network there might be a delay for your funds to be returned to your wallet. If this is the case, you can close your expired request under the `Expired Orders` tab.

#### Follow these steps on how to find your funds.

1. Go to the Transaction ID

![Returned1](returned1.png)

2. Scroll down to `CreateIncreasePositionMarketRequest`

![Returned2](returned2.png)

3. Click on `Position Request` address

![Returned3](returned3.png)

4. Click on the latest successful transaction

![Returned4](returned4.png)

5. You could find your returned fund here:

For **SOL**, check **`SOL Balance Change`** tab

![Returned5](returned5.png)

For **ALL other token**, check `Token Balance Change` tab

![Returned6](returned6.png)

:::info
Wallet service providers might not be fully parsing the transactions, so, it is always a better idea to check on-chain. If you still couldn’t locate your fund although it was shown that it’s returned on the explorers, please contact your wallet service provider accordingly.
:::

### 2. I closed my position with profit and I have not received my funds.

You will receive the underlying asset for a LONG-position, i.e. SOL for SOL-Long, ETH for ETH-Long, wBTC for wBTC-Long.

You will receive either USDC or USDT for all SHORT-positions.

#### Perform these steps to check for funds from closed positions.

1. Under `Transaction History` on Jupiter Perpetual Trading, click on the transaction ID of the closed position.

![Returned2-1](returned2-1.png)

2. You could find your returned fund here:

For **SOL-Long position**, check **`SOL Balance Change`** tab

![Returned2-2](returned2-2.png)

For **ALL other positions**, check `Token Balance Change` tab

![Returned2-3](returned2-3.png)

### 3. The price has reached my Take Profit/Stop Loss price on the chart. Why is my TP/SL not triggered?

- Missing Associated Token Accounts

  We won't be able to trigger a TP/SL if there is no active token account for the user. These are the associated token accounts (ATAs) needed for each position.

  - ETH Token Account for ETH-Long;
  - wBTC Token Account for wBTC-Long;
  - USDC and USDT Token Account for ALL Short positions.

If you are sure that you have an active ATA for the position and check the Mainnet oracle price and confirm that TP/SL is not triggered at the price it is supposed to, please open a [Perp-ticket](https://discord.com/channels/897540204506775583/1197460751556804608).

Take note that this only applies for the Trading View Chart on Jupiter Perpetuals, and not if the price was reached on another platform. Jupiter Perps' chart uses the Signal Oracle, which is the same oracle used for processing TP/SL.

### 4. Why is my liquidation price changing?

There is an hourly borrow fee on every position, the hourly borrow fee will change the liquidation price over time.

If you want to understand how the hourly borrow rate works, you can check it out [here](https://station.jup.ag/guides/perpetual-exchange/how-it-works#hourly-borrow-rate).

### 5. I deposited 1 SOL (where 1 SOL = $100) for a 5x leveraged SOL-Long position and profited $50 (where 1 SOL = $110). Why did I get less than the full amount?

Assuming zero fees, with $50 profit, you will be getting SOL in return with value of $150.
At the time of closing the position, 1 SOL = $110,

```
$150 / $110 = 1.3636
```

You will be getting 1.3636 SOL where the value is equivalent to $150.

![faq1](./faq1.png)

Here is another example, this is a SOL-Long position, the total amount the user should be getting is $3086.28 in SOL.

The value of SOL at the time is $189.28, hence `$3086.28 / $189.28 = 16.30`. The user will be receiving 16.30 SOL in return.

:::info
The **`PNL`** shown is the amount before fees. The exact amount is shown under **`Deposit/Withdraw`** tab.
:::

### 6. I have an existing SOL-Long position. I deposited 1 SOL to open a new SOL-Long position but I don’t see my new position.

Both positions will be combined into one position, where

- Leverage of the combined position = Average of the leverage level of each position.
  e.g. (1.2x + 1.4x) / 2 = 1.3x
- Size = initial collateral \* leverage level.

The TP/SL you have set earlier will remain the same after the positions are combined.

### 7. Why are my collateral sizes fixed?

When providing the initial margin or depositing collateral, the exchange records the position's collateral value in USD. The recorded USD value remains constant, even if the collateral token's price fluctuates.

For example, if a trader deposits $100 USD worth of SOL to open a position, their collateral will always be valued at $100 for this position. Even if the price of SOL changes by 50% in either direction, the trader's collateral size for this position remains fixed at $100.

### 8. Why do long and short positions use different collateral tokens?

Traders can deposit any [SPL token supported by Jupiter Swap](https://station.jup.ag/docs/token-list) as the initial margin to open a position or to deposit collateral for an existing open position.&#x20;

The deposited tokens will then be converted to the collateral tokens for the position (SOL / wETH / wBTC for long positions, USDC / USDT stablecoin for short positions).

:::info
The platform will automatically swap the deposited tokens to the right collateral token so traders don't need to swap tokens manually before opening a position or increasing their collateral.
:::

The underlying collateral for long positions are the tokens themselves (SOL, wBTC, wETH) and stablecoins (USDC, USDT) for short positions.

This is to protect the pool from scenarios that might put the pool at risk, for example a series of ongoing profitable trades that deplete the pool's reserves.

For more information on this, consult the [JLP pool documentation](https://station.jup.ag/guides/jlp/How-JLP-Works#risks-associated-with-holding-jlp) which describes the dynamics between traders and the liquidity pool for long and short scenarios.

### 9. How are token prices determined?

Token prices for SOL, wETH, wBTC, USDC, and USDT are determined by onchain price oracles.&#x20;

The prices sourced from the oracles are used as the mark price for:

* Opening and closing positions
* Increasing or reducing position sizes
* Depositing or withdrawing collateral
* Calculating PNL
* Calculating liquidation prices
* Triggering TP / SL requests
* Price charts

Jupiter works with [Chaos' Edge Pricing Data](https://x.com/omeragoldberg/status/1834231003071774778) that provide fast, accurate, and reliable price data for the supported tokens on the Jupiter Perpetuals exchange. All of our oracle providers are audited and go through extensive integration tests.

:::info
Price data used in the Jupiter Perpetuals exchange may differ from other onchain and offchain price aggregators. Traders should use the Jupiter Perpetuals price chart and historical prices as the source of truth when making trade decisions.
:::

### 10. How many positions can be opened at one time?

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
