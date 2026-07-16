# Standards & certification boundaries (Phase 5D)

## The split: `/standards` vs `/commodity-grades`

Two routes exist for things that are both, in some sense, "a published document
saying what good looks like". The line between them is **scope**, and it is
enforced at build time.

| Route               | Holds                                                             | Example                   |
| ------------------- | ----------------------------------------------------------------- | ------------------------- |
| `/commodity-grades` | a document scoped to **one commodity**, describing **its grades** | US Standards for Wheat    |
| `/standards`        | a document scoped to a **domain**, across commodities             | ISO 22000, HACCP, ISPM 15 |

The distinction is not taxonomy for its own sake. A grade is a _commercial
description of a lot_ of one thing — it has a `gradedCommodity`, a grade scale,
defect limits, and a sampling context (see
[`commodity-grade-model.md`](./commodity-grade-model.md)). A standard is a
_normative instrument applying across subjects_ — it has a domain, a conformity
mechanism, and a scheme owner. Different evidence, different fields, different
reader.

## The `std-is-really-a-grade` guard

Without a check, this line is a convention, and conventions lose to convenience.
An author with a grading document in hand and `/standards` open will file it in
`/standards`, and the two routes begin competing for one intent — the exact
duplication §11 forbids.

> **A `standard-reference` in the `quality-grading` domain scoped to exactly ONE
> commodity is a `commodity-grade`. It is rejected.**

