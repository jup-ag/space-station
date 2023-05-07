---
description: Cross Program Invocation Integration with Jupiter
---
# CPI/Smart Contract Integration

Cross Program Invocation Integration with Jupiter.

:::info Calculating the swap routes is done off-chain
However, if you do know the swap route for your trade you may call the Jupiter Program in a single instruction.
:::

If you're interested in CPI with Jupiter, contact the team in our [discord](https://discord.gg/jup) or you can dm @nevaben / @benliewxyz on telegram and we can discuss how best to support your use case.

## About the Onchain Program

:::note This documentation is a bit outdated. We are working on an updated version.
:::

### Overview

The main purpose of the Jupiter On-chain Program is to introduce the ability to chain swaps of any protocol by using the exact output amount of the first swap as the input of the second swap for 2 or more swap legs.

**Additional features and design optimisations:**

- Streamlined swap instructions by providing an Anchor IDL and similar sets arguments for each protocol swap instruction **(in_amount, minimum_out_amount, platform_fee_bps)**.
- Reduce instruction size overhead in order to leave as much space as possible for the swaps.
- Allow integrators to set a platform fee by setting a non zero platform fee bps and providing a fee account, a token account of the output mint. This feature is built-in when using the react-hook and Core SDK, refer to Fee Structure.
- Introduce an Open Orders Serum Program derived address per user and per market, to reduce the amount of space required to create the open orders account when required.

**Example program function for a Mercurial swap:**

```typescript
pub fn mercurial_exchange<'info>(
    ctx: Context<'_, '_, '_, 'info, MercurialExchange<'info>>,
    in_amount: Option<u64>,
    minimum_out_amount: u64,
    platform_fee_bps: u8,
) -> ProgramResult {
    // ...
```

:::info
**Jupiter's IDL:**  https://github.com/jup-ag/instruction-parser/blob/main/src/idl/jupiter.ts

**Anchor CPI Client:** https://crates.io/crates/jupiter-cpi
:::

### Usage

#### JavaScript/TypeScript

We strongly recommend using the @jup-ag/core (or @jup-ag/react-hook for React apps) directly as it provides all the methods to compute best swap route and build transactions.

If you wish to still build the transaction manually from the SDK it is still possible through each AMM abstraction using `createSwapInstruction`.

```js
export interface Amm {
 ...

  createSwapInstruction(swapParams: SwapParams): TransactionInstruction;
}
```
The lower level functions to create each instruction are also available on the Jupiter class.

#### Rust

You can check out the [Anchor CPI library](https://crates.io/crates/jupiter-cpi). Due to the Solana sea-level model, transaction size limit and compute complexity, it isn't possible to build the best route for a swap on-chain.

Example of instruction:

```js
use jupiter;
use anchor_spl::token;
use spl_token_swap;

// ...
// Get and deserialize the swap state of your choise

let ix = Instruction {
    program_id: jupiter::ID
    accounts: jupiter::accounts::TokenSwap {
        token_swap_program, // Orca or Penguin token swap program ID
        token_program: token::ID,
        swap,
        authority,
        user_transfer_authority,
        source,
        swap_source,
        swap_destination,
        destination,
        pool_mint,
        pool_fee,
    },
    data: jupiter::instruction::TokenSwap {
        in_amount,
        minimum_out_amount,
        platform_fee_bps: 0,
    }
    .data(),
};
```

**Why can't we just do it all from the client by calling each protocol swap instruction in series?**

If the complete swap route is composed of 2 swap legs or more, it is not possible to reliably provide the input amount of tokens to the a following legs. As other users can swap in between building the transaction and getting it on the blockchain, 3 scenarios for the first swap leg:

- the output amount == quoted amount on the UI => it works.
- the output amount > quoted amount => user is left with some intermediate undesired tokens, rather that maximizing the final output.
- the output amount < quoted amount => transaction fails as the second leg tries to use more tokens that might be available in the second leg input token account, or consumes tokens that user did not intend to swap.

:::info It is still possible to have some residual amount of intermediate token (dust) in a multi-swap transaction for the following reasons:
1. Some AMMs leave some tiny dust on input due to rounding. e.g. when swapping from a 9 decimal token to a 6 decimal token.
2. The lot size of serum markets can leave also leave little to a lot of intermediate token.
:::