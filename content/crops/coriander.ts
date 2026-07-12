import type { CropContent } from '@/types/content';

export const coriander: CropContent = {
  id: 'crop-coriander',
  slug: 'coriander',
  contentType: 'crop',
  title: 'Coriander',
  scientificName: 'Coriandrum sativum',
  alternativeNames: ['Cilantro', 'Chinese parsley'],
  category: 'Culinary herb and spice crop',
  subcategory: 'Annual leaf and seed herb',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Annual',
  summary:
    'Coriander is an annual herb grown for two distinct products from the same plant: fresh leaves, known as cilantro, and dried ripe seeds used whole or ground as the spice coriander.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coriander is unusual among culinary plants in supplying two commercially distinct products from a single crop: tender young leaves harvested for fresh use, and mature dried seeds harvested for spice. Cultivars and management practices differ depending on which product is the primary target.',
    },
    {
      type: 'paragraph',
      text: 'Leaf-type production favors slower-bolting cultivars and cooler conditions to delay flowering, while seed production allows the plant to flower and set seed fully before harvest.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Coriandrum sativum' },
    {
      label: 'Primary uses',
      value: 'Fresh leaves (cilantro) and dried seed spice',
    },
    {
      label: 'Climate',
      value: 'Cool-season preferred; bolts quickly in heat',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Optimal ranges vary by cultivar and target product.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Coriander is grown worldwide, ranging from small-scale garden and market plantings for fresh leaf to large field plantings, particularly in South Asia, dedicated to seed spice production.',
        },
        {
          type: 'paragraph',
          text: 'The crop is fast-growing and short-lived, completing its life cycle from sowing to seed maturity within a single growing season under suitable conditions.',
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
            { term: 'Genus', description: 'Coriandrum' },
            { term: 'Principal species', description: 'Coriandrum sativum' },
            {
              term: 'Growth habit',
              description:
                'Erect annual herb with divided leaves, umbel flower heads, and small ribbed seeds (schizocarps)',
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
          text: 'Coriander is native to the eastern Mediterranean and Western Asia and has been cultivated since antiquity, with archaeological evidence of its use extending back thousands of years across the region.',
        },
        {
          type: 'paragraph',
          text: 'Today it is grown widely across Asia, the Americas, Europe, and Africa. India is among the largest producers of coriander seed, while fresh cilantro is produced in many countries for local and export markets. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Coriander grows best in cool to mild conditions; high temperatures accelerate bolting (premature flowering), which reduces leaf quality for cilantro production but is acceptable, and even desired, for seed production.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams support even germination and root development. The crop generally performs poorly in waterlogged or heavily compacted soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sowing date is a key management lever for balancing leaf yield against bolting risk and should be planned around local seasonal temperature patterns.',
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
            'Direct seeding is common, since coriander transplants poorly due to a sensitive taproot',
            'Successive sowings used in leaf production to maintain continuous supply',
            'Wider row spacing and full-season growth allowed in seed production to support flowering and seed set',
            'Crop rotation to manage soil-borne disease pressure in intensive production areas',
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
          text: 'Nitrogen supports leafy growth important for cilantro yield, while balanced nutrition, including sulfur, contributes to plant vigor through flowering and seed development in seed-type production.',
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
          text: 'Consistent moisture supports even germination and leaf growth, though established plants tolerate moderate dry spells better once rooted, particularly seed-type crops grown in semi-arid regions.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is commonly used in intensive leaf production to maintain steady moisture while limiting leaf wetness and associated disease risk.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is a common foliar disease of coriander, particularly later in the season, and bacterial leaf spot can cause lesions on leaves and stems under humid conditions. Aphids and thrips are common pests affecting foliage and flower heads.',
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
            [
              'Aphids',
              'Pest',
              'Sap-feeding insects on foliage and flower heads',
            ],
            ['Thrips', 'Pest', 'Feed on leaves and flowers, causing scarring'],
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
          text: 'Leaf-type coriander is cut while young and tender, before significant flowering. Seed-type coriander is left to flower and set seed, then harvested once seed heads turn brown and dry, and dried further before cleaning and storage.',
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
            'Fresh leaves (cilantro) used widely in cooking, particularly in Latin American, South Asian, and Southeast Asian cuisines',
            'Dried whole or ground seeds used as a spice in a wide range of dishes',
            'Coriander seed oil extracted for the flavor and fragrance industries',
            'Coriander seed used in some regions as a spice-blend component and in pickling',
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
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fennel' },
    { type: 'crop', slug: 'dill' },
    { type: 'crop', slug: 'cumin' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Global overview; India is a leading producer of coriander seed, with fresh cilantro grown widely across Asia, the Americas, Europe, and Africa.',
  climateContext:
    'Cool-season-preferring annual herb that bolts quickly under heat; leaf and seed production are managed differently around this tendency.',
  limitations: [
    'Optimal sowing dates and cultivar choice differ substantially between leaf (cilantro) and seed production and are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global spice and herb crop production context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Coriander disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Coriander',
    description:
      'A structured, evidence-based reference on coriander: classification, climate needs, cultivation, diseases, pests, harvest, and leaf and seed uses.',
    keywords: [
      'coriander',
      'Coriandrum sativum',
      'cilantro',
      'coriander seed spice',
    ],
  },
  structuredData: { article: true },
};
