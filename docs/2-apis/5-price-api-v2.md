---
sidebar_label: Price API V2
description: Get real-time on-chain prices for any token with Jupiter Price API V2.
title: "Price API V2: Improved On-Chain Price For Any Token"
---

<head>
    <title>Jupiter Price API V2: Improved On-Chain Pricing for Any Token</title>
    <meta name="twitter:card" content="summary" />
</head>

:::info
This endpoint is still in beta. This endpoint is subject to change, use of these APIs in production applications is not recommended.
:::

## GET /price

This endpoint retrieves price information for specified token IDs.

### Request

Query Parameters:

- `ids`: A comma-separated list of token IDs (mint addresses) for which to fetch prices. Maximum of 100 unique IDs allowed.
- `show_extra_info`: (Optional) A boolean flag to indicate whether to include additional information in the response, defaults to false if not specified.

**Rate Limits** 

This endpoint is rate limited to **100 requests/min**

### Response

The response is a JSON object with the following structure:

```json
{
  "data": {
    "mint": {           // Actual mint of the token 
      "id": string,          // Represents the mint ID as a string
      "type": string,        // Can be either "derivedPrice" or "buyPrice"
      "price": string,       // Represents the price as a string
      "extraInfo": {           // Optional nested extraInfo object
        "lastSwappedPrice": {
          "lastJupiterSellAt": number,    // i64, timestamp
          "lastJupiterSellPrice": string,    // String (optional)
          "lastJupiterBuyAt": number ,     // i64, timestamp
          "lastJupiterBuyPrice": string     // String (optional)
        },
        "quotedPrice": {
          "buyPrice": string,     // String (optional)
          "buyAt": number,     // i64, timestamp
          "sellPrice": string,    // String (optional)
          "sellAt": number     // i64, timestamp
        },
        "confidenceLevel": string   // String: "high", "medium", or "low"
      }
    }
  },
  "timeTaken": number   // Time taken for response
}

```

```tsx
// For dev integration
type GetPriceResponse = {
  data: Map<string, PriceInfo>;
  timeTaken: number;
}

type PriceInfo = {
  id: string;
  type: 'DerivedPrice' | 'BuyPrice';
  price: string;
  extraInfo?: ExtraInfo;
}

type ExtraInfo = {
  lastSwappedPrice: SwapPrice;
  quotedPrice: QuotedPrice;
  confidenceLevel: 'high' | 'medium' | 'low';
}

type SwapPrice = {
  lastJupiterSellAt: number | null;
  lastJupiterSellPrice: string | null;
  lastJupiterBuyAt: number | null;
  lastJupiterBuyPrice: string | null;
}

type QuotedPrice = {
  buyPrice: string | null;
  buyAt: number | null;
  sellPrice: string | null;
  sellAt: number | null;
}
```

When `show_extra_info` is `true`:

```json
{
    "data": {
        "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu": {
            "id": "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu",
            "type": "derivedPrice",
            "price": "0.301059297",
            "extraInfo": {
                "lastSwappedPrice": {
                    "lastJupiterSellAt": 1725274348,
                    "lastJupiterSellPrice": "0.30054988539228655",
                    "lastJupiterBuyAt": 1725273331,
                    "lastJupiterBuyPrice": "0.30600572028707806"
                },
                "quotedPrice": {
                    "buyPrice": "0.301755702",
                    "buyAt": 1725274375,
                    "sellPrice": "0.300362893",
                    "sellAt": 1725274375
                },
                "confidenceLevel": "high"
            }
        },
        "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN": {
            "id": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
            "type": "derivedPrice",
            "price": "0.729328",
            "extraInfo": {
                "lastSwappedPrice": {
                    "lastJupiterSellAt": 1725274364,
                    "lastJupiterSellPrice": "0.7288598887814777",
                    "lastJupiterBuyAt": 1725274326,
                    "lastJupiterBuyPrice": "0.7280607888542264"
                },
                "quotedPrice": {
                    "buyPrice": "0.729462",
                    "buyAt": 1725274375,
                    "sellPrice": "0.729193",
                    "sellAt": 1725274375
                },
                "confidenceLevel": "high"
            }
        }
    },
    "timeTaken": 0.010290459
}

```

