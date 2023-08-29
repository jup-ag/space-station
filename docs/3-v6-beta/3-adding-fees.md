---
sidebar_label: Adding Fees
description: Adding your own platform fee to Jupiter swap
---
# Adding Your Own Platform Fee To Jupiter swap
![cat_flying](./cat_flying_money.png)

There are no protocol fees on Jupiter, but integrators can introduce a platform fee on swaps. The platform fee is provided in basis points, e.g. **20 bps** for **0.2%** of the token output.

If a platform fee is set, Jupiter will take 10% of the platform fee charged by the integrators.

## Usage

**Jupiter API**

With the Jupiter API, you can just add in the `platformFeeBps` parameter to the Quote API:

[# 5. Get the route for a swap](/docs/3-v6-beta/1-swap-api.md)

**Jupiter Referral Dashboard**

You can manage your Jupiter referral account on `https://referral.jup.ag/`. When passing in the fee token account into Jupiter, please make sure that the fee token account exists.
