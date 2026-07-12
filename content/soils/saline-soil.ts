import type { SoilContent } from '@/types/content';

export const salineSoil: SoilContent = {
  id: 'soil-saline',
  slug: 'saline-soil',
  contentType: 'soil',
  title: 'Saline Soil',
  alternativeNames: ['Salt-affected soil', 'Salinized soil'],
  category: 'Soil type',
  subcategory: 'Salt-affected soil',
  texture:
    'Variable texture; defined by high soluble salt content in the soil solution rather than particle size',
  summary:
    'Saline soil contains elevated levels of soluble salts in the soil solution, raising osmotic stress on plant roots and reducing water availability even when soil moisture is present. It commonly develops in arid and semi-arid regions, poorly drained land, and irrigated areas with inadequate leaching or drainage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil salinity is measured by the electrical conductivity (EC) of the soil solution, which rises with the concentration of soluble salts. Saline soils occur naturally in arid and semi-arid regions where evaporation exceeds rainfall and salts are not leached away, and can also develop or intensify through human activity, particularly irrigation with saline water or insufficient drainage.',
    },
    {
      type: 'paragraph',
      text: 'Saline soils are related to, but distinct from, sodic soils, in which high exchangeable sodium causes structural breakdown rather than primarily osmotic stress; some soils are affected by both conditions together. High soluble salt content can occur across any texture class, though poor drainage in fine-textured soils often makes salinity harder to manage.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Salt-affected soil (high soluble salt content)' },
    {
      label: 'Measured by',
      value: 'Electrical conductivity (EC) of the saturated soil extract',
    },
    {
      label: 'Common causes',
      value:
        'Arid or semi-arid climate, saline groundwater, poor drainage, irrigation with insufficient leaching',
    },
    {
      label: 'Effect on plants',
      value:
        'Osmotic stress reduces water uptake even when soil moisture is present',
    },
    {
      label: 'Distribution',
      value:
        'Most extensive in arid and semi-arid regions and some irrigated lowlands',
    },
    {
      label: 'Management basis',
      value: 'Drainage, leaching, salt-tolerant crops, and water management',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Salinity is defined by the concentration of soluble salts in the soil solution rather than by texture, and can develop on almost any soil type given the right combination of climate, drainage, and water source. It is distinct from, though sometimes associated with, sodic soils, where high exchangeable sodium causes structural rather than primarily osmotic problems.',
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
              term: 'Osmotic effect',
              description:
                'High salt concentration in the soil solution reduces the ability of roots to draw in water, even when soil moisture content appears adequate.',
            },
            {
              term: 'Ion toxicity',
              description:
                'Specific ions such as sodium or chloride can be directly toxic to sensitive crops at high concentrations.',
            },
            {
              term: 'Drainage interaction',
              description:
                'Poor drainage concentrates salts near the surface through evaporation and capillary rise, especially in low-lying or fine-textured soils.',
            },
            {
              term: 'Texture independence',
              description:
                'Salinity can occur in soils of any texture class; the underlying cause is the salt content of the soil solution, not the mineral particles themselves.',
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
          text: 'Managing saline soils centres on moving salts below the root zone and preventing their re-accumulation, alongside matching crop choice to the salinity level present.',
        },
        {
          type: 'list',
          items: [
            'Improve drainage to allow leaching of salts below the root zone',
            'Where water supply and drainage allow, apply enough water beyond crop needs to leach accumulated salts',
            'Select salt-tolerant crops or varieties suited to the local salinity level',
            'Where sodium accumulation is also a factor, gypsum applications are a common reclamation tool used under local agronomic guidance',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Salinity management is highly site-specific and depends on local water quality, drainage, and soil chemistry. Follow local agronomic or extension guidance and confirm conditions with soil and water testing before undertaking reclamation work.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Barley is among the more salt-tolerant cereal crops and is commonly grown on moderately saline soils. Sugar beet is also relatively salt-tolerant. Many other crops are considerably more sensitive and can suffer yield loss at salinity levels that barley or sugar beet tolerate well.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a saline soil',
      body: [
        {
          type: 'paragraph',
          text: 'Soil salinity is assessed through laboratory testing of electrical conductivity, typically from a saturated paste extract or a standard soil-to-water extract. Local extension services or accredited soil laboratories provide the most reliable testing and interpretation for a given crop and region.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  glossaryTerms: ['soil-texture', 'cultivar', 'yield'],
  geographicScope:
    'General soil-science overview of salt-affected soils occurring in arid and semi-arid regions worldwide and in some irrigated or poorly drained lowlands; salinity levels and causes vary greatly by location.',
  climateContext:
    'Most prevalent in arid and semi-arid climates where evaporation exceeds rainfall, concentrating salts at or near the surface; irrigation without adequate drainage can produce similar effects in wetter climates.',
  limitations: [
    'Salinity severity and appropriate crop or management thresholds vary by soil, water source, and local climate; this overview does not substitute for site-specific soil and water testing.',
    'Sodic soils, involving high exchangeable sodium and structural breakdown, are a related but distinct condition that may require different management.',
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
    {
      sourceId: 'fao-land-water',
      citedFor: 'Salinity, drainage, and irrigation water management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Saline Soil',
    description:
      'Saline soil explained: soluble salt content, electrical conductivity, osmotic stress on plants, drainage and leaching management, and crop tolerance.',
    keywords: [
      'saline soil',
      'soil salinity',
      'salt-affected soil',
      'soil drainage',
    ],
  },
  structuredData: { article: true },
};
