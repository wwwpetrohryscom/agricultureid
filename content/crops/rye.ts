import type { CropContent } from '@/types/content';

export const rye: CropContent = {
  id: 'crop-rye',
  slug: 'rye',
  contentType: 'crop',
  title: 'Rye',
  scientificName: 'Secale cereale',
  alternativeNames: ['Cereal rye', 'Winter rye'],
  category: 'Cereal crop',
  subcategory: 'Temperate cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual (winter or spring types)',
  summary:
    'Rye is a hardy temperate cereal grown for grain used in bread, distilling, and animal feed, and widely used as a cover crop and forage. It tolerates colder winters and poorer soils than most other cereals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rye is a cross-pollinating cereal grass valued for its exceptional cold hardiness and its ability to produce a crop on light, acidic, or otherwise marginal soils where other cereals struggle. Grain rye is milled into flour for dense, dark breads and used in distilling, while the crop is also grown extensively as a fast-establishing cover and forage crop.',
    },
    {
      type: 'paragraph',
      text: 'Most rye is sown in autumn as a winter type, establishing before the coldest part of the year and resuming growth in spring; some regions also grow spring-sown types. Its rapid autumn growth and deep rooting contribute to its widespread use for erosion control and weed suppression between main crops.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual (winter or spring types)' },
    { label: 'Main species', value: 'Secale cereale' },
    {
      label: 'Primary uses',
      value: 'Bread flour, distilling, livestock feed, cover cropping',
    },
    {
      label: 'Climate',
      value: 'Very cold-hardy; tolerates harsher winters than wheat or barley',
    },
    {
      label: 'Soil preference',
      value: 'Tolerant of light, sandy, or acidic soils',
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
          text: 'Rye is an annual grass grown for its grain and, very widely, as a cover crop. It is the most winter-hardy of the small-grain cereals and, along with millet and triticale, is the parent species contributing rye traits to the hybrid cereal triticale.',
        },
        {
          type: 'paragraph',
          text: 'Because rye tolerates poorer, more acidic soils and harsher winters than wheat or barley, it is often chosen for marginal land or as a reliable autumn-sown cover between cash crops, in addition to its role as a grain crop in its own right.',
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
            { term: 'Genus', description: 'Secale' },
            {
              term: 'Principal species',
              description: 'Secale cereale (cultivated rye)',
            },
            {
              term: 'Growth habit',
              description:
                'Tillering, largely cross-pollinating annual grass producing terminal spikes of grain',
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
          text: 'Rye is thought to have originated as a weed in early wheat and barley fields in southwestern Asia, gradually becoming a crop in its own right as it was selected for cultivation on land too cold or poor for other cereals. It remains most important in cool-temperate regions of Europe and parts of North America and Asia.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade statistics vary by year and region and are best drawn from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rye is exceptionally cold-tolerant among cereals, able to survive winter temperatures that would kill wheat, which underlies its use in the coldest cereal-growing regions and as a reliable autumn cover crop.',
        },
        {
          type: 'paragraph',
          text: 'It is comparatively drought-tolerant during vegetative growth but, like other small grains, benefits from adequate moisture during stem elongation and grain fill.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rye tolerates a wider range of soils than most cereals, including light, sandy, and acidic soils of low fertility, though it responds to better soil conditions with higher yield where grain production is the goal.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability, including texture and drainage, should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Winter rye is typically sown in early to mid-autumn to allow establishment before winter; spring types are sown after the coldest part of the year. As a cover crop, rye is valued for rapid, reliable establishment even under cool, marginal seedbed conditions.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to grain or cover-crop end use',
            'Crop rotation to manage disease and, where used as a cover, to fit the following cash crop',
            'Seedbed preparation suited to the tillage system, including no-till drilling',
            'Termination timing managed carefully when rye is grown as a cover crop ahead of a following crop',
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
          text: 'Grain rye responds to nitrogen, phosphorus, and potassium in similar ways to other small grains, though because it is often grown on lower-fertility land, requirements and expected responses can differ from wheat. Rye grown purely as a cover crop is typically managed with minimal or no added fertility.',
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
          text: 'Rye is grown predominantly rain-fed, reflecting its role on marginal land and its use as a cover crop. Where grain rye is irrigated, scheduling follows similar principles to other small grains, prioritizing stem elongation through grain fill.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Rye is the classic host of ergot, in which a fungal sclerotium replaces individual grains and can contaminate harvested grain; because rye is largely cross-pollinated, its open florets are considered more exposed to ergot infection than self-pollinated cereals. Stem rust and powdery mildew can also occur, along with aphids.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, field sanitation, monitoring, and — where justified — locally authorized control products used according to their labels. Grain intended for food or feed is typically screened for ergot contamination.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain rye is harvested by combining once the crop has dried to a moisture content suitable for safe storage. Rye grown as a cover crop is instead terminated mechanically or chemically, or grazed or cut for forage, ahead of the following crop.',
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
            'Milling into flour for dense breads and crispbreads',
            'Distilling into rye whiskey and other spirits',
            'Livestock feed, including grain and whole-crop forage',
            'Cover cropping for erosion control, weed suppression, and soil cover between cash crops',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'stem-rust' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'triticale' },
    { type: 'crop', slug: 'oats' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cover-crop', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'The most cold-hardy small-grain cereal, grown in cool-temperate regions with severe winters as well as milder zones.',
  limitations: [
    'Sowing dates, seeding rates, and cover-crop termination timing are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of rye in food and feed systems' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Rye and ergot compendium data' },
    { sourceId: 'ahdb', citedFor: 'Regional rye and hybrid cereal agronomy' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rye',
    description:
      'A structured, evidence-based reference on rye: classification, cold-hardiness, soil tolerance, agronomy, ergot risk, pests, harvest, and uses.',
    keywords: ['rye', 'Secale cereale', 'cereal crop', 'cover crop'],
  },
  structuredData: { article: true },
};
