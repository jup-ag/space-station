---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Web/App Integration

Integrate Jupiter into your Dapp's UI

## Integrating Jupiter with API

You can refer here on how to use [Jupiter API](/start-with-the-jupiter-api).

## Jupiter Terminal

Jupiter Terminal is an open-sourced, lite version of Jupiter that provides end-to-end swap flow by linking it in your HTML with just a few lines of code.

:::tip Jupiter Terminal Demo/ Playground
https://terminal.jup.ag/
:::

With several templates to get you started, and auto-generated code snippets.

[Jupiter Terminal Github Repo](https://github.com/jup-ag/terminal)

:::caution Mode [(Deprecated in v1)](/), Updated to formProps [(Available on v1)](/)
:::

### Core Features

- main-v1.js bundle ~70Kb gzipped
    - app bundle (~900Kb) is loaded on-demand when init() is called.
    - alternatively, preload the app bundle with data-preload attributes.
- Several major built-in wallets, or passthrough wallets from your dApp.
- Auto wallet detection for Versioned Tx.
- Flexbile display modes, Modal, Integrated, or Widget.
- Flexible form customization, e.g. Full swap experience, Payment flow.
- Support ExactIn, and ExactOut swap modes.
- Flexible layout, and customizable stylings.
- Fees support.

### Getting Started

**Integrating Jupiter Terminal**

In your document, link, and embed `main-v1.js`.

```
<script src="https://terminal.jup.ag/main-v1.js" />
```

**Preloading Terminal**

Assign the attribute data-preload to the script tag, the full application will be preloaded on your browser's `(document.readyState === "complete")` event.

```
<script src="https://terminal.jup.ag/main-v1.js" data-preload />
```

Then, 

```
// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
window.Jupiter.init({ endpoint: 'https://api.mainnet-beta.solana.com' });
```

:::info 
Always make sure that you are using your own RPC endpoint. The SOLANA_RPC_ENDPOINT above example may not work anymore.
:::

### Built-in wallets, or passthrough wallets from your dApp

**Mode 1: Wallet passthrough**

If your user has connected their wallet via your dApp, you may pass through the wallet instance via the `init({ passThroughWallet: wallet })`.

```
const App = () => {
  const { wallet } = useWallet();

  const initJupiter = () => {
    if (wallet) {
      window.Jupiter.init({
        endpoint,
        passThroughWallet: wallet,
      });
    }
  };
};
```

**Mode 2: Built-in wallet**

If your user is not connected, Jupiter Terminal has several built-in wallets that users can connect to and perform swaps directly.

### Jupiter Terminal Multi-mode

There are currently 3 modes to integrate Jupiter Terminal into your dApp. 


<Tabs>
  <TabItem value="modal" label="Modal Mode" default>
    [image]
    Modal mode
    By default, Jupiter renders as a modal and takes up the whole screen.

  </TabItem>
  <TabItem value="integrated" label="Integrated Mode">
    Integrated mode
  </TabItem>
  <TabItem value="widget" label="Widget Mode">
    Widget mode
  </TabItem>
</Tabs>
