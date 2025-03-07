import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "price-api/price-api",
    },
    {
      type: "category",
      label: "Price",
      items: [
        {
          type: "doc",
          id: "price-api/price",
          label: "price",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
