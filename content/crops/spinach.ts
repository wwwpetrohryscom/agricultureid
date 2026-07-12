import type { CropContent } from '@/types/content';

export const spinach: CropContent = {
  id: 'crop-spinach',
  slug: 'spinach',
  contentType: 'crop',
  title: 'Spinach',
  scientificName: 'Spinacia oleracea',
  alternativeNames: ['Garden spinach'],
  category: 'Vegetable crop',
  subcategory: 'Leafy vegetable',
  botanicalFamily: 'Amaranthaceae (formerly Chenopodiaceae)',
  lifecycle: 'Annual',
  summary:
    'Spinach is a fast-growing, cool-season annual leafy vegetable grown for its tender leaves, used fresh, cooked, and in a range of processed and frozen products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Spinach is grown for its smooth or savoyed (crinkled) leaves, harvested at a young to moderate stage of growth before the plant elongates and flowers. It has an unusually short production cycle among leafy vegetables, which supports intensive, repeated plantings.',
    },
    {
      type: 'paragraph',
      text: 'The species can be dioecious or exhibit intermediate sex expression, though this trait is mainly relevant to seed production rather than commercial leaf harvest. Spinach is notably prone to bolting under long days and warm temperatures, which limits its production season in many regions.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Amaranthaceae (formerly Chenopodiaceae)',
    },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Spinacia oleracea' },
    {
      label: 'Primary uses',
      value:
        'Fresh, cooked, and processed (canned, frozen, baby-leaf) leafy vegetable',
    },
    {
      label: 'Climate',
      value:
        'Cool-season crop; comparatively frost-tolerant but prone to bolting under heat and long days',
    },
    {
      label: 'Soil preference',
      value:
        'Fertile, well-drained loams high in organic matter; near-neutral pH',
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
          text: 'Spinach is one of the fastest-maturing leafy vegetables in common production, which allows growers to fit multiple plantings into a season where climate permits. Leaf type — smooth or savoyed — and intended market (bunched, bagged, or baby-leaf) both influence cultivar choice.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop bolts readily once triggered by day length and temperature, timing of planting relative to the local season is a central agronomic decision.',
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
            {
              term: 'Family',
              description:
                'Amaranthaceae (formerly classified in Chenopodiaceae)',
            },
            { term: 'Genus and species', description: 'Spinacia oleracea' },
            {
              term: 'Growth habit',
              description:
                'Annual forming a rosette of leaves; bolts to a flowering stalk under long days and warm temperatures',
            },
            {
              term: 'Leaf types',
              description:
                'Smooth-leaf and savoy (crinkled-leaf) types, plus semi-savoy intermediates',
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
          text: 'Spinach is believed to have originated in Central or Southwestern Asia, with cultivation recorded in Persia before spreading via trade routes to the Mediterranean, and later through Europe and East Asia.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across temperate and subtropical regions worldwide, in open fields and, for baby-leaf production, under protective structures in some areas. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Spinach is a cool-season crop, comparatively tolerant of frost during vegetative growth, but it bolts readily once exposed to long days combined with warm temperatures, which ends leaf production.',
        },
        {
          type: 'paragraph',
          text: 'Because of this sensitivity, plantings are typically timed to fit within a cool window in the local season, and cultivar choice can influence bolting tolerance to some degree.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Spinach performs best on fertile, well-drained loams with high organic matter content and near-neutral pH; it is comparatively sensitive to strongly acidic soils, which can restrict growth and nutrient uptake.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil pH should be assessed with local soil testing, since spinach is more sensitive to acidic conditions than many other leafy vegetables.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Spinach is almost always direct-seeded at relatively high density, often in successive plantings to sustain continuous harvest where the season allows. Its short cycle and shallow rooting make prompt weed and moisture management important from emergence onward.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to bolting tolerance and intended leaf type',
            'Successive, closely timed plantings to sustain harvest within the cool-season window',
            'Prompt weed control given the crop’s short cycle and shallow rooting',
            'Field sanitation and rotation to help manage soilborne disease pressure',
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
          text: 'Nitrogen availability strongly influences leaf growth rate, color, and yield given the crop’s short cycle, and calcium is relevant to leaf and cell-wall quality. Requirements depend on soil supply, target yield, and cultivar.',
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
          text: 'Spinach has a shallow root system and requires frequent, consistent moisture, particularly during germination and rapid leaf expansion. Sprinkler and drip irrigation are both used depending on region, scale, and leaf type.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew (sometimes called blue mold) is the single most significant disease of spinach in many production regions, and Fusarium wilt is also a notable soilborne concern in some areas. Aphids and leaf miners are among the common insect pests affecting leaf quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, field rotation, sanitation, monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Spinach is harvested by cutting whole plants at the base or by repeated leaf picking, at a leaf size appropriate to the market — small for baby-leaf salad mixes, larger for bunched or processing spinach — and before bolting begins.',
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
            'Fresh use in salads, including baby-leaf salad mixes',
            'Cooked use in a wide range of dishes across many cuisines',
            'Processing into canned and frozen spinach products',
            'Use as an ingredient in prepared foods, sauces, and fillings',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'cabbage' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'soil-ph', 'evapotranspiration'],
  geographicScope:
    'Global overview. Planting timing, cultivar bolting tolerance, and input levels are region-specific and depend on local day length and temperature.',
  climateContext:
    'Cool-season, fast-maturing leafy vegetable prone to bolting under heat and long days; grown across temperate and subtropical regions.',
  limitations: [
    'Planting timing relative to local day length and temperature is a regional decision not reduced to universal guidance here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of spinach in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for spinach' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Spinach production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Spinach',
    description:
      'An evidence-based reference on spinach: classification, cool-season and bolting sensitivity, soil needs, diseases, pests, and culinary uses.',
    keywords: [
      'spinach',
      'Spinacia oleracea',
      'leafy vegetable',
      'spinach agronomy',
    ],
  },
  structuredData: { article: true },
};
