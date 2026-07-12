# Field-level provenance

Page-level `sourceReferences` establish which authorities a page draws on.
Field-level provenance (Phase 2.1) goes further: it attaches specific citations
to individual factual claims — especially quantitative and safety-critical ones.

## Model

Types in [`types/content.ts`](../types/content.ts):

```ts
interface FieldCitation {
  sourceId: string; // must resolve to a registry source
  locator?: string; // e.g. "PLANTS profile: TRAE", "Table 2" — never fabricated
  evidenceNote?: string; // what the source supports
  jurisdiction?: string; // if narrower than global
  retrievedDate?: string; // ISO date
  evidenceTier?: 1 | 2 | 3;
}

interface ProvenancedClaim {
  field: string; // e.g. "nutrient-analysis", "soil-ph", "morphology"
  statement: string; // the exact claim text
  quantitative?: boolean; // numeric claim → Tier 1–2 required
  safetyCritical?: boolean; // safety claim → Tier 1–2 required
  citations: FieldCitation[];
}
```

`BaseContent.claims?: ProvenancedClaim[]` holds these.

## Rules enforced by the validator

- Every `citations[].sourceId` must resolve (`claim-unknown-source`).
- Every claim must have `field`, `statement`, and ≥1 citation.
- `retrievedDate` must be a valid ISO date if present.
- `quantitative` or `safetyCritical` claims must cite a Tier 1–2 source
  (`claim-weak-evidence`) — see [evidence-hierarchy.md](evidence-hierarchy.md).

## Honesty rules

- **Locators are never fabricated.** If the exact page/table is not known, the
  `locator` is omitted and `evidenceNote` describes what the source supports.
- If a source does not support a claim, the claim is narrowed, qualified with
  uncertainty, re-sourced, or removed — it is not left with a mismatched
  citation.

## Coverage (current)

Field-level provenance has been added to every page carrying a **quantitative**
claim (fertilizer analysis grades, atmospheric composition, freezing point, soil
pH ranges, insect morphology, growth/rotation durations) — 27 pages. The model
supports adding provenance to any factual field corpus-wide; the audit
prioritised quantitative claims first because they carry the highest factual
risk. `npm run audit` reports provenance completeness and any quantitative page
still lacking a claim.
