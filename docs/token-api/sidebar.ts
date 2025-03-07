import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "token-api/token-api",
    },
    {
      type: "category",
      label: "Token",
      items: [
        {
          type: "doc",
          id: "token-api/token-information",
          label: "token information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/mints-in-market",
          label: "mints in market",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/tradable",
          label: "tradable",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/tagged",
          label: "tagged",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/new",
          label: "new",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/all",
          label: "all",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
