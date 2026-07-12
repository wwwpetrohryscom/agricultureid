import type { CultivarContent } from '@/types/content';

export const sauvignonBlanc: CultivarContent = {
  id: 'sauvignon-blanc',
  slug: 'sauvignon-blanc',
  contentType: 'cultivar',
  title: 'Sauvignon Blanc',
  scientificName: 'Vitis vinifera',
  alternativeNames: ['Blanc Fume', 'Fume Blanc'],
  category: 'Grape cultivar',
  subcategory: 'White wine grape',
  summary:
    'Sauvignon Blanc is an aromatic white wine grape from the Loire Valley and Bordeaux in France, known for crisp, high-acid wines with herbaceous and citrus character. It is one of the two parents of Cabernet Sauvignon.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sauvignon Blanc is a green-skinned wine grape (Vitis vinifera) associated with the Loire Valley, where it makes Sancerre and Pouilly-Fume, and with Bordeaux, where it appears in both dry and sweet white wines. It is valued for pronounced aromatics and naturally high acidity.',
    },
    {
      type: 'paragraph',
      text: 'A clonal cultivar propagated from cuttings, Sauvignon Blanc is grown in cool to moderate climates that preserve its acidity and aromatic character. It is genetically significant as one of the two parents of Cabernet Sauvignon, alongside Cabernet Franc.',
    },
  ],
  parentCrop: { type: 'crop', slug: 'grape' },
  acceptedName: 'Sauvignon Blanc',
  botanicalTaxon: 'Vitis vinifera',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Traditional selection',
  originCountry: 'France',
  originRegion: 'Loire Valley and Bordeaux',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'Vitis International Variety Catalogue (VIVC)',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Catalogued as a Vitis vinifera white wine-grape variety and a documented parent of Cabernet Sauvignon.',
    },
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Germplasm accessions maintained in the US National Plant Germplasm System.',
    },
  ],
  intendedUse: ['White wine (dry; also a component of sweet blends)'],
  climateAdaptation:
    'Generally grown in cool to moderate climates that retain its high acidity and aromatic character; in hot climates it can lose aromatic definition.',
  qualityTraits: [
    'Naturally high acidity and pronounced aromatics',
    'Aromas often described as gooseberry, citrus, and grass or herbaceous notes',
    'Usually made as a crisp, unoaked dry white, though barrel-fermented styles exist',
    'A component of sweet Bordeaux blends alongside Semillon in some appellations',
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Grape (Vitis vinifera)' },
    { label: 'Type', value: 'White wine grape (clonal cultivar)' },
    { label: 'Origin', value: 'Loire Valley and Bordeaux, France' },
    {
      label: 'Genetic significance',
      value: 'One of the two parents of Cabernet Sauvignon',
    },
    { label: 'Climate', value: 'Cool to moderate climates' },
    { label: 'Registry status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-significance',
      heading: 'Origin and significance',
      body: [
        {
          type: 'paragraph',
          text: 'Sauvignon Blanc is native to France, with strong historical associations in the Loire Valley and Bordeaux. Its name is generally linked to the French word for wild, reflecting its early history as a vigorous variety.',
        },
        {
          type: 'paragraph',
          text: 'DNA analysis established that Sauvignon Blanc is, together with Cabernet Franc, a parent of Cabernet Sauvignon. It has since become an internationally planted variety, with cool-climate regions such as Marlborough in New Zealand becoming closely identified with its aromatic style.',
        },
      ],
    },
    {
      id: 'growing-characteristics',
      heading: 'Growing characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Sauvignon Blanc is a vigorous variety that benefits from canopy management to control growth and expose fruit appropriately. It is generally picked to retain fresh acidity, and cooler sites help preserve its aromatic compounds.',
        },
        {
          type: 'list',
          items: [
            'Vigorous growth that is typically managed through canopy work',
            'Best aromatic expression in cool to moderate climates',
            'Grown on a range of soils, including flinty and limestone soils in the Loire',
            'Usually harvested to retain high natural acidity',
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
          text: 'Sauvignon Blanc is most often made as a crisp, dry, aromatic white wine, though it can also be barrel-fermented for a richer style and contributes to sweet white Bordeaux blends where affected by noble rot.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The aromatic profile of Sauvignon Blanc is strongly influenced by climate, harvest timing, and winemaking; the descriptions here are general and qualitative.',
        },
      ],
    },
  ],
  connections: [
    { type: 'cultivar', slug: 'cabernet-sauvignon' },
    { type: 'soil', slug: 'chalky-soil' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Originating in France (Loire Valley and Bordeaux) and now grown in cool to moderate wine regions worldwide, notably New Zealand.',
  climateContext:
    'Aromatic white variety favouring cool to moderate climates that preserve acidity.',
  limitations: [
    'Wine style depends heavily on terroir, harvest timing, and winemaking; the variety description is not a description of any individual wine.',
    'Only the parent-of-Cabernet-Sauvignon relationship is asserted here; Sauvignon Blanc’s own parentage is not stated to avoid over-asserting less firmly established detail.',
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
    title: 'Sauvignon Blanc (grape cultivar)',
    description:
      'Sauvignon Blanc: an aromatic French white wine grape and a parent of Cabernet Sauvignon — origin, cool-climate growing traits, and crisp wine style.',
    keywords: [
      'Sauvignon Blanc',
      'grape cultivar',
      'Vitis vinifera',
      'white wine grape',
    ],
  },
  structuredData: { article: true },
};
