# Formula registry (Phase 3C)

AgricultureID's calculators are grounded in a **versioned formula registry**
(`lib/tools/formulas.ts`). Calculators resolve formulas by id and never duplicate
the maths in a component. Every constant lives once, tested, in
`lib/tools/constants.ts`.

## What every formula carries (`CalcFormula`)

- `formulaId`, `name`
- `formulaVersion` (the mathematical definition) and `calcVersion` (the
  implementation) — bump either independently when it changes
- `expression` (human-readable), `inputs`, `output` (with units)
- `assumptions`, `applicability` (geographic/crop/system context)
- `sourceIds` (must resolve in the source registry)
- `limitations`
- `testCases` (reference input → expected output, with tolerance)
- `lastReviewedAt`
- `compute` — a pure function that throws on invalid input (e.g. divide-by-zero)

## Registered formulas

| id                               | expression                                      |
| -------------------------------- | ----------------------------------------------- |
| `fertilizer-nutrient-from-grade` | nutrient = mass × grade%/100                    |
| `fertilizer-mass-for-target`     | mass = target ÷ (grade%/100)                    |
| `p2o5-to-p`                      | P = P₂O₅ × 0.4364                               |
| `k2o-to-k`                       | K = K₂O × 0.8301                                |
| `seed-rate-count`                | seeds/m² = plants/m² ÷ (germ% × estab%)         |
| `seed-rate-mass`                 | kg/ha = seeds/m² × TSW_g ÷ 100                  |
| `plant-density`                  | plants/ha = 10000 ÷ (row_m × in-row_m)          |
| `irrigation-net-volume`          | m³ = depth_mm × area_ha × 10                    |
| `irrigation-gross-volume`        | gross = net ÷ (efficiency%/100)                 |
| `gdd-average`                    | GDD = max(0, (Tmax+Tmin)/2 − Tbase)             |
| `gdd-upper-cutoff`               | GDD with a horizontal upper cutoff              |
| `yield-tha-to-buacre`            | bu/acre = (t/ha × 1000 × 0.8921785) ÷ bushel_lb |

## Constants (`lib/tools/constants.ts`)

Exact where a legal definition exists (1 lb = 0.45359237 kg; 1 acre =
4046.8564224 m²; US gallon = 3.785411784 L; Imperial gallon = 4.54609 L). Oxide
conversions are derived from standard atomic masses. Bushel weights are the
customary US standard test weights **per commodity** (wheat/soybean 60, maize/
sorghum/rye 56, barley 48, oats 32 lb) — there is no single generic bushel.

## Integrity enforcement

`lib/tools/validate-tools.ts` (run inside `content:validate`) **executes every
formula's test cases at build time** and fails the build if `compute` diverges
from the declared expected value. It also checks version presence, source
resolution, limitations, unique ids, and that each tool references only real
formulas. The same cases run again in `tests/phase3c.test.ts`.

## Adding or changing a formula

1. Edit `compute` and bump `calcVersion` (and `formulaVersion` if the maths
   changed). 2. Update/extend `testCases`. 3. Keep `sourceIds` resolving. The
   build fails until the test cases match the implementation.
