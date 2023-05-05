# Limit Orders with SDK

## Program Address

`jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu`

## Installation

Our published package can be found here at [NPM](https://www.npmjs.com/package/@jup-ag/limit-order-sdk).

```bash
yarn add @jup-ag/limit-order-sdk
```

## Usage

**1. Import the needed libraries**

```js
import { LimitOrderProvider } from '@jup-ag/limit-order-sdk'
```

**2.  Load limit order instance with connection**

```js
// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
const connection = new Connection($SOLANA_RPC_ENDPOINT);

const limitOrder = new LimitOrderProvider(
    connection,
    referralPubKey //optional, more details in the section below
);
```

## Create limit order

```js
// Base key are used to generate a unique order id
const base = Keypair.generate();

const {tx, orderPubKey} = await limitOrder.createOrder({
  owner: owner.publicKey,
  inAmount: new BN(100000), // 1000000 => 1 USDC if inputToken.address is USDC mint
  outAmount: new BN(100000),
  inputMint: new PublicKey(inputToken.address),
  outputMint: new PublicKey(outputToken.address),
  expiredAt: null // new BN(new Date().valueOf() / 1000),
  base: base.publicKey
});

await sendAndConfirmTransaction(connection, tx, [owner, base]);
```

**expiredAt** - It can be either null or Unix timestamp in seconds.

## Query user order and history

```js
import { ownerFilter } from '@jup-ag/limit-order-sdk'
import { OrderHistoryItem, TradeHistoryItem } from "@jup-ag/limit-order-sdk";

const openOrder = await limitOrder.getOrder([ownerFilter(owner.publicKey)]);

const orderHistory: OrderHistoryItem[] = await limitOrder.getOrderHistory({
    wallet: owner.publicKey.toBase58(),
    take: 20, // optional, default is 20, maximum is 100
    // lastCursor: order.id // optional, for pagination
})

const orderHistoryCount: number = await limitOrder.getOrderHistoryCount({
    wallet: owner.publicKey.toBase58()
})

const tradeHistory: TradeHistoryItem[] = await limitOrder.getTradeHistory({
    wallet: owner.publicKey.toBase58(),
    take: 20, // optional, default is 20, maximum is 100
    // lastCursor: order.id // optional, for pagination
})

const tradeHistoryCount: number = await limitOrder.getTradeHistoryCount({
    wallet: owner.publicKey.toBase58()
})
```

## Cancel order

```js
const txid = await limitOrder.cancelOrder({
  owner: owner.publicKey,
  orderPubKey: order.publicKey,
});
```

## Batch cancel order

```js
const txid = await limitOrder.batchCancelOrder({
  owner: owner.publicKey,
  ordersPubKey: batchOrdersPubKey,
});
```

:::info
Due to the transaction size limit, the maximum cancellation order in a batch is 10.
:::

## Referral

Referrers are entitled to a share of 0.1% of referral fees, while the platform collects another 0.1%. The fees are collected and withheld by the program and are claimable anytime.

**1.  Create a referral account**

```js
const { tx, referralAccountPubKey } = await limitOrder.createReferralAccount();

await sendAndConfirmTransaction(connection, tx, [KEYPAIR]);
```

**2.  Create referral token accounts**

For every token you would like to collect referral fees in, you need to generate a token account for that. Referral fees are given in the output mint token.

```js
const { tx, referralTokenAccountPubKey } =
  await limitOrder.createReferralTokenAccount(
    mint,
    KEYPAIR.publicKey
  );

await sendAndConfirmTransaction(connection, tx, [KEYPAIR]);
```

**3.  Collect fees**

Once you include your referralPubKey in LimitOrderProvider initialization and output mint referral token account have been created, the referral fees will be credited into the token account after the order has been fulfilled.

**4.  Claim fees**

```js
const tx = await limitOrder.claimReferral(mint);

await sendAndConfirmTransaction(connection, tx, [KEYPAIR]);
```