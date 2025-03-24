// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  api: [
    {
      type: "category",
      label: "API Reference",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "API Reference",
        slug: "/api",
      },
      items: [
        {
          type: "category",
          label: "Ultra API",
          link: {
            type: "generated-index",
            title: "Ultra API",
            slug: "/api/ultra-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/ultra-api/order',
            },
            {
              type: 'doc',
              id: 'api/ultra-api/execute',
            },
            {
              type: 'doc',
              id: 'api/ultra-api/balances',
            },
          ],
        },
        {
          type: "category", 
          label: "Swap API",
          link: {
            type: "generated-index",
            title: "Swap API",
            slug: "/api/swap-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/swap-api/quote',
            },
            {
              type: 'doc',
              id: 'api/swap-api/swap',
            },
            {
              type: 'doc',
              id: 'api/swap-api/swap-instructions',
            },
            {
              type: 'doc',
              id: 'api/swap-api/program-id-to-label',
            },
          ],
        },
        {
          type: "category", 
          label: "Trigger API",
          link: {
            type: "generated-index",
            title: "Trigger API",
            slug: "/api/trigger-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/trigger-api/create-order',
            },
            {
              type: 'doc',
              id: 'api/trigger-api/execute',
            },
            {
              type: 'doc',
              id: 'api/trigger-api/cancel-order',
            },
            {
              type: 'doc',
              id: 'api/trigger-api/cancel-orders',
            },
            {
              type: 'doc',
              id: 'api/trigger-api/get-trigger-orders',
            },
          ],
        },
        {
          type: "category",
          label: "Recurring API",
          link: {
            type: "generated-index",
            title: "Recurring API",
            slug: "/api/recurring-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/recurring-api/create-order',
            },
            {
              type: 'doc',
              id: 'api/recurring-api/execute',
            },
            {
              type: 'doc',
              id: 'api/recurring-api/cancel-order',
            },
            {
              type: 'doc',
              id: 'api/recurring-api/price-deposit',
            },
            {
              type: 'doc',
              id: 'api/recurring-api/price-withdraw',
            },
            {
              type: 'doc',
              id: 'api/recurring-api/get-recurring-orders',
            },
          ],
        },
        {
          type: "category",
          label: "Token API",
          link: {
            type: "generated-index",
            title: "Token API",
            slug: "/api/token-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/token-api/token-information',
            },
            {
              type: 'doc',
              id: 'api/token-api/mints-in-market',
            },
            {
              type: 'doc',
              id: 'api/token-api/tradable',
            },
            {
              type: 'doc',
              id: 'api/token-api/tagged',
            },
            {
              type: 'doc',
              id: 'api/token-api/new',
            },
            {
              type: 'doc',
              id: 'api/token-api/all',
            },
          ],
        },
        {
          type: "category",
          label: "Price API",
          link: {
            type: "generated-index",
            title: "Price API",
            slug: "/api/price-api",
          },
          items: [
            {
              type: 'doc',
              id: 'api/price-api/price',
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
