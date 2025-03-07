import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "swap-api/swap-api",
    },
    {
      type: "category",
      label: "Swap",
      items: [
        {
          type: "doc",
          id: "swap-api/quote",
          label: "quote",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "swap-api/swap",
          label: "swap",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "swap-api/swap-instructions",
          label: "swap-instructions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "swap-api/program-id-to-label",
          label: "program-id-to-label",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
