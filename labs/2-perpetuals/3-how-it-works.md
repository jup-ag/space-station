---
sidebar_label: "How it works"
description: Key concepts of perpetuals.
---

# How it works

## Overview

Perps is peer to pool system based on Oracle prices.

A pool consists of multiple tokens. Liquidity providers desposit one of the
pool tokens into the pool in exchange for LP tokens representing their share of
the pool.

A trader may open a leveraged position by putting up collateral and borrowing
the rest of the position from the pool.

### Example trade

For example, a trader opens a 2x long SOL position at a position size of $100
USD by depositing $50 USD worth of SOL as collateral and borrowing $50 USD
worth of SOL from the pool.

Suppose the SOL price is up 20% when the position is closed. Assuming 0 fees,
the position will have gained $20 USD. The trader will receive $70 USD (50 + 20)
worth of SOL tokens and the rest of the tokens are returned to the pool.

## Providing liquidity

### Swap integration

Liquidity providers (LPs) may use any token to deposit into one of the pool's
custody. We will use Jupiter Swap to swap the LP's token into the custody's token.

When withdrawing from a custody, LPs may request to receive a
different token than the custody's token. We will use Jupiter Swap to swap the
custody's token to the LP's desired token.

### Target ratio and fees

Each token has a target ratio in the pool.

Add liquidity/remove liquidity transactions which bring the token's ratio in
the pool closer to the target ration will have a fee rebate.

In contrast, transactions that move the token's ratio in the pool further away
from the target ration will incur additional fees.

## Trading

To open a long position, a trader deposits collateral matching the underlying
asset. For example, to open long SOL-USD position, the trader deposits SOL.

Conversely, to open a short position, a trader deposits collateral matching one
of the stablecoins in the pool.

For convenience, we allow traders to open positions using any token and we will
use Jupiter Swap to swap the trader's token to the required token.

To allow for leverage, traders may borrow assets from the pool to create a
larger position. To create a 2x long position SOL-USD, the other 1x SOL will be
borrowed from the pool.

### Hourly funding fee

Traders pay an hourly funding fee to the pool based on the hourly funding rate, position size, and
token utilization. This is computed for each token that a trader borrows.

`hourly funding fee = tokens borrowed/tokens in the pool * hourly funding rate * position size`

For example, suppose SOL is at 50% utilization and assuming an hourly funding
rate of 0.01%. Then a trader with a long position SOL-USD of size 1000 USD will
accumulate funding fees at a rate of 0.05 USD per hour.
