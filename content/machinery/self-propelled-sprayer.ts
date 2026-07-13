import type { MachineryContent } from '@/types/content';

export const selfPropelledSprayer: MachineryContent = {
  id: 'machinery-self-propelled-sprayer',
  slug: 'self-propelled-sprayer',
  contentType: 'machinery',
  title: 'Self-Propelled Sprayer',
  alternativeNames: ['High-clearance sprayer'],
  category: 'Agricultural machinery',
  subcategory: 'Crop-protection equipment',
  machineryClass: 'crop-protection',
  summary:
    'A self-propelled sprayer is a machine with its own engine, a large tank, and a wide boom that applies liquid crop-protection products and foliar nutrients across broadacre crops at speed and with a high clearance over the canopy.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A self-propelled sprayer integrates the spraying system — tank, pump, boom, and nozzles — onto a dedicated, engine-powered chassis rather than mounting or trailing it behind a tractor. High ground clearance lets it pass over standing crops, and a wide boom covers many rows in a single pass, making it well suited to timely application across large areas.',
    },
    {
      type: 'paragraph',
      text: 'Modern machines commonly combine GPS guidance, automatic section and nozzle control, and boom-height management to apply products accurately, reduce overlap and skips, and limit off-target movement. Application quality depends heavily on nozzle choice, pressure, boom height, and weather conditions at the time of spraying.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Applying liquid crop-protection products and foliar nutrients',
    },
    {
      label: 'Key components',
      value:
        'Tank, pump, wide boom, nozzles, and an onboard engine and chassis',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Self-powered with high clearance, rather than tractor-mounted or trailed',
    },
    {
      label: 'Precision features',
      value:
        'GPS guidance, automatic section control, and boom-height management are common',
    },
    {
      label: 'Application quality',
      value: 'Governed by nozzle, pressure, boom height, speed, and weather',
    },
    {
      label: 'Drift management',
      value:
        'Nozzle selection and conditions are managed to limit off-target movement',
    },
  ],
  sections: [
    {
      id: 'what-a-self-propelled-sprayer-is',
      heading: 'What a self-propelled sprayer is',
      body: [
        {
          type: 'paragraph',
          text: 'A self-propelled sprayer is a purpose-built application machine used mainly in broadacre and high-clearance situations. By carrying its own power, a large tank, and a wide boom, it can cover ground quickly during the short weather windows when spraying is appropriate, which is often decisive for timely pest, disease, and weed control.',
        },
        {
          type: 'paragraph',
          text: 'It differs from mounted and trailed sprayers pulled by a tractor mainly in dedicated design and capacity: higher clearance for taller crops, and integration of guidance and rate-control systems. It is one tool within an integrated pest management programme rather than a standalone solution.',
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
            'Product is mixed with water in the tank following label instructions',
            'A pump draws the mixture through filters and delivers it to the boom under regulated pressure',
            'Nozzles along the boom break the liquid into droplets and distribute it across the swath',
            'Section and nozzle control shut off flow over already-treated or excluded areas',
            'GPS guidance and boom-height systems keep the swath accurate and the boom at a set height',
          ],
        },
      ],
    },
    {
      id: 'application-quality-and-drift',
      heading: 'Application quality and drift',
      body: [
        {
          type: 'paragraph',
          text: 'Getting product to the target with minimal off-target movement depends on nozzle type and droplet size, spray pressure, boom height, travel speed, and — critically — weather. Wind speed, temperature, and humidity all influence droplet drift and evaporation, so applications are timed to suitable conditions and label requirements.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Spray drift can damage neighbouring crops and the wider environment. Applicators follow product label directions, buffer requirements, and local regulations governing when and how products may be applied.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Sprayers require regular calibration so that the volume applied per unit area matches the intended rate, along with nozzle checks, filtration, and thorough cleaning between products. Because the machine is heavy and travels the field repeatedly, controlled traffic and appropriate soil conditions help limit compaction, especially with a full tank.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not give application rates, nozzle specifications, or spray conditions. Always follow the product label and local regulations, which are legally binding and product-specific.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'agricultural-drone' },
    { type: 'machinery', slug: 'gps-guidance-system' },
  ],
  connections: [
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'machinery', slug: 'variable-rate-applicator' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'cotton' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'General overview of self-propelled sprayers as used in mechanised broadacre crop production worldwide. Products, rates, and spraying rules are governed by local regulation and labels.',
  limitations: [
    'This entry describes sprayer function in general terms; it does not give application rates, nozzle specifications, or conditions, which are product- and label-specific and legally regulated.',
    'Drift and coverage depend on equipment, settings, and weather, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Sprayer operation, calibration, and application quality',
    },
    {
      sourceId: 'us-epa',
      citedFor: 'Pesticide application and spray-drift management context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of application equipment in crop protection',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Self-Propelled Sprayer',
    description:
      'Self-propelled sprayers explained: how high-clearance boom machines apply crop-protection products, manage drift, and support timely control.',
    keywords: [
      'self-propelled sprayer',
      'high-clearance sprayer',
      'crop protection',
      'spray drift',
    ],
  },
  structuredData: { article: true },
};
