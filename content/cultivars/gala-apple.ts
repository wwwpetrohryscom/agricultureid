import type { CultivarContent } from '@/types/content';

export const galaApple: CultivarContent = {
  id: 'cultivar-gala-apple',
  slug: 'gala-apple',
  contentType: 'cultivar',
  title: 'Gala',
  acceptedName: "Malus domestica 'Gala'",
  category: 'Apple cultivar',
  summary:
    'Gala is a sweet, aromatic, red-striped dessert apple bred in New Zealand by J. H. Kidd from a cross of Kidd’s Orange Red and Golden Delicious, and released around 1965. It is one of the most widely produced apples in the world.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gala is a dessert apple developed in New Zealand by the amateur breeder James Hutton (J. H.) Kidd, from a cross between "Kidd’s Orange Red" and "Golden Delicious". It was selected in the mid-twentieth century and released commercially around 1965, later becoming a mainstay of orchards on several continents.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is prized for its sweetness, mild aroma, and attractive red-over-yellow striping. Many redder-colouring bud sports — marketed under names such as Royal Gala and Galaxy — have been selected and, in various jurisdictions, separately protected; the original Gala itself is an older, unprotected cultivar. Like other apples it is propagated clonally by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    {
      label: 'Breeding',
      value: 'Controlled cross (Kidd’s Orange Red × Golden Delicious)',
    },
    { label: 'Origin', value: 'Greytown, New Zealand' },
    { label: 'Released', value: 'Around 1965' },
    { label: 'Season', value: 'Early-to-mid season' },
    { label: 'Primary use', value: 'Fresh eating (dessert)' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Gala was raised by J. H. Kidd in Greytown, in the Wairarapa region of New Zealand, from a cross of Kidd’s Orange Red and Golden Delicious. Kidd’s Orange Red was itself derived from Cox’s Orange Pippin and Red Delicious, so Gala carries the ancestry of several classic dessert apples.',
        },
        {
          type: 'paragraph',
          text: 'Following its release around 1965, Gala spread internationally and was promoted heavily in North America and Europe. It is now among the most-produced apple cultivars worldwide. Numerous colour sports selected for more intense red have been introduced under distinct trade names.',
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
            'Skin red-striped and flushed over a yellow to orange ground',
            'Flesh crisp, fine-textured, and juicy',
            'Flavour sweet and mild with a light aroma and modest acidity',
            'Fruit typically small to medium; stores reasonably under cool conditions',
          ],
        },
      ],
    },
    {
      id: 'sports-and-protection',
      heading: 'Colour sports and protection',
      body: [
        {
          type: 'paragraph',
          text: 'Much of the Gala grown commercially consists of redder-colouring bud sports selected from the original cultivar and marketed under separate names such as Royal Gala and Galaxy. Some of these sports have held plant-variety protection or plant patents in particular countries and periods; such protection is jurisdiction- and date-specific and distinct from the status of the original Gala.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Cross-breeding (controlled hybridization)',
  originCountry: 'New Zealand',
  originRegion: 'Greytown, Wairarapa',
  yearReleased: '1965',
  breederOrInstitution: 'J. H. Kidd (Greytown, New Zealand)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global. Many redder-colouring Gala sports have been protected separately by jurisdiction and date.',
    },
  ],
  maturityClass: 'Early-to-mid season',
  intendedUse: ['Fresh eating (dessert)'],
  qualityTraits: [
    'Sweet, mild flavour with light aroma',
    'Crisp, fine-textured, juicy flesh',
    'Attractive red-striped skin over a yellow ground',
    'Small-to-medium fruit that stores reasonably when cool',
  ],
  geographicAvailability:
    'One of the most widely produced apple cultivars globally, grown across temperate apple regions on several continents.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Global overview of a major commercial cultivar and its colour sports. Fruit quality and storage depend on region, rootstock, season, and the specific sport.',
  limitations: [
    'Most commercial "Gala" is one of many colour sports that differ in appearance and, sometimes, in maturity; a single description generalizes across them.',
    'Protection status applies to specific sports in specific jurisdictions and periods and is not a property of the original cultivar.',
    'Storage life and flavour depend on rootstock, climate, harvest timing, and handling, which are not specified here.',
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
    title: 'Gala (apple cultivar)',
    description:
      'Gala apple: a sweet, red-striped dessert apple bred in New Zealand by J. H. Kidd (Kidd’s Orange Red × Golden Delicious) and released around 1965.',
    keywords: ['Gala apple', 'apple cultivar', 'Malus domestica', 'Royal Gala'],
  },
  structuredData: { article: true },
};
