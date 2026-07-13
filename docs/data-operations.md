# Scientific data operations (Phase 4A)

A controlled, reviewable, deterministic system for maintaining AgricultureID's
external datasets, provenance, and source/image health. The goal is **not**
automatic publication — it is auditable maintenance.

## Dataset registry (`lib/data-ops/registry.ts`, `types/data-ops.ts`)

A central typed registry (`DatasetRegistryEntry[]`) describing every external
dataset: `datasetId`, provider, title, description, source URL, license (+ URL),
access requirements, jurisdiction, geographic + temporal coverage, update
frequency, latest release, retrieval date, `snapshotIds`, schema version,
transformation version, checksum, expected columns + unit, missing-value rule,
revision policy, known limitations, and publication status. It is **built
deterministically** from the indicator registry + immutable snapshots + a small
hand-authored provider-metadata map — no snapshot data is duplicated. It supports
multiple providers; today only the World Bank is present, but nothing assumes its
cadence. Current registry: 17 datasets (16 WDI indicators + country metadata).

## Snapshot operations

- **Immutability:** snapshots are versioned by filename and never overwritten;
  `scripts/fetch-worldbank.mjs` refuses to clobber an existing version.
- **Diff (`lib/data-ops/diff.ts`, `npm run data:diff`):** pure, deterministic
  comparison of two snapshot versions of one indicator — additions, removals,
  revisions, unit changes, row-count delta, added/removed jurisdictions and
  years, and the largest sample revisions. No timestamps in output, so reports
  only change when the data changes.
- **Validate (`npm run data:validate`):** checks every registry entry resolves
  to a checksum-verified snapshot with a matching unit and schema; also runs
  inside `content:validate` via `lib/data-ops/validate-dataops.ts`.

## Provenance health (`lib/provenance/health.ts`, `npm run provenance:health`)

An offline report classifying every subject (content, dataset, formula, source)
with a **set of statuses** — never one fabricated universal score:
`healthy`, `reviewDue`, `sourceWeak`, `sourceUnavailable`, `provenanceIncomplete`,
`unresolved`, `deprecated`. Deterministic: the review horizon is an explicit
parameter (not `Date.now()`), so the report is reproducible.

## Source health (`npm run source:health`)

Network, non-blocking (never a deterministic CI gate). Classifies each source as
`ok`, `redirect`, `bot-blocked` (403/429), `timeout`, `tls-error`, `dead`
(404/410/5xx), or `unreachable`. **A 403 or timeout is never counted as a dead
source** — publishers routinely block automated requests.

## Image health (`npm run audit:images`)

Network, non-blocking. Verifies subject identity and licensing/attribution
against Wikimedia Commons. The `/data-health` dashboard surfaces the image
**license distribution**. Dimensions/format and modification disclosure are
enforced by the deterministic content image gate.

## /data-health

A restrained, public methodology dashboard derived deterministically from the
registries: dataset count, latest retrieval date, source evidence-tier
distribution, provenance-status distribution, image licensing, formula versions,
and search-index document count. It exposes **no** secrets, filesystem paths,
CI errors, or internal notes.

## New commands

`data:validate` · `data:diff` · `provenance:health` · `search:benchmark`
(all deterministic/offline). `source:health` and `audit:images` remain network,
non-blocking, and separate.
