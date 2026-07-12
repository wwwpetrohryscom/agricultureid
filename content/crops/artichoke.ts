import type { CropContent } from '@/types/content';

export const artichoke: CropContent = {
  id: 'crop-artichoke',
  slug: 'artichoke',
  contentType: 'crop',
  title: 'Artichoke',
  scientificName: 'Cynara cardunculus var. scolymus',
  alternativeNames: ['Globe artichoke'],
  category: 'Vegetable crop',
  subcategory: 'Perennial flower-bud vegetable',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Perennial',
  summary:
    'Artichoke is a perennial thistle-like plant of the daisy family grown for its large, immature flower buds, harvested and eaten as a vegetable before the flower opens.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Globe artichoke is a cultivated variety of Cynara cardunculus, the same species that includes cardoon, grown instead for its edible leaf stalks. Artichoke plants form a rosette of large, deeply lobed leaves surrounding thick flowering stems that bear the harvested buds.',
    },
    {
      type: 'paragraph',
      text: 'Although artichoke is a true perennial capable of producing for several years from the same root system, it is grown as an annual in some colder climates where winter conditions are too severe for the crown to survive.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    {
      label: 'Life cycle',
      value: 'Perennial (grown as an annual in colder climates)',
    },
    { label: 'Main species', value: 'Cynara cardunculus var. scolymus' },
    {
      label: 'Primary uses',
      value: 'Immature flower bud eaten as a vegetable',
    },
    {
      label: 'Climate',
      value: 'Mild Mediterranean-type climate; moderate frost sensitivity',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams and sandy loams',
      note: 'Optimal ranges vary by cultivar and region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Artichoke is grown commercially in regions with mild, relatively cool-summer coastal or Mediterranean climates, which favor extended bud production and high-quality heads.',
        },
        {
          type: 'paragraph',
          text: 'Established plantings can remain productive for several years, with individual plants producing multiple buds per stem across a defined harvest season each year.',
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
            { term: 'Family', description: 'Asteraceae (daisy family)' },
            { term: 'Genus', description: 'Cynara' },
            {
              term: 'Principal species',
              description: 'Cynara cardunculus var. scolymus',
            },
            {
              term: 'Growth habit',
              description:
                'Large perennial herb forming a rosette of lobed leaves and thick flowering stems bearing large, bracted flower heads (the harvested "buds")',
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
          text: 'Globe artichoke is believed to have been selected from wild Cynara cardunculus populations native to the Mediterranean region, where it has been cultivated since ancient times.',
        },
        {
          type: 'paragraph',
          text: 'Italy, Spain, and Egypt are among the leading producers today, alongside significant production in the United States, particularly in coastal California. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Artichoke favors mild, relatively cool-summer climates with moderate winters; it has some tolerance of light frost once established but can be damaged or killed by hard freezes, particularly in young plantings.',
        },
        {
          type: 'paragraph',
          text: 'Deep, fertile, well-drained loams and sandy loams support the large root system needed for a productive, long-lived planting. Poorly drained soils increase the risk of crown and root disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'In regions with hard winter freezes, growers often manage artichoke as an annual crop or provide winter protection to the crown.',
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
            'Establishment from crown divisions, rooted suckers, or seed-grown transplants, depending on cultivar and region',
            'Wide spacing to accommodate the plant’s large mature size and multi-year growth',
            'Removal of spent flowering stems after harvest to encourage subsequent regrowth',
            'Winter crown management, including mulching or cutting back, in regions with cold winters',
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
          text: 'Nitrogen supports the vigorous leafy growth needed to sustain bud production, while potassium contributes to overall plant vigor and bud quality across the harvest season.',
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
          text: 'Artichoke requires consistent moisture for good bud size and quality, and drought stress during bud development can lead to smaller, lower-quality heads.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is widely used in commercial production to maintain steady soil moisture while limiting excess leaf wetness and associated disease risk.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold can affect flower buds and bracts under cool, humid conditions, sometimes causing significant losses close to harvest, while root rot can weaken or kill plants on poorly drained sites. Aphids are common sap-feeding pests on foliage and buds, and slugs can damage young growth, particularly in cool, moist conditions.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Gray mold',
              'Disease',
              'Can affect buds and bracts under cool, humid conditions',
            ],
            ['Root rot', 'Disease', 'Risk increased on poorly drained sites'],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage and buds'],
            ['Slugs', 'Pest', 'Damage young growth in cool, moist conditions'],
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
          text: 'Flower buds are hand-cut while still tightly closed and before the bracts begin to open, typically starting with the large terminal bud on each stem, followed by smaller lateral buds as the season progresses.',
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
            'Fresh immature flower buds eaten steamed, boiled, grilled, or roasted as a vegetable',
            'Artichoke hearts canned, jarred, or frozen for retail and food-service markets',
            'Ingredient in prepared foods, dips, and salads',
            'Related cardoon variety of the same species grown for its edible leaf stalks in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'slugs' },
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
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'chamomile' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'lettuce' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; major production in Italy, Spain, and Egypt, with significant production also in coastal California in the United States.',
  climateContext:
    'Mild, relatively cool-summer Mediterranean-type perennial crop with moderate frost sensitivity; sometimes grown as an annual in colder climates.',
  limitations: [
    'Cultivar hardiness and typical management as a perennial versus annual crop vary considerably by region and are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global artichoke production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Artichoke disease and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Artichoke',
    description:
      'A structured, evidence-based reference on artichoke: classification, climate needs, cultivation, nutrition, diseases, pests, harvest, and vegetable uses.',
    keywords: [
      'artichoke',
      'Cynara cardunculus',
      'globe artichoke',
      'artichoke cultivation',
    ],
  },
  structuredData: { article: true },
};
