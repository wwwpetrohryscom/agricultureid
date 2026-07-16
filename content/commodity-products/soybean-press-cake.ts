import type { CommodityProductContent } from '@/types/content';

export const soybeanPressCake: CommodityProductContent = {
  id: 'commodity-product-soybean-press-cake',
  slug: 'soybean-press-cake',
  contentType: 'commodity-product',
  title: 'Soybean Press Cake',
  alternativeNames: [
    'Expeller cake',
    'Soybean expeller cake',
    'Expeller soybean meal',
    'Soybean oilcake (pressed)',
  ],
  category: 'Oilseed pressing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'soybeans' },
  producedBy: [{ type: 'processing-method', slug: 'mechanical-pressing' }],
  summary:
    'Soybean press cake is the solid residue left after soybeans are mechanically pressed for oil. It is distinct from solvent-extracted soybean meal: pressing cannot remove all the oil, so the cake retains more of it — which is precisely why solvent extraction exists.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean press cake, also called expeller cake, is what remains when soybeans are crushed and pressed to release their oil. Press and cake leave the mill together: the oil is one co-product of the operation and the cake is the other, and neither is a residue of the other.',
    },
    {
      type: 'paragraph',
      text: 'It is not the same material as solvent-extracted soybean meal, even though the two are used for the same purpose and share a customs heading. A mechanical press works by force alone and always leaves oil behind in the cake; solvent extraction exists to recover the oil a press cannot reach, and the meal it leaves is correspondingly leaner. Treating the two as interchangeable hides a real compositional difference that matters in feed formulation.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of mechanical pressing' },
    { label: 'Made from', value: 'Soybeans (Glycine max)' },
    { label: 'Also called', value: 'Expeller cake' },
    { label: 'Companion stream', value: 'Soybean oil, from the same pressing' },
    {
      label: 'Distinguished from solvent-extracted meal by',
      value: 'Higher residual oil — pressing cannot remove it all',
    },
    { label: 'Principal use', value: 'Animal feed — a protein ingredient' },
    {
      label: 'Key attributes',
      value: 'Protein, residual oil, moisture, adequacy of heat treatment',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soybean press cake is',
      body: [
        {
          type: 'paragraph',
          text: 'Beans are cleaned, usually cracked and dehulled, conditioned with heat, and flaked before they reach the press, because oil comes out of a thin flake far more readily than out of a whole bean. The expeller then applies pressure as the material is conveyed along a tightening screw, and oil escapes through the barrel while the solids compact and emerge as cake — extruded as a dense slab or chip that is broken up and ground for handling and use.',
        },
        {
          type: 'paragraph',
          text: 'Heat is part of the product, not just part of the process. Raw soybean tissue contains heat-labile antinutritional factors, and pressed cake is only usable in feed because the preparation and the pressing itself expose the material to enough heat to deactivate them. As with any soybean feed product, that heat has to be sufficient without being excessive: too little leaves those factors active, too much damages protein quality. Press cake is therefore a processed product whose value rests on process control, not simply on the separation achieved.',
        },
      ],
    },
    {
      id: 'pressing-versus-extraction',
      heading: 'Why press cake and solvent-extracted meal differ',
      body: [
        {
          type: 'paragraph',
          text: 'The two products come from two answers to the same problem. Pressing works by force: it squeezes the flake until oil runs out of it. That is mechanically simple and chemically undemanding, but it cannot finish the job — oil remains bound in the solids that no achievable pressure will release, and the cake leaves the press still carrying it. Solvent extraction works instead by dissolving the oil out of the flake and then driving the solvent off, which reaches oil that pressing cannot and leaves a much more thoroughly de-oiled meal behind.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The residual oil is the whole distinction',
          text: 'Solvent extraction exists because pressing leaves oil in the cake. For a crusher whose object is oil, that residue is yield left in the solids — which is why the large-scale soybean industry extracts rather than presses, and why press cake and solvent-extracted meal are two products rather than one.',
        },
        {
          type: 'paragraph',
          text: 'Neither product is simply better. The oil left in press cake is energy, so cake carries more of it into a ration, and mechanical pressing needs no solvent, which suits smaller plants and matters where solvent-free processing is required or preferred. Against that, the crusher recovers less oil, and residual oil is also what goes rancid — so cake keeps less well than meal. The two are formulated against differently and priced differently, and how much oil any given cake holds depends on the beans, the preparation, and how the press was run.',
        },
      ],
    },
    {
      id: 'feed-use',
      heading: 'Feed use',
      body: [
        {
          type: 'paragraph',
          text: 'Press cake is fed as a protein ingredient across ruminant, pig, and poultry diets, in much the same outlets as solvent-extracted meal. Formulators do not treat the two as interchangeable on protein alone: cake is a lower-protein, higher-energy material than extracted meal simply because the oil that remains in it displaces everything else proportionally. It is described and bought accordingly, and it is specified for a use rather than treated as one uniform good.',
        },
        {
          type: 'paragraph',
          text: 'Its commercial position tends to follow the scale and character of the plant that made it. Solvent extraction dominates where soybeans are crushed in volume, so press cake is more often a product of smaller or specialised operations, and of processors serving markets that ask for mechanically pressed material. Both routes deliver a legitimate feed protein; they are simply organised differently and sold to somewhat different buyers.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Cake leaves the press in slabs or chips and is broken and ground, then handled in bulk or in bags and commonly pelleted for freight efficiency. Its residual oil is the governing fact in store: oil goes rancid, so press cake has a shorter keeping quality than solvent-extracted meal and is not a material to hold indefinitely. Stock rotation is correspondingly more of a discipline than it is with extracted meal.',
        },
        {
          type: 'paragraph',
          text: 'It is also hygroscopic, and cake held moist or warm can heat, cake together, and support mould growth — a particular concern in humid conditions and on long voyages. Material that has heated in store has usually lost protein quality that cannot be restored. And as with any fraction concentrated out of the bean, what the incoming soybeans carried follows into the cake, so the condition and provenance of the beans crushed bear on the product.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  majorQualityAttributes: [
    'Protein content',
    'Residual oil content',
    'Moisture content',
    'Adequacy of heat treatment (antinutritional factors)',
    'Freedom from contamination',
  ],
  processContext:
    'The solid fraction from mechanically pressing prepared soybeans in a screw press: oil is squeezed out through the barrel and the compacted solids are extruded as cake. Soybean oil is the simultaneous co-product. Pressing cannot remove all the oil, which is what distinguishes the cake from solvent-extracted meal.',
  storageContext:
    'Bulk, bagged, or pelleted after grinding; hygroscopic and liable to heat and mould if held moist, and shorter-keeping than solvent-extracted meal because of its residual oil.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2304.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues resulting from the extraction of soya-bean oil, whether or not ground or pelleted. The subheading covers pressed cake and solvent-extracted meal alike — it does not distinguish the two.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'soybean-meal' },
    { type: 'commodity-product', slug: 'soybean-oil' },
    { type: 'commodity-product', slug: 'groundnut-cake' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Oilseed pressing and solvent extraction as alternative routes, and their cake and meal products',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Soybean crushing product descriptions and expeller cake context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor:
        'Oilseed cakes and protein meals as feed ingredients in livestock nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and labelling are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or pressing specification.',
    'No residual-oil, protein, moisture, or oil-recovery figures are given here — they vary with the beans, the preparation, and how the press is run, and are process- and contract-specific.',
    'Residual oil is described only in qualitative comparison with solvent-extracted meal; no threshold separates the two products, the naming of expeller and extracted products varies by market, and heat-treatment adequacy is likewise summarised qualitatively.',
    'Feed use, permitted claims, and labelling follow the feed regulations of the market where the cake is sold.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Press Cake: Pressed, Not Solvent-Extracted',
    description:
      'Soybean press cake as a pressing co-product: why expeller cake keeps more residual oil than solvent-extracted meal, how it feeds, and why it keeps less well.',
    keywords: [
      'soybean press cake',
      'expeller cake',
      'mechanical pressing',
      'residual oil',
      'feed protein',
    ],
  },
  structuredData: { article: true },
};
