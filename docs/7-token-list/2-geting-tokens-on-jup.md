---
sidebar_label: "Submit Token"
description: Learn to list your token on Jupiter, ensuring liquidity and metadata compliance for enhanced safety.
slug: "/get-your-token-onto-jup"
title: Add Your Token to Jupiter
---

<head>
    <title>How to Add Token to Jupiter: Listing Guide Instructions</title>
    <meta name="twitter:card" content="summary" />
</head>

![cat_list2](./cat_list2.png)

:::info All List Vs Strict List
We list tokens with sufficient liquidity automatically. These new tokens are marked with the 'Unknown' label on the 'All' list, to encourage users to double-check that the mint addresses are the right ones that they wish to interact with before proceeding. The default mode on our UI shows the 'Strict' list, which projects can request to be on.

We felt that this is a good balance to allow users to trade newer tokens – which includes many legitimate projects – while encouraging them to be careful. More details are shared in this [tweet](https://twitter.com/JupiterExchange/status/1580217415593443329?s=20&t=xmsYmPnUZfuS6tQpvEQ7Pg)
:::

### Tokens with Sufficient Liquidity and On-Chain Metadata are Automatically Listed

- Your token must exist on-chain and have token metadata conforming to the [Metaplex Token Metadata](https://docs.metaplex.com/programs/token-metadata/token-standard).
- Your token must have at least $250 liquidity on both buy and sell sides.
- The buy and sell price impact shouldn't be more than 30% as well. This is to prevent single-sided liquidity markets.

Once you've met the requirements above, Jupiter will automatically list your token within a few minutes. You can check whether your market has shown up on Jupiter by looking up your market address [here](https://token.jup.ag/strict).

If you have a important situation that requires you to set up a one sided market (eg: on Openbook), reach out in [Discord](https://discord.gg/jup) to discuss options. Note that for UX and safety reasons, this exception will be rarely given.

### Getting on the Strict List

For the safety and convenience of users, we provide a "strict" list, which shows a smaller set of validated tokens. This list is the default on our UI. 

Our validation process matches the expected Mint address to the project ("*"If I'm trying to trade this token from this project, am I looking at the right one?"*). 

To get your token on the Strict list, go to the [Token List Repo](https://github.com/jup-ag/token-list) and open a PR. 

**Community Validation Process**

The strict list helps to keep users safe, and we ask for some time for the community to discover, discuss, and support your request. It is a social process, not a ticketing system.

The best way to get validated faster is to follow the examples of community-support in the example PRs listed on the github README, and **share meaningful introductions** about your project, so that the community can support you. In general, reviews with good community support will be approved in a week. 

As a reminder, your token is available for trading on the 'All' list even if you are not on the strict list yet, as long as you have met the liquidity requirements above. 

**User safety is our priority.** As such, 
- Any requests to validate tokens that impersonate other projects will be shut down immediately.
- If you are a known project with strong traction and an upcoming token launch, you can request to included in the strict-list before your token is tradable on Jupiter. Please reach out. 

You can get our list of validated tokens via the [Token List API](/docs/token-list/token-list-api).
