/**
 * Phase 5A — commodity taxonomy vocabulary.
 *
 * The central modelling rule: a **crop** is a living biological entity; a
 * **commodity** is the harvested, traded thing; a **commodity product** is what
 * a commodity is transformed into. These are never conflated. A commodity is
 * always anchored to exactly one parent crop or parent livestock species.
 */

/** Broad commodity grouping (drives facets and hub grouping). */
export const COMMODITY_CLASSES = [
  'cereal-grain',
  'oilseed',
  'pulse',
  'root-tuber',
  'sugar-crop',
  'fruit',
  'nut',
  'vegetable',
  'beverage-crop',
  'fibre',
  'spice',
  'livestock-product',
  'other',
] as const;
export type CommodityClass = (typeof COMMODITY_CLASSES)[number];

/**
 * Controlled use vocabulary. Uses are modelled as a field, NOT as separate
 * pages: a page per use would be a thin registry-field page (see the anti-spam
 * rule in docs/commodity-taxonomy.md).
 */
export const COMMODITY_USES = [
  'food',
  'feed',
  'industrial',
  'seed',
  'fibre',
  'oil',
  'beverage',
  'energy',
] as const;
export type CommodityUse = (typeof COMMODITY_USES)[number];

/** Physical form of the traded commodity or product. */
export const PHYSICAL_FORMS = [
  'whole-grain',
  'seed',
  'bean',
  'cherry',
  'fresh-produce',
  'root-tuber',
  'leaf',
  'stalk',
  'lint',
  'fibre',
  'latex',
  'liquid',
  'flour',
  'meal',
  'oil',
  'crystal',
  'syrup',
  'bran',
  'hull',
  'straw',
  'pomace',
  'other',
] as const;
export type PhysicalForm = (typeof PHYSICAL_FORMS)[number];

/** Classification systems we reference. Codes are versioned + jurisdictional. */
export const CODE_SYSTEMS = [
  'HS',
  'CN',
  'FAOSTAT',
  'USDA',
  'WorldBank',
  'national',
] as const;
export type CodeSystem = (typeof CODE_SYSTEMS)[number];

/**
 * A classification code reference. Codes are ALWAYS versioned and, where
 * relevant, jurisdiction-scoped. AgricultureID does not give customs
 * classification advice — see `CLASSIFICATION_DISCLAIMER`.
 */
export interface CommodityCode {
  system: CodeSystem;
  /** The code as published, e.g. "1001.99" (HS) or "15" (FAOSTAT item). */
  code: string;
  /** Edition/revision the code belongs to, e.g. "HS 2022". Required for HS/CN. */
  version?: string;
  /** Jurisdiction the code applies to when narrower than global. */
  jurisdiction?: string;
  /** Registry source that attests the code. */
  sourceId?: string;
  note?: string;
}

/**
 * Rendered on every page that shows a classification code. Classification is
 * fact-specific and jurisdictional; this is reference information, not advice.
 */
export const CLASSIFICATION_DISCLAIMER =
  'Commodity classification can depend on composition, processing level, intended use, packaging, jurisdiction, and current tariff rules. Codes here are dated reference information, not customs classification advice — confirm with the applicable authority.';

/** Legal standing of a grading standard. */
export const GRADE_LEGAL_STATUS = [
  'mandatory',
  'voluntary',
  'contractual',
  'unknown',
] as const;
export type GradeLegalStatus = (typeof GRADE_LEGAL_STATUS)[number];

/**
 * A single criterion within a grading standard, summarised — never reproduced
 * verbatim from a copyrighted standard. Quantitative criteria (a `value` with a
 * `unit`) require a Tier 1–2 provenanced claim on the page.
 */
export interface GradeCriterion {
  /** What is measured, e.g. "Moisture", "Test weight", "Foreign material". */
  attribute: string;
  /** The threshold as published, e.g. "14.0". Omit rather than guess. */
  value?: string;
  /** Unit for `value`, e.g. "% (wet basis)", "kg/hL". Required with `value`. */
  unit?: string;
  /** Measurement basis, e.g. "wet basis", "as-received", "dry matter". */
  basis?: string;
  /** Direction of the limit. */
  limitType?: 'maximum' | 'minimum' | 'range' | 'descriptive';
  note?: string;
}

/**
 * Product role relative to its parent commodity.
 * - primary-product: the main intended output (wheat grain → flour)
 * - co-product: a deliberate, valuable simultaneous output (soybean → meal+oil)
 * - by-product: a residual output of lower value (sugarcane → bagasse)
 */
export const PRODUCT_CLASSES = [
  'primary-product',
  'co-product',
  'by-product',
] as const;
export type ProductClass = (typeof PRODUCT_CLASSES)[number];

/**
 * How precisely an image depicts a commodity/product. Never present a living
 * crop photo as the harvested or processed commodity without this label.
 */
export const COMMODITY_IMAGE_IDENTITY = [
  'exactCommodity',
  'processedProduct',
  'parentCropRepresentative',
  'handlingContext',
  'unavailable',
] as const;
export type CommodityImageIdentity = (typeof COMMODITY_IMAGE_IDENTITY)[number];
