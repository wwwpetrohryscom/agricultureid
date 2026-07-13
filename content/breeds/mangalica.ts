import type { BreedContent } from '@/types/content';

export const mangalica: BreedContent = {
  id: 'mangalica',
  slug: 'mangalica',
  contentType: 'breed',
  title: 'Mangalica',
  scientificName: 'Sus scrofa domesticus',
  alternativeNames: ['Mangalitsa', 'Mangalitza'],
  category: 'Pig breed',
  summary:
    'The Mangalica is a Hungarian lard-type pig with a distinctive thick, curly, woolly coat. Once near extinction, it has recovered through conservation and demand for its high-fat, richly flavoured meat and cured products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Mangalica is a traditional Hungarian pig breed developed in the nineteenth century, famous for its thick, curly, woolly coat — unusual among modern pigs. It is a lard-type breed, historically bred for fat production, and occurs in three main colour varieties: Blonde, Swallow-bellied, and Red.',
    },
    {
      type: 'paragraph',
      text: 'Slow-growing and fatty, the Mangalica fell out of favour as demand shifted to lean pork and came close to extinction in the late twentieth century. It has since recovered through dedicated conservation and renewed demand for its high-fat meat, lard, and cured products such as salami and charcuterie.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Lard' },
    { label: 'Origin', value: 'Hungary' },
    {
      label: 'Appearance',
      value:
        'Thick, curly, woolly coat; Blonde, Swallow-bellied, and Red varieties',
    },
    { label: 'Products', value: 'High-fat meat, lard, and cured products' },
    {
      label: 'Conservation status',
      value:
        'Unknown here; recovered from near extinction, conservation interest',
    },
  ],
  sections: [
    {
      id: 'origin-and-recovery',
      heading: 'Origin and recovery',
      body: [
        {
          type: 'paragraph',
          text: 'The Mangalica was developed in Hungary from local and Balkan pig types and became a mainstay of central European lard production. As lean pork came to dominate markets, numbers collapsed and the breed neared extinction, before organised conservation programmes and gourmet demand drove a marked recovery. It is maintained through a Hungarian breeders’ association and herd book.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Woolly coat',
              description:
                'A dense, curly fleece-like coat, unusual among pigs, giving the breed its "woolly pig" nickname and cold-hardiness.',
            },
            {
              term: 'Colour varieties',
              description:
                'Three main types: Blonde, Swallow-bellied (dark with a pale belly), and Red.',
            },
            {
              term: 'Build',
              description:
                'Medium-sized, deep-bodied, and slow-growing, laying down substantial fat.',
            },
          ],
        },
      ],
    },
    {
      id: 'production-and-conservation',
      heading: 'Production and conservation',
      body: [
        {
          type: 'paragraph',
          text: 'The Mangalica is prized for richly marbled, high-fat meat and abundant lard, well suited to traditional cured and dry-aged products. It grows slowly and is generally kept in extensive, outdoor systems. Its recovery from near extinction makes it a notable conservation success, and it remains of ongoing conservation interest.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Conservation categories for heritage breeds are date-specific and vary between organisations and countries; consult the current listings rather than relying on a single fixed category.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Lard',
  originCountry: 'Hungary',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
  ],
  primaryUses: [
    'Lard and high-fat meat production',
    'Traditional cured and dry-aged products',
  ],
  physicalCharacteristics:
    'Medium-sized, deep-bodied lard pig with a distinctive thick, curly, woolly coat, in Blonde, Swallow-bellied, and Red varieties. Slow-growing and laying down substantial fat.',
  productionCharacteristics:
    'Prized for richly marbled, high-fat meat and abundant lard suited to traditional cured products. Slow-growing and generally kept in extensive outdoor systems. Outcomes depend on feeding, system, and management.',
  climateAdaptation:
    'The woolly coat confers notable cold-hardiness, suiting the breed to outdoor, extensive systems in cool and temperate climates.',
  managementContext:
    'Kept mainly in extensive, outdoor, and conservation-oriented systems, often for premium and traditional products. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Hungary and central Europe and now also kept by specialist and heritage producers elsewhere in Europe and North America.',
  connections: [
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Primarily Hungary and central Europe, with specialist populations elsewhere. Husbandry and regulation vary by country.',
  climateContext:
    'Cold-hardy, woolly-coated pig suited to outdoor, extensive cool- and temperate-climate systems.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance and product figures are highly system- and management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: the Mangalica recovered from near extinction but categories are date- and organisation-specific — consult current FAO DAD-IS and Hungarian national listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Mangalica (woolly) pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mangalica (pig breed)',
    description:
      'The Mangalica: a Hungarian lard pig with a curly, woolly coat, once near extinction and now recovered, prized for high-fat meat and cured products.',
    keywords: ['Mangalica pig', 'Mangalitsa', 'woolly pig', 'lard pig'],
  },
  structuredData: { article: true },
};
