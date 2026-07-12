import type { CropContent } from '@/types/content';

export const sweetPepper: CropContent = {
  id: 'crop-sweet-pepper',
  slug: 'sweet-pepper',
  contentType: 'crop',
  title: 'Sweet Pepper',
  scientificName: 'Capsicum annuum',
  alternativeNames: ['Bell pepper', 'Capsicum'],
  category: 'Vegetable crop',
  subcategory: 'Solanaceous (fruiting) vegetable',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Perennial in frost-free climates; commonly grown as an annual',
  summary:
    'Sweet pepper is a warm-season solanaceous fruiting vegetable grown for its mild, non-pungent fruit, cultivated in open fields and increasingly in protected culture such as greenhouses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweet pepper belongs to the same species, Capsicum annuum, as many pungent chili peppers, but is bred to lack significant capsaicin content, giving it a mild flavor. Fruit typically ripens from green through yellow, orange, or red depending on cultivar and market preference.',
    },
    {
      type: 'paragraph',
      text: 'Like its close relative tomato, sweet pepper is a fruiting solanaceous crop whose flowering and fruit set are sensitive to temperature extremes, and it is grown in an equally wide range of systems, from open fields to intensively managed greenhouses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Life cycle',
      value: 'Perennial in frost-free climates; grown as an annual',
    },
    { label: 'Scientific name', value: 'Capsicum annuum' },
    {
      label: 'Primary uses',
      value: 'Fresh consumption, cooking and roasting, and processing',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive, with fruit set impaired by temperature extremes',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, moderately fertile loams',
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
          text: 'Sweet pepper is grown for its hollow, fleshy fruit, which is botanically a berry but used and marketed as a vegetable. Cultivars vary in fruit shape, wall thickness, and color at maturity, from blocky bell types to elongated or tapered forms.',
        },
        {
          type: 'paragraph',
          text: 'Production spans open-field systems in warm climates to heated, trellised greenhouse production in cooler regions, where environmental control allows extended and more predictable harvest.',
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
            { term: 'Genus and species', description: 'Capsicum annuum' },
            {
              term: 'Fruit type',
              description:
                'Botanically a berry, though grown and used as a vegetable',
            },
            {
              term: 'Growth habit',
              description:
                'Branching, semi-woody perennial shrub in frost-free climates; grown as an annual elsewhere',
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
          text: 'Capsicum annuum originated in Mesoamerica, where wild and semi-domesticated peppers were used long before European contact. Following the Columbian Exchange, pepper spread rapidly across Europe, Africa, and Asia, and sweet, non-pungent types were subsequently developed for the fresh vegetable market.',
        },
        {
          type: 'paragraph',
          text: 'Sweet pepper is now grown across a wide range of climates in open-field and protected-culture systems. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet pepper is a warm-season crop sensitive to frost and to chilling injury. Fruit set can be reduced by temperature extremes at flowering, whether from excessive heat, which can cause flower and young fruit drop, or from cool conditions that affect pollen viability.',
        },
        {
          type: 'paragraph',
          text: 'Protected-culture systems such as greenhouses are widely used in cooler climates to buffer temperature extremes and extend the production season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet pepper performs best on well-drained, moderately fertile loams with good structure. It is sensitive to waterlogging, which increases the risk of root diseases, and to compacted soils that restrict root development.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage and structure should be assessed with local soil survey information, particularly in open-field production.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet pepper is typically established from transplants raised in a nursery. Staking or trellising is common, particularly in greenhouse production, to support the plant and improve fruit quality and airflow.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to fruit color, shape, and production system',
            'Crop rotation away from other solanaceous crops to manage shared soilborne diseases',
            'Staking or trellising to support plants and improve fruit quality',
            'Consistent irrigation and mulching to maintain even soil moisture',
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
          text: 'Sweet pepper requires a balanced supply of nitrogen, phosphorus, and potassium for vegetative growth and fruit development, with adequate calcium availability also relevant to fruit quality, as in tomato. Requirements depend on soil or nutrient-solution supply and production system.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region- and system-specific',
          text: 'Fertilizer and nutrient-solution programs should follow local soil tests, water analysis, and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent water supply throughout the growing cycle supports even fruit development, and irregular moisture is associated with certain fruit-quality disorders. Drip irrigation is widely used in both open-field and protected-culture production.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial leaf spot can cause significant foliar and fruit damage, and several viruses, including tobacco mosaic virus, are of concern and can be spread mechanically or by insect vectors. Whiteflies, thrips, aphids, and spider mites are among the common insect pests.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, sanitation, crop rotation, field or greenhouse monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit may be picked green, before full ripening, or left on the plant to ripen to its mature color, depending on market preference; fully ripened, colored fruit typically commands a premium but takes longer on the plant, affecting overall yield timing.',
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
            'Fresh consumption in salads and as a raw snack vegetable',
            'Cooking, roasting, grilling, and stuffing in many cuisines',
            'Processing into roasted, canned, or frozen products',
            'Use as a colorful garnish and ingredient across a wide range of dishes',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: [
    'cultivar',
    'host-plant',
    'integrated-pest-management',
    'micronutrient',
  ],
  geographicScope:
    'Global overview. Production system (open field or greenhouse), cultivar type, and input levels vary widely by region.',
  climateContext:
    'Warm-season fruiting vegetable sensitive to frost and to temperature extremes at flowering; grown in open-field and protected-culture systems.',
  limitations: [
    'Production system and staking or trellising method are region- and operation-specific and are not reduced to universal guidance here.',
    'Disease and pest pressure, including virus-transmitting insects, varies considerably by region and season.',
    'Fertilizer and irrigation programs should follow local soil and water testing rather than generic rates.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of sweet pepper in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for pepper' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Pepper disease diagnosis and management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sweet Pepper',
    description:
      'A structured reference on sweet pepper: classification, climate and soil needs, agronomy, common diseases and pests, and culinary uses.',
    keywords: [
      'sweet pepper',
      'Capsicum annuum',
      'bell pepper',
      'pepper agronomy',
    ],
  },
  structuredData: { article: true },
};
