import type { MachineryContent } from '@/types/content';

export const potatoHarvester: MachineryContent = {
  id: 'machinery-potato-harvester',
  slug: 'potato-harvester',
  contentType: 'machinery',
  title: 'Potato Harvester',
  alternativeNames: ['Potato digger', 'Potato lifter'],
  category: 'Agricultural machinery',
  subcategory: 'Root-crop harvesting equipment',
  machineryClass: 'harvest',
  summary:
    'A potato harvester lifts potato tubers from the soil ridge, separates them from soil, haulm, stones, and clods on a series of conveyors, and collects the cleaned crop into a bunker or trailer.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A potato harvester digs beneath the ridge in which potatoes are grown, lifting the whole mass of soil and tubers onto moving webs or conveyors. As the material travels through the machine, agitation and separation systems shake loose soil through the webs and divert haulm, stones, and clods away from the tubers before the crop is collected.',
    },
    {
      type: 'paragraph',
      text: 'Designs range from simple trailed diggers that place tubers back on the surface for hand or mechanical pickup, to self-propelled multi-row harvesters with onboard bunkers. Gentle handling throughout is a central design goal, because bruising and skin damage reduce quality and storability of the harvested crop.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Lifting and cleaning potato tubers from the ridge',
    },
    {
      label: 'Working sequence',
      value:
        'Digging share lifts the ridge; webs and separators remove soil, haulm, and stones',
    },
    {
      label: 'Key design goal',
      value: 'Gentle handling to limit bruising and skin damage',
    },
    {
      label: 'Configurations',
      value:
        'Trailed diggers through to self-propelled multi-row harvesters with bunkers',
    },
    {
      label: 'Separation challenge',
      value: 'Distinguishing tubers from stones and clods of similar size',
    },
    {
      label: 'Downstream link',
      value:
        'Harvested tubers move to grading and, commonly, controlled storage',
    },
  ],
  sections: [
    {
      id: 'what-a-potato-harvester-is',
      heading: 'What a potato harvester is',
      body: [
        {
          type: 'paragraph',
          text: 'A potato harvester is a machine that mechanises the lifting and cleaning of a below-ground root crop grown in ridges. It replaces the labour-intensive sequence of digging and hand-gathering, taking the crop from the field ridge to a collected, largely soil-free load in a continuous operation.',
        },
        {
          type: 'paragraph',
          text: 'A key difficulty specific to potatoes is separating tubers from stones and hard soil clods of similar size and weight, which is why harvesters carry dedicated separation systems and, in stony conditions, may be paired with earlier destoning of the beds.',
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
            'A digging share runs beneath the ridge, lifting soil and tubers together',
            'Primary and secondary webs carry the mass rearward while shaking loose soil through the bars',
            'Haulm-separation and stone/clod-separation units divert unwanted material away from the tubers',
            'Workers on a picking table or automated sensors remove remaining debris and defective tubers',
            'Cleaned tubers are elevated into an onboard bunker or an accompanying trailer',
          ],
        },
      ],
    },
    {
      id: 'protecting-tuber-quality',
      heading: 'Protecting tuber quality',
      body: [
        {
          type: 'paragraph',
          text: 'Because potatoes bruise internally and their skins are easily scuffed, harvesters are designed to minimise drop heights and cushion transfers between webs. Harvesting at an appropriate soil temperature and tuber maturity, and avoiding very wet or very dry conditions, all influence how well the crop comes through the machine.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Harvesting too cold, too hot, or into wet soil raises the risk of bruising, skin damage, or excess soil carried through — all of which affect storability and market quality.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Web speeds, agitation intensity, and separator settings are adjusted to soil type, stoniness, and crop condition to balance thorough cleaning against gentle handling. As with other heavy harvest machinery, repeated field traffic can contribute to soil compaction, particularly in the wetter conditions that often accompany late-season root harvest.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Machine settings and suitable harvest conditions vary with variety, soil, and region; this entry does not prescribe specific settings.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'machinery', slug: 'tractor' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'plant-disease', slug: 'common-scab' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'General overview of potato harvesters as used in mechanised potato production worldwide. Configuration and settings are adapted to local soils, stoniness, and varieties.',
  limitations: [
    'This entry describes potato-harvester function in general terms; it does not prescribe web speeds, separator settings, or harvest-temperature targets, which are variety- and site-specific.',
    'Bruising and damage rates depend on machine setup, soil, and crop condition, and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Potato harvesting, handling, and quality management',
    },
    { sourceId: 'fao', citedFor: 'Mechanised root-crop harvest context' },
    { sourceId: 'usda-nass', citedFor: 'Potato harvest statistics context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Potato Harvester',
    description:
      'Potato harvesters explained: how they lift tubers, separate soil, haulm, and stones, and protect tuber quality for grading and storage.',
    keywords: [
      'potato harvester',
      'potato digger',
      'root crop harvest',
      'tuber handling',
    ],
  },
  structuredData: { article: true },
};
