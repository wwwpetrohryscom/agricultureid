import type { CultivarContent } from '@/types/content';

export const w22Maize: CultivarContent = {
  id: 'w22-maize',
  slug: 'w22-maize',
  contentType: 'cultivar',
  title: 'W22',
  acceptedName: 'W22',
  category: 'Maize inbred line',
  parentCrop: { type: 'crop', slug: 'maize' },
  botanicalTaxon: 'Zea mays',
  cultivarType: 'Inbred line',
  breedingType: 'Public inbred line development',
  originCountry: 'United States',
  originRegion: 'Wisconsin',
  breederOrInstitution: 'Wisconsin Agricultural Experiment Station',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'W22 and its derived genetic stocks are maintained as public maize germplasm; specific record identifiers are not reproduced here.',
    },
  ],
  growthHabit: 'Annual, single-stalked maize plant grown as an inbred line',
  intendedUse: [
    'Maize genetics and functional-genomics research',
    'Reference background for transposon (Activator/Dissociation) studies',
    'Reference genome for maize functional genomics',
  ],
  climateAdaptation:
    'Temperate maize maintained as a research inbred; grown under controlled and field research conditions rather than for commercial grain.',
  qualityTraits: [
    'Color-converted background expressing anthocyanin pigmentation used in genetic studies',
  ],
  geographicAvailability:
    'Maintained and distributed as public genetic stocks for research (including through maize genetics stock centers) rather than as a commercial variety.',
  summary:
    'W22 is a public maize inbred line associated with the Wisconsin Agricultural Experiment Station and widely used as a genetics model. Its anthocyanin-expressing background and its role in transposon research make it a standard reference line, and it now has its own assembled genome.',
  introduction: [
    {
      type: 'paragraph',
      text: 'W22 is a public inbred line of maize associated with the Wisconsin Agricultural Experiment Station and long used as a workhorse background for maize genetics. Unlike many Corn Belt inbreds, standard W22 stocks retain anthocyanin (purple/red) pigmentation, which has made the line valuable for studying pigment genetics and for visually tracking genetic markers.',
    },
    {
      type: 'paragraph',
      text: 'W22 became a foundational background for classical maize genetics, including early transposon-tagging experiments using the Activator/Dissociation (Ac/Ds) system. In 2018 an assembled W22 reference genome was published to support functional-genomics and transposon research, complementing the B73 reference.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    { label: 'Type', value: 'Public inbred / genetics line' },
    {
      label: 'Associated institution',
      value: 'Wisconsin Agricultural Experiment Station',
    },
    {
      label: 'Notable trait',
      value: 'Retains anthocyanin pigmentation used in genetic studies',
    },
    {
      label: 'Research role',
      value: 'Standard background for Activator/Dissociation transposon work',
    },
    {
      label: 'Genome',
      value: 'Assembled W22 reference genome published in 2018',
    },
    {
      label: 'Registration status',
      value: 'Historical / public research line',
    },
  ],
  sections: [
    {
      id: 'background',
      heading: 'Background',
      body: [
        {
          type: 'paragraph',
          text: 'W22 is one of the "W" (Wisconsin) maize inbred lines and is documented as having been developed at the Wisconsin Agricultural Experiment Station. It is best known not as a production line but as a genetic model, in part because standard W22 stocks lack the anthocyanin suppressors common in Corn Belt inbreds and so express visible pigmentation controlled by well-characterized regulatory genes.',
        },
      ],
    },
    {
      id: 'research-significance',
      heading: 'Research significance',
      body: [
        {
          type: 'paragraph',
          text: 'The W22 background was adopted for many foundational studies in maize genetics, including work on pigment regulation and some of the first transposon-tagging experiments in plants using the Activator/Dissociation (Ac/Ds) elements. Its stable, well-characterized genetics made it a convenient platform for such experiments.',
        },
        {
          type: 'paragraph',
          text: 'To support modern functional genomics, an assembled W22 reference genome was published in 2018, enabling precise mapping of transposon insertions and other genetic resources onto the W22 background.',
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
          title: 'Genetics reference line, not a commercial variety',
          text: 'W22 is a public genetics line maintained for research. It is not a modern commercial hybrid and is not grown for commercial grain production.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'cultivar', slug: 'b73-maize' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop'],
  geographicScope:
    'Associated with Wisconsin, United States; used internationally as a maize genetics research line.',
  climateContext:
    'Temperate maize research line; maintained under research conditions rather than as a commercial crop.',
  limitations: [
    'W22 is a research inbred and genetics reference, not a commercial hybrid; it is not grown for commercial grain.',
    'Precise origin dates and breeder attribution for W22 are not consistently documented; the line is described here by its documented institutional association and research use.',
    'Many distinct W22-derived stocks exist (for example color-converted and transposon-carrying versions), so "W22" refers to a family of closely related genetic stocks rather than a single uniform seed lot.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Maize genetics resources, transposon research, and the W22 reference genome',
    },
    {
      sourceId: 'usda-grin',
      citedFor:
        'Maintenance of W22-related maize genetic stocks as public germplasm',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'W22 (maize genetics line)',
    description:
      'W22 is a public maize inbred and genetics model line from Wisconsin, used for anthocyanin and Ac/Ds transposon research, with a 2018 reference genome.',
    keywords: [
      'W22',
      'maize genetics',
      'Ac/Ds transposon',
      'anthocyanin',
      'Zea mays',
    ],
  },
  structuredData: { article: true },
};
