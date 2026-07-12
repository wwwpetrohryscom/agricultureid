import type { IrrigationMethodContent } from '@/types/content';

export const dripIrrigation: IrrigationMethodContent = {
  id: 'irrigation-drip-irrigation',
  slug: 'drip-irrigation',
  contentType: 'irrigation-method',
  title: 'Drip Irrigation',
  alternativeNames: ['Trickle irrigation', 'Micro-irrigation'],
  category: 'Irrigation method',
  subcategory: 'Localized irrigation',
  methodClass: 'localized',
  summary:
    'Drip irrigation delivers water slowly and directly to the root zone of individual plants or rows through a network of tubing and emitters, minimising evaporation and runoff compared with methods that wet the whole field surface.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Drip (or trickle) irrigation applies water at low flow rates through small emitters set along tubing laid on or below the soil surface, close to plant roots. Rather than flooding or spraying the whole field, it wets only a limited zone around each plant or row, which reduces water lost to evaporation from bare soil between plants and to deep percolation beyond the root zone.',
    },
    {
      type: 'paragraph',
      text: 'Because it can deliver water — and, blended into the water, soluble fertilizer (fertigation) — with fine control over timing and volume, drip irrigation is closely associated with high-value horticultural crops and with production systems such as greenhouses where precise input control is valuable.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Localized irrigation' },
    {
      label: 'Core components',
      value: 'Mainline, submains, laterals (drip lines), and emitters',
    },
    {
      label: 'Typical wetting pattern',
      value:
        'Localized wetting near the plant root zone rather than the whole field surface',
    },
    {
      label: 'Common crops',
      value:
        'Vegetables, orchard and vine crops, and other high-value horticultural crops',
    },
    {
      label: 'Key advantage',
      value:
        'Reduced evaporation and runoff compared with surface or overhead methods',
    },
    {
      label: 'Key requirement',
      value: 'Filtration and maintenance to prevent emitter clogging',
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
            'Water is filtered and, often, pressure-regulated before entering the distribution network',
            'A mainline and submains carry water to individual field sections',
            'Lateral drip lines run along or beneath crop rows, fitted with inline or point-source emitters',
            'Emitters release water slowly at a controlled rate directly to the soil near the plant',
            'Soluble fertilizer can be injected into the system (fertigation) to deliver nutrients with the water',
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
          text: 'Drip irrigation suits row and orchard crops where plants are spaced widely enough to make individual or per-row water delivery practical, and where the value of the crop or the constraints of water supply justify the higher initial investment in tubing and emitters. It is widely used for vegetables, orchard fruit, and vine crops, and is a standard feature of many greenhouse production systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Drip irrigation is generally less suited to closely spaced, broadcast-sown field crops, where per-plant delivery is impractical, though drip tape systems are used for some densely planted crops.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Because water is applied directly near the root zone rather than across the whole field surface, drip irrigation generally achieves higher application efficiency than surface or many sprinkler methods, with less water lost to evaporation from wetted foliage or bare soil and, when well managed, less deep percolation loss.',
        },
        {
          type: 'paragraph',
          text: 'Matching the volume and frequency of drip application to crop water demand — informed by evapotranspiration estimates and soil moisture monitoring — is what realises these efficiency gains in practice; an oversized or poorly scheduled system does not automatically save water.',
        },
      ],
    },
    {
      id: 'environmental-and-economic-aspects',
      heading: 'Environmental and economic aspects',
      body: [
        {
          type: 'paragraph',
          text: 'By limiting wetted area and controlling application volume closely, drip irrigation can help reduce nutrient leaching and runoff compared with methods that wet or flood the whole field, particularly when combined with fertigation to deliver nutrients in smaller, more frequent doses matched to crop uptake.',
        },
        {
          type: 'paragraph',
          text: 'Automation of drip systems (timers and controllers) can reduce labour input for irrigation once installed, though the higher upfront cost of tubing, emitters, and filtration is a factor growers weigh against expected water, nutrient, and labour savings over the system’s working life.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Emitters are prone to clogging from sediment, mineral precipitates, or biological growth, so filtration, water-quality management, and periodic system flushing are routine maintenance requirements. Initial equipment cost per unit area is typically higher than for surface irrigation, though it can be offset by water and, in some systems, labour savings over time.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Design and rates are site-specific',
          text: 'Emitter spacing, flow rate, and operating pressure must be matched to the crop, soil, and water quality; AgricultureID does not publish universal drip-system design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'subsurface-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'grape' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of drip irrigation as used across horticultural and orchard production worldwide. System design and suitability depend on local water quality, crop, and cost factors.',
  climateContext:
    'Drip irrigation is often favoured in water-scarce or drought-prone regions because of its comparatively high application efficiency, though crop water demand still rises with temperature and evapotranspiration.',
  limitations: [
    'This entry describes drip irrigation function and use in general terms; it does not specify emitter spacing, flow rates, or scheduling volumes, which are crop-, soil-, and region-specific.',
    'Efficiency gains depend on proper design, maintenance, and scheduling; a poorly managed drip system does not automatically outperform other methods.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Drip irrigation principles and crop water use',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Micro-irrigation system design and maintenance context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Irrigation management context for horticultural crops',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of localized irrigation in water-use efficiency',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Drip Irrigation',
    description:
      'Drip irrigation explained: how emitters and tubing deliver water directly to the root zone, where it suits, its efficiency, and maintenance needs.',
    keywords: [
      'drip irrigation',
      'trickle irrigation',
      'micro-irrigation',
      'fertigation',
    ],
  },
  structuredData: { article: true },
};
