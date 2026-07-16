import type { CommodityProductContent } from '@/types/content';

export const cocoaNibs: CommodityProductContent = {
  id: 'commodity-product-cocoa-nibs',
  slug: 'cocoa-nibs',
  contentType: 'commodity-product',
  title: 'Cocoa Nibs',
  alternativeNames: ['Cacao nibs', 'Cocoa kernel fragments'],
  category: 'Primary processed product',
  subcategory: 'Cocoa kernel',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'cocoa-beans' },
  producedBy: [
    { type: 'processing-method', slug: 'cocoa-bean-cleaning-and-winnowing' },
  ],
  physicalForm: 'bean',
  summary:
    'Cocoa nibs are the cracked kernel of the cocoa bean with the shell winnowed away — the primary product of cocoa processing and the actual raw material of chocolate. Everything chocolate is made of comes from the nib; the shell is separated off as a by-product.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cocoa nibs are the point at which a traded agricultural commodity becomes the raw material of chocolate. A fermented, dried cocoa bean consists of a kernel inside a shell; cracking the bean and winnowing away the light shell fragments leaves the nib — broken pieces of pure kernel, carrying all of the cocoa solids and all of the cocoa butter. Nothing else in the bean ends up in chocolate.',
    },
    {
      type: 'paragraph',
      text: "The nib is the primary product in the strict sense: a cocoa grinder's entire operation is arranged to recover it cleanly and completely, and the shell that leaves the winnower is a by-product of doing so. Grind the nib and it becomes cocoa mass; press the mass and it splits into cocoa butter and press cake. Every chocolate product traces back through those steps to a nib.",
    },
  ],
  keyFacts: [
    {
      label: 'Product class',
      value: 'Primary product of cocoa bean processing',
    },
    {
      label: 'Made from',
      value: 'Cocoa beans (Theobroma cacao), fermented and dried',
    },
    {
      label: 'What it is',
      value: 'The cracked kernel, freed of shell by winnowing',
    },
    {
      label: 'Companion stream',
      value: 'Cocoa shell, separated at winnowing as a by-product',
    },
    {
      label: 'Leads to',
      value: 'Cocoa mass, and from it cocoa butter and cocoa powder',
    },
    {
      label: 'Carries',
      value: "All of the bean's cocoa solids and cocoa butter",
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What cocoa nibs are',
      body: [
        {
          type: 'paragraph',
          text: 'Recovering the nib is a separation problem. Beans are cleaned, then roasted — the step that converts the flavour precursors created during farm fermentation into actual chocolate aroma — and cracked into fragments. The cracked mixture is then winnowed: air currents carry away the light shell fragments while the denser nib pieces fall out, exploiting the density difference between kernel and shell.',
        },
        {
          type: 'paragraph',
          text: 'Order varies. Some processes roast the whole bean before cracking; others crack first and roast the nib, which gives more even heat penetration and cleaner shell removal. Either way the sequence is roast, crack, winnow, and the quality of the winnow is measured by how little shell remains in the nib — because shell in the nib carries through into the chocolate as gritty, flavourless dilution.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The nib inherits the ferment',
          text: 'Roasting develops flavour from precursors, but it cannot create precursors that fermentation never made. An under-fermented bean produces an under-fermented nib and a poor chocolate, no matter how skilfully it is roasted.',
        },
      ],
    },
    {
      id: 'downstream',
      heading: 'What the nib becomes',
      body: [
        {
          type: 'paragraph',
          text: 'Grinding the nib produces cocoa mass — also called cocoa liquor, though it contains no alcohol — a thick paste that is liquid when warm because the cocoa butter in the kernel melts. Pressing the mass separates it into cocoa butter, the fat, and press cake, which is milled into cocoa powder. Chocolate is made by recombining these fractions with sugar and, for milk chocolate, milk solids, in proportions that define the product.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cocoa mass',
              description:
                'Ground nib, containing both the cocoa solids and the cocoa butter in their natural proportions. The base of all chocolate.',
            },
            {
              term: 'Cocoa butter',
              description:
                'The fat pressed out of cocoa mass, valued for its melting behaviour and used in chocolate, cosmetics, and pharmaceuticals.',
            },
            {
              term: 'Cocoa powder',
              description:
                'The milled press cake left after the butter has been extracted, used in beverages, bakery, and confectionery.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: "Nibs are specified on residual shell content, moisture, fat content, particle size, and flavour, and they inherit the bean's fermentation profile, origin character, and any defects it carried. Shell content is the attribute the winnower is judged on and is regulated in some jurisdictions, since it is the most direct measure of processing quality and the most direct route to adulteration.",
        },
        {
          type: 'paragraph',
          text: 'The nib is fat-rich and picks up odours readily, so it is stored and handled away from taint and moisture, and its fat can go rancid over long holding. Nibs are also sold directly to consumers and to bakers as an ingredient in their own right — roasted, crunchy, unsweetened, and intensely bitter — a small but growing outlet for what is otherwise an industrial intermediate.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No processing or compositional figures here',
          text: 'Roasting conditions, permitted shell content, moisture, and fat specifications for cocoa nibs are set by processing practice, product standards, and food authorities in each jurisdiction. AgricultureID publishes no figures.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Almost all nibs are ground onward into cocoa mass and thence into chocolate, confectionery, and cocoa powder for beverage and bakery use. Cocoa butter pressed from the mass supports a substantial cosmetic and pharmaceutical demand alongside its chocolate use. A smaller share of nibs is sold whole as a food ingredient and snack.',
        },
        {
          type: 'list',
          items: [
            'Food — ground into cocoa mass for chocolate and confectionery manufacture',
            'Beverage — via cocoa powder for drinking chocolate and flavouring',
            'Industrial — via cocoa butter for cosmetic and pharmaceutical use',
            'Food — whole roasted nibs as a bakery and snack ingredient',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'industrial'],
  majorQualityAttributes: [
    'Residual shell content after winnowing',
    'Fermentation profile inherited from the bean',
    'Moisture content',
    'Fat (cocoa butter) content',
    'Particle size after cracking',
    'Freedom from taint and off flavours',
  ],
  processContext:
    'Produced by cleaning, roasting, and cracking fermented dried cocoa beans, then winnowing to separate the light shell fragments from the denser kernel pieces.',
  storageContext:
    'Held dry and away from odours and moisture; the fat-rich nib absorbs taint readily and can go rancid over long holding.',
  connections: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cocoa-shell' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cocoa processing, winnowing, and the nib-to-chocolate pathway',
    },
    {
      sourceId: 'iita',
      citedFor: 'Cocoa quality and processing context in producing regions',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on cocoa nibs, mass, butter, and powder',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product standards, permitted shell content, and chocolate compositional rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a processing specification, product standard, or compositional compliance statement.',
    'No roasting parameters, shell-content limits, moisture, or fat figures are given here.',
    'Chocolate compositional and naming rules differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cocoa Nibs: The Kernel Chocolate Is Made From',
    description:
      'Cocoa nibs as the primary product of cocoa beans: roasting, cracking and winnowing away the shell, why residual shell matters, and the route to mass and butter.',
    keywords: [
      'cocoa nibs',
      'cacao nibs',
      'winnowing',
      'cocoa mass',
      'cocoa butter',
    ],
  },
  structuredData: { article: true },
};
