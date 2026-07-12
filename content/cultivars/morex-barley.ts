import type { CultivarContent } from '@/types/content';

export const morexBarley: CultivarContent = {
  id: 'morex-barley',
  slug: 'morex-barley',
  contentType: 'cultivar',
  title: 'Morex',
  acceptedName: 'Morex',
  category: 'Barley cultivar',
  parentCrop: { type: 'crop', slug: 'barley' },
  botanicalTaxon: 'Hordeum vulgare',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United States',
  originRegion: 'Minnesota',
  yearReleased: '1978',
  breederOrInstitution:
    'University of Minnesota Agricultural Experiment Station (D. C. Rasmusson)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Six-row malting barley conserved as germplasm and widely used as a reference; genebank presence reflects conservation and research use rather than current commercial registration.',
    },
  ],
  growthHabit: 'Spring',
  intendedUse: [
    'Six-row malting barley',
    'Barley genome and malting-quality reference line',
  ],
  qualityTraits: [
    'Six-row spring malting barley (Manchurian type)',
    'Long used as a North American six-row malting-quality standard',
  ],
  climateAdaptation:
    'A six-row spring malting barley developed for the northern Plains and Upper Midwest of the United States.',
  summary:
    'Morex is a six-row spring malting barley released by the University of Minnesota in 1978 that became the North American six-row malting-quality standard and was later chosen as a reference cultivar for the barley genome.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Morex is a six-row spring malting barley (Hordeum vulgare) released by the University of Minnesota Agricultural Experiment Station in 1978. A Manchurian-type barley developed from the cross Cree/Bonanza, its name derives from "more extract," reflecting the malt extract it yields.',
    },
    {
      type: 'paragraph',
      text: 'Morex became the standard against which North American six-row malting barley quality was judged and was grown widely across the northern Plains. It was later selected as a reference cultivar for the barley genome, and the Morex genome sequence has been used by barley researchers worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Barley (Hordeum vulgare)' },
    { label: 'Type', value: 'Six-row spring malting barley cultivar' },
    {
      label: 'Released by',
      value: 'University of Minnesota Agricultural Experiment Station',
    },
    { label: 'Year released', value: '1978' },
    { label: 'Parentage', value: 'Cree / Bonanza' },
    { label: 'Growth habit', value: 'Spring' },
    {
      label: 'Notable role',
      value: 'North American six-row malting standard; barley genome reference',
    },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Morex was developed at the University of Minnesota from the cross Cree/Bonanza and released in 1978. Its name — from "more extract" — points to the malting characteristic for which it was selected, and it was cultivated widely in Minnesota and the neighbouring Dakotas.',
        },
        {
          type: 'paragraph',
          text: 'For decades Morex served as a benchmark cultivar for six-row malting quality in North America, and it was subsequently chosen as a reference genotype for the barley genome.',
        },
      ],
    },
    {
      id: 'classification-and-characteristics',
      heading: 'Classification and characteristics',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Species', description: 'Hordeum vulgare' },
            { term: 'Spike type', description: 'Six-row' },
            { term: 'Growth habit', description: 'Spring' },
            { term: 'End use', description: 'Malting (brewing)' },
            {
              term: 'Reference role',
              description:
                'Six-row malting-quality standard and barley genome reference',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page summarizes documented history, classification, and malting reference role. It makes no comparative yield or agronomic-performance claims.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  geographicScope:
    'Documented United States six-row malting barley used internationally as a malting-quality and genome reference; agronomic adaptation is region- and season-specific.',
  climateContext:
    'A six-row spring malting barley developed for the northern Plains and Upper Midwest of the United States.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Morex is now used chiefly as a reference and heritage cultivar; its current commercial registration status is not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Six-row malting barley germplasm accession and characterization',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'United States barley malting-quality research and reference use',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Morex (malting barley cultivar)',
    description:
      'Morex, a six-row spring malting barley (University of Minnesota, 1978) that became the North American malting standard and a barley genome reference.',
    keywords: [
      'Morex barley',
      'six-row malting barley',
      'barley reference genome',
      'malting barley cultivar',
    ],
  },
  structuredData: { article: true },
};
