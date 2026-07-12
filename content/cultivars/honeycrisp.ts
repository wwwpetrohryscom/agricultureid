import type { CultivarContent } from '@/types/content';

export const honeycrisp: CultivarContent = {
  id: 'cultivar-honeycrisp',
  slug: 'honeycrisp',
  contentType: 'cultivar',
  title: 'Honeycrisp',
  acceptedName: "Malus domestica 'Honeycrisp'",
  alternativeNames: ['MN 1711 (breeding selection number)'],
  category: 'Apple cultivar',
  summary:
    'Honeycrisp is a dessert apple released by the University of Minnesota in 1991, famous for its distinctively coarse, crisp, juicy texture. It was formerly protected in the United States by a plant patent that has since expired.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Honeycrisp is a dessert apple developed by the University of Minnesota apple breeding programme and released in 1991. It is celebrated for an unusually crisp, coarse-celled texture that fractures readily, giving a juicy, "explosive" bite, together with a balanced sweet-tart flavour.',
    },
    {
      type: 'paragraph',
      text: 'For many years its parentage was reported as a cross of Macoun and Honeygold. Later DNA-based parentage analysis showed this was incorrect: one parent is the University of Minnesota cultivar Keepsake, and the other is an unnamed, unreleased Minnesota selection (recorded as MN1627). As a clonal cultivar, Honeycrisp is propagated by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Controlled cross (University of Minnesota)' },
    { label: 'Breeder', value: 'University of Minnesota' },
    { label: 'Released', value: '1991' },
    { label: 'Season', value: 'Mid-to-late season' },
    { label: 'Primary use', value: 'Fresh eating (dessert)' },
    {
      label: 'Registry status',
      value: 'US plant patent (PP7197) has expired',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Honeycrisp originated in the University of Minnesota apple breeding programme, from a cross reportedly made in 1960, and was released in 1991. Under the programme’s numbering it was the selection MN 1711.',
        },
        {
          type: 'paragraph',
          text: 'The originally published parentage (Macoun × Honeygold) was later corrected through DNA analysis, which identified Keepsake as one parent and an unnamed, unreleased Minnesota selection (MN1627) as the other. This is a well-documented example of a cultivar pedigree being revised once molecular tools became available.',
        },
      ],
    },
    {
      id: 'fruit-and-eating-quality',
      heading: 'Fruit and eating quality',
      body: [
        {
          type: 'list',
          items: [
            'Texture distinctively crisp and coarse-celled, fracturing to release juice',
            'Flavour balanced sweet-tart with a mild aroma',
            'Skin mottled red over a yellow ground',
            'Keeps well under refrigeration relative to many apples',
          ],
        },
      ],
    },
    {
      id: 'protection-and-status',
      heading: 'Protection and status',
      body: [
        {
          type: 'paragraph',
          text: 'In the United States, Honeycrisp was protected by a plant patent (PP7197) assigned to the University of Minnesota. That patent has since expired, so the cultivar can now be propagated in the United States without a plant-patent licence. Plant-variety protection is jurisdiction- and date-specific, and a plant patent on a clonally propagated variety is distinct from a utility patent.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Growing considerations',
          text: 'Honeycrisp is widely documented as demanding to grow well: it can be prone to the physiological disorder bitter pit and to biennial (alternate-year) bearing. These are management challenges rather than fixed properties, and their expression depends on site, rootstock, nutrition, and crop-load management.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Cross-breeding (controlled hybridization)',
  originCountry: 'United States',
  originRegion: 'Minnesota (University of Minnesota breeding programme)',
  yearReleased: '1991',
  breederOrInstitution: 'University of Minnesota',
  registrationStatus: 'expired',
  registrationJurisdiction: 'United States',
  registrationAsOf: '2026-07-12',
  protectedStatus:
    'Formerly protected in the United States by USDA/USPTO Plant Patent PP7197 (University of Minnesota), which has since expired. A plant patent on a clonally propagated variety is distinct from a utility patent, and plant-variety protection is jurisdiction- and date-specific.',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global; the former US plant patent (PP7197) has expired.',
    },
  ],
  maturityClass: 'Mid-to-late season',
  intendedUse: ['Fresh eating (dessert)'],
  qualityTraits: [
    'Distinctively crisp, coarse-celled, juicy texture',
    'Balanced sweet-tart flavour',
    'Mottled red skin over a yellow ground',
    'Keeps well under refrigeration relative to many apples',
  ],
  geographicAvailability:
    'Widely grown across cool-temperate apple regions, particularly in the United States, Canada, and parts of Europe.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a modern cultivar. Fruit quality and growing behaviour depend strongly on region, rootstock, nutrition, and crop-load management.',
  limitations: [
    'The originally published parentage (Macoun × Honeygold) was later shown by DNA analysis to be incorrect; the corrected parentage is Keepsake × an unnamed Minnesota selection (MN1627).',
    'Honeycrisp is widely reported as challenging to grow, being prone to bitter pit and biennial bearing; these depend on site, rootstock, nutrition, and management rather than being fixed traits.',
    'Plant-patent status is jurisdiction- and date-specific; the expiry noted here concerns the United States plant patent (PP7197) and does not describe every jurisdiction.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Cultivar/germplasm record and placement within Malus domestica',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomy of the parent species Malus domestica',
    },
    {
      sourceId: 'umn-extension',
      citedFor:
        'University of Minnesota origin, release, and documented growing considerations',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Honeycrisp (apple cultivar)',
    description:
      'Honeycrisp apple: a distinctively crisp dessert apple released by the University of Minnesota in 1991; its US plant patent (PP7197) has since expired.',
    keywords: [
      'Honeycrisp',
      'apple cultivar',
      'Malus domestica',
      'University of Minnesota apple',
    ],
  },
  structuredData: { article: true },
};
