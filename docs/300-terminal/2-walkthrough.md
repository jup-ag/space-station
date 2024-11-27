---
sidebar_label: "Walkthrough"
description: "Step by step walkthrough of integrating Jupiter Swap Terminal into your website with minimal code."
title: "Walkthrough"
---

<head>
    <title>Step by step walkthrough of integrating Jupiter Swap Terminal Widget into your website with minimal code.</title>
    <meta name="twitter:card" content="summary" />
</head>

In this step by step walkthrough, we will utilize the Solana Dapp Scaffold codebase to demonstrate integrating Jupiter Swap Terminal!

You can also [watch the tutorial on YouTube](https://youtu.be/T-3KN3k1e5Y)!

<iframe 
  width="100%" 
  height="600" 
  src="https://www.youtube.com/embed/T-3KN3k1e5Y" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
  allowfullscreen
  style={{ display: 'block', margin: 'auto' }}>
</iframe>


## Let's Get Started

Since we are building on top of the Solana Dapp Scaffold, we'll start by setting up the necessary codebase and dependencies.

:::tip Jupiter Terminal References
- [Terminal Playground](https://terminal.jup.ag/): To play with different settings,features and styling.
- [Open Source Repository](https://github.com/jup-ag/terminal): To understand and make use of the Jupiter Terminal better.
- [API Type Reference](https://github.com/jup-ag/terminal/blob/main/src/types/index.d.ts): To utilize the different references.
:::

## Set up

Clone the repository to local machine or working environment.
```bash
git clone https://github.com/solana-labs/dapp-scaffold.git
```

Install the dependencies.
```bash
pnpm install
```

Load the site in your localhost.
```bash
pnpm dev
```

## Modify files

### Change network configuration

Next, navigate to `dapp-scaffold/src/contexts/NetworkConfigurationProvider.tsx` file and change your network configuration from `devnet` to `mainnet-beta`.

```jsx
const [networkConfiguration, setNetworkConfiguration] = useLocalStorage("network", "mainnet-beta");
```

### Add Jupiter Terminal script

In the `dapp-scaffold/src/pagers/_document.tsx` file, include your Jupiter Terminal script.

```jsx
...
<Html>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <script src="https://terminal.jup.ag/main-v3.js" data-preload />
    </Head>
    <body>
        <Main />
        <NextScript />
    </body>
</Html>
...
```

### Add necessary imports

In the `dapp-scaffold/src/views/home/index.tsx` file, include these imports.

```jsx
...
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { notify } from 'utils/notifications';

export const HomeView: FC = ({ }) => {
...
```

## Use Jupiter Terminal Playground

Here comes the fun part, this is where you can customize the settings and configurations that best fit your app or site in [Jupiter Terminal Playground](https://terminal.jup.ag/)!

After playing around with what you deem fit best, at the bottom of the playground, the `code snippet` will be readily generated.

All you need to do is copy the code in the code snippet section and paste it directly in the `dapp-scaffold/src/views/home/index.tsx` file (remember to add an `OnClick` to be able to interact with the Terminal).

```jsx
...
  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
            <button OnClick={() =>
                window.Jupiter.init({
                    displayMode: "integrated",
                    integratedTargetId: "integrated-terminal",
                    endpoint: "https://api.mainnet-beta.solana.com",
                    formProps: {
                        fixedInputMint: true,
                        fixedOutputMint: true,
                        swapMode: "ExactIn",
                        fixedAmount: true,
                        initialAmount: "200000000",
                        initialSlippageBps: 1,
                    },
                })
        }> Launch Jupiter Terminal
        </button>
...
```

:::tip Please reach out in Discord
If you need assistance or have questions, feel free to reach out to us on [Discord](https://discord.gg/jup)!
:::