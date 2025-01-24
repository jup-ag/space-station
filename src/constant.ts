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
      { to: '/guides/perps/quickstart', label: 'Perps', position: 'left' },
      { to: '/guides/apepro/quickstart', label: 'Ape Pro', position: 'left' },
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

// used in home page /src/pages/index.tsx
export const PRODUCT_CARDS = [
  {
    title: "Onboard",
    links: [
      { text: "Guide", href: "/guides/onboard" },
      { text: "Launch", href: "https://jup.ag/onboard" }
    ]
  },
  {
    title: "Spot - Instant",
    links: [
      { text: "Guide", href: "/guides/spot/swap/quickstart" },
      { text: "Launch", href: "https://jup.ag/swap" }
    ]
  },
  {
    title: "Spot - Trigger",
    links: [
      { text: "Guide", href: "/guides/spot/limit/quickstart" },
      { text: "Launch", href: "https://jup.ag/limit" }
    ]
  },
  {
    title: "Spot - Recurring",
    links: [
      { text: "Guide", href: "/guides/spot/dca/quickstart" },
      { text: "Launch", href: "https://jup.ag/dca" }
    ]
  },
  {
    title: "Trade Perps",
    links: [
      { text: "Guide", href: "/guides/perps/quickstart" },
      { text: "Launch", href: "https://jup.ag/perps-v2" }
    ]
  },
  {
    title: "JLP Pool",
    links: [
      { text: "Guide", href: "/guides/perps/jlp-pool-and-token" },
      { text: "Launch", href: "https://jup.ag/perps-earn" }
    ]
  },
  {
    title: "Mobile",
    links: [
      { text: "iOS", href: "https://apps.apple.com/us/app/jupiter-mobile/id6484069059" },
      { text: "Android", href: "https://play.google.com/store/apps/details?id=ag.jup.jupiter.android" }
    ]
  },
  {
    title: "Ape Pro",
    links: [
      { text: "Guide", href: "/guides/apepro/quickstart" },
      { text: "Launch", href: "https://ape.pro/" }
    ]
  },
  {
    title: "Lock",
    links: [
      { text: "Guide", href: "/guides/" },
      { text: "Launch", href: "https://lock.jup.ag/" }
    ]
  },
];
