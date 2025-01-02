---
sidebar_label: Limit Order Interface
title: Limit Order Interface
description: Introduction to Limit Order Interface
---

<head>
    <title>Limit Order Interface</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section we go through what each setting on the Limit Order dashboard means.

- Limit Order Form
- Open/Historical Limit Order

---

## Limit Order Form

![Limit Order Form](./img/limit-order-form.png)

| Field | Description |
|---|---|
| **(1) Limit** | Select the Limit tab in the Spot navigation menu to arrive at the Limit Order form. |
| **(2) Input Token Selector** | Select the token you want to sell. |
| **(3) Input Token Amount** | Enter the amount of the input tokens that you are looking to sell. |
| **(4) Output Token Selector** | Select the token that you want to buy/receive. |
| **(5) Output Token Amount** | Shows the amount of output tokens you will receive based on your **input amount** and **rate**. |
| **(6) Rate** | Enter the target price for the order to execute.<br /><br />*Do always double check your rate, we always fill at exactly your quote.* |
| **(7) Expiry** | Select the time period where your Limit Order will be active. |
| **(8) Order Summary** | Shows your selections and input for the Limit Order. |
| **(9) Place Limit Order** | Click to submit the transaction to create the Limit Order. |

## Open Orders

![Limit Order Active](./img/limit-order-active.png)

| Field | Description |
|---|---|
| **(1) Open Orders** | This tab shows the active Limit Orders. |
| **(2) Token Deposited Details** | Shows the amount of tokens you are selling and buying. |
| **(3) Target Price per Token** | Shows the target price of your selected token for the order to execute. Once the token reaches this price your order will execute.<br /><br />*This refers to the "Rate" in the Limit Order Form.* |
| **(4) Fill Percentage** | Shows how much of the order is filled. If 100%, it will marker order as completed in Order History tab, else other percentages represent partial fulfilment. |
| **(5) Expanded View** | Click to expand the specific active Limit Order. |
| **(6) Overview** | Shows more details like expiry and filled amount. |
| **(7) View Transaction** | Click to open the transaction of the Limit Order in a blockchain explorer. |
| **(8) Cancel Order** | It closes the specific Limit Order. |
| **(9) Cancel All** | It closes all open Limit Orders. |

## Historical Orders

![Limit Order History](./img/limit-order-history.png)

| Field | Description |
|---|---|
| **(1) Order History** | This tab shows the historical Limit Orders. |
| **(2) Token Deposited Details** | Shows the amount of tokens you are selling and buying. |
| **(3) Target Price per Token** | Shows the target price of your selected token for the order to execute. Once the token reaches this price your order will execute.<br /><br />*This refers to the "Rate" in the Limit Order Form.* |
| **(4) Status** | Shows the final status of the order, if 100% filled, it is marked as completed, else it will be marked as cancelled. |
| **(5) Overview** | Shows more details like expiry and filled amount. |
| **(6) View Transactions** | Tab showing a list of transactions made by the specific Limit Order such as creation, fills, etc. |

## Transactions

![Limit Order Transactions](./img/limit-order-transactions.png)

| Fields | Description |
|--------|-------------|
| **Date/Time** | The date and time when this transaction was executed. |
| **Status** | The type of transaction: Create, Trade, Attempted Trade or Withdrawn. |
| **Amount** | The amount of tokens sold and bought. |

:::tip Explore Further With Blockchain Explorers
For advanced users, you can dive further into the details of each order. Simply click on the redirect link to view the transaction using a blockchain explorer.
:::