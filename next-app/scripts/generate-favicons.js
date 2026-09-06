const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcImg = 'C:/Users/Admin/.gemini/antigravity-ide/brain/0f523408-7935-47e9-b1c3-21471ed94511/.user_uploaded/media_1788669148326.png';

async function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];

  for (const img of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(img => img.buffer)]);
}

async function run() {
  console.log('Generating favicon & brand icon assets from:', srcImg);

  // Favicon PNG buffers
  const p16 = await sharp(srcImg).resize(16, 16).png().toBuffer();
  const p32 = await sharp(srcImg).resize(32, 32).png().toBuffer();
  const p48 = await sharp(srcImg).resize(48, 48).png().toBuffer();

  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ]);

  // High-res PWA & Apple Touch Icons
  const p180 = await sharp(srcImg).resize(180, 180).png().toBuffer();
  const p192 = await sharp(srcImg).resize(192, 192).png().toBuffer();
  const p512 = await sharp(srcImg).resize(512, 512).png().toBuffer();

  // WebP for Navbar & Footer logo
  const webpLogo = await sharp(srcImg).resize(512, 512).webp({ quality: 95 }).toBuffer();

  const publicDirs = [
    'next-app/public',
    'public',
    'build'
  ];

  for (const dir of publicDirs) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
    fs.writeFileSync(path.join(dir, 'favicon-16x16.png'), p16);
    fs.writeFileSync(path.join(dir, 'favicon-32x32.png'), p32);
    fs.writeFileSync(path.join(dir, 'favicon-48x48.png'), p48);
    fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), p180);
    fs.writeFileSync(path.join(dir, 'logo192.png'), p192);
    fs.writeFileSync(path.join(dir, 'logo512.png'), p512);
    fs.writeFileSync(path.join(dir, 'logo.png'), p512);

    // Also update images/vayunex-logo.webp if images folder exists or create it
    const imagesDir = path.join(dir, 'images');
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
    fs.writeFileSync(path.join(imagesDir, 'vayunex-logo.webp'), webpLogo);

    console.log('Successfully saved favicon & logo suite to:', dir);
  }

  // Update src/assets/images for React / Next.js Webpack imports
  const assetDirs = [
    'next-app/src/assets/images',
    'src/assets/images'
  ];

  for (const dir of assetDirs) {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(path.join(dir, 'vayunex-logo.webp'), webpLogo);
      console.log('Updated brand logo in:', dir);
    }
  }

  console.log('All icons and brand marks successfully replaced everywhere!');
}

run().catch(console.error);
