---
slug: jup-v2-major-upgrade-to-routing-engine
title: "Jupiter v2 - A Major Upgrade to our Routing Engine!"
---

![NewDesign](new_design.jpeg)

We are excited to announce Jupiter v2 - a major upgrade to our routing engine! Rewritten in Rust to tap on the speed of Solana, it now offers advanced routing across 20+ liquidity venues for better pricing on both large and small trades. 

This engine was made possible by the introduction of major composability improvements in Solana last year, including Versioned Transactions, where more complex transactions such as multiple hops and split trades can be executed together within one atomic transaction.

Our quote and pricing API will similarly undergo major upgrades, allowing integrators to seamlessly adopt the new engine for better quoting and more accurate/deeper real-time price data.

---

In addition, there are a few other significant improvements, including:

## 1. Dynamic Priority Fees

Where the program determines the added transaction priority fee needed for a successful trade. The feature, when turned on, will run in the background, reducing the chances of failed transactions.

![DynamicFees](dynamic.png)

## 2. Safety Improvements

User safety and security are our top priority. By default, we show only community-validated tokens and added safeguards against trades where the price impact or price warning exceeds 15%.

![SafetyImprovemnets](safety_improvements.jpeg)

## 3. New Design and Navigation

We will introduce a refreshed brand with an even better user experience at Jupiter. We are committed to collaborating closely with the community, sharing design ideas and gathering feedback throughout the process to make this happen!

![NewDesign](new_design1.jpg)

We will be rolling out these enhancements incrementally and engaging the community along the way. Stay tuned for product updates and feature/design discussions in Discord. Your feedback and suggestions will help shape our products and features for v2!

With Jupiter v2, we progress towards building the most powerful trading engine in DeFi and a platform to replace the need to use CEXes. This is us keeping to the key JUP Promise of Best Price, Best Token Selection and Best UX!

Come give it a spin here: [v2.jup.ag](https://v2.jup.ag)
