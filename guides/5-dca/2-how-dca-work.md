---
title: How Jupiter DCA Works
sidebar_label: "How DCA Works"
description: Learn how Dollar Cost Averaging (DCA) works on Jupiter
---

<head>
    <title>How Dollar Cost Averaging Works on Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

## DCA Creation Process

- When you create a DCA order, your tokens will be transferred from your wallet to a program owned associated token account.
- As an example, if you choose to use $USDC to DCA into $SOL, the entire specified $USDC amount will be deposited into your DCA vault.
- The first order takes place immediately after your DCA position has been created and the remaining orders will take place regularly at your selected time interval.
- As an example, if you choose to use 1,000 $USDC to DCA into $SOL, daily over 10 days, the very first order of 100 $USDC -> $SOL will be executed right after the DCA has been successfully created, and there will be 9 more remaining orders of 100 $USDC -> $SOL to be executed daily.

:::caution
To minimize the predictability of your DCA strategy, orders are filled within a randomized padding of +/- 30 seconds from your DCA creation time.
:::

---

## Order Mechanism

:::info DCA Order / Account
A DCA order or account is broken down to many orders. The number of orders depends on the options or iterations you choose. For example, if you choose to DCA into SOL with $900 USDC over 3 days, your DCA order/account will have a total of 3 trades/ transactions of $300 USDC each.
:::

**Scenario with example:**

If you choose to DCA into SOL with $900 USDC over 3 days
- Your first transaction to swap from $300 USDC for SOL will take place immediately after the DCA order has been confirmed.
- Your second transaction to swap the next $300 USDC for SOL will take place approximately 24 hours later after the initial transaction.
- Your third or last transaction to swap the remaining $300 USDC for SOL will take place approximately 24 hours after the second order and so on and so forth.

The amount of SOL you receive depends on the price at the point in time when the transaction executes.

**Continuing with the previous example:**
- During the first order, if the price of SOL is $20 USDC / SOL, you will receive 300 / 20 = 15 SOL.
- During the second order, if the price of SOL is $25 USDC / SOL , you will receive 300 / 25 = 12 SOL.
- During the third order, if the price of SOL is $15 USDC / SOL, you will receive 300 / 15 = 20 SOL.

There is a platform fee of 0.1% for Jupiter DCA. This fee is applied at time of order/ transaction execution.
With the previous example:
- For the first order, instead of receiving 15 SOL, 15 * (100 - 0.1) % = 14.985 SOL, user will receive 14.985 SOL.
- For the second order, 12 * (100 - 0.1) % = 11.988 SOL, user will receive 11.988 SOL.

---

## Automatic Transfer of Purchased Tokens on every order

You will receive purchased tokens in your wallet within the same transaction of each order.

As an example, you choose to DCA $900 USDC over 3 days into SOL.

- On Day 1, you will receive $300 USDC worth of SOL in your wallet automatically. If the price of SOL is $30 USDC / SOL, you will receive 9.97 SOL *(net of fees)* in your wallet.
- On Day 2, you will receive $300 USDC worth of SOL in your wallet. If the price of SOL is $25 USDC / SOL, you will receive 11.988 SOL *(net of fees)* in your wallet.
- On Day 3, you will receive $300 USDC worth of SOL in your wallet. If the price of SOL remains $25 USDC / SOL, you will receive 11.988 SOL *(net of fees)* in your wallet.

:::tip Caveat to auto-withdrawal
In the event your desired purchased token is not SOL, auto withdrawal for each order will only work if you have the correct associated token account (ATA) opened.
:::

- By default, Jupiter DCA opens the necessary ATA for your wallet when you create a Jupiter DCA account. However, if you close your purchased token's ATA manually via your wallet interface or any other 3rd-party tool, tokens will not be transferred to you automatically on every order but only at the end of your DCA cycles as a single lump sum amount. **This is only applicable to SPL tokens. For SOL: Jupiter takes care to open/close your wrapped account.**

- An example:
  1. Say you have a DCA order of 300 $USDC -> $BONK daily over 3 days, and you **close** your wallet's BONK token account before the 2nd trade/ transaction takes place, the 2nd 100 $USDC worth of $BONK will remain in your DCA vault and not be transferred to your wallet automatically.
  1. However, during the 3rd and last trade/ transaction, auto-withdrawal will happen regardless of whether you have an open BONK token account. Based on the example above, even though your BONK tokens did not get transferred to your wallet automatically for your 2nd trade/ transaction, your BONK tokens will be transferred to your wallet on the very last trade - see auto close below for more information.
  1. Regardless, you can choose to withdraw BONK from your DCA vault at anytime through our UI.

---

## Auto Close

:::info Auto Close
At the end of your DCA orders, you do not need to perform any additional actions. Any remaining tokens and rent will be transferred to your wallet account directly.
:::

By default, if your wallet’s ATA remains open, your purchase tokens are automatically transferred to you on every order (the program only allows your tokens to be sent to your wallet and no one else’s).

However, if there are still tokens yet to be transferred to you (ie. if you close your wallet’s token account for your purchase token halfway through the DCA cycle as described in [auto-withdrawal section](https://station.jup.ag/guides/dca/how-dca-work#automatic-transfer-of-purchased-tokens-on-every-order)), the DCA program will close the PDA in-token account and utilize the rent recovered to open your wallet's token account.

This allows the program to transfer the remaining purchased tokens to you. As such, you would only receive 2/3 of the rent incurred to initialise your DCA account. Having said that, this 1/3 rent is not absorbed by any third-party. This rent will remain recoverable by you if you decide to close your ATA that “holds” your purchased token.

:::warning
Do not close your ATA without first withdrawing the tokens or swapping them for other tokens. Doing so can result in the lost of tokens. This is not unique to Jupiter or Jupiter’s DCA. This has to do with how Solana wallets and accounts work.
:::

---

## MEV frontrun mitigation

- Orders are not placed exactly when it is due.
- Orders have a +2 ~ 30 seconds variability, which introduces uncertainty and exposure risk to exploiters and eliminates any sort of risk-free return, rendering front-running a highly risky endeavour.
- Before a transaction is sent to a node, prices are checked and an estimated out-token *(desired token)* amount is pre-calculated.
- In addition to slippage settings, these parameters are included in the transaction and should the out-token amount be less than the expected minimum out-token amount, the transaction would fail.
    - While this does not prevent MEV front-running, similar to a regular AMM swap, users are guaranteed to receive a minimum amount of out-token
    - Transactions can be reverted if an inadequate amount of out-token is received. This ensures prices will not slip to a level where it is sufficiently profitable or at-all profitable for potential front-running bots.
- The very nature of DCA is to split an order into multiple orders over a period of time, this naturally reduces price impact from front-running activities.
