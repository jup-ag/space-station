---
sidebar_label: Leverage Management  
title: Leverage Management
description: How the Jupiter Perpetuals Exchange Leverage Management works
---

<head>
    <title>Perps: Leverage Management</title>
    <meta name="twitter:card" content="summary" />
</head>

Leverage allows you to trade larger positions than your initial collateral by borrowing funds. On Jupiter Perps, you can use leverage to increase your position size, allowing you to amplify potential profits. However, leverage also increases risk, as both gains and losses are magnified.

---

## How Leverage Works

To allow for leverage, traders borrow assets from the JLP pool to create a larger position. For example, a 2x leverage long position SOL-USD requires 1x SOL as collateral and 1x SOL as borrow.

#### Leverage Limits

Jupiter Perps offers leverage up to **100x** for SOL, ETH, and wBTC. You can adjust your leverage depending on the size of your position and the risk you’re willing to take. The more leverage you use, the higher the potential profit, but the greater the risk of liquidation.

#### Borrow Fees

This borrow leads to an **hourly borrow rate** to be paid to the JLP pool. Positions always pay [borrow fees](./fees) and are never paid funding.

This means actual leverage for a position will be slightly lower as the calculation takes into account all fees associated with maintaining the position.

#### Reducing Position Size
When reducing a position’s size, the collateral is also adjusted accordingly to maintain the same leverage. For example, if you’re holding a position with 10x leverage and reduce the size by 50%, the collateral is decreased by the same proportion to ensure that the leverage remains at 10x.

#### Auto Closing Positions that Exceed Maximum Leverage

The maximum allowed leverage is 500x.

Positions will be liquidated if the trader's collateral, after subtracting fees, adding unrealized profits or subtracting unrealized losses, is less than 0.2% of the position size.
