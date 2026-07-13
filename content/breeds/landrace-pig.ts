import type { BreedContent } from '@/types/content';

export const landracePig: BreedContent = {
  id: 'landrace-pig',
  slug: 'landrace-pig',
  contentType: 'breed',
  title: 'Landrace',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Landrace is a white, lop-eared pig breed developed originally in Denmark for bacon and now maintained as national strains worldwide. It is a leading maternal line valued for length, prolificacy, and mothering ability.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Landrace pig was developed in Denmark in the early twentieth century, initially for bacon production, and was subsequently developed into distinct national strains — Danish, British, American, Dutch, and others. It is one of the two dominant maternal breeds in commercial pig production, alongside the Large White.',
    },
    {
      type: 'paragraph',
      text: 'The breed is recognised by its white coat, characteristic large forward-drooping (lop) ears, and a notably long body. It is important to distinguish this specific white herd-book breed from the general term "landrace", which refers to any locally adapted traditional livestock population.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Bacon; maternal line' },
    { label: 'Origin', value: 'Denmark (now many national strains)' },
    {
      label: 'Appearance',
      value: 'White, very long body, large forward-drooping (lop) ears',
    },
    {
      label: 'Primary role',
      value: 'Maternal (dam) line in commercial crossbreeding',
    },
    {
      label: 'Conservation status',
      value: 'Not at risk (a major global commercial breed)',
    },
  ],
  sections: [
    {
      id: 'origin-and-role',
      heading: 'Origin and role',
      body: [
        {
          type: 'paragraph',
          text: 'Originating with the Danish Landrace and its bacon industry, the breed was exported and adapted into national Landrace populations around the world. Like the Large White, it is central to hybrid dam lines, and the two are frequently crossed to combine their maternal strengths.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'list',
          items: [
            'White-skinned with a fine white coat and a very long, deep body.',
            'Large forward-drooping (lop) ears that partly cover the face.',
            'Length historically favoured for bacon-style carcasses.',
          ],
        },
      ],
    },
    {
      id: 'production-characteristics',
      heading: 'Production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'The Landrace is valued for maternal performance — large litters, good milk and mothering ability — and for carcass length and leanness suited to bacon. These traits make it, with the Large White, a mainstay of commercial maternal lines.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Performance depends heavily on the specific national strain or line, nutrition, housing, and management, and is described here only qualitatively.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Bacon',
  originCountry: 'Denmark',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds; maintained as multiple national strains.',
    },
  ],
  primaryUses: [
    'Maternal (dam) line in commercial crossbreeding',
    'Bacon and pork production',
  ],
  physicalCharacteristics:
    'White-skinned pig with a fine white coat, a very long, deep body, and large forward-drooping (lop) ears that partly cover the face. Length historically favoured for bacon carcasses.',
  productionCharacteristics:
    'Valued for maternal performance — large litters and good milk and mothering ability — and for carcass length and leanness. Performance is strongly influenced by national strain or line, nutrition, housing, and management.',
  climateAdaptation:
    'Widely adapted and kept mainly in housed and semi-intensive systems across many climates; white skin can be sun-sensitive in intense outdoor conditions.',
  managementContext:
    'Central to intensive and integrated commercial systems, generally as a maternal line within structured crossbreeding. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Distributed worldwide as national Landrace strains and within hybrid maternal lines across Europe, the Americas, Asia, and Oceania.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global; a Danish-origin breed maintained as national strains worldwide. Husbandry and regulation vary by country.',
  climateContext:
    'Broadly adapted, mainly housed or semi-intensive; sun-sensitive skin warrants shade outdoors.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'The breed name "Landrace" denotes this specific white lop-eared herd-book breed and should not be confused with the general term for locally adapted populations.',
    'Performance figures are highly strain- and management-dependent and are described only qualitatively here; FAO DAD-IS conservation status is assessed per national population.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Landrace pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Landrace (pig breed)',
    description:
      'The Landrace: a white, long-bodied, lop-eared pig developed in Denmark for bacon and now a leading maternal line maintained as national strains worldwide.',
    keywords: ['Landrace pig', 'bacon pig', 'maternal line', 'pig breed'],
  },
  structuredData: { article: true },
};
