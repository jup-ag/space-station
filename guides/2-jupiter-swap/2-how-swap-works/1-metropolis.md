---
sidebar_label: Metropolis
description: Jupiter V3 Metropolis upgrade details
title: Metropolis
---
The Jupiter swap backend systems have been completely re-engineered for the Metropolis update. This upgrade has significantly improved token discovery, slippage management, token search functionality, and safety measures.

![Metropolis-1.jpect](../../img/jup-swap/Metropolis-1.jpeg)

### Instant Routing for New Tokens
New tokens from Raydium, Meteora, and Orca are immediately added to Jupiter Routing. This means that newly launched tokens can be utilized across the entire Jupiter suite instantly! This includes features like DCA, Limit Orders, and Value Averaging, or simply swapping at the best prices available.

<video controls style={{ maxWidth: '65%', height: 'auto' }}>
  <source src={require('../../static/media/instant-routing-video.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>


### Dynamic Slippage
Dynamic Slippage offers a seamless swapping experience. You can set a maximum slippage cap and never worry about slippage issues again. By leveraging a combination of backend liquidity computation and frontend inference, the best possible slippage rate is calculated, which is likely to pass while minimizing MEV.

<video controls style={{ maxWidth: '65%', height: 'auto' }}>
  <source src={require('../../static/media/dynamic-slippage-video.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>


### Intelligent Token Search
With the rapid growth of tokens on Solana, finding the correct token can be challenging. The token list search feature has been vastly improved, taking into account near real-time information such as liquidity, volume, community verification, and potential dubious tokens. Imposter tokens and duplicates are automatically filtered out, making the search much faster and more accurate.

<video controls style={{ maxWidth: '65%', height: 'auto' }}>
  <source src={require('../../static/media/token-search-video.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>


### Master Token List Standard
This upgrade enhances the token verification process. Instead of relying on a single strict list as in V2, Metropolis incorporates a range of lists across the entire ecosystem. Currently, different token lists are aggregated into an Ecosystem Master List, with new labels such as "LST," "Pump," "Clone," and a unified standard for partners to contribute.

<video controls style={{ maxWidth: '65%', height: 'auto' }}>
  <source src={require('../../static/media/master-token-list-video.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>


### Streamlined Warnings UX
Non-blocking labels are now more relevant and provide warnings about issues like freeze authority and strict list verification in an easily digestible format directly on the swap interface.

<video controls style={{ maxWidth: '65%', height: 'auto' }}>
  <source src={require('../../static/media/safety-warnings-video.mp4').default} type="video/mp4" />
  Your browser does not support the video tag.
</video>


Jupiter Swap V3 brings us much closer to fulfilling the Jup Promise: Best Price, Best Token Selection, Best UX!

[See original tweet announcing Metropolis here ->](https://x.com/JupiterExchange/status/1805278727032774761)