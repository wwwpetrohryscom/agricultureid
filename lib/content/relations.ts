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
  relatedConcept: 'relatedConcept',
};

/** Precise relation for each strongly-typed relationship field. */
const FIELD_RELATION: Record<string, RelationType> = {
  commonDiseases: 'susceptibleTo',
  commonPests: 'susceptibleTo',
  suitableSoils: 'suitableForSoil',
  suitedCrops: 'suitableFor',
  hostCrops: 'affects',
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
