/**
 * Why each cross-layer coverage figure is what it is.
 *
 * The matrix reports numbers. This says what each number means, using a
 * vocabulary in which "missing" is not a permitted answer — a crop with no
 * calendar record and a crop whose calendar source went offline are both a
 * zero, and they call for different work.
 */
import type {
  ConcordanceClassification,
  LayerEvidenceAssessment,
  TradeMappingAssessment,
} from '@/types/crop-evidence';

export const LAYER_ASSESSMENTS: readonly LayerEvidenceAssessment[] = [
  {
    layer: 'calendars',
    reachesAtAssessment: 6,
    reason: 'SOURCE_NOT_MACHINE_INGESTIBLE',
    finding:
      'All 172 calendar records come from one source — USDA NASS Usual Planting and Harvesting Dates — and it covers six field crops across US states, which is exactly the coverage the matrix shows. Expanding from the same source was attempted in this wave and is not currently possible: the plain-text release the corpus parsed in Wave 8 now returns 404 at its recorded location, and the PDF edition is font-encoded in a way that resists reliable text extraction. Guessing at the table from a partial extraction would put wrong sowing windows into a layer whose whole value is that its dates are official.',
    wouldRaiseCoverageBy:
      'Locating a machine-readable release of the same publication, or ingesting a second authoritative calendar source — FAO crop calendars and several national agricultural ministries publish them. Neither has been assessed for crop identity, geography semantics or vintage, which is the work that would have to come first.',
    sourceIds: ['usda-nass', 'fao'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'economics',
    reachesAtAssessment: 9,
    reason: 'SOURCE_EXISTS_NOT_MAPPED',
    finding:
      'Farm economics holds 24,916 figures, and they reach nine crops. The limit is not the volume of data but the join: USDA ERS cost-of-production forecasts cover a small set of commodity field crops, and the Eurostat series are keyed to geography and product rather than to a botanical crop. The layer is deep and narrow by construction.',
    wouldRaiseCoverageBy:
      'Ingesting public enterprise budgets from land-grant extension services, which publish them per crop and per state. Each would need year, geography, currency, unit basis and production system preserved, because a budget without them cannot be compared with anything.',
    sourceIds: ['usda-ers', 'ec-agri'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'varietyRegistrations',
    reachesAtAssessment: 8,
    reason: 'SOURCE_EXISTS_NOT_MAPPED',
    finding:
      'Registrations reach crops only through published cultivars, and the corpus holds 77 cultivars against 243 crops. The registers themselves cover far more species than that. The constraint is deliberate: Waves 7 to 10 established that 51 per cent of exact name matches between a register and a cultivar were cross-species homonyms — a wheat denomination matching a strawberry PBR — so matching is fail-closed on name AND species together.',
    wouldRaiseCoverageBy:
      'Publishing more cultivars, each with a verified parent crop. Matching registrations directly to crops would mean relaxing the species check, which is the failure this corpus has already found once.',
    sourceIds: ['ec-agri', 'usda-nass'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'extension',
    reachesAtAssessment: 45,
    reason: 'SOURCE_EXISTS_NOT_INGESTED',
    finding:
      '153 verified extension resources from five institutions reach 45 crops. The gap is institutional rather than technical: the corpus indexes a small number of publishers, and hundreds of land-grant universities, national extension services and public research institutes publish crop guidance that would qualify.',
    wouldRaiseCoverageBy:
      'Indexing further publishers, with the publisher mandate verified for each — the standing rule is that commercial agronomy content must not be indexed as extension, and that check is per institution rather than per document.',
    sourceIds: ['ext-ahdb', 'cornell-cals', 'umn-extension'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'biosecurity',
    reachesAtAssessment: 64,
    reason: 'SOURCE_EXISTS_NOT_INGESTED',
    finding:
      'Reach is determined by the pest and disease pages, which name notable host crops — a curated shortlist, not an exhaustive host range. 64 crops are named as a notable host by at least one of the 115 organisms the corpus holds. Adding organisms adds reach; expanding the host lists on existing organisms would not, because they are shortlists on purpose.',
    wouldRaiseCoverageBy:
      'Publishing further pest and disease pages for organisms that are notable on currently unreached crops. Widening existing host lists to raise a coverage number would change what the field means.',
    sourceIds: ['cabi', 'uc-ipm'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'cultivars',
    reachesAtAssessment: 15,
    reason: 'NOT_RESEARCHED',
    finding:
      '77 published cultivars name a parent crop, and they concentrate on 15 crops. Cultivar pages are hand-authored and each carries a verified registration where one exists, so the layer grows at editorial pace rather than at ingestion pace. Which crops most warrant a cultivar page has not been assessed, which is why this is recorded as unresearched rather than as a source problem — there is no missing source here, only work nobody has done.',
    wouldRaiseCoverageBy:
      'Authoring cultivar pages for crops that have none. This is editorial capacity, not an evidence gap.',
    assessedAt: '2026-09-02',
  },
  {
    layer: 'markets',
    reachesAtAssessment: 57,
    reason: 'SOURCE_EXISTS_NOT_MAPPED',
    finding:
      'Reached through the commodity that names the crop. 75 of 81 commodities name a source crop and 64 carry ingested price series, which is what produces 57 crops. The 9 commodities naming a multi-taxon concept rather than a species are classified separately below, because a series reached through one of those is about the concept and not about any of its constituents.',
    wouldRaiseCoverageBy:
      'Publishing commodities for crops that have none, or ingesting series for commodities that have none. Neither is a mapping problem any more.',
    sourceIds: ['faostat', 'usda-nass'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'trade',
    reachesAtAssessment: 0,
    reason: 'SOURCE_EXISTS_NOT_INGESTED',
    finding:
      'The eight records the corpus holds are pointers to whole official systems — BICON, CFIA, PCIT, TRACES and their equivalents — each of which decides requirements per consignment through a query interface. They are scoped by jurisdiction and by broad subject type, and no crop-level mapping can honestly be derived from them. See TRADE_MAPPING below: a botanical scope does exist in published law, and it is not in the corpus.',
    wouldRaiseCoverageBy:
      'Ingesting the annexes of EU Regulation 2019/2072, which list plants by genus and species with their special requirements. That is a different kind of record from the system pointers held now, and it would need its own contract.',
    sourceIds: ['reg-au-bicon', 'ec-agri'],
    assessedAt: '2026-09-02',
  },
  {
    layer: 'soils',
    reachesAtAssessment: 243,
    reason: 'NOT_APPLICABLE',
    finding:
      'Every published crop names at least one suitable soil, so there is no gap. Reported here so that a full row of the matrix is accounted for rather than only the empty ones.',
    wouldRaiseCoverageBy:
      'Nothing. Coverage is complete and the useful question is whether the references are apt, not whether they exist.',
    assessedAt: '2026-09-02',
  },
  {
    layer: 'climate',
    reachesAtAssessment: 234,
    reason: 'NOT_RESEARCHED',
    finding:
      'Nine published crops name no climate reference. Waves 39 and 40 added 78 crops between them, every one of which names at least one, so the shortfall has not grown across two waves and 78 opportunities: it is the same nine pages. That is a strong reason to think it is an omission in those nine rather than a property of the layer. Whether those nine are genuinely unrelated to any of the 20 climate concept pages, or simply have not had the reference added, still has not been examined.',
    wouldRaiseCoverageBy:
      'Reviewing those nine crops individually. It is a small enough number that a per-crop answer is achievable, which is why this is NOT_RESEARCHED rather than a source problem.',
    assessedAt: '2026-09-02',
  },
  {
    layer: 'relatedCrops',
    reachesAtAssessment: 110,
    reason: 'NOT_APPLICABLE',
    finding:
      'Derived rather than sourced: a crop has related crops when it shares a genus, a concept scope, or enough pest and disease hosts with another published crop. A crop with none is a crop with no close relative published, which is a fact about the corpus rather than a gap in it.',
    wouldRaiseCoverageBy:
      'Publishing more crops. Lowering the shared-host threshold would raise the number and make the relation mean less.',
    assessedAt: '2026-09-02',
  },
];

/**
 * Every commodity that names a source crop, classified.
 *
 * Wave 34 reversed `sourceCrop` into an index and treated every edge as an
 * exact mapping. Nine are not: they name a crop CONCEPT covering several
 * species, so a price series reached through one is about the concept. Green
 * coffee is not arabica.
 */
export const CONCORDANCE: readonly ConcordanceClassification[] = [
  {
    commoditySlug: 'green-coffee',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'coffee',
    note: 'Names the coffee genus concept, which covers arabica, robusta and liberica. The series is about traded coffee and cannot be attributed to a species — which is why arabica and robusta reach no market data despite both being published.',
  },
  {
    commoditySlug: 'coffee-cherries',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'coffee',
    note: 'The same concept. Cherries of either species are handled as one commodity.',
  },
  {
    commoditySlug: 'cotton-lint',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'cotton',
    note: 'Names the cotton genus concept covering four species. Upland is the large majority of the lint traded, but the commodity is not defined as upland.',
  },
  {
    commoditySlug: 'cottonseed',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'cotton',
    note: 'The same concept, from the same seed cotton.',
  },
  {
    commoditySlug: 'seed-cotton',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'cotton',
    note: 'The unginned crop, which is the concept rather than a species.',
  },
  {
    commoditySlug: 'bananas',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'banana',
    note: 'Names the banana clone-group concept. Commercial bananas are sterile clones described by genome group, so no species mapping is available and none should be invented.',
  },
  {
    commoditySlug: 'yams',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'yam',
    note: 'Names the yam species complex, which covers several Dioscorea species traded together and not distinguished in the statistics.',
  },
  {
    commoditySlug: 'jute-fibre',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'jute',
    note: 'Names the jute genus concept. Tossa and white jute are grown together and traded as one fibre.',
  },
  {
    commoditySlug: 'triticale-grain',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'triticale',
    note: 'Names the nothogenus concept. Commercial triticale spans several nothospecies and the grain is not separated by them.',
  },
  {
    commoditySlug: 'cattle-hides',
    kind: 'ANIMAL_PRODUCT',
    note: 'From cattle. No crop mapping exists and none is a gap.',
  },

  {
    commoditySlug: 'goat-milk',
    kind: 'ANIMAL_PRODUCT',
    note: 'From goats. No crop mapping exists, and its absence is a property of the commodity rather than a gap in the corpus.',
  },
  {
    commoditySlug: 'hen-eggs',
    kind: 'ANIMAL_PRODUCT',
    note: 'From poultry. No crop mapping exists and none is a gap.',
  },
  {
    commoditySlug: 'raw-cow-milk',
    kind: 'ANIMAL_PRODUCT',
    note: 'From cattle. No crop mapping exists and none is a gap.',
  },
  {
    commoditySlug: 'raw-wool',
    kind: 'ANIMAL_PRODUCT',
    note: 'From sheep. No crop mapping exists and none is a gap.',
  },
  {
    commoditySlug: 'sheep-milk',
    kind: 'ANIMAL_PRODUCT',
    note: 'From sheep. No crop mapping exists and none is a gap.',
  },
];

export const TRADE_MAPPING: TradeMappingAssessment = {
  outcome: 'BOTANICAL_SCOPE_AVAILABLE',
  finding:
    'Wave 34 established that the corpus’s eight border-requirement records are genuinely unkeyed to crops, and that remains true: each is a pointer to an official system that decides requirements per consignment through a query interface, scoped by jurisdiction and by broad subject type. Nothing crop-level can be derived from them. What this wave establishes is different and more useful: a botanical scope does exist in published law. The annexes to EU Regulation 2019/2072 list plants, plant products and other objects by genus and species with their corresponding special requirements, which is a crop-level key in a citable instrument. It is not in the corpus, and no mapping was built from the records that are.',
  examined: [
    'the eight border-requirement records held, and their subjectTypes',
    'whether any record names a crop or commodity slug — none does, verified by the unkeyed check in crops:integration:validate',
    'EU Regulation 2019/2072 and its annexes, which list plants by genus and species',
  ],
  wouldChangeIf:
    'The 2019/2072 annexes are ingested as their own record type with their own source contract. That is an ingestion project with a real risk attached — an annex entry is a legal requirement, and attaching it to the wrong taxon would be worse than having no trade coverage at all.',
  assessedAt: '2026-09-02',
};
