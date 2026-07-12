import type { CropContent } from '@/types/content';

export const basil: CropContent = {
  id: 'crop-basil',
  slug: 'basil',
  contentType: 'crop',
  title: 'Basil',
  scientificName: 'Ocimum basilicum',
  alternativeNames: ['Sweet basil'],
  category: 'Culinary herb crop',
  subcategory: 'Annual leafy herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Annual',
  summary:
    'Basil is a warm-season annual herb grown for its aromatic leaves, used fresh and dried as a culinary herb and as a source of essential oil for the food and fragrance industries.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Basil is one of the most widely grown culinary herbs, cultivated in field, protected-cropping, and hydroponic systems across a broad range of climates. Numerous cultivars differ in leaf size, color, and aroma profile.',
    },
    {
      type: 'paragraph',
      text: 'As a warm-season annual with essentially no frost tolerance, basil is typically transplanted or direct-sown after the danger of frost has passed and grown through a single warm season, or year-round under protected cultivation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Ocimum basilicum' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried culinary herb, essential oil',
    },
    {
      label: 'Climate',
      value: 'Warm-season; no frost tolerance',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams and sandy loams',
      note: 'Optimal ranges vary by cultivar and production system.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Basil is grown for its leaves, which are used fresh, dried, or processed into oils and extracts. Production spans open-field horticulture, greenhouse and tunnel systems, and soilless hydroponic operations supplying fresh-cut and potted herb markets.',
        },
        {
          type: 'paragraph',
          text: 'Because leaf quality and aroma are central to its value, harvest timing, handling, and post-harvest cooling are managed carefully to limit wilting and discoloration.',
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
            { term: 'Genus', description: 'Ocimum' },
            { term: 'Principal species', description: 'Ocimum basilicum' },
            {
              term: 'Growth habit',
              description:
                'Upright, branching annual herb with opposite leaves and terminal flower spikes',
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
          text: 'Basil is believed to have originated in tropical Asia and has been cultivated for millennia across South and Southeast Asia, the Mediterranean, and beyond, becoming a defining herb in numerous regional cuisines.',
        },
        {
          type: 'paragraph',
          text: 'Today, basil is grown commercially in many countries for fresh, dried, and processed markets, with production and trade data compiled at national and regional levels rather than through a single global dataset.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Basil requires warm growing conditions and is highly sensitive to chilling injury and frost, which quickly damage or kill foliage. Growth is fastest under warm days and nights with adequate light.',
        },
        {
          type: 'paragraph',
          text: 'Fertile, well-drained loams and sandy loams support healthy root growth; waterlogged or poorly aerated soils increase the risk of root and stem diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'In protected and hydroponic systems, growing media and nutrient solutions substitute for field soil; recommendations here focus on field and container production.',
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
            'Transplants or direct seeding after risk of frost and chilling has passed',
            'Adequate plant spacing and airflow to reduce humidity around foliage and limit foliar disease',
            'Repeated cutting or pinching to encourage branching and extend the harvest period',
            'Crop rotation and sanitation to manage soil-borne pathogens where basil is grown in the same beds repeatedly',
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
          text: 'Nitrogen supports leafy growth central to basil’s value as a fresh herb, while potassium contributes to overall plant vigor across repeated harvests.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and nutrient-solution rates should follow local soil or solution testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Basil requires consistent moisture for tender, high-quality leaf growth but is sensitive to prolonged leaf wetness, which favors foliar disease. Drip irrigation is widely used in field production to keep foliage dry.',
        },
        {
          type: 'paragraph',
          text: 'In greenhouse and hydroponic systems, irrigation and nutrient delivery are managed together according to the specific production method used.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Basil downy mildew is one of the most economically significant diseases of the crop worldwide, spreading rapidly under humid conditions and causing characteristic yellowing and leaf drop. Fusarium wilt can also affect basil, causing vascular disease and plant collapse. Aphids, thrips, and spider mites are common pests affecting foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Downy mildew',
              'Disease',
              'Major foliar disease under humid conditions',
            ],
            [
              'Fusarium wilt',
              'Disease',
              'Vascular disease causing wilting and collapse',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects on young growth'],
            ['Thrips', 'Pest', 'Cause leaf scarring and can spread viruses'],
            ['Spider mites', 'Pest', 'Favored by hot, dry conditions'],
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
          text: 'Leaves and shoot tips are harvested by hand or machine before flowering, when aroma and leaf quality are typically highest, with repeated cuttings possible over the growing period as new growth develops.',
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
            'Fresh and dried culinary herb used widely in cooking',
            'Essential oil extracted for the flavor and fragrance industries',
            'Potted and fresh-cut herb products for retail markets',
            'Ornamental and companion planting use in some garden systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'hydroponics' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mint' },
    { type: 'crop', slug: 'oregano' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Global overview; grown commercially in many countries for fresh, dried, and processed herb markets, in both field and protected-cropping systems.',
  climateContext:
    'Warm-season annual herb with no frost tolerance, grown outdoors in warm months or year-round under protection.',
  limitations: [
    'Cultivar choice, planting density, and cutting frequency vary by production system and are not detailed exhaustively here.',
    'Basil is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
    { sourceId: 'cabi', citedFor: 'Basil disease and pest compendium data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Basil downy mildew and production research',
    },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Basil',
    description:
      'A structured, evidence-based reference on basil: classification, climate needs, cultivation, nutrition, diseases, pests, harvest, and culinary uses.',
    keywords: [
      'basil',
      'Ocimum basilicum',
      'culinary herb crop',
      'basil cultivation',
    ],
  },
  structuredData: { article: true },
};
