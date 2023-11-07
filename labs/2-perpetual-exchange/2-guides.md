---
sidebar_label: "User Guides"
title: "User Guide"
description: How to Use Perpetual Exchange
---

## JLP Pool
Users have the opportunity to become Liquidity Providers (LPs) by allocating their assets or tokens into the JLP (Jupiter Liquidity Pool) and, in return, receive LP tokens.

JLP, the Liquidity Provider token, represents a carefully composed index of assets used for swaps and leverage trading. These tokens can be minted using any index asset and later redeemed for any index asset.

Liquidity providers play a pivotal role as they act as counterparties to traders. Traders, seeking to open leverage positions, borrow tokens from the pool. Liquidity providers, in turn, earn fees from these leverage trading activities, along with borrowing fees and swap-related earnings.

Upon closing their positions, traders receive their gains, which are sourced from the borrowed tokens. In the unfortunate event of a trader's losses, those losses are absorbed by the pool, utilizing the trader's collateral.

A significant portion of the fees paid by traders, precisely 70%, is disbursed by the pool. This amount is directly reinvested into the JLP. Consequently, holding JLP tokens allows for continuous compounding of yield and earnings.

It's important to note that liquidation fees, pool earnings, and losses are not factored into the overall yield calculations.

### Adding/Removing Liquidity

When an LP adds liquidity to the JLP pool, they increase the amount of liquidity in the total TVL (Total value lock) which increase the amount tradable on the trading side. 

Liquidity providers (LPs) may use any token to deposit into one of the pool's custody. We will use Jupiter Swap to swap the LP's token into the custody's token.

Similarly when withdrawing from a custody, LPs may request to receive a different token than the custody's token. We will use Jupiter Swap to swap the custody's token to the LP's desired token.

And at the point of depositing assets into JLP pool, the protocol will price in the USD value.


#### How to Add Liquidity to JLP:

1. Begin by selecting the token asset you wish to deposit into the JLP pool from the list of token assets available in your wallet.
2. JLP Pool will automatically identify which token asset in the JLP pool has the lowest weightage and swap your selected asset into that pool (if your chosen output token is not in the list of token assets). Your assets will then be deposited into the pool.
3. Keep in mind that when you deposit into the JLP pool with a relatively high weightage, fees will be incurred. Conversely, depositing into a token pool with lower weightage will result in lower or even zero fees during the deposit process.
4. For instance, if users deposit a token asset that is not in the pool (e.g., SOL, ETH, BTC, USDC, or USDT), JLP will perform a swap into the token asset with the lowest weightage, ensuring minimal fees.

![JLP1](../img/jlp1.jpg)

#### How to Remove Liquidity from JLP:

1. Start by selecting the token asset you intend to withdraw from the JLP pool. You can choose from the list of available token assets in the pool, and the chosen asset will be withdrawn directly into your wallet.
2. JLP Pool will automatically identify the token asset in the JLP pool with the highest weightage and swap your chosen asset into that pool if your selected output token is not in the list of token assets. Your assets will then be withdrawn directly into your wallet.
3. It's important to note that when you withdraw from the JLP token pool with a relatively low weightage, fees will be incurred. Conversely, withdrawing from a token pool with higher weightage will result in lower or even zero fees during the withdrawal process.
4. In situations where users are withdrawing a token asset not present in the pool (e.g., SOL, ETH, BTC, USDC, or USDT), JLP will withdraw from the token pool with the highest weightage, incurring minimal fees. The withdrawn assets will be swapped into the selected output token and then transferred directly into the user's wallet.

![JLP2](../img/jlp2.jpg)

### Target Ratio and Fees

In the JLP pool, every token holds a specific target ratio or weightage.

The transactions involving the addition or removal of liquidity have the primary purpose of adjusting a token's ratio in the pool to align it more closely with the predefined target.

Similarly, each custody plays a role in maintaining a target ratio within the pool. This target ratio significantly influences the fees that are applicable to instructions aimed at modifying the ratio of the custodies within the pool.

### Fee Calculations

Fee calculation for opening and closing positions involves the volume of these transactions, multiplied by the fee percentage of 0.1%.

The borrow fee, often termed as the hourly funding fee, is computed as follows:

Hourly funding fee = (tokens borrowed / tokens in the pool) * hourly funding rate * position size
Trade fees for the pool typically range between 0% and 2%.

To provide an estimated perspective, you can calculate potential revenue by taking JUP's daily or weekly total volume and multiplying it by a fee percentage. For instance:

Total Daily Volume: 50 million
Fee Percentage: 0.1%
Revenue Share Percentage: 70%
Using these values, the calculation would be as follows:
Total revenue to be shared between JLP pool holders = 50 million * 0.1% * 70% = $35,000

To determine your specific share or weight in the total JLP pool, use the following formula:
Your contributed amount to the pool / total pool amount * 100 = your percentage of the pool

For example:
Your contribution: $1,000
Total pool amount: $4,000,000
Your share percentage: 1,000 / 4,000,000 * 100 = 0.025%

Finally, you can calculate your generated revenue share by multiplying the results of the first and second calculations:
Revenue share you'd generate = $35,000 * 0.025% = $8.75
