import type { FarmingSystemContent } from '@/types/content';

export const hydroponics: FarmingSystemContent = {
  id: 'system-hydroponics',
  slug: 'hydroponics',
  contentType: 'farming-system',
  title: 'Hydroponics',
  systemClass: 'soilless',
  alternativeNames: ['Soilless culture', 'Hydroponic growing'],
  category: 'Farming system',
  subcategory: 'Soilless system',
  summary:
    'Hydroponics grows plants without soil, supplying roots directly with a nutrient solution in water or an inert growing medium, typically within a greenhouse or other controlled-environment structure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hydroponics is a method of growing plants without soil, in which roots are supported by an inert medium — such as rockwool, perlite, or coco coir — or suspended directly in a circulating nutrient solution, and receive nutrients dissolved in irrigation water rather than mineralized from soil organic matter.',
    },
    {
      type: 'paragraph',
      text: 'Hydroponic systems are most often paired with a greenhouse or indoor structure that controls light, temperature, and humidity, and are used commercially mainly for a limited range of high-value crops — leafy greens, tomatoes, cucumbers, peppers, and strawberries among them. Hydroponics is distinct from soil-based protected cultivation, though the two are frequently combined within the same greenhouse.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Plants grown without soil, roots supplied via a nutrient solution',
    },
    {
      label: 'Common systems',
      value:
        'Nutrient film technique, deep water culture, media-based/drip, aeroponics',
    },
    {
      label: 'Typical crops',
      value: 'Leafy greens, tomatoes, cucumbers, peppers, strawberries',
    },
    {
      label: 'Environment',
      value:
        'Usually paired with a greenhouse or indoor controlled-environment structure',
    },
    {
      label: 'Water use',
      value:
        'Recirculating systems can reduce water use versus open-field irrigation, though this depends on system design',
    },
    {
      label: 'Nutrient supply',
      value:
        'Delivered as a fully dissolved solution requiring regular monitoring and adjustment',
    },
  ],
  sections: [
    {
      id: 'what-hydroponics-is',
      heading: 'What hydroponics is',
      body: [
        {
          type: 'paragraph',
          text: 'In hydroponic production, the growing medium — if used at all — serves only to anchor roots and hold moisture; it does not supply nutrients the way soil does. All plant nutrients are dissolved in irrigation water and delivered directly to the root zone in a formulated nutrient solution.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Nutrient solution',
              description:
                'Irrigation water formulated with dissolved plant nutrients, replacing soil as the nutrient source.',
            },
            {
              term: 'Growing medium',
              description:
                'An inert material such as rockwool, perlite, or coco coir that anchors roots without supplying nutrients.',
            },
            {
              term: 'Recirculating system',
              description:
                'A hydroponic setup that captures and reuses unabsorbed nutrient solution rather than discharging it.',
            },
          ],
        },
      ],
    },
    {
      id: 'common-hydroponic-systems',
      heading: 'Common hydroponic systems',
      body: [
        {
          type: 'table',
          caption: 'Common hydroponic system types',
          columns: ['System', 'How it works'],
          rows: [
            [
              'Nutrient film technique (NFT)',
              'A thin, continuously flowing film of nutrient solution passes over bare roots in a sloped channel',
            ],
            [
              'Deep water culture (DWC)',
              'Roots are suspended directly in an aerated nutrient-solution reservoir',
            ],
            [
              'Media-based / drip',
              'Plants grow in an inert medium irrigated by drip emitters delivering nutrient solution',
            ],
            [
              'Aeroponics',
              'Roots hang in air and are periodically misted with nutrient solution',
            ],
          ],
        },
      ],
    },
    {
      id: 'nutrient-and-water-management',
      heading: 'Nutrient and water management',
      body: [
        {
          type: 'paragraph',
          text: 'Because there is no soil to buffer or supply nutrients, the grower must formulate and continually manage a complete nutrient solution — covering nitrogen, phosphorus, potassium, and micronutrients — and monitor solution pH and electrical conductivity (EC) to keep nutrients available and avoid toxicity or deficiency.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Because there is no soil to buffer errors, nutrient-solution imbalances, pH drift, or equipment failure can affect plants quickly. Regular monitoring of pH and EC, and reliable backup for pumps and aeration, are routine parts of hydroponic management.',
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Recirculating systems can use water more efficiently than open-field irrigation for the same crop',
            'Avoids soil-borne pests, diseases, and weeds associated with field soil',
            'Enables precise, adjustable nutrient control',
            'Can support year-round production when paired with climate control',
          ],
        },
        {
          type: 'list',
          items: [
            'Higher capital cost for infrastructure than soil-based production',
            'Ongoing energy use for pumps, aeration, and often supplemental lighting or climate control',
            'Requires technical skill and regular monitoring of nutrient solution and equipment',
            'Vulnerable to rapid impact from system or power failure',
            'Commercially limited mainly to a narrow range of high-value crops',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not claim hydroponics is universally more efficient, sustainable, or profitable than soil-based production. Resource-use and cost comparisons depend heavily on system design, crop, climate, and local energy and water prices.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where hydroponics is used',
      body: [
        {
          type: 'paragraph',
          text: 'Hydroponics is used in commercial greenhouse operations producing leafy greens, tomatoes, and other horticultural crops, in urban and peri-urban production close to consumers, and in research and educational settings. It remains uncommon for staple field crops such as cereals or pulses, which are not commercially grown hydroponically at scale.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
  ],
  glossaryTerms: ['agronomy', 'yield'],
  geographicScope:
    'Hydroponic systems are used worldwide, from small-scale and research setups to large commercial operations, most often within greenhouses or indoor controlled environments.',
  climateContext:
    'Because hydroponic systems are usually paired with a controlled or semi-controlled structure, ambient climate mainly affects the energy needed for heating, cooling, or lighting rather than the crop directly.',
  limitations: [
    'This entry describes hydroponics in general terms; specific system design, crop suitability, and nutrient-solution formulation vary by operation and are not detailed here.',
    'Water- and resource-use comparisons with soil-based production depend heavily on system type, climate control, and crop, so no single efficiency figure applies universally.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Soilless and controlled-environment production overview',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Hydroponic and controlled-environment crop research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Greenhouse hydroponic vegetable production guidance',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Water-use efficiency in controlled-environment production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Hydroponics',
    description:
      'Hydroponics explained: how soilless nutrient-solution systems work, common system types, nutrient and water management, and honest trade-offs.',
    keywords: [
      'hydroponics',
      'soilless growing',
      'nutrient solution',
      'controlled-environment agriculture',
    ],
  },
  structuredData: { article: true },
};
