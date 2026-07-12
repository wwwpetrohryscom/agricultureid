import type { CropContent } from '@/types/content';

export const oilPalm: CropContent = {
  id: 'crop-oil-palm',
  slug: 'oil-palm',
  contentType: 'crop',
  title: 'Oil palm',
  scientificName: 'Elaeis guineensis',
  alternativeNames: ['African oil palm'],
  category: 'Tree crop',
  subcategory: 'Tropical oil palm',
  botanicalFamily: 'Arecaceae (palm family)',
  lifecycle: 'Perennial',
  summary:
    'Oil palm is a tropical palm grown for its fruit bunches, which yield both palm oil from the fruit mesocarp and palm kernel oil from the seed, making it the highest-yielding major vegetable oil crop per unit area.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oil palm produces large fruit bunches containing hundreds of individual fruits, each yielding oil from two distinct tissues: the fibrous mesocarp (crude palm oil) and the kernel (palm kernel oil), giving the crop two commercially valuable oil streams from a single harvest.',
    },
    {
      type: 'paragraph',
      text: 'Because the palm requires several years to reach bearing age and then remains productive for decades, oil palm is a long-term plantation crop, and land-use change associated with new plantings, particularly in tropical forest regions, is a significant environmental consideration in its production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Arecaceae (palm family)' },
    { label: 'Life cycle', value: 'Perennial palm tree' },
    { label: 'Main species', value: 'Elaeis guineensis' },
    {
      label: 'Primary uses',
      value: 'Crude palm oil and palm kernel oil for food and industrial use',
    },
    {
      label: 'Climate',
      value:
        'Humid tropical lowland; consistently warm with well-distributed rainfall',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained sandy, alluvial, and lateritic soils',
      note: 'Site and drainage strongly affect long-term productivity.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Oil palm is grown as a large-scale plantation crop across humid tropical lowlands, with major production concentrated in Southeast Asia and expanding cultivation in parts of West and Central Africa and Latin America.',
        },
        {
          type: 'paragraph',
          text: 'Both large commercial estates and smallholder growers, often linked to central processing mills, contribute substantially to global production, with fresh fruit bunches processed shortly after harvest to limit free fatty acid buildup in the oil.',
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
            { term: 'Family', description: 'Arecaceae (palm family)' },
            { term: 'Genus and species', description: 'Elaeis guineensis' },
            {
              term: 'Commercial planting material',
              description:
                'Tenera hybrids (a cross of thick-shelled dura and shell-less pisifera types), selected for high oil-to-bunch ratio',
            },
            {
              term: 'Growth habit',
              description:
                'Single-stemmed perennial palm producing large fruit bunches continuously once mature',
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
          text: 'Oil palm is native to the humid tropical lowlands of West and Central Africa, where it was traditionally harvested from semi-wild groves before organized plantation cultivation developed, first regionally and then, from the twentieth century, on a large scale in Southeast Asia.',
        },
        {
          type: 'paragraph',
          text: 'Southeast Asia, particularly Indonesia and Malaysia, now accounts for the large majority of global production, with growing cultivation in West Africa and parts of Latin America. Current production and trade figures are compiled by FAO and national agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oil palm requires consistently warm temperatures and well-distributed rainfall throughout the year, without a pronounced dry season, reflecting its origin in humid equatorial lowland forest climates.',
        },
        {
          type: 'paragraph',
          text: 'The crop has no meaningful cold or frost tolerance, and extended dry periods can reduce bunch number and oil yield in subsequent harvests.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oil palm is grown on a range of tropical soils, including deep sandy soils, alluvial soils, and lateritic soils, provided they are well drained and reasonably deep to support the palm’s extensive root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Plantations on sloping land require erosion-control measures such as terracing and cover cropping. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Plantations are established from tenera hybrid seedlings raised in nurseries for around a year before field planting, with spacing designed to balance light interception, yield, and access for harvesting.',
        },
        {
          type: 'list',
          items: [
            'Use of certified tenera hybrid seedlings for high oil yield potential',
            'Systematic triangular or square spacing suited to mature canopy development',
            'Erosion-control planting and terracing on sloping sites',
            'Long-term replanting cycles as palms decline in productivity and become difficult to harvest at height',
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
          text: 'Potassium is required in large amounts to support bunch production and is often the most yield-limiting nutrient in mature plantations, while magnesium deficiency is a common concern, particularly on soils that are also heavily fertilized with potassium.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Oil palm is grown predominantly under rain-fed conditions in humid equatorial regions with well-distributed rainfall, though supplemental drip irrigation is used in nurseries and in areas with a more pronounced dry season.',
        },
        {
          type: 'paragraph',
          text: 'Sustained water deficit reduces the number of female inflorescences that develop into bunches, with effects on yield appearing months after the period of stress.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt causes vascular disease and progressive decline in susceptible planting material in some production regions, and basal stem and root rots can affect palm stability and longevity, particularly in older or stressed stands. Weevils can damage the crown and developing tissues, and scale insects can build up on foliage.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on planting material selected for tolerance where available, field sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Ripe fruit bunches are cut using long-handled chisels or sickles once loose fruits begin to detach, a key ripeness indicator, and are transported promptly to a processing mill to limit oil quality loss from fruit bruising and free fatty acid buildup.',
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
            'Crude palm oil for cooking oil, food manufacturing, and oleochemicals',
            'Palm kernel oil for food, cosmetics, and industrial applications',
            'Palm kernel meal used as animal feed',
            'Empty fruit bunches and fiber used as mulch, boiler fuel, or in composting',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coconut' },
    { type: 'crop', slug: 'rubber' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'macronutrient'],
  geographicScope:
    'Global overview of humid tropical lowland production, concentrated in Southeast Asia, West and Central Africa, and Latin America.',
  climateContext:
    'Warm, humid equatorial palm requiring rainfall without a pronounced dry season; no frost or cold tolerance.',
  limitations: [
    'Land-use, environmental, and certification considerations associated with new plantings vary by jurisdiction and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global oil palm production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Oil palm disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Oil palm',
    description:
      'A structured, evidence-based reference on oil palm: classification, tropical climate needs, plantation management, nutrition, diseases, pests, and uses.',
    keywords: [
      'oil palm',
      'Elaeis guineensis',
      'palm oil',
      'oil palm plantation',
    ],
  },
  structuredData: { article: true },
};
