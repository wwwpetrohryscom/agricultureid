import type { CropContent } from '@/types/content';

export const robustaCoffee: CropContent = {
  id: 'crop-robusta-coffee',
  slug: 'robusta-coffee',
  contentType: 'crop',
  title: 'Robusta Coffee',
  scientificName: 'Coffea canephora',
  alternativeNames: ['Robusta', 'Conilon'],
  category: 'Beverage crop',
  subcategory: 'Perennial evergreen shrub',
  botanicalFamily: 'Rubiaceae (madder family)',
  lifecycle: 'Perennial',
  summary:
    'Coffea canephora is the diploid, self-incompatible coffee of the tropical lowlands. Obligate outcrossing forces clonal propagation and multi-clone planting design, and its high soluble-solids yield makes it the backbone of instant coffee.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffea canephora is diploid, with 22 chromosomes, and gametophytically self-incompatible: a plant cannot set fruit with its own pollen, nor with pollen from a genetically identical neighbour. Everything distinctive about how the crop is established and improved follows from that one fact.',
    },
    {
      type: 'paragraph',
      text: 'Seed from a robusta tree is the product of an unknown pollen parent and does not reproduce the mother. Commercial plantings are therefore built from vegetatively propagated clones, deliberately interplanted so that compatible pollen is always within range.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rubiaceae (madder family)' },
    { label: 'Ploidy', value: 'Diploid, 2n = 2x = 22' },
    {
      label: 'Breeding system',
      value: 'Gametophytic self-incompatibility; obligate outcrosser',
    },
    {
      label: 'Propagation',
      value: 'Clonal — rooted cuttings or grafts, planted as clone mixtures',
    },
    {
      label: 'Typical altitude',
      value: 'Lowland to mid-elevation tropics, broadly below 800 m',
    },
    {
      label: 'Principal outlet',
      value: 'Soluble (instant) coffee manufacture and espresso blending',
    },
  ],
  sections: [
    {
      id: 'self-incompatibility',
      heading: 'Self-incompatibility and what it forces',
      body: [
        {
          type: 'paragraph',
          text: 'A monoclonal robusta block sets almost nothing. Field design therefore has to guarantee cross-pollination: several compatible clones are established in a planned arrangement so that pollen moves between them, and clone identity is tracked through the nursery and into the field.',
        },
        {
          type: 'paragraph',
          text: 'This makes robusta improvement a matter of selecting and multiplying superior individuals rather than fixing lines. A promising tree can be captured directly as a clone, which is fast, but the resulting variation between clones in yield, bean size and processing behaviour has to be managed at the block level.',
        },
      ],
    },
    {
      id: 'where-grown',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Vietnam’s Central Highlands became the largest single production area in a few decades, on intensively managed and heavily irrigated smallholdings. Brazil grows it as conilon, mainly in Espírito Santo and Rondônia, as a crop distinct in management from its arabica sector.',
        },
        {
          type: 'paragraph',
          text: 'Indonesia, Uganda, India and Côte d’Ivoire are also substantial producers. In Uganda the species occurs naturally, and indigenous wild populations are part of the country’s coffee landscape rather than an introduction.',
        },
      ],
    },
    {
      id: 'climate',
      heading: 'Heat, water and the lowland niche',
      body: [
        {
          type: 'paragraph',
          text: 'The species handles higher temperatures than arabica and occupies warm lowland country where arabica cannot be grown profitably. It is not, however, a drought crop: shallow rooting and a large evaporative demand make it dependent on well-distributed rainfall or irrigation, and the Vietnamese sector is built on dry-season irrigation.',
        },
        {
          type: 'paragraph',
          text: 'Marked dry periods are still useful. A dry spell followed by rain synchronises flowering, which concentrates the harvest and makes stripping or mechanical picking practical.',
        },
      ],
    },
    {
      id: 'pruning',
      heading: 'Pruning and stem management',
      body: [
        {
          type: 'paragraph',
          text: 'Robusta is commonly grown as a multi-stemmed bush, with a cycle of stems raised, cropped and cut out on a rotation so that the plant always carries wood of productive age. Yield is carried on young wood, and a block left unpruned drifts towards tall, unproductive stems that are difficult to harvest.',
        },
        {
          type: 'paragraph',
          text: 'The pruning rotation, rather than replanting, is the main tool for maintaining output over the life of a block, and it is one of the clearest management differences from a single-stemmed arabica planting.',
        },
      ],
    },
    {
      id: 'diseases',
      heading: 'Disease profile',
      body: [
        {
          type: 'paragraph',
          text: 'Robusta is broadly tolerant of the leaf rust that dominates arabica management, and it is the source of the rust resistance introgressed into arabica through the Timor hybrid. Its own principal disease is different: coffee wilt, a vascular Fusarium disease that has killed large numbers of trees in central and east Africa.',
        },
        {
          type: 'paragraph',
          text: 'Because coffee wilt is soil- and wound-associated and lethal rather than debilitating, the response is removal of affected trees and replanting with tolerant clones, not spray programmes.',
        },
      ],
    },
    {
      id: 'composition',
      heading: 'Caffeine, solubles and cup character',
      body: [
        {
          type: 'paragraph',
          text: 'Robusta beans carry roughly double the caffeine of arabica and a higher content of chlorogenic acids, and they yield more soluble solids per unit of green coffee. That extraction yield is the commercial basis of the instant-coffee industry, where output per tonne of green bean is the governing economics.',
        },
        {
          type: 'paragraph',
          text: 'In espresso blending robusta is used for body and for a persistent crema. Its cup is heavier and less acidic than arabica, and the harshness historically associated with the species is substantially a consequence of unripe fruit and poor drying rather than an inherent property.',
        },
      ],
    },
    {
      id: 'harvest-processing',
      heading: 'Harvest and processing',
      body: [
        {
          type: 'paragraph',
          text: 'Because flowering is more synchronised and much of the crop is destined for soluble manufacture, robusta is typically stripped in one or two passes and dried whole rather than selectively picked and pulped. The natural dry process suits the larger volumes and lower unit value.',
        },
        {
          type: 'paragraph',
          text: 'Fine robusta, prepared with selective picking and careful drying, is a small but growing exception, and it demonstrates that the processing route rather than the species sets much of the achievable quality.',
        },
      ],
    },
    {
      id: 'market',
      heading: 'Market position',
      body: [
        {
          type: 'paragraph',
          text: 'Robusta trades on a separate futures contract from arabica and at a discount, and the spread between them moves with soluble-coffee demand and with the relative fortunes of the two producing regions. Roasters can substitute between the species within limits, which links the two markets without merging them.',
        },
        {
          type: 'paragraph',
          text: 'Because a substantial share of the crop moves into industrial processing, robusta demand is less sensitive to speciality-market sentiment than arabica demand and more sensitive to the economics of soluble manufacture.',
        },
      ],
    },
    {
      id: 'agronomy-notes',
      heading: 'Soils and nutrition',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, free-draining soils of moderate fertility suit the crop, and the highly weathered tropical soils on which much of it grows are naturally low in phosphorus and prone to acidity. Intensive irrigated systems remove large quantities of potassium in the harvested cherry.',
        },
        {
          type: 'paragraph',
          text: 'Nutrient decisions belong to local soil and leaf analysis; the general point is that a high-yielding clonal block is a demanding crop, not a low-input one, whatever its reputation.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'coffee-berry-borer' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'volcanic-soil' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'coffee-cherries' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'arabica-coffee' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Global overview. Clone recommendations, planting arrangement and irrigation practice are country- and estate-specific.',
  climateContext:
    'Warm tropical lowland; tolerant of high temperature, dependent on well-distributed rainfall or irrigation.',
  limitations: [
    'Clone performance is site-specific and clone recommendations are issued by national programmes; no clone list is reproduced here.',
    'Caffeine and soluble-solids figures are given as broad comparisons with arabica, not as specification values for any lot.',
    'The extent of coffee wilt disease varies by country and year; current status should be taken from national plant-health authorities.',
    'Production and price statistics change continuously and should be taken from primary sources.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Robusta production systems and context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'ico', citedFor: 'Trade, contract structure and market share' },
    {
      sourceId: 'cabi',
      citedFor: 'Coffee wilt disease and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Robusta Coffee',
    description:
      'Coffea canephora as a distinct species: self-incompatible clonal planting, the lowland niche, coffee wilt disease, soluble-solids yield and market position.',
    keywords: [
      'robusta coffee',
      'Coffea canephora',
      'conilon',
      'instant coffee',
      'coffee wilt disease',
    ],
  },
  structuredData: { article: true },
};
