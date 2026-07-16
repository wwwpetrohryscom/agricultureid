import type { PostHarvestContent } from '@/types/content';

export const shadeDrying: PostHarvestContent = {
  id: 'post-harvest-shade-drying',
  slug: 'shade-drying',
  contentType: 'post-harvest',
  title: 'Shade Drying',
  postHarvestClass: 'drying',
  processStage: 'preparation',
  alternativeNames: ['Shade curing', 'Air drying in shade', 'Indirect drying'],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Shade drying removes moisture out of direct sunlight, using air movement rather than solar heating. It is chosen for spices, herbs, and other high-value aromatics whose colour and volatile compounds are damaged by the very sunlight that would dry them fastest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Shade drying is drying deliberately kept out of the sun. Produce is spread thinly on racks, trays, or nets in a ventilated, roofed or screened space, and dried by moving air rather than by radiant heat. Compared with open-sun drying it is slower, needs more space and structure, and demands more attention — which makes it worth explaining why anyone would choose it.',
    },
    {
      type: 'paragraph',
      text: 'The answer is that for a particular class of commodities, the product is not the dry matter but the appearance and the aroma, and sunlight destroys both. Direct solar radiation bleaches pigments and drives off the volatile compounds that constitute the value of a herb or spice. A leaf dried in the sun may be perfectly dry, perfectly safe, and commercially worth a fraction of the same leaf dried in shade, because it is brown instead of green and smells of very little. Shade drying accepts a slower, more demanding process to protect quality attributes that faster drying would remove.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Drying by air movement in a shaded, ventilated space, out of direct sun',
    },
    {
      label: 'Why it is chosen',
      value:
        'Sunlight bleaches colour and drives off aroma volatiles in herbs and spices',
    },
    {
      label: 'Applies to',
      value:
        'Culinary herbs, leafy spices, chillies for colour, cardamom, vanilla, some teas',
    },
    {
      label: 'Drying agent',
      value: 'Air movement and low humidity, not radiant heat',
    },
    {
      label: 'Cost of the choice',
      value:
        'Slower drying, more space and structure, and a longer window for spoilage',
    },
    {
      label: 'Central tension',
      value: 'Slow enough to protect quality, fast enough to outrun moulds',
    },
    {
      label: 'Related but distinct',
      value:
        'Sun drying, where solar heating is the point rather than the problem',
    },
  ],
  sections: [
    {
      id: 'what-sunlight-costs',
      heading: 'What sunlight takes away',
      body: [
        {
          type: 'paragraph',
          text: 'For staple grain, sunlight is simply free energy and the crop is largely indifferent to it. For aromatics, it is an agent of loss acting on exactly the fractions that are being sold.',
        },
        {
          type: 'list',
          items: [
            'Pigments degrade under ultraviolet and visible radiation: green herbs yellow and brown, and red chillies and paprika fade — a loss that is directly visible to the buyer and priced accordingly.',
            'Essential oils and other volatiles are lost faster at the higher tissue temperatures direct sun produces, taking with them the aroma and flavour that define the commodity.',
            'Surface temperatures in direct sun rise well above the surrounding air, so the product is heated more than the ambient conditions suggest.',
            'Sun-exposed material dries unevenly between the upper and lower faces, case-hardening the surface while the interior stays moist.',
          ],
        },
        {
          type: 'paragraph',
          text: 'These are quality losses, not safety losses, which is why the choice between sun and shade is a market decision rather than a hygiene one. A sun-dried herb is still food; it is just a cheaper food than it needed to be.',
        },
      ],
    },
    {
      id: 'what-shade-costs',
      heading: 'What shade costs in return',
      body: [
        {
          type: 'paragraph',
          text: 'Removing the sun removes the energy, and the water still has to go somewhere. Shade drying is therefore slower, and slowness is not free: the whole period during which the material is moist is a period in which moulds and bacteria can grow, and some of those moulds produce toxins. The commodities that most need shade drying — fleshy chillies, thick-walled fruit, dense leaf — are often the ones that dry slowest, which sharpens the conflict rather than easing it.',
        },
        {
          type: 'paragraph',
          text: "This is why shade drying is an engineering problem rather than simply the absence of sun. The air has to move: still air in a shaded room saturates locally around the produce and drying stops, which is the worst of both worlds — no light, no drying, and a warm humid space that favours exactly the organisms one is racing. Adequate ventilation, thin loading, and space between trays are not refinements but the mechanism itself. Where ambient humidity is too high for air alone, mechanical or gently heated systems are used, which retain shade drying's protection from light while restoring some of the drying rate.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Slow drying and mould risk',
          text: 'Material that stays moist and warm for an extended period can develop moulds, some of which produce mycotoxins that are invisible, tasteless, and not destroyed by later drying. Protecting colour and aroma by slowing drying must not be allowed to extend the moist period beyond what the commodity and climate tolerate.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where shade drying is standard practice',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Culinary herbs',
              description:
                'Leaf colour and aroma are the entire product. Shade drying is close to universal for quality-grade dried herbs, and the difference between shade- and sun-dried material is obvious in the pack.',
            },
            {
              term: 'Chillies and paprika sold on colour',
              description:
                'Where the commodity is valued for pigment intensity, sun exposure directly attacks the trait being paid for. Chillies dried for heat rather than colour are treated more leniently.',
            },
            {
              term: 'Cardamom and other aromatic capsules',
              description:
                'Green colour retention is a major grading criterion, and the volatile oil is the value. Drying is done out of direct sun, commonly in ventilated or gently heated structures.',
            },
            {
              term: 'Vanilla and other cured aromatics',
              description:
                'Drying is interleaved with curing, and the whole sequence is managed for flavour development rather than for speed. Exposure regimes are traditional, staged, and specific to the producing region.',
            },
            {
              term: 'Leaf destined for processing',
              description:
                'Tea and tobacco leaf are withered or cured under controlled, shaded conditions where the objective is a directed biochemical change, not merely water removal.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "Across these, the pattern is consistent: shade drying appears wherever the commodity's price is set by attributes that sunlight degrades. Where price is set by dry weight and soundness alone, the sun wins the argument on cost.",
        },
      ],
    },
    {
      id: 'contamination',
      heading: 'The contamination question',
      body: [
        {
          type: 'paragraph',
          text: 'Shade drying is often assumed to be cleaner than sun drying because it happens under a roof, and this is only conditionally true. A shaded structure does keep off rain, birds, and windborne dust, and being off the ground avoids the soil contact that open-sun drying on bare surfaces involves. But a poorly maintained drying shed is a sheltered, humid, food-filled space, which is attractive to rodents and insects, and enclosure without ventilation actively worsens the microbial situation.',
        },
        {
          type: 'paragraph',
          text: 'Dried spices and herbs are also, as a class, associated with microbial contamination in trade, and drying method is only one contributor. The controls that matter — clean surfaces, exclusion of animals, prevention of re-wetting, and prompt packing once dry — apply to shade drying as much as to any other method, and the roof does not supply them.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['spice', 'beverage-crop', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'dried-chillies' },
    { type: 'commodity', slug: 'green-cardamom' },
    { type: 'commodity', slug: 'vanilla-beans' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'commodity', slug: 'tea-leaf' },
    { type: 'commodity', slug: 'dried-tobacco-leaf' },
  ],
  measurableInputs: [
    'Loading density on trays or racks',
    'Air movement through the drying space',
    'Ambient temperature and relative humidity',
    'Product moisture at loading',
    'Elapsed drying time',
  ],
  measurableOutputs: [
    'Product moisture at the end of drying',
    'Colour retention against a reference standard',
    'Volatile oil or aroma-compound content',
    'Proportion of the lot mouldy, discoloured, or case-hardened',
    'Microbial load of the dried material',
  ],
  qualityEffects: [
    'Retains pigment and colour grade that direct sunlight would bleach',
    'Preserves volatile oils and aroma that heat and radiation drive off',
    'Avoids the case-hardening that rapid surface drying in sun can cause',
    'Extends the moist period, increasing exposure to moulds and mycotoxin-producing fungi',
    'Gives more uniform drying between the upper and lower faces of the material',
  ],
  environmentalContext:
    'Shade drying depends on ambient humidity in a way sun drying partly escapes, because it has no radiant energy to overcome a humid atmosphere. In humid producing regions it is frequently impossible with unassisted air, and ventilated or gently heated structures are used to keep the protection from light while restoring drying rate. It uses little or no fuel where the climate permits it, which is part of its appeal at smallholder scale.',
  safetyLimitations: [
    'Mycotoxin-producing moulds can develop during slow drying and are not visible, not detectable by smell, and not removed by drying afterwards; their control is a matter for testing against the applicable regulatory limits, not for inspection.',
    'A roof is not hygiene: enclosed drying spaces can harbour rodents and insects, and enclosure without ventilation increases microbial risk rather than reducing it.',
    'Dried herbs and spices are subject to jurisdiction-specific microbiological and contaminant limits; meeting them is a matter of the whole chain, not of drying method alone.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
  ],
  connections: [
    { type: 'crop', slug: 'chili-pepper' },
    { type: 'crop', slug: 'cardamom' },
    { type: 'crop', slug: 'vanilla' },
    { type: 'crop', slug: 'black-pepper' },
    { type: 'crop', slug: 'tea' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Drying of spices and herbs and quality retention in post-harvest handling',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin contamination associated with dried spices and slow drying',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Post-harvest drying of cardamom, chillies, and other spice crops',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest handling of spice and aromatic crops',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in spice- and herb-producing regions. Feasibility with unassisted air depends strongly on ambient humidity; assisted systems are used where air alone cannot dry fast enough.',
  limitations: [
    'No drying time, loading density, airflow, or moisture endpoint is given here. These are commodity-, cultivar-, and climate-specific and are set by commodity-specific guidance and buyer specifications.',
    'Shade drying protects colour and aroma but lengthens the moist period; whether that trade is acceptable depends on the commodity and the local climate, and in humid conditions it may not be.',
    'Colour and aroma retention are quality attributes, not safety attributes; a well-coloured, aromatic lot may still be contaminated, and a dull one may be perfectly safe.',
    'Traditional shade-drying and curing regimes for commodities such as vanilla are region-specific practices developed over long periods and are not reducible to general principles.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Shade Drying: Protecting Colour and Aroma',
    description:
      'Why spices and herbs are dried out of the sun: sunlight bleaches pigment and strips volatile oils, but slower drying lengthens the window for moulds.',
    keywords: [
      'shade drying',
      'spice drying',
      'herb drying',
      'colour retention',
      'volatile oil loss',
    ],
  },
  structuredData: { article: true },
};
