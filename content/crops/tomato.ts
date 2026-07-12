import type { CropContent } from '@/types/content';

export const tomato: CropContent = {
  id: 'crop-tomato',
  slug: 'tomato',
  contentType: 'crop',
  title: 'Tomato',
  scientificName: 'Solanum lycopersicum (syn. Lycopersicon esculentum)',
  alternativeNames: ['Love apple'],
  category: 'Vegetable crop',
  subcategory: 'Fruiting vegetable (solanaceous)',
  botanicalFamily: 'Solanaceae (nightshades)',
  lifecycle: 'Perennial in frost-free climates; grown as an annual elsewhere',
  summary:
    'Tomato is a fruiting vegetable crop grown worldwide for fresh consumption and processing, cultivated in open-field, high-tunnel, and greenhouse systems across a wide range of climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato is one of the most widely grown vegetable crops in the world, produced both for fresh consumption and for processing into sauces, paste, and canned products. Botanically, the fruit is a berry, though it is grown, marketed, and used culinarily as a vegetable.',
    },
    {
      type: 'paragraph',
      text: 'Tomato plants are classified by growth habit as determinate or indeterminate, a distinction that strongly influences how the crop is staked, pruned, and harvested. Production ranges from open-field systems to intensively managed greenhouse and high-tunnel operations.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshades)' },
    {
      label: 'Life cycle',
      value: 'Perennial in frost-free climates; grown as an annual',
    },
    { label: 'Scientific name', value: 'Solanum lycopersicum' },
    {
      label: 'Primary uses',
      value: 'Fresh market consumption and processing (sauce, paste, canning)',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; sensitive to frost and to temperature extremes at flowering',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams with good structure and steady moisture supply',
      note: 'Optimal ranges are variety- and system-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato is grown in an unusually wide range of production systems, from low-input open fields to highly controlled greenhouses, reflecting both its economic importance and its sensitivity to weather during fruit set and ripening.',
        },
        {
          type: 'paragraph',
          text: 'Cultivars are broadly divided by growth habit and by intended use, such as fresh-market slicing tomatoes, processing tomatoes bred for mechanical harvest, and smaller-fruited types grown for salads and snacking.',
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
            { term: 'Family', description: 'Solanaceae (nightshade family)' },
            { term: 'Genus and species', description: 'Solanum lycopersicum' },
            {
              term: 'Fruit type',
              description:
                'Botanically a berry, though grown and used as a vegetable',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Growth habit types',
          columns: ['Growth habit', 'Plant form', 'Typical management'],
          rows: [
            [
              'Determinate',
              'Compact plants that stop vegetative growth once flower clusters form at the shoot tip',
              'Often grown with minimal staking; fruit tends to ripen over a shorter period',
            ],
            [
              'Indeterminate',
              'Continuously growing vine that keeps producing new leaves and flower clusters',
              'Typically staked or trellised; fruit is produced and harvested over an extended period',
            ],
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
          text: 'The wild relatives of cultivated tomato are native to the Andean region of western South America, while domestication is generally attributed to Mesoamerica. Following European contact, tomato spread to Europe and, over subsequent centuries, became established as a major food crop worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Tomato is now grown across a very wide range of countries and climates, both in open fields and under protected culture. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato is a warm-season crop sensitive to frost and to chilling injury at low temperatures. Fruit set can also be impaired by temperature extremes at flowering, whether from excessive heat or from cool conditions, which affects pollen viability.',
        },
        {
          type: 'paragraph',
          text: 'Protected-culture systems such as greenhouses and high tunnels are used in many regions to extend the growing season and buffer against unfavorable outdoor temperatures.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato performs best on well-drained loams with good structure and steady moisture supply. It is sensitive to waterlogging, which increases the risk of root diseases, and to irregular soil moisture, which is associated with certain fruit-quality disorders.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability and drainage should be assessed with local soil survey information, particularly in open-field production.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato is typically established from transplants raised in a nursery, though direct seeding is used in some processing tomato systems. Indeterminate types are commonly staked or trellised and pruned to manage the canopy, while determinate types are often grown more freely.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to growth habit, intended use, and local disease pressure',
            'Crop rotation away from other solanaceous crops to manage soilborne diseases',
            'Staking, trellising, or pruning systems suited to the growth habit and production scale',
            'Timely irrigation and mulching to maintain even soil moisture',
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
          text: 'Tomato requires a balanced supply of nitrogen, phosphorus, and potassium to support vegetative growth and fruit development, with calcium availability also relevant to fruit quality. Requirements depend on soil supply, variety, and production system.',
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
          text: 'Consistent water supply is important throughout the tomato growing cycle, and irregular watering is associated with certain fruit disorders. Both open-field and protected-culture systems commonly use drip irrigation to manage moisture precisely.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate; reference methods and data are published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato is affected by diseases including late blight, powdery mildew, and Fusarium wilt, whose severity depends on region, variety, and production system. Whiteflies, aphids, and thrips are among the common insect pests, several of which also transmit economically important viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant varieties, crop rotation, sanitation, field or greenhouse monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest maturity depends on the intended market: fresh-market fruit may be picked at a partially ripe stage for later ripening and transport, while fruit for local sale or home use is often left to ripen more fully on the vine. Processing tomatoes are typically harvested at full ripeness, often mechanically, in a single pass.',
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
            'Fresh consumption in salads and cooked dishes',
            'Processing into sauces, paste, ketchup, and canned products',
            'Juice and other processed beverages in some markets',
            'Dried and sun-dried tomato products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [{ type: 'soil', slug: 'loam-soil' }],
  relatedTopics: [{ type: 'crop', slug: 'potato' }],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'integrated-pest-management',
    'host-plant',
  ],
  geographicScope:
    'Global overview. Production system (open field, high tunnel, or greenhouse), variety choice, and pest pressure vary widely by region and are not reduced to universal guidance here.',
  climateContext:
    'Warm-season crop sensitive to frost and to temperature extremes at flowering; grown in open-field and protected-culture systems across many climates.',
  limitations: [
    'Production system, variety, and staking or trellising method are region- and operation-specific choices not covered by universal values here.',
    'Disease and pest pressure, including late blight and virus-transmitting insects, varies considerably by region and season.',
    'Fertilizer and irrigation programs should follow local soil and water testing rather than generic rates.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of tomato in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for tomato' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Tomato disease diagnosis and management',
    },
    { sourceId: 'usda-ars', citedFor: 'Tomato disease and pest research' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tomato',
    description:
      'A structured, evidence-based reference on tomato: classification, climate and soil needs, agronomy, common diseases and pests, and culinary uses.',
    keywords: [
      'tomato',
      'Solanum lycopersicum',
      'vegetable crop',
      'fruiting vegetable',
    ],
  },
  structuredData: { article: true },
};
