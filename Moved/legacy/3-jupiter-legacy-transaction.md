---
sidebar_label: "Legacy Txns"
description: "About Jupiter Legacy Transactions"
---

# About Jupiter Legacy Transaction
The latest v6 API will only return one swapTransaction when `asLegacyTransaction=true` is supplied to enable legacy transactions. So you no longer need to do a setup or cleanup transaction.

Due to transaction size limits, only certain amms can be swapped through together. 

## Swap Success / Failure

:::info [Jupiter Swap Success/Failure Stat](https://dune.com/Arowana87/jupiter-aggregator)
:::

- The typical **swap success rate for Jupiter is 93.7%** excluding failures due to slippage.
- One of the most prominent errors is the UI not limiting the input amount properly resulting in trying to swap with more tokens than the user has available.
    - The errors for this is {"Custom":1} from Token Program and {"Custom":40} from Raydium AMM.
- {"Custom":6000} is slippage rate failure.
- You may see lower swap success rate if...
    - You use the SDK and are not limiting the intermediate tokens to the most liquid tokens.  By default, the SDK will use all tokens as intermediary tokens.
    - Your trade sizes are very small, < $1.
    - In this case the swap route will route through the long tail of token markets which are not very durable and can disappear as another swap takes it.
    - But this is generally not a real-world swap.