import type { CropContent } from '@/types/content';

export const brusselsSprouts: CropContent = {
  id: 'crop-brussels-sprouts',
  slug: 'brussels-sprouts',
  contentType: 'crop',
  title: 'Brussels Sprouts',
  scientificName: 'Brassica oleracea Gemmifera Group',
  category: 'Vegetable crop',
  subcategory: 'Brassica oleracea cultivar group',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Biennial grown as an annual',
  summary:
    'Brussels sprouts are axillary buds harvested from a standing stem. That single structural fact makes them the only brassica whose crop is distributed up a column rather than concentrated in one head, and it governs the entire harvest system.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A Brussels sprout plant carries its crop as dozens of small heads in the leaf axils up a single thick stem, maturing from the bottom upwards over weeks. Every other brassica vegetable presents one harvestable unit; this one presents a gradient.',
    },
    {
      type: 'paragraph',
      text: 'Modern production removes the gradient rather than working with it. Uniform hybrids, topping the growing point and a single machine pass have replaced the repeated hand picking that the plant’s natural habit implies.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Rank', value: 'Cultivar group of Brassica oleracea' },
    {
      label: 'Harvested organ',
      value: 'Axillary buds (sprouts) along the stem',
    },
    { label: 'Maturation', value: 'From the base upwards, over several weeks' },
    {
      label: 'Modern practice',
      value: 'Topping to force uniformity, then single-pass mechanical harvest',
    },
    {
      label: 'Quality trait',
      value: 'Firm, tight buttons; loose sprouts are unmarketable',
    },
  ],
  sections: [
    {
      id: 'axillary',
      heading: 'A crop up a stem',
      body: [
        {
          type: 'paragraph',
          text: 'The sprouts are lateral buds that would become side shoots if the plant were left, and they form in the axil of each leaf as the stem extends. The plant therefore holds its crop across a long vertical gradient of maturity, with the oldest and largest at the base.',
        },
      ],
    },
    {
      id: 'topping',
      heading: 'Topping forces uniformity',
      body: [
        {
          type: 'paragraph',
          text: 'Removing the growing point stops stem extension and redirects assimilate into the existing buds, bringing the whole column towards maturity together. Timing that operation is the central decision in mechanised production: too early caps yield, too late leaves the top of the stem immature at harvest.',
        },
      ],
    },
    {
      id: 'hybrids',
      heading: 'Why hybrids changed the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Uniform F1 hybrids made single-pass harvest possible by narrowing the maturity gradient the open-pollinated types carried. The shift from a hand-picked crop over many weeks to a machine-harvested one in a single pass is a change in the plant as much as in the equipment.',
        },
      ],
    },
    {
      id: 'cold',
      heading: 'Frost and eating quality',
      body: [
        {
          type: 'paragraph',
          text: 'Sprouts are harvested through late autumn and winter and are widely held to improve after frost, as starch converts and bitterness declines. The crop tolerates hard frost on the stem, which is why it occupies a season when almost nothing else is standing in the field.',
        },
      ],
    },
    {
      id: 'firmness',
      heading: 'What makes a sprout unmarketable',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers want tight, firm buttons. Sprouts that blow — opening into loose leafy rosettes — are unsaleable, and blowing is provoked by heat, by nitrogen late in the season and by delayed harvest. Firmness is therefore a management outcome, not a cultivar property alone.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'standing',
      heading: 'A long field occupation',
      body: [
        {
          type: 'paragraph',
          text: 'The crop stands in the field for most of a year and is harvested at the end of it, which makes it a heavy commitment of land and exposes it to a full season of pest and disease pressure. Wind throw on a tall, top-heavy plant is a real loss on exposed sites.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'brassica-rotation',
      heading: 'The clubroot constraint',
      body: [
        {
          type: 'paragraph',
          text: 'As a Brassica oleracea cultivar group, sprouts share their soil-borne diseases completely with cabbage, cauliflower, broccoli and kale, so rotating between them achieves nothing. The rotation that matters is out of the family, and clubroot history constrains a field for years.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests of a long-standing crop',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage aphid colonies inside the sprouts are a contamination problem as much as a yield one, since a marketable sprout must be clean inside. Caterpillars, whitefly and, in some regions, cabbage root fly all get a full season on a crop that stands that long.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'After harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Sprouts are highly perishable once removed from the stem and are cooled promptly; some markets sell them still on the stalk precisely because that slows deterioration. Field heat removed within hours matters more than anything done later.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cabbage-looper' },
    { type: 'pest', slug: 'diamondback-moth' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'kale' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Temperate regions, chiefly northern Europe and North America. Topping dates and cultivar recommendations are regional.',
  climateContext:
    'Cool-season crop occupying a long season and harvested through frost; heat during bud formation causes blowing.',
  limitations: [
    'Topping timing is site- and cultivar-specific and is set by local recommendation.',
    'The improvement in flavour after frost is widely reported and its mechanism is not quantified here.',
    'Clubroot resistance is pathotype-specific and its durability varies by region.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Brassica vegetable production context' },
    { sourceId: 'ahdb', citedFor: 'Brassica agronomy and harvest management' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Brassica oleracea pest and disease compendium data',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Vegetable crop production guidance',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Brussels Sprouts',
    description:
      'Brussels sprouts as a Brassica oleracea cultivar group: axillary buds up a stem, topping for uniformity, blowing, frost and the clubroot constraint.',
    keywords: [
      'Brussels sprouts',
      'Gemmifera Group',
      'Brassica oleracea',
      'topping',
      'axillary buds',
    ],
  },
  structuredData: { article: true },
};
