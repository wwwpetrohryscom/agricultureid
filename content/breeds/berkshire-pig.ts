import type { BreedContent } from '@/types/content';

export const berkshirePig: BreedContent = {
  id: 'berkshire-pig',
  slug: 'berkshire-pig',
  contentType: 'breed',
  title: 'Berkshire',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Berkshire is one of the oldest recorded English pig breeds, black with six white points, valued for high-quality, well-marbled pork. It is marketed as Kurobuta pork in Japan and is of ongoing conservation interest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Berkshire is an old English pig breed originating in the county of Berkshire and is among the earliest breeds to be recorded in a herd book. It is a medium-sized black pig with characteristic white points — typically the feet, face or snout, and tail tip — and erect ears.',
    },
    {
      type: 'paragraph',
      text: 'The Berkshire is prized for pork quality, including marbling and flavour, and has a strong premium market, notably in Japan where it is sold as Kurobuta. Having declined in the twentieth century, it has recovered through demand for quality pork and remains of conservation interest.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Pork (quality meat)' },
    { label: 'Origin', value: 'England (Berkshire)' },
    {
      label: 'Appearance',
      value: 'Black with six white points (feet, face/snout, tail); erect ears',
    },
    {
      label: 'Noted trait',
      value: 'Well-marbled, high-quality pork ("Kurobuta")',
    },
    {
      label: 'Conservation status',
      value:
        'Unknown here; recovered from decline, ongoing conservation interest',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Berkshire is one of the oldest recorded British pig breeds and was influential in the improvement of other breeds. It was exported early to the United States and Japan; the American Berkshire registry is among the oldest swine herd books, and Japanese demand for high-quality pork has supported the breed’s revival.',
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
            'Medium-sized, black-coated pig with white points on the feet, face or snout, and tail.',
            'Erect ears and a short, slightly dished face.',
            'Well-muscled frame associated with quality pork production.',
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
          text: 'The Berkshire is valued for meat quality — marbling, colour, and flavour — rather than for maximum leanness or growth, which underpins its premium pork markets. After a period of decline, the breed recovered on the strength of these quality markets and is tracked by conservation bodies.',
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
  breedType: 'Pork',
  originCountry: 'United Kingdom',
  originRegion: 'Berkshire, England',
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
    {
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'A heritage breed tracked in U.S. conservation contexts; consult the current priority list for the present category.',
    },
  ],
  primaryUses: ['Quality pork production', 'Heritage and premium markets'],
  physicalCharacteristics:
    'Medium-sized, black-coated pig with white points on the feet, face or snout, and tail, and erect ears. Short, slightly dished face and a well-muscled frame.',
  productionCharacteristics:
    'Valued for meat quality — marbling, colour, and flavour — rather than maximum leanness or growth, supporting premium pork markets such as Japanese Kurobuta. Outcomes depend on line, feeding, and management.',
  climateAdaptation:
    'A hardy heritage breed suited to outdoor, pasture-based, and semi-intensive systems across temperate climates, with appropriate shade and shelter.',
  managementContext:
    'Kept in heritage, outdoor, and premium-pork systems, often on pasture. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in England and maintained in the United Kingdom, United States, Japan, Australia, and elsewhere, largely in quality-pork and heritage systems.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global; an English heritage breed maintained internationally in quality-pork systems. Husbandry and regulation vary by country.',
  climateContext:
    'Hardy heritage pig suited to outdoor and pasture-based temperate systems with shelter.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Meat-quality and performance figures are highly management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: the breed has recovered from earlier decline but categories are date- and organisation-specific — consult current FAO DAD-IS and conservation listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Conservation context for a heritage pig breed',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Berkshire pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Berkshire (pig breed)',
    description:
      'The Berkshire: an old English black pig with six white points, prized for well-marbled, high-quality pork (Kurobuta) and of ongoing conservation interest.',
    keywords: ['Berkshire pig', 'Kurobuta', 'heritage pig', 'pig breed'],
  },
  structuredData: { article: true },
};
