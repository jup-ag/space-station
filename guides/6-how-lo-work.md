# How Jupiter Limit Order Work

## Jupiter Limit Order

Jupiter Limit Order provides the easiest way to place limit orders in Solana, offering the widest selection of token pairs and leveraging all the available liquidity across the whole Solana. With Jupiter Limit Order, you have the flexibility to buy or sell any token pair according to your specified price limit.

-----

## How Jupiter Limit Order Works

:::info Not an Order Book
This is not an order book system. The limit order system utilizes a keeper to help monitor the token prices on-chain and trigger the fulfillment of orders.
:::

Jupiter Limit Order execute your order based on the price that you have set by matching with the available liquidity on-chain across Solana.
Once the order is placed, keepers will constantly monitor the liquidity landscape and execute the limit order when the market price reaches your limit price. 

**Scenario**
- If a Limit Order is placed to buy 1 $SOL with 10 USDC at a rate of 10 USDC per $SOL.
- The keeper will monitor the price on-chain using Jupiter [Price API](/docs/apis/price-api) & Birdeye API.
- If the keeper detects that the on-chain price of $SOL hits 10 USDC, it will proceed to get execute and fulfill the order.
    - If the order size is too large *(and there is insufficient liquidity on-chain)*, the keeper will try to execute the order with a smaller chunk order size and attempt to partial fulfill the order *(to ensure the best price with minimal price impact)*, and will continue to attempt to do so until the order is fully executed.
- Executed order *(or any partial amount)* will be transfer directly to your wallet automatically.

-----

## Key Benefits

1. Users able to create limit order like CEX experience on Solana.
2. Liquidity from anywhere on Solana is utilized to fulfil the trade
3. Users can place an order with an expiration time. At the end of the period, the crank will cancel any unfilled orders and refund the token to the user's wallet automatically. 
4. Limit orders ensure you'll get what you quote with no slippage, which is especially useful during volatile periods.
5. Transactions will not fail because of slippage errors.
6. Jupiter Limit Order have a wider range of token selections, as long as there is sufficient liquidity in the market, the token pair will be available to trade *(Execution will be based on available liquidity on-chain)*
7. Never get front run by MEV, no slippage, and you will get what you quote. Very useful in highly volatile markets, transactions won’t fail because of slippage error.

-----

## The difference between Jupiter Limit Order with CLOB

**Jupiter Limit Order** is built to put emphasis on UX, simplicity, flexibility and widest liquidity around Solana. 

Orders are executed by keeper, imagine keeper to be like liquidator in lending protocol, when price hit the limit price *(including fees)*, keeper will execute the order.
After the order executed, the user will get exactly what he quoted for including the platform fees by Jupiter.

**Central Limit Orderbook (CLOB)** is a mechanism used by TradFi to facilitate trading between buyers and sellers. It acts as a hub where both buyers and sellers can submit their buy/sell orders, which are matched based on specific rules and executed accordingly.

This requires a certain level of market-making for it to be able to operate on a efficient level. Which means for a certain market or token to be available to trade on CLOB, it requires market maker to be in and made available to trade, whereas Jupiter Limit Order execute order based on on-chain liquidity aggregated by Jupiter, which consists of more than 20 DEXs and AMMs with Solana-wide coverage SPL token and also extremely easy-to-use UI/UX.