import type { PostHarvestContent } from '@/types/content';

export const clampStorage: PostHarvestContent = {
  id: 'post-harvest-clamp-storage',
  slug: 'clamp-storage',
  contentType: 'post-harvest',
  title: 'Clamp Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'A crop is piled in a long ridge on the field where it grew and covered with straw and earth, so the cover insulates the pile against frost while the ground beneath keeps it cool and the covering material lets the pile breathe. The balance struck is a narrow one. Respiration inside the pile generates heat continuously, and the same cover that keeps frost out also keeps that heat in, so a clamp is always running between two failures: too little cover and the crop freezes, too much and it heats and rots. The straw layer between crop and soil is what makes it workable — it insulates, absorbs the condensation that would otherwise form on the underside of the earth, and lets respiration heat and carbon dioxide escape at the ridge.',
  riskFactors: [
    'Frost penetrating an inadequate or uneven cover, especially at the ends of the ridge and on the windward face',
    'Overheating where the cover is too thick or the ridge too wide, since respiration heat cannot escape and the crop cooks slowly from inside',
    'Rots spreading unchecked through the pile, since a clamp cannot be inspected or sorted once closed',
    'Rain and snowmelt penetrating the cover and saturating the crop, and water pooling at the base on poorly drained ground',
    'Condensation on the underside of the earth cover dripping onto the crop',
    'Rodents burrowing into a covered pile of food, and slugs already present in the field soil',
    'Frost damage during opening, when the pile is broken into and the exposed face is left uncovered in freezing weather',
    'Sprouting in spring as soil warms, with no means of suppression available',
    'Soil, stones, and mud entering the crop during construction and opening, which is a downgrade at intake',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  applicableCommodityClasses: ['root-tuber', 'sugar-crop', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'sugar-beet' },
  ],
  equipment: [{ type: 'machinery', slug: 'potato-harvester' }],
  qualityEffects: [
    'Holds a crop cool and humid enough to avoid shrivel, without any building or power',
    'No inspection and no sorting once closed: losses are discovered only on opening, by which time they are complete',
    'Rots that establish in the pile spread to neighbouring units unchecked, so one poor batch can compromise a whole clamp',
    'Cannot suppress sprouting, and dormancy ends as spring soil temperatures rise',
    'Contamination with soil and stones during building and opening downgrades the lot at intake',
    'In sugar beet, sugar is consumed by respiration throughout, so clamped beet loses recoverable sugar continuously and the clamp is a holding measure before processing rather than storage',
  ],
  environmentalContext:
    'Clamps belong to temperate agriculture with a cold but not severe winter: cold enough that an uncovered crop would freeze, mild enough that a straw-and-earth cover is sufficient insulation. They persist because they need no capital, no building, and no power, and because they can be built where the crop was lifted — which for sugar beet awaiting a factory slot and for potatoes awaiting a market is the decisive advantage. Where winters are severe, clamps cannot hold the frost out; where there is no cold season, the pile simply heats.',
  alternativeNames: [
    'Clamp',
    'Potato pie',
    'Field clamp',
    'Earth clamp',
    'Beet clamp',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Clamp storage holds roots in an earth- and straw-covered field ridge, insulated against frost while the ground keeps it cool. It needs no building or power, but cannot be inspected once closed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A clamp — a pie, in older usage — is a field store: the crop is piled in a long ridge where it was lifted, covered with straw, and earthed over. It has no walls, no roof, no fans, and no power. Its purpose is to get a crop through a cold season, or through the weeks between lifting and a factory or market slot, without building anything. For sugar beet queuing for a processing campaign and for potatoes held on farm, the ability to store at the field edge with no infrastructure at all is the whole point.',
    },
    {
      type: 'paragraph',
      text: 'What a clamp is doing is a balancing act between two opposite failures, and understanding it means understanding that tension. The cover keeps frost out — which is the reason to build one. But the crop inside is alive and respiring, generating heat continuously, and the same cover that excludes frost traps that heat. Too little cover and the crop freezes; too much and it heats, sweats, and rots. Everything about how a clamp is built — the ridge shape, the straw layer, the depth of earth, the open ridge line — is an attempt to hold that balance without any ability to measure or adjust it afterwards.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A field ridge of crop covered with straw and earth, built where it was lifted',
    },
    {
      label: 'Why it is used',
      value:
        'No building, no power, and no haulage — storage at the field edge',
    },
    {
      label: 'The balance',
      value:
        'Cover excludes frost but traps respiration heat; too much cover cooks the crop',
    },
    {
      label: 'The straw layer',
      value:
        'Insulates, absorbs condensation, and lets respiration heat escape at the ridge',
    },
    {
      label: 'Main limitation',
      value:
        'Once closed it cannot be inspected or sorted; losses are found on opening',
    },
    {
      label: 'Sugar beet',
      value:
        'Respiration consumes sugar throughout, so a clamp holds beet, it does not preserve it',
    },
    {
      label: 'Climate requirement',
      value:
        'A cold but not severe winter; straw and earth cannot hold out hard frost',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'Frost out, heat out, at the same time',
      body: [
        {
          type: 'paragraph',
          text: 'A clamp has two jobs that pull against each other. Keeping frost out of the pile requires insulation, and straw and earth are insulation. But roots are alive: they respire, consuming their own reserves and releasing heat, water vapour, and carbon dioxide, and they do this continuously for as long as they are stored. In an insulated pile that heat has nowhere convenient to go. If it accumulates, the pile warms, and warmer roots respire faster, which produces more heat — a self-reinforcing loop that ends in a sweating, rotting core.',
        },
        {
          type: 'paragraph',
          text: 'The construction is designed around that. The ridge is long and comparatively narrow rather than a broad heap, because the ratio of surface to volume determines whether heat can escape. Straw goes between the crop and the earth to insulate, to absorb the condensation that would otherwise form on the cold underside of the soil layer and drip back onto the crop, and to provide a porous path for warm moist air to work its way to the top. The ridge line is often left thinly covered or open, precisely so respiration heat and carbon dioxide can vent, and is closed up only as harder frost arrives. Cover depth is adjusted through the season by the same logic: more as the weather hardens, less when it relents. Cover depths, ridge dimensions, and holding periods are set by the applicable national storage guidance for each crop and region.',
        },
      ],
    },
    {
      id: 'blind',
      heading: 'Storage you cannot see into',
      body: [
        {
          type: 'paragraph',
          text: 'The defining weakness of a clamp is not thermal, it is informational. Once the pile is covered, what is happening inside it is essentially unobservable. A building lets you walk in, look at the crop, smell it, pull a sample, and remove a rotting batch before it takes its neighbours with it. A clamp offers none of that. A rot that establishes in a clamp spreads through the pile at whatever rate the conditions allow, and the first anyone knows of it is when the clamp is opened — at which point the loss is not developing, it is finished.',
        },
        {
          type: 'paragraph',
          text: 'This is why what goes into a clamp matters more than for any other store. Crop that is damaged, diseased, wet, or frosted at lifting will not survive, and worse, it will not fail alone. There is no intervention available after closing, so selection at building is the only control. Some of the same reasoning applies to the ground: a clamp on a poorly drained site sits in water when it rains, and the base of the pile is exactly where a problem is least likely to be noticed and most likely to start. Opening is its own hazard — a face broken into and left exposed in freezing weather will frost, so clamps are opened with the intention of clearing what is opened.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal figures',
          text: 'Cover depths, ridge dimensions, safe holding periods, and the conditions each crop tolerates are crop-, cultivar-, region-, and season-specific. They are set by the applicable national storage guidance; this entry states none of them.',
        },
      ],
    },
    {
      id: 'sugar-beet',
      heading: 'The sugar beet case',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet clamping deserves separate treatment because the thing being stored is not really the root — it is the sugar in it. A processing campaign runs for months, beet is lifted over a shorter window, and the factory takes deliveries on a schedule. Clamps are how the gap is bridged. But a beet in a clamp is respiring, and what it respires is its own sucrose. Every day in the clamp, recoverable sugar is consumed, and the loss is not recovered at the factory.',
        },
        {
          type: 'paragraph',
          text: 'That reframes the whole exercise. A potato clamp is trying to preserve a crop through winter; a beet clamp is trying to lose as little sugar as possible while waiting for a slot. Warm beet respires faster and loses more, frosted beet is worse still — frost damage causes structural breakdown and, on thawing, invert sugars and processing problems that make the beet difficult to work with rather than merely poorer. So beet clamps are built to shed heat and be delivered promptly, and the applicable national guidance and the processor’s own instructions set how they are covered and how long they may stand.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus a root cellar',
              description:
                'Both are passive and both borrow the ground. A cellar is a permanent chamber you can enter, inspect, and sort in; a clamp is a temporary field pile that is committed once closed.',
            },
            {
              term: 'Versus potato storage',
              description:
                'Potato storage is the crop-specific concept — dormancy, curing, sugars, disease. Clamping is one of the crudest structures in which that crop is held, offering no control over any of them.',
            },
            {
              term: 'Versus bulk bin produce storage',
              description:
                'Bins in a building allow inspection, segregation of batches, and ventilation of individual stacks. A clamp is one undifferentiated mass with none of those options.',
            },
            {
              term: 'Versus curing',
              description:
                'Curing heals lifting wounds under warm humid conditions before storage. A clamp does not cure a crop, and a clamp built from uncured, wounded roots is a clamp built to rot.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'carrot' },
    { type: 'machinery', slug: 'potato-harvester' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'root-cellar' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor:
        'Field clamp construction and management for potatoes and sugar beet',
    },
    {
      sourceId: 'cip',
      citedFor: 'Non-refrigerated potato storage structures',
    },
    {
      sourceId: 'fao',
      citedFor: 'Low-cost field storage of roots and tubers',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate agriculture with cold but not severe winters, notably north-west Europe. Cover, dimensions, and holding periods are set by national guidance and, for sugar beet, by processor instruction.',
  limitations: [
    'This entry states no cover depth, ridge dimension, temperature, or holding period: all are crop-, region-, and season-specific and are set by the applicable national storage guidance.',
    'A clamp cannot be inspected, monitored, or sorted once closed, so its outcome depends almost entirely on crop condition at building and on the season that follows.',
    'Clamps cannot exclude severe frost and cannot suppress sprouting; they are a seasonal holding measure, not long-term storage.',
    'Practice differs substantially between crops and countries, and sugar beet clamping in particular is governed by processor requirements not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Clamp Storage: Earth-Covered Field Root Stores',
    description:
      'How field clamps hold potatoes, carrots, and sugar beet under straw and earth: keeping frost out while letting respiration heat escape, and their blind spot.',
    keywords: [
      'clamp storage',
      'potato clamp',
      'sugar beet clamp',
      'field storage',
      'earth covered store',
    ],
  },
  structuredData: { article: true },
};
