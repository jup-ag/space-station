---
sidebar_label: Price API V2 (Beta)
description: Get real-time on-chain prices for any token with Jupiter Price V2 API (Beta).
title: "Price API V2 (Beta)"
---

<head>
    <title>Jupiter API V2 (Beta)</title>
    <meta name="twitter:card" content="summary" />
</head>

:::info
This endpoint is still in beta. This endpoint is subject to change, use of these APIs in production applications is not recommended.
:::

## GET /price

This endpoint retrieves price information for specified token IDs.

### Request

Query Parameters:

- `ids`: A comma-separated list of token IDs (mint addresses) for which to fetch prices. Maximum of 10 unique IDs allowed.
- `show_extra_info`: (Optional) A boolean flag to indicate whether to include additional information in the response, defaults to false if not specified.

### Response

The response is a JSON object with the following structure:

```rust
#[serde(rename_all = "camelCase")]
pub struct GetPriceResponse {
    pub data: HashMap<String, PriceInfo>,
    pub time_taken: f32
}

#[serde(rename_all = "camelCase")]
pub struct ExtraInfo {
    pub last_swapped_price: SwapPrice,
    pub quoted_price: QuotedPrice,
    pub confidence_level: String, // High, medium or low
}

#[serde(rename_all = "camelCase")]
pub struct SwapPrice {
	/// These fields might return NULL if we aren't able to retrieve last traded data
    pub last_jupiter_sell_at: Option<i64>,
    pub last_jupiter_sell_price: Option<String>,
    pub last_jupiter_buy_at: Option<i64>,
    pub last_jupiter_buy_price: Option<String>,
}

#[serde(rename_all = "camelCase")]
pub struct QuotedPrice {
    pub buy_price: Option<String>,
    pub buy_at: Option<i64>,
    pub sell_price: Option<String>,
    pub sell_at: Option<i64>,
}
```

- *https://api.jup.ag/v2/price?ids=CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu,JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN&showExtraInfo=true*

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

If price for a token **cannot** be found, it is either because

1. The token is not tradable on Jupiter - it does not fit into Jupiter’s routing criteria.
2. There is no route for this token to **SOL**.

 `sellPrice`, `sellAt` & `lastSwappedPrice` might be `null` in cases

1. `sellPrice` & `sellAt`  cannot be retrieved within 2 seconds.
2. `lastSwappedPrice` might be null if the token has not been traded recently or cannot be retrieved within 1 second.
    1. Usually meme coins that have lost steam.
    2. Note that this is only for swaps done via Jupiter, it will not be done for swaps done for e.g. directly on Raydium’s platform

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

Note: This is flattened, please refer to the JSON [response](https://www.notion.so/Introducing-the-Price-V2-API-89dec1b1db0f4b2bb34abe7833ce887f?pvs=21) 

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

More explained below.

### Differences between PriceV1 & PriceV2

|  | v1 | v2 |
| --- | --- | --- |
| `vsTokens` | ✅ | ❌ |
| `Symbol` | ✅ | ❌ |
| No. of mints on request | **100** | **10** |
| `showExtraInfo`  | ❌ | ✅ |
| `price` | `buyPrice` | `derivedPrice`  using `buyPrice` & `sellPrice` |
| `confidenceLevel` | ❌ | ✅ |