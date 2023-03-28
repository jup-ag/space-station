# Getting Started
Using Jupiter is exceedingly easy to integrate - get routes for a token pair, and execute the swap transaction(s) for the selected route.

There are many different ways for developers to integrate Jupiter in their applications.

- [Backend/ Bot Integration](/)
- [Web/ App Integration](/)
- [CPI/ Smart Contract Integration](/)
- [Payments Integration](/)

## Important Things to Know

Before you start integrating Jupiter, make sure that you are aware of these:

- The quote received on a route is given the current liquidity in the pools. Pool liquidity can go up or down at any time and in some cases, pools may close. An example would be oracle-based Lifinity which may stop accepting swaps after a price movement.
- The slippageBps is your swap protection if the price diverges from the quoted price. Read more here.
- Jupiter cannot guess the true spot price or what is a reasonable price impact for any given token. We recommend that this be checked before swapping. This can be done by:
  - Having the user visually check 
  - Checking the price impact
  - Check on a price feed like Coingecko, Pyth, or some CEX pricing if available


## Developer Support

Developing on Solana can be a landmine of potential hiccups. On our end, we aim to make developing a good swap interface or program as seamless and magical as possible. We do this by:

- Remove key barriers to providing a good UX, including having clear instructions for issues like ATAs and Open Orders accounts.
- Provide various methods of accessing the swap, so all apps, dapps, and programs can use it seamlessly.
- Provide updated liquidity sources, token lists, and possible UX improvements as soon as possible.

If you have questions or need support, you can ask in the #developer-support channel in our discord:  https://discord.gg/jup.


:::tip Subscribe to Jupiter's SDK Telegram Channel
If you are using Jupiter's SDK, subscribe to this telegram group to get alerted on important SDK updates, which may include critical upgrades and alerts.

https://t.me/jupiter_sdk
:::