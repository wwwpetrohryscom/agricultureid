import type { RelationType } from '@/types/content';

/**
 * Phase 5F — the structural-discovery contract.
 *
 * ## The problem this solves, and the one it must not re-create
 *
 * Graph edges used to come from a hand-maintained `switch (item.contentType)`.
 * Phase 5D's five types never added a case, so they contributed zero edges and
 * every gate stayed green. Discovery is now STRUCTURAL — it walks an item's own
 * fields — so a new content type participates the moment it declares a ref.
 *
 * But structural discovery on its own is too permissive: it would happily invent
 * an edge from any field that happens to hold a `{type, slug}` object, and it
 * cannot know what relation that field means. So discovery is structural and
 * **mapping is declared**, and the gap between the two is a hard error:
 *
 * - the walker finds candidate refs anywhere in an item's top-level fields;
 * - this registry says which fields are graph fields and what they mean;
 * - a ref found in a field that is NOT registered fails `content:validate`
 *   (`graph-unmapped-ref-field`).
 *
 * That keeps both properties: no content-type switch to forget, and no field
 * silently becoming an edge with a guessed meaning. Adding a reference field is
 * a deliberate act; forgetting to map it is loud.
 *
 * ## What can never be an edge
 *
 * The walker's `isContentRef` guard requires `type` AND `slug` AND that `type`
 * is a real content type. That rules out, structurally rather than by listing:
 *
 * - `sourceReferences` — carries `sourceId`, no `type`/`slug`
 * - `claims[].citations` — `FieldCitation`, same
 * - `image` — `ImageMeta`, no `type`/`slug` pair
 * - `commodityCodes` / `classificationSystems` — `system`/`code`
 * - dataset ids, formula ids, tool slugs, glossary terms — plain strings
 * - `sections[].body[]` blocks — carry `type: 'paragraph'`, but no `slug`, and
 *   "paragraph" is not a content type
 * - any ordinary string array
 *
 * tests/phase5f-fixtures.test.ts asserts each of these against a fixture that
 * deliberately contains all of them.
 */

/** Where an edge came from. Generated edges are never presented as authored. */
export type EdgeOrigin =
  /** Written on the page by an author. */
  | 'declared'
  /** Written by a generator that inverts another field (e.g. producedBy). */
  | 'generated'
  /** Computed by the graph at read time from a declared edge's inverse. */
  | 'inverse';

export interface RefFieldSpec {
  /** The relation this field asserts, unless `byType` overrides it. */
  relation: RelationType;
  /**
   * Per-content-type override. Field names are NOT unique across types:
   * `relevantStandards` means `gradedUnder` on a post-harvest operation but
   * `governedByStandard` on a trade concept.
   */
  byType?: Partial<Record<string, RelationType>>;
  origin: EdgeOrigin;
  /**
   * A generic field cannot assert a precise relation, so its relation is
   * inferred from the endpoint types at read time. Only `connections` and
   * `relatedTopics` may set this.
   */
  generic?: true;
  /** Which generator writes this field, when `origin: 'generated'`. */
  generator?: string;
  note?: string;
}

/**
 * Every field that may become a semantic edge.
 *
 * A ref found in a field absent from this table is a validator error, not a
 * silently-guessed edge.
 */
