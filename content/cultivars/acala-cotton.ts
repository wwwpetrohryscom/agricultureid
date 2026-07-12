import type { CultivarContent } from '@/types/content';

export const acalaCotton: CultivarContent = {
  id: 'acala-cotton',
  slug: 'acala-cotton',
  contentType: 'cultivar',
  title: 'Acala cotton',
  acceptedName: 'Acala (upland cotton type)',
  category: 'Cotton type / cultivar group',
  parentCrop: { type: 'crop', slug: 'cotton' },
  botanicalTaxon: 'Gossypium hirsutum',
  cultivarType: 'Cultivar group (upland cotton type)',
  breedingType: 'Selection and breeding within a type (many cultivars)',
  originCountry: 'United States',
  originRegion:
    'U.S. Southwest and California, from germplasm originating near Acala, Chiapas, Mexico',
  registrationStatus: 'historical',
  growthHabit: 'Shrub grown as an annual (upland cotton)',
  intendedUse: [
    'Spinnable upland lint for textiles',
    'Historically the standard fiber type of California cotton',
  ],
  climateAdaptation:
    'Warm, long, frost-free seasons; historically grown under irrigation in the arid and semi-arid U.S. Southwest and California.',
  soilAdaptation:
    'Deep, well-drained soils, including the loams and clays of major irrigated valleys.',
  qualityTraits: [
    'Stronger, longer staple than many typical upland cottons',
    'Valued historically for spinning performance within the upland class',
  ],
  summary:
    'Acala is a group (type) of upland cotton (Gossypium hirsutum) known for stronger, longer staple, historically the standard fiber type of California cotton — not a single registered cultivar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Acala is a type, or cultivar group, of upland cotton (Gossypium hirsutum) rather than a single cultivar. The name traces to germplasm originating near Acala, in Chiapas, Mexico, which was developed in the United States into a group of related cottons grown chiefly in the Southwest and, most notably, California.',
    },
    {
      type: 'paragraph',
      text: 'Acala cottons became known for stronger, longer staple than many typical upland types, and for decades "Acala" was effectively the standard fiber type of California cotton. Many distinct, individually named cultivars have been bred within the Acala group over time, so the name describes a fiber type and breeding lineage more than any one variety.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Cotton (Gossypium spp.)' },
    { label: 'Botanical taxon', value: 'Gossypium hirsutum (upland cotton)' },
    {
      label: 'Type',
      value: 'Cultivar group / fiber type (not a single cultivar)',
    },
    {
      label: 'Germplasm origin',
      value: 'Near Acala, Chiapas, Mexico; developed in the United States',
    },
    {
      label: 'Main region',
      value: 'U.S. Southwest and California (historically)',
    },
    {
      label: 'Fiber note',
      value: 'Stronger, longer staple than many typical upland cottons',
    },
    {
      label: 'Status',
      value: 'Historical type; individual Acala cultivars are separately bred',
    },
  ],
  sections: [
    {
      id: 'a-type-not-a-single-cultivar',
      heading: 'A type, not a single cultivar',
      body: [
        {
          type: 'paragraph',
          text: 'Acala is best understood as a group of related upland cottons — a fiber type and breeding lineage — rather than one registered variety. Numerous individually named cultivars have been released within the Acala group, and they share the group’s general fiber character while differing in specific agronomic and quality traits.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Group name, not a variety record',
          text: 'This page describes the Acala type. Claims about any specific Acala cultivar (its release, protection, or measured performance) belong to that cultivar’s own record and should not be inferred from the group name.',
        },
      ],
    },
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Acala name comes from germplasm associated with Acala, Chiapas, in Mexico, which was introduced and developed in the United States in the early 20th century. Development and selection within U.S. programs shaped the group into the cottons grown widely in California and the wider Southwest, where they were long promoted as a preferred fiber type.',
        },
      ],
    },
    {
      id: 'fiber-and-adaptation',
      heading: 'Fiber character and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Acala cottons are upland cottons distinguished, within that class, by stronger and longer staple valued for spinning. They are warm-season cottons requiring a long, frost-free season and were historically grown under irrigation on the deep, well-drained soils of California’s major producing valleys.',
        },
      ],
    },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [{ type: 'cultivar', slug: 'pima-cotton' }],
  geographicScope:
    'Historically centered on California and the U.S. Southwest. Specific performance depends on the individual Acala cultivar and local conditions.',
  climateContext:
    'Warm-season upland cotton type requiring a long, frost-free season; historically irrigated.',
  limitations: [
    'Acala is a type / cultivar group, not a single cultivar; the many named cultivars bred within it differ in agronomy and quality.',
    'Fiber and adaptation descriptions apply to the group in general terms and are not a measured specification for any particular Acala cultivar.',
    'Registry and variety-protection status apply at the level of individual Acala cultivars, not to the group name, which is treated here as historical.',
    'Germplasm origin and development history are drawn from cotton-breeding literature and stated in general terms.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Cotton research and the history of U.S. cotton germplasm and types',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Cotton (Gossypium hirsutum) crop and fiber-type context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Acala (upland cotton type)',
    description:
      'Acala is a group of upland (Gossypium hirsutum) cottons known for stronger, longer staple — historically the standard fiber type of California cotton.',
    keywords: [
      'Acala cotton',
      'upland cotton',
      'Gossypium hirsutum',
      'California cotton',
    ],
  },
  structuredData: { article: true },
};
