---
sidebar_label: Recurring Order FAQ
title: Recurring Order FAQ
description: Frequently Asked Questions of Jupiter Recurring Order
---

<head>
    <title>Recurring Order FAQ</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, we will cover the frequently asked questions of Jupiter Recurring Order.

:::note More Questions?
If you have more questions, please reach out to us on [Discord](https://discord.gg/jup) or open a ticket via the web chatbot below.
:::

---

### 1. How can I view past transactions or history of my Recurring Orders?

You can track your Recurring Orders' history and past transactions by connecting your wallet to https://jup.ag/dca. Your transaction history is linked to a blockchain explorer where you can find in the Recurring Order dashboard.

### 2. Does my Recurring Order automatically retry?

Yes, if a Recurring Order fails due to network issues, slippage thresholds met, or other reasons, Jupiter's Recurring Order program automatically retries the order. This ensures minimal disruption to your Recurring Order strategy. [(Do take note of **backfills** if the Recurring Order misses multiple orders.)](./how-recurring-order-works#backfills)

### 3. Can I get notified when a purchase is made?

Currently, Jupiter or Jupiter Mobile does not natively send notifications on Recurring Orders. However, you can monitor your wallet activity through explorers like Solana Explorer or third-party wallet apps that support alerts for transactions.

### 4. How is the price calculated with each purchase?

The price for each Recurring Order purchase is calculated at the time the transaction is executed. Jupiter checks the **current market price** and includes parameters like slippage settings to ensure you receive a minimum amount of tokens. If the price exceeds the slippage threshold, the transaction will fail in order to protect your funds.

### 5. How can I export my Recurring Order history for tax or other purposes?

Currently, Jupiter does not natively support this feature. However there are a few ways you can export via third-party apps. 
- Blockchain explorers, but requires you to search of Recurring Order accounts and craft the export manually.
- Blockchain indexers like Dune or Flipside, but require you to write your own queries.
- Community built Recurring Order history export, [check out the X (Twitter) post here](https://x.com/callum_codes/status/1847734657107874080).

### 6. What happens to my Recurring Order if the network has issues?

If the Solana network experiences issues, your Recurring Order may temporarily fail. Jupiter's Recurring Order program will **automatically retry** these transactions until the network stabilizes, ensuring your plan continues with minimal disruption.

### 7. Can I make changes to my Recurring Order after setting it up?

No, once a Recurring Order is set up, it cannot be modified. To make changes, you would need to cancel the existing plan and create a new one with your updated preferences.

### 8. Can I pause my Recurring Order temporarily and resume it later?

No, Jupiter's Recurring Order program does not currently support pausing and resuming Recurring Orders. If you need to stop the Recurring Order purchases, you must cancel the plan and create a new one when you're ready to resume.