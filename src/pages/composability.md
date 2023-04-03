---
title: Composability
---

# What is composability ?

<p>Composability is the fact that a dApp or a protocol can build on top of another protocol. We sometimes use the analogy of Lego building blocks. This has the benefit, for a developer, of focusing his efforts on building new products, without having to re-build the ones already built by other teams.</p>
<p>In the case of blockchain applications, this can be done off-chain - by linking a dApp through an <a href="docs/category/web--app-integration">API</a> or <a href="docs/Integrating-Jupiter/backend-bot-integration#integrating-jupiter-with-sdk">SDK</a> - or on-chain - by allowing two programs to call each other through <a href="docs/Integrating-Jupiter/cpi-smart-contract-integration">CPI</a>.</p>

# Single Liquidity Endpoint For Solana

<p>Jupiter was designed from day one to be the swap infrastructure for Solana. The main goal of Jupiter is to connect on the one hand users, dApp and program and on the other hand all sources of liquidity of Solana.</p>
<p>Whatever you go through the website, the API or by calling directly the Jupiter on-chain program: you have access directly to all the AMM/DEX that we integrate. We can think of Jupiter as a public good for liquidity on Solana.</p>

# Composability heaven

Since October 2021, we have :
* integrated with each DEX release a new interface to it.
* improved our API (currently v4) to handle the growing usage and to scale and improve availability.
* profit from each new improvement of Solana and integrate it in our program at launch (versioned transactions, priority fees).
* review our routing engine continuously to guarantee that we are quoting the best possible price.

<p>Integrate Jupiter allows you to benefit from our team's work and focus on your own.</p>

# CandyPay

<p>CandyPay is a payment solution for Solana. It offers a frictionless solution for merchant websites to integrate cryptocurrency payment methods on the checkout page.</p>
<p>Because merchants do not want to be exposed to market fluctuations, CandyPay will swap the SPL token chosen by the customer into the SPL token chosen by the merchant, usually USDC.</p>
<p>This feature is transparent to both the customer and the merchant. It did not require any specific development by CandyPay which builds on top of the Jupiter program.</p>

# Mango

<p>Mango Markets provides a single venue to lend, borrow, swap, and leverage-trade crypto assets.</p>
<p>Mango V4, with its new swap feature, allows users to make a swap with margin. Concretely, they use the swap instruction of Jupiter and add a new instruction to borrow against the collateral if the user select the margin option.</p>
<p>This functionality is a good example of the complex transactions that are allowed by composability on Solana.</p>

# TWAMM

<p>Solana Labs has realized a reference implementation of TWAMM (time-weighted average market maker). Concretely, it is a question of programming the completion of a swap by splitting it up over time. This can be useful for the execution of large orders requiring a lot of liquidity, or to average the price over a period of time.</p>
<p>To benefit from all the liquidity available on Solana, they opted to build the program on top of Jupiter's.</p>
<p>Similar to the limit order feature, a "keeper" (market maker client) is used to request quote prices from Jupiter. At each time slot configured, it sends transactions to the TWAMM program with the necessary information for it to compose a transaction including the swap instruction of the Jupiter program.</p>
<p>Without Jupiter, it would not have been easy to access all the liquidity available on Solana.</p>




