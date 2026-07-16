# Commodity grade model (Phase 5A)

## What a grade is

A grade is a **standardised commercial description** of a lot: a defined set of
measured attributes and defect limits, issued by a named body, in force in a
named jurisdiction, in a specific edition.

A grade is **not**:

- a verdict on overall quality — a lot meeting a grade can still be unsuitable
  for a particular mill, buyer, or contract;
- a food-safety clearance — grading and safety are different regimes;
- permanent or universal — standards are revised, and the same commodity is
  graded differently in different countries.

AgricultureID **does not grade, sample, inspect, or certify anything**, and
cannot determine the grade of any lot. Official grades are issued only by the
competent body and its authorised agencies.

## The model

`CommodityGradeContent` (`types/content.ts`) requires, at the type level:

| Field                     | Why it is required                                    |
| ------------------------- | ----------------------------------------------------- |
| `standardBody`            | a grade is meaningless without knowing who issues it  |
| `jurisdiction`            | grading is territorial                                |
| `edition`                 | standards are versioned and revised                   |
| `legalStatus`             | `mandatory` / `voluntary` / `contractual` / `unknown` |
| `gradedCommodity`         | must resolve to a published `commodity`               |
| `reproductionLimitations` | states what this summary does and does not do         |

Optional: `standardIdentifier`, `effectiveDate`, `supersededNote`, `gradeNames`,
`gradeCriteria`, `measurementBasis`, `defectsConsidered`, `samplingContext`.

## The reproduction rule

**Many grading standards are copyrighted or sold. AgricultureID summarises what a
standard measures and how it is structured — it never reproduces the standard,
and it does not publish the numerical limits that define each grade.**

This is a legal constraint _and_ an accuracy constraint: limits change with each
revision, so a copied number is a liability that silently goes stale. Every entry
therefore:

1. describes the **structure** (classes, grade scale, how the grade is
   determined);
2. lists the **factors** considered, as `gradeCriteria` entries carrying
   `attribute`, `limitType`, and a note that the limit is set in the official
   text — with `value`/`unit` left unset;
3. states its `reproductionLimitations` and points to the issuing body;
4. carries a visible "not an inspection authority" caution.

### When a numerical criterion _is_ stated

If a `gradeCriterion` sets a `value`, the validator requires:

- a `unit` on that criterion, **and**
- a Tier 1–2 provenanced **quantitative claim** on the page.

There is no path to publishing a number without provenance. Phase 5A ships with
no numerical grade limits at all.

## Source policy for grades

Preferred, because they are public and freely readable:

- **USDA** (FGIS / AMS) — United States grade standards are US-government works;
- **UNECE** Working Party on Agricultural Quality Standards — freely published;
- **Codex Alimentarius** (FAO/WHO) — freely published, adopted into national law
  at each country's discretion.

Avoided: paid standards (e.g. ISO texts) beyond publicly available metadata and
summaries; commercial contract terms; private grading schemes whose terms do not
permit reuse.

## What each grade page must make unambiguous

- who issues it and where it applies;
- which edition the summary reflects, and that the reader must confirm the
  edition in force;
- whether compliance is mandatory, voluntary, or contractual;
- that the numerical limits live in the official text, not here;
- that meeting a grade is a commercial description, not a safety or suitability
  guarantee;
- that a grade applies only to the lot a representative sample was drawn from.
