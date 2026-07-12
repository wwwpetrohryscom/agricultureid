import type { FarmingSystemContent } from '@/types/content';

export const verticalFarming: FarmingSystemContent = {
  id: 'system-vertical-farming',
  slug: 'vertical-farming',
  contentType: 'farming-system',
  title: 'Vertical Farming',
  systemClass: 'soilless',
  alternativeNames: ['Indoor vertical farming', 'Plant factory'],
  category: 'Farming system',
  subcategory: 'Soilless system',
  summary:
    'Vertical farming grows crops in stacked layers within a fully controlled indoor environment, typically using soilless growing methods and artificial lighting to maximize production per unit of floor area.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vertical farming grows crops in vertically stacked layers or racks inside a building, almost always using hydroponic, aeroponic, or similar soilless nutrient delivery, since soil would be impractical to stack and manage at scale. Because upper and lower layers block natural sunlight from reaching most of the crop, vertical farms rely on artificial lighting — commonly LED — tuned to the light needs of the crop being grown.',
    },
    {
      type: 'paragraph',
      text: 'The approach aims to maximize yield per unit of floor area and to enable production close to urban markets, largely independent of outdoor climate and season. At present, commercial vertical farming is concentrated on a narrow range of fast-growing, low-profile crops — chiefly leafy greens, herbs, and some berries — rather than staple grain, oilseed, or tree crops.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Crops grown in vertically stacked layers in an indoor, controlled environment',
    },
    {
      label: 'Growing method',
      value:
        'Almost always soilless — hydroponic, aeroponic, or similar nutrient delivery',
    },
    {
      label: 'Lighting',
      value:
        'Relies on artificial lighting, commonly LED, since natural light cannot reach all layers',
    },
    {
      label: 'Typical crops',
      value:
        'Leafy greens, herbs, and some berries; a limited range compared with field agriculture',
    },
    {
      label: 'Location',
      value:
        'Often sited near urban markets, in warehouses or purpose-built facilities',
    },
    {
      label: 'Energy use',
      value:
        'Lighting and climate control are typically the largest operating cost',
    },
  ],
  sections: [
    {
      id: 'what-vertical-farming-is',
      heading: 'What vertical farming is',
      body: [
        {
          type: 'paragraph',
          text: 'Vertical farming is defined by growing crops in multiple stacked layers within an enclosed, artificially lit space, rather than in a single horizontal plane exposed to natural sunlight. This distinguishes it from most greenhouse production, which is climate-controlled but still relies on natural light and typically grows in a single horizontal layer.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Stacked layer / rack system',
              description:
                'Growing infrastructure that arranges crops in multiple horizontal tiers to increase production per floor area.',
            },
            {
              term: 'Plant factory',
              description:
                'A term sometimes used for fully enclosed, artificially lit vertical-farming facilities.',
            },
            {
              term: 'Light recipe',
              description:
                'A defined lighting spectrum, intensity, and photoperiod tuned to a specific crop’s growth stage.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'paragraph',
          text: 'A vertical farm typically combines racking or shelving to stack growing layers, LED lighting tuned to the crop’s needs, a recirculating hydroponic or aeroponic nutrient-delivery system, and climate and carbon dioxide control, with sensors and automation used to monitor and adjust conditions across many layers simultaneously.',
        },
        {
          type: 'list',
          items: [
            'Racking or shelving to stack multiple growing layers',
            'LED lighting tuned to crop light and photoperiod requirements',
            'Recirculating hydroponic or aeroponic nutrient delivery',
            'Climate, humidity, and carbon dioxide control',
            'Sensors and automation to monitor conditions across layers',
          ],
        },
      ],
    },
    {
      id: 'crop-and-space-considerations',
      heading: 'Crop and space considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Only certain crops suit stacked, artificially lit production economically: fast-cycling, low-profile, high-value crops such as leafy greens and herbs fit well within shallow layer spacing and short growth cycles, while tall or long-season crops such as grain, oilseed, or tree crops are not practical to grow this way at commercial scale.',
        },
        {
          type: 'table',
          caption: 'Crop-suitability considerations for vertical farming',
          columns: ['Consideration', 'Why it matters'],
          rows: [
            [
              'Plant height / growth habit',
              'Low, compact plants fit within shallow layer spacing',
            ],
            [
              'Crop cycle length',
              'Short cycles increase turnover and production per layer per year',
            ],
            [
              'Light requirement',
              'Lower-light crops reduce lighting energy cost relative to output',
            ],
            [
              'Market value per unit weight',
              'Higher-value crops help offset the cost of artificial lighting and infrastructure',
            ],
          ],
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
            'Very high potential yield per unit of floor area for suited crops',
            'Production largely independent of outdoor weather and season',
            'Can shorten transport distance to urban consumers',
            'Enclosed environment allows precise control that can reduce pesticide use',
          ],
        },
        {
          type: 'list',
          items: [
            'High energy use for lighting and climate control',
            'High capital cost for facilities and equipment',
            'Commercially restricted to a narrow set of crop types',
            'Sensitive to equipment or power failure across an enclosed system',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not claim vertical farming is a universal replacement for field or greenhouse production. It is not currently used for staple crops such as cereals, and energy, cost, and environmental trade-offs vary by facility design and local electricity sources.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Vertical farms are concentrated in and around cities, often in warehouses or purpose-built facilities, and are more established in regions with reliable electricity supply, high land or transport costs, or challenging outdoor growing climates. They remain a small share of overall horticultural production globally.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
  ],
  glossaryTerms: ['agronomy', 'yield'],
  geographicScope:
    'Vertical farms operate worldwide, most often in or near cities, with economic viability depending strongly on local electricity costs, land prices, and demand for the crops grown.',
  climateContext:
    'Because the growing environment is fully enclosed and artificially controlled, outdoor climate mainly affects the energy needed to maintain indoor conditions rather than the crop directly.',
  limitations: [
    'Vertical farming technology and scale vary widely between operations; this entry describes common principles rather than any single facility design.',
    'Energy use, cost, and environmental trade-offs depend on local electricity sources and prices, climate, and facility design, so no universal figures are given.',
    'The crop range suited to vertical farming is currently narrow; this entry does not suggest it can replace field production of staple crops.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Controlled-environment and urban agriculture overview',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Indoor and controlled-environment crop production research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Indoor and vertical growing system guidance',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Resource-use context for controlled-environment agriculture',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Vertical Farming',
    description:
      'Vertical farming explained: stacked-layer indoor growing, LED lighting, crop suitability, and honest benefits and trade-offs versus other systems.',
    keywords: [
      'vertical farming',
      'indoor farming',
      'plant factory',
      'controlled-environment agriculture',
    ],
  },
  structuredData: { article: true },
};
