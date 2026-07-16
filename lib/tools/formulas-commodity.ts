import type { CalcFormula } from '@/types/tools';

/**
 * Phase 5E — commodity, post-harvest, storage, processing, and trade formulas.
 *
 * ## The rule that governs this file
 *
 * **Dry matter is conserved; water is not.** Almost every formula here is a
 * restatement of that one fact. Drying removes water and leaves the solids
 * alone, so the dry-matter mass computed from the initial state must equal the
 * dry-matter mass computed from the final state. Every mass-balance test case
 * below checks exactly that, because a moisture calculator that loses dry
 * matter is not approximately right — it is wrong.
 *
 * ## Moisture basis is explicit, always
 *
 * Wet-basis moisture is water ÷ total mass and cannot reach 100%. Dry-basis is
 * water ÷ dry matter and has no upper bound. A bare "20%" is meaningless. Every
 * moisture formula declares `acceptedBases`, and the validator rejects a
 * moisture formula that does not.
 *
 * ## One formula, one scalar
 *
 * Tools compose formulas; formulas never return objects. The water-removal tool
 * reports five numbers by calling five formulas, so the maths lives here and
 * only here — never in a component.
 */

/** Coerce an input to a finite number, or throw. */
function n(inputs: Record<string, number | string>, key: string): number {
  const raw = inputs[key];
  const v = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(v))
    throw new Error(`Input "${key}" must be a finite number (got ${raw})`);
  return v;
}

/** A wet-basis moisture percentage: 0 ≤ m < 100. 100% wet-basis is all water. */
function wb(inputs: Record<string, number | string>, key: string): number {
  const v = n(inputs, key);
  if (v < 0) throw new Error(`Moisture cannot be negative (got ${v})`);
  if (v >= 100)
    throw new Error(
      `Wet-basis moisture must be below 100% — at 100% the lot is entirely water and has no dry matter (got ${v})`,
    );
  return v;
}

/** A strictly positive value (mass, volume, density, quantity). */
function pos(inputs: Record<string, number | string>, key: string): number {
  const v = n(inputs, key);
  if (v <= 0) throw new Error(`"${key}" must be greater than zero (got ${v})`);
  return v;
}

/** A non-negative value. */
function nonNeg(inputs: Record<string, number | string>, key: string): number {
  const v = n(inputs, key);
  if (v < 0) throw new Error(`"${key}" cannot be negative (got ${v})`);
  return v;
}

/**
 * Geometry primitives, defined ONCE.
 *
 * `volume-cylinder`, `volume-cone`, and `volume-cylinder-with-cone` all need
 * these. Writing πr²h out in each would let the composite silently drift from
 * the components it claims to be the sum of — the same duplication the formula
 * registry exists to prevent, one level down. A test asserts the composite
 * equals the sum of its parts exactly.
 */
const cylinderVolume = (r: number, h: number): number => Math.PI * r ** 2 * h;
const coneVolume = (r: number, h: number): number => (Math.PI * r ** 2 * h) / 3;

const REVIEWED = '2026-07-16';

const NOT_A_MEASUREMENT =
  'Arithmetic on the numbers entered. It does not replace representative sampling or a calibrated, correctly-referenced moisture meter, and it cannot detect that an input was wrong.';

