import type { CultivarContent } from '@/types/content';

export const bintje: CultivarContent = {
  id: 'bintje',
  slug: 'bintje',
  contentType: 'cultivar',
  title: 'Bintje',
  acceptedName: 'Bintje',
  category: 'Potato cultivar',
  parentCrop: { type: 'crop', slug: 'potato' },
  botanicalTaxon: 'Solanum tuberosum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding',
  originCountry: 'Netherlands',
  originRegion: 'Friesland, Netherlands',
  breederOrInstitution:
    'Kornelis Lieuwes de Vries (schoolteacher and amateur breeder), Friesland',
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
  maturityClass: 'Maincrop (mid-season)',
  growthHabit:
    'Herbaceous annual; tubers borne on underground stolons, typically long-oval with yellow skin and flesh.',
  intendedUse: ['French fries', 'Table (boiling)', 'Processing'],
  climateAdaptation:
    'A temperate maincrop grown as a cool-season crop like potato generally; sensitive to frost and to heat during tuber bulking.',
  soilAdaptation:
    'Grown on the loose, well-drained soils preferred by potato generally; no unusual soil requirement is documented here.',
  qualityTraits: [
    'Yellow flesh and skin',
    'Long-oval tuber shape',
    'Relatively floury / all-purpose texture well suited to frying',
  ],
  summary:
    'Bintje is a yellow-fleshed Dutch potato bred by Kornelis Lieuwes de Vries in Friesland in the early twentieth century, historically one of the most important frying and all-purpose varieties in north-west Europe.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bintje is a yellow-fleshed potato bred in the Netherlands by Kornelis Lieuwes de Vries, a Frisian schoolteacher and amateur potato breeder, in the early twentieth century. It was reportedly named after one of his pupils. Bintje became one of the most widely grown potatoes in north-west Europe and a benchmark variety for frying.',
    },
    {
      type: 'paragraph',
      text: 'The tubers are long-oval with yellow skin and flesh and a relatively floury, all-purpose texture. Bintje is strongly associated with the production of fried potatoes (frites) in Belgium, France, and the Netherlands, and it is also used as a general table and processing potato.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Solanum tuberosum' },
    { label: 'Origin', value: 'Friesland, Netherlands' },
    {
      label: 'Breeder',
      value: 'Kornelis Lieuwes de Vries (early twentieth century)',
    },
    { label: 'Maturity', value: 'Maincrop (mid-season)' },
    { label: 'Skin and flesh', value: 'Yellow skin; yellow flesh' },
    { label: 'Cooking type', value: 'Relatively floury; noted for frying' },
    { label: 'Registry status', value: 'Listed (European Union)' },
  ],
  sections: [
    {
      id: 'background-and-identity',
      heading: 'Background and identity',
      body: [
        {
          type: 'paragraph',
          text: 'Bintje was produced by cross-breeding by K. L. de Vries in the Dutch province of Friesland in the early 1900s and went on to become one of Europe’s most influential potato varieties. Its yellow flesh and frying quality made it a standard for fried-potato production across north-west Europe.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Skin and flesh', description: 'Yellow' },
            { term: 'Tuber shape', description: 'Long-oval' },
            {
              term: 'Cooking character',
              description:
                'Relatively floury / all-purpose; well suited to frying',
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
          text: 'Bintje is admitted to the EU Common Catalogue of varieties of agricultural plant species, which permits its marketing within the European Union. Listing is a marketing permission rather than a recommendation and is version- and date-specific. As a maincrop it is grown as a cool-season crop like potato generally, and its cooking and agronomic behaviour vary with region, season, and storage.',
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
    'Best documented in north-west Europe (Netherlands, Belgium, France); also grown elsewhere. Culinary and agronomic behaviour is region- and season-specific.',
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
      sourceId: 'britannica',
      citedFor: 'General background on the variety (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Bintje (potato cultivar)',
    description:
      'Bintje: a yellow-fleshed Dutch potato bred by K. L. de Vries in Friesland, historically a leading frying and all-purpose variety in north-west Europe.',
    keywords: [
      'Bintje',
      'yellow potato',
      'frites potato',
      'Solanum tuberosum',
      'potato cultivar',
    ],
  },
  structuredData: { article: true },
};
