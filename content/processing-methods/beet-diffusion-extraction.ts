import type { ProcessingMethodContent } from '@/types/content';

export const beetDiffusionExtraction: ProcessingMethodContent = {
  id: 'processing-method-beet-diffusion-extraction',
  slug: 'beet-diffusion-extraction',
  contentType: 'processing-method',
  title: 'Beet Diffusion Extraction',
  alternativeNames: [
    'Beet diffusion',
    'Countercurrent diffusion',
    'Cossette extraction',
  ],
  category: 'Processing method',
  subcategory: 'Sugar processing',
  processingClass: 'extraction',
  processStage: 'primary-transformation',
  transformationBasis: 'physical',
  summary:
    'Sugar beet is not squeezed — it is washed out. Sliced beet meets water travelling the other way, and sugar diffuses out of the tissue into the water. What remains is beet pulp, a co-product the feed industry buys in its own right.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sugar beet stores sucrose dissolved in the sap held inside its cells, and the way to get it out is not the way cane is handled. Pressing a beet expresses only a fraction of the sugar, because the sucrose is distributed through the tissue rather than sitting where force can reach it. Diffusion takes a different route entirely: slice the beet into thin strips, put them in contact with water, and let the sugar move out of the tissue and into the water on its own.',
    },
    {
      type: 'paragraph',
      text: 'What makes it work industrially is arranging the contact so that the sugar keeps moving in the right direction. Beet slices and water travel through the vessel in opposite directions, so that beet entering — richest in sugar — meets water already carrying sugar, while beet on its way out, nearly exhausted, meets the freshest water. At every point along the path there is still a concentration difference pushing sugar out of the tissue. That arrangement is what allows extraction to approach completeness rather than merely reaching equilibrium and stopping.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Extraction — transfer of a dissolved solute out of plant tissue',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Sugar beet (washed and sliced into cossettes beforehand)',
    },
    {
      label: 'Co-product',
      value: 'Beet pulp — a valued feed ingredient, not a residue',
    },
    {
      label: 'Governing principle',
      value:
        'Sugar diffuses down a concentration gradient from tissue into water',
    },
    {
      label: 'Why countercurrent',
      value:
        'Opposing flows keep a driving gradient present along the whole path',
    },
    {
      label: 'What it does not make',
      value:
        'No sugar crystals — diffusion yields juice, which must be purified and boiled',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is to move as much of the beet’s sucrose as possible out of the root and into an aqueous solution the factory can work with, while leaving the rest of the beet behind. Everything downstream — purification, evaporation, crystallisation — operates on that solution, so sugar not extracted here is sugar the factory never has.',
        },
        {
          type: 'paragraph',
          text: 'The principle is diffusion, in the plain physical sense: a dissolved substance moves from where it is concentrated to where it is not, without anything having to push it. Sucrose inside beet tissue, placed in contact with water containing less sucrose, moves into the water. The process supplies no force; it supplies contact, time, and a gradient. This is why the beet is sliced into thin strips — cossettes — first: the sugar has to travel out of the tissue, and thin slices shorten the journey and multiply the surface across which it can happen.',
        },
        {
          type: 'paragraph',
          text: 'Simple soaking would fail, because it reaches equilibrium: once the water holds as much sugar as the tissue, the movement stops with much of the sugar still inside. The countercurrent arrangement defeats that. Because the two streams move in opposition, every part of the path maintains a concentration difference — exhausted beet always meets fresher water, and the juice leaving is at its richest just as it meets the freshest beet. The gradient is never allowed to vanish, so the transfer never stops until the beet leaves the vessel.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The tissue has to be prepared to release its sugar',
          text: 'Sucrose in an intact living cell is held behind a membrane that will not simply let it out. The beet must be conditioned so that those membranes cease to be a barrier, and only then does the sugar diffuse freely. Get that wrong and the sugar stays inside regardless of how long the contact lasts; overdo it and the tissue softens, cossettes break down, and the pulp becomes difficult to press. This is a balance the factory manages, and no conditions for it are given here.',
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
              term: 'Raw juice',
              description:
                'The sugar-bearing solution leaving the diffuser, carrying dissolved non-sugars drawn out of the beet alongside the sucrose. An intermediate stream, going forward to purification: it is not a product entity in its own right.',
            },
            {
              term: 'Beet pulp',
              description:
                'The extracted cossettes, leaving wet and largely stripped of sugar. A co-product, pressed and usually dried, sold into animal feed for its digestible fibre.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Beet pulp is a genuine co-product and the feed industry treats it as one. Its digestible fibre is valued particularly in ruminant rations, and it is traded in pressed and dried forms, commonly pelleted for handling. Beet factories do not look for somewhere to put their pulp; they sell it, and in the sugar beet chain it is a meaningful part of the crop’s value rather than an afterthought. Calling it waste would misdescribe both its economics and where it physically goes.',
        },
        {
          type: 'paragraph',
          text: 'The pulp leaves the diffuser saturated with water, and that water has to be removed before it can be handled or stored — first by pressing, then usually by drying. The pressed liquid still carries sugar and is returned into the process rather than discarded.',
        },
      ],
    },
    {
      id: 'what-diffusion-does-not-do',
      heading: 'What diffusion does not do',
      body: [
        {
          type: 'paragraph',
          text: 'It is worth being explicit about where this method stops, because the beet chain is often compressed in description. Diffusion produces juice. It does not produce sugar. The raw juice leaving the diffuser is an impure solution: countercurrent contact extracts sucrose efficiently, but it is not selective, and it draws out other soluble material from the beet along with the sugar. That juice has to be purified, then concentrated by evaporation, then crystallised, and the crystals separated — several distinct operations on distinct principles — before any beet sugar exists.',
        },
        {
          type: 'paragraph',
          text: 'The same applies to beet molasses. Molasses is defined at the far end of the crystallisation sequence: it is the mother liquor from which further sugar recovery is no longer worthwhile. Nothing at the diffuser produces it, and nothing at the diffuser determines it. This entry therefore declares only beet pulp as its output. Beet sugar and beet molasses are real products of the beet chain, but they are formed by the purification and boiling steps that follow, and this corpus does not yet hold a method entry for those steps — a gap worth recording rather than papering over by attributing them to a method that does not make them.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Diffusion inherits the crop it is given. Sugar content arrives with the beet and is set in the field and by how the crop was stored; beet held too long before processing loses sugar to respiration and to spoilage, and diffusion cannot recover any of it. What diffusion decides is how much of the sugar that arrives makes it into the juice — and, because the process is not selective, how much unwanted soluble material comes along with it, since everything extracted alongside the sucrose is something purification must then remove.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic tension is between extraction and everything downstream. Using more water extracts more sugar but produces a more dilute juice, and every litre of that dilution is water the evaporators must later boil off at the factory’s largest energy cost. Extracting harder also pulls out more non-sugars and softens the pulp, making it harder to press and more expensive to dry. Diffusion is therefore not optimised for its own performance; it is optimised for the factory as a whole.',
        },
        {
          type: 'list',
          items: [
            'Sucrose remaining in the pulp when it leaves the diffuser',
            'Sucrose lost to microbial activity in the warm, sugar-rich diffuser environment',
            'Sugar lost in beet storage before processing ever begins',
            'Non-sugars extracted alongside the sucrose, adding to the purification load',
            'Dilution water raising the downstream evaporation demand',
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
          text: 'Beet processing is water-intensive — beet arrives carrying soil and must be washed, and diffusion itself works with water — and beet factories accordingly operate extensive water circuits that recirculate rather than discharge, with soil recovered from washing returned to land. Pulp drying is a significant thermal demand, which is why pressing the pulp mechanically as far as possible before drying it matters: water removed by pressing is water that need not be evaporated. The pulp-to-feed route is a real circularity in this chain — the fibre fraction of the crop leaves the factory as a feed ingredient rather than as an effluent load — and that is a factual description of where the material goes, not a claim that beet sugar is environmentally preferable to any alternative.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Hot water, enclosed vessels, and rotating machinery',
          text: 'Diffusers are large enclosed vessels handling hot water and beet, with rotating and conveying machinery, and they present serious confined-space hazards — including oxygen-deficient and biologically active atmospheres in vessels and in pulp and juice tanks. Slicing equipment carries severe cutting hazards, and pulp drying introduces a high-temperature combustion source with fire and dust risk. Entry, guarding, and isolation are matters for qualified engineering, the facility’s procedures, and applicable regulation. This entry describes what diffusion does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'sugar-beet' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'beet-pulp' }],
  processObjective:
    'Transfer the sucrose held in sugar beet tissue into an aqueous solution the factory can process, leaving the beet’s fibre behind as pulp — recovering as much sugar as possible without diluting the juice so far that the evaporators cannot afford to concentrate it again.',
  operatingPrinciple:
    'Beet is sliced into thin strips to shorten the distance sugar must travel and to multiply the contact surface, and the tissue is conditioned so that cell membranes no longer retain the sucrose. Slices and water then move through the vessel in opposite directions, so that a concentration difference persists along the whole path — exhausted beet always meeting fresher water — and sugar continues to diffuse out of the tissue rather than stopping at equilibrium.',
  physicalOrBiochemicalBasis:
    'Physical: diffusion of a dissolved solute down a concentration gradient from plant tissue into water, sustained along the contact path by countercurrent flow. The transfer is not selective, so other soluble constituents of the beet are extracted alongside the sucrose.',
  qualityEffects: [
    'Determines how much of the beet’s sugar reaches the juice rather than leaving in the pulp',
    'Extracts non-sugars alongside the sucrose, setting the load on the purification steps that follow',
    'Cannot recover sugar lost in the field or in storage before the beet arrived',
    'Over-extraction softens the cossettes, making the pulp harder to press and more costly to dry',
    'Dilution improves extraction but raises the evaporation demand downstream',
  ],
  measurableParameters: [
    'Sugar in pulp',
    'Draft',
    'Juice purity',
    'Brix of raw juice',
    'Cossette quality',
    'Pulp dry matter after pressing',
  ],
  lossPoints: [
    'Sucrose remaining in the pulp',
    'Sucrose lost to microbial activity in the diffuser',
    'Sugar lost in beet storage before processing',
    'Non-sugars extracted alongside the sucrose, adding purification load',
  ],
  environmentalContext:
    'Water-intensive: beet arrives carrying soil and must be washed, and diffusion works with water, so factories operate extensive recirculating water circuits with soil recovered from washing returned to land. Pulp drying is a significant thermal demand, which is why the pulp is pressed mechanically as far as practical first — water removed by pressing need not be evaporated. The pulp leaves as a feed ingredient rather than as an effluent load, a genuine instance of the crop’s fibre fraction being valorised; no comparison of overall environmental performance against other sugar sources is made here.',
  safetyLimitations: [
    'Diffusers are large enclosed vessels handling hot water and beet; they, and pulp and juice tanks, present serious confined-space hazards including oxygen-deficient and biologically active atmospheres. Entry is governed by facility procedure and applicable regulation, not by any description here.',
    'Slicing equipment carries severe cutting hazards, and diffusers and conveyors contain rotating machinery and entanglement points; guarding and isolation are governed by qualified engineering and the facility’s procedures.',
    'Pulp drying introduces a high-temperature combustion source with fire, dust, and emissions risk, requiring engineered controls designed and commissioned by qualified engineers.',
    'Hot water, hot juice, steam, and pressure systems present burn and pressure hazards throughout the factory.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, draft rates, residence times, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Feed-ingredient definitions and labelling for beet pulp are jurisdiction-specific and are set by the applicable feed authority.',
    'Water abstraction, effluent, and air-emissions requirements for beet factories are jurisdiction-specific and are set by the applicable environmental regulator.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'harvest-maturity-assessment' },
  ],
  connections: [
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sugar beet processing and sugar product definitions',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'EU sugar beet sector and beet processing context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Sugar beet sector structure and co-product markets',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Beet pulp as a digestible-fibre feed ingredient',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate beet-producing regions, principally Europe, North America, and parts of Asia. Diffusion is the universal extraction route for beet; vessel designs differ but the countercurrent principle does not.',
  limitations: [
    'A reference description of the process, not a factory specification or operating instruction.',
    'No temperatures, draft rates, residence times, sugar-in-pulp figures, purities, or recoveries are given — they are factory-, crop-, and season-specific.',
    'Declares only beet pulp as an output. Diffusion yields juice, not crystals: beet sugar and beet molasses are formed by the purification, evaporation, and crystallisation steps that follow, for which this corpus holds no method entry, and attributing them here would misdescribe the process.',
    'The description of pulp-to-feed is an account of where the material goes, not a claim of environmental preferability over any other sugar source.',
    'Feed-ingredient definitions and environmental requirements differ by jurisdiction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Beet Diffusion Extraction: Sugar Out of Sliced Beet',
    description:
      'How countercurrent diffusion washes sucrose out of sliced sugar beet instead of pressing it, why the gradient never stops, and where beet pulp goes afterwards.',
    keywords: [
      'beet diffusion',
      'sugar beet processing',
      'countercurrent extraction',
      'beet pulp',
      'cossettes',
    ],
  },
  structuredData: { article: true },
};
