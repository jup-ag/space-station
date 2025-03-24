export const navbarConfigs = {
    '/docs': [
      { to: '/docs/', label: 'Overview', position: 'left' },
      {
        to: '/docs/swap-api/get-quote',
        label: 'APIs',
        position: 'left',
        items: [
          { to: '/docs/ultra-api/', label: 'Ultra API', position: 'left' },
          { to: '/docs/swap-api/get-quote', label: 'Swap API', position: 'left' },
          { to: '/docs/trigger-api/create-order', label: 'Trigger API', position: 'left' },
          { to: '/docs/recurring-api/create-order', label: 'Recurring API', position: 'left' },
          { to: '/docs/token-api/', label: 'Token API', position: 'left' },
          { to: '/docs/price-api/', label: 'Price API', position: 'left' },
          { to: '/docs/perp-api/', label: 'Perp API', position: 'left' },
        ]
      },
      { to: '/docs/dex-integration', label: 'DEX Integration', position: 'left' },
      { to: '/docs/tool-kits/swap-terminal', label: 'Tool Kits', position: 'left' },
      { to: '/docs/api', label: 'API Reference', position: 'left' },
    ],
    '/guides': [
      { to: '/guides/', label: 'Guides', position: 'left' },
      { to: '/docs/', label: 'Docs', position: 'left' },
    ],
    '/': [
      { to: '/guides/', label: 'Guides', position: 'left' },
      { to: '/docs/', label: 'Docs', position: 'left' },
    ],
};