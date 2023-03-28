---
sidebar_position: 2
---

# How Limit Order Works

This is not an order book system. The limit order system utilizes a keeper to help monitor the token prices on-chain and trigger the fulfillment of orders.

- For instance, if a Limit Order is placed to buy 0.714 SOL with 10 USDC at a rate of 14 USDC per SOL.


- The keeper will monitor the price on-chain using Jupiter.
- If the keeper detects that the on-chain price of SOL hits 14 USDC per SOL, it will proceed to get execute and fulfill the order.
- Keepers are recommended to execute using Jupiter in 1 transaction, to make sure the order executes when there is profit. But keepers are free to execute it off-chain or using other on-chain DEX
- After the order is executed, the user will get exactly what he quoted for → 0.71428 SOL minus the platform fee (0.2%). 