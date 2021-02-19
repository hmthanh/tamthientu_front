const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// An array with your links
const links = [{ url: '/features/', changefreq: 'daily', priority: 0.3 }];

// Create a stream to write to
const stream = new SitemapStream({
  hostname: 'https://example.com', // optional only necessary if your paths are relative
  lastmodDateOnly: false, // defaults to false, flip to true for baidu
  xmlns: { // XML namespaces to turn on - all by default
    news: true,
    xhtml: true,
    image: true,
    video: true,
    // custom: ['xmlns:custom="https://example.com"']
  },
  errorHandler: undefined
});

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(links).pipe(stream)).then(data =>
  data.toString(),
);
