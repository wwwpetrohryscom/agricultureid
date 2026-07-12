import type { MachineryContent } from '@/types/content';

export const sprayer: MachineryContent = {
  id: 'machinery-sprayer',
  slug: 'sprayer',
  contentType: 'machinery',
  title: 'Sprayer',
  category: 'Agricultural machinery',
  subcategory: 'Crop-protection equipment',
  machineryClass: 'crop-protection',
  summary:
    'An agricultural sprayer applies liquid crop-protection products or foliar nutrients to fields, atomising a tank mixture into droplets and distributing it evenly across a target area through a boom or targeted nozzles.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A sprayer is the equipment used to apply pesticides, herbicides, fungicides, and some liquid fertilizers to crops. Its core task is to convert a tank mixture into a controlled spray of droplets and distribute that spray evenly over the target — whether an entire field, a crop canopy, or an individual weed.',
    },
    {
      type: 'paragraph',
      text: 'Sprayers range from small handheld or backpack units to large self-propelled or trailed machines with booms tens of metres wide, and their use sits within a broader crop-protection decision process that also involves scouting, thresholds, and product choice.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Applying liquid crop-protection or foliar-nutrient products',
    },
    {
      label: 'Key components',
      value: 'Tank, pump, boom or targeted nozzles, pressure and flow controls',
    },
    {
      label: 'Common configurations',
      value: 'Trailed, mounted, and self-propelled boom sprayers',
    },
    {
      label: 'Application target',
      value: 'Weeds, insect pests, and fungal or bacterial diseases',
    },
    {
      label: 'Precision features',
      value: 'Section control and variable-rate application on modern sprayers',
    },
    {
      label: 'Operating consideration',
      value:
        'Nozzle choice, pressure, and timing affect coverage and off-target drift',
    },
  ],
  sections: [
    {
      id: 'what-a-sprayer-is',
      heading: 'What a sprayer is',
      body: [
        {
          type: 'paragraph',
          text: 'A sprayer’s function is to deliver a measured, evenly distributed volume of a liquid product to a target area. It is the delivery mechanism for chemical and some biological crop-protection strategies, working in support of — not instead of — scouting, correct product selection, and application timing.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Water and product are combined in a tank and mixed to form the spray solution',
            'A pump draws the mixture and delivers it under pressure to the boom or nozzles',
            'Nozzles atomise the liquid into droplets of a size suited to the product and target',
            'The boom or nozzle arrangement distributes droplets evenly across the working width',
            'Controllers regulate flow rate relative to travel speed to maintain a consistent application rate',
          ],
        },
      ],
    },
    {
      id: 'role-in-crop-protection',
      heading: 'Role in crop protection',
      body: [
        {
          type: 'paragraph',
          text: 'Sprayers are used throughout the growing season for pre-emergence and post-emergence herbicide applications, insecticide treatments against pests, and fungicide programs against foliar and other diseases, as well as for some foliar nutrient applications. Timely, well-targeted spraying can improve efficacy and reduce the total amount of product needed.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Part of an integrated approach',
          text: 'Sprayer use is generally most effective as part of an integrated pest management approach that combines monitoring, thresholds, and multiple control tactics rather than routine calendar-based spraying.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Trailed/mounted boom sprayer',
              description:
                'Towed or tractor-mounted, with a folding boom for field-scale application',
            },
            {
              term: 'Self-propelled sprayer',
              description:
                'A dedicated, high-clearance machine used for larger operations and taller crops',
            },
            {
              term: 'Air-blast/orchard sprayer',
              description:
                'Uses an air stream to carry droplets into tree or vine canopies',
            },
            {
              term: 'Backpack/handheld sprayer',
              description:
                'Small-scale equipment for spot treatment or smallholder use',
            },
          ],
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nozzle type, spray pressure, droplet size, boom height, and weather conditions such as wind all affect how well a spray reaches its target and how much drifts away from it. Calibration — checking that the actual application rate matches the intended rate — is a routine part of safe, effective spraying.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Always follow the product label for approved rates, timing, and buffer requirements, and observe local regulations on applicator training and drift management; these vary by product and jurisdiction.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'agricultural-drone' },
  ],
  connections: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'machinery', slug: 'gps-guidance-system' },
  ],
  glossaryTerms: ['integrated-pest-management', 'economic-threshold'],
  geographicScope:
    'General overview of agricultural sprayers as used across crop-protection programs worldwide. Approved products, rates, and regulations are jurisdiction-specific.',
  limitations: [
    'This entry describes sprayer function and types in general terms; it is not guidance on specific products, rates, or timings, which are label- and region-specific.',
    'Drift and off-target movement depend heavily on equipment settings and weather and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'uc-ipm',
      citedFor: 'Sprayer role within integrated pest management',
    },
    {
      sourceId: 'us-epa',
      citedFor: 'Pesticide application and label requirements',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Sprayer calibration and operation',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of crop-protection application in agriculture',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sprayer',
    description:
      'Agricultural sprayers explained: how tanks, pumps, and nozzles apply crop-protection products, common sprayer types, and calibration considerations.',
    keywords: [
      'agricultural sprayer',
      'boom sprayer',
      'crop protection equipment',
      'spray calibration',
    ],
  },
  structuredData: { article: true },
};
