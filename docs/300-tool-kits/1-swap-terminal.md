---
sidebar_label: "Swap Terminal"
description: "An overview of Jupiter Swap Terminal and its core features."
title: "Swap Terminal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@theme/CodeBlock';

<head>
    <title>Swap Terminal</title>
    <meta name="twitter:card" content="summary" />
</head>

Jupiter Terminal is an open-sourced, lite version of Jupiter. This terminal provides end-to-end swap functionality by linking it in your HTML with just a few lines of code.

:::tip Jupiter Terminal References
- [Terminal Playground](https://terminal.jup.ag/): To play with different settings,features and styling.
- [Open Source Repository](https://github.com/jup-ag/terminal): To understand and make use of the Jupiter Terminal better.
- [API Type Reference](https://github.com/jup-ag/terminal/blob/main/src/types/index.d.ts): To utilize the different references.
:::

<video controls width="540">
  <source src="/terminal/demo/terminal-marketing.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Core Features

| **Feature** | **Details** |
|---|---|
| **Lightweight**      | -`main-v3.js` bundle (~70KB gzippped)<br />- App bundle (~1.1 MB gzipped) loads on-demand when `init()` is called.<br />- Preload app bundle with `data-preload` attributes. |
| **Agnostic**         | - Works with any application in Integrated, Widget, or Modal format.<br />- Compatible with frameworks like React, Plain HTML, etc.<br />- Responsive to all screen sizes. |
| **Customization** | - Supports Swap, Payment, or Ape tokens use cases.<br />- Allows fixed input/output amounts or mint.<br />- Offers ExactIn or ExactOut swap modes. |
| **Built-in Wallets** | - Wallet Standard support, powered by Unified Wallet Kit.<br />- Passthrough wallet from your app. |
| **Fees Support**     | - Customizable fees and trackable via [Referral Dashboard](https://referral.jup.ag/dashboard). |

## API References

<details>
    <summary>
        Typescript Support
    </summary>
Since Jupiter Terminal is only importable via CDN, to get proper typing, you can create a typing declaration jupiter-terminal.d.ts file in your project, and copy the contents in <a href="https://github.com/jup-ag/terminal/blob/main/src/types/index.d.ts">src/types/index.d.ts</a>.

```jsx
declare global {
    interface Window {
        Jupiter: JupiterTerminal;
    }
}
// ...
// ...
// ...
```
</details>

<details>
    <summary>
        Fee Support
    </summary>
There are no protocol fees on Jupiter, but integrators can introduce a platform fee on through the Swap Terminal as underlying, it is using the Swap API which allows you to take fees.

Refer to the [Add Fees To Swap](../100-swap-api/4-add-fees-to-swap.md) guide to get the accounts and add it.

```jsx
window.Jupiter.init({
    // ...
    platformFeeAndAccounts,
});
```
</details>

<details>
    <summary>
        Resuming / Closing Activity
    </summary>
- Every time `init()` is called, it will create a new activity.
- If you want to resume from previous activity, you can use `resume()` instead.
- `close()` function to hide the widget.

```jsx
if (window.Jupiter._instance) {
    window.Jupiter.resume();
}

window.Jupiter.close();
```
</details>

<details>
    <summary>
        Token List
    </summary>
The Jupiter Token List API is an open, collaborative and dynamic token list to make trading on Solana more transparent and safer for all. It is default to `true` to ensure that only validated tokens are shown.

- `strictTokenList?: boolean;`

</details>

<details>
    <summary>
        onSuccess / onSwapError Callback
    </summary>
`onSuccess()` and `onSwapError()` reference can be provided, when swap is successful or errored respectively.

```jsx
window.Jupiter.init({
    onSuccess: ({ txid, swapResult }) => {
        console.log({ txid, swapResult });
    },
    onSwapError: ({ error }) => {
        console.log('onSwapError', error);
    },
});
```
</details>

<details>
    <summary>
        Customizing Styles
    </summary>

**CSS Properties**

Any CSS-in-JS can be injected to the outer-most container via `containerStyles` API.

```jsx
window.Jupiter.init({
    // ... 
    containerStyles: { zIndex: 100 },
    containerStyles: { maxHeight: '90vh' },
});
```

**className (Tailwind)**

Tailwind classes can be injected to the outer-most container via `containerClassName` API.

```jsx
window.Jupiter.init({
    // ...
    containerClassName: 'max-h-[90vh] lg:max-h-[600px]',
});
```
</details>
