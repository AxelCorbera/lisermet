// Script para comprimir las imágenes de public/assets/ a tamaños web apropiados
import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './public/assets';

const configs = {
  'hero-bg.jpg':        { width: 1920, quality: 82 },
  'quienes-somos.jpg':  { width: 1200, quality: 82 },
  'corte-laser.jpg':    { width: 1200, quality: 82 },
  'plegado-cnc.jpg':    { width: 1200, quality: 82 },
  'soldadura-laser.jpg':{ width: 1200, quality: 82 },
  'trabajo-1.jpg':      { width: 900,  quality: 80 },
  'trabajo-2.jpg':      { width: 900,  quality: 80 },
  'trabajo-3.jpg':      { width: 900,  quality: 80 },
  'trabajo-4.jpg':      { width: 900,  quality: 80 },
};

const files = readdirSync(ASSETS_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  if (file === 'logo.png') continue; // skip logo

  const cfg = configs[file];
  if (!cfg) continue;

  const srcPath = join(ASSETS_DIR, file);
  const tmpPath = join(ASSETS_DIR, `_tmp_${file}`);
  const originalSize = statSync(srcPath).size;

  await sharp(srcPath)
    .resize({ width: cfg.width, withoutEnlargement: true })
    .jpeg({ quality: cfg.quality, progressive: true, mozjpeg: true })
    .toFile(tmpPath);

  const newSize = statSync(tmpPath).size;
  renameSync(tmpPath, srcPath);

  const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
  console.log(`✓ ${file}: ${(originalSize/1024).toFixed(0)} KB → ${(newSize/1024).toFixed(0)} KB (−${saved}%)`);
}

console.log('\nCompresión completada.');