export const COMMODITY_FORMULAS: CalcFormula[] = [
  /* ------------------------------------------------------------------ *
   * Moisture basis
   * ------------------------------------------------------------------ */
  {
    formulaId: 'moisture-wb-to-db',
    name: 'Moisture: wet basis → dry basis',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'M_db = M_wb ÷ (100 − M_wb) × 100',
    inputs: [
      {
        key: 'mwb',
        label: 'Moisture content (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
        rangeNote:
          'Wet-basis moisture cannot reach 100%: at 100% the lot is entirely water and the dry-basis denominator is zero.',
      },
    ],
    output: { label: 'Moisture content (dry basis)', unit: '%' },
    assumptions: [
      'Water and dry matter are the only components; nothing else is present or is being tracked.',
    ],
    applicability:
      'Any commodity whose moisture is reported on a stated basis.',
    acceptedBases: ['wet-basis', 'dry-basis'],
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'A conversion between two denominators. It does not tell you which basis your own figure used — that must come from the method or contract that produced it.',
      'Dry basis has no upper bound: a lot with more water than solids exceeds 100% dry basis, which is arithmetically correct rather than an error.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mwb: 20 }, expect: 25, note: '20% wb = 25% db' },
      { inputs: { mwb: 50 }, expect: 100, note: 'equal water and solids' },
      { inputs: { mwb: 0 }, expect: 0, note: 'bone dry' },
      {
        inputs: { mwb: 14 },
        expect: 16.279069767441861,
        tolerance: 1e-9,
        note: 'cereal storage moisture',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const m = wb(i, 'mwb');
      return (m / (100 - m)) * 100;
    },
  },
  {
    formulaId: 'moisture-db-to-wb',
    name: 'Moisture: dry basis → wet basis',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'M_wb = M_db ÷ (100 + M_db) × 100',
    inputs: [
      {
        key: 'mdb',
        label: 'Moisture content (dry basis)',
        unit: '%',
        min: 0,
        rangeNote:
          'Dry-basis moisture has no upper bound — water may exceed dry matter.',
      },
    ],
    output: { label: 'Moisture content (wet basis)', unit: '%' },
    assumptions: [
      'Water and dry matter are the only components; nothing else is present or is being tracked.',
    ],
    applicability:
      'Any commodity whose moisture is reported on a stated basis.',
    acceptedBases: ['wet-basis', 'dry-basis'],
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'A conversion between two denominators, not a measurement.',
      'The result approaches but never reaches 100%, which is the definitional ceiling of wet basis.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mdb: 25 }, expect: 20, note: 'inverse of 20% wb' },
      { inputs: { mdb: 100 }, expect: 50 },
      { inputs: { mdb: 0 }, expect: 0 },
      {
        inputs: { mdb: 16.279069767441861 },
        expect: 14,
        tolerance: 1e-9,
        note: 'round-trips with moisture-wb-to-db',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const m = nonNeg(i, 'mdb');
      return (m / (100 + m)) * 100;
    },
  },
  {
    formulaId: 'dry-matter-fraction',
    name: 'Dry-matter content from wet-basis moisture',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'DM% = 100 − M_wb',
    inputs: [
      {
        key: 'mwb',
        label: 'Moisture content (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Dry matter', unit: '%' },
    assumptions: ['Dry matter and water together account for the whole mass.'],
    applicability: 'Any commodity reported on a wet basis.',
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'ahdb'],
    limitations: [
      'Dry matter here means everything that is not water — it says nothing about composition, quality, or what fraction is usable.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mwb: 14 }, expect: 86 },
      { inputs: { mwb: 0 }, expect: 100 },
      { inputs: { mwb: 65 }, expect: 35, note: 'high-moisture forage' },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => 100 - wb(i, 'mwb'),
  },
  {
    formulaId: 'dry-matter-mass',
    name: 'Dry-matter mass',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'DM = M × (100 − M_wb) ÷ 100',
    inputs: [
      { key: 'mass', label: 'Total mass', min: 0 },
      {
        key: 'mwb',
        label: 'Moisture content (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Dry-matter mass', unit: 'same as input mass' },
    assumptions: [
      'The mass entered is the whole lot, including its water.',
      'Dry matter is conserved by drying — this quantity is what every downstream drying result is anchored to.',
    ],
    applicability: 'Any commodity with a stated wet-basis moisture.',
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'Unit-agnostic: the output carries whatever mass unit the input used.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mass: 1000, mwb: 20 }, expect: 800 },
      { inputs: { mass: 1000, mwb: 0 }, expect: 1000 },
      { inputs: { mass: 25.4, mwb: 13.5 }, expect: 21.971, tolerance: 1e-9 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'mass') * (100 - wb(i, 'mwb'))) / 100,
  },
  {
    formulaId: 'water-mass-wb',
    name: 'Water mass from wet-basis moisture',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'W = M × M_wb ÷ 100',
    inputs: [
      { key: 'mass', label: 'Total mass', min: 0 },
      {
        key: 'mwb',
        label: 'Moisture content (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Water mass', unit: 'same as input mass' },
    assumptions: ['Wet basis: the percentage is denominated on total mass.'],
    applicability: 'Any commodity with a stated wet-basis moisture.',
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'The complement of dry-matter mass; the two always sum to the total mass entered.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mass: 1000, mwb: 20 }, expect: 200 },
      { inputs: { mass: 1000, mwb: 14 }, expect: 140 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'mass') * wb(i, 'mwb')) / 100,
  },

  /* ------------------------------------------------------------------ *
   * Water removal (drying)
   * ------------------------------------------------------------------ */
  {
    formulaId: 'drying-final-mass',
    name: 'Mass after drying to a target moisture',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'M₁ = M₀ × (100 − M₀_wb) ÷ (100 − M₁_wb)',
    inputs: [
      { key: 'mass', label: 'Initial total mass', min: 0 },
      {
        key: 'm0',
        label: 'Initial moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
      {
        key: 'm1',
        label: 'Target moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Final mass', unit: 'same as input mass' },
    assumptions: [
      'Dry matter is conserved: only water leaves. This is the whole derivation — M₀ × DM₀ = M₁ × DM₁.',
      'Drying only; the target moisture must not exceed the initial moisture.',
    ],
    applicability:
      'Commodities dried without a change of identity (grain, seed, dried produce).',
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'usda-ars', 'iastate-extension'],
    limitations: [
      'Ideal mass balance. Real drying also loses solids — as fines, dust, broken material, and handling loss — so the actual outturn is typically lower than this figure.',
      'Says nothing about how to dry: no temperature, airflow, time, or energy is implied or computed.',
    ],
    safetyContext:
      'Not a drying recommendation. It computes what the mass would be if only water were removed; it does not prescribe drying conditions, which depend on the commodity, equipment, and end use, and which the wrong choice of can damage a lot irreversibly.',
    testCases: [
      {
        inputs: { mass: 1000, m0: 20, m1: 14 },
        expect: 930.2325581395348,
        tolerance: 1e-9,
        note: '1000 kg at 20% → 14%: 800 kg DM ÷ 0.86',
      },
      {
        inputs: { mass: 1000, m0: 14, m1: 14 },
        expect: 1000,
        note: 'no drying, no change',
      },
      {
        inputs: { mass: 100, m0: 50, m1: 0 },
        expect: 50,
        note: 'dried to bone dry leaves exactly the dry matter',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const m0 = wb(i, 'm0');
      const m1 = wb(i, 'm1');
      if (m1 > m0)
        throw new Error(
          `Target moisture (${m1}%) is above the initial moisture (${m0}%) — that is wetting, not drying, and this formula does not model it`,
        );
      return (nonNeg(i, 'mass') * (100 - m0)) / (100 - m1);
    },
  },
  {
    formulaId: 'drying-water-removed',
    name: 'Water removed by drying to a target moisture',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'ΔW = M₀ × (M₀_wb − M₁_wb) ÷ (100 − M₁_wb)',
    inputs: [
      { key: 'mass', label: 'Initial total mass', min: 0 },
      {
        key: 'm0',
        label: 'Initial moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
      {
        key: 'm1',
        label: 'Target moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Water removed', unit: 'same as input mass' },
    assumptions: [
      'Dry matter is conserved; the difference between initial and final mass is water only.',
    ],
    applicability:
      'Commodities dried without a change of identity (grain, seed, dried produce).',
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'usda-ars', 'iastate-extension'],
    limitations: [
      'The water that must leave for the lot to reach the target. Not the mass the lot will actually lose, which also includes solids as fines and handling loss.',
      'No drying time or energy is implied: that requires an air-condition model this platform does not publish.',
    ],
    safetyContext:
      'Not a drying recommendation and not an energy estimate. It states a mass of water, not how to remove it.',
    testCases: [
      {
        inputs: { mass: 1000, m0: 20, m1: 14 },
        expect: 69.76744186046511,
        tolerance: 1e-9,
        note: 'complement of drying-final-mass: 1000 − 930.23',
      },
      { inputs: { mass: 1000, m0: 14, m1: 14 }, expect: 0 },
      { inputs: { mass: 100, m0: 50, m1: 0 }, expect: 50 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const m0 = wb(i, 'm0');
      const m1 = wb(i, 'm1');
      if (m1 > m0)
        throw new Error(
          `Target moisture (${m1}%) is above the initial moisture (${m0}%) — that is wetting, not drying, and this formula does not model it`,
        );
      // Evaluated as the DECLARED expression, M₀ × (M₀ − M₁) ÷ (100 − M₁),
      // rather than as `M₀ − finalMass`. The two are equal in real arithmetic
      // but not in IEEE-754: the subtraction form loses the low bits of the
      // difference and returned 69.767441860465169 for the reference case,
      // where the exact value 1000 × 6 ÷ 86 rounds to 69.767441860465112.
      // A formula whose implementation quietly computes something other than
      // the expression it publishes is not one a reader can check.
      return (nonNeg(i, 'mass') * (m0 - m1)) / (100 - m1);
    },
  },

  /* ------------------------------------------------------------------ *
   * Moisture shrink
   * ------------------------------------------------------------------ */
  {
    formulaId: 'moisture-shrink-pct',
    name: 'Mathematical moisture shrink',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'Shrink% = (M₀_wb − M₁_wb) ÷ (100 − M₁_wb) × 100',
    inputs: [
      {
        key: 'm0',
        label: 'Initial moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
      {
        key: 'm1',
        label: 'Target/market moisture (wet basis)',
        unit: '%',
        min: 0,
        max: 99.999,
      },
    ],
    output: { label: 'Mathematical moisture shrink', unit: '%' },
    assumptions: [
      'Dry matter is conserved. This is the mass fraction lost as water alone — it is drying-water-removed expressed as a percentage of the starting mass.',
    ],
    applicability: 'Grain and oilseed traded against a stated market moisture.',
    acceptedBases: ['wet-basis'],
    sourceIds: ['usda-ers', 'iastate-extension', 'umn-extension'],
    limitations: [
      'MATHEMATICAL shrink only. It is not handling shrink, not a commercial shrink factor, and not a total elevator deduction — those are commercial policies that vary by buyer, contract, and jurisdiction, and this platform does not publish them as universal.',
      'A buyer’s actual deduction commonly exceeds this figure, because it may add handling loss and a commercial factor on top. The difference is a contract term, not arithmetic.',
    ],
    safetyContext:
      'Not a settlement calculation and not a contract term. It computes the water fraction only; what a buyer actually deducts is set by that buyer’s contract.',
    testCases: [
      {
        inputs: { m0: 20, m1: 15.5 },
        expect: 5.325443786982249,
        tolerance: 1e-9,
        note: 'maize 20% → 15.5%: ≈1.183% shrink per moisture point, the widely-cited US maize factor',
      },
      {
        inputs: { m0: 15.5, m1: 15.5 },
        expect: 0,
        note: 'already at market moisture',
      },
      {
        inputs: { m0: 14, m1: 13 },
        expect: 1.1494252873563218,
        tolerance: 1e-9,
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const m0 = wb(i, 'm0');
      const m1 = wb(i, 'm1');
      if (m1 > m0)
        throw new Error(
          `Target moisture (${m1}%) is above the initial moisture (${m0}%) — shrink is defined for drying only`,
        );
      return ((m0 - m1) / (100 - m1)) * 100;
    },
  },

  /* ------------------------------------------------------------------ *
   * Bulk density
   * ------------------------------------------------------------------ */
  {
    formulaId: 'bulk-density-from-mass-volume',
    name: 'Bulk density from mass and volume',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'ρ_bulk = m ÷ V',
    inputs: [
      { key: 'mass', label: 'Mass', unit: 'kg', min: 0 },
      { key: 'volume', label: 'Volume occupied', unit: 'm³', min: 0.000001 },
    ],
    output: { label: 'Bulk density', unit: 'kg/m³' },
    assumptions: [
      'Bulk density includes the void space between particles — it is not particle density.',
    ],
    applicability: 'Bulk-handled commodities.',
    sourceIds: ['fao', 'iastate-extension'],
    limitations: [
      'Bulk density is not test weight. Test weight is a graded measurement made by a specified apparatus and procedure; this is a mass-per-volume ratio, and the two are not interchangeable.',
      'Bulk density varies with moisture, compaction, fill method, and fines — a single figure describes one lot in one state.',
    ],
    safetyContext: NOT_A_MEASUREMENT,
    testCases: [
      { inputs: { mass: 721, volume: 1 }, expect: 721 },
      { inputs: { mass: 1442, volume: 2 }, expect: 721 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'mass') / pos(i, 'volume'),
  },
  {
    formulaId: 'mass-from-volume-density',
    name: 'Mass from volume and bulk density',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'm = V × ρ_bulk',
    inputs: [
      { key: 'volume', label: 'Volume', unit: 'm³', min: 0 },
      { key: 'density', label: 'Bulk density', unit: 'kg/m³', min: 0.000001 },
    ],
    output: { label: 'Mass', unit: 'kg' },
    assumptions: [
      'The bulk density supplied describes the commodity in the state it will actually occupy the space.',
    ],
    applicability: 'Bulk-handled commodities.',
    sourceIds: ['fao', 'iastate-extension'],
    limitations: [
      'Only as good as the bulk density entered. This platform does not supply a default bulk density, because a generic figure applied to a real lot is a guess wearing a number.',
    ],
    safetyContext:
      'An arithmetic estimate, not a capacity rating. It says nothing about whether a structure can carry the resulting mass.',
    testCases: [
      { inputs: { volume: 100, density: 721 }, expect: 72100 },
      { inputs: { volume: 0, density: 721 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'volume') * pos(i, 'density'),
  },
  {
    formulaId: 'volume-from-mass-density',
    name: 'Volume from mass and bulk density',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V = m ÷ ρ_bulk',
    inputs: [
      { key: 'mass', label: 'Mass', unit: 'kg', min: 0 },
      { key: 'density', label: 'Bulk density', unit: 'kg/m³', min: 0.000001 },
    ],
    output: { label: 'Volume', unit: 'm³' },
    assumptions: ['Bulk density is uniform across the lot.'],
    applicability: 'Bulk-handled commodities.',
    sourceIds: ['fao', 'iastate-extension'],
    limitations: [
      'The volume the commodity occupies, not the space a store needs: headspace, aeration, angle of repose, and access are not included.',
    ],
    safetyContext: 'An arithmetic estimate, not a store-sizing recommendation.',
    testCases: [
      { inputs: { mass: 72100, density: 721 }, expect: 100 },
      { inputs: { mass: 0, density: 721 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'mass') / pos(i, 'density'),
  },

  /* ------------------------------------------------------------------ *
   * Geometry — volumes only, never capacity ratings
   * ------------------------------------------------------------------ */
  {
    formulaId: 'volume-rect-prism',
    name: 'Volume of a rectangular prism',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V = l × w × h',
    inputs: [
      { key: 'length', label: 'Length', unit: 'm', min: 0 },
      { key: 'width', label: 'Width', unit: 'm', min: 0 },
      { key: 'height', label: 'Fill height', unit: 'm', min: 0 },
    ],
    output: { label: 'Volume', unit: 'm³' },
    assumptions: [
      'A geometric volume of the space described. Whether a commodity can occupy all of it is a separate question.',
    ],
    applicability: 'Rectangular stores and containers.',
    sourceIds: ['nist', 'iastate-extension'],
    limitations: [
      'Geometry only — no structural, safe-working, or regulatory capacity is implied.',
    ],
    safetyContext:
      'Not an engineering capacity. Structural limits are set by the design of the actual structure and by qualified engineers, never by multiplying three dimensions.',
    testCases: [
      { inputs: { length: 10, width: 5, height: 3 }, expect: 150 },
      { inputs: { length: 10, width: 5, height: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) =>
      nonNeg(i, 'length') * nonNeg(i, 'width') * nonNeg(i, 'height'),
  },
  {
    formulaId: 'volume-cylinder',
    name: 'Volume of a vertical cylinder',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V = π × r² × h',
    inputs: [
      { key: 'radius', label: 'Internal radius', unit: 'm', min: 0 },
      { key: 'height', label: 'Fill height', unit: 'm', min: 0 },
    ],
    output: { label: 'Volume', unit: 'm³' },
    assumptions: [
      'A right circular cylinder filled level to the stated height.',
      'The radius is internal — an external measurement overstates the volume by the wall thickness.',
    ],
    applicability: 'Cylindrical bins, silos, and tanks.',
    sourceIds: ['nist', 'iastate-extension'],
    limitations: [
      'Excludes any cone, hopper, or peak above or below the cylinder — those are separate volumes.',
      'Geometry only — no structural, safe-working, or regulatory capacity is implied.',
    ],
    safetyContext:
      'Not an engineering capacity. Bin loading limits depend on the structure and on the commodity’s behaviour, and are an engineering determination.',
    testCases: [
      {
        inputs: { radius: 3, height: 10 },
        expect: 282.7433388230814,
        tolerance: 1e-9,
      },
      { inputs: { radius: 0, height: 10 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => cylinderVolume(nonNeg(i, 'radius'), nonNeg(i, 'height')),
  },
  {
    formulaId: 'volume-cone',
    name: 'Volume of a cone',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V = (1 ÷ 3) × π × r² × h',
    inputs: [
      { key: 'radius', label: 'Base radius', unit: 'm', min: 0 },
      { key: 'height', label: 'Cone height', unit: 'm', min: 0 },
    ],
    output: { label: 'Volume', unit: 'm³' },
    assumptions: [
      'A right circular cone. For a heaped pile, the height is the peak above the base, and the shape is only ever an approximation of a real pile.',
    ],
    applicability: 'Conical bin sections and, approximately, heaped piles.',
    sourceIds: ['nist', 'iastate-extension'],
    limitations: [
      'A real pile is not a cone: its slope is set by the angle of repose, which varies with commodity, moisture, and fines, and its base is rarely circular.',
      'Geometry only — no structural, safe-working, or regulatory capacity is implied.',
    ],
    safetyContext:
      'Not an engineering capacity, and not a basis for entering, walking on, or working around a pile — stored bulk material can engulf a person without warning.',
    testCases: [
      {
        inputs: { radius: 3, height: 3 },
        expect: 28.274333882308138,
        tolerance: 1e-9,
      },
      { inputs: { radius: 3, height: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => coneVolume(nonNeg(i, 'radius'), nonNeg(i, 'height')),
  },

  /* ------------------------------------------------------------------ *
   * Blending
   * ------------------------------------------------------------------ */
  {
    formulaId: 'blend-two-lot-weighted-average',
    name: 'Two-lot blend: weighted average attribute',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'x_blend = (q_A × x_A + q_B × x_B) ÷ (q_A + q_B)',
    inputs: [
      { key: 'qa', label: 'Lot A quantity', min: 0 },
      { key: 'xa', label: 'Lot A attribute value' },
      { key: 'qb', label: 'Lot B quantity', min: 0 },
      { key: 'xb', label: 'Lot B attribute value' },
    ],
    output: { label: 'Blend attribute value', unit: 'same as inputs' },
    assumptions: [
      'The attribute is weighted by TOTAL MASS and blends LINEARLY. This holds only for an attribute whose denominator is total mass — wet-basis moisture is the archetype, because both the water and the total mass simply add.',
      'Both lots use the same unit and the same basis.',
    ],
    applicability:
      'Two lots of one commodity, for a total-mass-denominated attribute on a common basis.',
    // WET BASIS ONLY, and the restriction is load-bearing rather than cautious.
    // Dry-basis moisture is water ÷ DRY MATTER, so a dry-basis blend is
    // DRY-MATTER-weighted: (W_A+W_B)/(D_A+D_B). Weighting it by total mass
    // over-weights the wetter lot and is wrong by tens of percentage points on
    // ordinary lots — not imprecise, wrong. The blending tool restates
    // dry-basis figures onto the wet basis (via moisture-db-to-wb), blends
    // here, and converts back, which is provably identical to dry-matter
    // weighting; see tests/phase5e.test.ts.
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'ahdb'],
    limitations: [
      'LINEAR ATTRIBUTES ONLY. Test weight, falling number, and most functional and rheological properties do NOT blend linearly, and a weighted average of them is simply wrong rather than approximate.',
      'TOTAL-MASS WEIGHTING ONLY. An attribute denominated on dry matter (dry-basis moisture, or protein and oil reported on a dry-matter basis) is weighted by DRY MATTER, not by total mass, and this formula must not be applied to one directly.',
      'Mixing bases silently corrupts the result: a wet-basis and a dry-basis figure cannot be averaged together.',
      'Arithmetic on a homogeneous mix. It assumes the blend is actually homogeneous, which is a physical operation, not a calculation.',
    ],
    safetyContext:
      'Not a grading, compliance, or contract determination. A blended average does not establish that a lot meets a grade, and blending to disguise a defect or evade a standard is a matter for the applicable standard and law, not for this tool.',
    testCases: [
      {
        inputs: { qa: 100, xa: 12, qb: 50, xb: 18 },
        expect: 14,
        note: '2:1 blend of 12% and 18%',
      },
      {
        inputs: { qa: 1, xa: 10, qb: 1, xb: 20 },
        expect: 15,
        note: 'equal masses give the midpoint',
      },
      {
        inputs: { qa: 100, xa: 12, qb: 0, xb: 18 },
        expect: 12,
        note: 'no lot B, no change',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const qa = nonNeg(i, 'qa');
      const qb = nonNeg(i, 'qb');
      const total = qa + qb;
      if (total <= 0)
        throw new Error('Total blend quantity is zero — nothing to average');
      return (qa * n(i, 'xa') + qb * n(i, 'xb')) / total;
    },
  },
  {
    formulaId: 'blend-required-lot-b',
    name: 'Two-lot blend: quantity of lot B to reach a target',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'q_B = q_A × (x_A − x_target) ÷ (x_target − x_B)',
    inputs: [
      { key: 'qa', label: 'Lot A quantity', min: 0 },
      { key: 'xa', label: 'Lot A attribute value' },
      { key: 'xb', label: 'Lot B attribute value' },
      { key: 'xt', label: 'Target attribute value' },
    ],
    output: { label: 'Lot B quantity required', unit: 'same as lot A' },
    assumptions: [
      'The attribute is weighted by TOTAL MASS and blends linearly; both lots share a unit and basis.',
      'The target lies between the two lot values — a blend cannot leave the range its inputs span.',
    ],
    applicability:
      'Two lots of one commodity, for a total-mass-denominated attribute on a common basis.',
    // Wet basis only — see blend-two-lot-weighted-average for why.
    acceptedBases: ['wet-basis'],
    sourceIds: ['fao', 'ahdb'],
    limitations: [
      'A target outside the range spanned by the two lots is unreachable by blending them, at any ratio. The formula rejects it rather than returning a negative quantity.',
      'LINEAR ATTRIBUTES ONLY. Test weight, falling number, and most functional and rheological properties do NOT blend linearly, so solving for a target value of one of them is wrong rather than approximate.',
      'Mixing bases silently corrupts the result: a wet-basis and a dry-basis figure cannot be blended together.',
    ],
    safetyContext:
      'Not a grading, compliance, or contract determination, and not a route to meeting a specification a lot does not meet.',
    testCases: [
      {
        inputs: { qa: 100, xa: 12, xb: 18, xt: 14 },
        expect: 50,
        note: 'inverse of the 2:1 weighted-average case',
      },
      {
        inputs: { qa: 100, xa: 18, xb: 12, xt: 14 },
        expect: 200,
        note: 'direction does not matter',
      },
      {
        inputs: { qa: 100, xa: 12, xb: 18, xt: 12 },
        expect: 0,
        note: 'already at target',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const xa = n(i, 'xa');
      const xb = n(i, 'xb');
      const xt = n(i, 'xt');
      const lo = Math.min(xa, xb);
      const hi = Math.max(xa, xb);
      if (xt < lo || xt > hi)
        throw new Error(
          `Target ${xt} is outside the range spanned by the two lots (${lo}–${hi}) — no blend of them can reach it`,
        );
      if (xt === xb && xa !== xb)
        throw new Error(
          `Target equals lot B — the blend would be lot B alone, with no finite quantity of A`,
        );
      if (xa === xb) return 0;
      // `+ 0` normalises negative zero. When the lot is already at target the
      // numerator is 0 and the denominator negative, so IEEE-754 yields -0,
      // which formats as the string "-0" — a nonsense quantity to show.
      return (nonNeg(i, 'qa') * (xa - xt)) / (xt - xb) + 0;
    },
  },

  /* ------------------------------------------------------------------ *
   * Processing recovery
   * ------------------------------------------------------------------ */
  {
    formulaId: 'recovery-pct',
    name: 'Processing recovery',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'Recovery% = m_output ÷ m_input × 100',
    inputs: [
      { key: 'input', label: 'Raw input mass', min: 0.000001 },
      { key: 'output', label: 'Recovered product mass', min: 0 },
    ],
    output: { label: 'Recovery', unit: '% of input mass' },
    assumptions: [
      'Both masses are on the same basis and in the same unit. Comparing an as-received input with a dried output measures drying as well as recovery.',
    ],
    applicability:
      'Processing steps that separate or transform a declared input.',
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'A ratio of the two masses entered — nothing more. It is not an expected or benchmark yield, and this platform publishes no expected recovery figures, because they depend on the commodity, the equipment, the settings, and the specification being met.',
      'Recovery is not yield: yield usually refers to production per unit area, which is a different quantity entirely.',
      'An output exceeding the input means mass was added (water, ingredients) or the masses are on different bases — the formula reports it rather than hiding it.',
    ],
    safetyContext:
      'Not a commercial yield expectation and not a performance standard.',
    testCases: [
      { inputs: { input: 1000, output: 750 }, expect: 75 },
      { inputs: { input: 1000, output: 0 }, expect: 0 },
      {
        inputs: { input: 1000, output: 1000 },
        expect: 100,
        note: 'nothing separated',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'output') / pos(i, 'input')) * 100,
  },
  {
    formulaId: 'mass-balance-unaccounted',
    name: 'Unaccounted mass balance',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'Unaccounted = m_input − (m_primary + m_coProduct + m_byProduct)',
    inputs: [
      { key: 'input', label: 'Raw input mass', min: 0 },
      { key: 'primary', label: 'Primary product mass', min: 0 },
      { key: 'coproduct', label: 'Co-product mass', min: 0 },
      { key: 'byproduct', label: 'By-product mass', min: 0 },
    ],
    output: { label: 'Unaccounted mass', unit: 'same as inputs' },
    assumptions: ['All masses are on the same basis and in the same unit.'],
    applicability: 'Processing steps with declared output streams.',
    sourceIds: ['fao', 'usda-ars'],
    limitations: [
      'Unaccounted mass is NOT waste. It is the part the entered figures do not explain, and it may be moisture lost, dust, fines, material still in the plant, sampling error, or a stream nobody weighed. Calling it waste would assert a fate the numbers do not show.',
      'A negative result means the outputs exceed the input — mass was added, or the bases differ. It is surfaced, not clamped to zero.',
    ],
    safetyContext:
      'A bookkeeping identity, not an environmental or efficiency claim.',
    testCases: [
      {
        inputs: { input: 1000, primary: 750, coproduct: 150, byproduct: 50 },
        expect: 50,
      },
      {
        inputs: { input: 1000, primary: 1000, coproduct: 0, byproduct: 0 },
        expect: 0,
      },
      {
        inputs: { input: 1000, primary: 900, coproduct: 200, byproduct: 0 },
        expect: -100,
        note: 'outputs exceed input — surfaced, not hidden',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) =>
      nonNeg(i, 'input') -
      (nonNeg(i, 'primary') + nonNeg(i, 'coproduct') + nonNeg(i, 'byproduct')),
  },

  /* ------------------------------------------------------------------ *
   * Post-harvest loss
   * ------------------------------------------------------------------ */
  {
    formulaId: 'physical-loss-pct',
    name: 'Physical (quantity) loss',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'Loss% = (Q₀ − Q₁) ÷ Q₀ × 100',
    inputs: [
      { key: 'q0', label: 'Initial quantity', min: 0.000001 },
      { key: 'q1', label: 'Final usable quantity', min: 0 },
    ],
    output: { label: 'Physical loss', unit: '% of initial quantity' },
    assumptions: [
      'Both quantities are the same commodity, in the same unit, on the same moisture basis.',
    ],
    applicability: 'A defined segment of a post-harvest chain.',
    sourceIds: ['fao', 'faostat'],
    limitations: [
      'PHYSICAL MASS ONLY. A lot that lost no mass but fell a grade has a quality loss and possibly a value loss with zero physical loss — this figure would read 0% and would be right about mass and silent about everything else.',
      'Comparing quantities at different moisture contents measures drying, not loss. Convert to a common basis first, or the number is meaningless.',
      'Describes a difference between two figures. It attributes no cause, and nothing here identifies why a quantity fell.',
    ],
    safetyContext:
      'Not a food-safety determination. Material may be unusable for reasons this arithmetic cannot see.',
    testCases: [
      { inputs: { q0: 1000, q1: 900 }, expect: 10 },
      { inputs: { q0: 1000, q1: 1000 }, expect: 0 },
      { inputs: { q0: 1000, q1: 0 }, expect: 100, note: 'total loss' },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const q0 = pos(i, 'q0');
      const q1 = nonNeg(i, 'q1');
      if (q1 > q0)
        throw new Error(
          `Final quantity (${q1}) exceeds the initial quantity (${q0}) — that is a gain, not a loss, and it usually means the two figures are on different bases`,
        );
      return ((q0 - q1) / q0) * 100;
    },
  },

  /* ------------------------------------------------------------------ *
   * Trade unit value
   * ------------------------------------------------------------------ */
  {
    formulaId: 'trade-unit-value',
    name: 'Trade unit value',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'Unit value = trade value ÷ quantity',
    inputs: [
      { key: 'value', label: 'Reported trade value', min: 0 },
      { key: 'quantity', label: 'Reported quantity', min: 0.000001 },
    ],
    output: { label: 'Unit value', unit: 'currency per quantity unit' },
    assumptions: [
      'The value and the quantity describe the SAME reported flow — same reporter, partner, item, year, and direction.',
    ],
    applicability:
      'Reported trade statistics where a value and a quantity are published for one flow.',
    sourceIds: ['faostat-trade', 'un-comtrade', 'unctad'],
    limitations: [
      'A UNIT VALUE IS NOT A PRICE. It is an arithmetic average of a reported aggregate, which may span many grades, origins, destinations, contract types, delivery terms, and transaction dates. No transaction need have occurred at this figure.',
      'Import and export unit values for the same flow differ systematically: reported import values commonly include freight and insurance while export values commonly do not, so the two are not comparable without knowing the valuation basis.',
      'Both value and quantity are revised by reporters, and mirror flows disagree. A unit value inherits every one of those problems and compounds them by dividing.',
      'An absent quantity is not zero. A flow with no reported quantity has no unit value at all, and treating the gap as zero would produce an infinite or nonsense figure.',
      'Nominal currency as reported, not deflated and not FX-converted.',
    ],
    safetyContext:
      'Not a market price, quotation, valuation, or basis for a transaction, a customs value, or an investment decision. Customs valuation in particular is a legal determination made by the competent authority under its own rules.',
    testCases: [
      {
        inputs: { value: 1000, quantity: 4 },
        expect: 250,
        note: '1000 thousand USD ÷ 4 thousand t = 250 USD/t',
      },
      { inputs: { value: 0, quantity: 4 }, expect: 0 },
      {
        inputs: { value: 3_500_000, quantity: 12_500 },
        expect: 280,
        note: 'unit-consistent division; the units are the caller’s responsibility',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'value') / pos(i, 'quantity'),
  },

  /* ------------------------------------------------------------------ *
   * Packaging
   * ------------------------------------------------------------------ */
  {
    formulaId: 'package-count',
    name: 'Packages required (rounded up)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'Packages = ceil(Q_total ÷ (capacity × fill% ÷ 100) × (1 + reserve% ÷ 100))',
    inputs: [
      { key: 'total', label: 'Total commodity quantity', min: 0 },
      {
        key: 'capacity',
        label: 'Nominal package capacity',
        min: 0.000001,
        rangeNote: 'A package of zero capacity holds nothing; it is rejected.',
      },
      {
        key: 'fill',
        label: 'Usable fill of nominal capacity',
        unit: '%',
        min: 0.000001,
        max: 100,
        rangeNote:
          'Usable capacity cannot exceed the nominal capacity of the package.',
      },
      { key: 'reserve', label: 'Reserve', unit: '%', min: 0 },
    ],
    output: { label: 'Packages required', unit: 'packages' },
    assumptions: [
      'Nominal capacity and usable capacity are different things: a package is rated for a nominal quantity and, in practice, holds a fraction of it.',
      'Packages are indivisible — a part-filled package is still a package, so the count always rounds UP.',
    ],
    applicability: 'Commodity packed into uniform packages.',
    sourceIds: ['fao', 'nist'],
    limitations: [
      'A count, not a packing plan. Nothing here establishes that the package is suitable, compatible, lawful, or safe for the commodity — that is a matter for the packaging specification, the applicable standard, and the regulator.',
      'Assumes uniform packages and a commodity that divides freely.',
    ],
    safetyContext:
      'Not a determination of packaging suitability, food-contact safety, or regulatory compliance.',
    testCases: [
      {
        inputs: { total: 1000, capacity: 50, fill: 100, reserve: 0 },
        expect: 20,
        note: 'exact fit',
      },
      {
        inputs: { total: 1010, capacity: 50, fill: 100, reserve: 0 },
        expect: 21,
        note: 'remainder forces one more package',
      },
      {
        inputs: { total: 1000, capacity: 50, fill: 80, reserve: 0 },
        expect: 25,
        note: '40 kg usable per 50 kg nominal',
      },
      {
        inputs: { total: 1000, capacity: 50, fill: 100, reserve: 10 },
        expect: 22,
        note: '10% reserve on 20 packages',
      },
      { inputs: { total: 0, capacity: 50, fill: 100, reserve: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const total = nonNeg(i, 'total');
      const capacity = pos(i, 'capacity');
      const fill = n(i, 'fill');
      if (fill <= 0 || fill > 100)
        throw new Error(
          `Fill must be above 0% and at most 100% (got ${fill}) — a package cannot usably hold more than its nominal capacity`,
        );
      const reserve = nonNeg(i, 'reserve');
      const usable = (capacity * fill) / 100;
      return Math.ceil(((total / usable) * (100 + reserve)) / 100);
    },
  },
  {
    formulaId: 'package-remainder',
    name: 'Quantity left in the final part-filled package',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'Remainder = Q_total − floor(Q_total ÷ usable) × usable,  usable = capacity × fill% ÷ 100',
    inputs: [
      { key: 'total', label: 'Total commodity quantity', min: 0 },
      { key: 'capacity', label: 'Nominal package capacity', min: 0.000001 },
      {
        key: 'fill',
        label: 'Usable fill of nominal capacity',
        unit: '%',
        min: 0.000001,
        max: 100,
      },
    ],
    output: {
      label: 'Remainder in the last package',
      unit: 'same as quantity',
    },
    assumptions: [
      'Full packages are filled to their usable capacity; whatever is left over goes in one further, part-filled package.',
    ],
    applicability: 'Commodity packed into uniform packages.',
    sourceIds: ['fao', 'nist'],
    limitations: [
      'Zero means the quantity divides exactly — not that no package is needed.',
    ],
    safetyContext:
      'Not a determination of packaging suitability or compliance.',
    testCases: [
      {
        inputs: { total: 1010, capacity: 50, fill: 100 },
        expect: 10,
        note: '20 full packages, 10 left over',
      },
      {
        inputs: { total: 1000, capacity: 50, fill: 100 },
        expect: 0,
        note: 'divides exactly',
      },
      { inputs: { total: 30, capacity: 50, fill: 100 }, expect: 30 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const total = nonNeg(i, 'total');
      const capacity = pos(i, 'capacity');
      const fill = n(i, 'fill');
      if (fill <= 0 || fill > 100)
        throw new Error(`Fill must be above 0% and at most 100% (got ${fill})`);
      const usable = (capacity * fill) / 100;
      return total - Math.floor(total / usable) * usable;
    },
  },

  /* ------------------------------------------------------------------ *
   * Conversions — exact factors, by definition
   * ------------------------------------------------------------------ */
  {
    formulaId: 'density-kgm3-to-lbft3',
    name: 'Bulk density: kg/m³ → lb/ft³',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression:
      'lb/ft³ = kg/m³ × (1 ÷ 0.45359237) × 0.3048³   [exact by definition]',
    inputs: [{ key: 'value', label: 'Bulk density', unit: 'kg/m³', min: 0 }],
    output: { label: 'Bulk density', unit: 'lb/ft³' },
    assumptions: [
      'The pound (0.45359237 kg) and the foot (0.3048 m) are exactly defined, so this factor is exact rather than measured.',
    ],
    applicability: 'Any bulk density.',
    sourceIds: ['nist'],
    limitations: [
      'A unit conversion. It does not make a bulk density into a test weight, which is a graded measurement by a specified apparatus.',
    ],
    testCases: [
      {
        inputs: { value: 1000 },
        expect: 62.42796057614461,
        tolerance: 1e-9,
        note: 'density of water ≈ 62.43 lb/ft³',
      },
      { inputs: { value: 0 }, expect: 0 },
      {
        inputs: { value: 721 },
        expect: 45.01055957540027,
        tolerance: 1e-9,
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'value') * 0.3048 ** 3) / 0.45359237,
  },
  {
    formulaId: 'mass-to-bushels',
    name: 'Mass → bushels (commodity standard weight)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'bu = (kg ÷ 0.45359237) ÷ standard_bushel_weight_lb',
    inputs: [
      { key: 'kg', label: 'Mass', unit: 'kg', min: 0 },
      {
        key: 'bushelLb',
        label: 'Standard bushel weight',
        unit: 'lb/bu',
        min: 0.000001,
        rangeNote:
          'Commodity-specific and jurisdiction-specific; there is no generic bushel.',
      },
    ],
    output: { label: 'Quantity', unit: 'bu' },
    assumptions: [
      'A bushel used as a mass unit is defined by a commodity-specific standard weight, not by volume. Maize and wheat bushels are different masses.',
      'The pound is exactly 0.45359237 kg.',
    ],
    applicability:
      'Grains and oilseeds with a published standard bushel weight in the jurisdiction concerned.',
    sourceIds: ['nist', 'usda-ams'],
    limitations: [
      'THERE IS NO GENERIC BUSHEL. Without a commodity and the jurisdiction whose standard weight applies, a bushel figure is meaningless — which is why the standard weight is a required input rather than a hidden default.',
      'Standard weights are set by the applicable authority or contract and can differ between jurisdictions and over time. Use the one your contract or market names.',
      'A standard bushel weight is a defined conversion constant, not the measured test weight of your lot. A lot below standard test weight still converts at the standard weight for volume-to-mass purposes; how a buyer treats the shortfall is a contract matter.',
    ],
    safetyContext:
      'Not a grading determination. Test weight is a graded measurement, and this is a unit conversion.',
    testCases: [
      {
        inputs: { kg: 1000, bushelLb: 56 },
        expect: 39.368261104442425,
        tolerance: 1e-9,
        note: '1 t of maize at the 56 lb/bu standard weight',
      },
      {
        inputs: { kg: 1000, bushelLb: 60 },
        expect: 36.74371036414627,
        tolerance: 1e-9,
        note: '1 t of wheat/soybeans at 60 lb/bu — a different bushel',
      },
      { inputs: { kg: 0, bushelLb: 56 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'kg') / 0.45359237 / pos(i, 'bushelLb'),
  },
  {
    formulaId: 'percent-to-decimal',
    name: 'Percentage → decimal fraction',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'fraction = percent ÷ 100',
    inputs: [{ key: 'value', label: 'Percentage', unit: '%' }],
    output: { label: 'Decimal fraction', unit: '' },
    assumptions: ['A percentage is a fraction expressed per hundred.'],
    applicability: 'Any percentage.',
    sourceIds: ['nist'],
    limitations: [
      'Definitional. It does not tell you what the percentage was denominated on — a wet-basis and a dry-basis percentage convert identically and still mean different things.',
    ],
    testCases: [
      { inputs: { value: 14 }, expect: 0.14 },
      { inputs: { value: 100 }, expect: 1 },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'value') / 100,
  },
  {
    formulaId: 'volume-cylinder-with-cone',
    name: 'Volume of a cylinder with a conical peak',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V = π × r² × h_cyl + (1 ÷ 3) × π × r² × h_cone',
    inputs: [
      { key: 'radius', label: 'Internal radius', unit: 'm', min: 0 },
      { key: 'cylHeight', label: 'Cylinder fill height', unit: 'm', min: 0 },
      {
        key: 'coneHeight',
        label: 'Peak height above the cylinder',
        unit: 'm',
        min: 0,
      },
    ],
    output: { label: 'Volume', unit: 'm³' },
    assumptions: [
      'A level-filled cylinder with a right circular cone of the same radius sitting on top.',
      'The peak is an idealisation: a real heap follows the commodity’s angle of repose, which varies with moisture and fines, so the cone height is at best an estimate of a shape that is never truly conical.',
    ],
    applicability: 'Cylindrical bins filled above the eave.',
    sourceIds: ['nist', 'iastate-extension'],
    limitations: [
      'The peak’s height is not a free choice: a heap cannot be steeper than the commodity’s angle of repose, and this formula does not know or check that.',
      'Geometry only — no structural, safe-working, or regulatory capacity is implied.',
    ],
    safetyContext:
      'Not an engineering capacity, and not a basis for entering, walking on, or working around stored bulk material, which can engulf a person without warning. Bin loading limits are an engineering determination.',
    testCases: [
      {
        inputs: { radius: 3, cylHeight: 10, coneHeight: 3 },
        expect: 311.01767270538954,
        tolerance: 1e-9,
        note: 'cylinder 282.743 + cone 28.274',
      },
      {
        inputs: { radius: 3, cylHeight: 10, coneHeight: 0 },
        expect: 282.7433388230814,
        tolerance: 1e-9,
        note: 'no peak = the cylinder alone',
      },
      { inputs: { radius: 0, cylHeight: 10, coneHeight: 3 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const r = nonNeg(i, 'radius');
      // Literally the sum of the two component formulas, by construction.
      return (
        cylinderVolume(r, nonNeg(i, 'cylHeight')) +
        coneVolume(r, nonNeg(i, 'coneHeight'))
      );
    },
  },
  {
    formulaId: 'volume-with-packing-factor',
    name: 'Effective volume after a packing/void factor',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'V_eff = V × f ÷ 100',
    inputs: [
      { key: 'volume', label: 'Geometric volume', unit: 'm³', min: 0 },
      {
        key: 'factor',
        label: 'Packing factor',
        unit: '%',
        min: 0.000001,
        max: 100,
        rangeNote:
          'A commodity cannot occupy more than the space available, so the factor cannot exceed 100%.',
      },
    ],
    output: { label: 'Effective volume', unit: 'm³' },
    assumptions: [
      'The factor is the user’s own figure for the fraction of the geometric volume the commodity actually occupies — headspace, aeration ducting, access, and settling all reduce it.',
    ],
    applicability: 'Any store whose usable volume is less than its geometry.',
    sourceIds: ['iastate-extension', 'fao'],
    limitations: [
      'No default packing factor is supplied and none is implied. The right figure depends on the store, the commodity, the fill method, and how the space is actually used, and a generic number applied to a real store is a guess wearing a percentage.',
      'This is not the void fraction between particles — that is already inside the bulk density. Applying both would double-count the voids.',
    ],
    safetyContext: 'Not an engineering capacity and not a safe working limit.',
    testCases: [
      {
        inputs: { volume: 100, factor: 100 },
        expect: 100,
        note: 'no reduction',
      },
      { inputs: { volume: 100, factor: 85 }, expect: 85 },
      { inputs: { volume: 0, factor: 85 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => {
      const f = n(i, 'factor');
      if (f <= 0 || f > 100)
        throw new Error(
          `Packing factor must be above 0% and at most 100% (got ${f}) — a commodity cannot occupy more space than exists`,
        );
      return (nonNeg(i, 'volume') * f) / 100;
    },
  },
  {
    formulaId: 'density-lbft3-to-kgm3',
    name: 'Bulk density: lb/ft³ → kg/m³',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'kg/m³ = lb/ft³ × 0.45359237 ÷ 0.3048³   [exact by definition]',
    inputs: [{ key: 'value', label: 'Bulk density', unit: 'lb/ft³', min: 0 }],
    output: { label: 'Bulk density', unit: 'kg/m³' },
    assumptions: [
      'The pound (0.45359237 kg) and the foot (0.3048 m) are exactly defined, so this factor is exact rather than measured.',
    ],
    applicability: 'Any bulk density.',
    sourceIds: ['nist'],
    limitations: [
      'A unit conversion. It does not make a bulk density into a test weight, which is a graded measurement by a specified apparatus.',
    ],
    testCases: [
      {
        inputs: { value: 62.42796057614461 },
        expect: 1000,
        tolerance: 1e-9,
        note: 'inverse of density-kgm3-to-lbft3',
      },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => (nonNeg(i, 'value') * 0.45359237) / 0.3048 ** 3,
  },
  {
    formulaId: 'bushels-to-mass',
    name: 'Bushels → mass (commodity standard weight)',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'kg = bu × standard_bushel_weight_lb × 0.45359237',
    inputs: [
      { key: 'bu', label: 'Quantity', unit: 'bu', min: 0 },
      {
        key: 'bushelLb',
        label: 'Standard bushel weight',
        unit: 'lb/bu',
        min: 0.000001,
        rangeNote:
          'Commodity-specific and jurisdiction-specific; there is no generic bushel.',
      },
    ],
    output: { label: 'Mass', unit: 'kg' },
    assumptions: [
      'A bushel used as a mass unit is defined by a commodity-specific standard weight, not by volume.',
      'The pound is exactly 0.45359237 kg.',
    ],
    applicability:
      'Grains and oilseeds with a published standard bushel weight in the jurisdiction concerned.',
    sourceIds: ['nist', 'usda-ams'],
    limitations: [
      'THERE IS NO GENERIC BUSHEL. Without a commodity and the jurisdiction whose standard weight applies, a bushel figure is meaningless — which is why the standard weight is a required input rather than a hidden default.',
      'A standard bushel weight is a defined conversion constant, not the measured test weight of your lot.',
    ],
    safetyContext:
      'Not a grading determination. Test weight is a graded measurement, and this is a unit conversion.',
    testCases: [
      {
        inputs: { bu: 39.368261104442425, bushelLb: 56 },
        expect: 1000,
        tolerance: 1e-9,
        note: 'inverse of mass-to-bushels at the maize standard weight',
      },
      { inputs: { bu: 0, bushelLb: 56 }, expect: 0 },
      {
        inputs: { bu: 1, bushelLb: 60 },
        expect: 27.2155422,
        tolerance: 1e-7,
        note: 'one 60 lb bushel',
      },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => nonNeg(i, 'bu') * pos(i, 'bushelLb') * 0.45359237,
  },
  {
    formulaId: 'decimal-to-percent',
    name: 'Decimal fraction → percentage',
    formulaVersion: '1.0.0',
    calcVersion: '1',
    expression: 'percent = fraction × 100',
    inputs: [{ key: 'value', label: 'Decimal fraction' }],
    output: { label: 'Percentage', unit: '%' },
    assumptions: ['A percentage is a fraction expressed per hundred.'],
    applicability: 'Any fraction.',
    sourceIds: ['nist'],
    limitations: [
      'Definitional. It does not tell you what the fraction was denominated on.',
    ],
    testCases: [
      { inputs: { value: 0.14 }, expect: 14, tolerance: 1e-12 },
      { inputs: { value: 1 }, expect: 100 },
      { inputs: { value: 0 }, expect: 0 },
    ],
    lastReviewedAt: REVIEWED,
    compute: (i) => n(i, 'value') * 100,
  },
];
