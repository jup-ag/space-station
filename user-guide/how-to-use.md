---
title: How to use Jupiter Swap
sidebar_position: 2
---

*A community guide to swapping on Jupiter's dApp.*

This guide was created through contributions from the following community members:  [@Cryptolasp](https://twitter.com/cryptolasp) [@DucPhuBui1](https://twitter.com/DucPhuBui1) [@Val_chi44](https://twitter.com/Val_chi44)

:::info [Why do I need Jupiter?](https://oneel.notion.site/Jupiter-Aggregation-0ef3149cd3bb485b8e118432e6cf8472)
Click the link to read why you need Jupiter written by community member @oneel_d
:::

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