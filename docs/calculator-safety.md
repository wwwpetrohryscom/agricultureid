# Calculator safety (Phase 3C, extended by Phase 5E)

AgricultureID's calculators are **educational reference tools**, not decision
systems. Every calculator page enforces the following, by design.

## Always shown

- **Purpose, inputs (with units), and output** with sensible significant digits —
  never fake precision.
- **The formula** (never hidden), its assumptions, applicability, limitations,
  sources, and version (`FormulaPanel`).
- **A standard disclaimer** (`ToolDisclaimer`) on every tool page, opening with
  the tool's own `safetyDisclosure` where it has one (§16 below), then stating:
  - the tool is for education and reference;
  - result quality depends entirely on the inputs;
  - local agronomic conditions, legal requirements, product labels, and
    professional advice may override a general calculation;
  - results are **not** pesticide, fertilizer, irrigation, or veterinary
    prescriptions.

## What the calculators deliberately do NOT do

- They do **not** output crop-specific application recommendations (the
  fertilizer tool converts grades; it does not tell you how much to apply).
- They do **not** recommend an irrigation depth by crop.
- They do **not** infer crop growth stage from GDD (no crop model is claimed).
- They do **not** use one generic bushel weight for all crops — commodity
  selection is required for bushel conversions.
- They distinguish theoretical, field-adjusted, and recommendation clearly (seed
  rate shows the theoretical and field-adjusted values and calls neither a
  recommendation).

## Input handling

- Required fields must be non-empty; an empty field is treated as "no input",
  never as zero. Out-of-range and non-numeric inputs show inline validation
  errors and suppress the result.
- Divide-by-zero and other invalid combinations are caught in `compute` (which
  throws) and surfaced as a friendly error, never a wrong number.
- Inputs and results are keyboard-accessible with labelled fields, described-by
  hints/errors, and a polite live region for the result. Shareable links encode
  inputs as query parameters; a Reset restores defaults.

## Structured data

Calculator pages emit `WebApplication` structured data (a genuine interactive
tool), **not** `HowTo`. No fake ratings, reviews, or FAQ schema are added.

**No `offers`.** An Offer describes something for sale, and these calculators are
not a product being offered. A zero-price Offer emitted to satisfy a rich-result
checklist would describe the page as something it is not; it was removed in Phase
5E, and `isAccessibleForFree` already carries the only fact it contained.

---

# Phase 5E — commodity safety boundaries (§16)

The 5E tools compute quantities that people act on: what a bin holds, what a
buyer deducts, whether a lot meets a spec. Each therefore carries a
`ToolConfig.safetyDisclosure` naming what it is **not**, and the validator
requires one on every tool in the `commodity`, `post-harvest`, `storage`,
`processing`, and `trade` categories (`tool-no-safety-disclosure`). **12 of 18**
tools carry one — the 11 the validator requires it of, plus `unit-converters`,
which volunteers one. Formulas carry the same statement at their own level in
`safetyContext` — **26 of 42** have one.

A missing disclosure is an error, not a warning. A storage-capacity number that
does not say "this is not an engineering certification" is exactly the kind of
output someone builds against.

### Both fields reach the reader

A validated field that renders nowhere protects nobody, so each has exactly one
place it appears:

