#!/usr/bin/env tsx
/**
 * Encode the `next/image` sources listed in lib/image-variants.ts into WebP
 * variants under public/_img/ (gitignored), one per srcset width.
 *
 * Runs in `prebuild`. The export has no request-time optimiser, so this is what
 * keeps the homepage hero at roughly the weight the Netlify Image CDN served,
 * instead of the 0.9 MB original.
 *
 * Deterministic and incremental: a variant newer than its source is skipped.
 */
import { mkdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import {
  VARIANT_SOURCES,
  VARIANT_WIDTHS,
  VARIANT_QUALITY,
  variantPath,
} from '../lib/image-variants';

const ROOT = process.cwd();
const PUBLIC = join(ROOT, 'public');
mkdirSync(join(PUBLIC, '_img'), { recursive: true });

async function main(): Promise<void> {
  let written = 0;
  let skipped = 0;
  for (const src of VARIANT_SOURCES) {
    const input = join(PUBLIC, src);
    if (!existsSync(input)) {
      throw new Error(`image-variants: source missing: ${src}`);
    }
    const inputMtime = statSync(input).mtimeMs;
    for (const width of VARIANT_WIDTHS) {
      const output = join(PUBLIC, variantPath(src, width));
      if (existsSync(output) && statSync(output).mtimeMs >= inputMtime) {
        skipped++;
        continue;
      }
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: VARIANT_QUALITY })
        .toFile(output);
      written++;
    }
  }
  console.log(
    `image-variants: ${VARIANT_SOURCES.length} source(s), ${written} written, ${skipped} up to date`,
  );
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
