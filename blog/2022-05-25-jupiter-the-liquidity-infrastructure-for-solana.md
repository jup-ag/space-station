---
slug: jupiter-the-liquidity-infrastructure-for-solana
title: "Jupiter: The Liquidity Infrastructure For Solana"
---

Over the last few months, Jupiter has become the key swap liquidity infrastructure for Solana growing to over $16B in trading volume, aggregating across 15 integrated DEXs and facilitating the liquidity flow of many key projects in the ecosystem.

What we've accomplished today has been the result of a successful collaboration between the team, the community, and the Solana ecosystem. Only through constant feedback and close collaboration with everyone, have we been able to continually work towards the JUP promise of providing the *best price*, *best token selection*, and *best UX* in DeFi.

As crypto captures more markets like banking, gaming, and payments, we believe Solana will be one of the key hubs for all that activity, with the number of applications, users, and protocols set to explode in the years to come.  

Jupiter will provide the single liquidity endpoint for all these stakeholders to connect effortlessly and the swap infra to allow the entire ecosystem to scale exponentially. But, unlocking this growth requires the collective efforts of not just the team, but, a larger body of the community, ecosystem, and users working together.

<!--truncate-->

---

## Why Solana?

We are committed to building the swap infrastructure for Solana because we see Solana as becoming one of the key trading hubs of crypto. It is also perfectly positioned to capture the next billion crypto users where usability, transaction costs, and scalability remain key barriers to entry for them.  

Solana’s blazing speed and throughput are key enablers of innovation. Liquidity protocols that would be impossible on slower and less scalable blockchains, including full-fledged order book systems and rapidly updating oracle-based AMMs, can finally be brought to life on Solana.

Beyond that, Solana's developer ecosystem is unique in crypto. Rooted by the goal to be the "useful" blockchain in people's daily lives, the ecosystem is filled with some of the smartest, most helpful product-focused builders around building ever more unique, useful and innovative apps.

Additionally, Solana has also attracted major audiences in finance, gaming, NFT, and payments, enough to reach a tipping point of users, devs, and businesses building on top of it, as seen by the significant growth of dev users and wallet downloads. This will lead to the flywheel effect where more users → more assets → more liquidity in the whole Solana ecosystem, making swap infrastructure more critical for growth.

As with any trading hub, one critical aspect is the links to external platforms. With Solana, it’s well-poised on both centralized exchanges and decentralized cross-chain connections, and continues to be one of the top priorities for connections with all the emerging protocols and standards. 

Last but not least, the Solana ecosystem is just plain fun. We have been in many crypto ecosystems in the past, and the Solana ecosystem strikes us as the most fun, pragmatic and focused on user experience vs ideologies. And that’s really important for us!

Of course, there are some critical technical issues to be addressed such as network slowdowns, txn size, and compute unit limits, but we are confident the problems will be resolved by the excellent team over at Solana labs, who have proven time and time again that they are one of the best technical and operational executing blockchains in crypto. 

---

## Jupiter Overview

Originally, Jupiter was a team experiment, where we built a standalone program to integrate Mercurial and Serum to provide more utility for stables like $UST & $PAI and help establish them as key stables in Solana. In doing so, we launched the first cross-protocol liquidity swap on Solana. 

Encouraged by our own dogfooding and the highly receptive response from the community (and the geeks in us loved playing with all the various networks, and solving all the tricky problems, like txn size limits, and all that good stuff), we decided to start Jupiter as a standalone project, launching in November 2021.

Along the way, we developed the JUP Promise to anchor us to the value we want to deliver - best price, best token selection, and best UX for users and developers. Sticking to this promise, along with the relentless feedback and debugging help provided by our community of users and developers, has been crucial in helping us improve the platform and make significant progress on key objectives.

We'd like to take the chance to share what these objectives are, the main challenges we had to solve to get here, and some of the cool things we have in the works. :D

### 1: Build the best swap experience in DeFi

With everyone's help, we've come a long way towards building one of the best aggregators in DeFi, with the goal of allowing anyone using Solana for the first time to have an amazing experience trading with the best price and best experience possible. 

