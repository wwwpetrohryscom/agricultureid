import { ALL_CONTENT, refKey, resolveRef } from '@/lib/content/registry';
import { CONTENT_TYPES } from '@/lib/site';
import {
  REF_FIELDS,
  isGenericField,
  isRefField,
  relationForField,
} from '@/lib/content/ref-fields';
import type { ContentType } from '@/lib/site';
import type {
  AnyContent,
  ContentRef,
  RelationType,
  SemanticEdge,
} from '@/types/content';

/** The complete controlled vocabulary (runtime set for validation). */
/** Every valid content type, for structural ref discovery. */
const CONTENT_TYPE_SET: ReadonlySet<string> = new Set(CONTENT_TYPES);

export const RELATION_TYPES: ReadonlySet<RelationType> = new Set<RelationType>([
  'affects',
  'susceptibleTo',
  'suitableForSoil',
  'suitableFor',
  'requiresNutrient',
  'associatedWithDeficiency',
  'suppliesNutrient',
  'suppliedByFertilizer',
  'appliedToCrop',
  'managedWith',
  'cultivatedWith',
  'usedToCultivate',
  'usedToHarvest',
  'usedToApply',
  'irrigatedBy',
  'irrigates',
  'sensitiveToClimate',
  'riskIncreasesUnder',
  'affectsNutrientAvailability',
  'partOfFarmingSystem',
  'includesCrop',
  'commonlyRaisedIn',
  'includesLivestock',
  'feedsOn',
  'cultivarOf',
  'hasCultivar',
  'breedOf',
  'hasBreed',
  'developedFrom',
  'adaptedToClimate',
  'adaptedToSoil',
  'resistantTo',
  'usedFor',
  'registeredIn',
  'protectedIn',
  'distributedIn',
  'relatedCultivar',
  'relatedBreed',
  'maintainedByRegistry',
  'governedByStandard',
  'standardGoverns',
  'associatedDocument',
  'relatedProcessingStep',
  'relatedTradeConcept',
  'relatedLogisticsConcept',
  'relatedStandard',
  'relatedMarketTerm',
  'relatedRisk',
  'movedBy',
  'movesCommodity',
  'dependsOnOperation',
  'riskAffects',
  'exposedToRisk',
  'appliesToCommodity',
  'assessesQuality',
  'harvestedAs',
  'harvestedFrom',
  'processedInto',
  'derivedFromCommodity',
  'producesCoProduct',
  'coProductOf',
  'producesByProduct',
  'byProductOf',
  'gradedUnder',
  'gradeAppliesTo',
  'storedUsing',
  'hasQualityAttribute',
  'qualityAttributeOf',
  'measuredBy',
  'measures',
  'susceptibleToDefect',
  'defectOf',
  'reducedByProcess',
  'reduces',
  'monitoredWith',
  'monitors',
  'damagesCommodity',
  'inputToProcess',
  'processInputOf',
  'producesPrimaryProduct',
  'primaryProductOf',
  'producedByProcess',
  'usesEquipment',
  'precededByProcess',
  'followedByProcess',
  'relatedConcept',
]);

/**
 * Defined inverse relations. A reciprocal edge B→A is only "correct" when it
 * uses the inverse of the A→B relation. Relations absent here have no defined
 * inverse and must NOT have reciprocity forced.
 */
