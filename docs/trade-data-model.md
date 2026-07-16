# Trade data model (Phase 5D)

## The claim this phase is careful not to make

Reported trade statistics describe **what reporting countries declared**, not
what physically moved. Everything below follows from taking that sentence
literally instead of treating a trade dataset as a measurement of a market.

The standing note (`TRADE_DATA_SCOPE_NOTE` in
[`types/trade.ts`](../types/trade.ts)) is rendered wherever trade figures are
shown.

## Source selection

Two candidate sources; only one is usable without credentials.

| Source                                   | Status                                                        | Decision                       |
| ---------------------------------------- | ------------------------------------------------------------- | ------------------------------ |
| **UN Comtrade** (comtradeplus.un.org)    | API returns **HTTP 401 — registration/subscription required** | **Not integrated.** Documented |
| **FAOSTAT Detailed Trade Matrix** (bulk) | Bulk endpoint open (**HTTP 206**), **CC BY 4.0**              | **Integrated**                 |

UN Comtrade is the reference bilateral merchandise trade database and would be
the better source. It is not integrated because AgricultureID cannot obtain its
data without a credential, and a credentialed source cannot be reproduced by a
reader from the citation alone. It is recorded as a source (`un-comtrade` in
[`data/sources.ts`](../data/sources.ts)) and named for what it is, rather than
quietly replaced by something weaker and presented as equivalent. See
[`trade-data-licensing.md`](./trade-data-licensing.md).

**This is the credentialed-source case: a source we cannot use is written down,
not faked.**

## The snapshot

[`data/snapshots/faostat__trade-matrix__2025-12-18.json`](../data/snapshots/faostat__trade-matrix__2025-12-18.json)
follows the Phase 3B snapshot contract ([`dataset-snapshots.md`](./dataset-snapshots.md)):
immutable, version-named, checksummed, with a fixed `retrievedAt`.

| Property                | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| Source                  | FAOSTAT Detailed Trade Matrix (normalized bulk release) |
| `datasetVersion`        | `2025-12-18`                                            |
| `retrievedAt`           | `2026-07-16`                                            |
| License                 | CC BY 4.0                                               |
| Reference year          | **2022**                                                |
| `coveredYears`          | 2020–2023                                               |
| Commodities             | 64                                                      |
| Reporter observations   | 13,529                                                  |
| `transformationVersion` | `1`                                                     |

Retrieval: the 8.5 GB CSV was **streamed in one pass** — 52.4M rows scanned,
1.26M kept. Nothing is stored that is not in the snapshot.

**Reference year 2022, not 2023.** 2023 has lower reporter coverage and is still
filling in. Choosing the newest year available would have produced a table that
looks current and is thinner.

### Elements and units

| Element | Meaning         | Unit     |
| ------- | --------------- | -------- |
| `5910`  | Export quantity | t        |
| `5922`  | Export value    | 1000 USD |
| `5610`  | Import quantity | t        |
| `5622`  | Import value    | 1000 USD |

### Flags

`A` official · `E` estimated · `I` imputed by a receiving agency · `X` from an
external organization. Flags are counted per reporter rather than discarded: a
figure carried mostly by `I` rows is not the same evidence as one carried by `A`.

### Transformation

Bilateral partner-level rows are summed over partners to a reporter total per
item-year-flow. **No interpolation, gap-filling, or estimation.** A missing
reporter-year is simply absent — which is the whole subject of the next section.

## Finding 1 — reporter aggregates are in the reporter column

FAOSTAT ships `World` (5000), `Western Europe` (5404), and similar **as
reporters**, alongside real countries. They are not a separate table.

> **Reporter and partner codes ≥ 5000 are FAOSTAT aggregates and are excluded.**

Recorded as `aggregateRule` in the snapshot. Without it, the top exporter of
every commodity is "World", and the second is a continent. This is not a subtle
statistical concern — it is a ranked list that is entirely wrong, produced by
code that ran without error.

**World totals are recomputed by summing real reporters**, never read from
FAOSTAT's own `World` row. The two are not the same number, and the recomputed
one is the one whose composition we can account for.

## Finding 2 — non-reporting is invisible in coverage counts

