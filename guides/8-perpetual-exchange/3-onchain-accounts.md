---
sidebar_label: "Onchain Account Types"
description: Onchain Account Types
---

# Onchain Account Types

This page contains an overview of all the **Solana account types** used in the Jupiter Perpetuals decentralized exchange.

This information is useful for developers looking to integrate or interact the Jupiter Perpetuals program and transactions.

:::info
This [repository](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing) contains `typescript` code samples on interacting with the Jupiter Perpetuals program IDL with `anchor` and `@solana/web3.js`
:::

## `Position` account

The `Position` account contains the trade position data for a given token. The following is an example of a `Position` account:

:::info
An example `Position` account on Solscan: https://solscan.io/account/FBLzd5VM67MEKkoWerXu7Nu1ksbLXQvJDx63y5aeLEvt
:::

The `Position` account contains the following data:

* `owner`: The public key / address for the trader's wallet.
* `pool`: The public key / address for the [Jupiter Perpetuals liquidity pool account](https://solscan.io/account/5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq).
* `custody`: The public key / address for the position's custody account. A custody account in the Jupiter Perpetuals exchange contains information for the token that's being traded against for the position. 

  - For example, a long SOL position will have the `custody` account. [`7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz`](https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz)  which contains important data like the its price impact fee scalar, tokens locked currently for potential profit payoffs, and other data used by the Jupiter Perpetuals exchanged.

* `collateralCustody`: The public key / address for the position's collateral custody account. 
  - Like the custody account, a collateral custody account in the Jupiter Perpetuals exchange contains information for the token that's used as collateral for the position (SOL / wETH / wBTC for long positions, USDC / USDT for short positions). The borrow rates for the position will also be calculated based on the position's `collateralCustody`.

* `openTime`: The open time of the position in UNIX timestamp format.
* `updateTime`: The time the position was last updated in UNIX timestamp format.
* `side`: The position's side (long / short).
* `price`: The entry price of the position when it was opened. The entry price is an integer corresponding to the number of decimals used by the USDC / USDT mint (6 decimal places). For example, a value of `158225872` is equal to $158.22 (before rounding up) after factoring in the decimals.
* `sizeUsd`: The position size after leverage in USD and integer format as explained in `price`. A position with `sizeUsd = 0` is treated as a closed position.
* `collateralUsd`: The position's collateral size after fees in USD and integer format as explained in `price`.
* `realisedPnlUsd`: The position's realized PNL when closing the position partially. When a profitable position is closed completely, the position's `realisedPnlUsd` will be `0` as the position is considered closed (as described in `sizeUsd`).
* `cumulativeInterestSnapshot`: Stores the position's interest rate snapshot when it was last updated. 
  - The `collateralCustody` account for the respective collateral token stores a monotonically increasing counter in `collateralCustody.fundingRateState.cumulativeInterestRate`. 
  - The difference between the `collateralCustody.fundingRateState.cumulativeInterestRate` and the position's `cumulativeInterestSnapshot` is used to calculate the borrow fees for the position.
* `lockedAmount`: The amount of tokens (SOL / wETH / wBTC for long positions, USDC / USDT for short positions) locked to pay off the position's max potential profit i.e. it acts as a cap on the maximum potential profit of the position. This amount is locked in the collateral custody to ensure the platform has sufficient tokens to pay out profitable trades.
* `bump`: The bump seed used to derive the PDA for the `Position` account.

:::info
The `Position` account's address is derived from the trader's wallet address / public key, the custody account, the collateral custody account, and a few other constant seeds. This means traders will always have the same `Position` account address for their open positions.

This also means that traders only have nine positions available at one time:

* Long SOL
* Long wETH
* Long wBTC
* Short SOL (USDC as collateral)
* Short SOL (USDT as collateral)
* Short wETH (USDC as collateral)
* Short wETH (USDT as collateral)
* Short wBTC (USDC as collateral)
* Short wBTC (USDT as collateral)
:::

## `PositionRequest` account

A `Position` can have many `PositionRequest` accounts as each trade request is unique.

The `PositionRequest` account's address is a [program-derived address (PDA)](https://solana.com/docs/core/pda) derived from the underlying `Position` account's address, several constant seeds, and a random integer seed which makes each `PositionRequest` account unique.

:::info
The following is an example of a `PositionRequest` account: https://solscan.io/account/DNnX2B1oiYqKLrbLLod1guuaZA28DQwJ8HuHsgDafoQK
:::

The `PositionRequest` account contains the following data:

* `owner`: The public key / address for the trader's wallet.
* `pool`: The public key / address for the [Jupiter Perpetuals liquidity pool account](https://solscan.io/account/5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq).
* `custody`: The public key / address for the position request position's custody account. A custody account in the Jupiter Perpetuals exchange contains information for the token that's being traded against for the underlying position. 

  - For example, a long SOL position will have the `custody` account [`7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz`](https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz)  which contains important data like the custody's price impact fee scalar, tokens locked currently for potential profit payoffs, and other data used by the Jupiter Perpetuals exchanged.

* `collateralCustody`: The public key / address for the position request position's collateral custody account.
  - Like the custody account, a collateral custody account in the Jupiter Perpetuals exchange contains information for the token that's used as collateral for the underlying position (SOL / wETH / wBTC for long positions, USDC / USDT for short positions).
* `mint`: For opening positions and collateral deposits, `mint` is equal to the input mint requested by the trader. 
  - For example, if a trader opens a position by providing the initial margin with SOL, then `mint` will be equal to SOL's mint address. If the trader deposits collateral in USDC, then `mint` will be equal to USDC's mint address. 
  - For closing positions and collateral withdrawals, `mint` is equal the to position collateral token's mint address. For example, if a trader closes a long SOL position, `mint` will be equal to SOL's mint address. If a trader closes a short SOL position, `mint` is equal to USDC or USDT's mint address depending on the position's collateral.
* `openTime`: The UNIX timestamp for when the position request is created.
* `updateTime`: The UNIX timestamp for when the position is last updated.
* `sizeUsdDelta`: The USD amount to increase or decrease the position size by. The amount is an integer that uses 6 decimal places as specified by the USDC / USDT mints. For example, a position request to increase an open position's size by 10 USDC will have a `sizeUsdDelta = 10000000.`
* `collateralDelta`: For opening positions and collateral deposits,`collateralDelta` is the token amount to increase or decrease the position collateral size by. The token amount is an integer that corresponds to the decimal places used by the token specified in `mint`. 
  - For example, a position request to increase a position's collateral size by 1 SOL will have `collateralDelta = 1000000000`. 
  - For closing positions and collateral withdrawals, `collateralDelta` is the USD value of the collateral to be withdrew from the position. The amount is an integer that uses 6 decimal places as specified by the USDC / USDT mints. 
  - For example, a position request to withdraw $100 from the position's collateral will have a `sizeUsdDelta = 100000000` .
* `requestChange`: `requestChange` will be equal to `Increase` for open position and collateral deposit requests, and `Decrease` for close position and collateral withdrawal requests.
* `requestType`: `Market` for all position requests except for TP / SL requests, which have a `Trigger` `requestType`.
* `side`: `Long` for long positions, `Short` for short positions
* `priceSlippage`: The maximum price with slippage for the position request when opening, closing, or updating the position size. 
  - When increasing the size of a long position or decreasing the size of a short position, the request will fail if the current price of the position's token is greater than `priceSlippage`. 
  - When decreasing the size of a long position or increasing the size of a short position, the request will fail if `priceSlippage` is greater than the current price of the position's token.
* `jupiterMinimumOut`: For requests that require token swaps (e.g. opening or closing positions, updating position sizes), the output amount of the token swap must be greater than or equal to `jupiterMinimumOut`. The request will fail if the swap does not satisfy `jupiterMinimumOut`.
* `preSwapAmount`: This is an internal attribute used by the program to calculate the `collateralDelta` for position requests that require token swaps.
* `triggerPrice`: The price (USD) used for TP / SL position requests.
* `triggerAboveThreshold`: When `triggerAboveThreshold` is true, the TP / SL position request will be triggered when the position's token price is greater than or equal to `triggerPrice`. When `triggerAboveThreshold` is false, the TP / SL position request will be triggered when the position's token price is less than or equal to `triggerPrice`.
* `entirePosition`: This attribute is only checked when closing or decreasing position sizes. When `entirePosition` is true, the entire position will be closed (i.e. a close position request). When `entirePosition` is false, the position size will be reduced according to `sizeUsdDelta`.
* `executed`: Determines whether the position request is executed or not.
* `counter`: The random integer seed used to derive the position request address.
* `bump`: The bump seed used to derive the position request address.

:::info
A `PositionRequestATA` account is created for each `PositionRequest` account. The `PositionRequestATA` account is an [associated token account](https://spl.solana.com/associated-token-account) derived from the `PositionRequest` that contains the tokens from the trader's deposits or withdrawals from withdrawing collateral or closing positions. The tokens are then transferred the position token's custody token account or returned to the trader's wallet when the `PositionRequestATA` account is closed.
:::info

### Take Profit (TP) / Stop Loss (SL) Requests

`PositionRequest` accounts for non-TP / SL requests are closed as soon as the request is executed or rejected.

TP / SL requests are also stored onchain via `PositionRequest` accounts. However, they will only be closed when the TP / SL request is triggered and executed.&#x20;

Active TP / SL requests can be fetched onchain (through blockchain explorers like Solscan or SolanaFM) by searching for the `PositionRequest` address or public key associated with the TP / SL request.

## `Pool` account

The `Pool` account contains data for the JLP pool, including AUM and custody data (which will be explained in detail later in this document).&#x20;

:::info
There is only one `Pool` account for the JLP pool: [https://solscan.io/account/5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq](https://solscan.io/account/5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq)
:::

* `name`: The name for the account.
* `custodies`: An array containing the public keys for the custodies (tokens) managed by the JLP pool.
* `aum_usd`: The current AUM value (USD) for the JLP pool. The `aum_usd` value's calculation can be summarized by getting the USD value of the tokens managed by the pool minus the USD value reserved to pay off trader profits. A more detailed explanation on the `aum_usd` calculation is shown later in this document.
* `limit`:  Contains values for the pool's limits.

  -  `maxAumUsd`: The max AUM for the JLP pool. This acts as a max cap / ceiling as the JLP will not accept deposits when the cap is hit.
  -  `tokenWeightageBufferBps`: The token weightage buffer (in BPS) to calculate the token's maximum or minimum current weightage based on the target weightage. Currently, `tokenWeightageBufferBps` is set to `2000` which means the current weightage cannot be lower of higher than + / - 20% of the token's target weightage. For example, if SOL's target weightage for the JLP pool is 50%, the current weightage cannot be less than 40% or exceed 60%. The pool will not allow deposits or withdrawals if the action causes the token to exceed its target weightage.
  -  `maxPositionUsd`: Sets the maximum position size for the Jupiter Perpetuals exchange. The current `maxPositionUsd` value is `2500000000000` which means a position's max size is $2,500,000.
* `fees`: Sets the fee amounts or percentages for the Jupiter Perpetuals exchange.
  -  `increasePositionBps`: A fixed fee of 6 BPS (0.06%) is charged for opening or increasing a position.
  -  `decreasePositionBps`: A fixed fee of 6 BPS (0.06%) is charged for closing or decreasing a position.
  -  `addRemoveLiquidityBps`: Fee charged when adding or removing liquidity to/from the pool.
  -  `swapBps`: Swap fee for exchanging non-stablecoin tokens routed through the liquidity pool.
    * For stablecoins: swap fee = `stableSwapBps` ± `stableSwapTaxBps`
    * For non-stablecoins: swap fee = `swapBps` ± `taxBps`
  -  `taxBps`: Tax fee for non-stablecoins, determined based on the difference between the current and target weightage. A larger difference results in a higher tax fee, encouraging liquidity providers to rebalance the pool to the target weightage.
  -  `stableSwapBps`: Swap fee for exchanges involving stablecoins, routed through the liquidity pool.
  -  `stableSwapTaxBps`: Tax fee for stablecoin swaps. Similar to `taxBps`, this fee is determined by the difference between the current and target weightage.
  -  `protocolShareBps`: Jupiter takes a share of 2500 BPS (25%) from the fees collected by the pool.
* `poolApr`: Contains data related to the pool's APR / APY calculations.
  -  `lastUpdated`: The UNIX timestamp when the pool's APR data was last updated.
  -  `feeAprBps`: The pool's APR in BPS format. The APR is calculated weekly by dividing the pool's realized fees (minus the 25% collected by the protocol) by the total pool value, adjusting for the 1 week time period to annualize the rate.
  -  `realizedFeeUsd`: The fees collected by the pool so far. This fee is reinvested back into the pool and is also used to calculate the APR as mentioned above. `realizedFeeUsd` resets to zero when the fee is reinvested into the pool hence causing the APR value to fluctuate weekly.

## `Custody` account

The `Custody` account contains information for all the custodies (tokens) managed by the JLP pool. The JLP pool currently manages the following custodies:

1. SOL: [https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz](https://solscan.io/account/7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz)
2. ETH: [https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn](https://solscan.io/account/AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn)
3. BTC: [https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm](https://solscan.io/account/5Pv3gM9JrFFH883SWAhvJC9RPYmo8UNxuFtv5bMMALkm)
4. USDC: [https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa](https://solscan.io/account/G18jKKXQwBbrHeiK3C9MRXhkHsLHf7XgCSisykV46EZa)
5. USDT: [https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk](https://solscan.io/account/4vkNeXiYEUizLdrpdPS1eC2mccyM4NUPRtERrk6ZETkk)

Each `Custody` account contains the following data:

* `pool`: The public key for the pool that this custody belongs to (i.e. the JLP pool).
* `mint`: The public key for the custody's token mint account.
* `token_account`: The associated token account for the custody which holds the tokens under management for the pool.
* `decimals`: The number of decimals used for the token which is the same as the number of decimals specified in the token mint account. This is stored for convenience.
* `is_stable`: Sets whether the custody is a stablecoin.
* `oracle`: Contains data for the price oracle used for the custody.
* `pricing`: Contains data for the custody's price-related logic.
  * `trade_impact_fee_scalar`: Sets the base value when calculating price impact fees when opening or closing positions. For more info on the price impact fee, read more [here](guides/8-perpetual-exchange/2-how-it-works.md#fees).
  * `max_leverage`: Sets the max leverage for this custody's positions. The max leverage for all custodies is `500x` at the time of writing.
  * `max_global_long_sizes`: The maximum total position size (USD) for long positions.
  * `max_global_short_sizes`: The maximum total position size (USD) for short positions.
* `permissions`: A set of global flags that can be set by the protocol's administrator to enable or disable trade actions which is useful during program upgrades or black swan events.
* `target_ratio_bps`: The target weightage (in BPS) for the custody in the JLP pool.
* `assets`: Contains data used to calculate PNL, AUM, and core business logic for the Jupiter Perpetuals exchange. This data is also useful for analytics or crafting hedging strategies, for example.
  * `feesReserves`: The fees collected by all open positions for the custody. `feesReserves` resets to zero when the fees are distributed to the pool and protocol.
  * `owned`: The number of tokens owned by the pool for the custody. This value is increased either by providing liquidity to the pool or depositing collateral when opening or updating positions. Conversely, the `owned` value decreases when liquidity is removed from the pool or collateral is withdrawn from closing positions.
  * `locked`: The number of tokens locked by the pool for the custody to pay off potential profits for open positions.
  * `guaranteed_usd`: This value represents the total amount borrowed in USD (`position size - collateral`) across all long positions. It is updated whenever traders modify their collateral through deposits or withdrawals. The system uses this aggregated figure to efficiently calculate the total profit and loss (PNL) for all long positions, which in turn is used to calculate the AUM of the JLP pool.
  * `global_short_sizes`: Stores the total amount (USD) position sizes for all short positions.
  * `global_short_average_prices`: Stores the average price (USD) for all short positions. This value and `global_short_sizes` are used to calculate the PNL for all short positions efficiently, and is again used to calculate the AUM of the JLP pool.
* `funding_rate_state`: Contains data used to calculate borrow fees for open positions.
  * `cumulative_interest_rate`: Traders are required to pay hourly borrow fees for opening leveraged positions. This fee is calculated based on two primary factors: the size of the trader's position and the current utilization of the pool for the custody. To calculate borrow fees more efficiently, each custody account contains a value called `cumulative_interest_rate`. Correspondingly, each position account stores a `cumulative_interest_snapshot`. This snapshot captures the value of `cumulative_interest_rate` at the time of the position's last update. Whenever there's a change in either the borrowed assets or the total assets within a custody, the `cumulative_interest_rate` for the custody is updated. The difference between the custody's `cumulative_interest_rate` and the position's `cumulative_interest_snapshot` is then used to calculate the position's borrow fees.
  * `last_updated`: The UNIX timestamp for when the custody's borrow fee data was last updated.
  * `hourly_funding_dbps`: **NOTE: This will be deprecated in the near future.** A constant used to calculate the hourly borrow fees for the custody. The Jupiter Perpetuals exchange works with Chaos Labs to update and fine tune the `hourly_funding_dbps` to respond to traders' feedback and market conditions.
* `jump_rate_state`: Contains data used to calculate the [dual slope borrow rate model](guides/8-perpetual-exchange/2-how-it-works.md#borrow-fee).
  * `min_rate_bps`: The lowest borrow rate, applied at 0% utilization.
  * `max_rate_bps`: The highest borrow rate, applied at 100% utilization.
  * `target_rate_bps`: The borrow rate when utilization reaches its target level.
  * `target_utilization_rate`: The optimal utilization level for the custody.
* `price_impact_buffer`: Contains data used to calculate the [dynamic price impact fee](guides/8-perpetual-exchange/2-how-it-works.md#price-impact-fee).
  * `open_interest`: The ring buffer containing the open interest imbalances in the last one minute.
  * `last_updated`: The time (UNIX timestamp) the price impact buffer was last updated.
  * `fee_factor`: A fixed parameter used to calculate the dynamic price impact fee.
  * `exponent`: A fixed parameter used to calculate the dynamic price impact fee.
  * `delta_imbalance_threshold_decimal`: The minimum threshold for the delta imbalance to hit before the dynamic price impact fee mechanism is triggered.
  * `max_fee_bps`: The maximum price impact fee percentage relative to the trade size.
