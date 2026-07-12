import type { FertilizerContent } from '@/types/content';

export const greenManure: FertilizerContent = {
  id: 'fertilizer-green-manure',
  slug: 'green-manure',
  contentType: 'fertilizer',
  title: 'Green manure',
  alternativeNames: ['Green manuring crop'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable; nitrogen contribution can be substantial when the crop is a nitrogen-fixing legume, otherwise low and dependent on biomass',
  summary:
    'Green manure refers to a crop grown specifically to be incorporated into the soil while still green, adding organic matter and, when the crop is a legume, biologically fixed nitrogen, rather than being harvested for grain, forage, or other direct product.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Green manuring is the practice of growing a crop, often but not always a legume, specifically to plough or incorporate it into the soil while it is still green rather than harvesting it. The practice adds fresh organic matter and, in the case of legumes, nitrogen fixed biologically from the atmosphere.',
    },
    {
      type: 'paragraph',
      text: 'Unlike mineral fertilizers or processed organic amendments, a green manure crop’s nutrient contribution is not a fixed analysis; it depends on the species grown, its biomass at incorporation, and, for legumes, the extent of nitrogen fixation achieved during growth.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'In-situ organic amendment from an incorporated cover crop',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable; nitrogen contribution can be substantial from legume species, otherwise low',
    },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen (notably from legumes), plus organic matter',
    },
    {
      label: 'Common form',
      value: 'Standing crop biomass incorporated into soil',
    },
    {
      label: 'Key consideration',
      value:
        'Nutrient contribution depends on species, biomass, and growing conditions rather than a fixed grade',
    },
    {
      label: 'Solubility',
      value:
        'Nutrients become available gradually as incorporated biomass decomposes',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'A green manure crop has no single fixed composition; its contribution depends on the species grown, the biomass accumulated before incorporation, and, for legumes, how much atmospheric nitrogen has been fixed through their symbiosis with rhizobia bacteria.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Common species groups',
              description:
                'Legumes (for nitrogen fixation) and non-legume cover crops (for organic matter)',
            },
            {
              term: 'Nitrogen contribution',
              description:
                'Variable; can be substantial from well-nodulated legumes',
            },
            {
              term: 'Incorporation timing',
              description:
                'Typically before or at flowering, before the crop matures',
            },
            {
              term: 'Nutrient release',
              description: 'Gradual, as incorporated biomass decomposes',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'When the green manure crop is a nitrogen-fixing legume, it can contribute meaningfully to the nitrogen supply of a following crop as its residues decompose. Non-legume green manures contribute organic matter and recycle nutrients already present in the soil rather than adding new nitrogen from the atmosphere.',
        },
        {
          type: 'list',
          items: [
            'Legume green manures can add biologically fixed nitrogen to the system',
            'All green manures add fresh organic matter as biomass decomposes',
            'Nutrient release timing depends on the carbon-to-nitrogen ratio of the incorporated material',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Green manuring is used within crop rotations to build soil organic matter, contribute nitrogen ahead of a following crop when a legume is used, suppress weeds through competition, and, in some systems, reduce erosion during the period the green manure crop occupies the ground.',
        },
        {
          type: 'list',
          items: [
            'Adds organic matter and, from legumes, biologically fixed nitrogen',
            'Can suppress weeds through competition during its growth period',
            'Provides ground cover that can reduce erosion before incorporation',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'General practice involves selecting a species suited to the rotation and climate, timing incorporation to balance biomass accumulation against the needs of the following crop, and allowing sufficient time for decomposition before nutrients become available.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Species choice, timing, and nitrogen credit are region-specific',
          text: 'Which green manure species to grow, when to incorporate it, and how much nitrogen credit to assume for a following crop depend on the species, local climate, soil test results, and regional agronomic guidance. AgricultureID does not publish universal nitrogen-credit values; follow local extension recommendations.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Green manuring can reduce reliance on manufactured nitrogen fertilizer when legumes are used effectively, and ground cover during the green manure period can reduce erosion and nutrient runoff compared with bare fallow. Poorly timed incorporation, however, can lead to a temporary nitrogen tie-up (immobilisation) if residues are high in carbon relative to nitrogen.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The carbon-to-nitrogen ratio of the incorporated material affects whether nitrogen is released or temporarily immobilised; this varies by species and growth stage at incorporation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'maize' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation', 'macronutrient'],
  geographicScope:
    'Global overview of green manuring as a practice. Suitable species, timing, and nitrogen contribution vary substantially by climate and cropping system.',
  climateContext:
    'Legume nitrogen fixation and residue decomposition rates both depend on temperature and moisture, so green manure benefits vary across climate zones.',
  limitations: [
    'This entry describes green manuring as a practice; the nitrogen or organic matter contribution of any specific green manure crop is not quantified here.',
    'This is not a species-selection or nitrogen-credit recommendation for any region.',
    'Effectiveness depends on successful legume nodulation and adequate biomass accumulation, both of which are site- and season-specific.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Green manuring and legume nitrogen fixation in cropping systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor:
        'Cover crop and green manure effects on soil nitrogen and organic matter',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Green manure species selection and management guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Green manuring and nutrient management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Green Manure',
    description:
      'Green manure as an organic soil-fertility practice: legume nitrogen fixation, organic matter contribution, general use, and crop-rotation considerations.',
    keywords: [
      'green manure',
      'green manuring',
      'legume nitrogen fixation',
      'cover crop fertility',
    ],
  },
  structuredData: { article: true },
};
