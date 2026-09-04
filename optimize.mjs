import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'src/assets/images';
const files = fs.readdirSync(dir);

async function optimizeImages() {
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const filePath = path.join(dir, file);
      const parsed = path.parse(file);
      const outPath = path.join(dir, `${parsed.name}.webp`);
      
      console.log(`Optimizing ${file}...`);
      await sharp(filePath)
        .webp({ quality: 75 }) // Good balance of quality and size
        .toFile(outPath);
        
      console.log(`Created ${parsed.name}.webp`);
      
      // Optionally delete the old file to clean up space
      fs.unlinkSync(filePath);
      console.log(`Deleted ${file}`);
    }
  }
}

optimizeImages().catch(err => console.error(err));
