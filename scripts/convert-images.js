import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRECTORIES = [
  'src/assets',
  'public/images',
  'public'
];

async function getImages(dir, fileList = []) {
  const files = await fs.promises.readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.promises.stat(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        await getImages(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function convertImage(filePath) {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);
  
  const webpPath = path.join(dir, `${name}.webp`);
  const avifPath = path.join(dir, `${name}.avif`);
  
  console.log(`Processing: ${filePath}`);
  
  try {
    const image = sharp(filePath);
    
    // WebP conversion
    const isPng = ext === '.png';
    await image
      .webp({ quality: isPng ? 85 : 80, lossy: !isPng })
      .toFile(webpPath);
      
    // AVIF conversion
    await image
      .avif({ quality: isPng ? 75 : 70 })
      .toFile(avifPath);
      
    const origSize = (await fs.promises.stat(filePath)).size;
    const webpSize = (await fs.promises.stat(webpPath)).size;
    const avifSize = (await fs.promises.stat(avifPath)).size;
    
    console.log(`  -> WebP: ${(webpSize / 1024).toFixed(1)} KB (Saved: ${((1 - webpSize / origSize) * 100).toFixed(1)}%)`);
    console.log(`  -> AVIF: ${(avifSize / 1024).toFixed(1)} KB (Saved: ${((1 - avifSize / origSize) * 100).toFixed(1)}%)`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
  }
}

async function main() {
  console.log('Starting image optimization and conversion...');
  
  let allImages = [];
  for (const dir of DIRECTORIES) {
    const fullPath = path.resolve(dir);
    if (fs.existsSync(fullPath)) {
      console.log(`Scanning directory: ${dir}`);
      await getImages(fullPath, allImages);
    }
  }
  
  console.log(`Found ${allImages.length} images to convert.`);
  
  for (const imgPath of allImages) {
    await convertImage(imgPath);
  }
  
  console.log('All images processed successfully!');
}

main().catch(err => {
  console.error('Fatal error:', err);
});
