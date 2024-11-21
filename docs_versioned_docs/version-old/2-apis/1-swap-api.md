---
sidebar_label: "V6 Swap API"
description: "Dive into the Jupiter Swap V6 API docs. Discover powerful swap capabilities, integration tips, and advanced features for DeFi applications."
title: "V6 Swap API"
---
<head>
    <title>How to Integrate Jupiter Swap [API Documentation]</title>
    <meta name="twitter:card" content="summary" />
</head>

:::info
If you have problems landing transactions, read [Landing Transactions on Solana](/docs/apis/landing-transactions).
:::

Jupiter APIs is the easiest way for developers to access liquidity on Solana. Simply pass in the desired pairs, amount, and slippage, and the API will return the serialized transactions needed to execute the swap, which can then be passed into the Solana blockchain with the required signatures.

:::info Risk Disclaimer
**Please use Jupiter's Swap API at your own risk**. [Jupiter's Frontend UI](https://jup.ag/) contains multiple safeguards and warnings when quoting. Jupiter is not liable for losses incurred by users on other platforms.
:::

## V6 API Reference

All Jupiter swaps are using versioned transactions and address lookup tables. But not all wallets support Versioned Transactions yet, so if you detect a wallet that does not support versioned transactions, you will need to use the `asLegacyTransaction` parameter.

Learn more about the Jupiter API Documentation at the [OpenAPI documentation](/api-v6). This documentation has a REST request list and a built in API Playground. Use the API Playground to try API calls now!

:::tip API Documentation
 [OpenAPI Documentation](/api-v6)
:::

### Guide for V6 Swap API (code example)

#### 1. Install required libraries

Running this example requires a minimum of [NodeJS 16](https://nodejs.org/en/). In your command line terminal, install the libraries.

```shell
npm i @solana/web3.js@1
npm i cross-fetch
npm i @project-serum/anchor
npm i bs58
```

#### 2. Import from libraries and setup connection

Next you can copy the following code snippets to a javascript file jupiter-api-example.js. And when you are ready to run the code, just type: *node jupiter-api-example.js*

```js
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');
```

:::tip
Always make sure that you are using your own RPC endpoint. The RPC endpoint used by the connection object in the above example may not work anymore. For more information about RPC endpoints see the [official Solana Documentation](https://solana.com/docs/core/clusters) to learn more about their public RPC endpoints.
:::

#### 3. Setup your wallet

You can paste in your private key for testing purposes but this is not recommended for production applications.

```js
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));
```


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
  border: 1px solid #018847;
  background-color: #018847 !important;
}

.post {
  border: 1px solid #eaba0c;
  background-color: #eaba0c !important;
}

  .api-method-path {
    font-size: 14px;
    display: inline;
  }
`}</style>

#### 4. Get the route for a swap

Here, we are getting a quote to swap from SOL to USDC.

```js
// Swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const quoteResponse = await (
  await fetch('https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50'
  )
).json();
// console.log({ quoteResponse })
```

#### 5. Get the serialized transactions to perform the swap

Once we have the quote, we need to serialize the quote into a swap transaction that can be submitted on chain.

```js
// get serialized transactions for the swap
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      // auto wrap and unwrap SOL. default is true
      wrapAndUnwrapSol: true,
      // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
      // feeAccount: "fee_account_public_key"
    })
  })
).json();
```

#### 6. Deserialize and sign the transaction

```js
// deserialize the transaction
const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
console.log(transaction);

// sign the transaction
transaction.sign([wallet.payer]);
```

#### 7. Execute the transaction

```js
// get the latest block hash
const latestBlockHash = await connection.getLatestBlockhash();

