---
sidebar_label: "CPI / Smart Contract Integration"
description: Learn how to optimize your Solana projects with Jupiter Swap CPI for efficient token swaps and advanced API integration.
title: Jupiter Swap via CPI
---

<head>
    <title>Jupiter Swap CPI: Streamline Your Solana Integrations</title>
    <meta name="twitter:card" content="summary" />
</head>



To integrate your program with Jupiter Swap you can take two approaches. One is [Flash Filling](/docs/APIs/flash-fill) or you can utilize Cross Program Invocation (CPI). 

:::danger CPI Limitations
As of August 2023, taking the CPI approach has some tradeoffs. Due to Solana's transaction limit of 1232 bytes, swaps via CPI will likely fail at runtime since Jupiter routes may involve multiple DEXes in order to reduce price impact. You could set a limit to the number of accounts used for swaps via Jupiter's swap API to fit it within your needs. However, limiting the accounts will likely incur greater price impact.

_Note: when using Jupiter's API, you can set [maxAccounts](/docs/APIs/swap-api#using-maxaccounts) to reduce the number of accounts._
:::

:::info Use Flash-Fill
Instead, we recommend taking the [flash-fill](/docs/APIs/flash-fill) approach. The flash-fill approach takes advantage of [Versioned Transaction](https://docs.solana.com/developing/versioned-transactions) in combination with [Address Lookup Tables](https://docs.solana.com/developing/lookup-tables) to allow for more accounts per transaction while keeping within the 1232 bytes limit.
:::

## Example

Here we show an [example transaction](https://solscan.io/tx/GX1rh9y15mn2jqkQ5mosPqkg8YYFWQZqvihR95aRpPQeEMZhhPqWzMUbN1iCqYkubqyB2fLW3UGR4j5w28srrtm) on how to utilize Jupiter Swap via CPI to swap from any tokens to SOL. This works even if the user doesn't have enough SOL. You can even allow a third-party payer if the user doesn't have any SOL at all.

### How does this work?
For a CPI to work, the transaction will be composed of these instructions:

1. Borrow enough SOL from the program to open a wSOL account that the program owns.
2. Swap X token from the user to wSOL on Jupiter via CPI.
3. Close the wSOL account and send it to the program.
4. The program then transfers the SOL back to the user.

### Code Repo

Here is the GitHub repo: [https://github.com/jup-ag/sol-swap-cpi](https://github.com/jup-ag/sol-swap-cpi). You should check out the [program code](https://github.com/jup-ag/sol-swap-cpi/blob/main/programs/swap-to-sol/src/lib.rs) and the [client code](https://github.com/jup-ag/sol-swap-cpi/blob/main/cli/swap-to-sol.ts).

Here is the [transaction on chain](https://solscan.io/tx/GX1rh9y15mn2jqkQ5mosPqkg8YYFWQZqvihR95aRpPQeEMZhhPqWzMUbN1iCqYkubqyB2fLW3UGR4j5w28srrtm) on how this works.

## Rust Crate
To ease integration via CPI, you may add the following crate [jupiter-cpi](https://github.com/jup-ag/jupiter-cpi) to your program.

`Cargo.toml`
```toml
[dependencies]
jupiter-cpi = { git = "https://github.com/jup-ag/jupiter-cpi", rev = "5eb8977" }
... other dependencies
```

```rust
use jupiter_cpi;

...

let signer_seeds: &[&[&[u8]]] = &[...];

// pass accounts to context one-by-one and construct accounts here.
// Or in practise, it may be easier to use `remaining_accounts` https://book.anchor-lang.com/anchor_in_depth/the_program_module.html
let accounts = jupiter_cpi::cpi::accounts::SharedAccountsRoute {
    token_program: ,
    program_authority: ,
    user_transfer_authority: ,
    source_token_account: ,
    program_source_token_account: ,
    program_destination_token_account: ,
    destination_token_account: ,
    source_mint: ,
    destination_mint: ,
    platform_fee_account: ,
    token_2022_program: ,
};

let cpi_ctx = CpiContext::new_with_signer(
    ctx.accounts.jup.to_account_info(),
    accounts,
    signer_seeds,
);

jupiter_cpi::cpi::shared_accounts_route(
    cpi_ctx,
    id,
    route_plan,
    in_amount,
    quoted_out_amount,
    slippage_bps,
    platform_fee_bps,
)?;

...
```
