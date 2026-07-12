import type { IrrigationMethodContent } from '@/types/content';

export const surfaceIrrigation: IrrigationMethodContent = {
  id: 'irrigation-surface-irrigation',
  slug: 'surface-irrigation',
  contentType: 'irrigation-method',
  title: 'Surface Irrigation',
  alternativeNames: ['Gravity irrigation', 'Flood irrigation'],
  category: 'Irrigation method',
  subcategory: 'Surface irrigation',
  methodClass: 'surface',
  summary:
    'Surface irrigation applies water by gravity flow directly across the soil surface — as basins, borders, or furrows — making it the oldest and, globally, still the most widely used irrigation approach, particularly where land is level and water is inexpensive relative to labour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Surface irrigation delivers water to a field and lets gravity spread it across the soil surface, where it infiltrates into the root zone. It requires no pressurised delivery system, relying instead on field layout — grading, basin or border construction, or furrow shaping — to control how water moves and infiltrates.',
    },
    {
      type: 'paragraph',
      text: 'Because it needs comparatively low-cost infrastructure and no pumping energy beyond what is needed to deliver water to the field edge, surface irrigation remains the dominant irrigation method by area in much of the world, especially in flatter terrain and in long-established irrigation districts and canal systems.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Surface (gravity) irrigation' },
    {
      label: 'Core requirement',
      value: 'Level or graded field surface and a controlled water source',
    },
    {
      label: 'Common configurations',
      value: 'Basin, border-strip, and furrow irrigation',
    },
    {
      label: 'Common crops',
      value: 'Rice, cereals, and sugarcane, among many others',
    },
    {
      label: 'Key advantage',
      value:
        'Low equipment cost and no pumping energy requirement at the field',
    },
    {
      label: 'Key limitation',
      value:
        'Uniformity and efficiency depend heavily on field levelling and management',
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
            'Water is delivered to the field from a canal, pipe outlet, or pump, without pressurised distribution across the field itself',
            'In basin irrigation, water floods a level, bunded area and infiltrates as it stands',
            'In border irrigation, water flows down a graded strip bounded by low ridges',
            'In furrow irrigation, water flows along shallow channels between crop rows (covered separately as its own method)',
            'Infiltration continues as water advances and, where applicable, recedes across the field',
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
          text: 'Surface irrigation suits fields that are level or can be economically graded, and it is closely associated with rice, where basin (paddy) flooding is integral to production, as well as with cereals and sugarcane grown under long-established canal irrigation systems. It is generally less practical on steep or highly uneven land without significant earthworks.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil infiltration rate is a key factor in design: soils that absorb water very quickly or very slowly both create challenges for achieving uniform surface irrigation.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Surface irrigation efficiency varies widely depending on field levelling precision, the length of run, and management skill: a well-designed and well-managed system can perform reasonably well, while poor levelling or oversized fields often lead to uneven infiltration, with some areas over-watered and others under-watered.',
        },
        {
          type: 'paragraph',
          text: 'Precision land levelling (including laser levelling), shorter field lengths, and careful control of inflow and cutoff timing are practices used to improve the uniformity and efficiency of surface irrigation.',
        },
      ],
    },
    {
      id: 'land-preparation-and-management',
      heading: 'Land preparation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Field preparation is central to surface irrigation performance: basins and border strips must be levelled and bunded to a consistent grade, and furrows or borders need periodic reshaping as they erode or fill in over time and between tillage operations.',
        },
        {
          type: 'list',
          items: [
            'Laser or GPS-guided land levelling improves surface uniformity and reduces ponding or dry patches',
            'Field size and shape are matched to available flow rate so water can advance across the whole area in a reasonable time',
            'Tailwater (runoff from the low end of the field) may be collected and reused in some systems to reduce losses',
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
          text: 'Because water moves and ponds across the surface, surface irrigation on poorly drained or heavy soils can contribute to waterlogging and, over time in some settings, to secondary soil salinity if drainage is inadequate. Field preparation and maintenance — levelling, bunding, and channel upkeep — represent an ongoing labour or capital requirement.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Design is site-specific',
          text: 'Field length, slope, and inflow rate must be matched to soil infiltration characteristics and available water; AgricultureID does not publish universal surface-irrigation design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'climate', slug: 'drought' },
  ],
  geographicScope:
    'General overview of surface irrigation as practised in long-established irrigation districts and canal systems worldwide. Field configuration and management vary widely by region.',
  climateContext:
    'Water demand under surface irrigation, like other methods, rises with temperature and evapotranspiration and is influenced by regional rainfall patterns and drought conditions.',
  limitations: [
    'This entry describes surface irrigation function and configurations in general terms; it does not specify field dimensions, slopes, or inflow rates, which are site-specific engineering decisions.',
    'The risk and extent of waterlogging or salinity depend on local soil, drainage, and water-management conditions not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Surface irrigation principles and design',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Surface irrigation management and drainage context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global prevalence and role of surface irrigation',
    },
    { sourceId: 'ahdb', citedFor: 'Irrigation management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Surface Irrigation',
    description:
      'Surface (gravity) irrigation explained: basin, border, and furrow configurations, where it suits, efficiency factors, and drainage considerations.',
    keywords: [
      'surface irrigation',
      'flood irrigation',
      'gravity irrigation',
      'basin irrigation',
    ],
  },
  structuredData: { article: true },
};
