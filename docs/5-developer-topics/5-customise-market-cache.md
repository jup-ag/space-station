---
sidebar_label: "Custom Markets Cache"
description: Adding your own custom markets to Jupiter
---
# Adding Your Own Custom Markets to Jupiter

Jupiter is periodically caching active and liquid markets at https://cache.jup.ag/markets?v=3.  Markets must have a minimum amount of liquidity. If your market does not meet the requirements for automatic listing you can still amend your own markets cache and use the SDK.

It is designed to reduce network requests and optimise load speed, as a result some constant values might be added to the bare `AccountInfo` corresponding to a pool.

The market cache is an `Array<AccountInfo<string[]> & {pubkey: string, params?: any}>`.
`params` are specific to each AMM and the expected fields can be found in the constructor of `@node_modules/@jup-ag/core/dist/lib/<ProtocolAmm>`.

For instance, this is the entry for a Raydium market:

```json
{
  "data": [
    "AQAAAAAAAAD+AAAAAAAAAAcAAAAAAAAAAwAAAAAAAAAJAAAAAAAAAAYAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAEBCDwAAAAAAAAAAAAAAAABAS0wAAAAAAEBCDwAAAAAAQEIPAAAAAAABAAAAAAAAAADKmjsAAAAAAMqaOwAAAAAFAAAAAAAAABAnAAAAAAAAGQAAAAAAAAAQJwAAAAAAAAwAAAAAAAAAZAAAAAAAAAAZAAAAAAAAABAnAAAAAAAAU2uDHCcEAAChuDUAAAAAADmuvwEAAAAAq9TxQpsiAADFFAdiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB1nhl6uUoAAAAAAAAAAADfr39PAwAAAAAAAAAAAAAArDHzAQAAAABBW/oLAwAAAAAAAAAAAAAAmugQ0aF7QwAAAAAAAAAAAEcKgd3SLwAA3Xy2Hyf6BFXiVI0V7b38LKWNOLajCnUbYYOnX91NiUwMczxA1Fr+2j9aF8wBJjCEmuTh0xq062Nzcx3tNyja3dwEZG7buv4QDNTvUo5Vfo/pDJf0bfq5oy5DuhgJg15Axvp6877brTo9ZfNqq8l0MbG75MLS9uDkfKYCA0UvXWEHcev5yxUY3bPt1CDdT5xDeoUmBXWzVdqyEcbk9hVnQlDvrexxF14vgiHVZykh2ka5nLLm5UBv6JAeyM3tcTpxEyubQ9DttKnfkeOdSTtFMlZ2lJ++nHZAJGv9t5rPQjqFDy1uAqR6+CTQmradxC1wyyjL+iSft+5XudJWwSdi73NZ/XQWidKldBI0uRDuuB7WxPCA6PLR9p+K2esVyOgYtdClj/EROg6VrxA3OAsmZINCgjfUo+5a0nYEO6GCrzaLuHUvBJims1CBun4bNygcZuuxfCAL0wPQiauGhKmyTfflDIK2/QOR3b6OxK/pJgfYBmbwDOqRg/8vhAc+E4W1YJXC4cTcAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
    "base64"
  ],
  "executable": false,
  "lamports": 6124800,
  "owner": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
  "rentEpoch": 329,
  "pubkey": "5y2QYKY8gQCcmG6jy4fc7wFg8L5SW7bkyvMH3jUTqBdy",
  "params": {
    "serumBids": "F7G6Uvk6pRT3PnhZLm5YGA4GGTWHE8AfrdTVqyPc9fuC",
    "serumAsks": "83tUsZUQeXDZR7uhtWHin2epPdjMNPtdyxCNgcFyhaFS",
    "serumEventQueue": "5SVX8MeCrxVjWazeD5oeWjYBurHvygpma4NyTi9hmGws",
    "serumCoinVaultAccount": "9CgWdLCkkVY1Mi95c8p3oKvCM7Fu3JQG9EBmRPvgBfoX",
    "serumPcVaultAccount": "4mTDtiiSvjeqEYJcQVfDgbKBVJNpwjSyTc58q7GdB8Vo",
    "serumVaultSigner": "2c7BqzhwBCb86DprTKte7UfK6F4Xwu4B1uX7YsWZ4c7G"
  }
}
```

It can be crafted using the `RaydiumAmm` constructor along with the `RaydiumAmm.decodeSerumMarketKeysString` static method.