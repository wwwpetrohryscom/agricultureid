import type { ProcessingMethodContent } from '@/types/content';

export const juiceExtractionMilling: ProcessingMethodContent = {
  id: 'processing-method-juice-extraction-milling',
  slug: 'juice-extraction-milling',
  contentType: 'processing-method',
  title: 'Juice Extraction by Milling',
  alternativeNames: ['Cane milling', 'Tandem milling', 'Cane crushing'],
  category: 'Processing method',
  subcategory: 'Sugar processing',
  processingClass: 'pressing',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Milling squeezes sugar-bearing juice out of prepared cane, separating the crop into a liquid carrying the sugar and a fibrous residue carrying the plant. That residue, bagasse, is what fuels the mill that produced it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sugarcane is a grass that stores sugar dissolved in the juice held within its stalk tissue. Everything a sugar mill does downstream depends on getting that juice out, and milling is the mechanical way of doing it: prepared cane is passed through successive sets of heavy rolls that squeeze the fibre and force the juice out of it. What emerges is two streams — a sugar-bearing juice, and the crushed fibre left behind, called bagasse.',
    },
    {
      type: 'paragraph',
      text: 'The interesting thing about this split is what happens to the fibre. Bagasse is not a disposal problem: it is fuel. Cane mills routinely burn their own bagasse to raise the steam and generate the electricity that runs the factory, and many export surplus power to the grid. A cane mill is therefore, to an unusual degree, a plant that powers itself on its own residue — the by-product is not a cost to be managed but an energy asset the factory is designed around.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Pressing — mechanical expression of juice from a fibrous solid',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Sugarcane (prepared by cutting and shredding beforehand)',
    },
    {
      label: 'By-product',
      value: 'Bagasse — the mill’s principal fuel, not a waste stream',
    },
    {
      label: 'Governing principle',
      value:
        'Pressure expresses juice from ruptured cells; a single squeeze cannot get it all',
    },
    {
      label: 'Why it repeats',
      value:
        'Successive mills with water added between them recover juice one pass cannot reach',
    },
    {
      label: 'Time pressure',
      value:
        'Cut cane deteriorates, so mills run against the clock from harvest onwards',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is to get as much of the cane’s sugar as possible out of the fibre and into the juice, because sugar left in the bagasse is sugar the factory will never see again. Once the fibre goes to the boiler, whatever sugar it still holds is burnt with it. Extraction efficiency at the mills therefore sets a ceiling on everything downstream: no amount of skill in the boiling house recovers sugar that never left the stalk.',
        },
        {
          type: 'paragraph',
          text: 'The principle is straightforward expression. Cane arriving at the mills has already been cut and shredded so that its cells are ruptured and the juice inside has a path out; the mill rolls then compress the fibre mat and force that juice out through it. A single pass cannot do the job, because as the fibre compresses it holds juice in the structure that remains. So milling is arranged as a sequence — a tandem — with the cane passing through several mills in turn.',
        },
        {
          type: 'paragraph',
          text: 'Between those mills, the process does something more subtle than squeezing harder. Water, or dilute juice from a later mill, is applied to the fibre before the next pass. This dilutes the juice remaining in the fibre so that the next squeeze removes more of the sugar with it — the added liquid moves counter to the cane, so the most dilute liquid meets the most exhausted fibre. The mill is not simply pressing repeatedly; it is washing sugar out of the fibre while pressing. That is why extraction can approach completeness in a way that pressing alone could not.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why preparation is not part of milling',
          text: 'Cane is cut and shredded before it reaches the rolls, so that the juice has a path out. Preparation determines what milling can achieve — badly prepared cane cannot be squeezed dry however heavy the rolls — but it produces no separate entity of its own: prepared cane is still cane. It conditions the material rather than transforming it.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave the milling tandem, and they have quite different standings in this model.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mixed juice',
              description:
                'The sugar-bearing liquid, carrying suspended soil, fibre, and colloidal material. An intermediate stream: it goes forward to clarification and then to the boiling house, and is not a product entity in its own right.',
            },
            {
              term: 'Bagasse',
              description:
                'The crushed fibre leaving the last mill, still moist and still holding some sugar. A by-product, and the factory’s principal fuel.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Bagasse deserves more than a passing mention, because it is the reason cane sugar factories have the energy profile they do. Burnt in the factory’s boilers, it raises the steam that drives the mills and heats the evaporators, and it generates the electricity the plant runs on. Well-configured factories produce more power than they need and export the surplus. Bagasse also has uses beyond the boiler — as a fibre feedstock for pulp and board, and as a feed component — so where a factory has an alternative outlet, burning it is a choice among uses rather than the only option.',
        },
        {
          type: 'paragraph',
          text: 'Neither stream is finished. The juice is a long way from sugar: it must be clarified, concentrated, crystallised, and separated before anything crystalline exists. Those are separate methods.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Milling cannot make sugar. The sucrose in the juice arrived in the cane, and the factory’s job from here is to lose as little of it as possible. What milling decides is how much of that sucrose is captured in the juice rather than carried away in the fibre — and, because the process adds water to improve extraction, how much water the boiling house will subsequently have to evaporate. That is a real trade: recovering more sugar by adding more water means more energy spent boiling it off later.',
        },
        {
          type: 'paragraph',
          text: 'Sugar losses in cane processing begin before the mill. Cut cane deteriorates: once the stalk is severed, its sucrose begins to be lost to biological activity, and the loss continues for as long as the cane sits. This is why cane factories run continuously through the harvest and why cut-to-crush delay is watched so closely. It is a loss the mill cannot recover, only avoid by not waiting.',
        },
        {
          type: 'list',
          items: [
            'Sucrose retained in the bagasse and burnt with it',
            'Sucrose lost to deterioration between cutting and crushing',
            'Sugar carried away with soil and trash entering with the cane',
            'Juice spillage and leakage across the tandem',
            'Added water raising the evaporation load downstream',
          ],
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'The energy story of cane milling is genuinely unusual, and worth stating carefully. The factory’s main fuel is its own by-product: bagasse burnt on site raises the steam and generates the power the plant consumes, and surplus electricity is exported in many producing countries. This is a real instance of circularity — a residue stream carrying the process that made it — and it is a factual description of how cane factories are configured, not a claim that cane sugar is environmentally preferable to any alternative. Such a comparison would need a comparable evidence base and none is offered here.',
        },
        {
          type: 'paragraph',
          text: 'Against that, milling is water-using and generates effluent carrying soil, fibre, and sugar, all of which need treatment. Bagasse combustion is a combustion source with the emissions and air-quality controls that implies. Both are matters for the applicable environmental regulator.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Heavy rolls, steam, and hot surfaces',
          text: 'Mill tandems are large, high-force rotating machines with severe nip-point hazards, driven by steam or electric drives; the factory around them runs on steam and pressure systems with hot surfaces throughout. Bagasse handling generates dust and presents fire risk, and bagasse storage and juice vessels present confined-space hazards. Guarding, isolation, and entry are matters for qualified engineering and the facility’s procedures. This entry describes what milling does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'sugarcane' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'bagasse' }],
  processObjective:
    'Separate sugarcane into a sugar-bearing juice and a fibrous residue, recovering as much of the cane’s sucrose as possible into the juice, since any sugar remaining in the fibre is lost when that fibre is burnt as fuel.',
  operatingPrinciple:
    'Prepared cane, already shredded so that its cells are ruptured, is compressed between successive sets of heavy rolls that force juice out of the fibre mat. Because compression alone cannot free all the juice, water or dilute juice is applied between mills and moves counter to the cane, so the most dilute liquid meets the most exhausted fibre — washing sugar out of the fibre while pressing it.',
  physicalOrBiochemicalBasis:
    'Mechanical: expression of a mobile liquid from a compressible fibrous matrix under applied pressure, combined with countercurrent dilution that reduces the sugar concentration retained in the fibre before each successive pressing. No chemical change is intended.',
  qualityEffects: [
    'Determines how much of the cane’s sucrose reaches the boiling house rather than the boiler',
    'Cannot create or improve sucrose — it arrives with the cane and can only be lost from here',
    'Added dilution water improves extraction but raises the evaporation load downstream',
    'Juice leaves carrying soil, fibre, and colloidal material requiring clarification',
  ],
  measurableParameters: [
    'Extraction',
    'Pol in bagasse',
    'Bagasse moisture',
    'Fibre content of cane',
    'Imbibition water addition',
    'Cut-to-crush delay',
  ],
  lossPoints: [
    'Sucrose retained in the bagasse and burnt with it',
    'Sucrose lost to deterioration between cutting and crushing',
    'Sugar entering with, and lost to, soil and trash',
    'Juice spillage and leakage across the tandem',
  ],
  environmentalContext:
    'Cane factories are configured around burning their own bagasse to raise process steam and generate electricity, with surplus power exported to the grid in many producing countries — a genuine instance of a by-product carrying the process that produced it. Bagasse also has established uses in pulp, board, and feed. Against this, milling is water-using and generates effluent carrying soil, fibre, and sugar requiring treatment, and bagasse combustion is a regulated air-emissions source. No comparison of overall environmental performance against other sugar sources is made here.',
  safetyLimitations: [
    'Mill tandems are large, high-force rotating machines with severe nip-point and entanglement hazards; guarding and isolation are governed by qualified engineering, the facility’s procedures, and applicable occupational-safety regulation.',
    'Cane factories run on steam and pressure systems with hot surfaces and hot juice throughout, presenting burn, pressure, and steam-release hazards.',
    'Bagasse handling and storage generate dust and present fire and self-heating risk; bagasse piles, bins, juice vessels, and tanks present confined-space hazards. Entry is governed by facility procedure and regulation, not by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no roll settings, pressures, imbibition rates, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Effluent, air-emissions, and biomass-combustion requirements for cane factories are jurisdiction-specific and are set by the applicable environmental regulator.',
    'Arrangements for exporting surplus electricity from bagasse cogeneration depend on national grid and energy policy.',
  ],
  followedBy: [
    { type: 'processing-method', slug: 'evaporation-and-crystallisation' },
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'harvest-maturity-assessment' },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'machinery', slug: 'sugarcane-harvester' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sugarcane processing and sugar product definitions',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Sugarcane processing and bagasse energy use in Brazil',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Sugar sector structure and cane processing context',
    },
    {
      sourceId: 'us-epa',
      citedFor: 'Biomass combustion as a regulated air-emissions source',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global cane-producing regions. Milling tandems remain the dominant extraction route, though diffusion is used in some factories; bagasse cogeneration and power export arrangements vary with national energy policy.',
  limitations: [
    'A reference description of the process, not a factory specification or operating instruction.',
    'No extraction figures, sugar recoveries, pol values, moisture contents, imbibition rates, roll settings, or pressures are given — they are factory-, cane-, and season-specific.',
    'Describes milling; some factories extract cane juice by diffusion instead, on a different principle.',
    'The description of bagasse cogeneration is a factual account of how cane factories are configured, not a claim of environmental preferability over any other sugar source.',
    'Effluent, emissions, and energy-export requirements differ by jurisdiction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cane Juice Extraction by Milling',
    description:
      'How cane mills squeeze sugar-bearing juice from prepared cane, why water is added between mills, and how bagasse ends up fuelling the factory that made it.',
    keywords: [
      'juice extraction',
      'cane milling',
      'bagasse',
      'sugarcane processing',
      'imbibition',
    ],
  },
  structuredData: { article: true },
};
