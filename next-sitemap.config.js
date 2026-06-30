/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wikitune.sisqo.dev',
  generateRobotsTxt: true,
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  // Segnali differenziati per Google: home > hub di categoria > articoli.
  // changefreq realistici (gli articoli cambiano di rado, non ogni giorno).
  transform: async (config, path) => {
    const depth = path.split('/').filter(Boolean).length
    let priority = 0.6
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (depth === 1) {
      // hub di categoria: /accordatori, /teoria, ...
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
