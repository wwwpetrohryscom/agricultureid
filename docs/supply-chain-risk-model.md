# Supply-chain risk model (Phase 5D)

## Describe the mechanism. Never score it.

> **This page describes a risk mechanism — how a disruption arises, propagates,
> and is observed — and deliberately assigns no likelihood, severity, or risk
> score.**

`RISK_NOT_SCORED_NOTE` ([`types/trade.ts`](../types/trade.ts)), required verbatim
on every entry. It is the single most important editorial rule of this model, and
the model is built so that following it is the only available option.

**Describing a mechanism is defensible. Scoring it is not.**

A mechanism is a causal account: port congestion arises _this way_, propagates
_here_, and shows up _as this_. It is either right or wrong about the world, and
it can be sourced, checked, and corrected.

A score is a number about a chain we have never seen. Severity depends on the
specific chain, route, season, counterparty, and jurisdiction — and a generalised
score is an **invented quantity presented as evidence**. Worse than being wrong,
it is _unfalsifiable_: "medium risk" cannot be checked against anything, so
nothing ever corrects it, and it inherits the credibility of every sourced claim
around it while carrying none of the work.

## There is no field to score with

The model has **no likelihood, no severity, no impact, no score field**
anywhere. `SupplyChainRiskContent` ([`types/content.ts`](../types/content.ts)):

| Field                   | Required | What it holds                                   |
| ----------------------- | -------- | ----------------------------------------------- |
| `riskClass`             | ✔        | the domain the risk arises in                   |
| `chainStages`           | ✔        | where it materialises, origin → destination     |
| `riskMechanism`         | ✔        | **how it arises and propagates**                |
| `observableIndicators`  | ✔        | signals that it is materialising                |
| `assessmentLimitations` | ✔        | why no score, and what assessment would require |

This is deliberate and it is the primary control. An optional `severity?: number`
would be populated — by a careful author, for good reasons, on the entry where it
seemed obviously fine. Then on the next. A field that exists gets filled; the only
reliable way to not publish a quantity is to have nowhere to put it.

The absent field is not an omission to be fixed later. **It is the design.**

## The `risk-assigns-a-level` rule

Removing the field stops the _structured_ claim. It does not stop the same claim
arriving as prose — "cocoa faces high risk of…" asserts exactly what the schema
refused, in a sentence, where nothing looks at it.

> **`risk-assigns-a-level`** — language assigning a level to a risk is a build
> error.

