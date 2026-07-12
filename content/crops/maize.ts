import type { CropContent } from '@/types/content';

export const maize: CropContent = {
  id: 'crop-maize',
  slug: 'maize',
  contentType: 'crop',
  title: 'Maize',
  scientificName: 'Zea mays',
  alternativeNames: ['Corn', 'Indian corn'],
  category: 'Cereal crop',
  subcategory: 'Warm-season cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Maize (corn) is a warm-season cereal grown worldwide for grain used in food, feed, and industrial products. It is cultivated across a wide range of climates, from temperate to tropical, typically completing its life cycle within a single growing season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maize is one of the most widely cultivated cereal crops in the world, grown for grain that serves as a staple food, a major livestock feed ingredient, and a raw material for starch, sweeteners, and industrial products. Its high yield potential and adaptability to diverse environments have made it a dominant crop across many agricultural systems.',
    },
    {
      type: 'paragraph',
      text: 'Maize is a tall, single-stemmed annual grass. Unlike wheat and barley, it is monoecious with separate male and female flower structures on the same plant: the tassel produces pollen at the top of the plant, while ears develop lower on the stalk and are fertilized by wind-blown pollen landing on their silks.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual, warm-season' },
    { label: 'Scientific name', value: 'Zea mays' },
    {
      label: 'Primary uses',
      value: 'Food, livestock feed, starch, sweeteners, and biofuel feedstock',
    },
    {
      label: 'Climate',
      value: 'Warm temperate to tropical; sensitive to frost',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams with good moisture-holding capacity',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Maize uses the C4 photosynthetic pathway, which allows it to use water and nitrogen efficiently and sustain high rates of growth under warm, sunny conditions. This physiology, combined with more than a century of breeding, underlies its high yield potential relative to many other cereals.',
        },
        {
          type: 'paragraph',
          text: 'Maize is grown across an unusually wide range of production systems, from smallholder plots to large mechanized farms, and is used for grain, silage, and, in some regions, fresh consumption as sweet corn. Agronomic practices differ substantially between these systems and by region.',
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
            { term: 'Family', description: 'Poaceae (grass family)' },
            { term: 'Genus and species', description: 'Zea mays' },
            {
              term: 'Flower structure',
              description:
                'Monoecious; male tassel at the plant apex and female ears borne on lower nodes, fertilized by wind-dispersed pollen',
            },
            {
              term: 'Growth habit',
              description:
                'Tall, single-stemmed annual grass, typically 1.5–3 m at maturity',
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
          text: 'Maize was domesticated from wild teosinte in what is now Mexico and subsequently spread throughout the Americas before European contact. Following its introduction to other continents, it became established as a major crop in Africa, Asia, Europe, and beyond.',
        },
        {
          type: 'paragraph',
          text: 'Maize is now grown on every inhabited continent under an enormous range of climates. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies, and figures should be drawn from those primary sources rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Maize is a warm-season crop that requires a frost-free period long enough for the chosen hybrid to complete its growth cycle. It is sensitive to cold soil and air temperatures at planting and to frost at either end of the season.',
        },
        {
          type: 'paragraph',
          text: 'Heat and drought stress around silking and the early grain-fill period can substantially affect kernel set and yield. Hybrid maturity class is selected to match the length of the local frost-free season and expected moisture conditions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Maize performs best on deep, well-drained, medium-textured soils such as loams that combine good moisture-holding capacity with adequate aeration. It is sensitive to compaction and waterlogging, both of which restrict root development.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability, including drainage class and available water capacity, should be assessed with local soil survey data rather than general guidance alone.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a uniform plant stand at the correct depth and spacing is a key determinant of maize yield potential. Hybrid selection, planting date, and target plant population are set according to local climate, soil, and market end use.',
        },
        {
          type: 'list',
          items: [
            'Hybrid selection matched to maturity class, disease pressure, and end use (grain, silage, or sweet corn)',
            'Crop rotation, often with legumes such as soybean, to manage pests, diseases, and soil nitrogen supply',
            'Seedbed preparation and planting equipment suited to the tillage system in use',
            'Weed management during early growth, when maize competes poorly with weeds',
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
          text: 'Maize has a high nitrogen requirement relative to many other cereals, reflecting its rapid biomass accumulation and yield potential. Phosphorus and potassium support early root development, stalk strength, and grain fill, while requirements for each nutrient depend on soil supply, target yield, and previous cropping history.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and placement should follow local soil tests and regional agronomic guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Maize is grown both rain-fed and under irrigation, depending on regional rainfall reliability. Water demand peaks around tasseling, silking, and early grain fill, and stress during this window has a disproportionate effect on yield.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, scheduling is generally based on estimated crop evapotranspiration and local climate data, with methods and reference values published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Maize is affected by a range of fungal diseases, including Fusarium stalk and ear rots, as well as leaf blights and smuts whose importance varies by region and season. Insect pests such as aphids can reduce vigor directly and transmit certain viruses; other regionally important pests include stalk borers and rootworms.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant or tolerant hybrids, crop rotation, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain maize is harvested once kernels have reached physiological maturity and dried to a moisture level suitable for combining and safe storage, with further drying often applied afterward. Silage maize is harvested earlier, at a whole-plant moisture content suited to fermentation and storage as feed.',
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
            'Human food, including cornmeal, masa-based products, and sweet corn for direct consumption',
            'Livestock feed, as grain, silage, or processing by-products',
            'Industrial starch, sweeteners, and oil extracted from the grain',
            'Feedstock for ethanol and other biofuel production in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'common-smut' }],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [{ type: 'soil', slug: 'loam-soil' }],
  relatedTopics: [{ type: 'crop', slug: 'soybean' }],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'macronutrient', 'yield'],
  geographicScope:
    'Global overview. Hybrid choice, planting dates, and input levels are region-specific and vary widely by climate and market.',
  climateContext:
    'Warm-season crop requiring a frost-free growing period; grown from temperate to tropical zones, rain-fed or irrigated.',
  limitations: [
    'Hybrid selection, planting density, and fertilizer programs are region-specific decisions not covered by universal values here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT and USDA NASS.',
    'Disease and pest pressure varies considerably by region and season; local extension guidance should inform management decisions.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of maize in global food and feed systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'cimmyt', citedFor: 'Maize improvement and agronomy research' },
    { sourceId: 'usda-ars', citedFor: 'Maize disease and pest research' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Regional maize agronomy guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Maize',
    description:
      'An evidence-based reference on maize (corn): classification, climate and soil needs, agronomy, nutrient demand, diseases, pests, harvest, and uses.',
    keywords: ['maize', 'corn', 'Zea mays', 'cereal crop'],
  },
  structuredData: { article: true },
};
