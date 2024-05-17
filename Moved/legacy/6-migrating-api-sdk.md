# Migrating the API or SDK

## Migrating the API

**From v3 to v4**

- You do not have to support Versioned Transactions to migrate to v4.  You can set the `parameterasLegacyTransaction=true` to have the api return a legacy swap transaction.
- V3 used Legacy transactions. V4 has migrated to use Versioned Transactions with Address Lookup Tables.
- With `VersionedTransaction` and Address Lookup Tables, all Jupiter swaps are done in a single transaction, so they no longer need to handle sending multiple transactions sequentially.
- Use `VersionedTransaction.deserialize`  to deserialize the transaction object in order to insert your own instructions in the transaction.
- V4 swagger: https://quote-api.jup.ag/v4/docs/static/index.html

**From v1 to v3**

- Remove token ledger
- Change `slippage` to `slippageBps`
- Route now return `slippageBps`
- V1 swagger : https://quote-api.jup.ag/docs/static/index.html
- V3 swagger: https://quote-api.jup.ag/v3/docs/static/index.html

## Migrating the SDK

**From v2 to v3**

- `slippageBps` instead of `slippage`
    - `slippageBps` = Math.ceil(slippage*100)
- Remove the need of token ledger
- Example: https://github.com/jup-ag/jupiter-core-example/commit/1f6967e46736b52ba9b4d7a85f91d2628e3d0e26

**From v1 to v2**

- `jupiter.computeRoutes`, `inputAmount` changed to `amount` and the typing is changed from number to JSBI. (https://github.com/GoogleChromeLabs/jsbi)
    - The result of `computeRoutes` also return JSBI like `inAmount` and `outAmount`.
- `outAmountWithSlippage` changed to `otherAmountThreshold`
- Example: https://github.com/jup-ag/jupiter-nextjs-example/commit/ff91a085f129d34cf83b14b1fda62ef370d7f1a9