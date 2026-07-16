# Storage & quality methodology (Phase 5B)

How AgricultureID models what happens to a harvested lot: what is measured, how
it is measured, how it fails, and what it is held in.

## The four entities, and why they are separate

| Entity            | Type                  | Answers                             |
| ----------------- | --------------------- | ----------------------------------- |
| Process / system  | `post-harvest`        | _What do you do to the lot?_        |
| Quality attribute | `quality-attribute`   | _What property does the lot have?_  |
| Measurement       | `quality-measurement` | _How do you observe that property?_ |
| Defect            | `post-harvest-defect` | _How does the lot go wrong?_        |

Measuring one attribute is not knowing a lot's quality; seeing a symptom is not
knowing a cause; and holding a lot somewhere is not the same as processing it.
Each seam is enforced by the validator, not left to editorial discipline.

## The rule that governs every page: no universal values

**AgricultureID publishes no universal moisture, temperature, duration, or
storage recommendation.** Safe and acceptable values depend on the commodity,
the measurement basis, the intended storage duration, the climate, and the
applicable standard or contract. A figure that ignores those is not a
simplification — it is wrong, and it is wrong in the direction that loses crops.

A quantitative value may appear only with **commodity + basis + unit + source +
date/version + context + limitation**. Otherwise the page names _who sets the
value_ — the grade standard, the contract, the official method, or national
storage guidance — and points there.

Phase 5B ships **zero quantitative tokens** across all 74 attribute, defect, and
measurement pages. This is verified by `npm run audit`, not asserted.

### The `typicalUnits` rule

Attributes carry unit **labels** (`'% (wet basis)'`, `'kg/hL'`, `'°Brix'`), and
the validator **rejects any digit** in that field. Without this, a threshold
would inevitably arrive disguised as a unit (`'13–14%'`).

## Anti-conflation, made structural

The most consequential post-harvest error is answering one question with another
question's evidence. Moisture content is a storage-stability property; it is not
a safety verdict, not a grade, and not a milling prediction. So every
`quality-attribute` declares:

- **`qualityDomain`** — the _one_ question it answers, from: `quality-measurement`,
  `commercial-grading`, `food-feed-safety`, `storage-stability`,
  `processing-suitability`;
- **`notAnIndicatorOf`** (required, non-empty) — what it must **not** be read as.

The five domains are genuinely different regimes:

- **Quality measurement** — what the property physically is.
- **Commercial grading** — how a lot is described and priced under a standard.
- **Food/feed safety** — a regulatory question with its own limits and authorities.
- **Storage stability** — will it keep, and for how long, under given conditions.
- **Processing suitability** — will it perform in a specific end use.

## Diagnosis has limits, and the model says so

Every `post-harvest-defect` must carry **`diagnosticLimitations`**. This is not
boilerplate; it encodes three facts that decide outcomes:

1. **Disorders resemble each other.** Chilling injury, freezing injury, and
   senescence can present similarly; blue and grey mould are routinely confused;
   an insect exit hole and a mechanical puncture are not always distinguishable.
2. **Symptoms appear late.** Chilling injury typically expresses only after the
   produce is warmed — absence of symptoms at the cold-store door proves nothing
   about the decision that caused it.
3. **The worst hazards are invisible.** Visible mould does not establish
   mycotoxin presence, and — the direction that matters — _absence_ of visible
   mould does not establish absence of mycotoxin. Mycotoxins are odourless and
   colourless. Confirmation is a laboratory question.

## Measurement is only as good as calibration and sampling

Every `quality-measurement` declares what it `measures` and its
**`measurementLimitations`**. Two failure modes precede any instrument fault:

- **Sampling** — a reading describes the sample, and describes the lot only if
  the sample represents it.
- **Calibration** — most field instruments are _indirect_. An electronic
  moisture meter does not weigh water; it responds to electrical properties and
  converts using a commodity-specific calibration that degrades across
  commodities, temperatures, and uneven lots. That is why reference methods
  (oven-drying) exist, and why knowing which one you hold is the difference
  between a measurement and a guess.

Some edges are **surveillance proxies**, and are labelled as such on both sides:
a temperature probe watching for mould measures grain temperature, not
organisms — stable temperature is not evidence a lot is clean, and cooling does
not remove toxin already formed.

## Storage systems must declare principle and risk

Any `post-harvest` entry classed `storage` or `cooling` **must** declare
`operatingPrinciple` and `riskFactors` (validator-enforced). A storage system
described without how it works or how it fails is a shell page.

`storageSystems` on a commodity is restricted to classes `storage`/`cooling`:
a lot is _held in_ a store, but only _passes through_ drying, curing, or
grading. Phase 5B tightened this rule and corrected **17 Phase 5A edges** that
had listed processes (`sun-drying`, `curing`, `sorting-and-grading`,
`modified-atmosphere-packaging`) as storage systems; they moved to `connections`.

## Safety framing

Reference level only. No fumigant or pesticide names, doses, rates, or exposure
times; no controlled-atmosphere gas procedures; no confined-space entry
procedures; no machinery operating steps. Hazards that kill people are **named**
— grain engulfment, combustible dust, oxygen-deficient atmospheres in CA rooms
and silo bags, ammonia refrigerant — and every one directs the reader to trained
personnel, product labels, national regulation, and the facility's own
procedures.

## Where 5B content lives

- Processes, storage systems, and packaging: `content/post-harvest/` (59)
- Quality attributes: `content/quality-attributes/` (30)
- Defects: `content/post-harvest-defects/` (26)
- Measurements: `content/quality-measurements/` (18)
- Stored-product pests: `content/pests/` (8 added) — they are pests, so they use
  the existing pest type rather than a parallel model.

Validator: [`lib/post-harvest/validate-post-harvest.ts`](../lib/post-harvest/validate-post-harvest.ts),
wired into `content:validate`. Tests: [`tests/phase5b.test.ts`](../tests/phase5b.test.ts).
