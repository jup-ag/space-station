---
sidebar_label: "Unified Wallet Kit"
description: Explore Jupiter Terminal for seamless DApp integration with a feature-rich API. Start now with easy templates and guides. Visit our demo!
title: Jupiter Terminal Docs
---

<head>
    <title>Unified Wallet Kit - A Powerful Wallet Integration Tool</title>
    <meta name="twitter:card" content="summary" />
</head>

<img src="/terminal/demo/terminal-hero.gif" />

Jupiter Terminal is an open-sourced, lite version of Jupiter. This terminal provides end-to-end swap flow functionality by linking it in your HTML with just a few lines of code.

Provided with the code are several templates to get you started and auto generated code snippets.

:::tip Unified Wallet Adapter Links
- Demo: https://unified.jup.ag/
- Repo: https://github.com/TeamRaccoons/Unified-Wallet-Kit
:::


## Core Features
- Compact Bundle: Main ESM bundle is a lightweight 94KB (20KB gzipped).
- Built-in Support: Comes with Wallet Standard and Mobile Wallet Adapter support.
- Abstracted Wallet Adapter: Use the Bring Your Own Wallet (BYOW) approach to select custom and legacy wallets.
- Mobile Responsive: Designed to be mobile-first.
- Smart Notification System: Integrates seamlessly with your existing notification system or can be used independently.
- Internationalization: Supports multiple languages including English, Chinese, Vietnamese, French, Japanese, Bahasa Indonesia, and Russian.
- Theming Options: Choose from light, dark, and Jupiter modes, with more customization options coming soon.
- New User Onboarding: Simplifies the onboarding process for new users.

## Implementation

Implementing the Unified Wallet Kit is straightforward and efficient. Here's a quick guide to get you started:

1. Install the Unified Wallet Kit to your project dependencies.
```
pnpm i @jup-ag/wallet-adapter
```

2. Wrap your app with <UnifiedWalletProvider /> and pass in as little to as many wallets you would like to support.

### Below is a provided example from the Unified Wallet Kit Repository.

```
js
const ExampleBaseOnly = () => {
  return (
    <UnifiedWalletProvider
      wallets={[]}
      config={{
        autoConnect: false,
        env: 'mainnet-beta',
        metadata: {
          name: 'UnifiedWallet',
          description: 'UnifiedWallet',
          url: 'https://jup.ag',
          iconUrls: ['https://jup.ag/favicon.ico'],
        },
        notificationCallback: WalletNotification,
        walletlistExplanation: {
          href: 'https://station.jup.ag/docs/additional-topics/wallet-list',
        },
      }}
    >
      <UnifiedWalletButton />
    </UnifiedWalletProvider>
  );
};

export default ExampleBaseOnly;
```

:::info
This kit also supports the attachment of custom elements to specific wallets
:::

```
js
config={{
  walletAttachments: { 
    'Phantom': {
      attachment: <div tw="text-xs rounded-md bg-red-500 px-2 mx-2 text-center">Auto Confirm</div>
    } 
  }
}}
```

## Live Playground
<image here>

:::info
See all of the available features the Unified Wallet Kit provides in real-time at our live playground: https://unified.jup.ag. To see more examples of how the code works view the Unified Github Wallet Kit.
:::

---
<br/>
<br/>