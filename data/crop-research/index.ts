/**
 * Every crop AgricultureID held as a taxon without an article, researched.
 *
 * 189 candidates, each with an outcome. See ./README.md for the evidence
 * protocol and why the evidence basis is recorded per crop rather than claimed
 * uniformly.
 *
 * The distribution is not a target. Five crops were promoted because five had
 * research behind them that supported a substantive article; a large number are
 * READY_BUT_DEFER_EDITORIAL, which says the evidence exists and the writing has
 * not been done, and is deliberately not the same as NEEDS_MORE_EVIDENCE.
 *
 * Twenty-three records are AGRICULTURAL_CONCEPT_COMPLEX. Those are constituents
 * of the multi-taxon concepts Wave 33 modelled, and for every one of them the
 * blocker is the same: the concept page currently carries the crop, and
 * promoting one member would leave that page describing the remainder. That is
 * a scope decision, not an evidence gap, and filing it as an evidence gap would
 * misdescribe what is actually in the way.
 */
import type { CropResearchRecord } from '@/types/crop-research';

export const CROP_RESEARCH: readonly CropResearchRecord[] = [
  {
    slug: 'abaca',
    cohort: 'fibre-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'regionally-staple'],
    finding:
      'Manila hemp; a Musa relative grown for leaf-sheath fibre, dominated by the Philippines, with a specialty pulp market. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'adzuki-bean',
    cohort: 'pulses',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'A major East Asian pulse grown principally for confectionery paste rather than as a savoury pulse, which is an unusual end use for a legume. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'aerial-yam',
    cohort: 'roots-and-tubers',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the yam species complex. Wave 35 established that the authorities place white yam under yellow yam and that the corpus models the group rank-awarely; promoting one member while its own parent species stays inside the concept is the incoherence Wave 32 refused. The group would have to move together.',
    wouldChangeIf:
      'The yam concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'african-rice',
    cohort: 'cereals',
    outcome: 'PROMOTE_FULL_PROFILE',
    significance: [
      'regionally-staple',
      'subsistence-important',
      'nutritionally-distinct',
    ],
    finding:
      'Sources confirmed an independent domestication from Oryza barthii in the inner Niger delta, distinct from Asian rice; tolerance of drought, soil acidity and iron and aluminium toxicity; weed competitiveness; and that it is a parent of the NERICA interspecific cultivars developed from 1992. The corpus published rice as Oryza sativa only, so the second domestication was invisible. Written.',
    evidenceBasis: [
      'CORPUS_VERIFIED_IDENTITY',
      'EXECUTABLE_COVERAGE',
      'SOURCE_CONSULTED',
    ],
    sourceIds: ['cgiar', 'fao', 'irri', 'usda-plants', 'cabi'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'aji-pepper',
    cohort: 'vegetables',
    outcome: 'DUPLICATES_EXISTING_CONCEPT',
    significance: ['regionally-staple'],
    finding:
      'A Capsicum baccatum cultivar group, the characteristic pepper of Peruvian and Bolivian cooking. The corpus models sweet and chilli peppers as Capsicum annuum groups and the same modelling question applies here, so this is answered by that decision rather than separately.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'andean-lupin',
    cohort: 'pulses',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'A Capsicum baccatum cultivar group, the characteristic pepper of Peruvian and Bolivian cooking. The corpus models sweet and chilli peppers as Capsicum annuum groups and the same modelling question applies here, so this is answered by that decision rather than separately.',
    wouldChangeIf:
      'The lupin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'anise',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'An Apiaceae spice grown for anethole-bearing seed, chiefly around the Mediterranean.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'aronia',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'nutritionally-distinct'],
    finding:
      'Chokeberry, grown for polyphenol-rich fruit destined almost entirely for processing.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'arrowroot',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['industrially-used', 'minor-or-niche'],
    finding:
      'Grown for a fine starch with a specific culinary and pharmaceutical use. Production is small and geographically concentrated.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'asian-pear',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'regionally-staple'],
    finding:
      'A distinct Pyrus species eaten crisp at harvest rather than ripened after picking, which changes the entire post-harvest chain. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'barbadense-cotton',
    cohort: 'fibre-crops',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the cotton genus concept. Upland cotton was promoted in Wave 32 because it is the large majority of production; the remaining three are minority species whose pages would compete with the concept page for the same reader.',
    wouldChangeIf:
      'The cotton concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'barnyard-millet',
    cohort: 'cereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A minor millet of India and East Asia. The identity entry answers what a reader is likely to want, and published crop-specific agronomy in accessible sources is thin.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'bay-laurel',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'An evergreen tree grown for leaf, chiefly in Turkey and around the Mediterranean.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'berseem-clover',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'agronomic-role'],
    finding:
      'The principal winter forage legume of the Nile valley and South Asian irrigated systems, cut repeatedly through the season. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'bilberry',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'Largely wild-harvested rather than cultivated; the distinction from cultivated blueberry is the useful fact.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'birdsfoot-trefoil',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['nutritionally-distinct', 'agronomic-role'],
    finding:
      'The other non-bloating tannin legume, tolerant of wet and acid soils where clovers fail. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'bitter-gourd',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'A major Asian cucurbit vegetable with a distinct trellis system and a documented hypoglycaemic pharmacology that a page would have to handle carefully. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'black-cumin',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'Nigella sativa, grown for seed across South Asia and the Middle East; not related to cumin, which is the useful clarification.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'black-mulberry',
    cohort: 'fruit',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the mulberry genus concept. The two species have genuinely different end uses — leaf for silkworms, fruit for eating — which is the strongest case for splitting in the corpus, and it is a concept decision rather than an evidence one.',
    wouldChangeIf:
      'The mulberry concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'black-oat',
    cohort: 'cereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'Grown chiefly as a cover crop and forage rather than for grain. Its agronomic role is real but is largely covered by the cover-crop material the corpus already holds.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'black-raspberry',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'nutritionally-distinct'],
    finding:
      'A distinct Rubus species from red raspberry, grown mainly in the Pacific Northwest for processing and pigment.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'black-walnut',
    cohort: 'nuts',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'industrially-used'],
    finding:
      'Grown for timber as much as for nuts in North America; juglone production affects what can be grown near it.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'bottle-gourd',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important'],
    finding:
      'Grown both as a vegetable and, dried, as a container — a crop with a non-food use older than its food use.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'brazil-nut',
    cohort: 'nuts',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'subsistence-important'],
    finding:
      'Almost entirely wild-harvested from standing forest rather than planted, dependent on specific large-bodied pollinators and on an agouti to open the fruit — a crop that cannot be intensified without ceasing to be itself. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'brussels-sprouts',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded'],
    finding:
      'A Brassica oleracea cultivar group harvested as axillary buds, with a mechanised single-harvest system that distinguishes it from the other brassicas. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'butternut-squash',
    cohort: 'vegetables',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the pumpkin genus concept. The species differ in rind, keeping quality and stem form, which the concept page already says; a species page would repeat it at lower level.',
    wouldChangeIf:
      'The pumpkin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'camelina',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['agronomic-role', 'industrially-used'],
    finding:
      'A short-season Brassicaceae oilseed used as a cover crop, a relay crop and a feedstock for aviation fuel. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'cape-gooseberry',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'globally-traded'],
    finding:
      'A Physalis grown for export from the Andes; the husk and its handling are the distinguishing feature.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'caper',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'minor-or-niche'],
    finding:
      'Harvested as unopened flower buds from a drought-tolerant shrub, almost entirely by hand.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'carambola',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'Starfruit; a minor tropical tree fruit with an oxalate content that matters for people with renal impairment.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'caraway',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'A biennial Apiaceae spice grown mainly in northern and eastern Europe.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'cassia-cinnamon',
    cohort: 'spices-and-herbs',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded'],
    finding:
      'Traded as cinnamon and distinct from Cinnamomum verum, which the corpus publishes as cinnamon. The two differ materially in coumarin content, so conflating them has a food-safety dimension. The corpus needs to decide what its cinnamon page covers before this is written.',
    wouldChangeIf:
      'The cinnamon page declares whether it covers Cinnamomum verum alone or the traded spice. The two species differ materially in coumarin content, so writing this one before that is settled risks two pages disagreeing about what cinnamon is.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'castor-bean',
    cohort: 'oilseeds',
    outcome: 'PROMOTE_FULL_PROFILE',
    significance: ['industrially-used', 'globally-traded'],
    finding:
      'Sources confirmed that castor is the only commercial source of ricinoleic acid, which makes up roughly nine tenths of the oil’s fatty acids and feeds over a hundred industrial processes; and that ricin, a ribosome-inactivating protein, stays in the meal rather than the oil, which is what governs handling and why untreated meal cannot be fed. An oilseed that does not compete with other oilseeds. Written, with the hazard scoped rather than instructed.',
    evidenceBasis: [
      'CORPUS_VERIFIED_IDENTITY',
      'EXECUTABLE_COVERAGE',
      'SOURCE_CONSULTED',
    ],
    sourceIds: ['fao', 'faostat', 'usda-plants', 'cabi', 'icar'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'celeriac',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'A cultivar group of celery grown for the swollen hypocotyl; the corpus publishes celery.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'chayote',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'A perennial cucurbit with a single-seeded fruit that germinates in situ, and an edible root — an unusual crop structure. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'cherimoya',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'An Annona of subtropical highlands requiring hand pollination in most commercial settings.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'chia',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'nutritionally-distinct'],
    finding:
      'A Salvia grown for seed with high alpha-linolenic acid and a mucilage layer that governs both its food use and its handling. Commercial production expanded rapidly and recently. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'chinese-cabbage',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'regionally-staple'],
    finding:
      'A Brassica rapa group of major importance in East Asia, and the raw material of kimchi. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'chives',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A perennial Allium grown for leaf, mostly at garden and market-garden scale.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'citron',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'One of the three ancestral citrus species, grown for peel and for ceremonial use; agronomically minor but taxonomically central.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'cocksfoot',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['agronomic-role'],
    finding:
      'Orchardgrass; more drought- and shade-tolerant than ryegrass and a standard component of mixed swards. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'common-vetch',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'Grown for forage and green manure; largely covered by the cover-crop material the corpus holds.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'corn-salad',
    cohort: 'vegetables',
    outcome: 'TAXONOMY_COMPLEX',
    significance: ['minor-or-niche'],
    finding:
      'Lamb’s lettuce. Only one authority resolves the name, which now sits in Valeriana rather than Valerianella. A page would rest on a single source.',
    wouldChangeIf: 'World Flora Online resolves the name.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'crested-wheatgrass',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A drought-tolerant grass used for rangeland seeding; also a persistent introduced species where it has naturalised.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'crimson-clover',
    cohort: 'cover-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A winter annual clover used as a cover crop and short-term forage.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'cushaw-squash',
    cohort: 'vegetables',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the pumpkin genus concept. The species differ in rind, keeping quality and stem form, which the concept page already says; a species page would repeat it at lower level.',
    wouldChangeIf:
      'The pumpkin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'daikon',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'agronomic-role'],
    finding:
      'A major East Asian vegetable and separately a widely used biodrilling cover crop, which the corpus references but does not describe. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'durian',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'regionally-staple'],
    finding:
      'A major Southeast Asian tree fruit with a large and growing export trade, and handling constraints that follow from the fruit itself. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'edible-canna',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'Grown for starch in the Andes and Southeast Asia; the starch granules are the largest of any commercial crop.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'einkorn',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['nutritionally-distinct', 'minor-or-niche'],
    finding:
      'The oldest domesticated wheat, diploid, with a small but persistent specialty market. Evidence is sufficient for an article covering ploidy, hulled grain and its niche position.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'elderberry',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'industrially-used'],
    finding:
      'Grown for processing into juice and extracts; raw fruit and other plant parts contain cyanogenic glycosides.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'emmer',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'The other principal hulled ancient wheat, still grown in Italy, Ethiopia and parts of the Near East. Evidence supports an article; the identity rests on a single authority, which the page would have to state.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'endive',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A Cichorium leafy vegetable; the corpus publishes chicory, the closely allied crop.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'ethiopian-mustard',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'Both authorities have moved this taxon into Mutarda after the Brassiceae recircumscription, which the agricultural literature and seed trade have not followed. Publishing under either name would put the page at odds with one audience.',
    wouldChangeIf:
      'The Brassiceae recircumscription that moved this taxon into Mutarda is adopted or rejected by the agricultural literature and seed trade, which currently use the older name the page would have to reconcile with.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'fenugreek',
    cohort: 'spices-and-herbs',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'nutritionally-distinct'],
    finding:
      'Grown as spice, as a leafy vegetable and as a forage legume, with galactomannan seed endosperm like guar and a documented pharmacology. Three uses in one crop. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'fig-leaf-gourd',
    cohort: 'vegetables',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the pumpkin genus concept. The species differ in rind, keeping quality and stem form, which the concept page already says; a species page would repeat it at lower level.',
    wouldChangeIf:
      'The pumpkin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'finger-lime',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'globally-traded'],
    finding:
      'An Australian citrus grown for its vesicles as a specialty product.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'forage-peanut',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A perennial groundnut relative used as a tropical pasture legume and cover.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'fox-grape',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'Vitis labrusca; the North American grape species behind Concord, distinct from the Vitis vinifera the corpus publishes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'foxtail-millet',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'A major small millet in China and India with the shortest season of the group, which is what recommends it for late sowing after a failed crop. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'garden-cress',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding: 'A fast-growing salad crop, also grown for seed in South Asia.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'garlic-chives',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'minor-or-niche'],
    finding:
      'A flat-leaved perennial Allium used across East Asia for leaf and flower stalk.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'gboma-eggplant',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important'],
    finding:
      'A West African Solanum grown for both leaf and fruit, distinct from the eggplant the corpus publishes. Locally important across the humid tropics of West and Central Africa; the identity entry carries what a reader needs to tell it apart.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'giant-reed',
    cohort: 'industrial-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['industrially-used'],
    finding:
      'A West African Solanum grown for both leaf and fruit, distinct from the eggplant the corpus publishes. Locally important across the humid tropics of West and Central Africa; the identity entry carries what a reader needs to tell it apart.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'golden-kiwifruit',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'A distinct Actinidia taxon from green kiwifruit, commercially significant and largely managed under proprietary cultivar programmes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'gooseberry',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A Ribes grown in northern Europe; its significance in North America is largely regulatory, as a white pine blister rust host.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'greenleaf-desmodium',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A tropical forage legume, best known as the intercrop component of push-pull.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'guar',
    cohort: 'pulses',
    outcome: 'PROMOTE_FULL_PROFILE',
    significance: ['industrially-used', 'regionally-staple', 'agronomic-role'],
    finding:
      'A rainfed arid-zone legume whose seed endosperm yields a galactomannan gum. Sources confirmed India accounts for the great majority of production, concentrated in semi-arid Rajasthan; that the endosperm is about half the seed; and that demand from hydraulic fracturing made guar gum one of India’s largest agricultural exports to the United States. A smallholder subsistence legume priced by drilling activity is a story no other crop in the corpus tells. Written.',
    evidenceBasis: [
      'CORPUS_VERIFIED_IDENTITY',
      'EXECUTABLE_COVERAGE',
      'SOURCE_CONSULTED',
    ],
    sourceIds: ['fao', 'icar', 'usda-ars', 'cabi', 'usda-plants'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'guinea-grass',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding: 'A tall tropical bunch grass used for cut-and-carry and grazing.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'habanero-pepper',
    cohort: 'vegetables',
    outcome: 'DUPLICATES_EXISTING_CONCEPT',
    significance: ['globally-traded'],
    finding:
      'A Capsicum chinense cultivar group. The corpus publishes chili pepper and sweet pepper as Capsicum annuum groups; this is the same modelling question and is answered the same way.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'hairy-vetch',
    cohort: 'cover-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A widely used winter-annual legume cover crop, valued for nitrogen contribution and mulch.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'hardy-kiwi',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A cold-hardy Actinidia with small, smooth-skinned fruit eaten whole.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'hausa-potato',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A West African tuber of local importance; accessible agronomic literature is limited.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'hog-plum',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A Spondias tree fruit used across the tropics of the Americas, West Africa and Asia, largely from semi-wild and dooryard trees rather than orchards, and sold into local markets rather than traded.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'hops',
    cohort: 'beverage-crops',
    outcome: 'PROMOTE_FULL_PROFILE',
    significance: ['globally-traded', 'industrially-used'],
    finding:
      'A Spondias tree fruit used across the tropics of the Americas, West Africa and Asia, largely from semi-wild and dooryard trees rather than orchards, and sold into local markets rather than traded.',
    evidenceBasis: [
      'CORPUS_VERIFIED_IDENTITY',
      'EXECUTABLE_COVERAGE',
      'SOURCE_CONSULTED',
    ],
    sourceIds: ['fao', 'faostat', 'usda-plants', 'cabi', 'cornell-cals'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'horse-gram',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important'],
    finding:
      'A hardy Indian pulse of dry land. Documented, but crop-specific agronomy in accessible sources is largely generic to dryland pulses.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'horseradish',
    cohort: 'spices-and-herbs',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'Propagated vegetatively from root sets; pungency develops only when tissue is damaged, which governs processing.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'italian-ryegrass',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['agronomic-role'],
    finding:
      'Short-lived, fast-establishing and used as a catch crop and short-term ley where perennial ryegrass would be too slow. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jack-bean',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'agronomic-role'],
    finding:
      'Grown as a green manure and famine food; contains concanavalin A and requires processing before consumption.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'japanese-plum',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded'],
    finding:
      'Most commercial "plum" production worldwide is this species rather than the European plum the corpus publishes, and the existing plum page does not say which it covers. That is a scope question for the concept layer before it is a writing question.',
    wouldChangeIf:
      'The plum page declares whether it covers Prunus domestica alone or the plum crop as a whole. Until it does, a Japanese plum page would sit beside a page that may or may not already claim its subject.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jatropha',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['industrially-used'],
    finding:
      'A biodiesel feedstock whose commercial history — large plantings promoted on projections that did not materialise — is itself the most useful thing an encyclopedia can record about it. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jerusalem-artichoke',
    cohort: 'roots-and-tubers',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['agronomic-role', 'industrially-used'],
    finding:
      'A Helianthus grown for inulin-storing tubers rather than starch, which makes it both a distinct food crop and an industrial feedstock. Also a persistent volunteer, which is a real planting consideration. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jicama',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'Grown for a crisp edible root; the seeds and foliage contain rotenone and are not edible, which is the fact a reader most needs and the identity entry can carry.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jobs-tears',
    cohort: 'cereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche', 'nutritionally-distinct'],
    finding:
      'Grown at small scale for grain and widely as an ornamental. The agricultural literature is thin relative to the ornamental literature.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jojoba',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['industrially-used', 'minor-or-niche'],
    finding:
      'Produces a liquid wax ester rather than a triglyceride oil, which is why it replaced sperm whale oil in industrial use. Chemically distinctive; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'jute-mallow',
    cohort: 'vegetables',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'The same taxon the corpus holds as a jute fibre constituent, grown separately as a major African leafy vegetable. One identity carrying two unrelated crops is a concept problem before it is a writing one.',
    wouldChangeIf:
      'The corpus models a taxon that is two crops, or the jute concept is extended to say so.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kaffir-lime',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'minor-or-niche'],
    finding:
      'Grown chiefly for leaf rather than fruit, which is unusual among citrus.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kapok',
    cohort: 'fibre-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['industrially-used'],
    finding:
      'A tree crop yielding buoyant hollow seed floss; largely displaced by synthetics.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kenaf',
    cohort: 'fibre-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['industrially-used', 'agronomic-role'],
    finding:
      'A fast-growing bast fibre crop investigated repeatedly as a pulp substitute.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kentucky-bluegrass',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'Widely grown, but chiefly as turf rather than as a forage crop, which sits outside what this corpus publishes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kodo-millet',
    cohort: 'cereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'An Indian minor millet whose distinctive issue — ergot-like poisoning of weathered grain — is real but not well enough documented in accessible sources to carry a page responsibly.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kola-nut',
    cohort: 'beverage-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'A West African tree crop of considerable cultural and trade importance, largely from smallholder and semi-wild stands.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'kumquat',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A small citrus eaten whole with the peel; both authorities place it in Citrus after Fortunella was sunk.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'lesser-yam',
    cohort: 'roots-and-tubers',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the yam species complex. Wave 35 established that the authorities place white yam under yellow yam and that the corpus models the group rank-awarely; promoting one member while its own parent species stays inside the concept is the incoherence Wave 32 refused. The group would have to move together.',
    wouldChangeIf:
      'The yam concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'levant-cotton',
    cohort: 'fibre-crops',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the cotton genus concept. Upland cotton was promoted in Wave 32 because it is the large majority of production; the remaining three are minority species whose pages would compete with the concept page for the same reader.',
    wouldChangeIf:
      'The cotton concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'liberica-coffee',
    cohort: 'beverage-crops',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the coffee genus concept. Arabica and robusta were promoted in Wave 32 because they carry most of the trade; liberica is a small third species and the published record on it is thin.',
    wouldChangeIf:
      'The coffee concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'lima-bean',
    cohort: 'pulses',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'globally-traded'],
    finding:
      'A distinct Phaseolus species with large-seeded and small-seeded types, cyanogenic glycoside content in some landraces, and real commercial production. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'longan',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'Closely allied to lychee, which the corpus publishes; the agronomy is largely shared.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'love-lies-bleeding',
    cohort: 'pseudocereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A grain amaranth grown in the Andes and Himalaya, also widely ornamental.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'lowbush-blueberry',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'agronomic-role'],
    finding:
      'Managed wild stands rather than planted orchards — a genuinely different production model from highbush blueberry, which the corpus publishes. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'malabar-spinach',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A tropical climbing leafy vegetable grown across South and Southeast Asia and West Africa. It is not related to spinach and behaves nothing like it: a perennial vine cropped repeatedly for leaf in hot, wet conditions where true spinach bolts.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'malay-apple',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A tropical climbing leafy vegetable grown across South and Southeast Asia and West Africa. It is not related to spinach and behaves nothing like it: it is a perennial vine cropped repeatedly for leaf in hot, wet conditions where true spinach bolts.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'mamey-sapote',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding: 'A Central American fruit tree of local commercial importance.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'mandarin',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded'],
    finding:
      'The largest citrus category by traded volume after orange, and the corpus publishes orange, lemon, lime and grapefruit but not this. Complicated by both authorities resolving mandarin into the Citrus x aurantium complex, which a page would need to lead with. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'mangosteen',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A tropical fruit with a long juvenile period and apomictic seed; production is concentrated in Southeast Asia.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'mashua',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'The third Andean tuber of that complex, notable for glucosinolate content and pest resistance.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'meadow-fescue',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A cool-season grass largely displaced by tall fescue and ryegrass in intensive systems.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'medlar',
    cohort: 'fruit',
    outcome: 'LOW_EDITORIAL_PRIORITY',
    significance: ['minor-or-niche'],
    finding:
      'A historic European fruit requiring bletting before it is edible. Real but very marginal commercially; a page would serve curiosity rather than agriculture.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'miscanthus',
    cohort: 'industrial-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['industrially-used'],
    finding:
      'The commercial crop is the sterile triploid hybrid Miscanthus x giganteus, which is why it is planted from rhizome rather than seed; the corpus holds the hybrid taxon but the crop concept spans parents and hybrid.',
    wouldChangeIf:
      'A concept scope is declared for Miscanthus, as Wave 33 did for the other crops whose commercial material is a hybrid rather than the species the identity names.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'moth-bean',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important'],
    finding:
      'One of the most drought-tolerant pulses grown, in the same arid Indian systems as guar.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'napier-grass',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'agronomic-role'],
    finding:
      'The dominant cut-and-carry forage of smallholder dairying in East Africa, and the basis of the push-pull system. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'narrow-leafed-lupin',
    cohort: 'pulses',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the lupin genus concept. The four cultivated species differ in alkaloid content and debittering requirement, which is real article material, but the concept page currently carries the crop and splitting one species out would leave it describing three.',
    wouldChangeIf:
      'The lupin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'niger-seed',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'An Ethiopian and Indian oilseed, largely smallholder-grown, and a major bird-feed export. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'oca',
    cohort: 'roots-and-tubers',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'A major Andean tuber crop, second to potato in parts of the highlands, with photoperiod-sensitive tuberisation that has limited its spread outside the Andes. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'pak-choi',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'A non-heading Brassica rapa group grown as a fast leafy vegetable. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'parsnip',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'A temperate root vegetable whose flavour depends on frost exposure; foliage causes phytophotodermatitis, which is the safety-relevant fact.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'perilla',
    cohort: 'oilseeds',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'Grown in Korea and Japan for both leaf and seed oil, with very high alpha-linolenic content. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'phacelia',
    cohort: 'cover-crops',
    outcome: 'TAXONOMY_COMPLEX',
    significance: ['agronomic-role'],
    finding:
      'The authorities differ on the genus. The corpus publishes the name under which it is universally sold as a cover crop, and a page would need to lead with that.',
    wouldChangeIf: 'The authorities converge on a generic placement.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'pomelo',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'The largest citrus fruit and one of the parents of grapefruit and sweet orange, so it sits at the centre of citrus ancestry as well as being a crop.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'prince-feather',
    cohort: 'pseudocereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A grain amaranth of the Andes and Asia; the corpus publishes amaranth.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'proso-millet',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'agronomic-role'],
    finding:
      'The shortest-season cereal in common cultivation and a genuine catch crop in the North American plains as well as a staple in Asia. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'purslane',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['nutritionally-distinct', 'minor-or-niche'],
    finding:
      'Grown as a leafy vegetable and simultaneously a widespread agricultural weed — both facts are true of the same species.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'quince',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['minor-or-niche', 'industrially-used'],
    finding:
      'Grown for processing because the fruit is astringent raw, and separately important as the dwarfing rootstock for pear. Two distinct roles in one taxon.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rabbiteye-blueberry',
    cohort: 'fruit',
    outcome: 'TAXONOMY_COMPLEX',
    significance: ['globally-traded'],
    finding:
      'The authorities disagree: one sinks Vaccinium virgatum into V. corymbosum, the other keeps it. The crop differs from highbush in chilling requirement and heat tolerance, so the disagreement is exactly the thing a page would be about.',
    wouldChangeIf:
      'The authorities converge, or the corpus publishes a Vaccinium concept page that can hold both readings.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rakkyo',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'An Allium grown in Japan, China and Korea almost entirely for pickling rather than as a fresh vegetable, which is an unusually narrow end use for an onion relative and is what distinguishes it.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rambutan',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'An Allium grown in Japan, China and Korea almost entirely for pickling rather than for use as a fresh vegetable, which is an unusually narrow end use for an onion relative and is what distinguishes it.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'ramie',
    cohort: 'fibre-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['industrially-used'],
    finding:
      'Yields a very strong bast fibre whose costly degumming requirement is why it has stayed a minor crop.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'redcurrant',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A Ribes grown at modest scale in northern Europe, closely allied to blackcurrant, which the corpus publishes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rhodes-grass',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A widely sown tropical and subtropical pasture grass with useful salinity tolerance, established from seed rather than vegetatively, which is what recommends it over the stoloniferous tropical grasses on large areas.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rhubarb',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['globally-traded'],
    finding:
      'Grown for petioles; the leaf blade is high in oxalate and is not eaten, which is the fact a reader needs.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rice-bean',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A minor Vigna of South and Southeast Asia, grown as pulse and fodder.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'ridge-gourd',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A Luffa grown young as a vegetable and mature as a fibrous sponge.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rocoto-pepper',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'minor-or-niche'],
    finding:
      'Capsicum pubescens, the only cultivated pepper with black seeds and hairy leaves, and the only one grown in cool Andean highlands.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'rough-shell-macadamia',
    cohort: 'nuts',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the macadamia genus concept. Wave 35 verified both species and recorded the reason not to promote either: most commercial plantings are interspecific hybrids, so a species page would describe a minority of the crop.',
    wouldChangeIf:
      'The macadamia concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'runner-bean',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'Grown mainly as a garden vegetable and ornamental in temperate regions; the perennial tuberous root is its distinguishing feature.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sainfoin',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['nutritionally-distinct', 'agronomic-role'],
    finding:
      'A condensed-tannin forage legume that does not cause bloat and reduces methane output — the direct counterpoint to white clover. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sapodilla',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'A tropical fruit tree, historically also the source of chicle latex.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'scarlet-eggplant',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important'],
    finding:
      'An African Solanum grown for fruit and leaf, distinct from the eggplant the corpus publishes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sea-buckthorn',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['nutritionally-distinct', 'industrially-used'],
    finding:
      'Grown for berries rich in oil and vitamin C, dioecious, thorny and notoriously difficult to harvest — which is why processing dominates. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'signal-grass',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'agronomic-role'],
    finding:
      'A major sown tropical pasture grass in Brazil; documented mostly at genus level in accessible sources.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sisal',
    cohort: 'fibre-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'industrially-used'],
    finding:
      'The principal hard fibre crop, harvested by repeated leaf cutting over a long perennial cycle that ends when the plant bolts and dies. That once-only flowering is the defining agronomic fact. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'smooth-brome',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A rhizomatous cool-season grass used for hay and conservation seedings in North America.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'smooth-shell-macadamia',
    cohort: 'nuts',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the macadamia genus concept. Wave 35 verified both species and recorded the reason not to promote either: most commercial plantings are interspecific hybrids, so a species page would describe a minority of the crop.',
    wouldChangeIf:
      'The macadamia concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'snake-gourd',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'minor-or-niche'],
    finding:
      'A Trichosanthes cucurbit grown on trellises across South and Southeast Asia for its long immature fruit. Grown at market-garden scale, and its trellis requirement is shared with the other Asian gourds the corpus holds.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sour-cherry',
    cohort: 'fruit',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'industrially-used'],
    finding:
      'A Trichosanthes cucurbit grown on trellises across South and Southeast Asia for its long immature fruit. Grown at market-garden scale, and its trellis requirement is shared with the other Asian gourds the corpus holds.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'soursop',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'An Annona grown across the humid tropics, mostly for processing into pulp and juice.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'spelt',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'A hulled wheat with a distinct milling requirement — the glume must be removed before the grain can be milled — and a real specialty market in central Europe. Enough evidence exists for a substantive article; it is not written yet.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'spine-gourd',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding: 'A dioecious perennial Momordica of local importance in India.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'spleen-amaranth',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'A major African and Asian leafy amaranth; the corpus publishes grain amaranth separately.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'star-anise',
    cohort: 'spices-and-herbs',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'industrially-used'],
    finding:
      'The source of shikimic acid used in oseltamivir manufacture, and shadowed by a toxic look-alike species that has caused poisonings. Both facts make a page worth writing carefully. Deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'stevia',
    cohort: 'industrial-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'industrially-used'],
    finding:
      'Grown for steviol glycosides rather than biomass, with leaf glycoside profile determining value, and a regulatory history that shapes the market. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'stone-pine',
    cohort: 'nuts',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'Mediterranean pine nut; a long-rotation forestry crop as much as an agricultural one.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'stylo',
    cohort: 'forage-and-pasture',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A tropical forage legume used to improve degraded pasture across South America, Africa and Australia, valued for persistence on acid, low-phosphorus soils where sown grasses run down.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'swede',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role', 'regionally-staple'],
    finding:
      'A tropical forage legume used to improve degraded pasture across South America, Africa and Australia, valued for persistence on acid, low-phosphorus soils where sown grasses run down.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'sweet-clover',
    cohort: 'cover-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'A biennial Melilotus used as green manure; spoiled hay produces dicoumarol, which is the safety-relevant fact.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'switchgrass',
    cohort: 'industrial-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['industrially-used', 'agronomic-role'],
    finding:
      'A North American prairie grass developed as a bioenergy feedstock and used for conservation plantings; upland and lowland ecotypes behave differently enough to matter. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tabasco-pepper',
    cohort: 'vegetables',
    outcome: 'DUPLICATES_EXISTING_CONCEPT',
    significance: ['globally-traded'],
    finding:
      'A Capsicum frutescens cultivar group, covered by the same pepper modelling as habanero.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tall-fescue',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'agronomic-role'],
    finding:
      'Enormously widely grown and defined by its endophyte problem — wild-type endophyte causes fescue toxicosis in livestock, and novel-endophyte cultivars exist to avoid it. That story is as substantial as perennial ryegrass’s and is not yet written.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tamarillo',
    cohort: 'fruit',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['minor-or-niche'],
    finding:
      'Tree tomato; a Solanum grown in subtropical highlands, chiefly New Zealand and the Andes.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tannia',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'An aroid grown alongside taro across the humid tropics, largely covered by the taro material the corpus holds.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tartary-buckwheat',
    cohort: 'pseudocereals',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'Grown at altitude where common buckwheat fails, and much higher in rutin; the corpus publishes buckwheat.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tepary-bean',
    cohort: 'pulses',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'agronomic-role'],
    finding:
      'A desert-adapted Phaseolus of the North American southwest with genuine drought tolerance. A short article would repeat the identity entry.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'timothy',
    cohort: 'forage-and-pasture',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'agronomic-role'],
    finding:
      'The dominant hay grass of cool temperate regions and the standard export hay for horses and dairy. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tomatillo',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple'],
    finding:
      'A Physalis crop that is largely self-incompatible and therefore needs more than one plant, which is a real planting constraint. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'tree-cotton',
    cohort: 'fibre-crops',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the cotton genus concept. Upland cotton was promoted in Wave 32 because it is the large majority of production; the remaining three are minority species whose pages would compete with the concept page for the same reader.',
    wouldChangeIf:
      'The cotton concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'turnip',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role'],
    finding:
      'Grown as vegetable and forage; a Brassica rapa group like pak choi and Chinese cabbage.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'turnip-rape',
    cohort: 'oilseeds',
    outcome: 'TAXONOMY_COMPLEX',
    significance: ['globally-traded'],
    finding:
      'The authorities differ on rank: one holds the oilseed subspecies, the other places it at species level where it would sit alongside pak choi, Chinese cabbage and turnip. The corpus publishes the subspecies deliberately; a page would need to lead with that dispute.',
    wouldChangeIf:
      'The authorities converge on a rank, or the corpus adds a Brassica rapa concept page that can carry the ambiguity.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'ulluco',
    cohort: 'roots-and-tubers',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'An Andean tuber grown with oca and mashua. Documented as part of the Andean tuber complex more often than individually.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'velvet-bean',
    cohort: 'cover-crops',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role', 'subsistence-important'],
    finding:
      'A tropical cover legume, also a source of L-DOPA, which limits food use without processing.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'wasabi',
    cohort: 'spices-and-herbs',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['globally-traded', 'minor-or-niche'],
    finding:
      'Notoriously difficult to grow, requiring cool running water, and overwhelmingly substituted by horseradish and colouring in commerce — the substitution is the story. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'water-spinach',
    cohort: 'vegetables',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'subsistence-important'],
    finding:
      'A major leafy vegetable of Southeast Asia grown in both aquatic and upland systems, and a regulated noxious weed in parts of the United States. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'water-yam',
    cohort: 'roots-and-tubers',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the yam species complex. Wave 35 established that the authorities place white yam under yellow yam and that the corpus models the group rank-awarely; promoting one member while its own parent species stays inside the concept is the incoherence Wave 32 refused. The group would have to move together.',
    wouldChangeIf:
      'The yam concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'waterleaf',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['subsistence-important', 'minor-or-niche'],
    finding:
      'A West African leafy vegetable grown for a succulent, fast-regrowing leaf that is cut repeatedly. Locally important in humid West Africa and largely absent from formal statistics.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'wax-gourd',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A West African leafy vegetable grown for a succulent, fast-regrowing leaf that is cut repeatedly. Locally important in humid West Africa and largely absent from formal statistics.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'welsh-onion',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A perennial bunching Allium; the name "spring onion" is applied both to this and to immature bulb onion, which is why the corpus keeps that as an alternative name here only.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'white-clover',
    cohort: 'forage-and-pasture',
    outcome: 'PROMOTE_FULL_PROFILE',
    significance: ['globally-traded', 'agronomic-role'],
    finding:
      'The most widely sown pasture legume in temperate agriculture, and structurally unlike the two forage legumes the corpus already published: it spreads by stolons rather than growing from a crown, which is why it survives close grazing and why alfalfa and red clover do not. Sources confirmed stolon-based persistence, Rhizobium symbiosis, and that applied nitrogen suppresses both the fixation and the clover itself. Written.',
    evidenceBasis: [
      'CORPUS_VERIFIED_IDENTITY',
      'EXECUTABLE_COVERAGE',
      'SOURCE_CONSULTED',
    ],
    sourceIds: ['fao', 'ahdb', 'usda-plants', 'cabi', 'usda-ars'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'white-jute',
    cohort: 'fibre-crops',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the jute genus concept, and complicated further by the other species being grown as an unrelated leaf vegetable. The concept scope has to settle that before either species is written.',
    wouldChangeIf:
      'The jute concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'white-lupin',
    cohort: 'pulses',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the lupin genus concept. The four cultivated species differ in alkaloid content and debittering requirement, which is real article material, but the concept page currently carries the crop and splitting one species out would leave it describing three.',
    wouldChangeIf:
      'The lupin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'white-mulberry',
    cohort: 'fruit',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the mulberry genus concept. The two species have genuinely different end uses — leaf for silkworms, fruit for eating — which is the strongest case for splitting in the corpus, and it is a concept decision rather than an evidence one.',
    wouldChangeIf:
      'The mulberry concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'white-mustard',
    cohort: 'oilseeds',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['agronomic-role', 'industrially-used'],
    finding:
      'Grown for condiment mustard and as a cover crop and biofumigant. Largely covered by the mustard material the corpus holds.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'wild-banana-acuminata',
    cohort: 'fruit',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['agronomic-role'],
    finding:
      'Held as a wild parent species inside the banana clone-group concept, not a crop in its own right. It is held so the concept can name its genome donors; it is not grown for fruit.',
    wouldChangeIf:
      'The banana concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'wild-banana-balbisiana',
    cohort: 'fruit',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['agronomic-role'],
    finding:
      'Held as a wild parent species inside the banana clone-group concept, not a crop in its own right. It is held so the concept can name its genome donors; it is not grown for fruit.',
    wouldChangeIf:
      'The banana concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'wild-rice',
    cohort: 'cereals',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'nutritionally-distinct'],
    finding:
      'Zizania is a different genus from Oryza and a genuinely distinct North American crop with paddy and lake-harvested systems and treaty-governed harvest rights. Sufficient evidence; deferred as it needs careful treatment of the legal dimension.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'winged-bean',
    cohort: 'pulses',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['nutritionally-distinct', 'subsistence-important'],
    finding:
      'Unusual in that pods, leaves, flowers, seeds and tubers are all eaten, and its seed protein and oil content are comparable to soybean. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'winter-squash-maxima',
    cohort: 'vegetables',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the pumpkin genus concept. The species differ in rind, keeping quality and stem form, which the concept page already says; a species page would repeat it at lower level.',
    wouldChangeIf:
      'The pumpkin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'yardlong-bean',
    cohort: 'vegetables',
    outcome: 'DATA_ONLY_SUFFICIENT',
    significance: ['regionally-staple'],
    finding:
      'A cowpea cultivar group grown for immature pods rather than dry seed; the corpus publishes cowpea.',
    wouldChangeIf:
      'Crop-specific evidence appears that the taxon entry cannot carry.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'yellow-lupin',
    cohort: 'pulses',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the lupin genus concept. The four cultivated species differ in alkaloid content and debittering requirement, which is real article material, but the concept page currently carries the crop and splitting one species out would leave it describing three.',
    wouldChangeIf:
      'The lupin concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'yellow-yam',
    cohort: 'roots-and-tubers',
    outcome: 'AGRICULTURAL_CONCEPT_COMPLEX',
    significance: ['regionally-staple'],
    finding:
      'Held as a constituent of the yam species complex. Wave 35 established that the authorities place white yam under yellow yam and that the corpus models the group rank-awarely; promoting one member while its own parent species stays inside the concept is the incoherence Wave 32 refused. The group would have to move together.',
    wouldChangeIf:
      'The yam concept page declares a split, at which point this becomes an evidence question rather than a scope one.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
  {
    slug: 'yerba-mate',
    cohort: 'beverage-crops',
    outcome: 'READY_BUT_DEFER_EDITORIAL',
    significance: ['regionally-staple', 'globally-traded'],
    finding:
      'A major South American beverage crop with substantial planted area and an established processing chain. Sufficient evidence; deferred.',
    wouldChangeIf: 'An editor takes it from the queue and writes it.',
    evidenceBasis: ['CORPUS_VERIFIED_IDENTITY', 'EXECUTABLE_COVERAGE'],
    researchedAt: '2026-09-02',
  },
];

export const RESEARCH_BY_SLUG = new Map(CROP_RESEARCH.map((r) => [r.slug, r]));
