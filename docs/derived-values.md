# Derived values (Phase 3B)

A **derived value** is a number computed from one or more statistics rather than
observed directly. AgricultureID never presents a derived value as an observed
measurement: it is labelled as derived and records exactly how it was produced.

## Model (`DerivedAgriculturalValue`)

```
{
  formulaId, formulaVersion, calcVersion,
  label, value, unit, jurisdiction, year,
  inputs: [{ indicatorId, value, sourceVersion }, ...],
  assumptions: [...],
  limitations
}
```

## Versioned formula registry (`lib/geo/derived.ts`)

Each derived value resolves a `GeoFormula` by id, which carries:

- `formulaId`, `formulaVersion` (the mathematical definition) and `calcVersion`
  (the implementation), so a change to either is traceable;
- `expression` (human-readable), `inputIndicators`, `assumptions`, `limitations`.

Formulas are validated: every input must reference a known indicator and every
formula must carry a version and limitations (`lib/geo/validate-geo.ts`).

## Current derived value

- **Arable land as a share of agricultural land** =
  `AG.LND.ARBL.ZS / AG.LND.AGRI.ZS × 100`, computed for the latest year in which
  **both** inputs exist for the country. It never extrapolates: if there is no
  common year, no value is produced. Each result records both input values and
  their source versions, the reference year, and the ratio's limitations.

## Rendering

On a country profile the derived value is shown under a "Derived indicator"
heading with its formula id, formula version, calculation version, the inputs
used, and its limitations — visually distinct from observed statistics so a
reader is never misled into treating it as a measurement.
