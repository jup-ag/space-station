---
sidebar_label: Position Management
title: Position Management
description: How the Jupiter Perpetuals Exchange Position Management works
---

<head>
    <title>Perps: Position Management</title>
    <meta name="twitter:card" content="summary" />
</head>

By understanding how the Jupiter Perpetuals Exchange works, you can manage your positions more effectively. This guide will help you understand how to manage your collateral for each type of positions and how to calculate your PnL.

---

## Longs

Traders to open or increase long positions for **SOL**, **ETH**, and **wBTC**, with leverage up to **100x** based on the initial margin (collateral). By going long, traders bet that the price of their selected token will rise, aiming to profit from upward price movements.

### Collateral Management

Collateral plays a crucial role in maintaining and managing a long position. Proper collateral management ensures that positions remain open and sustainable during volatile market conditions.

- **Depositing Collateral in Long Positions**

    When traders add collateral, the **liquidation price** decreases, and leverage is reduced, making the position safer. This increases the **maintenance margin**, providing more room for market fluctuations.

- **Withdrawing Collateral in Long Positions**

    Removing collateral increases the **liquidation price** and leverage, making the position riskier. This reduces the **maintenance margin**, leaving less buffer against adverse price movements.

### Underlying Collateral

For long positions, the underlying collateral is the token being longed. Profits and withdrawals from the position are settled in the same token.

| Position  | Collateral |
| --------- | ---------- |
| Long SOL  | SOL        |
| Long wETH | wETH       |
| Long wBTC | wBTC       |

### Example

For example, if a trader opens a long position on **SOL** and earns a profit, they will receive **SOL** when the position is closed, along with any collateral withdrawals.

---

## Shorts

Traders can open or decrease short positions for **SOL**, **ETH**, and **wBTC**, with leverage up to **100x** based on the initial margin (collateral). By going short, traders bet that the price of their selected token will fall, aiming to profit from downward price movements.

### Collateral Management

Collateral plays a crucial role in maintaining and managing a long position. Proper collateral management ensures that positions remain open and sustainable during volatile market conditions.

- **Depositing Collateral in Short Positions**

    Adding collateral increases the **liquidation price** and reduces leverage, making the position safer by increasing the **maintenance margin**.

- **Withdrawing Collateral in Short Positions**

    Removing collateral decreases the **liquidation price** and increases leverage, making the position riskier by reducing the **maintenance margin**.

### Underlying Collateral

For short positions, the underlying collateral is either USDC or USDT, **determined by the utilization rates of these stablecoins when the position is opened**. Profits and collateral withdrawals are always paid out in the same stablecoin used as collateral.

| Position   | Collateral  |
| ---------- | ----------- |
| Short SOL  | USDC / USDT |
| Short wETH | USDC / USDT |
| Short wBTC | USDC / USDT |

### Example

For example, a trader with a profitable short SOL position using USDC as collateral will receive USDC when they close the position or withdraw profits.

---

## Take-Profit/ Stop-Loss

An active [Associate Token Account (ATA)](https://spl.solana.com/associated-token-account) is needed for TP/SL to be triggered and executed.

- ATA will be automatically created for you when you create a TP/SL.
- If you close the position manually, the associated TP/SL will be automatically cancelled and closed.

:::warning Closing Required ATA
If you have closed the required ATA, **the TP/SL will not be triggered**.

Either manually close the position or reopen the required ATA (you can do so by using Jupiter Swap to swap a small amount of the token).
:::

:::info
When TP/SL is set, keepers will monitor the mark price, when reaching the specified price level, TP/SL will close the whole position. More info on the keeper execution of TP/SL [here](./keeper).
:::

| Position Type | Required ATA |
|---------------|---------------|
| SOL-Long      | SOL ATA       |
| ETH-Long      | ETH ATA       |
| wBTC-Long     | wBTC ATA      |
| ALL Short positions | USDC or USDT ATA |

## Profit and Loss

When you open a position on Jupiter Perps (long or short), your PnL updates in real-time as the market moves. The PnL value can either be positive (profit) or negative (loss), depending on whether the price is moving in your favor or against you.

For **long positions**, if the price of your asset goes up, your **PnL** increases. If the price drops, your **PnL** decreases. For example:

- Position: 100 USD long on SOL
- If SOL price increases by 10%: You profit 10 USD
- If SOL price decreases by 10%: You lose 10 USD

For **short positions**, the opposite happens. If the price of the asset goes down, your **PnL** increases. If the price rises, your **PnL** decreases. For example:

- Position: 100 USD short on SOL
- If SOL price decreases by 10%: You profit 10 USD
- If SOL price increases by 10%: You lose 10 USD

### Calculating Realized and Unrealized PnL

:::tip Calculate PnL Programmatically
This [code snippet](https://github.com/julianfssen/jupiter-perps-anchor-idl-parsing/blob/main/src/examples/get-position-pnl.ts) shows an example of calculating a position's PNL.
:::

1. Get the exit price.

2. Determine if the position is profitable by checking if the exit price is greater than the position's average price for longs, or if the exit price is less than the position's average price for shorts

    ``` 
    IF position_is_long
        is_profitable = exit_price > position_avg_price

    ELSE position_is_short
        is_profitable = exit_price < position_avg_price
    ```

3. Calculate the absolute delta between the exit price and the position's average price

    ```
    price_delta = |exit_price - position_avg_price|
    ```

4. Calculate the PnL delta for the closed portion of the position: multiply the size being closed (`trade_size_usd`) by the price delta, then divide by the entry price to get the PnL delta

    ```
    pnl_delta = (trade_size_usd * price_delta) / position_avg_price
    ```

5. Calculate the final unrealized PnL depending on whether the position is profitable or not

    ```
    IF is_profitable
        unrealized_pnl = pnl_delta

    ELSE
        unrealized_pnl = -pnl_delta
    ```

6. Deduct the outstanding fees from the unrealized PnL to get the final realized PnL

    :::info
    [Read the Jupiter Perpetuals fee breakdown here](./fees) for more info on open / close fees, price impact fees, and borrow fees.
    :::

    ```
    realized_pnl = unrealized_pnl - (close_base_fee + price_impact_fee + borrow_fee)
    ```
