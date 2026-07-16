# Phase 5E — Commodity Calculators and Decision Tools

Base: merged main `518d481` (Phase 5D). Branch: `feat/phase-5e-commodity-tools`.

## What shipped

|                    |                                                                    |
| ------------------ | ------------------------------------------------------------------ |
| New tools          | **11** (18 total; the 7 Phase 3C tools untouched)                  |
| New formulas       | **30** (42 total in the registry)                                  |
| Formula test cases | **104**, every one executed by `content:validate` **and** `vitest` |
| New sources        | 1 — NIST (74 total), for exact unit definitions                    |
| Corpus             | 1,068 items · **1,361 routes** · **329 tests**                     |

Routes added: `/tools/moisture-content-converter`, `/dry-matter-calculator`,
`/water-removal-calculator`, `/grain-moisture-shrink`, `/bulk-density-calculator`,
`/storage-capacity-estimator`, `/commodity-blending-calculator`,
`/processing-recovery-calculator`, `/post-harvest-loss-calculator`,
`/trade-unit-value-calculator`, `/packaging-quantity-estimator`.

**`/tools/unit-converters` was EXTENDED, not duplicated.** §19 recommended a
`commodity-unit-converters` route; the existing converter already handled
area/mass/volume (including US vs Imperial gallons)/temperature/rate/density, so
per §19's "reuse or extend if intent overlaps; do not create duplicate tools" it
gained the commodity dimensions instead: bulk density kg/m³ ↔ lb/ft³, mass ↔
bushels (commodity-specific standard weight), percentage ↔ decimal. A test
asserts `/tools/commodity-unit-converters` does not exist.

## The architecture

**A formula returns ONE scalar; tools compose formulas.** The water-removal tool
reports five numbers through five calls. `ToolConfig.compute` may only call
`getFormula(id).compute()`, convert units via `constants.ts`, and format — an
adversarial architecture review confirmed **zero arithmetic outside the
registry** in the 11 new tools.

**Prove-before-build (§8/§23).** All 42 formulas and 104 reference cases were
registered and passing before any UI existed. The registry's own validator
executes every declared case during `content:validate`, so §17's "every formula
test case must execute during deterministic validation" is structural.

**Moisture basis is never inferred (§4).** `acceptedBases` is required on every
moisture formula (`formula-no-basis` rejects one without it), the basis select
has **no default** — an explicit placeholder, not a silent wet-basis assumption —
and the moisture fields are basis-conditional, because a single field cannot
carry a static `max`: wet basis is capped below 100%, dry basis is unbounded
(185.7% db = 65% wb forage is legitimate).

## Verification that stands behind the numbers

- **Dry matter is conserved.** Computed from the initial and the final state,
  bit-for-bit equal across every case tried, and asserted for randomised inputs.
  `M₀ = M₁ + ΔW` exactly.
- **The maize reference.** 20% → 15.5% market moisture gives **5.3254% shrink =
  1.1834% per moisture point**, matching the widely-cited US maize factor of
  ~1.183%/point. This is the strongest external check on the derivation.
- **Unit conversions are exact by definition**, not measured: lb = 0.45359237 kg,
  ft = 0.3048 m. A 56 lb bushel = 25.40117272 kg, so 1 t of maize = 39.3682611 bu
  — re-derived two independent ways.
- **Three of my own test expectations were wrong** and were caught by the
  registry executing them: I hand-mis-rounded `density-kgm3-to-lbft3` (721 kg/m³)
  and both `mass-to-bushels` cases. The implementations were right.

## What the adversarial review found

Five independent lenses (maths, safety, architecture, web, semantics), each
finding verified by three skeptics instructed to **refute** it. **16 findings →
11 confirmed, 5 refuted.**

### The critical one — a real bug, mine

**Dry-basis blending was weighted by total mass.** Wet-basis moisture genuinely
_is_ total-mass-weighted (water and total mass both add), so the formula looked
right and its tests passed. But dry-basis moisture is water ÷ **dry matter**, so
a dry-basis blend is **dry-matter-weighted**: `(W_A+W_B)/(D_A+D_B)`.

The error was **13 points** on an ordinary two-lot case and **35.7 points** on a
forage/cereal blend (100 kg @ 185.7% db + 100 kg @ 16.28% db: true 65.29% db,
the old model said 100.99%). The aggravating factor: the target mode's "check"
re-ran the same wrong model and so **endorsed** the wrong answer. And the file's
own header says dry matter is conserved — while the blend conserved total mass.

**Fixed** by restricting both blend formulas to `acceptedBases: ['wet-basis']`
and having the tool restate dry-basis **moisture** onto the wet basis
(`moisture-db-to-wb`), blend there, and convert back (`moisture-wb-to-db`) —
provably identical to dry-matter weighting, composing only registry formulas.
Dry-basis **protein/oil/custom** now **refuses**: the same weighting applies, but
the tool has no moisture input, so dry matter is not derivable from what the user
supplied. The new test derives ground truth from first principles rather than
comparing the model to itself.

### Also confirmed and fixed

- **An implementation that did not compute its published expression.**
  `drying-water-removed` evaluated `M₀ − M₁` instead of its stated
  `M₀ × (M₀−M₁) ÷ (100−M₁)`. Equal in real arithmetic, not in IEEE-754 — the
  subtraction lost the low bits. Both closed the mass balance, so nothing caught
  it. Now bit-exact against the published expression across 20k random cases.
- **Non-finite outputs escaped as "∞"** — finite inputs can overflow
  (1e308 × 1e308) and a crafted URL could reach it. `run()` now rejects a
  non-finite result at the one place every tool's arithmetic passes through.
