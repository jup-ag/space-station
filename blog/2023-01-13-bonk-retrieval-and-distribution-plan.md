---
slug: bonk-retrieval-and-distribution-plan
title: "$BONK Retrieval And Re-Distribution Plan"
---

At Jupiter, we are big fans of the BONK community and we deeply appreciate the energy it has brought to the Solana ecosystem.  We have also been strongly supportive of the community, including [burning the BONK fees](https://twitter.com/JupiterExchange/status/1610233682782212096) we collected from limit orders placed on our platform.

Late last week, we discovered that BONK tokens were airdropped to Openbook open order accounts rather than to the user accounts they were intended for. Since most traders use Openbook via Jupiter, a large portion of these tokens *(10T $BONK)* were airdropped to open order accounts managed by the Jupiter program. The full list of open order accounts and the respective accounts those were created for can be found [here](https://gist.github.com/Arrowana/8cadcc0c1ef11caabb2e5fd1f5471c11).

<!--truncate-->

Upon investigation, we realized that we would be able to potentially help the original targeted recipients retrieve the tokens by performing an upgrade to our program. We then reached out to the BONK core contributors to perform a full post technical post mortem and discussed what is the best plan forward. 

Given the large amount of tokens at stake and the current phase of the market and ecosystem development, it appears that re-distributing all the tokens all at once might have the detrimental effect of causing a crash that might be hard to recover from, which will benefit no one, including the original targeted recipients and the Solana ecosystem.

As such, along with the BONK early contributors, we would like to propose a plan to help the original recipients claim the tokens in a way that would have the least impact in the market and give the BONK ecosystem to further build up liquidity and trust in the market. 

It is important to note that Jupiter is not a current custodian for the tokens and has nothing to gain from this plan - we are here both to help the targeted recipients get their $BONK and also the project to maintain the great energy and momentum.

While it is of course not ideal that the tokens were uncovered so late in the launch cycle, we believe that if we put on a united front, this will end up being a net positive for all the key stakeholders - including the targeted recipients, BONK community, n the Solana ecosystem.

This post will outline the timeline of events, the full technical details of what happened, and an assessment of the current market and proposed plan.

## Timeline Of Events

- Dec 25th 2022 - BONK [Airdrop](https://solscan.io/tx/5Sj8hu81wLSt2RuEUZYNzyuNeoQoGfiKG6BBWwiNdBUYHzU1eGpTg2FUyTUsXAG7BteMLM1hGAtYxShvxqrpQH63) to OpenBook Open Order Accounts
- Jan 6th - Jupiter discovers  $BONK tokens sent to Jupiter-managed OO accounts. We initiate an investigation to see how many token was sent, to which accounts, and to see if these tokens are retrievable.
- Jan 6th - Jupiter contacts the BONK core contributors to discuss how best to distribute the token airdrop to the original recipients.
- Jan 7th - [Joint tweet](https://twitter.com/bonk_inu/status/1611391854079086592) by BONK and Jupiter to make the community aware of the situation.
- Jan 12th - Release of the proposed plan to redistribute to the intended recipients moving forward.

## Technical Details
- The query the BONK core contributors used to build their list of wallets executing transactions with the OpenBook Program inadvertently pulled in the open orders accounts used to hold the order information for trading on a market on OpenBook.
- When a user trades on OpenBook with Jupiter, Jupiter creates and uses a Programmed Derived Address *(PDA)* to create the open orders account needed to execute the trade. Using a PDA allows the Jupiter program to sign for the address without needing a private key which allows the program to manage these accounts so users don't have to, greatly simplifying the user experience while not having any security or custody implications.
- When $BONK was airdropped to these Jupiter open orders account, it created an Associated Token Account *(ATA)* for these Jupiter PDAs to store the token.
- In order to access the $BONK held in these ATAs, we will need to update the Jupiter program to allow the tokens to be claimed as only the program can manage these accounts. The latest Jupiter program *(V4)* has an update authority held by us.
- We maintain update authority on our latest programs in order to regularly add new DEX integrations, fix issues, and work on new features. This also allows us to correct the 10T airdrop and deliver it to the intended recipients.

## Market Assessment and Proposed Plan
As mentioned, given the large amount of tokens at stake and the early stage of the market/ecosystem - a plan to distribute all the tokens at once could have the effect of creating a major crash even before the tokens are retrieved and released - benefitting no one and potentially stopping the nascent BONK project. As such, along with the BONK early contributors, we would like to propose a plan to redistribute to the intended recipients of the original airdrop that mitigates potential market fears while giving the BONK community time to build further confidence in the token and the project. 

**The plan is as follows:**
1. We will work on retrieving the tokens sent to the OpenBook open order accounts
2. Set up monthly releases over 12 months because a staggered release will release tokens in a manner that is absorbable by the market, and we believe that the community and ecosystem will continue to mature in the meantime
3. The first release will be performed next week to give us enough time to set everything up and for the market and community to digest the news
4. Additional incentives will also be provided for these recipients, as long as they continue doing a minimum number of trades that route through OpenBook.

Besides *(3)* which will also help to spur ongoing usage of OpenBook, the BONK contributors will also be aiming to assist software development of the project, which aligns with the original intent of sparking OpenBook development.

---

## Next Steps

We would like to get feedback on this plan from both the targeted recipients and the BONK community. We have opened up a dedicated channel called #bonk in [our discord](https://discord.com/invite/jup), so feel free to chime in there!

After the plan is finalized, we will proceed to retrieve the tokens on behalf of the users and set up a site to allow recipients to claim tokens as they are released monthly.

Of course, it would have been ideal if all tokens would've been received simultaneously, but it is now a chance for us as a community to come together and come out stronger from this.  After the many blows suffered by the crypto community (in particular Solana), $BONK has brought much excitement to the market, and we appreciate the chance to play our part in helping this along.

We would love to see everyone involved in this to work together to keep the great energy going, and create a long term sustained effort towards creating more great tokens and communities for the Solana ecosystem, helping it get to new heights too!