# Price API

The Jupiter Price API aims to make getting precise and real-time pricing for all SPL tokens as powerful and simple as possible, with options for customising the comparison token and liquidity depth.

:::info
We support fetching the prices for up to 100 tokens in one call right now to manage performance. If you have a use case that is not supported yet, let us know in #developer-support in our discord: [discord.gg/jup](https://discord.gg/jup)
:::

## Usage

Regardless of usage, the price API will always return **the unit buy price for the token** specified with the `ids` parameter, based on the best price available across all the DEXes.

For example, the most basic call will provide the unit price for the token based on the *buy amount of 1 unit of SOL*.

```json
# Unit price of SOL based on the buy amount of 1 unit of SOL
https://price.jup.ag/v4/price?ids=SOL

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
    "timeTaken": 0.0003002400007972028,
    "contextSlot": 155800359
}
```

If you include a `vsAmount`, it will provide the unit price for the token for the given amount of USDC. This is useful if you want the price based on a deeper liquidity depth, not just the best available buy price.

```json
# Unit price of SOL based on the buy amount of 10000000 USDC
https://price.jup.ag/v4/price?ids=SOL&vsAmount=1000000

{
    "data": {
        "SOL": {
            "id": "So11111111111111111111111111111111111111112",
            "mintSymbol": "SOL",
            "vsToken": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "vsTokenSymbol": "USDC",
            "price": 30.658310682
        }
    },
    "timeTaken": 0.25520144999973127,
    "contextSlot": 155800477
}
```

You can quote for multiple tokens at once with vsAmount. We can do up to 100 tokens in one call right now, talk to us if you have a use case for more.

```json
// Unit price of BTC, MER, and FTT based on the buy amount of 100 USDC
https://price.jup.ag/v4/price?ids=BTC,MER,FTT&vsAmount=100

{
    "data": {
        "BTC": {
            "id": "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
            "mintSymbol": "BTC",
            "vsToken": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "vsTokenSymbol": "USDC",
            "price": 19357.33643
        },
        "MER": {
            "id": "MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K",
            "mintSymbol": "MER",
            "vsToken": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "vsTokenSymbol": "USDC",
            "price": 0.014144
        },
        "FTT": {
            "id": "EzfgjvkSwthhgHaceR3LnKXUoRkP6NUhfghdaHAj1tUv",
            "mintSymbol": "FTT",
            "vsToken": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "vsTokenSymbol": "USDC",
            "price": 24.03846153
        }
    },
    "timeTaken": 0.15567142300096748,
    "contextSlot": 155800754
}
```

If you include a `vsToken`, it will change the buy token. For example, this call will return the unit price for *DUST based on the buy amount of 1 SOL*.

```json
# Unit price of BTC based on the buy amount of 1 ETH
https://price.jup.ag/v4/price?ids=BTC&vsToken=ETH

{
    "data": {
        "BTC": {
            "id": "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
            "mintSymbol": "BTC",
            "vsToken": "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
            "vsTokenSymbol": "ETH",
            "price": 14.689248
        }
    },
    "timeTaken": 0.019405270000788732,
    "contextSlot": 155800845
}
```

Of course, if you include both the `vsToken` and `vsAmount`, you will get the unit price of the token based on both criteria. This example will return the unit price of *DUST if the buy amount is 1000 SOL*.

```json
# Unit price of ETH based on the buy amount of 100 SOL
https://price.jup.ag/v4/price?ids=ETH&vsToken=SOL&vsAmount=100

{
    "data": {
        "ETH": {
            "id": "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
            "mintSymbol": "ETH",
            "vsToken": "So11111111111111111111111111111111111111112",
            "vsTokenSymbol": "SOL",
            "price": 43.43546145
        }
    },
    "timeTaken": 0.028025999999954365,
    "contextSlot": 155801017
}
```

Both the `ids` and `vsToken` can also be specified using input mints.

```json
# Specifying both id and vsToken with mint addresses
https://price.jup.ag/v4/price?ids=7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs&vsToken=So11111111111111111111111111111111111111112

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
    "timeTaken": 0.039186676000099396,
    "contextSlot": 155801186
}
```

## Try it out!

A simple GET request, via your browser or one of the terminal commands below:

```bash
curl -X 'GET' 'https://price.jup.ag/v4/price?ids=SOL'

curl -X 'GET' 'https://price.jup.ag/v4/price?ids=SOL&vsToken=mSOL'

curl -X 'GET' 'https://price.jup.ag/v4/price?ids=SRM,FTT,MER&vsAmount=100'
```

## Endpoint

**Endpoint:** `https://price.jup.ag/v4/price`

**Query params**

- **ids** `(*required)` `(string)`
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
- **vsAmount** `(number)`
    Supports amount of tokens.
    - `100`

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
