---
sidebar_label: Limit Order API
description: Run a limit order bot with Javascript
---
# Run a limit order bot with Javascript

Jupiter Limit Order provides users with the simplest way to place limit orders on Solana and receive tokens directly in your wallet when the order is filled!

![limit](limit-order.jpeg)


## Create Limit Order

**1. Install the libraries**

To run this example requires a minimum of [NodeJS 16](https://nodejs.org/en). In your command line terminal, install the libraries.

```bash
npm i @solana/web3.js
npm i cross-fetch
npm i @project-serum/anchor
npm i bs58
```

**2. Import from libraries and setup connection**

Next you can copy the following code snippets to a javascript file *jupiter-api-example.js*. And when you are ready to run the code, just type: *node jupiter-api-example.js*

```js
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import fetch from 'cross-fetch';
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');
```

:::info
Always make sure that you are using your own RPC endpoint. The RPC endpoint used by the connection object in the above example may not work anymore.
:::

**3. Setup your wallet**

In this example, you can paste in your private key for testing purposes but this is not recommended for production applications.

```js
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));
const referral = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.REFERRAL_PRIVATE_KEY || '')));
```

**4. Get the serialized transactions to perform the swap**

```js
// Base key are used to generate a unique order id
const base = Keypair.generate();

// get serialized transactions
const transactions = await (
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
      expiredAt: null // new Date().valueOf() / 1000,
      base: base.publicKey.toString(),
      // referralAccount and name are both optional
      // provide both to get referral fees
      // more details in the section below
      referralAccount: referral.publicKey.toString(),
      referralName: "Referral Name"
    })
  })
).json();

const { tx } = transactions;
```

**expiredAt** - It can be either null or Unix timestamp in seconds.

### Execute transaction

**5. Deserialize and sign the transaction**

```js
// deserialize the transaction
const transactionBuf = Buffer.from(tx, 'base64');
var transaction = VersionedTransaction.deserialize(transactionBuf);

// sign the transaction using the required key
// for create order, wallet and base key are required.
transaction.sign([wallet.payer, base]);
```

**6. Execute the transaction**

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

## Query user open order, order history and trade history


<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://jup.ag/api/limit/v1/<b>openOrders</b></p>
    </div>
  </summary>

### Parameters

| Query   | Type     | Required |
|-------------|----------|----------|
| `wallet`    | string   | Yes      |

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
  [​
    {​
      "publicKey": "string",​
      "account": {​
        "maker": "string",​
        "inputMint": "string",​
        "outputMint": "string",​
        "oriInAmount": 0,​
        "oriOutAmount": 0,​
        "inAmount": 0,​
        "outAmount": 0,​
        "expiredAt": 0,​
        "base": "string"​
      }​
    }​
  ​]
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

| Query   | Type     | Required |
|-------------|----------|----------|
| `wallet`    | string   | Yes      |
| `cursor`    | number   | No      |
| `skip`    | number   | No      |
| `take`    | number   | No      |

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
  [​
    {​
      "id": 0,​
      "orderKey": "string",​
      "maker": "string",​
      "inputMint": "string",​
      "outputMint": "string",​
      "inAmount": 0,​
      "oriInAmount": 0,​
      "outAmount": 0,​
      "oriOutAmount": 0,​
      "expiredAt": 0,​
      "state": "Waiting",​
      "createTxid": "string",​
      "cancelTxid": "string",​
      "updatedAt": "2023-05-05T07:48:36.390Z",​
      "createdAt": "2023-05-05T07:48:36.390Z"​
    }​
​  ]
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

| Query   | Type     | Required |
|-------------|----------|----------|
| `wallet`    | string   | Yes      |
| `cursor`    | number   | No      |
| `skip`    | number   | No      |
| `take`    | number   | No      |

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
  [​
  {​
    "id": 0,​
    "outAmount": 0,​
    "txid": "string",​
    "updatedAt": "2023-05-05T07:48:36.390Z",​
    "createdAt": "2023-05-05T07:48:36.390Z",​
    "order": {​
      "id": 0,​
      "orderKey": "string",​
      "inputMint": "string",​
      "outputMint": "string"​
    }​
  }​
​]
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

Deserialize, sign and execute the transaction from the response like [here](#execute-transaction).

:::info
Due to the transaction size limit, the maximum cancellation order in a batch is 10.
:::

## Referral

Check out the [referral program](/docs/limit-order/referral-fee) for Limit Order.
