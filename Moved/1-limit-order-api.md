---
sidebar_label: Limit Order API
description: Streamline trading with Jupiter Limit Order API on Solana. Access tutorials, SDK tools, and tips to boost your crypto strategies efficiently.
title: Build a Limit Order Bot With Javascript
---

<head>
    <title>Jupiter Limit Order API Documentation</title>
    <meta name="twitter:card" content="summary" />
</head>

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


Jupiter Limit Order provides users with the simplest way to place limit orders on Solana and receive tokens directly in your wallet when the order is filled!



![limit](limit-order.jpeg)

## Query user open order, order history and trade history APIs

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://jup.ag/api/limit/v1/<b>openOrders</b></p>
    </div>
  </summary>

### Parameters

| Query        | Type   | Required | Description |
| ------------ | ------ | -------- | -------- |
| `wallet`     | string | No       | The wallet address
| `inputMint`  | string | No       | The contract address of the token used to place the limit order
| `outputMint` | string | No       | The contract address of the token being bought

:::info
Due to the transaction size limit, it is best to provide a wallet address even if it is not required.
:::

### Example Request
```shell
curl -X GET "https://jup.ag/api/limit/v1/openorders?wallet=TVeKgyTMp3DjwVFRYC9mYcRStRnbRsFExrZDFCKrXnT&inputMint=So11111111111111111111111111111111111111112&outputMint=WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk"
```
### Response

  <details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

```json
[
    {
        "publicKey": "APCQFtJqMhv6MpXHEtwTBxuSzGTLcJz3XcQGKc1hNpc2",
        "account": {
            "maker": "TVeKgyTMp3DjwVFRYC9mYcRStRnbRsFExrZDFCKrXnT",
            "inputMint": "So11111111111111111111111111111111111111112",
            "outputMint": "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk",
            "oriInAmount": "30000000",
            "oriOutAmount": "150000000000",
            "inAmount": "30000000",
            "outAmount": "150000000000",
            "expiredAt": null,
            "base": "314Ybz35QBeJ4DNRYbpBVM8DFhcDrchpmvTLQQhcLj23"
        }
    }
]
```

  </details>

  <details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{​
  "message": "string",​
  "code": "string",​
  "issues": [​
    {​
      "message": "string"​
    }​
  ]​
​}
```

</details>
</details>

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://jup.ag/api/limit/v1/<b>orderHistory</b></p>
    </div>
  </summary>

### Parameters

| Query    | Type   | Required | Description
| -------- | ------ | -------- | --------
| `wallet` | string | Yes      | wallet address
| `cursor` | number | No       |
| `skip`   | number | No       |
| `take`   | number | No       |

### Example Request
```shell
curl -X GET "https://jup.ag/api/limit/v1/orderHistory?wallet=TVeKgyTMp3DjwVFRYC9mYcRStRnbRsFExrZDFCKrXnT"
```
### Response

  <details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

```json
[
{
        "id": 38422148,
        "orderKey": "BBdAfjXB3kiu2Z6XZM6BAm5hei5awU3SwTT12btaQmgx",
        "maker": "TVeKgyTMp3DjwVFRYC9mYcRStRnbRsFExrZDFCKrXnT",
        "inputMint": "So11111111111111111111111111111111111111112",
        "outputMint": "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk",
        "inAmount": "0",
        "oriInAmount": "30000000",
        "outAmount": "0",
        "oriOutAmount": "2715393334",
        "expiredAt": null,
        "state": "Completed",
        "createTxid": "5xbd6BhqCbfhrorEsrxSGs2wGzaJMycuqy6X11PTMrJtF2mMAoAo4e7vJgCzjWDKNRWMqrMyAL4u5aaWaEtnAFKW",
        "cancelTxid": null,
        "updatedAt": "2024-05-23T17:09:31.024Z",
        "createdAt": "2024-05-23T17:07:47.000Z"
    }
]
```

  </details>

  <details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{​
  "message": "string",​
  "code": "string",​
  "issues": [​
    {​
      "message": "string"​
    }​
  ]​
​}
```

</details>
</details>

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://jup.ag/api/limit/v1/<b>tradeHistory</b></p>
    </div>
  </summary>

### Parameters

| Query        | Type   | Required | Description |
| ------------ | ------ | -------- | --------
| `wallet`     | string | No       | Wallet Address |
| `inputMint`  | string | No       | Contract address of the token being sold |
| `outputMint` | string | No       | Contract address of the token being bought
| `cursor`     | number | No       |
| `skip`       | number | No       |
| `take`       | number | No       |

### Example Request
```shell
curl -X GET "https://jup.ag/api/limit/v1/tradeHistory?wallet=TVeKgyTMp3DjwVFRYC9mYcRStRnbRsFExrZDFCKrXnT"
```
### Response

  <details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

```json
[
    {
        "id": 47520095,
        "inAmount": "30000000",
        "outAmount": "2715393334",
        "txid": "2csWeVyrqfCcjYHUhpYikEW7aspz7piThp1CjrXv3iCofwa4Kd9zhF5PrRuidH4pJ4U5ZCeA9edYgqZgHWhKYVpt",
        "updatedAt": "2024-05-23T17:09:29.999Z",
        "createdAt": "2024-05-23T17:09:23.000Z",
        "order": {
            "id": 38422148,
            "orderKey": "BBdAfjXB3kiu2Z6XZM6BAm5hei5awU3SwTT12btaQmgx",
            "inputMint": "So11111111111111111111111111111111111111112",
            "outputMint": "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk"
        }
    }
]
```

  </details>

  <details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{​
  "message": "string",​
  "code": "string",​
  "issues": [​
    {​
      "message": "string"​
    }​
  ]​
​}
```

</details>
</details>

## Cancel order

<details>
  <summary>
    <div>
      <div className="api-method-box post">POST</div>
      <p className="api-method-path">https://jup.ag/api/limit/v1/<b>cancelOrders</b></p>
    </div>
  </summary>

### Parameters
| Query        | Type   | Required | Description |
| ------------ | ------ | -------- | -------- |
| `owner`      | string | No       |
| `feePayer`   | string | No       |
| `orders`     | string list | No | List of orders being attempted to cancel |

### Body

```json
{​
  "owner": "string",​
  "feePayer": "string",​
  "orders": [​
    "string"​
  ]​
​}
```

### Response

  <details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

```json
{ "tx": "string"​ }
```

  </details>
  <details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{​
  "message": "string",​
  "code": "string",​
  "issues": [​
    {​
      "message": "string"​
    }​
  ]​
​}
```

