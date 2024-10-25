type LinkGroup = {
  heading: string;
  children: { title: string; href: string }[];
};

export const guidesLinkItems: LinkGroup[] = [
  {
    heading: "Product Guides",
    children: [
      {
        title: "Jupiter Swap",
        href: "/guides/jupiter-swap/swap",
      },
      {
        title: "Limit Order",
        href: "/guides/limit-order/limit-order",
      },
      {
        title: "DCA",
        href: "/guides/dca/how-to-dca",
      },
      {
        title: "VA",
        href: "/guides/va/how-to-va",
      },
      {
        title: "Ape Pro",
        href: "/guides/apepro/overview",
      },
      {
        title: "Perpetual Exchange",
        href: "/guides/perpetual-exchange/overview",
      },
      {
        title: "JLP Pool",
        href: "/guides/jlp/JLP",
      },
      {
        title: "JupSOL",
        href: "/guides/jupsol/jupsol",
      },
      {
        title: "Bridge Comparator",
        href: "/guides/bridge/comparator",
      },
      {
        title: "Jupiter Lock",
        href: "/guides/jupiter-lock/jupiter-lock",
      },
    ],
  },
  {
    heading: "General Guides",
    children: [
      {
        title: "Personal Security on Solana",
        href: "/guides/general/personal-security-on-solana",
      },
      {
        title: "Verifying Swaps",
        href: "/guides/general/verify-swaps-with-SolanaFM",
      },
      {
        title: "Jupiter, Action & Blinks",
        href: "/guides/general/blinks",
      },
      {
        title: "Get Your Token On Jupiter",
        href: "/guides/general/get-your-token-on-jupiter",
      },
      {
        title: "Wrapped SOL",
        href: "/guides/general/wrapped-sol",
      },
      {
        title: "Jupiter FAQ",
        href: "/guides/general/faq",
      },
      {
        title: "Media Kit",
        href: "/guides/general/media-kit",
      },
      {
        title: "Edge",
        href: "/guides/general/edge",
      },
    ],
  },
];

export const docsLinkItems: LinkGroup[] = [
  {
    heading: "APIs",
    children: [
      {
        title: "V6 Swap API",
        href: "/docs/apis/swap-api",
      },
      {
        title: "Payments API",
        href: "/docs/apis/payments-api",
      },
      {
        title: "Adding Fees",
        href: "/docs/apis/adding-fees",
      },
      {
        title: "Price API",
        href: "/docs/apis/price-api",
      },
      {
        title: "Price API V2",
        href: "/docs/apis/price-api-v2",
      },
      {
        title: "Flash Fill",
        href: "/docs/apis/flash-fill",
      },
      {
        title: "CPI / Smart Contract Integration",
        href: "/docs/apis/cpi",
      },
      {
        title: "Game Dev (C#)",
        href: "/docs/apis/c-sharp-example",
      },
      {
        title: "Self-Hosted V6 Swap API",
        href: "/docs/apis/self-hosted",
      },
      {
        title: "Troubleshooting",
        href: "/docs/apis/troubleshooting",
      },
      {
        title: "Landing Transactions",
        href: "/docs/apis/landing-transactions",
      },
    ],
  },
  {
    heading: "DCA",
    children: [
      {
        title: "Integrate DCA",
        href: "/docs/dca/integration",
      },
      {
        title: "DCA With SDK",
        href: "/docs/dca/dca-sdk",
      },
      {
        title: "DCA CPI Integration",
        href: "/docs/dca/lock-dca-campaign",
      },
    ],
  },
  {
    heading: "Jupiter Terminal",
    children: [
      {
        title: "Overview",
        href: "/docs/jupiter-terminal/jupiter-terminal",
      },
      {
        title: "Terminal Walkthrough",
        href: "/docs/jupiter-terminal/terminal-integration-guide",
      },
      {
        title: "Unified Wallet Kit",
        href: "/docs/jupiter-terminal/unified-wallet-kit",
      },
    ],
  },
  {
    heading: "Projects and Dexes",
    children: [
      {
        title: "Rust Integration",
        href: "/docs/projects-and-dexes/integration-guidelines",
      },
      {
        title: "DEX Guidelines",
        href: "/docs/projects-and-dexes/rust-integration",
      },
    ],
  },
  {
    heading: "Token List",
    children: [
      {
        title: "Token List API",
        href: "/docs/token-list/token-list-api",
      },
      {
        title: "API Standard for Partners",
        href: "/docs/token-api-standard",
      },
    ],
  },
  {
    heading: "Additional Topics",
    children: [
      {
        title: "Versioned Transactions",
        href: "/docs/additional-topics/composing-with-versioned-transaction",
      },
      {
        title: "Jupiter Stats",
        href: "/docs/additional-topics/displaying-jup-stats",
      },
      {
        title: "Links and Contract Addresses",
        href: "/docs/additional-topics/links-and-contract-addresses",
      },
      {
        title: "Builder Tips",
        href: "/docs/additional-topics/builder-tips",
      },
      {
        title: "Wallet List",
        href: "/docs/additional-topics/wallet-list",
      },
      {
        title: "Audits",
        href: "/docs/additional-topics/audits",
      },
    ],
  },
  {
    heading: "Legacy",
    children: [
      {
        title: "APIs V4",
        href: "/docs/apis",
      },
    ],
  },
  {
    heading: "Legal",
    children: [
      {
        title: "SDK & API License Agreement",
        href: "/docs/legal/sdk-api-license-agreement",
      },
      {
        title: "Terms of Use",
        href: "/docs/legal/terms-of-use",
      },
      {
        title: "Privacy Policy",
        href: "/docs/legal/privacy-policy",
      },
    ],
  },
];
