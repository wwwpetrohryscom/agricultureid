import type { CultivarContent } from '@/types/content';

export const cabernetSauvignon: CultivarContent = {
  id: 'cabernet-sauvignon',
  slug: 'cabernet-sauvignon',
  contentType: 'cultivar',
  title: 'Cabernet Sauvignon',
  scientificName: 'Vitis vinifera',
  category: 'Grape cultivar',
  subcategory: 'Red wine grape',
  summary:
    'Cabernet Sauvignon is a red wine grape that arose in Bordeaux, France, and is now among the most widely planted wine grapes in the world. DNA analysis has shown it to be a natural cross of Cabernet Franc and Sauvignon Blanc.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cabernet Sauvignon is a black-skinned wine grape (Vitis vinifera) that originated in the Bordeaux region of south-west France. It is late-ripening, with small, thick-skinned berries, and has become one of the most planted and internationally recognised red wine varieties, grown across a wide range of warm and temperate wine regions.',
    },
    {
      type: 'paragraph',
      text: 'The variety is an ancient clonal cultivar propagated vegetatively, so vineyards are established from cuttings or grafted vines rather than seed. Its parentage as a natural cross of Cabernet Franc and Sauvignon Blanc was established by DNA analysis at the University of California, Davis, in 1997, and it is now documented in variety catalogues such as the Vitis International Variety Catalogue.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Cabernet Sauvignon',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Natural cross (parentage documented by DNA analysis)',
  originCountry: 'France',
  originRegion: 'Bordeaux, south-west France',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera wine-grape variety with documented parentage. Record identifiers are not reproduced here to avoid asserting a value not independently verified.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions of the cultivar are maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['Red wine (varietal and blended)'],
  climateAdaptation:
    'A late-ripening variety generally suited to warm climates with a long growing season; it may struggle to ripen fully in cool sites or short seasons.',
  qualityTraits: [
    'Small, thick-skinned berries that contribute deep colour and firm tannin',
    'Aromas often described as blackcurrant (cassis), sometimes with herbaceous or cedar notes',
    'Structured, tannic wines that are frequently oak-aged and can age for many years',
    'Widely blended with Merlot and Cabernet Franc in the classic Bordeaux style',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'Red wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Bordeaux, France' },
    {
      label: 'Documented parentage',
      value: 'Natural cross of Cabernet Franc x Sauvignon Blanc',
      note: 'Established by DNA analysis (UC Davis, 1997).',
    },
    { label: 'Ripening', value: 'Late-ripening; suited to warm climates' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-parentage',
      heading: 'Origin and parentage',
      body: [
        {
          type: 'paragraph',
          text: 'Cabernet Sauvignon emerged in Bordeaux and is closely associated with the gravelly soils of the Medoc and Graves on the left bank of the Gironde. For much of its history its parentage was unknown, and it was assumed to be a very old variety of independent origin.',
        },
        {
          type: 'paragraph',
          text: 'In 1997, DNA marker analysis at the University of California, Davis, showed that Cabernet Sauvignon is a natural cross between the red variety Cabernet Franc and the white variety Sauvignon Blanc, a finding that is now widely reported in the viticultural literature and variety catalogues.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'The variety buds relatively late, which can help it avoid spring frosts, but it also ripens late and therefore needs sufficient accumulated warmth to reach full maturity. In cooler seasons or sites the wines can show more pronounced herbaceous character.',
        },
        {
          type: 'list',
          items: [
            'Small berries with a high skin-to-pulp ratio, contributing colour and tannin',
            'Late budbreak and late ripening, favouring longer, warmer growing seasons',
            'Vigorous vines that are managed through canopy and rootstock choices',
            'Traditionally grown on well-drained, gravelly soils in its Bordeaux home',
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
          text: 'Cabernet Sauvignon is used for dry red wine, both as a single-variety (varietal) wine and as a component of blends. In Bordeaux it is classically blended with Merlot and Cabernet Franc; in many New World regions it is bottled as a varietal wine, often oak-matured.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The style of a Cabernet Sauvignon wine depends heavily on site (terroir), the specific clone, rootstock, growing season, and winemaking decisions. Descriptions here are qualitative generalisations, not guarantees for any particular wine.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'parentage',
      statement:
        'Cabernet Sauvignon is a natural cross of Cabernet Franc and Sauvignon Blanc, established by DNA marker analysis at the University of California, Davis, in 1997.',
      citations: [
        {
          sourceId: 'britannica',
          evidenceNote:
            'Encyclopaedia Britannica documents the Cabernet Franc x Sauvignon Blanc parentage identified by DNA analysis.',
          evidenceTier: 3,
        },
      ],
    },
  ],
  connections: [
    { type: 'cultivar', slug: 'merlot' },
    { type: 'cultivar', slug: 'sauvignon-blanc' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Bordeaux, France, and now grown in warm and temperate wine regions worldwide. Regional performance and wine style vary widely by site and clone.',
  climateContext:
    'Late-ripening variety generally matched to warm climates with a long growing season.',
  limitations: [
    'Wine style depends heavily on terroir, clone, rootstock, growing season, and winemaking; a description of the variety is not a description of any individual wine.',
    'Registry record identifiers and deep links are omitted where they could not be independently verified.',
    'The variety is a clonal cultivar with many registered clones that differ in vigour and fruit character; this page describes the variety in general terms.',
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
        'Historical background and documented parentage (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cabernet Sauvignon (grape cultivar)',
    description:
      'Cabernet Sauvignon: a Bordeaux red wine grape and documented natural cross of Cabernet Franc and Sauvignon Blanc — origin, growing traits, and wine style.',
    keywords: [
      'Cabernet Sauvignon',
      'grape cultivar',
      'Vitis vinifera',
      'Bordeaux red wine grape',
    ],
  },
  structuredData: { article: true },
};
