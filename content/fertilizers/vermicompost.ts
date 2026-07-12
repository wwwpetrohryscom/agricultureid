import type { FertilizerContent } from '@/types/content';

export const vermicompost: FertilizerContent = {
  id: 'fertilizer-vermicompost',
  slug: 'vermicompost',
  contentType: 'fertilizer',
  title: 'Vermicompost',
  alternativeNames: ['Worm compost', 'Vermicast'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable, low analysis — generally a few percent or less each of N, P₂O₅, and K₂O, with nutrients in more readily available forms than raw feedstock',
  summary:
    'Vermicompost is organic matter processed by earthworms into a finely textured, biologically active material, typically with somewhat more readily available nutrients and a richer microbial community than conventional thermophilic compost.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vermicompost is produced when earthworms, commonly species such as Eisenia fetida, consume organic feedstock and excrete it as finely textured castings. The process occurs at ambient rather than elevated temperatures and typically yields a material with a notably fine, uniform structure.',
    },
    {
      type: 'paragraph',
      text: 'Because the feedstock passes through the worm digestive system, vermicompost often has a higher proportion of nutrients in plant-available forms, along with a diverse and active microbial population, compared with the original raw material or with some conventional compost.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Organic amendment produced by earthworm processing',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable, low analysis; nutrients tend to be more readily available than in raw feedstock',
    },
    {
      label: 'Nutrients supplied',
      value:
        'Nitrogen, phosphorus, and potassium, plus microbial and organic matter benefits',
    },
    { label: 'Common form', value: 'Fine, uniform, crumbly solid' },
    {
      label: 'Key consideration',
      value:
        'Quality and nutrient content depend on feedstock and processing conditions',
    },
    {
      label: 'Solubility',
      value: 'Contains a mix of soluble and organically bound nutrients',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Vermicompost composition depends on the organic feedstock fed to the worms and on the conditions of the vermicomposting process. Its physical structure is typically finer and more uniform than conventional compost, and its nutrient concentrations, while still low relative to mineral fertilizers, are often somewhat higher in readily available forms.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Nutrient content',
              description: 'Low and variable; depends on feedstock and process',
            },
            {
              term: 'Physical structure',
              description: 'Fine, crumbly, and uniform castings',
            },
            {
              term: 'Microbial content',
              description: 'Typically high and diverse',
            },
            {
              term: 'Nutrient forms',
              description:
                'A relatively higher share in readily plant-available forms than raw feedstock',
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
          text: 'Vermicompost supplies nitrogen, phosphorus, and potassium at low, variable concentrations, along with a diverse microbial community and readily available forms of some nutrients resulting from processing by earthworms.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen, phosphorus, and potassium are present at low concentrations, similar in order of magnitude to other composts',
            'A relatively higher proportion of some nutrients may be in readily available form',
            'Contributes beneficial soil microorganisms along with organic matter',
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
          text: 'Vermicompost is used in vegetable, horticultural, and nursery production, and in home and community gardening, where its fine texture, relatively available nutrients, and biological activity are valued for supporting plant establishment and soil health.',
        },
        {
          type: 'list',
          items: [
            'Fine, uniform texture suits potting mixes, seedling production, and horticultural use',
            'Contributes a diverse soil microbial community',
            'Supports soil organic matter and structure similarly to other composts',
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
          text: 'As with other organic amendments, vermicompost’s nutrient content and release should be considered as part of an overall nutrient budget rather than assumed to match any fixed analysis, since feedstock and processing vary between producers and batches.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and timing are batch- and region-specific',
          text: 'The appropriate application rate and timing depend on the specific vermicompost’s nutrient content, the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal application rates; follow soil and product testing and regional guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Vermicompost generally carries lower risk of rapid nutrient loss than soluble mineral fertilizers, given its organic nutrient forms, but as with other organic amendments, excessive or poorly timed application can still contribute to nutrient runoff or leaching.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Feedstock quality affects vermicompost safety and nutrient content; sourcing from feedstocks free of contaminants and from a tested supply reduces risk.',
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
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'spinach' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-microorganisms' },
  ],
  glossaryTerms: ['macronutrient', 'crop-rotation'],
  geographicScope:
    'Global overview of vermicompost as an organic amendment. Production scale, feedstocks, and use vary from small-scale gardening to commercial horticultural operations across regions.',
  climateContext:
    'Vermicomposting proceeds within a moderate temperature range favourable to the worms involved, distinguishing it from the higher-temperature phase of conventional thermophilic composting.',
  limitations: [
    'This entry describes vermicompost as a category; nutrient content varies by feedstock and process and is not quantified for any specific product.',
    'This is not an application rate recommendation for any crop or region.',
    'Claims of superiority over conventional compost vary by study and context and are not generalised here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Organic amendments and vermicomposting practice',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil organic amendment effects on soil properties',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Vermicomposting and compost quality guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Organic amendment nutrient management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Vermicompost',
    description:
      'Vermicompost as an organic fertilizer: earthworm processing, composition, available nutrient forms, microbial benefits, and general horticultural use.',
    keywords: [
      'vermicompost',
      'worm compost fertilizer',
      'organic fertilizer',
      'vermicast',
    ],
  },
  structuredData: { article: true },
};