export const INVERSE_RELATION: Partial<Record<RelationType, RelationType>> = {
  governedByStandard: 'standardGoverns',
  standardGoverns: 'governedByStandard',
  // Symmetric relations are their OWN inverse, and must say so.
  //
  // `associatedDocuments` states an ASSOCIATION, not a direction. A bill of
  // lading and a packing list accompany each other in a document set; neither
  // "documents" the other. The field was mapped to a directional `documents`
  // relation, which made every mutual pair look like a reciprocity error —
  // and asserting a direction the content does not carry would have been
  // inventing information to satisfy a checker.
  associatedDocument: 'associatedDocument',
  relatedProcessingStep: 'relatedProcessingStep',
  // "A is related to B" is true exactly when "B is related to A". The Phase 5D
  // reciprocity generator makes these mutual in the content; the relation has
  // to be declared symmetric or the graph calls its own correct data an error.
  relatedTradeConcept: 'relatedTradeConcept',
  relatedLogisticsConcept: 'relatedLogisticsConcept',
  relatedStandard: 'relatedStandard',
  relatedMarketTerm: 'relatedMarketTerm',
  relatedRisk: 'relatedRisk',
  movedBy: 'movesCommodity',
  movesCommodity: 'movedBy',
  // A risk acts on a thing; that thing is exposed to the risk. Both directions
  // must be declared — an inverse map has to be involutive, or walking the
  // graph backwards silently dead-ends.
  exposedToRisk: 'riskAffects',
  riskAffects: 'exposedToRisk',
  affects: 'susceptibleTo',
  susceptibleTo: 'affects',
  suitableForSoil: 'suitableFor',
  suitableFor: 'suitableForSoil',
  suppliesNutrient: 'suppliedByFertilizer',
  suppliedByFertilizer: 'suppliesNutrient',
  irrigatedBy: 'irrigates',
  irrigates: 'irrigatedBy',
  partOfFarmingSystem: 'includesCrop',
  includesCrop: 'partOfFarmingSystem',
  commonlyRaisedIn: 'includesLivestock',
  includesLivestock: 'commonlyRaisedIn',
  cultivarOf: 'hasCultivar',
  hasCultivar: 'cultivarOf',
  breedOf: 'hasBreed',
  hasBreed: 'breedOf',
  relatedCultivar: 'relatedCultivar',
  relatedBreed: 'relatedBreed',
  // Phase 5A — transformation pathway inverses.
  harvestedAs: 'harvestedFrom',
  harvestedFrom: 'harvestedAs',
  processedInto: 'derivedFromCommodity',
  derivedFromCommodity: 'processedInto',
  producesCoProduct: 'coProductOf',
  coProductOf: 'producesCoProduct',
  producesByProduct: 'byProductOf',
  byProductOf: 'producesByProduct',
  gradedUnder: 'gradeAppliesTo',
  gradeAppliesTo: 'gradedUnder',
  // Phase 5B — post-harvest quality graph inverses.
  hasQualityAttribute: 'qualityAttributeOf',
  qualityAttributeOf: 'hasQualityAttribute',
  measuredBy: 'measures',
  measures: 'measuredBy',
  susceptibleToDefect: 'defectOf',
  defectOf: 'susceptibleToDefect',
  reducedByProcess: 'reduces',
  reduces: 'reducedByProcess',
  monitoredWith: 'monitors',
  monitors: 'monitoredWith',
  // Phase 5C — processing inverses.
  inputToProcess: 'processInputOf',
  processInputOf: 'inputToProcess',
  producesPrimaryProduct: 'primaryProductOf',
  primaryProductOf: 'producesPrimaryProduct',
  precededByProcess: 'followedByProcess',
  followedByProcess: 'precededByProcess',
  relatedConcept: 'relatedConcept',
};

/** Precise relation for each strongly-typed relationship field. */
/**
 * Field names are NOT unique across content types, so a flat field→relation map
 * cannot express every edge. `relevantStandards` means `gradedUnder` on a
 * post-harvest operation but `governedByStandard` on a trade concept;
 * `affectedCommodities` means `damagesCommodity` for a pest but `riskAffects`
 * for a supply-chain risk.
 *
 * This map is consulted FIRST, keyed `contentType.field`. FIELD_RELATION stays
 * the default for the (large majority of) field names that are unambiguous.
 */

/**
 * Conservative relation for a generic (connections/relatedTopics) edge, derived
 * from the (from, to) content-type pair. Ambiguous pairs resolve to
 * `relatedConcept` rather than asserting causation. Documented in
 * docs/semantic-relations.md.
 */
