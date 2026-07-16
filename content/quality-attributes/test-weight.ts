import type { QualityAttributeContent } from '@/types/content';

export const testWeight: QualityAttributeContent = {
  id: 'quality-attribute-test-weight',
  slug: 'test-weight',
  contentType: 'quality-attribute',
  title: 'Test Weight',
  alternativeNames: ['Hectolitre weight', 'Bushel weight', 'Specific weight'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'Not a reliable predictor of milling yield or flour extraction — the correlation between test weight and how much flour or meal a lot ultimately yields is weak and inconsistent, and reading a high test weight as a promise of high milling yield is the most common misuse of this attribute.',
    'Not a measure of protein content, soundness, or intrinsic quality on its own — a lot can carry a favourable test weight while still being low in protein, unsound, or otherwise compromised.',
    'Not directly comparable across measurement systems without a documented conversion — a figure expressed in kilograms per hectolitre and one expressed in pounds per bushel come from different apparatus and filling conventions, and a converted number is not the same thing as a number obtained by direct measurement in the target system.',
    'Not a food-safety indicator — a normal test weight says nothing about contamination, mycotoxins, or pest activity.',
  ],
  measurementBasis:
    'As-received, using the apparatus and filling procedure prescribed by the applicable standard',
  typicalUnits: ['kg/hL', 'lb/bu (pounds per bushel)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'oat-grain' },
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'test-weight-apparatus' }],
  summary:
    'Test weight is the mass of grain that fills a container of defined volume under a standardised filling procedure. It is one of the oldest and most widely used commercial grading factors for cereals, but it is not a measure of milling yield, protein, or intrinsic quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Test weight — also called hectolitre weight or bushel weight depending on the measurement system — is determined by pouring grain into a container of known volume in a prescribed way and weighing the fill. Because it can be measured in the field or at a receiving point in a matter of minutes with simple, inexpensive apparatus, it became one of the earliest formal grade-determining factors for cereals and remains embedded in national grade standards for most grains today, including the grade standards administered by the United States Department of Agriculture for wheat, corn, and barley.',
    },
    {
      type: 'paragraph',
      text: 'The reading reflects two things at once: the density of individual kernels and how efficiently kernels of a given size and shape pack together in the container. Grain that is plump, sound, and mature tends to pack well and test heavy; grain that is shrivelled, immature, frost-damaged, weathered, or otherwise physically degraded tends to leave more air space between kernels and test light. Test weight is therefore a genuinely useful, fast, and objective screen for physical condition — but it answers a narrower question than buyers sometimes assume, and the gap between what it measures and what it is popularly believed to predict is the central thing to understand about it.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Mass of grain filling a container of defined volume, under a prescribed procedure',
    },
    {
      label: 'Primary role',
      value: 'Grade-determining factor in national cereal grade standards',
      note: 'Included in the grade standards for wheat, corn, and barley, among others',
    },
    {
      label: 'Not a proxy for',
      value:
        'Milling yield, flour extraction, protein content, or overall intrinsic quality',
    },
    {
      label: 'Why it is used',
      value:
        'Fast, low-cost, objective, and sensitive to shrivelling, weathering, and immaturity',
    },
    {
      label: 'Procedure sensitivity',
      value:
        'Drop height, stroking method, and apparatus design all change the reading',
    },
    {
      label: 'Cross-system comparison',
      value:
        'kg/hL and lb/bu figures are not interchangeable without a documented conversion',
    },
    {
      label: 'Measured by',
      value:
        'A standardised test-weight apparatus (chondrometer-type equipment)',
    },
  ],
  sections: [
    {
      id: 'what-test-weight-measures',
      heading: 'What test weight actually measures',
      body: [
        {
          type: 'paragraph',
          text: 'Test weight is a packing density: the mass of grain occupying a fixed volume once it has been poured in according to a defined procedure. It is influenced by kernel density (how much mass is packed into each individual kernel) and by how well kernels of a given size, shape, and surface texture nest together with a minimum of air space between them. A lot of plump, uniformly sized, sound kernels typically packs more efficiently and weighs more per unit volume than a lot containing shrivelled, broken, or irregularly shaped kernels, even if the two lots have identical moisture content.',
        },
        {
          type: 'paragraph',
          text: 'Because both density and packing respond to growing-season stress, weathering, frost, disease, and immaturity, test weight functions as a broad, low-resolution indicator of physical soundness. It falls when grain has been shrivelled by drought or heat stress during grain fill, when it has sprouted or weathered in the field before harvest, or when it was harvested before full maturity. This is exactly why it earned a place in grade standards: it is a single number that correlates, loosely but usefully, with a cluster of physical conditions that buyers care about.',
        },
      ],
    },
    {
      id: 'why-it-is-a-grade-factor',
      heading: 'Why it is used as a grade factor',
      body: [
        {
          type: 'paragraph',
          text: 'Test weight earned its place in grading systems because it is cheap, fast, and objective compared with the alternative of assessing kernel condition by eye or by laboratory analysis. A grain buyer or grain inspector can determine it in the time it takes to fill and weigh a standard measure, without specialised chemistry or milling trials. That combination of speed and reproducibility, more than any deep causal link to end-use performance, is why it has persisted as a standard grading factor across many national systems for well over a century.',
        },
        {
          type: 'list',
          items: [
            'It is a grade-determining factor in the United States grade standards for wheat, corn, and barley, among other cereals.',
            'It is used analogously, though with local apparatus and units, in grading systems in many other producing and importing countries.',
            'It is often written into commercial contracts as a discount or premium factor, independent of whether the buyer is milling, feeding, or reselling the grain.',
          ],
        },
      ],
    },
    {
      id: 'the-milling-yield-misreading',
      heading: 'The milling-yield misreading',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Test weight is not a milling-yield guarantee',
          text: 'A common and consequential misreading treats a high test weight as a promise of high milling or flour-extraction yield. Research summarised by milling and grain-science bodies consistently finds the relationship between test weight and actual milling yield to be weak and inconsistent across lots, seasons, and cultivars. Two lots with the same test weight can mill very differently, and a lot with a lower test weight can sometimes out-mill one with a higher reading. Milling yield is properly assessed by milling trials or by other quality attributes, not inferred from test weight.',
        },
        {
          type: 'paragraph',
          text: 'The persistence of this misreading is understandable: test weight and milling yield are both influenced by kernel soundness, so they are correlated in a loose, population-level sense. But a population-level correlation is not a reliable basis for predicting the outcome of a single lot, and treating test weight as a milling-yield forecast overstates what the measurement can support.',
        },
      ],
    },
    {
      id: 'procedure-and-comparability',
      heading: 'Procedure sensitivity and cross-system comparability',
      body: [
        {
          type: 'paragraph',
          text: 'Because test weight is defined by a filling procedure rather than by an intrinsic physical constant, the reading is sensitive to exactly how the measurement is carried out. Drop height, the rate of filling, whether the surface is struck level and how, and the design of the apparatus itself all change the number obtained from the same grain. This is precisely why standards prescribe the apparatus and procedure in detail: without a fixed method, the figure would not be reproducible between operators or laboratories.',
        },
        {
          type: 'paragraph',
          text: 'This procedural dependence also means that figures produced under different national systems — commonly expressed in kilograms per hectolitre in much of the world and in pounds per bushel in the United States — are not simply the same quantity in different units. The apparatus, container volume, and filling convention differ between systems, so a converted figure carries additional uncertainty and is not equivalent to a value measured directly in the target system. This distinction matters in international grain trade, where contracts should state which system and apparatus the specified test weight refers to.',
        },
      ],
    },
  ],
  connections: [
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-barley-grades' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Test weight as a grade-determining factor in US cereal grade standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'General principles of grain physical quality assessment and grading',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Test weight measurement practice and its relationship to grain condition',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Research on the relationship between test weight and milling performance in wheat',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Test weight is used as a grade factor in most national cereal grading systems, but the apparatus, units, and precise procedure differ by country and standard.',
  limitations: [
    'Test weight reflects packing density and physical soundness, not milling yield, protein content, or overall intrinsic quality; treating it as a yield forecast is a documented misreading.',
    'The reading depends on the prescribed apparatus and filling procedure; measurements taken outside a standard method are not comparable to graded figures.',
    'Values obtained in one measurement system (for example kg/hL) are not directly interchangeable with another (for example lb/bu) without a documented, standard-specific conversion.',
    'This entry describes the attribute in general terms; the applicable grade standard or contract specification sets the exact classes, factors, and procedures that apply to a given lot.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Test Weight: What It Measures in Grain Grading',
    description:
      'What test weight measures in cereal grading, why it is not a milling-yield predictor, and why kg/hL and lb/bu figures are not directly comparable.',
    keywords: [
      'test weight',
      'hectolitre weight',
      'bushel weight',
      'grain grading',
      'milling yield',
    ],
  },
  structuredData: { article: true },
};
