import type { CropContent } from '@/types/content';

export const fenugreek: CropContent = {
  id: 'crop-fenugreek',
  slug: 'fenugreek',
  contentType: 'crop',
  title: 'Fenugreek',
  scientificName: 'Trigonella foenum-graecum',
  alternativeNames: ['Methi', 'Greek hay'],
  category: 'Spice crop',
  subcategory: 'Annual legume grown for seed and leaf',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Fenugreek is a nitrogen-fixing legume sold as a spice, and it is harvested as three different products — seed, fresh leaf and dried leaf — from the same species under different sowing densities and cutting regimes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Most spices come from trees, rhizomes or fruit. Fenugreek is a small annual legume, nodulating and fixing nitrogen like a pea, and it happens to produce a seed that is used as a spice. That combination is rare and it is why fenugreek appears in rotations as a break crop as well as in spice markets.',
    },
    {
      type: 'paragraph',
      text: 'It is also three products. Seed is threshed from a mature crop; fresh leaf, methi, is cut as a vegetable; and dried leaf, kasuri methi, is a separate traded commodity with its own aroma. Each requires a different sowing rate, cutting regime and harvest date.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Nitrogen fixation',
      value: 'Nodulates with rhizobia and fixes atmospheric nitrogen',
    },
    {
      label: 'Products',
      value:
        'Seed as spice, fresh leaf as vegetable, dried leaf as a separate commodity',
    },
    {
      label: 'Aroma compound',
      value: 'Sotolone, responsible for the characteristic maple-like smell',
    },
    {
      label: 'Principal producer',
      value: 'India, which dominates world production and trade',
    },
    { label: 'Habit', value: 'Short-cycle cool-season annual' },
  ],
  sections: [
    {
      id: 'legume-spice',
      heading: 'A legume in the spice trade',
      body: [
        {
          type: 'paragraph',
          text: 'Fenugreek nodulates and fixes nitrogen, so it leaves residual fertility and fits a rotation as a legume break, yet its seed trades as a spice alongside cumin and coriander. Growers therefore evaluate it against both sets of alternatives, and its rotational value is part of its margin in a way that no tree spice can offer.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'three-products',
      heading: 'Three crops from one species',
      body: [
        {
          type: 'paragraph',
          text: 'Seed production is sown thin and taken to maturity. Fresh leaf is sown thick and cut young, often more than once. Dried leaf is a distinct commodity produced by cutting and shade-drying, and it is traded separately from both. A field committed to one of these cannot easily be switched to another partway through.',
        },
      ],
    },
    {
      id: 'sotolone',
      heading: 'The aroma is one compound',
      body: [
        {
          type: 'paragraph',
          text: 'The characteristic smell of fenugreek, often described as maple or curry-like, comes largely from sotolone, and it is detectable at very low concentration. That potency is why fenugreek taints stores and vehicles used for it and why handling is segregated in spice warehouses.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'bitterness',
      heading: 'Bitterness and processing',
      body: [
        {
          type: 'paragraph',
          text: "Raw seed is bitter, and roasting or soaking is standard before culinary use. Debittering also matters for the crop's secondary use as a source of galactomannan gum, which competes with guar; the seed is processed rather than sold whole for that market.",
        },
      ],
    },
    {
      id: 'short-cycle',
      heading: 'A short, cool season',
      body: [
        {
          type: 'paragraph',
          text: "The crop matures quickly in cool conditions and is grown as a winter or rabi crop in India and as a spring crop in temperate regions. It is frost-tolerant when young and sensitive to heat during pod fill, which sets the sowing window more tightly than the crop's short cycle suggests.",
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Pod shattering',
      body: [
        {
          type: 'paragraph',
          text: 'Pods dehisce when fully dry, and a crop left standing to reach even moisture loses seed. Harvest is timed before full dry-down and finished with drying, which is a familiar problem in spice legumes and the main preventable loss in the crop.',
        },
      ],
    },
    {
      id: 'powdery-mildew',
      heading: 'Powdery mildew is the dominant disease',
      body: [
        {
          type: 'paragraph',
          text: 'Fenugreek is highly susceptible to powdery mildew, which arrives late in a cool moist season and reduces both seed fill and leaf quality. In leaf production the disease also makes the product unsaleable outright, because the leaf itself is what is sold.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotational placement',
      body: [
        {
          type: 'paragraph',
          text: 'As a legume it should not follow another legume closely, and it shares root rots and wilts with chickpea and lentil. In Indian systems it typically follows a cereal, and its short cycle lets it fit where a full-season pulse would not.',
        },
      ],
    },
    {
      id: 'trade',
      heading: 'A concentrated trade',
      body: [
        {
          type: 'paragraph',
          text: 'India accounts for the great majority of world production and export, with Rajasthan and Gujarat the principal producing states, so international prices and availability track a small number of regional harvests. Anyone reading fenugreek trade data is largely reading Indian weather.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'cumin' },
    { type: 'crop', slug: 'lentil' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'India dominates production and export, with smaller production in Turkey, Iran, Egypt, Morocco, Ethiopia and Argentina.',
  climateContext:
    'Cool-season short-cycle annual; frost-tolerant as a seedling and sensitive to heat during pod fill.',
  limitations: [
    'Product-specific agronomy for seed, fresh leaf and dried leaf differs and the three should not be read as one crop.',
    'Food and non-food uses of fenugreek extracts are outside the scope of this page.',
    'Authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Indian spice and seed legume agronomy' },
    { sourceId: 'fao', citedFor: 'Spice production context' },
    { sourceId: 'cabi', citedFor: 'Trigonella foenum-graecum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Fenugreek',
    description:
      'Trigonella foenum-graecum as a crop: a nitrogen-fixing legume sold as a spice, three products from one species, sotolone aroma and pod shattering.',
    keywords: [
      'fenugreek',
      'methi',
      'Trigonella foenum-graecum',
      'kasuri methi',
      'spice legume',
    ],
  },
  structuredData: { article: true },
};
