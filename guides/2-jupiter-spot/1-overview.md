---
sidebar_label: "Spot Overview"
description: Learn about Jupiter Spot, the most powerful way to trade tokens on Solana.
title: Spot Overview
slug: /spot-overview
---

![spot-overview](../../guides/img/jupiter-spot.png)


Welcome to **Jupiter Spot**, the most powerful way to trade tokens on Solana. 

Jupiter Spot relies on **Jupiter Routing**, a universal routing algorithm with over **22 AMMs** on Solana, intelligently finding the best prices for your trades, and across all the tokens on Solana.

Jupiter Spot is made up of 4 trading methods to help you buy and sell spot assets on Solana:
1. **Swap**
2. **Limit Order (LO)**
3. **Dollar-Cost Averaging (DCA)**
4. **Value Averaging (VA)**

Let's go through them in this overview.

## 1. Swap

**Swap between any token on Solana, with the best prices and 0 fees with a single click.**
- Jupiter also automatically minimizes [slippage](https://station.jup.ag/guides/jupiter-swap/how-swap-works/metropolis#dynamic-slippage) and set [priority fees](https://station.jup.ag/guides/jupiter-swap/swap#transaction-priority-fees) for you, while [flagging potential concerns](https://station.jup.ag/guides/jupiter-swap/how-swap-works/#safety-notifications).
- All you have to do is to set the max slippage & priority fees you are willing to pay, before swapping without worry.
- Detailed walkthrough on how to swap on Jupiter & UI features: [How to Swap](https://station.jup.ag/guides/jupiter-swap/swap)

## 2. LO

**Specify a set price to execute your trade, across most tokens on Solana.**

- When your desired price is hit, Jupiter’s Keepers attempt to fill the order for you.
- Note: You will get filled at exactly the rate you specified. Use our UI to help guide you in setting the right orders!
- Detailed walkthrough on how to set limit orders & UI features: [How to use Limit Order](https://station.jup.ag/guides/limit-order/limit-order)

## 3. DCA

**Automate regular investments with DCA, with a 0.1% fee per order.**

- Based on your Interval (Weekly, Monthly, etc) and Number of Orders, DCA will swap on your behalf.
- Automatically retry and minimize priority fees + slippage for DCA orders, without you needing to.
- Detailed walkthrough on how to set DCA orders & UI features: [How to use DCA](https://station.jup.ag/guides/dca/how-to-dca)

## 4. VA

**DCA, but price weighted. Buy more when prices are low, and buy less when prices are up.**

- VA maintains a “target portfolio increase”, where it will buy more tokens when prices fall, and less when prices are high, instead of a fixed purchase quantity at every interval.
- Detailed walkthrough on how to set VA orders & UI features: [How to use VA](https://station.jup.ag/guides/va/how-to-va)

:::tip NOTE FOR LO/DCA/VA
- When creating a **LO/DCA/VA** order, your tokens will be transferred out from your wallet and delegated to the **Jupiter Program**, where product-specific Jupiter Keepers (bots) will execute the transaction on your behalf.
- They all charge a 0.1% fee, and have a minimum order size of US$5.
:::


