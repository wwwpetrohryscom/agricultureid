import type { ToolConfig, ToolField, ToolResult } from '@/types/tools';
import { getFormula } from '@/lib/tools/formulas';
import {
  AREA_TO_M2,
  MASS_TO_KG,
  VOLUME_TO_L,
  BUSHEL_LB,
  KG_HA_TO_LB_ACRE,
  convertArea,
  convertMass,
  convertVolume,
  cToF,
  fToC,
  toSigDigits,
} from '@/lib/tools/constants';

const num = (v: Record<string, string>, k: string): number => {
  const s = v[k];
  // Empty / blank is NOT zero — it is "no input", which must fail validation.
  if (s == null || String(s).trim() === '') return NaN;
  return Number(s);
};
const finite = (...xs: number[]) => xs.every((x) => Number.isFinite(x));
const fmt = (v: number, digits = 4) =>
  toSigDigits(v, digits).toLocaleString('en', { maximumFractionDigits: 6 });

/**
 * Compute helper: run a registered formula by id.
 *
 * The output is checked for finiteness, not just the inputs. Every formula
 * rejects a non-finite INPUT, but finite inputs can still overflow to Infinity
 * (1e308 × 1e308), and the result would then format as the string "∞" and be
 * presented as an answer. A crafted shareable URL can reach that on any field
 * that declares no upper bound, so the guard belongs here — at the one place
 * every tool's arithmetic passes through — rather than in each of 18 tools.
 */
function run(id: string, inputs: Record<string, number | string>): number {
  const f = getFormula(id);
  if (!f) throw new Error(`Unknown formula ${id}`);
  const out = f.compute(inputs);
  if (!Number.isFinite(out))
    throw new Error(
      `${f.name} produced a value that is not a finite number — the inputs are outside the range this formula can represent`,
    );
  return out;
}

/* -------------------------------------------------------------------------- */

const fertilizer: ToolConfig = {
  slug: 'fertilizer-nutrient-calculator',
  title: 'Fertilizer nutrient calculator',
  category: 'nutrition',
  purpose:
    'Convert between fertilizer mass and nutrient amount from a percentage grade, and between oxide (P₂O₅/K₂O) and elemental (P/K) notation.',
  formulaIds: [
    'fertilizer-nutrient-from-grade',
    'fertilizer-mass-for-target',
    'p2o5-to-p',
    'k2o-to-k',
  ],
  fields: [
    {
      key: 'mode',
      label: 'Calculation',
      type: 'select',
      default: 'nutrient',
      options: [
        { value: 'nutrient', label: 'Nutrient in a given fertilizer mass' },
        { value: 'mass', label: 'Fertilizer mass for a target nutrient' },
        { value: 'oxide', label: 'Oxide → elemental (P₂O₅→P, K₂O→K)' },
      ],
    },
    {
      key: 'mass',
      label: 'Fertilizer mass',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.1,
      required: true,
      showIf: (v) => v.mode === 'nutrient',
    },
    {
      key: 'target',
      label: 'Target nutrient',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.1,
      required: true,
      showIf: (v) => v.mode === 'mass',
    },
    {
      key: 'grade',
      label: 'Nutrient grade',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 0.1,
      required: true,
      help: 'The guaranteed-analysis % of N, P₂O₅, or K₂O.',
      showIf: (v) => v.mode !== 'oxide',
    },
    {
      key: 'oxide',
      label: 'Oxide',
      type: 'select',
      default: 'p2o5',
      options: [
        { value: 'p2o5', label: 'P₂O₅ → P' },
        { value: 'k2o', label: 'K₂O → K' },
      ],
      showIf: (v) => v.mode === 'oxide',
    },
    {
      key: 'oxideValue',
      label: 'Oxide amount',
      type: 'number',
      unit: 'kg or %',
      min: 0,
      step: 0.1,
      required: true,
      showIf: (v) => v.mode === 'oxide',
    },
  ],
  limitations: [
    'Compound grades express P as P₂O₅ and K as K₂O. This is an educational conversion, not a fertilizer recommendation.',
  ],
  compute: (v): ToolResult => {
    if (v.mode === 'nutrient') {
      const mass = num(v, 'mass');
      const grade = num(v, 'grade');
      if (!finite(mass, grade)) return err();
      const out = run('fertilizer-nutrient-from-grade', { mass, grade });
      return {
        outputs: [{ label: 'Nutrient supplied', value: fmt(out), unit: 'kg' }],
        formulaIds: ['fertilizer-nutrient-from-grade'],
      };
    }
    if (v.mode === 'mass') {
      const target = num(v, 'target');
      const grade = num(v, 'grade');
      if (!finite(target, grade)) return err();
      if (grade <= 0) return err('Grade must be greater than 0.');
      const out = run('fertilizer-mass-for-target', { target, grade });
      return {
        outputs: [
          { label: 'Fertilizer required', value: fmt(out), unit: 'kg' },
        ],
        formulaIds: ['fertilizer-mass-for-target'],
      };
    }
    // oxide → elemental
    const val = num(v, 'oxideValue');
    if (!finite(val)) return err();
    const id = v.oxide === 'k2o' ? 'k2o-to-k' : 'p2o5-to-p';
    const out = run(id, v.oxide === 'k2o' ? { k2o: val } : { p2o5: val });
    return {
      outputs: [
        {
          label: v.oxide === 'k2o' ? 'Elemental K' : 'Elemental P',
          value: fmt(out),
          unit: 'kg or %',
        },
      ],
      formulaIds: [id],
    };
  },
};

const seedRate: ToolConfig = {
  slug: 'seed-rate-calculator',
  title: 'Seed-rate calculator',
  category: 'planting',
  purpose:
    'Estimate seeds to sow from a target plant population, germination, and field establishment — and a seed rate in kg/ha if a thousand-seed weight is given.',
  formulaIds: ['seed-rate-count', 'seed-rate-mass'],
  fields: [
    {
      key: 'plants',
      label: 'Target plant population',
      type: 'number',
      unit: 'plants/m²',
      min: 0,
      step: 1,
      required: true,
    },
    {
      key: 'germ',
      label: 'Germination',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 1,
      required: true,
      default: '90',
    },
    {
      key: 'estab',
      label: 'Field establishment',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 1,
      required: true,
      default: '85',
    },
    {
      key: 'tsw',
      label: 'Thousand-seed weight (optional)',
      type: 'number',
      unit: 'g',
      min: 0,
      step: 0.1,
      help: 'Leave blank to get seeds/m² only.',
    },
  ],
  limitations: [
    'The field-adjusted seed rate is an estimate, not a guaranteed stand. Local seedbed, moisture, pests, and sowing quality dominate the outcome — not a universal figure.',
  ],
  compute: (v): ToolResult => {
    const plants = num(v, 'plants');
    const germ = num(v, 'germ');
    const estab = num(v, 'estab');
    if (!finite(plants, germ, estab)) return err();
    if (germ <= 0 || estab <= 0)
      return err('Germination and establishment must be > 0.');
    const seeds = run('seed-rate-count', { plants, germ, estab });
    const outputs = [
      {
        label: 'Theoretical (at 100% establishment)',
        value: fmt(plants),
        unit: 'seeds/m²',
      },
      {
        label: 'Field-adjusted seeds to sow',
        value: fmt(seeds),
        unit: 'seeds/m²',
      },
    ];
    const formulaIds = ['seed-rate-count'];
    if (v.tsw && v.tsw.trim() !== '') {
      const tsw = num(v, 'tsw');
      if (finite(tsw) && tsw > 0) {
        const kgha = run('seed-rate-mass', { seeds, tsw });
        outputs.push({ label: 'Seed rate', value: fmt(kgha), unit: 'kg/ha' });
        formulaIds.push('seed-rate-mass');
      }
    }
    return { outputs, formulaIds };
  },
};

const plantDensity: ToolConfig = {
  slug: 'plant-density-calculator',
  title: 'Plant-density calculator',
  category: 'planting',
  purpose:
    'Plants per unit area from row and in-row spacing (and per m²/acre).',
  formulaIds: ['plant-density'],
  fields: [
    {
      key: 'row',
      label: 'Row spacing',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
    },
    {
      key: 'inrow',
      label: 'In-row spacing',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
    },
  ],
  limitations: [
    'Assumes perfect rectangular geometry; real stands have gaps, doubles, and headlands.',
  ],
  compute: (v): ToolResult => {
    const row = num(v, 'row');
    const inrow = num(v, 'inrow');
    if (!finite(row, inrow)) return err();
    if (row <= 0 || inrow <= 0) return err('Spacings must be greater than 0.');
    const perHa = run('plant-density', { row, inrow });
    return {
      outputs: [
        {
          label: 'Plant density',
          value: fmt(Math.round(perHa)),
          unit: 'plants/ha',
        },
        {
          label: 'Per square metre',
          value: fmt(perHa / 10000, 3),
          unit: 'plants/m²',
        },
        {
          label: 'Per acre',
          value: fmt(Math.round(convertArea(perHa, 'hectare', 'acre')), 5),
          unit: 'plants/acre',
        },
      ],
      formulaIds: ['plant-density'],
    };
  },
};