// Execute the transaction
const rawTransaction = transaction.serialize()
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2
});
await connection.confirmTransaction({
 blockhash: latestBlockHash.blockhash,
 lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
 signature: txid
});
console.log(`https://solscan.io/tx/${txid}`);
```

:::info Solana Network Congestion
Due to the network congestion on Solana, the `sendRawTransaction` method may not be able to help you to land your transaction. You should check out this [`transactionSender`](https://github.com/jup-ag/jupiter-quote-api-node/blob/main/example/utils/transactionSender.ts) file to send transaction.
:::

<details>
  <summary>
    <div>
      <div><b>Whole code snippet</b></div>
    </div>
  </summary>

```js
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');

const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));

// Swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
const quoteResponse = await (
  await fetch('https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50'
  )
).json();
// console.log({ quoteResponse })

// get serialized transactions for the swap
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      // auto wrap and unwrap SOL. default is true
      wrapAndUnwrapSol: true,
      // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
      // feeAccount: "fee_account_public_key"
    })
  })
).json();

// deserialize the transaction
const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
console.log(transaction);

// sign the transaction
transaction.sign([wallet.payer]);

// Execute the transaction
const rawTransaction = transaction.serialize()
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2
});
await connection.confirmTransaction(txid);
console.log(`https://solscan.io/tx/${txid}`);
```
</details>



## Advanced error handling to disable certain AMM from the API

Sometimes an AMM will throw an error when swapping. To prevent getting a quote from the failed AMM, you can use the `excludeDexes` parameter when getting `/quote`.

Example JS, with the help of `@mercurial-finance/optimist` package:
```ts
import { parseErrorForTransaction } from '@mercurial-finance/optimist';

// TX ID from last step if the transaction failed.
const transaction = connection.getTransaction(txid, {
  maxSupportedTransactionVersion: 0,
  commitment: 'confirmed'
});

const programIdToLabelHash = await (
  await fetch('https://quote-api.jup.ag/v6/program-id-to-label')
).json();
const { programIds } = parseErrorForTransaction(transaction);

let excludeDexes = new Set();
if (programIds) {
  for (let programId of programIds) {
    let foundLabel = programIdToLabelHash[programId];
    if(foundLabel) {
      excludeDexes.add(foundLabel);
    }
  }
}

// Request another quote with `excludeDexes`.
const { data } = await (
  await fetch(`https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
&amount=100000000&excludeDexes=${Array.from(excludeDexes).join(',')}
&slippageBps=50`
  )
).json();
```

## Instructions Instead of Transaction

Sometimes you may prefer to compose using instructions instead of one transaction that is returned from the `/swap` endpoint. You can post to `/swap-instructions` instead, it takes the same parameters as the `/swap` endpoint.

```ts
const instructions = await (
  await fetch('https://quote-api.jup.ag/v6/swap-instructions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      userPublicKey: swapUserKeypair.publicKey.toBase58(),
    })
  })
).json();

if (instructions.error) {
  throw new Error("Failed to get swap instructions: " + instructions.error);
}

const {
  tokenLedgerInstruction, // If you are using `useTokenLedger = true`.
  computeBudgetInstructions, // The necessary instructions to setup the compute budget.
  setupInstructions, // Setup missing ATA for the users.
  swapInstruction: swapInstructionPayload, // The actual swap instruction.
  cleanupInstruction, // Unwrap the SOL if `wrapAndUnwrapSol = true`.
  addressLookupTableAddresses, // The lookup table addresses that you can use if you are using versioned transaction.
} = instructions;

const deserializeInstruction = (instruction) => {
  return new TransactionInstruction({
    programId: new PublicKey(instruction.programId),
    keys: instruction.accounts.map((key) => ({
      pubkey: new PublicKey(key.pubkey),
      isSigner: key.isSigner,
      isWritable: key.isWritable,
    })),
    data: Buffer.from(instruction.data, "base64"),
  });
};

const getAddressLookupTableAccounts = async (
  keys: string[]
): Promise<AddressLookupTableAccount[]> => {
  const addressLookupTableAccountInfos =
    await connection.getMultipleAccountsInfo(
      keys.map((key) => new PublicKey(key))
    );

  return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
    const addressLookupTableAddress = keys[index];
    if (accountInfo) {
      const addressLookupTableAccount = new AddressLookupTableAccount({
        key: new PublicKey(addressLookupTableAddress),
        state: AddressLookupTableAccount.deserialize(accountInfo.data),
      });
      acc.push(addressLookupTableAccount);
    }

    return acc;
  }, new Array<AddressLookupTableAccount>());
};

