import type { SoilContent } from '@/types/content';

export const chalkySoil: SoilContent = {
  id: 'soil-chalky',
  slug: 'chalky-soil',
  contentType: 'soil',
  title: 'Chalky Soil',
  alternativeNames: ['Calcareous soil', 'Rendzina (shallow chalky soil)'],
  category: 'Soil type',
  subcategory: 'Calcareous soil',
  texture:
    'Variable, often shallow and stony; defined by high calcium carbonate (chalk or limestone) content rather than particle size',
  summary:
    'Chalky soil is a calcareous soil formed over chalk or limestone bedrock, defined by high calcium carbonate content and alkaline pH. It is often shallow, stony, and free-draining, which limits water storage and can reduce the availability of certain micronutrients.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chalky soil takes its defining character from calcium carbonate (free lime) inherited from underlying chalk or limestone parent material, rather than from a particular mix of sand, silt, and clay. Textures on chalky parent material can range from light and stony to heavier clay-with-flints, but the shared feature is an alkaline reaction, typically in the pH 7.5–8.5 range.',
    },
    {
      type: 'paragraph',
      text: 'Because these soils often sit directly over bedrock, they are frequently shallow and free-draining, giving limited water storage compared with deeper soils of similar surface texture. High pH also affects the availability of certain plant nutrients, particularly iron and manganese.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Calcareous soil over chalk or limestone' },
    {
      label: 'Defining trait',
      value: 'High calcium carbonate (free lime) content',
    },
    { label: 'Reaction (pH)', value: 'Alkaline, typically pH 7.5–8.5' },
    {
      label: 'Drainage',
      value: 'Usually free-draining; often shallow over bedrock',
    },
    {
      label: 'Nutrient availability',
      value: 'Iron, manganese, and phosphorus availability reduced at high pH',
    },
    {
      label: 'Depth',
      value: 'Often shallow and stony, though depth varies with local geology',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chalky soils are defined by their parent material and chemistry rather than by a fixed particle-size class. Wherever chalk or limestone lies at or near the surface, weathering releases calcium carbonate into the soil, producing an alkaline reaction that shapes nutrient availability and drainage behaviour regardless of the exact sand-silt-clay mix present.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'pH and lime content',
              description:
                'High calcium carbonate content produces an alkaline reaction, commonly pH 7.5–8.5.',
            },
            {
              term: 'Drainage and water storage',
              description:
                'Often shallow and free-draining, giving limited water storage and increased exposure to short-term drought stress.',
            },
            {
              term: 'Micronutrient availability',
              description:
                'High pH reduces the solubility of iron and manganese, which can cause lime-induced chlorosis in sensitive crops.',
            },
            {
              term: 'Structure',
              description:
                'Often stony and friable in the topsoil, with depth and structure varying considerably with local geology.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing chalky soils centres on working with, rather than against, their alkaline chemistry and often limited depth and water storage.',
        },
        {
          type: 'list',
          items: [
            'Monitor soil pH and avoid unnecessary additional liming',
            'Choose iron- and manganese-efficient varieties, or use chelated micronutrient products where deficiency symptoms appear',
            'Add organic matter to improve moisture retention and deepen effective rooting',
            "Plan irrigation with the soil's limited water reserve in mind, particularly on shallow profiles",
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Lime-induced chlorosis, caused by reduced iron and manganese availability at high pH, is a common issue on chalky soils and is best addressed with locally appropriate micronutrient management rather than attempting to lower pH significantly.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Barley tolerates alkaline chalky soils well and is commonly grown on them. Olive is traditionally associated with calcareous, often chalky or limestone-derived soils in Mediterranean and similar climates. Crops that are particularly sensitive to iron or manganese deficiency can struggle on chalky soils without corrective micronutrient management.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a chalky soil',
      body: [
        {
          type: 'paragraph',
          text: 'A simple field indicator is the reaction of soil to a few drops of dilute acid: fizzing indicates the presence of calcium carbonate. Laboratory testing for pH and carbonate content, along with local soil survey information on depth to bedrock, provides a more reliable basis for management decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'olive' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'manganese' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'climate', slug: 'drought' },
  ],
  glossaryTerms: ['soil-ph', 'soil-texture', 'micronutrient'],
  geographicScope:
    'General soil-science overview of calcareous chalk- and limestone-derived soils found worldwide, including southern England, parts of France, and other limestone regions; local depth, stoniness, and pH vary and should be assessed directly.',
  climateContext:
    'Often free-draining with limited water storage, especially where shallow over bedrock, making crops on chalky soils more exposed to short-term drought stress between rainfall or irrigation events.',
  limitations: [
    'Chalky soils vary widely in depth, stoniness, and exact carbonate content; local soil survey or testing should guide management rather than general descriptions alone.',
    'Micronutrient deficiency risk and severity depend on soil pH, crop species, and local conditions and cannot be generalised.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, drainage, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chalky Soil',
    description:
      'Chalky soil explained: calcium carbonate content, alkaline pH, drainage, micronutrient availability, management, and crop suitability considerations.',
    keywords: ['chalky soil', 'calcareous soil', 'alkaline soil', 'soil pH'],
  },
  structuredData: { article: true },
};
