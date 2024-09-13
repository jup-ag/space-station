---
sidebar_label: "How to Get Your Token on Jupiter"
description: Learn to list your token on Jupiter, ensuring liquidity and metadata compliance for enhanced safety.
title: Get Your Token on Jupiter
---

<head>
    <title>How to Get Your Token on Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

![full-routing-banner](../img/full-routing-banner.png)

## Getting Your Token Tradable on Jupiter

To provide users access to new tokens, all new tokens launched on **supported AMMs** will be tradable for **14 days**.

After 14 days, tokens with pools that fit the criteria will continue to be tradable on Jupiter.

:::tip Supported AMMs
We currently support Fluxbeam, Meteora DLMM, 1Intro, Pump.Fun, Raydium CLMM, Raydium CP, Raydium V4 and Whirlpools for Instant Routing.
:::

To ensure the pool continues to be routed on Jupiter after 14 days, your market must fit **one of the following criteria**:

1. **Less than 30% price impact on $500**

Using a benchmark position size of **$500**, a user should encounter less than **30%** price impact after swapping in AND out of the token from the same pool. 

```
Price Impact = ($500 - Final USD value) / $500
```

For example, a user swaps **$500** worth of SOL into the token, then swaps the same output amount back into SOL. We then use the formula to calculate the price impact percentage.

If the price impact is more than **30%**, it means that there is insufficient liquidity in the pool for the benchmark position size of **$500**.

![price-impact-criteria](../img/price-impact-criteria.jpg)


2. *(For additional markets)* **Less than 20% price difference on new pools**

For additional markets on already supported tokens, there should be a variance of less than **20%** between the new pool and the pool existing in routing. 

## Getting Your Token Verified on Jupiter

All unverified tokens are marked with a **'⚠️’** label to encourage users to double-check that the mint addresses are the right ones before trading.

If you've created a token and want to get it verified on the Jupiter Ecosystem List, you can submit your token for review on [catdetlist.jup.ag](http://catdetlist.jup.ag).

For approval, your project needs to:

- **Be at least 21 days old**
- **Have daily volume of more than 10K**
- **Have a market cap of more than 100K**
- **Have unique metadata (Symbol and Name does not duplicate another project on the community list)**
- **Have more than 500 unique holders**

:::tip Note
Your token does not have to be verified to be tradable. All new pools are supported for instant routing for **14 days** before pools get re-evaluated. Remind your users to search via your mint address so they can swap safely!
:::

More resources on the community tag initiative can be found here:

- **Community Tag Application Site**: [https://catdetlist.jup.ag/](https://catdetlist.jup.ag/)
- **Community Tag FAQ**: [https://www.jupresear.ch/t/jupiter-community-tag-faq/19168](https://www.jupresear.ch/t/jupiter-community-tag-faq/19168)
- **Community Tag Overview**: [https://www.jupresear.ch/t/get-your-token-a-community-tag/18963](https://www.jupresear.ch/t/get-your-token-a-community-tag/18963)
- **Master Token List API**: [https://www.jupresear.ch/t/ecosystem-master-token-list/19786](https://www.jupresear.ch/t/ecosystem-master-token-list/19786)
