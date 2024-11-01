// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jupiter Station",
  staticDirectories: ["static"],
  tagline: "The Key Liquidity Aggregator and Swap Infrastructure for Solana",
  favicon: "img/favicon.ico",
  customFields: {
    // Put your custom environment here
  },
  // Set the production url of your site here
  url: "https://station.jup.ag",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Raccoons", // Usually your GitHub org/user name.
  projectName: "Jupiter Space Station", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "https://fonts.googleapis.com",
      rel: "preconnect",
    },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: true,
    },
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ],

  presets: [
    // [
    //   "classic",
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     docs: {
    //       sidebarPath: require.resolve("./sidebars.js"),
    //       // Please change this to your repo.
    //       // Remove this to remove the "edit this page" links.
    //       sidebarCollapsed: false,
    //       editUrl: "https://github.com/jup-ag/space-station/tree/main/",
    //     },

    //     blog: {
    //       showReadingTime: true,
    //       // Please change this to your repo.
    //       // Remove this to remove the "edit this page" links.
    //       // editUrl:
    //       //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
    //       blogSidebarTitle: "All posts",
    //       blogSidebarCount: "ALL",
    //     },
    //     theme: {
    //       customCss: require.resolve("./src/css/custom.css"),
    //     },
    //   }),
    // ],
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "openapi/quoteV6.yaml",
          routeBasePath: "api-v6",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsed: true,
          editUrl: "https://github.com/jup-ag/space-station/tree/main/",
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        proxy: {
          "/proxy": {
            target: "http://localhost:8091",
            pathRewrite: { "^/proxy": "" },
          },
        },
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars-guides.js"),
        sidebarCollapsed: true,
        editUrl: "https://github.com/jup-ag/space-station/tree/main/",
      }),
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/guides/perpetual-exchange/overview",
            from: "/labs/perpetual-exchange/overview",
          },
          {
            to: "/guides/perpetual-exchange/how-it-works",
            from: "/guides/perpetual-exchange/trading",
          },
          {
            to: "/guides/jupiter-swap/how-swap-works/metropolis-features",
            from: "/guides/jupiter-swap/how-swap-works/metropolis",
          },
          {
            to: "/guides/perpetual-exchange/overview",
            from: "/labs",
          },
          {
            to: "/guides/perpetual-exchange/how-it-works",
            from: "/labs/perpetual-exchange/trading",
          },
          {
            to: "/guides/jlp/JLP",
            from: "/labs/perpetual-exchange/jlp-pool",
          },
          {
            to: "/guides/jlp/How-JLP-Works",
            from: "/labs/perpetual-exchange/how-it-works",
          },
          {
            to: "/guides/jlp/How-JLP-Works",
            from: "/labs/faq/faq",
          },
          {
            to: "/guides/general/get-your-token-on-jupiter",
            from: "/docs/get-your-token-onto-jup",
          },
          {
            to: "/docs/limit-order",
            from: "/docs/limit-order/limit-order-api",
          },
          {
            to: "/docs/limit-order",
            from: "/docs/limit-order/limit-order-with-sdk",
          },
          {
            to: "/guides/general/get-your-token-on-jupiter",
            from: "/guides/general/new-token-guide",
          },
          {
            to: "/guides/jlp/How-JLP-Works",
            from: "/labs/perps-faq",
          },
          {
            to: "/blog-redirect",
            from: "/blog",
          },
        ],
      },
    ],
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          property: "description",
          content:
            "Jupiter Station is the place for all things related to Jupiter. Here you can access comprehensive documentation, explore statistics and analytics, ecosystem partners that are integrating with Jupiter and read our latest updates.",
        },
        {
          property: "og:image",
          content: "https://og.jup.ag/api/jupiter-station",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
      ],
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Jupiter Station",
        logo: {
          alt: "Jupiter Logo",
          src: "img/jupiter-logo.svg",
          width: 33,
          height: 33,
        },
        items: [
          {
            to: "/guides",
            label: "Guides",
            position: "left",
          },
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          {
            to: "/api-v6",
            position: "left",
            label: "API Playground",
          },
          {
            to: "/partners",
            label: "Partners",
            position: "left",
          },
          {
            to: "https://dune.com/ilemi/jupiter-aggregator-solana",
            label: "Stats",
            position: "left",
          },
          {
            type: "search",
            position: "right",
            className: "search",
          },
          {
            type: "html",
            position: "right",
            value: `
            <a href="https://jup.ag/" target="_blank" class="launch-app">
              <span>
                Launch App
              </span>
            </a>
            `,
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "JMCIA1QG7Y",
        // Public API key: it is safe to commit it
        apiKey: "74d6232a420d282f4dd042bdfe519930",
        indexName: "station-jup",
        contextualSearch: true,
        searchPagePath: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
};

module.exports = config;
