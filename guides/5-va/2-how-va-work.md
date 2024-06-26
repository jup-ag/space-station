---
title: How Jupiter VA Works
sidebar_label: "How VA Works"
description: Learn how Value Averaging (VA) works on Jupiter
---

<head>
    <title>How Value Averaging Works on Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

## VA Creation Process

- When you create a VA order, your tokens will be transferred from your wallet to a program owned associated token account.
- As an example, if you choose to use USDC to VA into SOL, the entire specified USDC amount will be deposited into your VA vault.
- The first order takes place immediately after your VA position has been created and the remaining orders will take place regularly at your selected time interval.
- As an example, if you choose to use 1,000 USDC to VA into $SOL, at an increment value of 100 USD per buy, daily over 10 days, the very first order of 100 USDC -> SOL will be executed right after the VA has been successfully created, and the order will continue to execute at your interval and each buy will be 100 USD worth of $SOL.

:::caution
To minimize the predictability of your VA strategy, orders are filled within a randomized padding of +/- 30 seconds from your VA creation time.
:::

---

## Order Mechanism

:::info VA Order / Account
A VA order or account is broken down into many orders. The number of orders depends on the options or iterations you choose. For example, if you choose to VA into SOL with 900 USDC over 3 days, depending on your portfolio strategy, your VA order/account will defer accordingly to the price action.
:::

**Scenario with example:**

If you choose to VA into SOL using 1,000 USDC and increase your portfolio value by $100 per month:

- Your first transaction to buy SOL using 100 USDC will take place immediately after the VA order has been confirmed.
- Your second transaction to buy SOL using USDC will take place approximately 30 days later after the initial transaction.
- Your next transaction to buy SOL using USDC will take place approximately 30 days after the second order and so on.

**Continuing with the previous example:**
If during each buy, the price of SOL drastically changes, this is how value average will execute:

| Month | SOL Price | Total SOL Before | Total Value Before | Target Value | To Spend | To Buy    | Total SOL After | Total Value After |
| ----- | --------- | ---------------- | ------------------ | ------------ | -------- | --------- | --------------- | ----------------- |
| 1     | $100      | 0 SOL            | $0                 | $100         | $100     | 1 SOL     | 1 SOL           | $100              |
| 2     | $50       | 1 SOL            | $50                | $200         | $150     | 3 SOL     | 4 SOL           | $200              |
| 3     | $80       | 4 SOL            | $320               | $300         | $0       | 0 SOL     | 4 SOL           | $320              |
| 4     | $90       | 4 SOL            | $360               | $400         | $40      | 0.444 SOL | 4.444 SOL       | $400              |

VA executes by calculating predetermined amounts for the total value of the investment in future periods, then by making an investment to match these amounts at each period. Essentially, buying more when price is low and buying less when price is high.

**Fees:**
There is a platform fee of 0.1% for Jupiter VA. This fee is applied at time of order/ transaction execution. With the previous example:

- For the first order, instead of receiving 1 SOL, you will receive 1 \* (100 - 0.1) % = 0.999 SOL.
- For the second order, 3 \* (100 - 0.1) % = 2.997 SOL, user will receive 2.997 SOL.

**Other scenarios:**
VA may not _always_ buy at the same interval. For example, the VA order is set to buy at 8AM every day.

- If during the second day, the price of the token had increased, at 8AM, the keeper will calculate the value of your portfolio (which should have increased) and if the current portfolio value is more than the target value at this interval, the keeper will not execute at 8AM rather it will continue to retry. When the price of the token drops, and your portfolio does not meet the current target value, at any time, the keeper will execute a buy (with a minimum value of $0.50).
- If the price of the token increases gradually, and the portfolio meets the first few incremented target value, eventually, the target value should have incremented enough, such that the portfolio needs to buy in order to meet the target value.
- If the price of the token keeps increasing, and the portfolio keeps meeting the target value at every increment, VA does not need to buy.

---

## Value Averaging Token2022 tokens

You can value average any Token2022 tokens **but not those with transfer tax**. The reason is that tokens with transfer tax involved, are able to tax you when a transaction is made, this means that during every purchase in your VA order, the amount taxed is done on every transaction, which might lead you to a loss.

---

## Automatic Transfer of Purchased Tokens on every order

You will receive purchased tokens in your wallet within the same transaction of each order.

Using the previous example:

- For the first order, you will receive $100 worth of SOL in your wallet automatically.
- For the second order, you will receive $150 worth of SOL in your wallet automatically.

:::tip Caveat to auto-withdrawal
In the event your desired purchased token is not SOL, auto withdrawal for each order will only work if you have the correct associated token account (ATA) opened.
:::

By default, Jupiter VA opens the necessary ATA for your wallet when you create a Jupiter VA account. However, if you close your purchased token's ATA manually via your wallet interface or any other 3rd-party tool, tokens will not be transferred to you automatically on every order but only at the end of your VA as a single lump sum amount. **This is only applicable to SPL tokens. For SOL: Jupiter takes care to open/close your wrapped account.**

Alternatively, if you would like to manually claim/withdraw the purchased tokens, you can toggle to the Manual option **before** confirming the VA order.

---

## Auto Close

:::info Auto Close
At the end of your VA orders, you do not need to perform any additional actions. Any remaining tokens and rent will be transferred to your wallet account directly.
:::

By default, if your wallet’s ATA remains open, your purchase tokens are automatically transferred to you on every order (the program only allows your tokens to be sent to your wallet and no one else’s).

However, if there are still tokens yet to be transferred to you (ie. if you close your wallet’s token account for your purchase token halfway through the VA cycle as described in [auto-withdrawal section](https://station.jup.ag/guides/va/how-va-work#automatic-transfer-of-purchased-tokens-on-every-order)), the VA program will close the PDA in-token account and utilize the rent recovered to open your wallet's token account.

This allows the program to transfer the remaining purchased tokens to you. As such, you would only receive 2/3 of the rent incurred to initialise your VA account. Having said that, this 1/3 rent is not absorbed by any third-party. This rent will remain recoverable by you if you decide to close your ATA that “holds” your purchased token.

:::warning
Do not close your ATA without first withdrawing the tokens or swapping them for other tokens. Doing so can result in the loss of tokens. This is not unique to Jupiter or Jupiter’s VA. This has to do with how Solana wallets and accounts work.
:::

---

## MEV frontrun mitigation

- Orders are not placed exactly when it is due.
- Orders have a +2 ~ 30 seconds variability, which introduces uncertainty and exposure risk to exploiters and eliminates any sort of risk-free return, rendering front-running a highly risky endeavour.
- Before a transaction is sent to a node, prices are checked and an estimated out-token _(desired token)_ amount is pre-calculated.
- In addition to slippage settings, these parameters are included in the transaction and should the out-token amount be less than the expected minimum out-token amount, the transaction would fail.
  - While this does not prevent MEV front-running, similar to a regular AMM swap, users are guaranteed to receive a minimum amount of out-token
  - Transactions can be reverted if an inadequate amount of out-token is received. This ensures prices will not slip to a level where it is sufficiently profitable or at-all profitable for potential front-running bots.
- The very nature of VA is to split an order into multiple orders over a period of time, this naturally reduces price impact from front-running activities.
