---
sidebar_label: Flash Fill
description: Integrate Jupiter Swap via Flash-Fill

---

# Jupiter Swap via Flash-Fill

Integrate your program with Jupiter Swap without the limitations of CPI via the "Flash-Fill" approach.

Flash-Fill is one of two approaches to integrate Jupiter swap with your protocol. The other approach is [CPI](/docs/APIs/cpi).

Our team engineered "flash-fill" to allow developers and integrators to utilize the full potential of Jupiter swap with their programs.

:::info Why Flash-Fill?
In order to get the best prices and maximum returned amount for any swaps, Jupiter splits and routes an order across multiple DEXes in a single transaction to minimize price impact while prioritizing routes with the lowest prices. Transactions on Solana has a maximum of 1232 bytes. With lookup tables, the Jupiter transaction can pack more accounts (32 bytes per account) into one transaction. As such, because the CPI approach has no the ability to use lookup tables to minimize the size of each account, CPI calls to swap via Jupiter would generally fail.

Flash-filling allows the use of [Versioned Transaction](https://docs.solana.com/developing/versioned-transactions) in combination with [Address Lookup Tables](https://docs.solana.com/developing/lookup-tables), thus, reducing the "size" of each account - something we can't do via the CPI approach.

_note: when using Jupiter's API, you can set [maxAccounts](/docs/APIs/swap-api#using-maxaccounts) to reduce the number of accounts._
:::

## Example

Here we are showing an example on how to utilize Jupiter Swap via Flash Fill to swap from any tokens to SOL even if the user doesn't have enough SOL. You can even allow a third-party payer if the user doesn't have any SOL at all.

:::danger
A note of caution Unlike a typical flash loan, the repayment is in a different mint from the loan. As such, there is no easy way to ensure that the repayment amount is appropriate, do take extra measures to minimize the surface area for exploits. For e.g. making the instruction permissioned to trusted admins or utilizing a price oracle etc+.

The exact implementation is protocol specific and, hence, beyond the scope of this guide.
:::

### How this works?
For a Flash Fill to work, the transaction will be composed of these instructions:

1. Borrow enough SOL for opening the wSOL account from this program.
2. Create the wSOL account for the borrower.
3. Swap X token to wSOL.
4. Close the wSOL account and send it to the borrower.
5. Repay the SOL for opening the wSOL account back to this program.

### Code Repo

Here is the GitHub repo: [https://github.com/jup-ag/sol-swap-flash-fill](https://github.com/jup-ag/sol-swap-flash-fill). You should check out the [program code](https://github.com/jup-ag/sol-swap-flash-fill/blob/main/programs/flash-fill/src/lib.rs) and the [client code](https://github.com/jup-ag/sol-swap-flash-fill/blob/main/cli/flash-fill.ts).

Here is the [transaction on chain](https://solscan.io/tx/4psWiUFGdRhKqi1UXSWrpoM3RCJWAXpz6CTpsd5fZwjr8nEpLiZVuiyaERj95hUNnm6dhfxircLgAqCbHV3wCVpT) on how this works.