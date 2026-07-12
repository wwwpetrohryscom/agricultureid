import type { CropContent } from '@/types/content';

export const buckwheat: CropContent = {
  id: 'crop-buckwheat',
  slug: 'buckwheat',
  contentType: 'crop',
  title: 'Buckwheat',
  scientificName: 'Fagopyrum esculentum',
  alternativeNames: ['Common buckwheat', 'Sweet buckwheat'],
  category: 'Pseudocereal crop',
  subcategory: 'Short-season broadleaf grain crop',
  botanicalFamily: 'Polygonaceae (knotweed family)',
  lifecycle: 'Annual',
  summary:
    'Buckwheat is a fast-maturing, broadleaf pseudocereal grown for its triangular seed, used as a gluten-free grain and flour, and widely valued as a short-season cover and smother crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Buckwheat is a pseudocereal — a broadleaf crop cultivated and used like a grain even though it belongs to the knotweed family rather than the grasses. It is grown for its triangular seed, milled into flour used in noodles, pancakes, and other gluten-free food products.',
    },
    {
      type: 'paragraph',
      text: "The crop's rapid germination, quick canopy closure, and short time to maturity make it useful as a smother crop for weed suppression and as a short-duration cover or catch crop between main-season plantings, in addition to its role as a specialty food grain.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Polygonaceae (knotweed family)' },
    {
      label: 'Life cycle',
      value: 'Annual, short-season (often 10–12 weeks to maturity)',
    },
    { label: 'Main species', value: 'Fagopyrum esculentum' },
    {
      label: 'Primary uses',
      value:
        'Gluten-free grain and flour; cover and smother cropping; pollinator forage',
    },
    {
      label: 'Climate',
      value:
        'Cool to mild temperate; frost-sensitive and heat-intolerant during flowering',
    },
    {
      label: 'Soil preference',
      value: 'Tolerant of poor, acidic, and low-fertility soils',
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
          text: 'Buckwheat is an annual broadleaf plant grown for its edible seed, notable for an unusually short time to maturity compared with most grain crops. This short duration, combined with dense, rapid canopy growth, underlies much of its use outside direct food production.',
        },
        {
          type: 'paragraph',
          text: 'Commercial grain production is concentrated in a relatively small number of countries and regions, while its use as a cover crop and pollinator-support plant is much more widespread.',
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
              description: 'Polygonaceae (knotweed/buckwheat family)',
            },
            { term: 'Genus', description: 'Fagopyrum' },
            {
              term: 'Principal species',
              description: 'Fagopyrum esculentum (common buckwheat)',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing, branching annual broadleaf plant bearing small, triangular achenes',
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
          text: 'Buckwheat is believed to have originated in the region of southwestern China and spread across Asia and, later, into Europe along historical trade routes, becoming an important grain in areas with short or cool growing seasons unsuited to major cereals.',
        },
        {
          type: 'paragraph',
          text: 'Today it is grown commercially in parts of Asia, Europe, and North America; production and trade figures are compiled by national and international statistical bodies and change over time.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat favors cool to mild temperatures and a short, reliable frost-free window, since it is sensitive to frost and its flowering and seed set are impaired by high temperatures and dry conditions.',
        },
        {
          type: 'paragraph',
          text: 'Its short duration to maturity allows sowing later in the season than most grains, fitting into gaps in crop rotations or following an earlier-harvested crop.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat tolerates poor, acidic, and low-fertility soils better than most grain crops, and is often grown successfully on land considered marginal for cereals, though it still performs best with reasonable drainage.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogged or poorly structured soils restrict rooting. Soil suitability should be assessed with local soil survey information where available.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat is sown shallowly into a warm, moist seedbed after frost risk has passed, establishing quickly and closing its canopy faster than most competing weeds, which underlies its use as a smother crop.',
        },
        {
          type: 'list',
          items: [
            'Sowing timed to avoid both late spring frost and high summer temperatures at flowering',
            'Use as a short-duration cover or smother crop between main-season plantings',
            'Minimal weed control typically needed once the canopy closes',
            'Timely harvest management given uneven seed maturation on the plant',
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
          text: 'Buckwheat generally requires modest fertility inputs compared with major cereals, with phosphorus and potassium supporting establishment and seed fill; excessive nitrogen can favor vegetative growth at the expense of seed yield.',
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
          text: 'Buckwheat is grown predominantly rain-fed, given its short season and the regions where it is typically cultivated. Adequate moisture around flowering supports better seed set, since dry conditions at this stage can reduce yield.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat is comparatively free of major disease and pest problems relative to many grain crops, though powdery mildew and root rot can occur under favorable conditions, and aphids and cutworms are among the insect pests reported.',
        },
        {
          type: 'paragraph',
          text: 'Management combines crop rotation, monitoring, and — where justified — locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Because buckwheat flowers and sets seed over an extended period, seed on a single plant matures unevenly; harvest is typically timed when a majority of seed has browned and hardened, accepting some loss of immature or overripe seed, followed by drying to a safe storage moisture.',
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
            'Milled into flour for noodles, pancakes, and other gluten-free foods',
            'Hulled groats (kasha) used as a whole-grain food',
            'Short-duration cover and smother crop for weed suppression between main crops',
            'Nectar source supporting pollinators and beneficial insects',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
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
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'quinoa' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'oats' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool to mild temperate crop with a short growing season; sensitive to both frost and high flowering-stage temperatures.',
  limitations: [
    'Uneven seed maturation makes harvest timing a compromise best judged locally rather than by a fixed calendar rule.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  claims: [
    {
      field: 'growth-duration',
      statement:
        'Buckwheat is a short-season annual that often matures in approximately 10–12 weeks, depending on variety and growing conditions.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents buckwheat as a short-duration crop suited to short growing seasons.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cabi',
          evidenceNote:
            'CABI compendium describes buckwheat crop duration and time to maturity.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Buckwheat as a food and cover crop' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Buckwheat agronomy and cover-crop research',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Regional buckwheat production guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Buckwheat',
    description:
      'A structured, evidence-based reference on buckwheat: classification, short-season climate needs, agronomy, diseases, pests, harvest, and uses.',
    keywords: [
      'buckwheat',
      'Fagopyrum esculentum',
      'pseudocereal',
      'cover crop',
    ],
  },
  structuredData: { article: true },
};
