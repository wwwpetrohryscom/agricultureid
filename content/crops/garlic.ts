import type { CropContent } from '@/types/content';

export const garlic: CropContent = {
  id: 'crop-garlic',
  slug: 'garlic',
  contentType: 'crop',
  title: 'Garlic',
  scientificName: 'Allium sativum',
  alternativeNames: ['Common garlic'],
  category: 'Vegetable crop',
  subcategory: 'Bulb vegetable (Allium)',
  botanicalFamily: 'Amaryllidaceae (formerly Alliaceae)',
  lifecycle:
    'Perennial by nature, propagated vegetatively and grown as an annual',
  summary:
    'Garlic is a bulb crop in the Allium genus, propagated vegetatively from cloves rather than true seed, grown worldwide for its pungent, storable bulb used as a culinary staple and flavoring.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Garlic is grown for its underground bulb, composed of individual cloves, each of which can be planted to produce a new plant. Most cultivated garlic rarely produces viable seed, so commercial production relies on vegetative propagation through cloves rather than sexual reproduction from seed.',
    },
    {
      type: 'paragraph',
      text: 'Garlic cultivars are broadly grouped into hardneck types, which produce a flowering stalk (scape) and generally fewer, larger cloves, and softneck types, which typically do not produce a scape and form more numerous, smaller cloves; the two groups differ in cold requirement, storage life, and regional adaptation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaryllidaceae (Allium)' },
    {
      label: 'Life cycle',
      value: 'Perennial by nature, grown as an annual from planted cloves',
    },
    { label: 'Scientific name', value: 'Allium sativum' },
    {
      label: 'Primary uses',
      value:
        'Fresh and dried culinary use; powdered, minced, and paste products',
    },
    {
      label: 'Climate',
      value:
        'Bulb differentiation influenced by a period of cool temperatures and by day length',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained, fertile sandy loams; shallow, moisture-sensitive root system',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Because garlic is propagated from cloves rather than seed, planting stock quality — freedom from disease and appropriate clove size — is a central concern in production, distinct from most other vegetable crops that rely on true seed.',
        },
        {
          type: 'paragraph',
          text: 'Like onion, garlic has a shallow, sparsely branched root system, making it comparatively sensitive to short-term water and nutrient shortages near the soil surface.',
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
            {
              term: 'Family',
              description:
                'Amaryllidaceae, subfamily Allioideae (formerly treated as Alliaceae)',
            },
            { term: 'Genus and species', description: 'Allium sativum' },
            {
              term: 'Propagation',
              description:
                'Vegetative, from individual cloves; commercial garlic rarely sets viable seed',
            },
            {
              term: 'Growth habit',
              description:
                'Bulb-forming perennial grown as an annual, with hardneck types producing a flowering stalk (scape) and softneck types generally not',
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
          text: 'Garlic is believed to have originated in Central Asia and has been cultivated since antiquity across the Mediterranean, the Middle East, and Asia, with historical records of its use in ancient Egypt and other early civilizations.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across temperate and subtropical regions worldwide. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Bulb and clove differentiation in garlic is influenced by exposure to a period of cool temperatures and by day length, broadly similar in principle to the bulbing response in onion, though the specific requirements differ between hardneck and softneck types.',
        },
        {
          type: 'paragraph',
          text: 'Garlic is generally tolerant of cold during vegetative growth, and cultivar type is matched to local winter temperatures to ensure adequate cold exposure without cold injury.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Garlic performs best on well-drained, fertile sandy loams free of compaction, which support even bulb development. Its shallow root system makes it comparatively intolerant of both drought stress and waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil texture and drainage should be assessed with local soil survey information, since both influence bulb shape and disease risk.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Garlic is established by planting individual cloves at a set depth and spacing, using planting stock selected for size uniformity and freedom from disease. Rotation away from other Allium crops helps manage soilborne disease buildup over time.',
        },
        {
          type: 'list',
          items: [
            'Selection of disease-free, appropriately sized planting cloves',
            'Cultivar type (hardneck or softneck) matched to local winter temperatures',
            'Crop rotation away from other Allium species to reduce soilborne disease carryover',
            'Prompt weed control given the crop’s narrow leaves and shallow rooting',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Sulfur is notable in garlic because it is a precursor of the pungent flavor compounds characteristic of the crop, while nitrogen and phosphorus support vegetative growth and bulb development. Requirements depend on soil supply, target yield, and cultivar.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Because of its shallow root system, garlic requires regular moisture through vegetative growth and bulb development, with irrigation commonly reduced or withheld in the weeks before harvest to encourage proper curing.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, using methods and reference values published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium basal rot is a significant soilborne disease affecting the bulb base, and downy mildew, which affects Allium crops broadly, can also occur under cool, humid conditions. Thrips are the most important insect pest of garlic in many regions and can also be associated with virus spread.',
        },
        {
          type: 'paragraph',
          text: 'Management combines the use of clean, disease-free planting stock, rotation away from other Alliums, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Maturity is signaled by the foliage yellowing and beginning to dry down. Bulbs are lifted and then cured — dried under controlled conditions — before trimming and storage, since proper curing strongly influences storage life and quality.',
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
            'Fresh and dried culinary use as a foundational flavoring across many cuisines',
            'Processed forms including minced, powdered, and paste products',
            'Pickled garlic and garlic-based condiments in some markets',
            'Traditional non-culinary uses recorded in some cultures, alongside its primary role as food',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [{ type: 'pest', slug: 'thrips' }],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'carrot' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: ['cultivar', 'crop-rotation', 'macronutrient', 'soil-texture'],
  geographicScope:
    'Global overview. Cultivar type (hardneck or softneck), planting timing, and input levels are region-specific and depend on local winter temperatures.',
  climateContext:
    'Cool-influenced bulb crop propagated vegetatively from cloves; grown across temperate to subtropical regions.',
  limitations: [
    'Cultivar type and clove planting timing are region-specific decisions not reduced to universal guidance here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of garlic in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest and disease management for garlic',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Garlic production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Garlic',
    description:
      'A structured reference on garlic: classification, clove propagation, climate and soil needs, diseases, pests, curing, and culinary uses.',
    keywords: ['garlic', 'Allium sativum', 'bulb vegetable', 'garlic agronomy'],
  },
  structuredData: { article: true },
};