export const REF_FIELDS: Readonly<Record<string, RefFieldSpec>> = {
  /* ---- Generic association fields ---------------------------------- */
  // These two cannot assert a precise relation — the author is saying only
  // "these are related". The relation is inferred conservatively from the
  // endpoint types (see genericRelation), and falls back to `relatedConcept`
  // rather than guessing causation.
  connections: {
    relation: 'relatedConcept',
    origin: 'declared',
    generic: true,
  },
  relatedTopics: {
    relation: 'relatedConcept',
    origin: 'declared',
    generic: true,
  },

  /* ---- Crop / soil / pest / disease -------------------------------- */
  commonDiseases: { relation: 'susceptibleTo', origin: 'declared' },
  commonPests: { relation: 'susceptibleTo', origin: 'declared' },
  suitableSoils: { relation: 'suitableForSoil', origin: 'declared' },
  suitedCrops: { relation: 'suitableFor', origin: 'declared' },
  hostCrops: { relation: 'affects', origin: 'declared' },

  /* ---- Sub-entities ------------------------------------------------ */
  parentCrop: { relation: 'cultivarOf', origin: 'declared' },
  parentLivestock: { relation: 'breedOf', origin: 'declared' },

  /* ---- Phase 5A — commodity taxonomy ------------------------------- */
  sourceCrop: { relation: 'harvestedFrom', origin: 'declared' },
  sourceLivestock: { relation: 'harvestedFrom', origin: 'declared' },
  primaryProducts: { relation: 'processedInto', origin: 'declared' },
  coProducts: { relation: 'producesCoProduct', origin: 'declared' },
  byProducts: { relation: 'producesByProduct', origin: 'declared' },
  applicableGrades: { relation: 'gradedUnder', origin: 'declared' },
  storageSystems: { relation: 'storedUsing', origin: 'declared' },
  derivedFrom: { relation: 'derivedFromCommodity', origin: 'declared' },
  gradedCommodity: { relation: 'gradeAppliesTo', origin: 'declared' },

  /* ---- Phase 5B — post-harvest quality ----------------------------- */
  appliesToCommodities: { relation: 'hasQualityAttribute', origin: 'declared' },
  measuredBy: { relation: 'measuredBy', origin: 'declared' },
  measures: { relation: 'measures', origin: 'declared' },
  relatedDefects: { relation: 'susceptibleToDefect', origin: 'declared' },
  reducedByProcesses: { relation: 'reducedByProcess', origin: 'declared' },
  monitoringMethods: { relation: 'monitoredWith', origin: 'declared' },
  equipment: { relation: 'usesEquipment', origin: 'declared' },

  /* ---- Phase 5C — processing --------------------------------------- */
  inputCommodities: { relation: 'processInputOf', origin: 'declared' },
  primaryOutputs: { relation: 'producesPrimaryProduct', origin: 'declared' },
  coProductOutputs: { relation: 'producesCoProduct', origin: 'declared' },
  byProductOutputs: { relation: 'producesByProduct', origin: 'declared' },
  typicalEquipment: { relation: 'usesEquipment', origin: 'declared' },
  precededBy: { relation: 'precededByProcess', origin: 'declared' },
  followedBy: { relation: 'followedByProcess', origin: 'declared' },
  // Two processing steps that bear on each other, without a claimed sequence or
  // transformation. Genuinely an association, so genuinely symmetric.
  relatedOperations: { relation: 'relatedProcessingStep', origin: 'declared' },
  // DERIVED, not authored: scripts/build-produced-by.mjs inverts each method's
  // declared outputs. Marked so the graph never presents it as an author's
  // assertion — it is a computed inverse that happens to be materialised into
  // the content for the validator to check both directions.
  producedBy: {
    relation: 'producedByProcess',
    origin: 'generated',
    generator: 'scripts/build-produced-by.mjs',
  },

  /* ---- Phase 5D — trade, logistics, standards, market, risk -------- */
  associatedDocuments: { relation: 'associatedDocument', origin: 'declared' },
  relatedConcepts: { relation: 'relatedTradeConcept', origin: 'declared' },
  relatedTradeConcepts: { relation: 'relatedTradeConcept', origin: 'declared' },
  relatedLogistics: { relation: 'relatedLogisticsConcept', origin: 'declared' },
  relatedStandards: { relation: 'relatedStandard', origin: 'declared' },
  relatedTerms: { relation: 'relatedMarketTerm', origin: 'declared' },
  relatedRisks: { relation: 'relatedRisk', origin: 'declared' },
  relatedGrades: { relation: 'gradeAppliesTo', origin: 'declared' },
  qualityRisks: { relation: 'assessesQuality', origin: 'declared' },
  dependsOnOperations: { relation: 'dependsOnOperation', origin: 'declared' },
  exposedToRisks: { relation: 'exposedToRisk', origin: 'declared' },
  addressedByStandards: { relation: 'governedByStandard', origin: 'declared' },
  affectedLogistics: { relation: 'riskAffects', origin: 'declared' },
  affectedTradeConcepts: { relation: 'riskAffects', origin: 'declared' },

  /* ---- Fields whose meaning depends on the declaring type ---------- */
  // `relevantStandards` on a post-harvest operation names the GRADE standard the
  // operation is performed against; on a trade or logistics concept it names the
  // instrument that governs the concept. Same field name, different assertion.
  relevantStandards: {
    relation: 'governedByStandard',
    byType: {
      'post-harvest': 'gradedUnder',
      'trade-concept': 'governedByStandard',
      'logistics-concept': 'governedByStandard',
    },
    origin: 'declared',
  },
  // A pest DAMAGES a commodity; a supply-chain risk ACTS ON one. A defect is
  // damage; a risk is a mechanism.
  affectedCommodities: {
    relation: 'riskAffects',
    byType: {
      'post-harvest-defect': 'damagesCommodity',
      'supply-chain-risk': 'riskAffects',
    },
    origin: 'declared',
  },
  // On post-harvest this had NO mapping and fell back to a generic
  // `relatedConcept` — the operation genuinely applies TO the commodity, which
  // is what the other types' `appliesToCommodity` already says.
  applicableCommodities: {
    relation: 'appliesToCommodity',
    origin: 'declared',
  },
};

/** The relation a field asserts for a given declaring content type. */
export function relationForField(
  field: string,
  contentType: string,
): RelationType | undefined {
  const spec = REF_FIELDS[field];
  if (!spec) return undefined;
  return spec.byType?.[contentType] ?? spec.relation;
}

/** Is this field a registered graph field at all? */
export function isRefField(field: string): boolean {
  return field in REF_FIELDS;
}

/** Generic fields cannot assert a precise relation. */
export function isGenericField(field: string): boolean {
  return REF_FIELDS[field]?.generic === true;
}

export function originForField(field: string): EdgeOrigin {
  return REF_FIELDS[field]?.origin ?? 'declared';
}
