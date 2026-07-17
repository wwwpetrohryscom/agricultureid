import { allSemanticEdges } from '@/lib/content/relations';
import {
  RELATION_HEADING,
  OWNED_BY_DEDICATED_PANEL,
} from '@/components/graph/RelationPanels';
import type { RelationType } from '@/types/content';

/**
 * Phase 5F §8 — the renderable-relation registry.
 *
 * A relation carrying edges must reach a reader somehow: either RelationPanels
 * gives it a heading, or a dedicated panel (TradePanels, CommodityPathways,
 * ParentSubEntities) renders it for every content type that declares it.
 *
 * This exists because a relation can carry hundreds of edges and render nowhere,
 * silently. It happened twice: the Phase 5D relations had no heading (0 edges
 * shown), and `appliesToCommodity` was made precise and thereby dropped out of
 * the heading list (208 post-harvest edges stopped rendering). Both passed every
 * gate. The coverage check below is the gate that would have caught them.
 */

/**
 * Relations a dedicated sub-entity panel renders for every source type.
 *
 * - `hasCultivar`/`hasBreed`: ParentSubEntities lists a crop's cultivars on the
 *   crop page.
 * - `cultivarOf`/`breedOf`: SubEntityPanel renders "Variety of"/"Breed of" on
 *   the child page, linking back to the parent (verified in the emitted HTML).
 *
 * These are owned regardless of a RelationPanels heading, so the coverage check
 * counts them as reachable.
 */
const PARENT_SUBENTITY_RELATIONS = new Set<RelationType>([
  'hasCultivar',
  'hasBreed',
  'cultivarOf',
  'breedOf',
]);

export interface RelationRenderCoverage {
  relation: RelationType;
  edges: number;
  /** Content types that declare this relation. */
  sourceTypes: string[];
  hasHeading: boolean;
  /** Source types for which a dedicated panel owns the relation. */
  ownedFor: string[];
  /** Source types where the relation reaches NO panel. */
  uncoveredFor: string[];
  covered: boolean;
}

export function relationRenderCoverage(): RelationRenderCoverage[] {
  const bySource = new Map<RelationType, Set<string>>();
  const counts = new Map<RelationType, number>();
  for (const edge of allSemanticEdges()) {
    (
      bySource.get(edge.relation) ??
      bySource.set(edge.relation, new Set()).get(edge.relation)!
    ).add(edge.from.type);
    counts.set(edge.relation, (counts.get(edge.relation) ?? 0) + 1);
  }

  const out: RelationRenderCoverage[] = [];
  for (const [relation, sources] of bySource) {
    const hasHeading = relation in RELATION_HEADING;
    const sourceTypes = [...sources].sort();
    const uncoveredFor: string[] = [];
    const ownedFor: string[] = [];
    for (const type of sourceTypes) {
      const owned =
        OWNED_BY_DEDICATED_PANEL[type]?.has(relation) ||
        PARENT_SUBENTITY_RELATIONS.has(relation);
      if (owned) ownedFor.push(type);
      // A source type is covered if the relation has a heading (RelationPanels
      // renders it) OR a dedicated panel owns it for that type.
      if (!hasHeading && !owned) uncoveredFor.push(type);
    }
    out.push({
      relation,
      edges: counts.get(relation) ?? 0,
      sourceTypes,
      hasHeading,
      ownedFor,
      uncoveredFor,
      covered: uncoveredFor.length === 0,
    });
  }
  return out.sort((a, b) => b.edges - a.edges);
}

/** Relations carrying edges that reach no panel for some source type. */
export function unrenderableRelations(): RelationRenderCoverage[] {
  return relationRenderCoverage().filter((r) => !r.covered);
}
