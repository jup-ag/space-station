---
sidebar_label: Jupiter Lock Overview
title: Jupiter Lock Overview
description: "Jupiter Lock is an open-sourced, audited, and free ecosystem tool to lock and distribute tokens over-time."
---

<head>
    <title>Jupiter Lock Overview</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter Lock (https://lock.jup.ag/) is an [open-sourced](https://github.com/jup-ag/jup-lock), audited and free way to lock and distribute tokens over-time. Lock will be free for all project teams to lock tokens, implement cliff, and vest non-circulating supply in a clear and transparent manner. 

**Jupiter Lock Specifications**
Jupiter Lock is currently in Beta, we aim to improve and introduce additional features. Let us know what you are interested in! 

Audited Twice by [OtterSec](https://github.com/jup-ag/jup-lock/blob/main/audits/OtterSec_2024_08_15.pdf) & [Sec3](https://github.com/jup-ag/jup-lock/blob/main/audits/jup-lock_report_final.pdf). 

Program code is available here: https://github.com/jup-ag/jup-lock

Mainnet Deployment: `LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn` 

:::info Jupiter Lock is in Beta
Feel free to submit PRs, suggestions, or reach out to us! If you need help with Jupiter Lock or have any feedback on how to improve, let us know on Discord or Telegram (t.me/xianxlb). 
:::

-----

### How to Use Jupiter Lock

:::danger Locks are irrevocable
For beta, all locks are irrevocable and final. Make sure that you check all details before creating the contract to lock your tokens! 
:::

**Create Token Lock**

![lock-walkthrough-video](lock-walkthrough.mp4)

1. Navigate to https://lock.jup.ag/. Double check that the URL in your search bar is correct. 
2. Click `+ Create Token Lock` button to start creating a new token lock. 
3. Click `Connect Wallet` button. Note that you can only lock the tokens you have in your connected wallet. 
4. Search for the token you wish to lock via contract address or ticker. 
5. Add a Lock Title to name this lock e.g. Team Tokens. 
6. Fill in the required details:
   1. Lock Amount. You should be able to see the amount of token within your wallet. 
   2. Recipient Wallet Address. The tokens will be released to this wallet after the defined lock period. 
   3. Vesting Start Date. You can select any future date and time. This is based on your current timezone.  
   4. Vesting Duration and intervals. Vesting Duration determines the entire vesting schedule from the Start Date. 
   5. (Optional) Cliff Period & intervals. Cliff refers to a time period that has to pass before the tokens start vesting. 
   6.  Unlock Schedule. This determines how much tokens is being vested and unlocked within that regular time interval. 
7.  (Optional) Add more locks for the same token but with different parameters by clicking `Add Another Lock` button. 
8.  Press `Proceed` to review the token lock contract. After confirming all the details, click `Create Contract` button.
9.  Navigate to Jupiter Lock home page is to view the lock that you’ve created!

-----


**View Locks & Claim Tokens** 
1. Navigate to https://lock.jup.ag/. Double check that the URL in your search bar is correct. You will be able to see All Locks powered by Jupiter Lock. 
2. Click `Connect Wallet` button at the upper right corner of site to check Your Locked Tokens and Locks You Created. 
    1. Your Locked Tokens include tokens that others and yourself have locked and your wallet is a recipient for. 
    2. Locks You Created shows the locks that you are a creator for. 
3. Select the token of interest and check all the locks associated with the token powered by Jupiter Lock. The details include:  
    1. Mint Address: The contract address of the token.  
    2. Locked Amount: Lifetime amount of token being locked via Jupiter Lock. This includes vested and claimed tokens, on top of the locked ones.  
    3. Total Supply: Total supply of the token. This provides perspective to the locked amount in relation to the total supply.  
    4. Lock Title: Title describes the lock and the locked quantity is shown right below the title. 
    5. Vesting Schedule: The schedule shows the full vesting period, including date and time. 
    6. Cliff Date: If a cliff date was added to the contract, it will show up here. 
    7. Recipient: The wallet address shown is the recipient wallet address indicated during creation. 
    8. Unlock Rate: The amount of token vested and unlocked will be shown against the time period.  
    9. Accumulated Amount: The amount of tokens unlocked tokens that have not been claimed. 
    10. Claimed: A progress bar to show the tokens claimed against the total tokens locked. A redirection to the explorer button is included to understand the account in greater detail.  
        1. If it hits 100% claimed, ‘All Claimed’ will be displayed. 
        2. If tokens have accumulated, the `Claim` button will light up for you to claim them.