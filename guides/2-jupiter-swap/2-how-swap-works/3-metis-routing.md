---
sidebar_label: Metis Routing
description: How Metis Routing Protocol improves swap experience on Jupiter
title: Metis Routing 
---


Metis is a heavily modified variant of the [Bellman-Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) catered for the key requirements of offering best price routing at scale in a very dynamic operational space.

Metis is designed to operate seamlessly on Solana’s hyper-fast blocktimes, supported by major improvements to our backend infrastructure. This ensures that trades are executed quickly and efficiently, even under high demand.

Metis enhances our industry-leading aggregator by improving route discovery for all trading pairs, reducing slippage for large trades, and offering scalable solutions in preparation for upcoming Solana upgrades and new DEXs.

### Incremental Route Building

To find the best price, Metis streams the input tokens to incrementally build a route to split and merge at any stage. By generating the routes for each split iteratively one after another, we can also use the same DEX in different splits - allowing us to find routes with better prices with more complex trades.

![Metis2](../../img/jup-swap/Metis-2.png)

### Combine Route Generation and Quoting

To improve the efficiency of the algo, we combine route generation and quoting into a single step, allowing us to avoid generating and using bad routes, which besides improving the efficiency, also allows us to use a larger set of tokens as intermediaries.

### Future Proofing

v2 runs fast when the total number of DEXs used is small since Solana limits us to use at most 4 DEXs in a swap *(due to the account lock limit of 64)*. Future Solana upgrades will relax this limit and allow more DEXs to be used in a single transaction. In addition, we foresee the continued growth of the Solana DeFi ecosystem, which means there will be many more DEXs emerging.

Metis(v3) is equipped to handle both of these trends, since the algorithm is able to scale to include more DEXs in a route when account lock limits are increased, and can support more DEXs with only a modest increase in running time.

![Metis3](../../img/jup-swap/Metis-3.png)

### Performance Improvements

Metis is able to refresh quotes in parallel and in real time. Compared to v2, metis on average quotes prices that are 5.22% better. These imporivements increase sharply based on the trade size.

![Metis4](../../img/jup-swap/Metis-4.jpg)

[Read about more awesome features of Jupiter Swap! ->](/guides/jupiter-swap/how-swap-works/)