const irrigation: ToolConfig = {
  slug: 'irrigation-volume-calculator',
  title: 'Irrigation volume calculator',
  category: 'water',
  purpose:
    'Net irrigation volume from a target depth and area, and gross volume from an application efficiency.',
  formulaIds: ['irrigation-net-volume', 'irrigation-gross-volume'],
  fields: [
    {
      key: 'depth',
      label: 'Target water depth',
      type: 'number',
      unit: 'mm',
      min: 0,
      step: 1,
      required: true,
    },
    {
      key: 'area',
      label: 'Area',
      type: 'number',
      unit: 'ha',
      min: 0,
      step: 0.1,
      required: true,
    },
    {
      key: 'eff',
      label: 'Application efficiency (optional)',
      type: 'number',
      unit: '%',
      min: 1,
      max: 100,
      step: 1,
      help: 'Leave blank for net volume only.',
    },
  ],
  limitations: [
    'Does not recommend a depth by crop. Net depth is the requirement at the crop; gross adds losses. A planning estimate, not a scheduling prescription.',
  ],
  compute: (v): ToolResult => {
    const depth = num(v, 'depth');
    const area = num(v, 'area');
    if (!finite(depth, area)) return err();
    const net = run('irrigation-net-volume', { depth, area });
    const outputs = [
      { label: 'Net irrigation volume', value: fmt(net), unit: 'm³' },
      {
        label: 'Net volume',
        value: fmt(convertVolume(net, 'm3', 'litre')),
        unit: 'litres',
      },
    ];
    const formulaIds = ['irrigation-net-volume'];
    if (v.eff && v.eff.trim() !== '') {
      const eff = num(v, 'eff');
      if (finite(eff) && eff > 0) {
        const gross = run('irrigation-gross-volume', { net, eff });
        outputs.push({
          label: `Gross volume (at ${eff}% efficiency)`,
          value: fmt(gross),
          unit: 'm³',
        });
        formulaIds.push('irrigation-gross-volume');
      }
    }
    return { outputs, formulaIds };
  },
};

const gdd: ToolConfig = {
  slug: 'growing-degree-days',
  title: 'Growing degree-days calculator',
  category: 'climate',
  purpose:
    'Accumulate a single day of growing degree-days from daily temperatures and a base temperature.',
  formulaIds: ['gdd-average', 'gdd-upper-cutoff'],
  fields: [
    {
      key: 'method',
      label: 'Method',
      type: 'select',
      default: 'average',
      options: [
        { value: 'average', label: 'Simple average' },
        { value: 'cutoff', label: 'Average with upper cutoff' },
      ],
    },
    {
      key: 'tmax',
      label: 'Daily maximum temperature',
      type: 'number',
      unit: '°C',
      step: 0.1,
      required: true,
    },
    {
      key: 'tmin',
      label: 'Daily minimum temperature',
      type: 'number',
      unit: '°C',
      step: 0.1,
      required: true,
    },
    {
      key: 'tbase',
      label: 'Base temperature',
      type: 'number',
      unit: '°C',
      step: 0.1,
      required: true,
      default: '10',
    },
    {
      key: 'cap',
      label: 'Upper cutoff',
      type: 'number',
      unit: '°C',
      step: 0.1,
      showIf: (v) => v.method === 'cutoff',
      required: true,
    },
  ],
  limitations: [
    'Base and cutoff temperatures are crop-specific; this computes one day and does not infer crop stage without a validated crop model.',
  ],
  compute: (v): ToolResult => {
    const tmax = num(v, 'tmax');
    const tmin = num(v, 'tmin');
    const tbase = num(v, 'tbase');
    if (!finite(tmax, tmin, tbase)) return err();
    if (v.method === 'cutoff') {
      const cap = num(v, 'cap');
      if (!finite(cap)) return err('Enter an upper cutoff.');
      const val = run('gdd-upper-cutoff', { tmax, tmin, tbase, cap });
      return {
        outputs: [
          { label: 'Growing degree-days', value: fmt(val, 4), unit: '°C·day' },
        ],
        formulaIds: ['gdd-upper-cutoff'],
      };
    }
    const val = run('gdd-average', { tmax, tmin, tbase });
    return {
      outputs: [
        { label: 'Growing degree-days', value: fmt(val, 4), unit: '°C·day' },
      ],
      formulaIds: ['gdd-average'],
    };
  },
};

const yieldConverter: ToolConfig = {
  slug: 'yield-converter',
  title: 'Yield converter',
  category: 'conversion',
  purpose:
    'Convert crop yields between t/ha, kg/ha, lb/acre, and commodity-specific bu/acre.',
  formulaIds: ['yield-tha-to-buacre'],
  fields: [
    {
      key: 'value',
      label: 'Yield value',
      type: 'number',
      min: 0,
      step: 0.1,
      required: true,
    },
    {
      key: 'from',
      label: 'From',
      type: 'select',
      default: 'tha',
      options: [
        { value: 'tha', label: 't/ha' },
        { value: 'kgha', label: 'kg/ha' },
        { value: 'lbacre', label: 'lb/acre' },
        { value: 'buacre', label: 'bu/acre' },
      ],
    },
    {
      key: 'to',
      label: 'To',
      type: 'select',
      default: 'buacre',
      options: [
        { value: 'tha', label: 't/ha' },
        { value: 'kgha', label: 'kg/ha' },
        { value: 'lbacre', label: 'lb/acre' },
        { value: 'buacre', label: 'bu/acre' },
      ],
    },
    {
      key: 'commodity',
      label: 'Commodity (for bushels)',
      type: 'select',
      default: 'wheat',
      options: Object.keys(BUSHEL_LB).map((k) => ({
        value: k,
        label: `${k} (${BUSHEL_LB[k as keyof typeof BUSHEL_LB]} lb/bu)`,
      })),
      showIf: (v) => v.from === 'buacre' || v.to === 'buacre',
    },
  ],
  limitations: [
    'Bushel conversions require the correct commodity test weight — there is no single generic bushel. Standard weights are legal/customary, not the actual test weight of a lot.',
  ],
  compute: (v): ToolResult => {
    const value = num(v, 'value');
    if (!finite(value)) return err();
    const bl = BUSHEL_LB[v.commodity as keyof typeof BUSHEL_LB] ?? 60;
    // Convert input to a canonical kg/ha, then out.
    const toKgHa: Record<string, (x: number) => number> = {
      tha: (x) => x * 1000,
      kgha: (x) => x,
      lbacre: (x) => x / KG_HA_TO_LB_ACRE,
      buacre: (x) => (x * bl) / KG_HA_TO_LB_ACRE, // bu/acre → lb/acre → kg/ha
    };
    const fromKgHa: Record<string, (x: number) => number> = {
      tha: (x) => x / 1000,
      kgha: (x) => x,
      lbacre: (x) => x * KG_HA_TO_LB_ACRE,
      buacre: (x) => (x * KG_HA_TO_LB_ACRE) / bl,
    };
    const from = v.from ?? '';
    const to = v.to ?? '';
    const toFn = toKgHa[from];
    const fromFn = fromKgHa[to];
    if (!toFn || !fromFn) return err('Choose valid units.');
    const kgha = toFn(value);
    const out = fromFn(kgha);
    const unitLabel: Record<string, string> = {
      tha: 't/ha',
      kgha: 'kg/ha',
      lbacre: 'lb/acre',
      buacre: 'bu/acre',
    };
    const usedBushel = from === 'buacre' || to === 'buacre';
    return {
      outputs: [
        {
          label: `${unitLabel[from] ?? from} → ${unitLabel[to] ?? to}`,
          value: fmt(out, 5),
          unit: unitLabel[to] ?? to,
        },
      ],
      formulaIds: usedBushel ? ['yield-tha-to-buacre'] : [],
      note: usedBushel
        ? `Using ${v.commodity} standard weight ${bl} lb/bu.`
        : undefined,
    };
  },
};

