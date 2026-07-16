import type { ProcessingMethodContent } from '@/types/content';

export const degumming: ProcessingMethodContent = {
  id: 'processing-method-degumming',
  slug: 'degumming',
  contentType: 'processing-method',
  title: 'Degumming',
  alternativeNames: ['Gum removal', 'Phospholipid removal'],
  category: 'Processing method',
  subcategory: 'Oil refining',
  processingClass: 'separation',
  processStage: 'refining',
  transformationBasis: 'combined',
  summary:
    'Degumming removes phospholipids from crude oil — a dissolved fraction that clarification cannot touch. It is the first refining step that addresses what is in the oil rather than what is merely floating in it, and is described here at concept level.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Crude vegetable oil carries phospholipids, known in the trade as gums, brought out of the seed along with the oil. They are not contamination in the ordinary sense: they are natural constituents of the seed, and in the seed they are doing a job. In the oil they are a problem, because they attract water, come out of solution when they encounter it, and settle as a sludge in tanks, in equipment, and eventually in the customer’s.',
    },
    {
      type: 'paragraph',
      text: 'The important thing about gums is that they are dissolved in the oil, not suspended in it. That single fact determines everything about how they are dealt with. Clarification, which separates on density and size, cannot see them at all. Removing them requires first making them insoluble — turning a dissolved fraction into a separable one — and only then separating. This entry describes that concept. It does not give the chemistry, the reagents, or the conditions by which it is done, which are matters of process engineering under regulation.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Separation — removal of a dissolved fraction, once made separable',
    },
    { label: 'Stage', value: 'Refining, after clarification' },
    {
      label: 'Inputs',
      value: 'Soybeans, rapeseed, sunflower seed — via their crude oils',
    },
    { label: 'Outputs', value: 'The same oils, with phospholipids removed' },
    {
      label: 'Target',
      value:
        'Phospholipids (gums) — natural seed constituents, dissolved in the crude oil',
    },
    {
      label: 'Governing principle',
      value:
        'Make the dissolved gums insoluble, then separate them on the density difference',
    },
    {
      label: 'Scope of this entry',
      value: 'Concept only — no reagents, chemistry, conditions, or procedure',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is to take the phospholipid fraction out of the oil before it causes trouble. Gums left in oil hydrate on contact with any moisture and drop out as a sludge — in storage tanks, in transport, and on heated surfaces, where they also foul and darken. They interfere with the refining steps that follow, and they shorten the practical life of the oil. Every subsequent stage of refining works better on an oil the gums have already left.',
        },
        {
          type: 'paragraph',
          text: 'The principle turns on solubility. Phospholipids have a dual character: part of the molecule associates with oil, part with water. That is what keeps them dissolved in oil, and it is also the handle by which they can be removed. If they are induced to associate with water instead, they leave the oil phase and form a separate, denser phase — and at that point they are no longer a dissolved fraction but a suspended one, which a centrifuge can separate on density exactly as it separates any other solids. Degumming is therefore two operations in sequence: make the gums separable, then separate them.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why clarification cannot do this',
          text: 'Clarification separates on density and size, and a dissolved constituent presents neither a density difference nor a size to separate on. Gums pass through settling, centrifuging, and filtration untouched, because from those processes’ point of view they are simply part of the oil. The step that changes their solubility is what makes them visible to a separator at all.',
        },
      ],
    },
    {
      id: 'not-all-gums-behave-alike',
      heading: 'Not all gums behave alike',
      body: [
        {
          type: 'paragraph',
          text: 'A complication worth stating, because it explains why degumming is not a single uniform process: the phospholipids in crude oil are not one substance. Some readily associate with water and leave the oil as soon as they are given the chance. Others do not, and remain in the oil after the straightforward approach has done all it can. Dealing with that second group requires a different approach, and that is where the process moves from physical conditioning into chemistry.',
        },
        {
          type: 'paragraph',
          text: 'How far a plant takes degumming depends on where the oil is going. An oil destined for full refining need only be degummed far enough that the next step can do its work. An oil intended for a use that is intolerant of residual phospholipids has to be taken further. That is a specification and configuration decision, and the routes available to a plant differ in reagents, in complexity, and in the streams they generate. None of that detail is given here.',
        },
        {
          type: 'paragraph',
          text: 'Soybean oil is the reference case for degumming, carrying a higher phospholipid load than most, but rapeseed and sunflower oils are degummed as part of full refining too. The oils differ in how much gum they carry and in how readily it comes out.',
        },
      ],
    },
    {
      id: 'the-gum-stream',
      heading: 'The gum stream',
      body: [
        {
          type: 'paragraph',
          text: 'The separated gums are not discarded by default. The phospholipid fraction from soybean oil is the industrial source of lecithin, a widely used food emulsifier, and where a plant is configured for it the gums are recovered and processed into that product rather than sent anywhere else. Where recovery is not practised, the gum stream is typically routed into the meal, carrying its energy value into feed.',
        },
        {
          type: 'paragraph',
          text: 'This platform does not currently hold a product entity for lecithin or for the gum stream, so degumming declares no separate output for it. The stream is real and it is valorised; it is simply not yet modelled as an entity, and inventing one to fill the gap would misrepresent the corpus rather than describe the process.',
        },
      ],
    },
    {
      id: 'quality-and-safety',
      heading: 'Quality effects, environment, and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Degumming improves the oil’s stability in storage and its behaviour on heating, and it conditions the oil for the refining steps that follow. It cannot repair damage already done: free fatty acids developed in poorly stored seed are a separate problem addressed by a separate step, and degumming does not touch them. As with every step in an oil refinery, the oil that leaves is only as good as the oil that arrived, minus what has been deliberately removed.',
        },
        {
          type: 'paragraph',
          text: 'Environmentally, the step consumes water and energy and generates an aqueous stream requiring treatment, alongside the gum stream itself. Where gums are recovered as lecithin, a constituent that would otherwise be a treatment burden becomes a product — a straightforward instance of a residue stream having a market.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Reagents, hot oil, and high-speed separators',
          text: 'Degumming routes may involve reagents that are hazardous to handle, oil handled warm, pressure and steam systems, and high-speed centrifugal separators. This entry names no reagent as guidance and gives no chemistry, concentrations, conditions, or procedure. Selection, design, and operation are matters for qualified process engineers under applicable regulation and the facility’s own procedures. Where degumming sits within an extraction plant, the plant’s flammable-solvent envelope and its process-safety requirements apply in full.',
        },
      ],
    },
  ],
  inputCommodities: [
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  coProductOutputs: [
    { type: 'commodity-product', slug: 'soybean-oil' },
    { type: 'commodity-product', slug: 'rapeseed-oil' },
    { type: 'commodity-product', slug: 'sunflower-oil' },
  ],
  processObjective:
    'Remove the phospholipid fraction dissolved in crude oil, which would otherwise hydrate and settle as sludge in storage and equipment, foul heated surfaces, and interfere with the refining steps that follow.',
  operatingPrinciple:
    'Phospholipids stay dissolved in oil because part of the molecule associates with the oil phase. Degumming induces them to associate with an aqueous phase instead, so that they leave solution and form a separate, denser phase; that phase is then separated from the oil on the density difference, typically centrifugally. Described at concept level only.',
  physicalOrBiochemicalBasis:
    'Combined: a change in the solubility and phase association of the phospholipid fraction, converting a dissolved constituent into a separable one, followed by a purely physical density separation. The triglyceride oil itself is not the target of any change.',
  qualityEffects: [
    'Improves the oil’s storage stability and its behaviour on heating',
    'Prevents gums hydrating and settling as sludge in tanks, transport, and equipment',
    'Conditions the oil for the refining steps that follow',
    'Does not address free fatty acids, colour bodies, or damage the oil arrived with',
  ],
  measurableParameters: [
    'Residual phosphorus content',
    'Phospholipid content',
    'Oil content of the separated gum phase',
    'Moisture and volatile matter',
    'Free fatty acid content',
  ],
  lossPoints: [
    'Oil retained in the separated gum phase',
    'Oil carried into the aqueous stream',
    'Residual gums remaining in the oil where separation is incomplete',
    'Spillage and residual stock at transfers',
  ],
  environmentalContext:
    'Consumes water and energy and generates an aqueous stream requiring treatment alongside the gum stream. Where the plant is configured to recover it, the soybean gum fraction is the industrial source of lecithin, so a constituent that would otherwise be a treatment burden becomes a food product; where it is not recovered, the stream is typically routed into the meal, carrying its energy value into feed.',
  safetyLimitations: [
    'Degumming routes may involve reagents that are hazardous to handle; this entry names no reagent as operating guidance and gives no chemistry, concentrations, conditions, or handling procedure.',
    'Oil is handled warm and the step involves pressure and steam systems and hot surfaces; these are governed by qualified engineering, the facility’s procedures, and applicable occupational-safety regulation.',
    'High-speed centrifugal separators have mechanical-integrity, guarding, and isolation requirements set by qualified engineering and facility procedure.',
    'Vessels and tanks present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'Where degumming sits within a solvent extraction plant it lies inside the flammable-solvent envelope, and the plant’s process-safety and hazardous-area requirements apply in full.',
    'This entry is an educational reference, not an operating instruction: it gives no reagents, conditions, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'Permitted processing aids and reagents for edible oil refining are jurisdiction-specific and are set by the applicable food authority.',
    'Compositional standards for refined oils, and the conditions under which lecithin may be recovered and sold as a food ingredient, differ by jurisdiction.',
  ],
  precededBy: [
    { type: 'processing-method', slug: 'oil-clarification' },
    { type: 'processing-method', slug: 'solvent-extraction' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'quality-attribute', slug: 'oil-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Vegetable oil refining and refined oil product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Vegetable oil composition and refining research',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Edible oil processing aids and refined oil composition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. How far degumming is taken, and by which route, depends on the oil, the plant’s configuration, and the specification the oil is sold against. Permitted processing aids are jurisdictional.',
  limitations: [
    'A concept-level reference description of what degumming achieves and why. It is not an operating instruction, a design basis, or a chemistry reference.',
    'No reagents, chemistry, concentrations, temperatures, water additions, or process conditions are given.',
    'No phosphorus, phospholipid, or oil-loss figures are given — they are oil-, plant-, and specification-specific.',
    'The model records a single entity per seed oil, so degumming declares the same oil as its output that earlier steps do; it purifies the entity rather than creating a new one. No product entity exists for lecithin or the gum stream, so none is declared as an output.',
    'Permitted processing aids and refined-oil standards differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Degumming: Removing Phospholipids from Crude Oil',
    description:
      'Why crude vegetable oil is degummed: how dissolved phospholipids are made separable and centrifuged out, why clarification cannot do it, and where the gums go.',
    keywords: [
      'degumming',
      'phospholipids',
      'gums',
      'oil refining',
      'lecithin',
    ],
  },
  structuredData: { article: true },
};
