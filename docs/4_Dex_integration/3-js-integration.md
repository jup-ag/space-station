---
sidebar_position: 3
---

# JS Integration (Deprecated)

:::caution We are deprecating our JS Integration, please check out our Rust Integration.
:::

To facilitate integration of your DEX with [@jup-ag/core](https://www.npmjs.com/package/@jup-ag/core) you need to provide a DEX SDK that allow us to implement the following interface:

```js
interface Amm {
  /* Reserve token mints for the purpose of routing, usually only 2 elements */
  reserveTokenMints: PublicKey[];

  getAccountsForUpdate(): PublicKey[];
  update(accountInfoMap: AccountInfoMap): void;
  getQuote(quoteParams: QuoteParams): Quote;
}

// Implementation preferred constructor params
class MyAmm implements Amm {
  constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>, params: MyParams) {
    // In most cases the accountInfo of the AMM state is enough to create all the data necessary
    // to implement the interface.
    //
    // If there is some data that isn't in the state but changes at low frequency
    // we recommend providing this data through params.
  }
}
```

`getAccountsForUpdate` provides the necessary accounts to fetch, they are batched and cached by the Jupiter core SDK and delivered through `update` to the AMM instance, there might be multiple calls to `getQuote` using the same cache so **we do not allow any network calls** in the entire implementation.

Other type:

```js
interface QuoteParams {
  sourceMint: PublicKey;
  destinationMint: PublicKey;
  amount: JSBI;
  swapMode: SwapMode;
}

 interface Quote {
  notEnoughLiquidity: boolean;
  inAmount: JSBI;
  outAmount: JSBI;
  feeAmount: JSBI;
  feeMint: TokenMintAddress;
  feePct: number;
  priceImpactPct: number;
}

interface SwapParams {
  sourceMint: PublicKey;
  destinationMint: PublicKey;
  userSourceTokenAccount: PublicKey;
  userDestinationTokenAccount: PublicKey;
  userTransferAuthority: PublicKey;
  inAmount: JSBI;
}
```

## Pseudocode Example

```js
export class MyAmm implements Amm {
  private swapState: SwapState;
  private tokenAccounts: TokenAccountInfo[] = [];

  // Each class handles one pool, for if the AMM has both USDC-USDT and SOL-USDC pools, it will have
  // handle just one pool at the time. Let's say we are calculating for the USDC-USDT pool, this
  // will only do it for the USDC-USDT pool.
  constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>, public label: string) {
    this.id = address.toBase58();
    this.swapState = decodeSwapState(address, accountInfo.data);
  }

  // Here, we will query for a list of PublicKey's in one call with `getMultipleAccountInfos`.
  getAccountsForUpdate(): PublicKey[] {
    return [this.swapState.tokenAccountA, this.swapState.tokenAccountB];
  }

  // Once we have the accountInfo's from the above call, we pass them into this method.
  update(accountInfoMap: AccountInfoMap): void {
    const tokenAccountInfos = mapAddressToAccountInfos(accountInfoMap, this.getAccountsForUpdate());

    this.tokenAccounts = tokenAccountInfos.map((info) => {
      const tokenAccount = deserializeAccount(info.data);
      if (!tokenAccount) {
        throw new Error('Invalid token account');
      }
      return tokenAccount;
    });
  }

  // Now we have the necessary data to calculate the Quote.
  getQuote({ sourceMint, destinationMint, amount }: QuoteParams): Quote {
    if (this.tokenAccounts.length === 0) {
      throw new Error('Unable to fetch accounts for specified tokens.');
    }

    let quote = Calculator.constantProductSwapCalculate(this.tokenAccounts, sourceMint, destinationMint, amount);
    return quote;
  }
}
```

**Notes:**

- We need to be able to fork your SDK as we want to guarantee our users we can maintain support and fix potential bugs related to integrated DEXs