| Field                         | Where it renders                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ToolConfig.safetyDisclosure` | [`components/tools/ToolDisclaimer.tsx`](../components/tools/ToolDisclaimer.tsx) takes it as a prop and renders it **first inside the disclaimer**, set off by a rule and in medium weight, above the standard bullets. [`app/tools/[tool]/page.tsx`](../app/tools/[tool]/page.tsx) passes `t.safetyDisclosure` on every tool page |
| `CalcFormula.safetyContext`   | [`components/tools/FormulaPanel.tsx`](../components/tools/FormulaPanel.tsx) renders it under a **"Scope"** heading, per formula, alongside that formula's expression, assumptions, limitations, and sources                                                                                                                       |

This was a real gap and is now closed: for a period in 5E both fields were
validated and displayed nowhere, so the strongest sentences on the platform
("not an engineering certification", "not a market price") existed only in fields
nothing read out. It was a UI gap rather than a data gap, which is the kind that
a green validator actively conceals.

## The boundaries

| Domain                | The boundary                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Storage capacity**  | **Not an engineering certification** and not a capacity rating. Structural and loading limits are set by the design of the actual structure and by qualified engineers, never by a volume calculation. See [`storage-capacity-limitations.md`](./storage-capacity-limitations.md)                |
| **Moisture**          | **Does not replace representative sampling or a calibrated, correctly-referenced moisture meter.** It converts the figures entered and cannot detect that one was wrong, or was read on a different basis than the one stated. See [`moisture-basis.md`](./moisture-basis.md)                    |
| **Drying**            | **Prescribes no drying conditions.** No temperature, airflow, time, or energy is implied or computed. It states what the masses would be if only water were removed; the wrong conditions can damage a lot irreversibly, and choosing them is not this tool's business                           |
| **Shrink**            | **Not a settlement calculation and not a contract term.** Mathematical (water-only) shrink. What a buyer actually deducts is set by that buyer's contract                                                                                                                                        |
| **Blending**          | **Establishes no legal grade compliance.** A blended average does not establish that a lot meets a grade or specification, and blending to disguise a defect or evade a standard is a matter for the applicable standard and the law. See [`blending-model.md`](./blending-model.md)             |
| **Unit value**        | **Not a market price**, quotation, valuation, or basis for a transaction, a customs value, or an investment decision. Customs valuation is a legal determination made by the competent authority under its own rules. See [`trade-unit-value-limitations.md`](./trade-unit-value-limitations.md) |
| **Recovery**          | **Establishes no commercial yield** and no performance standard. It is the ratio of the two masses entered. The platform publishes no expected recovery figures. Recovery is also **not** yield — yield is production per unit area                                                              |
| **Mass balance**      | Unaccounted mass is **not waste**. It is the part the entered figures do not explain: moisture, dust, fines, material still in the plant, sampling error, or a stream nobody weighed. A negative result (outputs exceeding input) is **surfaced, not clamped**                                   |
| **Post-harvest loss** | **Not a food-safety determination.** Physical mass only — material may be unusable for reasons this arithmetic cannot see, and a lot that lost no mass but fell a grade reads 0%                                                                                                                 |
| **Packaging**         | **Establishes no suitability.** A count, not a packing plan. Nothing here establishes that a package is suitable, compatible, lawful, or safe for the commodity — that is for the packaging specification, the applicable standard, and the regulator                                            |

> **Local regulation, contracts, standards, and professional guidance override
> anything computed here.** Every one of these tools is arithmetic on numbers a
> reader typed in. Where a rule, a contract term, or a qualified professional says
> otherwise, they are right and the calculator is not.

## Three things the tools refuse outright

- **Test weight does not blend.** The blending tool lists it in the attribute
  select in order to **refuse** it, rather than omitting it and letting a reader
  reach for the generic linear option. A weighted average of two test weights is
  wrong rather than approximate.
- **A dry-basis protein or oil blend is refused.** A dry-basis attribute is
  weighted by dry matter, not total mass, and the blending tool has no moisture
  input from which to derive dry matter. It refuses rather than returning the
  wrong weighting — which on an ordinary two-lot case is wrong by 13 percentage
  points, and on a forage/cereal blend by 35.7. Dry-basis **moisture** is not
  refused, because it can be restated onto the wet basis exactly. See
  [`blending-model.md`](./blending-model.md).
- **No commercial shrink factor is published.** The shrink tool computes
  mathematical shrink only. A user's own handling/commercial factor is a separate,
  clearly-labelled optional input, shown as a **separate output line**, echoed back
  unchanged, and **never added into the scientific result nor presented as a
  standard**. Elevator-specific policies are not encoded as universal.

## The advisory-wording gate is negation-aware

`advisoryPhrase()` in
[`lib/tools/validate-tools.ts`](../lib/tools/validate-tools.ts) scans every
tool's purpose, safety disclosure, limitations, field labels, and help text for
wording that turns a calculation into advice — _recommended_, _optimal_,
_ideal_, _best practice_, _you should_, _should be_, _advisable_.

> **A tool may say what a number IS, never what it SHOULD BE.**

The subtlety is the whole point, and **a naive keyword scan gets it exactly
backwards.** It flags the platform's most careful sentences —

- "this is an educational conversion, **not** a fertilizer recommendation"
- "does **not** recommend a depth by crop"

— which are the sentences we most want to keep, while passing a page that quietly
says "optimal moisture is 14%".

So the scan is **sentence-level**: prose is split into sentences, and a sentence
containing a negator (_not_, _never_, _no_, _cannot_, _without_, _rather than_,
_instead of_, …) is a **refusal** and is skipped. An unnegated advisory word is
real advice and is rejected (`tool-advisory-wording`).

`advisoryPhrase` is **exported so tests can prove the discrimination in both
directions** — that a refusal is kept _and_ that real advice is caught. A rule
verified only by "the error count went to zero" is a rule that may simply never
fire.

## Known limitations

Recorded plainly rather than hidden.

- **The advisory gate is a word list.** It catches the vocabulary it knows.
  "Aim for 14%" contains no listed advisory word and would pass. It raises the
  cost of writing advice; it does not make it impossible.
- **Negation detection is per sentence, not per clause.** A sentence carrying a
  negator anywhere is skipped entirely — so "this does not apply to maize; optimal
  moisture is 14%" would be skipped if the splitter kept it as one sentence. The
  rule is conservative in the direction of false negatives, which is the correct
  direction for a gate whose false positives would delete disclaimers.
- **The gate scans tool prose only.** Formula-level `limitations`,
  `assumptions`, and `safetyContext` are not scanned for advisory wording, even
  though the formula panel renders **all three**. Advice written into a formula's
  own prose reaches the page ungated.
- **A disclosure is required to exist, not to be adequate.** The validator checks
  that the string is non-empty. Whether it names the right boundary is an
  editorial judgement no check makes.
- **The tools cannot detect a wrong input.** Every boundary above assumes the
  arithmetic is the risk. It usually is not — the risk is a figure that was
  mis-sampled, mis-read, or from a different lot, and every tool here will process
  it to full precision without complaint.

## Related

- [`commodity-calculator-architecture.md`](./commodity-calculator-architecture.md) — the registry, composition, and query-param model
- [`formula-registry.md`](./formula-registry.md) — the Phase 3C registry
- [`moisture-basis.md`](./moisture-basis.md) · [`storage-capacity-limitations.md`](./storage-capacity-limitations.md) · [`blending-model.md`](./blending-model.md) · [`trade-unit-value-limitations.md`](./trade-unit-value-limitations.md)
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — what the platform does not certify
- [`processing-safety-boundaries.md`](./processing-safety-boundaries.md) — processing-side boundaries
