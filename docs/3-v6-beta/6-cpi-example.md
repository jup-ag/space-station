---
sidebar_label: CPI Example
description: Coming Soon
draft: true

---

# Jupiter Swap via CPI

Integrate your program with Jupiter Swap.

CPI is one of two approaches to swap via Jupiter.

As of August 2023, taking the CPI approach has some tradeoffs. Due Solana's transaction limit of 1232 bytes, swaps via CPI will likely fail at runtime since Jupiter routes may involve multiple dexes in order to reduce price impact. You could set a limit to the number of accounts used for swaps via Jupiter's swap API to fit it within your needs. Warning! Limiting the accounts introduces greater price impact.

Instead, we recommend taking the [flash-fill](/docs/v6-beta/flash-fill) approach. The flash-fill approach takes advantage of Versioned Transaction and Address Lookup Tables to allows for more accounts per transaction while keeping within the 1232 bytes limit.

## Quick Example
To ease integration via CPI, you may add the following crate [jupiter-cpi](https://github.com/jup-ag/jupiter-cpi) to your program.

`Cargo.toml`
```toml
[dependencies]
jupiter-cpi = { git = "https://github.com/jup-ag/jupiter-cpi", rev = "5eb8977" }
... other dependencies
```

```rust
let signer_seeds: &[&[&[u8]]] = &[...];

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
    slippage_bos,
    platform_fee_bps,
)?;
```
