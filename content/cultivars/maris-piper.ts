import type { CultivarContent } from '@/types/content';

export const marisPiper: CultivarContent = {
  id: 'maris-piper',
  slug: 'maris-piper',
  contentType: 'cultivar',
  title: 'Maris Piper',
  acceptedName: 'Maris Piper',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'United Kingdom',
  originRegion: 'Cambridge, England (Plant Breeding Institute)',
  yearReleased: '1966',
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
  maturityClass: 'Maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically oval with cream skin and shallow eyes.',
  intendedUse: ['Chips / French fries', 'Roasting', 'Mashing', 'Table'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Cream / pale flesh',
    'Floury cooked texture',
    'Versatile: well regarded for chips and roasting',
  ],
  summary:
    'Maris Piper is a British maincrop potato bred at the Plant Breeding Institute in Cambridge and released in 1966, one of the most widely grown UK varieties and a popular floury potato for chips and roasting.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maris Piper is a maincrop potato bred at the Plant Breeding Institute in Cambridge, England, and released in 1966. The "Maris" prefix, shared with other Institute varieties, derives from Maris Lane near the breeding station. It became one of the most widely grown potato varieties in the United Kingdom.',
    },
    {
      type: 'paragraph',
      text: 'The variety has cream, floury flesh and is valued as a versatile cooking potato, particularly well regarded for chips (French fries) and roasting. It is admitted to the national variety list in Great Britain, which permits the marketing of its seed.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'Cambridge, England (Plant Breeding Institute)' },
    { label: 'Year released', value: '1966' },
    { label: 'Maturity', value: 'Maincrop' },
    { label: 'Flesh', value: 'Cream / pale' },
    { label: 'Cooking type', value: 'Floury; favoured for chips and roasting' },
    { label: 'Registry status', value: 'Listed (United Kingdom)' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Maris Piper was produced by cross-breeding at the Plant Breeding Institute, Cambridge, and released in 1966. It went on to become a mainstay of UK potato production and one of the country’s best-known culinary varieties, especially associated with chips and roast potatoes.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Flesh colour', description: 'Cream to pale' },
            { term: 'Cooking character', description: 'Floury' },
            {
              term: 'Typical culinary uses',
              description: 'Chips (French fries), roasting, mashing',
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
          text: 'Maris Piper is admitted to the national variety list in Great Britain. Listing is a permission to market seed rather than a recommendation, and it is date-specific; it should be confirmed against the current National List. As a maincrop it is grown as a cool-season crop like potato generally, and its cooking and agronomic behaviour vary with region, season, and storage.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'For current disease- and pest-resistance ratings, consult an up-to-date variety database such as the AHDB potato variety resources; such ratings are pathotype-, region-, and date-specific and are not reproduced here.',
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
    'Best documented in the United Kingdom, where it is widely grown; also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season maincrop.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Registry/listing status is jurisdiction- and date-specific; confirm against the current Great Britain National List.',
    'Resistance characteristics are not asserted here; consult a current variety database for pathotype- and region-specific ratings.',
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
      sourceId: 'britannica',
      citedFor: 'General background on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Maris Piper (potato cultivar)',
    description:
      'Maris Piper: a British maincrop potato bred at the Plant Breeding Institute, Cambridge, in 1966, a widely grown floury variety for chips and roasting.',
    keywords: [
      'Maris Piper',
      'chipping potato',
      'Plant Breeding Institute',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
