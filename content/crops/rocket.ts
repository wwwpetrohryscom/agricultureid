import type { CropContent } from '@/types/content';

export const rocket: CropContent = {
  id: 'crop-rocket',
  slug: 'rocket',
  contentType: 'crop',
  title: 'Rocket',
  scientificName: 'Eruca vesicaria (also Diplotaxis tenuifolia, wild rocket)',
  alternativeNames: ['Arugula', 'Roquette', 'Salad rocket', 'Rucola'],
  category: 'Leafy vegetable',
  subcategory: 'Fast-growing salad brassica',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Rocket is a fast-growing leafy salad crop of the cabbage family valued for its peppery leaves, harvested young over multiple cuttings, and widely grown as a quick catch crop and in protected and baby-leaf production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rocket, also called arugula, is a fast-growing leafy salad vegetable of the cabbage family, prized for its distinctive peppery, mustard-like flavor. Two main crops are grown under the name: salad or garden rocket (Eruca vesicaria) and the finer-leaved, more strongly flavored wild or perennial rocket (Diplotaxis tenuifolia).',
    },
    {
      type: 'paragraph',
      text: 'Its very rapid growth makes rocket a popular quick catch crop and a mainstay of baby-leaf salad production, both in the field and under protection. As a brassica, it shares many pests and diseases with other members of the cabbage family, which is an important consideration in rotations.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    {
      label: 'Life cycle',
      value: 'Annual (wild rocket is short-lived perennial)',
    },
    { label: 'Scientific name', value: 'Eruca vesicaria (salad rocket)' },
    {
      label: 'Primary uses',
      value: 'Peppery salad leaves, used fresh in salads and as a garnish',
    },
    {
      label: 'Climate',
      value: 'Cool-season; fast-growing and best in mild conditions',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, moisture-retentive, well-drained loams and sandy loams',
      note: 'Quick growth favors fertile, consistently moist soils.',
    },
    {
      label: 'Harvest',
      value: 'Cut young, often as baby leaf, with cut-and-come-again regrowth',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Rocket is grown for its young, tender leaves, harvested as a peppery salad green. Because it grows so quickly, it is well suited to intensive baby-leaf production and to filling short gaps in cropping programs, and it is grown year-round in many places using protected cropping.',
        },
        {
          type: 'paragraph',
          text: 'Salad rocket grows and matures faster and has a milder flavor, while wild rocket is slower, more strongly flavored, and more persistent, offering repeated cuttings over a longer period.',
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
              description: 'Brassicaceae (cabbage or mustard family)',
            },
            {
              term: 'Salad rocket',
              description:
                'Eruca vesicaria — fast-growing annual with lobed leaves',
            },
            {
              term: 'Wild rocket',
              description:
                'Diplotaxis tenuifolia — finer-leaved, more pungent, short-lived perennial',
            },
            {
              term: 'Growth habit',
              description:
                'Low-growing leafy rosette that bolts to flower under long days and warm conditions',
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
          text: 'Rocket is native to the Mediterranean region and western Asia, where it has long been gathered and grown, and it has become a globally popular salad crop, particularly with the growth of baby-leaf and mixed-salad markets.',
        },
        {
          type: 'paragraph',
          text: 'Because it is largely a fresh, short-cycle vegetable, detailed production statistics are limited; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rocket is a cool-season crop that grows best in mild temperatures, producing tender, well-flavored leaves. Hot conditions and long days encourage rapid bolting and increase pungency and bitterness, so summer crops are often grown in cooler periods or under protection.',
        },
        {
          type: 'paragraph',
          text: 'Its speed of growth allows successional sowings to provide a continuous supply across the cooler parts of the year.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rocket grows best on fertile, moisture-retentive but well-drained loams and sandy loams that support rapid, tender growth. Even moisture and good fertility are important for leaf quality in this fast crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Consistent moisture and fertility keep rocket growing quickly and tender; stress hardens the leaves and intensifies their pungency.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Rocket is direct-seeded, often at high density for baby-leaf production, in successional sowings for continuity of supply. Rotation away from other brassicas helps limit shared pests and diseases, and protected cropping extends the season.',
        },
        {
          type: 'list',
          items: [
            'Successional direct sowings for a continuous supply of young leaves',
            'Rotation away from other brassicas to limit shared pests and soilborne disease',
            'Protected cropping to extend the season and improve leaf quality',
            'Prompt, repeated harvesting of young leaves before bolting',
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
          text: 'Rapid leaf growth is supported by adequate nitrogen, but as with other leafy vegetables, excessive nitrogen can promote nitrate accumulation and soft, disease-prone growth. Balanced fertility on fertile soils generally meets the needs of this short-cycle crop.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent moisture is important for the fast, tender growth that gives rocket its quality, and irrigation is widely used, especially in baby-leaf and protected production. Moisture stress slows growth, toughens leaves, and hastens bolting.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is a leading disease of rocket, particularly in cool, humid conditions and dense baby-leaf stands, and white rust, damping-off, and bacterial leaf spots also occur. As a brassica, rocket can host clubroot, an important reason for rotation.',
        },
        {
          type: 'paragraph',
          text: 'Flea beetles are a characteristic pest, peppering the leaves with small holes, and aphids, caterpillars, leaf miners, and slugs also damage the crop. Because rocket is eaten raw and often unwashed, management emphasises rotation, protection such as fine netting, sanitation, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Rocket is harvested young, by cutting whole plants or individual leaves, often on a cut-and-come-again basis that allows one or more regrowth cuttings. The tender leaves are highly perishable and are cooled and marketed promptly.',
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
            'Fresh peppery leaves used in salads and salad mixes',
            'Leaves used as a garnish and on pizzas and cooked dishes',
            'A common baby-leaf component in bagged and mixed salads',
            'Home-garden use as a quick, easily grown salad crop',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mustard' },
    { type: 'crop', slug: 'watercress' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'temperature' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
    { type: 'plant-disease', slug: 'clubroot' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cultivar', 'yield'],
  geographicScope:
    'Global overview. Grown as a field, protected, and baby-leaf crop; origins in the Mediterranean and western Asia.',
  climateContext:
    'Cool-season, very fast-growing leafy brassica; heat and long days trigger bolting and increase pungency.',
  limitations: [
    'Salad and wild rocket differ in speed, flavor, and persistence and are not reduced to a single set of guidance here.',
    'Because leaves are eaten raw, food-safety-conscious pest and disease management is emphasised.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of rocket among leafy salad vegetables',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Rocket crop, disease, and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Rocket (arugula) cultivation guidance' },
    {
      sourceId: 'britannica',
      citedFor: 'Botanical description and culinary use',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Rocket / Arugula (Eruca vesicaria)',
    description:
      'An evidence-based reference on rocket (arugula): fast-growing salad brassica, cool-season agronomy, soils, downy mildew, flea beetles, and salad uses.',
    keywords: ['rocket', 'arugula', 'Eruca vesicaria', 'salad leaf'],
  },
  structuredData: { article: true },
};
