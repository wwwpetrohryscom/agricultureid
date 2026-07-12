import type { CultivarContent } from '@/types/content';

export const brandywine: CultivarContent = {
  id: 'brandywine',
  slug: 'brandywine',
  contentType: 'cultivar',
  title: 'Brandywine',
  category: 'Tomato cultivar',
  subcategory: 'Heirloom beefsteak tomato',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Brandywine',
  cultivarType: 'Heirloom',
  breedingType: 'Open-pollinated',
  originCountry: 'United States',
  registrationStatus: 'historical',
  maturityClass: 'Late',
  growthHabit: 'Indeterminate',
  intendedUse: ['Fresh (slicing / beefsteak)'],
  climateAdaptation:
    'A warm-season indeterminate heirloom typically grown in gardens; as a late type it needs a sufficiently long, warm season to ripen well.',
  qualityTraits: [
    'Large beefsteak fruit, commonly pink in the best-known strain',
    'Potato-leaf foliage in the classic pink type',
    'Grown mainly for fresh eating quality',
  ],
  summary:
    'Brandywine is a late-maturing heirloom beefsteak tomato, best known in a large pink, potato-leaved form, grown on indeterminate plants primarily for fresh use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brandywine is a classic heirloom beefsteak tomato, most familiar as a large, pink-fruited, potato-leaved form. It grows on tall indeterminate plants, matures relatively late, and is grown above all for fresh eating rather than for processing.',
    },
    {
      type: 'paragraph',
      text: 'As an open-pollinated heirloom, Brandywine is maintained by saving seed rather than through a formal breeding program, and it has been passed between growers for generations. Its exact origin and introduction date are reported inconsistently and are not firmly documented.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Heirloom beefsteak (indeterminate)' },
    { label: 'Growth habit', value: 'Indeterminate' },
    { label: 'Maturity', value: 'Late' },
    { label: 'Primary use', value: 'Fresh slicing' },
    { label: 'Origin', value: 'United States (exact origin uncertain)' },
    { label: 'Registration status', value: 'Historical / heirloom' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Brandywine is described as a large-fruited beefsteak on indeterminate, often potato-leaved plants that fruit over an extended period and ripen late in the season. It is grown for fresh use and is a staple of heirloom-tomato collections.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Indeterminate' },
            { term: 'Fruit type', description: 'Large beefsteak, often pink' },
            {
              term: 'Intended use',
              description: 'Fresh slicing and general table use',
            },
          ],
        },
      ],
    },
    {
      id: 'strains-and-origin',
      heading: 'Strains and origin',
      body: [
        {
          type: 'paragraph',
          text: 'Several distinct tomatoes circulate under the Brandywine name, including pink potato-leaf forms as well as red, yellow, and other selections. The widely grown pink potato-leaf strain is the reference point for most descriptions, but seed labelled simply "Brandywine" may differ.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because multiple heirloom strains share the Brandywine name and its documented history is thin, fruit colour, leaf form, and timing should be confirmed against the specific seed source.',
        },
      ],
    },
  ],
  connections: [{ type: 'soil', slug: 'loam-soil' }],
  geographicScope:
    'Documented as a United States heirloom now grown internationally by home and market gardeners; several named strains exist under the same name.',
  climateContext:
    'Warm-season indeterminate heirloom; as a late type it favours regions with a long, warm growing season.',
  limitations: [
    'Multiple distinct heirloom strains are sold as Brandywine, including pink, red, and yellow forms, so a single description cannot cover all of them.',
    'The cultivar’s origin and date of introduction are anecdotal and not firmly documented, so no breeder or release year is asserted here.',
    'Indeterminate, late-maturing behaviour depends heavily on climate and season length in a given location.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and heirloom cultivar nomenclature',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
    {
      sourceId: 'rhs',
      citedFor: 'Horticultural description of the Brandywine heirloom type',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Brandywine (tomato cultivar)',
    description:
      'Brandywine is a late, indeterminate heirloom beefsteak tomato, best known as a large pink potato-leaved form. Its traits, strains, and honest caveats.',
    keywords: [
      'Brandywine tomato',
      'heirloom tomato',
      'beefsteak tomato',
      'potato-leaf tomato',
    ],
  },
  structuredData: { article: true },
};