const unitConverters: ToolConfig = {
  slug: 'unit-converters',
  searchAliases: [
    'bushels',
    'bushel conversion',
    'test weight',
    'percentage to decimal',
  ],
  title: 'Agricultural unit converters',
  category: 'conversion',
  purpose:
    'Convert common agricultural units: area, mass, volume (US/Imperial), temperature, application rate, plant density, bulk density, mass and bushels, and percentage and decimal fractions.',
  formulaIds: [
    'density-kgm3-to-lbft3',
    'density-lbft3-to-kgm3',
    'mass-to-bushels',
    'bushels-to-mass',
    'percent-to-decimal',
    'decimal-to-percent',
  ],
  fields: [
    {
      key: 'dim',
      label: 'Quantity',
      type: 'select',
      default: 'area',
      options: [
        { value: 'area', label: 'Area' },
        { value: 'mass', label: 'Mass' },
        { value: 'volume', label: 'Volume' },
        { value: 'temperature', label: 'Temperature' },
        { value: 'rate', label: 'Application rate (kg/ha ↔ lb/acre)' },
        { value: 'density', label: 'Plant density (plants/m² ↔ plants/acre)' },
        { value: 'bulkdensity', label: 'Bulk density (kg/m³ ↔ lb/ft³)' },
        {
          value: 'bushels',
          label: 'Mass ↔ bushels (commodity standard weight)',
        },
        { value: 'percent', label: 'Percentage ↔ decimal fraction' },
      ],
    },
    {
      key: 'value',
      label: 'Value',
      type: 'number',
      step: 0.001,
      required: true,
    },
    {
      key: 'afrom',
      label: 'From',
      type: 'select',
      default: 'hectare',
      showIf: (v) => v.dim === 'area',
      options: [
        { value: 'hectare', label: 'hectares' },
        { value: 'acre', label: 'acres' },
        { value: 'm2', label: 'm²' },
        { value: 'km2', label: 'km²' },
      ],
    },
    {
      key: 'ato',
      label: 'To',
      type: 'select',
      default: 'acre',
      showIf: (v) => v.dim === 'area',
      options: [
        { value: 'hectare', label: 'hectares' },
        { value: 'acre', label: 'acres' },
        { value: 'm2', label: 'm²' },
        { value: 'km2', label: 'km²' },
      ],
    },
    {
      key: 'mfrom',
      label: 'From',
      type: 'select',
      default: 'tonne',
      showIf: (v) => v.dim === 'mass',
      options: [
        { value: 'tonne', label: 'tonnes' },
        { value: 'kg', label: 'kg' },
        { value: 'lb', label: 'pounds' },
        { value: 'cwt-us', label: 'US cwt' },
        { value: 'cwt-uk', label: 'UK cwt' },
      ],
    },
    {
      key: 'mto',
      label: 'To',
      type: 'select',
      default: 'kg',
      showIf: (v) => v.dim === 'mass',
      options: [
        { value: 'tonne', label: 'tonnes' },
        { value: 'kg', label: 'kg' },
        { value: 'lb', label: 'pounds' },
        { value: 'cwt-us', label: 'US cwt' },
        { value: 'cwt-uk', label: 'UK cwt' },
      ],
    },
    {
      key: 'vfrom',
      label: 'From',
      type: 'select',
      default: 'litre',
      showIf: (v) => v.dim === 'volume',
      options: [
        { value: 'litre', label: 'litres' },
        { value: 'm3', label: 'm³' },
        { value: 'gal-us', label: 'US gallons' },
        { value: 'gal-imp', label: 'Imperial gallons' },
      ],
    },
    {
      key: 'vto',
      label: 'To',
      type: 'select',
      default: 'gal-us',
      showIf: (v) => v.dim === 'volume',
      options: [
        { value: 'litre', label: 'litres' },
        { value: 'm3', label: 'm³' },
        { value: 'gal-us', label: 'US gallons' },
        { value: 'gal-imp', label: 'Imperial gallons' },
      ],
    },
    {
      key: 'tfrom',
      label: 'From',
      type: 'select',
      default: 'c',
      showIf: (v) => v.dim === 'temperature',
      options: [
        { value: 'c', label: '°C' },
        { value: 'f', label: '°F' },
      ],
    },
    {
      key: 'tto',
      label: 'To',
      type: 'select',
      default: 'f',
      showIf: (v) => v.dim === 'temperature',
      options: [
        { value: 'c', label: '°C' },
        { value: 'f', label: '°F' },
      ],
    },
    {
      key: 'rfrom',
      label: 'From',
      type: 'select',
      default: 'kgha',
      showIf: (v) => v.dim === 'rate',
      options: [
        { value: 'kgha', label: 'kg/ha' },
        { value: 'lbacre', label: 'lb/acre' },
      ],
    },
    {
      key: 'rto',
      label: 'To',
      type: 'select',
      default: 'lbacre',
      showIf: (v) => v.dim === 'rate',
      options: [
        { value: 'kgha', label: 'kg/ha' },
        { value: 'lbacre', label: 'lb/acre' },
      ],
    },
    {
      key: 'dfrom',
      label: 'From',
      type: 'select',
      default: 'm2',
      showIf: (v) => v.dim === 'density',
      options: [
        { value: 'm2', label: 'plants/m²' },
        { value: 'acre', label: 'plants/acre' },
      ],
    },
    {
      key: 'dto',
      label: 'To',
      type: 'select',
      default: 'acre',
      showIf: (v) => v.dim === 'density',
      options: [
        { value: 'm2', label: 'plants/m²' },
        { value: 'acre', label: 'plants/acre' },
      ],
    },
    {
      key: 'bddir',
      label: 'Direction',
      type: 'select',
      default: 'kgm3-to-lbft3',
      showIf: (v) => v.dim === 'bulkdensity',
      options: [
        { value: 'kgm3-to-lbft3', label: 'kg/m³ → lb/ft³' },
        { value: 'lbft3-to-kgm3', label: 'lb/ft³ → kg/m³' },
      ],
    },
    {
      key: 'budir',
      label: 'Direction',
      type: 'select',
      default: 'mass-to-bu',
      showIf: (v) => v.dim === 'bushels',
      options: [
        { value: 'mass-to-bu', label: 'Mass → bushels' },
        { value: 'bu-to-mass', label: 'Bushels → mass' },
      ],
    },
    {
      key: 'pctdir',
      label: 'Direction',
      type: 'select',
      default: 'pct-to-dec',
      showIf: (v) => v.dim === 'percent',
      options: [
        { value: 'pct-to-dec', label: 'Percentage → decimal fraction' },
        { value: 'dec-to-pct', label: 'Decimal fraction → percentage' },
      ],
    },
    {
      key: 'bmfrom',
      label: 'Mass unit',
      type: 'select',
      default: 'tonne',
      showIf: (v) => v.dim === 'bushels',
      options: [
        { value: 'tonne', label: 'tonnes' },
        { value: 'kg', label: 'kg' },
        { value: 'lb', label: 'pounds' },
        { value: 'cwt-us', label: 'US cwt' },
        { value: 'cwt-uk', label: 'UK cwt' },
      ],
      help: 'The unit on the mass side of the conversion, whichever direction you are going.',
    },
    {
      key: 'bcommodity',
      label: 'Commodity',
      type: 'select',
      default: 'wheat',
      showIf: (v) => v.dim === 'bushels',
      options: Object.keys(BUSHEL_LB).map((k) => ({
        value: k,
        label: `${k} (${BUSHEL_LB[k as keyof typeof BUSHEL_LB]} lb/bu)`,
      })),
      help: 'A bushel used as a mass unit is defined by a commodity-specific standard weight, so the commodity is an input rather than a hidden default. Maize and wheat bushels are different masses.',
    },
  ],
  limitations: [
    'US and Imperial gallons differ — check which your data uses. Constants are exact where a legal definition exists.',
    'There is no generic bushel. The standard weight applied is commodity-specific and jurisdiction-specific, set by the applicable authority or contract, and it can differ between jurisdictions and over time. Use the one your contract or market names.',
    'A standard bushel weight is a defined conversion constant, not the measured test weight of your lot. Nor is bulk density test weight: test weight is a graded measurement made by a specified apparatus and procedure.',
  ],
  safetyDisclosure:
    'Not a grading determination. Bushel standard weights and bulk density are unit conversions; test weight and grade are measurements made under a specified procedure by the applicable standard, and no conversion here establishes a grade, a contract quantity, or a settlement figure.',
  compute: (v): ToolResult => {
    const value = num(v, 'value');
    if (!finite(value)) return err();
    try {
      let out: number;
      let unit = '';
      // Formula-backed dimensions declare which formula produced the number;
      // the pre-existing factor-based dimensions carry no formula id.
      let usedFormulaIds: string[] = [];
      let note: string | undefined;
      if (v.dim === 'bulkdensity') {
        const id =
          v.bddir === 'lbft3-to-kgm3'
            ? 'density-lbft3-to-kgm3'
            : 'density-kgm3-to-lbft3';
        out = run(id, { value });
        unit = v.bddir === 'lbft3-to-kgm3' ? 'kg/m³' : 'lb/ft³';
        usedFormulaIds = [id];
        note =
          'Exact by definition (the pound and the foot are exactly defined). A bulk density is not a test weight.';
      } else if (v.dim === 'bushels') {
        const commodity = v.bcommodity ?? 'wheat';
        const bushelLb = BUSHEL_LB[commodity as keyof typeof BUSHEL_LB];
        if (bushelLb == null) return err('Choose a commodity.');
        const massUnit = v.bmfrom ?? 'tonne';
        if (v.budir === 'bu-to-mass') {
          // The formula returns kg; the mass unit is a presentation choice.
          const kg = run('bushels-to-mass', { bu: value, bushelLb });
          out = convertMass(kg, 'kg', massUnit as never);
          unit = massUnit;
          usedFormulaIds = ['bushels-to-mass'];
        } else {
          const kg = convertMass(value, massUnit as never, 'kg');
          out = run('mass-to-bushels', { kg, bushelLb });
          unit = 'bu';
          usedFormulaIds = ['mass-to-bushels'];
        }
        note = `Using the ${commodity} standard bushel weight of ${bushelLb} lb/bu. Standard weights are commodity-specific AND jurisdiction-specific — there is no generic bushel — and a standard weight is a defined conversion constant, not the measured test weight of your lot.`;
      } else if (v.dim === 'percent') {
        const id =
          v.pctdir === 'dec-to-pct'
            ? 'decimal-to-percent'
            : 'percent-to-decimal';
        out = run(id, { value });
        unit = v.pctdir === 'dec-to-pct' ? '%' : '';
        usedFormulaIds = [id];
        note =
          'Definitional. It does not reveal what the figure was denominated on: a wet-basis and a dry-basis percentage convert identically and still mean different things.';
      } else if (v.dim === 'area') {
        out = convertArea(value, v.afrom as never, v.ato as never);
        unit = v.ato ?? '';
      } else if (v.dim === 'mass') {
        out = convertMass(value, v.mfrom as never, v.mto as never);
        unit = v.mto ?? '';
      } else if (v.dim === 'volume') {
        out = convertVolume(value, v.vfrom as never, v.vto as never);
        unit = v.vto ?? '';
      } else if (v.dim === 'temperature') {
        out =
          v.tfrom === v.tto
            ? value
            : v.tfrom === 'c'
              ? cToF(value)
              : fToC(value);
        unit = v.tto === 'c' ? '°C' : '°F';
      } else if (v.dim === 'rate') {
        // kg/ha ↔ lb/acre (via the exact KG_HA_TO_LB_ACRE factor).
        out =
          v.rfrom === v.rto
            ? value
            : v.rfrom === 'kgha'
              ? value * KG_HA_TO_LB_ACRE
              : value / KG_HA_TO_LB_ACRE;
        unit = v.rto === 'kgha' ? 'kg/ha' : 'lb/acre';
      } else {
        // plants/m² ↔ plants/acre (m² per acre = 4046.8564224).
        const m2PerAcre = convertArea(1, 'acre', 'm2');
        out =
          v.dfrom === v.dto
            ? value
            : v.dfrom === 'm2'
              ? value * m2PerAcre
              : value / m2PerAcre;
        unit = v.dto === 'm2' ? 'plants/m²' : 'plants/acre';
      }
      return {
        outputs: [{ label: 'Result', value: fmt(out, 6), unit, note }],
        formulaIds: usedFormulaIds,
      };
    } catch {
      return err('Choose valid units.');
    }
  },
};