`RISK_SCORING` in [`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts)
matches, over every rendered string on the page:

- `high|low|medium|moderate|severe|critical|minor|significant|negligible` +
  `risk|likelihood|probability|severity|impact`
- `risk score`
- `likelihood|probability is|of high|low|moderate|medium`

The schema and the scanner are two halves of one rule. Either alone leaks.

### The disclaimer is stripped before scanning

`RISK_NOT_SCORED_NOTE` contains the words "likelihood", "severity", and "risk
score" — **it must**, since it exists to say we assign none of them. Scanning the
page whole would fail every compliant page on its own required disclaimer.

So the disclaimer is removed before the scan:

```
const text = pageText(r).split(RISK_NOT_SCORED_NOTE).join(' ');
```

The comment in the validator records the reasoning: _the required disclaimer names
the very words we forbid, so it is removed before scanning rather than
special-cased in the pattern._ Weakening `RISK_SCORING` until the disclaimer
passed would have carved a hole shaped like the disclaimer's vocabulary — which
is exactly the vocabulary a real violation uses. Strip the known-good text; scan
the rest at full strength. `mkt-price-like-figure` does the same
([`market-data-methodology.md`](./market-data-methodology.md)).

## `observableIndicators` are observable, not predictive

The distinction the field name carries, and the one most likely to be lost.

An indicator is something a reader **can go and look at, in their own chain,
now**. Not a leading indicator. Not a trigger. Not a threshold. A place to look.

| Observable                                   | Predictive — never                                     |
| -------------------------------------------- | ------------------------------------------------------ |
| "Vessel waiting times lengthening at a port" | "Waiting times above N days indicate imminent failure" |
| "Buyers reporting delayed nominations"       | "Delayed nominations forecast a Q3 shortfall"          |

The first is a fact a reader verifies against their own data. The second is a
prediction with a fabricated threshold, and thresholds are where scoring
re-enters after being thrown out twice — a number, deniable as "just an
indicator", carrying every problem a severity score has.

The panel says so where it is rendered
([`components/trade/TradePanels.tsx`](../components/trade/TradePanels.tsx)):
_observations to check against that chain's own data, **not thresholds**_.

## What real assessment would require

Not published, because we do not have it, and naming what is missing is the point
of the disclaimer:

- **the specific chain** — origin, route, mode, transhipment, storage, buyer;
- **that chain's own history** — what has failed on it, how often, at what cost;
- **counterparty data** — who performs, who does not, under what terms;
- **season and current conditions** — the same route is a different risk in
  different months;
- **jurisdiction** — the legal and regulatory context of each leg;
- **contract terms** — where risk has already been allocated, and to whom.

Assessment against a real chain **requires that chain's own data**. AgricultureID
has none of it, and a page describing a mechanism is an _input_ to that work, not
a substitute for it. A reader doing this properly brings six things we do not
have; a reader given a score is invited to skip all six.

## `chainStages` and `riskClass`

`CHAIN_STAGES` is **ordered, origin → destination**: `production` · `assembly` ·
`processing` · `inland-transport` · `border` · `international-transport` ·
`destination-market`. The order is real, and the panel sorts by it rather than by
declaration order, so a mechanism spanning several stages reads in the direction
the goods move.

`SUPPLY_CHAIN_RISK_CLASSES` — the domain a risk arises in: `production` ·
`logistics` · `market` · `regulatory` · `quality-integrity` · `biosecurity` ·
`infrastructure` · `information`.

Note that **class ≠ stage**: a `regulatory` risk materialises at `border`, a
`market` risk at `destination-market`. A single field would have collapsed _what
kind of thing this is_ into _where it bites_, and those come apart constantly.

## Standards are controls, not guarantees

`addressedByStandards` links a mechanism to standards that address it. The panel
intro states the limit plainly: **a standard is a control, not a guarantee.**

A certified chain is a chain with a control in place, assessed at a point in time
against a scope. It is not a chain where the mechanism cannot occur, and the link
must never read as one. See
[`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md).

## Known limitations

- **`RISK_SCORING` is a regex, and prose is inventive.** "Exporters regard this as
  the most serious threat to the season" assigns a level, and passes. The scanner
  catches the _idiom_ of scoring, not the _act_ of it. It raises the cost of the
  common failure; it does not close the hole.
- **A mechanism with no score is harder to use — that is the trade.** Readers want
  a ranking, and this model refuses to supply one. It is a genuine loss of
  utility, accepted knowingly, because the alternative is a useful-feeling number
  with nothing underneath it.
- **The model cannot represent interaction.** Real disruptions compound — a
  biosecurity closure during a congestion event is not the sum of two mechanisms.
  `relatedRisks` links them; it does **not** describe what happens when they
  coincide, and nothing here should be read as implying they are independent.
- **No frequency, no history, no base rates.** There is no record of how often a
  mechanism has fired, anywhere. Even the honest quantitative claim — _this
  happened N times in the last decade_ — is outside this model, because we have
  no dataset that would support it.
- **`affectedCommodities` is a documented association, not an exposure map.** Its
  absence means nobody wrote the edge. Reading it as "this commodity is not
  exposed" is precisely the absent-≠-zero error the trade snapshot fights
  ([`trade-data-model.md`](./trade-data-model.md)).
- **Mechanisms are stated generally and age quietly.** Routes, regulations, and
  market structures change. A mechanism page has no `datasetVersion` to make its
  staleness visible the way a snapshot does.

## Related

- [`market-data-methodology.md`](./market-data-methodology.md) — the sibling "never quantify" rule
- [`logistics-taxonomy.md`](./logistics-taxonomy.md) — the operations these mechanisms act on
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — controls, not guarantees
- [`evidence-hierarchy.md`](./evidence-hierarchy.md) — what a sourced claim requires
