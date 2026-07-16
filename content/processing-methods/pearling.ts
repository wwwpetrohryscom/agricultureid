import type { ProcessingMethodContent } from '@/types/content';

export const pearling: ProcessingMethodContent = {
  id: 'processing-method-pearling',
  slug: 'pearling',
  contentType: 'processing-method',
  title: 'Pearling',
  alternativeNames: [
    'Barley pearling',
    'Pearl barley production',
    'Abrasive decortication',
  ],
  category: 'Processing method',
  subcategory: 'Cereal dehulling',
  processingClass: 'dehulling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Pearling abrades barley’s hull and bran away layer by layer until a rounded kernel remains. Barley’s hull is fused to the grain and cannot be peeled off — so it has to be worn away, and there is no natural stopping point.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Barley presents a problem oats and rice do not. Its hull is not a loose covering that can be split and shaken off; in the covered barleys that dominate the crop, it is cemented to the kernel underneath and will not separate from it. Nothing can peel a barley grain. The hull has to be removed by wearing it off — and once the abrasive is working on the surface, it does not stop at the hull. It carries straight on into the bran layers beneath, and then into the endosperm.',
    },
    {
      type: 'paragraph',
      text: 'That is the defining feature of pearling: it has no natural endpoint. Rice dehulling either takes the husk off or it does not, and the kernel underneath is untouched either way. Pearling is a continuum from the first moment — hull, bran, germ, and endosperm come off in sequence as the grain is worked, and the operator’s only decision is when to stop. Every additional moment produces a whiter, rounder, more uniform pearl and a smaller one. Pearl barley is not the grain with something removed from it; it is the grain worn down to a chosen point.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Dehulling — mechanical abrasion of fused outer layers',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Barley grain' },
    {
      label: 'Co-product',
      value: 'Pearl barley — the abraded, rounded kernel',
    },
    {
      label: 'Why abrasion is unavoidable',
      value:
        'Covered barley’s hull is fused to the kernel and cannot be split off like a rice husk',
    },
    {
      label: 'Governing principle',
      value:
        'Grains rub against an abrasive surface and each other, wearing layers off progressively',
    },
    {
      label: 'Defining characteristic',
      value:
        'No natural stopping point — the degree of pearling is a choice, and it costs yield',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Pearling exists to remove barley’s inedible fused hull and, usually, some of the bran beneath it, leaving a kernel that cooks evenly and looks the part. The hull removal is not optional — barley cannot be eaten with it on. The bran removal is, and it is where the judgement lies: taking bran off improves appearance, cooking behaviour, and uniformity, and it removes fibre and micronutrients along with material that would have been sold. Both effects come from the same action, applied for longer.',
        },
        {
          type: 'paragraph',
          text: 'The principle is abrasion, and it is the same physics as rice whitening applied to a harder problem. Grains are moved against an abrasive surface and against one another under pressure, and the surface is worn away. On rice this removes a bran layer from an already-hulled kernel; on barley it must first grind through a hull cemented to the grain, which is more work and takes longer. The abrasive cannot distinguish hull from bran from endosperm — it removes whatever is on the outside at that moment — so the sequence is determined purely by anatomy: hull first, then bran and germ, then the endosperm itself. Passing the grain through repeatedly, taking a little each time, wears more evenly and breaks fewer kernels than trying to take it all at once.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the degree of pearling is the whole decision',
          text: 'There is no point at which the hull is gone and the bran is untouched — the transition is gradual, and grains in a batch do not reach it together. Stopping early leaves hull on some kernels; going further guarantees clean kernels at the cost of bran, germ, endosperm, and yield. The trade is inherent to abrading a fused hull, which is why this reference names the trade rather than a target.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Pearling yields pearl barley and a stream of everything abraded off it. The two are inseparable in the sense that matters: the removed material is not a separate thing the process also makes, it is the difference between the grain that went in and the pearl that came out. How much of each there is depends entirely on where the process was stopped.',
        },
        {
          type: 'paragraph',
          text: 'The abraded material — the hull fragments, bran, germ, and fine endosperm collectively called pearlings or barley feed — is a real feed stream and not a residue to place. It is used in animal feed, and the finer fractions are recovered as barley flour. Because pearling starts by abrading a hull with no feed value and continues into bran and endosperm that have a great deal, the composition of this stream changes as the process runs: early pearlings are mostly hull, and later ones are increasingly the nutritious part of the grain. This is not modelled here as a distinct product entity.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Pearl barley',
              description:
                'The abraded kernel, rounded and largely stripped of hull and bran. Specified by degree of pearling, size, uniformity, and colour.',
            },
            {
              term: 'Pot barley',
              description:
                'The same process stopped earlier — hull removed with more of the bran retained. A less-pearled point on the same continuum rather than a different product of a different process.',
            },
            {
              term: 'Pearlings and barley feed',
              description:
                'The abraded hull, bran, germ, and fine endosperm. A genuine feed stream, with finer fractions recovered as barley flour. Not modelled as a distinct product entity here.',
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
          text: 'Pearling is the process in this set with the highest inherent material cost, and the reason is structural rather than a matter of efficiency. A fused hull can only be removed by abrading through it, and abrasion is indiscriminate: reaching the far side of the hull means having removed everything nearer the surface, and by the time every kernel in a batch is clean, the ones that started thinner have gone further than that. Material leaves the primary stream by design, not by accident.',
        },
        {
          type: 'paragraph',
          text: 'Barley’s fibre presents a particular irony. The soluble fibre for which barley is nutritionally valued is concentrated toward the outside of the kernel — exactly where pearling is working. The more thoroughly the grain is pearled, the more of the property that makes barley worth eating is transferred into the feed stream. A pearl barley is a barley that has had a meaningful share of its nutritional case abraded off it, which is why less-pearled products exist alongside it.',
        },
        {
          type: 'list',
          items: [
            'Endosperm removed along with hull and bran — inherent to abrading a fused hull, not a fault',
            'Soluble fibre and micronutrients transferred to the feed stream, concentrated as they are near the kernel surface',
            'Kernels broken under abrasive pressure, downgraded from whole pearls',
            'Uneven pearling across a batch, since grains differ in size and hull thickness and do not clean together',
            'Heat generated by friction, bearing on kernel integrity',
            'Dust losses at aspiration and transfers',
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
          text: 'Pearling is energy-demanding, because abrasion is an inefficient way to remove material and barley’s fused hull requires a great deal of it before any edible product exists. The abraded stream is substantial and it is utilised — feed and barley flour — so little material goes unused even though a large share of the grain leaves the food stream. The distinctive environmental fact here is the size of that transfer rather than any unused residue.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust and rotating machinery',
          text: 'Pearling generates fine dust continuously by design, and suspended grain dust is a recognised explosion hazard. Pearlers contain high-speed rotating abrasive components with substantial stored energy. Engineered dust control, ignition management, explosion protection, guarding, and isolation are matters for qualified engineering, applicable regulation, and the facility’s procedures. This entry is a reference description and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'barley-grain' }],
  coProductOutputs: [{ type: 'commodity-product', slug: 'pearl-barley' }],
  processObjective:
    'Remove barley’s fused hull, and a chosen proportion of the bran beneath it, by abrasion — yielding a rounded kernel that cooks evenly — while recovering the abraded material as a feed and flour stream.',
  operatingPrinciple:
    'Grains are moved against an abrasive surface and against one another under pressure, wearing away whatever is currently at the surface. Because the hull of covered barley is fused to the kernel and cannot be split off, removal must proceed through it by abrasion, and the action continues into the bran, germ, and endosperm in anatomical sequence. Removal is staged over repeated passes, which wears more evenly and breaks fewer kernels than a single aggressive pass, and the process is stopped at a chosen degree of pearling rather than at a physical endpoint.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: progressive abrasion of surface layers under friction and pressure, indiscriminate as to which layer it is removing. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Sets the degree of pearling, which moves appearance, uniformity, cooking behaviour, fibre content, and yield together',
    'Removes soluble fibre and micronutrients concentrated near the kernel surface into the feed stream',
    'Produces uniform, rounded kernels that hydrate and cook evenly',
    'Cannot remove the hull without also removing material beneath it',
    'Uneven results across a batch where kernels differ in size and hull thickness',
  ],
  measurableParameters: [
    'Degree of pearling',
    'Pearling time',
    'Broken-kernel proportion',
    'Kernel size and uniformity',
    'Colour',
    'Grain temperature at discharge',
  ],
  lossPoints: [
    'Endosperm abraded away with hull and bran, transferring material to the feed stream',
    'Kernels broken under abrasive pressure',
    'Uneven pearling requiring further passes that cost more material',
    'Heat generated by friction',
    'Dust losses at aspiration and transfers',
  ],
  environmentalContext:
    'Energy-demanding, since abrasion removes material inefficiently and barley’s fused hull must be worn through before any edible product exists. The abraded stream is substantial but is utilised as animal feed and, in its finer fractions, as barley flour, so little material goes unused despite a large share of the grain leaving the food stream.',
  safetyLimitations: [
    'Pearling generates fine dust continuously by design; suspended grain dust is a recognised explosion hazard requiring engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Pearlers contain high-speed rotating abrasive components with substantial stored energy; guarding, isolation, and access are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Abrasive components wear and degrade in service, and their inspection and replacement are matters for competent maintenance under the facility’s procedures.',
    'This entry is an educational reference, not an operating instruction: it gives no pressures, speeds, pearling times, degrees of pearling, or machine settings.',
  ],
  jurisdictionalLimitations: [
    'Compositional and labelling standards for pearl barley and pot barley, and any whole-grain claims made for them, are set by the applicable food authority and differ by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'thousand-kernel-weight' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Barley processing and pearled-product definitions',
    },
    { sourceId: 'ahdb', citedFor: 'Barley quality and processing context' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Barley pearling and grain quality research',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Barley pearlings and milling by-products in feed use',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Pearled barley products and the degree of pearling expected are set by regional market convention and end use.',
  limitations: [
    'A reference description of the process, not a processing specification or operating instruction.',
    'No pressures, speeds, pearling times, degrees of pearling, or yield figures are given — they are plant-, variety-, market-, and contract-specific.',
    'Describes the pearling of covered barley, whose hull is fused to the kernel. Hulless barleys behave differently and require less abrasion to reach an edible product.',
    'Pearlings, barley feed, and barley flour are named as real streams but are not modelled as distinct product entities in this reference.',
    'Pearling is also applied to other grains, and as a pre-treatment before milling rather than to make a finished product; only barley pearl production is described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pearling: Abrasive Dehulling of Barley',
    description:
      'How pearling abrades barley’s fused hull and bran away, why there is no natural stopping point, and what the degree of pearling trades against yield and fibre.',
    keywords: [
      'pearling',
      'pearl barley',
      'barley dehulling',
      'pot barley',
      'degree of pearling',
    ],
  },
  structuredData: { article: true },
};
