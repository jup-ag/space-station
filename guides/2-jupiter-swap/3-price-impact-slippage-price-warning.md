---
sidebar_label: "Price Impact, Slippage, Warnings"
description: "Understand Price Impact, Slippage and Price Warnings"
---

# Understand Price Impact, Slippage and Price Warnings

Jupiter offers several information signals to help users make informed trading decisions and protect themselves from potential losses. On this page, we will explain the difference between price impact, slippage, and price warning.

## Price Impact

Price impact refers to the change in an asset's price due to the execution of a trade. This is especially relevant in decentralized exchanges (DEXs) or automated market makers (AMMs) due to their liquidity model.

Price Impact is influenced by the available liquidity to settle the trade, and the size of the trade. For example, if you want to swap a large amount of one token for another in a liquidity pool, the larger your trade compared to the pool's size, the more significant the price impact will be. This is because the execution of your trade will shift the balance between the tokens in the pool, and this shift will directly affect the price according to the AMM's formula. 

Price impact numbers vary across AMMs and the figure shown on Jupiter is an aggregate based on your particular route. 

To reduce price impact, users can split trades into several smaller trades over time. Jupiter's smart routing system checks all available liquidity pools to find the optimal route that maximizes output tokens.

Be sure to check the minimum amount of destination tokens quoted on the Jupiter interface, and set a Slippage amount to protect yourself.

![Price Impact](../img/price-impact.png)

## Slippage

Slippage occurs when market conditions change between transaction submission and verification. The slippage rate is an important setting to prevent users from receiving fewer tokens than expected. If the price falls below the slippage rate, the transaction fails.

![Slippage](../img/slippage-setting.png)

## Price Warning

Price Warning is an additional layer of protection implemented by Jupiter to alert users when the quoted price deviates from the reference price (in this case, CoinGecko's pricing). Price warnings can be caused by various external factors, and Jupiter adds an extra confirmation layer to prevent misclicks or human errors.

![Price Warning](../img/price-warning.png)

### Additional Safety Confirmation

When price impact or price deviation is too high, we have an additional modal asking you to confirm the trade.

![Safety Modal](../img/safety-modal.png)
