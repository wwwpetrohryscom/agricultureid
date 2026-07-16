import type { ProcessingMethodContent } from '@/types/content';

export const evaporationAndCrystallisation: ProcessingMethodContent = {
  id: 'processing-method-evaporation-and-crystallisation',
  slug: 'evaporation-and-crystallisation',
  contentType: 'processing-method',
  title: 'Evaporation and Crystallisation',
  alternativeNames: ['Boiling house', 'Sugar boiling', 'Pan boiling'],
  category: 'Processing method',
  subcategory: 'Sugar processing',
  processingClass: 'concentration',
  processStage: 'primary-transformation',
  transformationBasis: 'thermal',
  summary:
    'Boiling water off clarified cane juice concentrates the sugar until it can no longer stay dissolved and crystallises out. This is where sugar stops being a solution and becomes a solid — and where molasses, the liquid that will not give up any more, is defined.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clarified cane juice is mostly water with sugar dissolved in it. Turning that into crystalline sugar is a matter of removing the water until the sugar has nowhere left to stay in solution. Evaporation does the bulk of the removal, concentrating the juice into a syrup; crystallisation then continues under controlled conditions until sugar comes out of solution as crystals suspended in the remaining liquid.',
    },
    {
      type: 'paragraph',
      text: 'The step never runs to completion, and that is not a failure. As sugar crystallises, the liquid it leaves behind becomes progressively richer in everything that is not sucrose — the other sugars, salts, and organic material carried through from the cane. These impurities hold sucrose in solution and prevent it crystallising. Eventually a point arrives where boiling further yields nothing worth the energy, and the liquid remaining is molasses. Molasses is not the residue of a process that fell short; it is the defined endpoint of a process that has an endpoint, and it is a co-product with real markets.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Concentration — water removal driving crystal formation',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Sugarcane (via clarified juice)' },
    { label: 'Primary output', value: 'Raw sugar — the crystalline fraction' },
    {
      label: 'Co-product',
      value: 'Molasses — established feed and fermentation markets',
    },
    {
      label: 'Governing principle',
      value:
        'Remove water until sugar exceeds its solubility and crystallises out',
    },
    {
      label: 'Why it stops',
      value: 'Non-sugars accumulate in the liquid and hold sucrose in solution',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is to recover the cane’s sucrose as crystals. Crystallisation is not merely a way of making sugar solid — it is the purification step of the whole factory. A growing sucrose crystal admits sucrose molecules into its lattice and largely excludes everything else, so the act of crystallising separates sugar from the impurities dissolved alongside it far more effectively than any filtration could. The factory purifies sugar by crystallising it.',
        },
        {
          type: 'paragraph',
          text: 'The principle is solubility. A given quantity of liquid can hold only so much sugar dissolved; remove water and the concentration rises until the solution holds more than it stably can, and the excess comes out as solid. Evaporation does the coarse work, boiling juice down to a syrup, and it is done in stages that reuse the vapour from one stage to heat the next, because boiling large volumes of water is the factory’s dominant energy demand. Crystallisation then continues the concentration in vessels where the process is controlled deliberately, so that existing crystals grow rather than a shower of new ones forming.',
        },
        {
          type: 'paragraph',
          text: 'What leaves is neither sugar nor syrup but a mixture of both: crystals suspended in the mother liquor they grew from, called massecuite. It has to be physically separated, and that is a different operation on a different principle — centrifugation, described separately. Crystallisation forms the crystals; it does not divide them from the liquid.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The boiling house works in stages',
          text: 'The liquid separated from one batch of crystals still holds recoverable sugar, so it is boiled again to crystallise more, and the liquid from that may be boiled again in turn. Each stage yields a lower-purity product from a more impure liquor. Molasses is what remains when the last of these stages can no longer yield sugar economically — which is why molasses is defined by the process reaching its limit, not by a specification set in advance.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Raw sugar',
              description:
                'The crystalline fraction: sucrose crystals still carrying a film of the mother liquor they grew in. The primary product of a cane factory, traded internationally and destined for a refinery.',
            },
            {
              term: 'Molasses',
              description:
                'The final mother liquor, from which further crystallisation is no longer worthwhile. A co-product with established markets in animal feed and as a fermentation substrate.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Molasses is worth being precise about, because the language of "what is left over" invites misreading. It is bought and sold as a commodity in its own right. It goes into compound feeds and liquid feed supplements, where its sugar content and palatability are what is wanted; and it is a major fermentation feedstock, used for ethanol, yeast, and a range of fermentation products. In some cane-producing countries the fermentation outlet is a substantial industry attached to the sugar factory. A stream with that many buyers is a co-product, not a residue.',
        },
        {
          type: 'paragraph',
          text: 'Raw sugar, equally, is not the sugar a consumer buys. It is an intermediate — a stable, transportable, internationally traded form of sugar that a refinery will process further. Its crystals carry a coloured film of mother liquor, and it is sold on that basis.',
        },
      ],
    },
    {
      id: 'refining-beyond-raw-sugar',
      heading: 'What happens beyond raw sugar',
      body: [
        {
          type: 'paragraph',
          text: 'Raw sugar goes to a refinery, and it is worth describing what happens there even though no separate method entry exists for it in this corpus. A refinery removes the coloured film adhering to the raw crystals, dissolves the sugar, removes colour and remaining non-sugars from the resulting liquor, and then crystallises it again — because crystallisation is, as at the factory, the most effective purification available. The output is the white sugar sold to food manufacturers and consumers, along with a refinery syrup from which further sugar is recovered.',
        },
        {
          type: 'paragraph',
          text: 'This is described in prose rather than modelled as a method because the corpus holds no product entity for refined or white sugar. Declaring an output that does not exist would break the chain the model depends on, and inventing the entity is not this entry’s to make. The gap is noted: refining is a real and universal step in the cane chain, and the platform cannot currently represent its product.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'The boiling house cannot recover sugar that the mills failed to extract, and it cannot undo the deterioration that began when the cane was cut. What it decides is how much of the sucrose reaching it ends up in crystals rather than in molasses, and what those crystals are like — their size, their uniformity, and how much colour they carry.',
        },
        {
          type: 'paragraph',
          text: 'Heat is the characteristic risk. Sugar held hot for too long degrades: sucrose breaks down into other sugars that will not crystallise, and colour forms. Both losses are self-reinforcing, since the products of degradation are themselves non-sugars that hold more sucrose in solution and push more of it into the molasses. Time at temperature is thus a loss mechanism in its own right, quite apart from the sugar that molasses carries away by design.',
        },
        {
          type: 'list',
          items: [
            'Sucrose leaving in the molasses — inherent to the process, its extent set by the non-sugars present',
            'Sucrose degraded by prolonged exposure to heat, forming non-crystallisable sugars and colour',
            'Colour formation, carried into the raw sugar and passed to the refinery to remove',
            'Sugar lost in condensate, spillage, and equipment holdup',
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
          text: 'Evaporation is where a sugar factory spends most of its energy: boiling water off large volumes of juice is the dominant thermal demand, which is why multi-stage evaporation reusing vapour between stages is universal rather than optional. In a cane factory that heat comes from burning bagasse — the fibre the mills produced — so the concentration step is carried by the crop’s own residue. The condensate recovered from evaporation is itself a water stream the factory reuses.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Steam, pressure, vacuum, and hot syrup',
          text: 'The boiling house is built from pressure and vacuum vessels, steam systems, and hot surfaces, and it handles hot syrup that causes severe burns on contact. Vessels and tanks present confined-space hazards. Design, commissioning, and operation are matters for qualified engineering, the facility’s procedures, and applicable regulation. This entry describes what the process does; it is not an operating instruction and gives no temperatures, pressures, or settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'sugarcane' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'raw-sugar' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'molasses' }],
  processObjective:
    'Concentrate clarified cane juice by removing water until dissolved sucrose exceeds its solubility and crystallises out, recovering the cane’s sugar as crystals — and, because crystals exclude impurities as they grow, purifying it in the same act.',
  operatingPrinciple:
    'Water is boiled off the juice in successive stages that reuse each stage’s vapour to heat the next, concentrating it to a syrup. Concentration then continues under controlled conditions so that existing crystals grow rather than new ones forming spontaneously. The result is massecuite — crystals suspended in mother liquor — which requires a separate physical separation. Repeated boiling of the separated liquor recovers further sugar until the accumulated non-sugars hold the remaining sucrose in solution; that final liquor is molasses.',
  physicalOrBiochemicalBasis:
    'Thermal and physical: evaporative water removal raising solute concentration past saturation, followed by crystal growth in which the sucrose lattice admits sucrose and largely excludes other dissolved species — making crystallisation a purification as well as a phase change. Prolonged heat drives unwanted degradation of sucrose and colour formation.',
  qualityEffects: [
    'Determines how much of the sucrose reaching the boiling house is recovered as crystals rather than passing into molasses',
    'Sets crystal size and uniformity, which govern how the raw sugar handles and how it separates from the mother liquor',
    'Prolonged heat degrades sucrose into non-crystallisable sugars and forms colour, compounding losses',
    'Cannot recover sugar the mills failed to extract, nor reverse deterioration that began at cutting',
  ],
  measurableParameters: [
    'Purity of juice, syrup, and molasses',
    'Crystal size distribution',
    'Colour',
    'Brix',
    'Massecuite consistency',
    'Steam consumption per unit of cane',
  ],
  lossPoints: [
    'Sucrose retained in molasses, its extent set by the non-sugars present',
    'Sucrose degraded by time at temperature',
    'Sugar carried into condensate',
    'Spillage and equipment holdup',
  ],
  environmentalContext:
    'The dominant thermal demand in a sugar factory, which is why multi-stage evaporation reusing vapour between stages is universal. In cane factories that heat is raised by burning bagasse, the fibre produced by the mills, so the concentration step is carried by the crop’s own residue; condensate recovered from evaporation is reused as process water. Molasses leaves as a traded co-product into feed and fermentation rather than as an effluent load.',
  safetyLimitations: [
    'The boiling house comprises pressure and vacuum vessels, steam systems, and extensive hot surfaces; design, commissioning, inspection, and operation are matters for qualified engineering under applicable pressure-equipment regulation.',
    'Hot syrup and massecuite cause severe burns on contact and are handled throughout the process.',
    'Evaporator bodies, pans, and tanks present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, pressures, vacuum levels, Brix targets, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Sugar naming, grades, and compositional standards are jurisdiction-specific and are set by the applicable food authority.',
    'Pressure-equipment and steam-system requirements are jurisdiction-specific and are set by the applicable safety regulator.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'juice-extraction-milling' }],
  followedBy: [{ type: 'processing-method', slug: 'centrifugation' }],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'colour' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sugar processing and sugar product definitions',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Raw sugar as a traded intermediate and sugar sector structure',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Cane sugar processing and molasses utilisation',
    },
    { sourceId: 'nap-nrc', citedFor: 'Molasses as a feed ingredient' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The principle is the same wherever sugar is made from cane or beet; the number of boiling stages and the point at which molasses is declared final are factory- and economics-specific.',
  limitations: [
    'A reference description of the process, not a factory specification or operating instruction.',
    'No temperatures, pressures, vacuum levels, Brix, purity, crystal size, recovery, or steam figures are given — they are factory-, season-, and economics-specific.',
    'Describes the cane route; beet sugar is made by the same principle from purified beet juice, but is not declared as an output here because this entry’s input is sugarcane.',
    'Sugar refining beyond raw sugar is described in prose only: the corpus holds no product entity for refined or white sugar, so no such output is declared.',
    'Sugar naming and grades differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Evaporation and Crystallisation in Sugar Making',
    description:
      'How boiling water off cane juice makes sugar crystallise, why crystallisation is really a purification step, and why molasses is where the process stops.',
    keywords: [
      'evaporation',
      'crystallisation',
      'sugar boiling',
      'raw sugar',
      'molasses',
    ],
  },
  structuredData: { article: true },
};
