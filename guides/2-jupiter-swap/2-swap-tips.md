---
sidebar_label: "Swap Tips"
description: Learn the key concepts that power Jupiter swaps.
title: Swap Tips for Users
---

<head>
    <title>Swap Tips For Jupiter Users</title>
    <meta name="twitter:card" content="summary" />
</head>

![cat_coins_banner](../img/cat_coins_banner.png)

- **Always double check the token mint address:** Token metadata such as name, symbol, and icon can be faked. The true identity of a token is its mint address. 
  - [Tweet: A gentle reminder to check the mint address of the token you're trading](https://twitter.com/JupiterExchange/status/1580217415593443329?s=20&t=xmsYmPnUZfuS6tQpvEQ7Pg)
  - [We provide a "strict" list mode, with a smaller set of validated tokens](/docs/get-your-token-onto-jup)
- **The quote given is not the final price:** The quote given on a route is based on the current liquidity in the pools. Pool liquidity can go up or down at any time and in some cases, pools may close. An example would be oracle-based Lifinity which may stop accepting swaps after a price movement.
- **Set a slippage amount to protect yourself:** [Slippage](./price-impact-slippage-price-warning#slippage) is your swap protection if the price diverges too much from the quoted price.
- **Jupiter cannot guess the final spot price or know what is a reasonable price impact for you**. We encourage checking these before the swap:
  - Check the [Price Impact](./price-impact-slippage-price-warning#price-impact). *Price impact varies across the AMM and DEXes that Jupiter uses in each route.*
  - Check against a price feed like [Coingecko](https://www.coingecko.com/), [Birdeye](https://birdeye.so/), or CEX pricing.