const addressLookupTableAccounts: AddressLookupTableAccount[] = [];

addressLookupTableAccounts.push(
  ...(await getAddressLookupTableAccounts(addressLookupTableAddresses))
);

const blockhash = (await connection.getLatestBlockhash()).blockhash;
const messageV0 = new TransactionMessage({
  payerKey: payerPublicKey,
  recentBlockhash: blockhash,
  instructions: [
    // uncomment if needed: ...setupInstructions.map(deserializeInstruction),
    deserializeInstruction(swapInstructionPayload),
    // uncomment if needed: deserializeInstruction(cleanupInstruction),
  ],
}).compileToV0Message(addressLookupTableAccounts);
const transaction = new VersionedTransaction(messageV0);
```

## Using `maxAccounts`

Sometimes, if you are composing with Jupiter Swap instruction, you may want to spare some accounts (64 max in 1 Solana transaction)
for your own program instruction, you can use `maxAccounts`.

```js
// If you know that your instruction will take up 10 accounts, you
// can pass in 54 as `maxAccounts` when quoting.
const { data } = await (
  await fetch('https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50\
&maxAccounts=54'
  )
).json();
const quoteResponse = data;
// console.log(quoteResponse)
```

The `maxAccounts` is an estimation since it doesn't consider account overlapping but it is a good start to control how many accounts
you want per transaction.

## Using Token Ledger Instruction

Sometimes you may not know the exact input amount for the Jupiter swap until an instruction before the swap happens.

For example:

```ts
const instructions = await (
  await fetch('https://quote-api.jup.ag/v6/swap-instructions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      useTokenLedger: true,
  })
).json();

const {
  tokenLedgerInstruction: tokenLedgerPayload, // If you are using `useTokenLedger = true`.
  swapInstruction: swapInstructionPayload, // The actual swap instruction.
  addressLookupTableAddresses, // The lookup table addresses that you can use if you are using versioned transaction.
} = instructions;

// A withdraw instruction that will increase the user input token account amount.
const withdrawInstruction = ...;

// Coupled with the tokenLedgerInstruction, the swap instruction will use the
// user increased amount of the input token account after the withdrawal as input amount.
const tokenLedgerInstruction = new TransactionInstruction({
  programId: new PublicKey(tokenLedgerPayload.programId),
  keys: tokenLedgerPayload.accounts.map((key) => ({
    pubkey: new PublicKey(key.pubkey),
      isSigner: key.isSigner,
      isWritable: key.isWritable,
    })),
  data: Buffer.from(tokenLedgerPayload.data, "base64"),
});

const swapInstruction = new TransactionInstruction({
  programId: new PublicKey(swapInstructionPayload.programId),
  keys: swapInstructionPayload.accounts.map((key) => ({
    pubkey: new PublicKey(key.pubkey),
      isSigner: key.isSigner,
      isWritable: key.isWritable,
    })),
  data: Buffer.from(swapInstructionPayload.data, "base64"),
});

const getAdressLookupTableAccounts = async (
  keys: string[]
): Promise<AddressLookupTableAccount[]> => {
  const addressLookupTableAccountInfos =
    await connection.getMultipleAccountsInfo(
      keys.map((key) => new PublicKey(key))
    );

  return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
    const addressLookupTableAddress = keys[index];
    if (accountInfo) {
      const addressLookupTableAccount = new AddressLookupTableAccount({
        key: new PublicKey(addressLookupTableAddress),
        state: AddressLookupTableAccount.deserialize(accountInfo.data),
      });
      acc.push(addressLookupTableAccount);
    }

    return acc;
  }, new Array<AddressLookupTableAccount>());
};

