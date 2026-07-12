import type { FertilizerContent } from '@/types/content';

export const ammoniumNitrate: FertilizerContent = {
  id: 'fertilizer-ammonium-nitrate',
  slug: 'ammonium-nitrate',
  contentType: 'fertilizer',
  title: 'Ammonium nitrate',
  alternativeNames: ['AN', 'NH₄NO₃'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '34-0-0',
  summary:
    'Ammonium nitrate is a straight nitrogen fertilizer supplying nitrogen in both ammonium and nitrate forms, giving crops a portion of immediately available nitrate alongside more slowly nitrifying ammonium, with lower ammonia-volatilisation risk than urea.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ammonium nitrate (NH₄NO₃) is a nitrogen fertilizer manufactured by neutralising nitric acid with ammonia. Its typical analysis is around 34-0-0, with roughly half of its nitrogen present as ammonium and half as nitrate.',
    },
    {
      type: 'paragraph',
      text: 'Because part of its nitrogen is already in nitrate form, ammonium nitrate is taken up by plants somewhat more quickly than nitrogen sources that must first be hydrolysed or nitrified. It is widely used in temperate cereal and forage systems, though its classification as an oxidising agent means it is subject to specific storage and handling regulations in many countries.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Straight nitrogen fertilizer' },
    { label: 'Typical analysis', value: '34-0-0 (N-P₂O₅-K₂O)' },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen (ammonium and nitrate forms)',
    },
    { label: 'Common form', value: 'Granular or prilled solid' },
    {
      label: 'Key consideration',
      value:
        'Classified as an oxidiser; subject to storage and transport regulation in many countries',
    },
    { label: 'Solubility', value: 'Highly water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Ammonium nitrate is produced by reacting ammonia with nitric acid, then granulated or prilled for field use. Its nitrogen content, typically around 34%, is split roughly evenly between the ammonium (NH₄⁺) and nitrate (NO₃⁻) ions.',
        },
        {
          type: 'table',
          caption: 'Composition summary',
          columns: ['Property', 'Detail'],
          rows: [
            ['Chemical formula', 'NH₄NO₃'],
            [
              'Total nitrogen',
              'About 34%, roughly half ammonium and half nitrate',
            ],
            ['Phosphorus / potassium', 'None'],
            [
              'Handling classification',
              'Oxidising agent in many regulatory systems',
            ],
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'Ammonium nitrate supplies nitrogen only, in two forms simultaneously. The nitrate fraction is immediately available for root uptake, while the ammonium fraction is retained more strongly by soil and nitrifies over subsequent days to weeks, depending on temperature and moisture.',
        },
        {
          type: 'list',
          items: [
            'Nitrate portion is plant-available immediately and mobile in the soil solution',
            'Ammonium portion is held on soil cation exchange sites and nitrifies over time',
            'Supplies no phosphorus, potassium, or secondary or micronutrients',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Ammonium nitrate is widely used on cereals, forage grasses, and other crops in temperate regions, particularly where its combination of immediate and slightly delayed nitrogen release, and comparatively lower ammonia-volatilisation risk than urea, are valued.',
        },
        {
          type: 'list',
          items: [
            'Dual ammonium and nitrate supply offers both quick and short-delay availability',
            'Lower ammonia-volatilisation risk than urea when surface-applied',
            'Commonly used in split top-dressing programs on cereals and grassland',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'General practice is to time applications to crop demand and to split doses across the season where appropriate, since the nitrate component is mobile and subject to leaching in wet conditions. Storage and transport of ammonium nitrate are governed by safety regulations in most countries because of its oxidising properties.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The correct nitrogen rate, timing, and number of splits depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing, regional guidance, and the product label, including safety and storage requirements.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'The nitrate fraction of ammonium nitrate is highly mobile and can leach below the root zone in wet conditions or on coarse-textured soils, posing a risk to groundwater and surface water. Denitrification of nitrate under saturated soils can also release nitrous oxide, a potent greenhouse gas.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Loss pathways and their magnitude depend on soil texture, drainage, rainfall, and timing relative to crop uptake; consult regional nutrient-management guidance for practices that reduce these losses.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'calcium-ammonium-nitrate' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of ammonium nitrate as a nitrogen fertilizer. Availability, storage regulation, and use vary considerably by country.',
  climateContext:
    'Nitrate leaching risk from ammonium nitrate is greatest on well-drained or coarse-textured soils during periods of high rainfall or irrigation.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen rate recommendation for any crop or region.',
    'Storage, transport, and sale of ammonium nitrate are restricted or licensed in many jurisdictions; local regulation is not detailed here.',
    'Leaching and denitrification loss magnitudes vary with site conditions and are not quantified in this overview.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Nitrogen fertilizer forms and plant availability',
    },
    { sourceId: 'ifa', citedFor: 'Ammonium nitrate product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrate behaviour and leaching in soils',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Nitrogen management context for cereals and grassland',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ammonium Nitrate',
    description:
      'Ammonium nitrate as a nitrogen fertilizer: dual ammonium-nitrate composition, nutrient availability, general use, handling, and environmental loss pathways.',
    keywords: [
      'ammonium nitrate fertilizer',
      'nitrogen fertilizer',
      'ammonium nitrate composition',
      'nitrate leaching',
    ],
  },
  structuredData: { article: true },
};
