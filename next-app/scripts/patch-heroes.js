const fs = require('fs');
const path = require('path');

const list = [
  {
    src: 'src/pages/products/SocialNexPage.js',
    dest: 'next-app/src/pages-source/products/SocialNexPage.js',
    from: '<img src={socialnexHero} alt="SocialNex Dashboard Interface" />',
    to: '<img src={socialnexHero?.src || socialnexHero || "/images/socialnex-hero.webp"} alt="SocialNex Dashboard Interface" />'
  },
  {
    src: 'src/pages/products/SchoolDostPage.js',
    dest: 'next-app/src/pages-source/products/SchoolDostPage.js',
    from: '<img src={schooldostHero} alt="SchoolDost Mobile App Interface" />',
    to: '<img src={schooldostHero?.src || schooldostHero || "/images/schooldost-hero.webp"} alt="SchoolDost Mobile App Interface" />'
  },
  {
    src: 'src/pages/products/PayNexPage.js',
    dest: 'next-app/src/pages-source/products/PayNexPage.js',
    from: '<img src={paynexHero} alt="PayNex Financial Dashboard" />',
    to: '<img src={paynexHero?.src || paynexHero || "/images/paynex-hero.webp"} alt="PayNex Financial Dashboard" />'
  }
];

for (const item of list) {
  let content = fs.readFileSync(item.src, 'utf8');
  if (!content.startsWith("'use client';")) {
    content = "'use client';\n\n" + content;
  }
  content = content.replace(item.from, item.to);
  fs.writeFileSync(item.dest, content, 'utf8');
  console.log('Successfully updated:', item.dest);
}
