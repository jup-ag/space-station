# Legacy V3 API

Instant access to all liquidity sources in Solana with a single API endpoint.

Jupiter API is the easiest way for developers to access liquidity on Solana. Simply pass in the desired pairs, amount and slippage, and the API will return the serialized transactions needed to execute the swap, which can then be passed into the blockchain with the required signatures.

## Try it out!

```js
# Copy and paste this into your terminal!
curl -s 'https://quote-api.jup.ag/v3/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000&slippageBps=1' | jq '.data | .[0] | .outAmount'
```

## v3 API Reference

https://quote-api.jup.ag/v3/docs/static/index.html

## Guide

**1. Install the libraries**

To run this example requires a minimum of [NodeJS 16](https://nodejs.org/en). In your command line terminal, install the libraries.

```js
npm i @solana/web3.js
npm i cross-fetch
npm i @project-serum/anchor
npm i bs58
```

**2. Import from libraries and setup connection**

Next you can copy the following code snippets to a javascript file *jupiter-api-example.js*. And when you are ready to run the code, just type: `node jupiter-api-example.js`

```js
import { Connection, Keypair, Transaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';


// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');
```

**3. Setup your wallet**

In this example, you can paste in your private key for testing purposes but this is not recommended for production applications.

```js
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));
```

**4. Retrieve the route map**

You can retrieve the route map to find out what tokens are listed on Jupiter and what swaps are possible with a particular token. The route map only returns the token mint addresses and not the token metadata.

```js
// retrieve indexed routed map
const indexedRouteMap = await (await fetch('https://quote-api.jup.ag/v3/indexed-route-map')).json();
const getMint = (index) => indexedRouteMap["mintKeys"][index];
const getIndex = (mint) => indexedRouteMap["mintKeys"].indexOf(mint);

// generate route map by replacing indexes with mint addresses
var generatedRouteMap = {};
Object.keys(indexedRouteMap['indexedRouteMap']).forEach((key, index) => {
  generatedRouteMap[getMint(key)] = indexedRouteMap["indexedRouteMap"][key].map((index) => getMint(index))
});

// list all possible input tokens by mint Address
const allInputMints = Object.keys(generatedRouteMap);

// list tokens can swap by mint addressfor SOL
const swappableOutputForSol = generatedRouteMap['So11111111111111111111111111111111111111112'];
// console.log({ allInputMints, swappableOutputForSol })
```

**5. Get the routes for a swap**

In this example, we try swapping SOL to USDC.

```js
// swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const { data } = await (
  await fetch('https://quote-api.jup.ag/v3/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50\
&feeBps=4'
  )
).json();
const routes = data;
// console.log(routes)
```

<details>
<summary><b>Quote API Parameters</b></summary>

<b>inputMint</b> (String) input token mint address
<br></br>
<br></br>
<b>outputMint</b> (String) output token mint address
<br></br>
<br></br>
<b>amount</b> (Integer) The API takes in amount in integer and you have to factor in the decimals for each token by looking up the decimals for that token. For example, USDC has 6 decimals and 1 USDC is 1000000 in integer when passing it in into the API.
<br></br>
<br></br>
<b>swapMode</b> (String: ExactIn | ExactOut)  Defaults to ExactIn.  ExactOut is for supporting use cases where you need an exact token amount, like payments. In this case the slippage is on the input token.
<br></br>
<br></br>
<b>slippageBps</b> (Integer)  slippage in BPS.
<br></br>
<br></br>
<b>feeBps</b> (Integer) If you want to charge the user a fee, you can specify the fee in BPS.  Fee % is taken out of the output token.
<br></br>
<br></br>
<b>onlyDirectRoutes</b> (Boolean)  Default is false.  Direct Routes limits Jupiter routing to single hop routes only.
<br></br>
<br></br>
<b>userPublicKey</b> (String) Public key of the user (only pass in if you want deposit and fee being returned, might slow down query)
<br></br>
<br></br>
<b>enforceSingleTx</b> (Boolean) Only return routes that can be done in a single transaction. (Routes might be limited)
</details>

:::info Platform Fee
If you'd like to charge a fee, pass in `feeBps` as a parameter in the quote.
:::

:::info Amount
The API takes in amount in integer and you have to factor in the decimals for each token by looking up the decimals for that token. For example, USDC has 6 decimals and 1 USDC is 1000000 in integer when passing it in into the API.
:::

**6. Get the serialized transactions to perform the swap**

```js
// get serialized transactions for the swap
const transactions = await (
  await fetch('https://quote-api.jup.ag/v3/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // route from /quote api
      route: routes[0],
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString()
    })
  })
).json();

const { setupTransaction, swapTransaction, cleanupTransaction } = transactions;
```

<details>
<summary><b>Swap API Body Model</b></summary>
<b>Route</b> (Route, see Swagger) Route object returned from Quote API
<br></br>
<br></br>
<b>userPublicKey</b> (String) public key of the user
<br></br>
<br></br>
<b>wrapUnwrapSOL</b> (Boolean) if true, will automatically wrap/unwrap SOL.  If false it will use wSOL token account
<br></br>
<br></br>
<b>feeAccount</b> (String) The fee token account for the output token (only pass in if you set a feeBps)
<br></br>
<br></br>
<b>destinationWallet</b> (String) Public key of the wallet that will receive the output of the swap. This assumes the associated token account exists, and currently adds a token transfer instruction.
</details>

**7. Execute the transactions**

:::note
Depending on the route, the API will return between 1 to 3 transaction objects.  You must execute each transaction sequentially and wait for the transaction to succeed (confirmed) before executing the next. Where possible, Jupiter will try to fit everything into a single transaction. If a single transaction object returned it will be the swapTransaction.
:::

```js
// Execute the transactions
for (let serializedTransaction of [setupTransaction, swapTransaction, cleanupTransaction].filter(Boolean)) {
  // get transaction object from serialized transaction
  const transaction = Transaction.from(Buffer.from(serializedTransaction, 'base64'));
  // perform the swap
  const txid = await connection.sendTransaction(transaction, [wallet.payer], {
    skipPreflight: true
  });
  await connection.confirmTransaction(txid);
  console.log(`https://solscan.io/tx/${txid}`);
};
```