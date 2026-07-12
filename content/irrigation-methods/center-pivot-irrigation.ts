import type { IrrigationMethodContent } from '@/types/content';

export const centerPivotIrrigation: IrrigationMethodContent = {
  id: 'irrigation-center-pivot-irrigation',
  slug: 'center-pivot-irrigation',
  contentType: 'irrigation-method',
  title: 'Center Pivot Irrigation',
  category: 'Irrigation method',
  subcategory: 'Pressurized irrigation',
  methodClass: 'pressurized',
  summary:
    'Center pivot irrigation uses a long, wheeled sprinkler system that rotates around a fixed central pivot point, automatically irrigating a large circular area with comparatively low labour input, and is a dominant method for large-scale row-crop irrigation in flat to gently rolling terrain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A center pivot system consists of a series of connected, wheeled towers supporting an overhead pipeline fitted with sprinkler heads. The structure pivots around a fixed point connected to the water and, usually, power supply, moving slowly in a circle and irrigating the land it passes over, resulting in the characteristic circular irrigated fields visible from above.',
    },
    {
      type: 'paragraph',
      text: 'Because the machine moves and applies water automatically, center pivots require comparatively little labour to operate once installed, and their capacity to cover large areas has made them a common choice for irrigating row crops on large farms, particularly in regions with flat to gently rolling topography.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Pressurized irrigation' },
    {
      label: 'Core components',
      value:
        'Central pivot point, wheeled towers, overhead pipeline, sprinkler heads',
    },
    {
      label: 'Typical field pattern',
      value:
        'Circular irrigated area within a larger square or rectangular field',
    },
    {
      label: 'Common crops',
      value: 'Maize, wheat, potato, and soybean, among others',
    },
    {
      label: 'Key advantage',
      value: 'Large area coverage with low labour input once installed',
    },
    {
      label: 'Key limitation',
      value:
        'Leaves field corners outside the circular pattern unirrigated unless supplemented',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          items: [
            'Water is supplied under pressure to the pivot point from a well or surface source',
            'The overhead pipeline distributes water to sprinkler heads or drop nozzles along its length',
            'Motorised, wheeled towers move the pipeline slowly around the pivot point',
            'The speed of rotation controls the depth of water applied per pass',
            'A full rotation irrigates the circular area the machine’s length reaches',
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
          text: 'Center pivots suit large, relatively flat to gently sloping fields where a fixed pivot point and long structural span are practical, and they are widely used for maize, wheat, potato, soybean, and other field crops on large-scale farms. Adaptations exist for rougher terrain, but very steep or highly irregular fields are generally less suited to this method.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because the machine follows a fixed circular path, field corners outside the circle are not irrigated by the pivot itself, which is a routine design consideration in field layout.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Center pivots can achieve relatively high and uniform application efficiency compared with surface irrigation, particularly with drop nozzles that release water closer to the canopy or soil surface rather than high overhead, which reduces evaporative and wind-drift losses.',
        },
        {
          type: 'paragraph',
          text: 'As with other pressurized systems, matching application depth and timing to crop water need — using evapotranspiration estimates and soil moisture data — is central to achieving efficient water use rather than simply running the system on a fixed schedule.',
        },
      ],
    },
    {
      id: 'variations-and-related-equipment',
      heading: 'Variations and related equipment',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Corner system',
              description:
                'An articulated extension arm that swings out to irrigate part of the field corners a standard pivot would otherwise miss',
            },
            {
              term: 'Linear-move system',
              description:
                'A related straight-span machine that travels across a rectangular field rather than pivoting, covering corners a circular pivot cannot reach',
            },
            {
              term: 'Drop nozzles (low-energy precision application)',
              description:
                'Nozzles hung close to the crop canopy rather than mounted high on the pipeline, reducing evaporation and wind drift',
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
          text: 'Center pivots require a substantial capital investment and a source capable of supplying continuous pressurised flow, along with ongoing energy costs for pumping. Uneven application can occur near the pivot point (where ground speed is slowest) versus the outer end (where it is fastest) if nozzle output is not correctly matched along the span.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'System design is site-specific',
          text: 'Span length, nozzle package, and operating pressure must be matched to the field, water source, and crop; AgricultureID does not publish universal center-pivot design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'soybean' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of center pivot irrigation as used in large-scale field-crop production worldwide, particularly on flat to gently rolling terrain. Adoption and design vary by region.',
  climateContext:
    'Center pivot scheduling and water demand are influenced by temperature, wind, and evapotranspiration; wind can also affect droplet drift and distribution uniformity.',
  limitations: [
    'This entry describes center pivot function and general use in broad terms; it does not specify span lengths, nozzle packages, or application rates, which are site- and equipment-specific.',
    'Efficiency figures vary with nozzle type, wind conditions, and scheduling practice and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Pressurized irrigation systems and application uniformity',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Center pivot system design and management context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Irrigation management context for field crops',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of mechanised irrigation in large-scale production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Center Pivot Irrigation',
    description:
      'Center pivot irrigation explained: how rotating overhead sprinkler systems cover large circular fields, where it suits, and efficiency factors.',
    keywords: [
      'center pivot irrigation',
      'pivot irrigation',
      'large-scale irrigation',
      'sprinkler system',
    ],
  },
  structuredData: { article: true },
};
