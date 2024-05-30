---
sidebar_label: "How to Swap"
description: Learn token swapping on Jupiter with top tips, slippage settings, and easy dApp navigation.
title: How to Swap Tokens on Jupiter
---

<head>
    <title>How to Swap Tokens on Jupiter: Step By Step</title>
    <meta name="twitter:card" content="summary" />
</head>


![money_cat](../img/money_cat.png)

*Special thanks to [@Cryptolasp](https://twitter.com/cryptolasp) [@DucPhuBui1](https://twitter.com/DucPhuBui1) [@Val_chi44](https://twitter.com/Val_chi44) for their work on v1.*

:::tip Jupiter charges no fees
There are no protocol fees on Jupiter.  The only fees are transaction fees and exchange fees which are factored in to the swap calculations. If you see more SOL deducted than what you expect, then, it is probably due to deposits for creating Associated Token Accounts.
:::

## Basic Swap User Flow

1. First, navigate to the [Jupiter Website](https://jup.ag/). **Double check** that the URL in your search bar is correct: https://jup.ag/
2. Next, connect your wallet by clicking the `Connect Wallet` button in the upper right corner of the site.
3. Select the tokens that you want to swap from and into with the token selectors.
4. Enter the input amount of the selected token that you want to swap from.
5. Review the swap route and output token amounts. Checkout the full list of supported DEXes for routing [here](/partners).
6. Configure additional parameters to help with your trade, including: Transaction Fees, Slippage Settings, and Swap Settings.
7. After you have confirmed all the parameters and inputs, click on the 'Swap' button, and you will be prompted with a confirmation from your wallet. If you 'Confirm', your swap will be executed.
8. A notification toast will appear in the lower left corner that will notify the user once the transaction has been sent and has completed.
9. You can view your transaction history by clicking the wallet section on the upper right of the site.

**Let's go through the Jupiter Settings in more detail below.**

---

## Jupiter Settings

![Jup Swap](../img/jup-swap/jup-swap-1.png 'Main jupiter swap screen showing basic user settings and configuration options.')

1. **Jupiter Swap:** [Jupiter Swap](https://jup.ag/) tab *(the current tab you are in)* where a user can instantly spot swap for any supported SPL token.
2. **Jupiter Limit Order:** [Jupiter Limit Order](https://jup.ag/limit) tab where a user can place limit orders with a specific price and receive tokens directly in their wallet if the order is triggered and filled.
3. **Global Priority Fee:** [Transaction Priority Fees](https://docs.solana.com/proposals/fee_transaction_priority) is a Solana feature that allows users to bid for priority for their transactions in the leader's queue. 
4. **Jupiter Global Settings:** to select your default settings like language, Solana explorer and RPC endpoint.
5. **Connect Wallet:** Connect to your preferred wallet to interact with Jupiter.
6. **Refresh Quote:** Refresh quote button to quickly update the latest quote for the configured asset swap in the terminal.
7. **Slippage Settings:** Slippage settings configure your acceptable threshold for price change between when you submit a transaction and it executes.
8. **Swap Settings:** These settings will directly impact the routing and pricing of the swaps being performed. Typically, default settings are fine for beginners.

### Global Settings
:::tip The RPC Endpoint Selector now displays active end-point latency
Due to network traffic loads RPC endpoints can get overloaded, which can lead to latency issues that will directly impact your trade executions. Reviewing the RPC latency and selecting the lowest latency option is a best practice to ensure the fastest trade execution.
:::
![Jup Swap 5](../img/jup-swap/jup-swap-2.png 'Global settings for Jupiter Swap, including language, preferred explorer and RPC endpoint.')

   1. **Language:** Pick your preferred language from English, Chinese, Vietnamese, French, Japanese, Indonesian, and Russian.
   2. **Preferred Explorer:** Pick your preferred explorer from Solscan, SolanaFM, Solana Beach, Solana Explorer, XRAY, and OKLink.
   3. **RPC Endpoint:** Pick your preferred public RPC endpoint from Triton RPC, Helius RPC, or use your own custom RPC endpoint.

### Transaction Priority Fees
:::info Transaction Priority Fees
Trades submitted through the blockchain are assigned a priority based on the fee bidding process. The higher the transaction fee you set, the higher in the execution queue your transactions will be. During times with increased competition to get transactions through, increasing your fee can help. Use with caution and remember to re-adjust the fee selection afterwards.
:::
![Jup Swap 4](../img/jup-swap/jup-swap-3.png 'Priority fee settings, including Jito tips, fee mode, and priority levels.')

   1. **Transaction Broadcasting Selector:** Select your transaction broadcasting option. Choose from a traditional priority fee, a Jito Bundle Only, or an optimized Mixed combination of the two. 
   2. **Priority Level:** Specify the Priority Level for the transactions you are completeing. Must execute transactions falling under the Ultra Priority Level.
   3. **Fee Mode:** Pick your preferred Fee Mode. Either specify a Max Cap for your fee or an Exact Fee for your transactions.

### Slippage Settings
::::info Slippage Settings

Utilizing the Slippage Setting to ensure your transactions are executed is a common practice. The slippage setting is important to prevent users from getting poor swap rates on transactions if the asset price falls below the specified slippage rate.

:::danger

This is an advanced setting and should be used with caution. 

:::

::::

![Jup Swap 3](../img/jup-swap/jup-swap-4.png 'Slippage settings allow you the user to change mode from fixed to Auto and set the percentage.')

   1. **Mode:** Select the slippage mode you want to utilize. Auto slippage will utilize Jupiters internal slippage calculations for the best setting. Fixed will adhere to your selected slippage rate.
   2. **Slippage:** Select the Max acceptable slippage rate for your swaps.

### Swap Settings
![Jup Swap 2](../img/jup-swap/jup-swap-5.png 'General swap settings for wSOL, versioned transactions, and utilizing direct routes.')

   1. **Direct Route Only:** Using Direct Route Only ensures that the transaction will only be submitted to a single pool. This will limit a lot of intermediate tokens and filter out a lot of other viable routes that use intermediary tokens.
   2. **Use wSOL:** Using [Wrapped SOL (wSOL)](../general/wrapped-sol) makes using Jupiter faster and more convenient for traders who trade frequently with SOL, since it avoids having to wrap/unwrap SOL.
   3. **Versioned Transaction:** Enabling [Versioned Transaction](/docs/additional-topics/composing-with-versioned-transaction) improves composability so Jupiter will be able to fit in more routes and get even better pricing all in a single transaction.

---

## Jupiter Swap

![Jup Swap 7](../img/jup-swap/jup-swap-6.png 'The main jupiter swap user interface, showing a variety of features described below.')

1. **Input Token Wallet Balance:** Jupiter detects the input token balance in your wallet.
2. **Half/ Max Amount:** Shortcut buttons to quickly input `Half` or `Max` of the balance amount.
3. **Input Token / Token to Sell:** Token selector to select token to sell or swap from.
4. **Input Token / Token to Sell Amount:** Specify the amount of input token to sell or to swap from.
5. **Input token & Output Token Switch:** This button switches the input and output token.
6. **Output Token Wallet Balance:** Jupiter detects the output token balance in your wallet.
7. **Output Token / Token to Buy:** Token selector to select token to buy or swap to.
8. **Output Token / Token to Buy Amount:** Jupiter computes this quoted output amount from the swap configuration and current on-chain price rates of the assets involved in the route. *(This includes swap fees from all DEXs and AMMs along the route.)*
9. **Order Routing:** Order routing shows the markets being routed through and each hop along the path. This can sometimes involve Multi-hop and Split trades to achieve the best results.
10. **Action - Swap:** Once you have confirmed all the parameters, LFG!

### Order Routings
:::info Order Routing
Clicking on the area marked number 9 from the Swap terminal above will show you the exact order routing path for the quoted transaction. You can also see the split trades and all market hops along the route.
:::
![Jup Swap 9](../img/jup-swap/jup-swap-7.png 'The order routing map shows how your tokens swapped through multiple liquidity pools.')

---

## Swap Details / Price Info

![Jup Swap 10](../img/jup-swap/jup-swap-8.png 'The collapsable "Price Info" menu shows granular details for price impact, transaction fee, and deposit amount.')

1. **Exchange Rate for the Selected Tokens:** This is the current exchange rate, based on the on-chain prices for the selected input and output tokens, along with a comparison against Coingecko Price API.
2. **Price Impact:** Price Impact is influenced by the available liquidity to settle the trade. The larger the trade the larger the price impact on the selected assets.
3. **Minimum Received:** Minimum received takes into account the slippage setting and and market liquidity to compute the minimum amount that the user will receive even with maximum price fluctuations during a successful swap.
4. **Max Transaction Fee** This is the maximum fee you will pay to execute the quoted transaction. This takes into account your selected fee settings.
5. **Deposit** If you are transacting assets you have not owned before, Solana may require a small deposit amount to create the ATA account in your wallet to hold that asset. This will only occur with assets you have not owned previously. 

