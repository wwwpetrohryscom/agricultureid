# Trade classification & versioning (Phase 5D)

## A code without an edition is not a code

The Harmonized System is **revised on a multi-year cycle**. Headings are created,
merged, split, and retired. A bare `1001.99` does not identify goods — it
identifies goods _under some edition the reader has to guess_, and the guess is
usually "the current one", which is exactly the assumption that goes wrong
quietly.

The failure mode is not a missing page or a type error. It is a code that looks
right, resolves to something in the reader's tariff, and is a different heading
from the one the author meant. Nothing downstream can detect it.

> **`trade-code-unversioned`** — an `HS` or `CN` entry in
> `classificationSystems` with no `version` is a build error.

Enforced in [`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts)
against `CommodityCode` ([`types/commodity.ts`](../types/commodity.ts)), the same
shape and the same rule Phase 5A applies to `commodityCodes` on commodities —
see [`commodity-classification.md`](./commodity-classification.md). Phase 5D
extends the rule to trade-concept pages rather than inventing a second code
model: one vocabulary, enforced twice.

`CN` (the EU Combined Nomenclature) is republished **annually** and is built on
HS with further EU subdivision, so it carries the requirement for the same
reason, only more often.

## Three code systems that are not the same system

`HS`, `FAOSTAT`, and `CPC` all attach a number to something agricultural. They
are not interchangeable and AgricultureID **does not assert equivalence between
them**.

| System      | Owner | Answers                                        | Versioning                                                     |
| ----------- | ----- | ---------------------------------------------- | -------------------------------------------------------------- |
| **HS**      | WCO   | _What tariff applies at a border?_             | Multi-year revision cycle; `version` **required**              |
| **CN**      | EU    | _What tariff applies at an EU border?_         | Annual republication; `version` **required**                   |
| **FAOSTAT** | FAO   | _What series is this figure in?_               | Item codes are stable; the **item definition** is what matters |
| **CPC**     | UNSD  | _What kind of product is this, statistically?_ | Published alongside the FAOSTAT item                           |

The distinction that matters: **HS is a legal instrument, FAOSTAT is a
statistical one.** An HS heading exists to decide a duty against a specific
consignment. A FAOSTAT item exists to keep a time series comparable across
decades. They are optimised for opposite things — HS splits where money is at
stake, FAOSTAT holds still where history is at stake — and a mapping between them
is a judgement, not a lookup.

The concordance in
[`data/trade/faostat-concordance.ts`](../data/trade/faostat-concordance.ts)
therefore maps **AgricultureID commodity → FAOSTAT trade item**, and carries the
published `cpcCode` as the item ships it. It does not map commodity → HS, and it
does not map FAOSTAT → HS.

### FAOSTAT item codes are stable; item _definitions_ are the risk

A FAOSTAT item code rarely changes. What it covers is the live question, and it
is the reason most exclusions exist:

- Item `560` "Grapes" covers **table and wine grapes** — two commodities this
  platform models separately.
- Item `571` is "Mangoes; guavas and mangosteens" — **three fruits**.
- Item `497` is "Lemons and limes"; item `426` is "Carrots and turnips"; item
  `372` is "Lettuce and chicory"; item `393` is "Cauliflowers and broccoli".

A stable code carrying a compound definition is more dangerous than an unstable
one, because it never triggers a review. The concordance's inclusion rule —
**map only when exactly one FAOSTAT trade item corresponds to the commodity** —
exists to make that danger a build-time exclusion with a written reason instead
of a runtime overstatement.

## A production item code does not imply a trade item

The finding that shaped the concordance:

> **Seed cotton has FAOSTAT production item `328` and NO trade item.**

It is **ginned at origin**. Seed cotton does not cross borders; lint (item 767)
and cottonseed (item 329) do. The production domain and the trade domain are
different domains with different item lists, and a code's presence in one implies
nothing about the other.

This is why the concordance is not simply "read `commodityCodes`". Doing so would
have queried item 328 against the trade matrix, received **zero rows**, and
rendered seed cotton as a commodity that is not internationally traded — which is
true by accident and wrong by reasoning. The right answer is _the trade happens,
one step downstream, under different codes_, and no amount of querying item 328
produces it.

The same shape recurs: `coffee-cherries` are processed at origin;
`durum-wheat-grain` has no trade split from item `15` "Wheat". Each is recorded
with reason `no-trade-item` and a note saying **why**, because "no data" and "no
trade item" and "not traded" are three different statements and only the middle
one is ours to make.

## Editions on trade-concept pages

A `trade-concept` page may cite classification systems via
`classificationSystems` ([`types/content.ts`](../types/content.ts)). The
authoring rules from Phase 5A carry over unchanged:

- **Never guess a code.** Omitting the field entirely is always acceptable and
  is preferred to a plausible-but-wrong code.
- Prefer the 4- or 6-digit HS level; beyond 6 digits codes are national
  extensions and must carry a `jurisdiction`.
- Codes are **not identity**. Two commodities can share a code; one commodity can
  fall under several depending on processing, packing, and intended use.

Classification is a **legal determination made by a competent authority against a
specific consignment**, and `TRADE_SCOPE_DISCLAIMER`
([`types/trade.ts`](../types/trade.ts)) says so on every trade-concept page. A
reference description of how classification works is not that determination and
is never a substitute for it.

## Known limitations

- **The validator checks that an edition is present, not that it is right.** A
  `version: 'HS 2022'` on a heading that only exists in HS 2017 passes every
  check. The rule closes the "no edition" hole; the "wrong edition" hole is
  editorial and stays open.
- **Nothing revalidates against later revisions.** An entry reflects the edition
  named at its `updatedAt` date. When the WCO publishes a new edition, no code on
  this site moves, and nothing flags it. This is a standing review obligation, not
  an automated one.
- **No equivalence table exists, and none is planned.** FAOSTAT items, HS
  headings, CPC classes, and national grade categories do not map cleanly
  one-to-one. Publishing a mapping would imply a precision the systems do not
  have between them.
- **The concordance is derived against one FAOSTAT release** (`2025-12-18`). If
  FAO redefines an item's coverage in a later release, the mapping is stale in
  the one way that is hardest to see: the code still resolves.

## Related

- [`commodity-classification.md`](./commodity-classification.md) — the `CommodityCode` model and the Phase 5A rules
- [`trade-data-model.md`](./trade-data-model.md) — the snapshot and the concordance in use
- [`trade-data-licensing.md`](./trade-data-licensing.md) — source access and licensing
