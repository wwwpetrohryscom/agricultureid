import type { IrrigationMethodContent } from '@/types/content';

export const lateralMoveIrrigation: IrrigationMethodContent = {
  id: 'irrigation-method-lateral-move-irrigation',
  slug: 'lateral-move-irrigation',
  contentType: 'irrigation-method',
  title: 'Lateral-Move Irrigation',
  alternativeNames: ['Linear-move irrigation', 'Linear irrigator'],
  category: 'Irrigation method',
  subcategory: 'Mechanised sprinkler irrigation',
  methodClass: 'pressurized',
  summary:
    'Lateral-move irrigation is a mechanised sprinkler system in which a long, wheeled sprinkler boom travels in a straight line across a rectangular field, applying water evenly as it moves. It is closely related to the center pivot but covers rectangular rather than circular areas.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A lateral-move (or linear-move) irrigator is a long sprinkler lateral supported on a line of self-propelled, wheeled towers. Unlike a center pivot, which rotates about a fixed point, the whole lateral moves in a straight path down or across a field, so it can irrigate rectangular areas uniformly from one end to the other.',
    },
    {
      type: 'paragraph',
      text: 'Water is supplied either from a channel that the machine draws from as it travels or through a flexible hose or drag line connected to a pressurised main. Because every part of the field receives a similar pass of the sprinkler line, lateral-move systems can achieve very uniform application across large, regularly shaped fields.',
    },
  ],
  keyFacts: [
    {
      label: 'Method class',
      value: 'Pressurised (mechanised sprinkler) irrigation',
    },
    {
      label: 'Working principle',
      value:
        'A wheeled sprinkler boom travels in a straight line across the field',
    },
    {
      label: 'Field shape suited',
      value: 'Large, regular rectangular fields with relatively level ground',
    },
    {
      label: 'Relation to center pivot',
      value:
        'Similar hardware but moves linearly rather than rotating about a point',
    },
    {
      label: 'Water supply',
      value:
        'Drawn from an open channel or fed by a flexible hose from a pressurised main',
    },
    {
      label: 'Key advantage',
      value:
        'High and uniform coverage of rectangular areas without leaving unirrigated corners',
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
            'A long sprinkler lateral is carried on a line of motor-driven, wheeled towers',
            'The lateral is fed with pressurised water from a channel or a flexible hose connection',
            'Sprinklers or drop nozzles along the lateral distribute water below and beside it',
            'Guidance keeps the towers aligned as the whole lateral advances in a straight line',
            'The machine travels the length of the field, then is repositioned or reversed for the next irrigation',
          ],
        },
      ],
    },
    {
      id: 'compared-with-center-pivot',
      heading: 'Compared with center pivot',
      body: [
        {
          type: 'paragraph',
          text: 'Lateral-move and center-pivot systems share much of the same tower, drive, and sprinkler technology, but differ in geometry. A center pivot sweeps a circle and leaves the field corners unirrigated unless fitted with extra equipment, whereas a lateral-move machine travels straight and can cover a full rectangle, matching field boundaries more completely.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The trade-off is water supply: a pivot draws from a single fixed centre point, while a lateral-move machine must take water along its whole travel path, typically from a channel or a moving hose connection, which adds operational complexity.',
        },
      ],
    },
    {
      id: 'where-it-suits',
      heading: 'Where it suits',
      body: [
        {
          type: 'paragraph',
          text: 'Lateral-move systems suit large, regularly shaped, relatively level fields where uniform coverage of the whole rectangle is valuable — for example broadacre vegetable, root, and cereal crops. They are commonly used where field layout and a reliable channel or main make straight-line travel practical, and where high application uniformity is a priority.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Lateral-move machines require a substantial capital investment and dependable water delivery along their path, and their straight-line travel needs level, obstacle-free fields. Application depth is governed by travel speed and nozzle configuration, and — as with any sprinkler system — matching applied water to crop demand through scheduling and, ideally, soil-moisture monitoring is what realises efficient water use.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'System sizing, nozzle configuration, and travel speeds are site-specific and depend on soil, crop, and water supply; this entry does not prescribe design values.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'soil-moisture-sensing' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'machinery', slug: 'gps-guidance-system' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of lateral-move irrigation as used in mechanised sprinkler irrigation worldwide. Suitability depends on field shape, terrain, and water supply.',
  climateContext:
    'Lateral-move systems supplement rainfall on large fields; crop water demand and the depth to apply rise with temperature and evapotranspiration.',
  limitations: [
    'This entry describes lateral-move irrigation in general terms; it does not give system sizing, nozzle configurations, or travel speeds, which are site-specific.',
    'Application uniformity and efficiency depend on field conditions, machine setup, and scheduling, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Mechanised sprinkler irrigation methods',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Sprinkler irrigation system design and management',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Irrigation application and scheduling context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Lateral-Move Irrigation',
    description:
      'Lateral-move irrigation explained: how a linear sprinkler boom travels straight across rectangular fields, and how it compares with center pivots.',
    keywords: [
      'lateral-move irrigation',
      'linear-move irrigation',
      'sprinkler irrigation',
      'center pivot',
    ],
  },
  structuredData: { article: true },
};
