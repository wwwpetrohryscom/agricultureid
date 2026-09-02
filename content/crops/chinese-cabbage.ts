import type { CropContent } from '@/types/content';

export const chineseCabbage: CropContent = {
  id: 'crop-chinese-cabbage',
  slug: 'chinese-cabbage',
  contentType: 'crop',
  title: 'Chinese Cabbage',
  scientificName: 'Brassica rapa Pekinensis Group',
  alternativeNames: ['Napa cabbage', 'Pe-tsai'],
  category: 'Vegetable crop',
  subcategory: 'Brassica rapa cultivar group',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual to biennial',
  summary:
    'Chinese cabbage is a Brassica rapa heading vegetable, not a relative of European cabbage in any close sense, and it is the raw material of kimchi — a use large enough to shape when and where it is grown.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chinese cabbage forms a dense upright head of thin, pale, crinkled leaves. It belongs to Brassica rapa, the same species as turnip, pak choi and the turnip-rape oilseed, and not to Brassica oleracea, which is European cabbage — so despite the shared English name the two are different species with different agronomy.',
    },
    {
      type: 'paragraph',
      text: 'It grows fast, bolts readily, and its largest single outlet is kimchi production, whose seasonal demand determines planting schedules across Korea and beyond.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Rank', value: 'Cultivar group of Brassica rapa' },
    {
      label: 'Not the same species as',
      value: 'European cabbage, which is Brassica oleracea',
    },
    {
      label: 'Head type',
      value: 'Dense upright barrel or cylindrical head of thin leaves',
    },
    {
      label: 'Principal risk',
      value: 'Bolting, triggered by cold followed by lengthening days',
    },
    { label: 'Largest single use', value: 'Kimchi manufacture' },
  ],
  sections: [
    {
      id: 'species',
      heading: 'A Brassica rapa, not a cabbage',
      body: [
        {
          type: 'paragraph',
          text: 'Chinese cabbage shares its species with pak choi, turnip and Chinese mustard, and crosses with them freely. European cabbage is a different species entirely. The distinction matters for seed production isolation, for cultivar sourcing and for reading agronomic advice, because guidance written for cabbage does not transfer.',
        },
      ],
    },
    {
      id: 'bolting',
      heading: 'Bolting is the crop’s defining risk',
      body: [
        {
          type: 'paragraph',
          text: 'The plant is biennial by nature and flowers after cold, so a sowing exposed to a cold spell and then to lengthening days bolts before it heads. Sowing date is therefore specified tightly, and cultivars are classified by bolting resistance more than by any other trait.',
        },
      ],
    },
    {
      id: 'speed',
      heading: 'A fast crop',
      body: [
        {
          type: 'paragraph',
          text: 'Chinese cabbage heads in a fraction of the time European cabbage takes, which allows two or more crops in a season and makes it a useful catch crop. The speed also compresses every management decision — a nutrient or water deficit lasting a week affects a large proportion of the growing period.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'kimchi',
      heading: 'A crop shaped by one product',
      body: [
        {
          type: 'paragraph',
          text: 'Kimchi manufacture consumes an enormous share of the crop in Korea and beyond, and the traditional autumn kimjang season concentrates demand into a short window. Planting schedules, cultivar choice and storage arrangements are built around that peak rather than around a steady market.',
        },
      ],
    },
    {
      id: 'tipburn',
      heading: 'Tipburn and calcium',
      body: [
        {
          type: 'paragraph',
          text: 'Because the head is dense and its inner leaves transpire little, calcium can fail to reach them even where soil calcium is adequate, producing brown margins on inner leaves that are invisible until the head is cut. Irregular water supply is the usual trigger, and the disorder is a marketing loss rather than a yield loss.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'soft-rot',
      heading: 'Soft rot',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial soft rot enters through wounds and spreads in the dense head, and a crop can look sound in the field and fail in store. Avoiding harvest damage, cooling promptly and not harvesting wet are the practical controls.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'clubroot',
      heading: 'The Brassica rapa rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot infects across the family, so Chinese cabbage cannot be rotated against turnip, pak choi or European brassicas to any effect. Where the crop is grown intensively for kimchi supply, clubroot pressure is a recurring constraint and resistant cultivars are widely used.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and the kimjang cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Heads store for weeks to a few months under cold, humid conditions, which historically bridged the gap between harvest and processing. Storage rot rather than wilting is the limit, and the outer leaves are stripped progressively as a sacrificial layer.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Names and confusion',
      body: [
        {
          type: 'paragraph',
          text: 'Napa cabbage, pe-tsai and Chinese cabbage all refer to this group, while bok choy or pak choi refers to the non-heading Chinensis Group of the same species. A shopper and a seed catalogue may use the terms differently, and the cultivar group name is the only unambiguous reference.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'diamondback-moth' },
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'cabbage-looper' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'temperature' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pak-choi' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'cabbage' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'East Asia, chiefly China and Korea, with production worldwide for Asian vegetable markets.',
  climateContext:
    'Cool-season fast-growing vegetable; bolts after cold exposure and suffers tipburn under irregular water supply.',
  limitations: [
    'Bolting resistance is a cultivar rating on national scales and is not comparable between catalogues.',
    'Storage life depends on cultivar, maturity and store conditions and is not given.',
    'Clubroot resistance is pathotype-specific.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Asian vegetable production context' },
    { sourceId: 'cabi', citedFor: 'Brassica rapa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cornell-cals', citedFor: 'Vegetable production guidance' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Chinese Cabbage',
    description:
      'Chinese cabbage as a Brassica rapa cultivar group: why it is not European cabbage, bolting risk, tipburn, soft rot and the kimchi demand cycle.',
    keywords: [
      'Chinese cabbage',
      'napa cabbage',
      'Brassica rapa',
      'Pekinensis Group',
      'kimchi',
    ],
  },
  structuredData: { article: true },
};
