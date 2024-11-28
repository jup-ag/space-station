// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'welcome',
    },
    {
      type: 'doc',
      id: 'get-started',
      label: 'Get Started',
    },
    {
      type: 'doc',
      id: 'development-basics',
      label: 'Development Basics',
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Swap API',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'swap-api/get-quote',
        },
        {
          type: 'doc',
          id: 'swap-api/build-swap-transaction',
        },
        {
          type: 'doc',
          id: 'swap-api/send-swap-transaction',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Swap API Guides',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'swap-api/add-fees-to-swap',
        },
        {
          type: 'doc',
          id: 'swap-api/payments-through-swap',
        },
        {
          type: 'doc',
          id: 'swap-api/solana-unity-sdk',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Jupiter Tool Kits',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'tool-kits/swap-terminal',
        },
        {
          type: 'doc',
          id: 'tool-kits/terminal-walkthrough',
        },
        {
          type: 'doc',
          id: 'tool-kits/unified-wallet-kit',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Perp API',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'perp-api/perp-api',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Other Tools',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'other-tools/price-api',
        },
        {
          type: 'doc',
          id: 'other-tools/token-api',
        },
        {
          type: 'doc',
          id: 'other-tools/limit-order-api',
        },
        {
          type: 'doc',
          id: 'other-tools/dca-sdk',
        },
      ],
    },
  ],
};

module.exports = sidebars;
