---
sidebar_label: "Self-hosted V6 Swap API"
description: "Run the swap API with your own infra"
title: "Self-hosted V6 Swap API"
---

Advanced users can run a self-hosted Jupiter Swap API, you can download the jupiter-swap-api [here](https://github.com/jup-ag/jupiter-swap-api/releases).

## Prerequisites

- Dedicated Solana RPC node, optional but recommended with the [Yellowstone gRPC plugin](https://github.com/rpcpool/yellowstone-grpc) installed.

## Usage

To start the API server:

`RUST_LOG=info ./jupiter-swap-api --rpc-url https://supersolnode.jup/91842103123091841 --yellowstone-grpc-endpoint https://supersolnode.jup --yellowstone-grpc-x-token 91842103123091841`

It is also possible to run the API in poll mode (heavy for nodes and it is not recommended). It will periodically polling the Solana RPC node for accounts rather than listening with the Yellowstone gRPC endpoint:

`RUST_LOG=info ./jupiter-swap-api --rpc-url https://supersolnode.jup/91842103123091841`

For others options, use `--help`:

`./jupiter-swap-api --help`

Once the API server is ready, it will open a HTTP server at `0.0.0.0:8080`.

The jupiter-swap-api is identical to the public Jupiter Swap API so all the documentation applies [Swap API](/docs/apis/swap-api), replacing the api URL `https://quote-api.jup.ag/v6` with `http://127.0.0.0.1:8080`.

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