# Trade data licensing (Phase 5D)

## FAOSTAT — CC BY 4.0, and the obligation that comes with it

The trade snapshot is derived from the **FAOSTAT Detailed Trade Matrix**, bulk
release `2025-12-18`, retrieved `2026-07-16`, licensed **CC BY 4.0**.

CC BY 4.0 permits reuse, redistribution, and derivative works — including the
transformation this platform applies (summing bilateral rows to reporter totals,
excluding aggregates, recomputing world figures). **It permits all of that on one
condition: attribution.**

Attribution is not a courtesy here. It is the **term under which we hold the
data**, and failing it is a licence breach, not an etiquette lapse.

### The attribution, and where it is rendered

The snapshot carries its own attribution string, so it travels with the data
rather than living only in a template:

```
FAO. FAOSTAT Detailed Trade Matrix. Licensed under CC BY 4.0.
```

`attribution`, `license`, `licenseUrl`, `source`, `sourceUrl`, and `bulkUrl` are
all fields of
[`data/snapshots/faostat__trade-matrix__2025-12-18.json`](../data/snapshots/faostat__trade-matrix__2025-12-18.json).

The obligation is discharged **wherever a figure derived from the snapshot is
shown**, not once in a footer:

| Where                              | What appears                                            |
| ---------------------------------- | ------------------------------------------------------- |
| Any commodity trade panel          | source, licence, dataset version, retrieval date        |
| `/datasets` and `/datasets/[slug]` | full provenance for the dataset, per the Phase 4A model |
| `/sources`                         | the FAOSTAT source record                               |

The rule that makes this survive future edits: **attribution is rendered from the
snapshot's own `attribution` field**, never retyped into a component. A hardcoded
credit is the thing that silently detaches from the data it credits — the same
reasoning that makes `producedBy` generated rather than hand-written
([`processing-transformation-model.md`](./processing-transformation-model.md)).

Licensing is not carried by the trade snapshot in isolation. It is the standing
model: `DatasetRegistryEntry` requires `license` and carries
`accessRequirements`, including `attribution-required`
([`types/data-ops.ts`](../types/data-ops.ts),
[`lib/data-ops/registry.ts`](../lib/data-ops/registry.ts)). See
[`data-operations.md`](./data-operations.md) and
[`dataset-snapshots.md`](./dataset-snapshots.md).

## UN Comtrade — 401, and why it is not integrated

**UN Comtrade returns HTTP 401 — registration/subscription required.**

It is the reference bilateral merchandise trade database, and it would be the
better source. It is **not integrated**, and the reason is not that a credential
is hard to obtain:

- **A credentialed source is not reproducible from its citation.** A reader who
  follows our source link cannot get the data. The evidence chain terminates at a
  login, and "trust us, we saw it" is what the whole provenance model exists to
  avoid.
- **Subscription terms constrain redistribution** in ways CC BY 4.0 does not. A
  licence we have not read is not a licence we can publish under.
- **A build must not depend on a secret.** A static build that needs an API key
  is a build that breaks for anyone but us, and quietly ships stale data when the
  key lapses.

So it is **recorded rather than used**. The source record `un-comtrade`
([`data/sources.ts`](../data/sources.ts)) names it, links it, and says plainly
that access to the current API requires registration/subscription and that
AgricultureID therefore does not integrate it.

The `accessRequirements` vocabulary already had the words for this before Phase 5D
needed them — `registration-required` and `api-key-required` are values of
`AccessRequirement` in [`types/data-ops.ts`](../types/data-ops.ts). The Phase 4A
model anticipated the case; Phase 5D is the first to hit it.

**This is the credentialed-source pattern: name the source, name the barrier, use
what is open, and do not pretend the substitute is the original.** FAOSTAT is not
Comtrade. It is what we can lawfully and reproducibly hold, and the pages say so.

## ICC Incoterms® — trademark and copyright

**Incoterms® is a registered trademark of the International Chamber of Commerce,
and the Incoterms® rules are an ICC copyrighted publication.**

