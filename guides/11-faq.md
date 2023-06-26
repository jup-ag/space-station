---
title: Jupiter Frequently Ask Question
sidebar_label: "Jup FAQ"
description: "Frequently ask question can be found here"
---

## Does Jupiter swap charge any fees?

Jupiter does not charge any fees at the moment, the transaction fees that you see in the details, are the Solana fees (aka gas fees), and if you are swapping into any new token or through a new DEX / AMM, there will be a minor deposit fees / rent fees to create the [ATA (Associated Token Accounts)](https://spl.solana.com/associated-token-account) which will be refunded when you close the account. 

## Are Liquidity Provider fees included in the quoted price?

- Yes, the displayed price includes liquidity provider fees and price impact
- You can find the details in the "Price info " table.

## In the Wallet transaction history, I don't see the swap, did I receive my tokens?

- The wallet transaction history is based on blockchain data decoding.
- Some wallets may not decode the data correctly.
- You can check your swap history on Jupiter, from the right menu.
- From this menu, you can click on the link to the block explorer to check the transaction.
- Block explorer allows you to check by using the "SOL Balance Change" and “Token Balance Change” tabs.

## In the Wallet transaction history, I see some tokens being burned, did I receive my tokens?

- A swap requires the use of liquidity pools (LP) on DEXs. Some DEXs use an LP-token burn mechanism during the swap. This has no impact on the tokens received.
- You can check the tokens received using an explorer such as solscan.io and look in the "SOL balance change" and/or "token balance change" tabs.

## My swap fails, reporting a slippage error. What should I do?

- Slippage occurs because of changing market conditions between the moment the transaction is submitted and its verification.
- Your slippage rate is an important setting, it works as a protection. If the price falls below your slippage rate, then the transaction will fail in order to prevent you from getting less tokens than you want.
- You can adjust your slippage. By default, slippage is set to 0.5%, meaning if the price slips more than 0.5% of your quote, the trade will not be completed.
- When markets are very active, many transactions take place on the same DEX accounts. To allow your transaction to be included in priority against others, you can adjust your transaction fees.
- You can adjust your Transaction Priority fees. By default, transaction priority is set to Auto.
- Learn more about [slippage and price impact](./4-price-impact-slippage-price-warning)

## What does it mean when I get the 'some routes failed to load...'

- This means that when Jupiter tried to refresh the routes to fetch the most up-to-date pricing, it failed to return those routes. This could be due to RPC node issues. We won't let you swap because the current route pricing options we show may be outdated, and that put you at risk of getting the less optimum price. 
- You may try to change the RPC (setting accessible from the top-right wheel icon) and refresh the page and try to fetch those routes again.

## My swap fails, reporting my wallet may not support Versioned transaction. I use a Ledger. What should I do?

- This error usually occurs when the leger is not up-to-date, or just after updating if you haven't re-allowed blind signing. To solve this:
- Check the firmware version and update your ledger if necessary.
- Allow bling signing in the Solana app on your ledger.

## What does it mean when I see "unable to fetch balance changes" in Phantom?

- This just means the phantom simulator can’t simulate the transaction. 
- The phantom simulator is just a helpful tool to summarize what it thinks is going to happen, but, there are transactions where it's unable to do that.  It does not guarantee anything and a malicious dApp can still take control of your wallet.
- If you trust the dApp and have had successful transactions, then there is nothing to worry about. 
- If it's your first time approving a dApp, click on "view advanced transaction details to review the actual transaction. Pay attention to the amounts approved. Another option is to just use a burner wallet with only the needed funds on your first transaction to protect yourself.

## My swap fails, reporting that the account does not have enough SOL. Why?

- On Solana, you use SOL to pay transactions (around 0.000005 sol) but also to pay rent fees for token accounts. It's around 0.002 SOL and they are refundable when you close the account.
- Read: [What does rent for accounts mean?](./11-what-does-rent-for-accounts-mean)

## What does rent for accounts mean?

- Everything on Solana is an account, if you want to store data, in particularly the amount of a token you own, you must open a new account to hold that data.
- So for every token you own, you must open an account to store/hold how much of that token you own.
- To create an account you must pay rent every epoch to maintain it otherwise it will be automatically closed.
- However if you deposit 2 years worth of rent, then your account becomes rent-exempt and you will be able to keep your account open forever, or until you close it. This deposit of 2 years rent is approximately **0.02 SOL** at the moment. And this is why many programs deduct this amount from your main account to deposit into a token account created to hold the new tokens you've just acquired.
- Token accounts aren't the only types of accounts that are opened for you. 
- All SOL balances held in these accounts can be reclaimed by closing those accounts. 

## In the Wallet transaction history, of using the Limit order, I see many failed transactions, did I pay for that transaction fees?

- By initiating an order on the limit order, a keeper will try to fill your orders with swaps as soon as the specified price is reached. Sometimes, mostly due to slippage, transactions can fail.
- The transaction fees for transactions initiated (and signed) by the keeper are paid by the keeper.