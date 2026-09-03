# Waves 43–46 baseline

Recorded from the merged repository, not from the previous programme's report.
Where a figure here differs from the brief's stated baseline, this file is the
one that was measured.

## Git

| | |
| --- | --- |
| `main` | `2d2f48f68864bde2e324bdead3acb420a86f1486` |
| `local main == origin/main` | yes |
| worktree | clean |
| open PRs | 0 |
| remote feature branches | none (the four Wave 39–42 branches were stale local remote-tracking refs; `--prune` removed them) |

## Corpus

| | |
| --- | --- |
| crop identities | 350 |
| crop articles | 243 |
| data-only taxa | 107 |
| declared concept scopes | 21 |
| crosswalk names | 95 |
| knowledge hubs | 12 |
| calendar entries | 5,447 |
| crops with a calendar | 103 |
| commodity mappings classified | 81 of 81 |

### Complex-concept queue as it stands

Wave 41 reviewed 39 candidates and left 7 `DEFER_UNRESOLVED`. The research layer
still holds the original classifications, which is correct — a scope review does
not rewrite the research record it came from:

| | |
| --- | --- |
| `AGRICULTURAL_CONCEPT_COMPLEX` | 24 |
| `TAXONOMY_COMPLEX` | 4 |
| `DUPLICATES_EXISTING_CONCEPT` | 3 |
| scope reviews recorded | 39 (25 keep-umbrella, 7 add-child-data-only, 7 defer) |

## Cross-layer coverage, of 243 crops

| layer | crops |
| --- | --- |
| soils | 243 |
| climate | 234 |
| relatedCrops | 114 |
| calendars | 103 |
| biosecurity | 64 |
| markets | 57 |
| extension | 45 |
| cultivars | 15 |
| economics | 9 |
| varietyRegistrations | 8 |
| trade | 0 |

## FAO Crop Calendar

| | |
| --- | --- |
| crop names in the snapshot | 210 |
| matched | 106 |
| refused | 104 |
| — `NO_CORPUS_MATCH` | 101 |
| — `AMBIGUOUS_COMMON_NAME` | 3 |

The brief states 104 unresolved names. Measured: **104 refusals, of which 101
are the orphan research queue** — the other three are names the corpus has
already decided are ambiguous and refused deliberately. Wave 44 must rebuild the
queue from live data rather than from either number.

## Commodity mapping granularity

| kind | n |
| --- | --- |
| `EXACT_CROP` | 41 |
| `NARROWER_THAN_CROP` | 16 |
| `BROADER_CROP_CONCEPT` | 14 |
| `ANIMAL_PRODUCT` | 6 |
| `BROADER_THAN_CROP` | 4 |

## Shared-prose debt

Measured by shingling, standing phrases stripped with a boundary marker.

| shared run | pairs |
| --- | --- |
| ≥ 12 words | 5,748 |
| ≥ 16 | 1,000 |
| ≥ 20 | 277 |
| ≥ 25 | 102 |
| ≥ 30 | 39 |
| ≥ 35 | 9 |
| ≥ 40 | 1 |

Longest single shared run: **47 words** (peach / plum).

The ratchet in `crops-integrity-validate.ts` pins `{20: 277, 25: 102, 30: 39,
35: 9}` and fails in both directions.

## Search

| | |
| --- | --- |
| benchmark cases | 566 |
| regression cases | 557 |
| known issues | 9 |

Known issues: `shipping documents`, `dry basis`, `cultivar of wheat`,
`wheat cultivar`, `wheat cultivars`, `machinery in farming systems`,
`ricinoleic acid`, `nerica`, `tart cherry`.

## Build and performance

| | |
| --- | --- |
| routes emitted | 1,771 |
| pages built | 1,772 |
| sitemap URLs | 1,771 |
| `/crops/*` routes | 244 |
| `/crop-calendars/*` routes | 103 |
| hub routes | 12 |
| search documents | 1,865 |
| search index, gzipped | 219,117 bytes |
| tests | 1,153 across 67 files |
| deterministic suite | 36 steps |
| build duration | 28 s |
| first-load JS shared by all | 102 kB |
| largest crop route | `/crops/taxa` 676 kB, then maize and wheat at 428 kB |
| largest hub route | `/crops/groups/vegetables` 240 kB |

## Journal

`https://agricultureid.com/journal` returns 200 at the public host with no
redirect to the infrastructure host.

## Known structural blockers carried in

1. **Citrus** — five published citrus crops and no parent concept. Blocks
   mandarin (Wave 39) and kaffir lime (Wave 40).
2. **Brassica rapa** — no page owns the species above its cultivar groups.
   Blocks turnip and swede (Wave 40).
3. **Alias integrity** — a false alias that is not another crop's title is
   undetectable, and the general "aliases must be unique" rule was tested
   against the corpus and correctly refused.
4. **Trade** — `REQUIRES_DEDICATED_WAVE`; coverage stays 0.
