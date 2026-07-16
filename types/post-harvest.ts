/**
 * Phase 5B — post-harvest quality, storage, defect, and measurement vocabulary.
 *
 * The distinction this file exists to keep structural: a **quality attribute**
 * is a measurable property of a lot; a **measurement** is how you observe it; a
 * **defect** is a way the lot goes wrong; a **process/system** (the existing
 * `post-harvest` type) is what you do about it. Measuring one attribute is not
 * the same as knowing a lot's quality, its grade, or its safety.
 */

/** What kind of property an attribute is. */
export const ATTRIBUTE_CLASSES = [
  'physical',
  'chemical',
  'biological',
  'sensory',
  'composite',
] as const;
export type AttributeClass = (typeof ATTRIBUTE_CLASSES)[number];

/**
 * Which question an attribute actually answers. Conflating these is the most
 * common and most consequential post-harvest error: moisture content is a
 * storage-stability property, not a safety verdict; a grade is a commercial
 * description, not a quality total. Every attribute page must declare exactly
 * one primary domain and state what it is NOT an indicator of.
 */
export const QUALITY_DOMAINS = [
  'quality-measurement',
  'commercial-grading',
  'food-feed-safety',
  'storage-stability',
  'processing-suitability',
] as const;
export type QualityDomain = (typeof QUALITY_DOMAINS)[number];

/** How a defect arises. */
export const DEFECT_CLASSES = [
  'mechanical',
  'physiological',
  'pathological',
  'entomological',
  'chemical',
  'handling',
] as const;
export type DefectClass = (typeof DEFECT_CLASSES)[number];

/** How a measurement is made. */
export const MEASUREMENT_CLASSES = [
  'instrumental',
  'laboratory',
  'sensory',
  'visual',
  'destructive',
  'non-destructive',
] as const;
export type MeasurementClass = (typeof MEASUREMENT_CLASSES)[number];

/** Where in the chain a post-harvest operation sits. */
export const PROCESS_STAGES = [
  'harvest',
  'field-handling',
  'preparation',
  'conditioning',
  'storage',
  'transport',
  'market',
] as const;
export type ProcessStage = (typeof PROCESS_STAGES)[number];

/**
 * Post-harvest classes that genuinely describe a place a commodity is HELD.
 * Phase 5A's `storageSystems` edge is restricted to these: a drying or grading
 * operation is a process a lot passes through, not a system it is stored in.
 */
export const STORAGE_LIKE_CLASSES = ['storage', 'cooling'] as const;

/**
 * Rendered on defect pages. Visual appearance is suggestive, not diagnostic:
 * many post-harvest disorders look alike, and several that matter for safety
 * (notably mycotoxin contamination) are not visible at all.
 */
export const DIAGNOSIS_DISCLAIMER =
  'Visual symptoms alone do not confirm a cause. Post-harvest disorders frequently resemble one another, and some hazards — mycotoxin contamination in particular — can be present without any visible sign. Confirmation requires appropriate laboratory testing and qualified advice.';
