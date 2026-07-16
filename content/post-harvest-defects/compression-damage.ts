import type { PostHarvestDefectContent } from '@/types/content';

export const compressionDamage: PostHarvestDefectContent = {
  id: 'post-harvest-defect-compression-damage',
  slug: 'compression-damage',
  contentType: 'post-harvest-defect',
  title: 'Compression Damage',
  defectClass: 'mechanical',
  alternativeNames: ['Pressure bruising', 'Crush damage', 'Static load damage'],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Compression damage is injury from sustained static load — the weight of an over-deep bin, an over-stacked pallet, or an over-tight pack carried over hours or weeks; it produces bruising that looks much like impact bruising, and the position of a unit in the stack is a suggestive but confounded clue to its cause.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Compression damage is what weight does when it is left in place. Produce at the bottom of a deep bin carries everything above it for as long as the bin is full. A carton at the base of a pallet carries the whole stack. A unit packed too tightly against its neighbours is loaded by them continuously, with no free space to move into. In each case the force is modest compared with a fall, and it does not stop. Tissue that would comfortably survive that load for a moment fails under it over hours, days, or a whole storage season, and the result is bruised, flattened, sometimes water-soaked flesh at the faces where the load was carried.',
    },
    {
      type: 'paragraph',
      text: 'The reason compression matters as a category separate from impact is that the two are reduced by completely different measures — padding a conveyor does nothing about bin depth, and shallower bins do nothing about a drop onto steel — while the damage they produce is largely indistinguishable in the tissue. A bruise from sustained load and a bruise from a blow are the same kind of ruined cells. The one genuinely useful clue is positional rather than visual: compression damage is distributed by where a unit sat, so it clusters at the bottom of containers and at contact faces. That clue is real, and it is confounded in a way this entry sets out plainly, because the bottom of a bin is also where the first units landed when it was filled.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — injury from sustained static load',
    },
    {
      label: 'The mechanism',
      value:
        'Modest force applied continuously over time, rather than large force applied in an instant',
      note: 'Time is part of the dose: tissue that survives a load briefly can fail under the same load carried for a season',
    },
    {
      label: 'Principal sources',
      value:
        'Over-deep bins and bulk stores, over-stacked pallets, over-tight packing, and packaging that collapses and transfers its load to the produce',
    },
    {
      label: 'Characteristic distribution',
      value:
        'Clusters at the bottom of containers and at contact faces between units — a positional pattern rather than a random one',
      note: 'Suggestive of compression, but confounded because bin bottoms also receive the impacts of filling',
    },
    {
      label: 'What it leaves',
      value:
        'Broad, flattened bruising at load-bearing faces; in severe cases flesh collapse, water-soaking, or splitting of the unit',
    },
    {
      label: 'Packaging is part of the mechanism',
      value:
        'Cartons are designed to carry stack load; when they weaken — notably in humid or wet conditions — the load passes to the produce inside',
    },
    {
      label: 'Where the limits are set',
      value:
        'Safe bin depths, stack heights, and packaging specifications are commodity-, package-, and store-specific and are set by sourced post-harvest guidance and packaging standards',
    },
  ],
  sections: [
    {
      id: 'mechanism',
      heading: 'Load plus time',
      body: [
        {
          type: 'paragraph',
          text: 'The distinguishing feature of compression is that duration is part of the dose. Living tissue under continuous load deforms progressively: it yields, cells at the loaded faces fail, and the failure develops further the longer the load stays. A load that a fruit carries without visible consequence for an afternoon can produce substantial damage across a storage season. This is why compression damage is characteristically a storage and transport defect rather than a line defect — it is created by conditions that persist, not by moments.',
        },
        {
          type: 'paragraph',
          text: 'It is also why the defect is often built in at the moment a container is filled or a pallet is stacked, and then simply waits. Nothing further needs to go wrong. A bin filled deeper than the commodity tolerates is generating damage continuously in its lower layers from the moment it is full, and every additional week of storage adds to it. The decision that caused the damage was made long before the damage existed.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Compression damage is designed in, not done',
          text: 'Impact damage is caused by events — something happened. Compression damage is caused by configurations: a depth, a stack height, a pack density, a package specification. Investigating it means examining decisions and layouts rather than looking for an incident.',
        },
      ],
    },
    {
      id: 'sources',
      heading: 'Where the load comes from',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Bin and bulk store depth',
              description:
                'The weight of the column above bears on the lowest layers continuously. Tolerated depth is commodity-specific — potatoes in bulk stores are a well-documented case — and is set by sourced storage guidance rather than by the height the building allows.',
            },
            {
              term: 'Pallet stacking',
              description:
                'Base cartons carry the whole stack. Over-stacking, uneven stacking that concentrates load on part of a carton, and pallets stacked on pallets in transit all raise the load reaching the produce at the bottom.',
            },
            {
              term: 'Over-tight packing',
              description:
                'Units pressed against each other with no free volume are loaded by their neighbours. Tight packing is often adopted deliberately to stop movement and reduce vibration, which is a genuine trade-off against compression rather than a mistake.',
            },
            {
              term: 'Packaging failure',
              description:
                'A carton is a structural member: it is meant to carry the stack so the produce does not. When board weakens — humidity and wetting are the usual reasons — the package sheds its load onto the contents, and the produce becomes the structure.',
            },
            {
              term: 'Under-filled or over-filled packages',
              description:
                'An over-filled package holds its contents in compression before it is even stacked; an under-filled one lets the lid or the carton above bear directly on the produce.',
            },
            {
              term: 'Long holding and long journeys',
              description:
                'Because duration is part of the dose, the same configuration is more damaging over a season in store or a long sea journey than over a short domestic haul.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This list is a list of configurations, and every item on it is a decision someone made. That is the most useful practical distinction between compression and impact: impacts are found by walking the line, compression is found by reading the layout.',
        },
      ],
    },
    {
      id: 'pattern',
      heading: 'The positional clue, and why it is not proof',
      body: [
        {
          type: 'paragraph',
          text: 'Compression damage is not randomly distributed. It concentrates where load concentrates: the lower layers of a bin, the base cartons of a stack, the flattened faces where one unit presses on another. This positional signature is the best evidence available short of records, and it is genuinely worth collecting — sampling a bin by depth, or a pallet by layer, tells you something that sampling a mixed sample cannot.',
        },
        {
          type: 'paragraph',
          text: 'It is not proof, for a reason that is easy to miss. The bottom of a bin is where the sustained load is highest and it is also where the first units landed, from the greatest height, onto a hard base, when the bin was being filled. Those two mechanisms produce damage in the same place for entirely different reasons, and a depth-graded sample cannot separate them. The same trap applies to base cartons in a stack, which carry the most load and are also the ones most likely to have been dropped during handling. A positional gradient tells you where damage is; it does not tell you which mechanism put it there.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The bin bottom is doubly incriminated',
          text: 'Damage concentrated in the lowest layers of a container is consistent with sustained compression and equally consistent with the impacts of filling. Separating the two requires handling and configuration records — fill method, drop height at filling, depth, duration — not a bruise map.',
        },
        {
          type: 'paragraph',
          text: 'Bruise shape carries the same caveat. Compression bruises do tend to be broad and flattened where the produce met a contact face, and impact bruises do tend to be localised. Tendency is the correct word: firmness, contact geometry, spread after the event, and the ordinary reality of one unit taking several forces in succession all blur the pattern. The cue is worth noticing and must not be reported as a finding.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Compression damage is reduced by changing configurations rather than by changing behaviour, which makes it unusually tractable — and unusually easy to reintroduce, because the pressure to fill a store deeper or stack a pallet higher is constant and the damage is invisible until much later.',
        },
        {
          type: 'list',
          items: [
            'Hold bin and bulk depth to what the commodity tolerates as set by sourced storage guidance, rather than to what the store or box allows.',
            'Specify packaging as the load-bearing element it is, and account for the conditions it will actually meet: board that carries a stack when dry may not when it is humid or wet.',
            'Control stack height and stack alignment so load passes through the corners and walls of cartons as designed, rather than through their lids onto the produce.',
            'Treat pack density as a trade-off to be set deliberately: tighter packing reduces movement and vibration and increases compression, and the balance is commodity-specific.',
            'Account for duration — a configuration that is acceptable for a short haul may not be for a season in store or a long sea journey.',
            'Sample by position, not at random, when investigating: depth in the bin, layer in the stack. Then check the fill method before concluding that the gradient is compression.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'fresh-oranges' },
  ],
  causedByConditions: [
    'Bins or bulk stores filled deeper than the commodity tolerates, loading the lowest layers continuously for the whole storage period',
    'Over-stacked or unevenly stacked pallets, concentrating the weight of the stack on base cartons',
    'Over-tight packing, in which neighbouring units load one another with no free volume to move into',
    'Packaging that weakens in humid or wet conditions and transfers its structural load to the produce inside',
    'Over-filled packages that hold their contents in compression before stacking, or under-filled packages that let the lid or the carton above bear on the produce directly',
    'Extended storage or long transport, over which the same configuration delivers a larger cumulative dose',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Impact damage — the central confusion: impact is a single dynamic blow and compression is a sustained static load, but both produce the same kind of bruised tissue, and the tissue does not record which one acted',
    'Bruising — the tissue outcome compression produces rather than a rival diagnosis; a bruise proves force exceeded tolerance and does not identify the force, so compression cannot be read off a bruise',
    'Filling impacts at the bottom of a bin — damage concentrated in the lowest layers is the classic compression signature and is equally explained by the drops that occurred when the container was filled onto a hard base',
    'Abrasion injury — vibration in transit rubs units against each other and against packaging, and tight packing that reduces this movement increases compression, so the two defects trade off against each other in the same package',
    'Splitting — severe compression can split a unit outright, but splits also arise before harvest from growing conditions and are merely discovered later, so a split is not evidence of load',
    'Blue mould and other storage rots — compression-damaged tissue is colonised by wound pathogens, and the decay found in the bottom of a bin is routinely recorded as a disease loss rather than as the load damage that permitted it',
    'Chilling injury — bottom layers of a store may also be the coldest, so position-correlated damage in a chilling-sensitive commodity has more than one available explanation',
  ],
  diagnosticLimitations: [
    'Compression damage cannot be distinguished from impact damage by the appearance of the tissue. Both produce bruising, and the bruise carries no record of whether the force arrived in an instant or was carried for weeks.',
    'The shape cue — compression bruises tending broad and flattened at contact faces, impact bruises tending localised — is suggestive only. It is confounded by tissue firmness, by the geometry of whatever the unit rested against, by spread after the event, and by units that took both kinds of force in succession, which is the normal case.',
    'The positional signature is genuinely useful and genuinely ambiguous: the lowest layers of a container carry the highest sustained load and are also where the first units landed from the greatest height during filling. A depth gradient in damage does not separate these two mechanisms.',
    'Much compression bruising is internal and its discolouration develops after the load was applied, so a lot can be inspected as sound and be visibly damaged later; inspection at packing does not establish that the configuration it went into was acceptable.',
    'Attributing damage to a particular configuration requires records of depth, stack height, pack density, packaging specification, and duration. The produce carries none of this information, and a bruise cannot be traced to a stack position after the stack has been broken down.',
    'Because compressed tissue is readily colonised by wound pathogens, compression losses are frequently recorded as decay; the wound is often unrecognisable by the time the rot is the visible endpoint, so the configuration that caused it is never questioned.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Packaging, stacking, and container practice in post-harvest chains and their contribution to food loss',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Compression bruising of fruit, packaging performance, and commodity-specific handling and storage recommendations',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Bulk store loading, box and bin depth, and pressure damage in stored potatoes',
    },
    {
      sourceId: 'cip',
      citedFor: 'Storage practice and handling damage in potato',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Compression damage follows container and packaging practice rather than climate, though humid and wet conditions weaken fibreboard packaging and so raise the load reaching produce; chains with deep bulk stores, tall stacks, or long sea journeys carry more of it.',
  limitations: [
    'This entry gives no bin depths, stack heights, load limits, package specifications, or damage tolerances. These are commodity-, package-, and store-specific and are set by sourced post-harvest guidance and packaging standards; permitted damage is defined by the applicable grade standard.',
    'Compression tolerance varies by commodity, cultivar, maturity, and turgor, and duration is part of the dose, so a configuration that is acceptable for one lot, market, or journey may not be for another.',
    'Symptom descriptions are indicative only. They do not confirm sustained load as the cause, do not distinguish compression from impact, and the positional pattern that suggests compression is equally consistent with the impacts of container filling.',
    'Compression damage is irreversible. Nothing described here recovers an affected lot, and the entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Compression Damage: Injury from Sustained Load',
    description:
      'Compression damage comes from bin depth, stacking, and tight packing over time. Why the bin bottom is doubly incriminated and load cannot be read off a bruise.',
    keywords: [
      'compression damage',
      'pressure bruising',
      'bin depth',
      'pallet stacking damage',
      'packaging compression',
    ],
  },
  structuredData: { article: true },
};
