---
sidebar_label: "Wallet list"
description: List of wallets that are compatible with Jupiter, Meteora
---
# Why is my wallet not listed?


**TLDR**,
legacy site is still available, but moving forward, we hope all new/exisitng wallet should be in-spec with [Wallet Standard](https://docs.phantom.app/developer-powertools/wallet-standard). https://legacy.jup.ag/

---

**Existing user of Jupiter, Meteora**

We recently decided to drop many wallets from our list, and we are sorry if your go-to wallet is no longer supported, it wasn't an easy decision (but backed by our anonymously tracked usage graph).

The best path forward for you as a user would be to migrate to other wallet that are in-spec with [Wallet Standard](https://docs.phantom.app/developer-powertools/wallet-standard), such as (not in any particular order):
- Phantom
- Glow
- Backpack
- OKX
- ...

Wallet that does not conform to the latest standard has always been troubling us, and for good reason:

- not supporting Versioned Transaction, which severely nerfed our routing experience and promises of "Getting you the best quote"
- unpatched security
- abandoned development
- unnecessary impact on our site-experience (bundle size for unused wallets)
- lack of users

Meanwhile, our legacy website is still up at https://legacy.jup.ag/

---

- What is Wallet Standard
  - https://docs.phantom.app/developer-powertools/wallet-standard
- For developer
  - https://github.com/solana-labs/wallet-standard