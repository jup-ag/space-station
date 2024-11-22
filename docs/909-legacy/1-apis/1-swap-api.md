---
sidebar_label: "Swap API"
description: "Discover the vintage Jupiter V4 Swap API [Legacy]. Dive into functionalities and uses of this earlier version for developers interested in past crypto technologies."
title: "V4 Swap API"
---

<head>
    <title>Jupiter V4 Swap API: Exploring Legacy Crypto Technology</title>
    <meta name="twitter:card" content="summary" />
</head>

:::tip
We recommend checking out our [v6 API](/docs/APIs/swap-api) for more reliability, performance and better pricing.
:::

We offer an API and an SDK, but, we recommend that integrators use our API. The API offers several benefits:

- Language/platform agnostic.
- Avoids NPM SDK dependency issues. Different dependencies will require different versions of the same library making integrating/upgrading more difficult.
- The SDK has a heavy initialization and computation load that is tricky to optimize on mobile or compute-limited devices.
- Offload heavy RPC dependency to the API.

### Using the API

Jupiter API is the easiest way for developers to access liquidity on Solana. Simply pass in the desired pairs, amount, and slippage, and the API will return the serialized transactions needed to execute the swap, which can then be passed into the Solana blockchain with the required signatures.

### Try it out!

```shell
# Copy and paste this into your terminal!
curl -s 'https://quote-api.jup.ag/v4/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000&slippageBps=1' | jq '.data | .[0] | .outAmount'
```

## V4 API Reference

:::tip V4 uses Versioned Transactions and Address Lookup Tables
All Jupiter swaps are now only a single transaction. Not all wallets support Versioned Transactions yet, so if you detect a wallet that does not support versioned transactions you may request a legacy transaction instead from the API.
:::

:::info API Documentation
 [Swagger](https://quote-api.jup.ag/v4/docs/static/index.html)
:::

### Guide

**1. Install the libraries**

To run this example requires a minimum of [NodeJS 16](https://nodejs.org/en/). In your command line terminal, install the libraries.

```shell
npm i @solana/web3.js@1
npm i cross-fetch
npm i bs58
```

**2. Import from libraries and setup connection**

Next you can copy the following code snippets to a javascript file jupiter-api-example.js. And when you are ready to run the code, just type: *node jupiter-api-example.js*

```js
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
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

```js
const keypair = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || ''));
```

**4. Retrieve the route map**

You can retrieve the route map to find out what tokens are listed on Jupiter and what swaps are possible with a particular token. The route map only returns the token mint addresses and not the token metadata.

```js
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

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://quote-api.jup.ag/v4/indexed-route-map</p>
    </div>
  </summary>

 ### Retrieve an indexed route map for the possible token pairs you can swap between.

 See Swagger for more details: https://quote-api.jup.ag/v4/docs/static/index.html
  </details>


<style jsx>
{`
  .api-method-box {
    border-radius: 8px;
    margin: 16px 0;
    display: inline;
    padding: 4px;
    font-weight: 700;
    margin-right: 8px;
    font-size: 12px;
    color: white
  }

  .get {
    border: 1px solid #1976F2;
    background-color: #1976F2 !important;
  }

  .post {
    border: 1px solid #018847;
    background-color: #018847 !important;
  }

  .api-method-path {
    font-size: 14px;
    display: inline;
  }
`}</style>

**5. Get the routes for a swap**

In this example, we try swapping SOL to USDC.

