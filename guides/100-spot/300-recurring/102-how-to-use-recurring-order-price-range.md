---
sidebar_label: How to use Price Range
title: How to use Price Range
description: Guide to use price range with Jupiter Recurring Order
---

<head>
    <title>Recurring Order Price Range</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter Recurring Order has a unique **Price Range** feature, which in short, allows you to set a minimum and/or maximum price for the Recurring Order to only execute in.

This feature ensures your orders align with your desired price range, offering better control and flexibility over your trades.

---

## How to set up Price Range?

1. **Navigate to the Jupiter Recurring Order Interface**    
   Once you're on the Recurring Order Interface, set up your order.

2. **Enable Price Range**  
   Look for the fields just above the `Start Recurring Order` button. To enable the Price Range, simply set your desired Minimum Price or Maximum Price.

![Recurring Order Price Range](../../../static/spot/dca/dca-102-1.png)

3. **Set Your Minimum and/or Maximum Price**  
   - **Min Price:** Set the lowest price at which you want the Recurring Order to execute.
   - **Max Price:** Set the highest price at which you want the Recurring Order to execute.
   - **Example**    
   If you set the Min Price to $200 and Max Price to $250 for SOL/USDC, your Recurring Order will only execute when SOL is between $200 and $250.

   :::note
   Do note that you can set up Min Price and Max Price independently.
   :::

4. **Confirm and Start Your Recurring Order**  
   Review your price range settings and order details. Once confirmed, start the Recurring Order.

---

## When to use Price Range?

1. **Avoid High Prices in Volatile Markets**  
   If the market price of your chosen asset spikes suddenly, Price Range ensures you don’t DCA at undesirably high levels.

2. **Capitalize on Buying the Dip**  
   Set a maximum price near recent lows to accumulate assets during a market correction without overspending.

3. **Control Long-Term Recurring Order Execution**  
   For extended Recurring Order campaigns, use a reasonable Min/Max range to maintain cost efficiency over time.

4. **"Trigger Order" Using Recurring Order**    
    Instead of a limit order with 0% slippage since it executes at the exact price, you can use Recurring Order Price Range to enter or exit positions with specific price ranges.

---

## Tips

- **Use Price Range with a Broader Range in Volatile Markets:**  
   Markets with frequent price swings may require a larger Min/Max price range to ensure your Recurring Order can still execute consistently.

- **Combine with Smaller Recurring Order Intervals for Precision:**  
   Setting frequent intervals (e.g., hourly) alongside a price range helps you capture more optimal entry points.

- **Monitor and Adjust as Needed:**  
   Regularly review your Price Range settings to ensure they align with changing market conditions.

- **Avoid Overly Tight Ranges:**  
   Setting a very narrow Min/Max range could result in missed opportunities if prices fluctuate outside your bounds.
