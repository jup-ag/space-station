---
sidebar_label: "Landing Transactions"
description: Optimize Transactions Landing Rate on Solana
title: Landing Transactions On Solana
---

At Jupiter, our primary objective is to provide the best developer experience and with the most competitive pricing for every swap.

Optimising transaction landing success rate can be challenging, especially during periods of network congestion when many users are competing to have their transactions processed.

Several common factors can affect the success of your transactions, including insufficient priority fees, inadequate slippage settings, and more.

## TLDR

We can read more detailed explanation on how to land Jupiter swap transactions with below but here is the TLDR if you just want to skip all the details below.

When you are getting a quote from the API:

```js
const quoteResponse = await (
  await fetch('https://quote-api.jup.ag/v6/quote\
&inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&restrictIntermediateTokens=true'
  )
).json();
```

- `restrictIntermediateTokens`: Mkae sure that you set this to `true`, if your route is routed through random intermediate tokens, it will fail more frequently. With this, we make sure that your route is only routed through highly liquid intermediate tokens to give you the best price and more stable route.

When you are getting a transaction from the API:

```js
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
      dynamicComputeUnitLimit: true, // Set this to true to get the best optimized CU usage.
      dynamicSlippage: { // This will set an optimized slippage to ensure high success rate
        maxBps: 300 // Make sure to set a reasonable cap here to prevent MEV
      },
	    prioritizationFeeLamports: {
        priorityLevelWithMaxLamports: {
          maxLamports: 10000000,
          priorityLevel: "veryHigh" // If you want to land transaction fast, set this to use `veryHigh`. You will pay on average higher priority fee.
        }
      }
    })
  })
).json();
```

When you are submitting the transaction, make sure that you are using one of the native Solana RPC:

- `Helius`: https://www.helius.dev/
- `Triton`: https://triton.one/

Yes, RPC matters. Use one of the above.

Bonus point, you can also submit your Jupiter transactions to the Jupiter transaction endpoint:

