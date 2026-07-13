import type { CultivarContent } from '@/types/content';

export const sanMarzano: CultivarContent = {
  id: 'san-marzano',
  slug: 'san-marzano',
  contentType: 'cultivar',
  title: 'San Marzano',
  category: 'Tomato cultivar',
  subcategory: 'Italian plum (paste) tomato — landrace type',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'San Marzano',
  alternativeNames: ['San Marzano tomato'],
  cultivarType: 'Landrace-type plum tomato (traditional selection)',
  breedingType: 'Open-pollinated landrace selection',
  originCountry: 'Italy',
  originRegion: 'Agro Sarnese-Nocerino, Campania',
  registrationStatus: 'historical',
  protectedStatus:
    'The name "Pomodoro San Marzano dell\'Agro Sarnese-Nocerino" is a European Union Protected Designation of Origin (PDO/DOP), registered in 1996. This is a geographical-indication protection tied to a defined production area and method — a food-labelling right, not plant-variety protection over the cultivar itself.',
  maturityClass: 'Mid- to late season',
  growthHabit: 'Indeterminate',
  intendedUse: ['Processing (peeled and canned tomatoes, passata, sauce)'],
  climateAdaptation:
    'Traditionally grown in the warm, volcanic-influenced plains around Vesuvius in Campania; behaviour elsewhere depends on the strain and local conditions.',
  qualityTraits: [
    'Elongated, narrow plum-shaped fruit',
    'Traditionally used for peeled and canned tomatoes and sauce',
    'Firm flesh with relatively few seeds and thin skin in the traditional type',
  ],
  summary:
    'San Marzano is a traditional Italian plum (paste) tomato type from the Agro Sarnese-Nocerino area of Campania, prized for canning and sauce and associated with an EU Protected Designation of Origin.',
  introduction: [
    {
      type: 'paragraph',
      text: 'San Marzano is a traditional Italian plum, or paste, tomato associated with the Agro Sarnese-Nocerino district in the Campania region near Naples. It is grown chiefly for processing — especially peeled, canned whole tomatoes and sauce — and is valued for its elongated fruit shape, firm flesh, and low seed content in the classic type.',
    },
    {
      type: 'paragraph',
      text: 'The traditional San Marzano is an open-pollinated, landrace-style selection rather than a single modern registered variety, and it is typically an indeterminate plant. Its reputation is closely tied to a specific growing area, which is reflected in a European Union geographical-indication scheme.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Plum / paste tomato (landrace type)' },
    { label: 'Growth habit', value: 'Indeterminate' },
    { label: 'Origin', value: 'Agro Sarnese-Nocerino, Campania, Italy' },
    { label: 'Primary use', value: 'Processing (canning, passata, sauce)' },
    {
      label: 'Geographical indication',
      value: 'EU Protected Designation of Origin (PDO/DOP), registered 1996',
      note: 'A food-labelling protection for product from a defined area, not plant-variety protection.',
    },
    { label: 'Registration status', value: 'Historical / landrace type' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'The classic San Marzano is described as an indeterminate plant bearing long, narrow, thick-walled fruit that peels cleanly — traits that made it a mainstay of the canned-tomato and sauce trade. It is best understood as a landrace type maintained through selection rather than as a single, uniform modern cultivar.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Indeterminate' },
            {
              term: 'Fruit type',
              description: 'Elongated plum (paste) tomato',
            },
            {
              term: 'Intended use',
              description: 'Peeled canned tomatoes, passata, and sauce',
            },
          ],
        },
      ],
    },
    {
      id: 'protected-designation-of-origin',
      heading: 'Protected Designation of Origin',
      body: [
        {
          type: 'paragraph',
          text: 'The designation "Pomodoro San Marzano dell\'Agro Sarnese-Nocerino" is registered as a European Union Protected Designation of Origin. A PDO links a product name to a defined geographic area and production method, so only tomatoes grown and processed under the scheme in that area may be marketed under the protected name.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Geographical indication is not plant-variety protection',
          text: 'A PDO protects a place-linked product name and process. It is distinct from plant-variety rights, which protect a specific bred variety. San Marzano seed and plants are widely sold worldwide, but only qualifying product from the designated area carries the DOP name.',
        },
      ],
    },
  ],
  connections: [{ type: 'irrigation-method', slug: 'drip-irrigation' }],
  geographicScope:
    'Rooted in the Agro Sarnese-Nocerino area of Campania, Italy, for the protected product; the plum-tomato type itself is grown internationally under the San Marzano name.',
  climateContext:
    'Warm-season paste tomato traditionally grown in Campania; performance of the many strains sold elsewhere varies by region and management.',
  limitations: [
    'The San Marzano name is used very broadly: many distinct seed strains and hybrids are sold internationally as "San Marzano" and differ from the traditional Campanian landrace.',
    'Only product grown and processed within the designated area under the scheme may use the protected DOP name; the geographical indication does not certify any plant grown elsewhere.',
    'The traditional type is generally indeterminate, but plant habit and fruit quality of the various strains depend strongly on seed source and growing environment.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and plum-type cultivar nomenclature',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
    {
      sourceId: 'rhs',
      citedFor: 'Horticultural description of the San Marzano plum-tomato type',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'San Marzano (tomato cultivar)',
    description:
      'San Marzano is a traditional Italian plum (paste) tomato and an EU Protected Designation of Origin. Its type, use, PDO status, and honest caveats.',
    keywords: [
      'San Marzano',
      'plum tomato',
      'paste tomato',
      'Protected Designation of Origin',
    ],
  },
  structuredData: { article: true },
};
