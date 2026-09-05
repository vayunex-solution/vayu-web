const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../out');
const dest = path.resolve(__dirname, '../../build');

if (!fs.existsSync(src)) {
  console.error('out directory does not exist. Run next build first.');
  process.exit(1);
}

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

function copyRecursive(source, target) {
  const files = fs.readdirSync(source, { withFileTypes: true });
  for (const f of files) {
    const s = path.join(source, f.name);
    const d = path.join(target, f.name);
    if (f.isDirectory()) {
      if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
      copyRecursive(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

console.log(`Syncing Next.js export from ${src} to ${dest}...`);
copyRecursive(src, dest);
console.log('Successfully synced Next.js build to ../build for cPanel deployment!');
