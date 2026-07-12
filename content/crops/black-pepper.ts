import type { CropContent } from '@/types/content';

export const blackPepper: CropContent = {
  id: 'crop-black-pepper',
  slug: 'black-pepper',
  contentType: 'crop',
  title: 'Black pepper',
  scientificName: 'Piper nigrum',
  alternativeNames: ['Pepper vine'],
  category: 'Spice crop',
  subcategory: 'Perennial woody vine',
  botanicalFamily: 'Piperaceae (pepper family)',
  lifecycle: 'Perennial',
  summary:
    'Black pepper is a perennial climbing vine grown for its dried fruit (peppercorns), traditionally cultivated trained onto living or artificial support trees in humid tropical regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Black pepper is a woody, climbing vine that in cultivation is trained up living support trees or artificial poles, producing pendulous fruit spikes along its climbing stems. The same fruit, harvested and processed differently, yields black, white, and green pepper.',
    },
    {
      type: 'paragraph',
      text: 'Vines are propagated from cuttings and, once established on their support, can remain productive for many years, making support-tree or trellis choice and site drainage long-term decisions at planting.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Piperaceae (pepper family)' },
    { label: 'Life cycle', value: 'Perennial climbing vine' },
    { label: 'Main species', value: 'Piper nigrum' },
    { label: 'Primary uses', value: 'Dried peppercorns as a culinary spice' },
    {
      label: 'Climate',
      value: 'Warm, humid tropical lowland',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained lateritic and loam soils',
      note: 'Very sensitive to waterlogging (foot rot risk).',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Black pepper is grown mainly by smallholder farmers in humid tropical regions, often as an intercrop climbing on living support trees within diversified home gardens or plantation systems, alongside larger commercial plantings in some producing countries.',
        },
        {
          type: 'paragraph',
          text: 'As one of the most widely traded spices historically and today, pepper production is closely tied to processing method: unripe berries are cooked and dried to produce black pepper, while fully ripe berries, after the outer skin is removed, yield white pepper.',
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
            { term: 'Family', description: 'Piperaceae (pepper family)' },
            { term: 'Genus and species', description: 'Piper nigrum' },
            {
              term: 'Growth habit',
              description:
                'Woody, climbing perennial vine that attaches to support structures using adventitious roots',
            },
            {
              term: 'Fruit',
              description:
                'Small drupes (berries) borne in pendulous spikes, processed at different ripeness stages into black, green, or white pepper',
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
          text: 'Black pepper is native to the Western Ghats region of southern India, where it has been cultivated and traded for spice for millennia, historically driving long-distance trade routes before its introduction to Southeast Asia and other tropical regions.',
        },
        {
          type: 'paragraph',
          text: 'Major production today spans South and Southeast Asia, with significant cultivation in India, Vietnam, and Indonesia among other countries. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Black pepper requires warm, humid tropical conditions with well-distributed rainfall, reflecting its origin in humid forest environments of the Western Ghats.',
        },
        {
          type: 'paragraph',
          text: 'The vine has no meaningful cold or frost tolerance, and prolonged dry periods can reduce flowering and fruit set, particularly where irrigation is not available.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Black pepper performs best on well-drained lateritic and loam soils with good organic matter, reflecting the crop’s sensitivity to waterlogged conditions, which promote foot rot, one of the most damaging diseases of the crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site drainage is one of the most important factors in pepper vine health and longevity. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Vines are established from rooted cuttings planted at the base of a living support tree or artificial pole, with training in the early years directing growth up the support structure.',
        },
        {
          type: 'list',
          items: [
            'Selection of a suitable living support tree or durable artificial pole',
            'Training of young vines up the support during establishment',
            'Mulching and organic matter incorporation to maintain soil structure and moisture',
            'Regular pruning of support trees to manage shade and airflow around the vine',
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
          text: 'Potassium supports fruit spike development and berry filling, while nitrogen contributes to vine growth, particularly during the establishment and early climbing phase.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Black pepper is grown both rain-fed, in consistently humid regions, and with supplemental drip irrigation elsewhere, particularly to support flowering and fruit set during drier periods.',
        },
        {
          type: 'paragraph',
          text: 'Because the vine is highly sensitive to waterlogging, irrigation is managed alongside careful attention to site and soil drainage.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Foot rot, a root and collar rot disease, is the most serious disease of black pepper and can kill vines rapidly under waterlogged conditions, while anthracnose can cause leaf spotting and dieback under humid conditions. Mealybugs and scale insects are common sap-feeding pests that can weaken vines and reduce yield.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on well-drained sites, resistant or tolerant planting material where available, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit spikes are hand-picked at a maturity stage appropriate to the intended product, with unripe berries processed into black pepper through cooking and drying, and fully ripe berries processed into white pepper after removal of the outer skin.',
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
            'Dried whole or ground peppercorns (black, white, or green) as a culinary spice',
            'Pepper oil and oleoresin extracted for food-industry flavoring',
            'By-products used in some traditional and industrial applications',
            'Ornamental and shade-support intercropping value in diversified home gardens',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'chili-pepper' },
    { type: 'crop', slug: 'ginger' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of humid tropical production, concentrated in South and Southeast Asia.',
  climateContext:
    'Warm, humid tropical climbing vine requiring reliable moisture; highly sensitive to waterlogged soil.',
  limitations: [
    'Support-tree systems, processing method, and site-drainage practices vary substantially by region and are not detailed here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global black pepper production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Black pepper disease and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Black pepper',
    description:
      'A structured, evidence-based reference on black pepper: classification, tropical climate needs, vine management, diseases, pests, and spice uses.',
    keywords: ['black pepper', 'Piper nigrum', 'spice crop', 'peppercorn'],
  },
  structuredData: { article: true },
};
