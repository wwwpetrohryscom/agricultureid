# Calculator safety (Phase 3C)

AgricultureID's calculators are **educational reference tools**, not decision
systems. Every calculator page enforces the following, by design.

## Always shown

- **Purpose, inputs (with units), and output** with sensible significant digits —
  never fake precision.
- **The formula** (never hidden), its assumptions, applicability, limitations,
  sources, and version (`FormulaPanel`).
- **A standard disclaimer** (`ToolDisclaimer`) on every tool page stating:
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
