---
sidebar_label: "FAQ"
description: Frequently ask question
---

# FAQ - Frequently Ask Questions

### **I tried opening a position/ adding collateral and it’s not successful. Where is my funds?**

Funds will be returned to your wallet address in 5-10 mins. There might be a delay of up to 20 minutes for the funds to be returned. Learn more to check for the returned funds.

[Returned Funds for Unsuccessful Positions](https://www.notion.so/Returned-Funds-for-Unsuccessful-Positions-6c0062d7b21c4bfc9c108bb70301b186?pvs=21)

_Note: Wallet service providers might not be fully parsing the transactions. If you still couldn’t locate your fund although it was shown that it’s returned on the explorers, please contact your wallet service provider accordingly._

### **I closed my positions with profit and I have not received my funds.**

You will receive the underlying asset for LONG-positions, i.e. SOL for SOL-Long, ETH for ETH-Long, wBTC for wBTC-Long.

You will receive USDC or USDT for ALL SHORT-positions.
Learn more to check for the funds.

[Returned Funds after Closing Position](https://www.notion.so/Returned-Funds-after-Closing-Position-2e9625b699e34e11bc2aec7d0667e56a?pvs=21)

### **The price has reached my TP/SL price on the chart. Why is my TP/SL not triggered?**

- Associated Token Account (ATA) is active.

Please ensure you have an active ATA in order for TPSL to be triggered and executed.

- ETH Token Account for ETH-Long;
- wBTC Token Account for wBTC-Long;
- USDC and USDT Token Account for ALL Short positions.

**Oracle - Pythnet vs. Mainnet beta**

For full detail, please refer [here](https://station.jup.ag/labs/perpetual-exchange/how-it-works#oracle)

**`TLDR:`**

Chart data: Jupiter uses pythnet oracle https://pyth.network/price-feeds/crypto-sol-usd?cluster=pythnet

Position: Jupiter uses mainnet-beta oracle https://pyth.network/price-feeds/crypto-sol-usd?cluster=solana-mainnet-beta

If you’ve ensured that you have the active ATA for the position, checked the mainnet-beta price and TPSL was indeed not triggered at the price it was supposed to, please proceed to open a Perp-ticket.

### **Why is my liquidation price changing?**

Please take into account that there is an Hourly Borrow Fee, which will affect the liquidation price over time.

Read more about Hourly Borrow Fee [here](https://station.jup.ag/labs/perpetual-exchange/how-it-works#hourly-borrow-rate).

### **I deposited 1 SOL (where 1 SOL = $100) for SOL-Long position, profited $50 (where 1 SOL = $120). Why did I get lesser amount? Why didn’t I get back 1.5 SOL?**

The **`PNL`** shown is the amount before fees. The exact amount is shown under **`Deposit/Withdraw`** tab.

[Example Trade](https://station.jup.ag/labs/perpetual-exchange/how-it-works#example-trade)

Assuming 0 fees, with $50 profit, you will be getting SOL in return with value of $150. At the time of closing the position, 1 SOL = $120.
$150 / $120 = 1.25

Hence you will be getting 1.25 SOL where the value is equivalent to $150.

![faq1](./faq1.png)

To further explain, take the above position as an example, since this is a SOL-Long position, the total amount the user should be getting is $3086.28 in SOL.

The value of SOL at the time is $189.28, hence $3086.28 / $189.28 = 16.30

User will receive 16.30 SOL in return.

_Note: The calculation will be the same for ETH-Long and wBTC-Long positions._
