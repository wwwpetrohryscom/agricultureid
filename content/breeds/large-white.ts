import type { BreedContent } from '@/types/content';

export const largeWhite: BreedContent = {
  id: 'large-white',
  slug: 'large-white',
  contentType: 'breed',
  title: 'Large White',
  scientificName: 'Sus scrofa domesticus',
  alternativeNames: ['Yorkshire'],
  category: 'Pig breed',
  summary:
    'The Large White, known as the Yorkshire in North America, is a white, erect-eared English pig breed and one of the most important maternal lines in commercial pig production worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Large White originated in Yorkshire, England, and is one of the foundation breeds of modern commercial pig production. In North America the breed is generally called the Yorkshire. It is prized as a maternal (dam) line for prolificacy, good mothering, and longevity, and is a core component of the hybrid sow lines used in the pork industry.',
    },
    {
      type: 'paragraph',
      text: 'It is a large, long-bodied white pig with erect ears and a slightly dished face, historically valued as a dual-purpose bacon and pork breed. Its adaptability and combining ability have made it one of the most widely distributed pig breeds in the world.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    {
      label: 'Breed type',
      value: 'Dual-purpose (bacon and pork); maternal line',
    },
    { label: 'Origin', value: 'England (Yorkshire)' },
    {
      label: 'Appearance',
      value: 'White, long-bodied, erect ears, slightly dished face',
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
          text: 'Developed in Yorkshire and standardised in British herd books, the Large White spread internationally to become a cornerstone of commercial pig breeding. It is widely used as a maternal line, frequently crossed with the Landrace to produce prolific hybrid sows that are then mated to terminal sire breeds.',
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
            'Large, long-bodied, and white-skinned with a fine white coat.',
            'Erect ears and a slightly dished ("concave") facial profile.',
            'Robust frame associated with good structural soundness and longevity.',
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
          text: 'The Large White is valued primarily for maternal traits — prolificacy, milking and mothering ability, and durability — as well as for good growth and lean carcass qualities. These attributes underpin its central place in hybrid dam lines.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Performance depends heavily on genetics within the breed or line, nutrition, housing, and management, and is described here only in qualitative terms.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'Yorkshire, England',
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
  primaryUses: [
    'Maternal (dam) line in commercial crossbreeding',
    'Pork and bacon production',
  ],
  physicalCharacteristics:
    'Large, long-bodied, white-skinned pig with a fine white coat, erect ears, and a slightly dished facial profile. A robust frame associated with structural soundness and longevity.',
  productionCharacteristics:
    'Valued chiefly for maternal traits — prolificacy, mothering and milking ability, and durability — alongside good growth and lean carcass qualities. Performance is strongly influenced by within-breed genetics, nutrition, housing, and management.',
  climateAdaptation:
    'A widely adapted breed kept across many climates, predominantly in housed and semi-intensive systems; white skin can be sun-sensitive in intense outdoor conditions.',
  managementContext:
    'Central to intensive and integrated commercial systems, usually as a maternal line within structured crossbreeding programmes. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'One of the most widely distributed pig breeds globally, present as a purebred and within hybrid maternal lines across Europe, the Americas, Asia, and Oceania.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global; an English breed that is a foundation of worldwide commercial pig production. Husbandry and regulation vary by country.',
  climateContext:
    'Broadly adapted, mainly housed or semi-intensive; sun-sensitive skin warrants shade outdoors.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance figures are highly line- and management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s status as a major global commercial line.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Large White (Yorkshire) pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Large White / Yorkshire (pig breed)',
    description:
      'The Large White (Yorkshire): a white, erect-eared English pig and one of the most important maternal lines in commercial pig production worldwide.',
    keywords: [
      'Large White pig',
      'Yorkshire pig',
      'maternal line',
      'pig breed',
    ],
  },
  structuredData: { article: true },
};
