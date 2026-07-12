import type { CultivarContent } from '@/types/content';

export const mo17Maize: CultivarContent = {
  id: 'mo17-maize',
  slug: 'mo17-maize',
  contentType: 'cultivar',
  title: 'Mo17',
  acceptedName: 'Mo17',
  category: 'Maize inbred line',
  parentCrop: { type: 'crop', slug: 'maize' },
  botanicalTaxon: 'Zea mays',
  cultivarType: 'Inbred line',
  breedingType: 'Inbreeding of Lancaster Sure Crop–derived germplasm',
  originCountry: 'United States',
  originRegion: 'Missouri',
  yearReleased: '1964',
  breederOrInstitution:
    'University of Missouri (Columbia), with USDA cooperation',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Mo17 is maintained as a public maize inbred accession in the U.S. National Plant Germplasm System; specific record identifiers are not reproduced here.',
    },
  ],
  growthHabit: 'Annual, single-stalked maize plant grown as an inbred line',
  intendedUse: [
    'Public inbred parent line for hybrid maize breeding',
    'Reference germplasm for maize genetics and heterosis research',
    'Teaching and research material',
  ],
  climateAdaptation:
    'Temperate maize adapted to U.S. Corn Belt conditions; used as a breeding parent rather than grown for commercial grain on its own.',
  qualityTraits: ['Yellow dent kernel type'],
  geographicAvailability:
    'Available as public germplasm through the U.S. National Plant Germplasm System and used widely in public and private maize breeding.',
  summary:
    'Mo17 is a public maize inbred line released by the University of Missouri in 1964 and belonging to the Lancaster Sure Crop heterotic group. Its cross with the Stiff Stalk line B73 is a classic model of hybrid vigour in temperate maize.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mo17 is a public inbred line of maize released by the University of Missouri at Columbia in 1964. It is assigned to the "Lancaster Sure Crop" (non-Stiff-Stalk) heterotic group, tracing to the Lancaster Sure Crop open-pollinated germplasm pool that underlies many Corn Belt lines complementary to the Stiff Stalk pool.',
    },
    {
      type: 'paragraph',
      text: 'As an inbred line, Mo17 is used as a parent in hybrid production and as a stable reference in research rather than grown for commercial grain in its own right. It is best known as the non-Stiff-Stalk partner in the widely studied B73 × Mo17 single cross.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    { label: 'Type', value: 'Public inbred line' },
    { label: 'Developed by', value: 'University of Missouri (Columbia)' },
    { label: 'Released', value: '1964' },
    {
      label: 'Heterotic group',
      value: 'Lancaster Sure Crop (non-Stiff-Stalk)',
    },
    {
      label: 'Notable pairing',
      value: 'Non-Stiff-Stalk parent in the classic B73 × Mo17 hybrid',
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
          text: 'Mo17 was released in 1964 from the University of Missouri’s maize breeding program at Columbia and is documented as belonging to the Lancaster Sure Crop heterotic group. Lancaster-group lines derive from the Lancaster Sure Crop open-pollinated variety and are typically used as complements to Stiff Stalk (Reid’s Yellow Dent heritage) lines in temperate hybrid maize.',
        },
        {
          type: 'paragraph',
          text: 'The distinction between the Stiff Stalk and Lancaster (non-Stiff-Stalk) pools is a central organizing principle of North American temperate maize breeding, because crossing lines from complementary pools tends to maximize hybrid vigour.',
        },
      ],
    },
    {
      id: 'breeding-and-research-significance',
      heading: 'Breeding and research significance',
      body: [
        {
          type: 'paragraph',
          text: 'The B73 × Mo17 single cross, combining a Stiff Stalk line with Mo17 from the Lancaster group, has been studied for decades as a reference example of heterosis and of the complementarity between the two major temperate heterotic pools.',
        },
        {
          type: 'paragraph',
          text: 'Mo17 continues to serve as a public parent line and a common genetic reference. Because it is public germplasm, it is broadly available for breeding and research through the national germplasm system.',
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
          text: 'Mo17 is a public inbred line used as a breeding parent and a research reference. It is not itself a modern commercial hybrid and is not grown for commercial grain production on its own.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'cultivar', slug: 'b73-maize' },
    { type: 'cultivar', slug: 'lancaster-sure-crop' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed in Missouri, United States, for temperate maize breeding; used internationally in research and public breeding programs.',
  climateContext:
    'Temperate maize germplasm; adaptation and performance are environment-specific and evaluated in a breeding context rather than as a stand-alone crop.',
  limitations: [
    'Mo17 is a public inbred line and research reference, not a commercial hybrid; its per-plant grain performance is not representative of the hybrids to which it contributes.',
    'Detailed parentage within the Lancaster Sure Crop pool is described differently across sources, so the exact founding cross is not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Maintenance of Mo17 as a public maize inbred accession',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Maize heterotic-group history and Lancaster/Stiff Stalk germplasm research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mo17 (maize inbred line)',
    description:
      'Mo17 is a public maize inbred line (University of Missouri, 1964) of the Lancaster Sure Crop heterotic group, best known from the classic B73 × Mo17 hybrid.',
    keywords: [
      'Mo17',
      'maize inbred',
      'Lancaster Sure Crop',
      'Zea mays',
      'heterosis',
    ],
  },
  structuredData: { article: true },
};
