import type { CultivarContent } from '@/types/content';

export const tme419: CultivarContent = {
  id: 'tme-419',
  slug: 'tme-419',
  contentType: 'cultivar',
  title: 'TME 419',
  acceptedName: 'TME 419',
  alternativeNames: ['IITA TME 419'],
  category: 'Cassava cultivar (improved variety)',
  parentCrop: { type: 'crop', slug: 'cassava' },
  botanicalTaxon: 'Manihot esculenta',
  cultivarType: 'Improved variety (landrace-derived, clonally propagated)',
  breedingType: 'Landrace-derived clonal selection',
  originCountry: 'Nigeria',
  originRegion: 'West Africa (landrace-derived; disseminated by IITA)',
  breederOrInstitution:
    'International Institute of Tropical Agriculture (IITA) — disseminated',
  registrationStatus: 'registered',
  registrationJurisdiction: 'Nigeria',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'IITA improved cassava varieties (CGIAR)',
      sourceId: 'iita',
      jurisdiction: 'Nigeria',
      status: 'registered',
      asOf: '2026-07-12',
      note: 'IITA-disseminated improved variety from the TME (Tropical Manihot Esculenta) germplasm, officially released and widely grown in Nigeria. Formal national release is administered by Nigerian authorities; the specific release record is not linked here.',
    },
  ],
  growthHabit: 'Woody perennial shrub, propagated from stem cuttings',
  intendedUse: [
    'Processing into products such as gari, fufu, and flour',
    'Fresh consumption and industrial use',
    'Widely grown improved planting material',
  ],
  climateAdaptation:
    'Warm, humid-to-subhumid tropics of West Africa; frost-intolerant, like cassava generally.',
  soilAdaptation:
    'Grown across the range of soils used for cassava, including lower-fertility soils; needs good drainage.',
  qualityTraits: [
    'Roots noted for good processing quality, for example for gari',
    'Popular with farmers and processors in West Africa',
  ],
  diseaseResistanceClaims: [
    'Associated with resistance to cassava mosaic disease (CMD); disseminated by IITA as an improved variety.',
  ],
  claims: [
    {
      field: 'disease-resistance',
      statement:
        'TME 419 is an IITA-disseminated improved cassava variety associated with resistance to cassava mosaic disease (CMD) and widely grown in Nigeria.',
      citations: [
        {
          sourceId: 'iita',
          evidenceNote:
            'IITA cassava variety dissemination and CMD-resistance characterization of TME materials',
          evidenceTier: 1,
        },
        {
          sourceId: 'cgiar',
          evidenceNote:
            'CGIAR documentation of improved, CMD-resistant cassava varieties in West Africa',
          evidenceTier: 1,
        },
      ],
    },
  ],
  summary:
    'TME 419 is an IITA-disseminated improved cassava variety associated with cassava mosaic disease resistance and among the most widely grown varieties by farmers in Nigeria.',
  introduction: [
    {
      type: 'paragraph',
      text: 'TME 419 is an improved cassava variety disseminated by the International Institute of Tropical Agriculture (IITA). It derives from the "TME" (Tropical Manihot Esculenta) germplasm — landrace-based materials characterized and promoted by IITA — and became one of the most widely grown cassava varieties among farmers in Nigeria.',
    },
    {
      type: 'paragraph',
      text: 'TME 419 is associated with resistance to cassava mosaic disease (CMD), and it is propagated clonally from stem cuttings like other cassava. Its popularity reflects both its disease resistance and its suitability for common processed products.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Cassava (Manihot esculenta)' },
    { label: 'Botanical taxon', value: 'Manihot esculenta' },
    {
      label: 'Type',
      value: 'Improved variety (landrace-derived, clonally propagated)',
    },
    { label: 'Disseminated by', value: 'IITA' },
    { label: 'Series', value: 'TME (Tropical Manihot Esculenta)' },
    {
      label: 'Registration',
      value: 'Registered / released — Nigeria (IITA-disseminated variety)',
    },
    {
      label: 'Associated trait',
      value: 'Resistance to cassava mosaic disease (CMD)',
    },
  ],
  sections: [
    {
      id: 'origin-and-dissemination',
      heading: 'Origin and dissemination',
      body: [
        {
          type: 'paragraph',
          text: 'TME 419 comes from IITA’s TME germplasm, which is based on local (landrace) cassava selected and characterized for useful traits rather than produced from a deliberate cross. IITA disseminated TME 419 widely, and it became one of the most popular improved varieties grown by farmers in Nigeria.',
        },
        {
          type: 'paragraph',
          text: 'Like other cassava, TME 419 is multiplied clonally through stem cuttings, with clean planting material important to keeping the crop free of disease from one cycle to the next.',
        },
      ],
    },
    {
      id: 'disease-resistance-context',
      heading: 'Disease-resistance context',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava mosaic disease (CMD) is the most damaging viral disease of cassava in Africa. TME 419 is associated with CMD resistance and was disseminated by IITA partly on that basis, contributing to its wide adoption in Nigeria.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Resistance is provenanced, not absolute',
          text: 'The CMD-resistance statement on this page is a provenanced claim sourced to IITA and CGIAR. Resistance is not immunity, and its expression depends on virus strains, disease pressure, and growing conditions.',
        },
      ],
    },
    {
      id: 'use-and-processing',
      heading: 'Use and processing',
      body: [
        {
          type: 'paragraph',
          text: 'TME 419 is valued for roots suited to common processed products such as gari, as well as for fresh use, and its stems are retained as planting material. As with cassava generally, end use depends on the variety’s cyanogenic potential and local processing practice, which are not detailed at the variety level here.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  relatedTopics: [{ type: 'cultivar', slug: 'tms-30572' }],
  geographicScope:
    'Disseminated by IITA and widely grown in Nigeria and West Africa. Performance is specific to tropical African production conditions.',
  climateContext:
    'Improved cassava variety for warm, humid-to-subhumid tropical West Africa; frost-intolerant.',
  limitations: [
    'CMD resistance is a provenanced, source-backed claim, not a guarantee of immunity; it can be affected by virus strains, disease pressure, and location.',
    'TME 419 is landrace-derived and disseminated by IITA; it is not presented as a deliberate cross, and no breeder cross is asserted.',
    'The specific national variety-release record in Nigeria is administered by national authorities and is not linked here.',
    'No release year or yield figures are asserted, as they are not independently verified in this record; cyanogenic potential and processing steps are practice-specific.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor:
        'IITA dissemination of TME cassava germplasm and CMD-resistance characterization',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Documentation of improved cassava varieties and adoption in West Africa',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'TME 419 (cassava cultivar)',
    description:
      'TME 419 is an IITA-disseminated improved cassava variety associated with cassava mosaic disease resistance and widely grown by farmers in Nigeria.',
    keywords: [
      'TME 419',
      'IITA cassava',
      'cassava mosaic disease',
      'Manihot esculenta',
    ],
  },
  structuredData: { article: true },
};
