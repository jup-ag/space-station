---
sidebar_label: "Token Validation"
description: Learn to list your token on Jupiter, ensuring liquidity and metadata compliance for enhanced safety.
slug: "/get-your-token-onto-jup"
title: Add Your Token to Jupiter
---

<head>
    <title>How to Add Token to Jupiter: Listing Guide Instructions</title>
    <meta name="twitter:card" content="summary" />
</head>

![cat_list2](./cat_list2.png)

:::info Unknown tokens
We list tokens with sufficient liquidity automatically. These new tokens are marked with the 'Unknown' label, to encourage users to double-check that the mint addresses are the right ones that they wish to interact with before proceeding. The default mode on our UI shows validated tokens first, which projects can request to be on.

We felt that this is a good balance to allow users to trade newer tokens – which includes many legitimate projects – while encouraging them to be careful. More details are shared in this [tweet](https://twitter.com/JupiterExchange/status/1580217415593443329?s=20&t=xmsYmPnUZfuS6tQpvEQ7Pg)

All tokens with sufficient liquidity can be found by searching with its mint address regardless of whether they are validated.
:::

### Tokens with Sufficient Liquidity and On-Chain Metadata are Automatically Listed

- Your token must exist on-chain and have token metadata conforming to the [Metaplex Token Metadata](https://docs.metaplex.com/programs/token-metadata/token-standard).
- Your token must have at least $500 liquidity on both buy and sell sides.
- The buy and sell price impact shouldn't be more than 30% as well. This is to prevent single-sided liquidity markets.

Once you've met the requirements above, Jupiter will automatically list your token within a few minutes. You can check whether your market has shown up on Jupiter by looking up your market address on [https://tokens.jup.ag/token/{YOUR_MINT_ADDRESS}](https://tokens.jup.ag/token/{YOUR_MINT_ADDRESS}).

If you have a important situation that requires you to set up a one sided market (eg: on Openbook), reach out in [Discord](https://discord.gg/jup) to discuss options. Note that for UX and safety reasons, this exception will be rarely given.

### Get your token validated

- Get a tag from Jupiter's community on the [catdetlist site](https://catdetlist.jup.ag) 
- More details about the community tag initative in [this post](https://www.jupresear.ch/t/get-your-token-a-community-tag/18963)
