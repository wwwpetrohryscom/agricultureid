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
  TradeFeasibilityStudy,
  TradeMappingAssessment,
} from '@/types/crop-evidence';

export const LAYER_ASSESSMENTS: readonly LayerEvidenceAssessment[] = [
  {
    layer: 'calendars',
    reachesAtAssessment: 103,
    reason: 'SOURCE_EXISTS_NOT_MAPPED',
    finding:
      'Wave 38 recorded this layer as SOURCE_NOT_MACHINE_INGESTIBLE, and that was true of the source it was about: the USDA plain-text release parsed in Wave 8 returns 404 and the surviving PDF is font-encoded. It was never a finding about the layer, and Wave 42 was asked to look for another source rather than to accept it. The FAO Crop Calendar is served as CSV through a parameterised query endpoint under CC-BY 4.0, with periods FAO states are validated by national authorities, and it took the layer from 6 crops to 103 across 57 countries. What remains unmapped is the larger half of the dataset: 104 of its 211 crop names reach nothing in this corpus, and 8 more were refused because the corpus records them as naming more than one crop.',
    wouldRaiseCoverageBy:
      'Publishing crops the FAO dataset already covers — its 104 unmatched names are a ready-made research queue, and most of them are exactly the regional crops Wave 40 was aimed at. Resolving the ambiguous names would need the underlying FAO crop identifiers rather than the English labels, which the dataset carries as cropId and which has not been reconciled with any botanical authority.',
    sourceIds: ['usda-nass', 'fao', 'fao-crop-calendar'],
    assessedAt: '2026-09-03',
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
    reachesAtAssessment: 114,
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
  /* ---- Wave 41: concepts declared, and their commodities classified --------
   * Five commodity series turned out to name a concept the corpus had not yet
   * declared. Declaring the concepts is what surfaced them: until Wave 41 the
   * pages looked like species pages, so a series keyed to them looked exact.
   */
  {
    commoditySlug: 'wheat-grain',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'wheat',
    note: 'Names the wheat concept, which covers bread wheat and the hulled wheats. Durum is the exception: it is reported separately and Wave 41 moved its series off this page onto durum wheat, where the source actually points.',
  },
  {
    commoditySlug: 'millet-grain',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'millet',
    note: 'Names the millet concept, which spans four genera. No source resolves the series to a species, so none of the five published millets carries market data and that absence is correct rather than missing.',
  },
  {
    commoditySlug: 'fresh-blueberries',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'blueberry',
    note: 'Names planted blueberry production across highbush and rabbiteye. Lowbush blueberry is a managed native stand sold frozen and is reported differently, so the series does not reach it.',
  },
  {
    commoditySlug: 'dried-chillies',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'chili-pepper',
    note: 'Names pungent peppers across five Capsicum species and resolves none of them. Sweet pepper is a separate series because the trade divides these by pungency and use, not by taxon.',
  },
  {
    commoditySlug: 'rapeseed',
    kind: 'BROADER_CROP_CONCEPT',
    cropSlug: 'oilseed-rape',
    note: 'Names the rapeseed crop, which is Brassica napus and Brassica rapa subsp. oleifera together. The trade does not separate them and neither does the series.',
  },
  /* ---- Wave 42: the remaining sixty-one mappings, classified ---------------
   * Waves 38 and 41 classified twenty of the seventy-five commodity-to-crop
   * mappings, all of them the awkward ones. Wave 42 classified the rest, which
   * is where the useful finding was: sixteen commodities cover only PART of the
   * crop they are keyed to. "Fresh oranges" is a minority of the orange crop
   * because most of it is juiced; "processing tomatoes" outweigh fresh in most
   * producing countries; ware potatoes exclude seed and processing plantings.
   * Counting those series as crop market coverage overstates it, and until this
   * wave nothing in the corpus said so.
   */
  {
    commoditySlug: 'almonds',
    kind: 'EXACT_CROP',
    cropSlug: 'almond',
    note: 'Almonds is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-apples',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'apple',
    note: 'Covers the fresh-market share of the apple crop. Processing apples — juice, purée, dried — are a large and separately traded part of the same orchards, and this series does not measure them.',
  },
  {
    commoditySlug: 'avocados',
    kind: 'EXACT_CROP',
    cropSlug: 'avocado',
    note: 'Avocados is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'barley-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'barley',
    note: 'Barley Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'black-pepper-corns',
    kind: 'EXACT_CROP',
    cropSlug: 'black-pepper',
    note: 'Black Peppercorns is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-broccoli',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'broccoli',
    note: 'Covers fresh-market broccoli only. Frozen broccoli is a substantial separate trade grown to different specifications, and attributing this series to the crop would overstate what it measures.',
  },
  {
    commoditySlug: 'buckwheat-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'buckwheat',
    note: 'Buckwheat Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'head-cabbage',
    kind: 'EXACT_CROP',
    cropSlug: 'cabbage',
    note: 'Head Cabbage is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'green-cardamom',
    kind: 'EXACT_CROP',
    cropSlug: 'cardamom',
    note: 'Green Cardamom is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-carrots',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'carrot',
    note: 'Covers fresh-market carrots. Processing carrots — dice, juice, baby-cut — are grown from different cultivars on different contracts and are not in this series.',
  },
  {
    commoditySlug: 'cashew-nuts',
    kind: 'EXACT_CROP',
    cropSlug: 'cashew',
    note: 'Cashew Nuts is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'cassava-roots',
    kind: 'EXACT_CROP',
    cropSlug: 'cassava',
    note: 'Cassava Roots is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'chickpeas',
    kind: 'EXACT_CROP',
    cropSlug: 'chickpea',
    note: 'Chickpeas is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'cocoa-beans',
    kind: 'EXACT_CROP',
    cropSlug: 'cocoa',
    note: 'Cocoa Beans is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'dry-beans',
    kind: 'BROADER_THAN_CROP',
    cropSlug: 'common-bean',
    note: 'Dry bean market classes cover Phaseolus beyond Phaseolus vulgaris — lima and other Phaseolus beans are reported inside the same item — so the series is wider than the common bean page it is keyed to.',
  },
  {
    commoditySlug: 'cowpeas',
    kind: 'EXACT_CROP',
    cropSlug: 'cowpea',
    note: 'Cowpeas is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'cucumbers',
    kind: 'EXACT_CROP',
    cropSlug: 'cucumber',
    note: 'Cucumbers is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'dates',
    kind: 'EXACT_CROP',
    cropSlug: 'date-palm',
    note: 'Dates is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'durum-wheat-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'durum-wheat',
    note: 'Durum Wheat Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'flax-fibre',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'flax',
    note: 'Covers fibre flax. Fibre and seed flax are grown as different crop types from the same species, with different plant density, harvest method and cultivars.',
  },
  {
    commoditySlug: 'flaxseed',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'flax',
    note: 'Covers linseed. Seed and fibre flax are different crop types from one species and their areas do not overlap.',
  },
  {
    commoditySlug: 'garlic-bulbs',
    kind: 'EXACT_CROP',
    cropSlug: 'garlic',
    note: 'Garlic Bulbs is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'table-grapes',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'grape',
    note: 'Covers grapes grown for fresh consumption. Wine and drying grapes are the larger part of the crop and are separately traded.',
  },
  {
    commoditySlug: 'wine-grapes',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'grape',
    note: 'Covers grapes grown for wine. Table and drying grapes are separate uses of the same crop with different cultivars and different harvest criteria.',
  },
  {
    commoditySlug: 'groundnuts',
    kind: 'EXACT_CROP',
    cropSlug: 'groundnut',
    note: 'Groundnuts is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'hazelnuts',
    kind: 'EXACT_CROP',
    cropSlug: 'hazelnut',
    note: 'Hazelnuts is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'hemp-fibre',
    kind: 'EXACT_CROP',
    cropSlug: 'hemp',
    note: 'Hemp Fibre is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-lemons',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'lemon',
    note: 'Covers fresh lemons. A large share of the world crop goes to juice and oil processing, which this series does not measure.',
  },
  {
    commoditySlug: 'lentils',
    kind: 'EXACT_CROP',
    cropSlug: 'lentil',
    note: 'Lentils is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-lettuce',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'lettuce',
    note: 'Covers fresh-market lettuce, which is nearly all of the crop — but the qualifier is in the commodity, so the scope is narrower than the crop by construction rather than by volume.',
  },
  {
    commoditySlug: 'maize-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'maize',
    note: 'Maize Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-mangoes',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'mango',
    note: 'Covers fresh mangoes. Pulp, purée and dried mango are separately traded products of the same orchards and account for a large share of the crop in the main producing countries, so this series measures the fresh trade rather than mango production.',
  },
  {
    commoditySlug: 'oat-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'oats',
    note: 'Oat Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'dry-bulb-onions',
    kind: 'EXACT_CROP',
    cropSlug: 'onion',
    note: 'Dry Bulb Onions is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-oranges',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'orange',
    note: 'Covers fresh oranges. Most of the world orange crop is processed for juice, so this series measures a minority of the crop and must not be read as orange production.',
  },
  {
    commoditySlug: 'dry-peas',
    kind: 'EXACT_CROP',
    cropSlug: 'pea',
    note: 'Dry Peas is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'pigeon-peas',
    kind: 'EXACT_CROP',
    cropSlug: 'pigeon-pea',
    note: 'Pigeon Peas is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-pineapples',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'pineapple',
    note: 'Covers fresh pineapples. Canned and juice pineapple are grown to different cultivar and maturity specifications and are not in this series.',
  },
  {
    commoditySlug: 'pistachios',
    kind: 'EXACT_CROP',
    cropSlug: 'pistachio',
    note: 'Pistachios is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'ware-potatoes',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'potato',
    note: 'Covers table potatoes. Seed potatoes and processing potatoes are separate trades from separate plantings and are not measured by this series.',
  },
  {
    commoditySlug: 'brown-rice',
    kind: 'BROADER_THAN_CROP',
    cropSlug: 'rice',
    note: 'A processing state of the same aggregate as paddy: it covers the rice crop rather than the species this page is keyed to, and African rice is inside it where reported.',
  },
  {
    commoditySlug: 'milled-rice',
    kind: 'BROADER_THAN_CROP',
    cropSlug: 'rice',
    note: 'The same aggregate again, one processing step further on. Milled rice is derived from paddy and inherits its species scope.',
  },
  {
    commoditySlug: 'rice-paddy',
    kind: 'BROADER_THAN_CROP',
    cropSlug: 'rice',
    note: 'Rice statistics aggregate Oryza sativa with Oryza glaberrima where the latter is grown, and this corpus publishes African rice as a separate crop. The series is therefore wider than the crop it is keyed to.',
  },
  {
    commoditySlug: 'rye-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'rye',
    note: 'Rye Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'safflower-seed',
    kind: 'EXACT_CROP',
    cropSlug: 'safflower',
    note: 'Safflower Seed is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sesame-seed',
    kind: 'EXACT_CROP',
    cropSlug: 'sesame',
    note: 'Sesame Seed is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sorghum-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'sorghum',
    note: 'Sorghum Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'soybeans',
    kind: 'EXACT_CROP',
    cropSlug: 'soybean',
    note: 'Soybeans is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-strawberries',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'strawberry',
    note: 'Covers fresh strawberries. Frozen and processing strawberries are a separate trade from separate plantings.',
  },
  {
    commoditySlug: 'sugar-beet',
    kind: 'EXACT_CROP',
    cropSlug: 'sugar-beet',
    note: 'Sugar Beet is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sugarcane',
    kind: 'EXACT_CROP',
    cropSlug: 'sugarcane',
    note: 'Sugarcane is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sunflower-seed',
    kind: 'EXACT_CROP',
    cropSlug: 'sunflower',
    note: 'Sunflower Seed is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sweet-peppers',
    kind: 'EXACT_CROP',
    cropSlug: 'sweet-pepper',
    note: 'Sweet Peppers is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'sweet-potatoes',
    kind: 'EXACT_CROP',
    cropSlug: 'sweet-potato',
    note: 'Sweet Potatoes is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-sweetcorn',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'sweetcorn',
    note: 'Covers fresh sweetcorn. Frozen and canned sweetcorn is the larger part of the crop in most producing countries and is not measured here.',
  },
  {
    commoditySlug: 'tea-leaf',
    kind: 'EXACT_CROP',
    cropSlug: 'tea',
    note: 'Tea Leaf is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'teff-grain',
    kind: 'EXACT_CROP',
    cropSlug: 'teff',
    note: 'Teff Grain is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'dried-tobacco-leaf',
    kind: 'EXACT_CROP',
    cropSlug: 'tobacco',
    note: 'Dried Tobacco Leaf is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'fresh-tomatoes',
    kind: 'NARROWER_THAN_CROP',
    cropSlug: 'tomato',
    note: 'Covers fresh-market tomatoes. Processing tomatoes are the majority of world tomato production and are grown as a separate crop with separate cultivars, contracts and harvest machinery.',
  },
  {
    commoditySlug: 'vanilla-beans',
    kind: 'EXACT_CROP',
    cropSlug: 'vanilla',
    note: 'Vanilla Beans is the traded product of this crop and of no other; the series and the page have the same crop scope.',
  },
  {
    commoditySlug: 'walnuts',
    kind: 'EXACT_CROP',
    cropSlug: 'walnut',
    note: 'Walnuts is the traded product of this crop and of no other; the series and the page have the same crop scope.',
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

/**
 * Wave 42 — can EU Regulation 2019/2072 safely become crop-level trade data?
 *
 * Wave 38 established that a botanical scope exists in published law and that
 * the corpus's eight border-requirement records are pointers to query systems
 * with nothing crop-level in them. Wave 42 was asked the next question, and
 * asked it before ingesting anything, because an annex entry is a legal
 * requirement and attaching one to the wrong taxon is worse than a gap.
 *
 * The answer is REQUIRES_DEDICATED_WAVE, and the most useful part of it is the
 * trap the study walked into: the copy of this regulation that a plain HTTP
 * client CAN read is not this regulation. EUR-Lex returns an empty 202 to a
 * non-browser request, while legislation.gov.uk serves a complete, well-formed,
 * machine-readable copy — of the retained Great Britain version, substituted at
 * the end of the transition period and amended since by UK statutory
 * instruments. Its Annex 7 states its own scope: introduction into Great
 * Britain. An ingestion that went for the source that answered would have put
 * British requirements on European crops and produced clean, well-cited,
 * confidently wrong data.
 */
export const TRADE_FEASIBILITY: TradeFeasibilityStudy = {
  instrument:
    'Commission Implementing Regulation (EU) 2019/2072, annexes listing plants, plant products and other objects and their special requirements',
  outcome: 'REQUIRES_DEDICATED_WAVE',
  findings: [
    {
      dimension: 'legal-instrument-structure',
      finding:
        'The requirements sit in annexes to an implementing regulation, which itself implements Regulation (EU) 2016/2031 and repeals an earlier one. Annex VII carries the third-country introduction requirements, and an entry pairs a described commodity with the requirements that attach to it rather than naming a crop.',
      evidence:
        'Title and annex structure read from the consolidated text; Annex VII heading reads "List of plants, plant products and other objects ... and the corresponding special requirements for their introduction".',
      blocking: false,
    },
    {
      dimension: 'botanical-scope',
      finding:
        "A botanical scope genuinely exists: entries name genera and species, which is a crop-level key in a citable instrument. That was Wave 38's finding and it survives inspection.",
      evidence:
        'Annex VII entries name plants by genus and species alongside their requirements.',
      blocking: false,
    },
    {
      dimension: 'plant-vs-plant-product-distinction',
      finding:
        'One taxon appears in several entries with different requirements according to what is moving — plants for planting, fruits, wood, seeds — and the corpus has no field that carries that distinction. Collapsing the entries onto the crop would attach a requirement for planting material to a page about a fruit.',
      evidence:
        'Annex VII entries are keyed to "plants, plant products and other objects", not to plants; the crop layer has no commodity-form dimension to hold the difference.',
      blocking: true,
    },
    {
      dimension: 'origin-destination-conditions',
      finding:
        'Requirements are conditional on origin, and frequently on a specific third country or a pest-free area within one. A crop-level record with no origin dimension would state a requirement that applies to some consignments and not others.',
      evidence:
        'Annex VII columns pair a commodity description with a country or group of countries of origin.',
      blocking: true,
    },
    {
      dimension: 'amendments',
      finding:
        'The instrument is amended several times a year. Four separate consolidated versions are published for 2025 alone, and a further consolidation is dated December 2025.',
      evidence:
        'EUR-Lex consolidated versions dated 2025-01-26, 2025-02-27 and 2025-04-26 were located, alongside a consolidated version dated 2025-12-01.',
      blocking: false,
    },
    {
      dimension: 'currentness',
      finding:
        'Any ingested snapshot goes stale within months, and there is no established versioned feed the corpus could follow. Freshness would have to be a first-class part of the contract rather than an annual re-check.',
      evidence:
        "The amendment cadence above, against the corpus's existing source-freshness model, which checks sources rather than legal versions.",
      blocking: true,
    },
    {
      dimension: 'supersession',
      finding:
        'The regulation repeals Commission Regulation (EC) No 690/2008 and amends Implementing Regulation (EU) 2018/2019, so a naive search for plant health requirements can land on an instrument that no longer applies.',
      evidence: 'Stated in the title of the regulation itself.',
      blocking: false,
    },
    {
      dimension: 'machine-readable-extraction-safety',
      finding:
        'EUR-Lex does not serve the consolidated text to a plain HTTP client: the request returns 202 with an empty body, which is the same behaviour this corpus recorded for EUR-Lex in an earlier wave. The copy that does respond — legislation.gov.uk, which serves a complete and well-formed 1.1 MB document — is the RETAINED GREAT BRITAIN version, substituted at the end of the transition period and amended by UK statutory instruments since. It is a different legal instrument with a different territorial scope, and it is the one an unattended ingestion would have taken.',
      evidence:
        'GET of the EUR-Lex consolidated HTML returned HTTP 202 with 0 bytes. GET of the legislation.gov.uk copy of Annex 7 returned HTTP 200 with 1,096,910 bytes whose first heading reads "List of plants, plant products and other objects ... for their introduction into Great Britain", with textual amendments by S.I. 2020/1527.',
      blocking: true,
    },
  ],
  prerequisites: [
    'A retrieval path that reaches EUR-Lex itself rather than a national mirror, and a check that fails closed when the document returned names a territorial scope other than the Union.',
    'A commodity-form dimension on the record, so that a requirement for plants for planting is not shown on a page about fruit.',
    'An origin dimension, so that a requirement conditional on a third country is not stated unconditionally.',
    'A version pin naming the consolidated version ingested, with a freshness rule that treats a newer consolidation as staleness rather than as an improvement.',
  ],
  sourceIds: ['law-eu-2016-2031', 'gov-ec-plant-health', 'eppo'],
  assessedAt: '2026-09-03',
};
