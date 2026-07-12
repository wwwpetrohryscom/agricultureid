import type { CropContent } from '@/types/content';

export const watercress: CropContent = {
  id: 'crop-watercress',
  slug: 'watercress',
  contentType: 'crop',
  title: 'Watercress',
  scientificName: 'Nasturtium officinale',
  category: 'Aquatic leaf vegetable crop',
  subcategory: 'Semi-aquatic leaf herb',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Watercress is a semi-aquatic leaf vegetable traditionally grown in beds of clean, flowing water over sand or gravel, valued for its peppery, fast-growing edible leaves and stems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Watercress grows naturally in and along slow-moving streams and springs, and commercial production has historically replicated this habitat using purpose-built beds fed by a continuous flow of clean water over a sand or gravel substrate.',
    },
    {
      type: 'paragraph',
      text: 'Although the plant can behave as a short-lived perennial under favorable conditions, commercial beds are typically managed on an annual to biennial cycle, with periodic renewal or replanting to maintain leaf quality and yield.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    {
      label: 'Life cycle',
      value:
        'Annual to short-lived perennial, typically managed as an annual crop',
    },
    { label: 'Main species', value: 'Nasturtium officinale' },
    { label: 'Primary uses', value: 'Fresh leaf vegetable' },
    {
      label: 'Climate',
      value: 'Cool, temperate; requires consistently cool flowing water',
    },
    {
      label: 'Soil preference',
      value:
        'Sandy, well-drained substrate within flooded or flowing-water beds',
      note: 'Grown in aquatic or continuously wet conditions rather than conventional dryland soil.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial watercress production is concentrated in regions with reliable, clean, spring-fed or borehole water sources, historically including chalk stream valleys in parts of Europe, alongside production in other countries using constructed water-bed systems.',
        },
        {
          type: 'paragraph',
          text: 'More recently, watercress has also been grown in soilless systems such as floating rafts and other hydroponic and aquaponic setups that similarly keep roots continuously immersed or saturated.',
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
            { term: 'Family', description: 'Brassicaceae (cabbage family)' },
            { term: 'Genus', description: 'Nasturtium' },
            { term: 'Principal species', description: 'Nasturtium officinale' },
            {
              term: 'Growth habit',
              description:
                'Creeping to floating semi-aquatic herb rooting at stem nodes, with small white flowers typical of the cabbage family',
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
          text: 'Watercress is native to Europe and Central Asia, where it grows wild along streams and springs, and has been gathered and later cultivated as a food plant for centuries.',
        },
        {
          type: 'paragraph',
          text: 'It has since naturalized in many temperate regions worldwide and is commercially cultivated in parts of Europe, North America, and Asia, supplying fresh-market leaf vegetable demand. Production statistics are reported at national and regional levels.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Watercress requires consistently cool, clean water and grows best in mild temperate climates; high water temperatures and low oxygen levels can quickly stress plants and reduce leaf quality.',
        },
        {
          type: 'paragraph',
          text: 'Traditional watercress beds use a sandy or gravelly substrate that allows constant flow-through of fresh water around the roots, rather than a conventional dryland soil profile.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Water quality, flow rate, and temperature are the dominant growing-condition factors for watercress, distinguishing it from most dryland vegetable crops covered by general soil-suitability guidance.',
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
            'Establishment from stem cuttings or seed into flooded or continuously flowing beds',
            'Maintenance of steady water flow and oxygenation to support healthy root and shoot growth',
            'Periodic bed renewal or replanting to sustain leaf quality and yield over time',
            'Water source and quality monitoring, given the crop’s direct contact with the growing water',
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
          text: 'Nitrogen strongly influences leafy growth and yield in watercress, and nutrient supply in flowing-water systems is managed differently from dryland soil fertility, often through controlled nutrient dosing of the water supply.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Nutrient management approaches vary by production system (traditional beds, hydroponics, or aquaponics) and should follow local and system-specific guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Water is the defining input for watercress production rather than a supplementary one: beds rely on a continuous supply of clean, cool, well-oxygenated water flowing through or around the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Traditional bed systems use gravity-fed or pumped surface water, while modern operations may use recirculating hydroponic or aquaponic systems with more controlled flow and quality management.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot can occur under stagnant or poorly oxygenated water conditions, and bacterial leaf spot can affect foliage in some production systems. Aphids are a common pest of foliage, and snails, favored by the crop’s consistently wet growing environment, can cause feeding damage to leaves and stems.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root rot',
              'Disease',
              'Linked to stagnant or poorly oxygenated water',
            ],
            [
              'Bacterial leaf spot',
              'Disease',
              'Occurs in some production systems',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage'],
            [
              'Snails',
              'Pest',
              'Favored by consistently wet growing conditions',
            ],
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
          text: 'Leafy stems are cut by hand or machine above the water line once they reach marketable length, with regrowth allowing repeated harvests from the same planting over the production cycle.',
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
            'Fresh leaves and stems used raw in salads and as a peppery garnish',
            'Used cooked in soups and some regional dishes',
            'Grown as a specialty crop in hydroponic and aquaponic systems in some modern operations',
            'Sold as a fresh-cut bagged salad ingredient in many retail markets',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'snails' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'hydroponics' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'kale' },
    { type: 'crop', slug: 'cabbage' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar'],
  geographicScope:
    'Global overview; commercial production concentrated in regions with reliable clean water sources across Europe, North America, and Asia.',
  climateContext:
    'Cool, temperate semi-aquatic crop requiring consistently cool, clean, flowing or continuously wet growing conditions rather than conventional dryland soil.',
  limitations: [
    'Growing systems (traditional flowing beds versus hydroponic or aquaponic setups) differ substantially in management, which is not detailed exhaustively here.',
    'Watercress is discussed here only as an agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    {
      sourceId: 'cabi',
      citedFor: 'Watercress disease and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Global leaf vegetable crop context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Watercress',
    description:
      'A structured, evidence-based reference on watercress: classification, aquatic growing needs, cultivation, diseases, pests, harvest, and leaf vegetable uses.',
    keywords: [
      'watercress',
      'Nasturtium officinale',
      'aquatic vegetable crop',
      'watercress bed cultivation',
    ],
  },
  structuredData: { article: true },
};
