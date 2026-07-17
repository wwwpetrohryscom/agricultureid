import Link from 'next/link';
import { semanticEdges } from '@/lib/content/relations';
import { contentPath, resolveRef } from '@/lib/content/registry';
import { breedsForLivestock, cultivarsForCrop } from '@/lib/content/registry';
import type { AnyContent, RelationType } from '@/types/content';

/** Human heading per relation type, plus display order. */
export const RELATION_HEADING: Partial<Record<RelationType, string>> = {
  susceptibleTo: 'Susceptible to',
  affects: 'Affects',
  requiresNutrient: 'Nutrients required',
  associatedWithDeficiency: 'Associated deficiency in',
  suppliesNutrient: 'Supplies nutrients',
  suppliedByFertilizer: 'Supplied by fertilizers',
  appliedToCrop: 'Applied to crops',
  suitableForSoil: 'Suitable soils',
  suitableFor: 'Suitable for',
  sensitiveToClimate: 'Climate sensitivity',
  riskIncreasesUnder: 'Risk increases under',
  irrigatedBy: 'Irrigation methods',
  irrigates: 'Irrigates',
  managedWith: 'Managed with',
  cultivatedWith: 'Machinery',
  usedToCultivate: 'Used to cultivate',
  usedToHarvest: 'Used to harvest',
  usedToApply: 'Used to apply',
  partOfFarmingSystem: 'Farming systems',
  includesCrop: 'Includes crops',
  includesLivestock: 'Includes livestock',
  commonlyRaisedIn: 'Commonly raised in',
  feedsOn: 'Feeds on',
  affectsNutrientAvailability: 'Affects nutrient availability',
  adaptedToClimate: 'Adapted to climate',
  adaptedToSoil: 'Adapted to soil',
  relatedCultivar: 'Related cultivars',
  relatedBreed: 'Related breeds',
  relatedConcept: 'Related topics',

  /* ---- Phase 5A/5B/5C relations (Phase 5F) -------------------------------
   *
   * These edges existed in the data and rendered NOWHERE. RelationPanels shows
   * `ORDER.filter(r => byRelation.has(r))`, so a relation with no entry here is
   * silently invisible — and no dedicated panel covered the post-harvest or
   * processing relations either. Restoring the edges to the graph was only half
   * the job; a reader still could not see them.
   *
   * The Phase 5D relations are deliberately ABSENT: TradePanels owns those
   * fields and renders them with their own labels, so adding them here would
   * print every link twice. See OWNED_BY_DEDICATED_PANEL. */
  // Phase 5F made this relation MORE PRECISE and thereby INVISIBLE: as a
  // generic `relatedConcept` it was in ORDER and rendered as "Related topics";
  // as `appliesToCommodity` it was in neither table, so 208 post-harvest edges
  // silently stopped rendering. Precision that costs the reader the link is not
  // an improvement. (Logistics/market/standard pages exclude it below — their
  // TradePanels already own it.)
  appliesToCommodity: 'Applies to commodities',
  harvestedFrom: 'Harvested from',
  harvestedAs: 'Harvested as',
  storedUsing: 'Stored using',
  gradedUnder: 'Graded under',
  gradeAppliesTo: 'Grades apply to',
  hasQualityAttribute: 'Quality attributes',
  qualityAttributeOf: 'Quality attribute of',
  measuredBy: 'Measured by',
  measures: 'Measures',
  susceptibleToDefect: 'Susceptible to defects',
  defectOf: 'Defect of',
  damagesCommodity: 'Damages',
  reducedByProcess: 'Reduced by',
  reduces: 'Reduces',
  monitoredWith: 'Monitored with',
  monitors: 'Monitors',
  usesEquipment: 'Equipment',
  processInputOf: 'Process inputs',
  producesPrimaryProduct: 'Primary products',
  primaryProductOf: 'Primary product of',
  producesCoProduct: 'Co-products',
  coProductOf: 'Co-product of',
  producesByProduct: 'By-products',
  byProductOf: 'By-product of',
  processedInto: 'Processed into',
  derivedFromCommodity: 'Derived from',
  precededByProcess: 'Preceded by',
  followedByProcess: 'Followed by',
  relatedProcessingStep: 'Related operations',
  // Generated, not authored: computed by inverting each method's declared
  // outputs. The heading says so, because presenting a derived edge as an
  // author's assertion would overstate what anybody wrote.
  producedByProcess: 'Produced by (derived)',
};

