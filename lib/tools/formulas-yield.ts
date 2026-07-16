import type { CalcFormula } from '@/types/tools';
import { KG_HA_TO_LB_ACRE } from '@/lib/tools/constants';

/**
 * Yield conversion primitives.
 *
 * ## Why primitives, and not one formula
 *
 * The yield converter offers 4 units in each direction — 16 executable paths. It
 * previously declared ONE formula, `yield-tha-to-buacre`, and executed none of
 * it: the maths lived in an inline pivot table, so the formula panel advertised
 * a t/ha → bu/acre expression while the tool was, say, converting lb/acre to
 * kg/ha. A tool that shows a formula it does not run is worse than one that
 * shows none, because the reader checks the wrong thing and concludes it is
 * right.
 *
 * A single parameterised formula cannot fix that either: the paths are
 * materially different calculations (some are exact scalings, two need a
 * commodity-specific standard weight and a jurisdiction), and collapsing them
 * into one expression with a mode flag would produce an expression no reader
 * can check against the number in front of them.
 *
 * So the registry holds the PRIMITIVES, each with its own expression, sources,
 * limitations and reference cases, and the tool composes a path through kg/ha:
 *
 *     from → kg/ha → to
 *
 * Every executable path is therefore one or two registered formulas, the panel
 * renders exactly the formulas that path runs, and a contract validator proves
 * the declared set and the executed set are the same (see validate-tools.ts).
 *
 * ## Why kg/ha is the pivot
 *
 * It is the only unit here with no commodity dependence and no imperial
 * definition, so every conversion to and from it is either exact or a single
 * documented constant. Pivoting through bu/acre would drag a standard weight
 * into conversions that have nothing to do with bushels.
 */

function n(inputs: Record<string, number | string>, key: string): number {
  const raw = inputs[key];
  const v = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(v))
    throw new Error(`Input "${key}" must be a finite number (got ${raw})`);
  return v;
}

function nonNeg(inputs: Record<string, number | string>, key: string): number {
  const v = n(inputs, key);
  if (v < 0) throw new Error(`"${key}" cannot be negative (got ${v})`);
  return v;
}

function bushelWeight(inputs: Record<string, number | string>): number {
  const v = n(inputs, 'bushelLb');
  if (v <= 0)
    throw new Error(
      `Standard bushel weight must be greater than zero (got ${v}) — a bushel conversion requires the commodity's own standard weight, and there is no generic bushel`,
    );
  return v;
}

const REVIEWED = '2026-07-16';

/** Applies to every bushel primitive: the convention, and what it is not. */
const BUSHEL_SCOPE =
  'Not a grading determination. A standard bushel weight is a fixed conversion constant fixed by the applicable jurisdiction; a lot’s test weight is a measured property of that lot and routinely differs from it. Converting at the standard weight says nothing about whether a lot meets a grade, and what a buyer does about a test-weight shortfall is a contract matter.';

const BUSHEL_LIMITS = [
  'THERE IS NO GENERIC BUSHEL. The standard weight is a property of the commodity and the jurisdiction, not of the unit — which is why it is a required input rather than a default.',
  'A bushel is properly a unit of VOLUME (the US bushel is 2150.42 in³). Its use as a mass unit is a per-commodity trade convention, and that convention is what this conversion applies.',
  'Standard weights here are United States conventions. Most jurisdictions trade these grains by mass and do not use a bushel at all.',
];

