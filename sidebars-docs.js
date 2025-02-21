// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'doc',
      id: 'api-setup',
    },
    {
      type: 'doc',
      id: 'dex-integration',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'get-started',
    },
    {
      type: 'doc',
      id: 'development-basics',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'sdk-api-license-agreement',
    },
    {
      type: 'doc',
      id: 'terms-of-use',
    },
    {
      type: 'doc',
      id: 'privacy-policy',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  swap: [
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
        {
          type: 'doc',
          id: 'swap-api/program-errors',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
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
        {
          type: 'doc',
          id: 'tool-kits/swap-terminal',
          label: 'Integrate Swap Terminal',
        },
        {
          type: 'doc',
          id: 'dex-integration',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Spot Products',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'swap-api/limit-order-api',
        },
        {
          type: 'doc',
          id: 'swap-api/dca-sdk',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  perp: [
    {
      type: 'category',
      label: 'Perp API',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'perp-api/index',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Perp Program',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'perp-api/position-account',
        },
        {
          type: 'doc',
          id: 'perp-api/position-request-account',
        },
        {
          type: 'doc',
          id: 'perp-api/pool-account',
        },
        {
          type: 'doc',
          id: 'perp-api/custody-account',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  toolkit: [
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
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  other: [
    {
      type: 'category',
      label: 'Utility',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'utility/price-api',
        },
        {
          type: 'doc',
          id: 'utility/token-api',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
};

module.exports = sidebars;
