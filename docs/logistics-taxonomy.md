# Logistics taxonomy (Phase 5D)

## Why transport modes are a class, not a type

The brief proposed `TransportModeEntry` as its own entity. It is a
**`logisticsClass`** instead.

The test is not "are sea freight and palletisation different things?" — obviously
they are. The test is whether they are different **kinds of page**. They are not:

- a "sea freight" page and a "palletisation" page answer the same kind of
  question — _what does this solve, for what cargo, at what cost to quality_;
- they render identically — same panels, same fields, same scope note;
- they carry the same relation semantics — both attach to commodities, quality
  attributes, post-harvest operations, standards, and risks.

Three shared properties, no distinct validation, no distinct intent. Splitting
them would put **two routes over one intent**, which is the thing §11 warns
against and the same call Phase 5C made when it declined `/co-products` — see
[`processing-transformation-model.md`](./processing-transformation-model.md).

A type earns itself by having semantics the model must enforce differently.
`processing-method` earned one because it is a transformation node with a chain
that can cycle. A transport mode is a logistics concept that happens to move.

## `LOGISTICS_CLASSES`

From [`types/trade.ts`](../types/trade.ts):

| Class             | What it covers                                                           |
| ----------------- | ------------------------------------------------------------------------ |
| `transport-mode`  | how a consignment moves — sea, rail, road, air, inland water, multimodal |
| `handling`        | what is done to it at each break — loading, discharge, transfer          |
| `unitisation`     | how it is made into a handleable unit — containers, pallets, bags        |
| `chain-integrity` | what keeps it the thing it was — cold chain above all                    |
| `facility`        | where it waits — terminals, stores, hubs                                 |
| `inspection`      | where it is looked at, and by whom                                       |

## `CARGO_FORMS`

The **physical state a consignment is carried in** — the property that actually
determines what can move it:

`bulk-dry` · `bulk-liquid` · `breakbulk` · `containerised` · `unitised` · `live`

Cargo form is a separate axis from class on purpose. It cuts across modes: dry
bulk moves by sea, rail, road, and barge, and the constraints follow the **form**
more than the mode. Modelling form as a subtype of mode would force the same
distinction to be re-stated six times and drift five ways.

Labels are rendered from `CARGO_FORM_LABEL` in
[`components/trade/TradePanels.tsx`](../components/trade/TradePanels.tsx).

## The no-numbers rule

> **A logistics page carries no temperatures, no transit times, no rates, no
> capacities, and no doses.**

This is the same boundary Phase 5C drew for processing
([`processing-safety-boundaries.md`](./processing-safety-boundaries.md)):
**describe what it does and why, never how to run one.** Logistics is where the
rule is hardest to keep, because a number is exactly what a reader wants and
exactly what the page cannot honestly supply.

**A carriage temperature is not a property of a commodity.** It is a property of
a _contract_, for a _cultivar_, at a _maturity_, in a _packaging_, on a _route_,
in a _season_, agreed with a _carrier_, and it is written into the booking. A
page that says "carry at 2 °C" is not a generalisation — it is a fabricated
instruction for a consignment it has never seen. The reader who follows it has a
claim against their carrier and a page that told them so.

**A transit time is a schedule.** It is a service on a trade lane in a market,
and it changes with congestion, blank sailings, weather, and rate cycles. A
published figure is stale within a quarter and reads authoritative for years.

`operationalLimitations` is **required, non-empty** on every
`LogisticsConceptContent` ([`types/content.ts`](../types/content.ts)) for exactly
this reason, and `log-no-limitations` in
[`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts) is an error.
Route, vessel, and contract specifics are never generalisable, so each entry
states its own limits rather than inheriting one standing sentence. The panel
renders them under **"What this description cannot tell you"** — a heading chosen
so the absence of numbers reads as a decision rather than a gap.

### Fumigation carries no doses

The rule at its sharpest. A fumigation concept describes **what fumigation is
for, where in the chain it sits, and who mandates it**. It carries:

- **no fumigant dose, concentration, or exposure period** — these are label
  instructions for a regulated pesticide;
- **no gas-free clearance criterion** — a wrong one kills people;
- **no product selection** — permitted actives differ by country and change.

Fumigants are hazardous and regulated, permitted products and residue limits vary
by jurisdiction, and the operator is licensed. Naming the hazard is required;
supplying the procedure is not ours to do. Existing entries hold this line
already — see `content/post-harvest/stored-grain-insects.ts`, which names
fumigants as hazardous and regulated and defers products and residue limits to
the applicable country.

The general form: **naming a hazard is an obligation; describing its handling is
not.** Refusing to publish a procedure is never a reason to leave a reader
unaware that something can hurt them.

## Relations

`LogisticsConceptContent` links out to `commodity`, `quality-attribute`,
`post-harvest`, `standard-reference`, `trade-concept`, `supply-chain-risk`, and
other `logistics-concept` entries. Every ref is type-checked and must resolve
(`trade-bad-ref-type`, `trade-ref-missing`), and `relatedLogistics` is checked for
**symmetry** — an asymmetric edge warns.

`dependsOnOperations` is the load-bearing one: it points at the post-harvest
conditioning a mode assumes has already happened. The panel intro says the part
that matters — **transport cannot recover what was lost before loading.** A reefer
does not cool warm fruit into sound fruit; it holds what it was given. Most
"cold-chain failures" are pre-loading failures wearing a transport costume.

## Known limitations

- **The no-numbers rule has no scanner.** Market terms get `mkt-price-like-figure`
  and risks get `risk-assigns-a-level`; logistics gets **neither**. A temperature
  or transit time in `logisticsPurpose` passes every check in
  `validate-trade.ts`. The rule is real and the enforcement is editorial — a
  standing risk for any future logistics content, recorded here rather than
  implied to be solved. `npm run audit`'s unsourced-quantitative-claim check is
  the nearest backstop and it was not written for this.
- **`cargoForms` is a vocabulary, not a capability claim.** That a commodity and
  a mode share a cargo form does not mean the mode will carry it, or should.
- **No route, lane, or geography model exists.** Logistics concepts are
  route-agnostic, and routes are where most of the real constraints live. The
  model cannot represent "this lane, this season" and does not pretend to.
- **No cost model, and none intended.** Freight is priced; nothing here is.
- **`applicableCommodities` is a documented association, not a coverage map.** Its
  absence means nobody wrote the edge, not that the mode is unsuitable.

## Related

- [`processing-safety-boundaries.md`](./processing-safety-boundaries.md) — the same boundary for processing
- [`supply-chain-risk-model.md`](./supply-chain-risk-model.md) — mechanisms acting on these operations
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — the standards logistics pages cite
- [`storage-and-quality-methodology.md`](./storage-and-quality-methodology.md) — what happens before loading
