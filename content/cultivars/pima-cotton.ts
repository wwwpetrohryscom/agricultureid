import type { CultivarContent } from '@/types/content';

export const pimaCotton: CultivarContent = {
  id: 'pima-cotton',
  slug: 'pima-cotton',
  contentType: 'cultivar',
  title: 'Pima cotton',
  acceptedName: 'Pima (American Pima)',
  alternativeNames: ['American Pima'],
  category: 'Cotton type / cultivar group',
  parentCrop: { type: 'crop', slug: 'cotton' },
  botanicalTaxon: 'Gossypium barbadense',
  cultivarType: 'Market type / cultivar group (extra-long-staple cotton)',
  breedingType: 'Selection and breeding within a type (many cultivars)',
  originCountry: 'United States',
  originRegion:
    'U.S. Southwest; developed by USDA from introduced Gossypium barbadense (Egyptian-type) germplasm',
  breederOrInstitution: 'United States Department of Agriculture (USDA)',
  registrationStatus: 'historical',
  growthHabit: 'Shrub grown as an annual (extra-long-staple cotton)',
  intendedUse: ['Extra-long-staple lint for fine, premium textiles'],
  climateAdaptation:
    'Warm, long, frost-free seasons; grown under irrigation in the arid and semi-arid U.S. Southwest.',
  soilAdaptation: 'Deep, well-drained soils of irrigated southwestern valleys.',
  qualityTraits: [
    'Extra-long-staple fiber',
    'Fine, strong lint used for premium and fine textiles',
  ],
  summary:
    'Pima (American Pima) is an extra-long-staple cotton type of Gossypium barbadense, developed by USDA and grown in the U.S. Southwest for fine, strong, premium fiber — a type/class, not one cultivar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pima, or American Pima, is a type of extra-long-staple (ELS) cotton belonging to the species Gossypium barbadense — the same species as Egyptian cotton — rather than to the upland cotton that makes up most of world production. It is grown chiefly in the U.S. Southwest and is prized for fine, strong lint used in premium textiles.',
    },
    {
      type: 'paragraph',
      text: 'The Pima type was developed in the early 20th century by the United States Department of Agriculture (USDA) from introduced Gossypium barbadense (Egyptian-type) germplasm, and the name honors the Pima (Akimel O’odham) people of Arizona, who helped grow the early crop in USDA trials. Like Acala among upland cottons, "Pima" names a class within which many individual cultivars have since been bred.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Cotton (Gossypium spp.)' },
    {
      label: 'Botanical taxon',
      value: 'Gossypium barbadense (extra-long-staple cotton)',
    },
    {
      label: 'Type',
      value: 'Market type / cultivar group (not a single cultivar)',
    },
    { label: 'Developed by', value: 'USDA, early 20th century' },
    { label: 'Main region', value: 'U.S. Southwest (irrigated)' },
    { label: 'Fiber', value: 'Extra-long-staple; fine and strong' },
    {
      label: 'Status',
      value: 'Historical class; individual Pima cultivars are separately bred',
    },
  ],
  sections: [
    {
      id: 'a-type-not-a-single-cultivar',
      heading: 'A type, not a single cultivar',
      body: [
        {
          type: 'paragraph',
          text: 'Pima names a class of extra-long-staple Gossypium barbadense cotton, not one registered variety. Many individually named Pima cultivars have been released over time; they share the class’s extra-long-staple fiber character while differing in specific agronomic and quality traits.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Class name, not a variety record',
          text: 'This page describes the Pima type. Statements about any specific Pima cultivar — its release, protection, or measured performance — belong to that cultivar’s own record and should not be inferred from the class name.',
        },
      ],
    },
    {
      id: 'origin-and-species',
      heading: 'Origin and species',
      body: [
        {
          type: 'paragraph',
          text: 'Pima cotton was developed by USDA from introduced Gossypium barbadense germplasm of the Egyptian type, with early work in Arizona. Because it is G. barbadense rather than the more common upland Gossypium hirsutum, it belongs to the extra-long-staple group grown for high-value, fine textiles.',
        },
      ],
    },
    {
      id: 'fiber-and-adaptation',
      heading: 'Fiber character and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Pima is defined by extra-long-staple fiber that is fine and strong, supporting premium textile use. It is a warm-season crop needing a long, frost-free season and is grown under irrigation on the deep, well-drained soils of the arid U.S. Southwest.',
        },
      ],
    },
  ],
  connections: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [{ type: 'cultivar', slug: 'acala-cotton' }],
  geographicScope:
    'Grown chiefly in the irrigated U.S. Southwest. Specific performance depends on the individual Pima cultivar and local conditions.',
  climateContext:
    'Warm-season extra-long-staple cotton type requiring a long, frost-free, irrigated season.',
  limitations: [
    'Pima is a market type / cultivar group of Gossypium barbadense, not a single cultivar; named Pima cultivars differ in agronomy and quality.',
    'Fiber and adaptation descriptions apply to the class in general terms and are not a measured specification for any particular Pima cultivar.',
    'Registry and variety-protection status apply to individual Pima cultivars, not to the class name, which is treated here as historical.',
    'Origin and development history are drawn from cotton-breeding literature and stated in general terms; branded designations for premium Pima lint are commercial marks, not variety records.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'USDA development of American Pima and extra-long-staple cotton research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Cotton (Gossypium barbadense) crop and fiber-type context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pima (extra-long-staple cotton type)',
    description:
      'Pima (American Pima) is an extra-long-staple cotton type of Gossypium barbadense, developed by USDA and grown in the U.S. Southwest for fine, strong fiber.',
    keywords: [
      'Pima cotton',
      'American Pima',
      'extra-long-staple cotton',
      'Gossypium barbadense',
    ],
  },
  structuredData: { article: true },
};
