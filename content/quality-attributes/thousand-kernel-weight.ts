import type { QualityAttributeContent } from '@/types/content';

export const thousandKernelWeight: QualityAttributeContent = {
  id: 'quality-attribute-thousand-kernel-weight',
  slug: 'thousand-kernel-weight',
  contentType: 'quality-attribute',
  title: 'Thousand Kernel Weight',
  alternativeNames: ['TKW', 'Thousand-grain weight', 'Thousand seed weight'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a measure of germination or seed viability — a large, heavy kernel can fail to germinate, and a smaller kernel can germinate normally; kernel size and viability are separate properties that must be assessed separately.',
    'Not a grade factor — thousand kernel weight does not appear as a grade-determining factor in the way test weight or damage factors do; it is a processing and agronomic parameter, not a commercial grade criterion.',
    'Not a measure of protein content or other intrinsic quality — a heavy-kernelled lot is not thereby a high-protein or high-quality lot.',
    'Not meaningful without its stated moisture basis — the same kernels weighed at different moisture contents give different figures, so a thousand kernel weight quoted without the basis it was determined on cannot be compared to any other figure or used in a downstream calculation.',
  ],
  measurementBasis:
    'Adjusted to a stated moisture basis (the basis must always be reported alongside the figure)',
  typicalUnits: ['g per thousand kernels'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'millet-grain' },
    { type: 'commodity', slug: 'oat-grain' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'thousand-kernel-weight-count' },
  ],
  summary:
    'Thousand kernel weight is the mass of a counted one thousand kernels, adjusted to a stated moisture basis. It is used to calculate seeding rates, estimate potential milling yield, and support yield-component analysis, but it is a property of a specific lot, not a fixed trait of a variety, and it means nothing without its moisture basis stated.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Thousand kernel weight, often abbreviated TKW and also called thousand-grain weight or thousand seed weight, is determined by counting out one thousand kernels from a representative sample and weighing them, with the result adjusted to a stated moisture basis. It is one of the simplest physical measurements made on grain and seed, but its simplicity conceals an easy trap: because moisture adds mass, a figure reported without its moisture basis is not a meaningful number and cannot be compared to any other figure or used reliably in a downstream calculation. The moisture basis is not an optional footnote — it is part of the value.',
    },
    {
      type: 'paragraph',
      text: "Once properly stated, thousand kernel weight has several genuinely practical uses. Seed companies and growers use it to convert a target seeding rate expressed as a number of seeds per unit area into a seeding rate expressed as a mass per unit area — the calculation seed drills and planters actually need. Millers and processors use it as one input, alongside other attributes, to estimate the potential proportion of endosperm and hence potential milling yield, since heavier kernels tend to carry a larger endosperm relative to bran and germ. And agronomists use it as one of the standard yield components — alongside plant density and kernels per head or ear — in yield-component analysis that helps explain why a crop's yield came out the way it did.",
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Mass of a counted one thousand kernels, on a stated moisture basis',
    },
    {
      label: 'Primary uses',
      value:
        'Calculating seeding rates, estimating potential milling yield, yield-component analysis',
    },
    {
      label: 'Critical caveat',
      value:
        'Meaningless without a stated moisture basis; figures at different moisture bases are not comparable',
    },
    {
      label: 'Not a proxy for',
      value:
        'Germination, seed viability, protein content, or intrinsic quality',
    },
    {
      label: 'Not a grade factor',
      value:
        'Does not appear as a grade-determining factor in commercial grade standards',
    },
    {
      label: 'Varies with',
      value:
        'Cultivar, season, grain-filling conditions, and kernel position on the ear or head',
    },
    {
      label: 'Scope',
      value:
        'A property of the specific lot sampled, not a fixed trait of a variety',
    },
  ],
  sections: [
    {
      id: 'why-the-moisture-basis-matters',
      heading: 'Why the moisture basis is not optional',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'A figure without a moisture basis is not usable',
          text: "Water adds mass. A batch of kernels weighed fresh from the field at a higher moisture content will produce a heavier thousand kernel weight than the same kernels weighed after drying, even though nothing about the kernels' size, viability, or quality has changed. Any thousand kernel weight figure — in a report, a seed tag, or a research paper — is only interpretable alongside the moisture basis it was determined on. Comparing figures from different sources without checking that basis is a routine source of error.",
        },
        {
          type: 'paragraph',
          text: 'Because of this sensitivity, laboratories and seed testing programmes report thousand kernel weight adjusted to a stated moisture basis, and any calculation built on the figure — a seeding rate, a yield-component estimate — should carry that basis forward explicitly rather than treating the number as a bare constant.',
        },
      ],
    },
    {
      id: 'seeding-rate-calculation',
      heading: 'Use in seeding rate calculation',
      body: [
        {
          type: 'paragraph',
          text: 'Growers generally want to establish a target number of plants or seeds per unit area, but seed drills and planters meter seed by mass, not by count. Thousand kernel weight is the conversion factor that bridges the two: dividing a target seed count per unit area by one thousand and multiplying by the thousand kernel weight gives the mass of seed to plant per unit area. Because thousand kernel weight varies from one seed lot to the next — even within the same variety, season to season — this calculation is normally redone for each seed lot rather than reused from a previous season or a different lot.',
        },
      ],
    },
    {
      id: 'milling-yield-and-yield-components',
      heading: 'Milling yield estimation and yield-component analysis',
      body: [
        {
          type: 'paragraph',
          text: 'In milling, a heavier kernel tends to carry proportionally more endosperm relative to bran and germ, so thousand kernel weight is used, alongside other attributes such as test weight and kernel hardness, as one input to estimating potential milling yield. It is an estimate, not a direct measurement of yield, and it is most useful when read together with the other attributes that jointly describe milling potential rather than in isolation.',
        },
        {
          type: 'paragraph',
          text: 'In agronomy, yield is conventionally decomposed into components — plant density, number of heads or ears per plant, number of kernels per head or ear, and kernel weight — and thousand kernel weight supplies the last of these. Comparing thousand kernel weight across seasons or treatments is one way researchers and agronomists diagnose whether a yield difference arose from more or fewer kernels, or from kernels that filled more or less fully, rather than from some other cause.',
        },
      ],
    },
    {
      id: 'sources-of-variation',
      heading:
        'Why thousand kernel weight is a lot property, not a variety trait',
      body: [
        {
          type: 'paragraph',
          text: "It is tempting to treat thousand kernel weight as a fixed characteristic of a cultivar, the way a catalogue might list a typical range for a variety. In practice it varies considerably within a single cultivar depending on the season's growing conditions, the specific conditions during grain filling — temperature, water availability, and disease pressure late in the season all affect how fully kernels fill — and even the kernel's position within the ear or head, since kernels that develop later or at less favourable positions are commonly lighter than those that develop first. A published varietal range is a useful expectation, but the thousand kernel weight of any particular harvested lot is a property of that lot, measured on that lot's own sample, not a value that can be assumed from the variety name alone.",
        },
      ],
    },
  ],
  connections: [{ type: 'commodity-grade', slug: 'usda-wheat-grades' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar', 'yield'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Thousand kernel weight as a standard grain physical-quality parameter',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Use of thousand kernel weight in wheat and maize breeding and quality assessment',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical use of thousand kernel weight in seeding rate calculation',
    },
    {
      sourceId: 'usda',
      citedFor: 'Thousand kernel weight measurement and reporting conventions',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Typical thousand kernel weight ranges vary by species, cultivar, and growing region, and figures are only comparable when reported on the same moisture basis.',
  limitations: [
    'A thousand kernel weight figure reported without its moisture basis cannot be reliably compared or used in downstream calculations.',
    'Thousand kernel weight does not indicate germination, seed viability, or intrinsic quality and should not be substituted for a germination test.',
    'The figure varies with season, growing conditions, and kernel position on the plant, so it should be treated as a property of the specific sampled lot rather than a fixed varietal constant.',
    'This entry describes general principles; seed testing programmes and grain buyers may specify particular sampling and reporting conventions that apply to a given transaction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Thousand Kernel Weight: TKW Uses & Moisture Basis',
    description:
      'What thousand kernel weight (TKW) measures, why the moisture basis must always be stated, and how it is used for seeding rates and yield analysis.',
    keywords: [
      'thousand kernel weight',
      'TKW',
      'thousand grain weight',
      'seeding rate calculation',
      'yield components',
    ],
  },
  structuredData: { article: true },
};
