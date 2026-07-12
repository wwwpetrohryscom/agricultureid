# Image and asset licensing

AgricultureID relies on **original visual elements and verified licensed
photography** — no random internet photography, no stock-preview images, and no
third-party copyrighted logos.

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

Brand assets are original works created for this project. The homepage hero is a
licensed Creative Commons photograph with attribution. A machine-readable
manifest is at
[`public/brand/manifest.json`](../public/brand/manifest.json).

| Asset                                              | Purpose                       | Origin                                            |
| -------------------------------------------------- | ----------------------------- | ------------------------------------------------- |
| `public/brand/agricultureid-mark.svg`              | Brand mark source             | Original circular plant-and-field SVG             |
| `public/brand/agricultureid-logo.svg`              | Primary logo lockup           | Original SVG                                      |
| `public/brand/agricultureid-logo-light.svg`        | Dark-background logo lockup   | Original SVG                                      |
| `public/brand/agricultureid-mark-monochrome.svg`   | Monochrome mark               | Original SVG                                      |
| `app/icon.svg`                                     | Favicon / brand mark          | Original SVG                                      |
| `app/favicon.ico`                                  | Favicon ICO                   | Rendered from the original SVG                    |
| `app/icon.png`                                     | Favicon (48×48)               | Rendered from the original SVG                    |
| `app/apple-icon.png`                               | Apple touch icon (180×180)    | Rendered from the original SVG                    |
| `app/opengraph-image.png`                          | Open Graph preview (1200×630) | Original composition over licensed CC BY 4.0 hero |
| `app/twitter-image.png`                            | Twitter/X preview (1200×630)  | Original composition over licensed CC BY 4.0 hero |
| `public/images/agriculture-fields-golden-hour.jpg` | Homepage hero                 | Wikimedia Commons, CC BY 4.0                      |

The brand mark is an original flat circular plant-and-field glyph created from
the approved visual reference. It is not a screenshot crop and does not use
photorealistic rendering.

## Homepage hero

The homepage hero uses a local derivative of a verified Wikimedia Commons image:

- Title: `Harvested fields at sunset in Pomar de Valdivia, Palencia`
- Creator: Jesús Gómez Fernández
- Source:
  `https://commons.wikimedia.org/wiki/File:Harvested_fields_at_sunset_in_Pomar_de_Valdivia,_Palencia.jpg`
- License: Creative Commons Attribution 4.0 International (CC BY 4.0)
- License URL: `https://creativecommons.org/licenses/by/4.0/deed.en`
- Local derivative: `public/images/agriculture-fields-golden-hour.jpg`
- Usage: homepage hero background and social preview background
- Changes: cropped to 16:9, resized to 2400×1350, compressed as JPEG
- Alt text: Golden-hour agricultural fields with harvested rows and distant
  hills in Pomar de Valdivia, Spain

## Content article images (Phase 2)

From Phase 2, content pages carry a lead image. We use a **hybrid** approach:

- **Concrete entities** (crops, livestock, machinery, many pests and diseases,
  and some systems/irrigation/climate) use a **verified Wikimedia Commons
  photograph**, self-hosted under `public/images/`.
- **Abstract topics** (most nutrients, soil properties, climate metrics) use an
  **original on-topic SVG diagram** (`components/content/TopicFigure.tsx`) — our
  own vector art, always relevant, zero licensing risk.

### The Commons pipeline

`scripts/fetch-images.mjs` searches Wikimedia Commons, and for each candidate it
reads the `imageinfo` `extmetadata` and **only accepts** redistribution-compatible
licenses — **CC0, Public domain, CC BY, and CC BY-SA** — explicitly rejecting
NonCommercial (`-NC`), NoDerivatives (`-ND`), and unknown licenses. It downloads
and resizes the file and records full provenance: creator, source URL, original
Commons page, license, license URL, and an attribution line.

Results are written to `data/images.ts` (`IMAGE_MAP`, keyed by `type:slug`) and
rendered with a visible attribution caption and license link by
`components/content/ArticleFigure.tsx`. The build gate
(`lib/validation/validate.ts`) fails if any page's image is not self-hosted or is
missing alt text, a license, or attribution, or if a license is not
redistribution-compatible.

> Note on official media: some official sites (including FAO) place additional
> restrictions on photographs, especially for modification and commercial reuse.
> We do not assume official = freely reusable; only images whose license is
> verified compatible are used.

## Cited source materials

Text entries cite external authorities (FAO, USDA, EPPO, universities, etc.). We
link to those sources; we do not copy their images or media into the site. Those
materials remain the property of their respective owners under their own terms.

## Adding new imagery

Every new photograph must go through the Commons pipeline (or be added to
`IMAGE_MAP` with the same verified fields) before use, consistent with the policy
above. If no compatible photo exists for a topic, it uses an original diagram.
