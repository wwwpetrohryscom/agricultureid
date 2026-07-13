import type { CultivarContent } from '@/types/content';

export const concordGrape: CultivarContent = {
  id: 'concord-grape',
  slug: 'concord-grape',
  contentType: 'cultivar',
  title: 'Concord',
  scientificName: 'Vitis labrusca',
  alternativeNames: ['Concord grape'],
  category: 'Grape cultivar',
  subcategory: 'American grape (juice, jelly, table)',
  summary:
    'Concord is an American grape derived from the native species Vitis labrusca, selected in Concord, Massachusetts, in the mid-19th century. It is a cold-hardy, slip-skin grape widely used for juice, jelly, and table use rather than fine wine.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Concord is a blue-black American grape based on the native North American species Vitis labrusca, distinct from the European wine grape Vitis vinifera behind most wine and table-grape cultivars. It is best known for grape juice and jelly, with the characteristic "foxy", musky aroma typical of labrusca grapes.',
    },
    {
      type: 'paragraph',
      text: 'The variety was selected by Ephraim Wales Bull in Concord, Massachusetts, from seedlings of wild native grapes, and it was introduced commercially in the mid-19th century. It is a cold-hardy, disease-tolerant, slip-skin grape (the skin separates easily from the pulp) suited to the humid, cold-winter climate of the northeastern and midwestern United States.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Concord',
  botanicalTaxon: 'Vitis labrusca',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Selection from native Vitis labrusca seedlings',
  originCountry: 'United States',
  originRegion: 'Concord, Massachusetts',
  yearReleased: '1854',
  breederOrInstitution: 'Ephraim Wales Bull',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis labrusca-based American grape variety, distinct from the Vitis vinifera wine grapes.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions of the cultivar are maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: [
    'Grape juice',
    'Jelly and preserves',
    'Table grapes',
    'Some sweet and Kosher wines',
  ],
  climateAdaptation:
    'Cold-hardy and disease-tolerant relative to Vitis vinifera, suited to humid, cold-winter climates of the northeastern and midwestern United States where many European grapes struggle.',
  qualityTraits: [
    'Blue-black, slip-skin berries (skin separates easily from the pulp)',
    'Pronounced "foxy" or musky aroma characteristic of Vitis labrusca',
    'Deep purple juice, widely used for juice and jelly',
    'More cold-hardy and disease-tolerant than typical Vitis vinifera cultivars',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (genus Vitis)' },
    {
      label: 'Species',
      value: 'Vitis labrusca (American grape), not Vitis vinifera',
      note: 'The genus Vitis is shared with wine grapes, but the species differs.',
    },
    { label: 'Origin', value: 'Concord, Massachusetts, United States' },
    { label: 'Introduced', value: 'Mid-19th century (about 1854)' },
    { label: 'Main uses', value: 'Juice, jelly, table grapes' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-species',
      heading: 'Origin and species',
      body: [
        {
          type: 'paragraph',
          text: 'Concord was selected by Ephraim Wales Bull near Concord, Massachusetts, who raised seedlings from wild native grapes and chose a vine that ripened reliably in the short New England season. It was introduced to commerce in the mid-19th century and became one of the most important American grapes.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A different species from wine grapes',
          text: 'Concord is based on Vitis labrusca, a North American species, rather than the European Vitis vinifera behind most wine and table cultivars. Both belong to the genus Vitis, but the species differ, which underlies Concord’s distinctive flavour, slip-skin texture, and greater cold- and disease-tolerance.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'As a labrusca-based grape, Concord is notably cold-hardy and comparatively tolerant of the fungal diseases that affect many European grapes in humid climates. These traits made it well suited to the eastern United States, and it is grown commercially in states such as New York, Michigan, and Washington.',
        },
        {
          type: 'list',
          items: [
            'Cold-hardy, suiting cold-winter continental climates',
            'More tolerant of humid-climate diseases than typical Vitis vinifera',
            'Slip-skin berries that separate easily from the pulp',
            'Ripens reliably in relatively short growing seasons',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Concord is used above all for grape juice and for jelly and preserves, and it is sold as a table grape. Its distinctive labrusca character makes it less suited to dry table wine, though it is used for some sweet and Kosher wines.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The characteristic aroma of Concord comes largely from compounds typical of Vitis labrusca; this is a qualitative description of flavour character, not a quality judgement against Vitis vinifera grapes.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Massachusetts and grown mainly in the northeastern and midwestern United States and the Pacific Northwest, with limited cultivation elsewhere.',
  climateContext:
    'Cold-hardy American grape suited to humid, cold-winter climates where Vitis vinifera is harder to grow.',
  limitations: [
    'Concord is a Vitis labrusca-based cultivar, so its flavour and cultivation differ substantially from the Vitis vinifera wine and table grapes; comparisons should account for the different species.',
    'The introduction date is given approximately; sources place the selection and first commercial release in the early-to-mid 1850s.',
    'Registry record identifiers and deep links are omitted where they could not be independently verified.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Cultivar/germplasm records and taxonomy for Vitis labrusca',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic placement of Vitis labrusca',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Historical background, origin, and varietal characterisation (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Concord (grape cultivar)',
    description:
      'Concord: a cold-hardy American Vitis labrusca grape from Massachusetts, used for juice, jelly, and table grapes — origin, species, and growing traits.',
    keywords: [
      'Concord grape',
      'Vitis labrusca',
      'American grape',
      'grape juice cultivar',
    ],
  },
  structuredData: { article: true },
};
