import Link from 'next/link';
import { semanticEdges } from '@/lib/content/relations';
import { contentPath, resolveRef } from '@/lib/content/registry';
import { breedsForLivestock, cultivarsForCrop } from '@/lib/content/registry';
import type { AnyContent, RelationType } from '@/types/content';

/** Human heading per relation type, plus display order. */
const RELATION_HEADING: Partial<Record<RelationType, string>> = {
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
};

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
  const byRelation = new Map<RelationType, { title: string; href: string }[]>();
  for (const e of edges) {
    const target = resolveRef(e.to);
    if (!target || target.editorialStatus !== 'published') continue;
    // The dedicated ParentSubEntities panel owns cultivar/breed listings.
    if (target.contentType === 'cultivar' || target.contentType === 'breed')
      continue;
    const list = byRelation.get(e.relation) ?? [];
    list.push({
      title: target.title,
      href: contentPath(target.contentType, target.slug),
    });
    byRelation.set(e.relation, list);
  }

  const groups = ORDER.filter((r) => byRelation.has(r)).map((r) => ({
    relation: r,
    heading: RELATION_HEADING[r] ?? r,
    items: byRelation.get(r)!.sort((a, b) => a.title.localeCompare(b.title)),
  }));

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
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
