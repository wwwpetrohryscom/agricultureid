import { getSnapshot } from '@/lib/geo/snapshots';
import type { DerivedAgriculturalValue } from '@/types/geo';

/**
 * Versioned formula registry for DERIVED geographic values. A derived value is
 * never presented as an observed statistic — it records its formula, version,
 * inputs (with source versions), assumptions, and limitations.
 */
export interface GeoFormula {
  formulaId: string;
  formulaVersion: string;
  calcVersion: string;
  label: string;
  unit: string;
  expression: string;
  inputIndicators: string[];
  assumptions: string[];
  limitations: string;
}

export const GEO_FORMULAS: GeoFormula[] = [
  {
    formulaId: 'arable-share-of-agricultural-land',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    label: 'Arable land as a share of agricultural land',
    unit: '% of agricultural land',
    expression: '(arable_pct_of_land / agricultural_pct_of_land) * 100',
    inputIndicators: ['AG.LND.ARBL.ZS', 'AG.LND.AGRI.ZS'],
    assumptions: [
      'Both source shares use the same total-land-area denominator.',
      'Both values are taken from the same reference year.',
    ],
    limitations:
      'A derived ratio, not an observed statistic. Sensitive to rounding and to differing revision cycles of the two source series; omit rather than extrapolate when a common year is unavailable.',
  },
];

export const GEO_FORMULA_BY_ID = new Map(
  GEO_FORMULAS.map((f) => [f.formulaId, f]),
);

/**
 * Derive arable land as a share of agricultural land for a country, using the
 * latest year for which BOTH inputs exist. Returns undefined when no common
 * year is available (never extrapolates).
 */
export function deriveArableShareOfAgri(
  iso3: string,
): DerivedAgriculturalValue | undefined {
  const f = GEO_FORMULA_BY_ID.get('arable-share-of-agricultural-land')!;
  const arableSnap = getSnapshot('AG.LND.ARBL.ZS');
  const agriSnap = getSnapshot('AG.LND.AGRI.ZS');
  if (!arableSnap || !agriSnap) return undefined;

  const arableByYear = new Map(
    arableSnap.rows
      .filter((r) => r.iso3 === iso3)
      .map((r) => [r.year, r.value]),
  );
  const agriByYear = new Map(
    agriSnap.rows.filter((r) => r.iso3 === iso3).map((r) => [r.year, r.value]),
  );
  const commonYears = [...arableByYear.keys()]
    .filter((y) => agriByYear.has(y))
    .sort((a, b) => b - a);
  const year = commonYears[0];
  if (year == null) return undefined;

  const arable = arableByYear.get(year)!;
  const agri = agriByYear.get(year)!;
  if (!agri) return undefined;
  const value = (arable / agri) * 100;

  return {
    formulaId: f.formulaId,
    formulaVersion: f.formulaVersion,
    calcVersion: f.calcVersion,
    label: f.label,
    value: Math.round(value * 10) / 10,
    unit: f.unit,
    jurisdiction: iso3,
    year,
    inputs: [
      {
        indicatorId: 'AG.LND.ARBL.ZS',
        value: arable,
        sourceVersion: arableSnap.datasetVersion,
      },
      {
        indicatorId: 'AG.LND.AGRI.ZS',
        value: agri,
        sourceVersion: agriSnap.datasetVersion,
      },
    ],
    assumptions: f.assumptions,
    limitations: f.limitations,
  };
}
