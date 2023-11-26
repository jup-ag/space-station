---
sidebar_label: "How It Works"
description: Key Concepts of Perpetual Exchange
---

# How It Works

## Overview

Our perpetual exchange is LP-to-trader perpetual exchange based on oracle prices.

Our pool consists of 5 tokens, SOL, ETH, WBTC, USDC, and USDT. Liquidity providers deposit one of the pool tokens into the pool in exchange for LP tokens representing their share of the pool.

A trader may open a leveraged position by putting up collateral and borrowing
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

### Leverage by Borrowing from The Pool

To allow for leverage, traders may borrow assets from the pool to create a
larger position. To create a 2x long position SOL-USD, the other 1x SOL will be
borrowed from the pool.

### Swap Integration

Liquidity providers (LPs) may use any token to deposit into one of the pool's
custody. We will use Jupiter Swap to swap the LP's token into the custody's token,
all positions are denominated in USD.

When withdrawing from a custody, LPs may request to receive a
different token than the custody's token. We will use Jupiter Swap to swap the
custody's token to the LP's desired token.

For convenience, we allow traders to open positions using any token and we will
use Jupiter Swap to swap the trader's token to the required token.

### Hourly Borrow Rate

Traders pay an hourly borrow fee to the pool based on the hourly borrow rate, position size, and
token utilization percentage. This is computed for each token that a trader borrows.

`hourly borrow fee = tokens borrowed/tokens in the pool * hourly borrow rate * position size`

For example, suppose SOL is at 50% utilization and assuming an hourly funding
rate of 0.01%. Then a trader with a long position SOL-USD of size 1000 USD will
accumulate funding fees at a rate of 0.05 USD per hour.

### Auto Closing Positions that Exceed Maximum Leverage

The maximum allowed leverage is 250x.

Positions where the trader's collateral less fees and less unrealized losses is
less than 0.4% of the position size are automatically closed.

Extra fund from position closure will be returned to the trader automatically.