```js
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

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://quote-api.jup.ag/v4/quote</p>
    </div>
  </summary>

 ### Get the top 3 swap routes for a token trade pair sorted by largest output token amount
 See Swagger for more details: https://quote-api.jup.ag/v4/docs/static/index.html

### Request Parameters

| Parameter   | Type     | Required | Description                        |
|-------------|----------|----------|------------------------------------|
| `inputMint`    |  | Yes      | input token mint address           |
| `outputMint`    |  | Yes       |     |
| `amount`    | Integer  | Yes       |The API takes in <i>amount</i>  in integer and you have to factor in the decimals for each token by looking up the decimals for that token. For example, USDC has 6 decimals and 1 USDC is 1000000 in integer when passing it in into the API.     |
| `swapMode`    |  | No       | (<i>ExactIn</i> or <i>ExactOut</i>)  Defaults to <i>ExactIn</i>.  <i>ExactOut</i> is for supporting use cases where you need an exact token amount, like payments. In this case the slippage is on the input token      |
| `slippageBps`    | Integer | No       | The slippage % in BPS.  If the output token amount exceeds the slippage then the swap transaction will halt.      |
| `feeBps`    |Integer| No       | If you want to charge the user a fee, you can specify the fee in BPS.  Fee % is taken out of the output token.|
| `onlyDirectRoutes`    |Integer| No       | Default is false.  Direct Routes limits Jupiter routing to single hop routes only.  |
| `userPublicKey`    || No       | Public key of the user (only pass in if you want deposit and fee being returned, might slow down query)  |
| `asLegacyTransaction`    |Boolean| No       | Only return routes that can be done in a single legacy transaction. (Routes might be limited)  |

  </details>

:::tip Platform Fee
If you'd like to charge a fee, pass in feeBps as a parameter in the quote.
:::

:::tip Amount
The API takes in amount in integer and you have to factor in the decimals for each token by looking up the decimals for that token. For example, USDC has 6 decimals and 1 USDC is 1000000 in integer when passing it in into the API.
:::

**6. Get the serialized transactions to perform the swap**

```js
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
      userPublicKey: keypair.publicKey.toString(),
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

<details>
  <summary>
    <div>
      <div className="api-method-box post">POST</div>
      <p className="api-method-path">https://quote-api.jup.ag/v4/swap</p>
    </div>
  </summary>

 ### Get the serialized swap transactions for the swap route provided.
 See Swagger for more details: https://quote-api.jup.ag/v4/docs/static/index.html

### Request Parameters

| Parameter   | Type     | Required | Description                        |
|-------------|----------|----------|------------------------------------|
| `route`    | `Route` | Yes      | Route object returned from Quote API. See Swaggar for definition           |
| `userPublicKey`    |  | Yes       | public key of the user      |
| `wrapUnwrapSOL`    | Boolean  | No       | if true, will automatically wrap/unwrap SOL.  If false it will use wSOL token account. Defaults to true.     |
| `feeAccount`    |  | No       | The fee token account for the output token (only pass in if you set a feeBps)      |
| `asLegacyTransaction`    | Boolean | No       | Request a legacy transaction rather than the default versioned transaction, needs to be paired with a quote using  <i>asLegacyTransaction</i>  otherwise the transaction might be too large      |
| `destinationWallet`    |  | No       | Public key of the wallet that will receive the output of the swap. This assumes the associated token account exists, and currently adds a token transfer instruction.      |
  </details>



**7. Deserialize and sign the transaction**

```js
// deserialize the transaction
const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
console.log(transaction);

// sign the transaction
transaction.sign([keypair]);
```

**8. Execute the transaction**

```js
// Execute the transaction
const rawTransaction = transaction.serialize()
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2
});
await connection.confirmTransaction(txid);
console.log(`https://solscan.io/tx/${txid}`);
```

## Arbitrage Bot Using the API

Use the API to build your own arbitrage bot.


Jupiter API Arbitrage Example checks whether there is an opportunity for USDC => SOL and SOL => USDC, it submits two transactions that do not always promise profit and might incur losses, use it at your own risk.

[API Arbs Example (Using V1 API)](https://github.com/jup-ag/api-arbs-example)

**Clone, Build and Run**

First, fetch the latest version of the example code:

```shell
$ git clone https://github.com/jup-ag/api-arbs-example.git
$ cd api-arbs-example
```

Next, follow the steps in the git repository's [README](https://github.com/jup-ag/api-arbs-example/blob/main/README.md).