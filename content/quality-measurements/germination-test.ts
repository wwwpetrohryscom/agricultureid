import type { QualityMeasurementContent } from '@/types/content';

export const germinationTest: QualityMeasurementContent = {
  id: 'quality-measurement-germination-test',
  slug: 'germination-test',
  contentType: 'quality-measurement',
  title: 'Germination Test',
  alternativeNames: [
    'Standard germination test',
    'Laboratory germination test',
  ],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [{ type: 'quality-attribute', slug: 'germination-capacity' }],
  principle:
    'A counted number of seeds is placed on a prescribed substrate under prescribed temperature, moisture, and light conditions for a prescribed period, and the seedlings produced are classified as normal, abnormal, or dead against defined evaluation criteria; germination capacity is reported as the percentage of normal seedlings.',
  sampleRequirement:
    'A counted working sample drawn from a representative sample of the seed lot, following the applicable seed-sampling procedure.',
  destructive: true,
  referenceMethodNote:
    'The substrate, the conditions, the duration, the replicate structure, and — critically — the seedling evaluation criteria are all prescribed by the applicable seed testing rules: the International Seed Testing Association internationally, or the Association of Official Seed Analysts in North America. Results are only comparable between laboratories following the same rules.',
  measurementLimitations: [
    'It measures germination under near-ideal prescribed conditions, and that is both the point of the test and its main limitation. A high laboratory germination result routinely overstates what the same seedlot will achieve in a cold, wet, compacted, or crusted seedbed, so it does not promise field emergence; the gap between the two is exactly what seed vigour testing exists to address (see Germination Capacity).',
    'It does not measure vigour. Two seedlots can show the same germination result while emerging very differently under stress and ageing very differently in storage; vigour is assessed by a separate suite of tests, not inferred from a germination percentage.',
    'The "normal seedling" classification is a judgement made against defined criteria, not a machine reading. Evaluation is the largest single source of variation between laboratories testing the same seedlot, which is exactly why the prescribed rules are detailed and prescriptive and why evaluators are trained and periodically checked for proficiency.',
    "Dormancy is not death, and an untreated test can report it as such. Freshly harvested seed of many species is naturally dormant and will not germinate within the standard test window despite being fully viable, so a test run on fresh seed without the prescribed dormancy-breaking treatment can badly understate the lot's true germination capacity.",
    'It is a snapshot, not a durable certificate. Germination capacity declines during storage at a rate governed chiefly by seed moisture and storage temperature, so a result describes the lot on the date it was tested and not necessarily on the date it is eventually sown.',
    'It is destructive and sample-based: the tested seeds are consumed by the procedure, and the result describes the lot only as well as the working sample was drawn and prepared.',
  ],
  summary:
    'The germination test places a counted sample of seeds under prescribed substrate, temperature, moisture, and light conditions for a prescribed period, then classifies the resulting seedlings and reports the proportion that are normal. It measures performance under near-ideal conditions, so it routinely overstates field emergence and does not measure vigour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The germination test evaluates a counted number of seeds from a lot by placing them on a substrate — commonly paper, sand, or soil, depending on the species and the applicable rules — held under prescribed temperature, moisture, and light conditions for a prescribed period. At the end of that period, every seedling produced is examined against defined evaluation criteria and classified as normal, abnormal, or dead; germination capacity is then reported as the percentage of seeds that produced normal seedlings, meaning seedlings with the structures needed to develop into a viable plant under favourable conditions.',
    },
    {
      type: 'paragraph',
      text: 'Because the substrate and conditions are deliberately close to ideal, the test gives a seedlot the best realistic opportunity to show what it can do, and the result is best read as a ceiling rather than a forecast. A real seedbed rarely offers conditions that favourable, so a high germination result does not promise the same proportion of seeds will establish as plants in the field. A second, distinct complication sits inside the test itself: freshly harvested seed of many species is naturally dormant, and a test run without the prescribed dormancy-breaking treatment can report a fully viable lot as failing, simply because the seed had not yet broken dormancy within the test window.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The proportion of a counted seed sample producing normal seedlings under prescribed substrate, temperature, moisture, and light conditions',
    },
    {
      label: 'Evaluation basis',
      value:
        'Each seedling is classified as normal, abnormal, or dead against defined criteria',
    },
    {
      label: 'Not field emergence',
      value:
        'Near-ideal test conditions routinely overstate real-seedbed performance',
      note: 'See Germination Capacity for the field-emergence gap',
    },
    {
      label: 'Not vigour',
      value:
        'A separate suite of tests addresses performance under stress and storage ageing',
    },
    {
      label: 'Dormancy risk',
      value:
        'Fresh, viable seed can fail an untreated test simply because it has not yet broken dormancy',
    },
    {
      label: 'Time-limited result',
      value:
        'Germination capacity declines in storage at a rate governed by seed moisture and temperature',
      note: 'A certificate describes the lot on its test date, not on the sowing date',
    },
    {
      label: 'Where the rules are set',
      value:
        'The International Seed Testing Association or the Association of Official Seed Analysts prescribes substrate, conditions, duration, and evaluation criteria',
    },
  ],
  sections: [
    {
      id: 'how-the-test-is-run',
      heading: 'How the test is run',
      body: [
        {
          type: 'paragraph',
          text: 'A counted number of seeds, drawn from a representative sample of the lot, is placed on a substrate appropriate to the species under conditions of temperature, moisture, and light specified by the applicable rules. The test runs for a prescribed period, sometimes with an interim count and a final count, after which every seedling — and every seed that failed to produce one — is examined and classified. The rules governing all of this, down to how a "normal" seedling is defined structurally for each species, are set by the seed testing authority whose rules are being followed, not by this entry.',
        },
        {
          type: 'paragraph',
          text: "Standardisation is what makes the result usable: because the substrate and conditions are fixed by the rules rather than left to the tester's judgement, results from different laboratories following the same rules are broadly comparable, which is what makes seed certification and contract specification possible in the first place.",
        },
      ],
    },
    {
      id: 'not-field-emergence-not-vigour',
      heading: 'Why a high result does not promise field emergence',
      body: [
        {
          type: 'paragraph',
          text: "The test is deliberately run under near-ideal conditions so that a seedlot gets the best realistic opportunity to demonstrate its germination capacity. That design choice is also the test's central limitation: a real seedbed is rarely that favourable, and cold soil, excess or deficient moisture, surface crusting, seedling diseases, and mechanical impedance all reduce the proportion of sown seeds that actually establish, none of which the standard test is designed to capture. A high laboratory result is therefore a ceiling on what the lot can do under favourable conditions, not a forecast of field performance.",
        },
        {
          type: 'paragraph',
          text: 'The germination test also does not measure vigour. Two lots can post the same germination percentage while performing very differently when sown into a stressed seedbed or after a period of storage; vigour testing exists precisely because germination capacity alone cannot answer that separate question, and it is carried out with different, deliberately more stressful test protocols.',
        },
      ],
    },
    {
      id: 'evaluation-is-a-judgement',
      heading: 'A "normal seedling" is a judgement, not a machine reading',
      body: [
        {
          type: 'paragraph',
          text: 'Classifying a seedling as normal, abnormal, or dead requires an evaluator to compare what grew against defined structural criteria — the presence and condition of the root system, the shoot, and other essential structures, depending on species. This is a trained human judgement, not an automated measurement, and it is the largest single source of disagreement between laboratories testing splits of the same seedlot. It is exactly why the applicable rules are written in prescriptive detail and why evaluators are trained against reference material and periodically checked for proficiency: the rules exist to bound a source of variation that would otherwise be substantial.',
        },
      ],
    },
    {
      id: 'dormancy-and-the-storage-clock',
      heading: 'Dormancy is not death, and the result has a shelf life',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title:
            'A dormant seed can fail the test while remaining fully viable',
          text: 'Freshly harvested seed of many species carries natural dormancy and will not germinate within the standard test window even though it is fully capable of germinating later. Testing fresh seed without the dormancy-breaking treatment the applicable rules prescribe for that species can badly understate its true germination capacity, reporting sound seed as though it had failed.',
        },
        {
          type: 'paragraph',
          text: "Germination capacity also declines during storage, at a rate driven chiefly by the seed's moisture content and the temperature it is held at rather than by a fixed calendar interval. A certificate therefore describes the lot as it stood on its test date; a lot intended for a critical use such as sowing is normally re-tested closer to that use rather than relied on indefinitely.",
        },
      ],
    },
  ],
  connections: [{ type: 'quality-attribute', slug: 'germination-capacity' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Seed germination testing principles and post-harvest handling effects on seed quality',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Seed certification and germination testing context in the United States',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Malting barley germination requirements and seed testing practice',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat and maize seed quality and germination research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Seed testing methodology is broadly standardised by international and regional rules, but which rules apply, and any minimum germination result required, are set by the applicable seed certification scheme or contract and vary by jurisdiction and commodity.',
  limitations: [
    'This entry names no germination percentages, temperatures, durations, or seed counts. The applicable seed certification scheme or the seed testing rules in force prescribe these, and results from different prescribed procedures are not interchangeable.',
    'This entry does not describe the operating steps for running a specific germination test; consult the applicable seed testing rules and an accredited testing laboratory.',
    'The test is described here for seed germination generally; specific substrate, dormancy-breaking treatment, and evaluation criteria differ by species and are set by the applicable rules for that species.',
    'A germination result does not establish varietal purity, seed-borne pathogen status, or vigour; those require separate, dedicated tests.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Germination Test: Lab Result vs Field Emergence',
    description:
      'The germination test reports normal seedlings under near-ideal conditions. It overstates field emergence and does not measure seed vigour.',
    keywords: [
      'germination test',
      'seed germination testing',
      'ISTA germination rules',
      'seed vigour vs germination',
      'seed testing method',
    ],
  },
  structuredData: { article: true },
};
