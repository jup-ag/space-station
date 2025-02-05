---
sidebar_label: Trigger Order FAQ
title: Trigger Order FAQ
description: Introduction to Trigger Order FAQ
---

<head>
    <title>Trigger Order FAQ</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, we will cover the frequently asked questions of Jupiter Trigger Order.

:::note More Questions?
If you have more questions, please reach out to us on [Discord](https://discord.gg/jup) or open a ticket via the web chatbot below.
:::

---

### 1. What happens if my Trigger Order doesn't execute?

Trigger Orders remain active until either they are executed, cancelled by you, or expire (if you set an expiry time). If the trigger price is never reached, the order will stay pending until you cancel it.

### 2. Can I modify my Trigger Order after setting it up?

No, once a Trigger Order is placed, it cannot be modified. You would need to cancel the existing order and create a new one with your desired changes.

### 3. How accurate is the price triggering mechanism?

Jupiter's Trigger Order system monitors prices in real-time using our routing engine. Do not compare the prices on other exchanges or charts as they might differ.

### 4. What happens to my funds when I place a Trigger Order?

When you place a Trigger Order, the funds you're selling are locked in a secure order account until the order executes or is cancelled. This ensures the funds are available when the trigger price is reached.

### 5. Can I set multiple Trigger Orders?

Yes, you can set multiple Trigger Orders simultaneously as long as you have sufficient funds for each order. Each order operates independently.

### 6. How do I know if my Trigger Order has executed?

You can track your Trigger Orders in the "Active Orders" section of the interface. Once executed, the order will move to your transaction history, and the tokens will be transferred to your wallet.

### 7. Can I use Trigger Order as a Stop Loss or Take Profit?

You cannot use Trigger Order as a stop loss. Due to the design and limitations, Trigger Order will attempt to execute your order at the exact price you set, refer to [How Trigger Order Works](/guides/spot/trigger/how-trigger-order-works) for more details.

### 8. Why might my Trigger Order fail to execute?

Common reasons for failed execution include:
- Exceeding the 0% slippage tolerance
- Insufficient liquidity in the market
- Network congestion

### 9. Is there a time limit for Trigger Orders?

By default, Trigger Orders remain active indefinitely until executed or cancelled. However, you can optionally set an expiration time when creating the order.

### 10. Can I cancel a Trigger Order that hasn't executed yet?

Yes, you can cancel any pending Trigger Order at any time through the interface, including orders that have partially executed. The funds in the order account will be returned to your wallet upon cancellation.
