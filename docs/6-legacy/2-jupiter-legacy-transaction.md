---
sidebar_label: "Legacy Txns"
description: "About Jupiter Legacy Transactions"
---

# About Jupiter Legacy Transactions
## Multiple Transactions

Due to transaction size limits, some swap routes cannot fit into a single transaction.  In this case Jupiter will return up to 3 transactions while preserving all swap instructions in a single swap transaction.

- If Jupiter returns 3 transactions it will be:
    - **setupTransaction** - used to handle creating ATA or Serum open order accounts.
    - **swapTransactions** - performing the actual swaps.
    - **cleanupTransaction** - unwrap SOL if a SOL swap.
- If Jupiter returns a single transaction it will be the `swapTransaction`.
- Wallets on Solana can sign multiple transactions in 1 click
    - https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/base/src/signer.ts#L7
- You must send each transaction sequentially in the order setupTransaction -> swapTransaction -> cleanupTransaction and wait for each to be 'confirmed' before sending the next one.
    - This article is helpful: https://jstarry.notion.site/Transaction-confirmation-d5b8f4e09b9c4a70a1f263f82307d7ce
    - A common error is for an RPC node's cache to not get updated between the `setupTransaction` and `swapTransaction`. The `setupTransaction` will create the ATA account, so the account will be on-chain but not in the RPC node's cache. In this case, you can contact your RPC provider to work with them on this.
- If you want to only deal with a single tx for any swap, you use the `onlyDirectRoutes` option which will disable multi-hop routing and trade splitting.

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