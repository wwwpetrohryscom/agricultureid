import type { PostHarvestContent } from '@/types/content';

export const winnowing: PostHarvestContent = {
  id: 'post-harvest-winnowing',
  slug: 'winnowing',
  contentType: 'post-harvest',
  title: 'Winnowing',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: ['Air separation', 'Aspiration', 'Fanning', 'Air cleaning'],
  category: 'Post-harvest operation',
  subcategory: 'Cleaning & separation',
  summary:
    'Winnowing separates grain from chaff using moving air. It is the oldest post-harvest operation still in daily use, unchanged in principle from a basket in the wind to the aspirator in a combine, and it sorts by aerodynamic behaviour rather than by weight.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Winnowing uses moving air to separate a threshed crop from the lighter material mixed with it — chaff, glumes, dust, straw fragments, empty grains, and light weed seed. In its traditional form the mixture is tossed from a basket or poured from a height while wind or a fan carries the light fraction away and the grain falls. In its mechanised form the same separation happens inside the cleaning shoe of a combine harvester, inside a thresher, or in the aspiration stage of a cleaning plant. The setting has changed completely; the physics has not changed at all.',
    },
    {
      type: 'paragraph',
      text: 'It is worth being precise about what the air is actually sorting, because the common description — that winnowing separates heavy from light — is wrong in a way that matters. Air acts on a particle according to the balance between its weight and the drag it generates, which depends on its size and shape as much as its mass. A large, flat, light chaff fragment presents a great deal of surface to the air; a small dense grain presents very little. This is why winnowing removes chaff beautifully and removes a stone not at all, even though the stone is a far worse contaminant.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'Separates grain from chaff, dust, and light debris using moving air',
    },
    {
      label: 'What air actually sorts by',
      value:
        'Aerodynamic behaviour — the balance of weight against drag — not weight alone',
    },
    {
      label: 'Relationship to grain cleaning',
      value:
        'The air-separation stage of it; screens and density separation handle the rest',
    },
    {
      label: 'Where it happens now',
      value:
        'In combine cleaning shoes, threshers, and aspirators, as well as by hand',
    },
    {
      label: 'Traditional dependence',
      value: 'Manual winnowing needs wind, so it waits on the weather',
    },
    {
      label: 'Useful side effect',
      value:
        'Removes light, insect-hollowed, and unfilled grains along with the chaff',
    },
    {
      label: 'Main hazard',
      value:
        'Airborne dust: a respiratory hazard, and an explosion risk when enclosed',
    },
  ],
  sections: [
    {
      id: 'the-physics',
      heading: 'What the air is really sorting',
      body: [
        {
          type: 'paragraph',
          text: 'Drop a particle into a rising airstream and one of three things happens: it falls, it hangs, or it is carried away. Which one depends on the speed at which the drag on the particle balances its weight — a property that combines mass, size, and shape into a single aerodynamic characteristic. Grain, being dense and compact, needs a fast airstream to lift; chaff, being broad and light, is carried off by a slow one. Set the air between the two and the separation happens on its own.',
        },
        {
          type: 'paragraph',
          text: "This framing explains the operation's reach and its limits at once. It removes anything aerodynamically unlike grain, which is why the same airstream that takes off chaff also takes off dust, straw fragments, empty glumes, and light weed seeds without being asked. It cannot remove anything aerodynamically like grain: a stone of similar size and shape sits in the same airstream position as the grain, whatever its density, and passes straight through — which is why destoning exists as a separate operation using density instead.",
        },
        {
          type: 'paragraph',
          text: 'It also explains a genuinely useful side effect. Grain that has been hollowed by storage insects, or that never filled properly, is lighter than sound grain of the same size and shape — so it behaves differently in the airstream and leaves with the chaff. Winnowing therefore performs a quiet quality selection nobody asked it for: it preferentially removes the very grains that are damaged or unfilled.',
        },
      ],
    },
    {
      id: 'the-setting-problem',
      heading: 'The setting is a decision, not a calibration',
      body: [
        {
          type: 'paragraph',
          text: 'There is a single control — air speed — and it points in two directions. Too slow, and chaff stays in the grain: the lot is dirty, it will not meet its grade, and the retained trash carries moisture and provides food and harbourage for storage insects. Too fast, and sound grain leaves with the chaff: the lot is clean, and part of the crop is lying in the field or the reject stream.',
        },
        {
          type: 'paragraph',
          text: 'Because grain lost this way disappears rather than accumulating visibly, the error is asymmetric in how it is noticed. Dirty grain is rejected at the point of sale by someone who tells you; grain blown out of the back of a combine is discovered by nobody. The tendency is therefore to run the air harder than the lot requires, and the resulting loss is one of the more persistent invisible costs in mechanised harvest.',
        },
        {
          type: 'paragraph',
          text: 'The setting also cannot be fixed once. Aerodynamic behaviour changes with the crop, with the cultivar, and with moisture — damp chaff is heavier and clings, and damp grain is heavier too, so the right air speed in the morning is the wrong one by afternoon. This is the same underlying reason that other post-harvest operations drift with conditions through a harvest day.',
        },
      ],
    },
    {
      id: 'by-hand-and-by-machine',
      heading: 'By hand, by fan, by machine',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wind winnowing',
              description:
                'The mixture is tossed or poured in a natural breeze. Needs no equipment and no energy, and produces a good separation in the hands of an experienced worker — but it waits on wind that may not come, and losing a threshed lot to a still week is a real risk.',
            },
            {
              term: 'Fan winnowing',
              description:
                "A hand-cranked, pedalled, or motorised fan replaces the wind, removing the weather dependence while keeping the method's simplicity. Widely used at smallholder scale and the usual first mechanisation step.",
            },
            {
              term: 'Integrated cleaning shoes',
              description:
                'Combine harvesters and most threshers winnow internally: an airstream is blown through the threshed material as it passes over oscillating sieves, so air separation and screen separation happen together, continuously, as the crop moves through.',
            },
            {
              term: 'Aspiration in cleaning plant',
              description:
                'Fixed installations use aspirators as one stage in a cleaning train, drawing off light material before or between screening steps, usually with dust extraction attached.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Across all four, what has actually changed is not the separation but its reliability and its throughput — the mechanised versions supply their own wind, at a rate that can be adjusted and sustained. This is a good illustration of why a "traditional" operation can be technologically settled without being obsolete: nothing better than moving air has been found for this particular job.',
        },
      ],
    },
    {
      id: 'dust',
      heading: 'The dust it liberates',
      body: [
        {
          type: 'paragraph',
          text: 'Everything winnowing removes has to go somewhere, and much of it goes into the air the operator is breathing. Grain dust carries fungal spores, insect fragments, soil, and fine plant material, and chronic exposure to it is associated with respiratory disease in agricultural workers. Manual winnowing puts a person directly in the dust stream by design; mechanised systems move the problem into the machine, where dust accumulates instead.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain dust: respiratory and explosion hazard',
          text: "Winnowing and aspiration generate airborne dust that is a respiratory hazard to workers and, in enclosed handling systems, an explosion hazard when suspended at sufficient concentration near an ignition source. Dust control, extraction, respiratory protection, and cleaning of accumulations are governed by occupational-safety regulation and the facility's own procedures.",
        },
      ],
    },
  ],
  applicableCommodityClasses: ['cereal-grain', 'pulse', 'oilseed'],
  applicableCommodities: [
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'millet-grain' },
    { type: 'commodity', slug: 'cowpeas' },
    { type: 'commodity', slug: 'teff-grain' },
  ],
  equipment: [
    { type: 'machinery', slug: 'thresher' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  measurableInputs: [
    'Air speed through the separation zone',
    'Feed rate of threshed material',
    'Crop and chaff moisture',
    'Proportion of light material in the incoming mixture',
  ],
  measurableOutputs: [
    'Chaff, dust, and light material remaining in the cleaned grain',
    'Sound grain lost to the light fraction',
    'Proportion of unfilled and insect-damaged grain removed',
    'Dust generated at the operator position',
  ],
  qualityEffects: [
    'Removes chaff and trash that would otherwise carry moisture and harbour storage insects',
    'Preferentially removes unfilled and insect-hollowed grains, which are aerodynamically lighter',
    "Improves the foreign-matter component of the lot's grade",
    'Loses sound grain to the light fraction if air speed is set above what the lot needs',
    'Does nothing about stones, soil, or contaminants that behave aerodynamically like grain',
  ],
  environmentalContext:
    'Manual wind winnowing is free of fuel and equipment but bound to the weather, and a calm spell during harvest can hold up an entire chain — one of the practical reasons fan winnowers are an early and popular mechanisation. The light fraction removed is not waste: chaff and husk are widely used as animal feed, bedding, fuel, and soil amendment, and where winnowing moves indoors that residue moves with it.',
  safetyLimitations: [
    'Winnowing and aspiration generate grain dust, a recognised respiratory hazard for agricultural workers and an explosion hazard when suspended in enclosed handling systems; control is governed by occupational-safety regulation and facility procedures.',
    'Winnowing removes light material only; it is not a control for stones, metal, soil, mycotoxin-contaminated grain, or chemical residues, and must not be relied on as one.',
    'Removing visibly damaged grain does not make a lot safe: mould-contaminated grain can be aerodynamically indistinguishable from sound grain, and mycotoxins are invisible.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-rice-grades' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'cowpea' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Winnowing and air cleaning in post-harvest grain handling',
    },
    {
      sourceId: 'irri',
      citedFor: 'Cleaning and winnowing of paddy at farm and mill scale',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Aerodynamic separation of grain and light material',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest cleaning practice and storage-pest context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global and near-universal. Practised by hand and fan at smallholder scale and integrated into harvest and cleaning machinery in mechanised chains; the principle is identical in both.',
  limitations: [
    'No air speed, feed rate, or cleanliness target is given here. The correct air setting depends on the crop, cultivar, moisture, and machine, and shifts within a single harvest day as conditions change.',
    'Winnowing separates by aerodynamic behaviour, not by weight or density; it cannot remove stones, soil clods, metal, or any contaminant that behaves in air like the grain does.',
    'Grain lost to the light fraction is invisible in practice, so air speed tends to be set higher than the lot requires; the loss is real but rarely measured.',
    'Cleanliness is not soundness: a well-winnowed lot can still be mould-contaminated, insect-infested internally, or carry mycotoxins, none of which air separation addresses.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Winnowing: Separating Grain from Chaff with Air',
    description:
      'How winnowing works, from basket to combine cleaning shoe: air sorts by drag and not by weight, which is why it removes chaff perfectly and stones not at all.',
    keywords: [
      'winnowing',
      'air separation grain',
      'aspiration',
      'chaff removal',
      'grain cleaning',
    ],
  },
  structuredData: { article: true },
};
