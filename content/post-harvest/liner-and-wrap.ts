import type { PostHarvestContent } from '@/types/content';

export const linerAndWrap: PostHarvestContent = {
  id: 'post-harvest-liner-and-wrap',
  slug: 'liner-and-wrap',
  contentType: 'post-harvest',
  title: 'Liners and Wraps',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'Box liner',
    'Polyliner',
    'Pallet shroud',
    'Fruit wrap',
    'Interleaving sheet',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'A liner is the layer inside the package: film, paper, or pad that manages moisture and contact while the container carries the load. Put a film around respiring produce and you have modified its atmosphere — whether or not you meant to.',
  introduction: [
    {
      type: 'paragraph',
      text: "Liners and wraps are the packaging inside the packaging — a polyethylene bag inside a carton, a shroud over a pallet, tissue around each fruit, sheets between layers, an absorbent pad under a punnet's contents. They exist because of a division of labour that runs through the whole of produce packaging: the outer container is a structural object that carries load and takes impacts, and it is bad at managing moisture and contact. The liner does the second job and carries nothing.",
    },
    {
      type: 'paragraph',
      text: 'This division is why liners appear wherever an otherwise good container has a microenvironment problem. A wooden crate is strong and porous, so it is lined to keep the produce off the wood. A fibreboard carton is structural and permeable, so it is lined when water loss must be restricted. A bulk bag holds a tonne and cannot seal, so it is lined when a barrier is needed. In each case the liner is not an accessory: it is the component that makes the container usable for that commodity, and the container without it would be the wrong package.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A non-structural inner layer: film, paper, pad, or wrap',
    },
    {
      label: 'Division of labour',
      value:
        'The container carries the load; the liner manages moisture and contact',
    },
    {
      label: 'Main benefit',
      value:
        'Restricting water loss, which is the largest cause of lost weight and shrivel',
    },
    {
      label: 'The unintended consequence',
      value:
        'Any film around respiring produce modifies the atmosphere inside it',
    },
    {
      label: 'Relationship to MAP',
      value:
        'MAP is this effect engineered on purpose; an ordinary liner is it happening by accident',
    },
    {
      label: 'Cooling conflict',
      value: 'A liner blocks the airflow the pack was vented to provide',
    },
    {
      label: 'Recycling cost',
      value: 'It makes a single-material package into a mixed-material one',
    },
  ],
  sections: [
    {
      id: 'accidental-map',
      heading: 'Every liner is an atmosphere decision, made or not',
      body: [
        {
          type: 'paragraph',
          text: "This is the point of the entry, and it is the one that is most often missed. Produce respires: it takes up oxygen and gives off carbon dioxide, continuously, for as long as it is alive. Put a film around it and gas exchange with the outside is restricted. Oxygen inside falls, carbon dioxide rises, and it goes on doing so until either the film's permeability lets gases through as fast as the produce is consuming and producing them, or the produce runs out of oxygen. There is no third option, and nothing about this requires the packer to have intended it.",
        },
        {
          type: 'paragraph',
          text: "So the distinction between a liner and modified atmosphere packaging is not one of physics. It is one of intent, specification, and validation. Modified atmosphere packaging is this same effect designed: a film whose permeability is matched to the commodity's respiration rate at the temperature it will be held at, so that the atmosphere settles at a composition chosen to slow deterioration and stays there. A plain polyethylene liner folded over a carton of the same produce does the same thing without any of that — the composition it reaches is whatever the accident of film area, produce mass, and temperature happens to produce.",
        },
        {
          type: 'paragraph',
          text: 'Sometimes the accident is benign or even useful. Polyethylene liners in banana cartons are a long-standing case where a simple film restricts water loss and creates a mild atmosphere effect that helps hold fruit unripe in transit. Sometimes it is not. If the film restricts too much, or the load gets warm and respiration accelerates past what the film can pass, the produce exhausts its oxygen and switches to anaerobic metabolism — accumulating ethanol and acetaldehyde and developing off-flavours and internal breakdown. The failure is the same one that over-heavy waxing causes, arrived at from a different direction, and it is invisible from outside the pack.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'An unspecified liner is an unvalidated atmosphere',
          text: 'Any film enclosing respiring produce changes the gas composition around it. Where that is intended it is modified atmosphere packaging, and the film, the commodity, and the temperature are specified and validated together. Where it is not intended it still happens, and a temperature excursion can drive the pack anaerobic. Reduced-oxygen packaging of fresh produce is also regulated in many jurisdictions, and the regulation does not distinguish between an atmosphere that was designed and one that arose.',
        },
      ],
    },
    {
      id: 'water-loss',
      heading: 'What liners are actually there for',
      body: [
        {
          type: 'paragraph',
          text: 'The reason most liners are specified has nothing to do with atmosphere. It is water. Produce loses water continuously to air that is drier than it is, and that loss is the dominant cause of shrivel, softening, limpness, and lost saleable weight — a loss that is charged directly against the seller, since produce is sold by mass. A film raises the humidity immediately around the produce, so the gradient driving water out of it collapses and the loss largely stops.',
        },
        {
          type: 'paragraph',
          text: 'The immediate consequence is condensation. Raise humidity inside a pack to near saturation and any temperature change puts free water on a surface — on the film, and then on the produce. Free water on produce is what decay organisms need to germinate, so the liner that prevented shrivel has created the conditions for rot. This is why perforated and micro-perforated liners are so common: they are an attempt to hold the humidity high enough to stop water loss while letting enough exchange happen to avoid both saturation and oxygen depletion. The perforation pattern, not the film, is the specification.',
        },
        {
          type: 'paragraph',
          text: 'The other classic use is contact management. A liner between porous wood and fruit stops the wood taking up juice and stops the fruit taking up whatever the wood holds. Interleaving sheets between layers stop a rotting fruit touching its neighbours, which is how contact rots propagate through a packed layer. Individual paper wraps around apples and citrus do all three at once — reduce water loss, cushion, and isolate each fruit from its neighbours so that one breakdown does not become a nest. Wraps have also historically been used as carriers for permitted post-harvest treatments, and what may be carried and at what limits is a matter for the product label and the applicable residue regulation, not for packaging practice.',
        },
      ],
    },
    {
      id: 'the-cooling-conflict',
      heading: 'The liner fights the cooling the carton was vented for',
      body: [
        {
          type: 'paragraph',
          text: 'There is a direct contradiction between lining a package and cooling through it, and it is resolved badly more often than it is resolved well. A carton is vented so that forced air can pass through it and take heat out of the produce. A liner inside that carton is a sheet of film across the path that air was supposed to take. The cartons are vented, the cooler is running, the room is at temperature, and the air is going around the liner rather than through the fruit.',
        },
        {
          type: 'paragraph',
          text: 'The usual resolution is sequence: cool the produce first, and close the liner afterwards, so that the film seals in a commodity that is already cold rather than obstructing the cooling of a warm one. Where the liner must be in place during cooling, it is perforated to give air a path. Both answers work; the failure is doing neither — lining warm produce with an unperforated film and relying on the cold room to fix it. The centre of the load stays warm, respiration continues fast, the oxygen inside the liner is consumed faster than it is replaced, and the two failures compound: a warm anaerobic pack inside a cold store that is working perfectly.',
        },
        {
          type: 'paragraph',
          text: 'Pallet shrouds are the same problem at the largest scale. A film over an entire unit load is excellent at retaining humidity and preventing water loss in storage, and it is a wall against forced-air cooling. The sequence rule applies unchanged: cool, then shroud.',
        },
      ],
    },
    {
      id: 'the-second-material',
      heading: 'The cost of a second material',
      body: [
        {
          type: 'paragraph',
          text: 'A liner adds material to a package that already existed, and it usually adds a different material — film inside board, plastic inside wood. That combination is the standard obstacle to recycling: a fibreboard carton is one of the easiest packages to recycle and a fibreboard carton with a bonded plastic liner may be one of the hardest, because the streams are separate and separating them is manual work nobody is paid for. A loose liner can at least be pulled out; a laminated one usually cannot.',
        },
        {
          type: 'paragraph',
          text: 'This gives liners an unflattering profile in packaging assessments: a small mass of material with a large effect on the recyclability of the much larger package around it. Set against that is the same argument that runs through all produce packaging — water loss and decay prevented mean produce not wasted, and produce wasted carries the whole burden of having grown it. The liner is usually a very small material cost against a real loss avoided. It remains a genuine cost, and the discipline it demands is the same one the whole category demands: use it where the commodity needs it, and not as a default.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'nut', 'cereal-grain'],
  applicableCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'table-grapes' },
  ],
  measurableInputs: [
    'Film material, thickness, and permeability',
    'Perforation pattern and open area, where perforated',
    'Whether the liner is closed before or after cooling',
    'Produce mass enclosed relative to film area',
    'Temperature the pack will be held at, and expected excursions',
  ],
  measurableOutputs: [
    'Water and weight loss over storage compared with an unlined pack',
    'Gas composition inside the pack, where it is specified or monitored',
    'Condensation and free water on the produce surface',
    'Cooling rate achieved through a lined pack',
    'Off-flavour, ethanol accumulation, and internal breakdown as signs of anaerobic conditions',
  ],
  qualityEffects: [
    'Sharply reduces water loss, shrivel, and lost saleable weight',
    'Modifies the atmosphere around respiring produce whether or not that was intended',
    'Creates condensation at high humidity, which favours the decay it was meant to prevent',
    'Isolates units from contact, limiting the spread of rots between touching produce',
    'Blocks the airflow the outer package was vented to allow, unless perforated or closed after cooling',
  ],
  environmentalContext:
    'A liner is a small amount of material with a disproportionate effect on the recyclability of the package around it, turning a single-material container into a mixed-material one — and a bonded liner usually defeats recycling of the outer package entirely. The offsetting argument is the standard one: water loss and decay prevented are produce not wasted, and the burden of wasted produce is much larger than the film. The discipline is to specify liners where the commodity requires them rather than fitting them by habit.',
  safetyLimitations: [
    'Reduced-oxygen packaging of fresh produce is regulated in many jurisdictions, and an atmosphere that arises unintentionally inside an ordinary liner is not treated differently from one that was designed; where an atmosphere is intended it must be specified and validated with the commodity and temperature together.',
    'Wraps and liners have been used as carriers for permitted post-harvest treatments; what may be carried, at what concentration, and to what residue limit is governed by the product label and the applicable regulation, none of which is stated here.',
    'Materials in food contact are subject to jurisdiction-specific food-contact regulation, which applies to films, papers, coatings, pads, and any recycled content.',
    'No film specification, permeability, perforation pattern, or atmosphere target is given here; these are commodity-, temperature-, and duration-specific and are set by validated packaging specifications.',
  ],
  connections: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'broccoli' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Package liners, water loss, and atmosphere modification around respiring produce',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Liners, wraps, and packaging materials in post-harvest handling',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Food-contact materials and reduced-oxygen packaging of fresh produce',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest packaging and water-loss control in fresh produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Food-contact rules, reduced-oxygen packaging regulation, and recycling infrastructure for mixed-material packages are jurisdiction-specific.',
  limitations: [
    'No film material, thickness, permeability, perforation pattern, or atmosphere composition is given here; these are commodity-, temperature-, and duration-specific and belong to validated packaging specifications.',
    'This entry covers liners and wraps generally, including their unintended atmosphere effects; deliberately engineered atmospheres are covered under modified atmosphere packaging and are a different, specified and validated, undertaking.',
    "A liner's benefit is conditional on sequence and perforation: an unperforated liner closed around warm produce obstructs cooling and can drive the pack anaerobic.",
    'Liners are frequently fitted by habit rather than specification, and a liner the commodity does not need adds material, defeats recycling of the outer package, and can cause the harm it was meant to prevent.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Liners and Wraps: Accidental Atmospheres',
    description:
      'Liners manage moisture while the container carries load, but any film around respiring produce modifies its atmosphere, designed or not, and blocks cooling air.',
    keywords: [
      'box liner',
      'polyliner',
      'pallet shroud',
      'fruit wrap',
      'perforated liner',
    ],
  },
  structuredData: { article: true },
};
