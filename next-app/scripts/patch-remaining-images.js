const fs = require('fs');

// 1. AboutPage.js
let about = fs.readFileSync('next-app/src/pages-source/AboutPage.js', 'utf8');
about = about.replace(
  '<img src={leader.avatar} alt={leader.name} className="leader-card__avatar" />',
  '<img src={leader.avatar?.src || leader.avatar || (leader.name === "Yash Kumar" ? "/images/yash.webp" : "/images/ronit.webp")} alt={leader.name} className="leader-card__avatar" />'
);
fs.writeFileSync('next-app/src/pages-source/AboutPage.js', about, 'utf8');
console.log('Patched AboutPage.js');

// 2. ProductsPage.js
let prod = fs.readFileSync('next-app/src/pages-source/ProductsPage.js', 'utf8');
prod = prod.replace(
  '<img src={prod.logo} alt="" className="ps-tab__logo" />',
  '<img src={prod.logo?.src || prod.logo} alt="" className="ps-tab__logo" />'
);
prod = prod.replace(
  '<img src={currentProduct.logo} alt="" className="ps-card__logo-lg" />',
  '<img src={currentProduct.logo?.src || currentProduct.logo} alt="" className="ps-card__logo-lg" />'
);
prod = prod.replace(
  '<img src={currentProduct.heroImage} alt={`${currentProduct.name} Dashboard`} className="ps-card__image" />',
  '<img src={currentProduct.heroImage?.src || currentProduct.heroImage} alt={`${currentProduct.name} Dashboard`} className="ps-card__image" />'
);
fs.writeFileSync('next-app/src/pages-source/ProductsPage.js', prod, 'utf8');
console.log('Patched ProductsPage.js');

// 3. JwelnexPage.js
let jwel = fs.readFileSync('next-app/src/pages-source/products/JwelnexPage.js', 'utf8');
jwel = jwel.replace(
  '<img src={jwelnexHero} alt="Jwelnex Dashboard Interface" />',
  '<img src={jwelnexHero?.src || jwelnexHero || "/images/jwelnex-hero.webp"} alt="Jwelnex Dashboard Interface" />'
);
fs.writeFileSync('next-app/src/pages-source/products/JwelnexPage.js', jwel, 'utf8');
console.log('Patched JwelnexPage.js');
