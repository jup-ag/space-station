---
sidebar_label: "Getting your Token onto Jupiter"
description: Getting your token onto Jupiter
slug: "/get-your-token-onto-jup"
---
# Getting Your Token onto Jupiter
![cat_list2](./cat_list2.png)

:::info All List Vs Strict List
We list tokens with sufficient liquidity automatically. These new tokens are marked with the 'Unknown' label on the 'All' list, to encourage users to double-check that the mint addresses are the right ones that they wish to interact with before proceeding. The default mode on our UI shows the 'Strict' list, which projects can request to be on.

We felt that this is a good balance to allow users to trade newer tokens – which includes many legitimate projects – while encouraging them to be careful. More details are shared in this [tweet](https://twitter.com/JupiterExchange/status/1580217415593443329?s=20&t=xmsYmPnUZfuS6tQpvEQ7Pg)
:::

### Tokens with Sufficient Liquidity and On-Chain Metadata are Automatically Listed

- Your token must exist on-chain and have token metadata conforming to the [Metaplex Token Metadata](https://docs.metaplex.com/programs/token-metadata/token-standard).
- Your token must have at least $250 liquidity on both buy and sell sides.
- The buy and sell price impact shouldn't be more than 30% as well. This is to prevent single-sided liquidity markets.

Once you've met the requirements above, Jupiter will automatically list your token within a few minutes. You can check whether your market has shown up on Jupiter by looking up your market address [here](https://cache.jup.ag/markets?v=3).

If you have a important situation that requires you to set up a one sided market (eg: on Openbook), reach out in [Discord](https://discord.gg/jup) to discuss options. Note that for UX and safety reasons, this exception will be rarely given.

### Getting on the Strict List

For the safety and convenience of users, we provide a "strict" list, which shows a smaller set of validated tokens and is the default on our UI. The strict list is put together by the community and your token should be known and supported by them. 

Validation is based on verification of the mint address: *"If I'm trying to trade this token from this project, am I looking at the right one?"*

This is why, to get your token on the Strict list, the starting point of the validation process is **the publication of a tweet on the project account attesting the Mint address, tagging @JupiterExchange and showing community support.**

Then, go to the [Token List Repo](https://github.com/jup-ag/token-list) and open a PR.

When you open the PR, a **markdown template** guides you through the main steps involved in the validation process.

**Community validation process**
- To allow time for community discovery and discussion, reviews are generally done on a weekly basis. Your PR will not be reviewed until there is some community support. Once there is, it will be reviewed within a week.
- Please go through the README on the github repo carefully  -- it contains everything you need to know with sample PRs and notes on how to engage the community.
- For projects with some traction, which plans to launch a new token, you can request to be included in the strict-list before being tradable on Jupiter. Please note that the token will only be showed in the UI once the liquidity requirements above have been met.
- Finally, to avoid misleading users, it is not allowed to ask to be added to the strict-list if the token uses the name (or similarly named) of an existing token (like Ethereum, Bitcoin, ...)

You can also get the list of tokens via the [Token List API](/docs/apis/token-list-api).
