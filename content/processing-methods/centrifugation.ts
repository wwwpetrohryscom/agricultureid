import type { ProcessingMethodContent } from '@/types/content';

export const centrifugation: ProcessingMethodContent = {
  id: 'processing-method-centrifugation',
  slug: 'centrifugation',
  contentType: 'processing-method',
  title: 'Centrifugation',
  alternativeNames: ['Curing', 'Massecuite centrifuging', 'Sugar purging'],
  category: 'Processing method',
  subcategory: 'Sugar processing',
  processingClass: 'separation',
  processStage: 'separation',
  transformationBasis: 'mechanical',
  summary:
    'Crystallisation makes sugar crystals but leaves them suspended in the liquid they grew from. Centrifugation is what actually divides the two — spinning the mother liquor away through a screen the crystals cannot pass, and separating raw sugar from molasses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A sugar factory’s boiling house produces massecuite: a dense mixture of sucrose crystals suspended in the mother liquor they crystallised out of. Both the crystals and the liquor are wanted, and they are wanted apart. Centrifugation performs that division. Massecuite is spun in a perforated basket, and the force throws the liquid out through a screen whose openings are too small for the crystals to follow. The crystals stay; the liquor goes.',
    },
    {
      type: 'paragraph',
      text: 'It is a strictly mechanical step, and worth distinguishing carefully from the crystallisation that precedes it. Crystallisation decides how much sugar becomes solid and what the crystals are like; it is where the chemistry and the losses live. Centrifugation decides nothing about how much sugar exists — it only separates what crystallisation already made. But without it, the boiling house would produce nothing saleable at all: massecuite is not a product, and both raw sugar and molasses come into existence as distinct materials at the centrifugal.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Separation — solid from liquid under centrifugal force',
    },
    { label: 'Stage', value: 'Separation, after crystallisation' },
    {
      label: 'Input',
      value: 'Sugarcane (via massecuite from the boiling house)',
    },
    { label: 'Primary output', value: 'Raw sugar — the separated crystals' },
    { label: 'Co-product', value: 'Molasses — the separated mother liquor' },
    {
      label: 'Governing principle',
      value:
        'Centrifugal force drives liquor through a screen the crystals cannot pass',
    },
    {
      label: 'What it does not do',
      value:
        'Creates no sugar — it only divides what crystallisation already formed',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is division. Crystals and mother liquor have entirely different destinations — one is the factory’s product, the other is either boiled again for more sugar or sold as molasses — and as long as they remain mixed neither can go anywhere. Centrifugation separates them, and does so quickly enough to keep pace with a continuously operating factory, which gravity settling could not.',
        },
        {
          type: 'paragraph',
          text: 'The principle combines two mechanisms. The dominant one is size exclusion: the basket wall is a screen, and the crystals are larger than its openings while the liquor is not, so the liquor passes and the crystals are retained. Centrifugal force supplies the driving pressure that makes this happen fast, and it is very much larger than gravity could provide, which is why a viscous liquor can be driven through a bed of crystals at all. The separation is therefore a filtration accelerated by centrifugal force rather than a density separation as such.',
        },
        {
          type: 'paragraph',
          text: 'Separation alone leaves each crystal coated in a film of the liquor it grew in, and that film carries the colour and the impurities the crystal itself excluded. Removing some of that film — washing the crystal bed while it spins — raises the purity of the sugar leaving. But every bit of washing dissolves a little of the crystal surface and returns that sugar to the liquor, so purity is bought by putting sugar back into the stream it just came out of. That trade is a genuine one and it is settled by the specification the sugar is sold against.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Crystal size decides how well this works',
          text: 'Separation depends on the crystals being large and uniform enough to form a bed that liquor can drain through and a screen can retain. Fine or irregular crystals blind the screen, drain poorly, and pass into the liquor. A separation problem at the centrifugal is very often a crystallisation problem arriving late — which is why the two steps are judged together even though they are distinct operations.',
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
                'The retained crystals, discharged still carrying a residual film of mother liquor. The factory’s primary product, sold to refineries as a traded intermediate.',
            },
            {
              term: 'Molasses',
              description:
                'The mother liquor driven through the screen. Where it still holds recoverable sugar it returns to the boiling house; where it does not, it leaves as final molasses — a co-product sold into feed and fermentation.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between liquor that goes back and liquor that leaves is worth drawing, because the same equipment produces both. A factory boils and centrifuges in successive stages: liquor separated from one stage is boiled again to crystallise more sugar, and centrifuged again in turn. Only when a stage’s liquor can no longer economically yield sugar does it leave the factory as final molasses. So molasses is not simply what the centrifugal throws off — it is what the last centrifugal throws off, after the factory has taken every crystallisation it is worth taking.',
        },
        {
          type: 'paragraph',
          text: 'Neither output is waste and neither is incidental. Raw sugar is the reason the factory exists; molasses is a commodity with buyers in animal feed and in fermentation, where its sugar content is exactly what is wanted.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Centrifugation determines the purity and colour of the sugar leaving, through how completely the mother-liquor film is removed. It cannot improve on the crystals it receives: sugar that crystallised poorly separates poorly, and no amount of spinning fixes an ill-formed crystal. Its influence is over the film, not the solid.',
        },
        {
          type: 'paragraph',
          text: 'The losses are characteristic and they pull against each other. Crystals fine enough to pass the screen go into the liquor and are lost from the sugar stream — recovered if that liquor is reboiled, gone if it is final molasses. Washing to raise purity dissolves crystal surface and sends that sugar the same way. And liquor left behind on inadequately purged sugar carries impurity forward that the refinery must then remove. Every one of these is a trade rather than a defect.',
        },
        {
          type: 'list',
          items: [
            'Fine crystals passing the screen into the liquor',
            'Crystal surface dissolved by washing, returning sugar to the liquor',
            'Sucrose leaving in final molasses once further recovery is uneconomic',
            'Residual liquor film on under-purged sugar, carrying colour and impurity to the refinery',
            'Spillage and equipment holdup',
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
          text: 'Compared with the boiling house alongside it, centrifugation is a modest consumer — its demand is electrical, for spinning, rather than thermal. In a cane factory that electricity is largely generated on site from bagasse. Its water use is confined to washing, and the wash water does not leave as effluent: it dissolves sugar and returns with the liquor into the process, so the water carries value back rather than away.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'High-speed rotating machinery and hot syrup',
          text: 'Centrifugals are high-speed rotating machines carrying dense loads, with stored rotational energy that makes mechanical integrity, balance, and containment critical; they are a recognised focus of machinery-safety design. Massecuite and liquor are hot and cause severe burns on contact, and sugar handling generates dust that is a recognised explosion hazard. Design, guarding, isolation, and inspection are matters for qualified engineering, the facility’s procedures, and applicable regulation. This entry describes what centrifugation does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'sugarcane' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'raw-sugar' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'molasses' }],
  processObjective:
    'Physically divide the sugar crystals formed in the boiling house from the mother liquor they are suspended in, so that raw sugar and molasses exist as separate materials with separate destinations — and remove enough of the liquor film adhering to the crystals to meet the purity the sugar is sold against.',
  operatingPrinciple:
    'Massecuite is spun in a perforated basket. Centrifugal force, far exceeding gravity, drives the mother liquor through a screen whose openings the crystals are too large to pass, retaining the crystals as a bed on the basket wall while the liquor is thrown clear. Washing the retained bed removes part of the liquor film adhering to the crystals, at the cost of dissolving some crystal surface back into the liquor.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: filtration through a screen by size exclusion, with centrifugal force supplying the driving pressure that makes a viscous liquor pass through a crystal bed at a useful rate. No chemical change is intended; washing acts by dissolution of the adhering film.',
  qualityEffects: [
    'Sets the purity and colour of the raw sugar leaving, through how completely the mother-liquor film is removed',
    'Cannot improve poorly formed crystals — fine or irregular crystals separate badly whatever is done here',
    'Washing raises purity but returns dissolved sugar to the liquor, so purity and recovery trade against each other',
    'Creates no sugar: it divides what crystallisation already formed',
  ],
  measurableParameters: [
    'Sugar purity',
    'Colour',
    'Molasses purity',
    'Residual moisture on the sugar',
    'Crystal size distribution',
    'Wash water application',
  ],
  lossPoints: [
    'Fine crystals passing the screen into the liquor',
    'Crystal surface dissolved by washing',
    'Sucrose leaving in final molasses',
    'Residual liquor film carried forward on under-purged sugar',
    'Spillage and equipment holdup',
  ],
  environmentalContext:
    'A modest consumer relative to the boiling house alongside it, with an electrical rather than thermal demand — supplied in cane factories largely by on-site bagasse cogeneration. Water use is confined to washing, and the wash water returns into the process with the liquor rather than leaving as effluent, carrying its dissolved sugar back for recovery.',
  safetyLimitations: [
    'Centrifugals are high-speed rotating machines carrying dense loads with substantial stored rotational energy; mechanical integrity, balance, containment, guarding, and inspection are matters for qualified engineering under applicable machinery-safety regulation and the facility’s procedures.',
    'Massecuite, liquor, and sugar are handled hot and cause severe burns on contact.',
    'Sugar dust is a recognised explosion hazard, requiring engineered dust control, ignition management, and explosion protection.',
    'Vessels, chutes, and sugar-handling enclosures present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'This entry is an educational reference, not an operating instruction: it gives no speeds, cycle times, wash rates, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Sugar naming, grades, and compositional standards are jurisdiction-specific and are set by the applicable food authority.',
    'Machinery-safety requirements for centrifugal equipment are jurisdiction-specific and are set by the applicable safety regulator.',
  ],
  precededBy: [
    { type: 'processing-method', slug: 'evaporation-and-crystallisation' },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sugar processing and sugar product definitions',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Raw sugar and molasses as traded commodities',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Cane sugar processing and molasses utilisation',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, in both cane and beet factories. Batch and continuous centrifugals are used at different stages according to the massecuite being handled and the factory’s configuration.',
  limitations: [
    'A reference description of the process, not a factory specification or operating instruction.',
    'No speeds, forces, cycle times, wash rates, purities, colour values, or recoveries are given — they are factory-, stage-, and specification-specific.',
    'Declares sugarcane as its input, so cane raw sugar and molasses are its declared outputs; beet factories centrifuge on the same principle, but beet products are not declared here.',
    'Sugar naming and grades differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Centrifugation: Separating Sugar from Molasses',
    description:
      'How centrifugals divide sugar crystals from the mother liquor they grew in, why washing trades recovery for purity, and where final molasses is defined.',
    keywords: [
      'centrifugation',
      'sugar centrifugal',
      'massecuite',
      'raw sugar',
      'molasses separation',
    ],
  },
  structuredData: { article: true },
};
