import type { CropContent } from '@/types/content';

export const eggplant: CropContent = {
  id: 'crop-eggplant',
  slug: 'eggplant',
  contentType: 'crop',
  title: 'Eggplant',
  scientificName: 'Solanum melongena',
  alternativeNames: ['Aubergine', 'Brinjal'],
  category: 'Vegetable crop',
  subcategory: 'Solanaceous (fruiting) vegetable',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Perennial in frost-free climates; commonly grown as an annual',
  summary:
    'Eggplant is a warm-season solanaceous fruiting vegetable grown for its glossy, variably shaped and colored fruit, cultivated in open fields and protected culture across warm and temperate regions.',
  introduction: [
    {
      type: 'paragraph',
      text: "Eggplant is grown for its fleshy fruit, which varies widely by cultivar in size, shape, and color from the familiar large purple-black oval to smaller, slender, green, white, or striped types favored in different regional cuisines. Like tomato and sweet pepper, it belongs to the nightshade family and shares several of that family's pest and disease vulnerabilities.",
    },
    {
      type: 'paragraph',
      text: 'Eggplant is a tender perennial in frost-free tropical climates but is grown as an annual crop across most of its commercial range, requiring warm temperatures throughout its growing period and being sensitive to cold and frost.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Life cycle',
      value: 'Perennial in frost-free climates; commonly grown as an annual',
    },
    { label: 'Main species', value: 'Solanum melongena' },
    {
      label: 'Primary uses',
      value: 'Fresh-market and cooked fruiting vegetable',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive and slow to establish in cool conditions',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, fertile loams',
      note: 'Susceptible to root diseases in poorly drained or previously infested soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Eggplant is grown as a warm-season fruiting vegetable, typically raised from transplants and cropped over an extended harvest period as new fruit forms continuously through the season under favorable conditions.',
        },
        {
          type: 'paragraph',
          text: 'Production spans open-field cultivation in warm climates and protected culture (greenhouses and high tunnels) in cooler regions, which extends the growing season and can improve fruit quality and pest management.',
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
            { term: 'Genus', description: 'Solanum' },
            {
              term: 'Principal species',
              description: 'Solanum melongena (cultivated eggplant)',
            },
            {
              term: 'Growth habit',
              description:
                'Woody-based perennial subshrub grown as a warm-season annual, bearing solitary or small clusters of fleshy fruit',
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
          text: 'Eggplant was domesticated in South and Southeast Asia from wild Solanum relatives, with a long history of cultivation and diversification across Asian cuisines before spreading to the Mediterranean, Africa, and eventually the Americas.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown widely across warm-temperate, subtropical, and tropical regions; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Eggplant requires warm temperatures throughout its growing period, generally performing best under conditions similar to or slightly warmer than those favored by tomato and sweet pepper, and it is notably slow to establish and prone to chilling injury in cool conditions.',
        },
        {
          type: 'paragraph',
          text: 'Frost kills the plant, so field production is timed to the local frost-free period, while protected culture allows earlier planting and extended harvest in cooler climates.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Eggplant performs best on well-drained, fertile loams with good moisture-holding capacity. Like other solanaceous crops, it is vulnerable to soil-borne root diseases where drainage is poor or where susceptible crops have been grown repeatedly on the same land.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Crop rotation away from other solanaceous crops helps manage soil-borne disease pressure. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Eggplant is typically established from transplants raised in a warm, protected environment and set out after frost risk has passed and soil has warmed, since the crop responds poorly to cold soil and air temperatures at planting.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to fruit type, market preference, and local season length',
            'Crop rotation with non-solanaceous crops to manage soil-borne disease risk',
            'Staking or support in some cultivars and growing systems to keep fruit off the ground',
            'Regular harvesting to encourage continued fruit set through the season',
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
          text: 'Potassium supports fruit development and quality over an extended harvest period, while phosphorus contributes to root establishment and early growth; nitrogen is managed to balance vegetative vigor against fruit set.',
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
          text: 'Eggplant requires consistent moisture throughout fruit development, and water stress can reduce fruit size and increase bitterness or misshapen fruit. Drip irrigation is widely used to supply water efficiently to the root zone in both field and protected culture.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Verticillium wilt is a significant soil-borne disease of eggplant, causing wilting and vascular discoloration, particularly where the crop or other susceptible hosts have been grown repeatedly. Bacterial leaf spot affects foliage and fruit under warm, wet conditions. The Colorado potato beetle, shared with other solanaceous crops, and aphids are among the notable insect pests.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or grafted rootstocks, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Eggplant fruit is harvested while still glossy and firm, before seeds inside mature and the flesh becomes bitter or spongy; overmature fruit loses market quality quickly. Harvest is typically by hand at regular intervals as fruit reaches marketable size.',
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
            'Fresh-market vegetable used in a wide range of regional cuisines',
            'Processed and preserved products in some markets',
            'Ornamental and specialty cultivars in home gardens',
            'Crop residues sometimes used as livestock feed in smallholder systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'verticillium-wilt' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'colorado-potato-beetle' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'zucchini' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'host-plant', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Warm-season crop, frost-sensitive and slow to establish under cool conditions; grown in open fields and protected culture.',
  limitations: [
    'Fruit shape, size, and color vary enormously by regional cultivar type; this entry covers the species generally rather than any single fruit type.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of eggplant in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Eggplant disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for eggplant',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Eggplant',
    description:
      'A structured, evidence-based reference on eggplant: classification, warm-season climate needs, soil, nutrition, diseases, pests, and uses.',
    keywords: [
      'eggplant',
      'Solanum melongena',
      'aubergine',
      'solanaceous vegetable',
    ],
  },
  structuredData: { article: true },
};
