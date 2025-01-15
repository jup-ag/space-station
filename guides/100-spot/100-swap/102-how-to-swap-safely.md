---
sidebar_label: How to swap safely
title: How to swap safely
description: Guide to Swap Safety
---

<head>
    <title>Swap Guide: Swap Safety</title>
    <meta name="twitter:card" content="summary" />
</head>

Swapping tokens is exciting, but staying safe is crucial. Jupiter equips you with the right tools and information to ensure you can make an well-informed swap decision. Let’s dive into how you can make the most of these safety features.

---

## Swap Summary

The summary provides key details about your trade, including the minimum amount you'll receive, transaction fees, and the price difference compared to the market rate.

## Token Information

Jupiter provides key token details to help bridge any information gaps you might encounter while trading.

1. **Token Verification:** 

    Verified tokens are clearly marked as `Verified ✅` or `Not Verified ⚠️`, giving you quick insight into their legitimacy.

    :::note Jupiter Community Verification
    [Learn about how Jupiter Community verifies tokens in the Solana ecosystem.](./)
    :::

2. **Token Shield:** (revisit)

    Based on price and liquidity checks of the token you are buying, we are able to detect if the token can be sold. If the token cannot be sold, we will display a warning to help you make an informed decision.
    
3. **Token Features or Extensions:** 

    Additionally, some tokens retain features or extensions which is displayed as easy-to-spot information pills for added clarity.

### Common Token Features or Extensions on Solana

| | **Definition** | **Valid Use** | **Misuse** |
|---|---|---|---|
| **Permanent Delegate** | Allows creators to grant unlimited delegation privileges over any account for that mint, including burning or transferring any tokens from any account. | Enables automatic payments, wallet recovery, and processing refunds. | Scam projects could drain tokens from users' wallets. |
| **Transfer Tax** | Enables fees to be withheld on each transfer, redeemable by those with withdraw authority. | Allows projects to generate revenue through service charges, or to collect royalties or taxes on transfers. | Scam projects might arbitrarily increase transaction taxes for the wrong intentions. |
| **Freeze Authority** | Allows issuers to halt token transfers or trading, temporarily or permanently. | Commonly used for regulated tokens (e.g., stablecoins) to meet legal standards; issuers can freeze tokens for compliance with legal or regulatory concerns. | Scam projects might use this to prevent selling or transferring, enabling market manipulation or potential fraud. |

---

## Warnings

Trading tokens can be thrilling, but it's essential to stay cautious to avoid unnecessary risks. Here are some key warnings that Jupiter shows to keep your Swap in check.

1. **Price Impact**

    Price Impact is influenced by the available liquidity to settle the trade. The larger the trade the larger the price impact on the selected assets.

    :::tip
    Try swapping with smaller sizes or use DCA with high frequency to sell your tokens gracefully.
    :::

2. **JupiterZ (RFQ) Only Mode**

    JupiterZ is in beta production stage and it does not support all tokens, hence using JupiterZ **Only** Mode might result in unavailable swaps.

3. **Exactout Mode**

    ExactOut occurs when you specify the exact amount of tokens you want to buy/receive rather than sell. However, ExactOut is not a widely supported option across all DEXes, leading to potential unfavorable swaps.

4. **Direct Route Mode**

    When enabled, your swaps will route without intermediate tokens or hops, which results in routing using only 1 pool. This may often result in unfavorable swaps, with worse price or huge price impact.

5. **Exclude AMMs**

    When enabled, your swaps will route through pools that are not excluded. This may often result in unfavorable swaps, but can be useful in times of bad pools.

    If you identify or suspect of a pool not working well, report to Jupiter's team on [Discord](https://discord.gg/jup).

6. **Jito Only Mode**

    When enabled, Jupiter will only send your transactions directly to Jito block engines. This allows prevents and reduces the chances of sandwiching or being frontrun.
    
    :::caution
    However, do note that this comes with higher transaction fees (in the form of Jito Tips) and lower transaction success rates.
    :::

