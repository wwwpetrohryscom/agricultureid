import type { CropContent } from '@/types/content';

export const lupin: CropContent = {
  id: 'crop-lupin',
  slug: 'lupin',
  contentType: 'crop',
  title: 'Lupin',
  scientificName: 'Lupinus (L. albus, L. angustifolius, L. luteus)',
  alternativeNames: ['Lupine', 'Lupini', 'Sweet lupin'],
  category: 'Legume crop',
  subcategory: 'Grain and protein legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Lupin is a grain legume grown for high-protein seed used in animal feed and, as low-alkaloid sweet types, in human food, notable for thriving on acidic sandy soils and fixing large amounts of nitrogen.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lupins are grain legumes of the genus Lupinus grown for their protein-rich seed, chiefly for animal feed and increasingly for human food as low-alkaloid "sweet" types. The principal cultivated species include white lupin, narrow-leafed (blue) lupin, and yellow lupin, each with distinct soil and climate adaptations.',
    },
    {
      type: 'paragraph',
      text: 'A defining agronomic feature of lupins is their adaptation to acidic, sandy, and infertile soils where many other legumes fail, together with strong nitrogen fixation and, in some species, an ability to access sparingly soluble soil phosphorus. Traditional lupins are bitter and toxic owing to quinolizidine alkaloids, and modern sweet cultivars have been bred for low alkaloid content.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Lupinus (several cultivated species)' },
    {
      label: 'Primary uses',
      value:
        'High-protein animal feed and, as sweet types, human food; green manure',
    },
    {
      label: 'Climate',
      value:
        'Cool to temperate season; sown for spring or, in mild regions, autumn growth',
    },
    {
      label: 'Soil preference',
      value:
        'Acidic, sandy, and low-fertility soils; sensitive to lime-induced and waterlogged conditions',
      note: 'Narrow-leafed and yellow lupins are especially suited to acidic sands.',
    },
    {
      label: 'Cropping role',
      value: 'Break crop and strong nitrogen fixer on light, acidic soils',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lupin is grown mainly as a grain legume for its high-protein seed. Sweet, low-alkaloid cultivars are used in feed and, after processing, in human food, while the crop also serves as a nitrogen-fixing break crop on soils poorly suited to other legumes.',
        },
        {
          type: 'paragraph',
          text: 'Species selection is important: narrow-leafed and yellow lupins are especially well adapted to acidic sandy soils, while white lupin is more demanding of fertility and moisture but can yield well on suitable land.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus', description: 'Lupinus' },
            {
              term: 'Principal cultivated species',
              description:
                'Lupinus albus (white), L. angustifolius (narrow-leafed), and L. luteus (yellow)',
            },
            {
              term: 'Root system',
              description:
                'Deep taproot bearing nodules that host nitrogen-fixing rhizobia; some species form cluster roots that aid phosphorus uptake',
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
          text: 'Old World lupins, including white and yellow lupin, have been cultivated around the Mediterranean since antiquity, while narrow-leafed lupin is an important modern grain crop in Australia and parts of Europe. A separate lupin, the Andean tarwi, was domesticated in South America.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area, production, and trade by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lupins are cool- to temperate-season crops. In Mediterranean and mild-winter regions they are autumn-sown and grow through the cooler months, while in cooler regions they are spring-sown. They are sensitive to heat and drought during flowering and pod fill.',
        },
        {
          type: 'paragraph',
          text: 'Species differ in frost tolerance and season length, which, along with soil type, guides the choice of species and cultivar for a given environment.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lupins are distinctive among legumes for thriving on acidic, sandy, and low-fertility soils. They are, however, sensitive to alkaline and calcareous soils, where lime-induced chlorosis and poor growth occur, and to waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Matching lupin species to soil is critical: narrow-leafed and yellow lupins suit acidic sands, whereas alkaline or calcareous soils are generally unsuitable for most lupins.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Lupin is direct-seeded into a firm seedbed, with species and sowing time chosen to match soil and climate. Because early growth can be slow, weed control during establishment is important, and the crop is commonly grown in rotation with cereals.',
        },
        {
          type: 'list',
          items: [
            'Species selection matched to soil acidity, texture, and season length',
            'Sowing time (autumn or spring) matched to regional climate and frost risk',
            'Weed management during early establishment',
            'Rhizobial inoculation with lupin-specific strains in fields new to the crop',
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
          text: 'Lupins fix substantial nitrogen through effective nodulation and can leave a strong residual benefit for following crops. Some species, notably white lupin, form cluster roots that release organic acids and improve access to sparingly soluble phosphorus.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Lupins are grown mainly under rain-fed conditions in temperate and Mediterranean regions. Yield is sensitive to moisture stress during flowering and pod fill, and the crop is intolerant of waterlogging on the light soils it commonly occupies.',
        },
        {
          type: 'paragraph',
          text: 'On sandy soils with limited water-holding capacity, seasonal rainfall distribution is a key determinant of yield.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is a serious, seed-borne disease of lupins that can devastate susceptible crops, and sclerotinia stem rot causes losses under cool, moist conditions. Root rots and other fungal diseases occur where drainage is poor.',
        },
        {
          type: 'paragraph',
          text: 'Aphids are important pests, both directly and as virus vectors, and thrips and other sap feeders also affect the crop. Management combines clean, disease-free seed, resistant cultivars, rotation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain lupin is harvested by combine once pods and stems have dried and the seed has reached a moisture content suitable for storage. Some species and cultivars are prone to pod shattering, so harvest timing and cultivar choice help limit losses.',
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
            'High-protein seed used as animal feed, particularly for ruminants and other livestock',
            'Sweet, low-alkaloid seed used in human food and food ingredients after processing',
            'Traditional bitter lupini beans debittered before eating in Mediterranean cuisines',
            'Use as a nitrogen-fixing break crop and green manure on light, acidic soils',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'podzol' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'pea' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'cover-crop',
    'inoculum',
    'soil-ph',
  ],
  geographicScope:
    'Global overview centered on Mediterranean Europe and Australia. Species choice depends strongly on soil acidity and climate.',
  climateContext:
    'Cool- to temperate-season grain legume adapted to acidic sandy soils; sensitive to alkaline soils, heat, and waterlogging.',
  limitations: [
    'Species and cultivar selection are strongly soil- and climate-dependent and not reduced to universal guidance here.',
    'Alkaloid content and debittering requirements differ between traditional and sweet types.',
    'Disease and pest control, especially for seed-borne anthracnose, should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of lupin as a protein legume and break crop',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'ahdb',
      citedFor: 'Lupin agronomy and crop management guidance',
    },
    { sourceId: 'cabi', citedFor: 'Lupin disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Lupin (Lupinus)',
    description:
      'An evidence-based reference on lupin: species, acidic sandy-soil adaptation, nitrogen fixation, alkaloids, diseases, pests, and feed and food uses.',
    keywords: ['lupin', 'Lupinus', 'sweet lupin', 'protein legume'],
  },
  structuredData: { article: true },
};
