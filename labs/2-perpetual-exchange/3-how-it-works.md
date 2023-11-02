---
sidebar_label: "How It Works"
description: Key Concepts of Perpetual Exchange
---

# How it works

## Overview

Our perpetual exchange is LP-to-trader perpetual exchange based on oracle prices.

Our pool consists of 5 tokens, SOL, ETH, WBTC, USDC, and USDT. Liquidity providers desposit one of the pool tokens into the pool in exchange for LP tokens representing their share of the pool.

A trader may open a leveraged position by putting up collateral and borrowing
the rest of the position from the pool.

## For Traders

### Example trade

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

### Leverage by borrowing from the pool

To allow for leverage, traders may borrow assets from the pool to create a
larger position. To create a 2x long position SOL-USD, the other 1x SOL will be
borrowed from the pool.

### Swap integration

Liquidity providers (LPs) may use any token to deposit into one of the pool's
custody. We will use Jupiter Swap to swap the LP's token into the custody's token.

When withdrawing from a custody, LPs may request to receive a
different token than the custody's token. We will use Jupiter Swap to swap the
custody's token to the LP's desired token.

For convenience, we allow traders to open positions using any token and we will
use Jupiter Swap to swap the trader's token to the required token.

### Hourly funding fee

Traders pay an hourly funding fee to the pool based on the hourly funding rate, position size, and
token utilization. This is computed for each token that a trader borrows.

`hourly funding fee = tokens borrowed/tokens in the pool * hourly funding rate * position size`

For example, suppose SOL is at 50% utilization and assuming an hourly funding
rate of 0.01%. Then a trader with a long position SOL-USD of size 1000 USD will
accumulate funding fees at a rate of 0.05 USD per hour.

### Auto closing positions that exceed maximum leverage

The maximum allowed leverage is 100x.

Positions where the trader's collateral less fees and less unrealized losses is
less than 1% of the position size are automatically closed.

Extra fund from position closure will be returned to the trader automatically.

## For LPs

### Providing liquidity

Liquidity providers acts as the counterparty to traders. Traders borrow tokens
from the pool to open a leveraged position.

When positions are closed, the trader's gains are paid out from the borrowed
tokens. Similarly, the trader's losses are paid out to the pool from the
trader's collateral.

### Target ratio and fees

Each token has a target ratio in the pool.

Add liquidity/remove liquidity transactions which bring the token's ratio in
the pool closer to the target ration will have a fee rebate.

In contrast, transactions that move the token's ratio in the pool further away
from the target ration will incur additional fees.

The pool is also integrated with Jupiter to provide more liquidity to the Solana
ecosystem. At the same time, this swap mechanism is also acting as a way to rebalance
the token ratio in the pool as well.

## Fees

| Action | Fee |
|---|---|
| Opening a Position | 10 BPS |
| Closing a Position | 10 BPS |
| Swap Fee | Between 0 BPS to 200 BPS depending on pool weightage |