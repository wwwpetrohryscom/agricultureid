import type { CultivarContent } from '@/types/content';

export const redDelicious: CultivarContent = {
  id: 'cultivar-red-delicious',
  slug: 'red-delicious',
  contentType: 'cultivar',
  title: 'Red Delicious',
  acceptedName: "Malus domestica 'Red Delicious'",
  alternativeNames: ['Hawkeye (original name)'],
  category: 'Apple cultivar',
  summary:
    'Red Delicious is a deep-red, elongated dessert apple that began as an Iowa chance seedling named "Hawkeye" and was introduced by Stark Brothers as "Delicious" in 1895. Over the twentieth century it was selected heavily for colour and shipping quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Red Delicious is a widely recognized apple cultivar noted for its deep red skin and distinctive elongated, five-lobed shape. It originated as a chance seedling found by Jesse Hiatt near Peru, Iowa, United States, where it was first called "Hawkeye". Stark Brothers Nurseries acquired it and introduced it commercially as "Delicious" in 1895, later adding "Red" to distinguish it from Golden Delicious.',
    },
    {
      type: 'paragraph',
      text: 'Through the twentieth century, growers propagated numerous bud-sport selections chosen for redder, earlier colour and a more elongated shape. This emphasis on appearance and long-distance shipping is often cited in discussions of how the cultivar’s eating quality came to differ from its earliest form. As a clonal cultivar it is maintained by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Chance seedling' },
    {
      label: 'Origin',
      value: 'Near Peru, Iowa, United States',
      note: 'Introduced as "Delicious" by Stark Bro’s Nurseries in 1895.',
    },
    { label: 'Season', value: 'Mid-to-late season' },
    { label: 'Primary use', value: 'Fresh eating (dessert)' },
    {
      label: 'Registry status',
      value: 'Heritage cultivar; numerous colour sports propagated over time',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The cultivar arose as a chance seedling on the farm of Jesse Hiatt near Peru, Iowa, and was originally named "Hawkeye". Stark Brothers Nurseries purchased the rights, renamed it "Delicious", and introduced it commercially in 1895; the "Red" prefix came into use after the firm introduced Golden Delicious in 1914.',
        },
        {
          type: 'paragraph',
          text: 'Over subsequent decades, many bud-sport selections (for example "Starking", "Richared", and various spur types) were propagated for deeper, earlier red colour and a more strongly lobed shape. Red Delicious became one of the most widely planted apples in the United States, favoured for its appearance, uniformity, and shipping and storage performance.',
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
            'Skin deep red, often striped or solid, over a yellow ground; typically tough',
            'Distinctive elongated, conical shape with five prominent knobs at the calyx end',
            'Flesh sweet and mild with low acidity; aroma modest',
            'Firm at harvest but can become mealy with age; valued for storage and transport',
          ],
        },
      ],
    },
    {
      id: 'selection-and-appearance',
      heading: 'Selection for appearance',
      body: [
        {
          type: 'paragraph',
          text: 'Red Delicious is frequently used as an example of a cultivar shaped by repeated selection for visual traits. Because darker, earlier-colouring sports were commercially rewarded, the marketed fruit shifted toward emphasis on colour, shape, and shelf performance. Eating quality of any given fruit depends on the specific sport, growing conditions, harvest timing, and storage.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance seedling',
  originCountry: 'United States',
  originRegion: 'Peru, Madison County, Iowa',
  yearReleased: '1895',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global; numerous colour sports of Red Delicious have been propagated separately over time.',
    },
  ],
  maturityClass: 'Mid-to-late season',
  intendedUse: ['Fresh eating (dessert)'],
  qualityTraits: [
    'Sweet, mild, low-acid flavour',
    'Tough deep-red skin',
    'Elongated, five-lobed shape',
    'Firm at harvest; can turn mealy with prolonged storage',
  ],
  geographicAvailability:
    'Historically one of the most widely grown apples in the United States and traded internationally; still grown across temperate apple regions.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a widely grown cultivar and its many colour sports. Fruit behaviour depends on the specific sport, region, rootstock, and handling.',
  limitations: [
    '"Red Delicious" today covers many bud-sport selections that differ in colour, shape, and quality; a single description cannot capture all of them.',
    'Texture and flavour are strongly affected by harvest timing, storage, and rootstock, so eating quality varies considerably between sources.',
    'The earliest history of the original "Hawkeye" seedling is drawn from nursery and horticultural records and is partly traditional.',
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
      sourceId: 'usda-ars',
      citedFor: 'Germplasm characterization and cultivar history',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Red Delicious (apple cultivar)',
    description:
      'Red Delicious apple: an Iowa chance seedling ("Hawkeye") introduced in 1895, later selected heavily for deep-red colour, elongated shape, and shipping quality.',
    keywords: [
      'Red Delicious',
      'apple cultivar',
      'Malus domestica',
      'Hawkeye apple',
    ],
  },
  structuredData: { article: true },
};
