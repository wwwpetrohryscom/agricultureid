import type { QualityMeasurementContent } from '@/types/content';

export const penetrometer: QualityMeasurementContent = {
  id: 'quality-measurement-penetrometer',
  slug: 'penetrometer',
  contentType: 'quality-measurement',
  title: 'Penetrometer',
  alternativeNames: ['Fruit pressure tester', 'Firmness tester'],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'destructive',
  measures: [{ type: 'quality-attribute', slug: 'firmness' }],
  principle:
    'A probe of a specified diameter is driven into the pared flesh of the commodity at a controlled rate to a specified depth, and the maximum force recorded during penetration is taken as the firmness reading.',
  sampleRequirement:
    'A stated number of fruit drawn from the lot, held at an equilibrated and stated temperature, with the skin pared away at defined positions on each fruit before the probe is applied. The fruit count, the equilibration temperature, and the paring positions are set by the applicable commodity maturity or quality protocol, not by the instrument.',
  destructive: true,
  referenceMethodNote:
    'Motorised penetrometer stands and laboratory texture analysers, which fix the push rate and entry angle, are used as a more controlled reference against which hand-held-instrument readings are checked.',
  measurementLimitations: [
    'The probe diameter and penetration depth are part of the result, not incidental detail: a reading taken with a different probe or driven to a different depth is a different quantity, not a comparable one, and a firmness figure quoted without its probe size and depth is unusable.',
    "Hand-held and mounted instruments disagree: a hand-held unit depends on the operator's push rate and entry angle, and operator-to-operator variation is often large enough to swamp the real differences between lots, which is why motorised stands and texture analysers exist.",
    'The reading is temperature-dependent: cold flesh reads firmer than the same flesh at a warmer, equilibrated temperature, so fruit pulled straight from cold storage and tested immediately reads high, and a lot can be judged storable when it is not.',
    'It destroys the fruit tested, so the lot figure rests on a sacrificed sample; firmness varies naturally across a population, and low sample numbers give wide confidence intervals around the reported figure.',
    'It reads only the tissue directly under the probe at the spot chosen: firmness varies around a single fruit — sun side versus shade side, cheek versus shoulder — and between fruit in the same lot, far more than most sampling plans acknowledge.',
    'It measures resistance to a probe, not eating texture: mealiness, crispness, juiciness, and woolliness are texture failures that a maximum-force reading does not see, so a fruit can read acceptably firm on a penetrometer and still eat badly (cross-reference firmness).',
  ],
  summary:
    'A penetrometer, also called a fruit pressure tester or firmness tester, measures firmness by driving a probe of a specified diameter into pared flesh to a specified depth and recording the peak force. It is a destructive, instrument-dependent measurement: the probe geometry, penetration depth, and fruit temperature are all part of the result, and the reading tells you about resistance to a probe, not about eating texture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A penetrometer determines firmness mechanically. The skin is pared away at a defined position on the fruit, a probe of a specified diameter is driven into the exposed flesh at a controlled rate to a specified depth, and the maximum force recorded during that penetration is reported as the firmness value. The same instrument family is sold and referred to as a fruit pressure tester or a firmness tester, and appears both as a simple hand-held gauge and as a motorised bench-mounted stand.',
    },
    {
      type: 'paragraph',
      text: "Because the method is destructive — the fruit tested cannot subsequently be sold or re-measured — a penetrometer reading is always a sample-based estimate of a lot's firmness, not a census of it. The result is also inseparable from the conditions under which it was taken: the probe diameter, the penetration depth, and the fruit's temperature at the time of the test each change the number obtained from otherwise identical flesh, which is why those elements are prescribed by the applicable commodity maturity or quality protocol rather than left to the operator.",
    },
  ],
  keyFacts: [
    {
      label: 'Also called',
      value: 'Fruit pressure tester, firmness tester',
    },
    {
      label: 'What it measures',
      value: 'Firmness — peak force to drive a probe into pared flesh',
    },
    {
      label: 'Method type',
      value: 'Destructive, instrumental',
    },
    {
      label: 'Result depends on',
      value: 'Probe diameter, penetration depth, and fruit temperature',
      note: 'All prescribed by the applicable commodity maturity or quality protocol, not by this entry',
    },
    {
      label: 'Hand-held vs mounted',
      value:
        'Motorised stands and texture analysers control push rate and angle; hand-held units depend on the operator',
    },
    {
      label: 'Does not measure',
      value:
        'Eating texture — mealiness, crispness, juiciness, and woolliness (cross-reference firmness)',
    },
  ],
  sections: [
    {
      id: 'how-the-reading-is-taken',
      heading: 'How a penetrometer reading is taken',
      body: [
        {
          type: 'paragraph',
          text: 'The skin is removed at a defined spot to expose flesh, and the probe tip is driven into that flesh at a controlled speed until it reaches a specified depth, or until the flesh yields, depending on the instrument. The peak force registered during that travel is the reported figure. Because the probe engages a defined area of flesh to a defined depth, both the diameter of the probe and the depth it is driven to change how much resistance is encountered — a wider probe or a deeper penetration reads differently against the same flesh, even from the same fruit.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A reading without its method is not a comparable figure',
          text: 'Probe diameter, penetration depth, and fruit temperature are part of the definition of a penetrometer result, not optional context. Comparing figures produced under different probe sizes, depths, or fruit temperatures as though they sat on one common scale is a routine and consequential misreading of the method.',
        },
      ],
    },
    {
      id: 'hand-held-versus-mounted',
      heading: 'Hand-held instruments versus motorised stands',
      body: [
        {
          type: 'paragraph',
          text: "A hand-held penetrometer is pushed into the fruit by the operator, which means the push rate and the angle at which the probe enters the flesh are set by that person's technique rather than by the instrument. Because both the rate of loading and the entry angle influence the peak force recorded, operator-to-operator variation on a hand-held unit is often large enough to obscure real differences between lots, and even the same operator can produce drifting readings over a testing session as technique fatigues.",
        },
        {
          type: 'paragraph',
          text: 'Motorised penetrometer stands and laboratory texture analysers were developed specifically to remove this source of variation: the probe is driven at a fixed, controlled rate along a fixed axis, so the reading reflects the flesh rather than the operator. Where a firmness programme needs figures that are comparable across operators, testing sessions, or laboratories, a mounted instrument is the more defensible choice, and hand-held figures should be treated as a rougher field estimate rather than a laboratory-grade result.',
        },
      ],
    },
    {
      id: 'temperature-and-destructive-sampling',
      heading: 'Temperature sensitivity and the cost of a destructive test',
      body: [
        {
          type: 'list',
          items: [
            'Cold flesh mechanically resists penetration more than the same flesh at a warmer temperature, independent of any real change in ripeness, so fruit tested straight out of cold storage reads firmer than it will once it has equilibrated to handling or retail temperature.',
            "Because the fruit tested is destroyed, every reading comes from a sample that can never be re-measured or sold; the lot's reported firmness is only as reliable as the number of fruit sampled and how representative they were of the whole lot.",
            'Firmness varies naturally within a single fruit — between the sun-exposed and shaded sides, and between the cheek and the shoulder — so where on the fruit the probe is applied is itself a source of variation the sampling protocol must control for.',
            'Firmness also varies between fruit in the same lot; a small destructive sample gives a wide confidence interval around the reported figure, which is a real constraint on how finely two lots can be distinguished from a limited number of readings.',
          ],
        },
      ],
    },
    {
      id: 'what-a-firmness-reading-misses',
      heading: 'What a penetrometer reading does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'A penetrometer measures resistance to a probe — a mechanical property of the flesh at the point of contact — and nothing else. Eating texture is a broader sensory experience that includes mealiness, crispness, juiciness, and woolliness, all of which are texture failures a maximum-force reading is not built to detect. A fruit can register an acceptable or even high firmness value on a penetrometer and still be mealy or dry to eat, because those defects change how tissue breaks down in the mouth in ways a single peak-force number does not capture.',
        },
        {
          type: 'paragraph',
          text: 'This is why firmness readings are treated as a proxy for ripeness and storage condition rather than as a direct verdict on eating quality, and why a penetrometer result is read alongside, not instead of, other quality attributes and, where it matters commercially, direct sensory evaluation.',
        },
      ],
    },
  ],
  connections: [
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Penetrometer methodology and firmness measurement research in post-harvest fruit physiology',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Firmness testing practice, probe selection, and comparability limitations in produce handling',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Produce quality guidance distinguishing penetrometer firmness from eating texture',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality assessment principles for fresh fruit, including firmness testing',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The mechanical principle is universal; probe geometry, penetration depth, sample size, and fruit temperature are set by the applicable commodity maturity or quality protocol and vary by commodity, cultivar, and market.',
  limitations: [
    'This entry describes the general method and where it misleads; the specific probe, depth, sample size, and temperature to use for a given commodity are set by the applicable maturity or quality protocol, buyer specification, or extension guidance, not by this page.',
    'A penetrometer test consumes the fruit tested; where a non-destructive estimate is preferred for routine screening, near-infrared spectroscopy is used instead, though it is calibrated against destructive penetrometer or texture-analyser readings rather than replacing them outright.',
    'Firmness targets and interpretation are cultivar-specific; a reading that indicates good condition in one cultivar can indicate over- or under-maturity in another, and this entry does not set commodity- or cultivar-specific figures.',
    'Reproducibility across operators and laboratories depends on which instrument type and protocol were used; figures from hand-held and motorised instruments should not be pooled without accounting for that difference.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Penetrometer: How Fruit Firmness Is Measured',
    description:
      'A penetrometer drives a probe into pared flesh to record peak force — probe size, depth, and temperature change the reading, not eating texture.',
    keywords: [
      'penetrometer',
      'fruit firmness testing',
      'fruit pressure tester',
      'firmness measurement',
      'post-harvest quality',
    ],
  },
  structuredData: { article: true },
};
