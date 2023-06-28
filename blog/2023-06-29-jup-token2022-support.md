---
slug: jup-token2022-support
title: "Jupiter Token 2022 Support"
---

After rigorous testing over the past few weeks, **Token2022 is now officially supported on Jupiter**, [Fluxbeam](https://fluxbeam.xyz/) has been integrated into our routing, and tokens like [$BERN](https://birdeye.so/token/CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo?chain=solana) and [$MOON](https://birdeye.so/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi?chain=solana) can now be seamlessly traded with all the other tokens in the Solana universe. 

Token2022 is a new token standard developed by Solana Labs that presents a superset of functionality provided by the standard [SPL Token Library](https://spl.solana.com/token), including transfer fees, interest bearing tokens, non-transferability, and immutability. 

This enables new types of tokenomics to be developed - for example, $BERN leverages the transfer fee extension, taking a 6.9% fee, which is then used to reward holders of $BERN and $BONK, while Solarmoon is leveraging transfer fees to create a deflationary tokenomics for $MOON through reducing supply.

Due to the large number of updates over SPL Token Program, we had to make significant upgrades to our backend, UI and aggregator program to handle both the standard token library and token2022 in one seamless UX, most notably about reflecting the transfer fees across the entire stack and updating our crawler to be able to recognize Token2022 tokens.

In addition, since Jupiter is deeply integrated across many major wallets and dapps, not all of whom support 2022 yet, it was important for us to break this out into a separate token list api as not to affect existing partners.

It’s important to note that Token2022 is currently still undergoing development and auditing. In addition, features like transfer fees make it more difficult for integrators to adopt, so we recommend using the standard token library unless there is a strong need for those specific features.

To understand more about the standard, you can refer to these resources:
https://spl.solana.com/token-2022
https://twitter.com/KEMOS4BE/status/1663960214637539329
https://twitter.com/heliuslabs/status/1671551473950531585 

All in all, we are glad that we could do our bit to help advance the possibilities of Solana, and let’s work together to make Solana greater than ever!