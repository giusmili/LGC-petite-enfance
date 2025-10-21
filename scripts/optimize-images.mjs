import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('public', 'assets');
const widths = [480, 768, 1024, 1440];
const sourceExts = new Set(['.jpg', '.jpeg', '.png']);

async function ensureDir(p) {
  await fs.promises.mkdir(path.dirname(p), { recursive: true });
}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!sourceExts.has(ext)) return;

  const base = path.basename(file, ext);
  const inputPath = path.join(assetsDir, file);
  const buf = await fs.promises.readFile(inputPath);
  const img = sharp(buf);
  const metadata = await img.metadata();

  const tasks = [];
  for (const w of widths) {
    if (metadata.width && metadata.width < w) continue; // skip upscaling
    const baseOut = path.join(assetsDir, `${base}-w${w}`);
    const variants = [
      { ext: 'avif', pipeline: (s) => s.resize({ width: w }).avif({ quality: 50 }) },
      { ext: 'webp', pipeline: (s) => s.resize({ width: w }).webp({ quality: 70 }) },
      { ext: 'jpg', pipeline: (s) => s.resize({ width: w }).jpeg({ mozjpeg: true, quality: 75 }) },
    ];
    for (const v of variants) {
      const outPath = `${baseOut}.${v.ext}`;
      // skip if exists
      if (fs.existsSync(path.join(assetsDir, `${base}-w${w}.${v.ext}`))) continue;
      tasks.push(
        v
          .pipeline(sharp(buf))
          .toFile(path.join(assetsDir, `${base}-w${w}.${v.ext}`))
      );
    }
  }
  await Promise.all(tasks);
}

async function main() {
  const entries = await fs.promises.readdir(assetsDir);
  const images = entries.filter((f) => sourceExts.has(path.extname(f).toLowerCase()));
  for (const f of images) {
    console.log('Optimizing', f);
    await processImage(f);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

