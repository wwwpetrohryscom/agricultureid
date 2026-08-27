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
import {
  listedAuthorities,
  publishedAuthorities,
  authorityPath,
  countryAuthoritiesPath,
  AUTHORITIES_HUB_PATH,
  AUTHORITY_VIEW_COUNTRIES,
  humanizeToken,
} from '@/lib/authorities/registry';
import { getJurisdiction } from '@/lib/jurisdictions/registry';
import {
  listedRegistries,
  publishedRegistries,
  registryPath,
  REGISTRIES_HUB_PATH,
} from '@/lib/registries/registry';
import {
  listedComplianceTopics,
  publishedComplianceTopics,
  compliancePath,
  REGULATIONS_HUB_PATH,
} from '@/lib/compliance/registry';
import {
  listedSupportPrograms,
  publishedSupportPrograms,
  supportPath,
  SUPPORT_HUB_PATH,
} from '@/lib/support/registry';
import {
  cropsWithCalendars,
  calendarsForCrop,
  seasonsForCrop,
  cropCalendarPath,
} from '@/lib/calendars/registry';
import {
  BIOSECURITY_STATUS,
  BIOSECURITY_HUB_PATH,
} from '@/lib/biosecurity/registry';

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

/**
 * Relationship-grammar words that must not become retrievable search tokens.
 *
 * A relation label like "supplied by fertilizer" exists so that a search for
 * "fertilizer" can find the nutrients a fertilizer supplies. But tokenised
 * naively it also makes "supplied" a retrievable token, and a bare query of
 * "supplied" then returns every nutrient that participates in the edge —
 * ranked, since they all score identically on the label, by alphabetical
 * tie-break. That is a graph-derived false positive: the entity ranks for a word
 * that describes its RELATIONSHIP, not itself. §8 forbids graph labels creating
 * that kind of expansion.
 *
 * Dropping the verbs and keeping the entity nouns ("fertilizer", "soil",
 * "nutrient", "climate", "cultivar", "breed", "farming", "system") preserves
 * the useful matches and removes the noise. A label that is pure grammar
 * ("affects", "irrigated by") contributes nothing and is dropped entirely.
 */
const RELATION_GRAMMAR = new Set([
  'affects',
  'susceptible',
  'suitable',
  'requires',
  'supplied',
  'adapted',
  'irrigated',
  'managed',
  'sensitive',
  'part',
  'to',
  'of',
  'by',
  'with',
  'in',
  'for',
]);

