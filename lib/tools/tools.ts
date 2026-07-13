import type { ToolConfig, ToolResult } from '@/types/tools';
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

/** Compute helper: run a registered formula by id. */
function run(id: string, inputs: Record<string, number | string>): number {
  const f = getFormula(id);
  if (!f) throw new Error(`Unknown formula ${id}`);
  return f.compute(inputs);
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
  title: 'Agricultural unit converters',
  category: 'conversion',
  purpose:
    'Convert common agricultural units: area, mass, volume (US/Imperial), temperature, water depth, and application rate.',
  formulaIds: [],
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
  ],
  limitations: [
    'US and Imperial gallons differ — check which your data uses. Constants are exact where a legal definition exists.',
  ],
  compute: (v): ToolResult => {
    const value = num(v, 'value');
    if (!finite(value)) return err();
    try {
      let out: number;
      let unit = '';
      if (v.dim === 'area') {
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
        outputs: [{ label: 'Result', value: fmt(out, 6), unit }],
        formulaIds: [],
      };
    } catch {
      return err('Choose valid units.');
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
];

export const TOOL_BY_SLUG: ReadonlyMap<string, ToolConfig> = new Map(
  TOOLS.map((t) => [t.slug, t]),
);

export { AREA_TO_M2, MASS_TO_KG, VOLUME_TO_L };
