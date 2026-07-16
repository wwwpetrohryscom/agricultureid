import type { ProcessingMethodContent } from '@/types/content';

export const vegetableDehydration: ProcessingMethodContent = {
  id: 'processing-method-vegetable-dehydration',
  slug: 'vegetable-dehydration',
  contentType: 'processing-method',
  title: 'Vegetable Dehydration',
  alternativeNames: [
    'Onion dehydration',
    'Vegetable drying',
    'Dehydrated vegetable production',
  ],
  category: 'Processing method',
  subcategory: 'Vegetable preservation',
  processingClass: 'drying',
  processStage: 'primary-transformation',
  transformationBasis: 'physical',
  summary:
    'Vegetable dehydration removes water from prepared vegetable tissue until it becomes a stable ingredient. Dehydrated onion is not a stored onion: it is a distinct ingredient product that rehydrates into food, and it is made from cultivars chosen for the purpose.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vegetable dehydration takes prepared vegetable material — onions sliced or diced — and removes nearly all of its water in moving heated air. What emerges is a light, shelf-stable ingredient that keeps at ambient temperature for a long period and rehydrates when it meets moisture in a soup, sauce, or seasoning blend. Almost none of it is eaten as it is; it exists to be an ingredient in something else.',
    },
    {
      type: 'paragraph',
      text: 'The identity change here is worth stating carefully, because onions are already dried once before this process begins. Curing dries the outer scales of a harvested bulb to seal it for storage, and a cured bulb is still an onion — that is conditioning, and it belongs to post-harvest. Dehydration removes water from the flesh itself, and the result is no longer a bulb at all: it is dehydrated onion, a traded ingredient with its own specifications, buyers, and price. The same word covers two operations that sit on opposite sides of the line.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Drying — water removal from prepared vegetable tissue',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Dry bulb onions, cut before drying' },
    { label: 'Primary output', value: 'Dehydrated onion' },
    {
      label: 'Governing principle',
      value:
        'Water leaves the tissue into moving air until too little remains available for microbial growth',
    },
    {
      label: 'Not the same as curing',
      value:
        'Curing conditions a bulb and it stays an onion; dehydration makes a different product',
    },
    {
      label: 'Defining constraint',
      value:
        'Sugars in the tissue brown under drying heat, so cultivar choice largely decides the outcome',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is an ingredient rather than a preserved vegetable. Dehydrated onion gives a food manufacturer onion flavour without water, weight, cold storage, seasonality, or the labour of peeling and chopping — and it delivers it at a consistent specification year-round. That is a different proposition from storing onions well. The value is in convenience, consistency, and concentration of flavour into a fraction of the mass, not merely in the fruit lasting longer.',
        },
        {
          type: 'paragraph',
          text: 'The principle is the same vapour-pressure-driven mass transfer that dries any biological material: water moves from the wet tissue into drier air and is carried away, and as water leaves, what remains becomes progressively bound to the concentrated solutes around it. Once the availability of water — its water activity — falls below what microorganisms need, growth cannot proceed. Cutting the vegetable beforehand is what makes this practical: it opens the internal tissue to the air and shortens the path water must travel, and drying a whole bulb would be impractically slow.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cutting has a cost as well as a benefit',
          text: 'Slicing opens the tissue to the drying air, but it also ruptures cells and lets enzymes meet substrates they were kept apart from. In onions this is exactly what generates the pungent sulphur compounds — the same reaction that makes cut onions sting. Preparation is therefore not a neutral step: it starts chemistry that drying then acts on.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'As with fruit drying, there is one product stream and no second market. The removed water leaves as vapour and is not a product. Trimmings from preparation — skins, roots, and tops — are removed before drying begins and are not carried here as a distinct product entity.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dehydrated onion',
              description:
                'The primary product: dried onion tissue, supplied in a range of particle sizes from sliced and diced through to granulated and powdered. Specified on moisture, colour, pungency, particle size, and microbiological criteria, and sold almost entirely into food manufacturing.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Particle size is a product decision rather than a processing accident. The same dried material is milled to different specifications for different uses, and the finer grades behave differently in handling — powders absorb atmospheric moisture readily and cake, which is why packaging and storage requirements tighten as particle size falls.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant quality issue is browning, and its cause is compositional rather than procedural. Reducing sugars in the onion react with amino acids under drying heat and darken the product irreversibly. Since a buyer of dehydrated onion generally wants it pale, the sugar content of the incoming bulb largely determines whether an acceptable product is achievable at all — which is why dehydration runs on cultivars selected for high solids and low reducing sugars, grown for the purpose. As with paste from processing tomatoes, the processing channel and the fresh-market channel diverge well before the factory gate.',
        },
        {
          type: 'paragraph',
          text: 'Beyond colour, the process concentrates and it exposes. Flavour compounds concentrate along with everything else, but the volatile sulphur compounds that carry onion pungency are themselves volatile under heat and leave with the water vapour, so drying that recovers more product faster tends to deliver less flavour. Dehydration also does not sterilise. It arrests microbial growth without eliminating microorganisms, and dehydrated vegetables carry recognised microbiological specifications precisely because a dried ingredient can still carry a load into the food it is added to.',
        },
        {
          type: 'list',
          items: [
            'Non-enzymatic browning between reducing sugars and amino acids, irreversible and governed largely by cultivar',
            'Loss of volatile sulphur compounds — the pungency — with the water vapour',
            'Heat damage to colour and to heat-sensitive nutrients',
            'Fines generated during milling and handling, particularly at finer grades',
            'Moisture pickup and caking in storage, restoring the conditions for spoilage',
            'Material lost in preparation trimmings and retained on dryer surfaces',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dehydration is not sterilisation',
          text: 'Removing water stops microorganisms growing; it does not remove them. Dehydrated vegetables are supplied against microbiological specifications, and where an ingredient requires a microbial reduction step that is a separate, regulated process established by qualified specialists — not something drying provides. No assurance of that kind is offered here.',
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Dehydration is energy-intensive, because the latent heat needed to evaporate the water has to be supplied and most of the incoming mass is water that will be driven off. Water demand also sits at the front of the plant, where field-run bulbs are washed and prepared, generating effluent with an organic load requiring treatment. The preparation trimmings are an organic stream with feed, composting, and anaerobic-digestion outlets rather than an inevitable disposal burden, though which outlet is used depends on local infrastructure and on feed regulation.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust, hot surfaces, and confined spaces',
          text: 'Milling dried vegetable material generates combustible organic dust, and suspended dust is a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers. Dryers present hot surfaces, heated air, and potential confined-space entry, and cutting equipment presents severe laceration hazards. All of these are governed by qualified engineering, applicable occupational-safety regulation, and the facility’s own procedures. This entry describes what dehydration does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'dry-bulb-onions' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'dehydrated-onion' }],
  processObjective:
    'Remove water from prepared onion tissue until too little remains available to support microbial growth, producing a light, shelf-stable, consistently specified ingredient that delivers onion flavour to food manufacturing without water, weight, cold storage, or seasonality.',
  operatingPrinciple:
    'The bulbs are trimmed and cut, which opens the internal tissue to the air and shortens the distance water must travel to escape. Water then moves from the tissue into moving heated air, driven by the vapour-pressure difference between them, and is carried away. As it leaves, the water remaining becomes increasingly bound to the concentrated solutes around it, so water activity falls below the level microbial growth requires. The dried material is then milled to the particle size the specification calls for.',
  physicalOrBiochemicalBasis:
    'Physical: vapour-pressure-driven mass transfer of water from tissue to air, with reduced water activity — not reduced water content alone — providing the preservative effect. Cutting initiates enzymatic reactions that generate onion’s characteristic sulphur compounds, and non-enzymatic browning proceeds under drying heat as an unintended chemical change.',
  qualityEffects: [
    'Concentrates solids and flavour while removing the great majority of the mass as water',
    'Reduces water activity, conferring ambient shelf stability',
    'Causes irreversible non-enzymatic browning, governed largely by the reducing-sugar content of the cultivar',
    'Volatile sulphur compounds carrying pungency are lost with the water vapour',
    'Does not sterilise: it prevents microbial growth rather than eliminating microorganisms',
    'Cannot improve the solids content, sugar profile, or soundness of the incoming bulbs',
  ],
  measurableParameters: [
    'Moisture content',
    'Water activity',
    'Colour',
    'Particle size',
    'Pungency',
    'Dry matter content',
    'Foreign material',
  ],
  lossPoints: [
    'Material removed as preparation trimmings — skins, roots, and tops',
    'Fines generated during milling and handling',
    'Product retained on dryer surfaces, trays, and conveyors',
    'Flavour lost as volatiles leave with the vapour',
    'Moisture pickup and caking in storage',
  ],
  environmentalContext:
    'Energy-intensive, since most of the incoming mass is water whose latent heat of evaporation must be supplied. Water demand and wastewater organic load sit at the preparation end, where field-run bulbs are washed and cut. Preparation trimmings are an organic stream with feed, composting, and anaerobic-digestion outlets rather than an inevitable disposal burden, though the outlet available depends on local infrastructure and feed regulation.',
  safetyLimitations: [
    'Milling dried vegetable material generates combustible organic dust; suspended dust is a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Dryers present hot surfaces, heated air, and in enclosed designs potential confined-space entry; cutting equipment presents severe laceration hazards. Guarding, isolation, and entry controls are matters for qualified engineering and the facility’s procedures under applicable occupational-safety regulation.',
    'Dehydration prevents microbial growth but does not sterilise; dehydrated vegetables are supplied against microbiological specifications, and any microbial-reduction step is a separate regulated process established by qualified specialists. No such assurance is given here.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, air conditions, drying times, or moisture targets.',
  ],
  jurisdictionalLimitations: [
    'Compositional standards, microbiological criteria, and labelling for dehydrated vegetable ingredients are jurisdiction-specific and are set by the applicable food authority.',
    'The use of preparation trimmings in animal feed is governed by feed-safety regulation that differs by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'onion-store' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
    { type: 'quality-attribute', slug: 'colour' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Vegetable drying and dehydrated product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Onion dehydration and dried-vegetable quality research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Onion post-harvest handling and processing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with dehydration concentrated in regions growing high-solids onion cultivars under contract. Product specifications and microbiological criteria vary with end use and jurisdiction.',
  limitations: [
    'A reference description of the process, not a dehydration specification or operating instruction.',
    'No temperatures, air conditions, drying times, or moisture figures are given — they are plant-, cultivar-, and contract-specific.',
    'Dehydration runs on cultivars selected and contracted for processing; this dataset carries a single dry-bulb-onions commodity and cannot represent that channel split in the data model.',
    'Modelled from onions; other dehydrated vegetables follow the same water-activity principle but differ in preparation, browning behaviour, and product standards.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Vegetable Dehydration: Making Dehydrated Onion',
    description:
      'How vegetable dehydration turns onions into a shelf-stable ingredient: water activity, why browning depends on cultivar sugars, and why it is not sterilisation.',
    keywords: [
      'vegetable dehydration',
      'dehydrated onion',
      'onion drying',
      'water activity',
      'dried vegetables',
    ],
  },
  structuredData: { article: true },
};
