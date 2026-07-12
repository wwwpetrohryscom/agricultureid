import type { BreedContent } from '@/types/content';

export const angoraGoat: BreedContent = {
  id: 'angora-goat',
  slug: 'angora-goat',
  contentType: 'breed',
  title: 'Angora',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Angora is a fibre goat of Anatolian origin bred for mohair, the long, lustrous fleece it produces. It is small-framed and is shorn for fibre rather than kept primarily for milk or meat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Angora is a specialised fibre goat that originated in the Anatolian region of Türkiye, historically associated with the area around Ankara (formerly Angora). It is bred to produce mohair, a long, lustrous, resilient fibre valued in textiles.',
    },
    {
      type: 'paragraph',
      text: 'Angoras are relatively small-framed compared with dairy and meat goats and carry a dense coat of long, wavy or curly mohair locks. Mohair is distinct from cashmere, which is the fine downy undercoat of other goat types; the Angora goat is also unrelated to the Angora rabbit, which produces angora fibre.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Fibre (mohair)' },
    { label: 'Origin', value: 'Anatolia (present-day Türkiye)' },
    {
      label: 'Fibre',
      value: 'Mohair — long, lustrous locks, usually white',
    },
    { label: 'Frame', value: 'Relatively small; both sexes typically horned' },
    {
      label: 'Conservation status',
      value: 'Not at risk (internationally distributed fibre breed)',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Angora is an ancient fibre breed from Anatolia, later exported to become the basis of mohair industries in several countries. Major mohair-producing populations developed in South Africa, the United States (notably Texas), Argentina, Lesotho, and Türkiye.',
        },
      ],
    },
    {
      id: 'physical-characteristics-and-fibre',
      heading: 'Physical characteristics and fibre',
      body: [
        {
          type: 'list',
          items: [
            'Small-to-medium frame carrying a dense coat of long mohair locks, most commonly white.',
            'Both sexes are usually horned, with a fine-boned build.',
            'The fleece is typically harvested by shearing on a regular seasonal cycle.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Mohair is prized for lustre, strength, and dye affinity. Fleece characteristics and animal condition are closely linked to nutrition and management.',
        },
      ],
    },
    {
      id: 'management-and-adaptation',
      heading: 'Management and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Angora goats are kept mainly in extensive, rangeland-based fibre systems in dry to semi-arid regions. Reproductive rates tend to be lower than in many meat and dairy breeds, and freshly shorn animals are sensitive to cold, wet weather until the fleece regrows.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because they are shorn regularly, Angoras require shelter and management appropriate to the shearing cycle and local climate. Fibre yield and quality depend on genetics, nutrition, and husbandry.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Fibre',
  originCountry: 'Türkiye',
  originRegion: 'Anatolia (Ankara region)',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
  ],
  primaryUses: ['Mohair (fibre) production'],
  physicalCharacteristics:
    'Small-to-medium fibre goat carrying a dense coat of long, lustrous mohair locks, most commonly white. Fine-boned build; both sexes are usually horned. Harvested by regular shearing.',
  productionCharacteristics:
    'Bred specifically for mohair, valued for lustre and strength. Reproductive rates tend to be lower than in many meat and dairy breeds. Fibre yield and quality depend strongly on genetics, nutrition, and husbandry.',
  climateAdaptation:
    'Well suited to dry to semi-arid rangeland; freshly shorn animals are sensitive to cold, wet conditions until the fleece regrows, so shelter around shearing is important.',
  managementContext:
    'Kept mainly in extensive, rangeland-based fibre systems on a seasonal shearing cycle. Nutrition, shearing management, parasite control, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Anatolia and now concentrated in the major mohair-producing regions, including South Africa, the United States (Texas), Argentina, Lesotho, and Türkiye.',
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; an Anatolian fibre breed distributed to the world’s mohair-producing regions. Husbandry and regulation vary by country.',
  climateContext:
    'Best suited to dry, semi-arid rangeland; management around shearing is climate-sensitive.',
  limitations: [
    'This is a breed characterisation, not husbandry, shearing, or veterinary guidance.',
    'Fibre yield and quality are highly genetics- and management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s international distribution rather than any single country, and mohair-flock sizes fluctuate with markets.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Angora goat and mohair',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Angora (goat breed)',
    description:
      'The Angora goat: an Anatolian fibre breed bred for mohair, the long lustrous fleece it produces, kept mainly in dry rangeland systems on a shearing cycle.',
    keywords: ['Angora goat', 'mohair', 'fibre goat', 'goat breed'],
  },
  structuredData: { article: true },
};
