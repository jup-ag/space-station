---
sidebar_label: How Swap Works [DELETE]
description: Learn how Jupiter Swap uses smart routing and safety features to innovate token trading on Solana. Discover its mechanisms in this beginners guide.
title: How the Jupiter Swap Works [DELETE]
---

<head>
    <title>Understanding Jupiter Swap: Smart Routing & Features</title>
    <meta name="twitter:card" content="summary" />
</head>

The Jupiter Swap is a decentralized exchange aggregator designed to provide the best rates for swapping SPL tokens on the Solana blockchain. It routes trades through multiple liquidity sources to ensure optimal prices, low slippage, and efficient transaction execution. Users benefit from its seamless interface, deep liquidity, and the ability to perform complex token swaps in a single transaction.

### **Jupiter V3 Upgrades**

Jupiter V3 introduced multiple improvements to the swap experience! 

The Metropolis upgrade introduced Instant Routing, Dynamic Slippage, Smart Token Filtering, Ecosystem Token List and new Safety features.

Metis, a routing protocol, was also introduced to improve route discovery, reducing slippage and scalability in V3.

### Token Ledger For Increased Swap Success Rates

The Token Ledger is a collection of three instructions *(Set Token Ledger, Send Instruction, Swap Instruction)* that consolidate withdrawal and swap instructions into a single transaction. Integrators/partners can now effortlessly instruct a swap to be executed based on the actual sent amount, after taking into account fees and slippages.

Before the introduction of the Token Ledger, swap instructions relied on a simulation-driven approach to approximate the amount deducted from a user's wallet to facilitate the swap. This estimation approach often ended up with discrepancies between the estimated and actual amounts, especially during periods of market volatility with high slippages, leading to swap failures.

Consider this scenario where a user intends to withdraw 1,000 USDC from Meteora’s USDC vault into wBTC. Note that users hold vUSDC LP tokens in Meteora vaults.

1. In the first instruction, the Token Ledger will verify and record the user’s initial USDC balance within their wallet. For the purpose of this example, let’s assume the initial balance is 100 USDC.
2. In the second instruction, an amount equivalent to 1,000 USDC in vUSDC is withdrawn from Meteora vaults into USDC, and we examine the user’s balance. Due to factors like slippage, the USDC balance is found to be 1090 USDC.
3. For the third instruction, subtracting the initial 100 USDC from the current 1090 USDC balance, it’s evident that the user has effectively withdrawn 990 USDC, which will then be utilized to swap for wBTC as the final output token.

Without the Token Ledger, the previous swap method relied on estimated amounts, which could fluctuate due to market volatility and performance variations, frequently resulting in suboptimal user experiences.

With the Token Ledger, integrators can issue swap instructions based on actual amounts that have taken into account slippage and related fees. This eliminates the need for simulation and significantly increases the success rate of swaps, all within a single transaction.

The Token Ledger caters to a wide range of use cases, which include but are not limited to:

- Withdrawing assets from a protocol to any desired token, such as converting to USDC from a wBTC vault.
- Supporting protocols that transition positions to a different token from their original position, as seen in Perpetuals.
- Facilitating the exchange of NFTs for tokens other than SOL.

Read more about the Token Ledger:
https://station.jup.ag/docs/apis/swap-api#using-token-ledger-instruction
