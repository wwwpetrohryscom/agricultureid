import type { MachineryContent } from '@/types/content';

export const sugarcaneHarvester: MachineryContent = {
  id: 'machinery-sugarcane-harvester',
  slug: 'sugarcane-harvester',
  contentType: 'machinery',
  title: 'Sugarcane Harvester',
  alternativeNames: ['Cane harvester', 'Chopper harvester'],
  category: 'Agricultural machinery',
  subcategory: 'Specialty harvesting equipment',
  machineryClass: 'harvest',
  summary:
    'A sugarcane harvester is a self-propelled machine that cuts standing cane at the base, removes tops and leafy trash, cuts the stalks into short billets, and loads the clean cane into an accompanying haul-out for transport to the mill.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A mechanical sugarcane harvester, usually of the chopper type, gathers standing cane, severs it at ground level with a base cutter, and feeds the stalks through the machine where they are topped, cleaned of leafy trash by extractor fans, and chopped into short lengths called billets. The billets are elevated and discharged into a haul-out vehicle travelling alongside.',
    },
    {
      type: 'paragraph',
      text: 'Mechanised harvest has largely replaced manual cutting in many large cane-growing regions and is closely associated with green-cane harvesting, where the crop is cut unburned and the separated leafy residue is returned to the field as a protective trash blanket rather than burned off before harvest.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Cutting, cleaning, and billeting standing sugarcane',
    },
    {
      label: 'Key components',
      value:
        'Base cutter, topper, feed rollers, chopper drum, extractor fans, and elevator',
    },
    {
      label: 'Output form',
      value: 'Short stalk sections (billets) rather than whole stalks',
    },
    {
      label: 'Trash handling',
      value:
        'Extractor fans separate leafy trash; green-cane harvest leaves it as a field blanket',
    },
    {
      label: 'Logistics',
      value:
        'Requires a haul-out running alongside to receive billets on the move',
    },
    {
      label: 'Timeliness',
      value:
        'Cut cane deteriorates in sugar quality, so prompt delivery to the mill matters',
    },
  ],
  sections: [
    {
      id: 'what-a-sugarcane-harvester-is',
      heading: 'What a sugarcane harvester is',
      body: [
        {
          type: 'paragraph',
          text: 'A sugarcane harvester is a specialised machine for a tall, high-biomass row crop that is grown as a perennial and ratooned (regrown from the stubble) over several harvests. The dominant modern design, the chopper harvester, converts standing cane directly into clean billets ready for milling, integrating cutting, cleaning, and size reduction in one pass.',
        },
        {
          type: 'paragraph',
          text: 'This contrasts with whole-stalk harvesters, which cut and lay cane in windrows for separate loading, and with manual harvesting. Chopper harvesters suit continuous, high-throughput operations feeding a mill.',
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
            'Crop dividers and knockdown rollers gather and lean the standing cane into the machine',
            'A base cutter severs the stalks near ground level without damaging the ratoon stubble',
            'Feed rollers draw the stalks in while a topper removes the leafy growing tops',
            'A chopper drum cuts the stalks into short billets',
            'Extractor fans blow leafy trash clear, and an elevator loads clean billets into a haul-out',
          ],
        },
      ],
    },
    {
      id: 'green-cane-harvest-and-residue',
      heading: 'Green-cane harvest and residue',
      body: [
        {
          type: 'paragraph',
          text: 'Mechanical harvesting enables green-cane systems in which the crop is not burned before cutting. The leafy trash separated during harvest can be retained on the field as a residue blanket that helps conserve soil moisture, suppress weeds, and return organic matter, in contrast to pre-harvest burning.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Setting the base cutter too low or harvesting in wet conditions can damage the ratoon stubble and compact the soil, affecting regrowth of the next crop. Base-cutter height and field conditions are managed carefully.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because cut cane loses sugar quality over time, harvest is coordinated closely with milling and transport logistics. Machine settings — base-cutter height, fan speed, and billet length — balance clean cane against field losses and stubble protection, and the weight of the harvester and haul-out makes soil compaction a management concern.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Settings and suitable harvest conditions vary with variety, row configuration, soil, and region; this entry does not prescribe specific values.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'machinery', slug: 'tractor' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['perennial-crop', 'yield'],
  geographicScope:
    'General overview of mechanical sugarcane harvesters as used in large cane-producing regions worldwide. Configurations and practices are adapted to local varieties, row spacing, and terrain.',
  limitations: [
    'This entry describes sugarcane-harvester function in general terms; it does not prescribe base-cutter heights, billet lengths, or fan speeds, which are variety- and site-specific.',
    'Field losses, stubble damage, and trash retention depend on machine setup, terrain, and conditions, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Mechanised sugarcane harvest and residue management context',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Sugarcane production and green-cane harvesting research',
    },
    {
      sourceId: 'icar',
      citedFor: 'Sugarcane cultivation and mechanisation context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Sugarcane Harvester',
    description:
      'Sugarcane harvesters explained: how chopper machines cut, top, clean, and billet cane, enable green-cane harvest, and protect the ratoon.',
    keywords: [
      'sugarcane harvester',
      'chopper harvester',
      'green cane harvest',
      'cane billets',
    ],
  },
  structuredData: { article: true },
};
