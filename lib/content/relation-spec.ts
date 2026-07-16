import { INVERSE_RELATION, RELATION_TYPES } from '@/lib/content/relations';
import type { RelationType } from '@/types/content';

/**
 * Phase 5F — the relation vocabulary, described rather than assumed.
 *
 * ## Why this exists
 *
 * Restoring the Phase 5D edges surfaced 842 reciprocity errors, and the fix for
 * 826 of them was to declare a relation SYMMETRIC. That is a legitimate fix
 * exactly when the relation really is symmetric — and a way of silencing a
 * validator when it is not. Nothing in the codebase recorded which was which, so
 * nothing could tell the two apart.
 *
 * This table makes the claim explicit and testable: for every relation, whether
 * it is directional or symmetric, what its inverse is, whether the reverse edge
 * may be generated, and whether reciprocity is required, optional, or forbidden.
 *
 * ## The rule that keeps it honest
 *
 * A relation may be `symmetric` ONLY if "A r B" and "B r A" assert the same
 * thing. `relatedRisk` qualifies: "this risk is related to that one" is true in
 * both directions. `damagesCommodity` does not, and calling it symmetric to
 * quiet a reciprocity error would be asserting that a commodity damages a pest.
 */

export type RelationKind = 'directional' | 'symmetric';

/**
 * Whether the reverse edge is expected to exist.
 *
 * - `required` — the inverse must be declared; a missing one is a defect.
 * - `optional` — the inverse is meaningful but not every page declares it.
 * - `forbidden` — the reverse assertion would be FALSE. A crop is susceptible
 *   to a disease; the disease is not susceptible to the crop.
 */
export type ReciprocityRule = 'required' | 'optional' | 'forbidden';

export interface RelationSpec {
  kind: RelationKind;
  /** For symmetric relations this is the relation itself. */
  inverse?: RelationType;
  /** May the graph materialise the reverse edge without an author declaring it? */
  inverseGeneration: boolean;
  reciprocity: ReciprocityRule;
  /** Why this relation is symmetric, when it is. Required for `symmetric`. */
  symmetryRationale?: string;
  note?: string;
}

/**
 * Relations that are symmetric, each with the reason it is.
 *
 * The rationale is mandatory and is asserted by a test: a relation cannot be
 * quietly promoted to symmetric to make a validator stop complaining.
 */
const SYMMETRIC: Partial<Record<RelationType, string>> = {
  relatedConcept:
    'A conservative "these are related" with no direction claimed in either direction.',
  relatedCultivar:
    'Two cultivars of the same crop are related to each other equally.',
  relatedBreed:
    'Two breeds of the same species are related to each other equally.',
  relatedTradeConcept:
    '"This trade concept bears on that one" is true in both directions; neither governs the other.',
  relatedLogisticsConcept:
    'Two logistics concepts that bear on each other do so mutually — palletisation and container stuffing constrain each other.',
  relatedStandard:
    'Two standards that bear on each other do so mutually; neither is senior unless one incorporates the other, which is a different relation.',
  relatedMarketTerm:
    'Terms that must be read together — basis and spread — are read together in both directions.',
  relatedRisk:
    'Two risks that compound do so mutually: port congestion and freight-rate volatility each aggravate the other.',
  relatedProcessingStep:
    'Two processing steps that bear on each other without a claimed sequence — the association is mutual by construction, since a claimed order would be precededBy/followedBy instead.',
  associatedDocument:
    'A bill of lading and a packing list ACCOMPANY each other in a document set. Neither documents the other, and claiming a direction would invent information the content does not carry.',
};

/**
 * Relations whose reverse assertion would be false. Reciprocity here is a bug,
 * not a gap.
 */
const FORBIDDEN_RECIPROCITY = new Set<RelationType>([
  'susceptibleTo',
  'affects',
  'damagesCommodity',
  'cultivarOf',
  'hasCultivar',
  'breedOf',
  'hasBreed',
  'harvestedFrom',
  'harvestedAs',
  'derivedFromCommodity',
  'processedInto',
  'producedByProcess',
  'processInputOf',
  'producesPrimaryProduct',
  'primaryProductOf',
  'producesCoProduct',
  'coProductOf',
  'producesByProduct',
  'byProductOf',
  'gradedUnder',
  'gradeAppliesTo',
  'precededByProcess',
  'followedByProcess',
]);

/** The full spec, derived from the inverse map plus the tables above. */
export const RELATION_SPEC: ReadonlyMap<RelationType, RelationSpec> = new Map(
  [...RELATION_TYPES].map((relation) => {
    const inverse = INVERSE_RELATION[relation];
    const symmetryRationale = SYMMETRIC[relation];
    const isSymmetric = inverse === relation;

    const spec: RelationSpec = {
      kind: isSymmetric ? 'symmetric' : 'directional',
      inverse,
      // The reverse of a symmetric relation is the same assertion, so it can be
      // materialised safely. A directional inverse is a DIFFERENT claim and is
      // only generated where a generator explicitly does so (producedBy).
      inverseGeneration: isSymmetric,
      reciprocity: isSymmetric
        ? 'optional'
        : FORBIDDEN_RECIPROCITY.has(relation)
          ? 'forbidden'
          : 'optional',
      symmetryRationale,
    };
    return [relation, spec] as const;
  }),
);

export function specFor(relation: RelationType): RelationSpec | undefined {
  return RELATION_SPEC.get(relation);
}

export function isSymmetric(relation: RelationType): boolean {
  return RELATION_SPEC.get(relation)?.kind === 'symmetric';
}

/** Symmetric relations that do not explain WHY they are symmetric. */
export function unjustifiedSymmetry(): RelationType[] {
  return [...RELATION_SPEC.entries()]
    .filter(([, s]) => s.kind === 'symmetric' && !s.symmetryRationale)
    .map(([r]) => r);
}
