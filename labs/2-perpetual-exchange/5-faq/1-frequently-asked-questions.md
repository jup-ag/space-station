---
sidebar_label: "Frequently Asked Questions"
description: Frequently ask question
---

# FAQ - Frequently Asked Questions

### **I tried opening a position/ adding collateral and it’s not successful. Where is my fund?**

Fund will be returned to your wallet address in 10-15 mins. There might be a delay for the fund to be returned when the network is congested.

[Learn more](2-returned-fund.md) to check for the returned fund.

_Note: Wallet service providers might not be fully parsing the transactions. If you still couldn’t locate your fund although it was shown that it’s returned on the explorers, please contact your wallet service provider accordingly._

### **I closed my position with profit and I have not received my fund.**

You will receive the underlying asset for LONG-position, i.e. SOL for SOL-Long, ETH for ETH-Long, wBTC for wBTC-Long.

You will receive USDC or USDT for ALL SHORT-position.

[Learn more](3-returned-fund2.md) to check for the fund.

### **The price has reached my TP/SL price on the chart. Why is my TP/SL not triggered?**

**Associated Token Account (ATA) is active.**

Please ensure you have an active ATA in order for TPSL to be triggered and executed.

- ETH Token Account for ETH-Long;
- wBTC Token Account for wBTC-Long;
- USDC and USDT Token Account for ALL Short positions.

**Oracle - Pythnet vs. Mainnet beta**

For full detail, please refer [here](https://station.jup.ag/labs/perpetual-exchange/how-it-works#oracle)

**`TLDR:`**

Chart data: Jupiter uses [pythnet oracle](https://pyth.network/price-feeds/crypto-sol-usd?cluster=pythnet)

Position: Jupiter uses [mainnet-beta oracle](https://pyth.network/price-feeds/crypto-sol-usd?cluster=solana-mainnet-beta)

If you’ve ensured that you have the active ATA for the position, checked the mainnet-beta price and TPSL was indeed not triggered at the price it was supposed to, please proceed to open a [Perp-ticket](https://discord.com/channels/897540204506775583/1197460751556804608).

### **Why is my liquidation price changing?**

Please take into account that there is an Hourly Borrow Fee, which will affect the liquidation price over time.

Read more about Hourly Borrow Fee [here](https://station.jup.ag/labs/perpetual-exchange/how-it-works#hourly-borrow-rate).

### **I deposited 1 SOL (where 1 SOL = $100) for SOL-Long position, profited $50 (where 1 SOL = $120). Why did I get lesser amount? Why didn’t I get back 1.5 SOL?**

The **`PNL`** shown is the amount before fees. The exact amount is shown under **`Deposit/Withdraw`** tab.

[Example Trade](https://station.jup.ag/labs/perpetual-exchange/how-it-works#example-trade)

Assuming 0 fee, with $50 profit, you will be getting SOL in return with value of $150. At the time of closing the position, 1 SOL = $120.
$150 / $120 = 1.25

Hence you will be getting 1.25 SOL where the value is equivalent to $150.

![faq1](./faq1.png)

To further explain, take the above position as an example, since this is a SOL-Long position, the total amount the user should be getting is $3086.28 in SOL.

The value of SOL at the time is $189.28, hence $3086.28 / $189.28 = 16.30

User will receive 16.30 SOL in return.

_Note: The calculation will be the same for ETH-Long and wBTC-Long positions._
