---
sidebar_label: Price API
description: Get real-time on-chain prices for any token with Jupiter Price API. Supports up to 100 tokens per call. Easy integration for developers.
title: "Price API: Get On-Chain Price For Any Token"
---

<head>
    <title>Jupiter Price API: Unlock Real-Time On-Chain Pricing for Any Token</title>
    <meta name="twitter:card" content="summary" />
</head>


Utilizing the powerful Jupiter Price API makes getting precise and real-time pricing for all SPL tokens simple. With the ability to fetch prices for up to 100 tokens, you'll never need another price API again!

The Jupiter Price API comes with the option to specify another token as the base unit ([see "vsToken"](#vstoken)).

:::info
We support fetching the prices for up to 100 tokens in one call right now to manage performance. If you have a use case that is not supported yet, let us know in `#developer-support` in our discord: [discord.gg/jup](https://discord.gg/jup)
:::

## Usage

Jupiter Price API will always return **the unit buy price for the token** specified with the `ids` parameter. This price is based on the best pricing data available across all DEXes queried. Please remember the addresses and token tickers are *case-sensitive*.

For example, the most basic call will provide the unit price for the token based on the *buy amount of 1 unit of SOL*. <a id="vstoken"></a>

```json
# Unit price of SOL based on the buy amount of 1 unit of SOL
https://price.jup.ag/v6/price?ids=SOL

{
  "data": {
    "SOL": {
      "id": "So11111111111111111111111111111111111111112",
      "mintSymbol": "SOL",
      "vsToken": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "vsTokenSymbol": "USDC",
      "price": 30.389174403
    }
  },
  "timeTaken": 0.0003002400007972028
}
```

If you include a `vsToken`, it will change the buy token. For example, this call will return the unit price for *1 JUP, based on the buy amount of Bonk*. Simply put, the `vsToken` argument tells you how much of the `vsToken` (Bonk in this case) you will need to buy the target token (JUP). So for every one JUP we want to buy, we will need 44,580 Bonk.

```json
# Unit price of 1 JUP based on the buy amount of Bonk
https://price.jup.ag/v6/price?ids=JUP&vsToken=Bonk

{
    "data": {
        "JUP": {
            "id": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
            "mintSymbol": "JUP",
            "vsToken": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            "vsTokenSymbol": "Bonk",
            "price": 44580.353494
        }
    },
    "timeTaken": 0.0002948529999997618
}
```

Both the `ids` and `vsToken` can also be specified using input mints.

```json
# Specifying both id and vsToken with mint addresses
https://price.jup.ag/v6/price?ids=7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs&vsToken=So11111111111111111111111111111111111111112

{
  "data": {
    "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs": {
      "id": "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      "mintSymbol": "ETH",
      "vsToken": "So11111111111111111111111111111111111111112",
      "vsTokenSymbol": "SOL",
      "price": 43.28938739
    }
  },
  "timeTaken": 0.039186676000099396
}
```

## Try it out!

Try the API calls by making simple GET request via your browser or one of the terminal commands below:

<details>
  <summary>Click to play videos</summary>
  <video width="320" height="240" controls style={{ marginRight: '20px' }}>
    <source src="/videos/price-api-1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <video width="320" height="240" controls>
    <source src="/videos/price-api-2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</details>

```bash
curl -X 'GET' 'https://price.jup.ag/v6/price?ids=SOL'

curl -X 'GET' 'https://price.jup.ag/v6/price?ids=SOL&vsToken=mSOL'
```

## Endpoint

**Endpoint:** `https://price.jup.ag/v6/price`

**Query params**

- **ids** **`(*required)`** `(string)`
    Supports symbol or address of a token. You can also pass in an array of ids to with `,` as separator.
    - Address mode are case-sensitive
        - `mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So`
        - `mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So`,`So11111111111111111111111111111111111111112`
    - Symbol mode are case-sensitive
        - `SOL`, `BTC`, `mSOL`
- **vsToken** `(string)`
    Supports symbol or address of a token.
    - Defaults to `USDC`
    - Symbol mode are case-sensitive
        - `SOL`, `BTC`, `mSOL`
    - Address mode are case-sensitive
        - `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
## Response

**Typings**

- **id (`string`)** - Address of a token
- **mintSymbol (`string`)** - Symbol of id token
- **vsToken (`string`)** - Address of vs token
- **vsTokenSymbol (`string`)** - Symbol of vs token
- **price (`number`)** - Default to 1 unit of the token worth in USDC if vsToken is not specified
- **timeTaken (`number`)** - API internal compute response time

## HTTP Status Codes

|Code|Error Message|
|----|-------------|
|400|<ul><li> Amount lesser or equals to 0 </li><li> No routes found for trading pairs</li></ul>|
|404| Symbol or address not found for either input or vsToken|
|409| Duplicate symbol found for `input` or `vsToken`. <br></br><br></br> The server will respond an error structure which contains the conflict addresses. User will have to use address mode instead. <br></br><br></br>```{ "error": "Duplicated symbol found for PERP, use one of the address instead", "addresses": [ "D68NB5JkzvyNCZAvi6EGtEcGvSoRNPanU9heYTAUFFRa", "9BsnSWDPfbusseZfnXyZ3un14CyPMZYvsKjWY3Y8Gbqn", "EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3"  ]}```|
