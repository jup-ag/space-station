---
sidebar_label: Flash Fill
description: Learn to integrate Jupiter Swap using Flash-Fill for optimal crypto transactions. Discover unmatched efficiency!
title: Jupiter Swap via Flash-Fill
---

<head>
    <title>Jupiter Swap Flash Fill Documentation: Full Explanation</title>
    <meta name="twitter:card" content="summary" />
</head>



Use Flash Fill to integrate your program with Jupiter Swap. This allows you to avoid the limitations of Cross Program Invocation (CPI) via the "Flash-Fill" approach. Flash-Fill is one of two approaches to integrate Jupiter swap with your protocol. The other approach is Cross Program Invocation [CPI](/docs/APIs/cpi).

The Jupiter team engineered "flash-fill" to allow developers and integrators to utilize the full potential of Jupiter swap with their programs.

:::info Why Flash-Fill?
To achieve the best prices and highest returns on swaps, Jupiter divides and routes an order across multiple DEXes in a single transaction, minimizing price impact by prioritizing the lowest-cost routes. Solana transactions are limited to 1232 bytes of storage. By using lookup tables, Jupiter can include more accounts (32 bytes per account) in one transaction. However, the CPI method cannot use lookup tables to reduce the size of each account, so CPI calls to swap via Jupiter typically fail.

Flash-filling allows the use of [Versioned Transaction](https://docs.solana.com/developing/versioned-transactions) in combination with [Address Lookup Tables](https://docs.solana.com/developing/lookup-tables), thus, reducing the "size" of each account - something we can't do via the CPI approach.

_Note: when using Jupiter's API, you can set [maxAccounts](/docs/APIs/swap-api#using-maxaccounts) to reduce the number of accounts._
:::

## Example

Here we show an [example transaction](https://solscan.io/tx/4psWiUFGdRhKqi1UXSWrpoM3RCJWAXpz6CTpsd5fZwjr8nEpLiZVuiyaERj95hUNnm6dhfxircLgAqCbHV3wCVpT) on how to utilize Jupiter Swap via Flash Fill. We use Flash Fill to swap from any tokens to SOL even if the user doesn't have enough SOL. You can even allow a third-party payer if the user doesn't have any SOL at all.

:::danger
A **note of caution:** Unlike a typical flash loan, the repayment is in a different mint from the loan. As such, there is no easy way to ensure that the repayment amount is appropriate. Take extra measures to minimize the surface area for exploits. For example, making the instruction permissioned to trusted admins or utilizing a price oracle etc+.

The exact implementation is protocol specific making the scope beyond this guide.
:::

### How does this work?
For a Flash Fill to work, the transaction will be composed of these instructions:

1. Borrow enough SOL for opening the wSOL account from this program.
2. Create the wSOL account for the borrower.
3. Swap X token to wSOL.
4. Close the wSOL account and send it to the borrower.
5. Repay the SOL for opening the wSOL account back to this program.

### Code Repo

Here is the GitHub repo: [https://github.com/jup-ag/sol-swap-flash-fill](https://github.com/jup-ag/sol-swap-flash-fill). You should check out the [program code](https://github.com/jup-ag/sol-swap-flash-fill/blob/main/programs/flash-fill/src/lib.rs) and the [client code](https://github.com/jup-ag/sol-swap-flash-fill/blob/main/cli/flash-fill.ts).

Here is the [transaction on chain](https://solscan.io/tx/4psWiUFGdRhKqi1UXSWrpoM3RCJWAXpz6CTpsd5fZwjr8nEpLiZVuiyaERj95hUNnm6dhfxircLgAqCbHV3wCVpT) on how this works.