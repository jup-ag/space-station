---
sidebar_label: Oracle
title: Oracle
description: How the JupiterPerpetuals Exchange Oracle works
---

<head>
    <title>Perps: Oracle</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter Perps utilizes a robust Oracle Network, **Dove Oracle**, co-designed by **Jupiter** and **Chaos Labs** and audited by **Offside Labs**. This oracle is built specifically for **Jupiter Perpetuals** and leverages **Chaos' Edge Pricing Data**, ensuring real-time accuracy and reliability. It is also fully accessible for anyone on **Solana**.

---

## Dove Oracle

The Dove Oracle is designed with **Jupiter Perps** in mind, addressing unique needs like **compute efficiency** and **rapid updates**, allowing us to update all 5 oracles (SOL, BTC, ETH, USDC, USDT) when opening and closing positions.

:::tip Using Dove Oracle
To understand the account structure of Dove Oracle and to use the oracle in your own applications, please refer to the [Price Feed Accounts](../../docs/perp-api/price-feed-account) page.
:::

![Dove Oracle](../../static/perps/dove-oracle.png)

### Key Benefits
| Benefits | Old Oracle | Our Oracle |
| --- | ----- | ----- |
| Reliability | Position requests fail if the oracle doesn’t update in 45 seconds. | Position requests are processed instantly with the oracle update in the same transaction. |
| Latency | Trades are delayed as keepers wait for the oracle update before placing orders. | Trades are executed immediately as the oracle data is incorporated into the transaction. |
| Chart | Discrepancy between trades placed and chart data. | Our oracle powers both the trading view chart and position requests, eliminating discrepancies. |

## Oracle Redundancy

It is critical to ensure oracle redundancy, this allows for additional checks, fallbacks to ensure the exchange has the correct price data. The Perps Keepers also utilize Pyth Oracles.

- As a reference price check (sanity check) against the Dove Oracle, ensuring that the deviation is not too big.
- As a fallback price if our oracle's prices are stale.

This way, Jupiter Perps benefits from the Dove oracle while still being able to rely on the Pyth oracle.
