import type { QualityMeasurementContent } from '@/types/content';

export const fallingNumberTest: QualityMeasurementContent = {
  id: 'quality-measurement-falling-number-test',
  slug: 'falling-number-test',
  contentType: 'quality-measurement',
  title: 'Falling Number Test',
  alternativeNames: ['Hagberg falling number test', 'Hagberg-Perten test'],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [{ type: 'quality-attribute', slug: 'falling-number' }],
  principle:
    'A slurry of ground meal and water in a viscometer tube is held in a boiling water bath and mechanically stirred as it heats, gelatinising the starch into a paste; at a defined point the stirrer is released and allowed to fall through the paste under its own weight, and the result is the total elapsed time, in seconds, from the start of the procedure until the stirrer reaches the bottom of the tube.',
  sampleRequirement:
    'A ground sub-sample prepared to the grind fineness the applicable official method prescribes, drawn from a representative sample of the lot.',
  destructive: true,
  referenceMethodNote:
    "The apparatus, the meal mass, the grind, the water volume, the bath, and the stirring sequence are all prescribed by the applicable official method — an ICC, ISO, or AACC procedure — and the test is run in duplicate against that method's stated tolerance for agreement.",
  measurementLimitations: [
    'The test runs at the boiling point of water, and boiling point falls with elevation, so the same sample gives a different falling number at a high-altitude laboratory than it would at sea level unless the prescribed altitude correction is applied. A laboratory that has never applied a correction and never noticed is a real and documented failure mode, not a hypothetical one.',
    'It infers enzyme activity from paste viscosity, so anything else that changes how the paste forms moves the number independent of sprouting. Starch damaged by harsh grinding, the fineness the sample was ground to, sample moisture, and cultivar differences in starch-pasting behaviour all shift the result without any change in alpha-amylase activity.',
    "It is a single number over an entire sample and cannot see how sprout damage is distributed within a lot. A small proportion of heavily sprouted grain can drag the number down for the whole consignment, and blending sound and damaged grain is used commercially to manage this — but the relationship is not linear, so a blend's falling number cannot be predicted by averaging the falling numbers of the lots that went into it.",
    "It is highly sensitive to procedure and to apparatus condition. Duplicate results that disagree beyond the applicable method's stated tolerance mean the run is invalid and must be repeated, not that the true value lies somewhere between the two readings.",
    "It says nothing about protein content, gluten strength, or any other aspect of baking or processing quality. It detects one specific fault — starch degradation from alpha-amylase activity — and a sound falling number result does not imply anything about the grain's protein or gluten (see Protein Content).",
    'It is destructive, requires a laboratory and a heated water bath, and takes long enough to run that it cannot support an on-the-spot decision at a weighbridge or intake point; it is a laboratory specification test, not a rapid screening tool.',
  ],
  summary:
    "The falling number test times how quickly a stirrer falls through a hot paste made from ground grain and water, reported as total elapsed seconds. Because active alpha-amylase thins the paste, a LOWER falling number means MORE enzyme activity and greater sprout damage — the inverse of what the name suggests, and the test's most common misreading.",
  introduction: [
    {
      type: 'paragraph',
      text: 'The falling number test measures how long it takes a stirrer to fall a fixed distance through a hot, previously stirred suspension of ground grain and water. A slurry of meal and water is placed in a viscometer tube and lowered into a boiling water bath; as the mixture heats, it is mechanically stirred so the starch it contains gelatinises into a paste. At a defined point in the procedure the stirrer is released and allowed to fall freely through the paste under its own weight, and the falling number is the total time, in seconds, from the start of the procedure until the stirrer reaches the bottom of the tube.',
    },
    {
      type: 'paragraph',
      text: 'The mechanism behind the result is straightforward, but reading it correctly is not. Alpha-amylase is an enzyme that liquefies the starch paste as it forms: the more active the enzyme, the thinner the paste, and the faster the stirrer falls through it. A LOWER falling number therefore means MORE alpha-amylase activity and, typically, worse sprout damage — a HIGHER number means LESS enzyme activity and sounder starch. This runs opposite to what the word "falling" suggests to a first-time reader, and it is the standard misreading of the test: treating a low number as a good result rather than as the warning it actually is.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Total elapsed time, in seconds, for a released stirrer to fall through a heated meal-and-water paste',
    },
    {
      label: 'What it infers',
      value:
        'Alpha-amylase enzyme activity, from how much the enzyme has thinned the starch paste',
    },
    {
      label: 'The inversion',
      value:
        'A LOWER falling number means MORE enzyme activity and greater sprout damage',
      note: "The opposite reading is the test's most common misinterpretation",
    },
    {
      label: 'Altitude sensitivity',
      value:
        'The test runs at the boiling point of water, which falls with elevation, so results need a documented altitude correction',
    },
    {
      label: 'Reference conditions',
      value:
        'Apparatus, meal mass, grind, water volume, bath, and stirring sequence are set by the applicable official method',
      note: "Run in duplicate against that method's stated tolerance",
    },
    {
      label: 'Destructive and laboratory-bound',
      value:
        'Consumes the sample and requires a heated water bath; not a test that can be run at a weighbridge',
    },
    {
      label: 'What it does not tell you',
      value:
        'Nothing about protein content, gluten strength, or other baking-quality attributes',
    },
  ],
  sections: [
    {
      id: 'how-the-test-works',
      heading: 'How the test works',
      body: [
        {
          type: 'paragraph',
          text: "A weighed portion of ground meal is mixed with a prescribed volume of water directly in the viscometer tube used for the test. The tube is placed in a boiling water bath, and a stirrer within the tube is driven mechanically through the mixture as it heats. The heat and the mechanical action together gelatinise the starch, converting the slurry into a paste. At a fixed point in the sequence the stirrer's mechanical drive disengages and the stirrer is allowed to fall through the paste under gravity alone; the falling number is the total time, from the very start of the procedure, until the stirrer completes that fall.",
        },
        {
          type: 'paragraph',
          text: "Alpha-amylase is the enzyme responsible for thinning the paste. Sound, unsprouted grain contains little active alpha-amylase and forms a stiff, viscous paste that resists the stirrer's fall. Grain in which the enzyme has become active — most commonly because the grain sprouted before or shortly after harvest — forms a paste that thins as the enzyme breaks down starch molecules during the heating step itself, and the stirrer falls through it faster.",
        },
      ],
    },
    {
      id: 'reading-the-number',
      heading: 'Reading the number the right way round',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'A low number is the warning, not the good result',
          text: 'Because a faster fall means a thinner paste, and a thinner paste means more active alpha-amylase, a LOW falling number indicates HIGH enzyme activity and greater starch degradation. A HIGH falling number indicates LOW enzyme activity and sounder starch. Reading this backwards — treating a low number as reassuring — is the single most common misinterpretation of the test, and it runs directly opposite to the correct conclusion.',
        },
        {
          type: 'paragraph',
          text: 'The practical stake is baking and processing performance. Alpha-amylase activity from pre-harvest sprouting degrades starch within the dough during baking, producing sticky, poorly structured bread crumb or gummy noodles, even when the grain looks entirely sound by eye. The falling number test exists specifically to catch this invisible starch damage before the grain reaches a mill or bakery.',
        },
      ],
    },
    {
      id: 'altitude-and-procedure-sensitivity',
      heading: 'Altitude and procedural sensitivity',
      body: [
        {
          type: 'paragraph',
          text: 'The test relies on precise timing of a physical event in boiling water, which makes it sensitive to details of execution that are easy to overlook. Because the procedure runs at the boiling point of water, and boiling point falls as elevation rises, the same sample reaches a lower temperature in a high-altitude laboratory than in one at sea level under an otherwise identical procedure — and a lower temperature changes how the starch gelatinises and, in turn, the falling number obtained. Laboratories operating at altitude apply a documented correction for this effect; a laboratory that has never applied one, and never checked whether it should, can be reporting numbers that are systematically wrong without anyone noticing.',
        },
        {
          type: 'paragraph',
          text: 'The applicable official method also sets a tolerance for how closely duplicate runs on the same sample must agree. When duplicates disagree beyond that tolerance, the correct response is to treat the run as invalid and repeat it — not to average the two readings and report the mean as if it were a valid result.',
        },
      ],
    },
    {
      id: 'a-lot-average-not-a-map',
      heading: 'One number cannot show where the damage is',
      body: [
        {
          type: 'paragraph',
          text: "The falling number is a single figure describing an entire tested sample; it cannot show how sprout damage is distributed through the lot the sample was drawn from. A small proportion of heavily sprouted, low-falling-number grain mixed into an otherwise sound lot can pull the whole sample's result down, which is exactly why blending sound and damaged grain is used commercially to bring a lot back toward an acceptable range. That relationship, however, is not a simple average: the falling number of a blend cannot be reliably predicted by averaging the falling numbers of the components that went into it, because the test measures a nonlinear property of the mixed paste rather than a simple additive quantity.",
        },
        {
          type: 'list',
          items: [
            'The falling number test does not report protein content, gluten strength, or any other baking-quality attribute; a sound result says only that starch degradation from alpha-amylase activity was not detected (see Protein Content).',
            'It is destructive, requires laboratory apparatus and a heated water bath, and is too slow to support an on-the-spot intake decision — it is a specification test, not a rapid field screen.',
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'falling-number' },
    { type: 'quality-attribute', slug: 'protein-content' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor:
        'Hagberg falling number testing and its role in UK milling wheat contracts and altitude correction practice',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Falling number use in United States wheat marketing and specifications',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Alpha-amylase activity, pre-harvest sprouting, and cereal processing quality',
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
    'Global. The test principle is standardised internationally, but the specific official method applied, altitude-correction practice, and contract use of the result vary by laboratory, market, and jurisdiction.',
  limitations: [
    "This entry names no falling number values, temperatures, sample masses, or contract minimums. The applicable official method sets the procedural detail, and the buyer's milling, baking, or trade contract sets any acceptance threshold.",
    "This entry does not describe the operating steps for any specific falling number apparatus; consult the applicable official method and the instrument manufacturer's documentation.",
    'The falling number test is described here as a laboratory specification test; it does not cover rapid field or intake screening, which relies on other methods entirely.',
    'Altitude-correction practice and duplicate-tolerance rules are described qualitatively here; the specific correction and tolerance are set by the official method in force.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Falling Number Test: Reading the Inversion',
    description:
      "The falling number test times a stirrer's fall through hot grain paste. A lower number means more enzyme activity and worse sprout damage.",
    keywords: [
      'falling number test',
      'Hagberg falling number',
      'alpha-amylase test',
      'pre-harvest sprouting test',
      'grain quality testing',
    ],
  },
  structuredData: { article: true },
};
