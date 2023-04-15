---
title: How to use Jupiter Limit Order
sidebar_position: 3
---

Jupiter Limit Order (Beta) provides users with the simplest way to place limit orders on Solana and receive tokens directly in your wallet when the order is filled!

![Limit Order](//img/limit-order.jpg)

## Key Benefits

1. Users can place an order with an expiration time. At the end of the period, the crank will cancel any unfilled orders and refund the token to the user's wallet. 
2. Limit orders ensure you'll get what you quote with no slippage, which is especially useful during volatile periods. 
3. Transactions will not fail because of slippage errors.

:::info Order execution
Jupiter will execute your limit order based on the available liquidity on-chain. Therefore, if there is insufficient on-chain liquidity when the market price reaches your limit price, it is possible that your order may not be filled precisely.
:::

## How to place a Limit Order

![Limit Order 2](/img/limit-order2.png)

1. **Input:** Pick a token from the token selector and specify the amount of token that you're selling.
2. **Rate/ Price:** Here you specify the rate / price that you're buying the output token (Or `User Market` for the current market price)
3. **Expiry:** Set an expiry period for your order, from 10 minutes to Custom and even Never.
4. **Output:** Jupiter Limit Order will be able to compute your parameters and come up with the rate that you'll be getting.
5. **Place Order:** Once you've reviewed the summary of your order, you will be able to place order and submit the transaction over to Jupiter Limit Order.

## How Limit Order Works

:::tip This is not an order book system. The limit order system utilizes a keeper to help monitor the token prices on-chain and trigger the fulfillment of orders.
:::

- For instance, if a Limit Order is placed to buy 0.714 SOL with 10 USDC at a rate of 14 USDC per SOL.
- The keeper will monitor the price on-chain using Jupiter.
- If the keeper detects that the on-chain price of SOL hits 14 USDC per SOL, it will proceed to get execute and fulfill the order.
- Keepers are recommended to execute using Jupiter in 1 transaction, to make sure the order executes when there is profit. But keepers are free to execute it off-chain or using other on-chain DEX
- After the order is executed, the user will get exactly what he quoted for → 0.71428 SOL minus the platform fee (0.2%). 

## Open Order & Order History


### Open Order
![Limit Order 4](/img/limit-order4.png)

Open Order section is where users keep track of submitted order/ transaction that has yet to be fulfilled.

1. **Order Info:** Order info specifies user's order from TokenA *(Selling)* to TokenB *(Buying)* and the amount for the order.
2. **Price:** Price is the rate that is being submitted for the order - When the on-chain price of the purchase token hits, order will be executed.
3. **Expiry:** Expiry period set by user when submitting the order - in this example it's `Never`, hence order will be on-chain until the price hits and be executed.
4. **Filled Size:** Filled size is the section to monitor the fulfillment size of the order. If it is an large order, and there is insufficient liquidity on-chain, Jupiter's keeper will try to execute partially, and continue monitoring on-chain price to fulfill the rest of the order.
5. **Action:** Action is where user will be able to cancel and close their order/ position. 

### Order History
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