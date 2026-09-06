const fs = require('fs');
const path = require('path');

function getRoutes(dir, base = '') {
  let routes = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === '_next' || entry.name === 'images' || entry.name === 'server-configs' || entry.name === 'assets' || entry.name === '404') continue;
      const sub = path.join(dir, entry.name);
      if (fs.existsSync(path.join(sub, 'index.html'))) {
        routes.push(base + '/' + entry.name);
      }
      routes = routes.concat(getRoutes(sub, base + '/' + entry.name));
    }
  }
  return routes;
}

const routes = ['/', ...getRoutes('build')];
const uniqueRoutes = [...new Set(routes)].sort();

const date = '2026-06-13T19:09:38.472Z';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const r of uniqueRoutes) {
  const loc = 'https://www.vayunexsolution.com' + (r === '/' ? '/' : r);
  let priority = '0.8';
  let changefreq = 'weekly';
  if (r === '/') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (r.startsWith('/products/') || r.startsWith('/services/')) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (r === '/products' || r === '/blog') {
    priority = '0.9';
    changefreq = 'daily';
  } else if (r.startsWith('/blog/')) {
    priority = '0.85';
    changefreq = 'weekly';
  }

  xml += '    <url>\n';
  xml += '        <loc>' + loc + '</loc>\n';
  xml += '        <lastmod>' + date + '</lastmod>\n';
  xml += '        <changefreq>' + changefreq + '</changefreq>\n';
  xml += '        <priority>' + priority + '</priority>\n';
  xml += '    </url>\n';
}
xml += '</urlset>\n';

fs.writeFileSync('next-app/public/sitemap.xml', xml, 'utf8');
fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
fs.writeFileSync('build/sitemap.xml', xml, 'utf8');
console.log('Successfully generated full sitemap with ' + uniqueRoutes.length + ' URLs!');
