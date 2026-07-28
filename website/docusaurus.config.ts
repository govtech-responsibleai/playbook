import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
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
  favicon: 'rai.ico',

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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        ...(process.env.NODE_ENV === 'production' && !process.env.DOCUSAURUS_SITE_URL ? {
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
      respectPrefersColorScheme: false,
    },
    // Mermaid renders client-side and re-initialises on colour-mode change, but
    // `theme` is the only value that varies per mode — `options` (and therefore
    // themeVariables) is shared. See @docusaurus/theme-mermaid useMermaidConfig.
    //
    // So rather than maintaining two palettes, the palette below is deliberately
    // theme-agnostic: filled dark-teal nodes with white text, outlined and joined
    // in a mid-teal that clears WCAG 1.4.11 (3:1) against both the light (#fff)
    // and dark (#1b1b1d) page backgrounds. That keeps one source of truth and
    // needs no [data-theme='dark'] overrides.
    //
    // Mermaid is for simple flows only. Anything that needs to look designed is
    // hand-built in CSS — see the archetype routes in src/css/custom.css.
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        themeVariables: {
          fontFamily: "'Lato', system-ui, -apple-system, sans-serif",
          fontSize: '15px',

          // Node fill — brand dark teal. 13.1:1 against the white node text.
          primaryColor: '#0d363b',
          mainBkg: '#0d363b',

          // Node outline and connectors. 4.18:1 on light, 4.12:1 on dark, so the
          // node stays delineated on the dark theme where fill and page
          // background are otherwise too close (1.32:1).
          primaryBorderColor: '#2a8891',
          nodeBorder: '#2a8891',
          lineColor: '#2a8891',
          arrowheadColor: '#2a8891',

          // All Mermaid text sits on a dark-teal surface, so white throughout.
          // edgeLabelBackground keeps that true for edge labels too, should a
          // future diagram add them.
          primaryTextColor: '#ffffff',
          nodeTextColor: '#ffffff',
          textColor: '#ffffff',
          edgeLabelBackground: '#0d363b',
        },
      },
    },
    navbar: {
      title: 'Responsible AI Playbook',
      logo: {
        alt: 'GovTech Singapore',
        src: 'images/govtech-black.gif',
        srcDark: 'images/govtech-white.gif',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        { label: 'Blog', href: 'https://blog.ai.gov.sg' },
        { label: 'Hugging Face', href: 'https://huggingface.co/govtech' },
        { label: 'GitHub', href: 'https://github.com/orgs/govtech-responsibleai/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/govtech-singapore' },
        { label: 'X', href: 'https://x.com/GovTechSG' },
        { label: 'Email', href: 'mailto:aipractice@tech.gov.sg' },
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.18.1/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-1vdNCNel6Tx/NQa8IR1mGOGKsbGreCkOPfbtPPnUURJ5Tu2PRVfQ/7KLZC+Pi1p1',
      crossorigin: 'anonymous',
    },
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'D540F5CBF11AB04B',
      },
    },
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
