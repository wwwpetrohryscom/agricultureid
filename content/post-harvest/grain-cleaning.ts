import type { PostHarvestContent } from '@/types/content';

export const grainCleaning: PostHarvestContent = {
  id: 'post-harvest-grain-cleaning',
  slug: 'grain-cleaning',
  contentType: 'post-harvest',
  title: 'Grain Cleaning',
  postHarvestClass: 'handling',
  alternativeNames: ['Grain conditioning', 'Winnowing and screening'],
  category: 'Post-harvest operation',
  subcategory: 'Handling & conditioning',
  summary:
    'Grain cleaning removes chaff, dust, straw, weed seeds, broken grain, and other foreign matter from harvested grain, improving storage stability, quality, market grade, and the performance of drying and milling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grain cleaning is the separation of sound grain from the unwanted material that comes with it after threshing — chaff, dust, bits of straw, weed seeds, soil, stones, and broken or shrivelled grain. Even well-harvested grain arrives mixed with this foreign matter, and removing it is one of the first conditioning steps before drying, storage, and sale.',
    },
    {
      type: 'paragraph',
      text: 'Cleaning matters for more than appearance. Fine material and broken grain hold moisture and provide food and shelter for storage insects and moulds, so dirty grain is harder to dry evenly and less stable in store. Foreign matter and weed seeds also lower the market grade, and some contaminants must be removed for food safety. Cleaning uses differences in size, weight, and aerodynamic properties to make these separations.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Remove chaff, dust, straw, weed seeds, and broken grain',
    },
    {
      label: 'Separates by',
      value: 'Differences in size, weight, and aerodynamic properties',
    },
    {
      label: 'Improves',
      value: 'Storage stability, drying uniformity, quality, and market grade',
    },
    {
      label: 'Common tools',
      value: 'Winnowing, screens and sieves, and aspiration (air) cleaners',
    },
    {
      label: 'Storage benefit',
      value:
        'Removing fines and broken grain reduces insect and mould harbourage',
    },
    {
      label: 'When done',
      value: 'After threshing, and often again before storage or sale',
    },
  ],
  sections: [
    {
      id: 'why-clean',
      heading: 'Why grain is cleaned',
      body: [
        {
          type: 'paragraph',
          text: 'Foreign matter left in a grain bulk causes several problems. Fine dust and broken kernels pack together, impede airflow, and hold moisture, making the grain harder to dry uniformly and more prone to hot spots. Chaff, weed seeds, and broken grain are also preferred food and shelter for storage insects and moulds, so cleaner grain stores more safely. Finally, buyers pay by grade, and excessive foreign matter, weed seeds, or damaged grain reduces the grade and price.',
        },
        {
          type: 'paragraph',
          text: 'Cleaning also supports later processing: mills and seed plants need grain free of stones and contaminants, and clean grain gives better milling and germination results.',
        },
      ],
    },
    {
      id: 'methods',
      heading: 'Cleaning methods',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Winnowing',
              description:
                'Grain is dropped or tossed in a current of air or wind so that lighter chaff and dust are carried away while heavier grain falls; a simple, widely used traditional method.',
            },
            {
              term: 'Screening and sieving',
              description:
                'Grain passes over screens with openings sized to retain grain while letting smaller material through, or to hold back larger straw and stones.',
            },
            {
              term: 'Aspiration',
              description:
                'A controlled airstream lifts light material away from the grain, often combined with screens in a single cleaning machine.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'These principles are combined in machines ranging from hand-operated cleaners to large air-screen units and, for seed, more precise graders. Larger combines and cleaning plants integrate screens and aspiration to clean grain as it is handled.',
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
            'Clean grain before drying and storage to improve airflow and reduce insect and mould harbourage.',
            'Match screen sizes to the grain so sound kernels are retained and foreign matter removed.',
            'Manage dust safely, since grain dust is a health and explosion hazard.',
            'Remove weed seeds and contaminants that lower grade or affect food safety.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Grain dust hazard',
          text: 'Cleaning generates dust that is a respiratory hazard and, in confined handling systems, an explosion risk; use appropriate dust control and follow safety guidance.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Grain cleaning in post-harvest handling systems',
    },
    { sourceId: 'ahdb', citedFor: 'Grain cleaning and conditioning guidance' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Grain cleaning and stored-grain quality research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Methods range from hand winnowing to mechanised air-screen cleaners according to scale.',
  limitations: [
    'Cleaning removes foreign matter but does not reduce grain moisture or replace drying and correct storage.',
    'Achievable purity depends on the equipment and the properties of the grain and contaminants.',
    'Grain dust generated during cleaning is a health and explosion hazard that requires appropriate controls.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Cleaning: Removing Chaff and Foreign Matter',
    description:
      'How grain cleaning removes chaff, dust, weed seeds, and broken grain by size, weight, and air — winnowing, screens, and aspiration for safer storage and grade.',
    keywords: [
      'grain cleaning',
      'winnowing',
      'grain screening',
      'aspiration cleaning',
      'foreign matter grain',
    ],
  },
  structuredData: { article: true },
};
