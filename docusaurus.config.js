// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
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
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "openapi/api.yaml",
          routeBasePath: "docs/api",
          sidebarCollapsible: false,
          sidebarCollapsed: false,
        },
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
          // docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/navbar.css"),
            require.resolve("./src/css/sidebar.css"),
            require.resolve("./src/css/searchbar.css"),
            require.resolve("./src/css/apepro.css"),
          ],
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
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars-guides.js"),
        sidebarCollapsed: false,
        editUrl: "https://github.com/jup-ag/space-station/tree/main/",
      }),
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
          { to: 'guides', label: 'Guides', position: 'left' },
          { to: 'docs', label: 'Docs', position: 'left' },
          { to: 'https://jup.com', label: 'Jupiverse', position: 'left' },
          { type: 'search', position: 'right' },
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

  scripts: [
    {
      id: "awesomeqa-chat-widget-script",
      src: "https://awesomeqa.xyz/web-support/chat-widget.js",
      async: true,
      communityId: "0e700188-8410-431a-b2de-b23cc4ba7308",
      config: JSON.stringify({
        theme: "dark",
        widgetTitle: "Jupiter Station Chatbot",
        firstMessage: "Welcome to JM Cadets! We're here to help and support you. 😊 Have a question? Feel free to use the buttons below - we're looking forward to assisting you!",
        primaryColor: "#20b2aa",
        disclaimer: "Our AI assistant is in beta and only provides general information (not financial advice).\n\nAvoid sharing sensitive information like private keys, and contact our support team for unresolved issues.",
        actions:
          {
            contactSupport: {
              title: "Open Support Ticket",
              response: "Thanks for reaching out! One of our friendly support team members will be with you shortly. We appreciate your patience and look forward to helping you.",
            },
            thanks: {
              title: "Send Thanks",
              response: "We truly appreciate you taking the time to reach out! Your feedback helps make Jupiter better for everyone. Have more questions? Join our vibrant community on [Discord](https://discord.gg/jup) - we'd love to see you there! 🚀",
            },
          },
      }),
    },
  ],
};

module.exports = config;
