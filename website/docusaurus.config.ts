import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const normalizeBaseUrl = (value: string): string => {
  if (!value || value === '/') {
    return '/';
  }

  const trimmed = value.replace(/^\/+|\/+$/g, '');
  return `/${trimmed}/`;
};

const isProductionBuild = process.env.NODE_ENV === 'production';
const siteUrl = process.env.DOCUSAURUS_SITE_URL ?? 'https://playbooks.aip.gov.sg';
const baseUrl = normalizeBaseUrl(
  process.env.DOCUSAURUS_BASE_URL ?? (isProductionBuild ? '/responsibleai/' : '/'),
);

const config: Config = {
  title: 'Responsible AI Playbook',
  tagline: 'Evaluating, testing, and mitigating risks in AI systems',
  favicon: 'assets/favicons/favicon.ico',

  url: siteUrl,
  baseUrl,

  organizationName: 'govtech-responsibleai',
  projectName: 'playbook',

  onBrokenLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        ...(process.env.NODE_ENV === 'production' ? {
          gtag: {
            trackingID: 'G-D8325S860G',
            anonymizeIP: true,
          },
        } : {}),
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'assets/favicons/logo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Responsible AI Playbook',
      logo: {
        alt: 'GovTech Responsible AI Playbook',
        src: 'assets/favicons/logo.png',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Email',
          href: 'mailto:aipractice@tech.gov.sg',
        },
        {
          label: 'Medium',
          href: 'https://medium.com/dsaid-govtech',
        },
        {
          label: 'Hugging Face',
          href: 'https://huggingface.co/govtech',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/orgs/govtech-responsibleai/',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/govtech-singapore',
        },
        {
          label: 'X',
          href: 'https://x.com/GovTechSG',
        },
      ],
      copyright: `Copyright © 2025–${new Date().getFullYear()} Government Technology Agency of Singapore`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'json'],
    },
    // Algolia DocSearch — register at https://docsearch.algolia.com and fill in credentials
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'responsible-ai-playbook',
    // },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap',
      },
    },
  ],
};

export default config;
