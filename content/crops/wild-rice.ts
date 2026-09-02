import type { CropContent } from '@/types/content';

export const wildRice: CropContent = {
  id: 'crop-wild-rice',
  slug: 'wild-rice',
  contentType: 'crop',
  title: 'Wild Rice',
  scientificName: 'Zizania palustris',
  alternativeNames: ['Northern wild rice', 'Manoomin'],
  category: 'Cereal grain',
  subcategory: 'Aquatic annual grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Wild rice is a different genus from rice, an aquatic annual of North American lakes and rivers, and one of very few crops harvested both from managed paddies and from natural stands under treaty-protected rights.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wild rice is not rice. It belongs to Zizania, a separate genus in the same family, and it grows standing in shallow water in the lakes and slow rivers of the northern United States and Canada. It is an annual that reseeds itself, and stands have persisted in the same waters for a very long time.',
    },
    {
      type: 'paragraph',
      text: 'It is harvested in two entirely different ways: mechanically from constructed paddies, and by hand from canoes on natural waters, the latter under rights held by Anishinaabe and other Indigenous nations for whom the plant is a cultural centre and not only a food.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Genus', value: 'Zizania — not Oryza; wild rice is not a rice' },
    { label: 'Habitat', value: 'Shallow standing or slow-flowing fresh water' },
    { label: 'Life cycle', value: 'Annual, reseeding from shattered grain' },
    {
      label: 'Harvest systems',
      value: 'Mechanised paddy production and hand harvest from natural stands',
    },
    {
      label: 'Cultural status',
      value:
        'Manoomin, central to Anishinaabe foodways and governed by treaty rights',
    },
  ],
  sections: [
    {
      id: 'not-rice',
      heading: 'A different genus',
      body: [
        {
          type: 'paragraph',
          text: 'Zizania and Oryza are separate genera, and almost nothing about rice agronomy transfers. The grain is long, dark and thin rather than short and pale, the plant is taller, the water regime differs, and the crop shatters at maturity in a way domesticated rice has been selected not to.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water is the growing medium',
      body: [
        {
          type: 'paragraph',
          text: 'The crop germinates under water in spring and grows up through it, so water depth and its timing govern the stand more than soil does. Paddy production controls depth deliberately through the season; natural stands are at the mercy of it, and a year of high water can remove a bed entirely.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Shattering is retained, on purpose and not',
      body: [
        {
          type: 'paragraph',
          text: 'Natural stands depend on shattering to reseed, and hand harvesting works with it — a canoe passes and the ripe grain is knocked into the boat while the rest stays to fall. Paddy production selects reduced-shattering cultivars, because a mechanical harvester passing once cannot afford to lose the crop.',
        },
      ],
    },
    {
      id: 'two-systems',
      heading: 'Two production systems, one species',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivated paddy production, concentrated in Minnesota and California, and hand harvest from natural waters in the Great Lakes region are different industries producing a differently graded product. Conflating their statistics, or their sustainability, misdescribes both.',
        },
      ],
    },
    {
      id: 'rights',
      heading: 'Treaty rights and governance',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest from natural stands is exercised under treaty-protected rights, and management of those waters involves tribal governments as regulators rather than as stakeholders. Any account of this crop that treats it purely as an agronomic system omits the legal framework it is actually grown under.',
        },
      ],
    },
    {
      id: 'paddy',
      heading: 'Paddy production',
      body: [
        {
          type: 'paragraph',
          text: 'Constructed paddies are flooded, drained for harvest and managed on a rotation, and the crop is combined with modified machinery on flotation tyres or tracks. Reduced-shattering cultivars, disease management and water control are the main levers, and the system resembles rice production more than the natural stand does.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Curing and parching',
      body: [
        {
          type: 'paragraph',
          text: 'Harvested grain is high in moisture and must be cured and then parched, which loosens the hull and develops the characteristic colour and flavour before hulling. Traditional parching over fire and industrial drum parching produce recognisably different products from the same grain.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Brown spot and stand loss',
      body: [
        {
          type: 'paragraph',
          text: 'Fungal brown spot is the principal disease of paddy production and can take a substantial share of a crop in humid seasons. Natural stands are affected more by water level, competition and wildlife than by disease.',
        },
      ],
    },
    {
      id: 'ecology',
      heading: 'A stand is habitat',
      body: [
        {
          type: 'paragraph',
          text: 'Wild rice beds are significant waterfowl habitat and are affected by nutrient loading, sulphate, water-level regulation and boat traffic. Decline in natural beds is generally an aquatic-ecosystem question rather than an agronomic one, which is unusual for a crop.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'brown-spot-of-rice' },
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'sheath-blight' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'histosol' },
    { type: 'soil', slug: 'fluvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'post-harvest', slug: 'batch-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'farming-system', slug: 'rice-fish-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'african-rice' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'The Great Lakes region of the United States and Canada, with paddy production concentrated in Minnesota and California.',
  climateContext:
    'Cool temperate aquatic annual; germinates and grows in shallow fresh water and requires a cold period before germination.',
  limitations: [
    'Paddy and natural-stand production are different systems with different products and are not comparable as one statistic.',
    'Harvest from natural waters is governed by treaty rights and tribal regulation, which are not described here; consult the relevant authority.',
    'Natural stand condition depends on water chemistry and level regulation and is not an agronomic variable.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Aquatic cereal production context' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Zizania palustris compendium data' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Wild rice paddy production and processing',
    },
    { sourceId: 'usda-nass', citedFor: 'Production statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Wild Rice',
    description:
      'Zizania palustris as a crop: a different genus from rice, aquatic annual growth, paddy versus natural-stand harvest, treaty rights, and parching.',
    keywords: [
      'wild rice',
      'Zizania palustris',
      'manoomin',
      'paddy wild rice',
      'aquatic cereal',
    ],
  },
  structuredData: { article: true },
};
