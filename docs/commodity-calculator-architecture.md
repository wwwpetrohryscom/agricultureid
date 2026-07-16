# Commodity calculator architecture (Phase 5E)

Phase 3C built a versioned formula registry
([`formula-registry.md`](./formula-registry.md)). Phase 5E extends it to
commodity, post-harvest, storage, processing, and trade maths without changing
its shape. This document records the decisions that shaped the extension.

## The rule everything else follows

> **A formula returns ONE scalar. Tools compose formulas. Maths never lives in a
> component.**

The water-removal tool reports five numbers — dry matter, initial water, final
mass, water at the target, and water removed. It gets them by **calling formulas
five times** (four distinct ones: `water-mass-wb` runs once per state), not by
growing a multi-output formula and not by doing arithmetic in the component.
`ToolConfig.compute` may only:

1. call `getFormula(id).compute()`,
2. convert units via [`lib/tools/constants.ts`](../lib/tools/constants.ts), and
3. format.

Anything else is maths that cannot be reviewed, versioned, sourced, or tested —
which is the exact duplication the registry exists to prevent. The validator
enforces the floor of this (`tool-no-formula`: a tool that resolves no formula is
doing maths somewhere it cannot be seen); the rest is a code-review rule, and is
recorded as such under known limitations below.

## The registry after 5E

| Where                                                                        | What                           |
| ---------------------------------------------------------------------------- | ------------------------------ |
| [`lib/tools/formulas.ts`](../lib/tools/formulas.ts) (Phase 3C)               | 12 formulas                    |
| [`lib/tools/formulas-commodity.ts`](../lib/tools/formulas-commodity.ts) (5E) | 30 formulas                    |
| [`lib/tools/formulas-yield.ts`](../lib/tools/formulas-yield.ts) (5E)         | 6 yield primitives             |
| `FORMULAS` (3C spread with the 5E modules)                                   | **48 formulas** (1 deprecated) |
| Declared test cases                                                          | **119**                        |
| [`lib/tools/tools.ts`](../lib/tools/tools.ts)                                | **18 tools** (11 new)          |

One registry, one id space, one validator. The split is by file only — a caller
resolves `moisture-wb-to-db` exactly as it resolves `gdd-average`.

## Phase 5E fields on `CalcFormula`

Added in [`types/tools.ts`](../types/tools.ts), each because its absence was a
way to be wrong silently.

