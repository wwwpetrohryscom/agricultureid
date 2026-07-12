import type { CultivarContent } from '@/types/content';

export const fujiApple: CultivarContent = {
  id: 'cultivar-fuji-apple',
  slug: 'fuji-apple',
  contentType: 'cultivar',
  title: 'Fuji',
  acceptedName: "Malus domestica 'Fuji'",
  category: 'Apple cultivar',
  summary:
    'Fuji is a very sweet, dense, late-maturing dessert apple bred in Japan from a cross of Ralls Janet and Red Delicious and introduced to market in 1962. It is prized for high sugar, crisp flesh, and long storage life.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fuji is a dessert apple developed in Japan at the Tohoku Research Station (a national fruit-tree research facility) in Fujisaki, Aomori Prefecture, from a cross between the American cultivars Ralls Janet and Red Delicious. Selection began in the late 1930s and the cultivar was introduced to market in 1962, taking its name from the town of Fujisaki.',
    },
    {
      type: 'paragraph',
      text: 'It is known for its notably high sugar content, dense and crisp flesh, and excellent keeping quality. Fuji became extremely popular in Japan and later worldwide, and it is among the most-produced apples globally. As with other apples, it is maintained clonally by grafting, and numerous colour sports have been selected.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    {
      label: 'Breeding',
      value: 'Controlled cross (Ralls Janet × Red Delicious)',
    },
    { label: 'Origin', value: 'Fujisaki, Aomori Prefecture, Japan' },
    { label: 'Introduced', value: '1962' },
    { label: 'Season', value: 'Late season; long storing' },
    { label: 'Primary use', value: 'Fresh eating (dessert)' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Fuji was bred at the Tohoku Research Station in Fujisaki, Aomori Prefecture, in northern Japan, under the national agricultural research system. The parents were Ralls Janet (also written Rawls Janet) and Red Delicious. After breeding work beginning in the late 1930s and a long selection process, the cultivar was released to market in 1962.',
        },
        {
          type: 'paragraph',
          text: 'Fuji became the leading apple in Japan and expanded widely into China, the United States, and other regions. Its high sugar, crisp texture, and long storage life suited both domestic markets and international trade. Redder-colouring sports have since been selected and grown under various names.',
        },
      ],
    },
    {
      id: 'fruit-and-eating-quality',
      heading: 'Fruit and eating quality',
      body: [
        {
          type: 'list',
          items: [
            'Skin pink-red striped or blushed over a yellow-green ground',
            'Flesh very dense, crisp, and juicy',
            'Flavour very sweet with low acidity and a mild aroma',
            'Stores exceptionally well, retaining crispness for long periods when cool',
          ],
        },
      ],
    },
    {
      id: 'cultivation-notes',
      heading: 'Cultivation notes',
      body: [
        {
          type: 'paragraph',
          text: 'Fuji is a late-maturing cultivar that generally needs a long growing season to develop its characteristic high sugar content. Its exact ripening, colour development, and sugar accumulation depend on climate, rootstock, crop load, and harvest timing, and are therefore highly region-specific.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Cross-breeding (controlled hybridization)',
  originCountry: 'Japan',
  originRegion: 'Fujisaki, Aomori Prefecture',
  yearReleased: '1962',
  breederOrInstitution: 'Tohoku Research Station (Fujisaki, Japan)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global. Various Fuji colour sports have been selected and grown under separate names.',
    },
  ],
  maturityClass: 'Late season',
  intendedUse: ['Fresh eating (dessert)'],
  climateAdaptation:
    'A late-maturing cultivar that generally requires a long growing season to develop its characteristic high sugar content.',
  qualityTraits: [
    'Very sweet, low-acid flavour',
    'Dense, crisp, juicy flesh',
    'Pink-red striped skin over a yellow-green ground',
    'Excellent long storage life',
  ],
  geographicAvailability:
    'Among the most-produced apples worldwide, grown widely in Japan, China, the United States, and other temperate regions.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a major commercial cultivar and its colour sports. Sugar development, colour, and storage depend on region, rootstock, and season.',
  limitations: [
    'Sugar accumulation and colour development depend strongly on climate, crop load, and harvest timing, so eating quality varies between growing regions.',
    'Much commercial Fuji consists of colour sports that differ in appearance; a single description generalizes across them.',
    'Rootstock, orchard management, and post-harvest handling — not covered here — strongly influence storage outcomes.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Cultivar/germplasm record and placement within Malus domestica',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomy of the parent species Malus domestica',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Scientific name and classification of Malus domestica',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fuji (apple cultivar)',
    description:
      'Fuji apple: a very sweet, dense, long-keeping dessert apple bred in Japan (Ralls Janet × Red Delicious) and introduced to market in 1962.',
    keywords: [
      'Fuji apple',
      'apple cultivar',
      'Malus domestica',
      'sweet apple',
    ],
  },
  structuredData: { article: true },
};
