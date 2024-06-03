---
sidebar_label: "Self-hosted V6 Swap API"
description: Unlock the potential of Self Hosted Jupiter Swap API for tailored trading solutions and independence from public API limits.
title: "Self-hosted V6 Swap API"
---

<head>
    <title>Self Hosted Jupiter Swap API - Personalized Infrastructure</title>
    <meta name="twitter:card" content="summary" />
</head>


Jupiter provides the ability for advanced users can run a self-hosted Jupiter Swap API. You can download the [jupiter-swap-api here](https://github.com/jup-ag/jupiter-swap-api/releases).

Mission-critical use cases, like liquidations and oracles, can deploy their own API servers relying on their own RPC nodes to entirely decouple their systems from Jupiter infrastructure.

Integrators load is no longer restricted by the public API rate limits.

## Prerequisites

A Dedicated Solana RPC node: **optional** but recommended with the [Yellowstone gRPC plugin](https://github.com/rpcpool/yellowstone-grpc) installed.

The following RPC providers can provide a RPC node with the geyser plugin:

- [Triton](https://triton.one)
- [Helius](https://docs.helius.dev) Contact Helius on [Discord](https://discord.com/invite/6GXdee3gBj)

## Usage

To start the API server:

`RUST_LOG=info ./jupiter-swap-api --rpc-url <RPC-URL> --yellowstone-grpc-endpoint <GRPC-ENDPOINT> --yellowstone-grpc-x-token <X-TOKEN>`

For instance, if you used Triton and your RPC url is https://supersolnode.jup/91842103123091841, the arguments would be `--rpc-url https://supersolnode.jup/91842103123091841 --yellowstone-grpc-endpoint https://supersolnode.jup --yellowstone-grpc-x-token 91842103123091841`

It is also possible to run the API in poll mode (heavy for nodes and it is not recommended). It will periodically poll the Solana RPC node for accounts rather than listening with the Yellowstone gRPC endpoint:

`RUST_LOG=info ./jupiter-swap-api --rpc-url <RPC-URL>`

For others options, use `--help`:

`./jupiter-swap-api --help`

Once the API server is ready, it will open a HTTP server at `0.0.0.0:8080`.


The jupiter-swap-api is identical to the public Jupiter Swap API so all the documentation applies [Swap API](/docs/apis/swap-api), replacing the api URL `https://quote-api.jup.ag/v6` with `http://127.0.0.1:8080`.

## Market Cache

The Jupiter self hosted Swap API relies on the market cache https://cache.jup.ag/markets?v=3 maintained by the Jupiter team, as a snapshot of all the relevant markets after liquidity filtering.

To pick up those new markets the api has to be restarted. The cache is updated every 30 minutes.

This is the only reliance on Jupiter infrastructure

## MacOS

On MacOS you will see this error message:

`“jupiter-swap-api” can’t be opened because Apple cannot check it for malicious software.`

Go to System Settings and click on "Open Anyway":

![](../../static/img/docs/jupiter-swap-api-open-anyway.png)

## Advanced

If a set of AMMs is never needed for routing, they can be removed before starting the api to reduce load.

Create a market-cache excluding the program you want to remove, Openbook for this example:

```shell
curl "https://cache.jup.ag/markets?v=3" -o market-cache.json
jq 'map(select(.owner != "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"))' market-cache.json > market-cache-no-openbook.json
```

Then:

`RUST_LOG=info ./jupiter-swap-api --market-cache market-cache-no-openbook.json ...`

This will start the API server without Openbook as part of routing. You can also remove individual market as well.

## Paid Hosted APIs

We are working with some Solana RPC partners in the ecosystem as well so that you can get a paid hosted API ran by them.

- QuickNode: https://marketplace.quicknode.com/add-on/metis-jupiter-v6-swap-api
