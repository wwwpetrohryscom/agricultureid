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
 * Standard bushel test weights (lb per bushel) by commodity. These are legal/
 * customary standard weights, not the actual test weight of a given lot.
 * Source: USDA / long-standing US grain-trade standards.
 */
export const BUSHEL_LB = {
  wheat: 60,
  soybean: 60,
  maize: 56, // shelled corn
  sorghum: 56,
  rye: 56,
  barley: 48,
  oats: 32,
} as const;

/**
 * kg per hectare -> lb per acre, derived from the exact pound and acre
 * definitions: (1 kg ÷ 0.45359237 kg/lb) ÷ (10000 m² ÷ 4046.8564224 m²/acre)
 * = 2.2046226218 lb ÷ 2.4710538147 acre ≈ 0.8921785 lb/acre per kg/ha.
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
