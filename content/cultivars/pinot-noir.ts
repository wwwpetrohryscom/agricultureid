import type { CultivarContent } from '@/types/content';

export const pinotNoir: CultivarContent = {
  id: 'pinot-noir',
  slug: 'pinot-noir',
  contentType: 'cultivar',
  title: 'Pinot Noir',
  scientificName: 'Vitis vinifera',
  alternativeNames: ['Spatburgunder', 'Pinot Nero', 'Blauburgunder'],
  category: 'Grape cultivar',
  subcategory: 'Red wine grape',
  summary:
    'Pinot Noir is an ancient red wine grape from Burgundy, France, valued for elegant, aromatic red wines and as a principal grape of Champagne. It is regarded as difficult to grow and best suited to cool climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pinot Noir is a black-skinned wine grape (Vitis vinifera) at the heart of red Burgundy and one of the three principal grapes of Champagne. It is an old, genetically important variety that has given rise to many related grapes, and it is grown for light- to medium-bodied, aromatic red wines.',
    },
    {
      type: 'paragraph',
      text: 'A clonal cultivar propagated from cuttings, Pinot Noir is known for its tight clusters, thin skins, and tendency to mutate, which has produced a large number of distinct clones as well as colour mutations such as Pinot Gris and Pinot Blanc. It has a reputation as a demanding variety to grow well, favouring cool climates and carefully matched sites.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Pinot Noir',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection (ancient variety)',
  originCountry: 'France',
  originRegion: 'Burgundy, eastern France',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as an ancient Vitis vinifera wine-grape variety with numerous clones and related colour mutants.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['Red wine (still)', 'Sparkling wine (including Champagne)'],
  climateAdaptation:
    'Generally regarded as a cool-climate variety; it buds and ripens early and can lose finesse or ripen unevenly in hot conditions.',
  qualityTraits: [
    'Thin-skinned berries in tight clusters, giving lighter colour than many red varieties',
    'Aromas often described as red cherry and raspberry, sometimes with earthy or floral notes',
    'Typically lighter-bodied wines with comparatively fine tannins',
    'A principal grape of traditional-method sparkling wine, including Champagne',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'Red wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Burgundy, France' },
    { label: 'Climate', value: 'Best suited to cool climates' },
    {
      label: 'Notable trait',
      value: 'Genetically unstable; many clones and colour mutations',
    },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-relatives',
      heading: 'Origin and relatives',
      body: [
        {
          type: 'paragraph',
          text: 'Pinot Noir is one of the oldest documented wine grapes, long associated with the Cote d’Or of Burgundy. It is genetically central to a family of varieties: colour mutations of Pinot Noir give Pinot Gris and Pinot Blanc, and crosses involving a Pinot are the origin of several other French varieties, including Chardonnay.',
        },
        {
          type: 'paragraph',
          text: 'Its long cultivation and tendency to mutate mean that many clones exist, selected over time for differences in cluster size, yield, and character. This clonal diversity is an important part of how the variety is grown and studied.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Pinot Noir buds early, exposing it to spring frost, and its tight, thin-skinned clusters are vulnerable to bunch rot in damp conditions. It ripens early and is generally matched to cool climates and limestone-influenced or well-drained soils.',
        },
        {
          type: 'list',
          items: [
            'Tight clusters and thin skins, raising sensitivity to bunch rot',
            'Early budbreak with associated spring-frost risk',
            'Best suited to cool climates and carefully chosen sites',
            'Widely propagated as many distinct clones',
          ],
        },
      ],
    },
    {
      id: 'wine-style-and-use',
      heading: 'Wine style and use',
      body: [
        {
          type: 'paragraph',
          text: 'Pinot Noir is made into dry red wine, typically lighter in colour and body than varieties such as Cabernet Sauvignon, and it is one of the principal grapes of traditional-method sparkling wine, where it is often blended with Chardonnay.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Pinot Noir is widely considered sensitive to site and season, so its style varies considerably; descriptions here are qualitative and general rather than specific to any wine.',
        },
      ],
    },
  ],
  connections: [
    { type: 'cultivar', slug: 'chardonnay' },
    { type: 'soil', slug: 'chalky-soil' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Burgundy, France, and grown in cool-climate wine regions worldwide for still red and sparkling wine.',
  climateContext:
    'Cool-climate variety with early budbreak; sensitive to heat, frost, and bunch rot.',
  limitations: [
    'Wine style depends heavily on terroir, clone, growing season, and winemaking; the variety description is not a description of any individual wine.',
    'Pinot Noir is unusually clone-dependent, and different clones can behave and taste noticeably differently on the same site.',
    'Registry record identifiers and deep links are omitted where they could not be independently verified.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Cultivar/germplasm records and taxonomy for Vitis vinifera',
    },
    { sourceId: 'gbif', citedFor: 'Taxonomic placement of Vitis vinifera' },
    {
      sourceId: 'britannica',
      citedFor:
        'Historical background and varietal characterisation (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pinot Noir (grape cultivar)',
    description:
      'Pinot Noir: an ancient Burgundy red wine grape and key Champagne variety, prized for elegant cool-climate reds — origin, clones, growing traits, and style.',
    keywords: [
      'Pinot Noir',
      'grape cultivar',
      'Vitis vinifera',
      'Burgundy red wine grape',
    ],
  },
  structuredData: { article: true },
};
