---
sidebar_label: Limit Order (v1)
title: ApePro Limit Order (v1)
description: Learn more about Ape Pro's Limit Order mechanism.
slug: /apepro/limit-order
---

<head>
    <title>ApePro Limit Order (v1)</title>
    <meta name="twitter:card" content="summary" />
</head>

ApePro Limit Order (v1) allows users to set a Target Price/Mcap (to be referred to interchangeably) for a trade to become automatically be executed once specified conditions are met. Once the order is placed, Ape’s Keeper will continuously monitor the target level and execute the swap when the market price reaches your specified price.

## Understanding Limit Orders on ApePro

On ApePro, limit orders are executed as **market orders within a specified slippage tolerance** once certain price conditions are met. While you can input a target market cap as a reference, **the actual trigger for executing your order is the token's price**, not its market cap. 

When you create your orders, **your MEV protection and slippage settings are saved** and will be applied when the target price is reached. Consequently, the success of your limit orders depends on whether sending transactions via RPC or Jito (MEV Protect) is most suitable under current market conditions.

## Diagram

![ape-pro-v1](../img/ape-lo-1.png)

## Types of Limit Orders

ApePro supports four types of limit orders to suit different trading strategies:

- **Take Profit**: Sell a token when its Target Price cap reaches a specified higher level to secure profits.
- **Stop Loss**: Sell a token when its price / market cap drops to a specified lower level to prevent further losses.
- **Buy Dip**: Buy a token when its price / market cap falls to a specified lower level, allowing you to capitalise on price dips.
- **Buy Above**: Buy a token when its price / market cap rises to a specified higher level, allowing you to buy, allowing you to capitalise on expected momentum.

## Setting Up Limit Orders

To set up a limit order:

1. **Select the `Limit` Tab**: Navigate to the swap widget and click on the `Limit` tab to access limit order options.
2. **Input Trade Details**:
    - **Trade Amount**: Enter the amount of the token you wish to buy or sell.
    - **Target Price or Market Cap**: Input your target price. You can also enter a market cap as a reference, but remember that **the price is what triggers your order**.
3. **Review and Create Order**: Double-check all the details of your order and confirm to create a limit order.

## Managing Your Limit Orders

ApePro provides intuitive tools to help you monitor and manage your orders:

- **Orders Tab**: Located under the chart component, this tab is your central hub for all order-related activities.
- **Open Orders**:
    - Access the `Open Orders` tab to view all your active limit orders.
    - Use filters to narrow down orders for the current token.
    - Cancel your orders here or on the chart.
- **Order History**:
    - The `Order History` tab displays all your past orders.
    - Here, you can see:
        - **Successful Orders**: Details about completed orders — the amount received, the price or market cap your order was filled at etc.
        - **Failed Orders**: Reasons for failure, such as slippage issues or expired orders.
        - **Expired Orders**: Any orders that have passed the 72hr expiry.