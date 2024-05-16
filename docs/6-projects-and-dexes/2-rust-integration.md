---
sidebar_label: "DEX Guidelines"
description: Learn how to integrate your DEX with Jupiter. Achieve superior trading performance and user satisfaction.
title: DEX Integration Guidelines
---

<head>
    <title>Jupiter DEX Integration Guidelines: Enhance Your Crypto Exchange</title>
    <meta name="twitter:card" content="summary" />
</head>

To facilitate integration of your DEX into the Jupiter Core Engine, you will need to provide a DEX SDK that works with the [Jupiter AMM Interface](https://docs.rs/crate/jupiter-amm-interface).

```rust
pub trait Amm {
    // Maybe trait was made too restrictive?
    fn from_keyed_account(keyed_account: &KeyedAccount) -> Result<Self>
    where
        Self: Sized;
    /// A human readable label of the underlying DEX
    fn label(&self) -> String;
    fn program_id(&self) -> Pubkey;
    /// The pool state or market state address
    fn key(&self) -> Pubkey;
    /// The mints that can be traded
    fn get_reserve_mints(&self) -> Vec<Pubkey>;
    /// The accounts necessary to produce a quote
    fn get_accounts_to_update(&self) -> Vec<Pubkey>;
    /// Picks necessary accounts to update it's internal state
    /// Heavy deserialization and precomputation caching should be done in this function
    fn update(&mut self, account_map: &AccountMap) -> Result<()>;

    fn quote(&self, quote_params: &QuoteParams) -> Result<Quote>;

    /// Indicates which Swap has to be performed along with all the necessary account metas
    fn get_swap_and_account_metas(&self, swap_params: &SwapParams) -> Result<SwapAndAccountMetas>;

    /// Indicates if get_accounts_to_update might return a non constant vec
    fn has_dynamic_accounts(&self) -> bool {
        false
    }

    fn get_user_setup(&self) -> Option<AmmUserSetup> {
        None
    }

    fn clone_amm(&self) -> Box<dyn Amm + Send + Sync>;

    /// It can only trade in one direction from its first mint to second mint, assuming it is a two mint AMM
    fn unidirectional(&self) -> bool {
        false
    }

    /// For testing purposes, provide a mapping of dependency programs to function
    fn program_dependencies(&self) -> Vec<(Pubkey, String)> {
        vec![]
    }

    fn get_accounts_len(&self) -> usize {
        32 // Default to a near whole legacy transaction to penalize no implementation
    }
}
```

`get_accounts_to_update` provides the necessary accounts to fetch, they are batched and cached by the Jupiter Core Engine and delivered through `update` to the AMM instance, there might be multiple calls to `quote` using the same cache so **we do not allow any network calls** in the entire implementation.

You can refer to the implementation guide below for easier integration with Jupiter.

https://github.com/jup-ag/rust-amm-implementation

**Notes:**
- We need to be able to fork your SDK. This is to ensure our users that we can guarantee maintenance, support for the SDK, and fix potential bugs related to integrated DEXs.