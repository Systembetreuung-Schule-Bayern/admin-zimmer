// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// @ts-ignore
import {themes as githubThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Admin-Zimmer',
  tagline: 'Zentrale Wissensplattform für die Systembetreuung',
  favicon: 'img/favicon.ico',

  // Setze hier deine exakte GitHub-Webseiten-URL ein
  url: 'https://Systembetreuung-Schule-Bayern.github.io',
  // Der Ordnername deines Repositories auf GitHub
  baseUrl: '/admin-zimmer/',

  // GitHub-Pages-Einstellungen
  organizationName: 'Systembetreuung-Schule-Bayern',
  projectName: 'admin-zimmer',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // ZAUBERTRICK: Die Dokumentation liegt nun direkt auf der Startseite (/)
          routeBasePath: '/', 
          editUrl: 'https://github.com/Systembetreuung-Schule-Bayern/admin-zimmer/tree/main/',
        },
        blog: false, // Deaktiviert den Blog, da wir nur die Doku wollen
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    // Hier wird das obere Menü (Navbar) definiert
    navbar: {
      title: 'Admin-Zimmer',
      logo: {
        alt: 'Admin-Zimmer Logo',
        src: 'img/logo.svg',
      },
      items: [
        // Der Reiter "Wissen" ist hier entfernt, da die Doku jetzt die gesamte Seite ist.
        {
          href: 'https://github.com/Systembetreuung-Schule-Bayern/admin-zimmer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Admin-Zimmer. Systembetreuung Schule Bayern.`,
    },
    prism: {
      theme: githubThemes.github,
      darkTheme: githubThemes.dracula,
    },
  },
};

export default config;