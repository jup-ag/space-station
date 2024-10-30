
# Create limit order
Sends a POST request to the Jupiter Limit Order API to get the unsigned transactions needed to create an order.

<details>
  <summary>
    <div>
      <div className="api-method-box post">POST</div>
      <p className="api-method-path">https://api.jup.ag/limit/v1/createOrder</p>
    </div>
  </summary>

**Parameters in use in the below code example:**

- `inputMint`: The mint address of the input token (required).
- `outputMint`: The mint address of the output token (required).
- `maker`: Auto wrap and unwrap SOL. Default is true.
- `payer`: The fee account associated with the swap.
- `makingAmount`: Basis points of the fee to be added.
- `takingAmount`
- `expiredAt`
- `feeBps`
- `computeUnitPrice`
- `referral`
- `inputTokenProgram`
- `outputTokenProgram`
- `wrapAndUnwrapSol`

### Example response
```typescript
type CancelOrders = {
  maker: string;

  // "auto" sets the priority fee based on network congestion
  // and it will be capped at 500,000
  computeUnitPrice: string | "auto";

  // Specific order account public keys to cancel/close
  orders?: string[] | undefined;
};

type CancelOrdersResponse = {
  txs: string[];
};
```
</details>



# Cancel limit order
Sends a POST request to the Jupiter Limit Order API to get the unsigned transactions needed to cancel order(s).

<details>
  <summary>
    <div>
      <div className="api-method-box post">POST</div>
      <p className="api-method-path">https://api.jup.ag/limit/v1/cancelOrders</p>
    </div>
  </summary>

**Parameters in use in the below code example:**

- `maker`: 
- `computeUnitPrice`: Defaults to auto
- `orders`: Auto wrap and unwrap SOL. Default is true.


### Example response
```typescript
type CancelOrders = {
  maker: string;

  // "auto" sets the priority fee based on network congestion
  // and it will be capped at 500,000
  computeUnitPrice: string | "auto";

  // Specific order account public keys to cancel/close
  orders?: string[] | undefined;
};

type CancelOrdersResponse = {
  txs: string[];
};
```
:::warning If no orders are specified, the API would return the unsigned transactions to cancel ALL open orders, batched in groups of 5 orders. :::
### Example response
```json
{
  "txs": [
    "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAFCAljyvLecNltZyLKJwcNk/0wjQipK4AUImvf2FZSxHIzhJKWtj2HSC7RNPJa8OnDC9WWH6trCbp1C6qA4BUMaQ0ye0cXKemx6Yc1OP5dEP1Nac45/1jWuZvS7iawRDbqZgMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAACsNKlsFmcVpgwSM+yiWKDfMLHshY4HRcc2oSYmZjSyIGm4hX/quBhPtof2NGGMA12sQ53BrrO1WYoPAAAAAAAQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpkn9sh+xDEAWX2S7IDh4PwuUsi7/8dQ+DB2YEV+4zsuG+7bRt16L/qXhIqNGmwpgUHcNL0fQRKYOGfN2TfXujaQMDAAUCoIwAAAMACQMIQAkAAAAAAAQJAAABAgQFBgcECF+B7fAIMd+EAA==",
    "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAFCAljyvLecNltZyLKJwcNk/0wjQipK4AUImvf2FZSxHIzhJKWtj2HSC7RNPJa8OnDC9WWH6trCbp1C6qA4BUMaQ0ye0cXKemx6Yc1OP5dEP1Nac45/1jWuZvS7iawRDbqZgMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAACsNKlsFmcVpgwSM+yiWKDfMLHshY4HRcc2oSYmZjSyIGm4hX/quBhPtof2NGGMA12sQ53BrrO1WYoPAAAAAAAQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpkn9sh+xDEAWX2S7IDh4PwuUsi7/8dQ+DB2YEV+4zsuEWFbUelyswY5BEVZJ4BDbpIlxW2qs0WTxU97RD4F2/iQMDAAUCoIwAAAMACQNaTggAAAAAAAQJAAABAgQFBgcECF+B7fAIMd+EAA=="
  ]
}
```

</details>

