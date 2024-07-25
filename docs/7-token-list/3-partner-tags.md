---
sidebar_label: "API Standard for Partners"
description: How to get your data integrated.
slug: "/token-api-standard"
title: API Standard for Partners
---
# API Standard for Partners
## How to get your protocol's tokens tagged

We can ingest your list of tokens and get them tagged automatically, to help your users to trade the right tokens. For example, we have Sanctum's LSTs, pump.fun tokens, clone protocol, and birdeye trending tokens. Read more on the [main API page](./token-list/token-list-api)


We need:
- A url [endpoint](https://raw.githubusercontent.com/jup-ag/token-list/main/examples/sample_tags.csv)
- That points to a simple [.csv file with a mint address per row](https://raw.githubusercontent.com/jup-ag/token-list/main/examples/sample_tags.csv) -- click on link to see sample.
- That we can poll at a set interval (tell us how often you expect updates to happen)

The endpoint should be public, with our IP whitelisted for rate limits where necessary. 

Tell us if you have a preferred word or acronym for your tag, one that's short and mobile friendly.

That's it!