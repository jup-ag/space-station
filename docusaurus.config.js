// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const redirects = require('./redirects.json');
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
              path: '',
              badge: false,
            },
            old: {
              label: 'Old',
              path: 'old',
              banner: 'unmaintained',
            }
          },
          sidebarPath: require.resolve("./sidebars-docs.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jup-ag/space-station/tree/main/",
          // docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/navbar.css"),
            require.resolve("./src/css/sidebar.css"),
            require.resolve("./src/css/searchbar.css"),
            require.resolve("./src/css/openapi.css"),
          ],
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
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'docs',
        config: {
          ultra: {
            specPath: "openapi/ultra.yaml",
            outputDir: "docs/api/ultra-api",
          },
          swap: {
            specPath: "openapi/swap.yaml",
            outputDir: "docs/api/swap-api",
          },
          trigger: {
            specPath: "openapi/trigger.yaml",
            outputDir: "docs/api/trigger-api",
          },
          recurring: {
            specPath: "openapi/recurring.yaml",
            outputDir: "docs/api/recurring-api",
          },
          token: {
            specPath: "openapi/token.yaml",
            outputDir: "docs/api/token-api",
          },
          price: {
            specPath: "openapi/price.yaml",
            outputDir: "docs/api/price-api",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      { redirects }
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
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Jupiter Logo",
          src: "img/jupiter-logo.svg",
          width: 28,
          height: 28,
        },
        items: [
          { to: 'docs/index', label: 'Docs', position: 'left' },
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
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash","json","rust"],
      },
      announcementBar: {
        id: 'zendesk-migration',
        content: 'We are migrating our User Guides from Station to our new Support System. Please visit <a target="_blank" rel="noopener noreferrer" href="https://jupiverse.zendesk.com/hc/en-us">Jupiter Helpdesk</a> for the latest guides.',
        backgroundColor: '#FFA500',
        textColor: '#000000',
        isCloseable: false,
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
    }
  ),
  themes: ['docusaurus-theme-openapi-docs'],
};

module.exports = config;
