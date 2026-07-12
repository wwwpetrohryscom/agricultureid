import type { CropContent } from '@/types/content';

export const wheat: CropContent = {
  id: 'crop-wheat',
  slug: 'wheat',
  contentType: 'crop',
  title: 'Wheat',
  scientificName:
    'Triticum aestivum (bread wheat); Triticum durum (durum wheat)',
  alternativeNames: ['Bread wheat', 'Common wheat', 'Durum wheat'],
  category: 'Cereal crop',
  subcategory: 'Temperate cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Wheat is a temperate cereal grown worldwide for grain used in flour, feed, and processed foods. It is cultivated as winter or spring types across a wide range of climates and soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat is one of the most widely cultivated cereal crops in the world and a staple food for a large share of the global population. Grown across temperate and semi-arid regions, it is valued for its adaptability, storability, and the versatility of its grain, which is milled into flour for bread, pasta, and many other foods.',
    },
    {
      type: 'paragraph',
      text: 'Most cultivated wheat is either bread wheat (Triticum aestivum), used mainly for leavened bread and general flour, or durum wheat (Triticum durum), used mainly for pasta and semolina. Varieties are further divided into winter and spring types according to whether they require a period of cold (vernalization) to flower.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual (winter or spring types)' },
    { label: 'Main species', value: 'Triticum aestivum, Triticum durum' },
    {
      label: 'Primary uses',
      value: 'Flour and bakery products, pasta, animal feed',
    },
    {
      label: 'Climate',
      value: 'Cool to temperate; grown in semi-arid zones under irrigation',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and clay loams; near-neutral pH',
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
          text: 'Wheat is a self-pollinating annual grass grown for its edible grain. Its global importance reflects a combination of broad climatic adaptability, established storage and milling infrastructure, and the functional properties of wheat gluten, which enable leavened bread and a wide range of processed products.',
        },
        {
          type: 'paragraph',
          text: 'Production spans large commercial operations and smallholder systems. Because growing conditions differ so widely, agronomic details such as sowing dates, seeding rates, and input levels are highly region-specific and should be based on local recommendations.',
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
            { term: 'Genus', description: 'Triticum' },
            {
              term: 'Principal species',
              description:
                'Triticum aestivum (hexaploid bread wheat) and Triticum durum (tetraploid durum wheat)',
            },
            {
              term: 'Growth habit',
              description:
                'Tillering annual grass producing terminal spikes (ears) of grain',
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
          text: 'Wheat was among the first cereals domesticated in the Fertile Crescent of the Near East, and it spread across Europe, Asia, and North Africa over millennia before reaching the Americas and Oceania. Today it is grown on every inhabited continent, with major production in temperate regions of Asia, Europe, North America, and parts of the Southern Hemisphere.',
        },
        {
          type: 'paragraph',
          text: 'National and regional statistics on area, production, and trade are compiled by bodies such as FAO and national statistical services. Figures change annually with weather and markets, so current values should be taken from those primary datasets rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat is adapted to cool-season growth. Winter wheat is sown in autumn, establishes before winter, and requires a period of cold to trigger flowering; spring wheat is sown after the coldest part of the year in regions where winters are too severe for autumn establishment.',
        },
        {
          type: 'paragraph',
          text: 'Grain filling is sensitive to heat and drought. High temperatures during flowering and grain fill can reduce yield and quality, which is one reason variety choice and sowing timing are matched carefully to local climate.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat performs best on deep, well-drained, medium-textured soils such as loams and clay loams with good structure and moisture-holding capacity. It is generally grown on soils with near-neutral pH, though tolerance varies among varieties.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging and compaction restrict rooting and increase disease risk. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishment depends on producing an even, well-anchored stand at the correct depth into a firm, moist seedbed. Sowing date, seeding rate, and row spacing are set locally according to variety, soil, and expected season length.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to winter/spring type, disease pressure, and end use',
            'Crop rotation to manage soil-borne diseases and weeds',
            'Seedbed preparation appropriate to the tillage system (conventional, reduced, or no-till)',
            'Timely weed management, as wheat competes poorly with weeds during early growth',
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
          text: 'Nitrogen strongly influences both yield and grain protein, while phosphorus, potassium, and sulfur support establishment, root growth, and quality. Requirements depend on target yield, soil supply, previous crop, and residue management.',
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
          text: 'Wheat is grown both rain-fed and under irrigation. Water demand is highest around stem elongation, heading, and grain filling. In irrigated systems, scheduling aims to avoid stress at these sensitive stages while preventing waterlogging.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate; methods and reference data are published by FAO and national services.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat is affected by fungal diseases including powdery mildew, the rusts (leaf, stripe, and stem rust), Septoria leaf blotch, and Fusarium head blight, as well as by insect pests such as aphids, which can also transmit viruses. Pressure varies by region and season.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat is harvested when the grain has matured and dried to a moisture content suitable for combining and safe storage. Harvest timing balances maximum yield and quality against the risk of losses from lodging, shattering, sprouting, or weather damage.',
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
            'Milling into flour for bread, pastries, and other baked goods',
            'Durum semolina for pasta and couscous',
            'Animal feed, including grain and by-products such as bran',
            'Industrial uses including starch and gluten, and use of straw as bedding or a soil amendment',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'powdery-mildew' }],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'yield',
    'evapotranspiration',
  ],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season crop grown across temperate and semi-arid regions, rain-fed or irrigated.',
  limitations: [
    'Sowing dates, seeding rates, and input levels are examples of region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of wheat in food systems and agronomy' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'cimmyt', citedFor: 'Wheat improvement and agronomy research' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Wheat research and disease information',
    },
    { sourceId: 'ahdb', citedFor: 'Regional wheat agronomy and management' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wheat',
    description:
      'A structured, evidence-based reference on wheat: classification, climate and soil requirements, agronomy, nutrition, diseases, pests, harvest, and uses.',
    keywords: ['wheat', 'Triticum aestivum', 'cereal crop', 'wheat agronomy'],
  },
  structuredData: { article: true },
};
