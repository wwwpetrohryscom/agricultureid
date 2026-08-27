import type { CalcFormula } from '@/types/tools';
import { AREA_TO_M2 } from '@/lib/tools/constants';

/**
 * Wave 14 — agronomic planning formulas.
 *
 * Four things these have in common, and the reason they are grouped here:
 *
 *  - every constant is exact BY DEFINITION (10,000 m² per hectare, 1,000 L per
 *    cubic metre, 3,600 seconds per hour), so none of them can drift or need
 *    re-sourcing;
 *  - every reference case below was computed by hand from the expression, never
 *    by running the implementation, which is the only way a test can disagree
 *    with the code it tests;
 *  - none of them converts a rate for a chemical product into an application
 *    instruction. The nutrient formulas convert between a product rate and the
 *    nutrient it supplies, arithmetic a reader supplies both sides of;
 *  - nothing has a silent generic fallback. Where a value is required it is
 *    required, and a zero or negative denominator throws rather than returning
 *    a plausible number.
 */

const REVIEWED = '2026-08-27';
const n = (i: Record<string, number | string>, k: string): number => {
  const v = Number(i[k]);
  if (!Number.isFinite(v)) throw new Error(`Invalid input: ${k}`);
  return v;
};

/** Litres per second to cubic metres per hour: 3600 s/h ÷ 1000 L/m³ = 3.6. */
export const LPS_TO_M3H = 3.6;

