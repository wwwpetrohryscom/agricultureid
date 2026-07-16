/**
 * Phase 3C — tested unit-conversion constants. Single source of truth for every
 * conversion factor used by the calculators. Constants are exact where an exact
 * definition exists (e.g. 1 lb = 0.45359237 kg by definition) and sourced
 * otherwise. Never duplicate a factor in a component — import from here.
 */

/** Linear conversion factors to a base unit, by dimension. */
export const AREA_TO_M2 = {
  m2: 1,
  hectare: 10_000,
  acre: 4046.8564224, // 1 acre = 4840 sq yd = 4046.8564224 m² (exact)
  km2: 1_000_000,
} as const;

export const MASS_TO_KG = {
  kg: 1,
  tonne: 1000,
  lb: 0.45359237, // exact (international avoirdupois pound)
  'cwt-us': 45.359237, // US hundredweight = 100 lb
  'cwt-uk': 50.80234544, // UK/long hundredweight = 112 lb
} as const;

export const VOLUME_TO_L = {
  litre: 1,
  m3: 1000,
  'gal-us': 3.785411784, // US liquid gallon (exact)
  'gal-imp': 4.54609, // Imperial gallon (exact)
} as const;

/**
 * A commodity's standard bushel weight, with the provenance that makes it
 * meaningful.
 *
 * ## The bushel is a VOLUME unit being used as a MASS convention
 *
 * A bushel is properly a unit of volume (the US bushel is 2150.42 in³, ≈35.24 L).
 * The grain trade does not weigh volume, so it fixes, per commodity, a "standard
 * weight" — the mass of grain that one bushel of that commodity is *taken* to
 * contain. That convention is why maize and wheat bushels are different masses,
 * and it is why there is no generic bushel-to-mass constant: the number is a
 * property of the commodity and the jurisdiction, not of the unit.
 *
 * ## A standard weight is not a test weight
 *
 * The standard weight is a fixed conversion constant. A lot's *test weight* is a
 * measured property of that lot and routinely differs from it. A lot below
 * standard test weight still converts at the standard weight; what a buyer does
 * about the shortfall is a contract matter, not arithmetic.
 */
export interface BushelStandard {
  /** Select key. */
  key: string;
  /** Human label. */
  label: string;
  /** The commodity this standard is defined for (must resolve to a commodity). */
  commoditySlug: string;
  /** Standard weight, pounds per bushel. */
  lbPerBushel: number;
  /** Where this standard has force. NEVER assume it travels. */
  jurisdiction: string;
  /** The instrument/authority that fixes it. */
  standard: string;
  /** Registry source id attesting it. */
  sourceId: string;
  note?: string;
}

/**
 * US standard bushel weights.
 *
 * Deliberately United States only. These are the long-standing US legal and
 * customary weights used by USDA's grain inspection and marketing programs;
 * other jurisdictions trade the same grains by mass and do not use a bushel at
 * all. A commodity absent from this table has no supported bushel conversion
 * here, and the tools refuse rather than substituting a plausible number.
 */
