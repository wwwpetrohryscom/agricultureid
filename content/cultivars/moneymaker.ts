import type { CultivarContent } from '@/types/content';

export const moneymaker: CultivarContent = {
  id: 'moneymaker',
  slug: 'moneymaker',
  contentType: 'cultivar',
  title: 'Moneymaker',
  category: 'Tomato cultivar',
  subcategory: 'Classic English glasshouse tomato',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Moneymaker',
  cultivarType: 'Heritage open-pollinated cultivar',
  breedingType: 'Open-pollinated selection',
  originCountry: 'United Kingdom',
  registrationStatus: 'historical',
  maturityClass: 'Mid-season',
  growthHabit: 'Indeterminate',
  intendedUse: ['Fresh (greenhouse and garden production)'],
  climateAdaptation:
    'A warm-season indeterminate type long associated with English glasshouse culture and also grown outdoors in mild conditions; performance depends on the growing system.',
  qualityTraits: [
    'Uniform, smooth, medium-sized round red fruit',
    'Reliable trusses under protected culture',
    'Long-established garden and glasshouse variety',
  ],
  summary:
    'Moneymaker is a heritage English tomato, long popular for glasshouse and garden production, known for uniform, smooth, medium-sized round red fruit on indeterminate plants.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moneymaker is a long-established English tomato traditionally grown under glass and in gardens. It is an indeterminate, open-pollinated variety valued historically for its dependable set of uniform, smooth, medium-sized round red fruit.',
    },
    {
      type: 'paragraph',
      text: 'Introduced in England in the early twentieth century, Moneymaker became one of the best-known glasshouse tomatoes of its era. It remains a familiar heritage variety in home gardens, though many newer greenhouse cultivars have since been developed.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Glasshouse / garden tomato (indeterminate)' },
    { label: 'Growth habit', value: 'Indeterminate' },
    { label: 'Origin', value: 'United Kingdom (England)' },
    { label: 'Primary use', value: 'Fresh, under glass and outdoors' },
    { label: 'Registration status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Moneymaker is characterized as an indeterminate cordon tomato producing regular trusses of uniform, round, medium red fruit. Its consistency and adaptability to protected culture made it a standard choice for English glasshouses through much of the twentieth century.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Indeterminate (cordon)' },
            { term: 'Breeding type', description: 'Open-pollinated selection' },
            {
              term: 'Intended use',
              description: 'Fresh fruit from glasshouse and garden production',
            },
          ],
        },
      ],
    },
    {
      id: 'context-and-use',
      heading: 'Historical context and use',
      body: [
        {
          type: 'paragraph',
          text: 'Moneymaker predates the widespread adoption of modern F1 greenhouse hybrids and is often grown today for its heritage value and reliability rather than for distinctive flavour. It is usually trained as a single stem and supported, in keeping with its indeterminate habit.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'As an older open-pollinated variety, Moneymaker can be maintained from saved seed, but strains offered by different suppliers may vary somewhat in uniformity.',
        },
      ],
    },
  ],
  connections: [{ type: 'farming-system', slug: 'greenhouse-farming' }],
  geographicScope:
    'A British heritage tomato historically central to English glasshouse production and now grown by gardeners more widely; exact origin details are not firmly documented.',
  climateContext:
    'Warm-season indeterminate tomato suited to protected culture and mild outdoor conditions.',
  limitations: [
    'Moneymaker is documented mainly through horticultural references, and precise details of its early breeding and introduction are not firmly established.',
    'Open-pollinated seed sold under the name may vary between suppliers, so uniformity and fruit character are not guaranteed to be identical everywhere.',
    'Its indeterminate, glasshouse-oriented habit means outdoor performance depends strongly on local climate and training.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and cultivar nomenclature (collection level)',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
    {
      sourceId: 'rhs',
      citedFor:
        'Horticultural description of the Moneymaker glasshouse variety',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Moneymaker (tomato cultivar)',
    description:
      'Moneymaker is a heritage English glasshouse tomato with uniform round red fruit on indeterminate plants. Its type, history, use, and honest limitations.',
    keywords: [
      'Moneymaker tomato',
      'glasshouse tomato',
      'greenhouse tomato',
      'indeterminate tomato',
    ],
  },
  structuredData: { article: true },
};
