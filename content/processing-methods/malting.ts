import type { ProcessingMethodContent } from '@/types/content';

export const malting: ProcessingMethodContent = {
  id: 'processing-method-malting',
  slug: 'malting',
  contentType: 'processing-method',
  title: 'Malting',
  alternativeNames: ['Barley malting', 'Steeping, germination, and kilning'],
  category: 'Processing method',
  subcategory: 'Cereal malting',
  processingClass: 'fermentation',
  processStage: 'primary-transformation',
  transformationBasis: 'biochemical',
  summary:
    'Malting persuades barley to begin germinating, then stops it. The grain is made to build the enzymes it would use to consume its own starch — and is dried before it can spend them.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every processing method in the cereal chain acts on grain from the outside: rolls break it, stones grind it, abrasives wear it down. Malting does not. It works by convincing a living seed that spring has arrived, letting it do what it would do in the ground, and then interrupting it at a precisely chosen moment. The grain is not shaped by the maltster — it is recruited.',
    },
    {
      type: 'paragraph',
      text: 'The reason is that a seed can do something no machine can. Barley starch is locked inside cell walls and bound in a protein matrix, and it is not accessible to a brewer or a distiller in that state. But a germinating seed needs to reach that starch too, to feed its own growing embryo, and so it manufactures the enzymes to break the structure down and convert the starch to sugars. Malting exists to make the seed build that enzyme system — and then to take it away before the seedling uses it. What the maltster sells is a grain that has done its own preparation and been stopped before it could collect on the work.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Biochemical transformation by controlled germination',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Barley grain' },
    { label: 'Primary output', value: 'Malted barley' },
    {
      label: 'The three phases',
      value:
        'Steeping wakes the grain, germination builds the enzymes, kilning arrests it',
    },
    {
      label: 'Governing principle',
      value:
        'The seed makes the enzymes for its own purposes; malting stops it before it spends them',
    },
    {
      label: 'Non-negotiable input requirement',
      value:
        'The barley must be alive — grain that will not germinate cannot be malted at all',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Malting exists to make barley’s starch accessible and to leave behind the enzyme system capable of converting it. Both halves matter. A malt that has been modified but has had its enzymes destroyed can be used for flavour and colour but cannot convert anything; a malt with enzymes but unmodified structure cannot release the starch for them to act on. The maltster is aiming at a balance between the two, and the balance is set by what the malt is for.',
        },
        {
          type: 'paragraph',
          text: 'The process runs in three phases, and each does one thing. Steeping raises the grain’s moisture by alternating immersion in water with periods of rest in air — the rests matter, because a submerged seed cannot breathe, and a drowned seed is a dead one. The moisture signals the embryo to begin. Germination follows: the grain is held in a bed with air drawn through it while the embryo grows, and this is where the work happens. The enzymes are synthesised and released into the endosperm, and they begin dismantling the cell walls and protein matrix around the starch granules — the change the trade calls modification. Kilning then ends it. Warm air dries the grain down, and below a certain moisture the biology simply stops: the embryo can no longer grow, the enzymes can no longer act, and everything built so far is preserved in place.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the timing is the whole craft',
          text: 'Modification and loss run on the same clock. Let germination continue and the grain is better modified — but the growing seedling is consuming the very starch the malt is being made to provide, and its enzymes keep working. Stop early and the starch is intact but locked in an under-modified endosperm. There is no setting that avoids the trade, only a judgement about where to stop, made against what the malt is for.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'The product is malted barley: a grain that looks much like the barley that went in and is chemically a different material. Kilning also does more than stop the process, because heat acting on the sugars and amino acids that germination liberated develops colour and flavour compounds that were not there before. How the malt is kilned therefore decides what kind of malt it is — the difference between a pale malt kept enzyme-rich and a dark, strongly flavoured one that has traded its enzymes for character is largely a kilning difference applied to the same germinated grain.',
        },
        {
          type: 'paragraph',
          text: 'Two minor streams leave with it. The rootlets the seedling grew are brittle after kilning and are broken off and screened out; they are a valued protein-rich feed material rather than a residue to place. Dust and grain fragments arise as in any grain-handling operation. Neither is modelled here as a distinct product entity.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Malted barley',
              description:
                'The primary product: modified, enzyme-bearing grain, dried and stabilised. Specified by extract, enzyme activity, modification, colour, and protein.',
            },
            {
              term: 'Malt culms (rootlets)',
              description:
                'The seedling rootlets, separated after kilning. A protein-rich feed material with an established market, not a waste stream.',
            },
            {
              term: 'Modification',
              description:
                'The trade’s term for how far the enzymes have broken down the cell walls and protein matrix around the starch. The central quality judgement of the process.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Malting is unique among these methods in depending on the input being alive. Every other process here works as well on dead grain as on live; malting does not work at all. Barley that has been dried too hard, stored too long, or damaged in handling may be perfectly sound as feed and worthless as malting barley, because the embryo will not germinate. This is why malting barley is bought on germination capacity as well as on the usual specifications, and why it commands a premium that reflects a real risk of not making the grade.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic loss is unlike anything mechanical. Grain that respires is consuming itself: a germinating seed burns starch for energy and grows a rootlet out of the same reserves, and both are material that will not appear in the malt. This is a real and unavoidable loss inherent in the biology, not an inefficiency to engineer away — the process cannot get the enzymes without paying for them in starch.',
        },
        {
          type: 'list',
          items: [
            'Starch consumed by the respiring, growing seed — inherent to the process, not a fault',
            'Material diverted into rootlets, recovered as feed rather than as malt',
            'Grain drowned during steeping if it cannot breathe, which kills the embryo outright',
            'Uneven germination across the bed, giving a malt of mixed modification',
            'Enzyme activity diminished by kilning, which is a trade against colour and flavour rather than a defect',
            'Whole lots failing on germination capacity before the process even begins',
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
          text: 'Malting is both water- and energy-demanding: steeping uses and discharges water carrying organic load, and kilning is a substantial thermal demand since it dries a large mass of wet grain. Its residual streams are utilised — rootlets to feed, and steepwater organic load is a wastewater treatment question rather than a material one. The pattern is a resource-intensive process with little unused material, and its footprint is a matter of plant and energy source rather than of the method.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Germinating grain consumes oxygen and gives off carbon dioxide',
          text: 'A germination vessel is full of living, respiring grain, and respiration displaces oxygen with carbon dioxide. Steeping and germination vessels are confined spaces in which an oxygen-deficient, carbon-dioxide-enriched atmosphere can develop, and this is a recognised fatal hazard — one that gives no warning, since carbon dioxide is odourless and the danger is not the gas but the missing oxygen. Entry into such vessels is governed by confined-space regulation, atmospheric testing, and the facility’s permit systems, and is a matter for trained personnel under qualified supervision. This entry names the hazard; it gives no procedure and is not a substitute for one.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'barley-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'malted-barley' }],
  processObjective:
    'Induce barley to germinate under control so that it synthesises the enzymes and undergoes the structural modification making its starch accessible, then arrest germination by drying before the growing seedling consumes the reserves the malt exists to supply.',
  operatingPrinciple:
    'Steeping raises grain moisture by alternating immersion with rest periods in air, signalling the embryo to begin growth while allowing the grain to respire. During germination the grain is held in an aerated bed while the embryo synthesises enzymes that break down the cell walls and protein matrix around the starch granules. Kilning then dries the grain until the biology can no longer proceed, arresting germination and preserving the enzymes and modification achieved, while heat develops colour and flavour compounds from the sugars and amino acids germination released.',
  physicalOrBiochemicalBasis:
    'Biochemical: the seed’s own enzyme synthesis and the enzymatic breakdown of endosperm cell walls, protein matrix, and starch, driven by the germination the process induces and terminated by drying. Thermal reactions during kilning additionally develop colour and flavour compounds.',
  qualityEffects: [
    'Makes barley starch accessible by enzymatic modification of the endosperm structure',
    'Leaves an enzyme system capable of converting starch to fermentable sugars',
    'Kilning sets colour and flavour, and trades enzyme activity against them',
    'Depends entirely on the barley being viable; grain that will not germinate cannot be malted',
    'Uneven germination gives mixed modification that later processing cannot correct',
  ],
  measurableParameters: [
    'Germination capacity',
    'Germination energy',
    'Degree of modification',
    'Extract',
    'Diastatic power',
    'Malt colour',
    'Protein content',
    'Moisture after kilning',
  ],
  lossPoints: [
    'Starch consumed by the respiring and growing seed',
    'Material diverted into rootlets and separated after kilning',
    'Embryo killed by inadequate aeration during steeping',
    'Uneven germination across the bed producing mixed modification',
    'Lots rejected before processing for inadequate germination capacity',
  ],
  environmentalContext:
    'Water-demanding at steeping, which discharges water carrying organic load, and thermally demanding at kilning, which dries a large mass of wet grain. Residual material is utilised — rootlets are a protein-rich feed material — so the principal environmental questions are water, wastewater load, and the energy source of the kiln rather than unused material.',
  safetyLimitations: [
    'Germinating grain respires, consuming oxygen and giving off carbon dioxide; steeping and germination vessels are confined spaces in which an oxygen-deficient and carbon-dioxide-enriched atmosphere is a recognised fatal hazard, made more dangerous because carbon dioxide gives no warning of its presence.',
    'Entry to steeping tanks, germination vessels, and grain-holding spaces is governed by confined-space regulation, atmospheric testing, permit systems, and rescue provision, and is a matter for trained personnel under qualified supervision — no part of this entry is an entry procedure or a substitute for one.',
    'Grain in a vessel or bed presents engulfment and entrapment hazards independent of the atmosphere, governed by applicable regulation and the facility’s procedures.',
    'Suspended grain and malt dust is a recognised explosion hazard; engineered dust control, ignition management, and explosion protection are required and are matters for qualified engineers.',
    'Kilns present hot-surface, combustion, and thermal hazards, and their design and operation are matters for qualified engineering and applicable regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no steep schedules, moisture targets, germination times, or kilning temperatures.',
  ],
  jurisdictionalLimitations: [
    'Malt specifications and permitted descriptions are set by contract and by the applicable food and beverage authority, and differ by jurisdiction.',
    'Where malt is destined for brewing or distilling, further compositional and labelling rules may apply under the relevant beverage law.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'quality-attribute', slug: 'germination-capacity' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'starch-content' },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Malting and malt product definitions' },
    {
      sourceId: 'ahdb',
      citedFor: 'Malting barley quality requirements and processing context',
    },
    { sourceId: 'usda-ars', citedFor: 'Barley malting quality research' },
    {
      sourceId: 'britannica',
      citedFor: 'Malting phases and the history of the process',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Malting barley varieties, quality requirements, and malt specifications are set regionally and by end use.',
  limitations: [
    'A reference description of the process, not a malting specification or operating instruction.',
    'No steep schedules, moisture targets, germination times, kilning temperatures, extract values, or loss figures are given — they are maltster-, variety-, and contract-specific.',
    'Modelled under the fermentation processing class as the closest available biochemical class in this vocabulary; the transformation is controlled germination and the seed’s own enzyme action, not microbial fermentation.',
    'Barley malting is described here. Other grains are malted by the same principle but with different requirements, and are not covered.',
    'Malt culms are named as a real feed stream but are not modelled as a distinct product entity in this reference.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Malting: Controlled Germination of Barley',
    description:
      'How malting steeps, germinates, and kilns barley so the seed builds its own starch-converting enzymes, and why it is stopped before the seedling spends them.',
    keywords: [
      'malting',
      'malted barley',
      'steeping',
      'germination',
      'kilning',
    ],
  },
  structuredData: { article: true },
};
