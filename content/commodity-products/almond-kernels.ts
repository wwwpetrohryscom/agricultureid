import type { CommodityProductContent } from '@/types/content';

export const almondKernels: CommodityProductContent = {
  id: 'commodity-product-almond-kernels',
  slug: 'almond-kernels',
  contentType: 'commodity-product',
  title: 'Almond Kernels',
  alternativeNames: [
    'Shelled almonds',
    'Almond meats',
    'Blanched almonds (processed form)',
  ],
  category: 'Primary processed product',
  subcategory: 'Shelled tree nut',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'almonds' },
  physicalForm: 'seed',
  summary:
    "Almond kernels are the shelled seed — the primary product of almond processing and the form most of the world buys. Grading turns on variety type, size, and integrity, and the kernel's oil content makes rancidity, not spoilage, its limiting factor.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Almond kernels are what hulling and shelling exist to produce. The hull comes off first, the shell is cracked away second, and what is left is the seed — the edible part, and the reason the orchard was planted. Kernels are the dominant traded form of almonds worldwide, separately classified from in-shell nuts and separately priced.',
    },
    {
      type: 'paragraph',
      text: "A kernel out of its shell has lost its armour. In-shell almonds carry their own protection against handling, insects, light, and air; a kernel has none of it, and everything about how kernels are graded, packed, and stored follows from that. The kernel is also where the almond's oil is, which makes oxidation the process that eventually ends its useful life.",
    },
  ],
  keyFacts: [
    {
      label: 'Product class',
      value: 'Primary product of almond hulling and shelling',
    },
    { label: 'Made from', value: 'Almonds (Prunus dulcis), in-shell' },
    { label: 'What it is', value: 'The seed, freed of hull and shell' },
    {
      label: 'Companion streams',
      value: 'Almond hulls and shells, separated by the same operation',
    },
    {
      label: 'Graded on',
      value:
        'Variety type, size as count per unit weight, colour, and integrity',
    },
    {
      label: 'Life-limiting factor',
      value: 'Oxidative rancidity of the kernel oil',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What almond kernels are',
      body: [
        {
          type: 'paragraph',
          text: 'Shelling cracks the shell and separates it from the kernel, and the operation is judged on how much of the kernel survives intact. Chipping, scratching, and breakage all downgrade the product, so the shelling line is engineered as a compromise between cracking hard enough to open the shell and gently enough to leave the seed whole. Kernels come off the line with their brown skin on; blanching removes it with hot water for uses where a white kernel is wanted.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Variety type',
              description:
                'Kernels are grouped by shape and appearance into commercial types, because processors need consistent behaviour rather than a botanical name.',
            },
            {
              term: 'Count size',
              description:
                'Kernel size expressed as the number of kernels per unit weight — a smaller count means larger kernels.',
            },
            {
              term: 'Blanching',
              description:
                'Removal of the brown skin with hot water, used where a white kernel is required for appearance or further processing.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Primary product, with two by-product streams',
          text: 'The same operation that yields kernels yields hulls and shells. Kernels are the primary product because the operation is run for them; the hulls are a by-product with a feed market, and the shells are used as fuel and bedding.',
        },
      ],
    },
    {
      id: 'grading-and-forms',
      heading: 'Grading and processed forms',
      body: [
        {
          type: 'paragraph',
          text: 'Kernel grades combine variety type, count size, and the incidence of defects — chips and scratches, doubles, splits, shrivelled and gummy kernels, insect damage, and foreign material. Whole, unblemished kernels of a uniform size carry the premium, and the further a lot falls from that, the more likely it is to be routed into a processed form where appearance stops mattering.',
        },
        {
          type: 'paragraph',
          text: "That routing is the industry's pressure valve. Kernels are sold whole, but also sliced, slivered, diced, blanched, roasted, and ground into flour, butter, and paste — and a broken kernel that would fail a whole-kernel grade is entirely acceptable input for any of those. Almond-based drinks take kernels in bulk without regard to appearance. This is why an almond sheller has far more room to place off-grade product than a fresh-fruit packer does.",
        },
      ],
    },
    {
      id: 'storage-and-safety',
      heading: 'Storage, rancidity, and safety',
      body: [
        {
          type: 'paragraph',
          text: 'A properly dried kernel does not spoil microbially — it goes rancid. Oxidation of the kernel oil, driven by warmth, light, and air, produces the stale, painty flavours that make a lot unsaleable, and it is accelerated once the kernel is sliced, ground, or roasted and its internal surfaces are exposed. The trade responds with cool storage, vacuum and modified-atmosphere packaging, and stock rotation.',
        },
        {
          type: 'paragraph',
          text: 'Food safety sits alongside quality and is separately regulated. Almonds carry a documented aflatoxin risk originating in the orchard and in inadequately dried lots, and jurisdictions apply limits and testing to kernels entering their markets. Kernels destined for some markets also undergo mandatory pasteurisation treatments following salmonella outbreaks traced to the commodity — a requirement that applies to the kernel, not to the in-shell nut, and that varies by jurisdiction.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No limits, treatments, or conditions here',
          text: 'Aflatoxin limits, pasteurisation requirements, storage temperatures, and packaging specifications for almond kernels are set by food-safety authorities and contracts in each jurisdiction. AgricultureID publishes none of them.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Kernels are eaten whole as a snack, roasted and salted or plain, and used across confectionery and bakery as whole nuts, slices, slivers, dice, flour, and paste — marzipan being the classic. Almond butter and almond-based drinks have grown into major outlets that consume kernels in bulk. Almond oil, pressed from kernels, is a small culinary and cosmetic product.',
        },
        {
          type: 'list',
          items: [
            'Food — whole kernels as a snack and as an ingredient in confectionery and bakery',
            'Food — sliced, slivered, diced, blanched, and ground forms, including flour and paste',
            'Beverage — almond-based drinks made from kernels in bulk',
            'Oil — almond oil for culinary and cosmetic use',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'oil'],
  majorQualityAttributes: [
    'Variety type',
    'Count size and size uniformity',
    'Kernel integrity (freedom from chips and breakage)',
    'Colour and skin condition',
    'Moisture content',
    'Freedom from rancidity, insect damage, and foreign material',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0802.12',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Almonds, fresh or dried, shelled.',
    },
  ],
  processContext:
    'Produced by hulling the dried almond fruit and cracking the shell away from the seed; blanching, roasting, slicing, dicing, and grinding are downstream processing steps applied to the kernel.',
  storageContext:
    'Held dry and cool, frequently vacuum-packed or under modified atmosphere, because the oil-rich kernel is limited by oxidative rancidity rather than by microbial spoilage.',
  connections: [
    { type: 'crop', slug: 'almond' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'almond-hulls' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Almond kernels as the dominant traded form and their food uses',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Almond kernel grade attributes, variety types, and defect vocabulary',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'Almond shelling and processing stream context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, pasteurisation requirements, and mycotoxin limits are jurisdiction-specific and revised.',
  limitations: [
    'This is a reference description of the product, not a grading determination, processing specification, or food-safety compliance statement.',
    'No aflatoxin limits, pasteurisation parameters, moisture figures, or storage conditions are given here.',
    'Mandatory treatment requirements for kernels differ by destination market and are revised; confirm the rules in force.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Almond Kernels: The Shelled Primary Product',
    description:
      'Almond kernels as the primary product of shelling: variety type and count sizing, integrity after cracking, blanched and ground forms, and rancidity.',
    keywords: [
      'almond kernels',
      'shelled almonds',
      'almond grading',
      'blanched almonds',
      'almond count size',
    ],
  },
  structuredData: { article: true },
};
