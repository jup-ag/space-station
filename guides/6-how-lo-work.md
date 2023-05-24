# How Jupiter Limit Order Work

## Jupiter Limit Order

Jupiter Limit Order execute your order based on the price that you have set matching with the available liquidity on-chain. Therefore, if there is insufficient on-chain liquidity when the market price reaches your limit price, it is possible that your order may not be fully filled.


## Key Benefits

1. Users able to create limit order like CEX experience on Solana.
2. Users can place an order with an expiration time. At the end of the period, the crank will cancel any unfilled orders and refund the token to the user's wallet automatically. 
3. Limit orders ensure you'll get what you quote with no slippage, which is especially useful during volatile periods.
4. Transactions will not fail because of slippage errors.
5. Jupiter Limit Order have a wider range of token selections, as long as there is sufficient liquidity in the market, the token pair will be available to trade *(Execution will be based on available liquidity on-chain)*
6. Never get front run by MEV, no slippage, and you will get what you quote. Very useful in highly volatile markets, transactions won’t fail because of slippage error.

## How Limit Order Works

:::info Not an Order Book
This is not an order book system. The limit order system utilizes a keeper to help monitor the token prices on-chain and trigger the fulfillment of orders.
:::

- For instance, if a Limit Order is placed to buy 0.714 SOL with 10 USDC at a rate of 14 USDC per SOL.
- The keeper will monitor the price on-chain using Jupiter.
- If the keeper detects that the on-chain price of SOL hits 14 USDC per SOL, it will proceed to get execute and fulfill the order.
    - If the order size is too large (Insufficient liquidity on-chain), the keeper will try to execute the order with a smaller chunk size and attempt to partial fulfill the order, and will continue to attempt to do so until the order is fully executed.
    - For large orders relative to token liquidity, the keeper will break it up into smaller chunks and attempt to partially fulfill the order for faster and smoother execution to ensure the best price with minimal price impact. *(Especially crucial for whales or institution trader)*
- Jupiter keeper will be running on multiple different algorithms with different configuration settings to stress test for the most efficient and optimized methodology.


- Guarantee FIFO Matching 
- No Maker Fees
- Price-time-priority-basis - Highest bid and the lowest ask represent the market price


## The difference between Jupiter Limit Order with CLOB


**Jupiter Limit Order** is built to put emphasis on UX, simplicity, flexibility and widest liquidity around Solana. 

Orders are executed by keeper, imagine keeper to be like liquidator in lending protocol, when price hit the limit price *(including fees)*, keeper will execute the order.
After the order executed, the user will get exactly what he quoted for including the platform fees by Jupiter.

**Central Limit Orderbook (CLOB)** is a mechanism used by TradFi to facilitate trading between buyers and sellers. It acts as a hub where both buyers and sellers can submit their buy/sell orders, which are matched based on specific rules and executed accordingly.

This requires a certain level of market-making for it to be able to operate on a efficient level. However compare to Jupiter Limit Order which execute order based on on-chain liquidity aggregated by Jupiter, it has a lot more flexibility and way easier to use.