/* -------------------------------------------------------------------------- *
 * Phase 5E — commodity, post-harvest, storage, processing, and trade tools.
 *
 * Every number below comes out of `run(formulaId, …)`. These configs choose
 * which formulas to call, convert units via constants.ts, and format — nothing
 * else. No tool reimplements, inverts, extends, or sums the registry's maths.
 * Where a needed formula does not exist, the feature is left out and reported
 * rather than inlined here.
 * -------------------------------------------------------------------------- */

/**
 * Moisture basis is never inferred and never silently defaulted, so the select
 * opens on a placeholder rather than on a basis nobody chose. A bare "20%" does
 * not reveal which denominator produced it.
 */
const BASIS_OPTIONS = [
  { value: '', label: 'Choose a basis…' },
  { value: 'wet-basis', label: 'Wet basis — water ÷ total mass' },
  { value: 'dry-basis', label: 'Dry basis — water ÷ dry-matter mass' },
];

const CHOOSE_BASIS =
  'Choose the moisture basis your figures are denominated on. 20% wet basis and 20% dry basis are different quantities.';

const isBasis = (v: string | undefined): v is 'wet-basis' | 'dry-basis' =>
  v === 'wet-basis' || v === 'dry-basis';

const basisWord = (b: string): string =>
  b === 'dry-basis' ? 'dry basis' : 'wet basis';

/**
 * The basis select.
 *
 * The default is an explicit `''` placeholder, which is deliberate on both
 * counts. Explicit, so the server and client render the same thing and the
 * field is never in an unset state. Empty, so no basis is ever chosen on the
 * user's behalf: defaulting this to wet-basis would be exactly the silent basis
 * assumption that types/tools.ts calls the most dangerous failure mode in
 * commodity moisture maths. Nothing computes until a basis is picked.
 */
function basisField(label: string, help: string): ToolField {
  return {
    key: 'basis',
    label,
    type: 'select',
    default: '',
    required: true,
    options: BASIS_OPTIONS,
    help,
  };
}

/**
 * A basis-dependent moisture input is TWO fields, not one.
 *
 * `ToolField.max` is a static number, but the valid range genuinely depends on
 * the basis. Wet basis cannot reach 100% — at 100% the lot is entirely water
 * and every downstream denominator is zero — while dry basis has no upper bound
 * at all: 65% wet basis is 185.7% dry basis, which is ordinary for forage. A
 * single field carrying both would have to either cap dry basis at a limit that
 * does not exist, or leave wet basis uncapped and let `?m0=150` through to a
 * formula throw. Splitting them lets each field mirror its own formula's
 * declared range exactly, and only the field matching the chosen basis is shown.
 */
function moistureFields(
  key: string,
  label: string,
  help?: string,
): ToolField[] {
  const dryNote =
    'Dry basis is unbounded above: more water than solids exceeds 100%, which is arithmetically correct rather than an error.';
  return [
    {
      key,
      label: `${label} (wet basis)`,
      type: 'number',
      unit: '%',
      min: 0,
      max: 99.999,
      step: 0.01,
      required: true,
      showIf: (v) => v.basis === 'wet-basis',
      help: help
        ? `${help} Wet basis stays below 100%.`
        : 'Wet basis stays below 100%: at 100% the lot is entirely water and has no dry matter.',
    },
    {
      key: `${key}db`,
      label: `${label} (dry basis)`,
      type: 'number',
      unit: '%',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.basis === 'dry-basis',
      help: help ? `${help} ${dryNote}` : dryNote,
    },
  ];
}

/** Read whichever moisture field matches the chosen basis. */
function moistureValue(
  v: Record<string, string>,
  key: string,
  basis: string,
): number {
  return num(v, basis === 'dry-basis' ? `${key}db` : key);
}

/**
 * Restate a moisture on the wet basis that every mass formula declares. Dry
 * basis goes through the registry's own converter; wet basis is already wet
 * basis and passes through untouched. No arithmetic happens here.
 */
function toWetBasis(value: number, basis: string): number {
  return basis === 'dry-basis'
    ? run('moisture-db-to-wb', { mdb: value })
    : value;
}

/**
 * Mass-unit labels. The mass formulas are unit-agnostic ("same as input mass"),
 * so the chosen unit is carried to the output as a label and no conversion is
 * performed — the maths never sees the unit at all.
 */
const MASS_UNIT_OPTIONS = [
  { value: 'kg', label: 'kilograms (kg)' },
  { value: 't', label: 'tonnes (t)' },
  { value: 'lb', label: 'pounds (lb)' },
];

const NOT_A_METER =
  'Not a substitute for representative sampling or a calibrated, correctly-referenced moisture meter. It converts the figures entered and cannot detect that one of them was wrong, or was read on a different basis than the one stated.';

