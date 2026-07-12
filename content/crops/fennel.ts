import type { CropContent } from '@/types/content';

export const fennel: CropContent = {
  id: 'crop-fennel',
  slug: 'fennel',
  contentType: 'crop',
  title: 'Fennel',
  scientificName: 'Foeniculum vulgare',
  category: 'Culinary herb and vegetable crop',
  subcategory: 'Annual to short-lived perennial seed and bulb herb',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Annual',
  summary:
    'Fennel is grown either for its aromatic dried seeds, used as a spice, or, in the case of Florence fennel, for its swollen leaf-base bulb eaten as a vegetable, typically managed as an annual crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fennel is cultivated in two broad forms: seed and herb fennel, grown mainly for its dried seed and feathery foliage, and Florence fennel, selected for a swollen, layered leaf base harvested as a bulb vegetable. Both forms share the same species but differ in cultivar type and management.',
    },
    {
      type: 'paragraph',
      text: 'Although fennel can behave as a short-lived perennial in mild climates, it is most commonly grown as an annual crop, sown fresh each season for either seed or bulb production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Annual (sometimes short-lived perennial)' },
    { label: 'Main species', value: 'Foeniculum vulgare' },
    {
      label: 'Primary uses',
      value: 'Seed spice, bulb vegetable (Florence fennel), essential oil',
    },
    {
      label: 'Climate',
      value: 'Temperate to subtropical; full sun',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams and sandy loams',
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
          text: 'Fennel is grown across a wide climatic range, from home gardens to commercial fields producing seed spice, bulb vegetables, or essential oil, depending on the cultivar and regional market.',
        },
        {
          type: 'paragraph',
          text: 'Florence fennel is managed more like a vegetable crop, with attention to blanching and timely harvest of the bulb, while seed-type fennel is allowed to flower and mature fully before harvest.',
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
            { term: 'Genus', description: 'Foeniculum' },
            { term: 'Principal species', description: 'Foeniculum vulgare' },
            {
              term: 'Growth habit',
              description:
                'Erect, feathery-leaved herb with compound umbels; Florence fennel cultivars form a swollen, layered leaf-base bulb',
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
          text: 'Fennel is native to the Mediterranean region, where it has long grown wild and been cultivated for its seeds, foliage, and, in the case of Florence fennel, its bulb. It has since spread to temperate and subtropical growing regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'India is a major producer of fennel seed, while Italy and other European countries are notable producers of Florence fennel for the fresh vegetable market. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Fennel grows well across a range of temperate and subtropical climates and prefers full sun. Seed-type fennel tolerates drier conditions well, while Florence fennel generally requires more consistent moisture for good bulb development.',
        },
        {
          type: 'paragraph',
          text: 'Fertile, well-drained loams and sandy loams support strong root and bulb development. Compacted or poorly drained soils can restrict growth and increase disease risk.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Florence fennel is prone to bolting under stress or temperature extremes; local sowing-date guidance should be followed to reduce this risk.',
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
            'Cultivar selection matched to seed, bulb, or foliage end use',
            'Even, well-timed sowing to reduce bolting risk in Florence fennel',
            'Earthing up or blanching of the developing bulb in some Florence fennel production systems',
            'Isolation from other fennel plantings or related umbellifers where seed purity matters for spice production',
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
          text: 'Nitrogen supports vegetative growth in both seed and bulb production, while potassium contributes to bulb quality and overall plant vigor.',
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
          text: 'Consistent soil moisture supports even bulb development in Florence fennel and helps reduce premature bolting, while seed-type fennel is more tolerant of drier conditions once established.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is commonly used in intensive fennel production to maintain steady moisture while limiting foliar wetness.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew can affect fennel foliage, particularly in warm, dry conditions, while root rot can develop in poorly drained soils, weakening plants and affecting bulb quality. Aphids, including species specifically associated with fennel and related umbellifers, and thrips are common pests of foliage and flower heads.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Powdery mildew', 'Disease', 'Favored by warm, dry conditions'],
            ['Root rot', 'Disease', 'Associated with poor drainage'],
            [
              'Aphids',
              'Pest',
              'Sap-feeding insects on foliage and flower heads',
            ],
            ['Thrips', 'Pest', 'Feed on leaves and flowers'],
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
          text: 'Florence fennel bulbs are cut at the base once they reach marketable size, while seed-type fennel is harvested once seed heads mature and dry, then threshed and cleaned before storage or processing.',
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
            'Dried seed used whole or ground as a culinary spice',
            'Florence fennel bulb eaten raw or cooked as a vegetable',
            'Fresh foliage used as a culinary herb in some cuisines',
            'Fennel seed oil extracted for the flavor and fragrance industries',
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
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
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
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'dill' },
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'cumin' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Global overview; India is a leading producer of fennel seed, while Italy and other European countries are notable producers of Florence fennel.',
  climateContext:
    'Temperate to subtropical crop grown as seed spice, bulb vegetable, or foliage herb, most commonly managed as an annual.',
  limitations: [
    'Cultivar type (seed, bulb, or foliage) strongly affects management and is not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global spice and vegetable crop production context',
    },
    { sourceId: 'cabi', citedFor: 'Fennel disease and pest compendium data' },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fennel',
    description:
      'A structured, evidence-based reference on fennel: classification, climate needs, cultivation, diseases, pests, harvest, and seed and bulb uses.',
    keywords: [
      'fennel',
      'Foeniculum vulgare',
      'Florence fennel',
      'fennel seed spice',
    ],
  },
  structuredData: { article: true },
};
