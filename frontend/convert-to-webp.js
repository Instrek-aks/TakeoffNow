import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const publicDir = './public';
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function convertToWebP() {
  try {
    const files = await readdir(publicDir);
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.endsWith(ext))
    );

    console.log(`Found ${imageFiles.length} image files to convert:\n`);

    for (const file of imageFiles) {
      const inputPath = join(publicDir, file);
      const outputPath = join(publicDir, file.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp'));

      // Skip if WebP already exists
      if (existsSync(outputPath)) {
        console.log(`⏭️  Skipping ${file} - WebP already exists`);
        continue;
      }

      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        
        console.log(`✅ Converted: ${file} → ${outputPath.split('/').pop()}`);
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
      }
    }

    console.log('\n✨ Conversion complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

convertToWebP();

