---
sidebar_label: "Example: React Hook"
description: Integrate Jupiter into your React App.
---
# Integrate Jupiter into your React App

Use the React-Hook if you'd like to embed Jupiter into your own React UI.

## Pre-requisites

Setup your [Wallet Adapter](https://github.com/solana-labs/wallet-adapter/blob/master/APP.md) for your frontend application.

## Installation

Open your terminal, navigate to your project directory, and run the command below.

```js
npm i @jup-ag/core @jup-ag/react-hook jsbi
```

Meanwhile, our published package can be found here [NPM](https://www.npmjs.com/package/@jup-ag/react-hook).

## Usage

```js
import { TOKEN_LIST_URL } from "@jup-ag/core";
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
```

### Create a React component

#### React

```js
import React, { useEffect, useState } from "react";

const JupiterApp = () => {
  return (
    <>
      <div style={{ fontWeight: '600', fontSize: 16, marginTop: 24 }}>
        Hook example
      </div>
      <div>Number of tokens:</Text>
      <div>Number of input tokens</Text>
      <div>Possible number of routes:</Text>
      <div>
        Best quote:
      </div>
    </>
  )
}

export default JupiterApp;
```

#### React Native

```js
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const JupiterApp = () => {
  return (
    <>
      <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 24 }}>
        Hook example
      </Text>
      <Text>Number of tokens:</Text>
      <Text>Number of input tokens</Text>
      <Text>Possible number of routes:</Text>
      <Text>
        Best quote:
      </Text>
    </>
  )
}
export default JupiterApp;
```

### Fetch the list of tokens

1. Declare the interface.

```js
export interface Token {
  chainId: number; // 101,
  address: string; // 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  symbol: string; // 'USDC',
  name: string; // 'Wrapped USDC',
  decimals: number; // 6,
  logoURI: string; // 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
  tags: string[]; // [ 'stablecoin' ]
}
```

2.  Fetch token list from Jupiter API.

```js
import { TOKEN_LIST_URL } from "@jup-ag/core";

const JupiterApp = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  useEffect(() => {
    // Fetch token list from Jupiter API
    fetch(TOKEN_LIST_URL[ENV])
      .then(response => response.json())
      .then(result => setTokens(result))
  }, [])
  // ...
}

export default JupiterApp;
```

3. Then, it's time to look for which token you would like to swap, from the `tokens` array.  In this case, we will swap from *USDC* to *USDT*.

```js
import { TOKEN_LIST_URL } from "@jup-ag/core";

const JupiterApp = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  console.log(tokens) // Look for tokens

  const [inputMint] = useState<PublicKey>(new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"))
  const [outputMint] = useState<PublicKey>(new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"))
  // ...
}
```

### Attach useJupiter hooks

```js
import { TOKEN_LIST_URL } from "@jup-ag/core";

const JupiterApp = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [inputMint] = useState<PublicKey>(new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"))
  const [outputMint] = useState<PublicKey>(new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"))

  useEffect(() => {
      // Fetch token list from Jupiter API
      fetch(TOKEN_LIST_URL[ENV])
        .then(response => response.json())
        .then(result => setTokens(result))
    }, [])

  // Attach Jupiter hook
  const jupiter = useJupiter({
    amount: JSBI.BigInt(1 * (10 ** 6)), // raw input amount of tokens
    inputMint,
    outputMint,
    slippage: 1, // 1% slippage
    debounceTime: 250, // debounce ms time before refresh
  })

  // ...
}

export default JupiterApp;
```

:::info How do you calculate the amount to pass in?
Every token have their own decimals place, in our example, both USDC and USDT pairs have their decimals place at **6**.
Assuming in the UI, user entered a value of **1 USDC**, we can derive the amount to pass into Jupiter to be **1** multiplied by (**10** exponent of **6**)

```js
const inputAmount = 1; // UI input
const inputTokenInfo = tokens.find(item => item.address === "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") // Token info
const amount = JSBI.BigInt(inputAmount * (10 ** inputTokenInfo.decimals)) // Amount to send to Jupiter
```
:::

### Display the result

Tab

### Performing a swap

Once you have acquired all the meaningful information from the Jupiter instance, it is time we perform a swap with the exchange() function.

:::caution
You would need a `wallet` and `connection` instance to perform a swap, the easiest way to interface with your wallet (Phantom, Sollet, Solflare...) would be the use of [@solana/wallet-adapter-react library](https://github.com/solana-labs/wallet-adapter), visit the [documentation](https://github.com/solana-labs/wallet-adapter/blob/master/APP.md) for more info.
:::

Tab

:::info For advanced developers, custom wallet instance can be used as long as it fulfils the interface requirement of:
```js
SignerWalletAdapter from '@solana/wallet-adapter-base/lib/signer.d.ts'
```
Alternatively,
```js
interface CustomWallet {
    publicKey: PublicKey
    sendTransaction(transaction: Transaction, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transaction: Transaction[]): Promise<Transaction[]>;
}
```
:::

## Example

If you need more help, pay a visit to [Example (React, Next.js)](https://github.com/jup-ag/jupiter-nextjs-example) or, just fork and start there.