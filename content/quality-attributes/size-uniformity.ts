import type { QualityAttributeContent } from '@/types/content';

export const sizeUniformity: QualityAttributeContent = {
  id: 'quality-attribute-size-uniformity',
  slug: 'size-uniformity',
  contentType: 'quality-attribute',
  title: 'Size Uniformity',
  category: 'Quality attribute',
  subcategory: 'Cross-cutting',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'Not a measure of eating, nutritional, or internal quality — the near-universal misreading of this attribute. A lot of poor-quality fruit that has been sized to a narrow class is uniform and poor; uniformity says nothing about flavour, texture, or internal condition.',
    'Not a maturity signal — a small unit is not necessarily immature, and a large unit is not necessarily riper; size class and ripeness are governed by different factors and should not be read one from the other.',
    'Not a measure of cultivar quality or of growing skill on its own — a well-grown lot of a naturally variable cultivar can be less uniform than a poorly grown lot of a naturally consistent one.',
    'Not comparable across grading standards — different standards define size classes using different dimensions (diameter, mass, count per unit) and different boundaries, so a size class under one standard does not translate directly to a class under another.',
  ],
  measurementBasis:
    'As assessed against the size classes defined in the applicable grade or marketing standard',
  typicalUnits: [
    'mm (diameter)',
    'g (unit mass)',
    '% within a stated size class',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'dry-beans' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'sieve-analysis' }],
  summary:
    'Size uniformity is the degree to which the units in a lot fall within a stated size class — screened by sieve or screen for grain and seed, and by diameter, mass, or count for fresh produce. Its purpose is commercial and logistical rather than a measure of intrinsic quality, and confusing the two is the most common misreading of a size grade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Size uniformity describes how tightly the individual units of a lot — kernels, seeds, fruit, or tubers — cluster within a defined size class, rather than spreading across a wide range of sizes. For grain and seed it is assessed by passing a sample over sieves or screens of specified aperture and measuring what is retained at each size; for fresh produce it is assessed by diameter, unit mass, or count per standard package, depending on the commodity and the standard applied.',
    },
    {
      type: 'paragraph',
      text: 'Size uniformity exists as a distinct commercial factor because it serves a logistical purpose rather than telling anything about what is inside the unit. Uniform lots pack predictably into standard cartons and trays, run through automated graders and processing lines without needing constant adjustment, cook or dry more evenly because units of similar size respond to heat and moisture at similar rates, and meet the size codes that marketing standards define for the commercial classes buyers order by. None of this speaks to whether the units are of good eating or nutritional quality.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'How closely units in a lot fall within a stated size class',
    },
    {
      label: 'How it is assessed',
      value:
        'Sieve or screen aperture for grain and seed; diameter, mass, or count for fresh produce',
    },
    {
      label: 'Why it matters commercially',
      value:
        'Predictable packing, smoother processing-line handling, even cooking or drying, and compliance with marketing size codes',
    },
    {
      label: 'Not a quality measure',
      value:
        'Says nothing about eating, nutritional, or internal quality — a uniform lot can still be poor',
    },
    {
      label: 'Not a maturity signal',
      value:
        'A small unit is not necessarily immature, and a large unit is not necessarily riper',
    },
    {
      label: 'Cross-standard comparability',
      value:
        'Size classes are defined differently — by different dimensions and boundaries — across standards',
    },
    {
      label: 'Loss consequence',
      value:
        'Grading to a uniform size class generates out-grades, a significant and often overlooked source of post-harvest loss',
    },
  ],
  sections: [
    {
      id: 'what-size-uniformity-measures',
      heading: 'What size uniformity measures',
      body: [
        {
          type: 'paragraph',
          text: 'For grain and seed, size uniformity is determined by passing a sample over a stack of sieves or screens with specified aperture sizes and recording how the sample distributes across them. For fresh produce, it is determined by measuring individual units — most commonly by diameter for round fruit, by mass, or by counting how many units make up a standard package — and comparing that measurement against the size classes a grading or marketing standard defines.',
        },
        {
          type: 'paragraph',
          text: 'In both cases, the outcome is a description of the spread of the lot relative to a stated class, not a measurement of any single unit’s intrinsic properties. A lot can be perfectly uniform in size while its units vary widely in soundness, flavour, or condition.',
        },
      ],
    },
    {
      id: 'why-it-matters-commercially',
      heading: 'Why it matters commercially and logistically',
      body: [
        {
          type: 'list',
          items: [
            'Uniform lots pack predictably into standard cartons, trays, and containers, reducing wasted space and packing labour.',
            'Automated graders and processing lines are calibrated to a size range and run smoothly on uniform input; wide size variation forces manual sorting or line adjustment.',
            'Units of similar size cook, dry, or process at similar rates, which matters for consistent outcomes in drying, canning, and other processing.',
            'Marketing standards define commercial size codes and classes that buyers order against; meeting a stated class is often a contractual requirement independent of any other quality factor.',
          ],
        },
      ],
    },
    {
      id: 'the-quality-misreading',
      heading: 'The quality and maturity misreading',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title:
            'Uniform is not the same as good, and size is not the same as ripe',
          text: 'The most common misuse of a size-uniformity figure is reading it as a proxy for overall quality. A lot graded into a tight size class can still be poor in flavour, texture, or internal condition — size uniformity has not assessed any of those. Size is also not a reliable maturity signal: a small fruit is not necessarily immature, and a large fruit is not necessarily riper. Maturity is governed by separate physiological processes and should be assessed on its own terms.',
        },
        {
          type: 'paragraph',
          text: 'Size uniformity also does not reflect cultivar quality or growing skill by itself. Some cultivars are naturally more size-variable than others regardless of how well they are grown, and a well-managed crop of a variable cultivar can be less uniform than a poorly managed crop of a naturally consistent one.',
        },
      ],
    },
    {
      id: 'out-grades-and-loss',
      heading: 'Out-grades: a hidden source of post-harvest loss',
      body: [
        {
          type: 'paragraph',
          text: 'Sizing a lot into a defined class necessarily produces out-grades — units that fall above, below, or between the stated classes and do not meet the specification a buyer has ordered. Because size uniformity is enforced for logistical and commercial reasons rather than for any defect in the excluded units themselves, out-grades are frequently perfectly edible and sound produce that simply does not fit the size the market has organised itself around.',
        },
        {
          type: 'paragraph',
          text: 'This makes size grading a significant and often overlooked contributor to post-harvest food loss: volume is removed from the primary market not because it is defective, but because it does not fall within a stated size class. Where secondary markets, processing outlets, or donation channels exist for out-grade produce, this loss can be substantially reduced; where they do not, size-based exclusion becomes outright waste.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'maturity-index' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Size grading principles and post-harvest loss associated with out-of-specification produce',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU marketing standards defining produce size classes and codes',
    },
    {
      sourceId: 'usda',
      citedFor:
        'US grade standards using size as a commercial grading factor for grain and produce',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Extension guidance on sizing, grading, and packing-line uniformity requirements',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Size classes and the dimensions used to define them (diameter, mass, count, sieve aperture) vary by commodity and by which national or international marketing standard applies.',
  limitations: [
    'Size uniformity is a commercial and logistical attribute, not a measure of eating, nutritional, or internal quality.',
    'Size class is not a reliable indicator of maturity or ripeness for most fresh produce.',
    'Size classes and the dimensions used to define them differ between grading and marketing standards and are not directly comparable across them.',
    'This entry describes the attribute in general terms; the applicable grade standard or marketing specification sets the exact size classes and tolerances that apply to a given lot.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Size Uniformity: A Commercial Grading Factor',
    description:
      'What size uniformity measures in grain and produce grading, why it is not a quality or maturity signal, and how size grading contributes to post-harvest loss.',
    keywords: [
      'size uniformity',
      'size grading',
      'produce grading',
      'sieve analysis',
      'post-harvest loss',
      'size class',
    ],
  },
  structuredData: { article: true },
};
