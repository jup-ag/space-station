---
title: Frequently Asked Questions
sidebar_label: "Jupiter FAQ"
description: "Discover frequently asked questions about Jupiter products."
---

<head>
    <title>Frequently Asked Questions | Jupiter Station</title>
    <meta name="twitter:card" content="summary" />
</head>

## Jupiter Swap Aggregator

### Does Jupiter swap charge any fees?

**Jupiter does not charge any fees**, the transaction fees that you see in the details, are the Solana fees *(aka gas fees)*, and if you are swapping into any new token or through a new DEX / AMM, there will be a minor deposit fees / rent fees to create the [ATA (Associated Token Accounts)](https://spl.solana.com/associated-token-account) which will be refunded when you close the account. 

### Are Liquidity Provider fees included in the quoted price?

- Yes, the displayed price includes liquidity provider fees and price impact
- You can find the details in the `Price info` table.

### My swap fails, reporting a slippage error. What should I do?

- Slippage occurs because of changing market conditions between the moment the transaction is submitted and its verification.
- Your slippage rate is an important setting, it works as a protection. If the price falls below your slippage rate, then the transaction will fail in order to prevent you from getting less tokens than you want.
- You can adjust your slippage. By default, slippage is set to 0.5%, meaning if the price slips more than 0.5% of your quote, the trade will not be completed.
- Learn more about [slippage and price impact](../jupiter-swap/how-swap-works)

### What does it mean when I get the 'some routes failed to load...'

- This means that when Jupiter tried to refresh the routes to fetch the most up-to-date pricing, it failed to return those routes. This could be due to RPC node issues. We won't let you swap because the current route pricing options we show may be outdated, and that put you at risk of getting the less optimum price. 
- You may try to change the RPC *(setting accessible from the top-right wheel icon)* and refresh the page and try to fetch those routes again.

### How do I integrate Jupiter swap into my protocol / dApp? 

Protocols / Projects are free to integrate Jupiter swap with [Swap API](/docs/apis/swap-api), Jupiter operates in a decentralized way. That said, we encourage protocols/ projects to reach out to our team when the integration is done and live, we are happy to work together on co-marketing and getting the words out.

----

## Jupiter Limit Order

### Does Jupiter Limit Order charge any fees?

- Jupiter Limit Order do charge a platform fees of **0.2%** on taker. 
- In the case of partners integrating Jupiter Limit Order, they will be entitled to a share of 0.1% referral fees, while Jupiter collects the other 0.1% as platform fees. 
- The fees are collected and withheld by the program and are claimable anytime. 

### Why is my Limit Order not getting fulfill even when the price hit my limit price?

- Jupiter Limit Order execute your order based on the price that you have set by matching with the available liquidity on-chain across Solana.
A few scenarios or cases where the order is not being fulfill
- If the order size is too large *(and there is insufficient liquidity on-chain)* - in this case, Jupiter keeper will attempt to execute your order in a smaller chunk to partially fill your orders and will continue to do so until order is fully executed
- The price wick happen for a very short period of time, and the liquidity have all been taken up at that price.
- For more information on how Jupiter Limit Order works - [How Limit Order Works](../limit-order/how-lo-work)

<!-- ### What happened if I close my order that has partially filled? Do I get the balance of my original input token and also filled output token? -->
### In the Wallet transaction history, of using the Limit order, I see many failed transactions, did I pay for that transaction fees?

- By initiating an order on the limit order, a keeper will try to fill your orders with swaps as soon as the specified price is reached. Sometimes, mostly due to slippage, transactions can fail.
- The transaction fees for transactions initiated *(and signed)* by the keeper are paid by the keeper.

----

## Jupiter DCA

### Does Jupiter DCA charge any fees?

- Jupiter DCA do charge a platform fees of **0.1%** on order completion. 
- The fees are collected and withheld by the program and are claimable anytime. 

### Will there be any risk of my order getting frontrun?

- Jupiter DCA added some randomness in executing order to prevent potential frontrunning .
- For more information on how Jupiter DCA works - [How DCA Works](../dca/how-dca-work)

----

## Jupiter Space Station

### How do I add my protocol / project into Jupiter Space Station partners page?

- To add your protocol or project into Jupiter Station partners page, simply submit a PR to our [Space Station public repo](https://github.com/jup-ag/space-station) and share a little about how you utilizing or integrating Jupiter. 
- Here is a sample PR - https://github.com/jup-ag/space-station/pull/98

### Can I contribute to Jupiter Space Station? If yes, how? 

- Yes, we welcome anyone to contribute and help us improve Space Station alongside with us. 
- You can submit a PR to our [Space Station public repo](https://github.com/jup-ag/space-station), it can be in the form of updating some misinformation / outdated information that we have in Space Station, or you can come up with a community guide to help users and community members to navigate around the Solana ecosystem. Here is an example done by SolanaFM on [`How to verify swaps using block explorer`](https://github.com/jup-ag/space-station/pull/112) 

----

## New Token & Token Validation

### How do I get my new project token to be available to trade on Jupiter? 

- Check out one of our guide that run through the whole process of minting a new token to setting up a liquidity pool in a permissionless DEXs [here](../general/new-token-guide)
- Once you have your token and liquidity pool setup, you will need to have a minimum amount of liquidity of **$500** to be able to be picked up by Jupiter. Read more about it here: [Getting Your Token onto Jupiter](/docs/get-your-token-onto-jup)

### How do I get my new token to the strict list / remove the unknown tag?

- To get on to the Jupiter Strict Token List/ removing the `unknown` token tag through our public [Token verification](/docs/token-list/token-list-api#community-validation-for-strict-mode-beta) process in [Jupiter Token List Public Repo](https://github.com/jup-ag/token-list).

----

## Others

### In the Wallet transaction history, I don't see the swap, did I receive my tokens?

- The wallet transaction history is based on blockchain data decoding.
- Some wallets may not decode the data correctly.
- You can check your swap history on Jupiter, from the right menu.
- From this menu, you can click on the link to the block explorer to check the transaction.
- Block explorer allows you to check by using the **"SOL Balance Change"** and **“Token Balance Change”** tabs.
- A swap requires the use of liquidity pools *(LP)* on DEXs. Some DEXs use an LP-token burn mechanism during the swap. This has no impact on the tokens received.

### What does it mean when I see "unable to fetch balance changes" in Phantom?

- This just means the phantom simulator can’t simulate the transaction. 
- The phantom simulator is just a helpful tool to summarize what it thinks is going to happen, but, there are transactions where it's unable to do that.  It does not guarantee anything and a malicious dApp can still take control of your wallet.
- If you trust the dApp and have had successful transactions, then there is nothing to worry about. 
- If it's your first time approving a dApp, click on "view advanced transaction details to review the actual transaction. Pay attention to the amounts approved. Another option is to just use a burner wallet with only the needed funds on your first transaction to protect yourself.


### My swap fails, reporting that the account does not have enough SOL. Why?

- On Solana, you use SOL to pay transactions *(around 0.000005 SOL)* but also to pay rent fees for token accounts. It's around 0.002 SOL and they are refundable when you close the account.
- Read: [What does rent for accounts mean?](https://docs.solana.com/developing/intro/rent)

### What does rent for accounts mean?

- Everything on Solana is an account, if you want to store data, in particularly the amount of a token you own, you must open a new account to hold that data.
- So for every token you own, you must open an account to store/hold how much of that token you own.
- To create an account you must pay rent every epoch to maintain it otherwise it will be automatically closed.
- However if you deposit 2 years worth of rent, then your account becomes rent-exempt and you will be able to keep your account open forever, or until you close it. This deposit of 2 years rent is approximately **0.02 SOL** at the moment. And this is why many programs deduct this amount from your main account to deposit into a token account created to hold the new tokens you've just acquired.
- Token accounts aren't the only types of accounts that are opened for you. 
- All SOL balances held in these accounts can be reclaimed by closing those accounts. 

### My swap fails, reporting my wallet may not support Versioned transaction. I use a Ledger. What should I do?

- This error usually occurs when the ledger is not up-to-date, or just after updating if you haven't re-allowed blind signing. To solve this:
    - Check the firmware version and update your ledger if necessary.
    - Allow blind signing in the Solana app on your ledger.
- Or you can also try using Jupiter without Versioned Transaction in the swap setting. 
<!-- Versioned transaction screenshot -->

### How or who do I reach out to for partnerships or collaboration? 

- We're happy to partner and collab with anyone in the ecosystem, please refer to the following READMEs to get featured on the various pages
    - [Github Repo](https://github.com/jup-ag/space-station?tab=readme-ov-file#jupiter-space-station-partner-page) to [Jupiter Space Station Partner Page](https://station.jup.ag/partners)
    - [Github Repo](https://github.com/jup-ag/welcome-partners) to [Welcome to Solana Page](https://welcome.jup.ag/)
- In order for Jupiter to feature you or participate in co-marketing efforts, we require you to clearly indicate and label the usage of Jupiter's products such as (but not limited to) APIs, widgets, interfaces, etc.
- If you need further assistance or enquire about marketing efforts, you can reach us in our [discord](https://discord.gg/jup), we will try to get in touch as soon as possible.
