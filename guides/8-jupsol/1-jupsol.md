---
sidebar_label: "JupSOL Overview"
description: "Introduction to JupSOL"
title: "JupSOL Overview"
---

# JupSOL -  A Liquid Staking Token

JupSOL represents staked Solana (SOL) tokens with Jupiter’s validator, which is hosted and managed by Triton. Jupiter passes all validator rewards collected and 100% of MEV (Maximal Extractable Value) along to stakers for maximum yield. The JupSOL token is issued through Sanctum.

Review the official JupSOL announcement forum post [Here](https://www.jupresear.ch/t/jupsol-jupiter-staked-sol/14666).

## How does JupSOL Work?

SOL that’s deposited into JupSOL is staked. The staking rewards from that SOL accrue to the JupSOL token, which starts at 1:1 with SOL and grows in value over time relative  to  SOL. (Note that while JupSOL  will always  increase relative  to SOL, it may still lose value in  dollar  terms.) By simply holding JupSOL, you will earn staking rewards.

### Where does the yield come from?

JupSOL earns staking yields and MEV kickbacks from Jupiter’s validator, which has no fees. Additionally, the Jupiter team has delegated 100K SOL to the Jupiter validator. They will use the yield from that SOL to enhance the APY of JupSOL. Expect to see higher than average APYs on JupSOL compared to regular LSTs.

![jupSOL](../img/jupsol/jupSOL-1.png)

For Example:
- When the JupSOL validator pool was launched, 1 JupSOL = 1 SOL. 
- Assuming a 10% APR (inclusive of all rewards) and a Solana epoch time of ~2 days that equates to ~0.000547945 SOL rewards per epoch.
- At the end of one epoch, 1 JupSOL = ~1.000547945 SOL. 
- At the end of two epochs, 1 JupSOL = ~1.001096191 SOL.
- And at the end of one year, 1 JupSOL = ~1.105163349 SOL due to compounding rewards.

## JupSOL Fees
- 0% management fee
- 0% validator commission
- 0% stake deposit fee
- 0.1% SOL deposit fee
- 0% withdrawal fee

:::info Arbitrage Protection
Jupiter charges a small SOL deposit fee to prevent an arbitrage attack on the pool.
:::

## JupSOL Security

JupSOL is powered by the SPL stake pool program. The SPL stake pool program is one of the safest programs in the world. It has been [audited multiple times](https://learn.sanctum.so/docs/security/audits), is used by the largest stake pools like jitoSOL and bSOL, and has secured more than $1B of staked SOL for years without any issues.

The program authority is secured by a multisig that includes, among others, members from Sanctum, Jupiter, Mango, marginfi and Jito. Any changes to the program will have to be approved by a majority vote from this multisig. No single party can unilaterally change the program. We plan to significantly grow the size of the multisig and eventually freeze the program.

For more details, check out this post on [Sanctum](https://learn.sanctum.so/docs/security/is-sanctum-safe).

## Benefits of Holding JupSOL

Buying and holding JupSOL helps you earn native staking yields on your SOL; this is the “risk-free” rate of SOL. As an extra incentive to hold JupSOL, Jupiter is returning all validator MEV rewards to JupSOL. This should lead to higher APY than native staking.

When you hold JupSOL, you also help Jupiter improve its transaction inclusion rate, making it easier for all Jupiter users to swap, DCA or place limit orders in congested conditions.

### What is a Liquid Staking Token?

Liquid staking lets you participate in DeFi while earning staking yields. Liquid staking solves the [Staking Dilemma](https://learn.sanctum.so/guides/more-about-sanctum/sanctums-value-proposition) by giving you the best of both worlds – it lets you secure the network and use your SOL at the same time.

You can think of staking as putting gold in a vault, and liquid staking as issuing a piece of paper money (an IOU, "I owe you") for the gold in that vault. In the same way that a paper IOU can be redeemed at any time for the gold, a liquid staking token (LST) can be redeemed at any time for unstaked SOL. Unlike natively-staked SOL, this liquid staking token is transferable. It can be used in all of DeFi – borrow-lend, perps, stablecoin issuance, etc.


