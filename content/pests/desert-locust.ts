import type { PestContent } from '@/types/content';

export const desertLocust: PestContent = {
  id: 'pest-desert-locust',
  slug: 'desert-locust',
  contentType: 'pest',
  title: 'Desert Locust',
  scientificName: 'Schistocerca gregaria (Orthoptera: Acrididae)',
  alternativeNames: ['Locust'],
  category: 'Insect pest',
  subcategory: 'Swarming grasshopper',
  pestGroup: 'Insect — Orthoptera',
  summary:
    'Desert locust is a large grasshopper capable of shifting from solitary to swarming behaviour, and under favourable breeding conditions can form vast, highly mobile swarms that devastate crops and pasture across large areas.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Desert locust is native to arid and semi-arid regions of Africa, the Middle East, and South Asia. It is notable for phase polyphenism: at low population density individuals behave and even look different from those at high density, where they become gregarious and form cohesive marching bands and flying swarms.',
    },
    {
      type: 'paragraph',
      text: 'Under favourable breeding conditions, typically when rainfall produces green vegetation in normally dry breeding areas, populations can increase rapidly and shift toward the gregarious phase. Resulting swarms are highly mobile, can cross national borders, and are capable of consuming large quantities of vegetation, including many food crops, making desert locust one of the most significant transboundary migratory pests and a long-standing threat to food security in affected regions.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Orthoptera, family Acrididae' },
    { label: 'Feeding', value: 'Chewing a very wide range of plant foliage' },
    {
      label: 'Key concern',
      value:
        'Swarms can travel long distances and strip vegetation over large areas',
    },
    {
      label: 'Phases',
      value: 'Solitary and gregarious, driven by population density',
    },
    {
      label: 'Natural enemies',
      value: 'Birds, predatory insects, some fungal pathogens',
    },
    {
      label: 'Sign',
      value: 'Marching hopper bands, adult swarms, extensive defoliation',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are large grasshoppers, typically several centimetres long, with appearance and behaviour that differ markedly between phases: solitary-phase individuals are cryptically coloured and behave independently, while gregarious-phase individuals are more brightly coloured, often yellow or pink, and behave and move together in bands or swarms.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Solitary phase',
              description:
                'Low-density form; cryptic colouring, avoids other locusts, limited migration.',
            },
            {
              term: 'Gregarious phase',
              description:
                'High-density form; brighter colouring, attracted to other locusts, forms bands and swarms.',
            },
            {
              term: 'Hopper band',
              description:
                'A cohesive, marching group of wingless gregarious-phase nymphs.',
            },
          ],
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Eggs are laid in pods in moist sandy soil. Nymphs, known as hoppers, develop through several instars over a few weeks and, in the gregarious phase, can form marching bands. Adults are capable of sustained flight over long distances, particularly downwind, allowing swarms to migrate across countries and even seas when winds are favourable.',
        },
        {
          type: 'paragraph',
          text: 'Breeding accelerates after rains create green vegetation in normally arid breeding grounds, and successive generations under good conditions can drive rapid population growth and a shift from solitary to gregarious behaviour.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Desert locusts feed on an extremely broad range of plants, including many food crops, pasture, and natural vegetation. A large swarm can consume roughly its own combined body weight in vegetation each day, and given the scale of major swarms, cumulative crop losses can be severe.',
        },
        {
          type: 'paragraph',
          text: 'Cereal crops such as wheat, maize, and sorghum are among the many hosts affected, alongside numerous other food and forage plants across affected regions.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'International agencies coordinate desert locust early warning using field surveys, satellite-derived rainfall and vegetation data, and cross-border reporting networks, since breeding conditions and swarm movements frequently span multiple countries. Early detection of hopper bands and small, localized swarms is important because populations can escalate quickly once gregarious behaviour begins.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because outbreaks are transboundary and can escalate rapidly, desert locust management relies heavily on coordinated monitoring and early, targeted action.',
        },
        {
          type: 'list',
          items: [
            'Support coordinated regional and international early-warning and reporting systems',
            'Prioritize early detection of hopper bands and small swarms while they remain localized',
            'Conserve natural enemies and avoid unnecessary broad-area action against solitary, low-density populations',
            'Collaborate across borders given the migratory, transboundary nature of outbreaks',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow authorized, coordinated guidance for control',
          text: 'Locust control is typically coordinated by national plant protection authorities and international bodies; any control action must follow current, locally authorized guidance and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'machinery', slug: 'agricultural-drone' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'european-corn-borer' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Affects arid and semi-arid regions of Africa, the Middle East, and South Asia; breeding conditions, swarm paths, and affected crops vary greatly by year and region.',
  climateContext:
    'Breeding and phase change are strongly tied to rainfall patterns that green up normally dry breeding areas, while wind systems determine the direction and reach of swarm migration.',
  limitations: [
    'This is a general overview of a transboundary migratory pest, not a real-time outbreak forecast or region-specific guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Swarm behaviour and impact vary greatly between outbreak years and cannot be generalized to every season.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global monitoring, early warning, and outbreak guidance',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Biology, phase behaviour, and distribution',
    },
    { sourceId: 'usda-aphis', citedFor: 'Pest status and regulatory context' },
    {
      sourceId: 'wmo',
      citedFor: 'Weather and rainfall data relevant to breeding conditions',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Desert Locust',
    description:
      'Desert locust explained: phase-change biology, swarm formation, broad crop damage, transboundary monitoring, and coordinated integrated management.',
    keywords: [
      'desert locust',
      'Schistocerca gregaria',
      'locust swarm',
      'migratory pest',
    ],
  },
  structuredData: { article: true },
};
