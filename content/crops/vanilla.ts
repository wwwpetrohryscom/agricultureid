import type { CropContent } from '@/types/content';

export const vanilla: CropContent = {
  id: 'crop-vanilla',
  slug: 'vanilla',
  contentType: 'crop',
  title: 'Vanilla',
  scientificName: 'Vanilla planifolia',
  category: 'Spice crop',
  subcategory: 'Perennial climbing orchid vine',
  botanicalFamily: 'Orchidaceae (orchid family)',
  lifecycle: 'Perennial',
  summary:
    'Vanilla is a climbing, vine-like orchid grown for its long seed pods, hand-pollinated and cured through a lengthy process to develop the characteristic aroma used in flavoring and fragrance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vanilla is the only orchid genus cultivated at commercial agricultural scale for a food product. Plants climb supporting trees or trellises, producing aerial roots along the stem that anchor the vine and absorb moisture and nutrients.',
    },
    {
      type: 'paragraph',
      text: 'Outside its native range, vanilla lacks its natural pollinators, so flowers are hand-pollinated within a single day of opening, a labor-intensive step that is a defining feature of commercial vanilla cultivation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Orchidaceae (orchid family)' },
    { label: 'Life cycle', value: 'Perennial climbing vine' },
    { label: 'Main species', value: 'Vanilla planifolia' },
    { label: 'Primary uses', value: 'Cured seed pods as a flavoring spice' },
    {
      label: 'Climate',
      value: 'Warm, humid tropical, typically grown with partial shade',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams rich in organic matter',
      note: 'Grown with support trees or trellises rather than in open field beds.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Vanilla is grown mainly by smallholder farmers in a small number of tropical producing regions, trained along living support trees or artificial trellises under partial shade.',
        },
        {
          type: 'paragraph',
          text: 'Because of the hand-pollination requirement and the lengthy curing process needed to develop flavor, vanilla is one of the most labor-intensive spice crops grown, contributing to its high market value.',
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
            { term: 'Family', description: 'Orchidaceae (orchid family)' },
            { term: 'Genus', description: 'Vanilla' },
            { term: 'Principal species', description: 'Vanilla planifolia' },
            {
              term: 'Growth habit',
              description:
                'Climbing, semi-epiphytic vine with fleshy stems, aerial roots, and elongated seed pods following hand or insect pollination',
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
          text: 'Vanilla is native to the tropical forests of Mexico and Central America, where it was traditionally pollinated by native bee species. Cultivation spread to other tropical regions in the nineteenth century, requiring the development of hand-pollination techniques where those pollinators are absent.',
        },
        {
          type: 'paragraph',
          text: 'Madagascar is today the leading global producer, with additional significant production in Indonesia and other tropical countries. Production and trade statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Vanilla requires a consistently warm, humid tropical climate with well-distributed rainfall and generally benefits from partial shade, mimicking the dappled light of its native forest habitat. It has essentially no cold tolerance.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams rich in organic matter support healthy root and aerial-root development. Because vines are grown up living or artificial supports, overall site drainage and organic matter management matter more than deep-soil characteristics alone.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Shade level, humidity, and support-tree selection should be planned together, since these factors strongly influence vine health and flowering.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Establishment from stem cuttings trained up living support trees or artificial trellises',
            'Hand-pollination of flowers within hours of opening in regions lacking natural pollinators',
            'Shade management through the choice and pruning of support trees or shade structures',
            'Vine training and pruning to manage length and encourage flowering along the stem',
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
          text: 'Potassium supports pod development, while nitrogen contributes to vine growth, particularly important given the extended vine length needed to support commercial flowering and fruiting.',
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
          text: 'Vanilla requires consistent moisture and humidity, and is grown predominantly under rain-fed conditions in regions with abundant, well-distributed rainfall.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental drip irrigation is used in some production areas during drier periods to maintain the moisture levels the crop requires for healthy growth and flowering.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium-associated root and stem rot is one of the most significant diseases of vanilla, capable of killing vines under humid, poorly drained conditions, and anthracnose can affect stems and developing pods. Mealybugs and aphids are common sap-feeding pests affecting vines and pods.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root rot',
              'Disease',
              'Major disease risk under humid, poorly drained conditions',
            ],
            ['Anthracnose', 'Disease', 'Affects stems and developing pods'],
            ['Mealybugs', 'Pest', 'Sap-feeding insects on vines and pods'],
            ['Aphids', 'Pest', 'Sap-feeding insects affecting young growth'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pods are hand-picked individually as they reach maturity, typically several months after pollination, and then undergo an extended curing process of blanching, sweating, drying, and conditioning that develops the characteristic aroma and dark color of finished vanilla.',
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
            'Cured whole pods and vanilla extract used widely in baking, confectionery, and beverages',
            'Vanilla flavoring compounds used across the food and beverage industry',
            'Vanilla absolute and extracts used in the fragrance and cosmetics industries',
            'Lower-grade pods and by-products used in extract and flavoring manufacture',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cardamom' },
    { type: 'crop', slug: 'clove' },
    { type: 'crop', slug: 'cocoa' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; Madagascar is the leading producer, with significant additional production in Indonesia and other tropical regions.',
  climateContext:
    'Warm, humid, shade-adapted tropical vine crop with no cold tolerance, typically trained on living support trees or trellises.',
  limitations: [
    'Hand-pollination practices and curing methods vary by region and are not detailed exhaustively here.',
    'Production statistics and market prices change considerably year to year and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global vanilla production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Vanilla disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Vanilla',
    description:
      'A structured, evidence-based reference on vanilla: classification, tropical climate needs, hand-pollination, diseases, pests, harvest, and flavoring uses.',
    keywords: [
      'vanilla',
      'Vanilla planifolia',
      'spice crop',
      'vanilla cultivation',
    ],
  },
  structuredData: { article: true },
};
