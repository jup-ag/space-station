---
sidebar_label: "Get Started"
description: "Get Started with setting up libraries, connection and local wallet to build with Jupiter API."
title: "Get Started"
---

<head>
    <title>Get Started</title>
    <meta name="twitter:card" content="summary" />
</head>

To use Jupiter and interact with the Solana network, you need to install the necessary libraries and set up a connection to the network via an RPC endpoint.

:::note about the guide
In this guide, we'll be using the most used library, `web3.js` to get you started. Do note that there are other libraries using Rust instead of Javascript.
:::

## 1. Install required libraries

Running this example requires a minimum of [NodeJS 16](https://nodejs.org/en/). In your command line terminal, install the libraries.

The current documentation walkthrough was developed with
- `"@solana/web3.js": "^1.95.4"`
- `"@coral-xyz/anchor": "^0.30.1"`
- `"@solana/spl-token": "^0.4.9"`
- `"@jup-ag/referral-sdk": "^0.1.7"`

```bash
npm i @solana/web3.js@1
npm i @coral-xyz/anchor
npm i cross-fetch
npm i bs58
```

## 2. Import from libraries

Next, create a new Javascript/Typescript file and import these interfaces and functions.

```jsx
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import { Wallet } from '@coral-xyz/anchor';
import bs58 from 'bs58';
import fetch from 'cross-fetch';
```

## 3. Set up Connection

Solana provides a [default RPC endpoint](https://solana.com/docs/core/clusters) to get started and in the example code, we will be using that. However, as your application grows, we recommend you to always use your own or provision a 3rd party provider’s RPC endpoint such as [Helius](https://helius.dev/) or [Triton](https://triton.one/).

```jsx
const connection = new Connection('https://api.mainnet-beta.solana.com');
```

## 4. Set up your Wallet

You can paste in your private key for testing purposes but this is not recommended for production applications.

If you want to store your private key in the project directly, you can do it via a `.env` file.

```jsx
// index.js
import dotenv from 'dotenv';

const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));

console.log(wallet.publicKey.toBase58());
```

```
// .env
PRIVATE_KEY=""
```

If you have [created a wallet via Solana CLI](https://solana.com/docs/intro/installation#solana-cli-basics) and your private key is stored outside of your project, you can do it this way instead.

```jsx
import fs from 'fs';

const privateKeyArray = JSON.parse(fs.readFileSync('/Users/user/.config/solana/id.json', 'utf8').trim());

const wallet = new Wallet(Keypair.fromSecretKey(new Uint8Array(privateKeyArray)));

console.log(wallet.publicKey.toBase58());
```

Now, you are all set up and ready to use one of our product’s APIs and send a transaction to the Solana network!
