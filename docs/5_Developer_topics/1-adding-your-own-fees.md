---
sidebar_position: 1
---

# Adding Your Own Fees

There are no protocol fees on Jupiter, but integrators can introduce a platform fee on swaps. The platform fee is provided in basis points, e.g. **20 bps** for **0.2%** of the token output.

:::info Jupiter takes zero fees.
:::

## Usage

**Jupiter API**

With the Jupiter API, you can just add in the feeBps paramter to the Quote API: 

[# 5. Get the routes for a swap](/docs/Integrating-jupiter/start-with-the-jupiter-api#guide)

**Jupiter SDK**

```js
import { Jupiter, getPlatformFeeAccounts, TOKEN_LIST_URL } from '@jup-ag/core';
import { Connection } from '@solana/web3.js';

const SOLANA_RPC_ENDPOINT = "https://solana-api.projectserum.com";

const connection = new Connection(SOLANA_RPC_ENDPOINT);

const platformFeeAndAccounts = {
  feeBps: 50,
  feeAccounts: await getPlatformFeeAccounts(
    connection,
    new PublicKey('BUX7s2ef2htTGb2KKoPHWkmzxPj4nTWMWRgs5CSbQxf9') // The platform fee account owner
  ) // map of mint to token account pubkey
};

const jupiter = Jupiter.load({
  ..., // Other arguments, refer to @jup-ag/core documentation
  platformFeeAndAccounts
});
```
You will need to create the token fee accounts to collect the platform fee. The platform fee is collected in the output mint in `ExactIn` mode and in input mint in `ExactOut` mode.

We have created a tool to help you create the token accounts and also to consolidate fee tokens into a desired token. e.g. convert *$DUST* into *$SOL* or *$USDC*.

https://github.com/jup-ag/jupiter-cli