---
sidebar_label: How Limit Order Works
title: How Limit Order Works
Description: Discover how Jupiter powers limit orders on Solana.
---

<head>
    <title>How Limit Orders Work on Jupiter: Beginners Guide</title>
    <meta name="twitter:card" content="summary" />
</head>

:::info Not an Order Book
This is not an order book system. The limit order system utilizes a keeper to monitor token prices on-chain and trigger the fulfillment of orders if liquidity is available.
:::

Jupiter Limit Order executes your order based on the price you have set by matching it with the available liquidity on-chain across Solana. Once the order is placed, keepers will continuously monitor the liquidity landscape and execute the limit order when the market price reaches your specified limit. 

**Scenario**
- If a Limit Order is placed to buy 1 $SOL with 10 USDC at a rate of 10 USDC per $SOL.
- The keeper will monitor the price on-chain using Jupiter [Price API](/docs/apis/price-api).
- If the keeper detects that the on-chain price of $SOL reaches 10 USDC, it will proceed to execute and fulfill the order.
    - If the order size is too large, and there is insufficient liquidity on-chain, the keeper will attempt to execute the order in smaller chunks. It will aim for partial fulfillment to ensure the best price with minimal price impact, continuing until the order is fully filled.
- The executed order, whether fully or partially fulfilled, will be automatically transferred to your wallet.

-----

## Key Benefits

1. Users are able to create limit orders, providing a Centralized Exchange (CEX) experience on Solana.
2. Liquidity from anywhere on Solana is utilized to fulfill the trade. 
3. Users can place an order with an expiration time. At the end of the period, the system will automatically cancel any unfilled orders and refund the tokens to the user's wallet.
4. Limit orders ensure that you get what you've been quoted with no slippage. This is especially useful during volatile trading periods.
5. Transactions will not fail due to slippage errors.
6. Jupiter Limit Order offers a wider range of token selections. As long as there is sufficient liquidity in the market, the token pair will be available to trade (execution will be based on available liquidity on-chain).
7. You will never get front-run by MEV.

-----

## The difference between Jupiter Limit Order with CLOB

**Jupiter Limit Order** is designed to prioritize UX, simplicity, flexibility, and the widest liquidity across Solana.

Orders are executed by the keeper, envisioning the keeper as similar to a liquidator in a lending protocol. When the price hits the limit price (including fees), the keeper will execute the order. After the order is executed, the user will receive what they quoted, minus the platform fees charged by Jupiter.

**Central Limit Orderbook (CLOB)** is a mechanism used by TradFi to facilitate trading between buyers and sellers. It acts as a hub where both buyers and sellers can submit their buy/sell orders, which are matched based on specific rules and executed accordingly.

This mechanism requires a certain level of market-making for it to operate efficiently. For a particular market or token to be available for trading on the CLOB, it requires a market maker to be present and accessible. In contrast, Jupiter Limit Order executes orders based on on-chain liquidity aggregated by Jupiter. This liquidity consists of more than 20 decentralized exchanges (DEXs) and automated market makers (AMMs) with Solana-wide coverage of SPL tokens, all accessible through an extremely user-friendly interface.