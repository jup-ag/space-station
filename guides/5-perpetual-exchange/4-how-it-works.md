---
sidebar_label: "How It Works"
description: Key Concepts of Perpetual Exchange
---

# How It Works

## Overview

Jupiter Perps is a LP-based perpetual exchange based on oracle prices.

Our pool consists of 5 tokens, SOL, ETH, WBTC, USDC, and USDT. Users acquire JLP by swapping on [Jupiter Swap](https://jup.ag/swap/USDC-JLP). Jupiter Swap automatically finds the cheapest way of acquiring JLP, by swapping to the desired asset and depositing that, or purchasing off the market.

Traders open leveraged positions by putting up collateral and borrowing
the rest of the position from the pool.

## For Traders

### Example Trade

For example, a trader opens a 2x long SOL position at a position size of $100
USD by depositing $50 USD worth of SOL as collateral and borrowing $50 USD
worth of SOL from the pool.

Suppose the SOL price is up 20% when the position is closed. Assuming 0 fees,
the position will have gained $20 USD. The trader will receive $70 USD (50 + 20)
worth of SOL tokens and the rest of the tokens are returned to the pool.

Suppose instead that the SOL price is down 20% when the position is closed.
Assuming 0 fees, the position will have lost $20 USD. The trader will receive
$30 USD (50 - 20) worth of SOL tokens and the pool will get the remaining
tokens.

To open a long position, a trader deposits collateral matching the underlying
asset. For example, to open long SOL-USD position, the trader deposits SOL.

Conversely, to open a short position, a trader deposits collateral matching one
of the stablecoins in the pool.

### Leverage

To allow for leverage, traders borrow assets from the pool to create a
larger position. To create a 2x long position SOL-USD, the other 1x SOL will be
borrowed from the pool.

This borrow leads to a hourly borrow rate to be paid to the pool. Positions always pay borrow fees and are never paid funding.

### Hourly Borrow Rate

Traders pay an hourly borrow fee to the pool based on the hourly borrow rate, position size, and
token utilization percentage. This is computed for each token that a trader borrows.

`hourly borrow fee = tokens borrowed/tokens in the pool * hourly borrow rate * position size`

For example, suppose SOL is at 50% utilization and assuming an hourly funding
rate of 0.01%. Then a trader with a long position SOL-USD of size 1000 USD will
accumulate funding fees at a rate of 0.05 USD per hour.

### Auto Closing Positions that Exceed Maximum Leverage

The maximum allowed leverage is 200x.

Positions where the trader's collateral less fees and less unrealized losses is less than 0.5% of the position size will be liquidated.

Extra fund from position closure will be returned to the trader automatically.

### Oracle

Jupiter Perps always use Pyth oracles on the trading prices and chart data. However, there are 2 types of Pyth oracles, the `mainnet-beta` oracle and the `pythnet` oracle.

For position changes, such as opening, closing or liquidating positions, keeper bots utilize Pyth's mainnet-beta prices. In times of congestion, they will use the backup Pythnet oracles. This improves reliability for traders to adjust their positions.

For chart data, we are using the Pyth [Hermes](https://docs.pyth.network/price-feeds/pythnet-price-feeds/hermes) web service. The Hermes web service is using the prices from Pythnet. There might be slight deviations between the chart and your execution prices occasionally, due to the small variation between `mainnet-beta` and `pythnet` prices.

You can check out the SOL/USD mainnet-beta oracle [here](https://pyth.network/price-feeds/crypto-sol-usd?cluster=solana-mainnet-beta) and the SOL/USD pythnet oracle [here](https://pyth.network/price-feeds/crypto-sol-usd?cluster=pythnet).

You can also utilize [Pyth Benchmarks](https://pyth.network/benchmarks) to check the oracle price for any of Pyth's listed tokens at any timestamp. Use this to independently verify historical oracle prices.
