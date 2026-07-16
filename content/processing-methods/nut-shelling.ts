import type { ProcessingMethodContent } from '@/types/content';

export const nutShelling: ProcessingMethodContent = {
  id: 'processing-method-nut-shelling',
  slug: 'nut-shelling',
  contentType: 'processing-method',
  title: 'Nut Shelling',
  alternativeNames: [
    'Nut hulling and shelling',
    'Almond hulling',
    'Cracking and shelling',
  ],
  category: 'Processing method',
  subcategory: 'Nut processing',
  processingClass: 'dehulling',
  processStage: 'primary-transformation',
  transformationBasis: 'mechanical',
  summary:
    'Nut shelling removes the hull and shell that protect a nut and recovers the kernel intact. It is a separation problem governed by a single tension: the force that breaks the shell is close to the force that breaks the kernel inside it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An almond arrives from the orchard wrapped in two layers. The outer hull is the leathery remnant of the fruit; inside it sits a hard shell, and inside that the kernel — the part with the value. Shelling removes both layers in sequence and delivers the kernel, ideally whole and undamaged. The operation is the gateway to every almond market: essentially nothing is sold before it.',
    },
    {
      type: 'paragraph',
      text: 'This is a separation process rather than a crushing one, and the distinction is the entire engineering problem. A shell must be broken to be removed, but the kernel it encloses is also breakable, and the margin between the two is narrow. Apply too little force and the shell survives; apply too much and the shell breaks along with the kernel, converting a whole kernel into pieces worth less. Every design decision in a shelling plant negotiates that margin.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Dehulling — mechanical removal of hull and shell',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Almonds (in-hull, as received from the orchard)',
    },
    { label: 'Primary output', value: 'Almond kernels — the edible portion' },
    {
      label: 'By-product',
      value: 'Almond hulls — a substantial and established feed material',
    },
    {
      label: 'Governing principle',
      value:
        'The shell is brittle and the kernel is not — cracking exploits the difference',
    },
    {
      label: 'Defining constraint',
      value:
        'The force that cracks the shell is close to the force that breaks the kernel',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is to recover the kernel whole. Wholeness is not a cosmetic preference: whole kernels and broken pieces are separate commercial grades at separate prices, so a kernel broken in shelling has not been lost but has been devalued — the same pattern seen when endosperm leaves a flour mill on the bran. The plant’s task is to remove two protective layers without damaging the thing they were protecting.',
        },
        {
          type: 'paragraph',
          text: 'The principle is a difference in mechanical behaviour, as in roller milling. A dry shell is brittle and fails by fracture; the kernel inside is comparatively resilient and deforms rather than shattering. Applying a controlled compressive or impact force therefore breaks the shell before it breaks the kernel — provided the material is dry enough for the shell to be genuinely brittle, and provided the force is matched to the nut. Since nuts are not uniform in size, a single force setting cannot suit every nut in a lot, which is why the crop is sized beforehand and why cracking is a statistical outcome rather than a deterministic one.',
        },
        {
          type: 'paragraph',
          text: 'Once cracked, the shell fragments and the kernels are physically mixed and must be separated. This exploits their differences in density, size, and aerodynamic behaviour: shell fragments are lighter and less dense than kernels, so an air stream carries the shell away while the kernels fall. Cracking and separating are distinct problems, and a plant that cracks well but separates poorly still delivers a contaminated product.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hulling and shelling are two operations',
          text: 'The hull is the dried fruit flesh and comes off first; the shell is the hard endocarp beneath it and is cracked afterwards. They are removed by different means, they yield different streams, and they are commonly described together as one step only because they run in immediate sequence.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Three material streams leave a shelling plant, and their relative masses are counter-intuitive: the kernel is much the smallest of them. Most of what arrives from the orchard is hull and shell, which is precisely why what becomes of those layers is not a footnote to the operation but central to its economics.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Almond kernels',
              description:
                'The primary product: the edible seed, graded on wholeness, size, colour, and freedom from defects and foreign material. Whole kernels and pieces are distinct commercial grades.',
            },
            {
              term: 'Almond hulls',
              description:
                'The dried outer fruit layer. A by-product and a substantial one — an established, widely traded livestock feed, valued particularly in dairy rations, and increasingly investigated as a feedstock for other recovery routes.',
            },
            {
              term: 'Shell',
              description:
                'The hard endocarp. Used as biomass fuel, as livestock bedding, and as an abrasive and industrial material. Not carried here as a distinct product entity, so it is not listed among this method’s outputs.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Almond hulls are not waste',
          text: 'Hulls are a genuine commodity with an established market, not a residue to dispose of. They exceed the kernel in mass, they are bought and sold as ruminant feed, and their value forms a real part of the returns from an almond crop. Describing them as waste misstates both the material flow and the economics.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Shelling cannot improve a kernel. Size, colour, oil content, and soundness arrive with the crop and reflect cultivar, orchard conditions, and how the nuts were handled and dried beforehand. What shelling determines is how many kernels survive intact and how cleanly they are parted from shell fragments.',
        },
        {
          type: 'paragraph',
          text: 'Moisture is the variable that governs everything upstream of the cracker, and it cuts both ways. Material that is too moist has a shell that flexes rather than fractures, so cracking fails or demands force that damages kernels; material that is too dry has a kernel that has itself become brittle and shatters readily. Drying before shelling is therefore not merely a storage measure but a direct determinant of shelling outcome — which is why a shelling result is often decided before the nuts reach the plant.',
        },
        {
          type: 'paragraph',
          text: 'The other consequential fault is contamination. Shell fragments carried through with the kernels are a foreign-material defect in a food product, and because shell is hard and sharp it is a defect that matters. Kernels lost into the shell stream are the mirror image: product leaving in the by-product line, where it is worth a fraction of its value as a kernel.',
        },
        {
          type: 'list',
          items: [
            'Kernels broken during cracking, devaluing them from whole grade to pieces',
            'Kernels carried out with the shell stream during separation',
            'Shell fragments retained with the kernels as a foreign-material defect',
            'Kernels damaged by over-dry, brittle conditions or bruised by handling',
            'Insect-damaged and mouldy kernels revealed at shelling, having entered before it',
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
          text: 'Shelling is a dry mechanical operation, so unlike fruit and vegetable processing it places little demand on water and generates little effluent — the environmental questions concern its solid streams instead. Those streams are large, since hull and shell together far exceed the kernel in mass, and both are substantially utilised: hulls as feed, shells as fuel, bedding, and industrial material. The result is that an almond huller and sheller sends comparatively little material to disposal, though what each stream is actually worth depends on local feed and energy markets rather than on anything the plant controls.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dust, noise, and rotating machinery',
          text: 'Hulling and shelling generate substantial organic and mineral dust, which is both a respiratory-exposure issue and a recognised explosion hazard where it is suspended and confined; engineered dust control, ignition management, and explosion protection are matters for qualified engineers. The plant contains high-energy impact and rotating machinery with entanglement and crush hazards, and it is noisy enough that hearing conservation is a standing concern. All of these fall to qualified engineering, applicable occupational-safety regulation, and the facility’s procedures. This entry describes what shelling does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'almonds' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'almond-kernels' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'almond-hulls' }],
  processObjective:
    'Remove the hull and shell enclosing the nut and recover the kernel whole and free of shell fragments, while releasing the hulls as a feed material and the shells for fuel and industrial use.',
  operatingPrinciple:
    'The dried hull is first removed from the nut. The shell beneath is then cracked by controlled compressive or impact force, exploiting the difference between a brittle shell that fails by fracture and a comparatively resilient kernel that does not. Because the force must be matched to the nut, the crop is sized beforehand. The cracked mixture is then separated by differences in density, size, and aerodynamic behaviour, an air stream carrying the lighter shell away while kernels are retained.',
  physicalOrBiochemicalBasis:
    'Purely mechanical: differential fracture behaviour between brittle shell and resilient kernel, followed by physical classification on density, size, and aerodynamic properties. No chemical or biochemical change is intended.',
  qualityEffects: [
    'Determines how many kernels are recovered whole rather than broken into lower-grade pieces',
    'Determines how completely shell fragments are excluded from the kernel stream',
    'Moisture at shelling governs the outcome — too moist and the shell flexes, too dry and the kernel shatters',
    'Reveals but does not cause insect and mould damage carried in from the orchard',
    'Cannot improve the size, colour, oil content, or soundness of the incoming crop',
  ],
  measurableParameters: [
    'Shelling recovery',
    'Whole kernel proportion',
    'Kernel size distribution',
    'Moisture content',
    'Shell fragments in kernels',
    'Insect damage',
    'Foreign material',
  ],
  lossPoints: [
    'Kernels broken during cracking and downgraded to pieces',
    'Kernels carried out with the shell stream at separation',
    'Kernel fines and fragments generated through handling',
    'Unshelled nuts passing through uncracked',
  ],
  environmentalContext:
    'A dry mechanical operation with little water demand and little effluent, in contrast with fruit and vegetable processing. Its solid streams are large — hull and shell together substantially exceed the kernel in mass — and both are largely utilised: hulls as an established livestock feed, shells as biomass fuel, bedding, and industrial material. Little material goes to disposal, though the realised value of each stream depends on local feed and energy markets.',
  safetyLimitations: [
    'Hulling and shelling generate substantial organic and mineral dust, presenting a respiratory-exposure issue and, where suspended and confined, a recognised explosion hazard; dust control, ignition management, and explosion protection require design and commissioning by qualified engineers.',
    'The plant contains high-energy impact and rotating machinery with entanglement and crush hazards, and noise levels that make hearing conservation a standing concern; guarding, isolation, and exposure control are governed by the facility’s procedures and applicable occupational-safety regulation.',
    'Almond is a regulated allergen in many jurisdictions, and allergen controls and labelling are set by the applicable food authority, not by this description.',
    'This entry is an educational reference, not an operating instruction: it gives no cracking forces, machine settings, moisture targets, or recovery figures.',
  ],
  jurisdictionalLimitations: [
    'Kernel grading standards, defect tolerances, and allergen labelling requirements are jurisdiction-specific and are set by the applicable authority.',
    'The use of almond hulls and shells in animal feed and bedding is governed by feed-safety regulation that differs by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'destoning' },
  ],
  connections: [
    { type: 'crop', slug: 'almond' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Nut processing and kernel product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Almond hulling, shelling, and kernel quality research',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Almond hulls as a livestock feed material',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in major almond-producing regions. Equipment configuration, kernel grades, and hull and shell outlets vary with cultivar, scale, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a shelling specification or operating instruction.',
    'No cracking forces, machine settings, moisture figures, or recovery rates are given — they are plant-, cultivar-, and lot-specific.',
    'Modelled from almonds; other tree nuts follow the same differential-fracture principle but differ substantially in shell hardness, kernel fragility, and equipment.',
    'Shell is not carried in this dataset as a distinct product entity, so it is described in prose but not listed as an output.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Nut Shelling: Recovering Kernels Without Breaking Them',
    description:
      'How nut shelling removes hull and shell to recover almond kernels whole: differential fracture, why moisture decides the outcome, and why almond hulls are feed.',
    keywords: [
      'nut shelling',
      'almond hulling',
      'almond kernels',
      'almond hulls',
      'nut processing',
    ],
  },
  structuredData: { article: true },
};
