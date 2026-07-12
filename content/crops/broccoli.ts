import type { CropContent } from '@/types/content';

export const broccoli: CropContent = {
  id: 'crop-broccoli',
  slug: 'broccoli',
  contentType: 'crop',
  title: 'Broccoli',
  scientificName: 'Brassica oleracea var. italica',
  alternativeNames: ['Calabrese'],
  category: 'Vegetable crop',
  subcategory: 'Brassica (cole) vegetable',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Biennial, grown as an annual for head harvest',
  summary:
    'Broccoli is a cool-season brassica grown for its immature flower heads, harvested before flowering and valued for reliable performance in temperate and Mediterranean climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Broccoli is a cultivated variety of Brassica oleracea, the same species as cabbage, cauliflower, and kale, selected for a dense cluster of immature flower buds harvested as the edible head before the flowers open. It is grown as a cool-season crop, generally in spring or autumn plantings in temperate climates.',
    },
    {
      type: 'paragraph',
      text: 'Like other members of the species, broccoli is botanically biennial — flowering and setting seed only after a period of cold the following season — but it is grown commercially as an annual, harvested for its head in the same season it is planted.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    {
      label: 'Life cycle',
      value: 'Biennial, grown as an annual for head harvest',
    },
    { label: 'Main species', value: 'Brassica oleracea var. italica' },
    {
      label: 'Primary uses',
      value: 'Fresh and processed (frozen) vegetable',
    },
    {
      label: 'Climate',
      value: 'Cool-season; heat during head development reduces quality',
    },
    {
      label: 'Soil preference',
      value: 'Firm, fertile, well-drained loams',
      note: 'Clubroot risk rises in wet, acidic soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli is grown for its compact head of unopened flower buds and associated stalk, harvested at a stage judged by bud size and tightness before individual flowers begin to open. Modern hybrid cultivars dominate commercial production for their uniformity and disease resistance.',
        },
        {
          type: 'paragraph',
          text: 'Production spans large-scale commercial fields supplying fresh and processing markets as well as smaller-scale and home garden cultivation, with planting timed around the cool conditions the crop requires for good head quality.',
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
            { term: 'Family', description: 'Brassicaceae (mustard family)' },
            { term: 'Species', description: 'Brassica oleracea' },
            { term: 'Cultivar group', description: 'Italica group (broccoli)' },
            {
              term: 'Growth habit',
              description:
                'Biennial broadleaf plant grown as an annual, producing an edible cluster of immature flower buds on a thick central stalk',
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
          text: 'Broccoli was selected from wild cabbage populations native to the Mediterranean coast, with the Italica group developed in Italy before spreading through Europe and, more recently, becoming a major vegetable crop in the Americas, Asia, and elsewhere.',
        },
        {
          type: 'paragraph',
          text: 'Current area, production, and trade figures change over time and by region; they are best obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli favors cool growing conditions; consistently warm or hot weather during head development commonly leads to smaller, looser, or discolored heads and premature flower opening ("bolting" of the head).',
        },
        {
          type: 'paragraph',
          text: "In many regions it is grown as a spring or autumn crop, or year-round in coastal or highland areas with consistently mild temperatures, to keep head development within the crop's preferred temperature range.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli performs best on firm, fertile, well-drained loams with good moisture-holding capacity. Soil pH is an important management consideration, since more acidic, poorly drained soils favor clubroot, a serious soil-borne disease of brassicas.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Maintaining soil pH toward the higher end of the range tolerated by the crop is a widely used cultural tool against clubroot. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli is commonly established from transplants raised in trays or seedbeds and set out at a spacing and timing suited to local climate and market, though direct seeding is also used in some systems.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to season length, heat tolerance, and market use',
            'Crop rotation with non-brassica crops to reduce clubroot and other soil-borne disease risk',
            'Uniform transplanting and spacing to promote even head development',
            'Timely weed and moisture management, since check to growth can reduce head quality',
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
          text: 'Nitrogen strongly influences leaf and head development, while boron and sulfur deficiencies are of particular concern in brassicas, since boron deficiency can cause internal stem disorders and sulfur supports the glucosinolate compounds characteristic of the family.',
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
          text: 'Broccoli has a relatively shallow root system and benefits from consistent soil moisture, particularly during head formation, when water stress can reduce head size and quality. Sprinkler and drip irrigation are both used depending on scale and region.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot is one of the most damaging soil-borne diseases of broccoli and other brassicas, causing swollen, distorted roots and stunted growth, and can persist in soil for many years once established. Downy mildew affects foliage under cool, humid conditions, while flea beetles damage seedling leaves and armyworms feed on foliage and developing heads.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, soil pH management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli is harvested by hand when heads reach the desired size with tightly closed buds, before individual flowers begin to open, since open, yellowing flowers indicate overmaturity and reduced market quality. Some cultivars also produce secondary side shoots that can be harvested after the main head.',
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
            'Fresh-market vegetable, eaten raw or cooked',
            'Frozen and other processed vegetable products',
            'Minimally processed and pre-cut retail formats',
            'Crop residues sometimes incorporated as green manure or livestock feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'kale' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'micronutrient', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season brassica; heat during head development reduces head quality and can trigger premature flowering.',
  limitations: [
    'Clubroot risk and soil pH management thresholds vary regionally and with local pathogen strains; local extension guidance should be consulted.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of broccoli in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Brassica disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for broccoli',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Broccoli',
    description:
      'A structured, evidence-based reference on broccoli: classification, cool-season climate needs, soil and clubroot management, pests, and uses.',
    keywords: [
      'broccoli',
      'Brassica oleracea',
      'brassica vegetable',
      'cole crop',
    ],
  },
  structuredData: { article: true },
};
