---
title: User Guide
---

# User Guide
---

## How to use Jupiter
---

*A community guide to swapping on Jupiter's dApp.*

This guide was created through contributions from the following community members:  [@Cryptolasp](https://twitter.com/cryptolasp) [@DucPhuBui1](https://twitter.com/DucPhuBui1) [@Val_chi44](https://twitter.com/Val_chi44)

:::info [Why do I need Jupiter?](https://oneel.notion.site/Jupiter-Aggregation-0ef3149cd3bb485b8e118432e6cf8472)
Click the link to read why you need Jupiter written by community member @oneel_d
:::

## Trading

**1. First make sure your URL is correct: https://jup.ag**

**2. Connect your wallet by clicking the button in the upper right corner.**

*Jupiter supports many wallets, including Phantom, Solflare, Backpack, Ledger.*

**3. After connecting your wallet to Jupiter, you can enter the number of tokens and token pairs you want to swap from the search box. For example “100 USDC to DFL”**

**4. Jupiter will find the best priced routes for you and automatically choose the one that will give you the most tokens.**
You can expand the list to see the types of of smart routing that Jupiter will find for your trade.  Jupiter aggregates liquidity from the Orca, Raydium, Serum, Mercurial, Saber, Penguin Finance, Step Finance and Cropper so routes can include any combination of those DEXes. 

:::tip Jupiter charges no fees.
There are no protocol fees on Jupiter.  The only fees are transaction fees and exchange fees.  If you see more SOL deducted than what you expect, then, it is probably due to deposits for creating Associated Token Accounts or Serum Open Orders account. 

Fees are already factored into the # of tokens you will receive when choosing a route.
See What is price info below for more details on fees and deposits.
:::


<details open>
<summary>What is price info?</summary>

<b>Below the swap button, you will see important price information.</b>
<ul>
<li><b>Rate:</b> This will show you the price you are paying for the selected route. You can click to toggle this rate.</li>
<li><b>Within x% of CoinGecko:</b>  Jupiter will check if the rate you are getting is close to the market rate.  If the price you will pay is 2% or greater than the price on CoinGecko we will show you a warning.</li>
<li><b>Price impact:</b>  The size of your trade can also affect the rate that you get.  Price impact measure how much the size of your trade is affecting your price.  Jupiter will show a warning if it 2% or greater.</li>
<li><b>Minimum Received:</b>  This is the minimum amount of tokens you are guaranteed to received and is based on your slippage settings but also has factored in all the fees.</li>
<li><b>Fees paid to xxx:</b>  These are the exchange fees paid and there is a fee paid per hop in a route.</li>
<li><b>Transaction Fee:</b>  This is the fee you will pay for the transaction regardless if the transaction is successful or not.</li>
<li><b>Deposit:</b>  This is the rent paid to create an ATA account that will hold your token data, e.g. how much token you own. Or it is the rent paid to create a Serum OpenOrders account needed to trade on Serum.  Your deposit can be reclaimed by closing those accounts.  You can use this tool to reclaim them.</li>
</ul>
</details>

**5. Before swapping, you can select the slippage rate by clicking the settings button.**
Your slippage rate is an important setting.  It determines the minimum number of tokens you will receive.  A slippage of 1% means if the price slips > 1% of your quote, do not complete the transaction.

:::info What is Slippage?
This is because between the time you get a quote and the time you execute the trade the price may change.  If the price falls below your slippage rate, then the transaction will fail in order to prevent you from getting less tokens than you want.
:::

**6. After clicking the swap button, the wallet you have connected to Jupiter will ask you to approve the transaction.  If click approve, your swap will be executed.**

**7. A notification will appear in the lower-left corner that will once the transaction has been sent and will let you know when it has been completed.**

**8. You can view your transaction history by clicking the arrow on the right of the screen.**

## Stats
The stats page shows the total amount of transactions done and the top trading pairs with a link to swap them directly. It also shows the top tokens overall, the top buys, sells, and top pool providers in Solana by their daily, weekly, and monthly trade volume.


## How to use Jupiter Limit Order
---

Jupiter Limit Order (Beta) provides users with the simplest way to place limit orders on Solana and receive tokens directly in your wallet when the order is filled!

![Limit Order](/img/limit-order.png)

**Key Benefits:**

1. Users can place an order with an expiration time. At the end of the period, the crank will cancel any unfilled orders and refund the token to the user's wallet. 
2. Limit orders ensure you'll get what you quote with no slippage, which is especially useful during volatile periods. 
3. Transactions will not fail because of slippage errors.

:::info Order execution
Jupiter will execute your limit order based on the available liquidity on-chain. Therefore, if there is insufficient on-chain liquidity when the market price reaches your limit price, it is possible that your order may not be filled precisely.
:::

### How to place a Limit Order

![Limit Order 2](/img/limit-order2.png)

1. **Input:** Pick a token from the token selector and specify the amount of token that you're selling.
2. **Rate/ Price:** Here you specify the rate / price that you're buying the output token (Or `User Market` for the current market price)
3. **Expiry:** Set an expiry period for your order, from 10 minutes to Custom and even Never.
4. **Output:** Jupiter Limit Order will be able to compute your parameters and come up with the rate that you'll be getting.
5. **Place Order:** Once you've reviewed the summary of your order, you will be able to place order and submit the transaction over to Jupiter Limit Order.

### How Limit Order Works

:::tip This is not an order book system. The limit order system utilizes a keeper to help monitor the token prices on-chain and trigger the fulfillment of orders.
:::

- For instance, if a Limit Order is placed to buy 0.714 SOL with 10 USDC at a rate of 14 USDC per SOL.
- The keeper will monitor the price on-chain using Jupiter.
- If the keeper detects that the on-chain price of SOL hits 14 USDC per SOL, it will proceed to get execute and fulfill the order.
- Keepers are recommended to execute using Jupiter in 1 transaction, to make sure the order executes when there is profit. But keepers are free to execute it off-chain or using other on-chain DEX
- After the order is executed, the user will get exactly what he quoted for → 0.71428 SOL minus the platform fee (0.2%). 

### Open Order & Order History


**Open Order**
![Limit Order 4](/img/limit-order4.png)

Open Order section is where users keep track of submitted order/ transaction that has yet to be fulfilled.

1. **Order Info:** Order info specifies user's order from TokenA *(Selling)* to TokenB *(Buying)* and the amount for the order.
2. **Price:** Price is the rate that is being submitted for the order - When the on-chain price of the purchase token hits, order will be executed.
3. **Expiry:** Expiry period set by user when submitting the order - in this example it's `Never`, hence order will be on-chain until the price hits and be executed.
4. **Filled Size:** Filled size is the section to monitor the fulfillment size of the order. If it is an large order, and there is insufficient liquidity on-chain, Jupiter's keeper will try to execute partially, and continue monitoring on-chain price to fulfill the rest of the order.
5. **Action:** Action is where user will be able to cancel and close their order/ position. 

**Order History**
![Limit Order 3](/img/limit-order3.png)

Order History section is where users keep track of orders that have been completed or have been cancelled.

1. **Price:** Price is the rate that is being submitted for the order - When the on-chain price of the purchase token hits, order will be executed.
2. **Limit Price:** Limit Price is the single unit price for the order - X amount of TokenA per TokenB
3. **Expiry:** Expiry period set by user when submitting the order - in this example it's `Never`, hence order will be on-chain until the price hits and be executed.
4. **Filled Size:** Filled size is the section to monitor the fulfillment size of the order. If it is an large order, and there is insufficient liquidity on-chain, Jupiter's keeper will try to execute partially, and continue monitoring on-chain price to fulfill the rest of the order.
5. **Status:** Status indicates the order state - Completed / Cancelled
6. **Action - Create:** This is the first transaction that is being submitted, creating the order of trade to submit on-chain.
7. **Action - Trade:** This is the actual trade transaction being executed when the on-chain price hits the specified price submitted by user.
8. **Action - Cancel:** This is the cancellation of the order/ trade, where funds/ tokens will be refunded back to wallet.