import type { CropContent } from '@/types/content';

export const oats: CropContent = {
  id: 'crop-oats',
  slug: 'oats',
  contentType: 'crop',
  title: 'Oats',
  scientificName: 'Avena sativa',
  alternativeNames: ['Common oat', 'Cereal oat'],
  category: 'Cereal crop',
  subcategory: 'Temperate cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual',
  summary:
    'Oats is a cool-season cereal grown for grain used in human food and livestock feed, and for its straw and whole-plant forage value. It tolerates cooler, wetter conditions and less fertile soils than many other cereals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oats is a temperate cereal grass grown for grain that is rolled, milled, or processed into food products such as porridge and breakfast cereals, as well as for livestock feed and forage. Compared with wheat and barley, it is notably tolerant of cool, damp growing conditions and performs acceptably on lighter or more acidic soils.',
    },
    {
      type: 'paragraph',
      text: 'Both spring and, in milder regions, winter (autumn-sown) types are grown. The crop is also valued in rotations for its comparatively low disease carryover to some other cereals and its use as a nurse crop or cover for establishing forage legumes and grasses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    {
      label: 'Life cycle',
      value: 'Annual (spring or, regionally, winter types)',
    },
    { label: 'Main species', value: 'Avena sativa' },
    {
      label: 'Primary uses',
      value: 'Food (milled/rolled grain), livestock feed, forage and straw',
    },
    {
      label: 'Climate',
      value:
        'Cool, moist temperate regions; less heat- and drought-tolerant than wheat',
    },
    {
      label: 'Soil preference',
      value: 'Tolerant of lighter, more acidic soils than most cereals',
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
          text: 'Oats is a self-pollinating annual grass grown for its edible grain, which is enclosed in a fibrous hull that is removed during processing (dehulling) before further milling. Its comparative tolerance of cool, wet weather and marginal soils makes it a useful cereal in regions less suited to wheat or barley.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from specialized milling-oat contracts to farm-scale feed and forage use. Because climate and end-use vary widely by region, agronomic detail such as sowing date and seeding rate is set locally.',
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
            { term: 'Genus', description: 'Avena' },
            {
              term: 'Principal species',
              description: 'Avena sativa (common oat)',
            },
            {
              term: 'Growth habit',
              description:
                'Tillering annual grass bearing grain in an open, branched panicle rather than a spike',
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
          text: 'Cultivated oats are believed to have emerged as a secondary crop, evolving from weedy forms growing alongside wheat and barley in ancient Near Eastern and European cropping systems before being selected as a crop in its own right. It is now grown widely across cool-temperate regions of Europe, North America, and other similar climates.',
        },
        {
          type: 'paragraph',
          text: 'Current area, production, and trade figures shift with markets and seasonal conditions and are best obtained from primary datasets such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oats favors cool, moist conditions during vegetative growth and is more tolerant of cool, wet weather at establishment than wheat or barley, but it is comparatively sensitive to heat and drought stress, particularly around flowering and grain fill.',
        },
        {
          type: 'paragraph',
          text: 'Where winter types are grown, adequate cold hardiness of the chosen variety relative to local winter severity is an important consideration; spring types avoid the coldest part of the year by later sowing.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Oats tolerates a wider range of soil conditions than many cereals, including lighter, sandier, and more acidic soils, though it still performs best on well-drained loams with reasonable fertility and moisture-holding capacity.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poorly drained or compacted soils restrict rooting and increase disease risk. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishment aims for an even, well-anchored stand sown into a firm, moist seedbed at a locally appropriate depth and rate. Oats is also commonly undersown with forage legumes or grasses, using the cereal as a nurse crop.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to end use (milling, feed, or forage) and local disease pressure',
            'Crop rotation to manage soil-borne diseases and break weed cycles',
            'Seedbed preparation suited to the tillage system in use',
            'Timely weed control during early establishment',
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
          text: 'Nitrogen supports canopy development and grain yield but is typically applied more conservatively than for wheat, since excess nitrogen can increase lodging risk in oats. Phosphorus and potassium support establishment, root development, and straw strength.',
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
          text: 'Oats is grown predominantly under rain-fed conditions in cool, moist climates, though it can be irrigated where local water supply and economics support it. Water demand is greatest around stem elongation and grain fill, and the crop is comparatively sensitive to drought stress at these stages.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Oats can be affected by rust diseases, including stem rust, and by powdery mildew under favorable conditions, along with aphids, which can also transmit viruses, and soil-dwelling pests such as wireworms that damage germinating seed and roots. Pressure varies by region and season.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain oats is harvested by direct combining or swathing followed by combining once the crop has dried to a moisture content suitable for safe storage. Oats grown for forage is instead cut and conserved as hay or silage at a growth stage matched to the intended feed quality.',
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
            'Milled and rolled oats for human food, including porridge oats and breakfast cereals',
            'Livestock feed, both whole grain and processed products',
            'Whole-crop forage, hay, or straw for animal bedding and feed',
            'Use as a nurse crop for establishing forage legumes and grasses',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'stem-rust' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'rye' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'forage', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season cereal favoring moist temperate climates; less heat- and drought-tolerant than wheat or barley.',
  limitations: [
    'Sowing dates, seeding rates, and input levels are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of oats in food and feed systems' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Oat disease and pest compendium data' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Regional oat agronomy and management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Oats',
    description:
      'A structured, evidence-based reference on oats: classification, climate and soil requirements, agronomy, nutrition, diseases, pests, harvest, and uses.',
    keywords: ['oats', 'Avena sativa', 'cereal crop', 'oat agronomy'],
  },
  structuredData: { article: true },
};