export const AGRONOMY_FORMULAS: CalcFormula[] = [
  /* ---- production from area and yield ----------------------------------- */
  {
    formulaId: 'production-from-area-yield',
    name: 'Production from area and yield',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'production_t = area_ha × yield_t_per_ha',
    inputs: [
      { key: 'area', label: 'Harvested area', unit: 'ha' },
      { key: 'yield', label: 'Yield', unit: 't/ha' },
    ],
    output: { label: 'Production', unit: 't' },
    assumptions: [
      'Yield is expressed on the same area basis as the area entered — harvested area, not planted area.',
    ],
    applicability:
      'Arithmetic identity between a harvested area, a yield and a production total.',
    sourceIds: ['faostat'],
    limitations: [
      'Multiplying an average yield by an area gives an estimate, not a measured harvest. National statistics normally derive yield FROM production and area, not the reverse.',
      'Planted area is not harvested area. Using planted area overstates production by exactly the share of the crop that was never harvested.',
    ],
    testCases: [
      // 100 × 8.5 = 850
      { inputs: { area: 100, yield: 8.5 }, expect: 850 },
      // 12.5 × 3.2 = 40
      { inputs: { area: 12.5, yield: 3.2 }, expect: 40 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const area = n(i, 'area');
      const y = n(i, 'yield');
      if (area < 0 || y < 0) throw new Error('Area and yield must be ≥ 0');
      return area * y;
    },
  },
  {
    formulaId: 'yield-from-production-area',
    name: 'Yield from production and area',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'yield_t_per_ha = production_t ÷ area_ha',
    inputs: [
      { key: 'production', label: 'Production', unit: 't' },
      { key: 'area', label: 'Harvested area', unit: 'ha' },
    ],
    output: { label: 'Yield', unit: 't/ha' },
    assumptions: ['Production and area describe the same crop and season.'],
    applicability: 'Deriving an implied average yield from two known totals.',
    sourceIds: ['faostat'],
    limitations: [
      'An implied yield is an average over the whole area, and hides every difference between fields within it.',
    ],
    testCases: [
      // 850 ÷ 100 = 8.5
      { inputs: { production: 850, area: 100 }, expect: 8.5 },
      // 40 ÷ 12.5 = 3.2
      { inputs: { production: 40, area: 12.5 }, expect: 3.2 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const p = n(i, 'production');
      const area = n(i, 'area');
      if (area <= 0) throw new Error('Area must be > 0');
      return p / area;
    },
  },
  {
    formulaId: 'area-from-production-yield',
    name: 'Area from production and yield',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'area_ha = production_t ÷ yield_t_per_ha',
    inputs: [
      { key: 'production', label: 'Production', unit: 't' },
      { key: 'yield', label: 'Yield', unit: 't/ha' },
    ],
    output: { label: 'Harvested area', unit: 'ha' },
    assumptions: ['The yield entered is achieved across the whole area.'],
    applicability:
      'Sizing the area implied by a production target and a yield.',
    sourceIds: ['faostat'],
    limitations: [
      'An area derived from a target is a planning figure, not a measurement, and assumes a yield that has not happened yet.',
    ],
    testCases: [
      // 850 ÷ 8.5 = 100
      { inputs: { production: 850, yield: 8.5 }, expect: 100 },
      // 40 ÷ 3.2 = 12.5
      { inputs: { production: 40, yield: 3.2 }, expect: 12.5 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const p = n(i, 'production');
      const y = n(i, 'yield');
      if (y <= 0) throw new Error('Yield must be > 0');
      return p / y;
    },
  },

  /* ---- irrigation flow and time ----------------------------------------- */
  {
    formulaId: 'flow-lps-to-m3h',
    name: 'Flow rate, litres per second to cubic metres per hour',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'm³/h = L/s × 3.6   [3600 s per hour ÷ 1000 L per m³, exact by definition]',
    inputs: [{ key: 'flow', label: 'Flow rate', unit: 'L/s' }],
    output: { label: 'Flow rate', unit: 'm³/h' },
    assumptions: ['Flow is steady over the period considered.'],
    applicability: 'Any steady volumetric flow.',
    sourceIds: ['nist'],
    limitations: [
      'A pump’s rated flow is not its delivered flow; head, wear and filtration all reduce it.',
    ],
    testCases: [
      // 20 × 3.6 = 72
      { inputs: { flow: 20 }, expect: 72 },
      // 1 × 3.6 = 3.6
      { inputs: { flow: 1 }, expect: 3.6 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const f = n(i, 'flow');
      if (f < 0) throw new Error('Flow must be ≥ 0');
      return f * LPS_TO_M3H;
    },
  },
  {
    formulaId: 'irrigation-time-from-volume-flow',
    name: 'Irrigation time from volume and flow rate',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'hours = volume_m³ ÷ (flow_L_per_s × 3.6)',
    inputs: [
      { key: 'volume', label: 'Volume to apply', unit: 'm³' },
      { key: 'flow', label: 'Flow rate', unit: 'L/s' },
    ],
    output: { label: 'Time required', unit: 'h' },
    assumptions: [
      'Flow is steady for the whole period and the whole volume passes through the measured point.',
    ],
    applicability:
      'Set duration for a known volume at a known steady delivery rate.',
    sourceIds: ['nist', 'fao-land-water'],
    limitations: [
      'This is the time to deliver a volume, not the time to wet a soil profile. Infiltration rate, not flow rate, decides whether water enters the soil or runs off.',
    ],
    testCases: [
      // 20 L/s = 72 m³/h; 500 ÷ 72 = 6.9444444…
      { inputs: { volume: 500, flow: 20 }, expect: 6.944444, tolerance: 1e-5 },
      // 10 L/s = 36 m³/h; 360 ÷ 36 = 10
      { inputs: { volume: 360, flow: 10 }, expect: 10 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const v = n(i, 'volume');
      const f = n(i, 'flow');
      if (f <= 0) throw new Error('Flow must be > 0');
      if (v < 0) throw new Error('Volume must be ≥ 0');
      return v / (f * LPS_TO_M3H);
    },
  },
  {
    formulaId: 'irrigation-volume-from-flow-time',
    name: 'Irrigation volume from flow rate and time',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'volume_m³ = flow_L_per_s × 3.6 × hours',
    inputs: [
      { key: 'flow', label: 'Flow rate', unit: 'L/s' },
      { key: 'hours', label: 'Run time', unit: 'h' },
    ],
    output: { label: 'Volume delivered', unit: 'm³' },
    assumptions: ['Flow is steady for the whole period.'],
    applicability: 'Volume delivered by a set run at a known rate.',
    sourceIds: ['nist', 'fao-land-water'],
    limitations: [
      'Volume delivered is not volume stored in the root zone. Evaporation, drift, runoff and drainage all sit between the two.',
    ],
    testCases: [
      // 20 × 3.6 × 6 = 432
      { inputs: { flow: 20, hours: 6 }, expect: 432 },
      // 5 × 3.6 × 2.5 = 45
      { inputs: { flow: 5, hours: 2.5 }, expect: 45 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const f = n(i, 'flow');
      const h = n(i, 'hours');
      if (f < 0 || h < 0) throw new Error('Flow and time must be ≥ 0');
      return f * LPS_TO_M3H * h;
    },
  },
  {
    formulaId: 'irrigation-flow-from-volume-time',
    name: 'Flow rate needed for a volume in a set time',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'flow_L_per_s = volume_m³ ÷ (hours × 3.6)',
    inputs: [
      { key: 'volume', label: 'Volume to apply', unit: 'm³' },
      { key: 'hours', label: 'Available time', unit: 'h' },
    ],
    output: { label: 'Flow rate required', unit: 'L/s' },
    assumptions: ['The volume is delivered evenly across the available time.'],
    applicability: 'Sizing a delivery rate against a fixed irrigation window.',
    sourceIds: ['nist', 'fao-land-water'],
    limitations: [
      'A required flow rate is not a pump specification. Pipe diameter, head and the system’s design flow decide what is achievable.',
    ],
    testCases: [
      // 432 ÷ (6 × 3.6) = 432 ÷ 21.6 = 20
      { inputs: { volume: 432, hours: 6 }, expect: 20 },
      // 45 ÷ (2.5 × 3.6) = 45 ÷ 9 = 5
      { inputs: { volume: 45, hours: 2.5 }, expect: 5 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const v = n(i, 'volume');
      const h = n(i, 'hours');
      if (h <= 0) throw new Error('Time must be > 0');
      if (v < 0) throw new Error('Volume must be ≥ 0');
      return v / (h * LPS_TO_M3H);
    },
  },

  /* ---- row geometry ------------------------------------------------------ */
  {
    formulaId: 'in-row-spacing-for-density',
    name: 'In-row spacing for a target plant density',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'in_row_m = 10000 ÷ (plants_per_ha × row_spacing_m)',
    inputs: [
      { key: 'plants', label: 'Target plant density', unit: 'plants/ha' },
      { key: 'row', label: 'Row spacing', unit: 'm' },
    ],
    output: { label: 'In-row spacing', unit: 'm' },
    assumptions: [
      'Uniform rectangular spacing with one established plant per position.',
    ],
    applicability: 'Row crops and orchards set out on regular geometry.',
    sourceIds: ['psu-extension', 'cornell-cals'],
    limitations: [
      'This is the spacing between established PLANTS, not between seeds. Seed spacing must be closer by whatever germination and establishment losses are expected.',
    ],
    testCases: [
      // 10000 ÷ (75000 × 0.75) = 10000 ÷ 56250 = 0.177777…
      {
        inputs: { plants: 75000, row: 0.75 },
        expect: 0.177778,
        tolerance: 1e-5,
      },
      // 10000 ÷ (100000 × 0.5) = 10000 ÷ 50000 = 0.2
      { inputs: { plants: 100000, row: 0.5 }, expect: 0.2 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const p = n(i, 'plants');
      const r = n(i, 'row');
      if (p <= 0 || r <= 0)
        throw new Error('Density and row spacing must be > 0');
      return AREA_TO_M2.hectare / (p * r);
    },
  },
  {
    formulaId: 'plants-per-row-metre',
    name: 'Plants per metre of row for a target density',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'plants_per_row_m = plants_per_ha × row_spacing_m ÷ 10000',
    inputs: [
      { key: 'plants', label: 'Target plant density', unit: 'plants/ha' },
      { key: 'row', label: 'Row spacing', unit: 'm' },
    ],
    output: { label: 'Plants per metre of row', unit: 'plants/m' },
    assumptions: ['Rows are evenly spaced across the whole area.'],
    applicability:
      'Checking a drill or planter setting against a target stand.',
    sourceIds: ['psu-extension', 'iastate-extension'],
    limitations: [
      'A planter is set in seeds per metre, not plants per metre. The two differ by germination and establishment.',
    ],
    testCases: [
      // 75000 × 0.75 ÷ 10000 = 5.625
      { inputs: { plants: 75000, row: 0.75 }, expect: 5.625 },
      // 100000 × 0.5 ÷ 10000 = 5
      { inputs: { plants: 100000, row: 0.5 }, expect: 5 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const p = n(i, 'plants');
      const r = n(i, 'row');
      if (p <= 0 || r <= 0)
        throw new Error('Density and row spacing must be > 0');
      return (p * r) / AREA_TO_M2.hectare;
    },
  },
  {
    formulaId: 'row-length-per-hectare',
    name: 'Row length per hectare',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'row_length_m_per_ha = 10000 ÷ row_spacing_m',
    inputs: [{ key: 'row', label: 'Row spacing', unit: 'm' }],
    output: { label: 'Row length per hectare', unit: 'm/ha' },
    assumptions: ['Rows run the full length of a rectangular field.'],
    applicability: 'Estimating drill run length or in-row product requirement.',
    sourceIds: ['psu-extension'],
    limitations: [
      'Headlands, point rows and irregular field shapes all reduce the usable row length below this figure.',
    ],
    testCases: [
      // 10000 ÷ 0.75 = 13333.333…
      { inputs: { row: 0.75 }, expect: 13333.333333, tolerance: 1e-5 },
      // 10000 ÷ 0.5 = 20000
      { inputs: { row: 0.5 }, expect: 20000 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const r = n(i, 'row');
      if (r <= 0) throw new Error('Row spacing must be > 0');
      return AREA_TO_M2.hectare / r;
    },
  },

  /* ---- nutrient rate ----------------------------------------------------- */
  {
    formulaId: 'nutrient-rate-from-product-rate',
    name: 'Nutrient rate from product rate and grade',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'nutrient_kg_per_ha = product_kg_per_ha × grade% ÷ 100',
    inputs: [
      { key: 'product', label: 'Product rate', unit: 'kg/ha' },
      { key: 'grade', label: 'Nutrient grade', unit: '%' },
    ],
    output: { label: 'Nutrient supplied', unit: 'kg/ha' },
    assumptions: [
      'The grade is the declared percentage of that nutrient in the product as sold.',
    ],
    applicability:
      'Converting between a rate of product and the nutrient it supplies, where the reader supplies both the rate and the grade.',
    sourceIds: ['ifa', 'psu-extension'],
    limitations: [
      'This is arithmetic on a rate the reader provides. It is not a recommendation, and it does not say what rate is appropriate — that depends on soil test, crop, season and local regulation.',
      'Grades for phosphorus and potassium are conventionally expressed as P₂O₅ and K₂O, not as elemental P and K. Converting between the oxide and the element is a separate step.',
    ],
    testCases: [
      // 200 × 46 ÷ 100 = 92
      { inputs: { product: 200, grade: 46 }, expect: 92 },
      // 350 × 15 ÷ 100 = 52.5
      { inputs: { product: 350, grade: 15 }, expect: 52.5 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const p = n(i, 'product');
      const g = n(i, 'grade');
      if (p < 0) throw new Error('Product rate must be ≥ 0');
      if (g < 0 || g > 100) throw new Error('Grade must be between 0 and 100');
      return (p * g) / 100;
    },
  },
  {
    formulaId: 'product-rate-for-nutrient-rate',
    name: 'Product rate for a nutrient rate',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'product_kg_per_ha = nutrient_kg_per_ha ÷ (grade% ÷ 100)',
    inputs: [
      { key: 'nutrient', label: 'Nutrient rate', unit: 'kg/ha' },
      { key: 'grade', label: 'Nutrient grade', unit: '%' },
    ],
    output: { label: 'Product rate', unit: 'kg/ha' },
    assumptions: [
      'The grade is the declared percentage of that nutrient in the product as sold.',
    ],
    applicability:
      'Converting a nutrient rate the reader has decided on into the product rate that supplies it.',
    sourceIds: ['ifa', 'psu-extension'],
    limitations: [
      'The nutrient rate must come from a soil test, a plan or a regulation. This converts it; it does not choose it.',
      'A product rate derived this way ignores every other nutrient in a compound fertiliser.',
    ],
    testCases: [
      // 92 ÷ 0.46 = 200
      { inputs: { nutrient: 92, grade: 46 }, expect: 200 },
      // 52.5 ÷ 0.15 = 350
      { inputs: { nutrient: 52.5, grade: 15 }, expect: 350 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const nutrient = n(i, 'nutrient');
      const g = n(i, 'grade');
      if (nutrient < 0) throw new Error('Nutrient rate must be ≥ 0');
      if (g <= 0 || g > 100)
        throw new Error('Grade must be greater than 0 and at most 100');
      return nutrient / (g / 100);
    },
  },
];