</details>
</details>


## Create Limit Order (Code Example)

**1. Install the libraries**

Running this example requires a minimum of [NodeJS 16](https://nodejs.org/en). In your command line terminal, install the libraries.

```bash
npm i @solana/web3.js
npm i cross-fetch
npm i @project-serum/anchor
npm i bs58
```

**2. Import from libraries and setup connection**

Next you can copy the following code snippets to a javascript file _jupiter-api-example.js_. And when you are ready to run the code, just type: _node jupiter-api-example.js_

```js
import { Connection, Keypair, Transaction } from "@solana/web3.js";
import fetch from "cross-fetch";
import { Wallet } from "@project-serum/anchor";
import bs58 from "bs58";

// This RPC endpoint is only for demonstration purposes so it may not work.
const connection = new Connection(
  "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
);
```

:::info
Always make sure that you are using your own RPC endpoint. The RPC endpoint used by the connection object in the above example may not work anymore.
:::

**3. Setup your wallet**

In this example, you can paste in your private key for testing purposes but this is not recommended for production applications.

```js
const wallet = new Wallet(
  Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || ""))
);
```

**4. Get the serialized transactions to perform the limit order**

```js
// Base key are used to generate a unique order id
const base = Keypair.generate();

// get serialized transactions
const { tx } = await (
  await fetch('https://jup.ag/api/limit/v1/createOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      owner: wallet.publicKey.toString(),
      inAmount: 100000, // 1000000 => 1 USDC if inputToken.address is USDC mint
      outAmount: 100000,
      inputMint: inputMint.toString(),
      outputMint: outputMint.toString(),
      expiredAt: null, // new Date().valueOf() / 1000,
      base: base.publicKey.toString(),
      // referralAccount and name are both optional.
      // Please provide both to get referral fees.
      // More details in the section below.
      // referralAccount: referralPublicKey,
      // referralName: "Referral Name"
    })
  })
).json();
```

**expiredAt** - Can be either null or Unix timestamp in seconds.

### Execute transaction

**5. Deserialize and sign the transaction**

```js
// deserialize the transaction
const transactionBuf = Buffer.from(tx, "base64");
var transaction = Transaction.deserialize(transactionBuf);

// sign the transaction using the required key
// for create order, wallet and base key are required.
transaction.sign([wallet.payer, base]);
```

**6. Execute the transaction**

```js
// get the latest block hash
const latestBlockHash = await connection.getLatestBlockhash();

// Execute the transaction
const rawTransaction = transaction.serialize();
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2,
});
await connection.confirmTransaction({
  blockhash: latestBlockHash.blockhash,
  lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
  signature: txid
});
console.log(`https://solscan.io/tx/${txid}`);
```

<details>
  <summary>
    <div>
      <div><b>Whole code snippet</b></div>
    </div>
  </summary>

```js
import { Connection, Keypair, Transaction } from "@solana/web3.js";
import fetch from "cross-fetch";
import { Wallet } from "@project-serum/anchor";
import bs58 from "bs58";

// This RPC endpoint is only for demonstration purposes so it may not work.
const connection = new Connection(
  "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
);

// Base key are used to generate a unique order id
const base = Keypair.generate();

// get serialized transaction
const { tx } = await (
  await fetch('https://jup.ag/api/limit/v1/createOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      owner: wallet.publicKey.toString(),
      inAmount: 100000, // 1000000 => 1 USDC if inputToken.address is USDC mint
      outAmount: 100000,
      inputMint: inputMint.toString(),
      outputMint: outputMint.toString(),
      expiredAt: null, // new Date().valueOf() / 1000,
      base: base.publicKey.toString(),
      // referralAccount and name are both optional.
      // Please provide both to get referral fees.
      // More details in the section below.
      // referralAccount: referralPublicKey,
      // referralName: "Referral Name"
    })
  })
).json();

// deserialize the transaction
const transactionBuf = Buffer.from(tx, "base64");
var transaction = Transaction.deserialize(transactionBuf);

// add priority fee
const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: 1, // probably need to be higher for the transaction to be included on chain.
});
transaction.add(addPriorityFee);

// sign the transaction using the required key
// for create order, wallet and base key are required.
transaction.sign([wallet.payer, base]);

// Execute the transaction
const rawTransaction = transaction.serialize();
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2,
});
await connection.confirmTransaction(txid);
console.log(`https://solscan.io/tx/${txid}`);
```
</details>


Deserialize, sign and execute the transaction from the response like [here](#execute-transaction).

:::info
Due to the transaction size limit, the maximum cancellation order in a batch is 10.
:::

:::info
The Jupiter Limit Order's project account for the Referral Program is `45ruCyfdRkWpRNGEqWzjCiXRHkZs8WXCLQ67Pnpye7Hp`.
:::

## Referral

Check out the [referral program](/docs/apis/adding-fees) for Limit Order.
