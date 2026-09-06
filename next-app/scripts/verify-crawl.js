const fs = require('fs');

const indexHtml = fs.readFileSync('build/index.html', 'utf8');
console.log('Has canonical link:', indexHtml.includes('canonical'));
console.log('Has googleBot directive:', indexHtml.includes('max-image-preview:large'));
console.log('Has Org schema graph:', indexHtml.includes('https://schema.org') && indexHtml.includes('Vayunex Solution'));
console.log('build/.well-known/security.txt exists:', fs.existsSync('build/.well-known/security.txt'));
console.log('build/.htaccess exists:', fs.existsSync('build/.htaccess'));
console.log('build/sitemap.xml exists:', fs.existsSync('build/sitemap.xml'));
console.log('build/robots.txt exists:', fs.existsSync('build/robots.txt'));
console.log('build/manifest.json exists:', fs.existsSync('build/manifest.json'));
console.log('build/llms.txt exists:', fs.existsSync('build/llms.txt'));
console.log('build/ai-facts.json exists:', fs.existsSync('build/ai-facts.json'));
