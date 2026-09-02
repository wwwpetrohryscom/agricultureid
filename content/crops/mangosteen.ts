import type { CropContent } from '@/types/content';

export const mangosteen: CropContent = {
  id: 'crop-mangosteen',
  slug: 'mangosteen',
  contentType: 'crop',
  title: 'Mangosteen',
  scientificName: 'Garcinia mangostana',
  alternativeNames: ['Purple mangosteen', 'Manggis'],
  category: 'Fruit crop',
  subcategory: 'Tropical evergreen tree fruit',
  botanicalFamily: 'Clusiaceae (mangosteen family)',
  lifecycle: 'Perennial',
  summary:
    "Mangosteen is an obligate apomict: its seeds form without fertilisation, so the world's trees are close to a single clone, and conventional breeding of the crop is barely possible.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Mangosteen is a slow-growing tropical evergreen tree grown in Southeast Asia for a fruit with a thick purple rind and white segmented flesh. It is among the highest-value tropical fruits and among the most difficult to grow.',
    },
    {
      type: 'paragraph',
      text: "Its reproduction is the crop's central fact. Mangosteen is an obligate apomict — seeds develop without fertilisation and progeny are essentially copies of the mother tree — so cultivated mangosteen has an extremely narrow genetic base and there is almost nothing for a breeder to cross. Improvement has to come from selection among a very small set of variants rather than from recombination.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Clusiaceae (mangosteen family)' },
    {
      label: 'Reproduction',
      value: 'Obligate apomixis; seeds form without fertilisation',
    },
    {
      label: 'Consequence',
      value: 'An extremely narrow genetic base worldwide',
    },
    {
      label: 'Seed',
      value: 'Recalcitrant; cannot be dried or stored conventionally',
    },
    {
      label: 'Time to bearing',
      value: 'Very slow from seed, commonly many years',
    },
    {
      label: 'Principal producers',
      value: 'Thailand, Indonesia, Malaysia, Vietnam and the Philippines',
    },
  ],
  sections: [
    {
      id: 'apomixis',
      heading: 'A crop that cannot be bred conventionally',
      body: [
        {
          type: 'paragraph',
          text: 'Because mangosteen seed forms without fertilisation, every tree is close to a clone of its mother and there is essentially no meiotic recombination to work with. Molecular studies confirm an extremely narrow genetic base while finding small residual variation among accessions. A breeder therefore has no cross to make, and improvement in this crop means finding and propagating the rare variant rather than creating one.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'slow',
      heading: 'Very slow to bear',
      body: [
        {
          type: 'paragraph',
          text: 'Seedling trees take many years to first fruit and longer to commercial yield, which is exceptional even among tropical tree crops. That timescale, combined with the absence of breeding, means the mangosteen orchards of the future are close to the mangosteen orchards of today.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'recalcitrant',
      heading: 'A seed that cannot be stored',
      body: [
        {
          type: 'paragraph',
          text: 'Mangosteen seed is recalcitrant and loses viability quickly on drying, so planting material moves as fresh seed or as living plants. Germplasm conservation for the crop therefore depends on field collections rather than seed banks, which is expensive and vulnerable.',
        },
      ],
    },
    {
      id: 'rind',
      heading: 'The rind is most of the fruit',
      body: [
        {
          type: 'paragraph',
          text: 'A thick purple rind surrounds a small quantity of white edible flesh, so the edible fraction is modest relative to what is picked and shipped. The rind also hardens and browns as the fruit dehydrates after harvest, which is what limits shelf life and grade.',
        },
      ],
    },
    {
      id: 'gamboge',
      heading: 'Gamboge and translucent flesh',
      body: [
        {
          type: 'paragraph',
          text: 'Two disorders dominate quality complaints: yellow gamboge latex that exudes into the flesh or onto the rind, and translucent, glassy flesh. Both are associated with water relations around harvest — irregular or excessive water — and neither is visible from outside the fruit, so grading cannot reliably remove them.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water management is quality management',
      body: [
        {
          type: 'paragraph',
          text: 'Because the principal disorders track water supply, irrigation and drainage during fruit development matter more in this crop than in most tree fruit, and rainfall late in development is a quality risk. It is one of the few tree crops where a wet week is a grading problem rather than a harvest one.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'trade',
      heading: 'A high-value export fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Thailand, Indonesia, Vietnam and Malaysia supply an export trade into China and other Asian markets, and quarantine treatments and cold chain are what make that trade possible. Fresh mangosteen is a cold-chain product by construction.',
        },
      ],
    },
    {
      id: 'origin',
      heading: 'An origin still argued',
      body: [
        {
          type: 'paragraph',
          text: 'The wild ancestry and origin of cultivated mangosteen remain the subject of active work, with several hypotheses about its parentage among Garcinia species. AgricultureID records that as unsettled rather than choosing one account.',
        },
      ],
    },
    {
      id: 'genus',
      heading: 'A large genus with other crops',
      body: [
        {
          type: 'paragraph',
          text: 'Garcinia includes several other cultivated species — among them Garcinia kola, the West African bitter kola, and species grown for rind used as a souring agent. Records naming only Garcinia, or "bitter kola", may describe an entirely different crop.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'refrigerated-container' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'durian' },
    { type: 'crop', slug: 'jackfruit' },
    { type: 'crop', slug: 'lychee' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Thailand, Indonesia, Malaysia, Vietnam and the Philippines, with export trade principally into China and other Asian markets.',
  climateContext:
    'Humid tropical lowland; high rainfall and humidity, no tolerance of cold or of a long dry season.',
  limitations: [
    'The origin and wild ancestry of cultivated mangosteen are unresolved and no account is asserted here.',
    'Time to bearing varies with propagation method and site and is given as a general range.',
    'Quarantine and treatment requirements for export are set by importing jurisdictions and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical fruit production context' },
    { sourceId: 'cabi', citedFor: 'Garcinia mangostana compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'id-pertanian',
      citedFor: 'Indonesian tropical fruit production',
    },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Mangosteen',
    description:
      'Garcinia mangostana as a crop: obligate apomixis and a near-clonal world crop, very slow bearing, recalcitrant seed, gamboge and translucent flesh disorders.',
    keywords: [
      'mangosteen',
      'Garcinia mangostana',
      'apomixis',
      'tropical fruit',
      'recalcitrant seed',
    ],
  },
  structuredData: { article: true },
};
