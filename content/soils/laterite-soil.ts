import type { SoilContent } from '@/types/content';

export const lateriteSoil: SoilContent = {
  id: 'soil-laterite',
  slug: 'laterite-soil',
  contentType: 'soil',
  title: 'Laterite Soil',
  alternativeNames: ['Lateritic soil', 'Oxisol'],
  category: 'Soil type',
  subcategory: 'Highly weathered tropical soil',
  texture:
    'Fine to medium, clay-rich; dominated by iron and aluminium oxides from intense tropical weathering',
  summary:
    'Laterite soil is a highly weathered tropical soil rich in iron and aluminium oxides, formed under prolonged high temperature and heavy rainfall that leach away most silica and soluble nutrients. It is often naturally low in fertility but supports crops such as cassava, coconut, and oil palm with appropriate management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Laterite soils, classified as Oxisols in most soil taxonomies, form through intense chemical weathering under long-term exposure to high temperature and heavy tropical rainfall. This process removes most silica and soluble base cations, leaving soils rich in relatively insoluble iron and aluminium oxides that give the characteristic red to yellow colour.',
    },
    {
      type: 'paragraph',
      text: 'In some profiles, repeated wetting and drying or exposure of subsoil can cause the iron- and aluminium-rich material to harden irreversibly into true laterite, historically used in some regions as a building material. Agriculturally, laterite soils are typically acidic with low natural fertility and strong phosphorus fixation.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Highly weathered tropical soil (Oxisol/laterite)',
    },
    {
      label: 'Defining minerals',
      value: 'Iron and aluminium oxides, giving red to yellow colour',
    },
    { label: 'Reaction (pH)', value: 'Typically acidic' },
    {
      label: 'Nutrient status',
      value: 'Naturally low fertility; strong phosphorus fixation',
    },
    {
      label: 'Structural note',
      value:
        'Can harden irreversibly into ironstone with repeated exposure and drying in some profiles',
    },
    {
      label: 'Distribution',
      value:
        'Humid tropical regions with long weathering history, e.g. parts of West Africa, South Asia, and South America',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Laterite soils are defined by an advanced stage of chemical weathering rather than by a fixed particle-size class. Long exposure to warm, wet tropical conditions strips most primary minerals other than iron and aluminium oxides, producing soils with distinctive colour and chemistry that shape their agricultural potential.',
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
              term: 'Acidity',
              description:
                'Intense weathering and leaching typically leave laterite soils acidic, with low base saturation.',
            },
            {
              term: 'Low fertility and CEC',
              description:
                'Iron and aluminium oxides hold nutrients poorly compared with more crystalline clay minerals, giving low natural fertility.',
            },
            {
              term: 'Phosphorus fixation',
              description:
                'Iron and aluminium oxides bind phosphorus strongly, a well-documented constraint on productivity without management.',
            },
            {
              term: 'Hardening risk',
              description:
                'Some profiles can harden irreversibly into ironstone if protective topsoil or vegetation is lost through erosion or excessive exposure.',
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
          text: 'Managing laterite soils centres on correcting acidity and phosphorus limitations while protecting the topsoil from erosion and irreversible hardening.',
        },
        {
          type: 'list',
          items: [
            'Apply lime to address acidity where appropriate for the crop and local guidance',
            'Manage phosphorus fertilization accounting for strong fixation by iron and aluminium oxides',
            'Maintain vegetative cover to protect topsoil from erosion and reduce the risk of subsoil hardening',
            'Add organic matter to improve nutrient and water holding capacity',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'In some laterite profiles, loss of protective topsoil or vegetation through erosion or excessive exposure can allow the iron- and aluminium-rich subsoil to harden irreversibly, permanently reducing agricultural potential.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava is well adapted to the low-fertility, acidic conditions typical of laterite soils. Coconut and oil palm are widely grown tree crops on lateritic soils across humid tropical regions, generally with fertilizer and soil management inputs suited to the local conditions.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a laterite soil',
      body: [
        {
          type: 'paragraph',
          text: 'Soil testing for pH, phosphorus fixation capacity, and depth or hardening risk is important given the high variability of lateritic soils. Local agricultural extension guidance is recommended before major investment in a laterite-derived field.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'coconut' },
    { type: 'crop', slug: 'oil-palm' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'climate', slug: 'rainfall' },
  ],
  glossaryTerms: ['soil-ph', 'micronutrient', 'macronutrient'],
  geographicScope:
    'General soil-science overview of highly weathered lateritic soils (Oxisols) found in humid tropical regions worldwide, including parts of West Africa, South Asia, and South America; degree of weathering and fertility vary by site and history.',
  climateContext:
    'Formed under prolonged high temperature and heavy rainfall typical of humid tropical climates, which drive the intense chemical weathering responsible for their characteristic properties.',
  limitations: [
    'Laterite/Oxisol properties vary greatly with weathering history and local geology; this is a general overview, not a substitute for local soil testing.',
    'Management needs, particularly liming and phosphorus strategy, depend on specific soil chemistry and crop requirements and should be assessed locally.',
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
    title: 'Laterite Soil',
    description:
      'Laterite soil explained: Oxisol formation, iron and aluminium oxide chemistry, acidity, phosphorus fixation, management, and crop suitability.',
    keywords: ['laterite soil', 'Oxisol', 'tropical soil', 'soil fertility'],
  },
  structuredData: { article: true },
};
