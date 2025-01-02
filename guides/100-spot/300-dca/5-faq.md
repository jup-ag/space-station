---
sidebar_label: DCA FAQ
title: DCA FAQ
description: Frequently Asked Questions of Jupiter DCA
---

<head>
    <title>DCA FAQ</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, we will cover the frequently asked questions of Jupiter DCA.

:::note More Questions?
If you have more questions, please reach out to us on [Discord](https://discord.gg/jup) or open a ticket via the web chatbot below.
:::

---

### 1. How can I view past transactions or history of my DCA plans?

You can track your DCA plans' history and past transactions by connecting your wallet to https://jup.ag/dca. Your transaction history is linked to a blockchain explorer where you can find in the DCA dashboard.

### 2. Does my DCA plan automatically retry?

Yes, if a DCA purchase fails due to network issues, slippage thresholds met, or other reasons, Jupiter's DCA program automatically retries the order. This ensures minimal disruption to your DCA strategy. [(Do take note of **backfills** if the DCA misses multiple orders.)](./how-dca-works#backfills)

### 3. Can I get notified when a purchase is made?

Currently, Jupiter or Jupiter Mobile does not natively send notifications on DCA orders. However, you can monitor your wallet activity through explorers like Solana Explorer or third-party wallet apps that support alerts for transactions.

### 4. How is the price calculated with each purchase?

The price for each DCA purchase is calculated at the time the transaction is executed. Jupiter checks the **current market price** and includes parameters like slippage settings to ensure you receive a minimum amount of tokens. If the price exceeds the slippage threshold, the transaction will fail in order to protect your funds.

### 5. How can I export my DCA history for tax or other purposes?

Currently, Jupiter does not natively support this feature. However there are a few ways you can export via third-party apps. 
- Blockchain explorers, but requires you to search of DCA order accounts and craft the export manually.
- Blockchain indexers like Dune or Flipside, but require you to write your own queries.
- Community built DCA history export, [check out the X (Twitter) post here](https://x.com/callum_codes/status/1847734657107874080).

### 6. What happens to my DCA plan if the network has issues?

If the Solana network experiences issues, your DCA orders may temporarily fail. Jupiter's DCA program will **automatically retry** these transactions until the network stabilizes, ensuring your plan continues with minimal disruption.

### 7. Can I make changes to my DCA plan after setting it up?

No, once a DCA plan is set up, it cannot be modified. To make changes, you would need to cancel the existing plan and create a new one with your updated preferences.

### 8. Can I pause my DCA plan temporarily and resume it later?

No, Jupiter's DCA program does not currently support pausing and resuming DCA plans. If you need to stop the DCA purchases, you must cancel the plan and create a new one when you're ready to resume.