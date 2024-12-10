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
          id: 'spot/swap/index',
        },
        {
          type: 'doc',
          id: 'spot/limit/index',
        },
        {
          type: 'doc',
          id: 'spot/dca/index',
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
      type: 'doc',
      id: 'spot/swap/index',
    }
  ],
  limit: [
    {
      type: 'doc',
      id: 'spot/limit/index',
    }
  ],
  dca: [
    {
      type: 'doc',
      id: 'spot/dca/index',
      
    },
    {
      type: 'category',
      label: 'How To',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/dca/how-to-create-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-cancel-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-view-active-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-view-dca-history',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-use-dca-price-strategy',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-calculate-dca-cost-and-average-price',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-safeguard-dca-order-and-funds',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
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
