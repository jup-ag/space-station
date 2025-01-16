---
sidebar_label: How To Configure Settings On Jupiter
description: Find out how you can configure your settings on Jupiter to help you land your transactions effectively.
title: How to Configure Settings
slug: /swap/tutorials/configure-settings
---

## Swap Settings

There are 2 settings that you should take note of when trading on a blockchain. These settings are uncommon in traditional contexts, and it might seem like a friction but it is to help you trade safer and smoother.

### Transaction Fees

In Solana, you need to pay a base fee of 0.000005 SOL for every transaction you attempt to make. However, as the Solana network receives more usage and traffic, more transactions will attempt to compete for the same amount of space.

This led to the introduction to Priority Fees. It is an optimal fee that you can pay to boost the prioritization of your transaction, allowing it to process earlier, resulting in faster execution times.

### Slippage

When trading in Decentralized Finance, you will often hear the term *slippage*. A quick and easy way to understand slippage is, you receive a quotation of a certain trade, but during execution, the price would have very likely moved, and this causes slippage.

Hence, in most DeFi apps, you will be able configure your slippage thresholds in percentages, where during execution, if price moves against you in some percentage, the trade will fail.

:::note This seems daunting
We agree with you, it can be daunting to think about these settings.

At Jupiter, we do our best to continuously improve your experience, we have designed a few iterations starting from just a simple configuration which slowly evolved into a dynamic mechanism where you **configure less, and swap with more confidence**.

Check out how to use the Auto / Manual Settings below!
:::

## Auto / Manual Swap Settings

1. Select the Gear icon on the Swap Form to choose your Swap Settings Mode.
2. Choose between **Auto** or **Manual** depending on how you like it.
3. Swap away! If you need any assistance, please reach out to us in [Discord](https://discord.gg/jup).

| Feature       | Description                                                                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **Auto Mode** | Recommended for beginners or those wanting a simplified experience. Automatically selects optimal settings for a quick and easy swap process.    |
| **Manual Mode** | Suited for experienced users seeking detailed control over their swap. Allows adjustments of parameters for a customized experience.           |

### If you choose Auto

1. Slippage is determined for you using [Dynamic Slippage](https://www.jupresear.ch/t/dynamic-slippage/21946), which estimates based on a few factors, especially the types of tokens you are trading.
2. Transaction Fee is determined for you using our Dynamic max cap based on your trade size.
3. Decide if you want to enable MEV Protect. When enabled, your transactions will be sent directly to Jito block engines, minimising the risk of sandwiches for you.

:::tip If you are using MEV Protect or Jito only modes
Do note that your transactions may at times fail or be slow to process as not all validators are using Jito block engine.
:::

### If you choose Manual

You can decide 3 levels of settings:

1. Slippage
    1. Choose between **Dynamic** or **Fixed**.

    | Slippage Mode | Description |
    |------|-------------|
    | Dynamic Slippage | [Dynamic Slippage](https://www.jupresear.ch/t/dynamic-slippage/21946) estimates based on a few factors, especially the types of tokens you are trading. |
    | Fixed Slippage | Whereas for **Fixed**, we adhere to your specified slippage threshold percentage for your swaps. |

2. Transaction Broadcasting
    1. **Broadcast Mode**: Choose from between these.
    
    | Broadcast Mode | Description |
    |----------------|-------------|
    | Priority Fee | Sends your transaction to a typical RPC and pays with Priority Fee to increase prioritization. |
    | Jito Only | Sends your transaction to a Jito RPC and pays with a Jito tip to ensure it is included in the block, which also enables your transaction to be MEV protected. |
    | Both | Sends your transaction vai both methods. |

    :::tip If you are using the Both method
    - When your transaction lands via typical RPCs, your priority fee will be paid.
    - When your transaction lands via Jito client validators, both your priority fee and Jito tip will be paid.
    
    Also, MEV Protect in Auto mode is also Jito-Only in Manual mode. 
    :::
        
        
    2. **Priority Level**: Specify the Priority Level, in increasing priority: Fast, Turbo, Ultra for the transactions you are executing. The higher the priority, the higher the fees.
    3. **Fee Mode**: Pick your preferred Fee Mode. Either specify a Max Cap for your fee or an Exact Fee for your transactions, we also do provide the Dynamic max cap that estimates based on your trade size.
3. Advanced Settings 
    1. **Direct Route Only:** Enabling this will ensures that the transaction will only be submitted to a single pool. This will limit a lot of intermediate tokens and filter out a lot of other viable routes that use intermediary tokens.
    - **Use wSOL:** Using [Wrapped SOL (wSOL)](../../../12-general/5-wrapped-sol.md) makes using Jupiter faster and more convenient for traders who trade frequently with SOL, since it avoids having to wrap/unwrap SOL.
    - **AMM Exclusion**: Enabling this will exclude specific AMMs from the routing. This will limit these AMMs in the transaction that you’re making. It can lead to a worse quote. Do note that this setting is not sticky, meaning it will revert to original state if refreshed.
        

## Global Settings

1. **Language:** Pick your preferred language to navigate [jup.ag](http://jup.ag).
2. **Preferred Explorer:** Pick your preferred explorer from Solscan, SolanaFM, Solana Beach, Solana Explorer, XRAY, and OKLink.
3. **Versioned Transaction:** Enabling [Versioned Transaction](https://station.jup.ag/docs/additional-topics/composing-with-versioned-transaction) improves composability so Jupiter will be able to fit in more routes and get even better pricing all in a single transaction. 
4. **RPC Endpoint:** Pick your preferred public RPC endpoint or use your own custom RPC endpoint. Each RPC Endpoint displays its active end-point latency. 
    1. Due to network traffic loads, RPC endpoints can get overloaded, which can lead to latency issues that will directly impact your trade executions. Selecting the lowest latency option is a best practice to ensure the fastest trade execution.

*Last Updated: 5 November 2024*
