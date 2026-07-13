import type { IrrigationMethodContent } from '@/types/content';

export const basinIrrigation: IrrigationMethodContent = {
  id: 'irrigation-method-basin-irrigation',
  slug: 'basin-irrigation',
  contentType: 'irrigation-method',
  title: 'Basin Irrigation',
  alternativeNames: ['Level-basin irrigation', 'Check basin irrigation'],
  category: 'Irrigation method',
  subcategory: 'Surface irrigation',
  methodClass: 'surface',
  summary:
    'Basin irrigation applies water to level, bunded plots that are flooded and hold the water until it infiltrates the soil. It is the simplest surface method and is widely used for rice paddies and for orchards on level land.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In basin irrigation the field is divided into level plots surrounded by low earth ridges (bunds or checks). Water is turned into each basin and held there as a shallow layer until it soaks into the soil, rather than flowing continuously across the surface. Because the basin is level and enclosed, water spreads over the whole area and infiltrates fairly uniformly.',
    },
    {
      type: 'paragraph',
      text: 'It is the oldest and simplest form of surface irrigation and remains very widely practised, most notably for flooded rice, where a ponded water layer is part of the cropping system, and for basin-flooded orchards and some field crops on level ground. Good land levelling is central to even water distribution.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Surface irrigation' },
    {
      label: 'Working principle',
      value:
        'Level bunded basins are flooded and hold water until it infiltrates',
    },
    {
      label: 'Best suited land',
      value: 'Level or precisely levelled fields with medium-to-heavy soils',
    },
    {
      label: 'Classic use',
      value:
        'Flooded rice paddies, basin-irrigated orchards, and some cereals and forages',
    },
    {
      label: 'Key requirement',
      value:
        'Accurate land levelling for uniform water spread and infiltration',
    },
    {
      label: 'Main trade-off',
      value:
        'Simple and low-cost but can lose water to deep percolation and evaporation',
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
            'The field is levelled and divided into basins enclosed by low bunds',
            'Water is delivered to each basin from a channel, pipe, or field ditch',
            'The basin fills to a shallow depth and the inflow is then stopped',
            'Ponded water infiltrates into the soil across the whole basin area',
            'For flooded rice, a water layer is deliberately maintained rather than allowed to fully drain',
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
          text: 'Basin irrigation suits land that is level or can be levelled, and soils of medium to heavy texture that hold water well. Heavier soils such as clays and vertisols retain the ponded water rather than losing it rapidly downward, which makes them well matched to the method. It is particularly associated with lowland rice, where a ponded layer suppresses weeds and suits the crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'On very sandy, fast-draining soils, water can percolate below the root zone before spreading evenly, making basins harder to manage efficiently.',
        },
      ],
    },
    {
      id: 'efficiency-and-management',
      heading: 'Efficiency and management',
      body: [
        {
          type: 'paragraph',
          text: 'Because water covers and is held on the whole surface, basin irrigation can lose water to evaporation and, on lighter or less level land, to deep percolation beyond the root zone. Precise land levelling, appropriately sized basins, and a large enough inflow to fill each basin quickly all improve how evenly and efficiently water is applied. Laser-guided levelling has improved uniformity where it is available.',
        },
        {
          type: 'paragraph',
          text: 'Prolonged ponding can also raise water tables and contribute to waterlogging or salinity problems where drainage is poor, so basin systems are managed together with adequate drainage.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Basin irrigation is valued for its low equipment cost and simplicity, needing no pressurised network, but it demands careful land preparation and a reliable, sufficient water supply to fill basins evenly. In water-scarce settings, rice basin systems in particular are a focus of water-saving practices that reduce continuous flooding.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Basin size, inflow, and ponding depth are site-specific and depend on soil, crop, and water supply; this entry does not prescribe design values.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'irrigation-method', slug: 'border-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'irrigation-method', slug: 'alternate-wetting-and-drying' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of basin irrigation as used in surface-irrigated agriculture worldwide, notably lowland rice. Design and management depend on local soils, land, and water supply.',
  climateContext:
    'Basin irrigation supplies water where and when rainfall is insufficient; its water losses to evaporation rise with temperature and evaporative demand, especially under continuous ponding.',
  limitations: [
    'This entry describes basin irrigation in general terms; it does not give basin sizes, inflow rates, or ponding depths, which are soil-, crop-, and site-specific.',
    'Application efficiency varies widely with land levelling, soil, and management, and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Surface irrigation methods and basin design principles',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Surface irrigation and land-levelling practice',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of basin irrigation in rice and field-crop production',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Basin Irrigation',
    description:
      'Basin irrigation explained: how level bunded plots are flooded to infiltrate water, where it suits, its use for rice, and efficiency factors.',
    keywords: [
      'basin irrigation',
      'surface irrigation',
      'rice paddy',
      'level basin',
    ],
  },
  structuredData: { article: true },
};
