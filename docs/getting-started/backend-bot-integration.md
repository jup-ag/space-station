---
sidebar_position: 6
---

# Backend/Bot Integration

Integrate Jupiter on your backend or build your arbitrage bot.

## Integrating Jupiter with API

[Jupiter API](./start-with-the-jupiter-api)

## Integrating Jupiter with SDK

A more structured code example for this guide can be found [here](https://github.com/jup-ag/jupiter-core-example).

:::tip Subscribe to the SDK Telegram channel
If you are using Jupiter's SDK, subscribe to this telegram group to get alerted on important SDK updates, which may include critical upgrades.
https://t.me/jupiter_sdk
:::

### Installation

Our published package can be found here [NPM](https://www.npmjs.com/package/@jup-ag/core).

```yarn add @jup-ag/core jsbi```

### Usage

**1. Import the needed libraries**

If building this example from scratch, install the libraries first: **"yarn add bs58"**
```
import bs58 from 'bs58';
import fetch from 'node-fetch';
import JSBI from 'jsbi';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { Jupiter, RouteInfo, TOKEN_LIST_URL } from '@jup-ag/core';
```

**2. Start off with a simple root level function**

```
// index.js
const main = async () => {};
main();
```

**3. Establish connection to Solana RPC and fetch the token list**

The token list is fetched from Jupiter and contains the token metadata.

```
// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
const ENV = (process.env.CLUSTER) || "mainnet-beta";

const main = async () => {
  try {
    // Setup Solana RPC connection
    const connection = new Connection(SOLANA_RPC_ENDPOINT); 
    
    // Fetch token list from Jupiter API
    // This token list contains token meta data
    const tokens: Token[] = await (await fetch(TOKEN_LIST_URL[ENV])).json(); 
    // ...
  }
  ```

:::note
Always make sure that you are using your own RPC endpoint. The RPC endpoint used by the connection object in the above example may not work anymore.

:::

**4. Load Jupiter instance and setup your wallet**

In this example, you can paste in your private key for testing purposes but this is not recommended for production applications.

```
import { Jupiter, TOKEN_LIST_URL } from "@jup-ag/core";

export const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "PASTE YOUR WALLET PRIVATE KEY";
export const USER_PRIVATE_KEY = bs58.decode(WALLET_PRIVATE_KEY);
export const USER_KEYPAIR = Keypair.fromSecretKey(USER_PRIVATE_KEY);

const main = async () => {
    // ...
    
    //  Load Jupiter
    const jupiter = await Jupiter.load({
      connection,
      cluster: ENV,
      user: USER_KEYPAIR, // or public key
      // platformFeeAndAccounts:  NO_PLATFORM_FEE,
      // routeCacheDuration: CACHE_DURATION_MS
      // wrapUnwrapSOL: true (default) | false 
    });
    
    // ...
}
```

<details>
<summary>Jupiter.load options</summary>
routeCacheDuration - If a route is fetched it will be cached for the amount of duration before fetching new routes.

platformFeeAndAccounts - This allows an integrator to add their own fees. See How to add A Fee for more info.

wrapUnwrapSOL - When set to true (default) native SOL is wrapped and wSOL unwrapped in each swap, otherwise it assumes wSOL is funded when it exists.

marketUrl - Can set your own markets cache instead of defaulting to using Jupiter's.

restrictIntermediateTokens (boolean) - Can decide to restrict intermediate tokens to just use the top X tokens.

ammsToExclude - Can set which AMMs to exclude from routing.

shouldLoadSerumOpenOrders - perform a getProgramAccounts on a user's Serum/Openbook Open Orders accounts. Turn off if RPC is slow.

usePreloadedAddressLookupTableCache - Use a preloaded address lookup table cache rather than a lazy cache.
</details>

**5. Get the route map**

The route map identifies what tokens you can swap to given an input token. The route map only contains token mint addresses and no metadata.

```
const main = async () => {
    // ...
    
    const routeMap: Map<string, string[]> = jupiter.getRouteMap()    
    
    // ...
};
```

**6. Discover what tokens you can swap to (optional)**

(a) Declare the token interface.

```
export interface Token {
    chainId: number; // 101,
    address: string; // 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    symbol: string; // 'USDC',
    name: string; // 'Wrapped USDC',
    decimals: number; // 6,
    logoURI: string; // 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
    tags: string[]; // [ 'stablecoin' ]
}
```

(b) Add a helper function that returns the possible tokens you can swap to given an input token.

```
// A helper function to help us find which output pair is possible
const getPossiblePairsTokenInfo = ({
  tokens,
  routeMap,
  inputToken,
}: {
  tokens: Token[];
  routeMap: Map<string, string[]>;
  inputToken?: Token;
}) => {
  try {
    const possiblePairs = routeMap.get(inputToken.address)
    var possiblePairsTokenInfo: { [key: string]: Token | undefined } = {};
    possiblePairs.forEach((address) => {
      possiblePairsTokenInfo[address] = tokens.find((t) => {
        return t.address == address;
      });
    });
    
    return possiblePairsTokenInfo;
  } catch (error) {
    throw error;
  }
};
```

(c) Finally, determine which pair you would like to swap, in our case, we will be swapping from USDC to USDT.

```
const INPUT_MINT_ADDRESS = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
const OUTPUT_MINT_ADDRESS = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"

const main = async () => {
    // ...

    // Get routeMap, which maps each tokenMint and their respective tokenMints that are swappable
    const routeMap = jupiter.getRouteMap();

    // If you know which input/output pair you want
    const inputToken = tokens.find((t) => t.address == INPUT_MINT_ADDRESS);
    const outputToken = tokens.find((t) => t.address == OUTPUT_MINT_ADDRESS);
    // Alternatively, check step 4

    // ...
}
```

(d) **Optional**. Finding the possible output pairs.

You can then display a dropdown in the UI, that allows user to select whatever pairs the user would like to swap by performing a loop based on `possiblePairsTokenInfo`.

```
const possiblePairsTokenInfo = await getPossiblePairsTokenInfo({
  tokens,
  routeMap,
  inputToken,
});

// possiblePairsTokenInfo returns a Map<string, Token | undefined>
```

**7. Get the routes**

```
const routes = await jupiter.computeRoutes({
    inputMint: new PublicKey(inputToken.address), 
    outputMint: new PublicKey(outputToken.address), 
    amount: JSBI.BigInt(1000000), // 1000000 => 1 USDC if inputToken.address is USDC mint.
    slippageBps  // 1 bps = 0.01%.
    // forceFetch (optional) => to force fetching routes and not use the cache.
    // intermediateTokens => if provided will only find routes that use the intermediate tokens.
    // feeBps => the extra fee in BPS you want to charge on top of this swap.
    // onlyDirectRoutes =>  Only show single hop routes.
    // swapMode => "ExactIn" | "ExactOut" Defaults to "ExactIn"  "ExactOut" is to support use cases like payments when you want an exact output amount.
    // enforceSingleTx =>  Only show routes where only one single transaction is used to perform the Jupiter swap. 
});
```

<details>
<summary>Jupiter.computeRoutes params</summary>

inputMint (PublicKey) - mint address for input token.

outputMint (PublicKey) - mint address for output token.

amount (JSBI) - amount of input token to swap.

slippageBps (number) - The slippage in bps. If the output token received exceeds the slippage then the swap transaction will halt.

feeBps (number, optional) - fee in BPS (only pass in if you want to charge a fee on this swap).

forceFetch (boolean, optional) - If true will fetch the quotes instead of returning cached results.

onlyDirectRoutes (boolean, optional) - Will only return single hop direct routes.

swapMode (SwapMode, optional) "ExactIn" | "ExactOut" - Defaults to "ExactIn". ExactOut is used for use cases where an exact token output amount is required.

asLegacyTransaction (boolean, optional) - Defaults to false. If true, instead of a Versioned Transaction, a legacy transaction is returned.

filterTopNResult (number, optional) - Filter how many top individual routes to be used to compared.
</details>

:::info How do you calculate the inputAmount?
Every token defines their own tick size or decimals, in our example, both USDC and USDT pairs have their decimal place at **6**.

Assuming in the UI, user entered a value of **1 USDC**, we can derive the amount to pass into Jupiter to be **1** multiplied by (**10** exponent of **6**)

```
const inputAmount = 1; // UI input
const inputTokenInfo = tokens.find(item => item.address === "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"); // Token info
const amount = inputAmount * (10 ** inputTokenInfo.decimals); // Amount to send to Jupiter
```
:::

**8. Execute the swap**

```
const main = async () => {
    // ...
    
    // Routes are sorted based on outputAmount, so ideally the first route is the best.
    bestRoute = routes.routesInfos[0]
    const { execute } = await jupiter.exchange({
      routeInfo: bestRoute
    });
    
    // Execute swap
    const swapResult: any = await execute(); // Force any to ignore TS misidentifying SwapResult type

    if (swapResult.error) {
      console.log(swapResult.error);
    } else {
      console.log(`https://explorer.solana.com/tx/${swapResult.txid}`);
      console.log(`inputAddress=${swapResult.inputAddress.toString()} outputAddress=${swapResult.outputAddress.toString()}`);
      console.log(`inputAmount=${swapResult.inputAmount} outputAmount=${swapResult.outputAmount}`);
    }
    
    // ...
}
```

<details>
<summary>Jupiter.exchange parameters</summary>

routeInfo (RouteInfo) - Route to execute the swap. This object is returned from the computeRoutes call.

userPublicKey (PublicKey) - This will overwrite the default Jupiter.setUser, useful for stateless usage like API.

feeAccount (PublicKey, optional) - The ATA to receive the fee.

wrapUnwrapSOL (Boolean, optional) - Defaults to true. If false will use the wSOL ATA.

blockhashWithExpiryBlockHeight (BlockhashWithExpiryBlockHeight, optional) - The transaction will use the blockhash and valid blockheight to create transaction.

asLegacyTransaction (Boolean, optional) - Produces a legacy transaction instead of a versioned transaction.

</details>

### Using Transaction Objects

If transaction objects are preferred, you can use the following:

**1. Get the transaction**

```
import { Wallet } from '@project-serum/anchor';
import { sendAndConfirmRawTransaction } from '@solana/web3.js';
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));
```

```
// get the transaction
const { swapTransaction } = await jupiter.exchange({
  routeInfo:routes.routesInfos[0],
});
```

:::note Adding your own instructions
```
import { TransactionMessage, VersionedTransaction, SystemProgram, AddressLookupTableAccount } from '@solana/web3.js';
// get the transaction and address lookup table accounts
const { swapTransaction, addressLookupTableAccounts } = await jupiter.exchange({
  routeInfo:routes.routesInfos[0],
});

