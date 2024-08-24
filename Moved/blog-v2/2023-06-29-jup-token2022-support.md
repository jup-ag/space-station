---
slug: jup-token2022-support
title: "Jupiter Token 2022 Support"
---

After rigorous testing over the past few weeks, **Token2022 is now officially supported by Jupiter**! [Fluxbeam](https://fluxbeam.xyz/) has been integrated into our routing, and tokens like [$BERN](https://birdeye.so/token/CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo?chain=solana) and [$MOON](https://birdeye.so/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi?chain=solana) can now be traded along with other tokens in the Solana universe. 

Token2022 is a new token standard developed by Solana Labs that presents a superset of functionality provided by the standard [SPL Token Library](https://spl.solana.com/token) which includes transfer fees, interest bearing tokens, non-transferability, and immutability. 

This enables new types of tokenomics to be developed. For example, $BERN leverages a 6.9% transfer fee to reward holders of $BERN and $BONK while Solarmoon leverages transfer fees to reduce supply and create deflationary tokenomics for $MOON.

With the large number of updates over SPL Token Program, we had to make significant upgrades to our backend, UI and aggregator program to handle both the standard token library and token2022 in one seamless UX. Most notably, we had to support transfer fees across the entire stack and update our crawler to recognize Token2022 tokens.

In addition, as Jupiter is deeply integrated across many major wallets and dapps — not all of whom support 2022 yet — it was important for us to break this work out into a separate token list API as not to affect existing partners.

It’s important to note that Token2022 is currently still undergoing development and auditing. In addition, as features like transfer fees make it more difficult for integrators to adopt, we recommend sticking to the standard token library unless there is a strong need for those specific features.

To understand more about the standard, you can refer to these resources:
- https://spl.solana.com/token-2022
- https://twitter.com/KEMOS4BE/status/1663960214637539329
- https://twitter.com/heliuslabs/status/1671551473950531585 

We are really excited to support Token 2022 standards and can't wait to see the amazing things that projects cook up with these new possibilities. To a greater Solana platform!
