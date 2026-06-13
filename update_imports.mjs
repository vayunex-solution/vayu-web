import fs from 'fs';

const files = [
  'src/pages/ProductsPage.js',
  'src/pages/HomePage.js',
  'src/components/layout/Navbar/Navbar.js',
  'src/components/layout/Footer/Footer.js',
  'src/components/common/SEO.js',
  'src/components/common/ProductsPopup.js',
  'src/components/common/ProductShowcase.js',
  'src/pages/AboutPage.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.replace(/assets\/images\/([^'"]+)\.(png|jpe?g)/gi, 'assets/images/$1.webp');
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
