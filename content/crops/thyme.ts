import type { CropContent } from '@/types/content';

export const thyme: CropContent = {
  id: 'crop-thyme',
  slug: 'thyme',
  contentType: 'crop',
  title: 'Thyme',
  scientificName: 'Thymus vulgaris',
  category: 'Culinary herb crop',
  subcategory: 'Perennial Mediterranean herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Thyme is a low-growing, woody-based perennial herb of Mediterranean origin, grown for its small aromatic leaves, used fresh and dried as a culinary herb and as a source of essential oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Thyme forms a compact, wiry-stemmed perennial subshrub adapted to dry, sunny, often rocky or poor soils typical of its native Mediterranean range. Numerous species and cultivars are grown, differing in leaf size, growth habit, and aroma.',
    },
    {
      type: 'paragraph',
      text: 'Both fresh sprigs and dried leaves are used in cooking, and thyme is also grown commercially in some regions for steam-distilled essential oil.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Perennial subshrub' },
    { label: 'Main species', value: 'Thymus vulgaris' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried culinary herb, essential oil',
    },
    {
      label: 'Climate',
      value: 'Mediterranean; drought-tolerant, full sun, moderately cold-hardy',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and loams of low to moderate fertility',
      note: 'Poor drainage is the main limiting soil factor.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Thyme is grown in home gardens, herb nurseries, and, in some regions, commercial fields for dried herb and essential oil production. It is often grown alongside other Mediterranean herbs in mixed plantings suited to similar dry, sunny conditions.',
        },
        {
          type: 'paragraph',
          text: 'Established plants form dense, spreading mats or low mounds and can remain productive for several years before benefiting from division or replacement.',
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
            { term: 'Genus', description: 'Thymus' },
            { term: 'Principal species', description: 'Thymus vulgaris' },
            {
              term: 'Growth habit',
              description:
                'Low, woody-based perennial subshrub with small, aromatic leaves on wiry stems',
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
          text: 'Thyme is native to the western Mediterranean, where it grows wild on dry, sunny, often stony ground. It has been cultivated as a culinary and aromatic herb since antiquity and has spread to temperate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Major production of culinary and essential-oil thyme is concentrated in parts of the Mediterranean, with additional cultivation across Europe and North America for herb markets.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Thyme is well suited to hot, dry summers and mild winters, tolerating drought well once established. Many cultivars withstand moderate frost, though hardiness varies by species and cultivar.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained sandy loams and loams of low to moderate fertility, including alkaline soils, are preferred; the crop is particularly sensitive to waterlogging, which quickly leads to root problems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Raised beds or sloped sites are sometimes used in wetter climates specifically to improve drainage for thyme plantings.',
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
            'Propagation by cuttings or division to maintain specific cultivar characteristics',
            'Wide spacing on well-drained sites to reduce humidity and disease pressure',
            'Light trimming after flowering to maintain compact growth and encourage fresh foliage',
            'Periodic replacement of older plantings as woody growth increases and productivity declines',
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
          text: 'Thyme generally requires modest fertility, and excessive nitrogen can promote soft, leggy growth at the expense of aroma concentration.',
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
          text: 'Thyme tolerates drought well once established and requires only modest supplemental irrigation in most climates, with young plantings needing more consistent moisture during establishment.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is preferred where supplemental water is used, since it limits leaf wetness and helps maintain the good drainage thyme requires.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot is the most significant disease risk, occurring on poorly drained or overwatered sites, and gray mold can affect foliage under cool, humid conditions. Aphids and spider mites are common pests of foliage.',
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
            ['Gray mold', 'Disease', 'Favored by cool, humid conditions'],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage'],
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
          text: 'Sprigs are cut by hand or machine, typically just before or during flowering when aroma is often strongest, then used fresh or dried, with leaves stripped from woody stems for storage.',
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
            'Fresh and dried leaves used widely as a culinary herb across many cuisines',
            'Essential oil extracted for the flavor and fragrance industries',
            'Dried herb blends and seasoning products',
            'Low-growing ornamental groundcover use in some garden and landscape settings',
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
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
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
    { type: 'crop', slug: 'rosemary' },
    { type: 'crop', slug: 'sage' },
    { type: 'crop', slug: 'lavender' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Global overview; historically concentrated in Mediterranean Europe, with wider cultivation across Europe and North America for herb markets.',
  climateContext:
    'Mediterranean-adapted perennial subshrub, drought-tolerant once established and sensitive to waterlogged soils.',
  limitations: [
    'Species and cultivar differences in aroma, hardiness, and growth habit are not detailed exhaustively here.',
    'Thyme is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
    { sourceId: 'cabi', citedFor: 'Thyme disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Thyme',
    description:
      'A structured, evidence-based reference on thyme: classification, Mediterranean climate needs, cultivation, diseases, pests, and culinary herb uses.',
    keywords: [
      'thyme',
      'Thymus vulgaris',
      'culinary herb crop',
      'Mediterranean herb',
    ],
  },
  structuredData: { article: true },
};