To have the most comprehensive liquidity coverage in Solana along with a seamless experience, there were a large number of technical challenges we had to solve, including fitting advanced swap routes within the transaction size limit of 1232 bytes and compute unit limits, and incorporating very different technical models like Serum’s orderbook mechanism, Lifinity’s rapidly updating oracle based pricing mechanism and Crema’s concentrated liquidity mechanism.

Over time, we have developed a very strong and flexible technical foundation (both on-chain and off-chain), as well as a solid process of working closely with other teams to overcome any initial technical challenges, sharing feedback and often working with them very early in their launch process to improve their platform and SDK, allowing us to roll out new integrations rapidly. 

Now, we have the widest and most comprehensive liquidity coverage in Solana, having integrated over 15 DEXes into one seamless interface and SDK, including very technically different platforms like Serum, Orca, Lifinity, and Crema.

### 2: Be the swap infrastructure for Solana

To ensure the seamless and healthy flow of liquidity throughout the ecosystem, we work towards providing the most comprehensive and robust swap infrastructure possible for Solana for any user or project to reliably transact on. 

We do so by providing a single liquidity endpoint where any users, dapp and protocol can seamlessly access all the available liquidity, achieving the best price and ux for their own projects, regardless of whatever platform or language they are using. This liquidity endpoint is accessible via 3 main mechanisms: A user facing website on jup.ag, a comprehensive and robust SDK and API, and onchain program instructions.

We have since built up an extremely diverse ecosystem of projects leveraging Jupiter for their swap needs, including top Solana projects like Mango, Tulip, Defi Land - ranging from native swaps in wallets to facilitating key DeFi use cases like vaults, liquidations, and payments.

### 3: Build one of the best communities in crypto

With over 50k community members across Twitter and Discord, we have built one of the best organic DeFi communities in Solana. Our community has been a cornerstone of Jupiter’s development and growth. This is true not just for product, but also in terms of evangelising, support, content contributions, and just plain vibe, making Jupiter a fun place to spend time connecting with others.

What makes our community so special is an amazing group of content creators and moderators who have created a lot of great content, spread a lot of great energy, answered questions, and also led a lot of events, including community AMAs, where we discuss various community members journey into crypto, international AMAs, etc.

Beyond that, our community has been essential at evangelising Jupiter to the other users and the ecosystem, with many of the most important integrations and partnerships have come because various members have spoken up and championed Jupiter in their respective communities, with Mango, DeFi Land, and Project Galaxy are just a few notable examples.

Ask-Me-Anything (AMA) has been a constant initiative for us to connect with key players in the ecosystem and vice versa, which eventually blossomed into some amazing partnerships. Not only that, it’s a really helpful platform for all of our community to learn more about DeFi protocols, NFTs, GameFi projects, and the Solana ecosystem in-depth. In the AMA series, we hosted some of the most talented guest speakers in Solana and garnered a wide range of audiences live on Twitter Spaces and Discord. 

The series then continued on to morph into our very own podcast series - Exploring Solana with Jupiter - to reach a larger audience especially outside of Solana, for people to learn more about the community.

Our growing community of developers building on top of Jupiter have helped us be able to scale supporting the growing number of projects who all have different platforms and use cases they are building for. They’ve not only shared solutions that have worked but also code.

---

## What's next?

Despite the incredible progress we have made the past 6 months, the whole ecosystem is only at its infancy and there is still so much more work to do in order to help Solana scale. It is also because we are at this early stage, there is so much potential and opportunities waiting to be unleashed.

Jupiter will be kickstarting a new phase and we are planning on many exciting developments. On the product side, we are going to support interesting integrations like direct staking/ minting routes and a wider range of use cases such as Solana Pay, TWAP and streaming payments. As more liquidity sources and tokens come online, enabling routing between all of them and maintaining a scalable robust swap layer will be an ongoing investment in infrastructure building.

On the community end, we hope to nurture the next set of leaders who can eventually lead our teams, truly embodying the spirit of empowerment and service of the community. We have also seen much success with our AMAs series and we will increase our content marketing such as podcasts and opinion pieces, to educate and bring new users to Solana.

As we look beyond Solana, we see many opportunities to improve cross-chain migration of assets into and out of Solana with Jupiter well placed to add immense value in this area.