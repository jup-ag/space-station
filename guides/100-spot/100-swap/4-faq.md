---
sidebar_label: Swap FAQ
title: Swap FAQ
description: Frequently Asked Questions of Jupiter Swap
---

<head>
    <title>Swap FAQ</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, we will cover the frequently asked questions of Jupiter Swap.

:::note More Questions?
If you have more questions, please reach out to us on [Discord](https://discord.gg/jup) or open a ticket via the web chatbot below.
:::

---

### 1. What are the fees associated with swaps?

Using Ultra Mode has a 0.1% swap fee and we pay transactions fees on behalf of you (even failed ones), while Manual Mode does not incur any swap fee, but you pay transaction fees yourself. [Refer to Ultra and Manual Mode here](./how-swap-works#ultra-mode).

:::note Other associated fees
Do take note, there are other associated fees / rent fees that may apply such as to create [ATA (Associated Token Accounts)](https://spl.solana.com/associated-token-account) or individual AMM fees.
:::

### 2. Does the quote price include AMM fees?

Yes. The quoted price, displayed when you enter your token and amount to swap, the quoted prices includes the AMM fees and price impact.

### 3. Which wallets are supported?

[Jup.ag](https://jup.ag) supports many types of wallets. We recommend using Jupiter Mobile App (scan to login!) or native Solana wallets such as Phantom, Solflare. You can find more wallets in the top right **"Connect Wallet"** buttonm, such as Google option via TipLink, WalletConnect and others.

### 4. What should I do if my wallet doesn’t connect?

It depends on what type of wallet you are using, you can try restart your browser, clear cache, rest wallet as a last option (but remember to write down your seedphrase/private key first!). However, if it is a non-native Solana wallet, please reach out to our team on [Discord](https://discord.gg/jup) to help take a look.

### 5. What is slippage, and how do I adjust it?

**Slippage** is the difference between the quoted proce and executed price. When you are quoted, it is based on latest market data, but by the time you execute your swap, the market has moved and the difference is the slippage.

**Slippage Threshold** is a safety measure to apply on your swap, if your swap is 20% worse than what is quoted, and your slippage threshold is 1%, the swap will fail.

**Ultra Mode** handles slippage threshold for you dynamically based on what you swap and market conditions. If you want to control your slippage threshold, you can use Manual Mode.

### 6. Why is my transaction taking so long?

In general, Solana transactions should land quickly, however, in times of congestion, your transaction might face difficulty landing due to various reasons. In Ultra Mode, Jupiter handles it for you, while in Manual Mode, you can still configure transaction broadcasting method or transaction fee amount. If you face any issues or need assistance, please reach out to us immediately on [Discord](https://discord.gg/jup).

### 7. Why is my transaction failing?

If it is failing due to slippage or transaction fees, refer to 4. and 5. above, however, if it is happening very often, [please reach out to us on Discord](https://discord.gg/jup).

### 8. Why is my token frozen?

If your token is frozen, this means that you have bought or received a token that retains its freeze authority functionality. Freeze authority allows the token owner to prevent a token account from selling or transferring the tokens out of the account. This can be useful is various situations, but can also be misused, [refer to this section to find out more](./how-to-swap-safely#common-token-features-or-extensions-on-solana).

### 9. Can I swap any token pair?

Yes (most)! Jupiter supports most DEXes/AMMs and aggregates pools that hit our liquidity requirements to be routable.

### 10. How do I find out if my token is routed?

In the Swap interface, you can attempt to swap the token, if the pool is tradable, it will be routed. If not it will show **"No route found"** in the swap button. If you have set up the necessary liquidity pools but cannot swap, [check out this guide](./how-to-get-your-token-on-jupiter#how-to-get-your-pool-routed-on-jupiter).

### 11. What is JupiterZ and why should I use it?

JupiterZ is our RFQ (Request For Quote) mechanism to allow for off-chain market makers to provide a quote and fulfil your swap trades. This method allows for guaranteed prices and they pay the transaction fee on behalf, JupiterZ is zero slippage and zero fees!

### 12. Can I use Jupiter Swap programmatically?

Yes! We have provisioned a Swap API for developers to build applications around it. We do support Price and Token API as well. [Find out more about our API in the developer documentation section](/docs)!
