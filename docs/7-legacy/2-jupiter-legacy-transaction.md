---
sidebar_label: "Legacy Txns"
description: "About Jupiter Legacy Transactions"
---

# About Jupiter Legacy Transactions
Some wallets have yet to support Versioned Transaction, so they need to use Legacy Transaction. The latest v5 API doesn't support legacy transaction, if you want to support it you can use our v4 API according.

## V4 API Reference
:::info API Documentation
 [Swagger](https://quote-api.jup.ag/v4/docs/static/index.html)
:::

**1. Get the routes for a swap**

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

**2. Get the serialized transactions to perform the swap**

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



**3. Deserialize and sign the transaction**

```js
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

**4. Execute the transaction**

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

## Multiple Transactions

Due to transaction size limits, some swap routes cannot fit into a single transaction.  In this case Jupiter will return up to 3 transactions while preserving all swap instructions in a single swap transaction.

- If Jupiter returns 3 transactions it will be:
    - **setupTransaction** - used to handle creating ATA or Serum open order accounts.
    - **swapTransactions** - performing the actual swaps.
    - **cleanupTransaction** - unwrap SOL if a SOL swap.
- If Jupiter returns a single transaction it will be the `swapTransaction`.
- Wallets on Solana can sign multiple transactions in 1 click
    - https://github.com/solana-labs/wallet-adapter/blob/master/packages/core/base/src/signer.ts#L7
- You must send each transaction sequentially in the order setupTransaction -> swapTransaction -> cleanupTransaction and wait for each to be 'confirmed' before sending the next one.
    - This article is helpful: https://jstarry.notion.site/Transaction-confirmation-d5b8f4e09b9c4a70a1f263f82307d7ce
    - A common error is for an RPC node's cache to not get updated between the `setupTransaction` and `swapTransaction`. The `setupTransaction` will create the ATA account, so the account will be on-chain but not in the RPC node's cache. In this case, you can contact your RPC provider to work with them on this.
- If you want to only deal with a single tx for any swap, you use the `onlyDirectRoutes` option which will disable multi-hop routing and trade splitting.

## Swap Success / Failure

:::info [Jupiter Swap Success/Failure Stat](https://dune.com/Arowana87/jupiter-aggregator)
:::

- The typical **swap success rate for Jupiter is 93.7%** excluding failures due to slippage.
- One of the most prominent errors is the UI not limiting the input amount properly resulting in trying to swap with more tokens than the user has available.
    - The errors for this is {"Custom":1} from Token Program and {"Custom":40} from Raydium AMM.
- {"Custom":6000} is slippage rate failure.
- You may see lower swap success rate if...
    - You use the SDK and are not limiting the intermediate tokens to the most liquid tokens.  By default, the SDK will use all tokens as intermediary tokens.
    - Your trade sizes are very small, < $1.
    - In this case the swap route will route through the long tail of token markets which are not very durable and can disappear as another swap takes it.
    - But this is generally not a real-world swap.