import type { CropContent } from '@/types/content';

export const alfalfa: CropContent = {
  id: 'crop-alfalfa',
  slug: 'alfalfa',
  contentType: 'crop',
  title: 'Alfalfa',
  scientificName: 'Medicago sativa',
  alternativeNames: ['Lucerne'],
  category: 'Forage crop',
  subcategory: 'Perennial leguminous forage',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'Alfalfa is a deep-rooted, nitrogen-fixing perennial legume grown primarily as hay and forage for livestock. Stands can remain productive for several years, with multiple cuttings taken each season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Alfalfa, also known as lucerne in many regions, is a perennial forage legume valued for its high protein content, palatability, and yield across repeated cuttings within a season. Its deep taproot allows it to access moisture and nutrients from lower in the soil profile than many shallower-rooted crops.',
    },
    {
      type: 'paragraph',
      text: 'As a legume, alfalfa forms a symbiotic relationship with nitrogen-fixing rhizobia bacteria in root nodules, allowing the crop to meet much of its own nitrogen requirement rather than depending on applied nitrogen fertilizer.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Life cycle',
      value: 'Perennial, typically productive for several years',
    },
    { label: 'Main species', value: 'Medicago sativa' },
    {
      label: 'Primary uses',
      value: 'Hay, haylage, and pasture for livestock feed',
    },
    {
      label: 'Climate',
      value:
        'Widely adapted; deep roots support drought tolerance once established',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams; near-neutral to slightly alkaline pH',
      note: 'Intolerant of poorly drained or persistently wet soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa is one of the most widely grown forage legumes, valued by livestock producers for its high yield and forage quality across multiple cuttings per growing season. It is also an important rotation crop, contributing organic matter and residual soil nitrogen to subsequent crops.',
        },
        {
          type: 'paragraph',
          text: 'Because a well-managed stand can remain productive for several years, establishment decisions such as variety selection, inoculation, and seedbed preparation have a lasting influence on stand performance.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus', description: 'Medicago' },
            {
              term: 'Principal species',
              description: 'Medicago sativa',
            },
            {
              term: 'Growth habit',
              description:
                'Deep-rooted perennial legume forming symbiotic nitrogen-fixing root nodules with rhizobia bacteria',
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
          text: 'Alfalfa is believed to have originated in the region encompassing present-day Iran and Central Asia, where it was domesticated in antiquity, and it spread along historical trade routes into the Mediterranean, Europe, and eventually worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Alfalfa is now grown across temperate and semi-arid regions on multiple continents as a major forage crop. Production statistics and regional importance vary and are best obtained from primary sources such as FAOSTAT and national agricultural statistics.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa is adapted to a wide range of climates, with dormant and semi-dormant varieties suited to colder regions with pronounced winters, and non-dormant types used in milder or subtropical climates where growth continues over more of the year.',
        },
        {
          type: 'paragraph',
          text: 'Its deep taproot provides considerable drought tolerance once a stand is established, allowing continued growth under moisture conditions that would stress many shallower-rooted crops.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa performs best on deep, well-drained loam soils with near-neutral to slightly alkaline pH. It is notably intolerant of poor drainage and prolonged waterlogging, which favor root and crown diseases and reduce stand persistence.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil pH and drainage should be assessed before establishment, since correcting acidity or drainage problems is far easier before planting a multi-year perennial stand.',
        },
      ],
    },
    {
      id: 'stand-establishment',
      heading: 'Stand establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa is seeded into a firm, well-prepared seedbed, and inoculation with the appropriate rhizobia is recommended where alfalfa has not been grown recently, to help ensure effective nitrogen fixation from the outset.',
        },
        {
          type: 'list',
          items: [
            'Variety selection for winter-hardiness/dormancy class matched to the region',
            'Seed inoculation with compatible rhizobia where needed',
            'Cutting schedule balancing yield, forage quality, and stand persistence',
            'Multi-year stand management, since alfalfa is not replanted annually',
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
          text: 'As a nitrogen-fixing legume, a well-nodulated alfalfa stand typically requires little or no applied nitrogen. However, repeated hay cuttings remove substantial phosphorus and potassium, which generally need to be replenished based on soil testing to sustain yield and stand health.',
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
          text: 'Alfalfa is grown both rain-fed, where its deep rooting supports reasonable drought tolerance, and under irrigation in arid and semi-arid production regions, where irrigated alfalfa is a major forage crop.',
        },
        {
          type: 'paragraph',
          text: 'Center-pivot and other pressurized irrigation systems are widely used in irrigated alfalfa production to support consistent yield across multiple cuttings per season.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot, associated with soil-borne pathogens favored by wet, poorly drained conditions, is a major cause of stand decline in alfalfa, while powdery mildew can affect foliage, particularly late in the season. Aphids are significant pests capable of causing direct feeding damage and reducing forage yield, and spider mites can become problematic under hot, dry conditions.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, attention to drainage at establishment, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa is typically cut for hay at a bud-to-early-bloom growth stage that balances yield against forage quality, with multiple cuttings taken through the growing season depending on climate and management. Proper curing and drying after cutting are important for preserving forage quality before baling or ensiling.',
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
            'Hay and haylage for dairy cattle, beef cattle, and horses',
            'Pasture and grazing in some production systems',
            'Pelleted alfalfa products for feed and export markets',
            'Rotation benefits, including residual soil nitrogen for following crops',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [{ type: 'soil', slug: 'loam-soil' }],
  connections: [
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'baler' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sorghum' },
  ],
  glossaryTerms: ['perennial-crop', 'forage', 'crop-rotation', 'ruminant'],
  geographicScope:
    'Global overview. Dormancy class, cutting schedule, and irrigation practice vary widely by region.',
  climateContext:
    'Deep-rooted perennial legume widely adapted across temperate and semi-arid regions; grown rain-fed or irrigated.',
  limitations: [
    'Variety dormancy class and cutting-schedule specifics are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT and USDA NASS.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global forage legume production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Alfalfa breeding and forage research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Alfalfa disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Alfalfa',
    description:
      'A structured, evidence-based reference on alfalfa: classification, climate and soil needs, stand establishment, nutrition, diseases, pests, and uses.',
    keywords: ['alfalfa', 'Medicago sativa', 'lucerne', 'forage legume'],
  },
  structuredData: { article: true },
};
