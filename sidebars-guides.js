// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  welcome: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'onboard/index',
        },
        {
          type: 'doc',
          id: 'onboard/adding-funds',
        },
        {
          type: 'doc',
          id: 'onboard/bridging-funds',
        },
        {
          type: 'doc',
          id: 'onboard/security',
        },
      ]
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'General',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'jupsol',
        },
        {
          type: 'doc',
          id: 'lock',
        },
      ]
    }
  ],
  spot: [
    {
      type: 'doc',
      id: 'spot/index',
    },
    {
      type: 'category',
      label: 'Categories',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/instant/quickstart',
          label: 'Instant',
        },
        {
          type: 'doc',
          id: 'spot/trigger/quickstart',
          label: 'Trigger'
        },
        {
          type: 'doc',
          id: 'spot/recurring/quickstart',
          label: 'Recurring',
        },
      ],
    },
  ],
  instant: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/instant/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/instant/how-swap-works',
        },
        {
          type: 'doc',
          id: 'spot/instant/faq',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: "How To's",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/instant/how-to-swap',
        },
        {
          type: 'doc',
          id: 'spot/instant/how-to-swap-safely',
        },
        {
          type: 'doc',
          id: 'spot/instant/how-to-configure-swap-settings',
        },
        {
          type: 'doc',
          id: 'spot/instant/how-to-get-your-token-on-jupiter',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  trigger: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/trigger/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/trigger/how-trigger-order-works',
        },
        {
          type: 'doc',
          id: 'spot/trigger/faq',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: "How To's",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/trigger/how-to-create-trigger-order',
        },
        {
          type: 'doc',
          id: 'spot/trigger/how-to-manage-trigger-orders',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  recurring: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/recurring/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/recurring/how-recurring-order-works',
        },
        {
          type: 'doc',
          id: 'spot/recurring/faq',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: "How To's",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/recurring/how-to-create-recurring-order',
        },
        {
          type: 'doc',
          id: 'spot/recurring/how-to-manage-recurring-order',
        },
        {
          type: 'doc',
          id: 'spot/recurring/how-to-use-recurring-order-price-range',
        },
        {
          type: 'doc',
          id: 'spot/recurring/how-to-optimize-recurring-order',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  perps: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'perps/quickstart',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: "Trader",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "How Trading Works",
          collapsible: false,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'perps/position-management',
            },
            {
              type: 'doc',
              id: 'perps/leverage-management',
            },
            {
              type: 'doc',
              id: 'perps/liquidation',
            },
            {
              type: 'doc',
              id: 'perps/fees',
            },
            {
              type: 'doc',
              id: 'perps/oracle',
            },
            {
              type: 'doc',
              id: 'perps/keeper',
            },
          ],
        },
        {
          type: 'category',
          label: "How To's",
          collapsible: false,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'perps/how-to-open-position',
            },
            {
              type: 'doc',
              id: 'perps/how-to-manage-position',
            },
            {
              type: 'doc',
              id: 'perps/how-to-close-position',
            },
            {
              type: 'doc',
              id: 'perps/how-to-use-limit-order',
            },
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: "JLP",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "How JLP Works",
          collapsible: false,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'perps/jlp-pool-and-token',
            },
            {
              type: 'doc',
              id: 'perps/jlp-fee-distribution',
            },
            {
              type: 'doc',
              id: 'perps/jlp-pool-weightage',
            },
            {
              type: 'doc',
              id: 'perps/jlp-risks',
            },
            {
              type: 'doc',
              id: 'perps/jlp-economics',
            },
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
  apepro: [
    {
      type: 'category',
      label: 'Getting Started',
      className: 'ape',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'apepro/quickstart',
        },
        {
          type: 'doc',
          id: 'apepro/how-to-set-up-account',
        },
        {
          type: 'doc',
          id: 'apepro/faq',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Discovery',
      className: 'ape',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'apepro/feeds',
        },
        {
          type: 'doc',
          id: 'apepro/filters',
        },
        {
          type: 'doc',
          id: 'apepro/token-profile-and-chart',
        },
      ]
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Trading',
      className: 'ape',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'apepro/buying',
        },
        {
          type: 'doc',
          id: 'apepro/portfolio',
        },
        {
          type: 'doc',
          id: 'apepro/mobile',
        },
      ]
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Ape Friends',
      className: 'ape',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'apepro/leaderboard',
        },
        {
          type: 'doc',
          id: 'apepro/referral',
        },
      ]
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
};

module.exports = sidebars;
