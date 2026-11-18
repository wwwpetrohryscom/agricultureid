import { VARIANT_SOURCES, variantPath, variantWidth } from './image-variants';

/**
 * `next/image` loader for the static export (see next.config.mjs).
 *
 * Maps a requested srcset width to a WebP variant generated at build time. A
 * source without variants is returned unchanged, so an unlisted image degrades
 * to the original file rather than to a broken one.
 */
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!VARIANT_SOURCES.includes(src)) return src;
  return variantPath(src, variantWidth(width));
}
