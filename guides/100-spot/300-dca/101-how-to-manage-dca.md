---
sidebar_label: How to manage DCA orders
title: How to manage DCA orders
description: Guide to manage your DCA orders
---

<head>
    <title>DCA Guide: Manage Orders</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter makes it easy to manage multiple DCA plans seamlessly, whether you’re diversifying your portfolio or optimizing investments for different tokens. This guide will walk you through the process step-by-step.

---

## Create New DCA

Simply create a new DCA just like you did before! If you’re starting out, head over to this [guide](./100-how-to-create-dca.md)!

## View Active DCA

Right on the dashboard you can view all your active DCAs.

1. Navigate to the “Active DCAs” section.
2. Here, you’ll see a list of all your active DCA plans.

![View Active DCA](./img/dca-7.png)

### Understanding The Details

Each plan in the “Active DCA” section will display key details to help you track progress.

1. **Active DCAs:** This tab lists out all of your active DCA orders.
2. **Individual DCA Orders:** Ongoing DCAs with a percentage to indicate how much of the DCA has been executed.
3. **Order Details:** To see the entire DCA order details, expand by clicking one of your ongoing DCA orders.
4. **Balance Summary:** This shows the DCA order balance progress where you can track the balances for the tokens you allocated, you are buying and you have withdrawn.
5. **Order Summary:** This will show the current ongoing DCA order, with information like:
    
    | Field | Description |
    |-------|-------------|
    | Total Deposited | The input amount and token that you are selling or swapping from. |
    | Total Spent | The progress of the DCA, or the amount spent to swap from. |
    | Every | The time interval specified in the Frequency fields. |
    | Over | The total number of purchases. |
    | Each Order Size | Total deposited divide by Total number of purchases |
    | Orders Remaining | The number of purchases left to complete the DCA. |
    | Current Average Price | Sum of the price of each transaction divide by Total current completed purchases |
    | Current Price | The price of the token your are buying now. |
    | # of Orders Left | The number of orders remaining with this DCA request. |
    | Created At | The date and time when the DCA was submitted. |
    | Next Order At | The date and time of the next order to be executed. |

### Close and Withdraw

Use the button in your active DCA to cancel and close the DCA. This will halt the progress on the DCA order and withdraw all funds in the order to your wallet.

:::note
The previously completed purchases should have sent the tokens into your wallet upon each purchase, unless you have closed your ATA (Associated Token Account) which you may bulk withdraw them when you cancel and close the DCA.
:::

## View DCA History

This tab lists all DCA plans that have been completed or canceled. Each past plan will display:

- The same DCA plan details as stated above.
- Status (completed or canceled).

Once you select a Past DCA, you can view all the transactions for your DCA order.

## View DCA Transactions

A DCA plan can be made up of multiple transactions, such as the order creation transaction, each purchase's transaction and the order close transaction. In order to view each transactions, click on one of your orders and head over to the **"Orders"** tab.

| Fields | Description |
|--------|-------------|
| Date/Time | The date and time when this transaction was executed. |
| Status | The type of transaction: Create, Trade, Close or Withdrawn. |
| From/To | The amount of tokens sold and bought. |
| Rate | The rate of the purchase for the transaction. |

:::tip Explore Further With Blockchain Explorers
For advanced users, you can dive further into the details of each order. Simply click on the redirect link to view the transaction using a blockchain explorer.
:::

![View DCA Transactions](./img/dca-9.png)