---
title: How to use Jupiter DCA
sidebar_label: "How to Use DCA"
description: "Learn how to use Dollar Cost Averaging on Jupiter to get the best price on your trades."
---

<head>
    <title>How to use Dollar Cost Averaging (DCA) on Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>

**Jupiter DCA** is a dollar cost averaging solution to enable users to automate the purchase or sale of any SPL tokens at a regular intervals over a certain period of time.

## Basic DCA User Flow

1. First, navigate to the [Jupiter Website](https://jup.ag/) and then click on the `DCA` icon below the top navigation bar. **Double check** that the URL in your search bar is correct: https://jup.ag/dca/
2. Next, connect your wallet by clicking the `Connect Wallet` button in the upper right corner of the site.
3. Select the token you are selling and the token you are going to be buying on the DCA terminal.
4. Enter the amount of the token you want to allocate to the DCA orders in the amount field, 
5. Set the Frequency(Every) and the Duration(Over) for the DCA orders. 
6. Double check the Order Summary details and if things look good, click the `Start DCA` button.
7. Confirm the wallet notification and the DCA Order will be submitted to the system. 
8. A notification toast will appear in the lower left corner that will notify the user once the transaction has been sent and has completed.
9. Your new DCA will populate the Active DCAs section below the Terminal once it is confirmed and the UI updates.
10. You can expand the Active DCAs and inspect the progress of the DCA in the Overview tab, or inspect the individual orders on the Order tab.

**Let's go through the DCA Settings in more detail below.**


![DCA1](../img/dca/dca-1.jpg)

1. **DCA** The DCA tab in the product navigation menu.
2. **Input Token Selector** Select the token you want to spend with your DCA orders.
3. **Input Field** The amount of the input tokens that you are looking to spend with your DCA orders.
4. **Output Token Selector** The token that you are looking to DCA into or Buy.
5. **Frequency** Specify the time freqency for the DCA order with a numerical input and the dropdown selector.
6. **Duration** The number of orders you want the DCA to be spread out over. 
7. **Order Summary** The details for the current DCA order that you are creating. 
    From the screenshot example:
    - Sell - 1 SOL (You are selling SOL)
    - Get - USDC (You are buying USDC)
    - Frequency - Days (A trade will take place every day)
    - Amount per cycle - An estimation of the amount of tokens you will be receiving with each order.
    - End Date - The final DCA orders will finish by this date.
8. **Start DCA** to submit the transaction.

![DCA2](../img/dca/dca-2.jpg)

1. **Active DCAs** This tab lists out all of your active DCA orders.
2. **Individual DCA Orders** On-going DCAs with a progress bar to indicate how much of the DCA has been executed.
3. **Order Overview** To see the DCA order details expand one of your on-going DCA orders and review the Overview Details.
4. **Balance Summary** This shows the DCA order balance progress. The current input token balance that is in the DCA program waiting to be executed. It also shows your output tokens that have successfully been traded alongside the available withdraw amount.
5. **Order Summary** shows the current on-going DCA order, with information like:
    - Total Deposited - The input amount and token that user selling or swapping from.
    - Total Spent - The progress of the DCA, or the amount spent to swap from.
    - Each Order Size - The average order size for the DCA.
    - Current Average Price - The average price for each order from input token to output token.
    - Buying - The output token you are purchasing with the DCA order.
    - Interval - The time interval specified in the Frequency fields.
    - '# of Orders Left - The number of orders remaining with this DCA request.
    - Created - The date and time when the DCA initiated or submitted.
    - Date Ends - The date and time when the DCA will be ending.
6. **Close and Withdraw** Use this to cancel and close the DCA, this will halt the progress on the DCA order and withdrawal all funds in the order to your wallet. 

![DCA3](../img/dca/dca-3.jpg)

1. **Trades Tab** is where all the transaction/ trade for the current on-going DCA order house in.
2. **Trade Summary** shows each iteration/ cycle amount and the filled amount with respective date and transaction id.

![DCA4](../img/dca/dca-4.jpg)

1. **Past DCAs** Here you will find all your DCA order history, whether they completed or were cancelled.
2. **Order Overview** This tab is the same as above and opens up to show the order and balance summary.
3. **Balance Summary** You can see the balance details of past order here.
4. **Order Summary** This shows all of the details of the past order including all of the details outlined above.

![DCA5](../img/dca/dca-5.jpg)

1. **Orders** All the transactions for your DCA orders are shown here.
2. **Trade Summary** This shows each individual order amount respective to the date and transaction id.
