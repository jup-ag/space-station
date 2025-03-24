---
sidebar_label: "Program Errors"
description: "Program errors for the Jupiter Swap Program."
title: "Program Errors"
---

<head>
    <title>Swap Program Errors</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, you can find the list of errors that can be returned by the Jupiter Swap Program or from other programs like DEXes, System or Token programs.

## Solana Program Errors

| Program | Link |
| ------- | -------------- |
| Token Program | https://github.com/solana-program/token/blob/main/program/src/error.rs |
| Token2022 Program | https://github.com/solana-program/token-2022/blob/main/program/src/error.rs |
| Associated Token Account Program | https://github.com/solana-program/associated-token-account/blob/main/program/src/error.rs |
| Other Solana Programs | https://github.com/solana-program |

## Jupiter Swap Program Errors

:::note Jupiter Swap Program IDL
You can find the full Swap Program IDL here:
https://solscan.io/account/JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4#anchorProgramIdl
:::

:::info Abnormal Error Rates
If you face high or consistent amounts of errors, please reach out to [Jupiter Discord](https://discord.gg/jup).
:::

| Error Code | Error Name | Debug |
| ---------- | ---------- | ----------- |
| 6001 | SlippageToleranceExceeded | Try higher fixed slippage or use [`dynamicSlippage`](/docs/swap-api/send-swap-transaction#how-jupiter-estimates-slippage) |
| 6008 | NotEnoughAccountKeys | Likely modified swap transaction causing missing account keys |
| 6014 | IncorrectTokenProgramID | Likely attempted to take platform fees on a Token2022 token  |
| 6017 | ExactOutAmountNotMatched | Similar to slippage |

## DEX Program Errors

In the swap transaction, the DEX in the routing may return errors. You can find some of their IDLs and/or error codes in an explorer. If they do not support public IDLs or open source code, you can reference the common errors below or if you need additional help, please reach out to [Jupiter Discord](https://discord.gg/jup).

| Error | Description |
| --- | --- |
| Error related to tick array or bitmap extension account | Similar to slippage, the price or market has "moved out of range", hence the swap transaction failed. |

## Best Practices

It is important to understand the error codes returned by programs when your products are user facing. This will help you provide a better experience for your users, helping them make an informed decision or follow up step to help their transaction succeed.


:::tip Jup.ag as a reference
You can use https://jup.ag/ as a reference to understand how we handle errors on the UI.
:::

| Error Type | Best Practice |
| ---------- | ------------- |
| Slippage exceeding threshold | Show the user the current slippage tolerance and the incurred slippage |
| Insufficient funds | Show the user the current balance of the account and the required balance |
| Non Jupiter Program Errors | Allow the user to retry with a different route and/or exclude the specific DEX from the quote request |
