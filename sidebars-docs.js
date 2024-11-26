// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'welcome',
    },
    {
      type: 'doc',
      id: 'get-started',
      label: 'Get Started',
    },
    {
      type: 'doc',
      id: 'development-basics',
      label: 'Development Basics',
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Swap API',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'swap-api/get-quote',
        },
        {
          type: 'doc',
          id: 'swap-api/build-swap-transaction',
        },
        {
          type: 'doc',
          id: 'swap-api/send-swap-transaction',
        },
      ],
    },
    {
      type: 'html',
      value: '<li class="sidebar-line-break"></li>',
    },
    {
      type: 'category',
      label: 'Swap API Guides',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'swap-api/add-fees-to-swap',
        },
        {
          type: 'doc',
          id: 'swap-api/payments-through-swap',
        },
      ],
    },
  ],
};

module.exports = sidebars;