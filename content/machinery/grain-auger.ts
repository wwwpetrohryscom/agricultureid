import type { MachineryContent } from '@/types/content';

export const grainAuger: MachineryContent = {
  id: 'machinery-grain-auger',
  slug: 'grain-auger',
  contentType: 'machinery',
  title: 'Grain Auger',
  alternativeNames: ['Portable grain auger', 'Screw conveyor'],
  category: 'Agricultural machinery',
  subcategory: 'Grain-handling equipment',
  machineryClass: 'harvest',
  summary:
    'A grain auger is a portable screw conveyor that moves free-flowing grain along an inclined tube, used to load and unload storage bins, trucks, and carts during and after harvest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A grain auger consists of a helical screw (flighting) turning inside a tube. As the screw rotates, it carries grain up the tube from an intake hopper at the lower end to a discharge spout at the top, allowing grain to be elevated into a storage bin, truck, or grain cart. Augers are a mainstay of on-farm grain handling because they are portable, relatively simple, and available in a range of lengths and capacities.',
    },
    {
      type: 'paragraph',
      text: 'They are typically powered by a tractor PTO or an electric motor, and are set at an incline between the source and the receiving structure. Because they handle large volumes of grain and have exposed rotating and drive components, grain augers are also a well-recognised source of serious injury risk, and safe operation is a central concern.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Conveying and elevating free-flowing grain',
    },
    {
      label: 'Working principle',
      value: 'A rotating helical screw carries grain up an inclined tube',
    },
    {
      label: 'Typical uses',
      value: 'Filling and emptying storage bins, trucks, and grain carts',
    },
    {
      label: 'Power source',
      value: 'Tractor PTO or electric motor',
    },
    {
      label: 'Gentle-handling note',
      value:
        'Auger speed and fill affect grain damage and cracking of some grains',
    },
    {
      label: 'Safety',
      value:
        'Exposed intake and drivelines make guarding and safe operation essential',
    },
  ],
  sections: [
    {
      id: 'what-a-grain-auger-is',
      heading: 'What a grain auger is',
      body: [
        {
          type: 'paragraph',
          text: 'A grain auger is a screw-type conveyor dedicated to moving dry, free-flowing grain and oilseeds. It bridges the steps between combine, transport, drying, and storage — for example transferring grain from a truck up into a storage bin, or drawing grain back out of a bin for loading and sale.',
        },
        {
          type: 'paragraph',
          text: 'Augers vary in tube diameter, length, and drive, which together determine reach, incline, and throughput. Related handling equipment includes belt conveyors and pneumatic systems, which handle grain more gently but are generally more costly than a simple auger.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Grain flows into a hopper at the lower intake end of the auger',
            'A helical screw inside the tube, driven by PTO or motor, rotates continuously',
            'The turning flighting carries grain up the inclined tube',
            'Grain discharges through a spout into a bin, truck, or cart at the upper end',
            'The auger is repositioned and its angle adjusted to reach different structures',
          ],
        },
      ],
    },
    {
      id: 'role-in-grain-handling',
      heading: 'Role in grain handling',
      body: [
        {
          type: 'paragraph',
          text: 'The grain auger is a link in the post-harvest handling chain that connects harvest, drying, and storage. Its capacity often influences how quickly grain can be moved into store at harvest peak, and augers are used again later to reclaim grain for drying, blending, or outloading.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Running an auger under-filled or at high speed can increase mechanical damage to some grains; matching throughput to the grain and receiving system helps limit cracking and breakage.',
        },
      ],
    },
    {
      id: 'safety-and-operation',
      heading: 'Safety and operation',
      body: [
        {
          type: 'paragraph',
          text: 'Grain augers are associated with serious entanglement and electrocution hazards: the exposed intake, rotating flighting, and drivelines can catch clothing or limbs, and tall augers raised near power lines pose an electrocution risk. Guarding, shutting off and locking out power before clearing blockages, and keeping clear of the intake are core safety practices.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not substitute for equipment-specific safety instructions. Follow the manufacturer’s guarding, operation, and lockout guidance for the specific auger in use.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  connections: [
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'tractor' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
  ],
  geographicScope:
    'General overview of portable grain augers as used in on-farm grain handling worldwide. Sizing and configuration are adapted to local storage, crops, and logistics.',
  limitations: [
    'This entry describes grain-auger function and safety in general terms; it does not give capacities, speeds, or sizing, which are equipment- and grain-specific.',
    'Grain-damage rates depend on grain type, moisture, auger speed, and fill, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Grain-handling equipment and auger safety guidance',
    },
    { sourceId: 'fao', citedFor: 'Post-harvest grain handling context' },
    {
      sourceId: 'ahdb',
      citedFor: 'On-farm grain storage and handling practice',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Grain Auger',
    description:
      'Grain augers explained: how a helical screw conveyor elevates grain into and out of storage, its role in handling, and key safety concerns.',
    keywords: [
      'grain auger',
      'screw conveyor',
      'grain handling',
      'auger safety',
    ],
  },
  structuredData: { article: true },
};