From [`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts):

```
standardDomain === 'quality-grading' && applicableCommodities.length === 1
  → error std-is-really-a-grade
```

Two conditions, both necessary. `quality-grading` alone is not enough — a grading
standard spanning several commodities is legitimately a standard. One commodity
alone is not enough — a food-safety standard can apply to one commodity and still
be a standard. It is the **conjunction** that describes a grade wearing the wrong
type.

A companion rule, `std-slug-collides-with-grade`, rejects a `standard-reference`
whose slug already exists as a `commodity-grade`: **one subject, one page**.

The guard is a **route-intent guard**, not a data-quality check. Nothing about
such an entry is factually wrong. It would render fine. It is rejected because it
would put a second URL over an intent that already has one, and because the
`/commodity-grades` model would describe it better.

## Why certification is a class, not a type

The brief proposed `CertificationConceptEntry`. It is
**`standardClass: 'certification-scheme'`** instead.

**A certification scheme is a standard plus a conformity-assessment mechanism.**
Same issuing body, same edition and versioning, same copyright constraints, same
"we summarise scope and never reproduce it" rule, same reader question. The only
difference is _how conformity is established_ — and that is a **field**
(`conformityAssessment`, `assessedBy`), not a type.

`STANDARD_CLASSES` ([`types/trade.ts`](../types/trade.ts)):

| Class                   | What it is                                     |
| ----------------------- | ---------------------------------------------- |
| `standard`              | a normative document                           |
| `certification-scheme`  | a standard + a conformity-assessment mechanism |
| `conformity-assessment` | the assessment concept itself                  |
| `regulatory-framework`  | an instrument applying by operation of law     |

`STANDARD_DOMAINS` — what a standard _governs_ — is the axis that keeps
`/standards` coherent: `food-safety`, `plant-health`, `animal-health`,
`quality-grading`, `sustainability`, `organic`, `social-labour`, `traceability`,
`management-system`, `measurement`.

## Never reproduce a standard

The Phase 5A reproduction rule, unchanged and extended
([`commodity-grade-model.md`](./commodity-grade-model.md)):

> **AgricultureID summarises what a standard covers and how conformity is
> assessed. It never reproduces the standard, and it does not publish the
> requirements that define conformity.**

Legal **and** accuracy constraint at once. ISO texts are sold; Codex and
GLOBALG.A.P. texts are copyrighted. And requirements change with each revision,
so a copied requirement is a liability that goes stale **silently** — it does not
break, it just quietly stops being true. See
[`trade-data-licensing.md`](./trade-data-licensing.md).

## Not a certification body

`STANDARD_SCOPE_DISCLAIMER` is required **verbatim** in
`reproductionLimitations` on every entry (`std-no-scope-disclaimer`). It states
what no amount of careful prose can be trusted to state consistently:

- this is a summary prepared from **public scope documents**;
- it **is not the standard** and does not reproduce its requirements;
- it **confers no certification, accreditation, or recognition**;
- **AgricultureID is not a certification body, accreditation body, or scheme
  owner**;
- requirements are versioned and change — **work from the edition the scheme
  names**.

That fourth point is the one that has to be unmissable. A reference page about a
scheme, written well, looks like something adjacent to the scheme. It is not
adjacent to it. AgricultureID has no relationship with any scheme owner, audits
nobody, and recognises nothing.

## Editions are required

`edition` is a **required field** on `StandardReferenceContent`
([`types/content.ts`](../types/content.ts)); `std-no-edition` is an error, as are
`std-no-body`, `std-no-jurisdiction`, and `std-no-scope`.

A standard without an edition is not identified — the same reasoning that makes
`version` mandatory for HS and CN codes
([`trade-classification-versioning.md`](./trade-classification-versioning.md)).
"ISO 22000" names a family; the edition names the document. `supersededNote`
exists for when the summarised edition is no longer current, because the honest
move is to say so, not to quietly restate the new one.

## The Codex / UNECE migration

Two entries authored in Phase 5A were **mis-filed as `commodity-grade`**, and
Phase 5D moves them to `/standards`:

| Entry                         | Token `gradedCommodity` | What it actually is                           |
| ----------------------------- | ----------------------- | --------------------------------------------- |
| Codex Alimentarius standards  | `green-coffee`          | a global food-standards body, all commodities |
| UNECE fresh produce standards | `fresh-apples`          | a produce-standards family, many commodities  |

The `gradedCommodity` values are the tell. `commodity-grade` **requires** a
`gradedCommodity` that resolves to a published commodity — correctly, because a
grade with no commodity is not a grade. So an author filing a cross-commodity
standards body under `commodity-grade` must supply one, and picks a plausible
member: Codex got `green-coffee`, UNECE got `fresh-apples`.

Neither is wrong, exactly. Both are **arbitrary**. Codex is no more about green
coffee than about anything else it covers, and the field asserts otherwise on
every render — while `/commodity-grades/codex-standards-overview` claims a URL
that promises a grade and delivers a standards body.

This is worth recording for the general lesson: **a required field satisfied by a
token value is a type error that the type system cannot see.** The entry
validates. Every ref resolves. The model is simply describing the wrong kind of
thing, and the only evidence is that a human reading `gradedCommodity:
green-coffee` on a page about Codex would frown.

`std-is-really-a-grade` catches the mirror-image mistake — a real grade filed as
a standard. **It cannot catch this one**, and no rule can: a standard mis-filed
as a grade is not in `standards` for the validator to inspect. The two directions
are not symmetric. This one was caught by review, and its recurrence is an
editorial risk, not a build-time one.

## Known limitations

- **"Summary" vs "reproduction" is not machine-checkable.** No rule distinguishes
  a scope summary from a paraphrase dense enough to substitute for the text. Same
  hole as [`incoterms-scope.md`](./incoterms-scope.md), same answer: editorial,
  and named here rather than assumed away.
- **The grade→standard direction is unguarded.** As above. A cross-commodity
  standard mis-filed as a `commodity-grade` with a token `gradedCommodity` passes
  every check, exactly as Codex and UNECE did until review caught them.
- **Nothing tracks edition currency.** `edition` is required; nothing verifies it
  is the edition in force, and nothing notices when a scheme publishes a new one.
  `supersededNote` is populated by hand or not at all. A standing review
  obligation.
- **`legalStatus` is the status we found, not a legal opinion.** Codex is adopted
  into national law at each country's discretion — `voluntary` globally and
  effectively mandatory somewhere is a distinction the single field cannot carry.
- **Paid standards are summarised from public metadata only.** For ISO texts, that
  means scope statements and published abstracts. The summary is thinner than for
  a freely published standard, and that thinness tracks the paywall rather than
  the standard's importance.

## Related

- [`commodity-grade-model.md`](./commodity-grade-model.md) — the other side of the split
- [`trade-data-licensing.md`](./trade-data-licensing.md) — copyright on normative text
- [`incoterms-scope.md`](./incoterms-scope.md) — the same constraint for ICC rules
- [`supply-chain-risk-model.md`](./supply-chain-risk-model.md) — standards as controls, not guarantees