export const YIELD_FORMULAS: CalcFormula[] = [
  /* ---- Exact metric scalings ---------------------------------------- */
  {
    formulaId: 'yield-tha-to-kgha',
    name: 'Yield: t/ha → kg/ha',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'kg/ha = t/ha × 1000',
    inputs: [{ key: 'value', label: 'Yield', unit: 't/ha', min: 0 }],
    output: { label: 'Yield', unit: 'kg/ha' },
    assumptions: ['Metric tonne = 1000 kg, by definition.'],
    applicability: 'Any yield expressed per unit area.',
    sourceIds: ['nist'],
    limitations: ['An exact definitional scaling.'],
    testCases: [
      { inputs: { value: 3 }, expect: 3000 },
      { inputs: { value: 0 }, expect: 0 },
      { inputs: { value: 8.5 }, expect: 8500 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'value') * 1000,
  },
  {
    formulaId: 'yield-kgha-to-tha',
    name: 'Yield: kg/ha → t/ha',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 't/ha = kg/ha ÷ 1000',
    inputs: [{ key: 'value', label: 'Yield', unit: 'kg/ha', min: 0 }],
    output: { label: 'Yield', unit: 't/ha' },
    assumptions: ['Metric tonne = 1000 kg, by definition.'],
    applicability: 'Any yield expressed per unit area.',
    sourceIds: ['nist'],
    limitations: ['An exact definitional scaling.'],
    testCases: [
      { inputs: { value: 3000 }, expect: 3 },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'value') / 1000,
  },

  /* ---- Metric ↔ imperial, exact by definition ------------------------ */
  {
    formulaId: 'yield-kgha-to-lbacre',
    name: 'Yield: kg/ha → lb/acre',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'lb/acre = kg/ha ÷ 0.45359237 ÷ (10000 ÷ 4046.8564224)   [exact by definition]',
    inputs: [{ key: 'value', label: 'Yield', unit: 'kg/ha', min: 0 }],
    output: { label: 'Yield', unit: 'lb/acre' },
    assumptions: [
      'The pound (0.45359237 kg) and the acre (4046.8564224 m²) are exactly defined, so the factor is exact rather than measured.',
    ],
    applicability: 'Any yield expressed per unit area.',
    sourceIds: ['nist'],
    limitations: [
      'A unit conversion. It carries no commodity dependence and no bushel convention.',
    ],
    testCases: [
      {
        inputs: { value: 1000 },
        expect: 892.1791216197045,
        tolerance: 1e-9,
        note: '≈0.892 lb/acre per kg/ha',
      },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'value') * KG_HA_TO_LB_ACRE,
  },
  {
    formulaId: 'yield-lbacre-to-kgha',
    name: 'Yield: lb/acre → kg/ha',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'kg/ha = lb/acre × 0.45359237 × (10000 ÷ 4046.8564224)   [exact by definition]',
    inputs: [{ key: 'value', label: 'Yield', unit: 'lb/acre', min: 0 }],
    output: { label: 'Yield', unit: 'kg/ha' },
    assumptions: [
      'The pound and the acre are exactly defined, so the factor is exact.',
    ],
    applicability: 'Any yield expressed per unit area.',
    sourceIds: ['nist'],
    limitations: ['A unit conversion, with no commodity dependence.'],
    testCases: [
      {
        inputs: { value: 892.1791216197045 },
        expect: 1000,
        tolerance: 1e-9,
        note: 'inverse of yield-kgha-to-lbacre',
      },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'value') / KG_HA_TO_LB_ACRE,
  },

  /* ---- Bushels: commodity- and jurisdiction-specific ------------------ */
  {
    formulaId: 'yield-kgha-to-buacre',
    name: 'Yield: kg/ha → bu/acre (commodity standard weight)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'bu/acre = (kg/ha ÷ 0.45359237 ÷ (10000 ÷ 4046.8564224)) ÷ standard_bushel_weight_lb',
    inputs: [
      { key: 'value', label: 'Yield', unit: 'kg/ha', min: 0 },
      {
        key: 'bushelLb',
        label: 'Standard bushel weight',
        unit: 'lb/bu',
        min: 0.000001,
        rangeNote:
          'Commodity- and jurisdiction-specific. There is no generic bushel, so this has no default.',
      },
    ],
    output: { label: 'Yield', unit: 'bu/acre' },
    assumptions: [
      'The lb/acre step is exact by definition; the bushel step applies the commodity’s standard weight convention.',
    ],
    applicability:
      'Grains with a published standard bushel weight in the jurisdiction concerned.',
    commodityApplicability: [
      'wheat-grain',
      'soybeans',
      'maize-grain',
      'sorghum-grain',
      'rye-grain',
      'barley-grain',
      'oat-grain',
    ],
    sourceIds: ['nist', 'usda-ams'],
    limitations: BUSHEL_LIMITS,
    safetyContext: BUSHEL_SCOPE,
    testCases: [
      {
        inputs: { value: 3000, bushelLb: 60 },
        expect: 44.60895608098522,
        tolerance: 1e-9,
        note: '3 t/ha of wheat ≈ 44.6 bu/acre — the classic reference point',
      },
      {
        inputs: { value: 3000, bushelLb: 56 },
        expect: 47.79531008676988,
        tolerance: 1e-9,
        note: 'the same tonnage of maize is a different bushel count',
      },
      { inputs: { value: 0, bushelLb: 60 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'value') * KG_HA_TO_LB_ACRE) / bushelWeight(i),
  },
  {
    formulaId: 'yield-buacre-to-kgha',
    name: 'Yield: bu/acre → kg/ha (commodity standard weight)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'kg/ha = (bu/acre × standard_bushel_weight_lb) × 0.45359237 × (10000 ÷ 4046.8564224)',
    inputs: [
      { key: 'value', label: 'Yield', unit: 'bu/acre', min: 0 },
      {
        key: 'bushelLb',
        label: 'Standard bushel weight',
        unit: 'lb/bu',
        min: 0.000001,
        rangeNote:
          'Commodity- and jurisdiction-specific. There is no generic bushel, so this has no default.',
      },
    ],
    output: { label: 'Yield', unit: 'kg/ha' },
    assumptions: [
      'The bushel step applies the commodity’s standard weight convention; the lb/acre step is exact by definition.',
    ],
    applicability:
      'Grains with a published standard bushel weight in the jurisdiction concerned.',
    commodityApplicability: [
      'wheat-grain',
      'soybeans',
      'maize-grain',
      'sorghum-grain',
      'rye-grain',
      'barley-grain',
      'oat-grain',
    ],
    sourceIds: ['nist', 'usda-ams'],
    limitations: BUSHEL_LIMITS,
    safetyContext: BUSHEL_SCOPE,
    testCases: [
      {
        inputs: { value: 44.60895608098522, bushelLb: 60 },
        expect: 3000,
        tolerance: 1e-9,
        note: 'inverse of yield-kgha-to-buacre for wheat',
      },
      {
        inputs: { value: 180, bushelLb: 56 },
        expect: 11298.179654440117,
        tolerance: 1e-9,
        note: '180 bu/acre of maize — a US Corn Belt order of magnitude',
      },
      { inputs: { value: 0, bushelLb: 56 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'value') * bushelWeight(i)) / KG_HA_TO_LB_ACRE,
  },
];
