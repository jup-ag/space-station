---
sidebar_label: Payments API
description: Convert any token to USDC with Jupiter Payments API. A comprehensive guide for seamless crypto transactions.
title: "Payments API: Convert Any Token to USDC"
---

<head>
    <title>Jupiter Payments API Guide: Seamless Token Conversion to USDC</title>
    <meta name="twitter:card" content="summary" />
</head>


Jupiter's Payments API supports your payments use case. Utilize Jupiter + SolanaPay to pay for anything with any SPL token. With the Jupiter Payments API, you can specify an exact output token amount. The API doesn't just support output token to USDC, but to any SPL token!

## Use Case

Payments or interaction with a protocol can require an exact amount of token B. Users might not have token A or prefer to hold other tokens long term. The Jupiter API allow building a swap transaction to receive an exact amount of token A for a maximum in amount of token B.

## A Practical Example using the API

Bob is selling a delicious latte for 5 USDC. Alice wants to buy Bob's latte. The problem is, Alice only holds mSOL. Luckily, Bob can use the Jupiter Payments API to let Alice swap for exactly 5 USDC then transfer 5 USDC to his payment wallet. 

First, we need to show Alice how much mSOL she will have to spend for the latte. To do this we use the [`GET /quote`](/api-v6/get-quote) endpoint.

### 1. Get Quote
Retrieve a quote for swapping a specific amount of tokens.

**Endpoint:** [`GET /quote`](/api-v6/get-quote)

**URL:** `https://quote-api.jup.ag/v6/quote`

<details>
  <summary>Click to play video</summary>
  <video width="320" height="240" controls>
    <source src="/videos/payments-api.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</details>

```shell
curl -s 'https://quote-api.jup.ag/v6/quote?inputMint=mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=5000000&swapMode=ExactOut&slippageBps=50' | jq '.inAmount, .otherAmountThreshold'
```

**Parameters:**
- `inputMint`: The mint address of the input token (required).
- `outputMint`: The mint address of the output token (required).
- `amount`: The amount to swap, factoring in the token decimals (required).
- `slippageBps`: Slippage tolerance in basis points (default 50 unless `autoSlippage` is set to true).
- `swapMode`: Can be `ExactIn` or `ExactOut` (default `ExactIn`).
- `dexes`: List of DEXes to include (optional).
- `excludeDexes`: List of DEXes to exclude (optional).
- `restrictIntermediateTokens`: Restrict to a top token set for stable liquidity (optional).
- `onlyDirectRoutes`: Limit to single hop routes only (optional, default false).
- `asLegacyTransaction`: Use legacy transactions (optional, default false).
- `platformFeeBps`: Fee to charge in BPS (optional).
- `maxAccounts`: Max accounts to be used for the quote (optional).
- `autoSlippage`: Enable smart slippage (optional, default false).
- `maxAutoSlippageBps`: Max slippage BPS for smart slippage (optional).
- `autoSlippageCollisionUsdValue`: Custom USD value for calculating slippage impact (optional).

**Response**:
```json
{
    "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    "inAmount": "23698263",
    "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "outAmount": "5000000",
    "otherAmountThreshold": "23816755",
    "swapMode": "ExactOut",
    "slippageBps": 50,
    "platformFee": null,
    "priceImpactPct": "0",
    "routePlan": [
        {
            "swapInfo": {
                "ammKey": "8EzbUfvcRT1Q6RL462ekGkgqbxsPmwC5FMLQZhSPMjJ3",
                "label": "Raydium CLMM",
                "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
                "outputMint": "So11111111111111111111111111111111111111112",
                "inAmount": "23698263",
                "outAmount": "28158132",
                "feeAmount": "1992",
                "feeMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
            },
            "percent": 100
        },
        {
            "swapInfo": {
                "ammKey": "CSP4RmB6kBHkKGkyTnzt9zYYXDA8SbZ5Do5WfZcjqjE4",
                "label": "Whirlpool",
                "inputMint": "So11111111111111111111111111111111111111112",
                "outputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
                "inAmount": "28158132",
                "outAmount": "100994175",
                "feeAmount": "1",
                "feeMint": "So11111111111111111111111111111111111111112"
            },
            "percent": 100
        },
        {
            "swapInfo": {
                "ammKey": "5LnAsMfjG32kdUauAzEuzANT6YmM3TSRpL1rWsCUDKus",
                "label": "Whirlpool",
                "inputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
                "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                "inAmount": "100994175",
                "outAmount": "5000000",
                "feeAmount": "131292",
                "feeMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"
            },
            "percent": 100
        }
    ],
    "contextSlot": 267155237,
    "timeTaken": 0.010184745
}
```

