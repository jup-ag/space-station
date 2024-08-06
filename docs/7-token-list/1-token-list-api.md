---
sidebar_label: "Ecosystem Token List API"
description: "Consolidated data for tokens, markets, and ecosystem partners. Perfect for developers."
title: "Ecosystem Master Token List"
---

<head>
    <title>Jupiter Token List API: Your Crypto Data Gateway | Jupiter Station</title>
    <meta name="twitter:card" content="summary" />
</head>

### API Endpoints

<details>
  <summary>
    <div>
      <div className="api-method-box post">GET tokens by tag</div>
      <p className="api-method-path">https://tokens.jup.ag/tokens?tags=verified</p>
    </div>
  </summary>

### Convenience Tags

For most people, these 2 tags are all you need. All tokens would either be verified or unknown.

| Parameter   | Description                        |
|-------------|------------------------------------|
| `verified`  | Tokens that we display as verified on jup.ag. Today, this is a superset consisting of tokens tagged “community” and “lst”. You can use this setting to automatically receive jupiter’s settings when we update our allowlist.
| `unknown`  | Untagged tokens that we display a warning on on jup.ag.                                |

### Other Tags Available

| Parameter   | Description                        |
|-------------|------------------------------------|
| `community` |  Tokens that are verified by the Jupiter community. To get a community tag for your project, go to https://catdetlist.jup.ag          |
| `strict` |  Tokens that were validated previously in the strict-list repo. This repo will be deprecated, please use the community site to get a community tag going forward.          |
| `lst` |  Sanctum’s list from their repo which we automatically pull: https://github.com/igneous-labs/sanctum-lst-list/blob/master/sanctum-lst-list.toml        |
| `birdeye-trending` |   Top 100 trending tokens from birdeye: https://birdeye.so/find-gems?chain=solana        |
| `clone` | Tokens from Clone protocol, from their repo: https://raw.githubusercontent.com/Clone-Protocol/token-list/main/token_mints.csv       |
| `pump` |   Tokens that graduated from pump, from their API       |

```
Usage: You can pass in a single tag or multiple:

- Single tag: https://tokens.jup.ag/tokens?tags=verified
- Multiple tags: https://tokens.jup.ag/tokens?tags=lst,community
```

</details>

<details>
  <summary>
    <div>
      <div className="api-method-box post">GET token by mint</div>
      <p className="api-method-path">https://tokens.jup.ag/token/So11111111111111111111111111111111111111112</p>
    </div>
  </summary>

| Parameter   | Description                        |
|-------------|------------------------------------|
| `mint_address` |  Pass the mint address of the token you want like this https://tokens.jup.ag/token/So11111111111111111111111111111111111111112          |

We only support filtering for 1 token at a time right now.

Example response:

```
{"address":"jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v","name":"Jupiter Staked SOL","symbol":"JupSOL","decimals":9,"logoURI":"https://static.jup.ag/jupSOL/icon.png","tags":["community","strict","lst"],"daily_volume":2228947.6686637774,"freeze_authority":null,"mint_authority":"EMjuABxELpYWYEwjkKmQKBNCwdaFAy4QYAs6W9bDQDNw"},
```

</details>

<details>
  <summary>
    <div>
      <div className="api-method-box post">GET tradable tokens only</div>
      <p className="api-method-path">https://tokens.jup.ag/tokens_with_markets</p>
    </div>
  </summary>

Get all tradable tokens that meet jup.ag’s routing and liquidity threshold. 
</details>

<details>
  <summary>
    <div>
      <div className="api-method-box post">GET all tokens</div>
      <p className="api-method-path">https://tokens.jup.ag/tokens</p>
    </div>
  </summary>

Get full token list, including those not on jup.ag. Warning: The full response is large and takes time to load. Check out the other options above.
</details>

Usage notes:
- There is a rate limit of 30 requests per minute. Please pass a referer / origin in your request header
- Enhanced metadata: We added daily volume, freeze authority and mint authority for your convenience. More fields will be available over time such as coingecko id.
- If you see a token.jup.ag (without the s, the new one is tokens.jup.ag) in your codebase, that's our deprecated old API.


## Resources
 
- [Background and History](https://www.jupresear.ch/t/ecosystem-master-token-list/19786)
- [Introducing the Ecosystem Token API and standard](https://www.jupresear.ch/t/introducing-the-ecosystem-token-api-and-standard/20601)
