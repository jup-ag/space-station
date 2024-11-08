---
sidebar_label: How to Swap
description: Learn more about the basics of swapping on Jupiter.
title: How to Swap on Jupiter
slug: /swap/tutorials/how-to-swap
---

<head>
    <title>How to Swap on Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

*Last Updated: 4 November 2024*


<video controls style={{ maxWidth: '100%', height: 'auto' }}>
  <source src={require('../../../static/media/how-to-swap-jupiter.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Video Credits: [Netrovert](https://x.com/netrovertHQ)*


1. Navigate to the Jupiter Website. Double check that the URL is https://jup.ag/
2. Click `Connect Wallet` at the top right corner of the site.
3. Select the tokens that you want to sell and buy.
4. Enter the input amount of the token that you want to sell or use the `Half` `Max` buttons of your balance amount.
5. Review the swap route and output token amounts. 
6. Choose between Auto or Manual mode for Settings. We recommend Auto for starters.
7. After you have confirmed all the parameters and inputs, click on the `Swap` button, and you will be prompted with a confirmation from your wallet. If you `Confirm`, your swap will be sent to the blockchain, to be finalized. 
8. A notification toast will appear in the lower left corner that will inform you of the status of your transaction.
9. You can view your swap history in the Activity tab if you click on your connected Wallet.


## Swap Details

![SwapDetails](../../1-swap/img/swapdetails.png)

1. **Exchange Rate for the Selected Tokens:** This is the current exchange rate, based on the on-chain prices for the selected tokens
2. **Minimum Received:** This takes into account the slippage setting and market liquidity to compute the minimum amount that you will receive even with maximum price fluctuations for a successful swap. 
3. **Max Transaction Fee:** This is the maximum fee you will pay to execute the quoted transaction. This takes into account your selected fee settings.
4. **Deposit:** If you are transacting assets you have not owned before, Solana may require a small deposit amount to create the ATA account in your wallet to hold that asset. This will only occur with assets you have not owned previously. 
5. **Price Impact:** Price Impact is influenced by the available liquidity to settle the trade. The larger the trade the larger the price impact on the selected assets. 
6. **Price Difference:** We show the quoted rate (from Jupiter) against the market rate. The price difference can be due to various external factors such as price impact, token tax, etc.