When `show_extra_info` is `false`:

```json
{
    "data": {
        "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu": {
            "id": "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu",
            "type": "derivedPrice",
            "price": "0.300948886"
        },
        "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN": {
            "id": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
            "type": "derivedPrice",
            "price": "0.728673"
        }
    },
    "timeTaken": 0.004653109
}
```

If a token’s price is not found:

```json
{
    "data": {
        "So11111111111111111111111111111111111111112": {
            "id": "So11111111111111111111111111111111111111112",
            "type": "derivedPrice",
            "price": "134.170633378"
        },
        "8agCopCHWdpj7mHk3JUWrzt8pHAxMiPX5hLVDJh9TXWv": null
    },
    "timeTaken": 0.003186833
}
```

## Limitations

If the price for a token **cannot** be found, it is either because

1. The token is not tradable on Jupiter - it does not fit Jupiter’s routing criteria.
2. There is no route for this token to **SOL**.

 `sellPrice`, `sellAt` & `lastSwappedPrice` might be `null` in cases

1. `sellPrice` & `sellAt` is not cached and cannot be retrieved (in these cases `type` will be `buyPrice`, same as PriceV1).
2. `lastSwappedPrice` might be null if the token has not been traded recently or cannot be retrieved w
    1. Tokens that have not been traded via USDC in the last 3 days (more info available [here](https://www.notion.so/Introducing-the-Price-V2-API-89dec1b1db0f4b2bb34abe7833ce887f?pvs=21)).
    2. Note that this is only for swaps done via Jupiter, it will not be done for swaps done e.g. directly on Raydium’s platform

---

## Making sense of the data

| **Field** | **Explanation** |
| --- | --- |
| `type`  | `derivedPrice` is the midpoint between `buyPrice` and `sellPrice`. |
| `price`   | based on the `type`  above |
| `extraInfo` | [`extraInfo` Fields](https://www.notion.so/extraInfo-Fields-ceeddf73111c428891a16915aa9dba0c?pvs=21)  |
| `buyPrice` | An `Option<String>` representing the quoted buy price. |
| `sellPrice` | An `Option<String>` representing the quoted sell price. |
| `timeTaken` | A `f32` representing the time taken for the request. |
| `lastSwappedPrice` | A `SwapPrice` struct that holds the last **Jupiter** swapped price details. |

### `extraInfo` Fields

Note: This is flattened, please refer to the JSON response. 

| `lastJupiterSellAt` | Epoch seconds of the `lastJupiterSellPrice`. |
| --- | --- |
| `lastJupiterSellPrice` | Price of last **Jupiter** sell  |
| `lastJupiterBuyAt` | Epoch seconds of the `lastJupiterBuyPrice`. |
| `lastJupiterBuyPrice` | Price of last **Jupiter** buy  |
| `buyPrice` | An `Option<String>` representing the quoted buy price. |
| `buyAt` | Epoch seconds of when the buy quote was retrieved. |
| `sellPrice` | An `Option<String>` representing the quoted sell price. |
| `sellAt` | Epoch seconds of when the sell quote was retrieved. |
| `confidenceLevel` | A `String` indicating the confidence level (High, Medium, or Low). 

### Caching Mechanism

Price data from both buy side and sell side is cached for up to **15 seconds** - it is not meaningful to spam this endpoint 

Another point to note is that when the price is revalidated, the revalidated price will be cached so that all users get as fresh data as possible. 

### Price Revalidation Criteria

In the Price V2 API, we implement a process called ***price revalidation*** to deliver the freshest and most accurate data to users with every request. Price revalidation involves refreshing the cached price data before serving it, and it is triggered when the following criteria are met:

1. The token is among the top **200** most traded tokens of the day.
2. The price discrepancy between buy and sell prices exceeds 2% (`| buyPrice - sellPrice | > 2%`).

By revalidating, we ensure users receive the most current data, improving freshness and ensuring that previously covered arbitrage opportunities are updated accordingly.