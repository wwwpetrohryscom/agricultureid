import type { CropContent } from '@/types/content';

export const durian: CropContent = {
  id: 'crop-durian',
  slug: 'durian',
  contentType: 'crop',
  title: 'Durian',
  scientificName: 'Durio zibethinus',
  alternativeNames: ['King of fruits'],
  category: 'Fruit crop',
  subcategory: 'Tropical evergreen tree fruit',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Perennial',
  summary:
    'Durian is harvested by letting the fruit fall, because a fruit cut from the tree does not develop properly — and a two-kilogram spined fruit dropping from twenty metres makes the orchard floor the most managed part of the crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Durian is grown on large evergreen trees across Southeast Asia and sells at a price per fruit that few tropical crops reach. Its agronomy is unusual at almost every step, starting with harvest.',
    },
    {
      type: 'paragraph',
      text: 'For most cultivars the accepted practice is to let the fruit abscise and fall naturally, because fruit cut early does not reach proper eating quality. That makes the harvest a matter of catching or collecting fruit within hours, and it makes a durian orchard in season a place with genuine overhead hazard.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    {
      label: 'Harvest method',
      value: 'Natural abscission; fruit is caught or collected after falling',
    },
    {
      label: 'Fruit weight',
      value: 'Commonly one to three kilograms, heavily spined',
    },
    {
      label: 'Shelf life',
      value: 'Short; the fruit continues to change rapidly after fall',
    },
    {
      label: 'Pollination',
      value: 'Night-flowering and largely bat-pollinated',
    },
    {
      label: 'Transport restriction',
      value:
        'Banned by many airlines, hotels and transit systems for its odour',
    },
  ],
  sections: [
    {
      id: 'abscission',
      heading: 'Why the fruit is not picked',
      body: [
        {
          type: 'paragraph',
          text: 'Durian for the premium fresh market is allowed to fall, because fruit cut from the tree before abscission does not develop the texture and aroma that the market pays for. Some export operations cut at a calculated maturity for shipping, and the quality difference between the two is the central quality argument in the industry.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'orchard-floor',
      heading: 'Managing the fall',
      body: [
        {
          type: 'paragraph',
          text: 'A spined fruit of one to three kilograms falling from a mature tree will injure a person and will split on hard ground. Orchards are netted, or the floor is kept in soft ground cover, and blocks are closed to people during drop. The falling fruit is a design constraint on the whole orchard, which is unusual among tree crops.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'bats',
      heading: 'Night flowering and bat pollination',
      body: [
        {
          type: 'paragraph',
          text: 'Durian flowers open at night and are pollinated largely by nectar bats, with insects contributing. Fruit set is therefore tied to a bat population and to the other night-flowering plants that sustain it through the year, which makes surrounding vegetation a yield factor and links the crop to habitat in a direct commercial way.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'hand-pollination',
      heading: 'Assisted pollination',
      body: [
        {
          type: 'paragraph',
          text: 'Because natural set is often low and uneven, hand pollination at night is practised in commercial orchards in Thailand and Malaysia to raise set and to produce fully filled, symmetrical fruit. Poorly pollinated durians are lopsided with empty locules and grade down sharply.',
        },
      ],
    },
    {
      id: 'shelf-life',
      heading: 'A very short window',
      body: [
        {
          type: 'paragraph',
          text: 'Once fallen, durian changes quickly: it continues to ripen, the aroma intensifies and the flesh deteriorates within days. Fresh export therefore depends on cold chain and air freight, while frozen whole fruit and frozen pulp are what make the crop tradeable at distance.',
        },
      ],
    },
    {
      id: 'odour',
      heading: 'The odour is a logistics problem',
      body: [
        {
          type: 'paragraph',
          text: "The fruit's smell is strong enough that airlines, hotels and public transport systems in the region prohibit it, and this shapes how the crop moves rather than merely how it is described. Handling, storage and packaging decisions across the supply chain follow from it.",
        },
      ],
    },
    {
      id: 'cultivars',
      heading: 'Cultivar is the product',
      body: [
        {
          type: 'paragraph',
          text: 'Named clones command very different prices, and the market buys the cultivar rather than the species. Orchards are grafted onto seedling rootstocks to reproduce those clones, because seedling durians do not come true and take far longer to bear.',
        },
      ],
    },
    {
      id: 'long-juvenile',
      heading: 'A long wait to bearing',
      body: [
        {
          type: 'paragraph',
          text: 'Grafted trees take several years to first crop and much longer to full production, and trees remain productive for decades. That profile makes cultivar choice at planting close to irreversible, and it is why replanting to follow a market trend is rare.',
        },
      ],
    },
    {
      id: 'alternate',
      heading: 'Irregular bearing',
      body: [
        {
          type: 'paragraph',
          text: 'Durian tends to crop heavily in some years and lightly in others, and flowering depends on a dry period to trigger it, so a wet year can suppress a crop across a whole region. Yield variability in durian is a regional weather event more often than an orchard problem.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'refrigerated-container' },
    { type: 'post-harvest', slug: 'harvest-maturity-assessment' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jackfruit' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'breadfruit' },

    { type: 'crop', slug: 'mangosteen' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Thailand, Malaysia, Indonesia, Vietnam and the Philippines. Thailand dominates export trade; China is the principal destination market.',
  climateContext:
    'Humid tropical lowland; requires high rainfall with a dry period to trigger flowering and is intolerant of cold.',
  limitations: [
    'Harvest practice differs between the domestic premium market and export operations, and the two produce different products from the same tree.',
    'Cultivar-specific prices, maturity indices and bearing habits are not covered here.',
    'Carriage restrictions are set by individual carriers and venues and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical fruit production context' },
    { sourceId: 'cabi', citedFor: 'Durio zibethinus compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    {
      sourceId: 'id-pertanian',
      citedFor: 'Indonesian tropical fruit production',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Durian',
    description:
      'Durio zibethinus as a crop: harvest by natural fall, orchard floor management, night bat pollination and hand pollination, short shelf life and odour logistics.',
    keywords: [
      'durian',
      'Durio zibethinus',
      'tropical fruit',
      'bat pollination',
      'fruit abscission',
    ],
  },
  structuredData: { article: true },
};
