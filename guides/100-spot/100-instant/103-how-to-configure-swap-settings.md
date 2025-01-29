---
sidebar_label: How to configure swap settings
title: How to configure swap settings
description: Guide to Swap Settings
---

<head>
    <title>Swap Guide: Swap Settings</title>
    <meta name="twitter:card" content="summary" />
</head>

Trading on a blockchain comes with unique settings that might seem daunting at first but are essential for a secure and seamless experience. Here’s a detailed guide to help you navigate transaction fees, slippage, and advanced customization options on Jupiter.

---

Jupiter is designed to make these configurations easier for everyone. Our platform offers two modes to suit different types of traders.

- **Auto Mode:** Ideal for beginners, where settings are dynamically optimized for you.
- **Manual Mode:** Fine tune control for experienced users.

Let’s break down each mode and how to make the most of them.

## Auto Mode

Auto Mode is recommended for beginners or traders who prefer simplicity.

- **Dynamic Slippage:**
    
    Jupiter calculates the ideal slippage threshold based on factors like the token categories and simulations.

- **Dynamic Transaction Fees:**

    The maximum capacity of your transaction fees are estimated using your trade size, the larger the size, the higher the cap, ensuring a balance of not overpaying and transaction success/speed.

- **Jito Only (optional):**

    Minimize the risk of sandwich/frontrun attacks by sending transactions directly to Jito block engines. However, this might lead to higher transaction fees and lower success rates

Swap with confidence! If you need any assistance, please reach out to us in [Discord](https://discord.gg/jup).

## Manual Mode

For advanced users who prefer granular control, Manual Mode lets you customize key settings:

| Slippage Settings | Breakdown |
|---|---|
| **Dynamic** | Estimates a threshold based on the token categories and simulations. |
| **Fixed** | Set a specific percentage threshold for tighter control. |

| Transaction Broadcasting Settings | Breakdown |
|---|---|
| **Broadcast Mode** | **Priority Fee:** Use a typical RPC with a Priority Fee to speed up inclusion.<br /><br />**Jito Only:** Use a Jito RPC with a Jito tip to prevent sandwich/frontrun.<br /><br />**Both:** Send your transaction via both methods.<br /><br />*When using both at the same time, your priority fee will be paid when landed via typical RPCs. Both your priority fee and jito tip will be paid when landed via Jito client validators.* |
| **Speed**<br /><br />*Used with `Fee Mode: Max Cap`.* | **Fast:** 25th percentile. Lowest fees but might yield slower and high rates of unsuccessful transactions.<br /><br />**Turbo:** 50th percentile. Recommended to balance not overpaying while optimize for success rates.<br /><br />**Ultra:** 75th Percentile. Highest fees optimized for transaction landing, especially for time critical swaps. |
| **Fee Mode** | **Max Cap:** When enabled, Jupiter estimates the transaction fees for you, and during transaction submission, it will never use more than your max cap.<br /><br />**Exact Fee:** When enabled, you define the exact fee you want to use, this might not be favorable as you will need to estimate accurately for every swap. |

## Advanced Settings

- **Direct Route Only:** Restrict your trade to a single liquidity pool. While this simplifies routing, it might limit options and lead to less optimal prices.
- **Use wSOL:** Wrapped SOL (wSOL) makes frequent SOL trades faster by avoiding the need to wrap/unwrap tokens manually.
- **AMM Exclusion:** Exclude specific Automated Market Makers (AMMs) from routing. Keep in mind, this isn’t a permanent setting and resets after refreshing the page.