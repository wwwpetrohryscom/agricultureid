import type { SoilContent } from '@/types/content';

export const volcanicSoil: SoilContent = {
  id: 'soil-volcanic',
  slug: 'volcanic-soil',
  contentType: 'soil',
  title: 'Volcanic Soil',
  alternativeNames: ['Andisol', 'Volcanic ash soil'],
  category: 'Soil type',
  subcategory: 'Volcanic-derived soil (Andisol)',
  texture:
    'Variable, frequently fine and highly porous; dominated by amorphous, poorly crystalline minerals formed from volcanic ash',
  summary:
    'Volcanic soil forms from volcanic ash, pumice, and other eruptive material, developing into porous, mineral-rich soils classified as Andisols. These soils are valued for cultivation of crops such as coffee and tea in many highland tropical and subtropical regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Volcanic soils develop through weathering of volcanic ash and other eruptive material, producing distinctive amorphous, poorly crystalline clay minerals such as allophane and imogolite. These minerals form strong organo-mineral complexes that give volcanic soils high organic matter retention, high water-holding capacity, and a characteristically light, porous structure.',
    },
    {
      type: 'paragraph',
      text: 'Fertility on volcanic soils can be considerable but depends strongly on the age and chemistry of the parent material and on local climate. A well-documented agronomic challenge is strong phosphorus fixation by the amorphous minerals, which requires deliberate fertilizer management even on otherwise fertile volcanic soils.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Volcanic-ash-derived soil (Andisol)' },
    {
      label: 'Defining minerals',
      value:
        'Allophane, imogolite, and other short-range-order (amorphous) minerals',
    },
    { label: 'Structure', value: 'Typically porous with low bulk density' },
    {
      label: 'Organic matter',
      value:
        'Often high, due to strong organic-mineral complexation that slows decomposition',
    },
    {
      label: 'Known constraint',
      value: 'High phosphorus fixation by amorphous minerals',
    },
    {
      label: 'Distribution',
      value:
        'Volcanic highland regions, e.g. parts of East Africa, Central America, Indonesia, and Japan',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Volcanic soils, classified as Andisols in most soil taxonomies, are defined by their unusual mineralogy rather than by particle-size texture alone. Weathering of volcanic ash under humid conditions produces amorphous clay minerals whose chemical behaviour differs considerably from the crystalline clays typical of most other soils.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Porosity and water holding',
              description:
                'Low bulk density and high porosity give volcanic soils strong water-holding capacity relative to their apparent texture.',
            },
            {
              term: 'Organic matter accumulation',
              description:
                'Organic matter binds strongly to amorphous minerals, slowing decomposition and often producing dark, humus-rich topsoil.',
            },
            {
              term: 'Phosphorus fixation',
              description:
                'Amorphous minerals bind phosphorus strongly, a well-documented agronomic constraint on many Andisols.',
            },
            {
              term: 'Variable-charge behaviour',
              description:
                'Unlike fixed-charge crystalline clays, the electrical charge on amorphous minerals varies with soil pH, affecting nutrient retention.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing volcanic soils means accounting for their unusual mineralogy, particularly around phosphorus availability and pH-dependent nutrient behaviour.',
        },
        {
          type: 'list',
          items: [
            'Apply phosphorus fertilizer accounting for fixation, following locally appropriate rates and placement guidance',
            'Maintain organic matter management suited to local practice, given its role in nutrient cycling on these soils',
            'Consider shade and canopy management in agroforestry systems common on volcanic highland soils',
            'Monitor soil pH, given the variable-charge behaviour of the dominant clay minerals',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Fertility on volcanic soils varies considerably depending on the age and weathering stage of the parent material; younger ash deposits and older, more weathered volcanic soils can behave quite differently.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee is widely grown on volcanic highland soils in regions such as Central America and East Africa, where altitude, rainfall, and soil chemistry combine favourably. Tea is also commonly grown on volcanic-derived soils in humid highland tropical regions.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a volcanic soil',
      body: [
        {
          type: 'paragraph',
          text: 'Standard textural triangle methods, designed around crystalline clay behaviour, can be less informative for volcanic soils than for many other soil types. Laboratory testing that accounts for amorphous mineralogy, along with local agricultural extension guidance, gives a more reliable basis for management decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'tea' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'chernozem' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'climate', slug: 'rainfall' },
  ],
  glossaryTerms: ['soil-texture', 'macronutrient', 'cultivar'],
  geographicScope:
    'General soil-science overview of volcanic-ash-derived soils (Andisols) found in volcanic highland regions worldwide, including parts of East Africa, Central America, Indonesia, and Japan; properties vary with parent material, age, and climate.',
  climateContext:
    'Common in humid highland tropical and subtropical climates where volcanic parent material and consistent rainfall support intensive perennial cropping such as coffee and tea.',
  limitations: [
    'Andisol properties vary substantially with the age and chemistry of the parent volcanic material and with local climate; this is a general overview, not a substitute for local soil testing.',
    'Phosphorus fixation behaviour and appropriate fertilizer strategy depend on specific soil mineralogy and should be assessed locally.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, drainage, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Volcanic Soil',
    description:
      'Volcanic soil explained: Andisol formation from volcanic ash, amorphous mineralogy, phosphorus fixation, management, and crop suitability considerations.',
    keywords: [
      'volcanic soil',
      'Andisol',
      'volcanic ash soil',
      'soil fertility',
    ],
  },
  structuredData: { article: true },
};
