# Crop encyclopedia Waves 35–38 — pre-flight baseline

Recorded 2026-09-02 against merged `main` at `6563e7c`, worktree clean, no open
PRs, no remote feature branches. Every figure below was measured from the
repository, not carried forward from the Waves 31–34 report.

## Where the brief and the repository disagree

|                                 | Brief           | Repository        | Note                                                                                                                                                |
| ------------------------------- | --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unreviewed promotion candidates | 181             | **187**           | 181 at `P3_NEEDS_RESEARCH` plus 7 at `P4_IDENTITY_COMPLEX`, less white yam, which already carries a review. The 181 figure counts only the P3 tier. |
| Quality gates                   | "31 historical" | **26 validators** | The consolidation the brief anticipates has already happened.                                                                                       |

The repository figure governs. **The Wave 36 research queue is 187 crops.**

## Corpus

|                                     |                                        |
| ----------------------------------- | -------------------------------------- |
| Verified crop identities            | 348                                    |
| Published crop articles             | 160                                    |
| Data-only taxa                      | 188                                    |
| Families represented                | 74                                     |
| Genera represented                  | 213                                    |
| Promotion notes on file             | 8 (7 promoted, 1 reviewed and refused) |
| **Unreviewed promotion candidates** | **187**                                |

## Taxonomy layer

|                                    |                                        |
| ---------------------------------- | -------------------------------------- |
| Multi-taxon concept scopes         | 11                                     |
| Authority disagreements classified | 11                                     |
| Homonym resolutions pinned         | 2                                      |
| Refused-name crosswalk entries     | 83 (79 resolving, 4 deliberately null) |

## Editorial debt

|                                |                         |
| ------------------------------ | ----------------------- |
| Flagged reused-prose pairs     | 17                      |
| All reviewed and under ratchet | yes                     |
| Longest identical run          | 73 words (peach / plum) |

## Cross-layer coverage, of 160 published crops

| Layer                | Crops                          |
| -------------------- | ------------------------------ |
| soils                | 160                            |
| climate              | 151                            |
| relatedCrops         | 73                             |
| biosecurity          | 64                             |
| markets              | 57                             |
| extension            | 45                             |
| cultivars            | 15                             |
| economics            | 9                              |
| varietyRegistrations | 8                              |
| calendars            | 6                              |
| trade                | 0 — verified genuinely unkeyed |

Crops resolving at least one commodity: 67.

## Supporting content types

commodity 81 · cultivar 77 · pest 65 · plant-disease 50 · soil 21 · climate 20.

## Routes, search and build

|                          |                                    |
| ------------------------ | ---------------------------------- |
| Total routes             | 1,579                              |
| Crop routes              | 161 (160 articles + `/crops/taxa`) |
| Rendered pages           | 1,580                              |
| Sitemap URLs             | 1,579                              |
| Search documents         | 1,754                              |
| Search benchmark cases   | 275 (6 documented known issues)    |
| Search index, gzipped    | 192,274 bytes                      |
| Tests                    | 1,059 across 60 files              |
| Deterministic validators | 26                                 |
| Build duration           | 24 s                               |
| First Load JS, shared    | 102 kB                             |
| Largest crop route       | `/crops/taxa` at 688 kB            |

## Known open debt carried into Wave 35

- 17 reused-prose pairs, reviewed and ratcheted, not yet rewritten.
- Macadamia: the concept names two species and the corpus holds neither.
- Yam: white yam cannot be split out alone under the current authority treatment.
- Six documented search-engine defects, excluded from benchmark rates rather
  than relaxed into them.
