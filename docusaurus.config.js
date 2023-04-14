// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sporttraxx Tracky",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sporttraxx", // Usually your GitHub org/user name.
  projectName: "tracking-tracky-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    localeConfigs: {
      en: {
        label: "English",
      },
      it: {
        label: "Italiano",
      },
    },
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        language: ["en", "it"],
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      metadata: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=0",
        },
      ],
      navbar: {
        title: "Tracky",
        logo: {
          src: "img/app-icon.png",
        },
        items: [
          {
            label: "Docs",
            to: "/intro/",
            position: "left",
          },
          {
            label: "Privacy",
            to: "/privacy/",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
            className: "icon-link language",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Sporttraxx`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
