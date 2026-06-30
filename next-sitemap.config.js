/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wikitune.sisqo.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