/**
 * Relations a dedicated panel already renders, by the content type declaring
 * them. RelationPanels must not print them again.
 *
 * `TradePanels` renders every Phase 5D typed field with its own labels, and
 * `CommodityPathways` owns the commodity transformation pathways. Without this,
 * restoring the 5D edges to the graph would have duplicated every link on those
 * pages — the graph being right is not the same as the page being right.
 */
export const OWNED_BY_DEDICATED_PANEL: Partial<
  Record<string, ReadonlySet<RelationType>>
> = {
  'trade-concept': new Set<RelationType>([
    'relatedTradeConcept',
    'governedByStandard',
    'relatedLogisticsConcept',
    'associatedDocument',
  ]),
  'logistics-concept': new Set<RelationType>([
    'relatedLogisticsConcept',
    'relatedTradeConcept',
    'governedByStandard',
    'appliesToCommodity',
    'assessesQuality',
    'dependsOnOperation',
    'exposedToRisk',
  ]),
  'standard-reference': new Set<RelationType>([
    'relatedStandard',
    'relatedTradeConcept',
    'appliesToCommodity',
    'gradeAppliesTo',
  ]),
  'market-term': new Set<RelationType>([
    'relatedMarketTerm',
    'relatedTradeConcept',
    'appliesToCommodity',
  ]),
  'supply-chain-risk': new Set<RelationType>([
    'relatedRisk',
    'riskAffects',
    'governedByStandard',
  ]),
  // CommodityPathways renders the transformation pathways.
  commodity: new Set<RelationType>([
    'processedInto',
    'producesCoProduct',
    'producesByProduct',
  ]),
};

/**
 * The generic "Related topics" panel is capped. It is the conservative
 * catch-all — over a third of all edges — and an uncapped list of loose
 * connections would bury the precise relationships a reader actually needs. The
 * precise panels are never capped.
 */
export const GENERIC_CAP = 12;

const ORDER: RelationType[] = [
  'susceptibleTo',
  'affects',
  'requiresNutrient',
  'suppliedByFertilizer',
  'suppliesNutrient',
  'appliedToCrop',
  'suitableForSoil',
  'suitableFor',
  'sensitiveToClimate',
  'adaptedToClimate',
  'adaptedToSoil',
  'riskIncreasesUnder',
  'irrigatedBy',
  'irrigates',
  'cultivatedWith',
  'managedWith',
  'partOfFarmingSystem',
  'includesCrop',
  'includesLivestock',
  'commonlyRaisedIn',
  'feedsOn',
  'affectsNutrientAvailability',
  'relatedCultivar',
  'relatedBreed',
  // Phase 5A/5B/5C — precise relations before the generic catch-all, so a page
  // leads with what it actually asserts rather than with "related topics".
  'appliesToCommodity',
  'harvestedFrom',
  'harvestedAs',
  'processedInto',
  'derivedFromCommodity',
  'producesPrimaryProduct',
  'primaryProductOf',
  'producesCoProduct',
  'coProductOf',
  'producesByProduct',
  'byProductOf',
  'producedByProcess',
  'processInputOf',
  'precededByProcess',
  'followedByProcess',
  'relatedProcessingStep',
  'usesEquipment',
  'storedUsing',
  'gradedUnder',
  'gradeAppliesTo',
  'hasQualityAttribute',
  'qualityAttributeOf',
  'measuredBy',
  'measures',
  'susceptibleToDefect',
  'defectOf',
  'damagesCommodity',
  'reducedByProcess',
  'reduces',
  'monitoredWith',
  'monitors',
  // Generic last: it is the fallback, not the headline.
  'relatedConcept',
];

