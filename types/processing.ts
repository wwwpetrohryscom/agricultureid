/**
 * Phase 5C — processing and product-transformation vocabulary.
 *
 * The line this file draws, and the reason the type exists:
 *
 * A **post-harvest operation** conditions a lot without changing what it is —
 * dried wheat grain is still wheat grain, cooled apples are still apples.
 * A **processing method** changes identity: milling turns wheat grain into
 * flour, bran, and germ, which are different entities with different markets.
 *
 * That is a genuine semantic break, not a granularity preference, and it is why
 * processing is modelled as its own type rather than another `postHarvestClass`:
 * a processing method is a transformation node with typed inputs and outputs, a
 * chain that can be walked, and cycles that must be rejected.
 */

/** What the method does, physically. */
export const PROCESSING_CLASSES = [
  'cleaning',
  'separation',
  'size-reduction',
  'dehulling',
  'milling',
  'pressing',
  'extraction',
  'thermal',
  'fermentation',
  'drying',
  'concentration',
  'preservation',
  'fibre-processing',
  'conditioning',
] as const;
export type ProcessingClass = (typeof PROCESSING_CLASSES)[number];

/**
 * Where the method sits in a processing line. Stages are an **ordered
 * vocabulary field**, not pages: a "cleaning stage" page would restate the
 * methods it contains and duplicate their intent (see
 * docs/processing-transformation-model.md). Order is used to check that a
 * declared sequence runs forwards.
 */
export const PROCESSING_STAGES = [
  'receiving',
  'pre-treatment',
  'preparation',
  'primary-transformation',
  'separation',
  'refining',
  'finishing',
] as const;
export type ProcessingStage = (typeof PROCESSING_STAGES)[number];

/** The physical or biochemical basis the transformation rests on. */
export const TRANSFORMATION_BASES = [
  'mechanical',
  'physical',
  'thermal',
  'biochemical',
  'chemical',
  'combined',
] as const;
export type TransformationBasis = (typeof TRANSFORMATION_BASES)[number];

/**
 * Rendered on every processing page. These are reference descriptions of what a
 * process does and why — never instructions for running one.
 */
export const PROCESSING_SCOPE_DISCLAIMER =
  'This is an educational reference description of what the process does and why, not an operating instruction. Industrial processing requires qualified engineering, commissioned safety systems, and compliance with local regulation and the facility’s own procedures. No temperatures, pressures, concentrations, or settings here are intended as plant instructions.';

/**
 * A residue is not automatically waste. Bran, hulls, bagasse, pomace, pulp, and
 * press cake all have established feed, fuel, fibre, or soil uses, and calling
 * them waste misrepresents both the economics and the material flow. The model
 * therefore has no "waste" product class: a stream is a by-product with stated
 * uses, and only genuinely unused streams are described as residue in prose.
 */
export const RESIDUE_NOT_WASTE_NOTE =
  'Residual streams are modelled as by-products, not waste: most have established feed, fuel, fibre, or soil-amendment uses. Where a stream genuinely has no recovered use in a given context, that is stated with its context rather than generalised.';
