import type { CropContent } from '@/types/content';

export const sisal: CropContent = {
  id: 'crop-sisal',
  slug: 'sisal',
  contentType: 'crop',
  title: 'Sisal',
  scientificName: 'Agave sisalana',
  alternativeNames: ['Sisal hemp'],
  category: 'Fibre crop',
  subcategory: 'Monocarpic succulent grown for leaf fibre',
  botanicalFamily: 'Asparagaceae (asparagus family)',
  lifecycle: 'Perennial',
  summary:
    'Sisal flowers once and dies, sets essentially no seed, and is propagated instead from bulbils that form on the flowering pole — while the fibre it is grown for is only around four per cent of the leaf it is cut from.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sisal is an agave grown for the stiff fibre in its leaves, used for twine, rope, matting and increasingly as a reinforcement in composites. The plant grows for years as a rosette of leaves that are cut progressively, then sends up a flowering pole, and dies.',
    },
    {
      type: 'paragraph',
      text: 'It is effectively sterile in cultivation: capsules and seed are unknown in commercial stands, and the pole instead produces bulbils, small plantlets, in large numbers. Those bulbils, and suckers from the base, are the planting material for the next field.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asparagaceae (asparagus family)' },
    {
      label: 'Life cycle',
      value: 'Monocarpic: flowers once, then the plant dies',
    },
    {
      label: 'Seed',
      value: 'Essentially sterile in cultivation; capsules and seed unknown',
    },
    {
      label: 'Propagation',
      value: 'Bulbils from the flowering pole and basal suckers',
    },
    {
      label: 'Fibre content of leaf',
      value: 'Reported at roughly 2 to 5 per cent, averaging near 4',
    },
    {
      label: 'Consequence',
      value: 'Over ninety per cent of the harvested leaf is waste',
    },
  ],
  sections: [
    {
      id: 'monocarpic',
      heading: 'One flowering, then death',
      body: [
        {
          type: 'paragraph',
          text: "A sisal plant produces leaves for years, throws a tall flowering pole, and dies. Cutting management aims to take as many leaves as possible before poling, and a field poles unevenly, so a plantation is progressively replanted rather than cleared and reset. The plant's life cycle, not a rotation decision, sets the field's working life.",
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'bulbils',
      heading: 'Propagated from bulbils, not seed',
      body: [
        {
          type: 'paragraph',
          text: 'Flowers usually abscise without setting seed and the pole instead bears bulbils, which are shed after growing for some months and are collected, raised in nurseries and planted out. A single pole can produce thousands. This is why sisal fields are genetically uniform and why the crop has almost no conventional breeding history.',
        },
      ],
    },
    {
      id: 'waste',
      heading: 'Ninety per cent of the harvest is waste',
      body: [
        {
          type: 'paragraph',
          text: "Fibre makes up only a few per cent of leaf weight, so decortication generates a very large volume of pulp and juice for every tonne of fibre. Disposal of that waste is the crop's principal environmental problem, and recovering value from it — as biogas, animal feed or chemical feedstock — is the main line of research in the crop.",
        },
      ],
    },
    {
      id: 'decortication',
      heading: 'Decortication and flume tow',
      body: [
        {
          type: 'paragraph',
          text: 'Leaves are crushed and scraped mechanically to release the fibre, and a further share of the fibre is lost into the effluent as short flume tow. The plant must run within a short time of cutting, so decortication capacity sits in the field rather than at a distant mill.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'A crop for dry, hot land',
      body: [
        {
          type: 'paragraph',
          text: 'Sisal is a succulent with crassulacean acid metabolism and it produces on ground too dry and too poor for most crops, which is why it is grown in semi-arid Tanzania, Kenya and north-eastern Brazil. It is intolerant of waterlogging and of cold.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'labour',
      heading: 'Cutting is manual and repeated',
      body: [
        {
          type: 'paragraph',
          text: "Leaves are cut by hand with a knife throughout the plant's life, several times a year, and the leaves are spined and heavy. Labour is the largest cost in the crop and the reason production has contracted where wages rose, rather than because the plant stopped performing.",
        },
      ],
    },
    {
      id: 'synthetics',
      heading: 'Displaced, then partly recovered',
      body: [
        {
          type: 'paragraph',
          text: 'Polypropylene twine displaced sisal from agricultural baler twine across much of the world, and production fell sharply. Demand has partly recovered through composites, geotextiles, and markets that specify a biodegradable fibre, but the crop has not returned to its former scale.',
        },
      ],
    },
    {
      id: 'agave',
      heading: 'An agave among agaves',
      body: [
        {
          type: 'paragraph',
          text: 'Agave sisalana is one of several agaves used for fibre, alongside Agave fourcroydes for henequen and others, and hybrids are grown in some regions. Trade and production records that say "sisal" sometimes cover more than one species, which matters when matching data.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'A slow start',
      body: [
        {
          type: 'paragraph',
          text: 'Plants take several years from bulbil to first leaf cutting, and the field is unproductive during that period while still requiring weeding and protection. That establishment cost is what makes sisal a long-term estate crop rather than a smallholder rotation option in most regions.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'bacterial-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'aridity-index' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'hemp' },
    { type: 'crop', slug: 'cotton' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Brazil is the largest producer, followed by Tanzania and Kenya, with smaller production in Madagascar and China.',
  climateContext:
    'Semi-arid tropical; drought-tolerant crassulacean acid metabolism succulent, intolerant of waterlogging and frost.',
  limitations: [
    "Fibre content figures are reported ranges from production literature and change across the plant's life cycle.",
    'Trade records sometimes aggregate sisal with henequen and other agave fibres.',
    'Waste treatment requirements are jurisdictional and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Natural fibre production and trade context' },
    { sourceId: 'cabi', citedFor: 'Agave sisalana compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    { sourceId: 'br-mapa', citedFor: 'Brazilian sisal production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Sisal',
    description:
      'Agave sisalana as a crop: monocarpic life cycle, propagation from bulbils rather than seed, four per cent fibre in the leaf and the decortication waste problem.',
    keywords: [
      'sisal',
      'Agave sisalana',
      'leaf fibre',
      'bulbils',
      'decortication',
    ],
  },
  structuredData: { article: true },
};
