import type { ProcessingMethodContent } from '@/types/content';

export const flaking: ProcessingMethodContent = {
  id: 'processing-method-flaking',
  slug: 'flaking',
  contentType: 'processing-method',
  title: 'Flaking',
  alternativeNames: ['Oat flaking', 'Oat rolling', 'Rolled oats production'],
  category: 'Processing method',
  subcategory: 'Cereal finishing',
  processingClass: 'size-reduction',
  processStage: 'finishing',
  transformationBasis: 'mechanical',
  summary:
    'Flaking presses steamed oat groats between smooth rolls into flat flakes. The rolls are the easy part — what makes rolled oats possible is the heat treatment beforehand, without which the product would go rancid.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rolled oats are one of the few cereal products where the whole grain survives to the plate. Nothing is separated out and nothing is discarded from the kernel: the groat is flattened, not divided. Flaking is a shaping operation rather than a separating one, and its object is a physical form — a flake thin enough to hydrate and cook quickly, and intact enough not to arrive as dust.',
    },
    {
      type: 'paragraph',
      text: 'But the interesting problem in an oat line is not the rolling. Oats carry more oil than other cereals and, more awkwardly, they carry an active enzyme that attacks that oil as soon as the grain is disturbed. A groat that is simply hulled and rolled will develop a soapy rancidity within a short time — the oat’s own biology spoils it. Every oat line therefore heat-treats the grain to deactivate that enzyme, and everything else the line does depends on that having worked. The rolls give the product its shape; the heat treatment is what allows it to exist as a product at all.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Size reduction — mechanical flattening, without fraction separation',
    },
    { label: 'Stage', value: 'Finishing' },
    { label: 'Input', value: 'Oat grain' },
    {
      label: 'Primary output',
      value: 'Rolled oats — the whole groat, flattened',
    },
    {
      label: 'By-product',
      value:
        'Oat hulls, separated ahead of the rolls, with feed and fibre uses',
    },
    {
      label: 'The enabling step',
      value:
        'Heat treatment deactivates the oat’s own lipase, without which the product turns rancid',
    },
    {
      label: 'Governing principle',
      value: 'A steamed groat is plastic and flattens; a dry one shatters',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'Flaking exists to change the physical form of the oat groat without changing what it is. A whole groat is dense and slow to cook because water has to travel to its centre; a flake is thin, so water does not have far to go. Thickness is therefore the specification the line is built around — it sets cooking time, and cooking time is what distinguishes the products in the market. The composition, meanwhile, is simply the groat’s: nothing has been taken out.',
        },
        {
          type: 'paragraph',
          text: 'The principle of the rolling itself is plasticity. A dry groat is brittle, and pressing it between rolls shatters it into meal — which is a real product but not this one. Steaming changes its mechanical behaviour: a groat conditioned with moisture and heat deforms instead of fracturing, and the same pressure that would have broken it now flattens it and leaves it in one piece. The rolls are smooth rather than fluted, because the object is to press rather than to shear, and the gap between them sets the flake thickness.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The heat does two jobs, and the important one is invisible',
          text: 'Steaming makes the groat plastic enough to roll — a visible, immediate effect. It also deactivates the lipase that would otherwise degrade the oat’s oil, an effect nothing about the flake reveals and which only shows up weeks later as rancidity. The line is designed around the second job, even though the first is the one the rolls need.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'The oat line yields rolled oats and oat hulls. It is worth being precise about where each arises, because they do not come from the same machine. The hull is removed ahead of the rolls: oats, uniquely among the cereals in common use, arrive with a hull that is not fused to the kernel, and it is separated by impact and aspiration before the groat ever reaches the steamer. The rolls themselves produce only flakes. This entry covers the line from oat grain to rolled oats and therefore accounts for both streams, but the flattening step and the dehulling step are different operations within it.',
        },
        {
          type: 'paragraph',
          text: 'Oat hulls are a by-product with real uses and not a disposal problem. They are highly fibrous and low in feed value relative to grain, which makes them a bulk fibre source in ruminant rations, a bedding material, and a fuel — many oat mills burn their own hulls to raise the steam the line needs, which is a closed loop of unusual neatness. They are also a feedstock for furfural and other fibre-derived chemistry.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Rolled oats',
              description:
                'The primary product: the whole groat, steamed and flattened. Specified chiefly by flake thickness, which governs cooking time, and by the proportion of broken flakes and fines.',
            },
            {
              term: 'Oat hulls',
              description:
                'The fibrous outer covering, separated ahead of the rolls. A by-product used as ruminant fibre, bedding, and fuel — frequently to fire the mill that produced it.',
            },
            {
              term: 'Groat',
              description:
                'The dehulled oat kernel, still carrying its bran and germ. The material the rolls act on. Not modelled here as a distinct product entity.',
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
          text: 'The faults of a flaking line are mostly faults of integrity. Flakes that break become fines, and fines are neither the product nor worthless — they are sold, but not as rolled oats. Under-conditioned groats shatter at the rolls; over-thin flakes are fragile and break in handling afterwards; groats broken before the rolls arrive as pieces and leave as small flakes. In each case nothing has been lost from the mill, but material has moved out of the premium stream.',
        },
        {
          type: 'paragraph',
          text: 'The fault that matters most, though, does not appear at the mill at all. If the heat treatment has not fully deactivated the lipase, the product leaves specification-compliant and develops rancidity in the supply chain, weeks later and somewhere else. This is why enzyme deactivation is verified rather than assumed, and why it is the step an oat line is built to protect.',
        },
        {
          type: 'list',
          items: [
            'Flakes broken at the rolls or in handling afterwards, downgraded from the premium stream to fines',
            'Groats shattering rather than flattening where conditioning has been inadequate',
            'Incomplete lipase deactivation, producing rancidity that appears only after the product has left the mill',
            'Groats broken during dehulling, which arrive at the rolls already unable to make a whole flake',
            'Dust and spillage across transfers',
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
          text: 'An oat line has a thermal demand for steaming and drying and a mechanical one for the rolls. Its material flow is unusually complete: the groat leaves whole as product, and the hull, the only stream separated from it, has established uses — including, commonly, firing the boiler that steams the groats. Where a mill does that, the process supplies part of its own energy from its own by-product, which is a genuine circularity rather than a claim of environmental advantage over other cereals or processes.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust, steam, and rotating machinery',
          text: 'Suspended grain and oat dust is a recognised explosion hazard, and flaking generates fines by its nature. Steam systems introduce pressure, hot-surface, and scald hazards, and hull-fired boilers add combustion and ash-handling hazards. Flaking rolls apply high pressure across a nip point, which is among the more serious mechanical hazards in a cereal plant. All are matters for qualified engineering, applicable regulation, and the facility’s procedures. This entry describes what the process does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'oat-grain' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'rolled-oats' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'oat-hulls' }],
  processObjective:
    'Convert oat groats into flat flakes that hydrate and cook quickly while remaining intact, retaining the whole groat in the product, and recover the separated hull as a usable by-product.',
  operatingPrinciple:
    'Hulls are removed from oat grain by impact and aspiration ahead of the rolls, since the oat hull is not fused to the kernel. The groats are then steamed, which both makes them plastic enough to deform without fracturing and deactivates the oat’s native lipase. Smooth rolls set at a chosen gap press each conditioned groat flat, the gap determining flake thickness and therefore cooking time. The flakes are then dried back to a stable condition.',
  physicalOrBiochemicalBasis:
    'Chiefly mechanical: plastic deformation of a moisture- and heat-conditioned groat between smooth rolls, with no fraction separation at the rolls. The conditioning step additionally has a thermal-biochemical function, deactivating the lipase that would otherwise degrade the oat’s oil.',
  qualityEffects: [
    'Sets flake thickness, which governs cooking time and defines the product in the market',
    'Retains the whole groat, so composition follows the incoming grain and nothing is removed',
    'Heat treatment determines keeping quality by deactivating the enzyme that degrades oat oil',
    'Inadequate conditioning shatters groats instead of flattening them',
    'Cannot repair groats already broken during dehulling',
  ],
  measurableParameters: [
    'Flake thickness',
    'Broken-flake and fines proportion',
    'Moisture after conditioning',
    'Moisture of the finished flake',
    'Lipase activity',
    'Cooking time',
  ],
  lossPoints: [
    'Flakes broken at the rolls or in downstream handling, downgraded to fines',
    'Groats shattering under inadequate conditioning',
    'Groats broken during dehulling and unable to form whole flakes',
    'Dust losses at aspiration and transfers',
    'Product lost to rancidity where lipase deactivation was incomplete',
  ],
  environmentalContext:
    'Carries a thermal demand for steaming and drying alongside the mechanical demand of the rolls. The material flow is close to complete: the groat is retained whole in the product, and the hull has established ruminant-fibre, bedding, fuel, and chemical-feedstock uses. Oat mills commonly fire their own hulls to raise the steam the line requires, supplying part of the process energy from its own by-product.',
  safetyLimitations: [
    'Suspended grain and oat dust is a recognised explosion hazard, and flaking generates fines by its nature; engineered dust control, ignition management, and explosion protection are required and are matters for qualified engineers.',
    'Flaking rolls apply high pressure across a nip point and present a serious entrapment and crush hazard; guarding and isolation are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Steam conditioning introduces pressure-system, hot-surface, and scald hazards, and steam systems are subject to design, inspection, and certification requirements under applicable regulation.',
    'Hull-fired boilers introduce combustion, hot-surface, and ash-handling hazards that are matters for qualified engineering and applicable regulation.',
    'This entry is an educational reference, not an operating instruction: it gives no roll gaps, steam conditions, temperatures, times, or flake specifications.',
  ],
  jurisdictionalLimitations: [
    'Compositional and labelling standards for rolled oats and other oat products, including whole-grain claims, are set by the applicable food authority and differ by jurisdiction.',
    'Where oats are marketed in relation to gluten avoidance, the applicable rules and any segregation requirements are a matter for the relevant food authority and are not addressed here.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'test-weight' },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Oat processing and product definitions' },
    {
      sourceId: 'ahdb',
      citedFor: 'Oat quality requirements and milling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Oat lipase, groat quality, and processing research',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Oat hulls as a fibre source in ruminant rations',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Flake specifications and product categories are set by market and end use, and differ by jurisdiction.',
  limitations: [
    'A reference description of the process, not a processing specification or operating instruction.',
    'No roll gaps, steam conditions, temperatures, times, flake thicknesses, or yield figures are given — they are mill-, variety-, and contract-specific.',
    'Scoped to the oat line from oat grain to rolled oats, which is why the hull stream is accounted for here; hull removal is a distinct operation ahead of the rolls rather than part of the flattening itself.',
    'Groats and oat fines are named as real streams but are not modelled as distinct product entities in this reference.',
    'Flaking is applied to other grains by the same principle; only the oat line is described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Flaking: How Oats Become Rolled Oats',
    description:
      'How oat flaking steams and presses groats into flakes, why heat treatment prevents rancidity, and how oat hulls are recovered as fibre and fuel.',
    keywords: [
      'oat flaking',
      'rolled oats',
      'oat hulls',
      'flake thickness',
      'oat processing',
    ],
  },
  structuredData: { article: true },
};