- **`-0` rendered as a quantity** when a lot was already at target.
- **11 orphaned help strings**: selects rendered `help` and `required` without
  `aria-describedby`, so the moisture-basis guidance — the help a screen-reader
  user most needs, on a field that deliberately starts unset — was never
  announced.
- **Stale/false doc claims**: registry counts (37/25/90/23 → 42/30/104/26),
  a "largest open gap" that had already been closed, and two docs claiming the
  storage estimator had no conical geometry after it gained one.

### Bugs fixed before the review

- **A hydration mismatch.** `CalculatorClient` seeded `useState` from
  `window.location.search` in the lazy initialiser. The server has no query
  string, so every shared link rendered defaults on the server and parameters on
  the client. Parameters now apply in a `useEffect` after mount.
- **A forbidden `Offer`.** The tool page emitted
  `offers: { '@type': 'Offer', price: '0' }`. §20 forbids Offer — these are not
  products for sale. `isAccessibleForFree` already carried the only real fact.
- **`safetyDisclosure` and `safetyContext` were validated but rendered nowhere.**
  The strongest sentences on each page — "not an engineering certification",
  "not a market price" — never reached the reader, which made the validator
  theatre. Both now render.
- **A false-negative-shaped validator.** The advisory-wording gate is
  negation-aware and scans sentence by sentence, because a bare keyword scan
  gets it exactly backwards: it flags the platform's most careful sentences
  ("this is an educational conversion, **not** a fertilizer recommendation")
  while passing a page that quietly says "optimal moisture is 14%".

## Safety boundaries (§16)

Every commodity tool carries a `safetyDisclosure` (enforced:
`tool-no-safety-disclosure`), and 26 of 42 formulas carry a `safetyContext`.
Storage volume is not an engineering capacity; moisture arithmetic does not
replace calibrated instruments or representative sampling; drying maths
prescribes no conditions; blending establishes no grade compliance; a unit value
is not a market price; recovery is not an expected commercial yield; a package
count is not a packaging-suitability determination.

**These tools calculate; they never advise.** No "recommended", "optimal", or
"ideal" survives unnegated anywhere in the tool corpus.

## Search (§21)

Six `unsafe-equivalence` benchmark guards assert the distinctions hold, and the
benchmark is **94 cases · TOP-1 100% · 0 unsafe equivalences**:

| query         | resolves to                    | and NOT to             |
| ------------- | ------------------------------ | ---------------------- |
| `unit value`  | Trade unit value calculator    | a price page           |
| `basis`       | **market-term Basis** (price)  | the moisture converter |
| `wet basis`   | Moisture content converter     | market-term Basis      |
| `test weight` | **quality-attribute** it names | bulk density           |
| `shrink`      | Grain moisture shrink          | loss                   |
| `recovery`    | Processing recovery            | yield                  |

Calculator vocabulary is added as `searchAliases` (indexed at name weight) and
as `kind: 'narrower'` synonyms — **never `exact`**. Multi-word phrases like "wet
basis" cannot be synonyms at all: `expandToken` deliberately refuses to expand
multi-word variants by their component words, and that restraint is what stops
"corn" reaching sorghum via "guinea corn". Aliases are the correct channel.

## Known limitations

- **`yield-converter` advertises a formula it never runs.** This pre-existing
  Phase 3C tool declares `formulaIds: ['yield-tha-to-buacre']` but computes its
  16 conversion paths inline through a canonical kg/ha pivot, so the formula
  panel names a formula the tool does not call. Refactoring all 16 paths at the
  end of this phase was judged worse than recording it; it is the clearest
  remaining violation of the registry rule 5E enforces.
- **The slug says "capacity", the tool says "volume".**
  `/tools/storage-capacity-estimator` (the route §19 specified) reaches a tool
  titled _Storage volume estimator_, because a geometric volume is not a
  capacity and the title refuses the word the slug uses. Two review lenses
  raised this and were refuted 2/3 each; a third confirmed it as minor. The
  brief fixed the slug, so the honest title wins and the alias carries the query.
- **`volume-cone` is composed by no tool directly** — the peak case goes through
  the `volume-cylinder-with-cone` composite. It is registered and tested; there
  is no standalone conical-pile tool.
- **`commodityApplicability` has no user.** The field and its validator gate
  exist; every current formula and tool is commodity-independent, so the gate is
  unexercised.
- **No formula is deprecated.** `deprecated`/`replacedBy` is a retirement path
  with nothing retired through it yet.
- **The logistics-style "no numbers" discipline has no scanner for tools.** The
  price and risk scanners are automated; the tool corpus relies on the advisory
  gate plus review.

## Gates on the final branch state

| Gate               | Result                                            |
| ------------------ | ------------------------------------------------- |
| `format:check`     | ✓                                                 |
| `typecheck`        | 0 errors                                          |
| `lint`             | 0 warnings                                        |
| `content:validate` | **0 errors, 0 warnings**                          |
| `vitest`           | **329 passed** (23 files)                         |
| `build`            | ✓ 102 kB shared JS                                |
| `audit`            | 0 missing quantitative provenance                 |
| `seo:audit`        | **0 errors, 0 orphans** (1,361 routes)            |
| `search:benchmark` | 94/94 · TOP-1 100% · 0 unsafe equivalences        |
| `data:validate`    | 0 errors, 0 warnings                              |
| formula validator  | 42 formulas · 104 cases · 18 tools · **0 errors** |

## Deployment

Nothing was deployed. No Vercel project was created or connected, no CLI
installed, no DNS touched, no sitemap or IndexNow submitted, no analytics
activated.

**Status: `AWAITING USER — Vercel project linking`.**
