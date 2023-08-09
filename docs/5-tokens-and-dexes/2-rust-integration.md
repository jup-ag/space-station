---
description: How to get your DEX / AMM into Jupiter via Rust
---
# Rust Integration

To facilitate integration of your DEX with Jupiter, you need to provide a DEX SDK that allow us to implement the following interface:

```rust
pub trait Amm {
  // Label of your Amm
  fn label(&self) -> String;
  // Identifier for your amm, should be your pool id
  fn key(&self) -> Pubkey;
  // The token mints that the pool support for swapping
  fn get_reserve_mints(&self) -> Vec<Pubkey>;
  // Related accounts to get the quote for swapping and creating ix
  fn get_accounts_to_update(&self) -> Vec<Pubkey>;
  // Picks data necessary to update it's internal state
  fn update(&mut self, accounts_map: &HashMap<Pubkey, Vec<u8>>) -> Result<()>;
  // Compute the quote from internal state
  fn quote(&self, quote_params: &QuoteParams) -> Result<Quote>;
}
```

`get_accounts_to_update` provides the necessary accounts to fetch, they are batched and cached by the Jupiter core SDK and delivered through `update` to the AMM instance, there might be multiple calls to `getQuote` using the same cache so **we do not allow any network calls** in the entire implementation.

You can refer to the implementation guide below for easier integration with Jupiter.

https://github.com/jup-ag/rust-amm-implementation

**Notes:**
- We need to be able to fork your SDK as we want to guarantee our users we can maintain support and fix potential bugs related to integrated DEXs