---
sidebar_label: "Troubleshooting"
description: Common questions about using the Jupiter SDK / API
---
# Troubleshooting: Common Questions About Using the Jupiter SDK / API

## Swap Execution

Common transaction error:

> Program log: Custom program error: 0x1771

> Program Jupiter Aggregator v6 consumed 67018 of 200000 compute units

> Program returned error: custom program error: 0x1771

`0x1771` occurs when the Slippage tolerance is exceeded, so when the final out amount is less than the minimum out amount.

## Wrap and Unwrap SOL

You can refer to the documentation here: https://solanacookbook.com/references/token.html#how-to-manage-wrapped-sol.

## Transaction Confirmation Timeout

From time to time, you may see an error message like `Transaction was not confirmed in 60.00 seconds.`, this means that your transaction expires without being confirmed. To learn how to mitigate this problem, you should read this brilliant article about Solana transaction here:
https://jstarry.notion.site/Transaction-confirmation-d5b8f4e09b9c4a70a1f263f82307d7ce