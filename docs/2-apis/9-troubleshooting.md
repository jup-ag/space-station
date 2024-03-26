---
sidebar_label: "Troubleshooting"
description: Common questions about using the Jupiter API
---
# Troubleshooting

### Swap Execution

Common transaction error:

> Program log: Custom program error: 0x1771

> Program Jupiter Aggregator v6 consumed 67018 of 200000 compute units

> Program returned error: custom program error: 0x1771

`0x1771` occurs when the slippage tolerance is exceeded, so when the final out amount is less than the minimum out amount.

### Wrap and Unwrap SOL

You can refer to the documentation here: https://solanacookbook.com/references/token.html#how-to-manage-wrapped-sol. For the Jupiter API, there is also a `wrapAndUnwrapSol` parameter that you can use as well.

### Transaction Confirmation Timeout

From time to time, you may see an error message like `Transaction was not confirmed in 60.00 seconds.`, this means that your transaction expires without being confirmed. Each block on Solana has a fixed compute unit allocation. Each account can only take up certain compute units in the block. So, if you are swapping through a very hot pair, that means that many people will compete with you on that limited compute units. You will have to outbid others to get your transaction in. This usually happens if you are consistently being outbid by others to get your transaction in.

To learn how to mitigate this problem, you should read this article about Solana transaction here:
https://jstarry.notion.site/Transaction-confirmation-d5b8f4e09b9c4a70a1f263f82307d7ce

The Jupiter API cannot fix this for you but we do have a few things that can help you:

* `prioritizationFeeLamports` on `/swap`: You can set this to `auto` which will call the `getRecentPrioritizationFees` RPC and get 2x of 75 percentile of all the writable accounts involved in your transaction. This is usually enough to outbid everyone but sometimes during high congestion, it may not be enough. If that is not enough, you can also do `{"autoMultiplier": 2}`, which will 2x of the auto fees. In order to protect user from setting a very high fee, the fee is always capped at 0.005 SOL.

```
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
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: "auto",
      // prioritizationFeeLamports: {
      //   autoMultiplier: 2,
      // },
    })
  })
).json();
```

* If the `prioritizationFeeLamports` doesn't work, you can always set your own fee by using the `/swap-instructions` endpoint.
* `dynamicComputeUnitLimit` on `/swap`: By default, the Jupiter API assumes that each swap will take up 1.4m compute unit. By setting this to `true`, it will adjust the compute unit to be dynamic. We run a simulation to estimate the compute units the swap will take then we add an extra 40% margin. By having lower compute units used, we can set a higher priority fee and it will help to get transaction through since now you are bidding on with higher priority fee.
* `maxRetries` on `sendRawTransaction`: This can be useful to retry sending your transaction and increase the chance of your transaction landing.
* You can check out how we send transaction on https://jup.ag [here](https://github.com/jup-ag/jupiter-quote-api-node/blob/main/example/index.ts#L73).
* Also, the Solana documentation has some [very good tips](https://solana.com/docs/core/transactions/confirmation#transaction-confirmation-tips).

```
const txid = await connection.sendRawTransaction(rawTransaction, {
  skipPreflight: true,
  maxRetries: 2
});
```

### Blockhash is Invalid/Not Found

This can happen because of the decentralized nature of the chain. My local chain can be faster than your chain but they will eventually sync up. If you run into this problem, we suggest using `processed` commitment when submitting the transaction and use `confirmed` commitment to confirm your transaction. Setting `skipPreflight` to `true` can be very helpful too when submitting the transaction. But this will mean that you will skip transaction simulation entirely.

If this problem persists, you can always set your own blockhash before submitting the transaction. You can check out a very helpful article [here](https://solanacookbook.com/guides/retrying-transactions.html#retrying-transactions).

```
const txid = await connection.sendRawTransaction(rawTransaction, {
  maxRetries: 2,
  skipPreflight: true, // If you set this to true, you can skip the next one.
  preflightCommitment: 'processed'
});
```
