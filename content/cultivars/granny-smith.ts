import type { CultivarContent } from '@/types/content';

export const grannySmith: CultivarContent = {
  id: 'cultivar-granny-smith',
  slug: 'granny-smith',
  contentType: 'cultivar',
  title: 'Granny Smith',
  acceptedName: "Malus domestica 'Granny Smith'",
  category: 'Apple cultivar',
  summary:
    'Granny Smith is a bright-green, tart, late-maturing apple that arose as a chance seedling in New South Wales, Australia, around 1868. It is a long-keeping, dual-purpose cultivar used both fresh and for cooking.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Granny Smith is a distinctive green-skinned apple known for its firm flesh and sharp, acidic flavour. It originated as a chance seedling associated with Maria Ann ("Granny") Smith at Eastwood, near Ryde, New South Wales, Australia, around 1868. Its exact parentage is uncertain; it is traditionally said to have grown from the discarded seeds of French crab apples.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is valued for its long storage life, firmness, and versatility as both an eating and a cooking apple, and its flesh is slow to brown after cutting. As a clonal cultivar, Granny Smith is propagated by grafting and is now grown across warm-temperate apple regions worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Chance seedling (parentage uncertain)' },
    {
      label: 'Origin',
      value: 'Eastwood, near Ryde, New South Wales, Australia',
      note: 'Traditionally dated to around 1868.',
    },
    { label: 'Season', value: 'Late season; long storing' },
    { label: 'Primary uses', value: 'Fresh eating and cooking' },
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
          text: 'Granny Smith is named after Maria Ann Smith, a Sydney-area orchardist, on whose property the original seedling is said to have appeared around 1868. The tradition holds that it grew from the remains of French crab apples, but the seed parent is not documented with certainty, so the parentage is regarded as unknown.',
        },
        {
          type: 'paragraph',
          text: 'The apple was propagated locally and, by the early twentieth century, became commercially important in Australia and, later, internationally. Its combination of firmness, tartness, and exceptional keeping quality made it well suited to storage and long-distance shipping.',
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
            'Skin bright to grass green, occasionally with a slight pink blush in sun',
            'Flesh very firm, crisp, and juicy',
            'Flavour markedly tart and acidic with low aroma',
            'Slow to brown after cutting; an excellent keeper in cool storage',
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
          text: 'Granny Smith is a dual-purpose apple. Its acidity and firmness make it a popular cooking apple that holds its shape and flavour when baked, while many consumers also eat it fresh for its crisp, sour character. Its slow browning makes it a common choice for salads and prepared fruit.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance seedling',
  originCountry: 'Australia',
  originRegion: 'Eastwood, near Ryde, New South Wales',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global; listing reflects germplasm curation, not commercial protection.',
    },
  ],
  maturityClass: 'Late season',
  intendedUse: ['Fresh eating (dessert)', 'Culinary / cooking'],
  climateAdaptation:
    'Requires a long, warm growing season to ripen fully; widely grown in warm-temperate apple regions and often among the last cultivars harvested.',
  qualityTraits: [
    'Markedly tart, acidic flavour',
    'Very firm, crisp, juicy flesh',
    'Bright green skin',
    'Long storage life; flesh slow to brown after cutting',
  ],
  geographicAvailability:
    'Grown commercially in warm-temperate apple regions worldwide and traded internationally as a long-keeping cultivar.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a widely grown cultivar. Ripening, colour, and storage behaviour depend on region, rootstock, and season.',
  limitations: [
    'The parentage and precise origin date of the original chance seedling are uncertain and partly traditional.',
    'Because it needs a long, warm season to mature, performance and eating quality vary considerably with climate and harvest timing.',
    'Storage outcomes depend on rootstock, orchard management, and post-harvest handling, which are not specified here.',
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
    title: 'Granny Smith (apple cultivar)',
    description:
      'Granny Smith apple: a tart, bright-green, long-keeping cultivar from a chance seedling in New South Wales, Australia, around 1868; used fresh and cooked.',
    keywords: [
      'Granny Smith',
      'apple cultivar',
      'Malus domestica',
      'green apple',
    ],
  },
  structuredData: { article: true },
};
