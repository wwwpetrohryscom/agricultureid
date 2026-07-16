import {
  PUBLISHED_CONTENT,
  GLOSSARY,
  contentUrlPath,
  resolveRef,
} from '@/lib/content/registry';
import { semanticEdges } from '@/lib/content/relations';
import { getSource } from '@/lib/sources/registry';
import { COUNTRY_PROFILES } from '@/lib/geo/registry';
import { INDICATORS } from '@/data/geo/indicators';
import { TOOLS } from '@/lib/tools/tools';
import { allComparisons, comparisonPath } from '@/lib/comparison/registry';
import {
  allRegions,
  regionPath,
  zonesSorted,
  zonePath,
} from '@/lib/geo/region-registry';
import { countryPath, indicatorPath } from '@/lib/geo/paths';
import type { RelationType } from '@/types/content';
import type { SearchDoc, SearchEntityType } from '@/types/search';

const RELATION_LABEL: Partial<Record<RelationType, string>> = {
  affects: 'affects',
  susceptibleTo: 'susceptible to',
  suitableForSoil: 'suitable soil',
  requiresNutrient: 'requires nutrient',
  suppliedByFertilizer: 'supplied by fertilizer',
  cultivarOf: 'cultivar of',
  breedOf: 'breed of',
  adaptedToClimate: 'adapted to climate',
  irrigatedBy: 'irrigated by',
  managedWith: 'managed with',
  partOfFarmingSystem: 'part of farming system',
  sensitiveToClimate: 'sensitive to climate',
};

function sourceOrgs(ids: string[]): string[] {
  return [
    ...new Set(
      ids.map((id) => getSource(id)?.organization).filter(Boolean) as string[],
    ),
  ];
}

/**
 * Build the published, indexable search-document set from every entity type.
 * Never includes unpublished content, audit notes, or full article bodies.
 */
export function buildSearchDocuments(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  // Structured content (crops, soils, cultivars, breeds, …).
  for (const item of PUBLISHED_CONTENT) {
    const edges = semanticEdges(item);
    const relationLabels = [
      ...new Set(
        edges
          .map((e) => RELATION_LABEL[e.relation])
          .filter(Boolean) as string[],
      ),
    ];
    const sources = sourceOrgs(item.sourceReferences.map((r) => r.sourceId));
    const names = [item.title, ...(item.alternativeNames ?? [])];
    let parent: string | undefined;
    if (item.contentType === 'cultivar')
      parent = resolveRef(item.parentCrop)?.title;
    if (item.contentType === 'breed')
      parent = resolveRef(item.parentLivestock)?.title;
    docs.push({
      id: `${item.contentType}:${item.slug}`,
      type: item.contentType as SearchEntityType,
      route: contentUrlPath(item),
      title: item.title,
      names,
      scientificName: item.scientificName,
      category: item.category,
      parent,
      summary: item.summary,
      glossaryTerms: item.glossaryTerms,
      relationLabels,
      sources,
      facets: {
        entityType: [item.contentType],
        category: item.category ? [item.category] : [],
        source: sources,
      },
    });
  }

  // Glossary terms.
  for (const g of GLOSSARY) {
    docs.push({
      id: `glossary:${g.slug}`,
      type: 'glossary',
      route: `/glossary#${g.slug}`,
      title: g.term,
      names: [g.term],
      summary: g.definition.slice(0, 200),
      facets: { entityType: ['glossary'] },
    });
  }

  // Country profiles.
  for (const p of COUNTRY_PROFILES) {
    docs.push({
      id: `country:${p.slug}`,
      type: 'country',
      route: countryPath(p.slug),
      title: p.name,
      names: [p.name, p.countryCode],
      category: 'Country agriculture profile',
      summary: p.overview.slice(0, 200),
      country: p.name,
      region: p.region,
      facets: {
        entityType: ['country'],
        country: [p.name],
        region: [p.region],
      },
    });
  }

  // Indicators.
  for (const ind of INDICATORS) {
    docs.push({
      id: `indicator:${ind.slug}`,
      type: 'indicator',
      route: indicatorPath(ind.slug),
      title: ind.name,
      names: [ind.name, ind.id],
      category: `Indicator · ${ind.category}`,
      summary: ind.description,
      facets: { entityType: ['indicator'], category: [ind.category] },
    });
  }

  // Comparisons (Phase 4B).
  for (const c of allComparisons()) {
    docs.push({
      id: `comparison:${c.slug}`,
      type: 'comparison',
      route: comparisonPath(c),
      title: c.title,
      names: [c.title],
      category: `Comparison · ${c.entityType}`,
      summary: c.purpose,
      facets: { entityType: ['comparison'], category: [c.entityType] },
    });
  }

  // Subnational regions (Phase 4C).
  for (const r of allRegions()) {
    docs.push({
      id: `region:${r.regionId}`,
      type: 'region',
      route: regionPath(r),
      title: r.name,
      names: [r.name, r.officialCode, ...(r.alternativeNames ?? [])],
      category: `${r.adminLevel}`,
      parent: r.countryCode,
      summary: r.agriculturalLandContext,
      facets: { entityType: ['region'], country: [r.countryCode] },
    });
  }

  // Agroecological zones (Phase 4C).
  for (const z of zonesSorted()) {
    docs.push({
      id: `zone:${z.slug}`,
      type: 'agroecological-zone',
      route: zonePath(z),
      title: `${z.classification} — ${z.name}`,
      names: [z.name, z.classification],
      category: `Agroecological zone · ${z.group}`,
      summary: z.agriculturalRelevance,
      facets: { entityType: ['agroecological-zone'] },
    });
  }

  // Tools.
  for (const t of TOOLS) {
    docs.push({
      id: `tool:${t.slug}`,
      type: 'tool',
      route: `/tools/${t.slug}`,
      title: t.title,
      names: [t.title],
      category: `Calculator · ${t.category}`,
      summary: t.purpose,
      facets: { entityType: ['tool'], category: [t.category] },
    });
  }

  return docs;
}

const ENTITY_TYPE_LABEL: Record<string, string> = {
  crop: 'Crop',
  soil: 'Soil',
  'plant-disease': 'Plant disease',
  pest: 'Pest',
  livestock: 'Livestock',
  nutrient: 'Nutrient',
  fertilizer: 'Fertilizer',
  'soil-topic': 'Soil health',
  machinery: 'Machinery',
  climate: 'Climate',
  'farming-system': 'Farming system',
  'irrigation-method': 'Irrigation',
  'post-harvest': 'Post-harvest',
  'quality-attribute': 'Quality attribute',
  'post-harvest-defect': 'Post-harvest defect',
  'quality-measurement': 'Quality measurement',
  commodity: 'Commodity',
  'commodity-product': 'Commodity product',
  'commodity-grade': 'Grading standard',
  cultivar: 'Cultivar',
  breed: 'Breed',
  country: 'Country',
  indicator: 'Indicator',
  tool: 'Tool',
  glossary: 'Glossary',
  comparison: 'Comparison',
  region: 'Region',
  'agroecological-zone': 'Agroecological zone',
};

export function entityTypeLabel(type: string): string {
  return ENTITY_TYPE_LABEL[type] ?? type;
}
