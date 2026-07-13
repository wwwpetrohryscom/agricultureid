import type { CultivarContent } from '@/types/content';

export const desireePotato: CultivarContent = {
  id: 'desiree-potato',
  slug: 'desiree-potato',
  contentType: 'cultivar',
  title: 'Désirée',
  acceptedName: 'Désirée',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'Netherlands',
  originRegion: 'Netherlands',
  registrationStatus: 'listed',
  registrationJurisdiction: 'European Union',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry:
        'EU Common Catalogue of varieties of agricultural plant species',
      sourceId: 'ec-plant-variety',
      jurisdiction: 'European Union',
      status: 'listed',
      asOf: '2026-07-12',
      note: 'Admitted for marketing in the EU; listing is a marketing permission, not a recommendation, and is version/date-specific.',
    },
  ],
  maturityClass: 'Maincrop',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically oval with red skin and pale-yellow flesh.',
  intendedUse: ['Table (boiling, roasting, mashing)', 'Chips / French fries'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is asserted here.',
  qualityTraits: [
    'Red skin',
    'Pale-yellow flesh',
    'Firm, versatile texture (a moderately floury all-rounder)',
  ],
  summary:
    'Désirée is a red-skinned, yellow-fleshed Dutch maincrop potato, a widely grown, versatile all-rounder used for boiling, roasting, mashing, and chips.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Désirée is a red-skinned potato bred in the Netherlands, distinguished by its smooth red skin and pale-yellow flesh. It became one of the most widely grown red-skinned varieties internationally and is treated as a versatile, all-purpose potato.',
    },
    {
      type: 'paragraph',
      text: 'The flesh is firm and moderately floury, allowing the tubers to be used for boiling, roasting, mashing, and chips. Its combination of appearance, versatility, and wide adaptation contributed to its popularity across many growing regions.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'Netherlands' },
    { label: 'Maturity', value: 'Maincrop' },
    { label: 'Skin and flesh', value: 'Red skin; pale-yellow flesh' },
    { label: 'Cooking type', value: 'Firm, versatile (moderately floury)' },
    {
      label: 'Principal uses',
      value: 'Boiling, roasting, mashing, chips',
    },
    { label: 'Registry status', value: 'Listed (European Union)' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Désirée is a Dutch-bred maincrop variety produced by cross-breeding. It is best recognised by its red skin and pale-yellow flesh, an uncommon and marketable combination that helped make it a widely grown red variety in many countries.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Skin', description: 'Smooth red' },
            { term: 'Flesh colour', description: 'Pale yellow' },
            {
              term: 'Cooking character',
              description:
                'Firm and versatile; a moderately floury all-rounder',
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
          text: 'Désirée is admitted to the EU Common Catalogue of varieties of agricultural plant species, which permits its marketing within the European Union. Listing is a marketing permission rather than a recommendation and is version- and date-specific. As a maincrop it is grown as a cool-season crop like potato generally, and its cooking and agronomic behaviour vary with region, season, and storage.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'climate', slug: 'drought' },
  ],
  glossaryTerms: ['cultivar'],
  geographicScope:
    'Bred in the Netherlands and grown widely internationally. Culinary and agronomic behaviour is region- and season-specific.',
  climateContext: 'Temperate cool-season maincrop.',
  limitations: [
    'Cooking and agronomic behaviour is region- and season-specific and varies with storage.',
    'Registry/listing status is jurisdiction- and date-specific; confirm against the current EU Common Catalogue.',
    'The exact year of introduction is reported inconsistently in the literature and is therefore not stated.',
  ],
  sourceReferences: [
    {
      sourceId: 'ec-plant-variety',
      citedFor: 'EU Common Catalogue listing of the variety',
    },
    {
      sourceId: 'usda-grin',
      citedFor: 'Solanum tuberosum classification and germplasm context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Potato variety characteristics and background',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Désirée (potato cultivar)',
    description:
      'Désirée potato: a red-skinned, yellow-fleshed Dutch maincrop, a widely grown and versatile all-rounder used for boiling, roasting, mashing, and chips.',
    keywords: [
      'Desiree potato',
      'red-skinned potato',
      'maincrop potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