const addressLookupTableAccounts: AddressLookupTableAccount[] = [];

addressLookupTableAccounts.push(
  ...(await getAdressLookupTableAccounts(addressLookupTableAddresses))
);

const messageV0 = new TransactionMessage({
  payerKey: payerPublicKey,
  recentBlockhash: blockhash,
  instructions: [tokenLedgerInstruction, withdrawInstruction, swapInstruction],
}).compileToV0Message(addressLookupTableAccounts);
const transaction = new VersionedTransaction(messageV0);
```
This can be useful if you want to withdraw from Solend and immediately convert your withdrawal token into another token with Jupiter.

## Setting Priority Fee for Your Transaction

If transactions are expiring without confirmation on-chain, this might mean that you have to pay additional fees to prioritize your transaction. To do so, you can set the `computeUnitPriceMicroLamports` parameter.

```js
const transaction = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      dynamicComputeUnitLimit: true, // allow dynamic compute limit instead of max 1,400,000
      // custom priority fee
      prioritizationFeeLamports: 'auto' // or custom lamports: 1000
    })
  })
).json();
```

If 'auto' is used, Jupiter will automatically set a priority fee for the transaction, it will be capped at 5,000,000 lamports / 0.005 SOL.

## Using Dynamic Slippage

To understand what Dynamic Slippage is, checkout our [Jupresearch post](https://www.jupresear.ch/t/dynamic-swap-experience-dynamic-slippage/21946/)

Dynamic slippage is a slippage estimation and optimization mechanism during the /swap call, and is useful because:
- Estimates slippage closer to the time of execution.
- A set of heuristics that accounts for the type of token traded and user's max slippage tolerance.
- Safeguards the user while ensuring success rate.

The frontend sends a payload to the backend with an additional `dynamicSlippage` field with `maxBps` set as the user's max slippage **(this is important to respect the user's max, the jup.ag UI sets the default to 300bps (3%))**.

```js
// get serialized transactions for the swap
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // quoteResponse from /quote api
      quoteResponse,
      // user public key to be used for the swap
      userPublicKey: wallet.publicKey.toString(),
      // auto wrap and unwrap SOL. default is true
      wrapAndUnwrapSol: true,
      // jup.ag frontend default max for user
      dynamicSlippage: { "maxBps": 300 },
      // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
      // feeAccount: "fee_account_public_key"
    })
  })
).json();
```

The backend returns a response with a serialized transaction that is already using the final optimized slippage and a `dynamicSlippageReport` for visibility/error catching.

```json
{
    "swapTransaction": "// serialized transaction",
    "lastValidBlockHeight": 266691690,
    "prioritizationFeeLamports": 384,
    "computeUnitLimit": 107468,
    "prioritizationType": {
        "computeBudget": {
            "microLamports": 3577,
            "estimatedMicroLamports": 3577
        }
    },
    "dynamicSlippageReport": {
        // the final optimized slippage bps used in the serialized transaction
        "slippageBps": 12,
        // the incurred out amount observed from simulating the transaction
        "otherAmount": 8759842,
        // the simulated incurred slippage during optimization
        // negative integer refers to the loss in bps while positive refers to the gain
        "simulatedIncurredSlippageBps": -8,
        // an amplifcation ratio we use to add a buffer to the estimated slippage
        "amplificationRatio": "1.5"
    },
    "simulationError": null
}
```

## Examples
 For more example scripts please visit the [jupiter-quote-api-node public Git repository](https://github.com/jup-ag/jupiter-quote-api-node). The repository has some further scripts and instructions for you to explore!
* Javascript/Typescript: [https://github.com/jup-ag/jupiter-quote-api-node](https://github.com/jup-ag/jupiter-quote-api-node)
* Rust: [https://github.com/jup-ag/jupiter-api-rust-example](https://github.com/jup-ag/jupiter-api-rust-example)

Having issues? Head to the [Troubleshooting](/docs/apis/troubleshooting) section for some help.