/** The entity-noun tokens a relation label contributes to the index. */
function relationLabelTokens(relation: RelationType): string[] {
  const label = RELATION_LABEL[relation];
  if (!label) return [];
  return label.split(' ').filter((t) => !RELATION_GRAMMAR.has(t));
}

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
    // Entity-noun tokens only — never bare relationship verbs. See
    // RELATION_GRAMMAR: a search for "fertilizer" should find nutrients supplied
    // by one, but a search for "supplied" should not.
    const relationLabels = [
      ...new Set(edges.flatMap((e) => relationLabelTokens(e.relation))),
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

  // Agricultural authorities. Registry-driven: a new authority record appears
  // in search with no switch to edit here, which is what keeps later research
  // waves from silently missing the index.
  const publishedSlugs = new Set(publishedAuthorities().map((a) => a.slug));
  const countryViewBySlug = new Map(
    AUTHORITY_VIEW_COUNTRIES.map((c) => [c.iso3, c]),
  );
  for (const a of listedAuthorities()) {
    const hasProfile = publishedSlugs.has(a.slug);
    const jurisdiction = a.jurisdictionId
      ? getJurisdiction(a.jurisdictionId)
      : undefined;
    const countryView = a.countryCode
      ? countryViewBySlug.get(a.countryCode)
      : undefined;

    // A directory-only record has no detail page, so it must never be given
    // one here. It routes to the country authority view that really lists it,
    // falling back to the hub for national bodies without a country view.
    const route = hasProfile
      ? authorityPath(a.slug)
      : countryView
        ? countryAuthoritiesPath(countryView.slug)
        : AUTHORITIES_HUB_PATH;

    // Names carry the weight. Jurisdiction name and code ride here so
    // "Texas agriculture" and "CA agriculture department" both reach the right
    // body rather than a generic national one.
    const names = [
      a.officialName,
      ...(a.shortName ? [a.shortName] : []),
      ...(a.alternativeNames ?? []),
      ...(a.localLanguageNames ?? []).map((n) => n.name),
      ...(jurisdiction
        ? [
            jurisdiction.name,
            jurisdiction.subdivisionCode,
            ...(jurisdiction.aliases ?? []),
          ]
        : []),
      a.jurisdictionName,
    ].filter(Boolean);

    docs.push({
      id: `authority:${a.id}`,
      type: 'agricultural-authority',
      route,
      title: a.officialName,
      names: [...new Set(names)],
      category: hasProfile
        ? `Agricultural authority · ${a.jurisdictionName}`
        : `Agricultural authority (directory record) · ${a.jurisdictionName}`,
      parent: a.jurisdictionName,
      summary: a.summary,
      country: a.countryCode,
      region: a.jurisdictionId,
      // Responsibilities are the "what does it actually do" signal; they are
      // already evidence-backed, so they are safe to index as labels.
      relationLabels: a.responsibilities.map((r) => humanizeToken(r.area)),
      facets: {
        entityType: ['agricultural-authority'],
        category: [
          humanizeToken(a.governmentLevel),
          humanizeToken(a.authorityType),
        ],
        ...(a.countryCode ? { country: [a.countryCode] } : {}),
      },
    });
  }

  // Official registries and databases. Registry-driven like authorities, so a
  // new record indexes with no switch to edit here.
  const publishedRegistrySlugs = new Set(
    publishedRegistries().map((r) => r.slug),
  );
  for (const r of listedRegistries()) {
    const hasProfile = publishedRegistrySlugs.has(r.slug);
    docs.push({
      id: `registry:${r.id}`,
      type: 'agricultural-registry',
      // A directory-only registry has no detail page; it routes to the hub
      // that really lists it rather than to a page that does not exist.
      route: hasProfile ? registryPath(r.slug) : REGISTRIES_HUB_PATH,
      title: r.officialName,
      names: [
        ...new Set(
          [
            r.officialName,
            ...(r.shortName ? [r.shortName] : []),
            ...(r.aliases ?? []),
            ...(r.localNames ?? []),
            r.jurisdictionName,
          ].filter(Boolean),
        ),
      ],
      category: hasProfile
        ? `Official registry · ${r.jurisdictionName}`
        : `Official registry (directory record) · ${r.jurisdictionName}`,
      parent: r.jurisdictionName,
      // Scope is the "what can I look up here" signal and is already evidenced.
      summary: r.scope[0] ?? r.officialName,
      ...(r.countryCode ? { country: r.countryCode } : {}),
      relationLabels: [humanizeToken(r.registryType), ...r.scope.slice(0, 3)],
      facets: {
        entityType: ['agricultural-registry'],
        category: [humanizeToken(r.registryType)],
        ...(r.countryCode ? { country: [r.countryCode] } : {}),
      },
    });
  }

  // Compliance topics. Registry-driven like authorities and registries.
  const publishedTopicSlugs = new Set(
    publishedComplianceTopics().map((t) => t.slug),
  );
  for (const t of listedComplianceTopics()) {
    const hasPage = publishedTopicSlugs.has(t.slug);
    docs.push({
      id: `compliance:${t.id}`,
      type: 'agricultural-compliance',
      route: hasPage ? compliancePath(t.slug) : REGULATIONS_HUB_PATH,
      title: t.title,
      names: [...new Set([t.title, t.jurisdictionName].filter(Boolean))],
      category: `Compliance topic · ${t.jurisdictionName}`,
      parent: t.jurisdictionName,
      summary: t.summary,
      ...(t.countryCode ? { country: t.countryCode } : {}),
      // Requirement titles are the "what do I actually have to do" signal.
      relationLabels: [
        humanizeToken(t.topicType),
        ...t.requirements.map((r) => r.title),
      ],
      facets: {
        entityType: ['agricultural-compliance'],
        category: [humanizeToken(t.topicType)],
        ...(t.countryCode ? { country: [t.countryCode] } : {}),
      },
    });
  }

  // Support programmes. Registry-driven; a new programme indexes with no
  // switch to edit here.
  const publishedSupportSlugs = new Set(
    publishedSupportPrograms().map((p) => p.slug),
  );
  for (const prog of listedSupportPrograms()) {
    const hasPage = publishedSupportSlugs.has(prog.slug);
    docs.push({
      id: `support:${prog.id}`,
      type: 'agricultural-support',
      route: hasPage ? supportPath(prog.slug) : SUPPORT_HUB_PATH,
      title: prog.officialName,
      names: [
        ...new Set(
          [
            prog.officialName,
            ...(prog.shortName ? [prog.shortName] : []),
            ...(prog.aliases ?? []),
            ...(prog.localNames ?? []),
            prog.jurisdictionName,
          ].filter(Boolean),
        ),
      ],
      // Status rides in the category so a closed programme is visibly closed in
      // results rather than looking like an open opportunity.
      category: `Support programme · ${humanizeToken(prog.status)} · ${prog.jurisdictionName}`,
      parent: prog.jurisdictionName,
      summary: prog.summary,
      ...(prog.countryCode ? { country: prog.countryCode } : {}),
      relationLabels: [
        humanizeToken(prog.programType),
        ...prog.beneficiaryTypes.map((b) => humanizeToken(b)),
      ],
      facets: {
        entityType: ['agricultural-support'],
        category: [humanizeToken(prog.programType)],
        ...(prog.countryCode ? { country: [prog.countryCode] } : {}),
      },
    });
  }

  // Crop calendars. One document per CROP, not per crop×jurisdiction: 172
  // near-identical documents would drown the index and the jurisdictions are
  // rows on the crop's page, not destinations.
  for (const cropSlug of cropsWithCalendars()) {
    const entries = calendarsForCrop(cropSlug);
    const crop = PUBLISHED_CONTENT.find(
      (c) => c.contentType === 'crop' && c.slug === cropSlug,
    );
    if (!crop) continue;
    const seasons = seasonsForCrop(cropSlug);
    const jurisdictions = [...new Set(entries.map((e) => e.jurisdictionName))];
    docs.push({
      id: `calendar:${cropSlug}`,
      type: 'crop-calendar',
      route: cropCalendarPath(cropSlug),
      title: `${crop.title} planting and harvest calendar`,
      // Jurisdiction names ride at name weight so "wheat planting Kansas"
      // reaches the calendar rather than the crop article.
      names: [
        `${crop.title} calendar`,
        `${crop.title} planting`,
        `${crop.title} harvest`,
        ...seasons,
        ...jurisdictions,
      ],
      category: 'Crop calendar',
      parent: crop.title,
      summary: `Usual sowing and harvest windows for ${crop.title.toLowerCase()} across ${entries.length} jurisdictions.`,
      relationLabels: ['sowing window', 'harvest window', ...seasons],
      facets: { entityType: ['crop-calendar'], category: ['Crop calendar'] },
    });
  }

  // Biosecurity listings. ONE document for the hub rather than one per
  // listing: a listing's useful destination is the organism's own page, which
  // is already indexed, so 20 near-identical documents would only dilute it.
  if (BIOSECURITY_STATUS.length > 0) {
    const lists = [
      ...new Set(BIOSECURITY_STATUS.map((s) => s.officialListName)),
    ];
    const organisms = [
      ...new Set(
        BIOSECURITY_STATUS.map((s) => {
          const o = PUBLISHED_CONTENT.find(
            (c) =>
              (c.contentType === 'pest' || c.contentType === 'plant-disease') &&
              c.slug === s.organismRef,
          );
          return o?.title ?? s.organismRef;
        }),
      ),
    ];
    docs.push({
      id: 'biosecurity:listings',
      type: 'biosecurity-listing',
      route: BIOSECURITY_HUB_PATH,
      title: 'Agricultural biosecurity listings',
      names: [
        'biosecurity listings',
        'quarantine pests',
        ...lists,
        ...organisms,
      ],
      category: 'Biosecurity',
      summary: `Official biosecurity listings recorded for ${new Set(BIOSECURITY_STATUS.map((s) => s.organismRef)).size} pests and plant pathogens across ${lists.length} official lists.`,
      relationLabels: ['regulated pest', 'quarantine listing', ...lists],
      facets: {
        entityType: ['biosecurity-listing'],
        category: ['Biosecurity'],
      },
    });
  }

  // Tools.
  for (const t of TOOLS) {
    docs.push({
      id: `tool:${t.slug}`,
      type: 'tool',
      route: `/tools/${t.slug}`,
      title: t.title,
      // Aliases ride at name weight so a phrase the title lacks ("wet basis")
      // can still reach the tool. They are NOT synonyms — see
      // ToolConfig.searchAliases.
      names: [t.title, ...(t.searchAliases ?? [])],
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
  'agricultural-authority': 'Agricultural authority',
  'agricultural-registry': 'Official registry',
  'agricultural-compliance': 'Compliance topic',
  'agricultural-support': 'Support programme',
  'crop-calendar': 'Crop calendar',
  'biosecurity-listing': 'Biosecurity listing',
  machinery: 'Machinery',
  climate: 'Climate',
  'farming-system': 'Farming system',
  'irrigation-method': 'Irrigation',
  'post-harvest': 'Post-harvest',
  'processing-method': 'Processing method',
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
