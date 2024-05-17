---
sidebar_label: Wrapped SOL
description: Learn what wrapped SOL is and how to use it in this beginners guide.
title: What is Wrapped SOL (wSOL)?
---

<head>
    <title>Wrapped SOL (wSOL) Explained | Jupiter Station</title>
    <meta name="twitter:card" content="summary" />
</head>

Wrapped SOL is native SOL that is wrapped using the Solana Token Program, which allows it to be treated like any other Token program token type.

:::tip
You can now use wSOL (wrapped SOL) to trade directly with any SPL token on Jupiter!
This makes Jupiter even faster and more convenient for traders who trade frequently with SOL, since it avoids having to wrap/unwrap SOL, which might result in multiple transactions when the routes are complicated.
:::

## Why the need to wrap SOL

Currently, Jupiter has to wrap and unwrap SOL when trading in SOL due to the fact that native SOL itself is not an SPL token.

*To read more about wrapping SOL, please click [here](https://spl.solana.com/token#wrapping-sol).*

*To read more about transferring tokens, please click [here](https://spl.solana.com/token#transferring-tokens).*

Because of Solana's transaction size limits, sometimes we need to break up the transaction into multiple ones when wrapping is involved. This can be a source of friction for power traders who transact a lot.

We expect this problem to be resolved with the upcoming transaction size increase in the next Solana upgrade. In the meantime, we have a new feature that allows users to trade directly in wSOL.

![wSOL](../img/wsol.png)

> 1. The Wrap and unwrap tool bar
2. The swap setting to turn on/off of using wSOL
3. Once wSOL is toggled on, user will see wSOL as the default for SOL in the token selector

### Enabling Jupiter wSOL feature

- To enable this feature, go to "Swap Settings" and turn on "Use wSOL".

![wSOL2](../img/wsol3.png)

- Once enabled, "wSOL" will show up on your Jupiter swap where you can turn on or turn off for your swaps.

### Regular mode (wSOL disabled and/or off)

The regular mode that most users will experience is where the wSOL feature is disabled and/or off. There is no difference to the day-to-day trades that you are currently doing - for any transactions involving SOL, Jupiter will automatically do the wrapping and unwrapping of wSOL behind the scenes to facilitate your token swaps.

:::info
Jupiter will still be able to detect if you have wSOL and provide an option to unwrap it back to SOL.
:::

### wSOL mode (wSOL enabled and switched on)

The wSOL mode is for advanced users who are familiar dealing with the wSOL token and wish to experience better performance and control for their swaps.

- With wSOL switched on, all trades will transact in wSOL instead of SOL by default. This means that so long you have sufficient wSOL, you can immediately execute your swaps. The wSOL received will also not be automatically unwrapped to native SOL.
- You will be able to manually wrap SOL and unwrap wSOL.

![wSOL2](../img/wsol2.png)

## Wrap SOL - wSOL feature

- Easily wrap SOL into wSOL by either clicking on "Manage" or "Wrap SOL now" link in wSOL enabled mode.

## Unwrap wSOL feature

- Our unwrap wSOL feature currently only processes unwrapping of all existing wSOL in your wallet to SOL, we do not support partial unwrapping.

*To read more about closing SOL accounts, click [here](https://spl.solana.com/token#closing-accounts).*