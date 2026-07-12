import type { CropContent } from '@/types/content';

export const lavender: CropContent = {
  id: 'crop-lavender',
  slug: 'lavender',
  contentType: 'crop',
  title: 'Lavender',
  scientificName: 'Lavandula angustifolia',
  alternativeNames: ['English lavender'],
  category: 'Aromatic and essential oil crop',
  subcategory: 'Perennial Mediterranean shrub herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Lavender is a woody, evergreen or semi-evergreen Mediterranean shrub grown for its fragrant flower spikes, used for dried flowers, culinary applications, and steam-distilled essential oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lavender is a compact, silvery-leaved shrub grown both as a specialty agricultural crop, particularly for essential oil, and as an ornamental and landscape plant valued for its form, color, and fragrance.',
    },
    {
      type: 'paragraph',
      text: 'Several Lavandula species and numerous cultivars are grown commercially, differing in flower color, oil composition, and climatic tolerance, with English lavender (Lavandula angustifolia) generally regarded as producing the finest-quality oil.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    {
      label: 'Life cycle',
      value: 'Perennial evergreen to semi-evergreen shrub',
    },
    { label: 'Main species', value: 'Lavandula angustifolia' },
    {
      label: 'Primary uses',
      value: 'Essential oil, dried flowers, culinary and fragrance use',
    },
    {
      label: 'Climate',
      value:
        'Mediterranean; full sun, drought-tolerant, dislikes high humidity',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, low-fertility sandy loams and loams',
      note: 'Poor drainage is the primary limiting soil factor.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lavender is grown at scales ranging from garden and landscape plantings to dedicated commercial fields supplying dried flower and essential oil markets, with some regions developing lavender cultivation into a significant agritourism activity.',
        },
        {
          type: 'paragraph',
          text: 'Plants are long-lived when well sited, though productivity and oil quality typically decline with age, leading commercial growers to replace fields on a multi-year rotation.',
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
            { term: 'Family', description: 'Lamiaceae (mint family)' },
            { term: 'Genus', description: 'Lavandula' },
            {
              term: 'Principal species',
              description:
                'Lavandula angustifolia (English lavender); Lavandula × intermedia (lavandin) is also widely grown commercially',
            },
            {
              term: 'Growth habit',
              description:
                'Woody-based evergreen to semi-evergreen shrub with narrow, silvery-green leaves and terminal flower spikes',
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
          text: 'Lavender is native to the Mediterranean region, particularly the mountains of southern France, Spain, and Italy, where it grows wild on dry, well-drained, often calcareous slopes.',
        },
        {
          type: 'paragraph',
          text: 'France remains a major producer of lavender and lavandin essential oil, with additional significant production in Bulgaria and other countries with suitable climates; smaller-scale cultivation occurs widely for garden and dried-flower markets.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lavender requires full sun and is best adapted to a Mediterranean climate of hot, dry summers and moderate winters. It tolerates drought well but generally dislikes prolonged high humidity, which favors foliar and root disease.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained, low-fertility sandy loams and loams, often alkaline, are preferred. Heavy, poorly drained soils are one of the most common causes of lavender decline in cultivation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Raised beds, sloped sites, or coarse mineral mulches are commonly used to improve drainage where native soils are heavier.',
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
            'Propagation by cuttings to maintain specific cultivar characteristics for oil composition and flower color',
            'Wide spacing and open planting to maximize airflow and sun exposure',
            'Annual pruning after flowering to maintain compact form and productive growth',
            'Field renewal on a multi-year cycle as commercial plantings age and productivity declines',
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
          text: 'Lavender generally requires low nitrogen inputs; excessive nitrogen promotes soft, disease-prone growth and can reduce essential oil concentration in the flowers.',
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
          text: 'Lavender tolerates drought well once established and requires only modest supplemental irrigation in most climates; overwatering is a far more common cause of plant loss than underwatering.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation, applied sparingly, is preferred where supplemental water is used, since it avoids the prolonged foliage and root-zone wetness lavender is sensitive to.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot, particularly under poorly drained or overwatered conditions, is the most significant threat to established lavender plantings, and gray mold can affect flowers and foliage under cool, humid conditions. Spider mites and aphids are common pests.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root rot',
              'Disease',
              'The most significant threat, linked to poor drainage',
            ],
            ['Gray mold', 'Disease', 'Favored by cool, humid conditions'],
            ['Spider mites', 'Pest', 'Favored by hot, dry conditions'],
            ['Aphids', 'Pest', 'Sap-feeding insects on young growth'],
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
          text: 'Flower spikes are cut, typically when a proportion of flowers on the spike have opened, using hand tools or mechanical harvesters in commercial fields, and are then dried or promptly distilled to produce essential oil.',
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
            'Steam-distilled essential oil used in the fragrance, cosmetics, and personal-care industries',
            'Dried flowers used in sachets, potpourri, and decorative products',
            'Culinary use of flowers and buds in some baked goods and beverages',
            'Ornamental and landscape planting, including in pollinator-friendly gardens',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'rosemary' },
    { type: 'crop', slug: 'thyme' },
    { type: 'crop', slug: 'sage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Global overview; major essential-oil production in France and Bulgaria, with commercial and garden cultivation across Mediterranean-climate and temperate regions worldwide.',
  climateContext:
    'Mediterranean-adapted perennial shrub, drought-tolerant once established and intolerant of high humidity or waterlogged soils.',
  limitations: [
    'Species and cultivar differences in oil composition, hardiness, and flower color are not detailed exhaustively here.',
    'Lavender is discussed here only as an agricultural and aromatic crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global aromatic and essential-oil crop context',
    },
    { sourceId: 'cabi', citedFor: 'Lavender disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation and cultivar guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lavender',
    description:
      'A structured, evidence-based reference on lavender: classification, Mediterranean climate needs, cultivation, diseases, pests, and essential oil uses.',
    keywords: [
      'lavender',
      'Lavandula angustifolia',
      'essential oil crop',
      'Mediterranean shrub herb',
    ],
  },
  structuredData: { article: true },
};
