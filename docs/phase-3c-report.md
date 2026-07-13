# Phase 3C report — tools & calculators

**Branch:** `feat/phase-3c-agricultural-tools`
**Base:** `feat/phase-3b-geographic-intelligence @ 7bed3d8` (chain: main←3A←3B←3C,
documented in [`phase-3-architecture.md`](./phase-3-architecture.md)).
**Deployment:** none. Not merged, not deployed.

## What shipped

Seven transparent, educational calculators grounded in a **versioned formula
registry**. Every calculator shows its formula, assumptions, limitations,
sources, and version; produces sensible significant digits; and carries a safety
disclaimer. No prescriptive agronomic advice.

| Metric                            | Value                                                                   |
| --------------------------------- | ----------------------------------------------------------------------- |
| Calculators                       | **7**                                                                   |
| Registered formulas               | **12** (each versioned + test-cased)                                    |
| Formula test cases (run at build) | 18                                                                      |
| Tested unit constants             | area, mass, volume (US/Imp), temperature, bushel weights, oxide factors |
| Static pages built                | **620** (was 612 after 3B)                                              |
| Tests                             | **93 passed** (12 files; +`tests/phase3c.test.ts`, 14 cases)            |

## Tools & routes

`/tools` (hub) + `/tools/[tool]`:

- `fertilizer-nutrient-calculator` — nutrient↔fertilizer mass from grade; oxide→elemental.
- `seed-rate-calculator` — seeds/m² from population, germination, establishment; kg/ha from TSW.
- `plant-density-calculator` — plants/ha, /m², /acre from spacing.
- `irrigation-volume-calculator` — net (mm×area×10) and gross (efficiency) volume.
- `growing-degree-days` — average and upper-cutoff methods.
- `yield-converter` — t/ha, kg/ha, lb/acre, commodity-specific bu/acre.
- `unit-converters` — area, mass, volume (US/Imperial), temperature, application rate, plant density.

## Formula registry (single source of truth)

`lib/tools/formulas.ts` holds each `CalcFormula` with `formulaVersion` +
`calcVersion`, expression, inputs/outputs, assumptions, applicability,
`sourceIds`, limitations, `testCases`, and `lastReviewedAt`. Calculators resolve
formulas by id (`lib/tools/tools.ts`); the maths is never duplicated in UI.
Constants live once in `lib/tools/constants.ts` (exact where a legal definition
exists — pound, acre, US/Imperial gallon — and derived from atomic masses for
oxide conversions). See [`formula-registry.md`](./formula-registry.md).

## UX & accessibility (`CalculatorClient`)

Purpose, labelled inputs with units, live output (aria-live), the formula panel,
assumptions, limitations, sources, version, Reset, and a "Copy shareable link"
that serializes inputs as query parameters (and hydrates from them). Inputs are
native, keyboard-accessible, `aria-describedby` for help/errors, `aria-invalid`
on error. Empty required fields are treated as "no input" (never zero) and
suppress the result; divide-by-zero and invalid combinations are caught in
`compute` and surfaced as friendly errors. Significant digits avoid fake
precision. See [`calculator-safety.md`](./calculator-safety.md).

## Safety

Every tool page renders a standard disclaimer: educational/reference only, result
quality depends on inputs, local/legal/label/professional guidance may override,
and results are **not** pesticide/fertilizer/irrigation/veterinary prescriptions.
The fertilizer tool converts grades but does not recommend rates; irrigation does
not recommend a depth by crop; GDD does not infer crop stage; bushel conversions
require commodity selection (no single generic bushel).

## Structured data & SEO

Each calculator emits `WebApplication` structured data (a genuine interactive
tool) — **not** `HowTo`, and no fake reviews/ratings/FAQ. `/tools` flipped to an
active nav section; `/tools` and all seven tool routes added to the sitemap.

## Validation results (deterministic gate — all green)

| Check              | Result                                                                       |
| ------------------ | ---------------------------------------------------------------------------- |
| `format:check`     | pass                                                                         |
| `typecheck`        | pass                                                                         |
| `lint`             | pass (0 warnings)                                                            |
| `content:validate` | **0 errors, 0 warnings** (runs every formula test case as an integrity gate) |
| `test`             | **93 passed**                                                                |
| `build`            | **620 static pages**                                                         |
| `audit`            | unchanged (0 incorrect reciprocity)                                          |

`lib/tools/validate-tools.ts` executes every formula's declared test cases at
build time and fails the build if `compute` diverges — plus version/ source/
limitation/uniqueness checks and tool→formula resolution.

## Unresolved / notes

- Bushel test weights are legal/customary standards, not the actual test weight
  of a lot; stated on the page and in the formula limitations.
- Calculators compute a single day of GDD; multi-day accumulation and crop-stage
  inference are intentionally out of scope (no crop model claimed).

## Commits

Branch history: formula registry + constants + tools + validators, then UX +
routes + safety, then tests + docs + report. Pushed after the full deterministic
gate passed. **Not merged; not deployed.**