:::info
Currently, only Orca Whirlpool, Raydium CLMM, and Raydium CPMM support ExactOut mode. All token pairs may not be available in this mode. To see more price options use ExactIn mode.
:::

Then Bob creates the transaction with the [`POST /swap`](/api-v6/post-swap) endpoint, and adds a 5 USDC token transfer from Alice to his payment wallet using the `destinationTokenAccount` argument, which Alice will verify, sign and send.

### 2. Post Swap
Returns a transaction that you can use from the quote you get from `GET /quote`.

**Endpoint:** [`POST /swap`](/api-v6/post-swap)

**URL:** `https://quote-api.jup.ag/v6/swap`

:::info
In the example bellow, we assume the associated token account exists on `destinationTokenAccount`.
:::

```js
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey, Connection, Transaction } from '@solana/web3.js';
import axios from 'axios';

const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const paymentAmount = 5_000_000; // 5 USDC
const bobWallet = new PublicKey('BUX7s2ef2htTGb2KKoPHWkmzxPj4nTWMWRgs5CSbQxf9');

// Replace these with actual values
const aliceWallet = { publicKey: new PublicKey('AliceWalletPublicKey') };
const connection = new Connection('https://api.mainnet-beta.solana.com');

async function getBobUSDCTokenAccount(): Promise<PublicKey> {
  return await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    USDC_MINT,
    bobWallet,
    true,
  );
}

async function fetchSwapTransaction(): Promise<any> {
  const bobUSDCTokenAccount = await getBobUSDCTokenAccount();
  
  const quoteResponse = {
    "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    "inAmount": "23698263",
    "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "outAmount": "5000000",
    "otherAmountThreshold": "23816755",
    "swapMode": "ExactOut",
    "slippageBps": 50,
    "platformFee": null,
    "priceImpactPct": "0",
    "routePlan": [
      {
        "swapInfo": {
          "ammKey": "8EzbUfvcRT1Q6RL462ekGkgqbxsPmwC5FMLQZhSPMjJ3",
          "label": "Raydium CLMM",
          "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
          "outputMint": "So11111111111111111111111111111111111111112",
          "inAmount": "23698263",
          "outAmount": "28158132",
          "feeAmount": "1992",
          "feeMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
        },
        "percent": 100
      },
      {
        "swapInfo": {
          "ammKey": "CSP4RmB6kBHkKGkyTnzt9zYYXDA8SbZ5Do5WfZcjqjE4",
          "label": "Whirlpool",
          "inputMint": "So11111111111111111111111111111111111111112",
          "outputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
          "inAmount": "28158132",
          "outAmount": "100994175",
          "feeAmount": "1",
          "feeMint": "So11111111111111111111111111111111111111112"
        },
        "percent": 100
      },
      {
        "swapInfo": {
          "ammKey": "5LnAsMfjG32kdUauAzEuzANT6YmM3TSRpL1rWsCUDKus",
          "label": "Whirlpool",
          "inputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
          "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "inAmount": "100994175",
          "outAmount": "5000000",
          "feeAmount": "131292",
          "feeMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"
        },
        "percent": 100
      }
    ],
    "contextSlot": 267155237,
    "timeTaken": 0.010184745
  };

  const data = JSON.stringify({
    quoteResponse,
    destinationTokenAccount: bobUSDCTokenAccount.toString(),
    userPublicKey: aliceWallet.publicKey.toString(),
    wrapAndUnwrapSol: true,
    useSharedAccounts: true,
    feeAccount: "YOUR_FEE_ACCOUNT", // replace with actual fee account if applicable
    trackingAccount: "YOUR_TRACKING_ACCOUNT", // replace with actual tracking account if applicable
    computeUnitPriceMicroLamports: 0,
    prioritizationFeeLamports: 0,
    asLegacyTransaction: false,
    useTokenLedger: false,
    dynamicComputeUnitLimit: true,
    skipUserAccountsRpcCalls: true,
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://quote-api.jup.ag/v6/swap',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching swap transaction:", error);
    throw error;
  }
}

async function executeSwapTransaction(swapTransaction: string, connection: Connection) {
  const transaction = Transaction.from(Buffer.from(swapTransaction, 'base64'));
  // Execute the transaction using your preferred method
  // e.g., sendTransaction(transaction, connection, { signers: [userSigner] });
}

// Example usage
(async () => {
  try {
    const transactions = await fetchSwapTransaction();
    const { swapTransaction } = transactions;

    await executeSwapTransaction(swapTransaction, connection);
    console.log('Swap transaction executed successfully');
  } catch (error) {
    console.error("Error in transaction execution:", error);
  }
})();

```

:::tip
If you want to add your own fees, check out: [Adding Your Own Fees](/docs/APIs/adding-fees)
:::