The Russian Federation reported wheat exports in 2020 (37.3 Mt) and 2021 (27.3
Mt, **rank #1**) — and **not in 2022**.

A naive 2022 "top wheat exporters" table therefore shows **Australia at #1** and
silently omits the world's largest wheat exporter. Every check passes. The
figures are all real. The table is still a lie by omission.

**Reporter counts do not reveal this.** Wheat's 2022 coverage is ~155 reporters
either way; a missing reporter and a reporter with no trade are the same shape in
a count. There is no coverage statistic that would have caught it.

Hence `notableNonReporters`, computed per commodity, carrying the reporter, its
`lastReportedYear`, its last reported quantity, and its rank in that year, and
rendered as a caution beside any ranked table. **29 of 64 commodities have at
least one.**

> **Absent ≠ zero.** A country missing from a reference year is a country that
> did not report, not a country that did not trade.

## Finding 3 — mirror gaps are real, and are not a bug

Reported world imports and reported world exports of the same item-year disagree:

| Commodity    | `mirrorGapPct` |
| ------------ | -------------- |
| Wheat        | −1.0%          |
| Green coffee | +1.4%          |
| Soybeans     | −5.1%          |
| Cocoa beans  | +6.0%          |

This is a **property of reported trade**, not an error in the pipeline: the two
sides are declared by different reporters, re-exports can count a consignment
more than once along its route, and valuation and timing conventions differ
between the export and import side.

It is therefore **recorded** as `mirrorGapPct` rather than reconciled. Forcing
the two sides to agree would require choosing one to be wrong, which is a
judgement the data does not support. A reader who sees +6.0% on cocoa knows
something true about cocoa statistics; a reader who sees a silently balanced
figure does not.

## Finding 4 — a production item code does not imply a trade item

Seed cotton has FAOSTAT **production** item `328` and **no trade item at all**:
it is ginned at origin and moves as lint and cottonseed.

This is why the concordance in
[`data/trade/faostat-concordance.ts`](../data/trade/faostat-concordance.ts) is
not "read `commodityCodes` and query FAOSTAT". A code that exists in one FAOSTAT
domain need not exist in another, and the failure is silent: the query returns
nothing, which looks exactly like a commodity that is not traded. See
[`trade-classification-versioning.md`](./trade-classification-versioning.md).

## The concordance, and why it was cross-checked

A commodity is mapped **only when exactly one FAOSTAT trade item corresponds to
it**. Exclusion reasons are typed — `no-trade-item`, `aggregate-item`,
`ambiguous-item`, `split-item` — and each exclusion carries a note.

Excluding a major commodity is deliberate. A mango figure that silently includes
guavas and mangosteens (item 571) is worse than no mango figure.

The concordance was **derived independently** from the FAOSTAT item list and then
cross-checked against the FAOSTAT codes already carried on commodity pages in
`commodityCodes`:

> **19 of 21 agreed. 0 disagreed.**

Nothing conflicted — but the cross-check still earned its cost, because it caught
a real bug: **`wheat-grain` had been dropped from the mapping entirely.** A
missing mapping is not a disagreement; it is silence, and silence is what an
independent derivation is worst at noticing about itself.
[`tests/phase5d.test.ts`](../tests/phase5d.test.ts) asserts the agreement, so a
future edit to either side fails the build rather than silently attributing a
country's trade to the wrong commodity.

## Why trade profiles are a panel, not a route

There is deliberately **no `/trade-data` route**.

Trade figures are a **view over a snapshot, rendered on the entity that already
owns the subject**. `/commodities/wheat-grain` is the page about wheat grain. A
`/trade-data/wheat-grain` page would be a second page about wheat grain,
competing with the first for the same query and splitting the evidence about one
subject across two URLs.

The dataset itself has a home too: Phase 4A's `DatasetRegistryEntry` and the
`/datasets` route already model an external dataset completely — down to an
`api-key-required` access flag ([`types/data-ops.ts`](../types/data-ops.ts))
that exists precisely for the Comtrade case. A `/trade-data` hub would duplicate
`/datasets` intent. See [`data-operations.md`](./data-operations.md).

## Known limitations

Recorded plainly rather than hidden.

- **The snapshot cannot tell you what moved.** Every figure is a declaration by
  a reporting country. Where declarations are absent, wrong, or late, the
  snapshot is absent, wrong, or late in exactly the same way, and it has no
  independent means of knowing.
- **`notableNonReporters` is a heuristic, not a guarantee.** It surfaces
  reporters that reported in a nearby year and stopped. A country that has
  **never** reported an item is invisible to it, and always will be — there is
  no prior year to compare against. The field reduces the blind spot; it does not
  close it.
- **Informal and low-value trade is under-reported**, structurally. Cross-border
  smallholder movement does not appear in a customs declaration. This is not
  correctable from the data and no adjustment is applied.
- **Re-exports inflate world totals.** A consignment counted at each leg of its
  route appears more than once, so recomputed world export totals can exceed the
  quantity originally produced and shipped. Nothing in the dataset distinguishes
  a re-export from an origin export.
- **Values are nominal USD as reported.** Not deflated, not exchange-rate
  adjusted, and **not comparable across years** without work the snapshot does
  not do.
- **One year, one snapshot.** The reference year is 2022 and the release is
  `2025-12-18`. FAO revises history; this snapshot will drift from FAOSTAT's
  current figures and is never overwritten in place. A newer release is a **new
  file**, and the delta is a fact about the data, not a bug fix.
- **64 commodities, not all of them.** The remainder are excluded by the
  concordance rule and named with reasons, but "excluded because the item is an
  aggregate" is still a commodity with no trade panel. The gap is honest, not
  filled.
- **Coverage is not quality.** A commodity with 155 reporters and one absent
  giant is worse-described than one with 40 complete reporters. The model
  records both counts and the non-reporters; it does **not** compute a
  reliability score, because any such score would rank the wheat table above
  where it deserves to sit.

## Related

- [`trade-classification-versioning.md`](./trade-classification-versioning.md) — item codes, HS/CN editions
- [`trade-data-licensing.md`](./trade-data-licensing.md) — CC BY 4.0 attribution, Comtrade access
- [`dataset-snapshots.md`](./dataset-snapshots.md) — the snapshot contract
- [`data-operations.md`](./data-operations.md) — the dataset registry
- [`commodity-classification.md`](./commodity-classification.md) — the code model
