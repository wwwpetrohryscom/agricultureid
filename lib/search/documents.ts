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
import { CHANGE_HUB_PATH, changeEvents } from '@/lib/history/registry';
import { COVERAGE_PATH } from '@/lib/coverage/paths';
import { SOIL_SURVEYS_PATH } from '@/lib/soils/paths';
import { TRADE_HUB_PATH } from '@/lib/trade/paths';
import { ECONOMICS_PATH } from '@/lib/economics/paths';
import { CLIMATE_RISK_PATH } from '@/lib/climate/paths';
import { NAME_CROSSWALK } from '@/data/crop-identity/name-crosswalk';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import {
  CROP_IDENTITIES,
  dataOnlyIdentities,
  identityForCrop,
  familyCounts,
  genusCount,
} from '@/lib/crops/identity';
import {
  countriesWithWaterData,
  statesWithNormals,
} from '@/lib/climate/registry';
import {
  cropsWithCosts,
  economicsJurisdictions,
} from '@/lib/economics/registry';
import { jurisdictionsWithRequirements } from '@/lib/trade/registry';
import {
  allSoilObservations,
  jurisdictionsCovered,
} from '@/lib/soils/registry';
import { allCountryCoverage } from '@/lib/coverage/derive';
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
import {
  VARIETY_REGISTRATIONS,
  VARIETY_REGISTRATION_HUB_PATH,
  isCurrent,
  presentSpecies,
  presentJurisdictions,
} from '@/lib/varieties/registry';
import {
  MARKETS_HUB_PATH,
  commodityMarketPath,
  commoditiesWithMarketData,
  seriesForCommodity,
  countriesWithMarketData,
  observationCount,
} from '@/lib/markets/registry';
import { METRIC_LABEL } from '@/types/market';
import {
  EXTENSION_RESOURCES,
  EXTENSION_HUB_PATH,
  resourcesByTopic,
  resourcesByJurisdiction,
  jurisdictionLabel,
  presentTopics,
  EXTENSION_INSTITUTIONS,
} from '@/lib/extension/registry';
import { TOPIC_LABEL } from '@/types/extension';
import {
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
  PRODUCTS_PATH,
  activeSubstances,
  allAuthorizations,
  allInputs,
  presentListings,
  productListingPath,
  presentSubstanceJurisdictions,
  substanceListingPath,
  // Aliased: the varieties registry exports its own isCurrent, and the two
  // decide entirely different things.
  isCurrent as isCurrentAuthorization,
} from '@/lib/inputs/registry';

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
/**
 * Singular forms of a commodity title, for market-document names.
 *
 * The engine prefix-expands only the FINAL query token, so "soybean production"
 * gives a document named "Soybeans production" no credit for "soybean" — and
 * every market document then ties on "production" alone, which an alphabetical
 * tie-break resolves to whichever commodity sorts first. Emitting the singular
 * phrase as well as the plural fixes the query without touching the engine or
 * putting a bare commodity name at name weight.
 */
