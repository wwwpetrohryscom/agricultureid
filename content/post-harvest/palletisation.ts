import type { PostHarvestContent } from '@/types/content';

export const palletisation: PostHarvestContent = {
  id: 'post-harvest-palletisation',
  slug: 'palletisation',
  contentType: 'post-harvest',
  title: 'Palletisation',
  postHarvestClass: 'handling',
  processStage: 'transport',
  alternativeNames: [
    'Palletization',
    'Unit load',
    'Pallet stacking',
    'Pallet pattern',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'Palletisation turns many packages into one unit load that a machine can move. It is the layer of packaging most likely to be treated as a formality, and the one that most reliably decides whether the packages beneath it survive and whether cooling air reaches the middle.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Palletisation is the assembly of individual packages onto a pallet to form a single unit load, secured well enough to be handled, stacked, and transported as one object. It is what makes mechanised distribution possible: a forklift moves a pallet in seconds, where the same goods loose would take a person an afternoon. Every carton, crate, and sack discussed as a package is, in practice, a component of a pallet for most of its journey.',
    },
    {
      type: 'paragraph',
      text: "It is also where a chain's packaging decisions are silently overruled. A carton is specified for a stack height, a vent pattern, and a load path; the pallet pattern decides whether it gets any of them. Stack the boxes so their corners do not align and the compression strength that was designed and paid for is simply not present. Stack them so their vents face solid panels and the cooling system, however well specified, moves air around a sealed block. The pallet is not a passive platform: it is the operation that determines whether everything below it works.",
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'Assembling packages into one mechanically handleable unit load',
    },
    {
      label: 'Why it exists',
      value: 'One machine movement replaces many manual ones',
    },
    {
      label: 'Structural rule',
      value:
        'Load travels down through package corners; misalignment destroys the strength',
    },
    {
      label: 'Cooling rule',
      value:
        'Vents must line up through the whole stack, or the pallet cools as a solid block',
    },
    {
      label: 'The tension',
      value:
        'Interlocking patterns are stable but break the vertical corner path',
    },
    {
      label: 'Overhang',
      value:
        'A package overhanging the pallet edge loses a large share of its strength',
    },
    {
      label: 'Pallets in trade',
      value:
        'Wooden pallets face plant-health treatment rules when crossing borders',
    },
  ],
  sections: [
    {
      id: 'the-column-argument',
      heading:
        'Columns are strong; interlocking is stable; you cannot have both',
      body: [
        {
          type: 'paragraph',
          text: 'There are two ways to stack boxes, and they are in direct opposition. Column stacking places each box squarely on the one below, corner over corner, so load runs straight down through the strongest parts of every package to the pallet. It preserves nearly all the compression strength the cartons have. It is also unstable: nothing ties one layer to the next, and the stack relies entirely on external securing to stop it shearing apart.',
        },
        {
          type: 'paragraph',
          text: "Interlocking, or brick, stacking rotates alternate layers so boxes bridge across the joints below, tying the stack together. It is far more stable and it is what a person unfamiliar with the problem naturally does. It is also structurally destructive: a box whose corners land in the middle of the panels below has nothing under its corners. The corner load goes into an unsupported span, panels deflect, and a substantial share of the stack's theoretical strength is thrown away — often a very large share.",
        },
        {
          type: 'paragraph',
          text: 'So palletisation is a real trade rather than a best practice: column for strength and secure it externally, or interlock for stability and specify heavier packaging to survive it. Both answers are defensible. What is not defensible, and is extremely common, is interlocking a stack of cartons specified on the assumption of column stacking, and then discovering the failure at the destination.',
        },
      ],
    },
    {
      id: 'the-airflow-argument',
      heading: 'A pallet can cancel the cold chain',
      body: [
        {
          type: 'paragraph',
          text: "Forced-air cooling depends on a continuous path for air from one side of the pallet to the other, and that path exists only if the vents of every package line up with the vents of its neighbours, layer after layer, all the way through. Air takes the easiest route available: offer it a gap around the outside of the pallet and it will go there rather than through the resistance of a fruit-filled box. The result is a pallet whose outer cartons cool nicely and whose centre stays at field temperature for days, while the store's instruments report that the room is at temperature and everything is fine.",
        },
        {
          type: 'paragraph',
          text: 'This is where the interlocking decision does its second piece of damage. Rotating alternate layers rotates their vents too, so a pattern chosen for stability blocks the vertical and horizontal air paths almost by definition. It also makes the failure invisible: nothing about the outside of the pallet indicates that its middle is warm. Add a pallet wrapped tightly in unperforated stretch film — applied for stability, as a separate and reasonable decision — and the block is sealed on all four sides. Two individually sensible choices, made by different people for different reasons, combine into a pallet that cannot be cooled at all.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The pallet decides whether cooling happens',
          text: "Vent alignment and wrapping determine whether air can move through a unit load. A pallet whose vents are misaligned, or which is sealed in unperforated film, cools only at its surface regardless of the cooling system's capacity or the vent area designed into the cartons. Room temperature readings will not reveal this.",
        },
      ],
    },
    {
      id: 'the-details-that-decide-it',
      heading: 'The details that decide whether it holds',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Overhang',
              description:
                'A package projecting past the pallet edge has no support under its outer corners, and the strength lost is out of all proportion to the small overhang that causes it. Underhang — a footprint smaller than the pallet — wastes space but is structurally harmless.',
            },
            {
              term: 'Pallet condition and deck gaps',
              description:
                'A package spanning a gap between deck boards is unsupported where it most needs support. Broken boards, protruding nails, and warped pallets damage the bottom layer and destabilise everything above it.',
            },
            {
              term: 'Securing',
              description:
                'Stretch film, strapping, corner boards, and adhesives hold the unit together, and each does something different. Film resists shear and does nothing for compression; corner boards carry vertical load and can restore some of what the pattern took away.',
            },
            {
              term: 'Layer pads and slip sheets',
              description:
                'Sheets between layers spread load across the packages below and stop boxes settling into the gaps between the boxes beneath, which is a common route to progressive collapse.',
            },
            {
              term: 'Load height and centre of gravity',
              description:
                'Tall pallets are more prone to toppling in handling and cornering, and a heavy layer high in the load makes it worse. Stability in motion is a different problem from stability at rest.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-pallet-itself',
      heading: 'The pallet is also a border problem',
      body: [
        {
          type: 'paragraph',
          text: 'The platform itself carries obligations that have nothing to do with the produce. Wooden pallets are solid-wood packaging material, and in international trade they are subject to plant-health treatment and marking requirements, because timber carries forest pests between continents. A consignment can be stopped at a border because of the pallet under it. Plastic and pressed-composite pallets avoid that entirely, which is a substantial part of why they exist despite costing more.',
        },
        {
          type: 'paragraph',
          text: "Pallets are also pooled and exchanged, which makes them a returnable-packaging system with all the properties that implies: they must come back, they need repair, they are lost, and they are quietly repurposed. A pooled standard footprint is what allows a pallet to travel through many parties' equipment at all — and it means the pallet's dimensions, not the produce's, set the geometry that cartons and crates must fit. The package sizes seen throughout the produce trade are largely a consequence of what divides neatly into a pallet footprint.",
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'nut',
    'root-tuber',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  measurableInputs: [
    'Stacking pattern: column, interlocked, or mixed',
    'Overhang or underhang against the pallet footprint',
    'Vent alignment through the load',
    'Securing method: film type and perforation, strapping, corner boards',
    'Load height and total mass',
    'Pallet type, condition, and plant-health treatment status',
  ],
  measurableOutputs: [
    'Compression strength retained by the load compared with column stacking',
    'Airflow and cooling rate achieved at the centre of the pallet',
    'Pulp temperature difference between the outside and the centre of the load',
    'Load failures, shifts, and topples in transit',
    'Produce damage in the bottom layers',
  ],
  qualityEffects: [
    'Determines whether packages retain the compression strength they were specified for',
    'Determines whether cooling air reaches the centre of the load at all',
    'Prevents handling damage by replacing many manual movements with one machine movement',
    'Progressive settling under an interlocked or misaligned pattern crushes the lower layers',
    'Overhang and deck gaps concentrate damage in the bottom-layer packages',
  ],
  environmentalContext:
    'Palletisation is the reason long produce chains are economically possible at all, and its efficiency is largely invisible because it is upstream of everything. Pallets are themselves a returnable system with pooling, repair, and loss, and wooden pallets in international trade carry plant-health treatment obligations. The standard pallet footprint has quietly shaped agricultural packaging worldwide: package dimensions across the produce trade are chosen mainly because they divide into a pallet.',
  safetyLimitations: [
    "Unstable, overloaded, or poorly secured unit loads topple and collapse, and are a serious injury hazard in handling and transport; load stability, height limits, and securing are governed by occupational-safety and transport regulation and the operator's own risk assessment.",
    'Wooden pallets used in international trade are subject to plant-health treatment and marking requirements set by the applicable international standard and national plant-health authorities; a non-compliant pallet can cause a consignment to be refused.',
    'No stacking pattern, load height, overhang tolerance, securing specification, or vent alignment requirement is given here; these are set by packaging specification, buyer requirement, and transport regulation.',
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Unit-load stacking, package compression, and airflow through palletised produce',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Unit loads and handling in post-harvest distribution, and wood packaging treatment',
    },
    {
      sourceId: 'eppo',
      citedFor: 'Wood packaging material as a plant-pest pathway',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Produce handling and cooling of palletised loads',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global in mechanised distribution. Pallet footprints, pooling arrangements, and plant-health rules for wooden pallets are set regionally and nationally and differ between markets.',
  limitations: [
    'No stacking pattern, load height, overhang tolerance, securing specification, or pallet standard is given here; these are set by packaging specification, buyer requirement, and transport regulation.',
    'Column and interlocked stacking are a genuine trade between strength and stability; neither is correct in general, and the right answer depends on the packaging specification and the securing available.',
    'A pallet can nullify the packaging and cooling decisions made upstream of it, and the resulting failure is invisible from outside the load and absent from room temperature records.',
    'Plant-health obligations attach to the wooden pallet itself, independently of the produce, and can stop an otherwise compliant consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Palletisation: The Layer That Overrules the Rest',
    description:
      'Column versus interlocked stacking trades strength against stability, misaligned vents cancel forced-air cooling, and overhang quietly destroys carton strength.',
    keywords: [
      'palletisation',
      'unit load',
      'column stacking',
      'pallet vent alignment',
      'stack stability',
    ],
  },
  structuredData: { article: true },
};