```js
fetch(`https://worker.jup.ag/send-transaction`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(transactionPayload),
});
```

Do note that this endpoint only works with Jupiter transactions.

Lastly, make sure that you submit your transaction using the [transactionSender](https://github.com/jup-ag/jupiter-quote-api-node/blob/main/example/utils/transactionSender.ts).

## On a High Level

You want to optimise your transaction landing rates by:

- Setting competitive priority fees
- Managing slippage effectively
- Setting the optimal amount of compute units
- Broadcasting transactions efficiently

Jupiter Swap API helps you improve transaction success with dynamic slippage and priority fees built directly into our API.

---

## Priority Fees

### What is priority fees?

**Priority Fees** are optional fees, priced in **micro-lamports** per **Compute Unit (CU)**, that you can add to your transaction on top of the base transaction fee (5,000 lamports / 0.000005 SOL) to get prioritised in the leader queue. By paying an additional fee, you improve the chances of landing your transactions more quickly.

Transactions submitted to the blockchain are prioritised based on a fee-bidding process. The higher the priority fee, the higher your transaction will be placed in the execution queue.

It’s important to note that overpaying for priority fees can be detrimental in the long run. If users continuously outbid each other to submit transactions, the overall fees required to process transactions across the network will increase over time.

Calculating the optimal priority fee—one that maximises your success rate without overpaying—can be increasingly challenging.

### How are priority fees calculated?

**priority fees = computeBudget * computeUnitPrice (CUP)**

When adding priority fees, consider whether the transaction involves writing to any accounts, and adjust the **Compute Unit Price (CUP)** accordingly.

### How Jupiter estimates priority fees?

Priority fees are estimated on the backend. We use Triton’s `getRecentPrioritizationFees` to obtain an estimate of the priority fees paid for the past 20 slots. Based on these recent priority fees, we can provide a better estimate for the amount of priority fee to be paid by categorising them into percentiles (medium, high, very high).

More info on trition, https://docs.triton.one/chains/solana/improved-priority-fees-api

### An example of how Jupiter estimates priority fees

```js
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
      prioritizationFeeLamports: {
        priorityLevelWithMaxLamports: {
          maxLamports: 4000000,
          global: false,
          priorityLevel: "veryHigh"
        }
      }
    })
  })
).json();
```

- `maxLamports`: Maximum cap of fee per transaction
- `global`: A boolean to decide whether to use a **global fee estimation** or a **local one** based on specific accounts
    - If global is `true`, the query considers fees across the entire network. Otherwise, it focuses on fees relevant to the **writable accounts** involved in the instruction.

    | Terminologies |  |
    | --- | --- |
    | Global Priority Fee | The priority fee estimation across the entire blockchain |
    | Local Fee Market | The priority fee estimation when editing a writable account (hot account) |

- `priorityLevel`: Provides an estimate of micro-lamports at each percentile over the past 20 slots, grouped by percentiles:
    - medium_PERCENTILE_BPS - 25%
    - High_PERCENTILE_BPS - 50%
    - very_high__PERCENTILE_BPS - 75%

    The percentile determines the **“aggressiveness”** of the transaction’s fee estimation. It tells the function to analyse fee trends from the most recent transactions, focusing on either the 25th, 50th, or 75th percentile of fees observed across recent slots. This percentile helps balance speed and cost:

    - Lower percentile transactions may experience delays if congestion increases.
    - Higher percentile transactions have better chances of confirmation but incur higher fees

:::info
`priorityLevel` is only available with Jupiter official API and Trition. Self-hosted binary that are not using Trition will not be able to use `priorityLevel`.
:::

---

## Dynamic Slippage

Slippage is an inherent part of trading on DEXes. It is the difference between the quoted amount (expected amount) of the swap and the the actual amount a user receives when the trade is executed.

Manually adjusting & resubmitting your transaction is a painstaking process. There is no standard slippage to set. Too much, and you may get MEV'ed; too little, and your transaction may fail and won't land.

When slippage is not set properly, this can directly affect the success rate of your transaction.

Dynamic Slippage features a real-time slippage optimisation mechanism, providing an dynamic calculation based for different token pair & their respective volatility to get the optimal amount of slippage for your transaction, minimising the need to manually tweak your slippage value & help you land more transactions.

### How does dynamic slippage work?

The frontend sends a payload to the backend with an additional `dynamicSlippage` field with `minBps` & `maxBps` set as the user's max slippage. The current `maxBps` default is 300bps.

```js
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
      dynamicSlippage: {"minBps": 50, "maxBps": 300},
    })
  })
).json();
```

The backend returns a response with a serialised transaction that is already using the final optimised slippage and a `dynamicSlippageReport` for visibility/error catching.

```js
{
    "swapTransaction": "// serialized transaction",
    "lastValidBlockHeight": 266691690,
    "prioritizationFeeLamports": 384,
    "computeUnitLimit": 107468,
    "prioritizationType": {
        "computeBudget": {
            "microLamports": 3577,
            "estimatedMicroLamports": 3577
        }
    },
    "dynamicSlippageReport": {
        // the final optimized slippage bps used in the serialized transaction
        "slippageBps": 12,
        // the incurred out amount observed from simulating the transaction
        "otherAmount": 8759842,
        // the simulated incurred slippage during optimization
        // negative integer refers to the loss in bps while positive refers to the gain
        "simulatedIncurredSlippageBps": -8,
        // an amplifcation ratio we use to add a buffer to the estimated slippage
        "amplificationRatio": "1.5"
    },
    "simulationError": null
}
```

### Dynamic CU Estimation

```js
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
      dynamicComputeUnitLimit: true
    })
  })
).json();
```

`dynamicComputeUnitLimit`- when `true` allows the transaction to utilise a dynamic compute unit limit rather than the standard maximum limit, which is set to 1,400,000 compute units.

By setting this parameter to `true`, you enable the transaction to use the best CU limit based on transaction simulation.

---

## Transaction Broadcasting

Transaction broadcasting is the process of submitting a signed transaction to the network so that validators can verify, process, and include it in a block.

- After you’ve built and signed your transaction, the signed transaction is serialized into a binary format and submitted to a Solana RPC node, where it is propagated across the network.
- The RPC node will verify and relay the transaction to the leader validator responsible for producing the next block.

### Stake-weighted Quality of Service

**Stake-Weighted Quality of Service (SWQoS)** is an implemented feature that, when enabled, allows leaders (block producers) to identify and prioritise transactions proxied through a staked validator as an additional Sybil resistance mechanism.

The more stake the validator holds, the better the chances of getting their transactions included in blocks.

Validators with higher stakes are granted more favourable access to submit transactions, ensuring they receive a larger share of block space. This mechanism helps maintain network security and mitigate Sybil attacks by preventing low-stake validators from spamming the network.

Current RPC providers that provides SWQoS are Helius and Triton.

### SWQoS & Priority Fees

Both mechanisms are used to improve network performance, but they work differently.

- SWQoS ensures that staked validators have better access to the network, reducing the likelihood of transactions being delayed or dropped due to network congestion.
- SWQoS guarantees that transactions sent from staked validators have a prioritised pathway to reach the leader.
- Priority fees impact how transactions are ordered and processed once they are within the leader’s queue.
- Priority fees prioritize transactions based on the fees paid to the leader, ensuring quicker execution for users willing to pay more.

:::info
This is why it is important to submit your transactions to Solana native RPC providers like Helius and Triton. They have staked connections that can help you to land your transactions better.

- `Helius`: https://www.helius.dev/
- `Triton`: https://triton.one/
:::

---

## What is Jito?

**Jito Labs** is a leading MEV infrastructure company building high-performance systems to scale Solana and maximise validator rewards.

Jito Tips on Solana are part of a mechanism that enables searchers—such as high-frequency traders or MEV participants—to prioritise their transactions by offering tips to validators. These tips incentivise validators to include specific transaction bundles during the block production process, helping users land critical transactions in competitive scenarios.

Leveraging Jito Tips can significantly improve your chances of landing transactions in time-sensitive environments, such as arbitrage trades or automated DeFi operations. This system provides a faster, more reliable way to execute critical transactions, giving participants an edge by minimising latency and enhancing the predictability of transaction inclusion.

At Jupiter, we provide users with the option of sending their transactions via Jito tips to help you land transactions much faster.

Jito also allows users to bundle transactions, ensuring they land on the blockchain exactly as intended, which mitigates risks such as front-running and sandwich attacks. This mechanism helps protect both users and decentralised applications (dApps) that rely on time-sensitive transactions.

Jito achieves this through features like low-latency transaction streaming, which ensures fast execution, and atomic transaction bundles, which allow multiple related transactions to execute together or not at all. This bundling process provides “revert protection,” meaning that if any part of a bundled sequence fails, the entire bundle is reverted, reducing exposure to harmful MEV strategies.

Jupiter also includes MEV protection on our frontend, sending your transaction directly to the Jito validator.

More info on Jito tip & MEV protection: https://docs.jito.wtf/en/latest/lowlatencytxnsend.html#getting-started.

To automatically include Jito tips in your Jupiter swap transaction:

```js
const { swapTransaction } = await (
  await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
      prioritizationFeeLamports: {
        jitoTipLamports: 1000000
      }
    })
  })
).json();
```

Please make sure that you are only submitting your transactions to Jito endpoints if you have Jito tips attached. If not, it will not work.
