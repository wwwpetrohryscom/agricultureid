import type { CultivarContent } from '@/types/content';

export const braeburn: CultivarContent = {
  id: 'cultivar-braeburn',
  slug: 'braeburn',
  contentType: 'cultivar',
  title: 'Braeburn',
  acceptedName: "Malus domestica 'Braeburn'",
  category: 'Apple cultivar',
  summary:
    'Braeburn is a firm, crisp, sweet-tart bicolour dessert apple that arose as a chance seedling in New Zealand around 1952. It was one of the first modern commercial successes among richly flavoured, well-storing bicolour apples.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Braeburn is a dessert apple discovered as a chance seedling in New Zealand around 1952 and first grown commercially from the Braeburn Orchard near Motueka, from which it takes its name. Its parentage is not documented with certainty; it is often described as a possible seedling of Lady Hamilton, with Granny Smith sometimes suggested as a parent.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is known for a firm, dense texture and a well-balanced sweet-tart, aromatic flavour, together with good storage life. It helped establish international demand for richly flavoured bicolour apples and is grown across temperate apple regions. As a clonal cultivar it is propagated by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Chance seedling (parentage uncertain)' },
    {
      label: 'Origin',
      value: 'Near Motueka, New Zealand',
      note: 'Discovered around 1952.',
    },
    { label: 'Season', value: 'Late season; stores well' },
    { label: 'Primary uses', value: 'Fresh eating and cooking' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Braeburn was found as a chance seedling in the Nelson/Tasman region of New Zealand around 1952 and propagated from the Braeburn Orchard near Motueka. Its exact parentage is uncertain, which is common for chance seedlings; Lady Hamilton and Granny Smith are among the cultivars suggested in its ancestry, but this is not firmly established.',
        },
        {
          type: 'paragraph',
          text: 'Braeburn became a commercially important cultivar internationally and contributed to the pedigrees of later apples — for example Jazz (a Braeburn × Gala cross). Its balance of flavour and storage helped broaden the market for bicolour dessert apples beyond the older sweet types.',
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
            'Skin red-striped and flushed over a green to orange ground (bicolour)',
            'Flesh firm, dense, and crisp',
            'Flavour well-balanced sweet-tart with a distinct aroma',
            'Stores well; holds its shape reasonably in cooking',
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
          text: 'Braeburn is a late-season cultivar that generally needs a long growing season to mature fully. In some warm conditions it can be affected by heat- and storage-related fruit disorders, so colour, flavour balance, and post-harvest behaviour vary with climate, rootstock, and handling.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance seedling',
  originCountry: 'New Zealand',
  originRegion: 'Near Motueka, Tasman/Nelson region',
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
    'A late-season cultivar generally requiring a long growing season; in warm climates it can be prone to heat- and storage-related fruit disorders.',
  qualityTraits: [
    'Well-balanced sweet-tart flavour with a distinct aroma',
    'Firm, dense, crisp flesh',
    'Red-striped bicolour skin',
    'Good storage life; holds shape reasonably in cooking',
  ],
  geographicAvailability:
    'Grown commercially across temperate apple regions in the Southern and Northern Hemispheres and traded internationally.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a widely grown cultivar. Ripening, flavour balance, and storage behaviour depend on region, rootstock, and season.',
  limitations: [
    'The parentage and precise origin of the original chance seedling are uncertain.',
    'As a late-maturing cultivar, fruit quality and post-harvest behaviour vary considerably with climate and harvest timing.',
    'Susceptibility to heat- and storage-related disorders is region-, rootstock-, and season-dependent and is not quantified here.',
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
    title: 'Braeburn (apple cultivar)',
    description:
      'Braeburn apple: a firm, crisp, sweet-tart bicolour dessert apple that arose as a chance seedling in New Zealand around 1952 and stores well.',
    keywords: [
      'Braeburn',
      'apple cultivar',
      'Malus domestica',
      'bicolour apple',
    ],
  },
  structuredData: { article: true },
};
