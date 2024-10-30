# Create Order API Endpoint

<details>
<summary>/limit/v1/createOrder</summary>

**Method:** POST  
**URL:** [https://api.jup.ag/limit/v1/createOrder](https://api.jup.ag/limit/v1/createOrder)

Sends a POST request to the Jupiter Limit Order API to get the unsigned transactions needed to create an order.

</details>

<details>
  <summary>
    <div>
      <div className="api-method-box get">Post</div>
      <p className="api-method-path">[https://api.jup.ag/limit/v2/createOrder](https://api.jup.ag/limit/v2/createOrder)</p>
    </div>
  </summary>

```shell
curl -s 'https://quote-api.jup.ag/v6/quote?inputMint=mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=5000000&swapMode=ExactOut&slippageBps=50' | jq '.inAmount, .otherAmountThreshold'
```

**Parameters:**
- `inputMint`: The mint address of the input token (required).
- `outputMint`: The mint address of the output token (required).
- `maker` 
- `payer`
- `makingAmount`
- `takingAmount`
- 
**Response**:

<details>
    <summary>
      <span style={{color: '#018847'}}>&bull; </span>
      <span style={{fontSize: '14px'}}>
      <b style={{color: '#018847', marginRight: '36px'}}>200: OK</b>
        Success Response
      </span>
    </summary>

```json
{
    "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    "inAmount": "23698263",
    "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "outAmount": "5000000",
    "otherAmountThreshold": "23816755",
    "swapMode": "ExactOut",
    "slippageBps": 50,
    "platformFee": null,
    "priceImpactPct": "0",
    "routePlan": [
        {
            "swapInfo": {
                "ammKey": "8EzbUfvcRT1Q6RL462ekGkgqbxsPmwC5FMLQZhSPMjJ3",
                "label": "Raydium CLMM",
                "inputMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
                "outputMint": "So11111111111111111111111111111111111111112",
                "inAmount": "23698263",
                "outAmount": "28158132",
                "feeAmount": "1992",
                "feeMint": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
            },
            "percent": 100
        },
        {
            "swapInfo": {
                "ammKey": "CSP4RmB6kBHkKGkyTnzt9zYYXDA8SbZ5Do5WfZcjqjE4",
                "label": "Whirlpool",
                "inputMint": "So11111111111111111111111111111111111111112",
                "outputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
                "inAmount": "28158132",
                "outAmount": "100994175",
                "feeAmount": "1",
                "feeMint": "So11111111111111111111111111111111111111112"
            },
            "percent": 100
        },
        {
            "swapInfo": {
                "ammKey": "5LnAsMfjG32kdUauAzEuzANT6YmM3TSRpL1rWsCUDKus",
                "label": "Whirlpool",
                "inputMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
                "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                "inAmount": "100994175",
                "outAmount": "5000000",
                "feeAmount": "131292",
                "feeMint": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"
            },
            "percent": 100
        }
    ],
    "contextSlot": 267155237,
    "timeTaken": 0.010184745
}
```
</details>

<details>
  <summary><span>&bull; </span><b style={{marginRight: '36px'}}>default</b> <span style={{fontSize: '14px'}}>Error Response</span></summary>

```json
{
    "errorCode": "string",
    "error": "string"
}
```
</details>
</details>
