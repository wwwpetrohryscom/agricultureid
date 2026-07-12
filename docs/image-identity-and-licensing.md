# Image identity and licensing

Every content photograph is self-hosted, license-verified, and subject-verified.
The registry is [`data/images.ts`](../data/images.ts) (`IMAGE_MAP`, keyed by
`type:slug`); the auditor is
[`scripts/audit-images.mjs`](../scripts/audit-images.mjs) (`npm run audit:images`).

## Licensing (enforced offline by the validator)

Only redistribution-compatible licenses are accepted: **CC0, Public domain,
CC BY, CC BY-SA** — NonCommercial (`-NC`) and NoDerivatives (`-ND`) are rejected.
Each image must carry, and the validator fails otherwise:

- `creator`, `originalPage` (the Commons File: page), `license`, `licenseUrl`,
  `attribution`, `alt`, and `modifications`.

These are rendered publicly in the figure caption
([`ArticleFigure.tsx`](../components/content/ArticleFigure.tsx)): attribution,
a linked license, a link to the source page, and the modification note.

### Modification disclosure

Every pipeline image is downloaded from Commons, resized to ≤1280 px wide, and
recompressed as JPEG — content otherwise unaltered. This is disclosed verbatim
in `modifications` and shown in the caption.

### CC BY-SA / ShareAlike handling

The only modifications applied are lossy resizing and recompression for web
delivery; no adaptation of the creative content is made. Where a work is CC
BY-SA, the attribution names the license and links its deed, and no more
restrictive terms are imposed on the reproduction. Any future derivative that
adapts a CC BY-SA work must be released under the same-version (or a
later-compatible) CC BY-SA license.

### Public domain

Public-domain items link the PD mark. We do **not** label an image public domain
merely because it appears on a government site; the classification comes from the
Commons license metadata verified by the pipeline.

## Identity (network audit)

`audit-images.mjs` re-fetches each file's Commons metadata (ObjectName,
ImageDescription, Categories) and checks that an expected subject keyword —
including scientific-name and vernacular synonyms and plural stems — appears in
the filename, description, or categories. Flagged files are reviewed manually and
replaced if they do not clearly depict their subject.

The fetcher (`fetch-images.mjs`) prefers keyword-relevant candidates over the
largest image, which materially reduces mismatches.

### Latest audit

228 images: **0 licensing/attribution issues, 0 identity mismatches.** During the
Phase 2.1 audit, 8 images were replaced because they did not clearly depict their
subject (e.g. a baler page previously showed only hay bales; an oats page showed
a generic grass; a transplanter page showed hand planting).

## Diagnostic caution

Disease and pest photographs illustrate but do not diagnose. Visual appearance
alone is often insufficient for reliable identification; entries direct readers
to laboratory or extension diagnosis where identification matters.
