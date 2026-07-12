import type { CropContent } from '@/types/content';

export const oilseedRape: CropContent = {
  id: 'crop-oilseed-rape',
  slug: 'oilseed-rape',
  contentType: 'crop',
  title: 'Oilseed rape',
  scientificName: 'Brassica napus',
  alternativeNames: ['Canola', 'Rapeseed'],
  category: 'Oilseed crop',
  subcategory: 'Annual or biennial brassica oilseed',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Annual or biennial (winter and spring types)',
  summary:
    'Oilseed rape is a cool-season brassica grown for its oil-rich seed, used for cooking oil, industrial oil, biodiesel, and protein-rich meal. It is grown as winter or spring types depending on climate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oilseed rape, known in some markets by the trademarked term canola for its edible-oil-quality cultivars, is a brassica grown primarily for its seed, which is crushed to yield vegetable oil and a protein-rich meal. Like wheat, it is grown as winter types, sown in autumn and requiring vernalization to flower, or spring types, sown after the coldest part of the year.',
    },
    {
      type: 'paragraph',
      text: 'Modern edible-oil cultivars are bred to have low levels of erucic acid and glucosinolates, distinguishing "canola-quality" oilseed rape from older industrial rapeseed types still grown for specialized non-food oil uses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    {
      label: 'Life cycle',
      value: 'Annual or biennial (winter or spring types)',
    },
    { label: 'Main species', value: 'Brassica napus' },
    {
      label: 'Primary uses',
      value: 'Vegetable oil, biodiesel/industrial oil, protein meal for feed',
    },
    {
      label: 'Climate',
      value: 'Cool season; winter types require vernalization',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and clay loams',
      note: 'Sensitive to waterlogging, particularly at establishment.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: "Oilseed rape is one of the world's leading oilseed crops, grown widely across temperate cereal-growing regions, where it also serves as a valuable break crop in rotation with cereals such as wheat.",
        },
        {
          type: 'paragraph',
          text: 'As with other brassica crops, small seed size and a relatively slow early growth phase make careful seedbed preparation and establishment particularly important for a successful stand.',
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
            { term: 'Genus', description: 'Brassica' },
            {
              term: 'Principal species',
              description: 'Brassica napus',
            },
            {
              term: 'Growth habit',
              description:
                'Cool-season broadleaf crop producing branched stems with pods that shatter readily at maturity',
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
          text: 'Brassica napus arose from the hybridization of Brassica rapa and Brassica oleracea, and has been cultivated in Europe for centuries, initially mainly for industrial oil. Breeding of low-erucic-acid, low-glucosinolate "canola-quality" cultivars from the 1970s onward expanded its use as an edible oil crop and its cultivation worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Oilseed rape is now grown across major temperate production regions, including Europe, North America, and parts of Asia. Production and trade statistics are compiled by bodies such as FAO and the European Commission and should be taken from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Winter oilseed rape is sown in autumn, establishes before winter, and requires a period of cold (vernalization) to flower the following spring, tolerating moderate frost once established, though flowering itself remains vulnerable to hard frost.',
        },
        {
          type: 'paragraph',
          text: 'Spring types are sown after the coldest part of the year in regions where autumn establishment is not viable, completing their life cycle within a single growing season without a vernalization requirement.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oilseed rape is generally grown on well-drained loams and clay loams with good structure, and it is sensitive to waterlogging, particularly during germination and early establishment, when its small seedlings are most vulnerable.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: "A fine, firm, level seedbed is important given the crop's small seed size. Soil suitability should be assessed with local soil survey information.",
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: "Establishment depends on precise, shallow sowing into a fine, firm, moist seedbed, since oilseed rape's small seed reserves provide little tolerance for poor seed-to-soil contact or excessive sowing depth.",
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to winter/spring type and end use (edible oil versus industrial)',
            'Use as a break crop in rotation with cereals to disrupt weed and disease cycles',
            'Fine, firm seedbed preparation appropriate to the small seed size',
            'Early and effective weed and pest management during slow initial establishment',
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
          text: "Oilseed rape has a distinctively high sulfur requirement among field crops, reflecting sulfur's role in oil and glucosinolate biosynthesis, alongside substantial nitrogen demand to support yield and oil content. Phosphorus and potassium support establishment and seed fill.",
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
          text: 'Oilseed rape is predominantly grown rain-fed in temperate production regions such as much of Europe, with supplemental irrigation used in some drier growing areas.',
        },
        {
          type: 'paragraph',
          text: 'The crop is particularly sensitive to moisture stress during flowering and pod fill, when water deficits can reduce seed number and oil content.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew can affect seedlings and cotyledons, particularly under cool, moist conditions, while powdery mildew can develop on foliage and stems later in the season. Aphids are a significant pest, both through direct feeding and as vectors of plant viruses, and cutworms can damage seedlings at establishment.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Oilseed rape pods are prone to shattering as they dry, so harvest timing and method — direct combining or swathing followed by combining — are chosen to balance yield retention against local weather risk. Harvested seed is dried to a moisture content suitable for safe storage.',
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
            'Vegetable (canola) oil for cooking and food processing',
            'Biodiesel and other industrial oil applications',
            'Protein-rich meal by-product used in livestock feed',
            'Break-crop role in cereal rotations',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'macronutrient', 'yield'],
  geographicScope:
    'Global overview. Winter/spring type suitability and end use (edible versus industrial oil) are region-specific.',
  climateContext:
    'Cool-season oilseed grown across temperate regions; winter types require vernalization and tolerate moderate frost once established.',
  limitations: [
    'Sowing dates, seeding rates, and variety choice are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of oilseed rape in global oilseed production',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union oilseed rape production and market context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Regional oilseed rape agronomy and management',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Oilseed rape disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Oilseed rape',
    description:
      'A structured, evidence-based reference on oilseed rape: classification, climate and soil needs, agronomy, nutrition, diseases, pests, and uses.',
    keywords: ['oilseed rape', 'canola', 'Brassica napus', 'rapeseed'],
  },
  structuredData: { article: true },
};
