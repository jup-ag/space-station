# Start with Jupiter API

We offer an API and an SDK, but, we recommend that integrators use our API. The API offers several benefits: 

- Language/platform agnostic.
- Avoids NPM SDK dependency issues. Different dependencies will require different versions of the same library making integrating/upgrading more difficult.
- The SDK has a heavy initialization and computation load that is tricky to optimize on mobile or compute-limited devices.
- Offload heavy RPC dependency to the API.

### Using the API

Jupiter API is the easiest way for developers to access liquidity on Solana. Simply pass in the desired pairs, amount, and slippage, and the API will return the serialized transactions needed to execute the swap, which can then be passed into the Solana blockchain with the required signatures.

### Try it out!

```
# Copy and paste this into your terminal!
curl -s 'https://quote-api.jup.ag/v4/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000&slippageBps=1' | jq '.data | .[0] | .outAmount'
```

## V4 API Reference 

:::tip V4 uses Versioned Transactions and Address Lookup Tables
All Jupiter swaps are now only a single transaction. Not all wallets support Versioned Transactions yet, so if you detect a wallet that does not support versioned transactions you may request a legacy transaction instead from the API.
:::

Swagger

### Guide

**1. Install the libraries**

To run this example requires a minimum of [NodeJS 16](https://nodejs.org/en/). In your command line terminal, install the libraries.

```
npm i @solana/web3.js
npm i cross-fetch
npm i @project-serum/anchor
npm i bs58
```

**2. Import from libraries and setup connection**

Next you can copy the following code snippets to a javascript file jupiter-api-example.js. And when you are ready to run the code, just type: *node jupiter-api-example.js*

```
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');
```

:::tip 
Always make sure that you are using your own RPC endpoint. The RPC endpoint used by the connection object in the above example may not work anymore.
:::

**3. Setup your wallet**

In this example, you can paste in your private key for testing purposes but this is not recommended for production applications.

```
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));
```

**4. Retrieve the route map**

You can retrieve the route map to find out what tokens are listed on Jupiter and what swaps are possible with a particular token. The route map only returns the token mint addresses and not the token metadata.  

```
// retrieve indexed routed map
const indexedRouteMap = await (await fetch('https://quote-api.jup.ag/v4/indexed-route-map')).json();
const getMint = (index) => indexedRouteMap["mintKeys"][index];
const getIndex = (mint) => indexedRouteMap["mintKeys"].indexOf(mint);

// generate route map by replacing indexes with mint addresses
var generatedRouteMap = {};
Object.keys(indexedRouteMap['indexedRouteMap']).forEach((key, index) => {
  generatedRouteMap[getMint(key)] = indexedRouteMap["indexedRouteMap"][key].map((index) => getMint(index))
});

// list all possible input tokens by mint Address
const allInputMints = Object.keys(generatedRouteMap);

// list tokens can swap by mint address for SOL
const swappableOutputForSol = generatedRouteMap['So11111111111111111111111111111111111111112'];
// console.log({ allInputMints, swappableOutputForSol })
```

Swagger link

**5. Get the routes for a swap**

In this example, we try swapping SOL to USDC.

```
// swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const { data } = await (
  await fetch('https://quote-api.jup.ag/v4/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50'
  )
).json();
const routes = data;
// console.log(routes)
```

Swagger link

:::tip Platform Fee
If you'd like to charge a fee, pass in feeBps as a parameter in the quote. 
:::

:::tip Amount
The API takes in amount in integer and you have to factor in the decimals for each token by looking up the decimals for that token. For example, USDC has 6 decimals and 1 USDC is 1000000 in integer when passing it in into the API.
:::

**6. Get the serialized transactions to perform the swap**

```
// get serialized transactions for the swap
const transactions = await (
  await fetch('https://quote-api.jup.ag/v4/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // route from /quote api
      route: routes[0],
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      // auto wrap and unwrap SOL. default is true
      wrapUnwrapSOL: true,
      // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
      // This is the ATA account for the output token where the fee will be sent to. If you are swapping from SOL->USDC then this would be the USDC ATA you want to collect the fee.
      // feeAccount: "fee_account_public_key"  
    })
  })
).json();

const { swapTransaction } = transactions;
```

Swagger link

**7. Deserialize and sign the transaction**

```
// deserialize the transaction
const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
console.log(transaction);

// sign the transaction
transaction.sign([wallet.payer]);
```

:::tip
After you deserialize the transaction you can insert your own instructions in the transaction to support your use case.
:::

**8. Execute the transaction**

```
// Execute the transaction
const rawTransaction = transaction.serialize()
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2
});
await connection.confirmTransaction(txid);
console.log(`https://solscan.io/tx/${txid}`);
```