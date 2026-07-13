import type { FarmingSystemContent } from '@/types/content';

export const drylandFarming: FarmingSystemContent = {
  id: 'farming-system-dryland-farming',
  slug: 'dryland-farming',
  contentType: 'farming-system',
  title: 'Dryland Farming',
  systemClass: 'production-approach',
  alternativeNames: ['Dry farming', 'Rainfed farming (semi-arid)'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Dryland farming is crop production in semi-arid regions without irrigation, relying on capturing and conserving limited rainfall in the soil and on drought-adapted crops and practices to produce a harvest from scarce and uncertain moisture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dryland farming refers to growing crops in areas where rainfall is low and variable and where irrigation is unavailable or insufficient, so that the crop depends on rain and on water stored in the soil. The central challenge is to capture as much of the limited rainfall as possible, store it in the root zone, and lose as little as possible to runoff, evaporation, and weeds before the crop can use it.',
    },
    {
      type: 'paragraph',
      text: 'It is distinguished from ordinary rainfed farming in humid areas by the severity of moisture limitation and the deliberate practices used to conserve water: techniques such as fallowing to store moisture between crops, keeping the soil covered with residue, controlling weeds that compete for water, and choosing crops and varieties adapted to drought and short seasons.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining condition',
      value: 'Cropping in semi-arid areas without irrigation',
    },
    {
      label: 'Central goal',
      value:
        'Capture, store, and conserve limited and variable rainfall in the soil',
    },
    {
      label: 'Key practices',
      value:
        'Moisture-conserving fallow, residue cover, weed control, and reduced tillage',
    },
    {
      label: 'Crop choice',
      value:
        'Drought-adapted, often short-season crops such as sorghum, millet, and small grains',
    },
    {
      label: 'Main risk',
      value:
        'Rainfall variability makes yields uncertain from season to season',
    },
    {
      label: 'Soil focus',
      value:
        'Maintaining structure, cover, and organic matter to improve water capture and storage',
    },
  ],
  sections: [
    {
      id: 'what-dryland-farming-is',
      heading: 'What dryland farming is',
      body: [
        {
          type: 'paragraph',
          text: 'Dryland farming is a production approach shaped entirely by water scarcity. Because there is no irrigation to fall back on, the whole system is organised around getting rain into the soil, holding it there, and spending it efficiently on the crop. This makes soil-water conservation, not fertiliser or high plant populations, the usual first priority.',
        },
        {
          type: 'paragraph',
          text: 'It is practised across the world’s semi-arid regions and supports major dryland crops including wheat, barley, sorghum, millet, and pulses. The unpredictability of rainfall means that risk management — spreading risk across crops and seasons and avoiding practices that could fail badly in a dry year — is built into how these systems are run.',
        },
      ],
    },
    {
      id: 'conserving-soil-moisture',
      heading: 'Conserving soil moisture',
      body: [
        {
          type: 'list',
          items: [
            'Retaining crop residue on the surface to reduce evaporation and runoff and improve infiltration',
            'Using fallow periods in some systems to store moisture in the soil for the following crop',
            'Reducing tillage to limit moisture loss and protect soil structure',
            'Controlling weeds early, since they compete directly with the crop for scarce water',
            'Practices such as contour work and terracing to slow runoff and capture rain where it falls',
          ],
        },
        {
          type: 'paragraph',
          text: 'These measures are often combined with conservation-agriculture and rainwater-harvesting techniques, which share the aim of keeping more water in the crop root zone.',
        },
      ],
    },
    {
      id: 'crops-and-varieties',
      heading: 'Crops and varieties',
      body: [
        {
          type: 'paragraph',
          text: 'Dryland systems favour crops and varieties that tolerate drought, mature within the available moisture window, and use water efficiently. Cereals such as sorghum and millet are classic dryland crops in hotter, drier settings, while wheat and barley dominate cooler semi-arid zones; drought-tolerant pulses and oilseeds are also grown. Matching crop and variety to the length and reliability of the rainy season is central.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because a dryland crop must finish on stored plus in-season moisture, choosing a crop that matures too late for the typical season is a common way to turn a marginal year into a failure.',
        },
      ],
    },
    {
      id: 'considerations-and-risk',
      heading: 'Considerations and risk',
      body: [
        {
          type: 'paragraph',
          text: 'Yields in dryland farming are inherently variable and generally lower and less certain than under irrigation, so profitability and food security depend on managing risk across seasons rather than maximising output in a good year. Over-cultivation and loss of soil cover in dryland areas can also lead to erosion and land degradation, which is why moisture and soil conservation are so central.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not give rainfall thresholds, fallow lengths, or yield figures, which vary greatly between dryland regions; consult local guidance for a given area.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'contour-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'aridity-index' },
    { type: 'irrigation-method', slug: 'rainwater-harvesting' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  glossaryTerms: ['crop-rotation', 'evapotranspiration'],
  geographicScope:
    'Dryland farming is practised across semi-arid regions worldwide, including parts of the Great Plains, the Mediterranean, the Sahel, and South Asia; specific practices are strongly local.',
  climateContext:
    'Dryland farming is defined by semi-arid climate: low, variable rainfall and high evaporative demand make soil-water conservation and drought-adapted crops essential.',
  limitations: [
    'This entry describes dryland farming in general terms; it does not give rainfall thresholds, fallow lengths, or yield figures, which vary greatly between regions.',
    'Outcomes depend heavily on seasonal rainfall, which is uncertain, and on soil and management; they are not generalised here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Rainfed and dryland cropping systems and water conservation',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Dryland cropping and soil-water management research',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on drought-adapted crops for dryland systems',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Dryland Farming',
    description:
      'Dryland farming explained: growing crops in semi-arid areas without irrigation by conserving soil moisture and using drought-adapted crops.',
    keywords: [
      'dryland farming',
      'dry farming',
      'rainfed agriculture',
      'soil moisture conservation',
    ],
  },
  structuredData: { article: true },
};
