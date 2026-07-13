import type { FertilizerContent } from '@/types/content';

export const bloodMeal: FertilizerContent = {
  id: 'fertilizer-blood-meal',
  slug: 'blood-meal',
  contentType: 'fertilizer',
  title: 'Blood meal',
  alternativeNames: ['Dried blood'],
  category: 'Fertilizer',
  subcategory: 'Organic nitrogen fertilizer',
  fertilizerClass: 'organic',
  typicalAnalysis: '~12-0-0',
  summary:
    'Blood meal is a dried, powdered animal-blood product that is one of the most concentrated organic nitrogen fertilizers, releasing nitrogen relatively quickly for an organic source and widely used in organic production to correct nitrogen deficiency.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Blood meal is produced by drying and grinding animal blood, a by-product of meat processing, into a fine powder. It typically analyses around 12% nitrogen, making it one of the highest-nitrogen organic fertilizers available.',
    },
    {
      type: 'paragraph',
      text: 'Its nitrogen is held in proteins that soil microbes mineralise to plant-available ammonium and nitrate. Because much of this nitrogen is readily broken down, blood meal acts faster than many other organic sources, but it also carries a real risk of scorching plants if over-applied.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Concentrated organic nitrogen fertilizer',
    },
    { label: 'Typical analysis', value: 'About 12-0-0' },
    { label: 'Nutrients supplied', value: 'Nitrogen' },
    { label: 'Common form', value: 'Dry powder or granule' },
    {
      label: 'Key consideration',
      value: 'Fast-acting for an organic source; can scorch if over-applied',
    },
    {
      label: 'Release pattern',
      value: 'Relatively quick as proteins mineralise',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Blood meal is dried animal blood, composed largely of protein. Its high protein content is the source of its nitrogen, typically around 12%, with little phosphorus or potassium, so it functions essentially as a straight organic nitrogen source.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Source',
              description: 'Dried, ground animal blood from meat processing',
            },
            {
              term: 'Nitrogen content',
              description: 'About 12% total nitrogen, held in protein',
            },
            {
              term: 'Other nutrients',
              description: 'Little phosphorus or potassium',
            },
            {
              term: 'Release pattern',
              description:
                'Faster than most organic nitrogen sources as protein mineralises',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied and behaviour in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Blood meal supplies nitrogen, released as soil microbes break down its proteins to ammonium and then nitrate. Because a large fraction is easily mineralised, availability is comparatively rapid for an organic material, and the released nitrate is subject to the same leaching risk as mineral nitrogen.',
        },
        {
          type: 'list',
          items: [
            'Protein nitrogen is mineralised to ammonium and nitrate by soil microbes',
            'Availability is relatively quick compared with slower organic sources',
            'Supplies essentially no phosphorus or potassium',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Blood meal is used in organic systems to boost nitrogen for leafy and heavy-feeding crops or to correct visible nitrogen deficiency. Some growers also value its reputation for deterring certain herbivores, though it can conversely attract others, so this effect is inconsistent.',
        },
        {
          type: 'list',
          items: [
            'Accepted as an input in many organic farming standards',
            'Suited to nitrogen-hungry, leafy crops and quick corrective feeding',
            'Should be worked into soil and not concentrated against roots or seed',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are crop- and region-specific',
          text: 'The right rate and timing depend on the crop, soil nitrogen status, and local guidance, including organic certification standards. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Because it is concentrated and fast-releasing, over-application can burn roots and seedlings and can drive excessive vegetative growth. Sourcing of animal by-products is subject to biosecurity rules that vary by country, and the powder can attract scavenging animals to treated ground.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Blood meal is concentrated enough to scorch plants if over-applied or placed against roots. Availability and sourcing of animal by-products are subject to biosecurity regulation that varies by country; check local rules before use.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'feather-meal' },
    { type: 'fertilizer', slug: 'bone-meal' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'spinach' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of blood meal as an organic nitrogen fertilizer used mainly in organic and horticultural production. Sourcing rules for animal by-products vary by country.',
  climateContext:
    'Warmer, more biologically active soils speed the mineralisation of blood meal’s protein nitrogen, increasing its rate of nitrogen release.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Its concentrated, fast-releasing nitrogen makes over-application and plant scorch a real risk.',
    'Sourcing regulations for animal by-products vary by country and are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Blood meal typically analyses around 12% nitrogen, making it one of the most concentrated organic nitrogen fertilizers.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance on organic nitrogen sources describes blood meal nitrogen content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance describes organic nitrogen mineralisation from animal-based amendments.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Organic nitrogen fertilizer sources' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Blood meal composition and organic nitrogen management',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrogen mineralisation from organic amendments',
    },
    { sourceId: 'ahdb', citedFor: 'Organic nutrient management context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Blood Meal Fertilizer',
    description:
      'Blood meal (dried blood): one of the most concentrated organic nitrogen fertilizers, its fast nitrogen release, organic use, and the risk of scorch.',
    keywords: [
      'blood meal fertilizer',
      'dried blood fertilizer',
      'organic nitrogen fertilizer',
      'high nitrogen organic',
    ],
  },
  structuredData: { article: true },
};
