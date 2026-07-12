import type { CropContent } from '@/types/content';

export const leek: CropContent = {
  id: 'crop-leek',
  slug: 'leek',
  contentType: 'crop',
  title: 'Leek',
  scientificName: 'Allium ampeloprasum var. porrum',
  alternativeNames: ['Garden leek'],
  category: 'Vegetable crop',
  subcategory: 'Allium vegetable',
  botanicalFamily: 'Amaryllidaceae (formerly Alliaceae)',
  lifecycle: 'Biennial, grown as an annual for stem (shank) harvest',
  summary:
    'Leek is a hardy allium vegetable grown for its blanched, cylindrical stem (shank), valued for good cold tolerance and a long harvest season compared with onion and garlic.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Leek is grown for its thick, cylindrical stem formed from tightly overlapping leaf bases, blanched by earthing up soil or otherwise excluding light from the lower stem during growth. It belongs to the same plant family as onion and garlic, sharing many of their pest and disease vulnerabilities.',
    },
    {
      type: 'paragraph',
      text: 'Unlike onion and garlic, leek does not form a discrete bulb, and it is notably more cold-tolerant, allowing extended harvest through autumn and winter in many temperate regions. Like other biennial alliums, it flowers only after cold exposure the following season but is grown commercially as an annual for its stem.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaryllidaceae (formerly Alliaceae)' },
    {
      label: 'Life cycle',
      value: 'Biennial, grown as an annual for stem (shank) harvest',
    },
    { label: 'Main species', value: 'Allium ampeloprasum var. porrum' },
    {
      label: 'Primary uses',
      value:
        'Fresh-market and cooked vegetable, flavoring base in many cuisines',
    },
    {
      label: 'Climate',
      value:
        'Cool-season; notably cold-tolerant, allowing autumn and winter harvest',
    },
    {
      label: 'Soil preference',
      value: 'Deep, moisture-retentive loams and silty loams',
      note: 'Deep, friable soil supports the long, well-blanched stem sought by growers.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Leek is grown for its long, thick stem, cultivated to maximize the length of the tender, blanched (white) portion by progressively earthing up soil, using collars, or planting into trenches as the plant grows.',
        },
        {
          type: 'paragraph',
          text: 'Its strong cold tolerance relative to other alliums allows leek to be harvested over an extended season in many temperate climates, including through frosty conditions in some regions.',
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
                'Amaryllidaceae (subfamily Allioideae; formerly classified in Alliaceae)',
            },
            { term: 'Species', description: 'Allium ampeloprasum' },
            { term: 'Cultivar group', description: 'Porrum group (leek)' },
            {
              term: 'Growth habit',
              description:
                'Biennial monocot grown as an annual, forming a long cylindrical stem of overlapping leaf bases without a true bulb',
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
          text: 'Leek derives from wild Allium ampeloprasum populations native to the Mediterranean region, with cultivation dating back to antiquity and long-standing importance in European cuisines, particularly in parts of northern and western Europe where it remains a significant winter vegetable.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade figures change over time and by region; current data are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Leek grows best under cool conditions and tolerates cold significantly better than onion and garlic, allowing many temperate producers to harvest the crop through autumn and into winter, in some regions even after light freezing.',
        },
        {
          type: 'paragraph',
          text: "Extended exposure to cold, however, can eventually trigger the plant's natural transition toward flowering the following season (bolting), so overwintering practices are matched to local climate and cultivar cold tolerance.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Leek performs best on deep, moisture-retentive loams and silty loams that are friable enough to allow easy earthing up or trench planting for blanching the stem, with reasonable fertility to support long-season growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Leek is typically established from transplants raised in seedbeds or trays, set out into trenches or with soil progressively drawn up around the stem over the season to maximize the length of the blanched portion.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to local season length and desired harvest window (summer, autumn, or overwintering types)',
            'Trench planting or progressive earthing up to blanch the stem',
            'Crop rotation with non-allium crops to manage soil-borne disease and pest carryover',
            'Consistent moisture supply to support steady, unchecked growth',
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
          text: 'Sulfur is of particular relevance to alliums including leek, contributing to the characteristic flavor compounds of the group, alongside more conventional needs for nitrogen to support the extended vegetative growth period and potassium for stem quality.',
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
          text: 'Leek benefits from consistent soil moisture over its long growing season, since water stress can check growth and reduce the eventual stem length and diameter. Sprinkler irrigation is commonly used, alongside drip systems in some production regions.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is a significant foliar disease of leek under cool, humid conditions, and gray mold can affect leaves and stems, particularly late in the season. Onion thrips are a key insect pest shared with other alliums, causing silvering damage to leaves, while leaf miners can also affect the crop in some regions.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Leek is harvested by lifting once the stem has reached the desired diameter and length, with harvest for many cultivars extending over an unusually long window, including, in cold-tolerant types, through autumn and winter in temperate regions.',
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
            'Fresh-market vegetable, eaten cooked in soups, stews, and many other dishes',
            'Flavoring base in a range of regional cuisines',
            'Processed and frozen products in some markets',
            'Minor use of the green tops in stock and flavoring preparations',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'celery' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'macronutrient', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season allium notable for strong cold tolerance, supporting an extended autumn and winter harvest in many temperate regions.',
  limitations: [
    'Cold tolerance and overwintering suitability vary by cultivar and should be confirmed against local winter severity.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of leek in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Allium disease and pest compendium data' },
    { sourceId: 'ahdb', citedFor: 'Regional leek and allium crop agronomy' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Leek',
    description:
      'A structured, evidence-based reference on leek: classification, cold-tolerant cultivation, blanching, soil, diseases, pests, and uses.',
    keywords: [
      'leek',
      'Allium ampeloprasum',
      'allium vegetable',
      'blanched stem',
    ],
  },
  structuredData: { article: true },
};
