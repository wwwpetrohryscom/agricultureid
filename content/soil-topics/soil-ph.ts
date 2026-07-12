import type { SoilTopicContent } from '@/types/content';

export const soilPh: SoilTopicContent = {
  id: 'soil-topic-soil-ph',
  slug: 'soil-ph',
  contentType: 'soil-topic',
  title: 'Soil pH',
  topicClass: 'chemical',
  alternativeNames: ['Soil acidity and alkalinity', 'Soil reaction'],
  category: 'Soil chemical property',
  subcategory: 'Acidity and alkalinity',
  summary:
    'Soil pH is a measure of hydrogen-ion activity in the soil solution, expressed on a 0–14 scale. It strongly influences which nutrients are chemically available to plants and which minerals may reach toxic concentrations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil pH is a measure of how acidic or alkaline the soil solution is, on a logarithmic scale from 0 (extremely acidic) to 14 (extremely alkaline), with 7 considered neutral. Because pH shifts the chemical forms and solubility of many elements, it is one of the most consequential soil properties for nutrient availability.',
    },
    {
      type: 'paragraph',
      text: 'pH develops from parent material, rainfall and leaching, organic matter decomposition, and management history, including fertilizer use. It varies naturally between regions and even within a single field, and can shift gradually over years under continuous management.',
    },
  ],
  keyFacts: [
    { label: 'Scale', value: '0–14, logarithmic; 7 is neutral' },
    {
      label: 'Measured via',
      value:
        'Soil test (water or dilute-salt slurry) with a pH meter or indicator',
    },
    {
      label: 'Low pH (acidic) risk',
      value:
        'Aluminum/manganese toxicity; reduced phosphorus, calcium, magnesium availability',
    },
    {
      label: 'High pH (alkaline) risk',
      value: 'Reduced availability of iron, zinc, manganese, and phosphorus',
    },
    {
      label: 'Optimal range',
      value: 'Crop- and soil-specific — no single universal target',
    },
    {
      label: 'Adjusted by',
      value:
        'Liming materials (raise pH) or acidifying amendments (lower pH), at site-specific rates',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil pH is',
      body: [
        {
          type: 'paragraph',
          text: 'pH quantifies the concentration of hydrogen ions in the soil solution. Because the scale is logarithmic, each whole-number step represents a tenfold change in hydrogen-ion activity, so a soil at pH 5 is far more acidic than one at pH 6, not just marginally more so.',
        },
        {
          type: 'paragraph',
          text: 'Soils naturally range from strongly acidic — common in high-rainfall regions where basic cations have leached away — to alkaline, common in arid regions or over calcareous parent material.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why pH matters for nutrient availability',
      body: [
        {
          type: 'paragraph',
          text: 'Most plant nutrients are most chemically available within a moderate pH range, though the ideal range differs by crop and soil type and is not a single universal number. Outside that range, specific nutrients can become locked up in insoluble forms or, conversely, can reach concentrations toxic to roots.',
        },
        {
          type: 'table',
          caption: 'General pH-related patterns (not universal thresholds)',
          columns: ['Condition', 'Common effect'],
          rows: [
            [
              'Strongly acidic soil',
              'Aluminum and manganese solubility can rise to toxic levels; phosphorus, calcium, and magnesium availability often falls',
            ],
            [
              'Strongly alkaline soil',
              'Iron, zinc, manganese, and phosphorus availability often falls, producing micronutrient deficiency symptoms',
            ],
            [
              'Moderate pH range',
              'Most macro- and micronutrients tend to remain more chemically available, though the exact optimum is crop-specific',
            ],
          ],
        },
      ],
    },
    {
      id: 'how-it-is-measured',
      heading: 'How pH is measured',
      body: [
        {
          type: 'paragraph',
          text: 'Standard soil tests measure pH in a slurry of soil mixed with water or a dilute salt solution such as calcium chloride, using a calibrated pH meter or, in simpler field kits, a colorimetric indicator. Because pH can vary across a field and with sampling depth, representative composite sampling is important for a reliable result.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Water-based and salt-based pH methods can give somewhat different readings on the same soil; results should be interpreted using the calibration used by the testing laboratory.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing soil pH',
      body: [
        {
          type: 'paragraph',
          text: 'Where soil testing indicates pH outside the range suited to a planned crop, growers commonly apply liming materials to raise pH or elemental sulfur and other acidifying products to lower it. Rates depend on the soil’s buffering capacity — closely tied to clay and organic matter content — as well as the target crop and local guidance.',
        },
        {
          type: 'list',
          items: [
            'Confirm pH status with a laboratory soil test before amending',
            'Match liming or acidifying rates to soil buffering capacity, not just the current reading',
            'Recognize that nitrogen fertilizers containing ammonium can acidify soil gradually over time',
            'Retest periodically, since pH changes slowly and amendments take time to react through the profile',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No universal target pH',
          text: 'AgricultureID does not publish a single "ideal" pH. Appropriate targets vary by crop, soil type, and region — follow soil test recommendations and local agronomic guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  connections: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'manganese' },
    { type: 'soil', slug: 'peat-soil' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'potato' },
  ],
  glossaryTerms: ['soil-ph', 'macronutrient', 'micronutrient'],
  geographicScope:
    'General soil-science overview applicable worldwide; typical pH ranges and management needs vary strongly by region and parent material.',
  climateContext:
    'Rainfall and leaching intensity are major drivers of natural soil acidification over time.',
  limitations: [
    'Optimal pH ranges are crop- and soil-specific; no single universal figure applies across all crops and regions.',
    'Liming or acidifying rates depend on soil buffering capacity, which a raw pH reading alone does not capture.',
    'pH varies within fields and with depth, so single spot samples may not represent the whole area.',
  ],
  claims: [
    {
      field: 'soil-ph',
      statement:
        'As an illustrative example of the logarithmic pH scale, a soil at pH 5 is far more acidic than one at pH 6, representing roughly a tenfold difference in hydrogen-ion activity rather than a marginal one.',
      quantitative: true,
      citations: [
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance on soil pH measurement explains the logarithmic hydrogen-ion activity scale underlying pH values.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'usda-nrcs', citedFor: 'Soil pH and its measurement' },
    { sourceId: 'fao-soils', citedFor: 'Soil chemical properties and pH' },
    { sourceId: 'isric', citedFor: 'Global soil pH and property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil pH testing and management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil pH',
    description:
      'Soil pH explained: the acidity–alkalinity scale, its effect on nutrient availability, how it is measured, and how liming or acidifying amendments manage it.',
    keywords: ['soil ph', 'soil acidity', 'liming', 'nutrient availability'],
  },
  structuredData: { article: true },
};
