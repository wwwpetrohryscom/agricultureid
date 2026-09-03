import type { CropContent } from '@/types/content';

export const caraway: CropContent = {
  id: 'crop-caraway',
  slug: 'caraway',
  contentType: 'crop',
  title: 'Caraway',
  scientificName: 'Carum carvi',
  alternativeNames: ['Meridian fennel', 'Persian cumin', 'Kümmel'],
  category: 'Spice',
  subcategory: 'Biennial umbellifer grown for seed',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Biennial, with annual forms',
  summary:
    'Caraway is an umbellifer grown for aromatic seed in a two-year cycle, occupying the ground through a winter before it yields and shattering readily once ripe.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Caraway is grown for a seed that is unmistakable in rye bread and in the spirits named after it, and it is the only biennial spice crop this corpus publishes. In its first season it makes a rosette and a taproot and yields nothing; it overwinters, bolts in the second spring and sets seed in midsummer. Annual forms exist and are grown where a two-year commitment is unacceptable, but the biennial types are the ones the aroma trade prefers.',
    },
    {
      type: 'paragraph',
      text: "The two-year cycle is the crop's defining agronomic feature and its main commercial risk. A grower commits land for two seasons before any return, and the crop can be lost in the winter between them.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Biennial; annual forms exist' },
    { label: 'Scientific name', value: 'Carum carvi' },
    { label: 'Harvested part', value: 'Dry fruit, sold as seed' },
    { label: 'Time to first harvest', value: 'Two seasons for biennial types' },
    { label: 'Principal aroma compound', value: 'Carvone' },
    { label: 'Climate', value: 'Cool temperate with a reliable winter' },
  ],
  sections: [
    {
      id: 'two-year',
      heading: 'Two years for one harvest',
      body: [
        {
          type: 'paragraph',
          text: 'The biennial crop makes a rosette in year one, requires vernalisation over winter, and flowers and seeds in year two. Nothing is harvested from the first season, so the crop is often undersown into a cereal to earn something from the land while the rosette establishes. That practice makes the choice of cover crop and its harvest date a caraway decision as much as a cereal one.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'A crop that shatters',
      body: [
        {
          type: 'paragraph',
          text: 'Ripe caraway sheds seed readily, and losses on the ground can exceed what reaches the bin if the crop is left standing or handled roughly. It is commonly swathed rather than cut standing, and moved in the cool of the day. The narrowness of that window is why caraway remains a crop of specialist growers in temperate regions rather than a general break crop.',
        },
      ],
    },
    {
      id: 'carvone',
      heading: 'Carvone and the two caraways',
      body: [
        {
          type: 'paragraph',
          text: "Caraway's character comes from carvone, the same compound that dominates spearmint oil in a mirror-image form. Seed grown for the oil trade is valued on carvone content, and cultivars are selected for it, so the same crop grown for whole seed and for distillation is graded on different criteria.",
        },
      ],
    },
    {
      id: 'annual-forms',
      heading: 'Annual types and why they are not the default',
      body: [
        {
          type: 'paragraph',
          text: 'Annual caraway removes the winter risk and the two-year land commitment, and gives lower yields and, generally, lower oil content. Where the biennial crop is reliable it remains preferred; the annual forms make the crop possible where winters are unreliable or land cannot be tied up.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: "Demand is split across two seasons, with the second year's flowering and seed fill carrying most of it, so a single first-year application is poorly matched to the crop. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.",
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Umbellifer aphids, the caraway moth in some regions, and leaf and umbel blights in wet flowering weather are the main problems, and a crop standing over winter has longer to accumulate them. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, well-drained soils suit the taproot and the overwintering rosette; waterlogged winters cause losses that are only discovered in spring. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'undersowing',
      heading: 'Undersowing and the companion crop',
      body: [
        {
          type: 'paragraph',
          text: "Because year one yields nothing, biennial caraway is frequently undersown into a spring cereal or a short vegetable crop that is harvested before the rosette needs the light. The companion crop's harvest date and its residue both matter to the caraway underneath it, which makes the pairing an agronomic decision rather than a convenience.",
        },
      ],
    },
    {
      id: 'distillation',
      heading: 'Seed for the pot and seed for the still',
      body: [
        {
          type: 'paragraph',
          text: 'Whole seed and distilled oil are different markets. Oil buyers grade on carvone content and pay for it; whole-seed buyers grade on appearance, uniformity and freedom from contamination. Cultivar choice and harvest timing follow whichever market a grower is in, and a crop grown well for one is not automatically good for the other.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'chernozem' },
  ],
  connections: [
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'cumin' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'cumin' },
    { type: 'crop', slug: 'anise' },
    { type: 'crop', slug: 'dill' },
  ],
  glossaryTerms: ['cultivar', 'crop-rotation', 'cover-crop'],
  geographicScope:
    'Grown in northern and central Europe, in the Netherlands, Poland, Finland and the Baltic states, and in parts of the Middle East and North Africa. The FAO Crop Calendar records sowing and harvest windows in six countries.',
  climateContext:
    'Cool temperate with a winter cold enough to vernalise the rosette and a dry enough ripening period to allow swathing. Mild winters give poor bolting and unreliable seed set in the biennial types.',
  limitations: [
    'Production statistics for caraway are frequently grouped with anise, badian and fennel, so figures attributed to caraway alone should be read with care.',
    'Biennial and annual types are commercially distinct and are selected on carvone content for the oil trade.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows recorded across six countries',
    },
    { sourceId: 'cabi', citedFor: 'Carum carvi compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Caraway',
    description:
      'Caraway (Carum carvi): a biennial umbellifer that yields nothing in its first year, shatters readily when ripe, and is graded on carvone.',
    keywords: [
      'caraway',
      'Carum carvi',
      'biennial spice',
      'carvone',
      'seed spice',
    ],
  },
  structuredData: { article: true },
};
