---
title: Frequently Asked Questions
sidebar_label: "Jupiter FAQ"
description: "Discover FAQs on Jupiter Swap, DCA, and more. Get quick answers and master Jupiter's trading tools."
---

<head>
    <title>Frequently Asked Questions | Jupiter Station</title>
    <meta name="twitter:card" content="summary" />
</head>

## Jupiter Swap Aggregator

### Does Jupiter swap charge any fees?

**Jupiter does not charge any fees**. The transaction fees that you see in the details are the Solana fees *(aka gas fees)* and if you are swapping into any new token or through a new DEX / AMM, there will be minor deposit fees / rent fees for creation of any [ATAs (Associated Token Accounts)](https://spl.solana.com/associated-token-account). Fees associated with the creation of an account will be refunded when you close each account. 

:::info A New Version of this FAQ is Coming Soon
We are working on updates to this page.  In the meantime, please note that there is a 0.05% fee when using the new Ultra Mode in Jupiter Spot V2, and this mode is selected by default.  Switching to Manual Mode continues to offer a spot swapping experience with no fees added by Jupiter.   
:::

### Are Liquidity Provider fees included in the quoted price?

- Yes, the displayed price includes liquidity provider fees and price impact.
- You can find the details in the `Price info` table.

### My swap fails, reporting a slippage error. What should I do?

- Slippage occurs because of changing market conditions between the moment the transaction is submitted and its verification.
- Your slippage rate is an important setting, it works as a protection. If the price falls below your slippage rate, then the transaction will fail in order to prevent you from getting fewer tokens than you want.
- You can adjust your slippage. By default, slippage is set to 0.5%, meaning if the price slips more than 0.5% from your quote, the trade will not be completed.
- Learn more about [slippage and price impact](/guides/2-spot/1-swap/3-how-swap-works.md)

### What does it mean when I get the 'some routes failed to load...'

- This means that when Jupiter tried to refresh the routes to fetch the most up-to-date pricing, it failed to return those routes. This could be due to RPC node issues. We won't let you swap because the current route pricing options we show may be outdated, and that puts you at risk of getting a suboptimal price. 
- If you continue to see this message after refreshing the page, you can change the RPC *(setting accessible from the top-right wheel icon)* and refresh again to try and fetch the routes.

### How do I integrate Jupiter swap into my protocol / dApp? 

Protocols / Projects are free to integrate Jupiter swap with [Swap API](/docs/old/apis/swap-api), Jupiter operates in a decentralized way. That said, we encourage protocols/ projects to reach out to our team when the integration is done and live, and we are happy to work together on co-marketing and getting the word out.

----

## Jupiter Limit Order

### Does Jupiter Limit Order charge any fees?

- Jupiter Limit Order does charge a platform fee of **0.2%** on the taker. 
- In the case of partners who integrate Jupiter Limit Order, they will be entitled to half of the platform fee (0.1%) as a referral fee.  
- The fees are collected and withheld by the program and are claimable anytime. 

### Why is my Limit Order not getting fulfilled even when the price hit my limit price?

Jupiter Limit Order executes your order, based on the price that you have set, by matching with the available liquidity on-chain across Solana. A few scenarios or cases where the order would not be fulfilled:

- If the order size is too large *(and there is insufficient liquidity on-chain)*
    - In this case, Jupiter's keeper will try to execute your order in smaller chunks to partially fill your order, and will continue to do so until the order is fully executed.
- The price wick is sharp and the liquidity has all been taken up at your selected price.

For more information on how Jupiter Limit Order works - [How Limit Order Works](/guides/2-spot/3-limit-order/2-how-lo-work.md)

<!-- ### What happened if I close my order that has partially filled? Do I get the balance of my original input token and also filled output token? -->
### In the Wallet transaction history in Jupiter Limit Order, I see many failed transactions. Did I pay the transaction fees?

- After initiating an order, the keeper will try to fulfill it via swapping as soon as your selected price is reached. Sometimes, most often due to slippage, these swap transactions can fail.
- The transaction fees for transactions initiated *(and signed)* by the keeper are paid by the keeper.  

----

## Jupiter DCA

### Does Jupiter DCA charge any fees?

- Jupiter DCA does charge a platform fee of **0.1%** upon order completion. 
- The fees are collected and withheld by the program and are claimable anytime. 

### Will there be any risk of my order getting frontrun?

- Jupiter DCA added some randomness in how orders are executed to help prevent potential frontrunning.

For more information on how Jupiter DCA works - [How DCA Works](../../guides/dca/how-dca-work)

----

## Jupiter Space Station

### How do I add my protocol / project to the Jupiter Space Station partners page?

- To add your protocol or project into the Jupiter Station partners page, submit a PR to our [Space Station public repo](https://github.com/jup-ag/space-station) and share a little about how you are utilizing or integrating Jupiter. 
- A sample PR to help you - https://github.com/jup-ag/space-station/pull/98

### Can I contribute to Jupiter Space Station? If yes, how? 

- Yes, we welcome anyone to contribute and help us improve Space Station!
- You can submit a PR to our [Space Station public repo](https://github.com/jup-ag/space-station). It is your choice to determine the kind of help you can provide! You can update pages to address misinformation / outdated information if you think you have found any, correct misspellings or grammatical problems that may exist, and/or you can add tips/footnotes to better clarify topics as you see fit. Or if you have an idea for an entirely new community guide to help users and community members navigate around the Solana ecosystem, you can draft it. An example done by SolanaFM: [`How to verify swaps using block explorer`](https://github.com/jup-ag/space-station/pull/112). 

----

## New Token & Token Validation

### How do I get my new project token to be available to trade on Jupiter? 

- All new tokens on supported AMMs are instantly routed on Jupiter for 14 days, and are marked with a '⚠️’ label to encourage users to double-check that the mint addresses are the right ones before trading.
- Learn more about how to get your token verified and routed on Jupiter: [Get Your Token on Jupiter](/guides/12-general/4-get-your-token-on-jupiter.md).

### How do I get my new token to the strict list / remove the unknown tag?

- To get on to the Jupiter Strict Token List/ remove the `unknown` token tag through our public [Token verification](/docs/old/token-list/token-list-api#community-validation-for-strict-mode-beta) process in [Jupiter Token List Public Repo](https://github.com/jup-ag/token-list).

----

## Others

### In the Wallet transaction history, I don't see my swap. Did I receive the tokens?

- The wallet transaction history is based on blockchain data decoding.
- Some wallets may not decode the data correctly.
- You can check your swap history on Jupiter by selecting the Activity tab after opening the right menu by clicking on your wallet address.
- For each record in Activity, you can click on the link to view the transaction on a block explorer.
- Block explorer allows you to see exactly what changes happened by using the **"SOL Balance Change"** and **“Token Balance Change”** tabs.
- A swap requires the use of liquidity pools *(LP)* on DEXs. Some DEXs use an LP-token burn mechanism during the swap. This has no impact on the tokens you received, but you might see tokens with balance changes that you don't recognize alongside the expected token(s). If you have any questions, please join and ask in our [discord](https://discord.gg/jup).

### What does it mean when I see "unable to fetch balance changes" in Phantom?

- This means the Phantom simulator can’t simulate the transaction. 
- The Phantom simulator is meant to be a helpful tool that to summarize what should happen when your transaction is submitted, but, there are transactions where it's unable to do that.  However, even when it is able to provide a summary, this does not guarantee that the transaction is safe, and a malicious dApp might still be able to take control of your wallet.
- If you trust the dApp and have had successful transactions before, review the social media accounts and any community groups such as the project discord as a precaution. Keep in mind that there are instances where hackers have been able to hijack domain names used by dApps, where they host a near-duplicate of the dApp's legitimate website with changes made only to transactions. While unlikely, any unrecognized changes to how a dApp operates is good cause for you to become alert.
- If it's your first time approving a dApp, click on "view advanced transaction details" to review the actual transaction. Pay attention to the amounts approved. Another option is to use a burner wallet, and only send the exact amount of funds needed to this new wallet, from which to make your first transaction so that you can see if everything happens as expected in order to protect yourself and your funds.
- Better safe than sorry.


### My swap fails, reporting that the account does not have enough SOL. Why?

- On Solana, you use SOL to pay transaction fees *(around 0.000005 SOL)* but also to pay rent fees for new token accounts. Rent fees are around 0.002 SOL and are refunded when you close the associated token account.
- For more information: [What does rent for accounts mean?](https://docs.solana.com/developing/intro/rent)

### What does rent for accounts mean?

- Everything on Solana is an account. If you want to store data, such as the amount of a token you own, you must open an account to hold that data.
- For each token you hold, a token account has to have been created to store/hold how much of that token you own.
- To maintain token accounts, a rent fee must be paid every epoch, otherwise the account will be automatically closed.
- However, if you deposit 2 years worth of rent, the account becomes rent-exempt and you will be able to keep your account open forever, or until you manually close it. This deposit of 2 years rent is approximately **0.02 SOL** at the moment. This is why many programs deduct this amount of SOL from your main account - this amount is then deposited into a token account created to hold new tokens you've acquired.
- Token accounts aren't the only types of accounts that are opened for you. 
- All SOL balances held in these accounts can be reclaimed by closing those accounts. 

### My swap fails, reporting my wallet may not support Versioned transactions. I use a Ledger. What should I do?

- This error usually occurs when the ledger is not up-to-date, or immediately after updating if you haven't re-enabled blind signing. To solve this:
    - Check the firmware version, and update your ledger if necessary.
    - Allow blind signing in the Solana app on your ledger.
- You can also try using Jupiter without Versioned Transactions enabled in the swap settings - transactions that are not Versioned are also called Legacy Transactions. 
<!-- Versioned transaction screenshot -->

### How or whom do I reach out to for partnerships or collaboration? 

- We're happy to partner and collab with anyone in the ecosystem. Please refer to the following READMEs to get featured on the various pages
    - [Github Repo](https://github.com/jup-ag/space-station?tab=readme-ov-file#jupiter-space-station-partner-page) to [Jupiter Space Station Partner Page](https://station.jup.ag/partners)
    - [Github Repo](https://github.com/jup-ag/welcome-partners) to [Welcome to Solana Page](https://welcome.jup.ag/)
- In order for Jupiter to feature you or participate in co-marketing efforts, we require you to clearly indicate and label the usage of Jupiter's products such as, but not limited to, APIs, widgets, interfaces, etc.
- If you need further assistance or have any questions, you can reach us in our [discord](https://discord.gg/jup).  We will respond as soon as possible.
