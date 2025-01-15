export const navbarConfigs = {
    '/docs': [
      { to: '/docs/', label: 'API Setup', position: 'left' },
      { to: '/docs/swap-api/get-quote', label: 'Swap API', position: 'left' },
      { to: '/docs/perp-api/perp-api', label: 'Perp API', position: 'left' },
      { to: '/docs/tool-kits/swap-terminal', label: 'Tool Kits', position: 'left' },
      { to: '/docs/utility/price-api', label: 'Utility', position: 'left' },
      { to: '/docs/api', label: 'API Reference', position: 'left' },
    ],
    '/guides': [
      { to: '/guides/onboard', label: 'Onboard', position: 'left' },
      {
        to: '/guides/spot',
        label: 'Spot',
        position: 'left',
        items: [
          { to: '/guides/spot/swap/quickstart', label: 'Swap', position: 'left' },
          { to: '/guides/spot/limit/quickstart', label: 'Limit Order', position: 'left' },
          { to: '/guides/spot/dca/quickstart', label: 'Dollar Cost Average (DCA)', position: 'left' },
        ]
      },
      { to: '/guides/perp/quickstart', label: 'Perps', position: 'left' },
      { to: '/guides/apepro', label: 'Ape Pro', position: 'left' },
    ],
    '/jupiverse': [
      { to: '/guides/spot', label: 'Guides', position: 'left' },
      { to: '/docs/', label: 'Docs', position: 'left' },
      { to: '/jupiverse/', label: 'Jupiverse', position: 'left' },
    ],
    '/': [
      { to: '/guides/spot', label: 'Guides', position: 'left' }, // to do, or yet to fix, navbar as mobile sidebar does not respect this, only follows docusaurus.config.js navbar config
      { to: '/docs/', label: 'Docs', position: 'left' },
      { to: '/jupiverse/', label: 'Jupiverse', position: 'left' },
    ],
};