---
sidebar_label: Recurring Order Security
title: Recurring Order Security
description: Understanding security of Jupiter Recurring Order
---

<head>
    <title>Recurring Order Security</title>
    <meta name="twitter:card" content="summary" />
</head>

Ensuring the security of your investments is paramount, we ensure our programs are audited and tested, additionally incorporating measures to protect against market exploitation.

:::note Working on new updates
We are improving Recurring Order to help tackle this more efficiently and provide more coverage.
:::

---

## Mitigation of Front-running Risks

MEV or Front-running occurs when bots exploit predictable transactions to gain risk-free profits. Jupiter’s Recurring Order program is designed to make front-running a highly risky endeavor, rendering it unprofitable.

- **Order Timing Variability:** Orders are not executed at fixed times but within a randomized window of +2 to 30 seconds. This variability introduces uncertainty, making it nearly impossible for exploiters to anticipate the exact moment a transaction will occur.
    
- **Pre-Validation of Transactions** Before a transaction is sent to the network, Jupiter pre-calculates the estimated amount of the purchased token (out-token) based on current prices.

## Slippage Protections

Transactions have fail-safes to protect users from adverse price impacts.

Slippage thresholds (configured by the team) protect users from unacceptable price variations for their trades. If market conditions or anomalies push the token amount outside these limits, the transaction fails.

- While this does not prevent front-running, similar to a regular AMM swap, users are guaranteed to receive a minimum amount of out-token.

- Transactions can be reverted if an inadequate amount of out-token is received. This ensures prices will not slip to a level where it is sufficiently profitable or at-all profitable for potential front-running bots.

## Natural Protection By Design

The inherent nature of Recurring Order reduces vulnerabilities to MEV attacks:

- Orders are split into smaller transactions over time, minimizing the potential price impact of 1 bigger single trade.
- By spreading purchases across different price points and time windows, Recurring Order reduces the profitability of front-running activities.

## Why This Matters to You

Jupiter’s proactive measures ensure your investments are secure from market exploitation, while its fail-safe mechanisms give you confidence in receiving fair value for your trades. By combining randomized execution, real-time validations, and Recurring Order’s natural resilience, Jupiter protects your portfolio from unnecessary risks, allowing you to focus on achieving your investment goals.