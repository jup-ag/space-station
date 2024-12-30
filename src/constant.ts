export const navbarConfigs = {
    '/docs': [
      { to: '/docs/', label: 'Swap API', position: 'left' },
      { to: '/docs/perp-api/perp-api', label: 'Perp API', position: 'left' },
      { to: '/docs/tool-kits/swap-terminal', label: 'Tool Kits', position: 'left' },
      { to: '/docs/utility/price-api', label: 'Utility', position: 'left' },
      { to: '/docs/api', label: 'API Reference', position: 'left' },
    ],
    '/guides': [
      { to: '/guides/onboard', label: 'Onboard', position: 'left' },
      { to: '/guides/spot', label: 'Spot', position: 'left' },
      { to: '/guides/perp', label: 'Perp', position: 'left' },
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