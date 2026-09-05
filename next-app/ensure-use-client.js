const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      checkDir(full);
    } else if (f.name.endsWith('.js') || f.name.endsWith('.jsx')) {
      let content = fs.readFileSync(full, 'utf8');
      const needsClient = /useState|useEffect|useRef|useCallback|useMemo|useContext|document\.|window\.|localStorage|sessionStorage|navigator\./.test(content);
      if (needsClient && !content.startsWith('"use client"') && !content.startsWith("'use client'")) {
        content = "'use client';\n\n" + content;
        fs.writeFileSync(full, content, 'utf8');
        console.log('Added use client to', full);
      }
    }
  }
}

checkDir(path.resolve(__dirname, 'src/components'));
checkDir(path.resolve(__dirname, 'src/hooks'));
checkDir(path.resolve(__dirname, 'src/utils'));
checkDir(path.resolve(__dirname, 'src/pages-source'));
console.log('Client check completed.');
