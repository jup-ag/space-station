---
sidebar_label: "Referral Program"
description: Referral Program
---

# Referral Program

The Referral Program is an open source program by Jupiter to provide referral fees for integrators who are integrating Jupiter Swap and Jupiter Limit Order. You can check out the code [here](https://github.com/TeamRaccoons/referral).


## Referral Dashboard

You can manage your Referral Account on `https://referral.jup.ag/` (currently only working for Jupiter related accounts).

## Referral Javascript SDK

You can check out the Referral Javascript SDK [here](https://www.npmjs.com/package/@jup-ag/referral-sdk). For a list of methods that you can use, check out the source code [here](https://github.com/TeamRaccoons/referral/blob/main/packages/sdk/src/referral.ts).

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
