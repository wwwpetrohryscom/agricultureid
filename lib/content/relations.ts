import { ALL_CONTENT, refKey, resolveRef } from '@/lib/content/registry';
import type { ContentType } from '@/lib/site';
import type {
  AnyContent,
  ContentRef,
  RelationType,
  SemanticEdge,
} from '@/types/content';

/** The complete controlled vocabulary (runtime set for validation). */
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
const FIELD_RELATION: Record<string, RelationType> = {
  commonDiseases: 'susceptibleTo',
  commonPests: 'susceptibleTo',
  suitableSoils: 'suitableForSoil',
  suitedCrops: 'suitableFor',
  hostCrops: 'affects',
  // Phase 3A — sub-entity parent links.
  parentCrop: 'cultivarOf',
  parentLivestock: 'breedOf',
  // Phase 5A — commodity taxonomy. Distinct field names (sourceCrop, not
  // parentCrop) so commodity edges never collide with cultivar/breed parentage.
  sourceCrop: 'harvestedFrom',
  sourceLivestock: 'harvestedFrom',
  primaryProducts: 'processedInto',
  coProducts: 'producesCoProduct',
  byProducts: 'producesByProduct',
  applicableGrades: 'gradedUnder',
  storageSystems: 'storedUsing',
  derivedFrom: 'derivedFromCommodity',
  gradedCommodity: 'gradeAppliesTo',
  // Phase 5B — post-harvest quality graph.
  appliesToCommodities: 'qualityAttributeOf',
  measuredBy: 'measuredBy',
  relatedDefects: 'relatedConcept',
  affectedCommodities: 'damagesCommodity',
  reducedByProcesses: 'reducedByProcess',
  measures: 'measures',
  applicableCommodities: 'relatedConcept',
  monitoringMethods: 'monitoredWith',
  // Phase 5C.
  inputCommodities: 'processInputOf',
  primaryOutputs: 'producesPrimaryProduct',
  coProductOutputs: 'producesCoProduct',
  byProductOutputs: 'producesByProduct',
  typicalEquipment: 'usesEquipment',
  precededBy: 'precededByProcess',
  followedBy: 'followedByProcess',
  producedBy: 'producedByProcess',
  relatedOperations: 'relatedConcept',
  equipment: 'managedWith',
  relevantStandards: 'gradedUnder',
};

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

/** (ref, field) pairs for every outgoing reference an item declares. */
function refsWithField(item: AnyContent): { ref: ContentRef; field: string }[] {
  const out: { ref: ContentRef; field: string }[] = [];
  for (const ref of item.relatedTopics ?? [])
    out.push({ ref, field: 'relatedTopics' });
  for (const ref of item.connections ?? [])
    out.push({ ref, field: 'connections' });
  switch (item.contentType) {
    case 'crop':
      for (const ref of item.commonDiseases)
        out.push({ ref, field: 'commonDiseases' });
      for (const ref of item.commonPests)
        out.push({ ref, field: 'commonPests' });
      for (const ref of item.suitableSoils)
        out.push({ ref, field: 'suitableSoils' });
      break;
    case 'soil':
      for (const ref of item.suitedCrops)
        out.push({ ref, field: 'suitedCrops' });
      break;
    case 'plant-disease':
    case 'pest':
      for (const ref of item.hostCrops) out.push({ ref, field: 'hostCrops' });
      break;
    case 'cultivar':
      out.push({ ref: item.parentCrop, field: 'parentCrop' });
      break;
    case 'breed':
      out.push({ ref: item.parentLivestock, field: 'parentLivestock' });
      break;
    case 'commodity':
      if (item.sourceCrop)
        out.push({ ref: item.sourceCrop, field: 'sourceCrop' });
      if (item.sourceLivestock)
        out.push({ ref: item.sourceLivestock, field: 'sourceLivestock' });
      for (const ref of item.primaryProducts ?? [])
        out.push({ ref, field: 'primaryProducts' });
      for (const ref of item.coProducts ?? [])
        out.push({ ref, field: 'coProducts' });
      for (const ref of item.byProducts ?? [])
        out.push({ ref, field: 'byProducts' });
      for (const ref of item.applicableGrades ?? [])
        out.push({ ref, field: 'applicableGrades' });
      for (const ref of item.storageSystems ?? [])
        out.push({ ref, field: 'storageSystems' });
      break;
    case 'commodity-product':
      out.push({ ref: item.derivedFrom, field: 'derivedFrom' });
      break;
    case 'commodity-grade':
      out.push({ ref: item.gradedCommodity, field: 'gradedCommodity' });
      break;
    case 'post-harvest':
      for (const ref of item.applicableCommodities ?? [])
        out.push({ ref, field: 'applicableCommodities' });
      for (const ref of item.equipment ?? [])
        out.push({ ref, field: 'equipment' });
      for (const ref of item.monitoringMethods ?? [])
        out.push({ ref, field: 'monitoringMethods' });
      for (const ref of item.relevantStandards ?? [])
        out.push({ ref, field: 'relevantStandards' });
      break;
    case 'quality-attribute':
      for (const ref of item.appliesToCommodities ?? [])
        out.push({ ref, field: 'appliesToCommodities' });
      for (const ref of item.measuredBy ?? [])
        out.push({ ref, field: 'measuredBy' });
      for (const ref of item.relatedDefects ?? [])
        out.push({ ref, field: 'relatedDefects' });
      break;
    case 'post-harvest-defect':
      for (const ref of item.affectedCommodities ?? [])
        out.push({ ref, field: 'affectedCommodities' });
      for (const ref of item.reducedByProcesses ?? [])
        out.push({ ref, field: 'reducedByProcesses' });
      break;
    case 'quality-measurement':
      for (const ref of item.measures ?? [])
        out.push({ ref, field: 'measures' });
      break;
    case 'processing-method':
      for (const ref of item.inputCommodities ?? [])
        out.push({ ref, field: 'inputCommodities' });
      for (const ref of item.primaryOutputs ?? [])
        out.push({ ref, field: 'primaryOutputs' });
      for (const ref of item.coProductOutputs ?? [])
        out.push({ ref, field: 'coProductOutputs' });
      for (const ref of item.byProductOutputs ?? [])
        out.push({ ref, field: 'byProductOutputs' });
      for (const ref of item.typicalEquipment ?? [])
        out.push({ ref, field: 'typicalEquipment' });
      for (const ref of item.precededBy ?? [])
        out.push({ ref, field: 'precededBy' });
      for (const ref of item.followedBy ?? [])
        out.push({ ref, field: 'followedBy' });
      for (const ref of item.relatedOperations ?? [])
        out.push({ ref, field: 'relatedOperations' });
      break;
  }
  return out;
}

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
    const relation =
      FIELD_RELATION[field] ??
      (field === 'relatedTopics'
        ? 'relatedConcept'
        : genericRelation(item.contentType, ref.type, item));
    const key = refKey(ref.type, ref.slug);
    const existing = byTarget.get(key);
    // Keep the most specific relation; prefer an existing non-generic one.
    if (existing && existing.relation !== 'relatedConcept') continue;
    byTarget.set(key, { from, to: ref, relation, field });
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
