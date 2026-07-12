import type { CropContent } from '@/types/content';

export const sage: CropContent = {
  id: 'crop-sage',
  slug: 'sage',
  contentType: 'crop',
  title: 'Sage',
  scientificName: 'Salvia officinalis',
  category: 'Culinary herb crop',
  subcategory: 'Perennial Mediterranean herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Sage is a woody-based perennial herb of Mediterranean origin, grown for its soft, gray-green aromatic leaves, used fresh and dried as a culinary herb and as a source of essential oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sage forms a compact, spreading subshrub with distinctive velvety, gray-green leaves and is one of the most widely grown culinary members of the large Salvia genus.',
    },
    {
      type: 'paragraph',
      text: 'The plant is adapted to hot, dry, sunny conditions typical of its Mediterranean origin, and cultivated forms range from common culinary sage to ornamental cultivars with variegated or purple-tinged foliage.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Perennial subshrub' },
    { label: 'Main species', value: 'Salvia officinalis' },
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
      value: 'Well-drained loams and sandy loams of low to moderate fertility',
      note: 'Sensitive to poor drainage and humid, wet conditions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sage is grown in home gardens, herb nurseries, and, in some regions, commercial fields for dried herb and essential oil production, often alongside other Mediterranean herbs suited to similar conditions.',
        },
        {
          type: 'paragraph',
          text: 'As a woody-based perennial, sage can remain productive for several years, though plants tend to become woody and less productive with age, benefiting from periodic renewal.',
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
            { term: 'Genus', description: 'Salvia' },
            { term: 'Principal species', description: 'Salvia officinalis' },
            {
              term: 'Growth habit',
              description:
                'Low, woody-based perennial subshrub with soft, textured, gray-green leaves and violet-blue flower spikes',
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
          text: 'Sage is native to the northern Mediterranean coast, where it grows wild on dry, rocky, sunny slopes. It has long been cultivated as a culinary herb across the region and has since spread to temperate gardens and farms worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production for fresh, dried, and essential-oil markets occurs across Mediterranean Europe and in other regions with a compatible climate.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sage is well suited to hot, dry summers and mild winters and tolerates drought well once established. Many cultivars withstand moderate frost, though hardiness varies.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams of low to moderate fertility suit sage well; humid, poorly drained, or overly fertile conditions can promote excessive soft growth and increase disease risk.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good airflow and drainage are particularly important for sage, since its dense, textured foliage can trap moisture in humid climates.',
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
            'Wide spacing and good airflow to reduce humidity around foliage and limit disease',
            'Light pruning after flowering to maintain compact growth and delay woodiness',
            'Periodic replacement of older, woody plantings to sustain leaf quality and yield',
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
          text: 'Sage generally requires modest fertility, and excessive nitrogen can encourage soft, disease-prone growth at the expense of aroma concentration.',
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
          text: 'Sage tolerates drought well once established and requires only modest supplemental irrigation in most climates; overwatering is a more common cause of problems than underwatering.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, drip systems help maintain good drainage while limiting the prolonged leaf wetness that favors foliar disease.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is a common foliar disease of sage, particularly under humid conditions, and root rot can develop on poorly drained or overwatered sites. Spider mites and aphids are common pests of foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Powdery mildew', 'Disease', 'Common under humid conditions'],
            ['Root rot', 'Disease', 'Linked to poor drainage and overwatering'],
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
          text: 'Leaves and sprigs are cut by hand as needed through the growing season, with fresh material used directly or dried and stripped from stems for storage.',
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
            'Fresh and dried leaves used widely as a culinary herb, particularly in stuffings, sauces, and with rich or fatty foods',
            'Essential oil extracted for the flavor and fragrance industries',
            'Dried herb blends and seasoning products',
            'Ornamental garden use, including cultivars grown for foliage color',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
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
    { type: 'crop', slug: 'thyme' },
    { type: 'crop', slug: 'oregano' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Global overview; native to the northern Mediterranean coast, with commercial and garden cultivation across temperate and Mediterranean-climate regions worldwide.',
  climateContext:
    'Mediterranean-adapted perennial subshrub, drought-tolerant once established; sensitive to humid, poorly drained conditions.',
  limitations: [
    'Cultivar differences in hardiness, foliage color, and aroma are not detailed exhaustively here.',
    'Sage is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
    { sourceId: 'cabi', citedFor: 'Sage disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sage',
    description:
      'A structured, evidence-based reference on sage: classification, Mediterranean climate needs, cultivation, diseases, pests, and culinary herb uses.',
    keywords: [
      'sage',
      'Salvia officinalis',
      'culinary herb crop',
      'Mediterranean herb',
    ],
  },
  structuredData: { article: true },
};
