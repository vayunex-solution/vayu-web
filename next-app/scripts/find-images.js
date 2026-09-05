const fs = require('fs');
const path = require('path');

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (/\.(js|jsx)$/.test(e.name)) {
      const c = fs.readFileSync(f, 'utf8');
      if (/import\s+.*from\s+['"][^'"]*\.(webp|png|jpg|jpeg|svg)['"]/i.test(c)) {
        console.log(f);
      }
    }
  }
}
walk('next-app/src');