/**
 * Relation-aware panels for an entity page (Phase 3D). Groups the entity's
 * supported semantic edges by relation type with human headings. Only relations
 * that actually have edges are shown — no empty headings. Cultivars/breeds of a
 * parent species get dedicated "Cultivars"/"Breeds" panels.
 */
export function RelationPanels({ item }: { item: AnyContent }) {
  const edges = semanticEdges(item);
  const byRelation = new Map<
    RelationType,
    { title: string; href: string; targetKey: string }[]
  >();
  for (const e of edges) {
    const target = resolveRef(e.to);
    if (!target || target.editorialStatus !== 'published') continue;
    // The dedicated ParentSubEntities panel owns cultivar/breed listings.
    if (target.contentType === 'cultivar' || target.contentType === 'breed')
      continue;
    // …and TradePanels/CommodityPathways own their own typed fields. Printing
    // them here as well would duplicate every link on those pages.
    if (OWNED_BY_DEDICATED_PANEL[item.contentType]?.has(e.relation)) continue;
    const list = byRelation.get(e.relation) ?? [];
    list.push({
      title: target.title,
      href: contentPath(target.contentType, target.slug),
      targetKey: `${target.contentType}:${target.slug}`,
    });
    byRelation.set(e.relation, list);
  }

  // §9 — keep the generic "Related topics" panel from dominating. A target
  // already shown under a PRECISE relation is dropped from the generic panel
  // (the precise link says more), and the generic panel is capped so a page
  // with dozens of loose connections does not become a link wall that buries
  // its precise relationships.
  const preciseTargets = new Set<string>();
  for (const [relation, items] of byRelation)
    if (relation !== 'relatedConcept')
      for (const it of items) preciseTargets.add(it.targetKey);
  const generic = byRelation.get('relatedConcept');
  if (generic) {
    const deduped = generic.filter((it) => !preciseTargets.has(it.targetKey));
    byRelation.set('relatedConcept', deduped);
  }

  const groups = ORDER.filter((r) => byRelation.get(r)?.length).map((r) => {
    const sorted = byRelation
      .get(r)!
      .sort((a, b) => a.title.localeCompare(b.title));
    return {
      relation: r,
      heading: RELATION_HEADING[r] ?? r,
      // Precise panels are uncapped; the generic catch-all is capped so it
      // cannot overwhelm the precise relationships it sits beside.
      items: r === 'relatedConcept' ? sorted.slice(0, GENERIC_CAP) : sorted,
      truncated: r === 'relatedConcept' && sorted.length > GENERIC_CAP,
      total: sorted.length,
    };
  });

  const hasChildren =
    (item.contentType === 'crop' && cultivarsForCrop(item.slug).length > 0) ||
    (item.contentType === 'livestock' &&
      breedsForLivestock(item.slug).length > 0);

  if (groups.length === 0 && !hasChildren) return null;

  return (
    <section
      id="relationships"
      className="mt-12 scroll-mt-24"
      aria-labelledby="rel-h"
    >
      <h2 id="rel-h" className="font-serif text-2xl font-bold text-ink-900">
        Relationships
      </h2>
      <p className="mt-1 text-sm text-ink-500">
        Evidence-backed connections in the knowledge graph.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.relation}
            className="rounded-card border border-ink-100 bg-white p-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-olive-700">
              {g.heading}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="inline-block rounded-full border border-ink-200 px-2.5 py-0.5 text-sm text-olive-800 hover:border-olive-300"
                  >
                    {it.title}
                  </Link>
                </li>
              ))}
              {g.truncated && (
                <li className="self-center text-xs text-ink-400">
                  +{g.total - g.items.length} more
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
