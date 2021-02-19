module.exports = {
  policy: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: ['/search'],
      crawlDelay: 2,
    },
    {
      userAgent: 'OtherBot',
      allow: ['/feature', '/about'],
      disallow: ['/admin', '/login'],
      crawlDelay: 2,
    },
    {
      userAgent: '*',
      allow: '/',
      disallow: '/search',
      crawlDelay: 10,
      cleanParam: 'ref /articles/',
    },
  ],
  sitemap: 'http://example.com/sitemap.xml',
  host: 'http://example.com',
};