function genericRelation(
  from: ContentType,
  to: ContentType,
  fromItem: AnyContent,
): RelationType {
  const pair: Partial<
    Record<ContentType, Partial<Record<ContentType, RelationType>>>
  > = {
    crop: {
      nutrient: 'requiresNutrient',
      fertilizer: 'managedWith',
      soil: 'suitableForSoil',
      'plant-disease': 'susceptibleTo',
      pest: 'susceptibleTo',
      machinery: 'cultivatedWith',
      climate: 'sensitiveToClimate',
      'irrigation-method': 'irrigatedBy',
      'farming-system': 'partOfFarmingSystem',
      cultivar: 'hasCultivar',
    },
    nutrient: {
      fertilizer: 'suppliedByFertilizer',
      crop: 'associatedWithDeficiency',
    },
    fertilizer: {
      nutrient: 'suppliesNutrient',
      crop: 'appliedToCrop',
    },
    'plant-disease': {
      crop: 'affects',
      climate: 'riskIncreasesUnder',
      'soil-topic': 'riskIncreasesUnder',
    },
    pest: {
      crop: 'affects',
      climate: 'riskIncreasesUnder',
      'soil-topic': 'riskIncreasesUnder',
      machinery: 'managedWith',
    },
    soil: { crop: 'suitableFor' },
    'soil-topic': { nutrient: 'affectsNutrientAvailability' },
    machinery: {
      crop: machineryCropRelation(fromItem),
      fertilizer: 'usedToApply',
      // The management relation lives on the pest/disease side (managedWith);
      // from the machine side this is a topical association, not a symmetric
      // "managedWith", so we avoid reusing the same non-symmetric relation.
      pest: 'relatedConcept',
      'plant-disease': 'relatedConcept',
      'farming-system': 'partOfFarmingSystem',
    },
    climate: { crop: 'affects', 'irrigation-method': 'managedWith' },
    'farming-system': { crop: 'includesCrop', livestock: 'includesLivestock' },
    'irrigation-method': { crop: 'irrigates' },
    livestock: {
      crop: 'feedsOn',
      'farming-system': 'commonlyRaisedIn',
      climate: 'sensitiveToClimate',
      breed: 'hasBreed',
    },
    // Phase 3A — cultivar/breed outgoing generic edges. Disease/pest links are
    // deliberately `relatedConcept` (a connection is not evidence of resistance
    // or susceptibility — those are provenanced claims, never inferred).
    cultivar: {
      crop: 'cultivarOf',
      soil: 'adaptedToSoil',
      climate: 'adaptedToClimate',
      'plant-disease': 'relatedConcept',
      pest: 'relatedConcept',
      cultivar: 'relatedCultivar',
    },
    breed: {
      livestock: 'breedOf',
      climate: 'adaptedToClimate',
      'farming-system': 'partOfFarmingSystem',
      breed: 'relatedBreed',
    },
  };
  return pair[from]?.[to] ?? 'relatedConcept';
}

function machineryCropRelation(item: AnyContent): RelationType {
  if (item.contentType !== 'machinery') return 'usedToCultivate';
  switch (item.machineryClass) {
    case 'harvest':
      return 'usedToHarvest';
    case 'crop-protection':
      return 'usedToApply';
    default:
      return 'usedToCultivate';
  }
}

/**
 * Is this a reference to another page?
 *
 * Both `type` and `slug` must be present AND `type` must be a real content
 * type. That last check is what keeps structural discovery safe: a
 * `ContentBlock` also carries a `type` ("paragraph", "callout"), but has no
 * `slug` and no content-type value, so it can never be mistaken for an edge.
 */
function isContentRef(value: unknown): value is ContentRef {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<ContentRef>;
  return (
    typeof v.type === 'string' &&
    typeof v.slug === 'string' &&
    CONTENT_TYPE_SET.has(v.type)
  );
}

/**
 * (ref, field) pairs for every outgoing reference an item declares — discovered
 * STRUCTURALLY, by walking the item's own fields.
 *
 * ## Why this is not a switch on contentType
 *
 * It was, for fourteen types, and each new type had to remember to add itself.
 * Phase 5D's five types never did, so `logistics-concept`, `standard-reference`,
 * `market-term` and `supply-chain-risk` contributed **zero** edges: a risk page
 * declaring seven affected commodities and six related risks emitted nothing at
 * all. Nothing failed, because the tests iterated `semanticEdges()` and asserted
 * every edge it returned was valid — which is vacuously true of an empty set.
 * Phase 5C's generated `producedBy` inverse was invisible for the same reason.
 *
 * Replacing the switch with a walk recovered **2,175 edges** and, more to the
 * point, means a new content type is in the graph the moment it declares a ref.
 * The registry cannot fall out of step with itself.
 *
 * The walk is deliberately ONE level deep: refs live at the top level or in a
 * top-level array, never nested inside prose blocks. Going deeper would buy
 * nothing and risk mistaking authored content for structure.
 */
