import { allSemanticEdges } from '@/lib/content/relations';
import { specFor } from '@/lib/content/relation-spec';
import type { ContentRef, RelationType, SemanticEdge } from '@/types/content';

/**
 * Phase 5F §3 — reverse presentation without inverse materialisation.
 *
 * ## The problem
 *
 * A farming-system page wants to show "what is part of this system". The forward
 * edges are `machinery/crop/breed --partOfFarmingSystem--> farming-system`. The
 * tempting fix is to store the inverse, `farming-system --includesCrop-->
 * machinery` — but `includesCrop` targeting a plough is a false claim, and one
 * inverse label cannot serve crops, machinery, and breeds at once. Three
 * relations in this corpus are type-unsafe that way (see relation-spec.ts).
 *
 * ## The answer
 *
 * Do not store the inverse. QUERY the forward edges. To show what points at an
 * entity, read every edge whose TARGET is that entity — which is exactly true,
 * because it is the edges themselves, unmodified. The UI groups the sources and
 * labels the group by the FORWARD relation ("Part of these farming systems" /
 * "…used in these farming systems"), never by an invented inverse.
 *
 * This preserves the original relation's truth, needs no stored inverse, and
 * cannot assert a false type pairing — the edge already exists and already type-
 * checks.
 */

export interface ReverseEdge {
  /** The entity that points AT the subject. */
  source: ContentRef;
  /** The FORWARD relation, unchanged. Never an invented inverse. */
  relation: RelationType;
  /** Provenance of the underlying forward edge. */
  origin: SemanticEdge['origin'];
}

/**
 * Every forward edge that targets `subject`, as reverse-presentable rows.
 *
 * The relation is the forward relation verbatim. Nothing here fabricates an
 * inverse; a caller that wants a heading derives it from the forward relation
 * and the source type, which is a presentation choice, not a stored claim.
 */
export function reverseEdges(subject: ContentRef): ReverseEdge[] {
  const key = `${subject.type}:${subject.slug}`;
  const out: ReverseEdge[] = [];
  const seen = new Set<string>();
  for (const edge of allSemanticEdges()) {
    if (`${edge.to.type}:${edge.to.slug}` !== key) continue;
    if (edge.from.type === subject.type && edge.from.slug === subject.slug)
      continue; // an entity does not point at itself
    const dedup = `${edge.from.type}:${edge.from.slug}:${edge.relation}`;
    if (seen.has(dedup)) continue; // no duplicate rows for one source+relation
    seen.add(dedup);
    out.push({
      source: { type: edge.from.type, slug: edge.from.slug },
      relation: edge.relation,
      origin: edge.origin,
    });
  }
  // Deterministic: sort by relation then source.
  return out.sort(
    (a, b) =>
      a.relation.localeCompare(b.relation) ||
      a.source.type.localeCompare(b.source.type) ||
      a.source.slug.localeCompare(b.source.slug),
  );
}

/** Reverse edges grouped by their forward relation, for panel rendering. */
export function reverseEdgesByRelation(
  subject: ContentRef,
): Map<RelationType, ContentRef[]> {
  const grouped = new Map<RelationType, ContentRef[]>();
  for (const { relation, source } of reverseEdges(subject)) {
    const list = grouped.get(relation) ?? [];
    list.push(source);
    grouped.set(relation, list);
  }
  return grouped;
}

/**
 * Relations whose reverse is shown by LOOKUP rather than by a stored inverse.
 *
 * These are precisely the directional relations that are not safely
 * materialisable — either type-unsafe (partOfFarmingSystem, affects,
 * gradedUnder) or unverified. A page wanting to show their reverse must use
 * `reverseEdges`, and a test asserts the graph never stores an inverse for them.
 */
export function displayOnlyReverse(relation: RelationType): boolean {
  const spec = specFor(relation);
  if (!spec) return false;
  // Symmetric relations need no reverse — the forward edge already reads both
  // ways. Materialisable directional inverses could be stored (none is today).
  // Everything else is display-only.
  return spec.kind === 'directional' && spec.inverseGeneration === false;
}
