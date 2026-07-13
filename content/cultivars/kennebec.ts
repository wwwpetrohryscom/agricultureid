import type { CultivarContent } from '@/types/content';

export const kennebec: CultivarContent = {
  id: 'kennebec',
  slug: 'kennebec',
  contentType: 'cultivar',
  title: 'Kennebec',
  acceptedName: 'Kennebec',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'United States',
  originRegion: 'United States (USDA potato-breeding programme)',
  yearReleased: '1948',
  breederOrInstitution: 'United States Department of Agriculture (USDA)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Maintained as germplasm in the U.S. National Plant Germplasm System; a genebank holding, not a marketing registration.',
    },
  ],
  maturityClass: 'Maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically oval with smooth buff skin.',
  intendedUse: ['Table', 'Chips / French fries', 'Processing'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'White flesh',
    'Smooth buff skin with shallow eyes',
    'General-purpose cooking texture',
  ],
  summary:
    'Kennebec is a white-fleshed American maincrop potato released by the USDA in 1948, a widely adapted, general-purpose variety used for the table and for processing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kennebec is a maincrop potato developed by the United States Department of Agriculture and released in 1948. It takes its name from the Kennebec River region of Maine. The variety became widely grown in North America as a dependable, general-purpose potato.',
    },
    {
      type: 'paragraph',
      text: 'The tubers have smooth buff skin with shallow eyes and white flesh, with a general-purpose cooking character. Kennebec is used both fresh and for processing, including chips and fries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'United States (USDA)' },
    { label: 'Year released', value: '1948' },
    { label: 'Maturity', value: 'Maincrop' },
    { label: 'Skin and flesh', value: 'Smooth buff skin; white flesh' },
    { label: 'Cooking type', value: 'General-purpose' },
    { label: 'Registry status', value: 'Historical / heritage cultivar' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Kennebec was produced by cross-breeding in the USDA potato programme and released in 1948. Its wide adaptation and general-purpose quality made it a long-standing commercial and garden variety in North America.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Flesh colour', description: 'White' },
            { term: 'Skin', description: 'Smooth buff with shallow eyes' },
            {
              term: 'Cooking character',
              description: 'General-purpose; used fresh and for processing',
            },
          ],
        },
      ],
    },
    {
      id: 'cultivation-and-use',
      heading: 'Cultivation and use',
      body: [
        {
          type: 'paragraph',
          text: 'As a maincrop it is grown as a cool-season crop like potato generally and is lifted after the haulm has died down. It is used both as a table potato and for processing into chips and fries. Cooking performance and agronomic behaviour vary with region, season, and storage.',
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
    'Best documented in North American production; also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season maincrop.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Germplasm is held in genebanks; this is not a statement of commercial availability or of registration in any particular jurisdiction.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Solanum tuberosum classification and U.S. germplasm/accession context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'USDA potato variety release and research',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kennebec (potato cultivar)',
    description:
      'Kennebec: a white-fleshed, general-purpose American maincrop potato released by the USDA in 1948, grown for the table and for processing.',
    keywords: [
      'Kennebec potato',
      'USDA potato',
      'white potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
