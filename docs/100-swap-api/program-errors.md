---
sidebar_label: "Program Errors"
description: "Program errors for the Jupiter Swap Program."
title: "Program Errors"
---

<head>
    <title>Swap Program Errors</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, you can find the list of errors that can be returned by the Jupiter Swap Program.

:::info Jupiter Swap Program IDL
You can find the full Swap Program IDL here:
https://solscan.io/account/JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4#anchorProgramIdl
:::

:::tip Other DEX Program Errors
In the swap transaction, the DEX in the routing may return errors. You can find some of their IDLs and/or error codes in an explorer.

If you need additional help, please reach out to Jupiter Support.
:::

## Jupiter Swap Program Errors

| Error Code | Error Name | Description |
| ---------- | ---------- | ----------- |
| 6000 | EmptyRoute | Empty route |
| 6001 | SlippageToleranceExceeded | Slippage tolerance exceeded |
| 6002 | InvalidCalculation | Invalid calculation |
| 6003 | MissingPlatformFeeAccount | Missing platform fee account |
| 6004 | InvalidSlippage | Invalid slippage |
| 6005 | NotEnoughPercent | Not enough percent to 100 |
| 6006 | InvalidInputIndex | Token input index is invalid |
| 6007 | InvalidOutputIndex | Token output index is invalid |
| 6008 | NotEnoughAccountKeys | Not Enough Account keys |
| 6009 | NonZeroMinimumOutAmountNotSupported | Non zero minimum out amount not supported |
| 6010 | InvalidRoutePlan | Invalid route plan |
| 6011 | InvalidReferralAuthority | Invalid referral authority |
| 6012 | LedgerTokenAccountDoesNotMatch | Token account doesn't match the ledger |
| 6013 | InvalidTokenLedger | Invalid token ledger |
| 6014 | IncorrectTokenProgramID | Token program ID is invalid |
| 6015 | TokenProgramNotProvided | Token program not provided |
| 6016 | SwapNotSupported | Swap not supported |
| 6017 | ExactOutAmountNotMatched | Exact out amount doesn't match |
| 6018 | SourceAndDestinationMintCannotBeTheSame | Source mint and destination mint cannot the same |
