import type { CultivarContent } from '@/types/content';

export const merlot: CultivarContent = {
  id: 'merlot',
  slug: 'merlot',
  contentType: 'cultivar',
  title: 'Merlot',
  scientificName: 'Vitis vinifera',
  category: 'Grape cultivar',
  subcategory: 'Red wine grape',
  summary:
    'Merlot is a red wine grape from Bordeaux, France, widely grown for soft, early-drinking red wines and as a blending partner for Cabernet Sauvignon. DNA analysis identifies Cabernet Franc as one of its parents.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Merlot is a black-skinned wine grape (Vitis vinifera) that originated in the Bordeaux region of France, where it is the most planted variety and dominates the right-bank districts of Saint-Emilion and Pomerol. It is prized for producing supple, relatively soft red wines that are approachable at a younger age than many Cabernet Sauvignon wines.',
    },
    {
      type: 'paragraph',
      text: 'An ancient clonal cultivar propagated vegetatively, Merlot ripens earlier than Cabernet Sauvignon and is often blended with it. DNA analysis has identified Cabernet Franc as one of its parents, which makes Merlot a close genetic relative of Cabernet Sauvignon, since Cabernet Franc is a parent of both.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Merlot',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection (one parent documented by DNA analysis)',
  originCountry: 'France',
  originRegion: 'Bordeaux, south-west France',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera wine-grape variety.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['Red wine (varietal and blended)'],
  climateAdaptation:
    'An earlier-ripening variety than Cabernet Sauvignon, grown in temperate to warm climates; earlier budbreak can make it more exposed to spring frost.',
  qualityTraits: [
    'Generally softer, rounder tannins than Cabernet Sauvignon',
    'Aromas often described as plum and black cherry',
    'Wines that are frequently approachable relatively young',
    'A classic blending partner with Cabernet Sauvignon and Cabernet Franc in Bordeaux-style reds',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'Red wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Bordeaux, France' },
    {
      label: 'Documented parent',
      value: 'Cabernet Franc (one parent, identified by DNA analysis)',
      note: 'This makes Merlot a close relative of Cabernet Sauvignon.',
    },
    { label: 'Ripening', value: 'Earlier-ripening than Cabernet Sauvignon' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-parentage',
      heading: 'Origin and parentage',
      body: [
        {
          type: 'paragraph',
          text: 'Merlot is documented in Bordeaux from the 18th and 19th centuries and became central to the clay- and limestone-rich soils of the right bank of the Dordogne, in districts such as Pomerol and Saint-Emilion.',
        },
        {
          type: 'paragraph',
          text: 'DNA analysis has identified Cabernet Franc as one of Merlot’s parents. Because Cabernet Franc is also a parent of Cabernet Sauvignon, the two Bordeaux reds are closely related, which is consistent with their long history of being grown and blended together.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Merlot generally buds and ripens earlier than Cabernet Sauvignon, which allows it to reach maturity in slightly cooler sites and gives growers flexibility in blends. Earlier budbreak can, however, increase exposure to spring frost.',
        },
        {
          type: 'list',
          items: [
            'Earlier budbreak and earlier ripening than Cabernet Sauvignon',
            'Well suited to cooler, clay-rich soils in its Bordeaux home',
            'Larger, thinner-skinned berries than Cabernet Sauvignon',
            'Widely planted internationally as both a varietal and a blending grape',
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
          text: 'Merlot is used for dry red wine, both as a varietal and as a blending component that can soften and add flesh to firmer varieties such as Cabernet Sauvignon. Styles range from lighter, fruit-forward wines to concentrated, age-worthy examples.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'As with all wine grapes, Merlot’s character in the glass depends strongly on site, clone, growing season, and winemaking; the descriptions here are qualitative generalisations.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'parentage',
      statement:
        'Merlot has Cabernet Franc as one documented parent, identified through DNA analysis, making it a close genetic relative of Cabernet Sauvignon.',
      citations: [
        {
          sourceId: 'britannica',
          evidenceNote:
            'Encyclopaedia Britannica documents Merlot’s relationship to Cabernet Franc and the Cabernet family.',
          evidenceTier: 3,
        },
      ],
    },
  ],
  connections: [
    { type: 'cultivar', slug: 'cabernet-sauvignon' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in Bordeaux, France, and widely grown in temperate to warm wine regions worldwide as both a varietal and a blending grape.',
  climateContext:
    'Earlier-ripening than Cabernet Sauvignon; grown across temperate to warm climates.',
  limitations: [
    'Wine style depends heavily on terroir, clone, growing season, and winemaking; the variety description is not a description of any individual wine.',
    'The variety is a clonal cultivar with multiple registered clones differing in vigour and fruit character; this page describes it in general terms.',
    'Only Cabernet Franc is asserted here as a documented parent; the second parent is not stated to avoid over-asserting less firmly established detail.',
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
    title: 'Merlot (grape cultivar)',
    description:
      'Merlot: a Bordeaux red wine grape known for soft, approachable wines and blending with Cabernet Sauvignon — origin, documented parentage, and wine style.',
    keywords: ['Merlot', 'grape cultivar', 'Vitis vinifera', 'red wine grape'],
  },
  structuredData: { article: true },
};
