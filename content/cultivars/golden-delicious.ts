import type { CultivarContent } from '@/types/content';

export const goldenDelicious: CultivarContent = {
  id: 'cultivar-golden-delicious',
  slug: 'golden-delicious',
  contentType: 'cultivar',
  title: 'Golden Delicious',
  acceptedName: "Malus domestica 'Golden Delicious'",
  alternativeNames: ['Mullins Yellow Seedling', 'Yellow Delicious (informal)'],
  category: 'Apple cultivar',
  summary:
    'Golden Delicious is a yellow-skinned dessert and all-purpose apple that arose as a chance seedling in West Virginia and was introduced commercially in 1914. It is one of the most influential parents in modern apple breeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Golden Delicious is a widely grown apple cultivar recognized by its greenish-yellow to golden skin and mild, sweet flavour. It originated as a chance seedling on the Mullins family farm in Clay County, West Virginia, United States, and was introduced to commerce by Stark Brothers Nurseries in 1914, who named it to complement their earlier "Delicious" (later Red Delicious).',
    },
    {
      type: 'paragraph',
      text: 'Beyond its use as an eating and cooking apple, Golden Delicious is significant as a breeding parent: it appears in the pedigrees of many later commercial cultivars, including Gala, Jonagold, Mutsu (Crispin), and Cripps Pink (Pink Lady). As a clonal cultivar it is propagated by grafting rather than grown from seed.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Chance seedling' },
    {
      label: 'Origin',
      value: 'Clay County, West Virginia, United States',
      note: 'Introduced commercially in 1914 by Stark Bro’s Nurseries.',
    },
    { label: 'Season', value: 'Mid-to-late season' },
    { label: 'Primary uses', value: 'Fresh eating, cooking, breeding parent' },
    {
      label: 'Registry status',
      value: 'Heritage cultivar; no current variety protection',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Golden Delicious was discovered as a chance seedling on the farm of Anderson Mullins in Clay County, West Virginia, where it was originally known as the "Mullins Yellow Seedling" or "Annit apple". Stark Brothers Nurseries purchased rights to the tree and introduced it in 1914 under the name Golden Delicious, pairing it commercially with their earlier red "Delicious" apple.',
        },
        {
          type: 'paragraph',
          text: 'Because it does not come true from seed, the cultivar has been maintained and multiplied clonally by grafting since its introduction. It went on to become one of the most planted apples of the twentieth century and a foundational parent in apple breeding programmes worldwide.',
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
            'Skin greenish-yellow ripening to golden, sometimes with fine russeting or lenticels; thin and prone to bruising',
            'Flesh crisp and juicy when fresh, with a mild, sweet, low-acid flavour',
            'Tends to shrivel and lose moisture in storage unless humidity is managed',
            'Valued as a dual-purpose apple that holds sweetness in cooking and baking',
          ],
        },
      ],
    },
    {
      id: 'in-apple-breeding',
      heading: 'Role in apple breeding',
      body: [
        {
          type: 'paragraph',
          text: 'Golden Delicious is one of the most frequently used parents in modern apple breeding, contributing to widely grown cultivars such as Gala, Jonagold, Mutsu (Crispin), and Cripps Pink (Pink Lady). Its sweetness, productivity, and adaptability made it a favoured source of desirable traits, although specific offspring characteristics depend on the other parent and on selection.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance seedling',
  originCountry: 'United States',
  originRegion: 'Clay County, West Virginia',
  yearReleased: '1914',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Malus germplasm and cultivar/taxonomic records are curated in GRIN-Global; listing reflects germplasm curation, not commercial protection.',
    },
  ],
  maturityClass: 'Mid-to-late season',
  intendedUse: [
    'Fresh eating (dessert)',
    'Culinary / cooking',
    'Breeding parent',
  ],
  qualityTraits: [
    'Mild, sweet, low-acid flavour',
    'Crisp and juicy when fresh',
    'Thin skin prone to bruising and moisture loss in storage',
    'Golden-yellow skin, sometimes lightly russeted',
  ],
  geographicAvailability:
    'Grown commercially across temperate apple regions worldwide; a standard supermarket cultivar in many countries.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a widely grown cultivar. Fruit behaviour depends on region, rootstock, season, and orchard management.',
  limitations: [
    'Storage life, flavour, and skin finish (including russeting and shrivel) are strongly influenced by climate, rootstock, season, and handling, so descriptions here are general rather than site-specific.',
    'As a clonal cultivar, orchard vigour and adaptation depend heavily on the rootstock used, which is not specified here.',
    'Early history is documented from nursery and horticultural records; some details of the original chance seedling are traditional.',
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
    title: 'Golden Delicious (apple cultivar)',
    description:
      'Golden Delicious apple: a West Virginia chance seedling introduced in 1914, a sweet all-purpose dessert apple and a key parent in modern apple breeding.',
    keywords: [
      'Golden Delicious',
      'apple cultivar',
      'Malus domestica',
      'dessert apple',
    ],
  },
  structuredData: { article: true },
};
