import type { CropContent } from '@/types/content';

export const plantain: CropContent = {
  id: 'crop-plantain',
  slug: 'plantain',
  contentType: 'crop',
  title: 'Plantain',
  scientificName: 'Musa × paradisiaca',
  alternativeNames: ['Cooking banana', 'Plátano', 'Matooke (cooking type)'],
  category: 'Fruit and staple crop',
  subcategory: 'Starchy cooking banana',
  botanicalFamily: 'Musaceae (bananas)',
  lifecycle: 'Perennial',
  summary:
    'Plantain is a starchy cooking-type banana grown across the humid tropics as a year-round staple, eaten cooked at all stages of ripeness, and a major source of dietary carbohydrate in West and Central Africa and Latin America.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Plantain is a group of starchy cooking bananas grown throughout the humid tropics, where it is a dietary staple rather than a dessert fruit. Unlike sweet bananas, plantains are firm and starchy and are almost always cooked, whether green, semi-ripe, or ripe, by boiling, roasting, or frying.',
    },
    {
      type: 'paragraph',
      text: 'Plantains and cooking bananas are among the most important staple foods of West and Central Africa and parts of Latin America and the Caribbean. The plant is a large perennial herb that produces fruit continuously through successive suckers, providing food across the year rather than in a single season.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Musaceae (bananas)' },
    { label: 'Life cycle', value: 'Perennial (successive suckers)' },
    { label: 'Scientific name', value: 'Musa × paradisiaca' },
    {
      label: 'Primary uses',
      value: 'Cooked staple food — boiled, roasted, fried, or made into flour',
    },
    {
      label: 'Climate',
      value: 'Warm, humid tropics; frost- and drought-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams rich in organic matter',
      note: 'High demand for moisture and nutrients; sensitive to waterlogging.',
    },
    {
      label: 'Cropping role',
      value:
        'Perennial year-round staple; often grown in mixed home gardens and agroforestry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain is grown mainly as a starchy staple, cooked at all stages of ripeness, and is central to the diets of many communities in the humid tropics. It is grown from smallholder home gardens and mixed agroforestry plots to more intensive commercial plantations.',
        },
        {
          type: 'paragraph',
          text: 'Because the plant fruits continuously through a succession of suckers, plantain provides a relatively steady, year-round supply of food, an important trait for food security in the regions where it is grown.',
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
            { term: 'Family', description: 'Musaceae (banana family)' },
            {
              term: 'Botanical name',
              description: 'Musa × paradisiaca (cooking-type banana hybrids)',
            },
            {
              term: 'Growth habit',
              description:
                'Large perennial herb with a pseudostem of leaf sheaths; each pseudostem fruits once and is replaced by suckers',
            },
            {
              term: 'Relationship to banana',
              description:
                'A starchy cooking type within the cultivated bananas, distinct from sweet dessert bananas',
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
          text: 'Cultivated bananas and plantains originated in Southeast Asia and the western Pacific from hybrids of wild Musa species, and plantains later became especially important in West and Central Africa, where a great diversity of cooking types is grown, as well as in Latin America and the Caribbean.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain requires a warm, humid climate with high and evenly distributed rainfall, and is sensitive to frost, drought, and cool temperatures. Strong winds are a hazard, as the tall, shallow-rooted plants are easily blown over.',
        },
        {
          type: 'paragraph',
          text: 'The crop grows best in the lowland humid tropics, though some cooking bananas are grown at higher elevations in East Africa.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain grows best on deep, fertile, well-drained loams rich in organic matter, with good moisture-holding capacity. It is a heavy feeder and is sensitive to both drought and waterlogging, so drainage and fertility are important.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because plantain removes large amounts of nutrients and is sensitive to waterlogging, deep fertile soils with good drainage and organic matter give the best results.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain is propagated vegetatively from suckers or, in cleaner systems, from tissue-cultured plants to reduce the spread of pests and diseases. Management focuses on maintaining a productive stand of suckers, controlling weeds, and supporting the tall plants against wind and heavy bunches.',
        },
        {
          type: 'list',
          items: [
            'Clean planting material (suckers or tissue-cultured plants) to limit pest and disease spread',
            'Desuckering to manage the number of pseudostems per mat',
            'Mulching and organic matter to conserve moisture and supply nutrients',
            'Propping or support of heavy bunches and wind protection where needed',
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
          text: 'Plantain has high nutrient demands, particularly for potassium and nitrogen, reflecting the large amount of biomass and fruit it produces. Organic matter and mulching play an important role in supplying nutrients and conserving moisture in many smallholder systems.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain requires abundant, evenly distributed moisture throughout the year, and yield suffers under drought. In areas with a marked dry season, irrigation and mulching help maintain growth, while good drainage prevents damaging waterlogging.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Black sigatoka (black leaf streak) is a major fungal leaf disease of plantains and bananas that reduces yield and fruit quality, and Fusarium wilt (Panama disease) is a serious soilborne threat to susceptible types. Anthracnose causes post-harvest fruit rot.',
        },
        {
          type: 'paragraph',
          text: 'The banana weevil bores into the corm and pseudostem, and plant-parasitic nematodes damage roots and predispose plants to toppling. Management combines clean planting material, resistant or tolerant varieties, field sanitation, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Plantain bunches are harvested by cutting once the fruit has reached the desired stage of development, usually while still green for cooking use. Because the fruit is perishable and easily bruised, careful handling and prompt use or marketing are important.',
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
            'Green fruit boiled, roasted, pounded (as in fufu and matooke), or fried into chips',
            'Ripe fruit fried or cooked in a range of sweet and savory dishes',
            'Flour and processed products made from dried fruit',
            'A year-round dietary staple in West and Central Africa and parts of Latin America',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'black-sigatoka' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'cassava' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['perennial-crop', 'yield'],
  geographicScope:
    'Global overview centered on the humid tropics of West and Central Africa and Latin America. Production ranges from home gardens to plantations.',
  climateContext:
    'Warm, humid tropical perennial requiring abundant moisture; sensitive to frost, drought, and wind.',
  limitations: [
    'Management ranges from mixed home gardens to intensive plantations and is not reduced to universal guidance here.',
    'A wide diversity of cooking-type cultivars exists, differing in adaptation and disease resistance.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of plantain and cooking banana in tropical food security',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'iita',
      citedFor: 'Plantain and banana breeding, agronomy, and pest research',
    },
    { sourceId: 'cabi', citedFor: 'Plantain disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Plantain (Musa × paradisiaca)',
    description:
      'An evidence-based reference on plantain: cooking-banana botany, humid-tropics agronomy, soil and water needs, black sigatoka, pests, and food uses.',
    keywords: [
      'plantain',
      'Musa paradisiaca',
      'cooking banana',
      'plantain agronomy',
    ],
  },
  structuredData: { article: true },
};
