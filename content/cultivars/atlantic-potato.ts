import type { CultivarContent } from '@/types/content';

export const atlanticPotato: CultivarContent = {
  id: 'atlantic-potato',
  slug: 'atlantic-potato',
  contentType: 'cultivar',
  title: 'Atlantic',
  acceptedName: 'Atlantic',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'United States',
  originRegion: 'United States (USDA potato-breeding programme)',
  yearReleased: '1978',
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
  maturityClass: 'Maincrop (mid-season)',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically round to oval with a lightly scaled/netted skin.',
  intendedUse: ['Crisping (potato chips)', 'Processing'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'White flesh',
    'Round to oval tuber shape',
    'High specific gravity (high dry matter), suited to chip/crisp manufacture',
  ],
  summary:
    'Atlantic is a white-fleshed American maincrop potato released by the USDA in 1978, valued for its high specific gravity and long a leading chipping (crisping) variety in the United States.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Atlantic is a maincrop potato developed by the United States Department of Agriculture and released in 1978. It became a leading variety for the potato-chip (crisp) industry in the United States, where high dry-matter content is a key processing requirement.',
    },
    {
      type: 'paragraph',
      text: 'The round-to-oval tubers have white flesh and notably high specific gravity, which suits them to crisping rather than to salad or general boiling use. Atlantic has been widely used as a benchmark chipping variety.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'United States (USDA)' },
    { label: 'Year released', value: '1978' },
    { label: 'Maturity', value: 'Maincrop (mid-season)' },
    { label: 'Flesh', value: 'White' },
    {
      label: 'Processing trait',
      value: 'High specific gravity; premier chipping (crisp) variety',
    },
    { label: 'Registry status', value: 'Historical / heritage cultivar' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Atlantic was produced by cross-breeding in the USDA potato programme and released in 1978. Its defining feature is a high specific gravity (high dry-matter content), which produces the firm, low-moisture chips sought by the crisping industry.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Flesh colour', description: 'White' },
            { term: 'Tuber shape', description: 'Round to oval' },
            {
              term: 'Processing character',
              description:
                'High specific gravity; well suited to chip/crisp manufacture',
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
          text: 'As a maincrop it is grown as a cool-season crop like potato generally and is managed for the high dry-matter content that the chipping market requires. It is used predominantly for processing into potato chips (crisps) rather than for fresh table use. Processing performance and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'climate', slug: 'growing-season' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Best documented in United States processing production; also grown elsewhere. Processing and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season maincrop.',
  limitations: [
    'Processing and agronomic behaviour (specific gravity, chip quality) is region- and season-specific and varies with storage.',
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
      citedFor: 'USDA potato variety release and chipping-quality research',
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
    title: 'Atlantic (potato cultivar)',
    description:
      'Atlantic potato: a white-fleshed American maincrop released by the USDA in 1978, valued for high specific gravity and long a leading chipping (crisp) variety.',
    keywords: [
      'Atlantic potato',
      'chipping potato',
      'crisp potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
