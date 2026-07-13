import type { CultivarContent } from '@/types/content';

export const tms30572: CultivarContent = {
  id: 'tms-30572',
  slug: 'tms-30572',
  contentType: 'cultivar',
  title: 'TMS 30572',
  acceptedName: 'TMS 30572',
  alternativeNames: ['IITA TMS 30572'],
  category: 'Cassava cultivar (improved variety)',
  parentCrop: { type: 'crop', slug: 'cassava' },
  botanicalTaxon: 'Manihot esculenta',
  cultivarType: 'Improved variety (clonally propagated)',
  breedingType: 'Hybridization and clonal selection',
  originCountry: 'Nigeria',
  originRegion: 'Bred at IITA, Ibadan',
  breederOrInstitution:
    'International Institute of Tropical Agriculture (IITA)',
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
      note: 'IITA-bred improved variety of the TMS series, officially released in Nigeria. Formal national variety release is administered by Nigerian authorities; the specific national release record is not linked here.',
    },
  ],
  growthHabit: 'Woody perennial shrub, propagated from stem cuttings',
  intendedUse: [
    'Processing into products such as gari, fufu, and flour',
    'Fresh roots and industrial starch',
    'Improved planting material for smallholder systems',
  ],
  climateAdaptation:
    'Warm, humid-to-subhumid tropics of West Africa; frost-intolerant, like cassava generally.',
  soilAdaptation:
    'Grown across the range of soils used for cassava, including lower-fertility soils; needs good drainage.',
  qualityTraits: [
    'Roots suited to processing into gari, fufu, and flour',
    'Developed as an improved variety within IITA’s cassava program',
  ],
  diseaseResistanceClaims: [
    'Selected at IITA for resistance to cassava mosaic disease (CMD), a defining objective of the TMS improved-variety program.',
  ],
  claims: [
    {
      field: 'disease-resistance',
      statement:
        'TMS 30572 was developed at IITA with resistance to cassava mosaic disease (CMD) and became a widely disseminated improved cassava variety in Nigeria and West Africa.',
      citations: [
        {
          sourceId: 'iita',
          evidenceNote:
            'IITA cassava breeding program and TMS improved-variety development for CMD resistance',
          evidenceTier: 1,
        },
        {
          sourceId: 'cgiar',
          evidenceNote:
            'CGIAR documentation of improved, CMD-resistant cassava varieties and their dissemination',
          evidenceTier: 1,
        },
      ],
    },
  ],
  summary:
    'TMS 30572 is an IITA-bred improved cassava variety of the TMS series, selected for cassava mosaic disease resistance and widely disseminated in Nigeria and West Africa.',
  introduction: [
    {
      type: 'paragraph',
      text: 'TMS 30572 is an improved cassava variety developed by the International Institute of Tropical Agriculture (IITA). It belongs to the "TMS" (Tropical Manihot Selection) series, IITA-bred materials produced through hybridization and clonal selection, and it became one of the most widely disseminated improved cassava varieties in Nigeria and across West Africa.',
    },
    {
      type: 'paragraph',
      text: 'A central objective of the TMS program was resistance to cassava mosaic disease (CMD), the most damaging viral disease of cassava in Africa. TMS 30572 was selected within that program and, as an improved variety, is propagated clonally from stem cuttings like other cassava.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Cassava (Manihot esculenta)' },
    { label: 'Botanical taxon', value: 'Manihot esculenta' },
    { label: 'Type', value: 'Improved variety (clonally propagated)' },
    {
      label: 'Breeder',
      value: 'IITA (International Institute of Tropical Agriculture)',
    },
    { label: 'Series', value: 'TMS (Tropical Manihot Selection)' },
    {
      label: 'Registration',
      value: 'Registered / released — Nigeria (IITA-bred TMS variety)',
    },
    {
      label: 'Breeding objective',
      value: 'Resistance to cassava mosaic disease (CMD)',
    },
  ],
  sections: [
    {
      id: 'origin-and-breeding',
      heading: 'Origin and breeding',
      body: [
        {
          type: 'paragraph',
          text: 'TMS 30572 was developed within IITA’s cassava breeding program in Nigeria. The TMS series combined hybridization and clonal selection, drawing on sources of disease resistance to build improved varieties suited to African production conditions. TMS 30572 is one of the widely known outputs of that effort.',
        },
        {
          type: 'paragraph',
          text: 'As an improved variety it is maintained and multiplied clonally, through stem cuttings taken from healthy plants, so that the released material retains its selected characteristics.',
        },
      ],
    },
    {
      id: 'disease-resistance-context',
      heading: 'Disease-resistance context',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava mosaic disease (CMD) is the most economically damaging viral disease of cassava in Africa, transmitted by whiteflies and through infected cuttings. Breeding CMD-resistant varieties was the defining goal of IITA’s TMS program, and TMS 30572 was selected for this resistance.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Resistance is provenanced, not absolute',
          text: 'The CMD-resistance statement on this page is a provenanced claim sourced to IITA and CGIAR. Resistance is not immunity: expression depends on virus strains, pressure, and growing conditions, and can change over time and place.',
        },
      ],
    },
    {
      id: 'use-and-processing',
      heading: 'Use and processing',
      body: [
        {
          type: 'paragraph',
          text: 'TMS 30572 is grown for roots processed into staple products such as gari, fufu, and flour, as well as for fresh use and industrial starch, and its planting stems are retained as propagation material for the next cycle. As with cassava generally, processing and end use depend on the variety’s cyanogenic potential and local practice, which are not detailed at the variety level here.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  relatedTopics: [{ type: 'cultivar', slug: 'tme-419' }],
  geographicScope:
    'Bred at IITA (Nigeria) and disseminated across Nigeria and West Africa. Performance is specific to tropical African production conditions.',
  climateContext:
    'Improved cassava variety for warm, humid-to-subhumid tropical West Africa; frost-intolerant.',
  limitations: [
    'CMD resistance is a provenanced, source-backed claim, not a guarantee of immunity; it can be affected by virus strains, disease pressure, and location, and may erode over time.',
    'The specific national variety-release record in Nigeria is administered by national authorities and is not linked here; this record names IITA as the breeding institution.',
    'No release year or yield figures are asserted, as they are not independently verified in this record.',
    'Cyanogenic potential and required processing steps are variety- and practice-specific and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor:
        'IITA cassava breeding, the TMS series, and CMD-resistance objectives',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Documentation of improved cassava varieties and their dissemination in Africa',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'TMS 30572 (cassava cultivar)',
    description:
      'TMS 30572 is an IITA-bred improved cassava variety, selected for cassava mosaic disease resistance and widely disseminated in Nigeria and West Africa.',
    keywords: [
      'TMS 30572',
      'IITA cassava',
      'cassava mosaic disease resistance',
      'Manihot esculenta',
    ],
  },
  structuredData: { article: true },
};