function titleForms(title: string): string[] {
  const words = title.split(' ');
  const last = words[words.length - 1] ?? '';
  const lower = last.toLowerCase();
  let singular: string | null = null;
  if (/[^aeiou]ies$/.test(lower)) singular = `${last.slice(0, -3)}y`;
  else if (/(oes|ses|xes|zes|ches|shes)$/.test(lower))
    singular = last.slice(0, -2);
  else if (/[^s]s$/.test(lower)) singular = last.slice(0, -1);
  if (!singular || singular.length < 3) return [title];
  return [title, [...words.slice(0, -1), singular].join(' ')];
}

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
    // A crop with a verified identity carries its accepted scientific name at
    // NAME weight, not only in the scientificName field.
    //
    // Without this, "triticum aestivum" returned Spelt: the spelt taxon record
    // holds "Triticum aestivum subsp. spelta" at name weight, and the wheat
    // page's own binomial sat only in the lower-weighted scientificName field,
    // buried inside the free-text string "Triticum aestivum, Triticum durum".
    // A crop must win its own accepted name.
    if (item.contentType === 'crop') {
      const id = identityForCrop(item.slug);
      if (id) names.push(id.acceptedScientificName);
    }
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

  // Variety registration. One hub document, not one per register entry: 147
  // documents each reading "<name> is listed in <country>" would swamp the
  // cultivar pages they point at without answering a question anyone asks.
  if (VARIETY_REGISTRATIONS.length > 0) {
    const denominations = [
      ...new Set(VARIETY_REGISTRATIONS.map((r) => r.denomination)),
    ];
    const speciesNames = presentSpecies().map((s) => s.taxon);
    docs.push({
      id: 'variety:registration',
      type: 'variety-registration',
      route: VARIETY_REGISTRATION_HUB_PATH,
      title: 'Official variety registration',
      // Only registration vocabulary rides at name weight. Denominations and
      // species names belong to the cultivar and crop pages, and putting them
      // here made this hub outrank the wheat page for "triticum aestivum".
      names: [
        'variety registration',
        'national list',
        'plant variety catalogue',
        'plant breeders rights',
        'variety denomination',
        'plant variety protection',
      ],
      category: 'Variety registration',
      summary: `Official register entries recorded for ${new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef)).size} cultivars across ${presentJurisdictions().length} jurisdictions, ${VARIETY_REGISTRATIONS.filter(isCurrent).length} of them still current. Variety listings and plant variety protection rights are counted apart.`,
      relationLabels: [
        'registered variety',
        'national list entry',
        'plant variety right',
        'plant breeder right grant',
        'variety protection certificate',
        ...denominations,
        ...speciesNames,
      ],
      facets: {
        entityType: ['variety-registration'],
        category: ['Variety registration'],
      },
    });
  }

  // Change history. One hub document, never one per event: 21,000 documents
  // each reading "<product> was withdrawn" would bury every product page the
  // events are about. Only CHANGE vocabulary rides at name weight — the entity
  // names belong to the entity pages, and putting "France" or a substance name
  // here would let a page about change outrank the thing that changed.
  {
    const events = changeEvents();
    const dated = events.filter((e) => e.occurredAt !== undefined).length;
    docs.push({
      id: 'history:changes',
      type: 'change-history',
      route: CHANGE_HUB_PATH,
      title: 'Agricultural change history',
      names: [
        'agricultural change history',
        'register change',
        'authorization change',
        'withdrawn authorisation',
        'registration expired',
        'authority renamed',
        'what changed',
      ],
      category: 'Change history',
      summary: `${events.length.toLocaleString('en')} recorded changes in official agricultural registers, ${dated.toLocaleString('en')} of them carrying the date the source says they took effect.`,
      relationLabels: [
        'effective date',
        'detection date',
        'former name',
        'no longer authorised',
        'no longer listed',
      ],
      facets: {
        entityType: ['change-history'],
        category: ['Change history'],
      },
    });
  }

  // Coverage. One hub document. Only COVERAGE vocabulary rides at name weight:
  // a page about what is missing must never outrank the pages that are there,
  // and carrying country or crop names here is exactly how that happens.
  {
    const cells = allCountryCoverage();
    const covered = cells.filter((c) => c.status === 'verified').length;
    docs.push({
      id: 'coverage:hub',
      type: 'coverage',
      route: COVERAGE_PATH,
      title: 'Coverage and gaps',
      names: [
        'agricultureid coverage',
        'coverage and gaps',
        'what is indexed',
        'not yet indexed',
        'data coverage map',
      ],
      category: 'Coverage',
      summary: `What AgricultureID has indexed across ${new Set(cells.map((c) => c.jurisdiction)).size} countries and nine layers, ${covered} of ${cells.length} cells covered — and what it has only not looked at yet.`,
      relationLabels: [
        'coverage gap',
        'source not yet indexed',
        'official source unavailable',
        'editorial backlog',
      ],
      facets: { entityType: ['coverage'], category: ['Coverage'] },
    });
  }

  // Soil survey observations. One hub document, not one per soil body: 13,390
  // documents each naming one series would bury the soil-type and crop pages a
  // reader is usually after. Only SURVEY vocabulary rides at name weight —
  // "clay soil" and "soil pH" belong to the existing soil and soil-topic
  // pages, and carrying them here would let this hub outrank them.
  {
    const obs = allSoilObservations();
    const bodies = new Set(obs.map((o) => `${o.jurisdictionId}|${o.soilBody}`))
      .size;
    docs.push({
      id: 'soils:hub',
      type: 'soil-observation',
      route: SOIL_SURVEYS_PATH,
      title: 'Soil survey observations',
      names: [
        'soil survey',
        'soil survey observations',
        'usda soil survey',
        'ssurgo',
        'mapped soil bodies',
        'soil map unit',
      ],
      category: 'Soil surveys',
      summary: `${obs.length.toLocaleString('en')} representative values from official soil surveys, covering ${bodies.toLocaleString('en')} mapped soil bodies across ${jurisdictionsCovered().length} jurisdictions.`,
      relationLabels: [
        'representative value',
        'soil taxonomy order',
        'drainage class',
        'surface horizon',
        'survey area',
      ],
      facets: {
        entityType: ['soil-observation'],
        category: ['Soil surveys'],
      },
    });
  }

  // Border requirements. One hub document. The vocabulary here is about
  // PERMISSION to move goods; the trade-concept and commodity pages own the
  // vocabulary of trade itself, and carrying "export" or a commodity name at
  // name weight would take their queries.
  {
    docs.push({
      id: 'trade:requirements',
      type: 'trade-requirement',
      route: TRADE_HUB_PATH,
      title: 'Agricultural border requirements',
      names: [
        'agricultural border requirements',
        'phytosanitary certificate',
        'import permit agriculture',
        'plant import requirements',
        'export health certificate',
        'border control system',
      ],
      category: 'Border requirements',
      summary: `The official systems that decide agricultural import and export conditions in ${jurisdictionsWithRequirements().length} jurisdictions, the authorities that operate them, and the conditions each system resolves.`,
      relationLabels: [
        'import conditions',
        'quarantine requirement',
        'official controls',
        'competent authority',
      ],
      facets: {
        entityType: ['trade-requirement'],
        category: ['Border requirements'],
      },
    });
  }

  // Verified crop taxa.
  //
  // One hub document, plus one per DATA-ONLY taxon. The data-only documents
  // exist because a verified taxon a reader can search for is the whole reason
  // to hold it without a page — but they route to the directory, not to a URL
  // of their own, and they carry the SCIENTIFIC name at name weight rather
  // than the common name. A data-only document holding "wheat" or "maize" at
  // name weight would take a crop page's own query, and the crop page is where
  // the article is.
  {
    docs.push({
      id: 'crops:taxa',
      type: 'crop-taxon',
      route: CROP_TAXA_PATH,
      title: 'Verified crop taxa',
      names: [
        'crop taxonomy',
        'botanical name of crops',
        'accepted scientific name crop',
        'crop botanical family',
      ],
      category: 'Crop taxonomy',
      summary: `Verified botanical identities for ${CROP_IDENTITIES.length} cultivated crops across ${familyCounts().length} families and ${genusCount()} genera, each resolved against two independent taxonomic authorities.`,
      relationLabels: [
        'accepted name',
        'botanical family',
        'genus',
        'taxonomic synonym',
      ],
      facets: {
        entityType: ['crop-taxon'],
        category: ['Crop taxonomy'],
      },
    });

    for (const c of dataOnlyIdentities()) {
      docs.push({
        id: `crop-taxon:${c.slug}`,
        type: 'crop-taxon',
        route: `${CROP_TAXA_PATH}#${c.cropGroups[0]}`,
        title: c.primaryCommonName,
        // The COMMON name only, at name weight. The scientific name sits in
        // `scientificName`, which the engine weights lower.
        //
        // The reason is a real collision: spelt's accepted name is "Triticum
        // aestivum subsp. spelta", which contains wheat's binomial exactly. With
        // the scientific name at name weight, a search for "triticum aestivum"
        // returned the page-less spelt taxon ahead of the wheat article. A taxon
        // held without an article must never outrank an article for a name the
        // two share — the article is where the answer is.
        names: [c.primaryCommonName],
        scientificName: c.acceptedScientificName,
        category: 'Crop taxonomy',
        summary: `${c.primaryCommonName} (${c.acceptedScientificName}), ${c.family}. Harvested for ${c.harvestedParts.join(', ').replace(/-/g, ' ')}.${(c.alternativeCommonNames ?? []).length ? ` Also called ${(c.alternativeCommonNames ?? []).join(', ')}.` : ''} A verified taxon held without an encyclopedia article.`,
        // NOTHING here. This field held the family and the genus, and the genus
        // token at relation weight lifted the spelt taxon above the wheat page
        // for "triticum aestivum"; those were removed in Wave 27. The taxon's
        // own ALTERNATIVE COMMON NAMES stayed, and they are the same defect one
        // step further along: a synonym of the entity is not relation
        // vocabulary, and at relation weight it was worth exactly enough to
        // lift the page-less "Italian ryegrass" above the published perennial
        // ryegrass article for the bare query "ryegrass".
        //
        // They now sit in the summary, at the lowest weight in the index, so
        // the taxon is still reachable by a synonym without that synonym
        // outscoring an article that shares the token.
        relationLabels: [],
        facets: {
          entityType: ['crop-taxon'],
          category: ['Crop taxonomy'],
        },
      });
    }
  }

  // Climate, drought and water. One hub document. The 20 climate reference
  // pages own the vocabulary of climate ITSELF — "evapotranspiration",
  // "drought" as a concept — so this document carries phrases about the
  // RECORD: normals, assessments, irrigation statistics. Carrying "drought"
  // at name weight would take the concept page's own query.
  {
    docs.push({
      id: 'climate:water',
      type: 'climate-water',
      route: CLIMATE_RISK_PATH,
      title: 'Climate normals, drought assessments and agricultural water',
      names: [
        'climate normals',
        'drought monitor',
        'growing degree days normal',
        'area equipped for irrigation',
        'agricultural water statistics',
        'frost days normal',
      ],
      category: 'Climate and water',
      summary: `Station climate normals for ${statesWithNormals().length} states, weekly drought assessments, and irrigation statistics for ${countriesWithWaterData().length} countries — each value kept as the kind of statement its source made, and none of them a forecast.`,
      relationLabels: [
        'climate normal',
        'drought assessment',
        'irrigation area',
        'precipitation normal',
        'abnormally dry',
      ],
      facets: {
        entityType: ['climate-water'],
        category: ['Climate and water'],
      },
    });
  }

  // Farm economics. One hub document, and nothing per crop: the cost figures
  // live in a section of the crop page, so a second document would compete
  // with the crop page for its own name. Names are phrases about the COST of
  // farming; a bare crop name here would take that crop's query, and
  // "gross margin" is deliberately absent because nothing here publishes one.
  {
    docs.push({
      id: 'economics:farm',
      type: 'farm-economics',
      route: ECONOMICS_PATH,
      title: 'Farm economics: production costs, input prices and land rents',
      names: [
        'cost of production',
        'farm production costs',
        'agricultural input prices',
        'farm input price index',
        'agricultural land rent',
        'farmland rental prices',
      ],
      category: 'Farm economics',
      summary: `Cost-of-production forecasts for ${cropsWithCosts().length} crops, farm input price indices, input purchase prices and agricultural land rents across ${economicsJurisdictions().length} jurisdictions — each figure kept as the kind of statement its source made.`,
      relationLabels: [
        'operating costs',
        'cost per acre',
        'input costs',
        'land rent',
        'price index',
      ],
      facets: {
        entityType: ['farm-economics'],
        category: ['Farm economics'],
      },
    });
  }

  // Market data. One document per commodity market page, plus the hub — the
  // 5,201 series and 77,801 observations behind them are table rows, not
  // documents. Names are metric PHRASES ("wheat production"), never the bare
  // commodity name: the commodity and crop pages must keep winning "wheat".
  const marketCommodities = commoditiesWithMarketData();
  for (const slug of marketCommodities) {
    const item = PUBLISHED_CONTENT.find(
      (c) => c.contentType === 'commodity' && c.slug === slug,
    );
    if (!item) continue;
    const series = seriesForCommodity(slug);
    const countries = new Set(series.map((s) => s.countryCode)).size;
    const metrics = [...new Set(series.map((s) => s.metric))];
    docs.push({
      id: `market:${slug}`,
      type: 'market-data',
      route: commodityMarketPath(slug),
      // Named for what the page now holds. "market data" was accurate when the
      // page carried production only; with trade and prices on it the word
      // "market" in the title also let 64 commodity documents outrank the
      // market-term concept pages for the query "market price".
      title: `${item.title} production, trade and price statistics`,
      names: [
        ...new Set(
          titleForms(item.title).flatMap((form) => [
            `${form} production`,
            `${form} production by country`,
            `${form} market data`,
            ...metrics.map((m) => `${form} ${METRIC_LABEL[m].toLowerCase()}`),
          ]),
        ),
      ],
      category: 'Commodity statistics',
      summary: `Production, area, yield, trade and producer price series for ${item.title.toLowerCase()} across ${countries} countries, with the status, unit and currency each figure carries in its source.`,
      relationLabels: [
        'production statistics',
        ...metrics.map((m) => METRIC_LABEL[m]),
        // Price phrasing rides at RELATION weight, not name weight. Carrying
        // the bare token "price" on 64 commodity documents let them outrank
        // the market-term concept pages for the query "market price" — the
        // documents changed, not the benchmark.
        ...(metrics.includes('producerPrice')
          ? titleForms(item.title).flatMap((form) => [
              `${form} producer price`,
              `${form} farm gate price`,
            ])
          : []),
      ],
      facets: {
        entityType: ['market-data'],
        category: ['Commodity statistics'],
      },
    });
  }
  if (marketCommodities.length > 0) {
    docs.push({
      id: 'market:hub',
      type: 'market-data',
      route: MARKETS_HUB_PATH,
      title: 'Agricultural markets and commodity data',
      names: [
        'agricultural market data',
        'commodity production statistics',
        'production by country',
        'crop production statistics',
        'agricultural statistics',
        'producer prices',
        'farm gate prices',
        'agricultural trade statistics',
        'exports by country',
      ],
      category: 'Market data',
      summary: `${observationCount().toLocaleString('en')} official market observations for ${marketCommodities.length} commodities across ${countriesWithMarketData().length} countries — production, area, yield, stocks, trade and producer prices — from FAOSTAT and USDA releases.`,
      relationLabels: ['FAOSTAT', 'USDA PSD', 'production statistics'],
      facets: { entityType: ['market-data'], category: ['Market data'] },
    });
  }

  // Extension guidance. One document per TOPIC plus a hub — not one per
  // resource: a resource document would have to route to an off-site page or to
  // the hub, and both are worse than landing on the table that lists it.
  if (EXTENSION_RESOURCES.length > 0) {
    const byTopic = resourcesByTopic();
    for (const topic of presentTopics()) {
      const rows = byTopic.get(topic) ?? [];
      if (!rows.length) continue;
      const label = TOPIC_LABEL[topic];
      const places = [
        ...new Set(rows.map((r) => r.jurisdictionId ?? r.countryCode)),
      ];
      docs.push({
        id: `extension:${topic}`,
        type: 'extension-resource',
        route: `${EXTENSION_HUB_PATH}#${topic}`,
        title: `${label} extension guidance`,
        names: [
          `${label} extension`,
          `${label} extension guide`,
          `extension guidance ${label.toLowerCase()}`,
        ],
        category: 'Extension guidance',
        summary: `${rows.length} official extension resource${rows.length === 1 ? '' : 's'} on ${label.toLowerCase()}, published for ${places.join(', ')}.`,
        relationLabels: [
          'extension guidance',
          ...rows.flatMap((r) => [
            ...r.cropRefs,
            ...r.pestRefs,
            ...r.diseaseRefs,
          ]),
        ],
        facets: {
          entityType: ['extension-resource'],
          category: ['Extension guidance'],
        },
      });
    }
    // One document per jurisdiction. The failure this prevents is a reader
    // asking about one state and being shown another's guidance, which for
    // agronomy is worse than no answer.
    for (const [key, rows] of resourcesByJurisdiction()) {
      const institution = EXTENSION_INSTITUTIONS.find(
        (i) => (i.jurisdictionId ?? i.countryCode) === key,
      );
      if (!institution) continue;
      const place = jurisdictionLabel(key);
      docs.push({
        id: `extension:jurisdiction:${key}`,
        type: 'extension-resource',
        route: `${EXTENSION_HUB_PATH}#${key}`,
        title: `Extension guidance for ${place}`,
        names: [
          `extension ${place}`,
          `extension guidance ${place}`,
          `${institution.officialName}`,
        ],
        category: 'Extension guidance',
        summary: `${rows.length} resources published for ${place} by ${institution.officialName}. Guidance written for ${place} applies there and is not general advice.`,
        relationLabels: [place, institution.officialName, 'extension guidance'],
        facets: {
          entityType: ['extension-resource'],
          category: ['Extension guidance'],
        },
      });
    }
    docs.push({
      id: 'extension:hub',
      type: 'extension-resource',
      route: EXTENSION_HUB_PATH,
      title: 'Official extension resources',
      names: [
        'extension resources',
        'extension guidance',
        'cooperative extension',
        'agronomy guidance',
        'extension publications',
      ],
      category: 'Extension guidance',
      summary: `${EXTENSION_RESOURCES.length} resources indexed from ${EXTENSION_INSTITUTIONS.length} publishers with verified public extension mandates.`,
      relationLabels: EXTENSION_INSTITUTIONS.map((i) => i.officialName),
      facets: {
        entityType: ['extension-resource'],
        category: ['Extension guidance'],
      },
    });
  }

  // Input authorisations. Three documents, not one per substance or product:
  // 16,623 records routing to three pages would be the same page returned
  // 16,623 times. Substance names ride at NAME weight on the substance page
  // only, where no corpus entity competes for them.
  const substances = activeSubstances();
  if (substances.length > 0) {
    const auths = allAuthorizations();
    const currentProducts = auths.filter(
      (a) => a.scope === 'product' && isCurrentAuthorization(a),
    );
    const approved = auths.filter(
      (a) => a.scope === 'active-substance' && isCurrentAuthorization(a),
    );
    // The substances carried by the most authorised products — the ones a
    // reader is most likely to type.
    const usage = new Map<string, number>();
    for (const i of allInputs()) {
      for (const n of i.activeSubstanceNames)
        usage.set(n, (usage.get(n) ?? 0) + 1);
    }
    const common = [...usage]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 60)
      .map(([n]) => n);
    docs.push({
      id: 'inputs:hub',
      type: 'input-authorization',
      route: INPUTS_HUB_PATH,
      title: 'Agricultural input authorisations',
      names: [
        'input authorisation',
        'pesticide authorisation',
        'pesticide registration',
        'plant protection product register',
        'agricultural inputs',
      ],
      category: 'Input authorisation',
      summary: `${auths.length.toLocaleString('en')} authorisation records for active substances and products, from the EU Pesticides Database and the French E-Phy register.`,
      relationLabels: [
        'pesticide register',
        'authorisation',
        'active substance',
      ],
      facets: {
        entityType: ['input-authorization'],
        category: ['Input authorisation'],
      },
    });
    // One document per substance decision-maker. The EU decides
    // supranationally and Australia nationally; a reader asking about one must
    // not be shown the other.
    for (const j of presentSubstanceJurisdictions()) {
      docs.push({
        id: `inputs:substances:${j.slug}`,
        type: 'input-authorization',
        route: substanceListingPath(j.slug),
        title: `${j.label} active substance decisions`,
        names: [
          `${j.label} active substances`,
          `${j.label} active constituent approvals`,
          `active substance approvals ${j.label}`,
          `${j.label} substance approval`,
        ],
        category: 'Input authorisation',
        summary: `${j.count.toLocaleString('en')} substances with the decision ${j.label} has taken on each — ${j.instrument}.`,
        relationLabels: [j.label, 'active substance', j.instrument],
        facets: {
          entityType: ['input-authorization'],
          category: ['Input authorisation'],
        },
      });
    }
    docs.push({
      id: 'inputs:active-substances',
      type: 'input-authorization',
      route: ACTIVE_SUBSTANCES_PATH,
      title: 'EU active substance approvals',
      names: [
        'active substance approval',
        'EU pesticide approval',
        'approved active substances',
        ...substances.slice(0, 0).map((i) => i.name),
        ...common,
      ],
      category: 'Input authorisation',
      summary: `${substances.length.toLocaleString('en')} active substances with their EU approval state; ${approved.length} are approved.`,
      relationLabels: ['active substance', 'EU approval'],
      facets: {
        entityType: ['input-authorization'],
        category: ['Input authorisation'],
      },
    });
    docs.push({
      id: 'inputs:products',
      type: 'input-authorization',
      route: PRODUCTS_PATH,
      title: 'Authorised plant protection products by register',
      names: [
        'authorised products',
        'plant protection product register',
        'pesticide product register',
        'registered pesticide products',
      ],
      category: 'Input authorisation',
      summary: `${currentProducts.length.toLocaleString('en')} products currently authorised across the French, Canadian and Australian registers, each identified by its own registration number.`,
      relationLabels: ['authorised product', 'France', 'Canada', 'Australia'],
      facets: {
        entityType: ['input-authorization'],
        category: ['Input authorisation'],
      },
    });
    // One document per jurisdiction-and-family listing. The jurisdiction rides
    // at NAME weight because that is the distinction a reader is asking about:
    // "pesticide register Canada" must not return the Australian listing.
    for (const l of presentListings()) {
      docs.push({
        id: `inputs:listing:${l.slug}`,
        type: 'input-authorization',
        route: productListingPath(l.slug),
        title: `${l.familyLabel} authorised in ${l.jurisdiction}`,
        names: [
          `${l.familyLabel} ${l.jurisdiction}`,
          `pesticide register ${l.jurisdiction}`,
          `authorised products ${l.jurisdiction}`,
          `${l.familyLabel.split(',')[0]} register ${l.jurisdiction}`,
        ],
        category: 'Input authorisation',
        summary: `${l.count.toLocaleString('en')} products currently authorised in ${l.jurisdiction}. This authorisation applies in ${l.jurisdiction} and nowhere else.`,
        relationLabels: [l.jurisdiction, l.familyLabel, 'authorised product'],
        facets: {
          entityType: ['input-authorization'],
          category: ['Input authorisation'],
        },
      });
    }
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

  /**
   * Names a reader may type that are not entities, attached to the entity that
   * answers them.
   *
   * Waves 27–30 refused 83 candidate crop names, each for a good reason, into a
   * research ledger. "Canola", "nectarine", "Pisum sativum" and "Cavendish
   * banana" are all names people search for, none of them is a crop identity,
   * and until now none of them reached anything. The crosswalk records where
   * each one's answer is; this attaches it.
   *
   * They ride at NAME weight because that is what they are — other names for
   * the same thing, or the name of the thing a reader was really looking for.
   * A crosswalk entry that deliberately resolves nowhere (a homonym, an
   * unsettled taxon) attaches to nothing, which is the point of recording it.
   */
  {
    const byKey = new Map(docs.map((d) => [d.id, d]));
    for (const x of NAME_CROSSWALK) {
      if (!x.resolvesTo) continue;
      const key =
        x.resolvesTo.type === 'crop-taxon'
          ? `crop-taxon:${x.resolvesTo.slug}`
          : `${x.resolvesTo.type}:${x.resolvesTo.slug}`;
      const doc = byKey.get(key);
      if (!doc) continue;
      const names = new Set([...(doc.names ?? []), x.name]);
      doc.names = [...names];
    }
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
  'variety-registration': 'Variety registration',
  'market-data': 'Market data',
  'extension-resource': 'Extension guidance',
  'input-authorization': 'Input authorisation',
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
