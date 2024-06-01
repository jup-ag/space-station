---
sidebar_label: Payments API
description: Convert any token to USDC with Jupiter Payments API. A comprehensive guide for seamless crypto transactions.
title: "Payments API: Convert Any Token to USDC"
---

<head>
    <title>Jupiter Payments API Guide: Seamless Token Conversion to USDC</title>
    <meta name="twitter:card" content="summary" />
</head>

<style jsx>
{`
  .api-method-box {
    border-radius: 8px;
    margin: 16px 0;
    display: inline;
    padding: 4px;
    font-weight: 700;
    margin-right: 8px;
    font-size: 12px;
    color: white
  }

.get {
  border: 1px solid #018847;
  background-color: #018847 !important;
}

.post {
  border: 1px solid #eaba0c;
  background-color: #eaba0c !important;
}

  .api-method-path {
    font-size: 14px;
    display: inline;
  }
`}</style>

Jupiter's Payments API supports your payments use case. Utilize Jupiter + SolanaPay to pay for anything with any SPL token. With the Jupiter Payments API, you can specify an exact output token amount. The API doesn't just support output token to USDC, but to any SPL token!

## Use Case

Payments or interaction with a protocol can require an exact amount of token B. Users might not have token A or prefer to hold other tokens long term. The Jupiter API allow building a swap transaction to receive an exact amount of token A for a maximum in amount of token B.

## A Practical Example using the API

Bob is selling a delicious latte for 5 USDC. Alice wants to buy Bob's latte. The problem is, Alice only holds mSOL. Luckily, Bob can use the Jupiter Payments API to let Alice swap for exactly 5 USDC then transfer 5 USDC to his payment wallet. 

First, we need to show Alice how much mSOL she will have to spend for the latte. To do this we use the [`GET /quote`](/api-v6/get-quote) endpoint.

### 1. Get Quote
Retrieve a quote for swapping a specific amount of tokens.

<details>
  <summary>Click to play video</summary>
  <video width="320" height="240" controls>
    <source src="/videos/payments-api.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</details>

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://quote-api.jup.ag/v6/quote</p>
    </div>
  </summary>

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

<details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

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
</details>

<details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{
    "errorCode": "string",
    "error": "string"
}
```
</details>
</details>

:::info
Currently, only Orca Whirlpool, Raydium CLMM, and Raydium CPMM support ExactOut mode. All token pairs may not be available in this mode. To see more price options use ExactIn mode.
:::

Then Bob creates the transaction with the [`POST /swap`](/api-v6/post-swap) endpoint, and adds a 5 USDC token transfer from Alice to his payment wallet using the `destinationTokenAccount` argument, which Alice will verify, sign and send.

### 2. Post Swap
Returns a transaction that you can use from the quote you get from `GET /quote`.

**Try it live in the playground:**
[`POST https://quote-api.jup.ag/v6/swap`](/api-v6/post-swap)

:::info
In the example below, we assume the associated token account exists on `destinationTokenAccount`.
:::

