import type { CropContent } from '@/types/content';

export const teff: CropContent = {
  id: 'crop-teff',
  slug: 'teff',
  contentType: 'crop',
  title: 'Teff',
  scientificName: 'Eragrostis tef',
  alternativeNames: ['Tef', "Williams' lovegrass"],
  category: 'Cereal crop',
  subcategory: 'Warm-season small-grained cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Teff is a fine-grained, gluten-free warm-season cereal native to the Ethiopian highlands, the staple grain for the flatbread injera, valued for adaptability to varied conditions and grown for both grain and forage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Teff is a warm-season cereal grass with exceptionally small grains, domesticated in the Ethiopian highlands, where it is the principal staple grain and the basis of the fermented flatbread injera. It is grown across a wide range of altitudes and conditions in Ethiopia and Eritrea and, more recently, as a specialty gluten-free grain and as a forage crop elsewhere.',
    },
    {
      type: 'paragraph',
      text: 'As a C4 grass, teff is adaptable and can be grown under both moisture-stressed and waterlogged conditions that challenge other cereals, which contributes to its reliability as a food crop. Its tiny seed, gluten-free grain, and fine straw distinguish it from the major cereals.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grasses)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Eragrostis tef' },
    {
      label: 'Primary uses',
      value:
        'Flour for injera and other foods; grain is gluten-free; straw as forage',
    },
    {
      label: 'Climate',
      value:
        'Warm season across a wide altitude range; tolerant of varied moisture conditions',
    },
    {
      label: 'Soil preference',
      value:
        'Wide range including heavy vertisols; tolerant of both drought and waterlogging',
      note: 'Grown on Ethiopian black clay (vertisol) soils and lighter soils alike.',
    },
    {
      label: 'Grain trait',
      value: 'Very small, gluten-free grain used chiefly as flour',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is grown mainly for its grain, which is milled whole into flour for injera and other traditional foods, and increasingly marketed internationally as a gluten-free grain. Its straw is a valued livestock feed, and the crop is also grown purely as a fast-growing forage in some regions.',
        },
        {
          type: 'paragraph',
          text: 'Because the grain is so small, seeding rates and threshing methods differ from those of larger-grained cereals, and much of the crop is still grown and processed using traditional smallholder methods.',
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
            { term: 'Genus and species', description: 'Eragrostis tef' },
            {
              term: 'Growth habit',
              description:
                'Tufted warm-season annual grass producing a loose panicle of very small grains, using C4 photosynthesis',
            },
            {
              term: 'Grain',
              description:
                'Among the smallest of all cereal grains; milled whole and gluten-free',
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
          text: 'Teff was domesticated in the Ethiopian highlands, which remain by far the largest area of production and the center of its diversity. Cultivation for grain and forage has since spread to other countries, though it remains a minor crop globally.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is a warm-season crop grown across a wide range of altitudes and moisture conditions in its Ethiopian home, from drought-prone lowlands to cooler highlands. It is sensitive to frost but tolerant of varied temperature and moisture regimes.',
        },
        {
          type: 'paragraph',
          text: 'This adaptability, including the ability to grow under both moisture stress and periodic waterlogging, is a major reason for teff’s reliability as a staple crop.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Teff grows on a wide range of soils and is notably grown on the heavy black clay (vertisol) soils of the Ethiopian highlands, which are difficult for many crops, as well as on lighter loams. It tolerates both drought and temporary waterlogging better than many cereals.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Teff’s ability to yield on heavy vertisols prone to seasonal waterlogging is part of what makes it well suited to the Ethiopian highlands.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is usually established by broadcasting its very fine seed onto a well-prepared, firm seedbed, sometimes after several tillage passes to control weeds and create a fine tilth. The small seed and dense stand mean weed management and lodging control are recurring concerns.',
        },
        {
          type: 'list',
          items: [
            'Fine, firm seedbed suited to the very small seed',
            'Seeding rate and method adapted to teff’s fine grain, often by broadcasting',
            'Weed management, since the crop competes weakly with weeds early on',
            'Attention to lodging, to which the fine-strawed crop is prone',
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
          text: 'Nitrogen strongly influences teff growth and yield but also increases the risk of lodging in this fine-strawed crop, so nutrient management balances yield against standing ability. Phosphorus supports early establishment on deficient soils.',
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
          text: 'Teff is grown predominantly under rain-fed conditions, where its tolerance of both moisture stress and waterlogging supports reliable production across variable seasons. Its relatively short cycle allows it to be sown when the season is well advanced.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is affected by rust and by head smudge and other head and leaf diseases under favorable conditions, though it is generally regarded as a relatively hardy cereal. Lodging, while not a disease, is a major yield-limiting problem.',
        },
        {
          type: 'paragraph',
          text: 'Insect pests include grasshoppers and armyworms that feed on foliage, along with aphids and other sap feeders. Management relies mainly on adapted varieties, timely planting, and field sanitation, with authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is harvested once the grain has matured and dried, traditionally by cutting the crop and threshing the fine grain, often by trampling by livestock on a threshing floor. The very small grain requires care to limit losses during threshing and cleaning.',
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
            'Whole-grain flour used to make the fermented flatbread injera and other traditional foods',
            'Marketed internationally as a gluten-free grain and flour',
            'Straw valued as livestock feed and, in construction, as a binder in traditional building',
            'Grown in some regions purely as a fast-establishing forage crop',
          ],
        },
      ],
    },
  ],
  commonDiseases: [],
  commonPests: [
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil', slug: 'vertisol' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'forage'],
  geographicScope:
    'Global overview centered on the Ethiopian highlands, with growing specialty and forage use elsewhere.',
  climateContext:
    'Warm-season C4 cereal adapted to a wide altitude and moisture range, including drought-prone and waterlogged conditions.',
  limitations: [
    'Seeding methods and processing remain largely traditional and vary widely, so are not reduced to universal guidance here.',
    'The principal diseases of teff, including rust and head smudge, have no dedicated reference entry in this dataset, so none are linked.',
    'Lodging is a major, management-dependent yield constraint in this fine-strawed crop.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of teff as an Ethiopian staple cereal' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'britannica', citedFor: 'Botanical description and food use' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Teff (Eragrostis tef)',
    description:
      'An evidence-based reference on teff: botany, Ethiopian staple use in injera, gluten-free grain, vertisol agronomy, forage, and crop challenges.',
    keywords: ['teff', 'Eragrostis tef', 'injera', 'gluten-free cereal'],
  },
  structuredData: { article: true },
};
