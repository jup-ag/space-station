---
sidebar_label: "Troubleshooting"
description: Common questions about using the Jupiter SDK / API
---
# Troubleshooting: Common Questions About Using the Jupiter SDK / API

## Frontend

**I'm getting this error: "TypeError: Cannot read properties of undefined (reading 'numRequiredSignatures')"**

- If using Yarn, in `package.json`: `"resolutions": { "@solana/web3.js": "1.31.0" }`.
- Make sure to delete `node_modules` and `yarn.lock`.

**I'm getting this error: "TypeError: fields must be array of Layout instances"**

- add this line in `package.json`.
```js
"resolutions": {
    "@solana/buffer-layout": "4.0.0"
}
```
- Alternatively, remove the above resolution, and update to the latest version.

**I am using craco and I am getting this error: "Module parse failed: Unexpected token"**

Image

- https://github.com/facebook/create-react-app/issues/9468#issuecomment-980702069
- Change browser targets to:

```js
"browserslist": [
   ">0.2%",
  "not dead",
  "not op_mini all"
],
```

**Often times there may be different versions of the same library.**

- To correct it add the correct version to `package.json`: `"resolutions"`.

**Make sure you are using the correct and latest NPM library**
- https://www.npmjs.com/package/@jup-ag/core

**Next.js is not compiling?**

- Next.js needs libraries to be available on the server side to be compilable, checkout our [example here](https://github.com/jup-ag/jupiter-nextjs-example), on how to selectively import libraries based on environment.

## Swap Execution

Common transaction error:

> Program log: Custom program error: 0x1771

> Program Jupiter Aggregator v4  consumed 67018 of 200000 compute units

> Program returned error: custom program error: 0x1771

`0x1771` occurs when the Slippage tolerance is exceeded, so when the final out amount is less than the minimum out amount.

## Wrap and Unwrap SOL

You can refer to the documentation here: https://solanacookbook.com/references/token.html#how-to-manage-wrapped-sol.

## Transaction Confirmation Timeout

From time to time, you may see an error message like `Transaction was not confirmed in 60.00 seconds.`, this means that your transaction expires without being confirmed. To learn how to mitigate this problem, you should read this brilliant article about Solana transaction here:
https://jstarry.notion.site/Transaction-confirmation-d5b8f4e09b9c4a70a1f263f82307d7ce