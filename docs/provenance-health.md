# Provenance health (Phase 4A)

`lib/provenance/health.ts` (`npm run provenance:health`) produces an offline,
deterministic report classifying every subject with a **set of statuses**. A
complex evidence state is never reduced to a single fabricated score.

## Statuses

| Status                 | Meaning                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `healthy`              | No issues detected on the checked axes.                                                      |
| `reviewDue`            | Last reviewed / retrieved beyond the review horizon (default 365 days).                      |
| `sourceWeak`           | Best available source is Tier 3 (secondary reference).                                       |
| `sourceUnavailable`    | Source verified unreachable (set by the network source-health run, not this offline report). |
| `provenanceIncomplete` | A quantitative/safety claim lacks citations.                                                 |
| `unresolved`           | Referenced by an open/mitigated entry in the unresolved-issues registry.                     |
| `deprecated`           | Dataset publication status is deprecated/withdrawn.                                          |

## Subjects

Content items, datasets, formulas, and sources. Content is checked for
Tier-3-only sourcing, uncited quantitative/safety claims, review age, and
unresolved-issue links. Datasets are checked for retrieval age and publication
status. Formulas and sources are checked for weak (Tier-3-only) evidence.

## Determinism

The review horizon is an explicit parameter (default reference date
`2026-07-13`), **not** `Date.now()`, so the report is reproducible and a test
asserts identical output for a fixed reference date. Reports are intended for
review, not automatic publication.

## Current snapshot (main at 4A)

~561 healthy · 5 `sourceWeak` (Tier-3-only sources: RHS, Britannica, IFA) ·
5 `unresolved` (the Phase 2.1 registry subjects) · 0 `provenanceIncomplete` ·
0 `reviewDue` · 0 `deprecated`. Review queue: ~10 subjects. These are surfaced
(not hidden) and none represents an unsafe public claim.
