import type { MachineryContent } from '@/types/content';

export const thresher: MachineryContent = {
  id: 'machinery-thresher',
  slug: 'thresher',
  contentType: 'machinery',
  title: 'Thresher',
  alternativeNames: ['Threshing machine'],
  category: 'Agricultural machinery',
  subcategory: 'Threshing equipment',
  machineryClass: 'harvest',
  summary:
    'A thresher separates grain from the stalks, heads, or pods of a harvested crop, typically also winnowing away chaff and light debris, and is used as a stand-alone machine where cutting and threshing are not combined in a single harvester pass.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A thresher performs the specific task of separating grain from the plant material that surrounds it — straw, husks, or pods — by beating, rubbing, or impact action that dislodges grain without excessive damage. Many threshers also incorporate a winnowing step, using an airflow to blow away lighter chaff and debris while allowing the heavier grain to fall through and be collected separately.',
    },
    {
      type: 'paragraph',
      text: 'Before the combine harvester integrated cutting, threshing, and cleaning into one machine, threshing was typically a separate operation: crops were cut and gathered first, then fed into a stationary or mobile thresher. Stand-alone threshers remain widely used today, particularly in smallholder systems and for crops or regions where combine harvesters are not practical or available.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Separating grain from straw, husks, or pods, often with winnowing',
    },
    {
      label: 'Key components',
      value:
        'Feeding mechanism, threshing drum/cylinder, and winnowing/cleaning section',
    },
    {
      label: 'Common crops',
      value: 'Wheat, rice, sorghum, and various pulses and oilseeds',
    },
    {
      label: 'Common configurations',
      value: 'Stationary (belt- or PTO-driven) and mobile threshers',
    },
    {
      label: 'Relationship to combines',
      value:
        'Threshing is one of several functions integrated into a combine harvester',
    },
    {
      label: 'Operating consideration',
      value:
        'Cylinder speed and concave clearance are set to the crop to limit grain damage',
    },
  ],
  sections: [
    {
      id: 'what-a-thresher-is',
      heading: 'What a thresher is',
      body: [
        {
          type: 'paragraph',
          text: 'A thresher is defined by its single core function — separating grain from the rest of the harvested plant material — distinguishing it from combine harvesters, which also cut the standing crop, and from cleaning or grading equipment used further down the post-harvest chain.',
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
            'Cut crop material (sheaves, bundles, or loose material) is fed into the machine',
            'A rotating cylinder or drum, often fitted with rasp bars, pegs, or beater arms, strikes and rubs the material to dislodge grain',
            'Straw and larger residue are separated and ejected',
            'A fan or sieve system winnows lighter chaff away from the heavier grain',
            'Cleaned grain is collected, often into sacks or a holding bin',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Threshing sits between cutting/reaping and cleaning or storage in the post-harvest chain, and in systems without combine harvesters it is often the main bottleneck determining how quickly a cut crop can be processed and moved to storage or market. Where crops are cut by hand or with a reaper, a separate thresher allows this labour-intensive step to be mechanised even without investing in a full combine harvester.',
        },
        {
          type: 'paragraph',
          text: 'Efficient threshing minimises grain loss (ungathered or damaged grain) and grain damage (cracked or broken kernels), both of which affect the marketable and storable value of the harvest.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Stationary thresher',
              description:
                'Fixed in place and fed with cut crop material brought to it, often powered by a tractor PTO or belt drive.',
            },
            {
              term: 'Mobile/pull-type thresher',
              description:
                'Can be moved between fields or farms, sometimes self-propelled.',
            },
            {
              term: 'Multi-crop thresher',
              description:
                'Adjustable settings allow the same machine to thresh several different crops.',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Cylinder speed, concave clearance, and feed rate must be matched to the crop and its moisture content; settings that are too aggressive increase grain cracking and damage, while settings that are too gentle leave grain unthreshed or increase losses. Dust and chaff generated during threshing also require attention to operator safety and equipment maintenance.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Optimal threshing settings are crop-, variety-, and moisture-specific; manufacturer guidance and local agronomic advice should inform adjustments rather than a fixed setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  geographicScope:
    'General overview of threshers as used in cereal and pulse harvesting worldwide. Scale and role alongside combine harvesters vary by region and farm size.',
  limitations: [
    'This entry describes thresher function and types in general terms; it does not specify cylinder speeds or clearances, which are crop- and machine-specific.',
    'Grain loss and damage rates depend on crop condition, moisture, and machine settings not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Threshing mechanics and grain-damage avoidance',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest grain handling research context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Cereal harvesting and threshing guidance context',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Role of threshing equipment in smallholder and mechanised harvesting',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Thresher',
    description:
      'Threshers explained: how rotating cylinders and winnowing separate grain from straw and chaff, their post-harvest role, and stationary and mobile types.',
    keywords: [
      'thresher',
      'threshing machine',
      'grain separation',
      'post-harvest equipment',
    ],
  },
  structuredData: { article: true },
};
