import type { IrrigationMethodContent } from '@/types/content';

export const subsurfaceIrrigation: IrrigationMethodContent = {
  id: 'irrigation-subsurface-irrigation',
  slug: 'subsurface-irrigation',
  contentType: 'irrigation-method',
  title: 'Subsurface Irrigation',
  alternativeNames: ['Subsurface drip irrigation (SDI)'],
  category: 'Irrigation method',
  subcategory: 'Localized irrigation',
  methodClass: 'localized',
  summary:
    'Subsurface irrigation delivers water below the soil surface, most commonly through buried drip tubing, so water reaches the root zone directly while the surface stays dry, reducing evaporation and interference with field operations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Subsurface irrigation places the water-delivery system beneath the soil surface rather than on top of it. The most common modern form is subsurface drip irrigation (SDI), which buries drip tubing and emitters at a shallow depth so water is released directly into the root zone from below.',
    },
    {
      type: 'paragraph',
      text: 'Because the soil surface itself remains largely dry, subsurface irrigation reduces direct soil-surface evaporation compared with methods that wet the surface, and it can allow field traffic and other operations to continue without disturbing surface-laid tubing.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Localized irrigation' },
    {
      label: 'Core components',
      value: 'Buried mainline and lateral tubing with inline emitters',
    },
    {
      label: 'Typical burial depth',
      value: 'Shallow, generally within the root zone; depth is site-specific',
    },
    {
      label: 'Common crops',
      value: 'Row crops such as maize and cotton, and some perennial crops',
    },
    {
      label: 'Key advantage',
      value:
        'Reduced surface evaporation and no surface tubing to interfere with field operations',
    },
    {
      label: 'Key requirement',
      value:
        'Careful filtration and monitoring, since buried emitters are harder to inspect',
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
            'Filtered, pressure-regulated water is fed into buried mainline and lateral tubing',
            'Inline emitters spaced along the buried laterals release water slowly at a controlled rate',
            'Water moves through the soil to wet a zone around the buried line, reaching nearby roots',
            'The surface generally remains dry, in contrast to surface-laid drip or overhead methods',
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
          text: 'Subsurface drip irrigation is used for a range of row crops, including maize and cotton, and for some perennial and horticultural plantings, particularly where reducing surface evaporation, freeing the surface for other field traffic, or extending equipment life by avoiding surface exposure to sunlight and machinery is valuable.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Suitability depends on soil type: water movement from a buried emitter differs between coarse sandy soils and finer-textured soils, which affects how lines are spaced and managed.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Because water is placed at or near the root zone with a dry soil surface above, subsurface drip irrigation can achieve high application efficiency, with generally lower direct evaporation loss than surface or overhead wetting. As with any localized system, the actual efficiency achieved depends on correct design, scheduling to crop water need, and system maintenance.',
        },
      ],
    },
    {
      id: 'environmental-and-economic-aspects',
      heading: 'Environmental and economic aspects',
      body: [
        {
          type: 'paragraph',
          text: 'With the soil surface left dry, subsurface drip irrigation can reduce direct evaporation loss and, by delivering water and fertigated nutrients close to the root zone in controlled doses, can support more efficient nutrient use than broader surface wetting.',
        },
        {
          type: 'paragraph',
          text: 'Keeping the surface dry also means field traffic, cultivation, and harvest operations can proceed without disturbing tubing that would otherwise be exposed on the surface, which can extend the system’s working life relative to surface-laid drip lines.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because the tubing is buried, leaks, clogging, or root intrusion into emitters can be harder to detect than with surface drip systems, making water-quality management, filtration, and periodic system checks (such as flow monitoring) particularly important. Installation also requires specialised equipment to bury tubing at a consistent depth, and repairs generally require excavation.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Design is site-specific',
          text: 'Burial depth, lateral spacing, and emitter flow rate must be matched to soil type, crop rooting depth, and water quality; AgricultureID does not publish universal subsurface-irrigation design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of subsurface (buried) irrigation, principally subsurface drip systems, as used across row-crop and horticultural production. Design and adoption vary by region, soil, and crop.',
  limitations: [
    'This entry describes subsurface irrigation function and use in general terms; it does not specify burial depths, lateral spacing, or flow rates, which are soil- and crop-specific.',
    'Leak and clog detection challenges vary with system design and maintenance practice and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Subsurface and localized irrigation principles',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Subsurface drip irrigation design and maintenance context',
    },
    { sourceId: 'ahdb', citedFor: 'Irrigation management context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of localized irrigation in water-use efficiency',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Subsurface Irrigation',
    description:
      'Subsurface irrigation explained: how buried drip tubing delivers water to the root zone, where it suits, efficiency, and maintenance challenges.',
    keywords: [
      'subsurface irrigation',
      'subsurface drip irrigation',
      'buried drip tubing',
      'SDI irrigation',
    ],
  },
  structuredData: { article: true },
};
