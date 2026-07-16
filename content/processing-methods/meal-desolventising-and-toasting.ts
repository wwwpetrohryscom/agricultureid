import type { ProcessingMethodContent } from '@/types/content';

export const mealDesolventisingAndToasting: ProcessingMethodContent = {
  id: 'processing-method-meal-desolventising-and-toasting',
  slug: 'meal-desolventising-and-toasting',
  contentType: 'processing-method',
  title: 'Meal Desolventising and Toasting',
  alternativeNames: ['Desolventising–toasting', 'DT', 'Meal finishing'],
  category: 'Processing method',
  subcategory: 'Oilseed crushing',
  processingClass: 'thermal',
  processStage: 'refining',
  transformationBasis: 'thermal',
  summary:
    'Extracted solids are not meal yet. Desolventising removes the residual solvent that would otherwise make them unusable; toasting adjusts protein quality so that the meal feeds well. Two jobs, one operation, and neither is optional.',
  introduction: [
    {
      type: 'paragraph',
      text: 'What leaves a solvent extractor is not soybean meal. It is a wet, depleted solid holding the solvent it was just washed with — a material that cannot be sold, cannot be stored, and cannot be fed to anything. Turning it into meal takes two distinct things, and the operation that does them is named after both: desolventising removes the solvent, and toasting adjusts the protein.',
    },
    {
      type: 'paragraph',
      text: 'The two jobs are worth separating conceptually, because they are answers to unrelated problems. The solvent must go for reasons of safety, regulation, economics, and product acceptability — it is a foreign substance that has no business in a feed ingredient, and it is expensive to lose. The protein adjustment is about something else entirely: raw soybeans contain naturally occurring factors that interfere with digestion, and heat is what deals with them. This entry describes both at concept level and gives no conditions for either.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Thermal — solvent removal and heat-driven protein adjustment',
    },
    { label: 'Stage', value: 'Refining, on the solids stream from extraction' },
    { label: 'Input', value: 'Soybeans (via the extracted solids stream)' },
    {
      label: 'Co-product',
      value: 'Soybean meal — a principal world protein feed ingredient',
    },
    {
      label: 'Two jobs',
      value:
        'Remove residual solvent; adjust protein quality so the meal feeds well',
    },
    {
      label: 'Governing tension',
      value:
        'Too little heat leaves protein poorly available; too much damages it',
    },
    {
      label: 'Scope of this entry',
      value: 'Concept only — no temperatures, times, or conditions',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The first objective is removal. Solvent held in the extracted solids has to be taken out essentially completely: it is a regulated residue in a feed ingredient, it is a fire and vapour hazard wherever the solids go next, and it is a valuable working fluid that the plant needs back. The principle is a difference in volatility — the solvent is far more volatile than the solids holding it, so supplying heat drives it off as vapour while the solids stay put, and the vapour is captured for recovery rather than released.',
        },
        {
          type: 'paragraph',
          text: 'The second objective is quality, and it is a different kind of thing altogether. Raw soybean protein does not feed as well as its analysis suggests, because the bean contains naturally occurring factors — most notably inhibitors of the enzymes an animal uses to digest protein — that reduce how much of that protein an animal can actually use. Heat deactivates them. Toasting is therefore not a drying step that happens to warm the meal: it is a deliberate quality operation, and a meal that has been desolventised but not adequately toasted is a meal that will underperform in feed.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the two are done together',
          text: 'Both jobs need heat and both act on the same stream, so the industry does them in one integrated operation rather than two. That is an engineering convenience, not a conceptual identity: they answer to different requirements, they are judged by different measurements, and it is possible to succeed at one while failing the other.',
        },
      ],
    },
    {
      id: 'the-heat-window',
      heading: 'The heat window',
      body: [
        {
          type: 'paragraph',
          text: 'The defining difficulty of this step is that heat is both the tool and the threat, and the target sits between two failures. Apply too little and the anti-nutritional factors survive, leaving a meal that analyses as high-protein but does not deliver it. Apply too much and the protein itself is damaged: heat drives reactions that lock up amino acids — lysine in particular — in forms the animal cannot use. The meal still analyses as high-protein, because the nitrogen is all still there. It simply is not available.',
        },
        {
          type: 'paragraph',
          text: 'That is the trap worth understanding. Both failure modes are invisible to a crude protein analysis, and both produce a meal that looks correct on a specification sheet while feeding poorly. It is why the feed industry judges soybean meal by measurements that indicate how much heat the protein actually received, rather than by protein content alone — the various indicators that tell an under-toasted meal from an over-toasted one. Where the correct window sits is a plant- and specification-specific matter, and no conditions are given here.',
        },
        {
          type: 'list',
          items: [
            'Under-toasted: anti-nutritional factors survive, and protein is present but poorly used',
            'Over-toasted: amino acids, especially lysine, are rendered unavailable',
            'Both failures pass a crude protein analysis unnoticed',
            'Residual solvent is a separate requirement that heat also serves, judged separately',
          ],
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean meal leaves this step as a finished co-product — one of the most heavily traded agricultural commodities in the world and the reference protein source against which other feed ingredients are priced. It is emphatically not the residue of oil production. In a soybean crush the meal is the larger stream by mass and carries a large share of the value, and the plant is built to sell it just as deliberately as it sells the oil.',
        },
        {
          type: 'paragraph',
          text: 'The meal is not quite finished when the heat comes off. It leaves warm and moist and must be brought to a condition in which it can be stored without spoiling or self-heating, and it is generally sized to a form the feed trade will handle. Those are conditioning steps on an established entity rather than transformations, and they belong with storage practice rather than with this operation.',
        },
        {
          type: 'paragraph',
          text: 'The recovered solvent goes back into the extraction process. It is not an output of the plant in any meaningful sense — it is a working fluid on a loop, and the fraction that fails to make the loop is both an emission and an economic loss.',
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'This is one of the most thermally demanding steps in a crushing plant: driving a volatile fluid out of a large solids stream, and then capturing it, takes substantial heat. It also determines much of the plant’s emissions profile, since solvent that escapes here escapes to air. Recovery efficiency is therefore an environmental and an economic measure at once, which is a useful example of the two aligning rather than trading off.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Solvent vapour, steam systems, and hot surfaces',
          text: 'This step deliberately generates flammable solvent vapour and handles it at temperature, which makes it a focal point of an extraction plant’s process-safety design. Steam and pressure systems, hot surfaces, dust from dried meal, and confined spaces in vessels and conveyors all compound the picture. This entry gives no temperatures, residence times, conditions, or procedures. Design, commissioning, and operation are matters for qualified process engineers under applicable regulation and the facility’s own procedures.',
        },
        {
          type: 'paragraph',
          text: 'Residual solvent limits in feed are set by the applicable feed authority and are jurisdictional. They are not reproduced here.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'soybeans' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'soybean-meal' }],
  processObjective:
    'Turn the extracted solids leaving a solvent extractor into a saleable protein meal, by removing the residual solvent essentially completely and recovering it for reuse, and by applying heat sufficient to deactivate the naturally occurring factors that would otherwise limit how well the protein is digested.',
  operatingPrinciple:
    'Heat exploits the volatility difference between the solvent and the solids holding it: the solvent is driven off as vapour and captured for recovery while the solids remain. The same heat drives the deactivation of heat-labile anti-nutritional factors in the protein, with the operation targeting a window above the point where those factors survive and below the point where amino acids are damaged. Described at concept level only.',
  physicalOrBiochemicalBasis:
    'Thermal: evaporative removal of a volatile component on a volatility difference, combined with heat-driven denaturation of heat-labile protein factors. Excess heat drives further reactions that reduce amino acid availability, which is why the operation is bounded on both sides.',
  qualityEffects: [
    'Determines how well the meal’s protein is actually digested, independently of how much protein it contains',
    'Under-application leaves anti-nutritional factors intact, limiting protein use',
    'Over-application damages amino acids — lysine especially — rendering them unavailable',
    'Both failure modes are invisible to a crude protein analysis, so the meal is judged on heat-treatment indicators',
    'Removes the residual solvent that would make the solids unusable as a feed ingredient',
  ],
  measurableParameters: [
    'Residual solvent in meal',
    'Urease activity',
    'Protein solubility',
    'Trypsin inhibitor activity',
    'Available lysine',
    'Meal moisture content',
    'Crude protein content',
  ],
  lossPoints: [
    'Solvent losses to air rather than to recovery',
    'Protein value lost to over-application of heat, without any loss of mass',
    'Meal fines and dust at transfers',
    'Spillage and residual stock in the plant',
  ],
  environmentalContext:
    'One of the most thermally demanding steps in a crushing plant, since driving a volatile fluid out of a large solids stream and capturing it requires substantial heat. It dominates the plant’s solvent emissions profile, because solvent that escapes recovery escapes to air; recovery efficiency is therefore simultaneously an environmental and an economic measure. The meal itself is fully utilised as a feed ingredient.',
  safetyLimitations: [
    'This step deliberately generates flammable solvent vapour and handles it at temperature, making it a focal point of an extraction plant’s process-safety design; hazardous-area classification, vapour control, and ignition management are matters for qualified process engineers under applicable regulation.',
    'Steam and pressure systems and hot surfaces present burn and pressure hazards governed by qualified engineering and the facility’s procedures.',
    'Dried meal generates dust, a recognised explosion hazard requiring engineered dust control and explosion protection.',
    'Vessels, conveyors, and meal-handling enclosures present confined-space hazards; entry is governed by facility procedure and regulation, not by any description here.',
    'This entry gives no temperatures, residence times, conditions, or procedures. It is an educational reference, not an operating instruction.',
  ],
  jurisdictionalLimitations: [
    'Residual solvent limits in feed ingredients are jurisdiction-specific and are set by the applicable feed authority.',
    'Feed-ingredient definitions, labelling, and compositional declarations for protein meals differ by jurisdiction.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'solvent-extraction' }],
  relatedOperations: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'heat-damage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed meal processing and product definitions',
    },
    {
      sourceId: 'nap-nrc',
      citedFor:
        'Soybean meal protein quality, heat treatment, and amino acid availability in feed',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Soybean protein and processing research',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Soybean meal markets and the crush co-product balance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, wherever soybeans are solvent-extracted. Meal specifications and the heat-treatment indicators used to judge them vary with the feed market served and the jurisdiction.',
  limitations: [
    'A concept-level reference description of what the operation achieves and why. It is not an operating instruction, a design basis, or a safety document.',
    'No temperatures, residence times, steam conditions, residual-solvent figures, or heat-indicator values are given — they are plant- and specification-specific.',
    'Describes soybean meal, the reference case; other oilseed meals differ in which factors matter and in whether toasting is required at all.',
    'Residual solvent limits and feed-ingredient definitions differ by jurisdiction; consult the applicable feed authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Meal Desolventising and Toasting Explained',
    description:
      'How extracted soybean solids become meal: removing residual solvent, adjusting protein with heat, and why under- and over-toasting both pass a protein test.',
    keywords: [
      'desolventising',
      'toasting',
      'soybean meal',
      'protein quality',
      'urease activity',
    ],
  },
  structuredData: { article: true },
};
