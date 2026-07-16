import type { PostHarvestContent } from '@/types/content';

export const bulkBinProduceStorage: PostHarvestContent = {
  id: 'post-harvest-bulk-bin-produce-storage',
  slug: 'bulk-bin-produce-storage',
  contentType: 'post-harvest',
  title: 'Bulk Bin Produce Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Produce is held in large wooden or plastic pallet boxes that are filled in the field or packhouse and then stacked in a store, so the bin — not the individual fruit or tuber — becomes the unit that is moved, cooled, and tracked. The bin does two things at once. It carries the load structurally, so the produce at the bottom of a tall stack bears the weight of the bins above rather than of the produce above, which is what makes deep storage of soft commodities possible at all. And it defines the air path: slotted sides and a ventilated base mean each bin is a small package the store’s air can be driven through, so cooling and ventilation happen bin by bin rather than to a single undifferentiated mass.',
  riskFactors: [
    'Air bypassing the bins entirely, taking the easy route through gaps in the stack rather than through the produce — the characteristic failure of bin stores',
    'Bins stacked so that vents are blocked by the bin alongside or above, closing the air path the design depends on',
    'Impact and abrasion damage during filling, tipping, and handling, since a bin is emptied by being tipped and the produce falls',
    'Rots spreading within a bin from damaged or diseased units, which the bin then keeps conveniently together',
    'Compression damage where bins are overfilled so produce, not the bin frame, carries the stack load',
    'Condensation on produce when cool bins are moved into warm humid air, wetting surfaces and letting rots establish',
    'Water loss and shrivel where store humidity is too low, which bins do nothing to prevent',
    'Wooden bins harbouring pathogens in their surfaces and joints between seasons, so an unsanitised bin inoculates the next crop',
    'Ethylene accumulating in a store holding both producing and sensitive commodities in stacked bins',
    'Stack instability, since bins are heavy and stacked high on handling equipment',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  safetyLimitations: [
    'Filled bins are heavy and are stacked high and handled by forklift. Stack collapse and falling bins are a serious hazard to people working in and around a bin store, and bin handling puts machinery and people in the same aisles. Stacking limits, bin condition, and handling arrangements are matters for the operator’s own procedures and the applicable occupational-safety rules; no handling or stacking procedure is given here.',
  ],
  applicableCommodityClasses: ['fruit', 'root-tuber', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'sweet-potatoes' },
  ],
  equipment: [{ type: 'machinery', slug: 'potato-harvester' }],
  qualityEffects: [
    'The bin carries the stack load, so produce is not crushed by the weight of what is above it — the reason deep storage of apples and potatoes is possible',
    'Bin-by-bin ventilation lets air reach produce throughout a deep store rather than only at the surface of a pile',
    'Batches stay identified: an orchard block, a field, a grade, or a date remains traceable and can be removed or diverted on its own',
    'Handling damage is added at every fill and tip, and bruises are the principal downgrade in apples and potatoes',
    'A rot in a bin is contained to that bin, which limits spread but also concentrates it — the whole bin is affected',
    'Bins allow individual batches to be pulled for assessment without disturbing the rest of the store',
  ],
  environmentalContext:
    'Bin storage is the standard for temperate tree fruit and for commercial potato and root storage wherever mechanical handling is available, and it is what makes long-season apple storage practical: bins fill in the orchard, go straight into cold or controlled-atmosphere rooms, and come out months later without the fruit having been handled individually. It presupposes forklifts, sound bins, and a building — so at smallholder scale, where none of those exist, the equivalent crops are stored in piles, clamps, or sacks with all the limitations those carry.',
  alternativeNames: [
    'Pallet bins',
    'Bulk bins',
    'Bin storage',
    'Pallet boxes',
    'Field bins',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Bulk bin storage holds apples, potatoes, and roots in stacked pallet boxes that carry the stack load and define the air path, so produce is cooled and traced bin by bin rather than as one mass.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bulk bin storage holds produce in large pallet boxes — wooden or plastic, forklift-handled — that are filled once and then stay filled until the crop is graded or sold. It is the standard for apples and for commercial potato and root storage. Bins are filled in the orchard or at harvest, moved by forklift into a cold room or a controlled-atmosphere store, stacked several high, and left. Months later they come out and go to a grader. The fruit inside has been handled twice: once in, once out.',
    },
    {
      type: 'paragraph',
      text: 'The bin looks like packaging but functions as infrastructure, and it does two structural jobs that a sack or a pile cannot. It carries the load: in a stack of bins, each bin’s frame supports the ones above it, so the apples at floor level bear no weight from the apples at the top of the stack. Without that, deep storage of a soft commodity would simply crush its own base. And it defines the airflow: a bin with slotted sides and a ventilated base is a package that air can be driven through, so a store of stacked bins is a store that can be cooled throughout rather than only at its surface.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Large forklift-handled pallet boxes, filled at harvest and stacked in a store',
    },
    {
      label: 'Structural role',
      value:
        'Bin frames carry the stack load, so produce is not crushed by produce above it',
    },
    {
      label: 'Airflow role',
      value:
        'Slotted sides and vented bases make each bin an air path, allowing deep stores to be cooled',
    },
    {
      label: 'Batch identity',
      value:
        'A bin keeps an orchard block, field, or grade traceable and separately removable',
    },
    {
      label: 'Main failure',
      value:
        'Air bypassing the bins through gaps in the stack instead of passing through the produce',
    },
    {
      label: 'Handling cost',
      value:
        'Bins are filled and emptied by tipping, so impact and bruising are added at each end',
    },
    {
      label: 'Sanitation',
      value: 'Wooden bins carry pathogens between seasons unless cleaned',
    },
  ],
  sections: [
    {
      id: 'load',
      heading: 'The bin carries the load',
      body: [
        {
          type: 'paragraph',
          text: 'The reason apples are not stored in a heap is straightforward: they would crush. Fresh produce is soft, and a deep pile of it puts the full weight of the column onto the units at the bottom, which bruise, deform, and rot. Grain tolerates this — a kernel is hard and a bulk of it is self-supporting — but an apple, a tomato, or a potato does not. The bin solves it by taking the load out of the produce entirely. Each bin’s frame bears the bins above it and transmits that force to the floor around its contents, so the produce inside any bin carries only the produce inside that same bin.',
        },
        {
          type: 'paragraph',
          text: 'This is why bin fill depth is a design parameter and why overfilling matters more than it appears to. A bin filled above its rim puts the produce, rather than the frame, in contact with the bin stacked on top, and the load path then runs through the fruit. The same reasoning governs bin condition: a bin with a broken corner post or a failed base does not carry its share, and the stack redistributes onto its neighbours or onto the produce. Bin dimensions, fill levels, and stacking heights are set by the applicable national storage guidance and by the bin manufacturer’s ratings.',
        },
      ],
    },
    {
      id: 'airflow',
      heading: 'Making air go through the bins rather than around them',
      body: [
        {
          type: 'paragraph',
          text: 'The second function of a bin is to be ventilable, and this is where bin stores most often disappoint. Air, like water, takes the easiest path. A stack of bins in a room offers many easy paths — the gaps between stacks, the space above them, the aisles — and every one of those is a route with far less resistance than the route through a box packed with produce. So a fan blowing into a bin store does not necessarily cool the produce at all: it can happily circulate air around the outside of every bin in the building while the fruit in the middle stays warm.',
        },
        {
          type: 'paragraph',
          text: 'The response is to make the alternatives harder than the route through the bins. Bins are stacked so their vents align with each other and with the direction of airflow, so that a column of bins forms a continuous duct. Gaps that would let air escape are closed, sometimes with covers or curtains, and stacks are arranged so that air entering a bank must exit through produce rather than past it. In forced-air cooling the principle is made explicit: a plenum draws air out from between two rows of bins, so pressure difference pulls it through the bins from outside to inside. The distinction between a bin store where air passes through the bins and one where it passes around them is the difference between cooling the crop and running fans. Airflow rates and stacking patterns are set by the applicable national storage guidance for the commodity and store design.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal figures',
          text: 'Bin fill depth, stack height, airflow, storage temperature, and humidity are commodity-, cultivar-, and store-specific, and are set by the applicable national storage guidance and manufacturer ratings. This entry states none of them.',
        },
      ],
    },
    {
      id: 'batches-and-damage',
      heading: 'Batches, bruising, and sanitation',
      body: [
        {
          type: 'paragraph',
          text: 'A bin is also a unit of information. The contents of one bin came from one place at one time, so an orchard block, a field, a grade, or a harvest date stays identifiable through months of storage and can be pulled, assessed, diverted, or rejected on its own. In a heaped store that identity is lost the moment the crop is tipped. This is why bins underpin traceability in commercial fruit, and why a problem found in one bin is a problem in a defined, removable quantity rather than in an entire store.',
        },
        {
          type: 'paragraph',
          text: 'The costs are handling and hygiene. A bin is emptied by being tipped, and produce that is tipped falls, hits other produce, and bruises — which in apples and potatoes is the principal downgrade, and which is why water-assisted tipping is used for some crops. Every fill and every empty adds damage that no store can undo. Hygiene is the quieter problem: wooden bins have porous surfaces and joints that hold soil, sap, and pathogen inoculum from previous seasons, so an unsanitised bin can carry rot organisms straight into a clean crop. Plastic bins are easier to clean for this reason. Bin sanitation is part of store hygiene, not an optional extra.',
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
              term: 'Versus potato storage',
              description:
                'Potato storage is the crop-specific concept — dormancy, curing, sugars, disease. Bins are one way the crop is physically held, alternative to bulk piling on a ventilated floor; bins cost more but preserve batch identity and avoid compression at depth.',
            },
            {
              term: 'Versus cold storage and CA storage',
              description:
                'Those describe what the room does to the produce. Bins are how the produce is arranged inside the room, and whether the room’s air actually reaches it. A CA store of apples is a bin store.',
            },
            {
              term: 'Versus bag stack storage',
              description:
                'Both stack units in a building. Sacks suit durable dry goods and carry no load — a bag stack’s load runs through the goods. Bins carry load in their frames and suit soft, living produce.',
            },
            {
              term: 'Versus precooling',
              description:
                'Forced-air precooling is usually applied to bins, and is the operation that demonstrates the airflow principle most directly. It is a cooling step, not a storage arrangement.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'machinery', slug: 'potato-harvester' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Box and bulk storage of potatoes and store ventilation',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Forced-air cooling of palletised and binned produce',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Apple bin storage and post-harvest handling',
    },
    {
      sourceId: 'cip',
      citedFor: 'Potato storage structures and handling damage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate commercial fruit and root production with mechanical handling. Fill depths, stacking, and storage conditions are set by national guidance and bin manufacturer ratings.',
  limitations: [
    'This entry states no bin dimension, fill depth, stack height, airflow, temperature, humidity, or storage duration: all are commodity-, cultivar-, and store-specific and are set by the applicable national storage guidance and manufacturer ratings.',
    'Whether a given bin store actually ventilates its produce depends on stacking, sealing, and store design, and cannot be inferred from this entry.',
    'Bins presuppose mechanical handling, sound bin stock, and a building; the arrangement is not available at scales lacking them.',
    'Filled bins stacked high are a physical hazard to people working around them. Nothing here is a stacking or handling procedure.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Bin Produce Storage: Pallet Boxes Explained',
    description:
      'How bulk bins store apples, potatoes, and roots: bin frames carry the stack load, and why air bypassing the bins is the classic ventilation failure.',
    keywords: [
      'bulk bin storage',
      'pallet bins',
      'apple bin storage',
      'potato box storage',
      'forced air cooling bins',
    ],
  },
  structuredData: { article: true },
};
