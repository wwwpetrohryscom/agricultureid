# Trade unit value limitations (Phase 5E)

## The claim this tool is careful not to make

> **A unit value is not a price.**

```
Unit value = reported trade value ÷ reported quantity      trade-unit-value
```

That is the whole of the maths. Everything below is about what the quotient is
**not**, because a number denominated in currency per tonne looks exactly like a
price and is not one.

A unit value is an **arithmetic average over an aggregate**. The aggregate spans
**grades, origins, destinations, contract types, delivery terms, and transaction
dates**. It is what falls out of dividing one reported total by another.

> **No transaction need have occurred at this figure.**

A price is what someone paid for something specific at a moment. A unit value is
a ratio of two annual totals declared by a customs authority. They share a unit
and nothing else.

This is the calculator-side statement of the position
[`trade-data-model.md`](./trade-data-model.md) takes on the underlying data:
reported trade statistics describe **what reporting countries declared**, not
what physically moved.

## Import vs export unit values differ systematically

Not noisily — **systematically**, and in a knowable direction:

> Reported **import** values commonly include freight and insurance. Reported
> **export** values commonly do not.

So the same consignment yields a higher import unit value than export unit value,
by roughly the cost of moving and insuring it. The two are **not comparable
without knowing the valuation basis**, and the difference is not an error to be
reconciled away — it is what the two figures mean.

The tool does not attempt to detect, adjust for, or label the valuation basis. It
cannot: nothing in the value and quantity a reader types in reveals which
convention produced them.

## Same flow, or nothing

The formula's assumption is that value and quantity describe the **SAME reported
flow — same reporter, partner, item, year, and direction**. Dividing an export
value by an import quantity produces a number with no referent at all.

**Nothing here checks that they do.** The tool carries optional dataset and
reference-year fields so the figure travels with the flow it came from, and the
year field exists because _reporters revise both value and quantity, so a unit
value belongs to a vintage_. Those are context labels, not validation.

## Absent ≠ zero

Preserved from Phase 5D's semantics, and load-bearing here:

> **An absent quantity is not zero.** A flow with no reported quantity has no
> unit value at all.

Treating a gap as zero produces an infinite or nonsense figure — which is the
polite failure. The impolite one is a _small_ quantity that is really a gap,
producing an enormous unit value that looks like a real market signal.
`trade-unit-value` requires a strictly positive quantity (`min: 0.000001`) and
throws rather than dividing by zero; a value of zero over a real quantity is a
legitimate 0.

This is the same principle Phase 5D encodes as `notableNonReporters`: a country
missing from a reference year is a country that **did not report**, not one that
did not trade. See [`trade-data-model.md`](./trade-data-model.md).

## Inherited problems, compounded by division

A unit value inherits every defect of both its inputs and then divides them
together:

| Property of the source data                                       | What it does to a unit value                                    |
| ----------------------------------------------------------------- | --------------------------------------------------------------- |
| Reporters **revise** both value and quantity                      | The unit value has a vintage, and it moves                      |
| **Mirror flows disagree** (5D: −5.1% soybeans, +6.0% cocoa beans) | The same flow has two unit values depending on who declared it  |
| **Re-exports** count a consignment more than once                 | The denominator is inflated where the numerator may not be      |
| Values are **nominal**, as reported                               | Not deflated, not FX-converted, **not comparable across years** |

Currency in the tool is a **label only**. No exchange-rate conversion and no
deflation is applied, so unit values in different currencies or different years
are not comparable as they stand. The unit of the result follows the units
entered, and keeping those consistent is the reader's job: value in thousands
over quantity in thousands is a per-unit figure, not a per-thousand one.

## What it must not be read as

The `safetyDisclosure` and the formula's `safetyContext`:

> Not a market price, quotation, valuation, or basis for a transaction, a customs
> value, or an investment decision. **Customs valuation in particular is a legal
> determination made by the competent authority under its own rules.**

Customs valuation is singled out because it is the mistake with a legal
consequence. A unit value computed from published statistics is not a customs
value, does not support a declared value, and has no standing with any authority.

For what an actual market price series would require — and why the platform does
not publish one — see
[`market-data-methodology.md`](./market-data-methodology.md).

## Search keeps it apart from "price"

`unit value ≠ price` is enforced, not merely asserted in prose. The Phase 5E
synonym entry in [`data/search/synonyms.ts`](../data/search/synonyms.ts) uses
`kind: 'narrower'` — directional — and is **deliberately not linked to
"price"**. Making it `exact` would let a search for one return the other as if
they were the same quantity.

An `unsafe-equivalence` benchmark case in
[`lib/search/benchmark.ts`](../lib/search/benchmark.ts) asserts the distinction
holds, with `mustNotTop: ['price']`. See
[`synonym-policy.md`](./synonym-policy.md) and
[`search-architecture.md`](./search-architecture.md).

## Known limitations

Recorded plainly rather than hidden.

- **It is a division. That is all it is.** Every limitation of the figures
  entered survives it intact, and the quotient conceals them better than either
  input did.
- **The tool cannot see the aggregate behind the figure.** A unit value over a
  heterogeneous item — several grades, several origins — is an average of things
  that do not belong in one average, and neither the tool nor the reader can tell
  from the number.
- **Valuation basis is not modelled.** Import/export asymmetry is documented and
  **not corrected**. No CIF/FOB adjustment is applied, because applying one would
  require choosing a freight assumption the platform cannot source.
- **No time series, no deflation, no FX.** A single quotient from figures the
  reader supplies. Comparing two of them across years or currencies is invalid
  without work this tool does not do.
- **The context fields are labels, not checks.** Dataset and year are recorded
  alongside the result. Nothing verifies that the value and quantity actually
  came from that dataset, that year, or the same flow.
- **Informal and low-value trade is under-reported**, structurally, in every
  source a unit value could be computed from. It does not appear in a customs
  declaration and no adjustment is applied.

## Related

- [`trade-data-model.md`](./trade-data-model.md) — the snapshot, mirror gaps, absent ≠ zero
- [`market-data-methodology.md`](./market-data-methodology.md) — why no price series is published
- [`trade-data-licensing.md`](./trade-data-licensing.md) — source attribution and access
- [`trade-classification-versioning.md`](./trade-classification-versioning.md) — item codes and editions
- [`calculator-safety.md`](./calculator-safety.md) — the safety boundaries
- [`commodity-calculator-architecture.md`](./commodity-calculator-architecture.md) — the registry