export const BUSHEL_STANDARDS = [
  {
    key: 'wheat',
    label: 'Wheat',
    commoditySlug: 'wheat-grain',
    lbPerBushel: 60,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
  {
    key: 'soybean',
    label: 'Soybeans',
    commoditySlug: 'soybeans',
    lbPerBushel: 60,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
  {
    key: 'maize',
    label: 'Maize (shelled corn)',
    commoditySlug: 'maize-grain',
    lbPerBushel: 56,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
    note: 'Shelled corn. Ear corn is traded on a different convention entirely.',
  },
  {
    key: 'sorghum',
    label: 'Sorghum',
    commoditySlug: 'sorghum-grain',
    lbPerBushel: 56,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
  {
    key: 'rye',
    label: 'Rye',
    commoditySlug: 'rye-grain',
    lbPerBushel: 56,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
  {
    key: 'barley',
    label: 'Barley',
    commoditySlug: 'barley-grain',
    lbPerBushel: 48,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
  {
    key: 'oats',
    label: 'Oats',
    commoditySlug: 'oat-grain',
    lbPerBushel: 32,
    jurisdiction: 'United States',
    standard: 'US standard bushel weight (USDA grain inspection and marketing)',
    sourceId: 'usda-ams',
  },
] as const satisfies readonly BushelStandard[];

/** The supported bushel keys, as a literal union rather than `string`. */
export type BushelKey = (typeof BUSHEL_STANDARDS)[number]['key'];

export const BUSHEL_BY_KEY: ReadonlyMap<string, BushelStandard> = new Map(
  BUSHEL_STANDARDS.map((b) => [b.key, b]),
);

/**
 * Standard bushel weights by key. DERIVED from `BUSHEL_STANDARDS` so the weight
 * and its provenance cannot drift apart — the number is never available without
 * a row that says which jurisdiction and authority fix it.
 */
export const BUSHEL_LB: Readonly<Record<BushelKey, number>> = Object.freeze(
  Object.fromEntries(
    BUSHEL_STANDARDS.map((b) => [b.key, b.lbPerBushel]),
  ) as Record<BushelKey, number>,
);

/**
 * kg per hectare -> lb per acre, derived from the exact pound and acre
 * definitions: (1 kg ÷ 0.45359237 kg/lb) ÷ (10000 m² ÷ 4046.8564224 m²/acre)
 * = 2.2046226218 lb ÷ 2.4710538147 acre = 0.8921791216197045 lb/acre per kg/ha.
 *
 * The value is computed, never typed: an earlier comment here rounded it to
 * 0.8921785, which is wrong from the seventh significant figure, and that
 * mis-rounded figure was then copied into a formula's published expression —
 * so the expression named a constant the code did not use. Deriving it from the
 * two exact definitions is the only way the number and its derivation cannot
 * disagree.
 */
export const KG_HA_TO_LB_ACRE = 1 / 0.45359237 / (10_000 / 4046.8564224);

/**
 * Elemental conversion factors for fertilizer oxide notation. Derived from
 * atomic masses (P 30.973762, K 39.0983, O 15.999).
 * P₂O₅ -> P and K₂O -> K.
 */
export const P2O5_TO_P = (2 * 30.973762) / (2 * 30.973762 + 5 * 15.999); // ≈ 0.43642
export const K2O_TO_K = (2 * 39.0983) / (2 * 39.0983 + 15.999); // ≈ 0.83014

export type AreaUnit = keyof typeof AREA_TO_M2;
export type MassUnit = keyof typeof MASS_TO_KG;
export type VolumeUnit = keyof typeof VOLUME_TO_L;

/** Convert a value between two units of the same linear dimension. */
export function convertLinear(
  value: number,
  from: string,
  to: string,
  table: Record<string, number>,
): number {
  const f = table[from];
  const t = table[to];
  if (f == null || t == null) throw new Error(`Unknown unit: ${from} or ${to}`);
  return (value * f) / t;
}

export function convertArea(
  value: number,
  from: AreaUnit,
  to: AreaUnit,
): number {
  return convertLinear(value, from, to, AREA_TO_M2);
}
export function convertMass(
  value: number,
  from: MassUnit,
  to: MassUnit,
): number {
  return convertLinear(value, from, to, MASS_TO_KG);
}
export function convertVolume(
  value: number,
  from: VolumeUnit,
  to: VolumeUnit,
): number {
  return convertLinear(value, from, to, VOLUME_TO_L);
}

/** Temperature conversions (affine, handled separately from linear factors). */
export function cToF(c: number): number {
  return (c * 9) / 5 + 32;
}
export function fToC(f: number): number {
  return ((f - 32) * 5) / 9;
}

/**
 * Water depth (mm) over an area to volume. 1 mm over 1 ha = 10 m³ (10,000 m² ×
 * 0.001 m). Returns cubic metres.
 */
export function depthToVolumeM3(depthMm: number, areaHa: number): number {
  return depthMm * areaHa * 10;
}

/** Round to a number of significant digits (avoids fake precision). */
export function toSigDigits(value: number, digits: number): number {
  if (value === 0 || !Number.isFinite(value)) return value;
  const d = Math.ceil(Math.log10(Math.abs(value)));
  const power = digits - d;
  const factor = Math.pow(10, power);
  return Math.round(value * factor) / factor;
}
