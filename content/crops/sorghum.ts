import type { CropContent } from '@/types/content';

export const sorghum: CropContent = {
  id: 'crop-sorghum',
  slug: 'sorghum',
  contentType: 'crop',
  title: 'Sorghum',
  scientificName: 'Sorghum bicolor',
  alternativeNames: ['Milo', 'Great millet', 'Guinea corn'],
  category: 'Cereal crop',
  subcategory: 'Warm-season cereal and forage grass',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Sorghum is a warm-season cereal grass valued for its drought and heat tolerance, grown for grain, forage, and sweet-stalk products across semi-arid and tropical regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sorghum is a warm-season cereal grass notable for its ability to produce a reliable crop under drier and hotter conditions than many other cereals, making it a staple food grain across parts of Africa and Asia and a major feed and industrial grain crop in the Americas.',
    },
    {
      type: 'paragraph',
      text: 'As a C4 grass, sorghum uses water and nitrogen relatively efficiently, and its physiological drought-avoidance traits, including the ability to reduce water loss under stress and resume growth once moisture returns, underpin much of its reputation as a resilient crop in semi-arid environments.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grasses)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Sorghum bicolor' },
    {
      label: 'Primary uses',
      value: 'Food grain, livestock feed, forage/silage, industrial uses',
    },
    {
      label: 'Climate',
      value:
        'Warm season; notably drought- and heat-tolerant relative to many cereals',
    },
    {
      label: 'Soil preference',
      value: 'Wide adaptability, including loams and silt loams',
      note: 'Tolerates some marginal soil conditions better than many other cereals.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sorghum is grown across a wide range of production systems, from subsistence food-grain farming in semi-arid Africa and Asia to large-scale mechanized grain and forage production in the Americas and Australia.',
        },
        {
          type: 'paragraph',
          text: 'Because input requirements are often lower than for crops such as maize, sorghum is frequently grown on more marginal or moisture-limited land, though it also responds well to more favorable growing conditions and inputs where they are available.',
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
            { term: 'Genus', description: 'Sorghum' },
            {
              term: 'Principal species',
              description: 'Sorghum bicolor',
            },
            {
              term: 'Growth habit',
              description:
                'Warm-season annual grass producing a terminal panicle of grain, using C4 photosynthesis',
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
          text: 'Sorghum was domesticated in northeastern Africa, in the region spanning present-day Sudan and Ethiopia, several thousand years ago, and subsequently spread across Africa and into South Asia before later introduction to the Americas.',
        },
        {
          type: 'paragraph',
          text: 'Sorghum remains a staple food grain in parts of Africa and Asia and is a major feed and industrial grain crop in the Americas. Production and trade statistics are compiled by FAO and USDA and should be taken from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sorghum is a warm-season crop, sensitive to frost and cool soil temperatures at planting, but notably tolerant of heat and drought once established, relative to many other cereal crops.',
        },
        {
          type: 'paragraph',
          text: 'This drought tolerance reflects a deep root system and physiological mechanisms that reduce water loss under moisture stress, allowing the crop to resume growth once conditions improve rather than failing outright.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sorghum is adaptable to a wide range of soils, including loams and silt loams, and shows somewhat greater tolerance of marginal conditions, including transient waterlogging and moderate salinity, than many other cereals.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Despite its adaptability, sorghum still performs best on reasonably fertile, well-structured soils. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Sorghum is sown once soils have warmed sufficiently in spring or early summer, into a firm, shallow seedbed suited to its relatively small seed size, with seeding rate and row spacing set locally according to moisture availability and end use.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to grain, forage, or sweet-sorghum end use',
            'Crop rotation to manage soil-borne pests and diseases',
            'Timely weed control during early crop establishment',
            'Seedbed preparation suited to local tillage and moisture conditions',
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
          text: "Nitrogen strongly influences grain yield and tillering, while phosphorus supports early root establishment. Overall input requirements are often lower than for maize, reflecting sorghum's comparatively efficient water and nutrient use.",
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
          text: 'Sorghum is predominantly grown under rain-fed conditions in semi-arid production regions, where its drought tolerance is a key advantage relative to more water-demanding cereals. It is also grown under irrigation, including sprinkler systems, in higher-input production systems.',
        },
        {
          type: 'paragraph',
          text: 'Even with its drought tolerance, adequate moisture during flowering and grain fill remains important for maximizing yield potential.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is a major foliar and stalk disease of sorghum in many production regions, and sorghum downy mildew is a classic disease particularly associated with humid or tropical growing conditions. Aphids, including species with a broad host range across grasses, and fall armyworm are among the key insect pests affecting sorghum.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant hybrids and varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain sorghum is harvested with a combine-harvester once the grain has matured and dried to a moisture content suitable for safe storage, while forage and silage types are cut at a growth stage matched to their intended feeding use.',
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
            'Food grain, especially in parts of Africa and Asia',
            'Livestock feed grain, particularly in the Americas',
            'Forage, silage, and hay production',
            'Sweet sorghum for syrup, and grain sorghum for industrial and brewing uses',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fall-armyworm' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugarcane' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview. Variety choice and input levels vary widely between subsistence and commercial production systems.',
  climateContext:
    'Warm-season C4 cereal notably tolerant of drought and heat relative to many other cereal crops.',
  limitations: [
    'Sowing dates, seeding rates, and input levels are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global sorghum production and food-security role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Sorghum breeding and disease research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Sorghum disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sorghum',
    description:
      'A structured, evidence-based reference on sorghum: classification, climate and soil needs, agronomy, nutrition, diseases, pests, and uses.',
    keywords: [
      'sorghum',
      'Sorghum bicolor',
      'cereal crop',
      'drought-tolerant grain',
    ],
  },
  structuredData: { article: true },
};
