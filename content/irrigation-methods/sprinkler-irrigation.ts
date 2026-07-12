import type { IrrigationMethodContent } from '@/types/content';

export const sprinklerIrrigation: IrrigationMethodContent = {
  id: 'irrigation-sprinkler-irrigation',
  slug: 'sprinkler-irrigation',
  contentType: 'irrigation-method',
  title: 'Sprinkler Irrigation',
  category: 'Irrigation method',
  subcategory: 'Pressurized irrigation',
  methodClass: 'pressurized',
  summary:
    'Sprinkler irrigation applies water under pressure through nozzles that distribute it over the field in a pattern resembling rainfall, offering more even coverage than surface methods on uneven or sloping land and adaptability across many crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sprinkler irrigation pressurises water through a pipe network and releases it through nozzles or sprinkler heads that break the flow into droplets and distribute them over the crop and soil surface, mimicking natural rainfall. This pressurised distribution allows more uniform application over varied terrain than surface methods that rely on gravity flow across the field.',
    },
    {
      type: 'paragraph',
      text: 'Sprinkler systems range from portable, hand-move or solid-set lines to large, self-propelled center-pivot and linear-move machines; center-pivot systems are treated separately as their own method given their distinct design and scale of use.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Pressurized irrigation' },
    {
      label: 'Core components',
      value: 'Pump, mainline and lateral pipes, sprinkler heads or nozzles',
    },
    {
      label: 'Typical wetting pattern',
      value: 'Overhead application resembling rainfall across the field',
    },
    {
      label: 'Common crops',
      value:
        'Cereals, potatoes, forage, and many field and horticultural crops',
    },
    {
      label: 'Key advantage',
      value:
        'More even coverage on uneven or sloping land than surface irrigation',
    },
    {
      label: 'Additional use',
      value: 'Some systems are also used for frost protection or crop cooling',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'A pump draws water from a source and pressurises it into a pipe network',
            'Mainline and lateral pipes carry pressurised water across the field',
            'Sprinkler heads or nozzles release water, breaking it into droplets',
            'Droplets fall over the crop and soil surface in a pattern designed to overlap for even coverage',
            'Application depth and timing are controlled by system operating time and pressure',
          ],
        },
      ],
    },
    {
      id: 'where-it-suits',
      heading: 'Where it suits',
      body: [
        {
          type: 'paragraph',
          text: 'Sprinkler irrigation suits fields with uneven topography or sandy soils where surface (gravity-flow) irrigation is impractical or inefficient, and it is used across a wide range of crops, from cereals and forage to potatoes and many vegetables. Portable and solid-set configurations allow it to be adapted to smaller or irregularly shaped fields.',
        },
        {
          type: 'paragraph',
          text: 'Because it wets foliage as well as soil, sprinkler irrigation is also used for specific secondary purposes in some regions, including frost protection in orchards (using the latent heat released as water freezes on plant surfaces) and crop cooling during periods of heat stress.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Sprinkler application efficiency depends heavily on system design, nozzle uniformity, and weather during operation: wind can distort the spray pattern and increase evaporative loss, particularly with small droplets in hot, dry, or windy conditions. Well-designed and maintained systems can achieve substantially better uniformity than poorly matched or aging equipment.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Scheduling sprinkler irrigation to crop water need — using evapotranspiration estimates and soil moisture information — helps avoid both under- and over-irrigation, regardless of system type.',
        },
      ],
    },
    {
      id: 'system-types-and-configurations',
      heading: 'System types and configurations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Hand-move/portable systems',
              description:
                'Lightweight pipe sections moved manually between sets, suited to smaller areas or lower capital budgets',
            },
            {
              term: 'Solid-set/permanent systems',
              description:
                'Fixed pipe and sprinkler layout left in place for the season, common in orchards and some vegetable systems',
            },
            {
              term: 'Traveling gun',
              description:
                'A single large sprinkler that winds itself across the field on a hose reel',
            },
            {
              term: 'Linear-move system',
              description:
                'A straight, wheeled span that travels across a rectangular field, related to but distinct from a center-pivot',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because sprinkler irrigation wets plant foliage, it can, in some crops and climates, increase humidity within the canopy and raise disease pressure if not managed with attention to timing and canopy drying. Energy costs for pressurising water are also a running cost that varies with pumping requirements and local energy prices.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'System design is site-specific',
          text: 'Nozzle selection, spacing, and operating pressure must be matched to the crop, field layout, and water source; AgricultureID does not publish universal sprinkler design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'drought' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of sprinkler irrigation as used across field and horticultural crops worldwide. System types, energy costs, and adoption vary by region.',
  climateContext:
    'Sprinkler performance and evaporative losses are strongly affected by wind, temperature, and humidity at the time of application; some systems are also used for frost protection in cold conditions.',
  limitations: [
    'This entry describes sprinkler irrigation function and uses in general terms; it does not specify nozzle rates, pressures, or scheduling volumes, which are system-, crop-, and region-specific.',
    'Disease-pressure effects from foliar wetting vary by crop, pathogen, and climate and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Sprinkler irrigation principles and uniformity',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Sprinkler system design and efficiency context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Irrigation management context for field crops',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of pressurized irrigation in agricultural water use',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sprinkler Irrigation',
    description:
      'Sprinkler irrigation explained: how pressurized systems distribute water like rainfall, where it suits, efficiency factors, and frost-protection use.',
    keywords: [
      'sprinkler irrigation',
      'overhead irrigation',
      'irrigation efficiency',
      'frost protection irrigation',
    ],
  },
  structuredData: { article: true },
};
