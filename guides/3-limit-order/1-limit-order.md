---
sidebar_label: How to Use Limit Order
title: How to Use Limit Order
Description: Learn how to place a limit order on Jupiter with this beginners guide.
---

<head>
    <title>How To Place a Limit Order Using Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter Limit Order provides the easiest way to place limit orders on Solana, offering the widest selection of token pairs and leveraging all the available liquidity across the entire Solana ecosystem. With Jupiter Limit Order, you have the flexibility to buy or sell any token pair according to your specified price limit.

:::tip Order Minimum & Fees
The Jupiter Limit Order feature has a minimum order size requirement of $5 (underlying assets must be greater thann $5 per order) and there is a 0.1% platform fee.
:::

## Basic Limit Order User Flow

1. First, navigate to the [Jupiter Website](https://jup.ag/) and then Click on the Limit Order product icon below the top navigation bar. **Double check** that the URL in your search bar is correct: https://jup.ag/limit
2. Next, connect your wallet by clicking the `Connect Wallet` button in the upper right corner of the site.
3. Select the token you are selling and the token you are buying on the terminal.
4. Enter the amount of the token you are selling in the amount field, set the execution price for the order, and the expiry option in the selector. 
5. Double check the limit order inputs and if things look good, click the `Place Limit Order` button.
6. Confirm the wallet notification and the Limit Order will be submitted to the system. 
7. A notification toast will appear in the lower left corner that will notify user once the transaction has been sent and has completed.
8. Your new Limit Order will populate the Open Orders Section below the Terminal once it is confirmed and the UI updates.

**Lets go through the Limit Order Settings in more detail below.**

:::info
Global Settings still apply to the Limit Order Functionality, please reference [global settings](https://station.jup.ag/guides/jupiter-swap/swap#global-settings) for more information.
:::

## Jupiter Limit Order Settings

![Limit Order 2](../img/limit-order/limit-order-1.png)

1. **Input:** Pick a token from the token selector and specify the amount of token that you're selling.
2. **Rate/ Price:** Here you specify the rate / price that you're buying the output token (Or `Use Market` for the current market price).
3. **Expiry:** Set an expiry period for your order, from 10 minutes to Custom, or even Never.
4. **Output:** Jupiter Limit Order will be able to compute your parameters and come up with the rate that you'll be getting.
5. **Place Order:** Once you've reviewed the order details, you will be able to place the limit order and submit the transaction over to the system.

### Open Order

![Limit Order 4](../img/limit-order/limit-order-2.png)

Open Order section is where users keep track of submitted order/ transaction that has yet to be fulfilled.

1. **Order Info:** Order info specifies user's order from TokenA _(Selling)_ to TokenB _(Buying)_ and the amount for the order
2. **Price:** Price is the rate that is being submitted for the order - When the on-chain price of the purchase token hits, order will be executed
3. **Expiry:** Expiry period set by user when submitting the order - in this example it's `Never`, therefore order will remain active on-chain until the price hits, then order will be executed
4. **Filled Size:** Filled size is the section to monitor the fulfillment size of the order. If it is a large order, and there is insufficient liquidity on-chain, Jupiter's keeper will try to execute partially, and continue monitoring on-chain price to fulfill the rest of the order. If order is fully executed, Jupiter will send the token directly to user's wallet. There is no claiming process required
5. **Action:** Action is where user will be able to cancel and close their order/position

### Order History

![Limit Order 3](../img/limit-order/limit-order-3.png)

Order History section is where users keep track of orders that have been completed or cancelled.

1. **Price:** Price is the rate that is being submitted for the order - when the on-chain price of the purchase token hits, order will be executed
2. **Limit Price:** Limit Price is the single unit price for the order - X amount of TokenA per TokenB
3. **Expiry:** Expiry period set by user when submitting the order - in this example it's `Never`, hence order will be on-chain until the price hits and be executed.
4. **Filled Size:** Filled size shows how much of total order size has been fulfilled
5. **Status:** Status indicates the order state - Completed / Cancelled
6. **Action - Create:** This is the first transaction that is being submitted, creating the order of trade to submit on-chain.
7. **Action - Trade:** This is the actual trade transaction being executed when the on-chain price hits the specified price submitted by user.
8. **Action - Cancel:** This is the cancellation of the order/ trade, where funds/ tokens will be refunded back to wallet