| Field                                | Why it exists                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedBases`                      | Moisture basis is never inferred. Required on any moisture formula — see [`moisture-basis.md`](./moisture-basis.md)                                           |
| `commodityApplicability`             | A conversion only defined for some commodities must name them; every slug must resolve. The bushel formulas use it for the 7 grains with a US standard weight |
| `safetyContext`                      | What a result must **not** be read as authorising. 26 of 48 formulas carry one, and the formula panel renders it under a "Scope" heading                      |
| `deprecated` / `replacedBy`          | A superseded formula must point somewhere live, or callers keep using stale maths with no route forward                                                       |
| `FormulaInput.min`/`max`/`rangeNote` | A bound the maths or physics imposes, **and the reason for it** — `max: 99.999` is useless without "wet-basis moisture cannot reach 100%"                     |
| `ToolConfig.safetyDisclosure`        | Mandatory on every commodity/post-harvest/storage/processing/trade tool ([`calculator-safety.md`](./calculator-safety.md))                                    |

## Versioning

Unchanged from 3C, and worth restating because the two versions are routinely
confused:

- **`formulaVersion`** — the mathematical definition. Bump when the maths
  changes, i.e. when the same inputs should now give a different answer.
- **`calcVersion`** — the implementation. Bump on any code change, **even when
  the maths is unchanged**: a refactor that preserves the definition still
  changes what actually ran.

`deprecated`/`replacedBy` is the retirement path: set `deprecated`, point
`replacedBy` at a live formula id, and the validator checks both
(`formula-deprecated-no-successor`, `formula-stale-successor`). **No formula is
currently deprecated** — the mechanism exists ahead of its first use, which is
the only time it can be added without a migration.

## Test cases execute in deterministic validation

Every declared test case is executed by `toolIssues()`
([`lib/tools/validate-tools.ts`](../lib/tools/validate-tools.ts)), which runs
inside `content:validate` via
[`lib/validation/validate.ts`](../lib/validation/validate.ts) — so **all 104 cases
run in deterministic content validation**, not only under `vitest`. A formula
whose `compute` diverges from its declared `expect` beyond tolerance fails the
build (`formula-test-mismatch`); one that throws fails it too
(`formula-test-throw`).

This is not ceremony. **It caught three wrong expectations of mine in this
phase** — hand-computed `expect` values for `density-kgm3-to-lbft3` (721 kg/m³)
and `mass-to-bushels` (56 and 60 lb/bu). The implementations, which use the
exactly-defined pound (0.45359237 kg) and foot (0.3048 m), were right; my
rounding was wrong. Re-derived independently: a 56 lb bushel is
56 × 0.45359237 = **25.40117272 kg**, so 1000 kg is **39.3682611 bu**.

The direction of that failure is the point. The registry did not catch a bug in
the code; it caught a bug in the human checking the code, which is the failure
mode a test suite written by the same human is worst at noticing about itself.

## §19 — extend, do not duplicate

`/tools/unit-converters` already existed and already handled the US vs Imperial
gallon distinction. §19 says reuse or extend where intent overlaps, and never
create a duplicate tool.

> It was **extended** — bulk density kg/m³ ↔ lb/ft³, mass ↔ bushels, percentage
> ↔ decimal — rather than duplicated as `/tools/commodity-unit-converters`.

A second converter would have competed with the first for the same query, split
the evidence about one subject across two URLs, and left a reader to guess which
one was authoritative. Each of the three is a bidirectional pair, so six registry
formulas (`density-kgm3-to-lbft3` / `density-lbft3-to-kgm3`, `mass-to-bushels` /
`bushels-to-mass`, `percent-to-decimal` / `decimal-to-percent`) are resolved by
the existing tool, and nothing was copied to achieve it.

## Query parameters and hydration

[`lib/tools/query-params.ts`](../lib/tools/query-params.ts) is pure and takes the
query string as an argument. The safety model in one line each:

- **Unknown keys are ignored.** Only declared field keys are read.
- **Invalid values are rejected, not coerced** — they fall back to the field
  default rather than producing `NaN`.
- **A select can only ever take one of its own declared option values.** This is
  what stops a crafted URL injecting content into the page: every value is
  checked against a closed set or parsed as a number before it is stored.
- **Units and basis round-trip.** They are ordinary fields. A shared moisture
  link that loses its basis is a link to a different, wrong answer.

### The hydration bug this phase fixed

`CalculatorClient` seeded `useState` from `window.location.search` **inside the
lazy initialiser**. The server has no query string. So any shared link rendered
**defaults on the server and parameters on the client** — a hydration mismatch,
on exactly the pages whose entire purpose is to be shared with parameters.

Parameters are now applied in a `useEffect` after mount
([`components/tools/CalculatorClient.tsx`](../components/tools/CalculatorClient.tsx)),
which keeps the first client render byte-identical to the server's HTML. The
rule is written into the module header of `query-params.ts` so the next author
meets it before making the same mistake: these functions are never called during
render or from a `useState` initialiser.

### Canonical, not robots

Tool pages canonicalise to the param-less path (`alternates: { canonical: path }`
via [`lib/seo/metadata.ts`](../lib/seo/metadata.ts)). This is the correct §20
handling for a static site. Blocking parameters in `robots.txt` would be
**counterproductive**: a crawler forbidden to fetch the URL never reads the
canonical that would have pointed it home.

### The Offer bug this phase fixed

The tool page emitted `offers: { '@type': 'Offer', price: '0' }` in its
`WebApplication` JSON-LD. §20 forbids Offer — **these calculators are not a
product for sale**, and a zero-price Offer emitted to satisfy a rich-result
checklist describes the page as something it is not. Removed;
`isAccessibleForFree` already carries the only real fact it contained. See
[`app/tools/[tool]/page.tsx`](../app/tools/[tool]/page.tsx).

## The formula contract is enforced by execution

Every static check the registry had passed on the yield converter: the declared
id resolved, the formula carried sources, versions, limitations, and reference
cases, and all of them went green. The formula was still decorative. **Reading
declarations cannot detect that a declaration is a lie** — only running the tool
and watching which formulas execute can.

[`lib/tools/contract.ts`](../lib/tools/contract.ts) instruments the registry,
drives every tool across an input matrix generated from its own fields, and
compares declared against executed. It runs inside `content:validate` (so CI
enforces it) and standalone via `npm run calc:contract`.

| Gate                           | Fails when                                                                                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `contract-decorative-formula`  | A tool declares a formula no input combination executes — the panel would advertise maths the tool does not run              |
| `contract-undeclared-formula`  | A tool executes a formula it does not declare — the panel would omit maths that ran                                          |
| `contract-no-executed-formula` | A tool runs no registered formula at all — its calculation is outside the registry                                           |
| `contract-unreachable-formula` | A registry formula no tool composes — dead maths. Deprecated formulas are exempt: being uncomposed is what deprecation means |
| `contract-deprecated-formula`  | A tool advertises a retired formula                                                                                          |
| `contract-untested-branch`     | A formula a tool can reach has no reference case                                                                             |

### The input matrix mirrors the form, including `showIf`

This is load-bearing rather than a nicety. The unit converter has nine selects
and shows only the two or three relevant to the chosen dimension. A naive
cartesian product is astronomically large **and** explores states the UI cannot
present; a first attempt capped it and silently truncated to the first
dimension's combinations, which made five genuinely-reachable formulas look like
dead maths. Honouring `showIf` collapses the space to what a user can actually
reach.

### What it caught immediately

Run against the corpus for the first time, the gate found **16 violations** — 11
after the matrix was fixed, all genuine:

- `water-removal-calculator`, `grain-moisture-shrink` and
  `commodity-blending-calculator` executed `moisture-db-to-wb` (and
  `moisture-wb-to-db`) **without declaring them**. The dry-basis handling added
  those calls and the panel never showed them.
- `volume-cone` was reachable from no tool.
- `yield-converter` declared one formula and ran none of it.

### Known limitation

The gate proves the declared SET equals the executed SET. It does not prove that
a formula's published `expression` is what its `compute` evaluates — that is a
separate property, and one that has already been violated twice here
(`drying-water-removed` computed `M₀ − M₁` instead of its published form;
`yield-tha-to-buacre` published a constant the code did not use). Those are
caught by per-formula tests asserting the implementation against its own
expression, not by this gate.

## Known limitations

Recorded plainly rather than hidden.

- **"Maths never lives in a component" is a review rule, not a validated
  invariant.** The validator can prove a tool resolves _at least one_ formula; it
  cannot prove the tool didn't also multiply two numbers together on the way to
  the output. Nothing but review stops that, and this is the standing risk of the
  whole design.
- **Test cases prove reproduction, not correctness.** They assert that `compute`
  returns what the author declared. An expectation and an implementation that are
  wrong in the same way pass — which is why the external cross-check matters
  (maize 20% → 15.5% gives **1.1834% shrink per moisture point**, matching the
  widely-cited US maize factor of ~1.183%/point) and why the three mis-rounded
  expectations were re-derived independently rather than adjusted to fit.
- **104 cases is not coverage.** They are chosen reference points — identities,
  round-trips, boundaries, and signed cases — not a sweep of the input space. No
  property-based or fuzz testing is done.
- **`commodityApplicability` has no current user.** No formula or tool declares
  it yet; the field and its validator gate (`formula-unsupported-commodity`,
  `tool-unsupported-commodity`) exist and are unexercised by real data. A gate
  that has never fired on live content is a gate whose behaviour is asserted by
  its tests alone.
- **`volume-cone` is registered and tested but composed by no tool directly.**
  It carries the engulfment-hazard `safetyContext` and its own test cases run. The
  peak case it exists for **is** reachable from a page: the storage estimator's
  `cylinder-cone` geometry composes `volume-cylinder-with-cone`. The standalone
  formula was, for a time, the one registry entry no tool resolved — the
  formula-contract gate flagged it as dead maths, and the estimator now offers a
  free-standing **conical pile** geometry that composes it.
- **~~`yield-converter` advertises a formula it does not run.~~ FIXED.** It is
  worth keeping the history, because it is the reason the formula-contract gate
  exists. The tool declared `formulaIds: ['yield-tha-to-buacre']` and executed
  none of it: its maths lived in an inline pivot table, so the panel published a
  t/ha → bu/acre expression while the tool converted lb/acre to kg/ha — and that
  expression named the constant `0.8921785`, which the code never used and which
  is wrong from the seventh significant figure (the true factor is
  `0.8921791216197045`). Every static check passed. See
  [the contract section](#the-formula-contract-is-enforced-by-execution).
- **Unit-agnostic mass formulas trust the caller.** `dry-matter-mass` and the
  drying formulas declare their output as "same as input mass" and never see the
  unit — the tool carries it as a label. Mixed units in, nonsense out, silently.
- **Tolerances are absolute, not relative.** A default of `1e-6` is strict for a
  percentage and loose for a figure in the millions. No case in the registry
  currently sits where that matters, which is a fact about today's cases rather
  than a property of the check.
- **The hydration fix costs a frame.** A shared link now renders defaults, then
  re-renders with its parameters after mount. That is the price of a
  server-identical first render, and it is paid deliberately.

## Related

- [`formula-registry.md`](./formula-registry.md) — the Phase 3C registry
- [`calculator-safety.md`](./calculator-safety.md) — the safety boundaries
- [`moisture-basis.md`](./moisture-basis.md) — wet vs dry basis
- [`storage-capacity-limitations.md`](./storage-capacity-limitations.md) — geometry ≠ capacity
- [`blending-model.md`](./blending-model.md) — the two-lot model
- [`trade-unit-value-limitations.md`](./trade-unit-value-limitations.md) — unit value ≠ price
- [`phase-5-architecture.md`](./phase-5-architecture.md) — the Phase 5 programs
