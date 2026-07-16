import type { PostHarvestContent } from '@/types/content';

export const bagStackStorage: PostHarvestContent = {
  id: 'post-harvest-bag-stack-storage',
  slug: 'bag-stack-storage',
  contentType: 'post-harvest',
  title: 'Bag Stack Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Grain is held in woven sacks stacked in a warehouse, and preservation depends entirely on the grain having been dried before bagging and on the building keeping rain, damp, and pests away from it. There is no aeration system: the stack is passively ventilated by the air moving through the gaps between and around the sacks, which is why stacks are built on pallets, away from walls, and with room to walk between them. The sack is a handling unit and a barrier to spillage, not a barrier to moisture, insects, or rodents — woven polypropylene and jute are permeable to water vapour and readily penetrated by storage insects and by rodent teeth.',
  riskFactors: [
    'Grain bagged before it is dry enough, which the stack cannot correct — bagging fixes the condition, it does not improve it',
    'Moisture uptake from a damp floor or wall, wetting the bottom and outer sacks first',
    'Roof leaks and wind-driven rain reaching the stack, particularly on the outer courses',
    'Storage insects moving freely between sacks through the weave, so infestation spreads across the whole stack',
    'Rodents gnawing through sacks, spilling grain and contaminating it with droppings and urine',
    'Sacks reused from a previous season carrying insects, eggs, or residues into a clean lot',
    'Interior sacks in a large stack becoming warm and unventilated, since only the outer courses see moving air',
    'Stack collapse where courses are stacked too high or not cross-tied, and where sacks slump as grain settles',
    'Mould developing in high-humidity climates even in dry grain, because the sack does not isolate its contents from ambient air',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  safetyLimitations: [
    'Bag stacks can collapse onto workers, particularly when they are being dismantled, when courses have been stacked high, or when sacks have slumped. Manual handling of filled sacks is a recognised musculoskeletal injury risk. Stack heights, tying patterns, and handling arrangements are matters for the facility’s own procedures and the applicable occupational-safety rules.',
    'Where a stack is sheeted and fumigated, it becomes a toxic atmosphere under and around the sheet. Fumigation is carried out by licensed operators under national registration and residue rules; no fumigant, dose, or method is given here.',
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'oilseed',
    'beverage-crop',
    'nut',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'cowpeas' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  qualityEffects: [
    'Preserves the condition grain was bagged in; it neither dries nor improves the lot',
    'Keeps lots physically separate and countable, which bulk storage does not — each sack is an identifiable unit',
    'Outer sacks weather, wet, and infest before inner ones, so a stack degrades unevenly and its outside misrepresents its inside',
    'Insect infestation spreads readily through the weave, so damage tends to be stack-wide rather than localised',
    'Rodent damage adds contamination — droppings, urine, and hair — that is a food-safety matter, not only a loss of weight',
    'In humid climates dry grain in permeable sacks takes up moisture from the air, raising mould and mycotoxin risk over time',
  ],
  environmentalContext:
    'Bagged storage is the dominant form at smallholder and trader scale across much of Africa, South and Southeast Asia, and Latin America, and it remains standard for internationally traded coffee, cocoa, and rice. It suits systems where lots are small, where they change hands often, where handling is manual, and where capital for bulk infrastructure and aeration is unavailable. Its weaknesses are worst in warm, humid tropical climates, where ambient air alone keeps grain at a moisture that supports mould growth and where insect generations follow one another without a cold season to interrupt them.',
  alternativeNames: [
    'Bagged storage',
    'Sack storage',
    'Bag stacking',
    'Godown storage',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Bag stack storage holds grain in woven sacks stacked on pallets in a warehouse. Dominant at smallholder and tropical scale, it preserves nothing on its own: the sack is a handling unit, not a barrier to moisture or pests.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bag stack storage holds grain, pulses, coffee, or cocoa in woven sacks — jute or polypropylene — stacked in courses in a warehouse or store room. It is by a wide margin the most common way grain is stored in the world, because it fits the systems most grain passes through: lots are small, they change hands between farmer, trader, and processor, handling is manual, and the capital for bulk bins and aeration does not exist. A sack is a unit that one person can carry, count, sell, and stack without machinery.',
    },
    {
      type: 'paragraph',
      text: 'What must be understood plainly is that the sack does no preservation work. Woven jute and polypropylene are permeable to water vapour, storage insects walk through the weave, and rodents chew through it. Grain in a bag stack is protected only by having been dried before it was bagged and by the building keeping rain and damp away from it. Where those two conditions fail — and in humid tropical climates the first is difficult to maintain, because dry grain in a permeable sack takes moisture back from the air — bagged grain deteriorates, and it does so across the whole stack rather than in one pocket.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Grain in woven sacks stacked on pallets in a store, with no aeration system',
    },
    {
      label: 'Why it dominates',
      value:
        'Small lots, manual handling, frequent resale, and no capital needed for bulk infrastructure',
    },
    {
      label: 'What the sack does',
      value:
        'It is a handling and counting unit — not a moisture, insect, or rodent barrier',
    },
    {
      label: 'Depends entirely on',
      value: 'Drying before bagging, and a dry, proofed, clean building',
    },
    {
      label: 'Main threats',
      value:
        'Damp from floors and walls, roof leaks, insects spreading through the weave, rodents',
    },
    {
      label: 'Stacking practice',
      value:
        'On pallets, clear of walls, with inspection gangways between stacks',
    },
    {
      label: 'Compare with',
      value:
        'Hermetic bag liners, which do act as a barrier and work on a different principle',
    },
  ],
  sections: [
    {
      id: 'what-the-sack-does-not-do',
      heading: 'What the sack does and does not do',
      body: [
        {
          type: 'paragraph',
          text: 'A woven sack is a container for handling. It lets one person move a lot that would otherwise need a conveyor, lets a trader count and sell defined units, and stops grain spilling. It is not a barrier. Water vapour passes through the weave freely, which means grain in a sack sits at whatever moisture the surrounding air puts it at over time: bag dry grain in a humid store and it will take moisture back until it reaches equilibrium with that air. Storage insects move through and between sacks without obstruction, so an infestation that starts in one sack does not stay there. Rodents cut through jute and polypropylene without difficulty.',
        },
        {
          type: 'paragraph',
          text: 'This matters because bagged storage is frequently discussed as though the sack were doing the protecting. It is not. The grain is protected by having been dried adequately before bagging, and by the store keeping rain, ground damp, and vermin away from the stack. Where a genuine barrier is wanted, it must be added: hermetic liner bags placed inside the woven sack seal the grain airtight and work by an entirely different principle, letting respiration deplete the oxygen inside. That is hermetic storage, and it is a different system that happens to use a sack-shaped container.',
        },
      ],
    },
    {
      id: 'stacking',
      heading: 'Why stacks are built the way they are',
      body: [
        {
          type: 'paragraph',
          text: 'The conventions of bag stacking — pallets underneath, a gap to the walls, gangways between stacks, limited stack height — are each answers to a specific failure. Pallets lift the bottom course off a floor that conducts ground damp and pools any water that enters. The gap to the wall does the same for walls, which are cooler than the store air and condense moisture on their inner face, and it also denies rodents the sheltered run along the wall that they prefer. Gangways exist so that every face of every stack can be inspected: bag stacks fail from the outside inward and from the bottom up, and a stack pushed against its neighbours cannot be checked.',
        },
        {
          type: 'paragraph',
          text: 'Height and tying patterns are about both stability and ventilation. Sacks slump as grain settles inside them, so a stack that was square when built leans as it ages, and a leaning stack of heavy sacks is a collapse hazard for the people dismantling it. Cross-tying the courses — laying alternate layers at right angles — binds the stack together. Ventilation is the other constraint: only the outer courses of a large stack see any air movement at all, so the interior of a big block stack is unventilated, and any heat generated there stays there. Stack dimensions, heights, and spacings are set by the applicable national storage guidance and the store’s own procedures.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal figures',
          text: 'Safe moisture for bagging, stack height and spacing, and how long a lot can be held are commodity- and climate-specific and are set by national storage guidance and the relevant trade standards. This entry gives none of them.',
        },
      ],
    },
    {
      id: 'tropical',
      heading: 'Why the tropics are the hard case',
      body: [
        {
          type: 'paragraph',
          text: 'Bagged storage is most common precisely where it works least well. In a warm, humid climate the air itself will hold grain at a moisture that supports mould growth, so grain dried properly at harvest does not stay dry in a permeable sack — it re-equilibrates with the store air. Warmth also means storage insects complete generations continuously, with no cold season to interrupt them, so an infestation that would take a season to develop in a temperate store develops in weeks. The two problems compound: insect activity generates heat and moisture, which favours mould.',
        },
        {
          type: 'paragraph',
          text: 'The mould risk is not only a matter of visible spoilage and weight loss. Storage moulds on maize, groundnuts, and other susceptible commodities can produce mycotoxins, and mycotoxin contamination is not reliably visible — a sack can look sound and still carry it. That is a food-safety consequence of storage conditions, and it is why guidance for humid climates pushes toward hermetic liners, better drying before bagging, and shorter holding periods rather than toward better stacking of permeable sacks.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Bag only grain dried adequately for the climate and the intended holding period — the stack cannot correct wet grain.',
            'Stack on pallets, clear of walls, with gangways that let every face be inspected.',
            'Clean the store and remove residual grain and old sacks before a new season; do not reuse sacks that carried an infested lot.',
            'Keep the roof sound and the floor sealed; the bottom and outer courses fail first.',
            'Proof the building against rodents and inspect for gnawing, droppings, and spillage.',
            'Cross-tie courses and limit stack height so stacks stay stable as sacks slump.',
            'Where the climate or the holding period demands a real barrier, use hermetic liners rather than expecting more from a woven sack.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Stack collapse and fumigation',
          text: 'Bag stacks can collapse onto workers, especially while being dismantled, and manual sack handling carries injury risk. Sheeted stacks under fumigation are toxic atmospheres handled only by licensed operators. This entry gives no stacking, handling, or fumigation procedure.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
    { type: 'crop', slug: 'groundnut' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'ambient-warehouse-storage' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bagged grain storage, warehouse practice, and post-harvest loss reduction',
    },
    {
      sourceId: 'irri',
      citedFor: 'Bagged rice storage and smallholder storage systems',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Tropical storage of maize, cowpea, and groundnut, and mycotoxin risk',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Storage pests of bagged commodities',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global and dominant at smallholder and trader scale, particularly across Africa, South and Southeast Asia, and Latin America; also standard for traded coffee, cocoa, and rice. Safe conditions are set by national and trade guidance.',
  limitations: [
    'This entry states no safe bagging moisture, stack height, spacing, or holding duration: all are commodity-, climate-, and period-specific and are set by the applicable national storage guidance and trade standards.',
    'Mycotoxin contamination is not reliably visible in bagged grain; sound-looking sacks can carry it, and only appropriate laboratory testing can establish whether a lot is affected.',
    'Sack materials, store construction, and stacking conventions vary widely; the behaviour described is general and does not predict how a particular store performs.',
    'Fumigation and insecticide options are subject to national registration and residue rules that differ by country and commodity, and no treatment is described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bag Stack Storage: Sacked Grain in Warehouses',
    description:
      'How bagged grain storage works and why the sack is a handling unit, not a barrier: stacking, insect spread through the weave, and tropical mould risk.',
    keywords: [
      'bag stack storage',
      'bagged grain storage',
      'sack storage',
      'warehouse grain stacking',
      'smallholder storage',
    ],
  },
  structuredData: { article: true },
};
