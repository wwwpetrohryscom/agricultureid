import type { CultivarContent } from '@/types/content';

export const romaTomato: CultivarContent = {
  id: 'roma-tomato',
  slug: 'roma-tomato',
  contentType: 'cultivar',
  title: 'Roma',
  category: 'Tomato cultivar',
  subcategory: 'Plum (paste) tomato — open-pollinated type',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Roma',
  alternativeNames: ['Roma VF'],
  cultivarType: 'Open-pollinated cultivar (now a broad plum-tomato type)',
  breedingType: 'Open-pollinated',
  originCountry: 'United States',
  breederOrInstitution: 'United States Department of Agriculture (USDA)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Cited at the collection level for tomato germplasm and plum-type cultivar nomenclature; no specific accession identifier is asserted.',
    },
  ],
  maturityClass: 'Mid-season',
  growthHabit: 'Determinate',
  intendedUse: ['Processing and paste', 'Fresh culinary use'],
  climateAdaptation:
    'A warm-season determinate type widely grown in gardens and field production; adaptation depends on the specific strain and region.',
  qualityTraits: [
    'Egg- to pear-shaped plum fruit',
    'Meaty flesh with relatively low juice, suited to sauce and paste',
    'Compact determinate plants',
  ],
  summary:
    'Roma is a determinate plum (paste) tomato that originated as a mid-twentieth-century United States introduction and has since become a broad, widely grown type name for sauce tomatoes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Roma is a plum, or paste, tomato with meaty, low-juice fruit that is popular for sauces, canning, and general cooking. The plants are determinate and compact, which historically made the type convenient for both home gardens and field production.',
    },
    {
      type: 'paragraph',
      text: 'The original Roma is generally attributed to a United States Department of Agriculture breeding program and was introduced in the mid-1950s, later widely offered as "Roma VF". Over time, "Roma" has become a general name for many plum-tomato selections rather than a single, tightly defined variety.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Plum / paste tomato (determinate)' },
    { label: 'Growth habit', value: 'Determinate' },
    { label: 'Origin', value: 'United States (USDA introduction)' },
    { label: 'Primary use', value: 'Sauce, paste, canning, and cooking' },
    { label: 'Registration status', value: 'Historical / type name' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Roma is characterized by small-to-medium, elongated plum fruit with dense flesh and comparatively little juice, on determinate plants that concentrate their crop. These features made it a standard paste tomato for both processing and kitchen use.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Determinate' },
            {
              term: 'Breeding type',
              description: 'Open-pollinated',
            },
            {
              term: 'Intended use',
              description: 'Paste, sauce, canning, and general cooking',
            },
          ],
        },
      ],
    },
    {
      id: 'name-usage',
      heading: 'A cultivar that became a type',
      body: [
        {
          type: 'paragraph',
          text: 'While Roma began as a specific introduction, the name is now applied to a wide range of plum-tomato selections and hybrids sold internationally. As a result, seed labelled "Roma" may correspond to the original open-pollinated line or to a newer, distinct strain.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because "Roma" functions as a broad type name, characteristics can differ between suppliers. Confirm the specific strain when precise traits matter.',
        },
      ],
    },
  ],
  connections: [{ type: 'irrigation-method', slug: 'drip-irrigation' }],
  geographicScope:
    'Originating in the United States and now grown worldwide as a plum-tomato type; the name covers many distinct strains rather than one variety.',
  climateContext:
    'Warm-season determinate paste tomato grown in gardens and field systems across many regions.',
  limitations: [
    'The Roma name is applied very broadly, so plants sold under it range from the original open-pollinated line to unrelated modern hybrids.',
    'Because many strains share the name, specific fruit size, timing, and plant behaviour depend on the seed source and the growing environment.',
    'A precise original release year is reported inconsistently across sources, so only the approximate mid-1950s introduction is stated here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Tomato germplasm and plum-type cultivar nomenclature (collection level)',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Roma (tomato cultivar)',
    description:
      'Roma is a determinate plum (paste) tomato from a 1950s US introduction that became a broad type name. Its traits, uses, and honest name-usage caveats.',
    keywords: [
      'Roma tomato',
      'plum tomato',
      'paste tomato',
      'determinate tomato',
    ],
  },
  structuredData: { article: true },
};