function refsWithField(item: AnyContent): { ref: ContentRef; field: string }[] {
  const out: { ref: ContentRef; field: string }[] = [];
  for (const [field, value] of Object.entries(item)) {
    if (isContentRef(value)) {
      out.push({ ref: value, field });
    } else if (Array.isArray(value)) {
      for (const entry of value)
        if (isContentRef(entry)) out.push({ ref: entry, field });
    }
  }
  // Generic fields last. `semanticEdges` dedupes by target and keeps the first
  // non-generic relation it sees, so a target named by BOTH a typed field and
  // `connections` must meet the typed field first or it would be recorded as a
  // bare `relatedConcept`.
  return out.sort((a, b) => genericRank(a.field) - genericRank(b.field));
}

const GENERIC_FIELDS = new Set(['connections', 'relatedTopics']);
const genericRank = (field: string): number =>
  GENERIC_FIELDS.has(field) ? 1 : 0;

/** Semantic edges for a single item, with typed relations.
 *
 * Deduplicated by target: an entity has at most one edge to another entity. If
 * the same target is declared via multiple fields (e.g. both `relatedTopics`
 * and `connections`), the most specific (non-`relatedConcept`) relation wins.
 */
export function semanticEdges(item: AnyContent): SemanticEdge[] {
  const from: ContentRef = { type: item.contentType, slug: item.slug };
  const byTarget = new Map<string, SemanticEdge>();
  for (const { ref, field } of refsWithField(item)) {
    // Discovery is structural; MAPPING is declared. An unregistered field is
    // reported by the validator (`graph-unmapped-ref-field`) rather than being
    // guessed into an edge here — a field whose meaning nobody has stated must
    // not silently acquire one.
    if (!isRefField(field)) continue;

    const relation = isGenericField(field)
      ? // A generic field claims only "these are related"; the relation is
        // inferred conservatively from the endpoints, never asserted.
        genericRelation(item.contentType, ref.type, item)
      : (relationForField(field, item.contentType) ?? 'relatedConcept');

    const key = refKey(ref.type, ref.slug);
    const existing = byTarget.get(key);
    // Keep the most specific relation; prefer an existing non-generic one.
    if (existing && existing.relation !== 'relatedConcept') continue;
    const spec = REF_FIELDS[field];
    byTarget.set(key, {
      from,
      to: ref,
      relation,
      field,
      origin: spec?.origin ?? 'declared',
      ...(spec?.generator ? { generator: spec.generator } : {}),
    });
  }
  return [...byTarget.values()];
}

/** Every semantic edge in the corpus. */
export function allSemanticEdges(): SemanticEdge[] {
  return ALL_CONTENT.flatMap((item) => semanticEdges(item));
}

/** Distribution of edges by relation type. */
export function edgesByRelation(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const e of allSemanticEdges())
    counts[e.relation] = (counts[e.relation] ?? 0) + 1;
  return counts;
}

/**
 * Reciprocal edges whose relations are not defined inverses of each other —
 * i.e. reciprocity that would be semantically incorrect. Returns offending
 * (a→b, b→a) pairs.
 */
export function incorrectReciprocalEdges(): {
  a: SemanticEdge;
  b: SemanticEdge;
}[] {
  const byKey = new Map<string, SemanticEdge>();
  for (const e of allSemanticEdges()) {
    byKey.set(
      `${refKey(e.from.type, e.from.slug)}->${refKey(e.to.type, e.to.slug)}:${e.relation}`,
      e,
    );
  }
  const offenders: { a: SemanticEdge; b: SemanticEdge }[] = [];
  for (const e of allSemanticEdges()) {
    const reverseSameRel = byKey.get(
      `${refKey(e.to.type, e.to.slug)}->${refKey(e.from.type, e.from.slug)}:${e.relation}`,
    );
    // A reciprocal edge using the SAME (non-symmetric) relation is incorrect.
    if (reverseSameRel && INVERSE_RELATION[e.relation] !== e.relation) {
      offenders.push({ a: e, b: reverseSameRel });
    }
  }
  return offenders;
}

export { resolveRef };
