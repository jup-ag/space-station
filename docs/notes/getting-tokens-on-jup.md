---
sidebar_position: 5
---

# Getting Your Token on Jupiter

**To get your token listed**

- Your token must exist on-chain and have token metadata conforming to the [Metaplex Token Metadata](https://docs.metaplex.com/programs/token-metadata/token-standard).
- Your token must have a minimum amount of liquidity of **$500** in any of the DEXes that Jupiter aggregates.
    - If your liquidity is on Openbook it must have $250 on both the buy and sell side.

Once you've met the requirements above, Jupiter will automatically list your token within a few minutes. 

:::info
**Unknown Token**: We are listing tokens with sufficient liquidity automatically. These tokens are marked with the 'unknown' label, to encourage users to double-check that the mint addresses are the right ones that they wish to interact with before proceeding.

Please proceed with caution -- Token names and symbols can be faked and the only source of truth is the mint address. More details are shared in this tweet:
https://twitter.com/JupiterExchange/status/1580217415593443329?s=20&t=xmsYmPnUZfuS6tQpvEQ7Pg
:::

For the safety and convenience of users, we provide a "strict" list API, which shows a smaller set of validated tokens and is the default on our UI. See [Token List API](/)

If you want to get your token on the Strict list, you can refer to this segment: [#Community Validation for Strict Mode(BETA)](/)