import {
  INVERSE_RELATION,
  RELATION_TYPES,
  allSemanticEdges,
} from '@/lib/content/relations';
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

/* -------------------------------------------------------------------------- *
 * Type domains and inverse safety — DERIVED FROM THE CORPUS, not asserted.
 *
 * The point of computing this rather than declaring it: a hand-written claim
 * that "this inverse is safe" is exactly the kind of thing that is true when
 * written and false two phases later. Reading the domains out of the actual
 * edges means the check cannot go stale.
 * -------------------------------------------------------------------------- */

export interface RelationDomain {
  relation: RelationType;
  edges: number;
  sourceTypes: string[];
  targetTypes: string[];
}

/** Observed source/target content types for every relation in the corpus. */
export function relationDomains(): Map<RelationType, RelationDomain> {
  const out = new Map<RelationType, RelationDomain>();
  for (const edge of allSemanticEdges()) {
    const d = out.get(edge.relation) ?? {
      relation: edge.relation,
      edges: 0,
      sourceTypes: [] as string[],
      targetTypes: [] as string[],
    };
    d.edges++;
    if (!d.sourceTypes.includes(edge.from.type))
      d.sourceTypes.push(edge.from.type);
    if (!d.targetTypes.includes(edge.to.type)) d.targetTypes.push(edge.to.type);
    out.set(edge.relation, d);
  }
  for (const d of out.values()) {
    d.sourceTypes.sort();
    d.targetTypes.sort();
  }
  return out;
}

/**
 * The three distinct answers, which must not be collapsed into one.
 *
 * `unverified` is NOT `type-unsafe`. An inverse-only label like `hasCultivar`
 * has no forward use in the corpus because nobody writes it — that makes it
 * unprovable from the data, not false. Calling it unsafe would overstate;
 * calling it safe would be a guess. Either way it is not materialised, because
 * an unresolved inverse must not be, but the report says WHICH it is.
 */
export type InverseVerdict = 'safe' | 'type-unsafe' | 'unverified';

export interface InverseSafety {
  relation: RelationType;
  inverse: RelationType;
  verdict: InverseVerdict;
  safe: boolean;
  edges: number;
  sourceTypes: string[];
  /** Source types of `relation` that the inverse never legitimately targets. */
  unsafeFor: string[];
  reason?: string;
}

/**
 * Would materialising `relation`'s inverse assert something false?
 *
 * Materialising A --r--> B as B --inv--> A only holds if `inv` is legitimately
 * used with A's type as its TARGET. Where it is not, the inverse label is being
 * applied to a type it was never meant for, and the resulting edge is a false
 * claim rather than a missing one.
 *
 * The three real cases, all found this way rather than by inspection:
 *
 * - `partOfFarmingSystem⁻¹ = includesCrop` (227 edges). Machinery and breeds are
 *   also "part of" a farming system, so inverting asserts that a farming system
 *   "includes the CROP" a plough. One inverse label cannot serve every source
 *   type.
 * - `affects⁻¹ = susceptibleTo` (411). Climate "affects" things, and inverting
 *   asserts a crop is "susceptible to" climate — which is `sensitiveToClimate`,
 *   a different claim.
 * - `gradedUnder⁻¹ = gradeAppliesTo` (26). A post-harvest operation is performed
 *   against a grade standard; inverting asserts the grade "applies to" the
 *   operation, when a grade applies to a commodity.
 */
export function inverseSafetyReport(): InverseSafety[] {
  const domains = relationDomains();
  const out: InverseSafety[] = [];
  for (const [relation, domain] of domains) {
    const inverse = INVERSE_RELATION[relation];
    if (!inverse || inverse === relation) continue; // absent or symmetric
    const inverseDomain = domains.get(inverse);
    // An inverse with no observed use cannot be shown safe from the corpus.
    if (!inverseDomain) {
      // Unverified, NOT unsafe: an inverse-only label (hasCultivar, coProductOf)
      // has no forward use because nobody writes it. The corpus cannot show it
      // safe, which is a reason not to materialise it — not a reason to call it
      // false.
      out.push({
        relation,
        inverse,
        verdict: 'unverified',
        safe: false,
        edges: domain.edges,
        sourceTypes: domain.sourceTypes,
        unsafeFor: [],
        reason: `${inverse} has no forward use in the corpus, so its legitimate target types cannot be established from the data`,
      });
      continue;
    }
    const unsafeFor = domain.sourceTypes.filter(
      (t) => !inverseDomain.targetTypes.includes(t),
    );
    out.push({
      relation,
      inverse,
      verdict: unsafeFor.length ? 'type-unsafe' : 'safe',
      safe: unsafeFor.length === 0,
      edges: domain.edges,
      sourceTypes: domain.sourceTypes,
      unsafeFor,
      reason: unsafeFor.length
        ? `inverting would assert ${inverse} → [${unsafeFor.join(', ')}], which it never legitimately targets`
        : undefined,
    });
  }
  return out.sort((a, b) => Number(a.safe) - Number(b.safe));
}

/**
 * May this relation's inverse be MATERIALISED as a stored edge?
 *
 * Symmetric relations: yes — the reverse is the same assertion.
 * Directional relations: only where the inverse is type-safe for every observed
 * source type. Otherwise the reverse must be presented by REVERSE LOOKUP over
 * the forward edges (see lib/content/reverse-lookup.ts), which shows the same
 * information without storing a false claim.
 */
export function isMaterializable(relation: RelationType): boolean {
  if (isSymmetric(relation)) return true;
  const report = inverseSafetyReport().find((r) => r.relation === relation);
  return report?.safe ?? false;
}

/** Directional inverses that must NOT be materialised (any non-safe verdict). */
export function unsafeInverses(): InverseSafety[] {
  return inverseSafetyReport().filter((r) => !r.safe);
}

/** Inverses that are PROVEN false for some source type — the real defects. */
export function typeUnsafeInverses(): InverseSafety[] {
  return inverseSafetyReport().filter((r) => r.verdict === 'type-unsafe');
}
