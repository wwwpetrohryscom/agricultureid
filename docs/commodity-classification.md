# Commodity classification codes (Phase 5A)

## Scope and the disclaimer that governs it

AgricultureID records classification codes as **dated reference information**. It
does not give customs classification advice, and it is not a tariff service.

The canonical disclaimer (`CLASSIFICATION_DISCLAIMER` in `types/commodity.ts`,
rendered on the commodities hub):

> Commodity classification can depend on composition, processing level, intended
> use, packaging, jurisdiction, and current tariff rules. Codes here are dated
> reference information, not customs classification advice — confirm with the
> applicable authority.

This is not boilerplate. Classification is genuinely fact-specific: the same
physical goods can classify differently depending on how they were processed, how
they are packed, what they will be used for, and which country is deciding.

## The model

```ts
interface CommodityCode {
  system: 'HS' | 'CN' | 'FAOSTAT' | 'USDA' | 'WorldBank' | 'national';
  code: string;
  version?: string; // REQUIRED for HS and CN
  jurisdiction?: string;
  sourceId?: string; // must resolve in the source registry
  note?: string;
}
```

## Systems referenced

| System        | What it is                                                                                     | Versioning                                                                |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **HS**        | World Customs Organization Harmonized System — the international basis for tariff nomenclature | Revised on a multi-year cycle; `version` (e.g. `HS 2022`) is **required** |
| **CN**        | EU Combined Nomenclature, built on HS with further EU subdivision                              | Republished annually; `version` **required**                              |
| **FAOSTAT**   | FAO statistical item codes for production/trade series                                         | Item codes are stable but the item definition is what matters             |
| **USDA**      | US commodity naming and classes                                                                | Programme-specific                                                        |
| **WorldBank** | World Bank indicator/commodity mapping                                                         | Dataset-versioned                                                         |
| **national**  | National grading/classification identifiers                                                    | Jurisdiction-scoped                                                       |

## Rules the validator enforces

- `system` must be one of the supported systems;
- `code` must be non-empty;
- **HS and CN codes must carry a `version`** — a bare HS code is ambiguous
  because the nomenclature is revised, and a code without its revision can be
  silently wrong;
- `sourceId`, if present, must resolve in the source registry.

## Authoring rules

- **Never guess a code.** Omitting `commodityCodes` entirely is always
  acceptable and is preferred to a plausible-but-wrong code. A wrong tariff code
  is worse than no code.
- Prefer the 4- or 6-digit HS level. Beyond 6 digits, codes are national
  extensions and must carry a `jurisdiction`.
- Record what the code _covers_ in `note` when the item boundary is not obvious
  (e.g. "Wheat and meslin, other than durum wheat").
- Codes are **not** identity. Two commodities can share a code; one commodity can
  fall under several depending on processing and use. The code is an attribute of
  the entry, never its primary key.

## Known limits

- Coverage is partial and deliberately conservative — many entries carry no codes
  rather than uncertain ones.
- HS versions move; an entry reflects the version named in `version` at the
  `updatedAt` date and is not automatically revalidated against later revisions.
- FAOSTAT items, HS headings, and national grade categories do not map cleanly
  one-to-one; AgricultureID does not assert equivalence between systems.
