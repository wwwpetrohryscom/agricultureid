import type { CropContent } from '@/types/content';

export const asparagus: CropContent = {
  id: 'crop-asparagus',
  slug: 'asparagus',
  contentType: 'crop',
  title: 'Asparagus',
  scientificName: 'Asparagus officinalis',
  alternativeNames: ['Garden asparagus'],
  category: 'Vegetable crop',
  subcategory: 'Perennial spear vegetable',
  botanicalFamily: 'Asparagaceae',
  lifecycle:
    'Perennial (long-lived; harvested over many years from an established crown)',
  summary:
    'Asparagus is a long-lived perennial vegetable grown for its tender young shoots (spears), harvested seasonally from an established underground crown that can remain productive for many years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Asparagus is grown for its young, emerging shoots, cut before the fern-like foliage develops and the plant transitions into its mature, photosynthetic growth stage. Unlike most vegetables, it is a genuinely long-lived perennial, with a single planting commonly remaining productive for well over a decade under good management.',
    },
    {
      type: 'paragraph',
      text: 'Because the crop takes several years to establish a crown capable of sustaining a full commercial harvest, and because that crown then persists for many years, asparagus planting is treated as a long-term investment decision rather than an annual cropping choice.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asparagaceae' },
    {
      label: 'Life cycle',
      value: 'Perennial; productive crown persists for many years',
    },
    { label: 'Main species', value: 'Asparagus officinalis' },
    {
      label: 'Primary uses',
      value: 'Fresh-market and processed (canned/frozen) spear vegetable',
    },
    {
      label: 'Climate',
      value: 'Temperate; benefits from a distinct cold or dry dormant period',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained sandy loams',
      note: 'Poor drainage sharply increases risk of crown and root rot.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Asparagus is cultivated from a perennial underground crown that sends up new spears each season; spears are harvested for a defined window early in the growing season, after which remaining shoots are allowed to grow into tall, fern-like foliage that replenishes the crown for the following year.',
        },
        {
          type: 'paragraph',
          text: 'Because a new planting requires several years before it can sustain a full commercial harvest, growers typically forgo or limit harvest in the first one to two seasons to allow the crown to establish.',
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
            { term: 'Family', description: 'Asparagaceae' },
            { term: 'Genus', description: 'Asparagus' },
            {
              term: 'Principal species',
              description: 'Asparagus officinalis (garden asparagus)',
            },
            {
              term: 'Growth habit',
              description:
                'Long-lived perennial with an underground crown and storage roots, producing edible young shoots (spears) followed by tall, feathery mature foliage',
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
          text: 'Asparagus is native to a broad region spanning Europe, North Africa, and western Asia, where it has been valued as a food plant since antiquity. It is now cultivated in temperate and some subtropical regions worldwide, with production concentrated where a distinct dormant season supports strong spear emergence.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade figures change over time and by region; current data are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Asparagus benefits from a distinct dormant period — cold winters in temperate climates, or a dry season in some subtropical regions — that allows the crown to rest before producing a strong flush of spears at the start of the following growing season.',
        },
        {
          type: 'paragraph',
          text: 'Spring frost can damage emerging spears, so harvest timing and, where relevant, protective measures account for local frost risk during the harvest window.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Asparagus requires deep, well-drained soils, typically sandy loams, that allow the extensive perennial root system to develop freely; because the crown remains in place for many years, initial site and soil selection are especially consequential.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Drainage is critical',
          text: 'Poorly drained soils sharply increase the risk of crown and root rot in this long-lived perennial, where losses cannot simply be replanted the following season without losing years of establishment investment. Soil suitability should be assessed with local soil survey information and, where available, testing before planting.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Asparagus is established from either seed or, more commonly in commercial production, one-year-old dormant crowns planted into trenches that are gradually backfilled as shoots emerge, allowing the crown to be set at an appropriate depth.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection, including all-male hybrid types favored for higher spear yield in many modern plantings',
            'Deep, well-drained bed preparation given the multi-decade lifespan of the planting',
            'Limited or no harvest in the first one to two years to allow crown establishment',
            'Weed management, particularly important while the crown is still developing and canopy cover is limited',
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
          text: "Potassium supports crown vigor and spear quality across seasons, and fertility is generally managed with an eye toward sustaining the crown's productivity over many years rather than optimizing a single season's yield.",
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
          text: 'Established asparagus has a deep root system with reasonable drought tolerance once mature, though adequate moisture during spear emergence and, later, during fern growth supports crown replenishment for the following season. Drip irrigation is commonly used to manage water precisely while avoiding the waterlogging the crop tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium-associated crown and root rot is one of the most significant disease risks for asparagus, particularly in poorly drained soils or older plantings, and can shorten the productive life of a bed. Aphids and cutworms are among the insect pests reported on the crop.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, well-drained site selection, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Spears are harvested by hand, cut or snapped at or just below the soil surface once they reach a suitable length and before the tip begins to open, typically over a defined harvest window each season after which cutting stops to allow the crown to rebuild through fern growth.',
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
            'Fresh-market vegetable, eaten cooked in a wide range of dishes',
            'Canned and frozen processed products',
            'White (blanched) asparagus produced in some regions by excluding light from the developing spear',
            'Ornamental use of mature fern foliage in some cut-flower and floral markets',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'growing-season' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'celery' },
    { type: 'crop', slug: 'radish' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'yield',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Long-lived temperate perennial benefiting from a distinct dormant period; spring frost can damage emerging spears.',
  limitations: [
    'A new planting typically needs several years before it sustains a full commercial harvest, and this establishment period is site- and management-specific.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of asparagus in perennial vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Asparagus disease and pest compendium data',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Asparagus cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Asparagus',
    description:
      'A structured, evidence-based reference on asparagus: classification, long-lived perennial cultivation, soil drainage needs, pests, and uses.',
    keywords: [
      'asparagus',
      'Asparagus officinalis',
      'perennial vegetable',
      'spear vegetable',
    ],
  },
  structuredData: { article: true },
};
