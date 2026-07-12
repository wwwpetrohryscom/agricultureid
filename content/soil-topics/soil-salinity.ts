import type { SoilTopicContent } from '@/types/content';

export const soilSalinity: SoilTopicContent = {
  id: 'soil-topic-soil-salinity',
  slug: 'soil-salinity',
  contentType: 'soil-topic',
  title: 'Soil Salinity',
  topicClass: 'chemical',
  alternativeNames: ['Salt-affected soil', 'Soil salinization'],
  category: 'Soil chemical property',
  subcategory: 'Salt accumulation',
  summary:
    'Soil salinity refers to the concentration of soluble salts in the soil, which can impair plant water uptake and, in severe cases, cause direct ion toxicity. It is a distinct but related concern to sodicity, where excess exchangeable sodium degrades soil structure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Salinity develops when soluble salts — mainly sodium, calcium, magnesium, chloride, and sulfate ions — accumulate in the root zone faster than they are leached away. This is common in arid and semi-arid regions where evaporation exceeds rainfall, along irrigated land using salt-containing water, in poorly drained soils, and near coastal areas affected by seawater intrusion.',
    },
    {
      type: 'paragraph',
      text: 'Saline soils are conceptually distinct from sodic soils, where a high proportion of exchangeable sodium (relative to calcium and magnesium) degrades soil structure even when total salt concentration is not extreme. Some soils are both saline and sodic.',
    },
  ],
  keyFacts: [
    {
      label: 'Measured by',
      value:
        'Electrical conductivity (EC) of a saturated-paste or diluted soil extract',
    },
    {
      label: 'Sodicity indicator',
      value: 'Sodium adsorption ratio (SAR) or exchangeable sodium percentage',
    },
    {
      label: 'Common causes',
      value:
        'Salts in irrigation water, poor drainage, arid-climate evaporation, seawater intrusion',
    },
    {
      label: 'Plant effect',
      value:
        'Osmotic stress limiting water uptake, plus possible specific-ion toxicity',
    },
    {
      label: 'Sodic soils',
      value:
        'High exchangeable sodium disperses clay, degrading structure and drainage',
    },
    {
      label: 'Managed by',
      value:
        'Improved drainage, leaching with suitable water, gypsum for sodic soils, salt-tolerant crops',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil salinity is',
      body: [
        {
          type: 'paragraph',
          text: 'Salinity is assessed by measuring the electrical conductivity (EC) of a soil-water extract, since dissolved salts conduct electricity in proportion to their concentration. Higher EC values indicate greater accumulation of soluble salts in the root zone.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Saline soil',
              description:
                'Elevated soluble salt concentration in the soil solution, measured as electrical conductivity.',
            },
            {
              term: 'Sodic soil',
              description:
                'Elevated exchangeable sodium relative to other cations, which disperses clay and degrades structure, independent of total salt level.',
            },
            {
              term: 'Saline-sodic soil',
              description:
                'A soil exhibiting both elevated total salts and elevated exchangeable sodium.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why salinity matters',
      body: [
        {
          type: 'paragraph',
          text: 'Dissolved salts raise the osmotic pressure of the soil solution, making it harder for plant roots to draw in water even when the soil appears moist — an effect sometimes called physiological drought. Some ions, notably chloride and sodium, can also accumulate in plant tissue to toxic concentrations. Sodic soils additionally lose structural stability, restricting drainage, aeration, and root growth.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How salinity and sodicity are assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Laboratories report soil salinity as EC of a saturated-paste extract (or a standardized dilution) and assess sodicity via SAR or exchangeable sodium percentage. Field indicators — visible salt crusts, patchy or stunted crop stands, and slow water infiltration — can suggest a problem but are not a substitute for testing.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Crop tolerance to salinity varies widely; a salinity level that damages one crop may be tolerated by another, so interpretation should reference the specific crop being grown.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing salt-affected soils',
      body: [
        {
          type: 'paragraph',
          text: 'Management focuses on preventing further accumulation and, where feasible, leaching accumulated salts below the root zone using good-quality water and adequate drainage. Sodic soils typically require a calcium source, such as gypsum, to displace exchangeable sodium before leaching can restore structure.',
        },
        {
          type: 'list',
          items: [
            'Improve or install drainage so leached salts can move below the root zone',
            'Use irrigation water quality testing to avoid adding further salt load',
            'Apply gypsum or other calcium amendments to address sodicity where indicated by testing',
            'Select relatively salt-tolerant crops for affected areas while remediation is underway',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Leaching without adequate drainage can raise water tables and worsen salinity; drainage and leaching should be planned together, following local guidance.',
        },
      ],
    },
    {
      id: 'irrigation-and-climate',
      heading: 'Irrigation and climate interactions',
      body: [
        {
          type: 'paragraph',
          text: 'Salinity risk is closely tied to climate and irrigation method. Arid and semi-arid regions with high evaporative demand concentrate salts at the surface, and irrigation methods that wet the whole soil surface can increase this risk compared with methods that apply water more precisely to the root zone.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cotton' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'nutrient', slug: 'chlorine' },
  ],
  glossaryTerms: ['evapotranspiration', 'soil-texture'],
  geographicScope:
    'Most relevant in arid, semi-arid, coastal, and irrigated regions worldwide; salinity risk and management needs vary strongly by climate and water source.',
  climateContext:
    'Salt accumulation is driven largely by the balance between evaporation/evapotranspiration and leaching rainfall or irrigation.',
  limitations: [
    'Crop salt tolerance varies widely; general salinity levels cannot be interpreted without reference to the specific crop.',
    'Sodicity and salinity are related but distinct conditions requiring different diagnostic tests and remedies.',
    'Remediation approaches such as gypsum application and leaching depend on local drainage, water quality, and regulations.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil salinity and sodicity assessment',
    },
    { sourceId: 'fao-soils', citedFor: 'Salt-affected soils and management' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Irrigation water quality and salinity management',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global distribution of salt-affected soils',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Salinity',
    description:
      'Soil salinity and sodicity explained: how soluble salts affect plants, how they are measured, and drainage, leaching, and gypsum-based management.',
    keywords: ['soil salinity', 'sodic soil', 'salt-affected soil', 'soil ec'],
  },
  structuredData: { article: true },
};
