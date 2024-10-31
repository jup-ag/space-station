---
sidebar_label: Integrate Limit Order v2
description: Master Jupiter Limit Order integration for efficient Limit Orders on Solana.
title: Integrating Jupiter Limit Order v2
slug: ./limit-order
---

Jupiter Limit Order v2 (LO) provides users with the simplest way to place limit orders on Solana and receive tokens directly in your wallet when the order is filled.

This page will serve as a general guide on integrating LO into your use case. whether you are building a bot for yourself or looking to integrate with existing (d)apps, Jupiter's LO program will work regardless of programming language used.

Learn more about the mechanics of Jupiter's LO [here](https://station.jup.ag/guides/limit-order/how-lo-work)

Start using Limit Order APIs: [here](../limit-order/limit-order-api)

---

## Program Address

LO v2 Program (mainnet-beta):`j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X`

---

## Create Limit Order API Walkthrough

This guide will show you how to create limit orders using Jupiter APIs. It also applies to canceling orders.

### Install Required Libraries
We recommend using NodeJS >= 18 for the native `fetch` API
```
bun install @solana/web3.js bs58


We recommend **NodeJS >= 18** for native `fetch` support.

You can use any of these package managers:

- **bun**  
- **npm**  
- **pnpm**  
- **yarn**

```bash
# bun has built-in dotenv support: https://bun.sh/docs/runtime/env
bun install @solana/web3.js bs58

```
## Import Libraries and Set Up RPC Connection

```typescript
import {
  Connection,
  Keypair,
  SendOptions,
  VersionedTransaction,
} from "@solana/web3.js";
import bs58 from "bs58";

const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) throw "missing RPC_URL env var";

const RPC_CONNECTION = new Connection(RPC_URL);
```
For TypeScript, these are the request body and response types that can be used.

```typescript
type CreateOrder = {
  inputMint: string;
  outputMint: string;
  maker: string;
  payer: string;
  params: {
    makingAmount: string;
    takingAmount: string;
    expiredAt?: string;
    feeBps?: string;
  };
  computeUnitPrice: string | "auto";
  referral?: string;
  inputTokenProgram?: string;
  outputTokenProgram?: string;
  wrapAndUnwrapSol?: boolean;
};

type CreateOrderResponse = {
  order: string;
  tx: string;
};
```
## Set Up Your Wallet
Set up your wallet by decoding the private key from a base-58 string.
Do **not** use private keys directly in production.
```typescript
const WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
if (!WALLET_PRIV_KEY) throw "missing WALLET_PRIV_KEY";

const wallet = Keypair.fromSecretKey(bs58.decode(WALLET_PRIV_KEY));
```
# Get the serialized transactions to create the limit order
Here we will do the following:
1. Create the request body,
2. Submit it to the API server,
3. Deserialize the transaction from the response, and
4. Sign and submit the transaction on chain
Do note that steps 2-4 are asynchronous and may reject. It is recommended to wrap this section in a `try-catch` block and handle the errors accordingly.

### Creating the request body
In this example, we are creating a limit order to buy 100 USDC for 0.05 SOL with no expiry and using `auto` for the `computeUnitPrice`. For advanced users, you may specify a numerical `computeUnitPrice`.
```typescript
const createOrderBody: CreateOrder = {
  maker: wallet.publicKey.toBase58(),
  payer: wallet.publicKey.toBase58(),
  inputMint: "So11111111111111111111111111111111111111112",
  outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  params: {
    makingAmount: "50000000", // 0.05 SOL
    takingAmount: "100000000", // 100 USDC
  },

  // "auto" sets the priority fee based on network congestion
  // and it will be capped at 500,000
  computeUnitPrice: "auto",
};
```
### Send request to API server
Ensure that the method of the request is `POST` and that the body of the request is a stringified `CreateOrder` type.
```typescript
const fetchOpts: RequestInit<RequestInitCfProperties> = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(createOrderBody),
};

const response = await fetch(
  "https://api.jup.ag/limit/v2/createOrder",
  fetchOpts
);
```
### Sign and submit the transaction on chain
Sending the transaction on chain does NOT mean that the transaction is successful. We recommend using the hash returned from `RPC_CONNECTION.sendRawTransaction()` and:
- Check if the hash appears on an explorer, or
- Use `RPC_CONNECTION.confirmTransaction()`
Note that transactions may not appear on chain for some time. We recommend retrying (repeat the entire flow) only if the transaction has landed on chain but has failed (likely due to an invalid input), or if the transaction does not appear on chain after ~2 minutes*.
```typescript
// Deserialise base64 tx response
const { order, tx } = await response.json<CreateOrderResponse>();
const txBuff = Buffer.from(tx, "base64");
const vtx = VersionedTransaction.deserialize(txBuff);

// Sign with wallet
vtx.sign([wallet]);
const rpcSendOpts: SendOptions = { skipPreflight: true };
const hash = await RPC_CONNECTION.sendRawTransaction(
  vtx.serialize(),
  rpcSendOpts
);
```