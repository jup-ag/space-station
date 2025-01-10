// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  welcome: [
    {
      type: 'doc',
      id: 'onboard/index',
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
          id: 'spot/swap/quickstart',
          label: 'Swap',
        },
        {
          type: 'doc',
          id: 'spot/limit/quickstart',
          label: 'Limit Order'
        },
        {
          type: 'doc',
          id: 'spot/dca/quickstart',
          label: 'Dollar Cost Average (DCA)',
        },
        {
          type: 'doc',
          id: 'spot/va/index',
        },
      ],
    },
  ],
  swap: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/swap/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/swap/how-swap-works',
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
          id: 'spot/swap/how-to-swap',
        },
        {
          type: 'doc',
          id: 'spot/swap/how-to-swap-safely',
        },
        {
          type: 'doc',
          id: 'spot/swap/how-to-configure-swap-settings',
        },
        {
          type: 'doc',
          id: 'spot/swap/how-to-get-your-token-on-jupiter',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'spot/swap/interface',
    },
    {
      type: 'doc',
      id: 'spot/swap/security',
    },
    {
      type: 'doc',
      id: 'spot/swap/faq',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'html',
      value: '<a href="http://localhost:3000">Reach out on Discord</a>',
    },
  ],
  limit: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/limit/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/limit/how-limit-order-works',
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
          id: 'spot/limit/how-to-create-limit-order',
        },
        {
          type: 'doc',
          id: 'spot/limit/how-to-manage-limit-orders',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'spot/limit/interface',
    },
    {
      type: 'doc',
      id: 'spot/limit/security',
    },
    {
      type: 'doc',
      id: 'spot/limit/faq',
    },
  ],
  dca: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/dca/quickstart',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-dca-works',
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
          id: 'spot/dca/how-to-create-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-manage-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-use-dca-price-range',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-optimize-dca',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'spot/dca/interface',
    },
    {
      type: 'doc',
      id: 'spot/dca/security',
    },
    {
      type: 'doc',
      id: 'spot/dca/faq',
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'doc',
      id: 'spot/dca/sample',
    },
  ],
  va: [
    {
      type: 'doc',
      id: 'spot/va/index',
    }
  ],
  perp: [
    {
      type: 'doc',
      id: 'perp/index',
    }
  ],
  apepro: [
    {
      type: 'doc',
      id: 'apepro/index',
    }
  ],
};

module.exports = sidebars;
