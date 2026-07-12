import type { BreedContent } from '@/types/content';

export const wagyu: BreedContent = {
  id: 'breed-wagyu',
  slug: 'wagyu',
  contentType: 'breed',
  title: 'Wagyu (Japanese Black)',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Japanese Black', 'Kuroge Washu'],
  summary:
    'Wagyu refers to Japanese cattle breeds; the dominant Japanese Black is a beef breed renowned for intense intramuscular fat (marbling) and is the basis of many premium branded beef products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The term Wagyu means, literally, Japanese cattle, and covers several native Japanese beef breeds. The most numerous and internationally significant is the Japanese Black (Kuroge Washu), a beef breed selected for an exceptional capacity to deposit fine intramuscular fat, producing the highly marbled beef for which Wagyu is famous.',
    },
    {
      type: 'paragraph',
      text: 'Japanese Black cattle are typically solid black or dark brown and moderate in frame. Many well-known premium beef designations in Japan are produced from Japanese Black cattle raised under defined regional programmes, and the breed has been exported and used purebred and in crossbreeding to introduce marbling into other beef populations.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Japan' },
    {
      label: 'Scope of name',
      value: 'Wagyu covers several Japanese breeds; Japanese Black is dominant',
    },
    { label: 'Coat', value: 'Typically solid black or dark brown' },
    { label: 'Notable trait', value: 'Intense intramuscular fat (marbling)' },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; Japanese and export-market Wagyu registries',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'Wagyu breeds derive from native Japanese cattle, historically used for work, that were later improved and selected for beef. Four Japanese breeds are generally recognised — Japanese Black, Japanese Brown (Red), Japanese Shorthorn, and Japanese Polled — of which the Japanese Black is by far the most numerous and the main source of highly marbled beef.',
        },
        {
          type: 'paragraph',
          text: 'Selection in Japan emphasised marbling and meat quality, supported by detailed pedigree recording. From the late 20th century, Wagyu genetics were exported, and Wagyu populations and registries were established in several countries, both as purebreds and for crossbreeding.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Japanese Black cattle are moderate-framed beef animals, usually solid black or dark brown. Their defining characteristic is the ability to deposit abundant fine intramuscular fat, which gives the meat its marbled appearance and distinctive eating quality.',
        },
        {
          type: 'paragraph',
          text: 'Wagyu is kept for premium beef, both as a purebred and in crossbreeding — for example crossed with other beef breeds to produce marbled cross-bred beef. Many famous regional beef brands in Japan are based on Japanese Black cattle finished under specific programmes.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Wagyu beef production, particularly for the highest marbling, is typically associated with long, carefully managed feeding periods, and the breed is often finished intensively. Management is oriented toward meat quality rather than maximum growth rate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Marbling potential is a strong genetic characteristic of the breed, but its expression depends heavily on genetics within the breed, feeding, and finishing, and outcomes differ between purebred and crossbred cattle and between production programmes.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'Japan',
  originRegion: 'Japan',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Japanese cattle breeds, including Japanese Black, are recorded in the global inventory.',
    },
    {
      registry: 'Japanese and export-market Wagyu registries',
      jurisdiction: 'Multiple',
      note: 'Pedigree recording in Japan and Wagyu associations in export markets maintain registers; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Premium beef production',
    'Crossbreeding to introduce marbling',
  ],
  physicalCharacteristics:
    'Moderate-framed beef cattle, in the dominant Japanese Black usually solid black or dark brown, selected for the deposition of abundant fine intramuscular fat.',
  productionCharacteristics:
    'A beef breed defined by intense marbling and meat quality rather than by rapid growth; production for high marbling is typically associated with long, carefully managed feeding. Grading and quality outcomes depend on genetics, feeding, and programme and are not quantified here.',
  climateAdaptation:
    'Kept in a range of temperate systems, often finished intensively; management is oriented to meat quality rather than to climatic hardiness.',
  managementContext:
    'Produced purebred and in crossbreeding, commonly with long finishing periods; many premium Japanese beef brands are based on Japanese Black cattle under defined regional programmes.',
  geographicDistribution:
    'Native to Japan, with exported Wagyu (mainly Japanese Black) populations and registries in Australia, North America, and elsewhere.',
  connections: [{ type: 'breed', slug: 'aberdeen-angus' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview; "Wagyu" covers several Japanese breeds, and registry rules and programmes vary by country.',
  climateContext:
    'A temperate-origin beef breed managed primarily for meat quality.',
  limitations: [
    '"Wagyu" is an umbrella term for several Japanese breeds; this record focuses on the dominant Japanese Black and does not separately detail the Japanese Brown, Shorthorn, or Polled breeds.',
    'Wagyu characteristics and results vary with line, feeding, finishing, and whether cattle are purebred or crossbred; marbling potential is a genetic strength rather than a fixed outcome, and no grading figures are stated here.',
    'FAO DAD-IS records conservation status of Japanese cattle breeds by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Records of Japanese cattle breeds and distribution',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species-level taxonomy (Bos taurus)',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General description of Wagyu and Japanese Black cattle',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wagyu / Japanese Black (cattle breed)',
    description:
      'Wagyu cattle: Japanese beef breeds led by the Japanese Black, renowned for intense marbling and the basis of many premium branded beef products.',
    keywords: ['Wagyu', 'Japanese Black', 'Kuroge Washu', 'marbled beef breed'],
  },
  structuredData: { article: true },
};