AgricultureID describes what a delivery term **allocates** — cost, risk,
obligation. It does not reproduce rule text, is not a substitute for the published
text, and does not recommend a rule. `INCOTERMS_SCOPE_NOTE`
([`types/trade.ts`](../types/trade.ts)) is required verbatim on every
`delivery-term` page and enforced by `trade-no-incoterms-note` in
[`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts).

Full treatment: [`incoterms-scope.md`](./incoterms-scope.md).

## ISO, Codex, GLOBALG.A.P. — copyright on normative text

| Body             | Access                                                    | What we publish                              |
| ---------------- | --------------------------------------------------------- | -------------------------------------------- |
| **ISO**          | Texts are **sold**; copyright reserved                    | Public metadata, scope statements, abstracts |
| **Codex**        | **Freely published** by FAO/WHO; copyright still reserved | Scope and structure summaries                |
| **GLOBALG.A.P.** | Scheme documents; copyright reserved by the scheme owner  | Scope and conformity-mechanism summaries     |
| **UNECE**        | **Freely published**                                      | Scope and structure summaries                |
| **USDA**         | US Government works                                       | Scope and structure summaries                |

**Free to read is not free to reproduce.** Codex and UNECE texts are openly
published and remain copyrighted; the difference between them and ISO is the
price of access, not the existence of the right. Nothing in this table is a
licence to copy — the right-hand column is the same in every row for a reason.

Source policy for grading standards — prefer public texts, avoid paid ones beyond
metadata — is set out in [`commodity-grade-model.md`](./commodity-grade-model.md).

## The standing rule

> **AgricultureID summarises scope and never reproduces normative text.**

One rule, applied to every normative source on the platform: ICC rules, ISO
standards, Codex texts, UNECE standards, scheme documents, and grading standards.

It is a copyright constraint **and** an accuracy constraint, and the second is
what makes it worth having independently of the first. **A copied requirement
goes stale silently.** Standards are revised; a reproduced limit does not break,
throw, or fail a check when its edition is superseded — it just quietly stops
being true while continuing to look authoritative. Summarising scope and pointing
at the issuing body is the only form that survives a revision we did not notice.

Enforced structurally rather than trusted to prose:

| Rule                        | Where                                                    |
| --------------------------- | -------------------------------------------------------- |
| `std-no-scope-disclaimer`   | `STANDARD_SCOPE_DISCLAIMER` verbatim on every standard   |
| `std-no-edition`            | no standard without an edition                           |
| `trade-no-incoterms-note`   | `INCOTERMS_SCOPE_NOTE` verbatim on every delivery term   |
| `trade-no-scope-disclaimer` | `TRADE_SCOPE_DISCLAIMER` verbatim on every trade concept |

## Known limitations

- **No check distinguishes a summary from a reproduction.** The platform's central
  licensing rule is enforced by authors, not by the validator. A sufficiently
  thorough scope summary becomes a substitute for the text, and nothing fires.
  Stated here, in [`incoterms-scope.md`](./incoterms-scope.md), and in
  [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md),
  because a constraint enforced only by care should be written down three times.
- **Attribution is only as durable as the render path.** The snapshot carries its
  `attribution` field; the obligation is met only where a component actually
  renders it. Nothing tests that a page showing a derived figure also shows the
  credit. That is a real gap in a real licence obligation, and it is named rather
  than assumed handled.
- **We do not know Comtrade's terms.** We know access is gated at 401. What the
  subscription would permit is unread and therefore unstated — the source record
  says access requires registration/subscription and stops there, rather than
  characterising terms we have not seen.
- **Licence strings are recorded, not verified.** `license: 'CC BY 4.0'` is what
  the provider published at retrieval. Providers relicense; nothing re-checks.
- **CC BY 4.0 attribution has no single canonical form.** The string used is
  FAO's own dataset citation. It is a good-faith discharge of the obligation, not
  a form FAO has approved.

## Related

- [`trade-data-model.md`](./trade-data-model.md) — the snapshot and source selection
- [`incoterms-scope.md`](./incoterms-scope.md) — ICC rules in detail
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — never reproducing a standard
- [`dataset-snapshots.md`](./dataset-snapshots.md) · [`data-operations.md`](./data-operations.md) — the licensing model these inherit
- [`image-licensing.md`](./image-licensing.md) — the same discipline for images
