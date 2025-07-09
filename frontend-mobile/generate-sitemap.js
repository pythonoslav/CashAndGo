const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 }
];

const stream = new SitemapStream({ hostname: 'https://cashandgo.com' });

streamToPromise(require('stream').Readable.from(links).pipe(stream)).then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
});

console.log('Sitemap generated successfully!');