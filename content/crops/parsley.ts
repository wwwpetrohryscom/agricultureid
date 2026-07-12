import type { CropContent } from '@/types/content';

export const parsley: CropContent = {
  id: 'crop-parsley',
  slug: 'parsley',
  contentType: 'crop',
  title: 'Parsley',
  scientificName: 'Petroselinum crispum',
  category: 'Culinary herb crop',
  subcategory: 'Biennial leaf herb',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Biennial',
  summary:
    'Parsley is a biennial herb grown for its fresh leaves, used widely as a culinary garnish and flavoring, typically harvested in its first year before the plant flowers and sets seed in its second.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Parsley is a true biennial: in its first year it produces a rosette of leafy growth, the stage at which it is harvested for culinary use, and in its second year it bolts, flowers, and sets seed before dying. Most commercial and garden production focuses entirely on the first-year leaf stage.',
    },
    {
      type: 'paragraph',
      text: 'Two main cultivar groups are grown: curly-leaved parsley, valued partly for its garnish appearance, and flat-leaved (Italian) parsley, generally preferred for its stronger flavor in cooking.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    {
      label: 'Life cycle',
      value: 'Biennial (harvested as a first-year leaf crop)',
    },
    { label: 'Main species', value: 'Petroselinum crispum' },
    { label: 'Primary uses', value: 'Fresh and dried culinary herb' },
    {
      label: 'Climate',
      value: 'Cool-season; moderately frost-tolerant',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, moisture-retentive loams and sandy loams',
      note: 'Optimal ranges vary by region and cultivar.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Parsley is grown widely in home gardens and commercial horticulture for fresh-cut, potted, and dried herb markets. Its cool-season tolerance and moderate frost hardiness allow production across a broad range of temperate climates.',
        },
        {
          type: 'paragraph',
          text: 'Because parsley is grown almost exclusively for leaf, not seed, in commercial production, most crops are harvested and terminated well before the plant reaches its second, flowering year.',
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
            { term: 'Family', description: 'Apiaceae (carrot family)' },
            { term: 'Genus', description: 'Petroselinum' },
            { term: 'Principal species', description: 'Petroselinum crispum' },
            {
              term: 'Growth habit',
              description:
                'Biennial herb forming a basal rosette of divided leaves in its first year, followed by a flowering stem in its second',
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
          text: 'Parsley is native to the central Mediterranean region and has been cultivated since antiquity, valued both as a culinary herb and, historically, as a garnish and garden ornamental.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown throughout temperate regions worldwide, supplying fresh, dried, and processed herb markets. Production statistics are compiled at national and regional levels rather than through a single global dataset.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Parsley grows best in cool to mild conditions and tolerates light frost, allowing production to extend into cooler shoulder seasons in many climates. Prolonged heat can reduce leaf quality and hasten bolting.',
        },
        {
          type: 'paragraph',
          text: 'Fertile, moisture-retentive loams and sandy loams support strong leafy growth. The crop performs poorly on shallow, compacted, or poorly drained soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Parsley seed germinates slowly and unevenly; local guidance on seed treatment and sowing depth can help improve establishment.',
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
            'Direct seeding or transplanting, with attention to the crop’s characteristically slow germination',
            'Repeated cutting of outer leaves to encourage continued regrowth through the harvest period',
            'Crop rotation with unrelated species to manage soil-borne disease and pest pressure',
            'Timely removal of plants that begin to bolt, to maintain leaf quality in continued plantings',
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
          text: 'Nitrogen strongly influences leafy growth and is central to parsley’s value as a fresh herb, while potassium supports overall plant vigor across repeated cuttings.',
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
          text: 'Consistent soil moisture supports even leaf growth and helps maintain quality across repeated harvests; drought stress can toughen leaves and hasten bolting.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is commonly used in commercial parsley production to maintain steady moisture while limiting prolonged leaf wetness.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew can affect parsley foliage later in the season, and bacterial leaf spot can cause water-soaked lesions under humid, wet conditions. Aphids are common sap-feeding pests, and leaf miners can tunnel within leaves, reducing marketable quality.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Powdery mildew',
              'Disease',
              'Common foliar disease later in the season',
            ],
            [
              'Bacterial leaf spot',
              'Disease',
              'Favored by humid, wet conditions',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage'],
            ['Leaf miners', 'Pest', 'Larvae tunnel within leaf tissue'],
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
          text: 'Outer leaves and stems are cut by hand or machine once plants reach sufficient size, allowing repeated harvests from the same planting as new growth emerges from the center of the rosette.',
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
            'Fresh leaves used widely as a culinary garnish and flavoring herb',
            'Dried and freeze-dried parsley used in packaged seasoning blends',
            'Fresh-cut and potted herb products for retail markets',
            'Root parsley, a related cultivar group grown for its edible root, used as a vegetable in some cuisines',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'frost' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'celery' },
    { type: 'crop', slug: 'dill' },
  ],
  glossaryTerms: ['cultivar', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview; grown throughout temperate regions worldwide for fresh, dried, and processed herb markets.',
  climateContext:
    'Cool-season biennial herb, moderately frost-tolerant, grown almost exclusively as a first-year leaf crop before flowering.',
  limitations: [
    'Curly- and flat-leaved cultivar groups differ in flavor intensity and use, which is not detailed exhaustively here.',
    'Production statistics for parsley are reported inconsistently across countries and should be taken from primary national or FAO datasets.',
  ],
  sourceReferences: [
    { sourceId: 'rhs', citedFor: 'Cultivation and site guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Parsley disease and pest compendium data' },
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Parsley',
    description:
      'A structured, evidence-based reference on parsley: classification, climate needs, cultivation, diseases, pests, harvest, and culinary herb uses.',
    keywords: [
      'parsley',
      'Petroselinum crispum',
      'culinary herb crop',
      'parsley cultivation',
    ],
  },
  structuredData: { article: true },
};