const moistureConverter: ToolConfig = {
  slug: 'moisture-content-converter',
  searchAliases: [
    'moisture basis',
    'wet basis',
    'dry basis',
    'wet-basis moisture',
    'dry-basis moisture',
    'moisture conversion',
  ],
  title: 'Moisture content converter',
  category: 'commodity',
  purpose:
    'Converts a moisture content between the wet basis and the dry basis, and reports the dry matter that goes with it.',
  formulaIds: ['moisture-wb-to-db', 'moisture-db-to-wb', 'dry-matter-fraction'],
  fields: [
    basisField(
      'Basis of the figure you are entering',
      'A bare percentage carries no basis. Take it from the method or contract that produced the figure.',
    ),
    ...moistureFields('value', 'Moisture content'),
  ],
  limitations: [
    'Converts between two denominators. It does not identify which basis your own figure used.',
    'The two bases have different ceilings, so each has its own input: a wet-basis figure at or above 100% describes a lot with no dry matter and is rejected, while a dry-basis figure above 100% is ordinary.',
  ],
  safetyDisclosure: NOT_A_METER,
  compute: (v): ToolResult => {
    const basis = v.basis ?? '';
    if (!isBasis(basis)) return err(CHOOSE_BASIS);
    const value = moistureValue(v, 'value', basis);
    if (!finite(value)) return err();
    try {
      const mwb =
        basis === 'wet-basis'
          ? value
          : run('moisture-db-to-wb', { mdb: value });
      const mdb =
        basis === 'wet-basis'
          ? run('moisture-wb-to-db', { mwb: value })
          : value;
      const dm = run('dry-matter-fraction', { mwb });
      return {
        outputs: [
          { label: 'Moisture (wet basis)', value: fmt(mwb), unit: '%' },
          { label: 'Moisture (dry basis)', value: fmt(mdb), unit: '%' },
          { label: 'Dry matter', value: fmt(dm), unit: '%' },
        ],
        formulaIds:
          basis === 'wet-basis'
            ? ['moisture-wb-to-db', 'dry-matter-fraction']
            : ['moisture-db-to-wb', 'dry-matter-fraction'],
        note: `Entered on the ${basisWord(basis)}. Dry matter is denominated on total mass.`,
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const dryMatterCalculator: ToolConfig = {
  slug: 'dry-matter-calculator',
  searchAliases: ['dry matter', 'dry-matter content'],
  title: 'Dry-matter calculator',
  category: 'commodity',
  purpose:
    'Splits a lot into its dry matter and its water from a stated moisture content.',
  formulaIds: [
    'dry-matter-fraction',
    'dry-matter-mass',
    'water-mass-wb',
    'moisture-db-to-wb',
  ],
  fields: [
    basisField(
      'Basis of the moisture figure',
      'A dry-basis entry is restated on the wet basis before the split, because the mass split is defined on total mass.',
    ),
    {
      key: 'unit',
      label: 'Mass unit',
      type: 'select',
      default: 'kg',
      options: MASS_UNIT_OPTIONS,
      help: 'A label only — the split is unit-agnostic and every mass output carries this unit.',
    },
    {
      key: 'mass',
      label: 'Total mass',
      type: 'number',
      min: 0,
      step: 0.01,
      required: true,
      help: 'The whole lot, including its water.',
    },
    ...moistureFields('moisture', 'Moisture content'),
  ],
  limitations: [
    'Dry matter here means everything that is not water. It says nothing about composition or about what fraction is usable.',
    'The split describes the mass entered. It does not verify that the mass and the moisture describe the same lot in the same state.',
  ],
  safetyDisclosure: NOT_A_METER,
  compute: (v): ToolResult => {
    const basis = v.basis ?? '';
    if (!isBasis(basis)) return err(CHOOSE_BASIS);
    const mass = num(v, 'mass');
    const moisture = moistureValue(v, 'moisture', basis);
    if (!finite(mass, moisture)) return err();
    const unit = v.unit ?? 'kg';
    try {
      const mwb = toWetBasis(moisture, basis);
      const dmPct = run('dry-matter-fraction', { mwb });
      const dmMass = run('dry-matter-mass', { mass, mwb });
      const water = run('water-mass-wb', { mass, mwb });
      return {
        outputs: [
          { label: 'Dry matter', value: fmt(dmPct), unit: '%' },
          { label: 'Dry-matter mass', value: fmt(dmMass), unit },
          { label: 'Water mass', value: fmt(water), unit },
          {
            label: 'Total mass entered',
            value: fmt(mass),
            unit,
            note: 'Dry-matter mass and water mass account for this total between them.',
          },
        ],
        formulaIds:
          basis === 'dry-basis'
            ? [
                'moisture-db-to-wb',
                'dry-matter-fraction',
                'dry-matter-mass',
                'water-mass-wb',
              ]
            : ['dry-matter-fraction', 'dry-matter-mass', 'water-mass-wb'],
        note:
          basis === 'dry-basis'
            ? `Entered as ${fmt(moisture)}% dry basis, restated as ${fmt(mwb)}% wet basis for the split.`
            : 'Entered on the wet basis.',
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const waterRemoval: ToolConfig = {
  slug: 'water-removal-calculator',
  searchAliases: ['water removal', 'drying mass balance', 'water removed'],
  title: 'Water removal calculator',
  category: 'post-harvest',
  purpose:
    'Estimates the water that leaves a lot, and the mass left behind, when it is dried from one moisture content to another.',
  formulaIds: [
    'dry-matter-mass',
    'water-mass-wb',
    'drying-final-mass',
    'drying-water-removed',
  ],
  fields: [
    basisField(
      'Basis of the moisture figures',
      'Both figures are read on the basis chosen here.',
    ),
    {
      key: 'unit',
      label: 'Mass unit',
      type: 'select',
      default: 'kg',
      options: MASS_UNIT_OPTIONS,
      help: 'A label only — the mass balance is unit-agnostic.',
    },
    {
      key: 'mass',
      label: 'Initial total mass',
      type: 'number',
      min: 0,
      step: 0.01,
      required: true,
    },
    ...moistureFields('m0', 'Initial moisture'),
    ...moistureFields(
      'm1',
      'Target moisture',
      'Drying only — a target above the initial moisture is wetting and is rejected.',
    ),
  ],
  limitations: [
    'A mass balance in which only water leaves. Real drying also loses solids as fines, dust, and broken material, so the actual outturn is typically below the final mass shown.',
    'Nothing here describes how to dry: no temperature, airflow, time, or energy is implied or computed.',
    'Dry matter is unchanged by drying, so the dry-matter figure below anchors every other number on this page.',
  ],
  safetyDisclosure:
    'Not a drying prescription and not an energy estimate. It states what the masses would be if only water were removed; drying conditions depend on the commodity, the equipment, and the end use, and the wrong ones can damage a lot irreversibly.',
  compute: (v): ToolResult => {
    const basis = v.basis ?? '';
    if (!isBasis(basis)) return err(CHOOSE_BASIS);
    const mass = num(v, 'mass');
    const m0 = moistureValue(v, 'm0', basis);
    const m1 = moistureValue(v, 'm1', basis);
    if (!finite(mass, m0, m1)) return err();
    const unit = v.unit ?? 'kg';
    try {
      const m0w = toWetBasis(m0, basis);
      const m1w = toWetBasis(m1, basis);
      const dm = run('dry-matter-mass', { mass, mwb: m0w });
      const water0 = run('water-mass-wb', { mass, mwb: m0w });
      const finalMass = run('drying-final-mass', { mass, m0: m0w, m1: m1w });
      const water1 = run('water-mass-wb', { mass: finalMass, mwb: m1w });
      const removed = run('drying-water-removed', { mass, m0: m0w, m1: m1w });
      return {
        outputs: [
          {
            label: 'Dry matter (unchanged by drying)',
            value: fmt(dm),
            unit,
            note: 'Conserved: the same dry matter is present before and after.',
          },
          { label: 'Initial water', value: fmt(water0), unit },
          { label: 'Final mass at the target', value: fmt(finalMass), unit },
          { label: 'Water at the target', value: fmt(water1), unit },
          { label: 'Water removed', value: fmt(removed), unit },
        ],
        formulaIds: [
          'dry-matter-mass',
          'water-mass-wb',
          'drying-final-mass',
          'drying-water-removed',
        ],
        note:
          basis === 'dry-basis'
            ? `Entered on the dry basis (${fmt(m0)}% → ${fmt(m1)}%), restated as ${fmt(m0w)}% → ${fmt(m1w)}% wet basis.`
            : 'Entered on the wet basis.',
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const moistureShrink: ToolConfig = {
  slug: 'grain-moisture-shrink',
  searchAliases: ['moisture shrink', 'grain shrink', 'shrink factor'],
  title: 'Grain moisture shrink calculator',
  category: 'post-harvest',
  purpose:
    'Calculates the mathematical moisture shrink between a starting moisture and a market moisture — the water fraction alone.',
  formulaIds: ['moisture-shrink-pct'],
  fields: [
    basisField(
      'Basis of the moisture figures',
      'Grain is commonly traded on the wet basis, but nothing here assumes it for you.',
    ),
    ...moistureFields('m0', 'Initial moisture'),
    ...moistureFields('m1', 'Target / market moisture'),
    {
      key: 'handling',
      label: 'Your own handling / commercial shrink factor (optional)',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 0.01,
      help: 'Leave blank unless you are carrying a figure from your own contract. It is echoed back separately and is never folded into the mathematical shrink.',
    },
  ],
  limitations: [
    'Mathematical shrink only: the mass fraction that leaves as water. It is not handling shrink, not a commercial shrink factor, and not a total buyer deduction.',
    'A buyer’s actual deduction commonly exceeds this figure because it may add handling loss and a commercial factor on top. That difference is a contract term, not arithmetic.',
    'This platform publishes no commercial shrink factor. Any figure in the optional field is yours, carried from your own contract, and this tool neither supplies nor checks it.',
  ],
  safetyDisclosure:
    'Not a settlement calculation and not a contract term. It computes the water fraction only; what a buyer actually deducts is set by that buyer’s contract, and no figure here establishes what any buyer owes or deducts.',
  compute: (v): ToolResult => {
    const basis = v.basis ?? '';
    if (!isBasis(basis)) return err(CHOOSE_BASIS);
    const m0 = moistureValue(v, 'm0', basis);
    const m1 = moistureValue(v, 'm1', basis);
    if (!finite(m0, m1)) return err();
    try {
      const m0w = toWetBasis(m0, basis);
      const m1w = toWetBasis(m1, basis);
      const shrink = run('moisture-shrink-pct', { m0: m0w, m1: m1w });
      const outputs = [
        {
          label: 'Mathematical moisture shrink',
          value: fmt(shrink),
          unit: '%',
          note: 'Water only. This is the whole of what the arithmetic supports.',
        },
      ];
      const raw = v.handling ?? '';
      if (raw.trim() !== '') {
        const handling = num(v, 'handling');
        if (!finite(handling)) return err();
        outputs.push({
          label:
            'Your own handling / commercial factor (entered, not calculated)',
          value: fmt(handling),
          unit: '%',
          note: 'Your figure, shown back to you unchanged. It is not added to the shrink above, and it is not a standard published by this platform.',
        });
      }
      return {
        outputs,
        formulaIds: ['moisture-shrink-pct'],
        note:
          basis === 'dry-basis'
            ? `Entered on the dry basis, restated as ${fmt(m0w)}% → ${fmt(m1w)}% wet basis.`
            : 'Entered on the wet basis.',
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const bulkDensity: ToolConfig = {
  slug: 'bulk-density-calculator',
  searchAliases: ['bulk density', 'density conversion'],
  title: 'Bulk density calculator',
  category: 'storage',
  purpose:
    'Calculates bulk density from mass and volume, or mass or volume from a bulk density you supply.',
  formulaIds: [
    'bulk-density-from-mass-volume',
    'mass-from-volume-density',
    'volume-from-mass-density',
    'density-kgm3-to-lbft3',
  ],
  fields: [
    {
      key: 'mode',
      label: 'Calculation',
      type: 'select',
      default: 'density',
      options: [
        { value: 'density', label: 'Bulk density from mass and volume' },
        { value: 'mass', label: 'Mass from volume and bulk density' },
        { value: 'volume', label: 'Volume from mass and bulk density' },
      ],
    },
    {
      key: 'mass',
      label: 'Mass',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.mode !== 'mass',
    },
    {
      key: 'volume',
      label: 'Volume occupied',
      type: 'number',
      unit: 'm³',
      // `bulk-density-from-mass-volume` divides by this and declares
      // min 0.000001. The stricter of the two formulas this field feeds wins:
      // a field must never be looser than the formula behind it.
      min: 0.000001,
      step: 0.001,
      required: true,
      showIf: (v) => v.mode !== 'volume',
    },
    {
      key: 'density',
      label: 'Bulk density',
      type: 'number',
      unit: 'kg/m³',
      min: 0.000001,
      step: 0.1,
      required: true,
      showIf: (v) => v.mode !== 'density',
      help: 'Measure it on your own lot, or take it from the contract or data source you are working to.',
    },
  ],
  limitations: [
    'Bulk density is not test weight. Test weight is a graded measurement made by a specified apparatus and procedure; this is a mass-per-volume ratio, and the two are not interchangeable.',
    'Bulk density varies with moisture, compaction, fill method, and fines. A single figure describes one lot in one state.',
    'No default bulk density is supplied anywhere on this platform, because a generic figure applied to a real lot is a guess wearing a number.',
  ],
  safetyDisclosure:
    'Not a grading determination and not a capacity rating. It says nothing about whether a structure can carry the resulting mass, which is an engineering question.',
  compute: (v): ToolResult => {
    const mode = v.mode ?? 'density';
    try {
      if (mode === 'density') {
        const mass = num(v, 'mass');
        const volume = num(v, 'volume');
        if (!finite(mass, volume)) return err();
        const d = run('bulk-density-from-mass-volume', { mass, volume });
        return {
          outputs: [
            { label: 'Bulk density', value: fmt(d), unit: 'kg/m³' },
            {
              label: 'Bulk density',
              value: fmt(run('density-kgm3-to-lbft3', { value: d })),
              unit: 'lb/ft³',
            },
          ],
          formulaIds: [
            'bulk-density-from-mass-volume',
            'density-kgm3-to-lbft3',
          ],
        };
      }
      const density = num(v, 'density');
      if (!finite(density)) return err();
      const inLbFt3 = {
        label: 'Bulk density used',
        value: fmt(run('density-kgm3-to-lbft3', { value: density })),
        unit: 'lb/ft³',
      };
      if (mode === 'mass') {
        const volume = num(v, 'volume');
        if (!finite(volume)) return err();
        return {
          outputs: [
            {
              label: 'Mass',
              value: fmt(run('mass-from-volume-density', { volume, density })),
              unit: 'kg',
            },
            inLbFt3,
          ],
          formulaIds: ['mass-from-volume-density', 'density-kgm3-to-lbft3'],
        };
      }
      const mass = num(v, 'mass');
      if (!finite(mass)) return err();
      return {
        outputs: [
          {
            label: 'Volume',
            value: fmt(run('volume-from-mass-density', { mass, density })),
            unit: 'm³',
            note: 'The volume the commodity occupies, not the space a store needs — headspace, aeration, angle of repose, and access are not included.',
          },
          inLbFt3,
        ],
        formulaIds: ['volume-from-mass-density', 'density-kgm3-to-lbft3'],
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const storageCapacity: ToolConfig = {
  slug: 'storage-capacity-estimator',
  searchAliases: [
    'storage capacity',
    'bin capacity',
    'silo volume',
    'store volume',
  ],
  title: 'Storage volume estimator',
  category: 'storage',
  purpose:
    'Calculates the geometric volume of a rectangular or cylindrical store, with or without a conical peak, and the mass it would hold at a bulk density you supply.',
  formulaIds: [
    'volume-rect-prism',
    'volume-cylinder',
    'volume-cylinder-with-cone',
    'volume-with-packing-factor',
    'mass-from-volume-density',
    'density-kgm3-to-lbft3',
  ],
  fields: [
    {
      key: 'geometry',
      label: 'Shape',
      type: 'select',
      default: 'rect',
      options: [
        { value: 'rect', label: 'Rectangular prism' },
        { value: 'cylinder', label: 'Vertical cylinder' },
        {
          value: 'cylinder-cone',
          label: 'Vertical cylinder with a conical peak',
        },
      ],
    },
    {
      key: 'length',
      label: 'Length',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.geometry === 'rect',
    },
    {
      key: 'width',
      label: 'Width',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.geometry === 'rect',
    },
    {
      key: 'radius',
      label: 'Internal radius',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.geometry !== 'rect',
      help: 'Internal — an external measurement overstates the volume by the wall thickness.',
    },
    {
      key: 'height',
      label: 'Fill height',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
      help: 'The level fill. With a conical peak, this is the height of the level fill only — to the eave — and the peak is entered separately.',
    },
    {
      key: 'coneHeight',
      label: 'Peak height above the level fill',
      type: 'number',
      unit: 'm',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.geometry === 'cylinder-cone',
      help: 'A heap cannot be steeper than the commodity’s angle of repose, and nothing here knows or checks that. Enter 0 for a level fill.',
    },
    {
      key: 'packing',
      label: 'Packing factor (optional)',
      type: 'number',
      unit: '%',
      min: 0.000001,
      max: 100,
      step: 0.1,
      help: 'The fraction of the geometric volume your commodity actually occupies, once headspace, aeration ducting, access, and settling are accounted for. Leave blank to use the volume unfactored. No default is offered.',
    },
    {
      key: 'density',
      label: 'Bulk density of your commodity (optional)',
      type: 'number',
      unit: 'kg/m³',
      min: 0.000001,
      step: 0.1,
      help: 'Leave blank for volume alone. No default is offered: this figure must describe your commodity in the state it will occupy the space.',
    },
  ],
  limitations: [
    'Geometry only. No structural, safe-working, or regulatory capacity is implied by multiplying dimensions together.',
    'The volume of the space described, not the quantity that can be stored in it: headspace, aeration, angle of repose, and access are not included unless you enter a packing factor for them.',
    'The packing factor is NOT the void fraction between particles. That void space is already inside bulk density, which is mass per unit of BULK volume and so already counts the gaps. Applying a packing factor for particle voids on top of a bulk density would double-count them; the packing factor is for space the commodity does not occupy at all.',
    'A conical peak is an idealisation. A real heap follows the commodity’s angle of repose, which varies with moisture and fines, so its shape is never truly conical.',
    'A mass figure appears only when you supply a bulk density, and it is only ever as good as that figure.',
  ],
  safetyDisclosure:
    'Not an engineering certification and not a capacity rating. Structural and loading limits are set by the design of the actual structure and by qualified engineers, never by a volume calculation. Stored bulk material can also engulf a person without warning, and nothing here bears on entering or working around a store.',
  compute: (v): ToolResult => {
    const geometry = v.geometry ?? 'rect';
    const height = num(v, 'height');
    if (!finite(height)) return err();
    try {
      let volume: number;
      const formulaIds: string[] = [];
      if (geometry === 'cylinder-cone') {
        const radius = num(v, 'radius');
        const coneHeight = num(v, 'coneHeight');
        if (!finite(radius, coneHeight)) return err();
        volume = run('volume-cylinder-with-cone', {
          radius,
          cylHeight: height,
          coneHeight,
        });
        formulaIds.push('volume-cylinder-with-cone');
      } else if (geometry === 'cylinder') {
        const radius = num(v, 'radius');
        if (!finite(radius)) return err();
        volume = run('volume-cylinder', { radius, height });
        formulaIds.push('volume-cylinder');
      } else {
        const length = num(v, 'length');
        const width = num(v, 'width');
        if (!finite(length, width)) return err();
        volume = run('volume-rect-prism', { length, width, height });
        formulaIds.push('volume-rect-prism');
      }
      const outputs: ToolResult['outputs'] = [
        { label: 'Geometric volume', value: fmt(volume), unit: 'm³' },
      ];

      // The packing factor reduces the volume BEFORE any mass is taken from it:
      // mass follows from the space the commodity actually occupies.
      let usableVolume = volume;
      const packingRaw = (v.packing ?? '').trim();
      if (packingRaw !== '') {
        const factor = num(v, 'packing');
        if (!finite(factor)) return err();
        usableVolume = run('volume-with-packing-factor', { volume, factor });
        outputs.push({
          label: `Effective volume at the ${fmt(factor)}% packing factor you entered`,
          value: fmt(usableVolume),
          unit: 'm³',
          note: 'Your own figure for the share of the geometry the commodity occupies. It is not the void space between particles — that is already inside bulk density.',
        });
        formulaIds.push('volume-with-packing-factor');
      }

      const raw = v.density ?? '';
      if (raw.trim() !== '') {
        const density = num(v, 'density');
        if (!finite(density)) return err();
        outputs.push({
          label: 'Mass at the bulk density entered',
          value: fmt(
            run('mass-from-volume-density', { volume: usableVolume, density }),
          ),
          unit: 'kg',
          note:
            packingRaw !== ''
              ? 'Taken from the effective volume above, not the geometric volume.'
              : undefined,
        });
        outputs.push({
          label: 'Bulk density used',
          value: fmt(run('density-kgm3-to-lbft3', { value: density })),
          unit: 'lb/ft³',
        });
        formulaIds.push('mass-from-volume-density', 'density-kgm3-to-lbft3');
      }
      return { outputs, formulaIds };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const blending: ToolConfig = {
  slug: 'commodity-blending-calculator',
  searchAliases: ['blending', 'blend ratio', 'weighted average'],
  title: 'Commodity blending calculator',
  category: 'commodity',
  purpose:
    'Calculates the attribute value of a two-lot blend, or the quantity of a second lot that reaches a target value.',
  formulaIds: ['blend-two-lot-weighted-average', 'blend-required-lot-b'],
  fields: [
    {
      key: 'mode',
      label: 'Calculation',
      type: 'select',
      default: 'average',
      options: [
        { value: 'average', label: 'Blend value from two lot quantities' },
        {
          value: 'target',
          label: 'Lot B quantity that reaches a target value',
        },
      ],
    },
    {
      key: 'attribute',
      label: 'Attribute being blended',
      type: 'select',
      default: 'moisture',
      options: [
        { value: 'moisture', label: 'Moisture (blends linearly)' },
        { value: 'protein', label: 'Protein (blends linearly)' },
        { value: 'oil', label: 'Oil (blends linearly)' },
        { value: 'custom', label: 'Other linear attribute (user-defined)' },
        {
          value: 'test-weight',
          label: 'Test weight — UNSUPPORTED, does not blend linearly',
        },
      ],
      help: 'Only mass-weighted, linearly-blending attributes are calculated here. Test weight is listed to refuse it, not to compute it.',
    },
    basisField(
      'Basis both lots are reported on',
      'Both lots must be on the one basis. A wet-basis figure and a dry-basis figure cannot be averaged together.',
    ),
    {
      key: 'qa',
      label: 'Lot A quantity',
      type: 'number',
      min: 0,
      step: 0.01,
      required: true,
      help: 'Any mass unit, as long as both lots use the same one.',
    },
    {
      key: 'xa',
      label: 'Lot A attribute value',
      type: 'number',
      step: 0.01,
      required: true,
    },
    {
      key: 'qb',
      label: 'Lot B quantity',
      type: 'number',
      min: 0,
      step: 0.01,
      required: true,
      showIf: (v) => v.mode !== 'target',
    },
    {
      key: 'xb',
      label: 'Lot B attribute value',
      type: 'number',
      step: 0.01,
      required: true,
    },
    {
      key: 'xt',
      label: 'Target attribute value',
      type: 'number',
      step: 0.01,
      required: true,
      showIf: (v) => v.mode === 'target',
      help: 'A target outside the range the two lots span cannot be reached by blending them at any ratio.',
    },
  ],
  limitations: [
    'Linear attributes only. Test weight, falling number, and most functional and rheological properties do not blend linearly, and a weighted average of them is wrong rather than approximate — this tool refuses them rather than returning a plausible-looking figure.',
    'Both lots must share a unit and a basis. Mixing bases silently corrupts the result, which is why the basis is an explicit input carried through to the output.',
    'Arithmetic on a homogeneous mix. Whether the blend is actually homogeneous is a physical operation, not a calculation.',
    'Two lots only.',
  ],
  safetyDisclosure:
    'Not a grade, compliance, or contract determination. A blended average does not establish that a lot meets a grade or a specification, and blending to disguise a defect or evade a standard is a matter for the applicable standard and the law, not for this tool.',
  compute: (v): ToolResult => {
    if (v.attribute === 'test-weight')
      return err(
        'Test weight is not calculated here: it does not blend linearly, so a mass-weighted average of two test weights is wrong rather than approximate. Test weight is a graded measurement of the blended lot and has to be measured on that lot after blending.',
      );
    const basis = v.basis ?? '';
    if (!isBasis(basis))
      return err(
        'Choose the basis both lots are reported on. A wet-basis figure and a dry-basis figure cannot be averaged together.',
      );
    const attrLabel =
      v.attribute === 'custom' ? 'attribute' : (v.attribute ?? 'attribute');

    // A dry-basis figure is denominated on DRY MATTER, so a dry-basis blend is
    // dry-matter-weighted — NOT total-mass-weighted. Blending dry-basis numbers
    // with the total-mass formula over-weights the wetter lot and is wrong by
    // tens of percentage points on ordinary lots.
    //
    // For MOISTURE we can fix this exactly by restating both lots on the wet
    // basis (where total mass genuinely is the right weight), blending there,
    // and converting the result back. That is provably identical to weighting
    // by dry matter, and it composes registry formulas rather than introducing
    // a second weighting rule.
    //
    // For protein or oil reported on a dry-matter basis the same dry-matter
    // weighting applies, but this tool has no moisture input, so the dry matter
    // is not computable from what the user gave us. It refuses rather than
    // silently returning the wrong weighting.
    const dry = basis === 'dry-basis';
    if (dry && v.attribute !== 'moisture')
      return err(
        `A dry-basis ${attrLabel} is denominated on dry matter, so blending it is weighted by dry matter rather than by total mass — and the dry matter cannot be derived without each lot's moisture, which this tool does not ask for. Restate both lots on an as-received (wet) basis and blend those, or blend the dry matter and the ${attrLabel} mass separately.`,
      );

    const qa = num(v, 'qa');
    const xa = num(v, 'xa');
    const xb = num(v, 'xb');
    if (!finite(qa, xa, xb)) return err();
    // On the dry basis, work in wet-basis space and convert back at the end.
    const toWb = (x: number) =>
      dry ? run('moisture-db-to-wb', { mdb: x }) : x;
    const fromWb = (x: number) =>
      dry ? run('moisture-wb-to-db', { mwb: x }) : x;
    const basisFormulas = dry ? ['moisture-db-to-wb', 'moisture-wb-to-db'] : [];
    const dryNote = dry
      ? ' Dry-basis figures are restated on the wet basis to blend, then converted back: a dry-basis blend is weighted by dry matter, not by total mass.'
      : '';
    try {
      const xaW = toWb(xa);
      const xbW = toWb(xb);
      if (v.mode === 'target') {
        const xt = num(v, 'xt');
        if (!finite(xt)) return err();
        const qb = run('blend-required-lot-b', {
          qa,
          xa: xaW,
          xb: xbW,
          xt: toWb(xt),
        });
        const check = fromWb(
          run('blend-two-lot-weighted-average', { qa, xa: xaW, qb, xb: xbW }),
        );
        return {
          outputs: [
            {
              label: 'Lot B quantity to reach the target',
              value: fmt(qb),
              unit: 'same unit as lot A',
            },
            {
              label: `Resulting blend ${attrLabel}`,
              value: fmt(check),
              unit: `% (${basisWord(basis)})`,
              note: 'Recomputed from the blend, as a check on the quantity above.',
            },
          ],
          formulaIds: [
            'blend-required-lot-b',
            'blend-two-lot-weighted-average',
            ...basisFormulas,
          ],
          note: `Both lots read on the ${basisWord(basis)}.${dryNote}`,
        };
      }
      const qb = num(v, 'qb');
      if (!finite(qb)) return err();
      const blend = fromWb(
        run('blend-two-lot-weighted-average', { qa, xa: xaW, qb, xb: xbW }),
      );
      return {
        outputs: [
          {
            label: `Blend ${attrLabel}`,
            value: fmt(blend),
            unit: `% (${basisWord(basis)})`,
          },
        ],
        formulaIds: ['blend-two-lot-weighted-average', ...basisFormulas],
        note: `Both lots read on the ${basisWord(basis)}. A blend cannot leave the range its inputs span.${dryNote}`,
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const processingRecovery: ToolConfig = {
  slug: 'processing-recovery-calculator',
  searchAliases: ['processing recovery', 'recovery rate', 'mass balance'],
  title: 'Processing recovery calculator',
  category: 'processing',
  purpose:
    'Calculates the share of a processing input that leaves as each declared output stream, and the balance the entered figures do not explain.',
  formulaIds: ['recovery-pct', 'mass-balance-unaccounted'],
  fields: [
    {
      key: 'input',
      label: 'Raw input mass',
      type: 'number',
      unit: 'kg',
      min: 0.000001,
      step: 0.01,
      required: true,
    },
    {
      key: 'primary',
      label: 'Primary product mass',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      required: true,
    },
    {
      key: 'coproduct',
      label: 'Co-product mass (optional)',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      help: 'Leave blank if there is no co-product stream.',
    },
    {
      key: 'byproduct',
      label: 'By-product mass (optional)',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      help: 'Leave blank if there is no by-product stream.',
    },
  ],
  limitations: [
    'A ratio of the masses entered, nothing more. It is not an expected or benchmark yield, and this platform publishes no expected recovery figures.',
    'Recovery is not yield: yield usually means production per unit area, which is a different quantity entirely.',
    'Every mass must be on the same basis and in the same unit. Comparing an as-received input with a dried output measures drying as well as recovery.',
    'A blank stream is read as absent (zero mass), not as unmeasured. An unweighed stream will surface in the unaccounted balance instead.',
  ],
  safetyDisclosure:
    'Not a commercial yield expectation, a performance standard, or an efficiency claim. No figure here establishes what a process ought to return.',
  compute: (v): ToolResult => {
    const input = num(v, 'input');
    const primary = num(v, 'primary');
    if (!finite(input, primary)) return err();
    // Blank optional streams mean "this stream does not exist" — a UI decision,
    // not arithmetic. Anything unweighed surfaces in the unaccounted balance.
    const coRaw = (v.coproduct ?? '').trim();
    const byRaw = (v.byproduct ?? '').trim();
    const coproduct = coRaw === '' ? 0 : num(v, 'coproduct');
    const byproduct = byRaw === '' ? 0 : num(v, 'byproduct');
    if (!finite(coproduct, byproduct)) return err();
    try {
      const outputs = [
        {
          label: 'Primary recovery',
          value: fmt(run('recovery-pct', { input, output: primary })),
          unit: '% of input mass',
        },
        {
          label: 'Co-product',
          value: fmt(run('recovery-pct', { input, output: coproduct })),
          unit: '% of input mass',
        },
        {
          label: 'By-product',
          value: fmt(run('recovery-pct', { input, output: byproduct })),
          unit: '% of input mass',
        },
        {
          label: 'Unaccounted balance — NOT waste',
          value: fmt(
            run('mass-balance-unaccounted', {
              input,
              primary,
              coproduct,
              byproduct,
            }),
          ),
          unit: 'kg',
          note: 'The part the entered figures do not explain. It may be moisture lost, dust, fines, material still in the plant, sampling error, or a stream nobody weighed. Calling it waste would assert a fate these numbers do not show. A negative value means the outputs exceed the input — mass was added, or the bases differ.',
        },
      ];
      return {
        outputs,
        formulaIds: ['recovery-pct', 'mass-balance-unaccounted'],
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const postHarvestLoss: ToolConfig = {
  slug: 'post-harvest-loss-calculator',
  searchAliases: ['post-harvest loss', 'physical loss'],
  title: 'Post-harvest loss calculator',
  category: 'post-harvest',
  purpose:
    'Calculates the physical (quantity) loss between two points in a post-harvest chain.',
  formulaIds: ['physical-loss-pct'],
  fields: [
    {
      key: 'q0',
      label: 'Initial quantity',
      type: 'number',
      unit: 'kg',
      min: 0.000001,
      step: 0.01,
      required: true,
    },
    {
      key: 'q1',
      label: 'Final usable quantity',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      required: true,
    },
    {
      key: 'quality',
      label: 'Your own quality-loss figure (optional)',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 0.01,
      help: 'A separate category. Carried from your own assessment, echoed back on its own line, and never merged into the physical loss.',
    },
    {
      key: 'value',
      label: 'Your own value-loss figure (optional)',
      type: 'number',
      unit: '%',
      min: 0,
      max: 100,
      step: 0.01,
      help: 'A separate category. Carried from your own assessment, echoed back on its own line, and never merged into the physical loss.',
    },
  ],
  limitations: [
    'Physical mass only. A lot that lost no mass but fell a grade has a quality loss, and possibly a value loss, with zero physical loss — the figure below would read 0% and would be right about mass and silent about everything else.',
    'Physical, quality, and value loss are three different quantities on three different denominators. They are never added together here, because a combined "total loss" would double-count and would mean nothing.',
    'Comparing quantities at different moisture contents measures drying, not loss. Restate them on a common basis first, or the number is meaningless.',
    'Describes a difference between two figures. It attributes no cause.',
  ],
  safetyDisclosure:
    'Not a food-safety determination and not a loss-assessment methodology. Material may be unusable for reasons this arithmetic cannot see, and a quality or value loss is an assessment you make, not a number this tool produces.',
  compute: (v): ToolResult => {
    const q0 = num(v, 'q0');
    const q1 = num(v, 'q1');
    if (!finite(q0, q1)) return err();
    try {
      const outputs = [
        {
          label: 'Physical (quantity) loss',
          value: fmt(run('physical-loss-pct', { q0, q1 })),
          unit: '% of initial quantity',
          note: 'Mass only. Says nothing about quality or value.',
        },
      ];
      const qualityRaw = (v.quality ?? '').trim();
      if (qualityRaw !== '') {
        const quality = num(v, 'quality');
        if (!finite(quality)) return err();
        outputs.push({
          label: 'Your own quality-loss figure (entered, not calculated)',
          value: fmt(quality),
          unit: '%',
          note: 'A separate category, shown back to you unchanged and kept apart from the physical loss.',
        });
      }
      const valueRaw = (v.value ?? '').trim();
      if (valueRaw !== '') {
        const value = num(v, 'value');
        if (!finite(value)) return err();
        outputs.push({
          label: 'Your own value-loss figure (entered, not calculated)',
          value: fmt(value),
          unit: '%',
          note: 'A separate category, shown back to you unchanged and kept apart from the physical loss.',
        });
      }
      return {
        outputs,
        formulaIds: ['physical-loss-pct'],
        note: 'Physical, quality, and value loss are reported separately and are never combined into a single figure.',
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const tradeUnitValue: ToolConfig = {
  slug: 'trade-unit-value-calculator',
  searchAliases: ['unit value', 'trade unit value'],
  title: 'Trade unit value calculator',
  category: 'trade',
  purpose:
    'Divides a reported trade value by the quantity reported for the same flow, giving that flow’s unit value.',
  formulaIds: ['trade-unit-value'],
  fields: [
    {
      key: 'value',
      label: 'Reported trade value',
      type: 'number',
      min: 0,
      step: 0.01,
      required: true,
      help: 'As reported, in nominal currency. No deflation and no exchange-rate conversion is applied.',
    },
    {
      key: 'currency',
      label: 'Currency (label only)',
      type: 'select',
      default: 'as-reported',
      options: [
        { value: 'as-reported', label: 'As reported (unspecified)' },
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' },
        { value: 'JPY', label: 'JPY' },
        { value: 'CNY', label: 'CNY' },
        { value: 'INR', label: 'INR' },
        { value: 'BRL', label: 'BRL' },
        { value: 'AUD', label: 'AUD' },
        { value: 'CAD', label: 'CAD' },
        { value: 'ZAR', label: 'ZAR' },
      ],
      help: 'Carried to the output as a label. No exchange rate is applied and no currency is converted.',
    },
    {
      key: 'quantity',
      label: 'Reported quantity',
      type: 'number',
      min: 0.000001,
      step: 0.001,
      required: true,
      help: 'An absent quantity is not zero — a flow with no reported quantity has no unit value at all.',
    },
    {
      key: 'qunit',
      label: 'Quantity unit (label only)',
      type: 'select',
      default: 't',
      options: [
        { value: 't', label: 'tonnes (t)' },
        { value: 'kg', label: 'kilograms (kg)' },
        { value: '1000 t', label: 'thousand tonnes' },
        { value: 'head', label: 'head' },
        { value: 'unit', label: 'unit as reported' },
      ],
    },
    {
      key: 'dataset',
      label: 'Dataset (optional context)',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'Not stated' },
        { value: 'FAOSTAT trade', label: 'FAOSTAT trade' },
        { value: 'UN Comtrade', label: 'UN Comtrade' },
        { value: 'UNCTAD', label: 'UNCTAD' },
        { value: 'a national source', label: 'Other / national source' },
      ],
      help: 'Recorded alongside the result so the figure travels with the flow it came from.',
    },
    {
      key: 'year',
      label: 'Reference year (optional context)',
      type: 'number',
      min: 1900,
      max: 2100,
      step: 1,
      help: 'Reporters revise both value and quantity, so a unit value belongs to a vintage.',
    },
  ],
  limitations: [
    'A unit value is not a price. It is an arithmetic average of a reported aggregate that may span many grades, origins, destinations, contract types, delivery terms, and transaction dates. No transaction need have occurred at this figure.',
    'Import and export unit values for the same flow differ systematically: reported import values commonly include freight and insurance while export values commonly do not, so the two are not comparable without knowing the valuation basis.',
    'The value and the quantity must describe the same reported flow — same reporter, partner, item, year, and direction. Nothing here checks that they do.',
    'Currency is a label only. No exchange-rate conversion and no deflation is applied, so unit values in different currencies or different years are not comparable as they stand.',
    'The unit of the result follows the units entered, and those are yours to keep consistent: value in thousands over quantity in thousands is a per-unit figure, not a per-thousand one.',
  ],
  safetyDisclosure:
    'Not a market price, quotation, valuation, or basis for a transaction, a customs value, or an investment decision. Customs valuation in particular is a legal determination made by the competent authority under its own rules.',
  compute: (v): ToolResult => {
    const value = num(v, 'value');
    const quantity = num(v, 'quantity');
    if (!finite(value, quantity)) return err();
    try {
      const out = run('trade-unit-value', { value, quantity });
      const currency = v.currency ?? 'as-reported';
      const cur =
        currency === 'as-reported' ? 'currency as reported' : currency;
      const qunit = v.qunit ?? 't';
      const dataset = v.dataset ?? '';
      const year = (v.year ?? '').trim();
      const context = [dataset || null, year || null]
        .filter(Boolean)
        .join(', ');
      return {
        outputs: [
          {
            label: 'Unit value',
            value: fmt(out),
            unit: `${cur} per ${qunit}`,
            note: 'An average of a reported aggregate — not a price, and not a quotation.',
          },
        ],
        formulaIds: ['trade-unit-value'],
        note: context
          ? `Nominal currency as reported (${context}). No exchange-rate conversion or deflation is applied.`
          : 'Nominal currency as reported. No exchange-rate conversion or deflation is applied.',
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

const packagingQuantity: ToolConfig = {
  slug: 'packaging-quantity-estimator',
  searchAliases: ['packaging count', 'package count', 'bag count'],
  title: 'Packaging quantity estimator',
  category: 'commodity',
  purpose:
    'Estimates how many uniform packages a quantity of commodity fills, and how much is left in the last one.',
  formulaIds: ['package-count', 'package-remainder'],
  fields: [
    {
      key: 'total',
      label: 'Total commodity quantity',
      type: 'number',
      unit: 'kg',
      min: 0,
      step: 0.01,
      required: true,
    },
    {
      key: 'capacity',
      label: 'Nominal package capacity',
      type: 'number',
      unit: 'kg',
      min: 0.000001,
      step: 0.01,
      required: true,
      help: 'What the package is rated for, before any allowance for how much of it is usable.',
    },
    {
      key: 'fill',
      label: 'Usable fill of nominal capacity',
      type: 'number',
      unit: '%',
      min: 0.000001,
      max: 100,
      step: 0.1,
      default: '100',
      required: true,
      help: 'A package cannot usably hold more than its nominal capacity, so this stays at or below 100%.',
    },
    {
      key: 'reserve',
      label: 'Reserve',
      type: 'number',
      unit: '%',
      min: 0,
      step: 0.1,
      default: '0',
      required: true,
      help: 'Extra packages as a percentage of the count. Your own figure — none is assumed.',
    },
  ],
  limitations: [
    'A count, not a packing plan. Nothing here establishes that the package is suitable, compatible, lawful, or safe for the commodity.',
    'Assumes uniform packages and a commodity that divides freely.',
    'Packages are indivisible, so the count always rounds up: a part-filled package is still a package.',
    'The remainder describes the last package before any reserve is applied — the reserve adds whole spare packages and does not change what is in the last filled one.',
  ],
  safetyDisclosure:
    'Not a determination of packaging suitability, food-contact safety, or regulatory compliance. Whether a package may lawfully hold a given commodity is a matter for the packaging specification, the applicable standard, and the regulator.',
  compute: (v): ToolResult => {
    const total = num(v, 'total');
    const capacity = num(v, 'capacity');
    const fill = num(v, 'fill');
    const reserve = num(v, 'reserve');
    if (!finite(total, capacity, fill, reserve)) return err();
    try {
      return {
        outputs: [
          {
            label: 'Packages (rounded up)',
            value: fmt(
              run('package-count', { total, capacity, fill, reserve }),
              6,
            ),
            unit: 'packages',
            note:
              reserve > 0
                ? `Includes the ${fmt(reserve)}% reserve you entered.`
                : undefined,
          },
          {
            label: 'Remainder in the last filled package',
            value: fmt(run('package-remainder', { total, capacity, fill })),
            unit: 'kg',
            note: 'Zero means the quantity divides exactly — not that no package is needed. The reserve is not applied to this figure.',
          },
        ],
        formulaIds: ['package-count', 'package-remainder'],
      };
    } catch (e) {
      return err((e as Error).message);
    }
  },
};

function err(
  message = 'Enter valid numbers in every required field.',
): ToolResult {
  return { outputs: [], formulaIds: [], error: message };
}

export const TOOLS: ToolConfig[] = [
  fertilizer,
  seedRate,
  plantDensity,
  irrigation,
  gdd,
  yieldConverter,
  unitConverters,
  // Phase 5E
  moistureConverter,
  dryMatterCalculator,
  waterRemoval,
  moistureShrink,
  bulkDensity,
  storageCapacity,
  blending,
  processingRecovery,
  postHarvestLoss,
  tradeUnitValue,
  packagingQuantity,
];

export const TOOL_BY_SLUG: ReadonlyMap<string, ToolConfig> = new Map(
  TOOLS.map((t) => [t.slug, t]),
);

export { AREA_TO_M2, MASS_TO_KG, VOLUME_TO_L };
