---
sidebar_label: Payments API
description: Legacy documentation for V4 Payments API
title: V4 Payments API
---

<head>
    <title>Jupiter V4 Payments API [Legacy]</title>
    <meta name="twitter:card" content="summary" />
</head>

# Payments API: Convert any token to USDC

Jupiter supports the payments use case. You can use Jupiter + SolanaPay to pay for anything with any SPL token. With this technique you can specify an exact output token amount.

## Use Case

Payments or interaction with a protocol can require an exact amount of token B. Users might not have token A or prefer to hold other tokens long term. The Jupiter API allows for building a swap transaction to receive an exact amount of token A for a maximum in amount of token B.

## A Practical Example using the API

Bob is selling a delicious latte for 5 USDC, Alice only holds mSOL but Bob can use the Jupiter API to let Alice swap for exactly 5 USDC then transfer 5 USDC to his payment wallet.

First, we need to show Alice how much mSOL will he have to spend for the latte.

```shell
curl -s 'https://quote-api.jup.ag/v4/quote?inputMint=mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=5000000&swapMode=ExactOut&slippageBps=1' | jq '.data | .[0] | .inAmount, .otherAmountThreshold'
```

Parameters:

- The input mint is mSOL and the output mint is USDC.
- `swapMode` is `ExactOut`, as opposed to the default `ExactIn`.
- we want to receive amount=5000000, 5 USDC.

Response:

- `inAmount` is the quoted estimated amount of mSOL required to receive 5 USDC.
- `otherAmountThreshold` is the maximum in amount, the quote above with the slippage tolerance.

:::info
Currently, only Orca Whirlpool, Raydium CPAMM, and Raydium CLAMM support ExactOut mode. All tokens may not be available in this mode.
:::

Then Bob creates the transaction with the `/swap` endpoint, and adds a 5 USDC token transfer from Alice to his payment wallet using the `destinationWallet` argument, which Alice will verify, sign and send.

:::info
In the example bellow, we assume the associated token account exists on `destinationWallet`.
:::

```js
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token'; // version 0.1.x
import { PublicKey } from '@solana/web3.js';

const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const paymentAmount = 5_000_000; // 5 USDC
const merchantWallet = new PublicKey('BUX7s2ef2htTGb2KKoPHWkmzxPj4nTWMWRgs5CSbQxf9');

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
      userPublicKey: wallet.publicKey.toString(),
    })
  })
).json();

const { swapTransaction } = transactions;

const userDestinationTokenAccount = Token.getAssociatedTokenAddress(
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  USDC_MINT,
  wallet.publicKey,
);
const merchantTokenAccount = Token.getAssociatedTokenAddress(
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  USDC_MINT,
  merchantWallet,
  // @ts-ignore
  true,
);

// deserialize the transaction
const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
console.log(transaction);

// get address lookup table accounts
const addressLookupTableAccounts = await Promise.all(
  transaction.message.addressTableLookups.map(async (lookup) => {
    return new AddressLookupTableAccount({
      key: lookup.accountKey,
      state: AddressLookupTableAccount.deserialize(await connection.getAccountInfo(lookup.accountKey).then((res) => res.data)),
    });
  });
);
// console.log(addressLookupTableAccounts)

// decompile transaction message and add transfer instruction
var message = TransactionMessage.decompile(transaction.message,{addressLookupTableAccounts: addressLookupTableAccounts});
message.instructions.push(
  Token.createTransferInstruction(
    TOKEN_PROGRAM_ID,
    userDestinationTokenAccount,
    merchantTokenAccount,
    wallet.publicKey,
    [],
    paymentAmount,
  ),
);

// compile the message and update the transaction
transaction.message = message.compileToV0Message(addressLookupTableAccounts);

// ...Send to Alice to sign then send the transaction
```

:::tip
If you want to add your own fees, check out: [Adding Your Own Fees](/docs/legacy/apis/adding-fees)
:::