```js
import { PublicKey, Connection, Keypair, VersionedTransaction, VersionedMessage, TransactionMessage } from '@solana/web3.js';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import fetch from 'node-fetch';

// Replace with actual valid base58 public keys
const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');  // USDC mint address
const bobWalletPublicKey = new PublicKey('BUX7s2ef2htTGb2KKoPHWkmzxPj4nTWMWRgs5CSbQxf9');  // Bob's wallet address

// Establish a connection to the Solana cluster
const connection = new Connection('https://api.mainnet-beta.solana.com');

// Replace these with actual valid base58 public keys
const feeAccount = new PublicKey('ReplaceWithActualValidBase58Key');  // Replace with actual fee account public key
const trackingAccount = new PublicKey('ReplaceWithActualValidBase58Key');  // Replace with actual tracking account public key

// Ensure these are valid base58 strings
console.log("USDC_MINT:", USDC_MINT.toBase58());
console.log("bobWalletPublicKey:", bobWalletPublicKey.toBase58());
console.log("feeAccount:", feeAccount.toBase58());
console.log("trackingAccount:", trackingAccount.toBase58());

// Get the associated token account for Bob's wallet
async function getBobUSDCTokenAccount(bobWalletKeypair) {
  const bobUSDCTokenAccount = await getAssociatedTokenAddress(
    USDC_MINT,
    bobWalletKeypair.publicKey,
    true,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
  );
  return bobUSDCTokenAccount;
}

// Step 1: Fetch swap info
async function fetchSwapInfo() {
  const response = await fetch('https://quote-api.jup.ag/v6/quote?inputMint=mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=5000000&swapMode=ExactOut&slippageBps=50');
  const data = await response.json();
  return {
    inAmount: data.inAmount,
    otherAmountThreshold: data.otherAmountThreshold,
    quoteResponse: data
  };
}

// Step 2: Fetch the swap transaction
async function fetchSwapTransaction(swapUserKeypair, bobUSDCTokenAccount, swapInfo) {
  const requestBody = {
    userPublicKey: swapUserKeypair.publicKey.toBase58(),
    wrapAndUnwrapSol: true,
    useSharedAccounts: true,
    feeAccount: feeAccount.toBase58(),  // Use actual key
    trackingAccount: trackingAccount.toBase58(),  // Use actual key
    prioritizationFeeLamports: 0,  // No prioritization fee in this case
    asLegacyTransaction: false,
    useTokenLedger: false,
    destinationTokenAccount: bobUSDCTokenAccount.toBase58(),
    dynamicComputeUnitLimit: true,
    skipUserAccountsRpcCalls: true,
    quoteResponse: swapInfo.quoteResponse
  };

  const response = await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const { swapTransaction, lastValidBlockHeight } = await response.json();
  return { swapTransaction, lastValidBlockHeight };
}

// Step 3: Send the transaction to the Solana blockchain
async function sendTransaction(swapTransaction, swapUserKeypair, lastValidBlockHeight) {
  const versionedMessage = VersionedMessage.deserialize(Buffer.from(swapTransaction, 'base64'));
  const transaction = new VersionedTransaction(versionedMessage);

  // Get the recent blockhash
  // Using 'finalized' commitment to ensure the blockhash is final and secure
  // You may experiment with 'processed' or 'confirmed' for fetching blockhash to increase speed
  // Reference: https://solana.com/docs/rpc/http/getlatestblockhash
  const bhInfo = await connection.getLatestBlockhashAndContext({ commitment: "finalized" });
  transaction.recentBlockhash = bhInfo.value.blockhash;
  transaction.feePayer = swapUserKeypair.publicKey;

  // Print keys involved in the transaction to diagnose issues
  console.log("Keys in Transaction:", transaction.instructions.flatMap(instr => instr.keys.map(k => k.pubkey.toBase58())));

  // Sign the transaction with the swap user's keypair
  transaction.sign([swapUserKeypair]);

  // Simulate the transaction to ensure it will succeed
  // Using 'finalized' commitment for the simulation to match the security level of the actual send
  // You may experiment with 'confirmed' or 'processed' to simulate faster, but keep in mind the risks
  // Reference: https://solana.com/docs/core/transactions#commitment
  const simulation = await connection.simulateTransaction(transaction, { commitment: "finalized" });
  if (simulation.value.err) {
    throw new Error(`Simulation failed: ${simulation.value.err.toString()}`);
  }

  // Send the transaction
  try {
    const signature = await connection.sendTransaction(transaction, {
      // NOTE: Adjusting maxRetries to a lower value for trading, as 20 retries can be too much
      // Experiment with different maxRetries values based on your tolerance for slippage and speed
      // Reference: https://solana.com/docs/core/transactions#retrying-transactions
      maxRetries: 5,
      skipPreflight: true,
      preflightCommitment: "finalized",
    });

    // Confirm the transaction
    // Using 'finalized' commitment to ensure the transaction is fully confirmed
    // Reference: https://solana.com/docs/core/transactions#confirmation
    const confirmation = await connection.confirmTransaction({
      signature,
      blockhash: bhInfo.value.blockhash,
      lastValidBlockHeight: bhInfo.value.lastValidBlockHeight,
    }, "finalized");

    if (confirmation.value.err) {
      throw new Error(`Transaction not confirmed: ${confirmation.value.err.toString()}`);
    }

    console.log("Confirmed: ", signature);
  } catch (error) {
    console.error("Failed: ", error);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    // Generate keypairs for swap user and Bob's wallet, replace with actual keypairs for real usage
    const swapUserKeypair = Keypair.generate();
    const bobWalletKeypair = Keypair.generate();  // Replace this with Bob's actual keypair

    // Ensure the bobUSDCTokenAccount is correct
    const bobUSDCTokenAccount = await getBobUSDCTokenAccount(bobWalletKeypair);

    // Step 1: Fetch swap info
    const swapInfo = await fetchSwapInfo();

    // Step 2: Fetch the swap transactions
    const { swapTransaction, lastValidBlockHeight } = await fetchSwapTransaction(swapUserKeypair, bobUSDCTokenAccount, swapInfo);

    // Step 3: Send the transaction to the blockchain
    await sendTransaction(swapTransaction, swapUserKeypair, lastValidBlockHeight);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

:::tip
If you want to add your own fees, check out: [Adding Your Own Fees](/docs/APIs/adding-fees)
:::
