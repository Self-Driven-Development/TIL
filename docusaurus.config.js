/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TIL',
  tagline: 'Today I Learned',
  favicon: 'https://avatars.githubusercontent.com/u/132475839?s=200&v=4',
  url: 'https://self-driven-development.github.io',
  baseUrl: '/TIL/',
  organizationName: 'Self-Driven-Development',
  projectName: 'TIL',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {
        htmlLang: 'ko-KR',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-QEZDXB0ZHY',
          anonymizeIP: true,
        },
        docs: {
          path: 'members',
          routeBasePath: '/members',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['**/*.md', '**/*.mdx'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}'],
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarItemsGenerator: async function ({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            sidebarItems.map(item => {
              if (item.label !== '개요' && item.type === 'category') {
                item.collapsed = true;
              }

              if (/^(강주혁|이학림|송은수|민세림|박규성)$/.test(item.label)) {
                item.items = item.items.reverse();
              }
              return item;
            });

            return sidebarItems;
          },
          editUrl: ({ docPath }) =>
            `https://github.com/Self-Driven-Development/TIL/tree/main/${docPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'TIL, Today I Learned, Self-Driven-Development, Dogsounds, Dogsounds-TIL',
        },
      ],
      image: 'https://avatars.githubusercontent.com/u/132475839?s=200&v=4',
      navbar: {
        title: 'TIL',
        logo: {
          alt: 'TIL Logo',
          src: 'https://avatars.githubusercontent.com/u/132475839?s=200&v=4',
        },
        items: [
          {
            to: '/members/',
            label: '개요',
            position: 'left',
          },
          {
            to: '/members/강주혁',
            label: '강주혁',
            position: 'left',
          },
          {
            to: '/members/이학림',
            label: '이학림',
            position: 'left',
          },
          {
            to: '/members/송은수',
            label: '송은수',
            position: 'left',
          },
          {
            to: '/members/민세림',
            label: '민세림',
            position: 'left',
          },
          {
            to: '/members/박규성',
            label: '박규성',
            position: 'left',
          },
          {
            href: 'https://github.com/Self-Driven-Development/TIL',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'self-driven-development',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Self-Driven-Development/TIL',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} , Self-Driven-Development`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'TU9I3X8MLF',
        apiKey: '2908a1acf283145ec35e142729828aff',
        indexName: 'dogsounds-til',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
