import type { CropContent } from '@/types/content';

export const oregano: CropContent = {
  id: 'crop-oregano',
  slug: 'oregano',
  contentType: 'crop',
  title: 'Oregano',
  scientificName: 'Origanum vulgare',
  category: 'Culinary herb crop',
  subcategory: 'Perennial Mediterranean herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Oregano is a perennial Mediterranean herb grown for its aromatic leaves, used fresh and dried as a culinary herb and as a source of essential oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oregano is a woody-based perennial herb adapted to warm, dry, sunny conditions typical of its Mediterranean origin. It is grown both as a compact garden herb and, in some regions, at field scale for dried herb and essential oil markets.',
    },
    {
      type: 'paragraph',
      text: 'Flavor intensity and essential oil composition vary considerably between species and cultivars sold under the common name oregano, including related Origanum and Lippia species used regionally.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Perennial subshrub' },
    { label: 'Main species', value: 'Origanum vulgare' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried culinary herb, essential oil',
    },
    {
      label: 'Climate',
      value:
        'Mediterranean; warm, dry, sun-loving, drought-tolerant once established',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams, tolerant of low fertility',
      note: 'Overly rich or wet soils can reduce essential oil concentration.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Oregano is grown in garden, field, and, less commonly, protected-cropping systems, supplying fresh-cut, dried, and processed herb markets as well as essential oil production in some regions.',
        },
        {
          type: 'paragraph',
          text: 'Once established, oregano forms a spreading, woody-based clump that can be divided or propagated by cuttings to maintain particular flavor and aroma characteristics.',
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
            { term: 'Genus', description: 'Origanum' },
            { term: 'Principal species', description: 'Origanum vulgare' },
            {
              term: 'Growth habit',
              description:
                'Low, spreading perennial subshrub with square stems, opposite aromatic leaves, and small clustered flowers',
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
          text: 'Oregano is native to the Mediterranean basin and parts of Western Asia, where it has long grown wild on dry, rocky hillsides and has been cultivated as a culinary herb for centuries.',
        },
        {
          type: 'paragraph',
          text: 'Today it is grown across Mediterranean Europe, the Middle East, and other regions with suitable climates, alongside wider smaller-scale cultivation for local and garden herb markets.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oregano is well adapted to hot, dry summers and mild winters typical of Mediterranean climates, tolerating drought well once established. It generally prefers full sun and can be sensitive to prolonged cold and waterlogged conditions.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams of moderate to low fertility are preferred; overly rich or consistently moist soils can promote lush but less aromatic growth and increase disease risk.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good drainage is one of the most important site-selection factors for oregano, as waterlogged soils quickly lead to root problems.',
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
            'Propagation commonly by division or cuttings to maintain specific flavor and aroma traits',
            'Wide spacing and good airflow to reduce humidity around foliage and limit disease',
            'Periodic cutting back to encourage compact, productive growth and delay woodiness',
            'Renewal of older plantings as productivity and leaf quality can decline over time',
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
          text: 'Oregano generally requires modest fertility, and excessive nitrogen can favor leafy growth at the expense of the essential oil concentration that gives the herb its characteristic flavor and aroma.',
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
          text: 'Oregano tolerates drought well once established and is often grown with minimal supplemental irrigation in its native climate range, though young plantings benefit from consistent moisture during establishment.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, drip systems are common, helping avoid the prolonged leaf wetness that can encourage fungal disease.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot is a key risk on poorly drained sites, since oregano is sensitive to waterlogged soil, and powdery mildew can affect foliage under humid conditions. Aphids and spider mites are common pests affecting foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Root rot', 'Disease', 'Linked to poor drainage and waterlogging'],
            ['Powdery mildew', 'Disease', 'Favored by humid conditions'],
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
          text: 'Leafy stems are cut, typically just before or during early flowering when essential oil concentration is often highest, then used fresh or dried and stripped from stems for storage.',
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
            'Fresh and dried leaves used widely as a culinary herb, particularly in Mediterranean cuisines',
            'Essential oil extracted for the flavor and fragrance industries',
            'Dried herb blends and seasoning products',
            'Ornamental and pollinator-friendly groundcover use in some garden settings',
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
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'thyme' },
    { type: 'crop', slug: 'sage' },
    { type: 'crop', slug: 'basil' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Global overview; traditionally grown across Mediterranean Europe and the Middle East, with wider cultivation elsewhere for herb and oil markets.',
  climateContext:
    'Mediterranean-adapted perennial subshrub tolerant of heat and drought once established; sensitive to waterlogging and prolonged cold.',
  limitations: [
    'Flavor and essential oil composition vary considerably between species and cultivars sold as oregano, which is not detailed exhaustively here.',
    'Oregano is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
    { sourceId: 'cabi', citedFor: 'Oregano disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Oregano',
    description:
      'A structured, evidence-based reference on oregano: classification, Mediterranean climate needs, cultivation, diseases, pests, and culinary herb uses.',
    keywords: [
      'oregano',
      'Origanum vulgare',
      'culinary herb crop',
      'Mediterranean herb',
    ],
  },
  structuredData: { article: true },
};
