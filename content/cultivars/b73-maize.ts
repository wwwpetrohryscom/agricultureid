import type { CultivarContent } from '@/types/content';

export const b73Maize: CultivarContent = {
  id: 'b73-maize',
  slug: 'b73-maize',
  contentType: 'cultivar',
  title: 'B73',
  acceptedName: 'B73',
  category: 'Maize inbred line',
  parentCrop: { type: 'crop', slug: 'maize' },
  botanicalTaxon: 'Zea mays',
  cultivarType: 'Inbred line',
  breedingType:
    'Recurrent selection and inbreeding from a synthetic population',
  originCountry: 'United States',
  originRegion: 'Iowa',
  yearReleased: '1972',
  breederOrInstitution:
    'Iowa State University (developed by Wilbert A. Russell)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'B73 is maintained as a public maize inbred accession in the U.S. National Plant Germplasm System; specific record identifiers are not reproduced here.',
    },
  ],
  growthHabit: 'Annual, single-stalked maize plant grown as an inbred line',
  intendedUse: [
    'Public inbred parent line for hybrid maize breeding',
    'Reference genome and germplasm for maize genetics and genomics',
    'Teaching and research material',
  ],
  climateAdaptation:
    'Temperate maize adapted to U.S. Corn Belt conditions; as an inbred line it is used in breeding rather than grown for commercial grain on its own.',
  qualityTraits: [
    'Yellow dent kernel type',
    'Stiff-stalked plant architecture',
  ],
  geographicAvailability:
    'Available as public germplasm through the U.S. National Plant Germplasm System and used widely in public and private maize breeding.',
  summary:
    'B73 is a public maize inbred line developed at Iowa State University and released in 1972 from the Iowa Stiff Stalk Synthetic population. It is one of the most influential lines in temperate maize breeding and was the source of the first maize reference genome.',
  introduction: [
    {
      type: 'paragraph',
      text: 'B73 is a public inbred line of maize developed by Wilbert A. Russell at Iowa State University and released in 1972. It was derived from the Iowa Stiff Stalk Synthetic (BSSS), a breeding population of largely Reid’s Yellow Dent heritage that had undergone several cycles of recurrent selection; B73 was recovered from the fifth cycle of that program.',
    },
    {
      type: 'paragraph',
      text: 'An inbred line is a near-homozygous, self-pollinated line used as a parent in hybrid production and as a stable reference in research rather than grown for commercial grain in its own right. B73 became a foundational member of the "Stiff Stalk" heterotic pool and, decades later, the basis of the first assembled maize reference genome.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    { label: 'Type', value: 'Public inbred line' },
    { label: 'Developed by', value: 'Iowa State University (W. A. Russell)' },
    { label: 'Released', value: '1972' },
    {
      label: 'Germplasm source',
      value: 'Iowa Stiff Stalk Synthetic (BSSS), cycle 5',
    },
    {
      label: 'Heterotic group',
      value: 'Stiff Stalk (Reid’s Yellow Dent heritage)',
    },
    {
      label: 'Notable status',
      value: 'Source of the first assembled maize reference genome (2009)',
    },
    {
      label: 'Registration status',
      value: 'Historical / public research line',
    },
  ],
  sections: [
    {
      id: 'background-and-development',
      heading: 'Background and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Iowa Stiff Stalk Synthetic was assembled in the 1930s from sixteen inbred lines of predominantly Reid’s Yellow Dent background and improved through repeated cycles of recurrent selection at Iowa State University. Several widely used inbreds were extracted from this population over the following decades, including B14 and B37; B73 was released by Wilbert A. Russell in 1972 from the fifth selection cycle.',
        },
        {
          type: 'paragraph',
          text: 'Because it descends from the Stiff Stalk population, B73 is treated as a defining member of the Stiff Stalk heterotic group. In temperate hybrid maize, Stiff Stalk lines are typically crossed with complementary "non-Stiff-Stalk" lines (such as those of the Lancaster group) to exploit heterosis.',
        },
      ],
    },
    {
      id: 'breeding-and-research-significance',
      heading: 'Breeding and research significance',
      body: [
        {
          type: 'paragraph',
          text: 'B73 has been used extensively as a public parent line and as a common reference point in maize genetics. The classic single cross of B73 with the Lancaster-group line Mo17 has been studied for decades as a model of hybrid vigour and complementary heterotic pools.',
        },
        {
          type: 'paragraph',
          text: 'In 2009 B73 was reported as the source of the first assembled maize reference genome, and it remains a standard genetic and genomic reference for the species. This role is one reason the line continues to be maintained and distributed through public germplasm systems.',
        },
      ],
    },
    {
      id: 'status-and-availability',
      heading: 'Status and availability',
      body: [
        {
          type: 'callout',
          tone: 'note',
          title: 'Public research line, not a commercial variety',
          text: 'B73 is a public inbred line used as a breeding parent and a research reference. It is not itself a modern commercial hybrid and is not grown for commercial grain production on its own.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'cultivar', slug: 'mo17-maize' },
    { type: 'cultivar', slug: 'reids-yellow-dent' },
    { type: 'cultivar', slug: 'w22-maize' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed in Iowa, United States, for temperate maize breeding; used internationally in research and public breeding programs.',
  climateContext:
    'Temperate maize germplasm; adaptation and performance are environment-specific and evaluated in a breeding context rather than as a stand-alone crop.',
  limitations: [
    'B73 is a public inbred line and research reference, not a commercial hybrid; its per-plant grain performance is not representative of the hybrids to which it contributes.',
    'Heterotic-group and pedigree descriptions summarize the documented breeding literature; fine pedigree details vary between sources.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Maintenance of B73 as a public maize inbred accession',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Maize germplasm history, Stiff Stalk heritage, and reference-genome research',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Zea mays taxonomic placement',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'B73 (maize inbred line)',
    description:
      'B73 is a public maize inbred line (Iowa State University, 1972) from the Iowa Stiff Stalk Synthetic and the source of the first maize reference genome.',
    keywords: [
      'B73',
      'maize inbred',
      'Stiff Stalk',
      'Zea mays',
      'reference genome',
    ],
  },
  structuredData: { article: true },
};
