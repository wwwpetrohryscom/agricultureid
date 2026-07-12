import type { CropContent } from '@/types/content';

export const millet: CropContent = {
  id: 'crop-millet',
  slug: 'millet',
  contentType: 'crop',
  title: 'Millet',
  scientificName:
    'Pennisetum glaucum (pearl millet); also cultivated as Panicum miliaceum (proso millet), Eleusine coracana (finger millet), and Setaria italica (foxtail millet)',
  alternativeNames: ['Pearl millet', 'Proso millet', 'Finger millet'],
  category: 'Cereal crop',
  subcategory: 'Warm-season small-grain cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    '"Millet" refers to a group of small-seeded, warm-season cereal grasses grown mainly in semi-arid regions of Africa and Asia for grain and fodder, valued for tolerating heat, drought, and low-fertility soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Millet is not a single species but a group of small-grained grasses — including pearl millet, finger millet, proso millet, and foxtail millet — grown mainly where heat, drought, and poor soil fertility limit other cereals. Pearl millet is the most widely grown type globally, particularly across the semi-arid tropics of West Africa and South Asia.',
    },
    {
      type: 'paragraph',
      text: 'Millets are typically grown by smallholder farmers as food-security crops, valued for short growing seasons, low input requirements, and reliable yield under marginal conditions, alongside growing interest in some regions for gluten-free food products and forage.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual, short-season' },
    {
      label: 'Main species',
      value:
        'Pennisetum glaucum, Panicum miliaceum, Eleusine coracana, Setaria italica',
    },
    {
      label: 'Primary uses',
      value: 'Human food (grain), livestock feed and fodder',
    },
    {
      label: 'Climate',
      value:
        'Warm, semi-arid; among the most heat- and drought-tolerant cereals',
    },
    {
      label: 'Soil preference',
      value: 'Tolerant of poor, sandy, and low-fertility soils',
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
          text: 'Millets are self- or cross-pollinating annual grasses grown for small grains that are milled, ground, or otherwise processed for food, and for their fodder value. Their agronomic profile — short duration, heat and drought tolerance, and modest soil requirements — makes them important staples in semi-arid cropping systems.',
        },
        {
          type: 'paragraph',
          text: 'Production is dominated by smallholder systems in sub-Saharan Africa and South Asia, though some millet types are also grown in developed-country markets for forage, birdseed, and specialty food products.',
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
            {
              term: 'Principal genera and species',
              description:
                'Pennisetum glaucum (pearl millet), Eleusine coracana (finger millet), Panicum miliaceum (proso millet), Setaria italica (foxtail millet)',
            },
            {
              term: 'Growth habit',
              description:
                'Tillering annual grasses, generally with a short life cycle relative to other cereals',
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
          text: 'The different millet species were domesticated independently in different regions: pearl millet in the Sahel of West Africa, finger millet in East Africa (and separately in South Asia), and proso and foxtail millet in China. Today they remain most important across the semi-arid tropics of Africa and Asia.',
        },
        {
          type: 'paragraph',
          text: 'Because "millet" covers several distinct species, production and trade statistics are typically reported by individual species; current figures are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Millets are among the most heat- and drought-tolerant cereals, capable of producing a grain crop where rainfall is too low or erratic for maize or sorghum. Pearl millet in particular is adapted to hot, semi-arid environments with short, unreliable rainy seasons.',
        },
        {
          type: 'paragraph',
          text: 'Short duration to maturity allows millet to fit into cropping windows where the growing season is too brief or unpredictable for longer-season cereals.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Millets tolerate poor, sandy, and low-fertility soils better than most cereals, which is a major reason for their importance in marginal semi-arid cropping systems where other grains perform poorly.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'While tolerant of poor soils, millet still responds to improved fertility and structure. Soil suitability should be assessed with local soil survey information where available.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Millet is typically sown at the start of the rainy season, often by hand or with simple seeding equipment in smallholder systems, though mechanized sowing is used in larger-scale production.',
        },
        {
          type: 'list',
          items: [
            'Species and variety selection matched to season length and end use',
            'Crop rotation and intercropping, commonly with legumes, to manage soil fertility and pests',
            'Seedbed preparation appropriate to local rainfall and tillage practices',
            'Thinning and weeding during early establishment, when the crop is most vulnerable to competition',
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
          text: 'Nitrogen is the main limiting nutrient for millet yield in most low-fertility soils, though the crop is grown with minimal fertilizer input across much of its smallholder production area. Where inputs are used, phosphorus can also be important on inherently low-fertility soils.',
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
          text: 'Millet is grown predominantly rain-fed in semi-arid regions with low and variable rainfall, and its drought tolerance is a primary reason for its cultivation there. Irrigated millet is grown in some regions, mainly to stabilize yield in dry seasons.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is one of the most significant diseases of pearl millet, capable of causing substantial yield loss in susceptible varieties, and millet ergot can affect grain quality. Stem borers damage the stem and growing point, while white grubs attack roots in the soil.',
        },
        {
          type: 'paragraph',
          text: 'Management relies heavily on resistant or tolerant varieties, along with monitoring and, where justified and available, locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Millet is harvested once the grain has matured and dried sufficiently for threshing and safe storage. In smallholder systems, harvesting and threshing are often done manually or with simple equipment; larger operations use mechanized harvesting suited to the crop and region.',
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
            'Whole or milled grain for porridge, flatbreads, and other traditional foods',
            'Increasing use in gluten-free and specialty food products in some markets',
            'Livestock and poultry feed, and fodder from crop residues',
            'Birdseed and specialty grain markets in some countries',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'ergot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'thresher' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'quinoa' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'forage', 'yield'],
  geographicScope:
    'Global overview, focused on semi-arid production systems. Agronomic details (timing, rates, varieties) are region- and species-specific.',
  climateContext:
    'Warm-season cereals adapted to hot, semi-arid climates with low and variable rainfall.',
  limitations: [
    '"Millet" spans several distinct species with different origins and agronomy; this entry provides a general overview rather than species-specific detail.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of millets in food security and semi-arid farming',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Millet disease and pest compendium data' },
    {
      sourceId: 'cgiar',
      citedFor: 'Millet research in semi-arid cropping systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Millet',
    description:
      'A structured, evidence-based reference on millet: species classification, climate and soil tolerance, agronomy, diseases, pests, harvest, and uses.',
    keywords: [
      'millet',
      'pearl millet',
      'cereal crop',
      'semi-arid agriculture',
    ],
  },
  structuredData: { article: true },
};
