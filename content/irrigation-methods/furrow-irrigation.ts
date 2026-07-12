import type { IrrigationMethodContent } from '@/types/content';

export const furrowIrrigation: IrrigationMethodContent = {
  id: 'irrigation-furrow-irrigation',
  slug: 'furrow-irrigation',
  contentType: 'irrigation-method',
  title: 'Furrow Irrigation',
  category: 'Irrigation method',
  subcategory: 'Surface irrigation',
  methodClass: 'surface',
  summary:
    'Furrow irrigation applies water by gravity flow along shallow, parallel channels between raised crop rows, wetting the root zone from the side while keeping the row top drier, and is a long-established method for row crops such as cotton and maize.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In furrow irrigation, water is released at the top (head) end of shallow channels — furrows — formed between raised beds or rows, and it flows down the field by gravity, infiltrating into the soil as it advances. Crops are typically grown on the raised row rather than in the furrow itself, so the root zone is wetted primarily from the side and below rather than by direct surface flooding of the row top.',
    },
    {
      type: 'paragraph',
      text: 'As a form of surface irrigation, furrow irrigation shares its reliance on gravity flow and field grading with basin and border methods, but its row-and-furrow layout makes it particularly suited to crops grown in distinct rows, such as cotton, maize, and sugarcane.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Surface irrigation' },
    {
      label: 'Core requirement',
      value: 'Graded field with formed furrows between raised crop rows',
    },
    {
      label: 'Typical wetting pattern',
      value:
        'Lateral and downward infiltration from the furrow into the root zone',
    },
    {
      label: 'Common crops',
      value: 'Cotton, sugarcane, and maize, among other row crops',
    },
    {
      label: 'Key advantage',
      value:
        'Row tops stay drier than the furrow, which can reduce some surface-moisture-related crop issues',
    },
    {
      label: 'Key limitation',
      value:
        'Uniformity depends on furrow length, slope, and inflow management',
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
            'Furrows are formed between raised rows, typically at the same time as bed formation or planting',
            'Water is released at the head of each furrow from a supply channel, gated pipe, or siphon',
            'Water advances down the furrow by gravity, infiltrating into the soil as it flows',
            'Flow is cut off once sufficient water has been applied along the furrow length',
            'Water may recede and continue infiltrating after cutoff, depending on furrow slope and length',
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
          text: 'Furrow irrigation is used for row crops on land that is level or can be economically graded to a gentle, uniform slope, and it is closely associated with cotton, sugarcane, and maize production in many established irrigation regions. It is generally less suited to closely spaced or broadcast crops without distinct rows.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil infiltration characteristics strongly influence furrow design: furrow length and inflow rate are set differently for soils that take up water quickly versus slowly.',
        },
      ],
    },
    {
      id: 'efficiency-and-water-use',
      heading: 'Efficiency and water use',
      body: [
        {
          type: 'paragraph',
          text: 'Efficiency and uniformity in furrow irrigation depend heavily on furrow length, slope, inflow rate, and cutoff timing: water that reaches the end of a long furrow quickly may over-water the head end, while too little inflow may leave the tail end under-watered. Techniques such as surge irrigation (applying water in pulses) and precise field levelling are used in some systems to improve uniformity.',
        },
        {
          type: 'paragraph',
          text: 'As with other surface methods, furrow irrigation efficiency is a function of management and design rather than an inherent, fixed property of the method itself.',
        },
      ],
    },
    {
      id: 'variations',
      heading: 'Variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Surge irrigation',
              description:
                'Applies water to a furrow in intermittent pulses rather than a continuous stream, which can improve advance uniformity on some soils',
            },
            {
              term: 'Alternate furrow irrigation',
              description:
                'Irrigates every other furrow in a given cycle, reducing the wetted area and total water applied',
            },
            {
              term: 'Gated pipe or siphon delivery',
              description:
                'Common methods for releasing a controlled flow into the head of each furrow from a supply line or channel',
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
          text: 'On poorly drained soils, furrow irrigation can contribute to waterlogging in low spots or, over time, to secondary salinity if drainage and leaching are inadequate. Maintaining furrow shape and grade requires periodic re-forming, particularly after tillage or heavy rain.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Design is site-specific',
          text: 'Furrow length, slope, and inflow rate must be matched to soil infiltration rate and field conditions; AgricultureID does not publish universal furrow-irrigation design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'maize' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'climate', slug: 'drought' },
  ],
  geographicScope:
    'General overview of furrow irrigation as used across row-crop production worldwide. Furrow design and management vary by soil, crop, and region.',
  climateContext:
    'Water demand under furrow irrigation, as with other methods, rises with temperature and evapotranspiration and is shaped by regional rainfall and drought patterns.',
  limitations: [
    'This entry describes furrow irrigation function in general terms; it does not specify furrow length, slope, or inflow rates, which are soil- and site-specific engineering decisions.',
    'Waterlogging and salinity risks depend on local drainage and management and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Furrow irrigation principles and design',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Surface irrigation and drainage management context',
    },
    { sourceId: 'ahdb', citedFor: 'Irrigation management context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of furrow irrigation in row-crop production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Furrow Irrigation',
    description:
      'Furrow irrigation explained: how gravity-fed channels between crop rows wet the root zone, where it suits, and efficiency and drainage considerations.',
    keywords: [
      'furrow irrigation',
      'row irrigation',
      'gravity irrigation',
      'surge irrigation',
    ],
  },
  structuredData: { article: true },
};
