---
sidebar_label: "Referral Program"
description: Discover Jupiter Station's Referral Program. Earn fees through seamless integrations with our robust tools and guides. Start now!
title: Jupiter Referral Program
---

<head>
    <title>Jupiter Referral Program | Earn More From Your dApps</title>
    <meta name="twitter:card" content="summary" />
</head>

The Referral Program is an open source program by Jupiter to provide referral fees for integrators who are integrating Jupiter Swap and Jupiter Limit Order. You can check out the code [here](https://github.com/TeamRaccoons/referral) to gain a better understanding of how it works.

## Referral Dashboard

You can manage your Referral Account on `https://referral.jup.ag/` (currently only working for Jupiter related accounts).

## Referral Javascript SDK

You can check out the Referral Javascript SDK [here](https://www.npmjs.com/package/@jup-ag/referral-sdk). For a list of methods that you can use, check out the source code [here](https://github.com/TeamRaccoons/referral/blob/main/packages/sdk/src/referral.ts).

There are also examples on how to use the SDK [here](https://github.com/TeamRaccoons/referral/tree/main/example).

## Deriving the Fee Token Account

The `feeAccount` is a PDA based on the referral account you have created with the dashboard above. Here is an example code on how to derive it:

```js
const [feeAccount] = await PublicKey.findProgramAddressSync(
  [
    Buffer.from("referral_ata"),
    referralAccountPubkey.toBuffer(), // your referral account public key
    mint.toBuffer(), // the token mint
  ],
  new PublicKey("REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3") // the Referral Program
);
```

When passing in the fee token account, please make sure that the fee token account exists.
