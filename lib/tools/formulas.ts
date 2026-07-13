import type { CalcFormula } from '@/types/tools';
import {
  KG_HA_TO_LB_ACRE,
  P2O5_TO_P,
  K2O_TO_K,
  BUSHEL_LB,
} from '@/lib/tools/constants';

const REVIEWED = '2026-07-12';
const n = (i: Record<string, number | string>, k: string): number => {
  const v = Number(i[k]);
  if (!Number.isFinite(v)) throw new Error(`Invalid input: ${k}`);
  return v;
};

/**
 * Versioned formula registry. Each formula carries its maths, provenance,
 * limitations, and reference test cases. Calculators resolve these by id; the
 * maths is never duplicated in UI components.
 */
export const FORMULAS: CalcFormula[] = [
  {
    formulaId: 'fertilizer-nutrient-from-grade',
    name: 'Nutrient mass from fertilizer mass and grade',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'nutrient = fertilizer_mass × (grade% ÷ 100)',
    inputs: [
      { key: 'mass', label: 'Fertilizer mass', unit: 'kg (or any mass unit)' },
      { key: 'grade', label: 'Nutrient grade', unit: '%' },
    ],
    output: { label: 'Nutrient mass', unit: 'same mass unit' },
    assumptions: [
      'Grade is the guaranteed analysis percentage of the nutrient (N, P₂O₅, or K₂O) by mass.',
    ],
    applicability:
      'Any solid or liquid fertilizer expressed as a percentage grade.',
    sourceIds: ['ifa', 'psu-extension'],
    limitations: [
      'Compound (N-P₂O₅-K₂O) grades express phosphorus as P₂O₅ and potassium as K₂O, not elemental P/K.',
    ],
    testCases: [
      {
        inputs: { mass: 100, grade: 46 },
        expect: 46,
        note: 'Urea 46-0-0: 100 kg → 46 kg N',
      },
      { inputs: { mass: 50, grade: 18 }, expect: 9 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'mass') * (n(i, 'grade') / 100),
  },
  {
    formulaId: 'fertilizer-mass-for-target',
    name: 'Fertilizer mass for a target nutrient amount',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'fertilizer_mass = target_nutrient ÷ (grade% ÷ 100)',
    inputs: [
      {
        key: 'target',
        label: 'Target nutrient',
        unit: 'kg (or any mass unit)',
      },
      { key: 'grade', label: 'Nutrient grade', unit: '%' },
    ],
    output: { label: 'Fertilizer mass required', unit: 'same mass unit' },
    assumptions: ['Grade is the guaranteed analysis percentage by mass.'],
    applicability: 'Any fertilizer expressed as a percentage grade.',
    sourceIds: ['ifa', 'psu-extension'],
    limitations: [
      'Does not account for nutrient losses, placement, or availability.',
    ],
    testCases: [
      { inputs: { target: 46, grade: 46 }, expect: 100 },
      { inputs: { target: 30, grade: 15 }, expect: 200 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const grade = n(i, 'grade');
      if (grade <= 0) throw new Error('Grade must be greater than 0');
      return n(i, 'target') / (grade / 100);
    },
  },
  {
    formulaId: 'p2o5-to-p',
    name: 'P₂O₅ to elemental P',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'P = P₂O₅ × 0.4364',
    inputs: [{ key: 'p2o5', label: 'P₂O₅', unit: 'kg or %' }],
    output: { label: 'Elemental P', unit: 'same unit' },
    assumptions: ['Uses standard atomic masses (P 30.974, O 15.999).'],
    applicability:
      'Converting oxide-notation phosphorus to elemental phosphorus.',
    sourceIds: ['ifa'],
    limitations: [
      'Oxide vs elemental notation differ by country and product label.',
    ],
    testCases: [{ inputs: { p2o5: 100 }, expect: 43.642, tolerance: 0.01 }],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'p2o5') * P2O5_TO_P,
  },
  {
    formulaId: 'k2o-to-k',
    name: 'K₂O to elemental K',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'K = K₂O × 0.8301',
    inputs: [{ key: 'k2o', label: 'K₂O', unit: 'kg or %' }],
    output: { label: 'Elemental K', unit: 'same unit' },
    assumptions: ['Uses standard atomic masses (K 39.098, O 15.999).'],
    applicability:
      'Converting oxide-notation potassium to elemental potassium.',
    sourceIds: ['ifa'],
    limitations: [
      'Oxide vs elemental notation differ by country and product label.',
    ],
    testCases: [{ inputs: { k2o: 100 }, expect: 83.014, tolerance: 0.01 }],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'k2o') * K2O_TO_K,
  },
  {
    formulaId: 'seed-rate-count',
    name: 'Seed rate (seeds per m²) from target population',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'seeds/m² = target_plants/m² ÷ (germination% ÷ 100 × establishment% ÷ 100)',
    inputs: [
      { key: 'plants', label: 'Target plant population', unit: 'plants/m²' },
      { key: 'germ', label: 'Germination', unit: '%' },
      { key: 'estab', label: 'Field establishment', unit: '%' },
    ],
    output: { label: 'Seeds to sow', unit: 'seeds/m²' },
    assumptions: [
      'Establishment percentage captures field losses beyond laboratory germination.',
    ],
    applicability: 'Field and row crops sown to a target plant population.',
    sourceIds: ['psu-extension', 'ahdb'],
    limitations: [
      'A field-adjusted estimate, not a guaranteed stand; local conditions dominate.',
    ],
    testCases: [
      {
        inputs: { plants: 30, germ: 90, estab: 85 },
        expect: 39.2157,
        tolerance: 0.001,
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const g = n(i, 'germ') / 100;
      const e = n(i, 'estab') / 100;
      if (g <= 0 || e <= 0)
        throw new Error('Germination and establishment must be > 0');
      return n(i, 'plants') / (g * e);
    },
  },
  {
    formulaId: 'seed-rate-mass',
    name: 'Seed rate (kg/ha) from seeds/m² and thousand-seed weight',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'seed_rate (kg/ha) = seeds/m² × thousand_seed_weight_g ÷ 100',
    inputs: [
      { key: 'seeds', label: 'Seeds to sow', unit: 'seeds/m²' },
      { key: 'tsw', label: 'Thousand-seed weight', unit: 'g' },
    ],
    output: { label: 'Seed rate', unit: 'kg/ha' },
    assumptions: ['Thousand-seed weight is the mass of 1000 seeds in grams.'],
    applicability:
      'Crops with a known thousand-seed (or thousand-grain) weight.',
    sourceIds: ['ahdb', 'psu-extension'],
    limitations: [
      'Thousand-seed weight varies by lot; use the tested value on the label.',
    ],
    testCases: [
      { inputs: { seeds: 40, tsw: 50 }, expect: 20 },
      { inputs: { seeds: 39.2157, tsw: 45 }, expect: 17.647, tolerance: 0.01 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (n(i, 'seeds') * n(i, 'tsw')) / 100,
  },
  {
    formulaId: 'plant-density',
    name: 'Plant density from spacing',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'plants/ha = 10000 ÷ (row_spacing_m × in_row_spacing_m)',
    inputs: [
      { key: 'row', label: 'Row spacing', unit: 'm' },
      { key: 'inrow', label: 'In-row spacing', unit: 'm' },
    ],
    output: { label: 'Plant density', unit: 'plants/ha' },
    assumptions: ['Uniform rectangular spacing with one plant per position.'],
    applicability: 'Row crops and orchards with regular geometric spacing.',
    sourceIds: ['cornell-cals', 'psu-extension'],
    limitations: [
      'Assumes perfect geometry; gaps, doubles, and headlands reduce actual density.',
    ],
    testCases: [
      {
        inputs: { row: 0.75, inrow: 0.15 },
        expect: 88888.889,
        tolerance: 0.01,
      },
      { inputs: { row: 0.5, inrow: 0.2 }, expect: 100000 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const r = n(i, 'row');
      const ir = n(i, 'inrow');
      if (r <= 0 || ir <= 0) throw new Error('Spacings must be > 0');
      return 10000 / (r * ir);
    },
  },
  {
    formulaId: 'irrigation-net-volume',
    name: 'Net irrigation volume',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'net_volume_m³ = depth_mm × area_ha × 10',
    inputs: [
      { key: 'depth', label: 'Target water depth', unit: 'mm' },
      { key: 'area', label: 'Area', unit: 'ha' },
    ],
    output: { label: 'Net irrigation volume', unit: 'm³' },
    assumptions: ['1 mm of water depth over 1 ha equals 10 m³.'],
    applicability: 'Applying a target net depth of water to a field area.',
    sourceIds: ['fao-land-water'],
    limitations: [
      'Net depth is the water required at the crop, before application losses.',
    ],
    testCases: [{ inputs: { depth: 25, area: 10 }, expect: 2500 }],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'depth') * n(i, 'area') * 10,
  },
  {
    formulaId: 'irrigation-gross-volume',
    name: 'Gross irrigation volume from efficiency',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'gross_volume = net_volume ÷ (application_efficiency% ÷ 100)',
    inputs: [
      { key: 'net', label: 'Net volume', unit: 'm³' },
      { key: 'eff', label: 'Application efficiency', unit: '%' },
    ],
    output: { label: 'Gross irrigation volume', unit: 'm³' },
    assumptions: [
      'Application efficiency accounts for conveyance and application losses.',
    ],
    applicability: 'Estimating water to supply given a system efficiency.',
    sourceIds: ['fao-land-water'],
    limitations: [
      'Efficiency is system- and management-specific; a planning estimate only.',
    ],
    testCases: [{ inputs: { net: 2500, eff: 80 }, expect: 3125 }],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const eff = n(i, 'eff') / 100;
      if (eff <= 0) throw new Error('Efficiency must be > 0');
      return n(i, 'net') / eff;
    },
  },
  {
    formulaId: 'gdd-average',
    name: 'Growing degree-days (average method)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'GDD = max(0, (T_max + T_min) ÷ 2 − T_base)',
    inputs: [
      { key: 'tmax', label: 'Daily maximum temperature', unit: '°C' },
      { key: 'tmin', label: 'Daily minimum temperature', unit: '°C' },
      { key: 'tbase', label: 'Base temperature', unit: '°C' },
    ],
    output: { label: 'Growing degree-days', unit: '°C·day' },
    assumptions: [
      'Simple average method; daily mean is the average of max and min.',
    ],
    applicability: 'Base-temperature GDD accumulation for a single day.',
    sourceIds: ['uc-ipm'],
    limitations: ['No upper threshold; base temperature is crop-specific.'],
    testCases: [
      { inputs: { tmax: 25, tmin: 15, tbase: 10 }, expect: 10 },
      {
        inputs: { tmax: 12, tmin: 4, tbase: 10 },
        expect: 0,
        note: 'Floored at zero',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) =>
      Math.max(0, (n(i, 'tmax') + n(i, 'tmin')) / 2 - n(i, 'tbase')),
  },
  {
    formulaId: 'gdd-upper-cutoff',
    name: 'Growing degree-days (with upper cutoff)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'GDD = max(0, (min(T_max, cap) + min(T_min, cap)) ÷ 2 − T_base)',
    inputs: [
      { key: 'tmax', label: 'Daily maximum temperature', unit: '°C' },
      { key: 'tmin', label: 'Daily minimum temperature', unit: '°C' },
      { key: 'tbase', label: 'Base temperature', unit: '°C' },
      { key: 'cap', label: 'Upper cutoff', unit: '°C' },
    ],
    output: { label: 'Growing degree-days', unit: '°C·day' },
    assumptions: [
      'Horizontal cutoff: temperatures above the cap are set to the cap.',
    ],
    applicability: 'Crops whose development plateaus above an upper threshold.',
    sourceIds: ['uc-ipm'],
    limitations: [
      'The horizontal-cutoff method is one of several; choose the model your crop uses.',
    ],
    testCases: [
      { inputs: { tmax: 35, tmin: 20, tbase: 10, cap: 30 }, expect: 15 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const cap = n(i, 'cap');
      const tmax = Math.min(n(i, 'tmax'), cap);
      const tmin = Math.min(n(i, 'tmin'), cap);
      return Math.max(0, (tmax + tmin) / 2 - n(i, 'tbase'));
    },
  },
  {
    formulaId: 'yield-tha-to-buacre',
    name: 'Yield: tonnes/ha to bushels/acre (commodity-specific)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'bu/acre = (t/ha × 1000 × 0.8921785) ÷ bushel_weight_lb',
    inputs: [
      { key: 'tha', label: 'Yield', unit: 't/ha' },
      { key: 'bushelLb', label: 'Bushel weight', unit: 'lb/bu' },
    ],
    output: { label: 'Yield', unit: 'bu/acre' },
    assumptions: [
      'Uses the commodity’s standard bushel test weight; different commodities differ.',
    ],
    applicability: 'Commodity grains with a defined standard bushel weight.',
    sourceIds: ['usda'],
    limitations: [
      'Standard bushel weights are legal/customary; actual lot test weight varies. Requires the correct commodity weight — never a single generic bushel.',
    ],
    testCases: [
      {
        inputs: { tha: 3, bushelLb: 60 },
        expect: 44.609,
        tolerance: 0.01,
        note: 'Wheat/soybean (60 lb)',
      },
      {
        inputs: { tha: 10, bushelLb: 56 },
        expect: 159.317,
        tolerance: 0.01,
        note: 'Maize (56 lb)',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const bl = n(i, 'bushelLb');
      if (bl <= 0) throw new Error('Bushel weight must be > 0');
      return (n(i, 'tha') * 1000 * KG_HA_TO_LB_ACRE) / bl;
    },
  },
];

export const FORMULA_BY_ID: ReadonlyMap<string, CalcFormula> = new Map(
  FORMULAS.map((f) => [f.formulaId, f]),
);

export function getFormula(id: string): CalcFormula | undefined {
  return FORMULA_BY_ID.get(id);
}

export { BUSHEL_LB };
