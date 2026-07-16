import type { QualityAttributeContent } from '@/types/content';

export const fallingNumber: QualityAttributeContent = {
  id: 'quality-attribute-falling-number',
  slug: 'falling-number',
  contentType: 'quality-attribute',
  title: 'Falling Number',
  alternativeNames: ['Hagberg falling number', 'Hagberg-Perten falling number'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'composite',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a direct measurement of alpha-amylase activity: the test measures how fast a stirrer falls through a heated starch paste, and enzyme activity is inferred from that viscosity change. Other things that alter starch pasting — damaged starch from harsh milling or drying, or the fineness to which the sample was ground — move the number as well, independent of enzyme activity.',
    'Not a general soundness or overall quality index: it responds specifically to starch-degrading enzyme activity and does not speak to protein content, moisture, foreign material, or most other quality attributes.',
    'Not a protein or gluten measure, even though it is most consequential for bread and noodle wheat, where gluten quality is judged separately.',
    'Not a grade-determining factor as such in most standards; it is typically applied as a contract or specification factor negotiated between buyer and seller rather than a numbered grading-schedule factor.',
  ],
  typicalUnits: ['seconds'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'triticale-grain' },
    { type: 'commodity', slug: 'barley-grain' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'falling-number-test' }],
  summary:
    'The Hagberg falling number is the time, in seconds, for a stirrer to fall through a heated aqueous flour or meal suspension — an indirect measure of alpha-amylase activity. High enzyme activity thins the starch paste and makes the stirrer fall faster, so a LOW falling number means HIGH enzyme activity, the inverse of what the name suggests.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The falling number test measures how long it takes a stirrer to fall a fixed distance through a hot, stirred suspension of ground grain and water, after the suspension has first been mechanically stirred and then allowed to gel on heating. The test works because alpha-amylase, an enzyme that breaks down starch, thins the paste that forms as the suspension heats: the more active the enzyme, the less viscous the paste, and the faster the stirrer falls through it. The falling number is therefore an indirect measurement — it reports a physical time, from which enzyme activity is inferred, not the enzyme activity itself.',
    },
    {
      type: 'paragraph',
      text: 'This produces the single most common misreading of the test: the relationship between the number and enzyme activity runs backwards from what intuition suggests. A LOW falling number means HIGH alpha-amylase activity — the stirrer fell quickly because the enzyme thinned the paste — while a HIGH falling number means LOW enzyme activity and a stiffer, less-degraded paste. Anyone reading a falling number result without holding that inversion in mind will draw the wrong conclusion about the grain’s condition.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Time in seconds for a stirrer to fall through a heated aqueous flour or meal suspension',
    },
    {
      label: 'What it infers',
      value:
        'Alpha-amylase enzyme activity, from the viscosity of the starch paste that forms on heating',
    },
    {
      label: 'The counterintuitive part',
      value:
        'A LOW falling number means HIGH enzyme activity; a HIGH falling number means LOW enzyme activity',
      note: 'The inverse relationship is the most common misreading of this test',
    },
    {
      label: 'Practical purpose',
      value:
        'Detects pre-harvest sprouting and late-maturity alpha-amylase activity that degrades starch in dough',
    },
    {
      label: 'Method sensitivity',
      value:
        'Sensitive to sample grinding fineness, moisture, and instrument calibration',
    },
    {
      label: 'Altitude sensitivity',
      value:
        'The test runs at boiling point, which falls with elevation, so results at altitude need a documented correction',
    },
    {
      label: 'Grade status',
      value:
        'Typically a contract or specification factor rather than a numbered grading-schedule factor',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How the test works',
      body: [
        {
          type: 'paragraph',
          text: 'A sample of ground grain is mixed with water in a viscometer tube and placed in a boiling-water bath. The mixture is stirred mechanically as it heats, which gelatinises the starch and forms a paste. At a defined point the stirrer is released and allowed to fall under its own weight through the paste; the falling number is the total elapsed time, from the start of stirring, for the stirrer to fall a fixed distance. A thinner paste offers less resistance and the stirrer falls faster; a thicker, more intact starch paste offers more resistance and the stirrer falls slower.',
        },
        {
          type: 'paragraph',
          text: 'Alpha-amylase is the enzyme responsible for thinning the paste. Sound, undamaged grain has relatively little active alpha-amylase and forms a stiff paste. Grain in which alpha-amylase has become active — most commonly because the grain sprouted before or shortly after harvest, or matured late under wet conditions — forms a paste that thins rapidly as the enzyme breaks down starch molecules during the heating step itself.',
        },
      ],
    },
    {
      id: 'inverse-relationship',
      heading: 'Reading the number the right way round',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'Low number, high enzyme activity',
          text: 'Because a faster stirrer fall means a thinner paste, and a thinner paste means more active alpha-amylase, a LOW falling number indicates HIGH alpha-amylase activity and greater starch degradation. A HIGH falling number indicates LOW enzyme activity and a sounder starch. This is the inverse of what the word "falling" might suggest to a first-time reader, and misreading it in either direction leads to the wrong conclusion about the grain.',
        },
        {
          type: 'paragraph',
          text: 'The practical stake is bread and noodle quality. Alpha-amylase activity from pre-harvest sprouting or late-maturity conditions degrades starch within the dough during baking or processing, producing sticky, poorly structured bread crumb or gummy noodles, even when the grain looks visually sound. The falling number test exists specifically to catch this invisible starch damage before the grain reaches a mill or bakery.',
        },
      ],
    },
    {
      id: 'what-it-does-not-measure',
      heading: 'What the result does and does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'The falling number is an inference from paste viscosity, not a direct enzyme assay. Anything else that changes how the starch paste behaves under heat will also move the number, whether or not alpha-amylase activity has actually changed. Starch that has been mechanically damaged — by harsh milling, dehulling, or over-aggressive drying — pastes differently than intact starch. The fineness to which the sample was ground before testing also affects how quickly and evenly the paste forms.',
        },
        {
          type: 'list',
          items: [
            'Falling number is not a direct alpha-amylase assay; it infers enzyme activity from paste viscosity and can be moved by non-enzymatic factors.',
            'It is not a general soundness or quality index and does not substitute for testing protein, moisture, or foreign material separately.',
            'It is not a protein or gluten strength measure, even on wheat destined for baking.',
            'It is typically a contract or specification factor negotiated between buyer and seller, not a numbered factor in every commodity grading schedule.',
          ],
        },
      ],
    },
    {
      id: 'method-sensitivity',
      heading: 'The test is sensitive to how it is run',
      body: [
        {
          type: 'paragraph',
          text: 'Because the falling number test relies on precise timing of a physical event in a heated liquid, it is sensitive to details of execution. Sample grinding fineness, sample moisture, and instrument calibration all influence the result and must be controlled for results to be comparable between laboratories or over time. Altitude introduces a further, less obvious effect: the test runs the sample at the boiling point of water, and boiling point falls as elevation rises, so a test run at high elevation reaches a lower temperature than the same test at sea level under otherwise identical conditions. Laboratories operating at altitude apply a documented correction for this effect; results from different elevations should not be compared without accounting for it.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'starch-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-storage' }],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor:
        'Hagberg falling number testing and its role in UK milling wheat contracts',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Falling number use in United States wheat marketing and specifications',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Alpha-amylase activity, pre-harvest sprouting, and wheat processing quality',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest sprout damage and its effect on cereal processing quality',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The test principle is standardised, but altitude corrections, calibration practice, and contract use of the result vary by laboratory and market.',
  limitations: [
    'This entry states no falling number values or thresholds. Any applicable specification is set by the buyer’s milling, baking, or trade contract.',
    'The falling number infers enzyme activity from paste viscosity; it does not directly assay alpha-amylase and can be affected by starch damage or grinding fineness unrelated to enzyme activity.',
    'Results are sensitive to sample grinding, moisture, instrument calibration, and testing altitude; uncorrected comparisons across laboratories or elevations can be misleading.',
    'A falling number result does not substitute for separate testing of protein, moisture, or other quality attributes relevant to end use.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Falling Number: What Hagberg Testing Detects',
    description:
      'The Hagberg falling number infers alpha-amylase activity from paste viscosity. Why a low number means high enzyme activity, and its method sensitivities.',
    keywords: [
      'falling number',
      'Hagberg falling number',
      'alpha-amylase activity',
      'pre-harvest sprouting',
      'wheat quality testing',
    ],
  },
  structuredData: { article: true },
};
