import type { FarmingSystemContent } from '@/types/content';

export const aquaponics: FarmingSystemContent = {
  id: 'system-aquaponics',
  slug: 'aquaponics',
  contentType: 'farming-system',
  title: 'Aquaponics',
  systemClass: 'soilless',
  alternativeNames: ['Aquaponic farming'],
  category: 'Farming system',
  subcategory: 'Soilless system',
  summary:
    'Aquaponics combines recirculating aquaculture (raising fish) with hydroponic plant production in a single integrated system, where fish waste supplies nutrients to plants and the plants help filter water returned to the fish tank.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In an aquaponic system, fish are raised in a tank; waste ammonia they excrete is converted by nitrifying bacteria in a biofilter into nitrate and other forms plants can use; nutrient-rich water then flows to plant grow beds, where plants take up nutrients while helping to filter the water; the filtered water is returned to the fish tank to complete the loop.',
    },
    {
      type: 'paragraph',
      text: "Running the system well requires balancing fish stocking density and feed rate against the biofilter's nitrifying capacity and the plants' nutrient demand. Aquaponics is distinct from standalone hydroponics, which has no fish component, and from standalone recirculating aquaculture, which has no plant component.",
    },
  ],
  keyFacts: [
    {
      label: 'Core loop',
      value:
        'Fish waste, nitrifying bacteria, nutrient solution for plants, and filtered water returned to the fish',
    },
    {
      label: 'Key subsystems',
      value:
        'Fish-rearing tank, biofilter, plant grow bed, and water circulation pump',
    },
    {
      label: 'Common crops',
      value:
        'Leafy greens and other crops with nutrient demands that fish waste can substantially supply',
    },
    {
      label: 'Water use',
      value:
        'Recirculating design generally uses less water than separate soil-based production and pond aquaculture',
    },
    {
      label: 'Management demand',
      value:
        'Requires monitoring water chemistry, including ammonia, nitrite, nitrate, and pH',
    },
    {
      label: 'Scale',
      value:
        'Used in controlled-environment, urban, research, and small commercial settings',
    },
  ],
  sections: [
    {
      id: 'how-aquaponics-works',
      heading: 'How aquaponics works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Fish are fed and excrete ammonia-rich waste into the tank water',
            'Water flows through a biofilter where nitrifying bacteria convert ammonia to nitrite and then nitrate',
            'Nutrient-rich water is delivered to plant grow beds (media beds or floating rafts)',
            'Plant roots take up nutrients and help filter the water further',
            'Filtered water is returned to the fish tank, completing the recirculating loop',
          ],
        },
        {
          type: 'paragraph',
          text: 'This nitrification process is the biological core of the system: without an established, healthy bacterial colony, ammonia can build up to levels harmful to fish.',
        },
      ],
    },
    {
      id: 'system-components',
      heading: 'System components',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Fish tank',
              description:
                'Holds fish and receives their waste as the nutrient source for the system.',
            },
            {
              term: 'Biofilter',
              description:
                'Provides surface area for nitrifying bacteria that convert fish waste into plant-available nutrients.',
            },
            {
              term: 'Grow bed',
              description:
                'The plant-growing area, using media, floating rafts, or other soilless techniques.',
            },
            {
              term: 'Sump and pump',
              description:
                'Circulate water between the fish tank, biofilter, and grow beds to maintain the loop.',
            },
          ],
        },
      ],
    },
    {
      id: 'crop-and-fish-choices',
      heading: 'Crop and fish choices',
      body: [
        {
          type: 'paragraph',
          text: "Crop and fish choices depend on matching nutrient supply and demand and on water-temperature tolerance. Leafy greens are common because their nutrient needs are often well matched to what fish waste supplies; heavier-feeding crops may need supplemental nutrients such as potassium or iron, since fish waste alone does not always meet every crop's full requirement.",
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
            'Recirculating design can use water more efficiently than separate soil-based production and pond aquaculture',
            'Combines two outputs (fish and plants) from a single nutrient and water cycle',
            'Can be operated in controlled indoor or greenhouse environments year-round',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires continuous power for aeration and circulation; equipment failure can quickly harm both fish and plants',
            'Balancing fish stocking, feed rate, and plant nutrient demand requires ongoing monitoring and skill',
            'Not all crops or nutrient needs are well matched to fish-waste-derived nutrients without supplementation',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry makes no yield or profitability claim for aquaponics relative to separate hydroponic or aquaculture systems; outcomes depend on system design, scale, and management.',
        },
      ],
    },
    {
      id: 'where-aquaponics-is-used',
      heading: 'Where aquaponics is used',
      body: [
        {
          type: 'paragraph',
          text: 'Aquaponics is used in controlled-environment and urban agriculture, research settings, education, and a number of small commercial operations. It generally remains a niche approach relative to conventional soil-based and standalone hydroponic production.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'watercress' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'spinach' },
    { type: 'livestock', slug: 'farmed-fish' },
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
  ],
  geographicScope:
    'Used worldwide in controlled environments; system operation is largely independent of outdoor climate, though indoor climate control adds cost.',
  limitations: [
    'Requires continuous power and aeration; system failure risks losses to both fish and plants simultaneously.',
    'Nutrient balance can be difficult to fully match to crop needs without supplementation, and scaling to commercial volumes is more complex than single-system production.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Aquaponics as an integrated aquaculture-hydroponic system',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Controlled-environment and soilless production research',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Aquaponic system design and management guidance',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research context on integrated aquaculture systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Aquaponics',
    description:
      'Aquaponics explained: how recirculating fish and hydroponic plant production work together, key components, and honest trade-offs of the system.',
    keywords: [
      'aquaponics',
      'recirculating aquaculture',
      'hydroponics',
      'soilless farming',
    ],
  },
  structuredData: { article: true },
};
