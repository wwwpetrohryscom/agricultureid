import type { PostHarvestContent } from '@/types/content';

export const fieldHeatRemoval: PostHarvestContent = {
  id: 'post-harvest-field-heat-removal',
  slug: 'field-heat-removal',
  contentType: 'post-harvest',
  title: 'Field Heat and the First Mile',
  postHarvestClass: 'cooling',
  processStage: 'field-handling',
  operatingPrinciple:
    'Produce leaves the plant carrying the heat of the field and keeps generating more by respiring, so its temperature does not fall on its own — it usually rises. Everything between severing the crop and the first engineered cooling step therefore either limits the heat the load accumulates or adds to it, and the shelf life lost in that interval is never recovered by cooling afterwards.',
  riskFactors: [
    'A long or uncontrolled interval between picking and the first cooling step',
    'Harvested produce left standing in direct sun at the headland or collection point',
    'Solar gain on unshaded bins, trailers, and open vehicles during the field-to-packhouse leg',
    'Respiratory self-heating inside deep, tightly packed, unvented containers',
    'Harvesting in the hottest part of the day where the crop and the labour schedule allow otherwise',
    'A packhouse or cooling facility whose intake rate is slower than the field delivers',
    'Produce cooled, then re-warmed on an unshaded dock while waiting for onward transport',
    'Wetting or condensation on warm produce held in a humid field environment',
  ],
  alternativeNames: [
    'Field heat',
    'First-mile cooling',
    'Harvest-to-cooling interval',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'Field heat is the heat a crop carries out of the field plus the heat it goes on generating by respiring. This entry covers the first mile — the interval between cutting and the first engineered cooling step — where that heat accumulates and where most cold chains are lost before they start.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Field heat is the thermal load a crop carries at the moment it is harvested, absorbed from sun and air, together with the heat it continues to produce because it is still alive and respiring. Warm produce does not drift back to ambient temperature and stop: respiration itself is exothermic, so a deep bin of a highly respiring crop can be warmer at its centre than the air around it, and can get warmer still while it waits.',
    },
    {
      type: 'paragraph',
      text: 'This entry is about the first mile — everything that happens between the cut and the first engineered cooling step. That step, whether forced-air, hydrocooling, room cooling, icing, or vacuum cooling, is covered under precooling; the first mile is the window that precedes it, and it is where the decisive losses usually occur. A well-specified cooler cannot recover shelf life spent on a headland at midday. The levers here are ordinary and unglamorous — when to pick, where to put the load down, what to shade it with, and how long it waits — and they are frequently the cheapest post-harvest improvement available.',
    },
  ],
  keyFacts: [
    {
      label: 'What field heat is',
      value:
        'Heat carried out of the field, plus heat the crop keeps generating by respiring',
    },
    {
      label: 'Why it does not settle',
      value:
        'Respiration is exothermic, so an unvented load can self-heat above ambient rather than cool',
    },
    {
      label: 'Scope of this entry',
      value:
        'The first mile: cutting, field holding, and the leg to the cooler — not the cooler itself',
    },
    {
      label: 'Related but distinct',
      value: 'Precooling is the engineered cooling step this window leads into',
    },
    {
      label: 'Main field-side levers',
      value:
        'Harvest timing, shade at the collection point, load ventilation, and a short wait',
    },
    {
      label: 'Why it is decisive',
      value:
        'Shelf life lost before cooling starts cannot be regained by cooling afterwards',
    },
    {
      label: 'Who it matters most for',
      value:
        'Highly respiring, high-surface-area crops such as leafy vegetables, sweetcorn, berries, and broccoli',
    },
  ],
  sections: [
    {
      id: 'the-heat-has-two-sources',
      heading: 'Field heat has two sources, not one',
      body: [
        {
          type: 'paragraph',
          text: 'Treating field heat as simply "the crop is warm because the day is warm" leads to the wrong interventions. There are two distinct sources. The first is absorbed: solar radiation and warm air heat the crop on the plant and go on heating it once it is in a bin, and a dark or exposed container can run considerably hotter than the shaded air. The second is generated: living tissue respires, converting stored substrate and releasing heat as it does so. Respiration rate rises steeply with temperature, so the two sources reinforce each other — warmer produce respires faster, which makes it warmer.',
        },
        {
          type: 'paragraph',
          text: 'This is why the crops that suffer most in the first mile are not necessarily those harvested on the hottest days, but those with the highest respiration rates and the largest surface areas relative to their mass. Leafy vegetables, sweetcorn, immature flower heads such as broccoli, and soft berries can lose a substantial share of their potential shelf life in the interval before cooling. Dense, low-respiring commodities such as roots, tubers, and hard citrus are far more forgiving of the same delay.',
        },
      ],
    },
    {
      id: 'the-first-mile-is-where-chains-fail',
      heading: 'Where cold chains actually fail',
      body: [
        {
          type: 'paragraph',
          text: "Cold-chain investment tends to be visible: rooms, units, reefers, monitoring. The first mile is none of those things, and it is routinely the weakest link — not because it is technically hard, but because it is nobody's equipment. Produce sits at a headland waiting for a full trailer, on an open vehicle in traffic, or at an intake dock at a facility already at capacity. Each of these is an unmeasured interval, and the load is gaining heat throughout.",
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that the harvest-to-cooling interval deserves to be treated as a managed quantity in its own right: known, recorded, and reduced, in the same way a store temperature is. Where produce is cooled and then returned to an unshaded holding area to await collection, the chain has been broken at the very point it was supposed to begin, and the energy spent cooling has been given back.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A cooler cannot restore what the first mile removed',
          text: 'Cooling slows deterioration from the temperature it achieves onward; it does not reverse the ageing, water loss, or decay development that occurred while the load was warm. Two lots cooled to the same temperature can have very different remaining shelf lives.',
        },
      ],
    },
    {
      id: 'field-side-levers',
      heading: 'The levers available in the field',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Harvest timing within the day',
              description:
                'Crop harvested when the field itself is coolest starts with a smaller heat load, which reduces the demand on whatever cooling follows. This is constrained by dew, by labour availability, and by crops that must not be handled wet, so it is a genuine trade-off rather than a universal recommendation.',
            },
            {
              term: 'Shade at the collection point',
              description:
                'Preventing solar gain on filled containers is usually cheaper than removing the heat afterwards. Simple shade over a headland collection area addresses the absorbed component directly and requires no power.',
            },
            {
              term: 'Container and load geometry',
              description:
                'Ventilated containers and load stacks that allow air movement let generated heat escape; deep, sealed, or tightly nested loads trap it and let the centre self-heat. The choice of container is a cooling decision as much as a protection decision.',
            },
            {
              term: 'Reducing the wait',
              description:
                'Matching the rate at which the field delivers to the rate at which the cooler can accept avoids a queue of warm produce, which is often a scheduling problem rather than a capacity problem.',
            },
            {
              term: 'Protecting the field-to-facility leg',
              description:
                'Shaded or covered transport, and avoiding long stationary periods in the sun, prevent the load arriving hotter than it left.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'None of these substitutes for engineered cooling where the crop and market require it. They change how much heat the cooler has to remove and how much shelf life still exists to be preserved when it does.',
        },
      ],
    },
    {
      id: 'the-limits-of-the-lever',
      heading: 'Where the argument stops',
      body: [
        {
          type: 'paragraph',
          text: 'Faster is not universally better, and the first mile has its own hazards. Chilling-sensitive commodities are injured by cooling that overshoots their tolerance, so speed of cooling is not an unqualified good and the tolerance is commodity-specific. Warm produce moved abruptly into a humid cold environment can carry condensation, which favours decay organisms. And field-side improvements have diminishing returns where the crop is dense and slow-respiring or where the onward chain is itself broken: shading bins for a crop that will then spend days in ambient transport addresses the smaller of two problems.',
        },
        {
          type: 'paragraph',
          text: 'The interval that is acceptable, and the temperature the crop should reach, are commodity-, cultivar-, and market-specific and are set by commodity-specific post-harvest guidance and buyer specifications rather than by any general rule.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-sweetcorn' },
    { type: 'commodity', slug: 'fresh-blueberries' },
  ],
  measurableInputs: [
    'Produce pulp temperature at harvest',
    'Ambient air temperature and solar exposure at the collection point',
    'Elapsed time between cutting and the start of cooling',
    'Container fill depth and vent area',
    'Time the load spends stationary before transport',
  ],
  measurableOutputs: [
    'Pulp temperature on arrival at the cooling facility',
    'Temperature rise or fall across the field-to-facility leg',
    'Recorded harvest-to-cooling interval per lot',
    'Water loss over the first mile',
  ],
  qualityEffects: [
    'Limits water loss, wilting, and loss of turgor before cooling begins',
    'Slows the substrate depletion that shortens shelf life and dulls flavour',
    'Reduces the head start given to decay organisms already present on the crop',
    'Restrains ethylene production and ripening in climacteric fruit before the chain takes over',
    'Reduces the heat load the downstream cooler must remove, improving its effective throughput',
  ],
  environmentalContext:
    'The size of the first-mile problem scales with field temperature, solar radiation, and the distance and time between field and facility. It is most acute in hot climates and for smallholder chains where the first engineered cooling step may be far away or absent, and least acute in cool climates with cooling capacity at or near the field. Shade and timing are available everywhere; powered cooling is not.',
  safetyLimitations: [
    'Cooling is a quality and shelf-life control, not a food-safety control: it slows microbial growth but does not remove contamination already present, and some pathogens grow at refrigerated temperatures.',
    'Chilling injury tolerances are commodity-specific; no cooling target is given here because an inappropriate one causes damage rather than preventing it.',
    'Field workers and produce share the same heat exposure. Heat stress in harvest crews is governed by occupational-safety regulation and employer duty of care, and is not addressed by produce-cooling guidance.',
  ],
  connections: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'sweetcorn' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Respiration heat, field heat, and temperature management of horticultural crops',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Field handling and the harvest-to-cooling interval in post-harvest loss reduction',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Field handling and produce temperature management context',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Harvest handling of fresh horticultural produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The severity of first-mile heat gain depends on climate, distance to cooling capacity, and commodity, and matters most where powered cooling is distant or unavailable.',
  limitations: [
    'No acceptable harvest-to-cooling interval or target temperature is given here. Both are commodity-, cultivar-, and market-specific and are set by commodity-specific post-harvest guidance and buyer specifications.',
    'This entry covers the window before engineered cooling; the cooling methods themselves, and their selection, are covered under precooling.',
    'Field-side measures reduce heat gain but do not substitute for cooling where the commodity and market require it, and give little benefit where the onward chain is itself uncontrolled.',
    'Faster and colder is not universally better: chilling-sensitive commodities are damaged by cooling beyond their tolerance, and condensation on cooled produce can favour decay.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Field Heat and the First Mile After Harvest',
    description:
      'Field heat is absorbed and generated: why produce self-heats after cutting, why the first mile before precooling is where cold chains fail, and what to do.',
    keywords: [
      'field heat',
      'first mile cooling',
      'harvest to cooling interval',
      'respiration heat',
      'produce temperature management',
    ],
  },
  structuredData: { article: true },
};
