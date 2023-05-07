---
title: Swap Tips
---

- **The quote given is not the true price:** The quote given on a route is based on the current liquidity in the pools. Pool liquidity can go up or down at any time and in some cases, pools may close. An example would be oracle-based Lifinity which may stop accepting swaps after a price movement.
- **Set a slippage amount to protect yourself:** [Slippage](/guides/price-impact-slippage-price-warning) is your swap protection if the price diverges from the quoted price.
- **Jupiter cannot guess the true spot price or know what is a reasonable price impact for you**. We encourage checking these before the swap:
  - Check the [Price Impact](/guides/price-impact-slippage-price-warning). *Price impact varies across the AMM and DEXes that Jupiter uses in each route.*
  - Check aginst a price feed like [Coingecko](https://www.coingecko.com/), [Birdeye](https://birdeye.so/), or some CEX pricing
