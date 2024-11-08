---
sidebar_label: How To Configure Settings On Jupiter
description: Find out how you can configure your settings on Jupiter to help you land your transactions effectively.
title: How to Configure Settings
slug: /swap/tutorials/configure-settings
---


*Last Updated: 5 November 2024*


<video controls style={{ maxWidth: '50%', height: 'auto' }}>
  <source src={require('../../../static/media/configure-settings-1.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Auto / Manual Swap Settings

1. Select the Gear icon to choose your Swap Settings Mode
2. Choose **Auto** or **Manual** tab
    1. If you’re new to DeFi and prefer a fuss-free swap experience, we encourage you to choose Auto mode to reduce the decision fatigue. 
    2. If you prefer fine-tuned control for your swap experience, you can opt for Manual mode. 
3. If you choose **Auto**:
    1. Enter the Max Slippage you will comfortable with, this affects the Minimum Received before the swap fails. This helps you from getting poor swap rates on transactions if the asset price falls below the specified slippage rate.
    2. Decide if you want to enable MEV Protect. When enabled, your transactions will be sent directly to Jito block engines, minimising the risk of sandwiches for you. 
4. If you choose **Manual**, you can decide 3 levels of settings: 
    1. Slippage
        1. Choose between **Dynamic** or **Fixed**. 
            1. **Dynamic** mode optimises slippage among several factors: type of tokens (their volatility and liquidity profiles), the quote (amount, price, route before the trade) and user’s max slippage. Read more on [JUP Research](https://www.jupresear.ch/t/dynamic-slippage/21946).
            2. Whereas for **Fixed**, we adhere to your specificed slippage amount for all swaps. 
    2. Transaction Broadcasting
        1. **Broadcast Mode**: Choose from submitting to (1) RPCs with priority fee, (2) Jito Validators via a bundle, or (3) Both, which fires both and see which lands first. 

          Note that you pay for both Jito tips and priority fees if you select Both. 
          MEV Protect in Auto mode is also Jito-Only in Manual mode.  
            
        2. **Priority Level**: Specify the Priority Level, in increasing priority: Fast, Turbo, Ultra for the transactions you are executing.
        3. **Fee Mode**: Pick your preferred Fee Mode. Either specify a Max Cap for your fee or an Exact Fee for your transactions.
    3. Advanced Settings 
        1. **Direct Route Only:** Enabling this will ensures that the transaction will only be submitted to a single pool. This will limit a lot of intermediate tokens and filter out a lot of other viable routes that use intermediary tokens.
        - **Use wSOL:** Using [Wrapped SOL (wSOL)](../../../12-general/5-wrapped-sol.md) makes using Jupiter faster and more convenient for traders who trade frequently with SOL, since it avoids having to wrap/unwrap SOL.
        - **AMM Exclusion**: Enabling this will exclude specific AMMs from the routing. This will limit these AMMs in the transaction that you’re making. It can lead to a worse quote.
        

## Global Settings

<video controls style={{ maxWidth: '50%', height: 'auto' }}>
  <source src={require('../../../static/media/configure-settings-2.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

1. **Language:** Pick your preferred language to navigate [jup.ag](http://jup.ag) 
2. **Preferred Explorer:** Pick your preferred explorer from Solscan, SolanaFM, Solana Beach, Solana Explorer, XRAY, and OKLink.
3. **Versioned Transaction:** Enabling [Versioned Transaction](https://station.jup.ag/docs/additional-topics/composing-with-versioned-transaction) improves composability so Jupiter will be able to fit in more routes and get even better pricing all in a single transaction. 
4. **RPC Endpoint:** Pick your preferred public RPC endpoint or use your own custom RPC endpoint. Each RPC Endpoint displays its active end-point latency. 
    1. Due to network traffic loads, RPC endpoints can get overloaded, which can lead to latency issues that will directly impact your trade executions. Selecting the lowest latency option is a best practice to ensure the fastest trade execution.