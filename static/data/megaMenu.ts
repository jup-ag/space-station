type LinkGroup = {
  heading: string;
  children: { title: string; href: string }[];
};

export const guidesLinkItems: LinkGroup[] = [
  {
    heading: 'Product Guides',
    children: [
      {
        title: 'Jupiter Swap',
        href: '/guides/jupiter-swap/swap',
      },
      {
        title: 'Limit Order',
        href: '/guides/limit-order/limit-order',
      },
      {
        title: 'DCA',
        href: '/guides/dca/how-to-dca',
      },
      {
        title: 'Perpetual Exchange',
        href: '/guides/perpetual-exchange/overview',
      },
      {
        title: 'JLP Pool',
        href: '/guides/jlp/JLP',
      },
    ],
  },
  {
    heading: 'Additional Topics',
    children: [
      {
        title: 'Personal Security on Solana',
        href: '/guides/general/personal-security-on-solana',
      },
      {
        title: 'Verifying Swaps',
        href: '/guides/general/verify-swaps-with-SolanaFM',
      },
      {
        title: 'New Token Guide',
        href: '/guides/general/new-token-guide',
      },
      {
        title: 'Wrapped SOL',
        href: '/guides/general/wrapped-sol',
      },
      {
        title: 'Jupiter FAQ',
        href: '/guides/general/faq',
      },
      {
        title: 'Media Kit',
        href: '/guides/general/media-kit',
      },
    ],
  },
];

export const docsLinkItems: LinkGroup[] = [
  {
    heading: 'APIs',
    children: [
      {
        title: 'V6 Swap API',
        href: '/docs/apis/swap-api',
      },
      {
        title: 'Payments API',
        href: '/docs/apis/payments-api',
      },
      {
        title: 'Adding Fees',
        href: '/docs/apis/adding-fees',
      },
      {
        title: 'Price API',
        href: '/docs/apis/price-api',
      },
      {
        title: 'Flash Fill',
        href: '/docs/apis/flash-fill',
      },
      {
        title: 'CPI / Smart Contract Integration',
        href: '/docs/apis/cpi',
      },
      {
        title: 'Game Dev (C#)',
        href: '/docs/apis/c-sharp-example',
      },
      {
        title: 'Self-Hosted V6 Swap API',
        href: '/docs/apis/self-hosted',
      },
      {
        title: 'Troubleshooting',
        href: '/docs/apis/troubleshooting',
      },
    ],
  },
  {
    heading: 'Limit Order',
    children: [
      {
        title: 'Limit Order API',
        href: '/docs/limit-order/limit-order-api',
      },
      {
        title: 'Limit Order with SDK',
        href: '/docs/limit-order/limit-order-with-sdk',
      },
    ],
  },
  {
    heading: 'DCA',
    children: [
      {
        title: 'Integrate DCA',
        href: '/docs/dca/integration',
      },
      {
        title: 'DCA With SDK',
        href: '/docs/dca/dca-sdk',
      },
      {
        title: 'DCA CPI Integration',
        href: '/docs/dca/lock-dca-campaign',
      },
    ],
  },
  {
    heading: 'Jupiter Terminal',
    children: [
      {
        title: 'Overview',
        href: '/docs/jupiter-terminal/jupiter-terminal',
      },
      {
        title: 'Terminal Walkthrough',
        href: '/docs/jupiter-terminal/terminal-integration-guide',
      },
    ],
  },
  {
    heading: 'Projects and Dexes',
    children: [
      {
        title: 'Rust Integration',
        href: '/docs/projects-and-dexes/integration-guidelines',
      },
      {
        title: 'DEX Guidelines',
        href: '/docs/projects-and-dexes/rust-integration',
      },
    ],
  },
  {
    heading: 'Token List',
    children: [
      {
        title: 'Token List API',
        href: '/docs/token-list/token-list-api',
      },
      {
        title: 'Submit Token',
        href: '/docs/get-your-token-onto-jup',
      },
    ],
  },
  {
    heading: 'Additional Topics',
    children: [
      {
        title: 'Versioned Transactions',
        href: '/docs/additional-topics/composing-with-versioned-transaction',
      },
      {
        title: 'Jupiter Stats',
        href: '/docs/additional-topics/displaying-jup-stats',
      },
      {
        title: 'Links and Contract Addresses',
        href: '/docs/additional-topics/links-and-contract-addresses',
      },
      {
        title: 'Builder Tips',
        href: '/docs/additional-topics/builder-tips',
      },
      {
        title: 'Wallet List',
        href: '/docs/additional-topics/wallet-list',
      },
    ],
  },
  {
    heading: 'Legacy',
    children: [
      {
        title: 'APIs V4',
        href: '/docs/apis',
      },
    ],
  },
  {
    heading: 'Legal',
    children: [
      {
        title: 'SDK & API License Agreement',
        href: '/docs/legal/sdk-api-license-agreement',
      },
      {
        title: 'Terms of Use',
        href: '/docs/legal/terms-of-use',
      },
      {
        title: 'Privacy Policy',
        href: '/docs/legal/privacy-policy',
      },
    ],
  },
];
