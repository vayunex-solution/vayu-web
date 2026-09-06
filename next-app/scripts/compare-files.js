const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== 'out' && file !== 'build' && file !== '.git') {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const reactSrcRoot = path.resolve('src');
const nextSrcRoot = path.resolve('next-app/src');
const reactPublicRoot = path.resolve('public');
const nextPublicRoot = path.resolve('next-app/public');

const reactSrcFiles = getAllFiles(reactSrcRoot).map(f => path.relative(reactSrcRoot, f).replace(/\\/g, '/'));
const nextSrcFiles = getAllFiles(nextSrcRoot).map(f => path.relative(nextSrcRoot, f).replace(/\\/g, '/'));
const reactPublicFiles = getAllFiles(reactPublicRoot).map(f => path.relative(reactPublicRoot, f).replace(/\\/g, '/'));
const nextPublicFiles = getAllFiles(nextPublicRoot).map(f => path.relative(nextPublicRoot, f).replace(/\\/g, '/'));

console.log('=== REACT SRC TOTAL FILES ===', reactSrcFiles.length);
console.log('=== NEXT SRC TOTAL FILES ===', nextSrcFiles.length);
console.log('=== REACT PUBLIC TOTAL FILES ===', reactPublicFiles.length);
console.log('=== NEXT PUBLIC TOTAL FILES ===', nextPublicFiles.length);

// Compare subdirectories
const categories = ['components', 'hooks', 'utils', 'data', 'styles', 'assets', 'pages'];

console.log('\n--- BREAKDOWN BY CATEGORY IN SRC ---');
categories.forEach(cat => {
  const reactCat = reactSrcFiles.filter(f => f.startsWith(cat + '/'));
  // In Next.js, pages might be in app/ or pages-source/
  let nextCat = nextSrcFiles.filter(f => f.startsWith(cat + '/'));
  if (cat === 'pages') {
    const nextPagesSource = nextSrcFiles.filter(f => f.startsWith('pages-source/'));
    const nextApp = nextSrcFiles.filter(f => f.startsWith('app/'));
    console.log(`\n[${cat.toUpperCase()}]`);
    console.log(`React (${reactCat.length}):`);
    reactCat.forEach(f => console.log(`  - React: ${f}`));
    console.log(`Next.js pages-source (${nextPagesSource.length}) & app routes (${nextApp.length}):`);
    nextPagesSource.forEach(f => console.log(`  - Next pages-source: ${f}`));
    return;
  }
  
  console.log(`\n[${cat.toUpperCase()}] React: ${reactCat.length} files | Next: ${nextCat.length} files`);
  const missingInNext = [];
  reactCat.forEach(rf => {
    // Check if rf exists directly or with .jsx
    const directMatch = nextCat.includes(rf);
    const jsxMatch = nextCat.includes(rf.replace(/\.js$/, '.jsx'));
    if (!directMatch && !jsxMatch) {
      missingInNext.push(rf);
    }
  });

  if (missingInNext.length > 0) {
    console.log(`  MISSING in Next (${missingInNext.length}):`);
    missingInNext.forEach(m => console.log(`    ⚠️  ${m}`));
  } else {
    console.log(`  ✅ All ${reactCat.length} files accounted for in Next.js!`);
  }
});

// Compare public files
console.log('\n--- PUBLIC ASSETS COMPARISON ---');
const missingPublic = [];
reactPublicFiles.forEach(pf => {
  if (!nextPublicFiles.includes(pf)) {
    missingPublic.push(pf);
  }
});
if (missingPublic.length > 0) {
  console.log(`Missing public files in Next.js (${missingPublic.length}):`);
  missingPublic.forEach(m => console.log(`  ⚠️  ${m}`));
} else {
  console.log(`✅ All ${reactPublicFiles.length} public files accounted for in Next.js!`);
}
