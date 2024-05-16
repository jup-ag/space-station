---
sidebar_label: "Links and Contract Addresses"
description: Access Jupiter SDK & API contract addresses
title: Helpful Links and Contract Addresses
---

<head>
    <title>Jupiter API Links and Contract Addresses</title>
    <meta name="twitter:card" content="summary" />
</head>


## Contracts
- Jupiter Swap: `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4`
- Jupiter Limit Order: `jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu`
- Jupiter DCA: `DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M`
## SDKs & APIs

- Jupiter API
    - [v6 API](/api-v6) uses JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 with versioned transactions & address lookup tables so all swap routes take just 1 transaction. Also, no intermediate token accounts and open order accounts are needed anymore.
    - [v4 API](https://quote-api.jup.ag/v4/docs/static/index.html) uses JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB with versioned transactions & address lookup tables so all swap routes take just 1 transaction.
    - [v3 API](https://quote-api.jup.ag/v3/docs/static/index.html) uses JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB which uses legacy transactions so some swap routes can take up to 3 transactions.
- Jupiter Core Library [NPM](https://www.npmjs.com/package/@jup-ag/core)
    - 4.x.x uses JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB with versioned transactions & address lookup tables.
    - 3.x.x uses JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB
    - 2.x.x uses JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph
    - 1.x.x uses JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo
- Jupiter React-Hook [NPM](https://www.npmjs.com/package/@jup-ag/react-hook)

## Github Repo

- https://github.com/jup-ag