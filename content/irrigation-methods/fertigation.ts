import type { IrrigationMethodContent } from '@/types/content';

export const fertigation: IrrigationMethodContent = {
  id: 'irrigation-fertigation',
  slug: 'fertigation',
  contentType: 'irrigation-method',
  title: 'Fertigation',
  methodClass: 'management',
  alternativeNames: ['Fertilizer irrigation'],
  category: 'Irrigation method',
  subcategory: 'Water management strategy',
  summary:
    'Fertigation delivers soluble fertilizer to crops by injecting it into an irrigation system, applying nutrients together with water in smaller, more frequent doses timed to crop demand rather than as separate soil applications.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An injector pump or venturi injector meters soluble fertilizer into the irrigation line, most commonly paired with drip or micro-irrigation systems, where the localized wetted zone concentrates both water and nutrients near the root zone.',
    },
    {
      type: 'paragraph',
      text: "Fertigation enables nutrient applications to be split into smaller, more frequent doses matched to the crop's uptake pattern, rather than relying on a few large soil-applied doses. It requires fertilizer that is fully soluble and compatible with the water source and equipment, and careful management to avoid clogging or nutrient loss through leaching if over-applied.",
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Soluble fertilizer injected into an irrigation line and applied together with irrigation water',
    },
    {
      label: 'Common pairing',
      value:
        'Most often used with drip or micro-irrigation systems that concentrate water near the root zone',
    },
    {
      label: 'Core equipment',
      value:
        'Injector pump or venturi injector, mixing or holding tank, and filtration to prevent clogging',
    },
    {
      label: 'Key advantage',
      value:
        'Allows nutrient timing to be split into smaller, more frequent doses matched to crop demand',
    },
    {
      label: 'Fertilizer requirement',
      value:
        'Requires fully water-soluble fertilizer compatible with the water source and equipment',
    },
    {
      label: 'Risk',
      value:
        'Over-application can still leach nutrients beyond the root zone despite more precise delivery',
    },
  ],
  sections: [
    {
      id: 'how-fertigation-works',
      heading: 'How fertigation works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Soluble fertilizer is dissolved or metered into a mixing or holding tank',
            'An injector meters the fertilizer solution into the irrigation line at a set rate',
            'The nutrient-and-water mixture is distributed through the same emitters used for irrigation',
            'Nutrients are delivered close to the crop root zone alongside irrigation water',
            "Application timing and volume are adjusted to match the crop's nutrient uptake pattern",
          ],
        },
      ],
    },
    {
      id: 'why-it-is-used',
      heading: 'Why it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Fertigation allows nutrient timing benefits that are difficult to achieve with a small number of soil-applied doses, particularly for high-value horticultural crops with well-understood nutrient uptake curves.',
        },
        {
          type: 'list',
          items: [
            'Vegetables grown under drip or micro-irrigation',
            'Orchard and vine crops with established irrigation infrastructure',
            'Greenhouse production systems with precise nutrient control',
          ],
        },
      ],
    },
    {
      id: 'equipment-and-compatibility',
      heading: 'Equipment and compatibility',
      body: [
        {
          type: 'table',
          caption: 'Key considerations for fertigation equipment',
          columns: ['Consideration', 'Why it matters'],
          rows: [
            [
              'Fertilizer solubility',
              'Poorly soluble products can clog injectors, filters, or emitters',
            ],
            [
              'Water quality',
              'Water chemistry can cause certain fertilizer combinations to precipitate',
            ],
            [
              'Filtration',
              'Prevents particulates from blocking emitters downstream of injection',
            ],
            [
              'Injector calibration',
              'Ensures the intended nutrient concentration is actually delivered',
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
            'Allows precise timing of nutrient delivery matched to crop demand',
            'Reduces the labor associated with separate soil-applied fertilizer passes',
            'Can improve nutrient-use efficiency when doses are well matched to uptake',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires compatible, fully soluble fertilizer and reliable injection equipment',
            'Over-application can still leach nutrients beyond the root zone',
            'Adds equipment cost and maintenance requirements to the irrigation system',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'No universal nutrient program is given here; rates and timing are crop-, soil-, and region-specific.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Monitoring water quality and pH helps avoid precipitate formation that can clog emitters. Backflow-prevention devices are also a standard requirement to protect the broader water supply from contamination by injected fertilizer.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'potassium-nitrate' },
    { type: 'fertilizer', slug: 'calcium-nitrate' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'crop', slug: 'tomato' },
  ],
  geographicScope:
    'Used across horticultural, orchard, and greenhouse production worldwide, most commonly paired with drip or micro-irrigation infrastructure.',
  limitations: [
    'This entry describes fertigation function and use generally; it does not give nutrient rates or injection schedules, which are crop-, soil-, and region-specific.',
    'Requires backflow prevention and water-quality management not detailed in this entry.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Fertigation and combined water-nutrient management',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Fertilizer solubility and nutrient delivery context',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Irrigation and nutrient management guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Fertigation practice for horticultural crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fertigation',
    description:
      'Fertigation explained: delivering soluble fertilizer through irrigation systems, common equipment, benefits, and water-quality considerations.',
    keywords: [
      'fertigation',
      'fertilizer irrigation',
      'drip irrigation',
      'nutrient management',
    ],
  },
  structuredData: { article: true },
};
