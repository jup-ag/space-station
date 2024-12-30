// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  jupiverse: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'The Community',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'the-jup',
        },
        {
          type: 'doc',
          id: 'the-dao',
        },
        {
          type: 'doc',
          id: 'working-groups',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
    {
      type: 'category',
      label: 'Participation',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'voting',
        },
        {
          type: 'doc',
          id: 'active-staking-rewards',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-line-break"></div>',
    },
  ],
};

module.exports = sidebars;
