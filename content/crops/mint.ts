import type { CropContent } from '@/types/content';

export const mint: CropContent = {
  id: 'crop-mint',
  slug: 'mint',
  contentType: 'crop',
  title: 'Mint',
  scientificName:
    'Mentha × piperita (peppermint) and Mentha spicata (spearmint), among other cultivated Mentha species and hybrids',
  alternativeNames: ['Peppermint', 'Spearmint'],
  category: 'Culinary herb crop',
  subcategory: 'Perennial rhizomatous herb',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Perennial',
  summary:
    'Mint is a perennial, rhizome-spreading herb grown for its aromatic leaves and essential oil, used fresh and dried in food, beverages, confectionery, and oral-care and fragrance products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mint spreads vigorously by underground rhizomes, forming dense stands that die back above ground in winter and regrow each spring in temperate climates. This growth habit makes containment an important consideration in both garden and field cultivation.',
    },
    {
      type: 'paragraph',
      text: 'Peppermint and spearmint are the two most commercially significant types, grown at field scale in some regions primarily for steam-distilled essential oil rather than fresh-leaf sale.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    { label: 'Life cycle', value: 'Perennial, spreading by rhizomes' },
    { label: 'Main species', value: 'Mentha × piperita, Mentha spicata' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried herb, essential oil',
    },
    {
      label: 'Climate',
      value: 'Temperate; prefers cool, consistently moist conditions',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, moisture-retentive loams',
      note: 'Optimal ranges vary by region and production system.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mint is grown both in small-scale garden and market-herb settings and, for peppermint and spearmint, in large field plantings dedicated to oil production in a small number of specialized growing regions.',
        },
        {
          type: 'paragraph',
          text: 'Because mint spreads readily by rhizomes, established plantings can persist and expand for many years, and field rotation or physical barriers are often used to manage spread.',
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
            { term: 'Genus', description: 'Mentha' },
            {
              term: 'Principal species',
              description:
                'Mentha × piperita (peppermint); Mentha spicata (spearmint)',
            },
            {
              term: 'Growth habit',
              description:
                'Perennial herb spreading by rhizomes, with square stems and opposite aromatic leaves characteristic of the mint family',
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
          text: 'Mentha species and hybrids originated across Europe, the Mediterranean, and parts of Asia, and peppermint itself is understood to be a naturally occurring hybrid between spearmint and watermint that has been propagated vegetatively ever since its selection.',
        },
        {
          type: 'paragraph',
          text: 'Commercial peppermint and spearmint oil production is concentrated in a limited number of regions with suitable climate and irrigation infrastructure, alongside widespread smaller-scale cultivation for fresh and dried herb markets globally.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mint grows best in temperate climates with cool nights and consistently moist conditions; growth slows in extreme heat and the plant dies back with frost, regrowing from rhizomes the following season in hardy types.',
        },
        {
          type: 'paragraph',
          text: 'Fertile, moisture-retentive loams support the vigorous growth mint requires, since the shallow rhizome system is sensitive to drought stress. Well-drained sandy loams can also be used with more frequent irrigation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Consistent soil moisture, rather than drainage alone, is often the limiting factor for mint quality; local guidance should be consulted for specific soil recommendations.',
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
            'Propagation mainly by rhizome division or stem cuttings rather than seed, to maintain cultivar characteristics',
            'Physical barriers or careful bed placement used to contain the spreading rhizome system',
            'Periodic renewal of plantings as productivity can decline in older, densely rhizome-bound stands',
            'Field rotation in commercial oil production to manage soil-borne disease pressure over time',
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
          text: 'Nitrogen strongly influences leafy growth and, in oil-producing types, overall biomass available for distillation, making it a central input in commercial mint nutrition programs.',
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
          text: 'Mint has a relatively high water requirement and is commonly irrigated in commercial production, since drought stress quickly reduces leaf yield and can affect oil content in peppermint and spearmint.',
        },
        {
          type: 'paragraph',
          text: 'Sprinkler irrigation is widely used in field-scale mint oil production, alongside drip and other localized methods in smaller plantings.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew commonly affects mint foliage, particularly later in the season, while Verticillium wilt is a well-documented, serious vascular disease of peppermint in some major production regions, causing wilting and yield decline in infected fields. Aphids, spider mites, and flea beetles are documented pests of mint foliage.',
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
            [
              'Verticillium wilt',
              'Disease',
              'Serious vascular disease of peppermint',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage'],
            ['Spider mites', 'Pest', 'Favored by hot, dry conditions'],
            [
              'Flea beetles',
              'Pest',
              'Feed on leaves, creating small shot-holes',
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
          text: 'Fresh-market mint is cut by hand or machine as needed for sale, while oil-production fields are mowed at a stage of peak oil content and typically field-cured briefly before steam distillation.',
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
            'Fresh and dried culinary herb used in cooking and beverages',
            'Steam-distilled essential oil used in confectionery, oral-care, and fragrance products',
            'Herbal teas and flavoring extracts',
            'Ornamental and groundcover use in some garden settings',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'basil' },
    { type: 'crop', slug: 'oregano' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Global overview; commercial peppermint and spearmint oil production concentrated in a limited number of regions, alongside widespread smaller-scale cultivation.',
  climateContext:
    'Temperate perennial herb favoring cool, consistently moist conditions; dies back with frost and regrows from rhizomes.',
  limitations: [
    'Oil content and composition vary by species, cultivar, and growing conditions and are not quantified here.',
    'Mint is discussed here only as a culinary and agricultural crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Mint disease and pest compendium data' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Peppermint and spearmint production research',
    },
    { sourceId: 'fao', citedFor: 'Global herb crop production context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mint',
    description:
      'A structured, evidence-based reference on mint: classification, climate needs, cultivation, nutrition, diseases, pests, harvest, and oil and culinary uses.',
    keywords: [
      'mint',
      'Mentha piperita',
      'culinary herb crop',
      'peppermint cultivation',
    ],
  },
  structuredData: { article: true },
};
