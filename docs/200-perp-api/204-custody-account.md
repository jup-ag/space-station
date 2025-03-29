---
sidebar_label: "Custody Account"
description: "Understand and integrate the Jupiter Perp Program."
title: "Custody Account"
---

<head>
    <title>Custody Account</title>
    <meta name="twitter:card" content="summary" />
</head>

This page contains an overview of the **Solana account types** used in the Jupiter Perpetuals Program, and specifically the `Custody` account.

The `Custody` account is a struct which represents a set of parameters and states associated to custodies (tokens) managed by the JLP pool which consists of the following custodies.

<table>
  <tr>
    <th colspan="5">Custodies</th>
  </tr>
  <tr>
    <td><a href="https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz">SOL</a></td>
    <td><a href="https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn">ETH</a></td>
    <td><a href="https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm">BTC</a></td>
    <td><a href="https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa">USDC</a></td>
    <td><a href="https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk">USDT</a></td>
  </tr>
</table>

:::tip Example Typescript Repository
This [repository](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing) contains Typescript code samples on interacting with the Jupiter Perpetuals program IDL with `anchor` and `@solana/web3.js`

You can also find the [Custody Account fields in the repository](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing/blob/1a0b5dc71081958895691047a9aa8ba51d2a8765/src/idl/jupiter-perpetuals-idl.ts#L2397) or on a [blockchain explorer](https://solscan.io/account/PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu#anchorProgramIdl).
:::

## Account Details

Each `Custody` account contains the following data:

| Field | Description |
| --- | --- |
| `pool`             | **Type:** `publicKey`<br /><br />The public key for the pool that this custody belongs to (i.e. the JLP pool). |
| `mint`             | **Type:** `publicKey`<br /><br />The public key for the custody's token mint account. |
| `tokenAccount`     | **Type:** `publicKey`<br /><br />The associated token account of the custody which holds the tokens under management for the pool. |
| `decimals`         | **Type:** `u8`<br /><br />The number of decimals used for the token which is the same as the number of decimals specified in the token mint account. This is stored for convenience. |
| `isStable`         | **Type:** `bool`<br /><br />A boolean flag indicating if the token in custody is a stable asset. |
| `oracle`           | **Type:** `OracleParams`<br /><br />Contains data for the price oracle used for the custody. |
| `pricing`          | **Type:** [`PricingParams`](#pricingparams)<br /><br />Contains data for the custody's price-related logic. |
| `permissions`      | **Type:** `Permissions`<br /><br />A set of global flags that can be set by the protocol's administrator to enable or disable trade actions which is useful during program upgrades or black swan events. |
| `targetRatioBps`   | **Type:** `u64`<br /><br />The target weightage (in basis points) for the custody in the JLP pool. |
| `assets`           | **Type:** [`Assets`](#assets)<br /><br />Contains data used to calculate PNL, AUM, and core business logic for the program. |
| `fundingRateState` | **Type:** [`FundingRateState`](#fundingratestate)<br /><br />Contains data used to calculate borrow fees for open positions. |

### `PricingParams`

| Field | Description |
| --- | --- |
| `tradeImpactFeeScalar` | **Type:** `u64`<br /><br />Sets the base value when calculating price impact fees when opening or closing positions. |
| `maxLeverage` | **Type:** `u64`<br /><br />Sets the max leverage for this custody's positions. The max leverage for all custodies is 500x at the time of writing. |
| `maxGlobalLongSizes` | **Type:** `u64`<br /><br />The maximum total position size (USD) for long positions. |
| `maxGlobalShortSizes` | **Type:** `u64`<br /><br />The maximum total position size (USD) for short positions. |

### `Assets`

| Field | Description |
| --- | --- |
| `feesReserves` | **Type:** `u64`<br /><br />The fees collected by all open positions for the custody. `feesReserves` resets to zero when the fees are distributed to the pool and protocol. |
| `owned` | **Type:** `u64`<br /><br />The number of tokens owned by the pool for the custody.<br />- The owned value is increased either by providing liquidity to the pool or depositing collateral when opening or updating positions.<br />- Conversely, the owned value decreases when liquidity is removed from the pool or collateral is withdrawn from closing positions. |
| `locked` | **Type:** `u64`<br /><br />The number of tokens locked by the pool for the custody to pay off potential profits for open positions. |
| `guaranteedUsd` | **Type:** `u64`<br /><br />This value represents the total amount borrowed in USD (position size - collateral) across all long positions.<br /><br />It is updated whenever traders modify their collateral through deposits or withdrawals. The system uses this aggregated figure to efficiently calculate the total profit and loss (PNL) for all long positions, which in turn is used to calculate the AUM of the JLP pool. |
| `globalShortSizes` | **Type:** `u64`<br /><br />Stores the total amount (USD) position sizes for all short positions. |
| `globalShortAveragePrices` | **Type:** `u64`<br /><br />Stores the average price (USD) for all short positions.<br /><br />This value and `globalShortSizes` are used to calculate the PNL for all short positions efficiently, and is again used to calculate the AUM of the JLP pool. |

### `FundingRateState`

| Field | Description |
| --- | --- |
| `cumulativeInterestRate` | **Type:** `u128`<br /><br />Traders are required to pay hourly borrow fees for opening leveraged positions. This fee is calculated based on two primary factors: the size of the trader's position and the current utilization of the pool for the custody.<br /><br />To calculate borrow fees more efficiently, each custody account contains a value called `cumulativeInterestRate`.<br /><br />Correspondingly, each position account stores a `cumulativeInterestSnapshot` which captures the value of `cumulativeInterestRate` at the time of the position's last update. Whenever there's a change in either the borrowed assets or the total assets within a custody, the `cumulativeInterestRate` for the custody is updated.<br /><br />The difference between the custody's `cumulativeInterestRate` and the position's `cumulativeInterestSnapshot` is then used to calculate the position's borrow fees. |
| `lastUpdate` | **Type:** `i64`<br /><br />The UNIX timestamp for when the custody's borrow fee data was last updated. |
| `hourlyFundingDbps` | **Type:** `u64`<br /><br />A constant used to calculate the hourly borrow fees for the custody. The Jupiter Perpetuals exchange works with Chaos Labs to update and fine tune the `hourlyFundingDbps` to respond to traders' feedback and market conditions. |
