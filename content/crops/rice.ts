import type { CropContent } from '@/types/content';

export const rice: CropContent = {
  id: 'crop-rice',
  slug: 'rice',
  contentType: 'crop',
  title: 'Rice',
  scientificName: 'Oryza sativa',
  alternativeNames: ['Paddy rice', 'Asian rice'],
  category: 'Cereal crop',
  subcategory: 'Aquatic and upland cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Rice is a cereal grass cultivated across a wide range of flooded, rainfed, and upland systems, and is a staple food for a large share of the global population, particularly across Asia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice is one of the most widely consumed cereal grains in the world and the dominant staple food across much of Asia, with significant production also in Africa, the Americas, and parts of Europe. It is unusual among major cereals in that a large share of production is grown in flooded, or paddy, conditions.',
    },
    {
      type: 'paragraph',
      text: 'Cultivated rice is generally divided into two major subspecies groups, indica and japonica, which differ in grain shape, cooking quality, and regional adaptation. Beyond these groups, thousands of local and improved varieties have been developed for specific environments and end uses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    {
      label: 'Life cycle',
      value: 'Annual (grown as a semi-aquatic or upland cereal)',
    },
    { label: 'Scientific name', value: 'Oryza sativa' },
    {
      label: 'Primary uses',
      value: 'Staple food grain, rice flour, straw for feed or bedding',
    },
    {
      label: 'Climate',
      value: 'Warm, humid climates; both irrigated and rain-fed systems exist',
    },
    {
      label: 'Soil preference',
      value:
        'Fine-textured, water-retentive soils for lowland systems; well-drained soils for upland rice',
      note: 'Suitability depends on the specific cultivation system used.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is grown across an unusually wide range of ecosystems compared with most other cereals, from permanently flooded lowland paddies to entirely rain-fed upland fields. This flexibility has allowed it to become a staple across many different climates and landscapes.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from small, labor-intensive family farms to large mechanized operations. Because growing conditions and cultivation systems differ so widely, agronomic details such as establishment method, water management, and variety choice are highly region-specific.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Poaceae (grass family)' },
            { term: 'Genus and species', description: 'Oryza sativa' },
            {
              term: 'Major subspecies groups',
              description:
                'Indica and japonica, distinguished by grain morphology, cooking quality, and regional adaptation',
            },
            {
              term: 'Growth habit',
              description:
                'Semi-aquatic annual grass tolerant of flooded soil conditions, though upland types are grown without flooding',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Rice was domesticated in Asia, with the Yangtze River region commonly cited as a key area of early cultivation, and spread throughout South and Southeast Asia over subsequent millennia. It later reached Africa, the Middle East, and, following European contact, the Americas.',
        },
        {
          type: 'paragraph',
          text: 'Rice is now grown on every inhabited continent, with the largest production concentrated in Asia. Current data on planted area, production, and trade by country are compiled by FAO and national statistical agencies and should be drawn from those primary sources.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is generally a warm-climate crop that grows best with consistently warm temperatures and, in most production systems, high humidity or standing water. It is sensitive to cold temperatures, particularly around flowering, when cool spells can reduce grain set.',
        },
        {
          type: 'paragraph',
          text: 'Day length and temperature also influence flowering time in many varieties, and variety choice is matched to the length of the local growing season and the target planting window.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lowland rice is typically grown on fine-textured soils with low permeability, which help maintain standing water in bunded fields. Upland rice, by contrast, is grown on well-drained soils without flooding, more similar to other rain-fed cereals.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability for a given cultivation system should be assessed with local soil survey and irrigation infrastructure information rather than general guidance alone.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and cultivation systems',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is established either by transplanting seedlings raised in a nursery bed or by direct seeding into the field, with the choice depending on labor availability, water control, and local practice. It is grown across several broad ecosystems that differ mainly in water source and management.',
        },
        {
          type: 'table',
          caption: 'Major rice cultivation ecosystems',
          columns: ['Ecosystem', 'Typical water regime', 'General description'],
          rows: [
            [
              'Irrigated lowland',
              'Controlled flooding via irrigation',
              'Bunded, leveled fields where water depth and timing are managed through irrigation infrastructure.',
            ],
            [
              'Rainfed lowland',
              'Flooding dependent on rainfall',
              'Bunded fields retain rainwater, but water depth varies with rainfall rather than irrigation control.',
            ],
            [
              'Upland',
              'No standing water',
              'Grown on well-drained soils without flooding, agronomically closer to other rain-fed cereals.',
            ],
            [
              'Deepwater / flood-prone',
              'Seasonal deep flooding',
              'Grown in areas subject to seasonal flooding beyond the depth suited to standard lowland rice.',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'Rotation with other crops, such as wheat or legumes, is practiced in some regions and can help manage weeds, pests, and soil fertility between rice seasons.',
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen strongly influences rice yield and is typically the nutrient managed most intensively, while phosphorus, potassium, and, in some soils, zinc support establishment and grain fill. Nutrient availability is also affected by flooding, which changes soil chemistry relative to non-flooded systems.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance, which account for the specific water regime in use. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Water management is a central part of rice production. In irrigated and rainfed lowland systems, fields are typically kept flooded for much of the growing season, while upland rice relies entirely on rainfall like other rain-fed crops.',
        },
        {
          type: 'paragraph',
          text: 'Water requirements and irrigation scheduling methods for flooded rice differ from those used for non-flooded crops; reference guidance is published by FAO and national agricultural and irrigation agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is affected by diseases such as rice blast, sheath blight, and bacterial leaf blight, whose importance varies by region, variety, and water management. Insect pests, including aphids, planthoppers, and stem borers, can reduce yield directly or transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant varieties, water and nutrient management, field monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is harvested once grains have matured and dried to a moisture content suitable for threshing and safe storage. Fields are typically drained ahead of harvest to allow access for manual or mechanical harvesting equipment.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Milled and parboiled grain for direct human consumption as a staple food',
            'Rice flour and starch used in a range of food products',
            'Rice bran and broken grain used in animal feed',
            'Straw and husk used for livestock bedding, fuel, or as a soil amendment in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'rice-blast' }],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'pest', slug: 'fall-armyworm' },
  ],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [{ type: 'crop', slug: 'wheat' }],
  glossaryTerms: ['annual-crop', 'soil-texture', 'yield', 'evapotranspiration'],
  geographicScope:
    'Global overview. Rice is grown under widely differing systems (irrigated, rainfed, upland, and deepwater), so establishment method and water management are highly region- and system-specific.',
  climateContext:
    'Warm, generally humid-climate cereal grown mainly across tropical and subtropical Asia, with significant production in Africa and the Americas, under both flooded and non-flooded systems.',
  limitations: [
    'Cultivation system (irrigated, rainfed, upland, or deepwater) strongly shapes agronomic practice and is not reduced to a single universal method here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Water management infrastructure and practice vary greatly by region; local irrigation authority and extension guidance should be followed.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of rice in global food security and agronomy',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'irri',
      citedFor: 'Rice science, varieties, and cultivation systems',
    },
    { sourceId: 'usda-ars', citedFor: 'Rice disease and pest research' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Water management and irrigation guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rice',
    description:
      'A structured, evidence-based reference on rice: classification, paddy and upland systems, climate and water needs, agronomy, diseases, pests, and uses.',
    keywords: ['rice', 'Oryza sativa', 'paddy rice', 'cereal crop'],
  },
  structuredData: { article: true },
};
