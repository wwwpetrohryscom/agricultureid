# Image and asset licensing

AgricultureID Phase 1 relies on **original visual elements and typography** — no
random internet photography, and no third-party copyrighted logos.

## Policy

Where images are used at all, only the following are acceptable:

- Original generated graphics (our own)
- Public-domain or CC0 assets
- Compatible Creative Commons images **with** required attribution
- Official government or institutional media with documented reuse terms

For any third-party image, we store metadata: creator, source URL, license,
attribution, local filename, subject, and alt text (see the `ImageMeta` type in
`types/content.ts`). **If licensing cannot be verified, the image is not used.**

## Assets in this repository

All current brand and preview assets are original works created for this project.
A machine-readable manifest is at
[`public/brand/manifest.json`](../public/brand/manifest.json).

| Asset                     | Purpose                       | Origin                                    |
| ------------------------- | ----------------------------- | ----------------------------------------- |
| `app/icon.svg`            | Favicon / brand mark          | Original geometric SVG                    |
| `app/icon.png`            | Favicon (48×48)               | Rendered from the original SVG            |
| `app/apple-icon.png`      | Apple touch icon (180×180)    | Rendered from the original SVG            |
| `app/opengraph-image.png` | Open Graph preview (1200×630) | Original HTML/CSS composition (no photos) |
| `app/twitter-image.png`   | Twitter/X preview (1200×630)  | Original HTML/CSS composition (no photos) |
| `public/brand/mark.svg`   | Brand mark source             | Original geometric SVG                    |

The brand mark is an original geometric "sprout in a tile" glyph. The social
preview cards are built entirely from typography and shapes in the brand palette
(see `tailwind.config.ts`) and rendered to PNG deterministically — they contain
no photographs.

## Cited source materials

Text entries cite external authorities (FAO, USDA, EPPO, universities, etc.). We
link to those sources; we do not copy their images or media into the site. Those
materials remain the property of their respective owners under their own terms.

## Phase 2 and beyond

If photography or diagrams are introduced later, each asset must be added to the
manifest with full provenance and a verifiable license before use, consistent
with the policy above.
