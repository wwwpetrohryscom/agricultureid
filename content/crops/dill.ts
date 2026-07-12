import type { CropContent } from '@/types/content';

export const dill: CropContent = {
  id: 'crop-dill',
  slug: 'dill',
  contentType: 'crop',
  title: 'Dill',
  scientificName: 'Anethum graveolens',
  category: 'Culinary herb and spice crop',
  subcategory: 'Annual leaf and seed herb',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Annual',
  summary:
    'Dill is a fast-growing annual herb grown for its feathery aromatic leaves, used fresh as a culinary herb, and its dried seeds, used as a spice and in pickling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dill is grown for both fresh leaf (dill weed) and dried seed, with cultivar selection and harvest timing differing depending on which product is the primary target. Leaf-type production favors early, repeated harvest before flowering, while seed production allows the plant to flower and set seed fully.',
    },
    {
      type: 'paragraph',
      text: 'The crop grows quickly and completes its life cycle from sowing to seed maturity within a single growing season under suitable conditions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Anethum graveolens' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried leaf herb, seed spice, pickling',
    },
    {
      label: 'Climate',
      value: 'Cool-season preferred; bolts quickly in heat',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Optimal ranges vary by region and target product.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Dill is grown in home gardens and commercial fields alike, supplying fresh-cut herb markets, dried herb processing, and seed for spice and pickling use.',
        },
        {
          type: 'paragraph',
          text: 'Its tall, hollow stems and umbrella-shaped flower heads make it a recognizable presence in herb gardens and mixed vegetable plantings, where it is also sometimes grown as a companion plant.',
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
            { term: 'Genus', description: 'Anethum' },
            { term: 'Principal species', description: 'Anethum graveolens' },
            {
              term: 'Growth habit',
              description:
                'Erect annual herb with finely divided, feathery leaves and compound umbels bearing small flattened seeds',
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
          text: 'Dill is native to the eastern Mediterranean, Western Asia, and parts of Eastern Europe, where it has long been used both as a culinary herb and in food preservation, particularly pickling.',
        },
        {
          type: 'paragraph',
          text: 'Today it is cultivated widely across Europe, Asia, and North America for fresh herb, dried herb, and seed markets. Production statistics are compiled at national and regional levels.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Dill grows best in cool to mild conditions; high temperatures accelerate bolting, reducing leaf quality but not preventing seed production, since flowering and seed set are the goal in seed-type crops.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams support even germination and steady growth. The crop generally performs poorly in waterlogged or heavily compacted soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Dill has a taproot and generally transplants poorly; direct seeding is preferred in most production systems.',
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
            'Direct seeding preferred over transplanting due to taproot sensitivity',
            'Successive sowings used in leaf production to maintain continuous fresh supply',
            'Support or shelter from wind useful for tall-growing cultivars, especially in seed production',
            'Isolation from other flowering umbellifers where seed purity is important',
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
          text: 'Nitrogen supports the leafy growth central to fresh-herb production, while overall balanced nutrition supports flowering and seed development in seed-type crops.',
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
          text: 'Consistent moisture supports even germination and leafy growth, and moisture stress can accelerate bolting in leaf-type production.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is commonly used in intensive production to maintain steady soil moisture while limiting prolonged leaf wetness.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is a common foliar disease of dill, and downy mildew can also affect foliage under cool, humid conditions, causing yellowing and reduced leaf quality. Aphids and spider mites are common pests affecting foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Powdery mildew',
              'Disease',
              'Common foliar disease, especially late season',
            ],
            ['Downy mildew', 'Disease', 'Favored by cool, humid conditions'],
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
          text: 'Leaves are cut for fresh or dried herb use before flowering, while seed heads are harvested once they mature and turn brown, then dried further and threshed before cleaning and storage.',
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
            'Fresh and dried leaf (dill weed) used widely as a culinary herb',
            'Dried seed used as a spice and a defining flavor in pickling',
            'Dill seed and dill weed oil extracted for the flavor industry',
            'Companion planting use in some home-garden vegetable systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
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
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'parsley' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Global overview; widely cultivated across Europe, Asia, and North America for fresh herb, dried herb, and seed markets.',
  climateContext:
    'Cool-season-preferring annual herb that bolts quickly under heat; leaf and seed production are managed differently around this tendency.',
  limitations: [
    'Cultivar choice and harvest timing differ substantially between leaf and seed production and are not detailed exhaustively here.',
    'Production statistics for dill are reported inconsistently across countries and should be taken from primary national or FAO datasets.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global herb and spice crop production context',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Dill disease and pest compendium data' },
    { sourceId: 'cornell-cals', citedFor: 'Herb crop production guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Dill',
    description:
      'A structured, evidence-based reference on dill: classification, climate needs, cultivation, diseases, pests, harvest, and leaf and seed spice uses.',
    keywords: [
      'dill',
      'Anethum graveolens',
      'culinary herb crop',
      'dill seed spice',
    ],
  },
  structuredData: { article: true },
};
