const config = {
  title: 'Admin-Zimmer.de',
  tagline: 'Der digitale Werkzeugkasten für Bayerns Grund- und Mittelschulen',
  favicon: 'img/favicon.ico',

  // Exakt auf deinen GitHub-Namen angepasst:
  url: 'https://Systembetreuung-Schule-Bayern.github.io', 
  baseUrl: '/admin-zimmer/', 
  organizationName: 'Systembetreuung-Schule-Bayern', 
  projectName: 'admin-zimmer', 
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Dokumentation ist die Startseite
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Admin-Zimmer',
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Wissen'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Admin-Zimmer.de. Privatprojekt von Kollegen für Kollegen.`,
    },
  },
};

module.exports = config;