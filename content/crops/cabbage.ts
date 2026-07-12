import type { CropContent } from '@/types/content';

export const cabbage: CropContent = {
  id: 'crop-cabbage',
  slug: 'cabbage',
  contentType: 'crop',
  title: 'Cabbage',
  scientificName: 'Brassica oleracea var. capitata',
  alternativeNames: ['Head cabbage'],
  category: 'Vegetable crop',
  subcategory: 'Brassica (cole) vegetable',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Biennial, grown as an annual for head harvest',
  summary:
    'Cabbage is a biennial brassica vegetable grown worldwide for its dense leafy head, used fresh, cooked, fermented, and processed, and cultivated across a wide range of temperate and subtropical climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cabbage is a cultivar group of Brassica oleracea, the same species that includes broccoli, kale, and Brussels sprouts, distinguished by the formation of a tight, overlapping-leaf head at the growing point. It is grown for this head, which is harvested before the plant would naturally overwinter and flower.',
    },
    {
      type: 'paragraph',
      text: 'Head types range from smooth, round green cabbages to crinkled savoy types and dense red or purple cultivars, and maturity ranges from early, fast-maturing types to later, larger, longer-storing types suited to different markets and production windows.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    { label: 'Life cycle', value: 'Biennial, grown as an annual' },
    { label: 'Scientific name', value: 'Brassica oleracea var. capitata' },
    {
      label: 'Primary uses',
      value:
        'Fresh and cooked culinary use, fermentation (sauerkraut, kimchi), processing',
    },
    {
      label: 'Climate',
      value:
        'Cool-season crop; tolerates light frost, sensitive to heat during head formation',
    },
    {
      label: 'Soil preference',
      value:
        'Fertile, well-drained loams and clay loams with near-neutral to slightly alkaline pH',
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
          text: 'Cabbage belongs to a group of cultivars within Brassica oleracea selected for tight head formation rather than for flower buds, stems, or leaves as in its close relatives. As a cole crop, it shares many pest, disease, and soil-fertility management considerations with other Brassica vegetables.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from small-scale market gardens to large mechanized operations, and cultivar choice — early, mid-season, or storage type — is matched to local season length and intended market.',
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
            {
              term: 'Genus and species',
              description: 'Brassica oleracea var. capitata',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial forming a compact terminal head of tightly overlapping leaves in its first year',
            },
            {
              term: 'Related cultivar groups',
              description:
                'Same species as broccoli, kale, cauliflower, Brussels sprouts, and kohlrabi, distinguished by cultivar group',
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
          text: 'Cabbage descends from wild Brassica oleracea populations native to coastal areas of the Mediterranean and Atlantic Europe. Head-forming types were selected over centuries in Europe before cabbage spread globally through trade and colonization to become a staple vegetable on most continents.',
        },
        {
          type: 'paragraph',
          text: 'Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies and should be consulted directly for up-to-date figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage is a cool-season crop that tolerates light frost well and, in many cultivars, develops best head quality under moderate temperatures. Sustained heat during head formation is associated with looser heads, splitting, and reduced quality.',
        },
        {
          type: 'paragraph',
          text: 'Cultivars vary considerably in cold tolerance and heat sensitivity, and cultivar choice is matched to local season length and the timing of head maturity relative to expected weather.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage grows well on fertile, well-drained loams and clay loams with good moisture-holding capacity. A near-neutral to slightly alkaline soil pH is often favored in brassica production, partly because more acidic soils are associated with greater pressure from certain soilborne brassica diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil pH and drainage should be assessed with local soil testing, since both influence disease pressure and nutrient availability in brassica crops.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage is commonly established from transplants raised in a nursery, though direct seeding is also used in some systems. Spacing is set according to cultivar head size and intended market, and rotation away from other brassicas is a standard practice to manage soilborne disease buildup.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to season length, intended maturity window, and market type',
            'Rotation away from other cole crops to reduce soilborne disease carryover',
            'Consistent moisture management to reduce the risk of head splitting',
            'Field monitoring for caterpillar pests and aphids from early establishment onward',
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
          text: 'Nitrogen and potassium are both important for vigorous leaf and head development, and sulfur is notable in brassica crops as a component of the sulfur-containing compounds characteristic of the group. Requirements depend on soil supply, target yield, and cultivar.',
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
          text: 'Consistent soil moisture supports even head development, while irregular watering — particularly a dry period followed by heavy rain or irrigation — is associated with head splitting in mature crops. Drip and sprinkler irrigation are both used depending on region and scale.',
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
          text: 'Downy mildew and Fusarium wilt (cabbage yellows) are notable diseases of cabbage, with severity varying by region, cultivar resistance, and weather. Aphids, cutworms, and slugs are among the common pests, with aphids also capable of transmitting certain viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant cultivars, crop rotation, field sanitation, monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage is harvested once heads reach the desired firmness and size for the intended market, typically cut by hand or machine at the base of the head. Timing balances maximum size against the risk of splitting or over-maturity.',
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
            'Fresh use in salads such as coleslaw and in cooked dishes worldwide',
            'Fermentation into products such as sauerkraut and kimchi',
            'Processing into packaged coleslaw mixes and other prepared products',
            'Culinary use across many cuisines, raw, cooked, pickled, or fermented',
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
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'spinach' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'soil-topic', slug: 'soil-ph' },
  ],
  glossaryTerms: [
    'crop-rotation',
    'cultivar',
    'soil-ph',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview. Cultivar maturity type, transplant timing, and input levels are region-specific and depend on local season length and climate.',
  climateContext:
    'Cool-season brassica vegetable tolerant of light frost, grown across temperate and subtropical regions.',
  limitations: [
    'Cultivar maturity class and transplant timing are region-specific decisions not reduced to universal guidance here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of cabbage in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management for cole crops',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cabbage production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cabbage',
    description:
      'An evidence-based reference on cabbage: classification, cool-season climate and soil needs, agronomy, diseases, pests, and culinary uses.',
    keywords: ['cabbage', 'Brassica oleracea', 'cole crop', 'cabbage agronomy'],
  },
  structuredData: { article: true },
};