// decompile transaction message and add transfer instruction
message = TransactionMessage.decompile(swapTransaction.message, {
  addressLookupTableAccounts: addressLookupTableAccounts
});

// create your instruction and add it to message.instructions
const instruction = // add your own instruction here
message.instructions.push(instruction);

// compile the message and update the swapTransaction
swapTransaction.message = message.compileToV0Message(addressLookupTableAccounts);
```
Read more details on [composing versioned transactions](./additional-guides/composing-with-versioned-transaction).
:::

**2. Sign and execute the transactions**

```
// sign the transaction
swapTransaction.sign([wallet.payer]);
// Execute the transaction
const rawTransaction = swapTransaction.serialize();
const txid = await sendAndConfirmRawTransaction(connection, rawTransaction, {
  skipPreflight: true,
  commitment: 'confirmed',
  maxRetries: 2
});
console.log(`https://solscan.io/tx/${txid}`);
```

## Arbitrage Bot Using the API

Use the API to build your own arbitrage bot.


Jupiter API Arbitrage Example checks whether there is an opportunity for USDC => SOL and SOL => USDC, it submits two transactions that do not always promise profit and might incur losses, use it at your own risk.

[API Arbs Example](https://github.com/jup-ag/api-arbs-example)

**Clone, Build and Run**

First, fetch the latest version of the example code:

```
$ git clone https://github.com/jup-ag/api-arbs-example.git
$ cd api-arbs-example
```

Next, follow the steps in the git repository's [README](https://github.com/jup-ag/api-arbs-example/blob/main/README.md).