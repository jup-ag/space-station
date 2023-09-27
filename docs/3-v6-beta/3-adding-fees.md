---
sidebar_label: Adding Fees
description: Adding your own platform fee to Jupiter swap
---
# Adding Your Own Platform Fee To Jupiter Swap
![cat_flying](./cat_flying_money.png)

There are no protocol fees on Jupiter, but integrators can introduce a platform fee on swaps. The platform fee is provided in basis points, e.g. **20 bps** for **0.2%** of the token output.

If a platform fee is set, Jupiter will take 10% of the platform fee charged by the integrators.

We are using the [Referral Program](https://github.com/TeamRaccoons/referral) to power our platform fee. You can check out how the [Referral Program](/docs/additional-topics/referral-program) works.

## Usage

**Jupiter API**

With the Jupiter API, you can just add in the `platformFeeBps` parameter to the `/quote` endpoint:

[# 5. Get the route for a swap](/docs/3-v6-beta/1-swap-api.md)

On the `/swap` endpoint, remember to add your `feeAccount` parameter.

## Referral Program

For more information on how the Referral Program works, check it out [here](/docs/additional-topics/referral-program).

:::note
The Jupiter Swap's project account for the Referral Program is `45ruCyfdRkWpRNGEqWzjCiXRHkZs8WXCLQ67Pnpye7Hp`.
:::
