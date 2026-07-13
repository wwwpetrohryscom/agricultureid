import type { PlantDiseaseContent } from '@/types/content';

export const suddenDeathSyndrome: PlantDiseaseContent = {
  id: 'plant-disease-sudden-death-syndrome',
  slug: 'sudden-death-syndrome',
  contentType: 'plant-disease',
  title: 'Sudden Death Syndrome',
  scientificName:
    'Fusarium virguliforme (formerly Fusarium solani f. sp. glycines)',
  alternativeNames: ['SDS', 'Soybean sudden death syndrome'],
  category: 'Plant disease',
  subcategory: 'Fungal root disease',
  causalAgent:
    'Soil-borne fungus Fusarium virguliforme (and related Fusarium species in some regions)',
  pathogenType: 'fungal',
  summary:
    'Sudden death syndrome is a soil-borne disease of soybean caused by Fusarium virguliforme. The fungus infects the roots and releases a toxin that moves to the leaves, producing striking interveinal yellowing and browning while the veins stay green.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sudden death syndrome is an important soil-borne disease of soybean caused by the fungus Fusarium virguliforme (related species cause similar disease in some regions). The fungus infects and rots the roots early in the season, but the most conspicuous symptoms appear later on the leaves, driven by a toxin the fungus produces in the roots that is carried up to the foliage.',
    },
    {
      type: 'paragraph',
      text: 'The disease is closely linked to environmental and soil conditions, being more common in cool, wet soils early in the season and in compacted or poorly drained fields. It frequently occurs together with soybean cyst nematode, and the two can interact to worsen damage, making integrated management across several factors important.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Soil-borne fungal root disease (Fusarium virguliforme)',
    },
    {
      label: 'Key sign',
      value:
        'Interveinal yellowing then browning of leaves while veins stay green',
    },
    { label: 'Hosts', value: 'Soybean' },
    {
      label: 'Favoured by',
      value:
        'Cool, wet soils early in the season, compaction, and poor drainage',
    },
    {
      label: 'Spread',
      value:
        'Soil-borne fungus surviving on residue and in soil; spread with soil movement',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, drainage and compaction management, planting timing, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Foliar symptoms usually appear around or after flowering as scattered yellow spots between the leaf veins that enlarge and merge, so the tissue between the veins turns yellow and then brown while the veins themselves remain green. Severely affected leaflets may drop, leaving the stalks attached. Splitting the lower stem shows a discoloured outer layer but a firm white pith, and roots are rotted and may carry bluish fungal growth in wet conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Foliar symptoms of sudden death syndrome can resemble those of brown stem rot and some nutrient or chemical injuries. Checking the internal stem and roots, and confirming with a diagnostic laboratory, helps separate these causes.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium virguliforme survives in soil and on crop residue and infects soybean roots early in the season, often soon after planting into cool, wet soils. The fungus remains in the roots and produces a toxin that is transported to the leaves, where it causes the characteristic interveinal symptoms later in the season. The severity of foliar symptoms depends on how much root infection occurred and on subsequent weather.',
        },
        {
          type: 'list',
          items: [
            'The fungus survives in soil and on residue between crops',
            'Root infection occurs early, favoured by cool, wet soils',
            'A toxin produced in the roots is carried to the leaves',
            'Foliar symptoms appear later and reflect the extent of root infection',
          ],
        },
      ],
    },
    {
      id: 'hosts-and-conditions',
      heading: 'Hosts and favourable conditions',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is the primary host of concern. Cool, wet soils at and after planting, soil compaction, and poor drainage all increase root infection and later disease. Early planting into cold soils and the presence of soybean cyst nematode tend to raise risk, as does a field history of the disease.',
        },
        {
          type: 'list',
          items: [
            'Cool, wet soils at planting and early establishment',
            'Compacted or poorly drained soils that stress roots',
            'Fields with soybean cyst nematode present',
            'A previous history of the disease in the field',
          ],
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because the disease is soil-borne and tied to root health and soil conditions, management combines resistant varieties with practices that improve soil structure and drainage and reduce early-season stress. Managing associated nematodes is also part of an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Grow varieties with better sudden-death-syndrome tolerance ratings',
            'Improve drainage and reduce soil compaction to support root health',
            'Consider planting timing to avoid the coldest, wettest soils where feasible',
            'Manage soybean cyst nematode, which can worsen the disease',
            'Track field history and prioritise higher-risk fields',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of seed treatments or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'soybean' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'charcoal-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'pest', slug: 'soybean-cyst-nematode' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Occurs in major soybean-producing regions with cool, wet spring soils; severity varies with soil conditions, planting date, and field history.',
  climateContext:
    'Favoured by cool, wet soils early in the season that promote root infection; later foliar symptoms depend on the extent of root infection and subsequent weather.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Several Fusarium species cause similar disease in different regions, and interactions with nematodes complicate outcomes.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Identification, risk factors, and management in soybean',
    },
    {
      sourceId: 'umn-extension',
      citedFor:
        'Soil and planting conditions and integrated management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Sudden Death Syndrome of Soybean',
    description:
      'Sudden death syndrome overview: Fusarium virguliforme root infection, toxin-driven interveinal leaf symptoms, and integrated management in soybean.',
    keywords: [
      'sudden death syndrome',
      'Fusarium virguliforme',
      'soybean SDS',
      'soybean disease',
    ],
  },
  structuredData: { article: true },
};
