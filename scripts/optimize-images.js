/**
 * Optimize images: resize (max 1920px wide), compress, and organize into public/images/ folders.
 * Run: node scripts/optimize-images.js
 * Requires: npm install sharp (devDependency)
 */

const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
const IMAGES = path.join(PUBLIC, 'images');

// Category -> list of source filenames (in public/)
const CATEGORIES = {
  hero: ['hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg', 'market-featured.jpg'],
  exterior: [
    'Back Exterior001-024-009-4200x2800.jpg',
    'Back Exterior002-025-028-4200x2800.jpg',
    'Back Exterior003-026-015-4200x2800.jpg',
  ],
  amenities: [
    'Amenities001-027-019-4200x2800.jpg',
    'Amenities002-028-026-4200x2801.jpg',
    'Amenities003-029-018-4200x2800.jpg',
  ],
  interior: [
    'Bathroom One001-022-023-4200x2801.jpg',
    'Bedroom One001-018-027-4200x2800.jpg',
    'Bedroom One002-019-025-4200x2800.jpg',
    'Bedroom Three001-021-017-4200x2801.jpg',
  ],
  team: ['DrJanDuffywithGooldCircle.jpg'],
  properties: ['property-1.jpg', 'property-2.jpg', 'property-3.jpg'],
  logos: ['logo.png', 'logo-white.png'],
};

// URL-safe output filename (no spaces)
function safeName(filename) {
  const base = path.basename(filename, path.extname(filename));
  const ext = path.extname(filename).toLowerCase();
  const safe = base.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase() || filename;
  return safe + ext;
}

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('Run: npm install sharp --save-dev');
    process.exit(1);
  }

  const MAX_WIDTH = 1920;
  const JPEG_QUALITY = 85;

  for (const [category, files] of Object.entries(CATEGORIES)) {
    const outDir = path.join(IMAGES, category);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
      console.log('Created', path.relative(PUBLIC, outDir));
    }

    for (const file of files) {
      const srcPath = path.join(PUBLIC, file);
      if (!fs.existsSync(srcPath)) {
        console.warn('Skip (not found):', file);
        continue;
      }

      const outName = safeName(file);
      const outPath = path.join(outDir, outName);
      const ext = path.extname(file).toLowerCase();

      try {
        if (ext === '.png') {
          await sharp(srcPath)
            .resize(MAX_WIDTH, null, { withoutEnlargement: true })
            .png({ compressionLevel: 9 })
            .toFile(outPath);
        } else {
          await sharp(srcPath)
            .resize(MAX_WIDTH, null, { withoutEnlargement: true })
            .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
            .toFile(outPath);
        }
        console.log('Optimized:', file, '->', path.join('images', category, outName));
      } catch (err) {
        console.error('Error', file, err.message);
      }
    }
  }

  console.log('Done. Update src/ to use paths like /images/hero/market-featured.jpg');
}

main();
