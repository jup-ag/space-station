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

*A community guide to swapping on jup.ag, created by community members. Special thanks to [@Cryptolasp](https://twitter.com/cryptolasp) [@DucPhuBui1](https://twitter.com/DucPhuBui1) [@Val_chi44](https://twitter.com/Val_chi44)*

:::tip Jupiter charges no fees.
There are no protocol fees on Jupiter.  The only fees are transaction fees and exchange fees which are factored in to the swap calculations. If you see more SOL deducted than what you expect, then, it is probably due to deposits for creating Associated Token Accounts.
:::

1. First, navigate to the [Jupiter Website](https://jup.ag/). **Double check** that the URL in your search bar is correct: https://jup.ag/

2. Next, connect your wallet by clicking the `Connect Wallet` button in the upper right corner of the site.

3. After connecting your wallet to Jupiter, you can then select the token pairs that you want to swap from the token selector.

4. In the token selector input the amount of tokens that you want to swap.

5. Jupiter will find the best price routes for you amongst all the majority DEXs and AMMs in Solana. Checkout the full list of supported DEXes [here](/partners).

6. Before swapping, you can configure a few parameters before proceeding to help with your trade.
- Transaction Priority Fees
- Slippage Settings
- Swap Settings

7. After you have confirmed all the parameters and inputs, you can click on the swap button, and the wallet that you have connected to Jupiter will ask you to approve the transaction to submit the order to the chain. If approved, your swap will be executed.

8. A notification toast will appear in the lower left corner that will notify user once the transaction has been sent and has completed.

9. You can view your transaction history by clicking the wallet section on the upper right of the site.

### Lets go through the Jupiter Settings in more detail below.

## Jupiter Settings

![Jup Swap](../img/jup-swap/jup-swap.png)

1. **Jupiter Swap:** [Jupiter Swap](https://jup.ag/) tab *(the current tab you are in)* where a user can instantly spot token swap for any supported SPL token.
2. **Jupiter Limit Order:** [Jupiter Limit Order](https://jup.ag/limit) tab where a user can place limit orders with a specific price and receive tokens directly in your wallet if the order is triggered and filled.
3. **Global Settings:** Jupiter Global Settings, for default settings like language, explorer and RPC endpoint.
4. **Connect Wallet:** Connect to your preferred wallet to interact with Jupiter.
5. **Refresh quote:** Refresh quote button to quickly update the latest quote.
6. **Transaction Priority Fees:** [Transaction Priority Fees](https://docs.solana.com/proposals/fee_transaction_priority) is part of Solana features to bid for priority for their transactions in the leader's queue.
7. **Slippage Settings:** [Slippage settings](./price-impact-slippage-price-warning) configure your acceptable threshold for price change between when you submit a transaction and it executes.
8. **Swap Settings:** These settings will directly impact the routing and pricing of the swaps being performed. Typically, default settings are fine for beginners.

### Global Settings
:::tip The RPC Endpoint Selector now displays active end-point latency
Due to network traffic loads RPC endpoints can get overloaded, which can lead to latency issues that will directly impact your trade executions. Reviewing the RPC latency and selecting the lowest latency option is a best practice to ensure the fastest trade execution.
:::
![Jup Swap 5](../img/jup-swap/jup-swap5.png)

   1. **Language:** Pick your preferred language from English, Chinese, Vietnamese, French, Japanese, Indonesian, and Russian.
   2. **Preferred Explorer:** Pick your preferred explorer from Solscan, SolanaFM, Solana Beach, Solana Explorer, XRAY, and OKLink.
   3. **RPC Endpoint:** Pick your preferred public RPC endpoint from Triton RPC, Helius RPC, or use your own custom RPC endpoint.

### Transaction Priority Fees
:::info Transaction Priority Fees
Trades submitted through the blockchain are assigned a priority based on the fee bidding process. The higher the transaction fee you set, the higher in the execution queue your transactions will be. During times with increased competition to get transactions through increasing your fee can help. Use with caution and remember to re-adjust the fee selection afterwards.
:::
![Jup Swap 4](../img/jup-swap/jup-swap4.png)

### Slippage Settings
:::info Slippage Settings
During periods of high Solana network activity, transactions can take a bit longer to process and in crypto asset prices can fluctuate quickly. Utilizing the Slippage Setting to ensure your transactions are executed is a common practice. Although, this is an advanced setting and should be used with caution as bot traders do look for opportunities to front-run high slippage trades and extract value from them (MEV). 
:::
![Jup Swap 3](../img/jup-swap/jup-swap3.png)

### Swap Settings
![Jup Swap 2](../img/jup-swap/jup-swap2.png)

   1. **Direct Route Only:** Using Direct Route Only ensures that the transaction will only be submitted to a single pool. This will limit a lot of intermediate tokens and filter out a lot of other viable routes that use intermediary tokens.
   2. **Use wSOL:** Using [Wrapped SOL (wSOL)](../general/wrapped-sol) makes using Jupiter faster and more convenient for traders who trade frequently with SOL, since it avoids having to wrap/unwrap SOL.
   3. **Versioned Transaction:** Enabling [Versioned Transaction](/docs/additional-topics/composing-with-versioned-transaction) improves composability so Jupiter will be able to fit in more routes and get better even better pricing all in a single transaction.

## Jupiter Swap

![Jup Swap 7](../img/jup-swap/jup-swap7.png)

1. **Wrapped SOL detected in wallet:** Jupiter detects wrapped SOL (wSOL) in within your wallet which trigger an option for user to unwrap back to SOL.
2. **Input Token Wallet balance:** Jupiter detects the input token balance in your wallet.
3. **Half/ Max amount:** Shortcut buttons to quickly input `Half` or `Max` of the balance amount.
4. **Input Token / Token to sell:** Token selector to select token to sell or swap from.
5. **Input Token / Token to sell amount:** Specify the amount of input token to sell or to swap from.
6. **Input token & Output token switch:** This button switches the input and output token.
7. **Output Token Wallet balance:** Jupiter detects the output token balance in your wallet.
8. **Output Token / Token to buy:** Token selector to select token to buy or swap to.
9. **Output Token / Token to buy amount:** Jupiter will computes from the input amount with the current on-chain price rate show user the quoted amount *(Including swap fees from various DEXs and AMMs)* of tokens that user will be receiving or buying.
10. **Order Routing:** Order routing shows the order being routed through which AMM, which sometimes involve Multi-hop and Split trade.
11. **Action - Swap:** Once you have confirmed all the parameters, LFG!

:::tip [Token List](/docs/token-list/token-list-api)
By default, `Strict` token list will be enabled, without unknown or banned tokens, users can choose to toggle on the `All` list to include the full list of all SPL tokens in Solana that are available to trade.
:::

### Order Routings
![Jup Swap 9](../img/jup-swap/jup-swap9.png)

## Swap Details / Price Info

![Jup Swap 10](../img/jup-swap/jup-swap10.png)

1. **Rate for the input and output token selected:** This is the current on-chain price rate for the selected input and output tokens, along with a comparison against Coingecko Price API.
2. **Price Impact:** [Price Impact](./price-impact-slippage-price-warning#price-impact) is influenced by the available liquidity to settle the trade, and the size of the trade can change the price impact.
3. **Minimum Received:** Minimum received takes into account of slippage that have set and computes the minimum that user will receive even with price fluctuations.

