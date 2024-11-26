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
          label: 'Get Quote',
        },
        {
          type: 'doc',
          id: 'swap-api/build-swap-transaction',
          label: 'Send Swap Transaction',
        },
        {
          type: 'doc',
          id: 'swap-api/send-swap-transaction',
          label: 'Build Swap Transaction',
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
          label: 'Add Fees To Swap',
        },
      ],
    },
  ],
};

module.exports = sidebars;
