import type { CropContent } from '@/types/content';

export const rosemary: CropContent = {
  id: 'crop-rosemary',
  slug: 'rosemary',
  contentType: 'crop',
  title: 'Rosemary',
  scientificName: 'Salvia rosmarinus (syn. Rosmarinus officinalis)',
  category: 'Culinary herb crop',
  subcategory: 'Perennial Mediterranean shrub herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Rosemary is a woody, evergreen Mediterranean shrub grown for its narrow, aromatic leaves, used fresh and dried as a culinary herb and as a source of essential oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rosemary is a long-lived, evergreen shrub with needle-like leaves adapted to hot, dry, sunny conditions. It ranges in habit from upright forms used as hedging to trailing cultivars used in garden and landscape planting.',
    },
    {
      type: 'paragraph',
      text: 'Botanists have reclassified rosemary from the genus Rosmarinus into Salvia, though the older name Rosmarinus officinalis remains in wide use in horticultural and culinary contexts.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Perennial evergreen shrub' },
    { label: 'Main species', value: 'Salvia rosmarinus' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried culinary herb, essential oil',
    },
    {
      label: 'Climate',
      value:
        'Mediterranean; drought-tolerant, full sun, moderate frost sensitivity',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and loams, tolerant of low fertility',
      note: 'Sensitive to poor drainage and waterlogging.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Rosemary is grown in home gardens, commercial herb operations, and landscape plantings, valued both for its culinary leaves and its ornamental, drought-tolerant habit.',
        },
        {
          type: 'paragraph',
          text: 'As a woody perennial, rosemary can remain productive for many years, though older plants may become leggy and benefit from periodic pruning or replacement.',
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
            { term: 'Genus', description: 'Salvia (formerly Rosmarinus)' },
            { term: 'Principal species', description: 'Salvia rosmarinus' },
            {
              term: 'Growth habit',
              description:
                'Evergreen woody shrub with narrow, needle-like aromatic leaves and small blue to white flowers',
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
          text: 'Rosemary is native to the Mediterranean coast, where it grows wild on rocky, sunny slopes. It has been cultivated as a culinary and aromatic plant since antiquity and is now grown widely across temperate and Mediterranean-climate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production for fresh, dried, and essential-oil markets is found across Mediterranean Europe, North Africa, and other regions with a compatible climate.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rosemary is well adapted to hot, dry summers and mild winters and tolerates drought well once established. Cold hardiness varies by cultivar, with some tolerating moderate frost and others requiring protection in colder climates.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained sandy loams and loams of low to moderate fertility, including alkaline soils, suit rosemary well; poorly drained or heavy clay soils increase the risk of root disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'In regions with wet winters, raised beds or container culture are sometimes used to protect rosemary from waterlogging.',
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
            'Propagation mainly by cuttings, since named cultivars do not come true from seed',
            'Regular light pruning after flowering to maintain compact, productive growth',
            'Wide spacing on well-drained sites to reduce humidity and disease pressure',
            'Winter protection or container culture in climates with hard frosts, depending on cultivar hardiness',
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
          text: 'Rosemary generally requires modest fertility, and excessive nitrogen can encourage soft, leggy growth that is more prone to pest damage and less aromatic.',
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
          text: 'Rosemary tolerates drought well once established and requires only modest supplemental irrigation in most climates. Overwatering is a more common problem than underwatering in cultivated settings.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, drip systems help maintain the good drainage rosemary requires while avoiding prolonged foliage wetness.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot is the primary disease risk, occurring on poorly drained or overwatered sites, and powdery mildew can affect foliage under humid conditions. Spider mites and aphids are common pests of rosemary foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root rot',
              'Disease',
              'Main risk on poorly drained or overwatered sites',
            ],
            ['Powdery mildew', 'Disease', 'Favored by humid conditions'],
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
          text: 'Sprigs and leaves are cut by hand as needed throughout the growing season, with fresh material used directly or dried and stripped from woody stems for storage.',
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
            'Fresh and dried leaves used widely as a culinary herb, particularly with roasted meats and vegetables',
            'Essential oil extracted for the flavor and fragrance industries',
            'Dried herb blends and seasoning products',
            'Ornamental and landscape use, including as an informal hedge in suitable climates',
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
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'thyme' },
    { type: 'crop', slug: 'sage' },
    { type: 'crop', slug: 'lavender' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Global overview; native to the Mediterranean coast, with commercial and garden cultivation across Mediterranean-climate and temperate regions worldwide.',
  climateContext:
    'Mediterranean-adapted evergreen shrub, drought-tolerant once established; cold hardiness varies by cultivar.',
  limitations: [
    'Cold hardiness and growth habit vary considerably between rosemary cultivars, which is not detailed exhaustively here.',
    'Rosemary is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
    { sourceId: 'cabi', citedFor: 'Rosemary disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation and cultivar guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rosemary',
    description:
      'A structured, evidence-based reference on rosemary: classification, Mediterranean climate needs, cultivation, diseases, pests, and culinary herb uses.',
    keywords: [
      'rosemary',
      'Salvia rosmarinus',
      'culinary herb crop',
      'Mediterranean herb',
    ],
  },
  structuredData: { article: true },
};