# View open orders
This proxies the `[getProgramAccounts]``(https://solana.com/docs/rpc/http/getprogramaccounts)` RPC method and returns all order (accounts) associated to the specified wallet.

<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://api.jup.ag/limit/v1/openOrders</p>
    </div>
  </summary>

**Parameters in use in the below code example:**

- `publicKey`: 
`inputMint`: The mint address of the input token.
- `outputMint`: The mint address of the output token.

### Example response
```json
[
  {
    "account": {
      "borrowMakingAmount": "0",
      "createdAt": "2024-10-22T11:49:27.000Z",
      "expiredAt": null,
      "makingAmount": "50000000",
      "oriMakingAmount": "50000000",
      "oriTakingAmount": "100000000",
      "takingAmount": "100000000",
      "uniqueId": "3697202764802760127",
      "updatedAt": "1729597767",
      "feeAccount": "APWoLnZc8g8iXLA8qLdHJ4w42ybRrq2Vm8UGQhH7TJ3r",
      "inputMint": "So11111111111111111111111111111111111111112",
      "inputMintReserve": "4Q4Qv1KT1qrpHPydQcoPVoCD9FuCCPPbD211CTW43RVF",
      "inputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "maker": "devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outputTokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "feeBps": 10,
      "bump": 255
    },
    "publicKey": "9vWTg8y4UvrLM49rqvJ2mtmpxicPytNs7FD78352g9Kr"
  }
]
```
</details>

# View order history
Returns a list of all orders and the trades that filled them. The paginated response returns 10 orders at a time and indicates if there are more orders via `hasMoreData` boolean and the current page via `page` in the response.


<details>
  <summary>
    <div>
      <div className="api-method-box get">GET</div>
      <p className="api-method-path">https://api.jup.ag/limit/v1/orderHistory</p>
    </div>
  </summary>

**Parameters in use in the below code example:**

- `wallet`: The response object from the `/quote` API.
- `page`: 

### Example response
```json
{
  "orders": [
    {
      "userPubkey": "devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4",
      "orderKey": "E7EtgGdsdhSkkzAsSLxqWsG5Edc3n4FUL2SXWwPeN3hQ",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "makingAmount": "0.05",
      "takingAmount": "100",
      "remainingMakingAmount": "0.05",
      "remainingTakingAmount": "100",
      "expiredAt": null,
      "createdAt": "2024-10-22T07:48:06Z",
      "updatedAt": "2024-10-22T07:53:02Z",
      "status": "Cancelled",
      "openTx": "4c1vMT1NBs5jNqanjenshNq8LXsLV68KY4mbiizDuRn9rFGEjU8g8cerUTrsmzhu4aYebtp6NyuQgqwUSNpsexYw",
      "closeTx": "4engV35gYcKSDDM57hB4n6ZT3pLKshWSMckNh2tdHrbyKcJm6DUfBAFzufCei8sKWLHDc43dTLejHmkxvKseDW7a",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": []
    },
    {
      "userPubkey": "devjnEpxbJUhJ39FSsFz7YPerr5bdxN8VWUXvfbFUK4",
      "orderKey": "8xZdAtCMNXXy7ijUfxFhNTzJBdUrC4DgmBWCwviJrgPG",
      "inputMint": "So11111111111111111111111111111111111111112",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "makingAmount": "0.05",
      "takingAmount": "100",
      "remainingMakingAmount": "0.05",
      "remainingTakingAmount": "100",
      "expiredAt": null,
      "createdAt": "2024-10-22T07:48:05Z",
      "updatedAt": "2024-10-22T07:53:02Z",
      "status": "Cancelled",
      "openTx": "Pm98oGGxVwaBN5TaoadVArmr6eHRuWpjYUzws5PERbvmufHfAFevaisi17XXmfTSoMW2LUdn9RYmPknzp2ft8kM",
      "closeTx": "4engV35gYcKSDDM57hB4n6ZT3pLKshWSMckNh2tdHrbyKcJm6DUfBAFzufCei8sKWLHDc43dTLejHmkxvKseDW7a",
      "programVersion": "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
      "trades": []
    },
  ],
  "hasMoreData": false,
  "page": 1
}
```
</details>

