import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ultra-api/swap-api",
    },
    {
      type: "category",
      label: "Ultra",
      items: [
        {
          type: "doc",
          id: "ultra-api/order",
          label: "order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ultra-api/execute",
          label: "execute",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
