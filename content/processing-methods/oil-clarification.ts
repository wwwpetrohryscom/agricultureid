import type { ProcessingMethodContent } from '@/types/content';

export const oilClarification: ProcessingMethodContent = {
  id: 'processing-method-oil-clarification',
  slug: 'oil-clarification',
  contentType: 'processing-method',
  title: 'Oil Clarification',
  alternativeNames: [
    'Crude oil screening',
    'Oil settling and filtration',
    'Foots removal',
  ],
  category: 'Processing method',
  subcategory: 'Oil refining',
  processingClass: 'separation',
  processStage: 'refining',
  transformationBasis: 'physical',
  summary:
    'Clarification removes the suspended solids that crude oil carries out of a press or extractor. It does not change what the oil is — it removes what should never have been in it, so that everything downstream works on oil rather than on a suspension.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oil leaving a press is not clean. It carries fine particles of the seed it came from — fragments that passed the press openings alongside the liquid, together with meal fines and other insoluble material. Left in, these solids settle in tanks, foul equipment, and carry into every subsequent step. Clarification takes them out, by giving them time to settle out of the oil under gravity, by spinning them out on a density difference, or by holding them back on a filter.',
    },
    {
      type: 'paragraph',
      text: 'Nothing about the oil itself changes here, and that is worth being precise about. The oil that enters is the same oil that leaves; clarification is a purification step, not a transformation into a new material. It earns its place in the chain not by making anything but by being a precondition: refining steps that follow act on dissolved constituents, and they cannot work properly on an oil that is still a suspension of solids.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Separation — removal of suspended solids from a liquid',
    },
    { label: 'Stage', value: 'Refining, immediately after crushing' },
    {
      label: 'Inputs',
      value:
        'Soybeans, sunflower seed, rapeseed, groundnuts — via their crude oils',
    },
    { label: 'Outputs', value: 'The same oils, with suspended solids removed' },
    {
      label: 'Governing principle',
      value:
        'Solids and oil differ in density and in size — settling, centrifuging, or filtering exploits that',
    },
    {
      label: 'What it does not do',
      value:
        'Nothing dissolved in the oil is touched — gums and free fatty acids pass straight through',
    },
    {
      label: 'Why it comes first',
      value:
        'Later refining steps act on dissolved constituents and need an oil, not a suspension',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is narrow and mechanical: get the insoluble solids out. Crude oil from a screw press carries seed and meal fines; oil recovered from an extractor carries its own fines. These particles are a problem for three reasons. They settle wherever the oil is held, forming deposits that have to be removed. They foul heat-transfer surfaces and pumps. And they carry oil with them wherever they end up, so a stream of solids leaving with oil attached is a stream of product leaving in the wrong place.',
        },
        {
          type: 'paragraph',
          text: 'The principle is a difference in physical properties, exploited one of three ways. Solids are denser than oil, so given quiescent time they settle out under gravity; given a centrifugal field instead, they separate far faster on the same density difference. Alternatively, solids are larger than the oil molecules around them, so a filter medium can retain them while oil passes. Which route a plant uses is a matter of scale, solids loading, and what happens to be installed — the underlying separation is the same in each case.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The oil entity does not change here',
          text: 'This model records one entity per seed oil, because clarified and unclarified crude oil are the same material differing in cleanliness, not different products with different markets. Clarification therefore declares the same oil as its output that pressing declared as its own. It purifies the entity; it does not mint a new one.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What clarification does not do',
      body: [
        {
          type: 'paragraph',
          text: 'It is easy to overstate what this step achieves, so it is worth stating the boundary plainly. Clarification removes what is suspended in the oil. It does nothing whatever to what is dissolved in it. Phospholipids, free fatty acids, colour bodies, and the oil’s minor components are in solution, and they pass through a settling tank, a centrifuge, and a filter alike, entirely unaffected.',
        },
        {
          type: 'paragraph',
          text: 'This is the reason clarification is not the whole of refining but the first step of it. Degumming, and the steps that follow it, exist precisely to address the dissolved fraction, and each works on a different principle because a different kind of impurity is in question. An oil that has only been clarified is a clean crude oil — clean in the sense of free of grit, not in the sense of ready for the table.',
        },
        {
          type: 'paragraph',
          text: 'The recovered solids are oil-bearing and are not discarded as a matter of course. Where the plant is configured for it, they are returned into the process to recover the oil they carry, or directed into the meal stream. A stream that goes back into the process is not a waste stream.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'The quality effect of clarification is largely protective. Solids left in oil are not inert: fine seed material carries enzymes and moisture, and oil held in contact with them can degrade over time in ways that a later refining step then has to correct. Removing solids early removes that ongoing risk. What clarification cannot do is reverse degradation that has already happened — an oil that arrives with elevated free fatty acids leaves with them.',
        },
        {
          type: 'list',
          items: [
            'Oil retained with the separated solids — recovered where the plant is configured to return them, lost where it is not',
            'Oil held up in filter media and in equipment at changeover',
            'Incomplete solids removal, carrying fines forward to foul downstream equipment',
            'Quality degradation where crude oil is held in prolonged contact with fines before clarification',
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
          text: 'Clarification is a modest consumer relative to the steps around it: its demands are electrical energy for pumping and centrifuging, and filter media as a consumable. Its solids stream is oil-bearing and is generally routed back into the process or into the meal rather than discarded, so the step tends to add little to a plant’s residue burden.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rotating equipment, hot oil, and enclosed vessels',
          text: 'Centrifuges are high-speed rotating machines with their own mechanical-integrity requirements; oil is frequently handled warm, so hot surfaces and hot-liquid contact are hazards; and settling tanks and vessels present confined-space hazards. Where clarification sits inside an extraction plant, it lies within the flammable-solvent envelope and everything that implies. Guarding, isolation, and entry are matters for qualified engineering and the facility’s procedures. This entry describes what clarification does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'groundnuts' },
  ],
  coProductOutputs: [
    { type: 'commodity-product', slug: 'soybean-oil' },
    { type: 'commodity-product', slug: 'sunflower-oil' },
    { type: 'commodity-product', slug: 'rapeseed-oil' },
    { type: 'commodity-product', slug: 'groundnut-oil' },
  ],
  processObjective:
    'Remove the suspended seed and meal solids that crude oil carries out of a press or extractor, so that the oil can be stored, handled, and refined without those solids settling, fouling equipment, or carrying oil away with them.',
  operatingPrinciple:
    'Suspended solids are denser and far larger than the surrounding oil. Clarification exploits one or both differences: quiescent settling or a centrifugal field separates solids from oil on the density difference, while filtration retains them on a medium that oil passes through. Dissolved constituents are unaffected.',
  physicalOrBiochemicalBasis:
    'Purely physical: separation of a dispersed solid phase from a continuous liquid phase by density difference under gravitational or centrifugal force, or by size exclusion on a filter medium. No chemical change is intended and none of the dissolved fraction is altered.',
  qualityEffects: [
    'Removes solids that would otherwise settle, foul equipment, and carry oil into the wrong stream',
    'Limits the ongoing degradation that comes from holding oil in contact with fine seed material',
    'Leaves dissolved constituents — gums, free fatty acids, colour bodies — entirely untouched',
    'Cannot reverse quality degradation that occurred before the oil reached it',
  ],
  measurableParameters: [
    'Insoluble impurities content',
    'Oil content of the separated solids',
    'Filtration rate',
    'Free fatty acid content of the crude oil',
    'Moisture and volatile matter',
  ],
  lossPoints: [
    'Oil retained with the separated solids',
    'Oil held up in filter media and equipment at changeover',
    'Fines carried forward through incomplete separation',
    'Spillage and residual stock at transfers',
  ],
  environmentalContext:
    'A modest consumer of electrical energy for pumping and centrifuging, with filter media as a consumable. The separated solids are oil-bearing and are typically returned into the process or routed into the meal stream rather than discarded, so the step adds little to a plant’s residue burden.',
  safetyLimitations: [
    'Centrifuges are high-speed rotating machines whose mechanical integrity, guarding, and isolation are governed by qualified engineering, the facility’s procedures, and applicable occupational-safety regulation.',
    'Oil is commonly handled warm: hot surfaces and hot-liquid contact are hazards, as are pressure systems on filtration equipment.',
    'Settling tanks and vessels present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'Where clarification sits within a solvent extraction plant it lies inside the flammable-solvent envelope, and the plant’s process-safety and hazardous-area requirements apply in full.',
    'This entry is an educational reference, not an operating instruction: it gives no equipment settings, temperatures, pressures, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Compositional standards and limits for insoluble impurities in edible oils are jurisdiction-specific and are set by the applicable food authority.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'mechanical-pressing' }],
  followedBy: [{ type: 'processing-method', slug: 'degumming' }],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Vegetable oil processing and crude oil quality parameters',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Oilseed and vegetable oil processing research',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Edible oil composition and processing considerations',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Whether a plant settles, centrifuges, or filters depends on scale, solids loading, and installed equipment; the separation principle is the same everywhere.',
  limitations: [
    'A reference description of the process, not a plant specification or operating instruction.',
    'No temperatures, pressures, filtration rates, impurity limits, or equipment settings are given — they are plant-, oil-, and contract-specific.',
    'The model records a single entity per seed oil, so clarification declares the same oil as its output that crushing does; the step purifies the entity rather than creating a new one, and there is no separate crude-oil entity to distinguish.',
    'Limits for insoluble impurities in edible oils differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Oil Clarification: Removing Solids from Crude Oil',
    description:
      'How settling, centrifuging, and filtration take suspended fines out of crude vegetable oil, why it precedes refining, and what it deliberately leaves alone.',
    keywords: [
      'oil clarification',
      'crude oil filtration',
      'vegetable oil processing',
      'insoluble impurities',
      'oil refining',
    ],
  },
  structuredData: { article: true },
};
