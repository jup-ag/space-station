---
sidebar_label: "Price Feed Accounts"
description: "Understand and integrate the Jupiter Perp Program."
title: "Price Feed Accounts"
---

<head>
    <title>Price Feed Accounts</title>
    <meta name="twitter:card" content="summary" />
</head>

This page contains an overview of the **Solana account types** used in the Jupiter Perpetuals Program, and specifically the `PriceFeed` account.

The `PriceFeed` account is a struct which represents a set of parameters and states associated to price data managed by the Dove Oracle Program which consists of the following price feeds.

| Asset | Price Feed Account |
|-------|----------------|
| SOL | [39cWjvHrpHNz2SbXv6ME4NPhqBDBd4KsjUYv5JkHEAJU](https://solscan.io/account/39cWjvHrpHNz2SbXv6ME4NPhqBDBd4KsjUYv5JkHEAJU) |
| ETH | [5URYohbPy32nxK1t3jAHVNfdWY2xTubHiFvLrE3VhXEp](https://solscan.io/account/5URYohbPy32nxK1t3jAHVNfdWY2xTubHiFvLrE3VhXEp) |
| BTC | [4HBbPx9QJdjJ7GUe6bsiJjGybvfpDhQMMPXP1UEa7VT5](https://solscan.io/account/4HBbPx9QJdjJ7GUe6bsiJjGybvfpDhQMMPXP1UEa7VT5) |
| USDC | [A28T5pKtscnhDo6C1Sz786Tup88aTjt8uyKewjVvPrGk](https://solscan.io/account/A28T5pKtscnhDo6C1Sz786Tup88aTjt8uyKewjVvPrGk) |
| USDT | [AGW7q2a3WxCzh5TB2Q6yNde1Nf41g3HLaaXdybz7cbBU](https://solscan.io/account/AGW7q2a3WxCzh5TB2Q6yNde1Nf41g3HLaaXdybz7cbBU) |

:::tip Example Typescript Repository
[The code snippet in the examples repo shows how to fetch and stream onchain price updates from the accounts above](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing/blob/main/src/examples/poll-and-stream-oracle-price-updates.ts)

You can also find the [Custody Account fields in the repository](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing/blob/main/src/idl/doves-idl.ts) or on a [blockchain explorer](https://solscan.io/account/DoVEsk76QybCEHQGzkvYPWLQu9gzNoZZZt3TPiL597e#anchorProgramIdl).
:::
