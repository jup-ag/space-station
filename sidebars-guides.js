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
      label: 'Get Started',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'spot/dca/im-a-beginner',
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
          id: 'spot/dca/how-to-manage-dca',
        },
        {
          type: 'doc',
          id: 'spot/dca/how-to-use-dca-price-strategy',
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
