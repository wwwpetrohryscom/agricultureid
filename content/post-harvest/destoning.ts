import type { PostHarvestContent } from '@/types/content';

export const destoning: PostHarvestContent = {
  id: 'post-harvest-destoning',
  slug: 'destoning',
  contentType: 'post-harvest',
  title: 'Destoning',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'De-stoning',
    'Stone removal',
    'Gravity separation',
    'Destoner',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cleaning & separation',
  summary:
    'Destoning removes stones, soil clods, glass, and metal from grain, pulses, and roots. It is a specific case of grain cleaning that exists because these contaminants are the same size as the crop, so screens cannot catch them and density must be used instead.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Destoning is the separation of stones and similarly dense foreign bodies from a harvested crop. It is a particular case of the broader operation described under grain cleaning, and it is treated separately for one reason: the general cleaning toolkit does not work on it. Screens sort by size and aspiration sorts by aerodynamic behaviour, and a stone the size of a bean passes a bean-sized screen and does not blow away. What distinguishes a stone from a grain is that it is much denser, so density is what the separation must use.',
    },
    {
      type: 'paragraph',
      text: "The consequences of failure are unusually direct. Stones do not merely lower a lot's grade; they break milling machinery, damage teeth, and constitute a physical hazard in food. Because a single stone in a consumer pack is a complaint and potentially an injury, destoning tends to be a specified requirement in processing and retail supply rather than an optional refinement, and it is one of the few post-harvest operations judged on the absence of something rather than the condition of the crop.",
    },
  ],
  keyFacts: [
    {
      label: 'What it removes',
      value: 'Stones, soil clods, glass, metal, and other dense foreign bodies',
    },
    {
      label: 'Why screens fail',
      value:
        'Contaminants are the same size as the crop, so size sorting cannot separate them',
    },
    {
      label: 'What is used instead',
      value: 'Density difference, exploited on a fluidised inclined deck',
    },
    {
      label: 'Relationship to grain cleaning',
      value:
        'A specific case of it, for contaminants that size and air cannot address',
    },
    {
      label: 'Why it matters commercially',
      value:
        'Stones damage milling machinery and are a physical hazard in food',
    },
    {
      label: 'Typical crops',
      value:
        'Pulses, cereals, groundnuts, potatoes, and other soil-contact crops',
    },
    {
      label: 'Characteristic limitation',
      value:
        'Contaminants with a density close to the crop are the hardest to remove',
    },
  ],
  sections: [
    {
      id: 'why-stones-are-hard',
      heading: 'Why stones defeat ordinary cleaning',
      body: [
        {
          type: 'paragraph',
          text: 'Most cleaning operations work because the unwanted material differs from the crop in a property that is easy to act on. Chaff is much lighter, so air removes it. Straw is much longer and weed seeds much smaller, so screens remove both. Stones share neither advantage: they arrive in the field with the crop, they are rounded and graded by the same natural processes that produced the soil, and a stone field produces stones in exactly the size range of the grain grown in it.',
        },
        {
          type: 'paragraph',
          text: 'What is left is density, and it is a large difference: mineral material is several times denser than a cereal grain or a pulse. Destoners exploit it by fluidising the mixture — passing air upward through a vibrating inclined deck so that the bed of material behaves loosely, like a liquid. Lighter grain floats on the fluidised bed and flows downhill; denser stones sink through it to the deck surface, where the vibration walks them uphill against the flow. The two streams leave at opposite ends. The same principle, under the name gravity separation, is used to split crop material of differing densities, such as sound from insect-hollowed grain.',
        },
      ],
    },
    {
      id: 'the-crops',
      heading: 'Where the problem arises',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Pulses and legumes',
              description:
                'Harvested close to the ground, often on stony land, and eaten whole so that no milling step would remove a stone. Destoning is close to universal in pulse processing, and a stone in a bag of lentils is a familiar consumer complaint.',
            },
            {
              term: 'Cereals for milling',
              description:
                'The stone rarely reaches the consumer, because the mill finds it first — expensively. Destoning protects rolls, stones, and hammer mills from damage that stops a plant.',
            },
            {
              term: 'Groundnuts and other lifted crops',
              description:
                'Lifting a crop out of the soil brings soil, clods, and stones with it by construction, so separation is part of the process rather than a response to an accident.',
            },
            {
              term: 'Potatoes and root vegetables',
              description:
                'Handled on separation tables and by systems that exploit density differences, sometimes in water, where a clod, a stone, and a tuber must be told apart at speed.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Across these, the common factor is contact with soil. Crops harvested above ground carry stones only by accident; crops lifted from the ground carry them by design, and their cleaning trains are built accordingly.',
        },
      ],
    },
    {
      id: 'the-hard-cases',
      heading: 'Where density separation struggles',
      body: [
        {
          type: 'paragraph',
          text: 'The method works on a difference, so it fails as the difference narrows. Dry soil clods can be close enough in density to grain to sit in the overlap where neither stream cleanly claims them — and they crumble under handling into dust that then has to be removed by aspiration. Light, porous stones behave similarly. Wet material is worse: moisture changes both the density of the crop and how the bed fluidises, so a separator adjusted for a dry lot mis-sorts a damp one.',
        },
        {
          type: 'paragraph',
          text: 'There is also a rate ceiling. Fluidised-bed separation needs time on the deck for a stone to sink through the bed, and the temptation at harvest is to push throughput above what the physics allows. Overloading a destoner does not produce a visible failure — it produces a lot that looks clean and is not, which is the failure mode that matters, because the check that would find it is a check nobody performs on a lot that looks fine.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Destoning is not detection',
          text: 'A destoner removes what it separates; it does not verify what remains. Metal detection, X-ray inspection, and optical sorting are separate controls with separate verification requirements, and food businesses are generally required to identify and control physical hazards through their own hazard analysis rather than by assuming a separator worked.',
        },
      ],
    },
    {
      id: 'dust-and-what-it-costs',
      heading: 'The dust, and the fraction that is lost',
      body: [
        {
          type: 'paragraph',
          text: 'Destoning has costs beyond the equipment. Fluidising a bed with air liberates a great deal of dust, which is a respiratory hazard for operators and, in an enclosed handling system, an explosion risk — the same hazard that attends grain cleaning and conveying generally.',
        },
        {
          type: 'paragraph',
          text: 'The other cost is yield. No density separation is perfectly sharp: the stone stream carries some crop with it, and pushing the machine to remove the last marginal stone increases the amount of good grain thrown away with it. The setting therefore encodes a commercial judgement about how much crop to sacrifice for how much reduction in stone risk — a judgement that turns on the end use, the contract, and the consequences of a stone reaching a customer, and one that no general guidance can settle.',
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'root-tuber',
    'oilseed',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'ware-potatoes' },
  ],
  equipment: [{ type: 'machinery', slug: 'grain-auger' }],
  measurableInputs: [
    'Incoming stone and foreign-matter content of the lot',
    'Crop moisture, which changes bulk density and fluidisation behaviour',
    'Feed rate onto the separation deck',
    'Deck inclination, vibration, and airflow settings',
  ],
  measurableOutputs: [
    'Stone and foreign-matter content of the cleaned stream',
    'Crop lost to the reject stream',
    'Foreign-matter content against the applicable grade standard',
    'Dust generated and captured',
  ],
  qualityEffects: [
    'Removes a physical hazard that no downstream cooking or milling step would eliminate',
    'Protects milling and processing machinery from damage and unplanned stoppage',
    "Improves the foreign-matter component of the lot's grade",
    'Removes some sound crop along with the stones; sharper separation costs more yield',
    'Can break down soil clods into dust that must then be removed by aspiration',
  ],
  environmentalContext:
    'The size of the problem is set by the soil the crop grew in and by how the crop is harvested: stony ground and lifted crops generate stones, and low-cutting or ground-contact harvesting brings in more. Dry conditions at harvest bring clods; wet conditions bring adhering soil instead, which is a different separation problem addressed by washing rather than by density.',
  safetyLimitations: [
    "Destoning generates dust that is a respiratory hazard to operators and, in enclosed handling systems, an explosion risk; control is a matter for the facility's dust-management and safety procedures.",
    'Removing stones is not the same as verifying their absence: physical-hazard control in food businesses is governed by hazard analysis and by the applicable food-safety regulation, not by the presence of a separator.',
    'Foreign-matter limits are set by the applicable grade standard, contract, or food-safety regulation for the commodity and jurisdiction, and are not stated here.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  connections: [
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cleaning and separation of foreign matter in post-harvest grain handling',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Gravity and density separation of grain and foreign material',
    },
    {
      sourceId: 'icar',
      citedFor: 'Destoning and cleaning of pulses and grain',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest cleaning operations context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The severity of stone contamination depends on soil type, terrain, and harvesting method, and destoning is a standard step in pulse and cereal processing in most markets.',
  limitations: [
    'No foreign-matter limit, feed rate, or machine setting is given here. Limits are set by the applicable grade standard, contract, or food-safety regulation; settings are specific to the machine and the lot.',
    'Density separation fails as the density difference narrows: soil clods, porous stones, and damp material sit in the overlap and are not reliably removed.',
    'An overloaded separator produces a lot that appears clean while carrying stones through; visual acceptability is not evidence that separation worked.',
    'Destoning removes a physical hazard but is not a verification step, and does not address adhering soil, chemical contamination, or microbial contamination.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Destoning: Removing Stones by Density, Not Size',
    description:
      'Why stones defeat screens and aspiration, how fluidised-bed gravity separation removes them, where the density difference is too narrow, and the yield it costs.',
    keywords: [
      'destoning',
      'destoner',
      'gravity separation',
      'stone removal grain',
      'foreign matter',
    ],
  },
  structuredData: { article: true },
};
