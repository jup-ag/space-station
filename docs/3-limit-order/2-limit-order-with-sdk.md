---
sidebar_label: "Limit Order with SDK"
description: Master limit order creation on Solana with Jupiter SDK. Streamline trades and optimize with referral perks.
title: Creating a Limit Order with the SDK
---

<head>
    <title>Jupiter Limit Order SDK Documentation</title>
    <meta name="twitter:card" content="summary" />
</head>

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
import { LimitOrderProvider } from "@jup-ag/limit-order-sdk";
```

**2. Load limit order instance with connection**

```js
// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT =
  "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/";
const connection = new Connection($SOLANA_RPC_ENDPOINT);

const limitOrder = new LimitOrderProvider(
  connection,
  // referralPubKey and name are both optional
  // provide both to get referral fees
  // more details in the section below
  referralPubKey,
  referralName
);
```

## Create limit order

```js
// Base key are used to generate a unique order id
const base = Keypair.generate();

const { tx, orderPubKey } = await limitOrder.createOrder({
  owner: owner.publicKey,
  inAmount: new BN(100000), // 1000000 => 1 USDC if inputToken.address is USDC mint
  outAmount: new BN(100000),
  inputMint: new PublicKey(inputToken.address),
  outputMint: new PublicKey(outputToken.address),
  expiredAt: null, // new BN(new Date().valueOf() / 1000)
  base: base.publicKey,
});

await sendAndConfirmTransaction(connection, tx, [owner, base]);
```

**expiredAt** - Can be either null or Unix timestamp in seconds.

## Query user order and history

```js
import { ownerFilter } from "@jup-ag/limit-order-sdk";
import { OrderHistoryItem, TradeHistoryItem } from "@jup-ag/limit-order-sdk";

const openOrder = await limitOrder.getOrders([ownerFilter(owner.publicKey)]);

const orderHistory: OrderHistoryItem[] = await limitOrder.getOrderHistory({
  wallet: owner.publicKey.toBase58(),
  take: 20, // optional, default is 20, maximum is 100
  // lastCursor: order.id // optional, for pagination
});

const orderHistoryCount: number = await limitOrder.getOrderHistoryCount({
  wallet: owner.publicKey.toBase58(),
});

const tradeHistory: TradeHistoryItem[] = await limitOrder.getTradeHistory({
  wallet: owner.publicKey.toBase58(),
  take: 20, // optional, default is 20, maximum is 100
  // lastCursor: order.id // optional, for pagination
});

const tradeHistoryCount: number = await limitOrder.getTradeHistoryCount({
  wallet: owner.publicKey.toBase58(),
});
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

Check out the [referral program](/docs/apis/adding-fees) for Limit Order.
