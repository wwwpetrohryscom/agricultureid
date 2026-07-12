import type { CultivarContent } from '@/types/content';

export const marisPeer: CultivarContent = {
  id: 'maris-peer',
  slug: 'maris-peer',
  contentType: 'cultivar',
  title: 'Maris Peer',
  acceptedName: 'Maris Peer',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'United Kingdom',
  originRegion: 'Cambridge, England (Plant Breeding Institute)',
  breederOrInstitution: 'Plant Breeding Institute, Cambridge',
  registrationStatus: 'listed',
  registrationJurisdiction: 'United Kingdom',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry:
        'National List of Agricultural and Vegetable Crop Species (Great Britain)',
      jurisdiction: 'United Kingdom',
      status: 'listed',
      asOf: '2026-07-12',
      note: 'Listing permits marketing of seed and is not a recommendation; it is date-specific. Confirm against the current National List.',
    },
  ],
  maturityClass: 'Second early / early maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically oval with cream skin and flesh.',
  intendedUse: ['Table (new potatoes, salads, boiling)'],
  climateAdaptation:
    'Grown as a cool-season crop like potato generally; its earlier maturity suits second-early lifting and small "new potato" production. Sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Cream flesh',
    'Firm, waxy texture that holds its shape',
    'Suited to small "new potato" and salad use',
  ],
  summary:
    'Maris Peer is a British second-early potato bred at the Plant Breeding Institute in Cambridge, a firm, waxy variety used for new potatoes, salads, and boiling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maris Peer is a second-early potato bred at the Plant Breeding Institute in Cambridge, England. Like other "Maris" varieties from the Institute, its name derives from Maris Lane near the breeding station. It is a firm, waxy variety commonly grown for the fresh market.',
    },
    {
      type: 'paragraph',
      text: 'The cream-fleshed tubers hold their shape well when cooked, which suits them to small "new potato" harvests, salads, and boiling rather than to mashing or roasting. It is admitted to the national variety list in Great Britain, which permits the marketing of its seed.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'Cambridge, England (Plant Breeding Institute)' },
    { label: 'Maturity', value: 'Second early / early maincrop' },
    { label: 'Flesh', value: 'Cream' },
    { label: 'Cooking type', value: 'Firm, waxy; holds shape' },
    { label: 'Principal uses', value: 'New potatoes, salads, boiling' },
    { label: 'Registry status', value: 'Listed (United Kingdom)' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Maris Peer was produced by cross-breeding at the Plant Breeding Institute, Cambridge. It is classed as a second-early, firm, waxy variety and is widely used for the fresh market, including small "new potato" harvests.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Flesh colour', description: 'Cream' },
            {
              term: 'Cooking character',
              description: 'Firm and waxy; holds shape when boiled',
            },
            {
              term: 'Typical culinary uses',
              description: 'New potatoes, salads, boiling',
            },
          ],
        },
      ],
    },
    {
      id: 'registry-and-cultivation',
      heading: 'Registry status and cultivation',
      body: [
        {
          type: 'paragraph',
          text: 'Maris Peer is admitted to the national variety list in Great Britain. Listing permits the marketing of seed rather than constituting a recommendation, and it is date-specific; it should be confirmed against the current National List. As a second-early it is grown as a cool-season crop like potato generally, and its cooking and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'climate', slug: 'growing-season' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Best documented in the United Kingdom; also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season crop; second-early maturity.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Registry/listing status is jurisdiction- and date-specific; confirm against the current Great Britain National List.',
    'The exact year of release is reported inconsistently in the literature and is therefore not stated.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'UK potato variety characteristics and background',
    },
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and germplasm context',
    },
    {
      sourceId: 'rhs',
      citedFor: 'General horticultural reference on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Maris Peer (potato cultivar)',
    description:
      'Maris Peer: a British second-early potato bred at the Plant Breeding Institute, Cambridge, a firm, waxy variety for new potatoes, salads, and boiling.',
    keywords: [
      'Maris Peer',
      'new potato',
      'waxy potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
