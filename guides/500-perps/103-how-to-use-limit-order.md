---
sidebar_label: How to use limit order
title: How to use limit order?
description: Introduction to how to use limit order
---

<head>
    <title>How to use limit order</title>
    <meta name="twitter:card" content="summary" />
</head>

In this guide, we will walk you through how to use limit order on Jupiter Perps.

---

### Step 1: Create a Limit Order

You can create a limit order to open or increase a position using either USDC or the underlying asset as collateral. For example, when trading SOL-PERP, you can use either USDC or SOL as collateral.

### Step 2: Set Your Limit Price

When creating a limit order, you can set your desired entry price either above or below the current market price.
- Set buy orders below market price to enter on dips
- Set sell orders above market price to enter on rallies

**Long Position Limit Price**

- The maximum limit price of a long position can only be **1% below the current market price**.
- The minimum limit price of a long position is **half of the current market price**.
- If the current market price is 100, the maximum limit price of a long position is 98 and minimum limit price is 50.

**Short Position Limit Price**

- The maximum limit price of a short position can only be **1% above the current market price**.
- The minimum limit price of a short position is **twice the current market price**.
- If the current market price is 100, the maximum limit price of a short position is 102 and minimum limit price is 200.

### Step 3: Understand How Limit Orders Work

Limit orders operate independently from your existing positions.

- They remain active until either triggered at your specified price or manually cancelled.
- If triggered, they will either:
  1. Open a new position if you have no existing position.
  2. Increase and combine with your existing position in that market.
- They stay active even if you close or get liquidated on an existing position.

:::caution Liquidation Price on Order Form
If you do not have an existing position, the liquidation price on the order form for a Limit Order will be the simulated liquidation price based on the position requested.

If you have an existing position, the liquidation price on the order form will **not** be the new liquidation price of your position after your limit order executes, as the limit order will be executed in the future where we do not know the state of the current existing position.
:::

## Limitations

- The Perps V2 Beta does not support multiple limit orders, please cancel the existing limit order before creating a new one.
- When the selected market's utilisation is above 80%, new limit orders cannot be created.