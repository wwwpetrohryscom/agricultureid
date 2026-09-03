import type { CropContent } from '@/types/content';

export const chives: CropContent = {
  id: 'crop-chives',
  slug: 'chives',
  contentType: 'crop',
  title: 'Chives',
  scientificName: 'Allium schoenoprasum',
  alternativeNames: ['Common chives', 'Chive', 'Schnittlauch'],
  category: 'Herb',
  subcategory: 'Perennial cut Allium',
  botanicalFamily: 'Amaryllidaceae (onion family)',
  lifecycle: 'Perennial',
  summary:
    'Chives are a hardy perennial Allium grown for repeatedly cut leaf rather than for a bulb, managed as a standing clump for several years and the only Allium in this corpus harvested by mowing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chives are the smallest cultivated Allium and the only one this corpus publishes that is harvested by cutting a standing crop rather than by lifting a plant. A clump is established once and cut repeatedly for several years, regrowing from the base each time, which puts the crop closer in management to a forage than to an onion.',
    },
    {
      type: 'paragraph',
      text: 'The plant is fully hardy, dying back to the base in winter and among the first green things to appear in spring, which is why it holds a place in temperate herb production out of proportion to the tonnage involved. Its flowers are attractive to pollinators and are themselves sold as an edible garnish.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaryllidaceae (onion family)' },
    { label: 'Life cycle', value: 'Perennial' },
    { label: 'Scientific name', value: 'Allium schoenoprasum' },
    {
      label: 'Harvested part',
      value: 'Leaf, cut repeatedly; flowers sold as a garnish',
    },
    { label: 'Stand life', value: 'Several years from one establishment' },
    {
      label: 'Propagation',
      value: 'Seed, or division of an established clump',
    },
    { label: 'Climate', value: 'Cool temperate; fully winter-hardy' },
  ],
  sections: [
    {
      id: 'mown',
      heading: 'A crop that is mown',
      body: [
        {
          type: 'paragraph',
          text: 'Chives are cut two to six times a season depending on climate and market, close to the base, and regrow from the crown. The operation resembles cutting a grass more than harvesting a vegetable, and it means yield is a function of regrowth speed and stand vigour rather than of a single ripening event. A stand cut too low or too often thins out and is replaced.',
        },
      ],
    },
    {
      id: 'stand-life',
      heading: 'Establishment and stand life',
      body: [
        {
          type: 'paragraph',
          text: 'A stand raised from seed takes a season to become productive; one established from divisions produces sooner. Either way the crop occupies the ground for several years, which takes it out of an annual vegetable rotation and puts it into the part of a holding reserved for perennials — a real constraint where land is rotated for soil-borne disease reasons.',
        },
      ],
    },
    {
      id: 'forcing',
      heading: 'Forcing and protected production',
      body: [
        {
          type: 'paragraph',
          text: 'Because the crop is hardy and dormant in winter, clumps can be lifted, chilled and forced under protection to supply leaf out of season. Much of the year-round supply in temperate markets is produced this way rather than from field cutting, and forced material is a different product from field-cut leaf in both flavour and shelf life.',
        },
      ],
    },
    {
      id: 'flowering',
      heading: 'Flowering and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering coarsens the leaf and diverts the plant from regrowth, so stands grown for leaf are cut before or at flowering. Where the flowers themselves are the product the management inverts, and the two markets cannot be served from the same cut.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'A perennial cut several times a season removes nutrients steadily and depends on the crown surviving winter in good condition. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: "Allium rust, downy mildew and thrips are the main problems, and a perennial stand cannot be rotated away from them, which is the principal disadvantage of the crop's stand life. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.",
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Moist, well-drained soils with good organic matter suit the crop; waterlogging in winter kills crowns. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'weeds',
      heading: 'Weeds in a perennial stand',
      body: [
        {
          type: 'paragraph',
          text: "A stand that is not rotated accumulates perennial weeds, and the crop's own habit — fine upright leaves cut close to the ground — gives almost no competitive shade. Weed control in an established stand is the main reason a grower replaces it, more often than declining vigour in the crop itself.",
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed production and stand renewal',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is short-lived and loses viability within a couple of years, so growers who raise their own stands buy fresh seed rather than storing it. Division sidesteps that entirely and is why so much of the crop is propagated vegetatively, at the cost of carrying any disease in the parent clump forward.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'leek' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'parsley' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Grown throughout temperate Europe, North America and East Asia as a culinary herb. The FAO Crop Calendar records sowing and harvest windows in five countries.',
  climateContext:
    'Cool temperate and fully hardy, dying back in winter and regrowing early in spring. It tolerates cold far better than heat, and leaf quality falls in hot dry weather.',
  limitations: [
    'Chives are almost never reported separately in production statistics and are absorbed into herb categories.',
    'The corpus holds no cultivar records for chives, although fine-leaved and coarse-leaved selections are distinguished in the trade.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Crop calendar coverage across five countries',
    },
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows by agro-ecological zone',
    },
    { sourceId: 'cabi', citedFor: 'Allium schoenoprasum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and distribution' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Chives',
    description:
      'Chives (Allium schoenoprasum): a hardy perennial Allium cut repeatedly like a forage, forced for winter leaf, and held as a stand for years.',
    keywords: [
      'chives',
      'Allium schoenoprasum',
      'perennial herb',
      'cut herb',
      'Allium',
    ],
  },
  structuredData: { article: true },
};
