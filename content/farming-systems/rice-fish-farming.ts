import type { FarmingSystemContent } from '@/types/content';

export const riceFishFarming: FarmingSystemContent = {
  id: 'farming-system-rice-fish-farming',
  slug: 'rice-fish-farming',
  contentType: 'farming-system',
  title: 'Rice-Fish Farming',
  systemClass: 'integrated',
  alternativeNames: ['Rice-fish culture', 'Integrated rice-fish systems'],
  category: 'Farming system',
  subcategory: 'Integrated crop-aquaculture',
  summary:
    'Rice-fish farming integrates fish or other aquatic animals into flooded rice fields, either at the same time as the rice or in rotation, so that a single field produces both a grain crop and an aquatic protein source while the two components support each other.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice-fish farming is an integrated system in which fish (and sometimes other aquatic animals such as shrimp or ducks) are raised in the flooded environment of a rice field. The fish may be stocked alongside the growing rice (concurrent culture) or reared in the field between or after rice crops (rotational culture), often using a refuge trench or deepened area where they can shelter when water is low.',
    },
    {
      type: 'paragraph',
      text: 'The appeal of the system is that the two enterprises are complementary: the flooded paddy provides habitat and feed for the fish, while the fish contribute to nutrient cycling and can help control weeds, insects, and other pests, adding a valuable source of protein and income from the same land and water. Some long-established rice-fish landscapes are recognised as heritage agricultural systems.',
    },
  ],
  keyFacts: [
    {
      label: 'System type',
      value: 'Integrated rice cropping with aquaculture',
    },
    {
      label: 'Two main forms',
      value:
        'Concurrent culture (fish with the rice) and rotational culture (fish between crops)',
    },
    {
      label: 'Field feature',
      value:
        'A refuge trench or deepened area gives fish shelter when water is shallow',
    },
    {
      label: 'Complementary benefits',
      value:
        'Fish aid pest and weed control and nutrient cycling; the paddy feeds the fish',
    },
    {
      label: 'Outputs',
      value:
        'Both a grain crop and an aquatic protein source from the same field',
    },
    {
      label: 'Management link',
      value:
        'Water and pesticide management must suit both the rice and the fish',
    },
  ],
  sections: [
    {
      id: 'how-the-system-works',
      heading: 'How the system works',
      body: [
        {
          type: 'paragraph',
          text: 'In a rice-fish system, the field is prepared so that it can hold water reliably and, usually, provide a deeper refuge where fish can survive when the main paddy is drained or shallow. Fish are stocked into the flooded field and feed on natural food organisms, weeds, insects, and sometimes supplementary feed, growing alongside or between rice crops until they are harvested with or after the grain.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Concurrent (simultaneous) culture',
              description:
                'Fish are raised in the field at the same time as the standing rice crop.',
            },
            {
              term: 'Rotational culture',
              description:
                'Fish are reared in the field in the period between rice crops or in an alternating sequence with rice.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-the-components-support-each-other',
      heading: 'Why the components support each other',
      body: [
        {
          type: 'list',
          items: [
            'Fish feed on weeds, insect pests, and other organisms, contributing to pest and weed control',
            'Fish movement and feeding help cycle nutrients and can stimulate the paddy ecosystem',
            'Fish waste returns nutrients that can benefit the rice crop',
            'The flooded paddy provides habitat and natural feed for the fish',
            'The same land and water yield both grain and protein, diversifying output and income',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the fish are sensitive to how the field is managed, rice-fish systems tend to favour reduced or carefully targeted use of pesticides, aligning the system with more ecological approaches to rice production.',
        },
      ],
    },
    {
      id: 'management-requirements',
      heading: 'Management requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Successful rice-fish farming requires reliable water control, field modifications such as strengthened bunds and refuge trenches, and coordination of water depth and crop-protection decisions around the needs of the fish. Practices that would be routine in rice alone — such as draining the field or applying certain pesticides — must be adapted so as not to harm the fish.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Pesticides and drying practices used for rice can be lethal to fish; the two enterprises must be managed together, and some inputs suitable for sole-crop rice are unsuitable in a rice-fish system.',
        },
      ],
    },
    {
      id: 'considerations-and-context',
      heading: 'Considerations and context',
      body: [
        {
          type: 'paragraph',
          text: 'Rice-fish farming is valued for diversifying smallholder production, improving nutrition through added protein, and supporting more ecological pest management, and it is promoted as an integrated, resource-efficient use of paddy land and water. It requires more knowledge and infrastructure than sole-crop rice, and its suitability depends on water availability, field conditions, and access to fish stock and markets.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry describes rice-fish farming in general terms; it does not give stocking rates, trench dimensions, or yield figures, which are site- and species-specific.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'livestock', slug: 'farmed-fish' },
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'alternate-wetting-and-drying' },
  ],
  glossaryTerms: ['integrated-pest-management', 'yield'],
  geographicScope:
    'Rice-fish farming is practised mainly in the rice-growing regions of Asia, with long-established systems in parts of China and Southeast Asia; suitability depends on local water and conditions.',
  climateContext:
    'Rice-fish systems depend on the reliable flooding of paddy fields; both components are sensitive to water availability and temperature.',
  limitations: [
    'This entry describes rice-fish farming in general terms; it does not give stocking rates, trench dimensions, or yield figures, which are site- and species-specific.',
    'The system requires reliable water control and adapted pest management, and is not suitable everywhere rice is grown.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Integrated rice-fish systems and heritage agricultural landscapes',
    },
    {
      sourceId: 'irri',
      citedFor: 'Rice-based integrated and ecological production systems',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on integrated aquaculture in rice systems',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Rice-Fish Farming',
    description:
      'Rice-fish farming explained: integrating fish into flooded paddies for grain and protein, with mutual pest control and nutrient cycling benefits.',
    keywords: [
      'rice-fish farming',
      'rice-fish culture',
      'integrated aquaculture',
      'paddy fish',
    ],
  },
  structuredData: { article: true },
};
