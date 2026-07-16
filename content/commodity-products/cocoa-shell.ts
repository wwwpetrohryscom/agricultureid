import type { CommodityProductContent } from '@/types/content';

export const cocoaShell: CommodityProductContent = {
  id: 'commodity-product-cocoa-shell',
  slug: 'cocoa-shell',
  contentType: 'commodity-product',
  title: 'Cocoa Shell',
  alternativeNames: ['Cocoa husk', 'Cacao shell', 'Cocoa bean shell'],
  category: 'Processing by-product',
  subcategory: 'Cocoa winnowing residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'cocoa-beans' },
  physicalForm: 'hull',
  summary:
    'Cocoa shell is the thin, light husk winnowed away from the nib during cocoa processing. It is a low-value residual with fuel, mulch, and limited feed outlets — and one whose theobromine content restricts which animals can safely be given it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cocoa shell is what the winnower blows away. Each fermented, dried cocoa bean carries a thin husk around its kernel, and cracking and winnowing separate the two — the dense nib falls out to be ground into chocolate, and the light shell fragments are carried off by the air stream. Every cocoa grinding operation produces it steadily, in a quantity fixed by the anatomy of the bean.',
    },
    {
      type: 'paragraph',
      text: "It is a by-product in the plainest sense: nobody grinds cocoa to make shell, its value is a small fraction of the nib's, and the grinder's objective is to remove it as completely as possible. But it is real material in real volume, and it has established outlets — mostly low-value ones, in fuel, mulch, and feed, with the last of these carrying a genuine constraint that shapes how the material can be used.",
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of cocoa winnowing' },
    {
      label: 'Made from',
      value: 'Cocoa beans (Theobroma cacao), at cracking and winnowing',
    },
    { label: 'What it is', value: 'The thin husk enclosing the cocoa kernel' },
    {
      label: 'Companion stream',
      value: 'Cocoa nibs, the primary product separated in the same operation',
    },
    {
      label: 'Feed constraint',
      value:
        'Contains theobromine, which is toxic to dogs and restricts feed use',
    },
    {
      label: 'Principal uses',
      value: 'Fuel, garden mulch, and limited ruminant feed',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What cocoa shell is',
      body: [
        {
          type: 'paragraph',
          text: 'The shell is a fibrous husk, light and papery once dry, that surrounds the cocoa kernel inside the bean. Winnowing exploits its low density to separate it from the nib, and the operation is judged in both directions: shell left in the nib dilutes and grits the chocolate, while nib lost into the shell stream is primary product thrown away. A well-run winnower minimises both, and the shell that leaves it carries some adhering nib material regardless.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Shell is not pod husk',
          text: 'Two different cocoa residues are easily confused. The pod husk is the thick outer wall of the cocoa pod, opened and discarded on the farm at harvest. The shell is the thin husk around the individual bean, removed at the grinder thousands of kilometres away. This entry is about the latter.',
        },
      ],
    },
    {
      id: 'theobromine-constraint',
      heading: 'The theobromine constraint',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa shell contains theobromine, the alkaloid that gives cocoa its stimulant character and the reason chocolate is dangerous to dogs. Species differ enormously in how quickly they metabolise it: dogs metabolise it slowly and are highly susceptible, which is why cocoa shell mulch sold for gardens carries warnings and is a recognised hazard where dogs have access to it. Ruminants tolerate it better, but feed use is still constrained and is governed by jurisdiction-specific feed regulations that may limit inclusion or prohibit it for particular species.',
        },
        {
          type: 'paragraph',
          text: "This is what keeps cocoa shell in the low-value tier despite being a dry, handleable, fibrous material that would otherwise be an unremarkable feed ingredient. A by-product's value is set by what it can legally and safely be used for, and here a single compound closes off the largest outlet a residue of this kind would normally have.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A real hazard, not a theoretical one',
          text: 'Theobromine poisoning of dogs from cocoa shell mulch is documented. Feed and mulch use of cocoa shell is regulated, and species-specific limits apply. AgricultureID gives no inclusion rates or limits; consult the feed and product rules in force and competent veterinary advice.',
        },
      ],
    },
    {
      id: 'uses-and-handling',
      heading: 'Uses and handling',
      body: [
        {
          type: 'paragraph',
          text: "Fuel is the most straightforward outlet: shell is dry, fibrous, and combustible, and grinders burn it to recover energy on site, which also disposes of it. Garden mulch is a familiar retail product, sold for its appearance and its cocoa smell, and it is the use that carries the dog warning. Limited ruminant feed use exists where regulation permits. Beyond these, the shell's fibre, residual fat, and polyphenol content have attracted research into higher-value recovery, reflecting the same pattern as other bulky residues: plenty of material, few good homes.",
        },
        {
          type: 'list',
          items: [
            'Energy — burnt as a biomass fuel at the grinding plant',
            'Horticulture — garden mulch, sold with dog-hazard warnings',
            'Feed — limited ruminant feed use where regulation permits',
            'Industrial — fibre, fat, and polyphenol recovery, and composting',
          ],
        },
        {
          type: 'paragraph',
          text: 'Handling is simple: the shell is dry, light, and bulky, so transport cost rather than spoilage governs. It is dusty, which matters for handling and for combustion, and it will take up moisture and mould if stored wet.',
        },
      ],
    },
  ],
  primaryUses: ['energy'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Residual nib content carried into the shell stream',
    'Moisture content',
    'Fibre and residual fat content',
    'Freedom from mould',
    'Dust and particle size for handling and combustion',
  ],
  processContext:
    'Separated from the nib by winnowing after fermented, dried cocoa beans are roasted and cracked; the quantity is set by the anatomy of the bean and the efficiency of the separation.',
  storageContext:
    'Dry, light, and bulky; stores like other dry fibrous residues, with transport volume rather than spoilage as the governing concern, and moulds if allowed to wet.',
  connections: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cocoa-nibs' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cocoa processing residues and their utilisation',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Cocoa shell composition and utilisation research context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on cocoa bean structure and theobromine',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Concentrated at cocoa grinding centres. Feed-material rules, permitted uses, and product warnings are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, product-safety assessment, or veterinary guidance.',
    'Theobromine content varies with origin and processing, and no figures or inclusion rates are given here; feed and mulch use are regulated and species-specific.',
    'Composition varies with bean origin and winnowing efficiency; no universal analysis is given.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cocoa Shell: Winnowing By-Product and Its Limits',
    description:
      'Cocoa shell as a by-product of cocoa winnowing: the husk blown off the nib, used for fuel and garden mulch, with theobromine restricting its use as feed.',
    keywords: [
      'cocoa shell',
      'cocoa husk',
      'winnowing by-product',
      'theobromine',
      'cocoa mulch',
    ],
  },
  structuredData: { article: true },
};
