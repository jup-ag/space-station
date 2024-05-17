---
title: DCA CPI Integration
sidebar_label: "DCA CPI Integration"
description: "Master Jupiter's DCA CPI integration with our detailed guide, example code, and strategic use cases."
---

<head>
    <title>Jupiter DCA CPI: Enhanced Integration Techniques for Developers</title>
    <meta name="twitter:card" content="summary" />
</head>

This section contains examples of composing Jupiter's DCA program in your program via Cross Program Invocation (CPI).

Our aim is to simplify the process for our partners to integrate Jupiter's DCA for customized incentive programs.

## Use Cases
The use cases for DCA are limitless. Feel free to use the following example as an inspiration to introduce your own functionalities.

Our example code allows you to have your own customized frontend + program that incentivizes users to DCA into your token in order to receive additional airdrops from you.

## Open Sourced Code
-  anchor program + scripts - https://github.com/jup-ag/dca-cpi-example
-  frontend - https://github.com/TeamRaccoons/locked-dca ([see example](https://locked-dca.vercel.app/))

The open-sourced example allows you to airdrop additional tokens to users who DCA into your token.

## Setting up (Program)
1. Fork and clone https://github.com/jup-ag/dca-cpi-example
1. Adjust the parameters
    - [AIRDROP_BPS](https://github.com/jup-ag/dca-cpi-example/blob/40a6b14eba7093a92b1cd7febbc07d50780c7c75/programs/dca-integration/src/constants.rs#L2)
1. Generate a new program ID and [modify the program code](https://github.com/jup-ag/dca-cpi-example/blob/40a6b14eba7093a92b1cd7febbc07d50780c7c75/Anchor.toml#L5)
1. Deploy the program to Solana

## Setting up (Airdrop Script)
1. Replace with your deployed program ID [here](https://github.com/jup-ag/dca-cpi-example/blob/40a6b14eba7093a92b1cd7febbc07d50780c7c75/app/src/airdrop.ts#L16)
1. Set env var `ADMIN_PRIVATE_KEY` - this is the account you will use to execute airdrops (it should contain sufficient tokens to airdrop + SOL to perform transactions)
1. Run the airdrop script `cd app && npm i && npm run airdrop` [code](https://github.com/jup-ag/dca-cpi-example/blob/master/app/src/airdrop.ts)

## Setting up (Frontend)
1. Fork and clone https://github.com/TeamRaccoons/locked-dca
1. Replace the program ID [here](https://github.com/TeamRaccoons/locked-dca/blob/main/src/contexts/SwapContext.tsx#L179)
1. Craft new plans for the campaigns - Plans are hardcoded on the Frontend, and enforce on the contract level.

```js
export const SECONDS_IN_MINUTE = 60; // 1 minute
export const SECONDS_IN_DAY = 86400; // 1 day
export const LOCKING_PLAN: ILockingPlan[] = [
  {
    name: `5 minutes`,
    incetivesPct: 0,
    cycleSecondsApart: SECONDS_IN_MINUTE, // executed per minute
    numberOfTrade: 5,
  },
  {
    name: `60 days`,
    incetivesPct: 20,
    cycleSecondsApart: SECONDS_IN_DAY,
    numberOfTrade: 60, // executed daily
  },
  {
    name: `90 days`,
    incetivesPct: 30,
    cycleSecondsApart: SECONDS_IN_DAY,
    numberOfTrade: 90, // executed daily
  },
];
```


![LDCA](./ldca.png)

## Here's how it works

A user creates a DCA via your frontend and program. This creates an escrow account that integrates with Jupiter's DCA program.

Once the DCA is completed (all orders are executed), the user will then be able to claim the tokens that they bought. Once they claim their tokens, the airdrop script will airdrop additional tokens from your admin account to them.

### User flow

1. User create a DCA order via your deployed UI.
2. DCA completes within the preset duration.
3. User will be able to navigate to the site and close their escrow and receive the output token from the executed DCA orders.
4. Once the order and escrow has been closed, partners and integrators will automatically airdrop rewards or incentives directly into user's wallet *(With the provided script running in a infinite loop in the background)*

- **Scaffold Skeleton UI for Lock DCA:**
    - **[Visit the Scaffold Skeleton UI](https://locked-dca.vercel.app/)**
    - **[Access the Repository on GitHub](https://github.com/TeamRaccoons/locked-dca)**
- **DCA Program:**
    - **[Explore the DCA Program on GitHub](https://github.com/jup-ag/dca-cpi-example)**
- **Airdrop Script:**
    - **[Check out the Airdrop Script on GitHub](https://github.com/jup-ag/dca-cpi-example/blob/master/app/src/airdrop.ts)**
