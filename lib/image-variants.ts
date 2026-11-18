/**
 * Build-time image variants for `next/image`.
 *
 * The site is a static export, so there is no image optimiser at request time.
 * Instead, every source listed here is encoded once per srcset width into
 * `public/_img/` by scripts/build-image-variants.mjs (run in `prebuild`), and
 * lib/image-loader.ts points each srcset entry at its file.
 *
 * A `next/image` whose source is NOT listed here still works: the loader
 * returns the original file. It is just not resized. Add the source here when
 * a new `next/image` is introduced.
 *
 * Kept free of imports so the loader (which ships to the browser) stays tiny.
 */

/** Sources served through `next/image`, as site-relative paths. */
export const VARIANT_SOURCES: readonly string[] = [
  '/images/agriculture-fields-golden-hour.jpg',
];

/**
 * Next's default `deviceSizes` + `imageSizes`, i.e. every width the default
 * loader contract can request. A width above the original's is encoded at the
 * original size (never enlarged), as Next's own optimiser does.
 */
export const VARIANT_WIDTHS: readonly number[] = [
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
];

/** The largest width in VARIANT_WIDTHS. */
const MAX_VARIANT_WIDTH = 3840;

/** WebP quality, matching Next's default `quality` of 75. */
export const VARIANT_QUALITY = 75;

/** `/images/foo.jpg` → `foo` */
function stem(src: string): string {
  const file = src.slice(src.lastIndexOf('/') + 1);
  const dot = file.lastIndexOf('.');
  return dot > 0 ? file.slice(0, dot) : file;
}

/** The published path of one variant. */
export function variantPath(src: string, width: number): string {
  return `/_img/${stem(src)}-${width}.webp`;
}

/** The smallest generated width that is at least `width`. */
export function variantWidth(width: number): number {
  return VARIANT_WIDTHS.find((w) => w >= width) ?? MAX_VARIANT_WIDTH;
}
