import type { ProcessingMethodContent } from '@/types/content';

export const solventExtraction: ProcessingMethodContent = {
  id: 'processing-method-solvent-extraction',
  slug: 'solvent-extraction',
  contentType: 'processing-method',
  title: 'Solvent Extraction',
  alternativeNames: ['Solvent crushing', 'Direct extraction'],
  category: 'Processing method',
  subcategory: 'Oilseed crushing',
  processingClass: 'extraction',
  processStage: 'primary-transformation',
  transformationBasis: 'chemical',
  summary:
    'Solvent extraction dissolves oil out of prepared seed rather than squeezing it out, recovering the oil that pressure cannot reach. It exists because mechanical pressing is inherently incomplete — and it is described here at concept level only.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Solvent extraction answers a problem that mechanical pressing cannot solve. A press can express the oil that is free to flow, but a portion stays held in the compacted solid, in structures that no longer offer a path out. No increase in force releases it. Extraction takes an entirely different approach: instead of pushing the oil out, it dissolves the oil into a liquid that can carry it away, and then separates the oil back out of that liquid.',
    },
    {
      type: 'paragraph',
      text: 'This is a reference description of what the process achieves and why it exists in the oilseed industry. It is deliberately not a description of how to run one. Solvent extraction is a regulated, engineered operation built around a flammable working fluid, and the detail of solvent selection, handling, recovery, and containment belongs with qualified process engineers and the applicable regulator — not in an encyclopedia entry. What follows explains the role the process plays in the chain, and stops there.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Extraction — dissolution of oil into a solvent phase',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Soybeans (cleaned, dehulled, and prepared beforehand)',
    },
    {
      label: 'Co-products',
      value: 'Soybean oil and soybean meal — both saleable, neither residual',
    },
    {
      label: 'Why it exists',
      value:
        'Recovers the oil that mechanical pressing physically cannot reach',
    },
    {
      label: 'Governing principle',
      value:
        'Oil dissolves into the solvent; the solvent is then separated from both streams',
    },
    {
      label: 'Scope of this entry',
      value:
        'Concept only — no solvent handling, recovery, or operating detail',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is complete recovery, or as near to it as the process can practically get. Where a press leaves oil behind in the cake, extraction is able to reach it, because dissolution does not depend on the oil having a mechanical path out. The solvent penetrates the prepared solid, oil dissolves into it, and the resulting solution is drained away from the depleted solids. Two separations then follow: the oil is separated from the solvent, and the solvent is separated from the solids.',
        },
        {
          type: 'paragraph',
          text: 'That last point is what makes the process an engineering undertaking rather than a simple washing step. A solvent that dissolves oil well and separates from it cleanly is, by the same physical properties, volatile and flammable. Everything difficult about the process follows from the need to keep that fluid contained, recover essentially all of it from both product streams, and hold it away from any ignition source throughout. The oil recovery is the easy part; the solvent management is the process.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why preparation matters more here than anywhere',
          text: 'Solvent has to reach the oil and the resulting solution has to drain back out. That is a question of how the seed was prepared: how thoroughly the oil cells were ruptured, and how short a path the oil has to travel. Preparation does not assist extraction — it determines whether extraction can work at all.',
        },
      ],
    },
    {
      id: 'pressing-and-extraction',
      heading: 'Its relationship to pressing',
      body: [
        {
          type: 'paragraph',
          text: 'The two methods are not competitors offering the same service at different prices. They do different physical jobs, and the industry uses them in the combinations that suit the seed. Pressing removes the oil that will flow. Extraction removes the oil that will not. Where a seed carries a lot of oil, running both makes sense: a prepress stage takes out the bulk mechanically and extraction finishes the recovery on the cake. Where a seed carries less oil, as soybeans do, there is little for a press to express and direct extraction of the prepared seed is the normal route.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is that the same commodity can be crushed by more than one route, and the routes leave different amounts of oil in the meal. That difference is real and it is why extraction was developed, but its magnitude is a plant- and seed-specific matter and no figures are given here. What can be said qualitatively is the direction: extraction recovers more oil from the same seed than pressing alone, and correspondingly leaves a meal lower in residual oil.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean crushing produces oil and meal, and both are co-products in the full sense. This is not a case of a valuable product and a residue. The meal is the larger stream by mass and carries much of the crush’s value; the oil is the more valuable per unit. A soybean crushing plant is built to sell both, and the relative price of the two is what drives crush margins. Neither is the primary product and neither is a by-product of making the other.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Soybean oil',
              description:
                'The extracted oil, recovered from the solvent solution as crude oil. A co-product, going on to degumming and further refining before food use.',
            },
            {
              term: 'Soybean meal',
              description:
                'The depleted solids, once residual solvent has been removed and protein quality adjusted. A co-product and one of the world’s principal protein feed ingredients, sold on protein.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Neither stream leaves the extractor finished. The oil requires refining; the solids require desolventising before they are meal at all. Those are separate methods, described separately, and they are not optional steps a plant might skip.',
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'The process is thermally demanding, because separating solvent from both product streams and recovering it for reuse requires energy. Its emissions profile is dominated by solvent losses to air, which is why solvent recovery is both an economic priority and a regulated one — the same engineering serves both ends. Its material streams are fully utilised: oil and meal both have established markets.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Solvent flammability is the headline hazard',
          text: 'Extraction plants work with a volatile, flammable solvent, and flammable vapour in air is the dominant risk the entire plant is designed around. Extraction is subject to specific process-safety engineering, hazardous-area classification, containment, vapour control, and regulatory oversight. Confined spaces, hot surfaces, and pressure and steam systems compound the picture. This entry gives no solvent identity as guidance, no handling procedure, no recovery method, and no settings. Design, commissioning, and operation are matters for qualified process engineers under the applicable regulation and the facility’s own procedures.',
        },
        {
          type: 'paragraph',
          text: 'Residual solvent in food and feed products is separately regulated, with limits and analytical requirements set by the applicable food and feed authorities. Those limits are jurisdictional and are not reproduced here.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'soybeans' }],
  coProductOutputs: [
    { type: 'commodity-product', slug: 'soybean-oil' },
    { type: 'commodity-product', slug: 'soybean-meal' },
  ],
  processObjective:
    'Recover oil that mechanical pressing physically cannot reach, by dissolving it out of prepared seed rather than expressing it, so that a soybean crush yields both crude oil and a low-residual-oil protein meal as co-products.',
  operatingPrinciple:
    'A solvent in which oil is soluble is brought into contact with prepared seed, penetrating the solid and dissolving the oil into a liquid phase that drains away from the depleted solids. The oil is subsequently separated from the solvent, and residual solvent is removed from the solids, with the solvent recovered for reuse. Described at concept level only.',
  physicalOrBiochemicalBasis:
    'Dissolution: oil partitions into a solvent phase in which it is soluble, and is then separated from that phase by a difference in volatility. The seed solids are not chemically altered by the dissolution itself.',
  qualityEffects: [
    'Recovers more oil from the same seed than pressing alone, leaving a meal lower in residual oil',
    'Cannot improve oil quality inherited from the seed',
    'Crude oil leaves requiring degumming and further refining before food use',
    'Solids are not meal until residual solvent has been removed and protein quality adjusted',
  ],
  measurableParameters: [
    'Residual oil in meal',
    'Oil recovery',
    'Residual solvent in oil and meal',
    'Free fatty acid content of the crude oil',
    'Meal protein content',
  ],
  lossPoints: [
    'Oil retained in the extracted solids',
    'Solvent losses to air and to the product streams',
    'Fines carried into the oil stream',
    'Spillage and residual stock at transfers',
  ],
  environmentalContext:
    'Thermally energy-intensive, because solvent recovery from both product streams requires heat. The emissions profile is dominated by solvent losses to air, which are subject to regulatory control and are also an economic loss, so recovery engineering serves both. Both material streams — oil and meal — are fully utilised in established markets.',
  safetyLimitations: [
    'Solvent flammability is the dominant hazard: extraction plants handle a volatile, flammable working fluid, and flammable vapour in air is the risk the whole plant is engineered around. Hazardous-area classification, containment, vapour control, and ignition management are matters for qualified process engineers under applicable regulation.',
    'This entry gives no solvent identity as operating guidance, no handling, recovery, or containment procedure, no temperatures or pressures, and no settings of any kind. It describes what the process achieves and why it exists, nothing more.',
    'Extraction plants combine pressure and steam systems, hot surfaces, confined spaces, and rotating machinery; each is governed by facility procedure and applicable occupational-safety regulation.',
    'Residual solvent limits in food and feed are set by the applicable food and feed authorities and are not reproduced here.',
    'This entry is an educational reference, not an operating instruction. Solvent extraction must not be attempted on the basis of any description here.',
  ],
  jurisdictionalLimitations: [
    'Permitted extraction solvents, residual-solvent limits, and analytical requirements for food and feed are jurisdiction-specific and are set by the applicable food and feed authorities.',
    'Process-safety, hazardous-area, and emissions requirements for extraction plants are jurisdiction-specific and are set by the applicable safety and environmental regulators.',
    'Compositional standards and labelling for edible oils and protein meals differ by jurisdiction.',
  ],
  precededBy: [{ type: 'processing-method', slug: 'oilseed-dehulling' }],
  followedBy: [
    { type: 'processing-method', slug: 'meal-desolventising-and-toasting' },
    { type: 'processing-method', slug: 'degumming' },
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed crushing routes and vegetable oil product definitions',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Soybean crush structure and the oil and meal co-product markets',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Extraction solvents and residual-solvent considerations in food',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Soybean meal as a protein feed ingredient',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Soybeans are predominantly direct-extracted; whether a plant prepresses first depends on the seed’s oil content and the plant’s configuration. Permitted solvents and residual limits are jurisdictional.',
  limitations: [
    'A concept-level reference description of what the process achieves and why it exists. It is not an operating instruction, a design basis, or a safety document.',
    'No solvent identity is given as operating guidance, and no handling, recovery, or containment procedures, temperatures, pressures, ratios, yields, or recoveries are provided.',
    'No oil recovery or residual-oil figures are given; the advantage over pressing is stated qualitatively only, because its magnitude is plant- and seed-specific.',
    'Permitted solvents, residual-solvent limits, and process-safety requirements differ by jurisdiction; consult the applicable authorities.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Solvent Extraction: Why It Exists in Oilseed Crushing',
    description:
      'A concept-level account of solvent extraction: how dissolving oil recovers what a press cannot reach, and why soybean oil and meal are both co-products.',
    keywords: [
      'solvent extraction',
      'oilseed crushing',
      'soybean oil',
      'soybean meal',
      'oil recovery',
    ],
  },
  structuredData: { article: true },
};
