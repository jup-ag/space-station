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
- Your token must have a minimum amount of liquidity of **$500** in any of the DEXes that Jupiter aggregates.
- If your liquidity is on Openbook it must have $250 on both the buy and sell side.

Once you've met the requirements above, Jupiter will automatically list your token within a few minutes.


### Getting on the Strict List

For the safety and convenience of users, we provide a "strict" list, which shows a smaller set of validated tokens and is the default on our UI.  The strict list is put together by the community and your token should be known and supported by them. More details are shared on the linked Github repo.

To get your token on the Strict list:
- Open a PR on the [Token List Repo](https://github.com/jup-ag/token-list)
- Please go through the README on the github repo carefully  -- it contains everything you need to know with sample PRs and notes on how to engage the community.
- The best way to get validated faster is to follow the examples of community-support in the example PRs listed on the README, and share meaningful introductions about your project on Twitter and Discord, so that the community can support you. 
- Please prepare the PR early so that the community is given sufficient time to support your validation request. To allow time for community discovery and discussion, reviews are generally done on a weekly basis.


You can also get the list of tokens via the [Token List API](/docs/apis/token-list-api).
