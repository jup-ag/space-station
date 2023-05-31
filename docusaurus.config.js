// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jupiter Station",
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
  onBrokenMarkdownLinks: "warn",

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
          path: "openapi/quoteV5.yaml",
          routeBasePath: "quote-v5",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsed: false,
          editUrl: "https://github.com/jup-ag/space-station/tree/main/",
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
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
        sidebarCollapsed: false,
        editUrl: "https://github.com/jup-ag/space-station/tree/main/",
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebars-community.js"),
        sidebarCollapsed: false,
      }),
    ],
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
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
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Jupiter Station (BETA)",
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
            to: "/partners",
            label: "Partners",
            position: "left",
          },
          {
            to: "/community",
            label: "Community",
            position: "left",
          },
          {
            to: "/stats",
            label: "Stats",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
