import type { PestContent } from '@/types/content';

export const armyworms: PestContent = {
  id: 'pest-armyworms',
  slug: 'armyworms',
  contentType: 'pest',
  title: 'Armyworms',
  scientificName:
    'Larvae of Spodoptera and Mythimna species (order Lepidoptera, family Noctuidae), distinct from the related fall armyworm (Spodoptera frugiperda)',
  alternativeNames: [
    'African armyworm',
    'Oriental armyworm',
    'Common armyworm',
  ],
  category: 'Insect pest',
  subcategory: 'Foliage-feeding caterpillar',
  pestGroup: 'Insect — Lepidoptera (Spodoptera/Mythimna)',
  summary:
    'Armyworms are caterpillars, chiefly Spodoptera and Mythimna species, named for their habit of moving en masse across fields when local food is exhausted, causing rapid, severe defoliation in maize, rice, and sorghum.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Armyworms are a group of caterpillars, distinct from but related to the fall armyworm, that share a striking behaviour: when populations are dense and local vegetation is stripped, larvae move together across the ground in large numbers in search of new food, sometimes crossing entire fields in a short time.',
    },
    {
      type: 'paragraph',
      text: 'Outbreaks can develop quickly from moths that migrate in on weather systems, and because larvae feed mostly at night and hide in soil, litter, or plant bases during the day, damage is often first noticed only after substantial defoliation has already occurred.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Caterpillars, order Lepidoptera, family Noctuidae',
    },
    {
      label: 'Feeding',
      value: 'Chewing leaves and, at high densities, stems and seed heads',
    },
    {
      label: 'Key concern',
      value:
        'Rapid, severe defoliation, especially in dense, mass-moving outbreaks',
    },
    {
      label: 'Behaviour',
      value: 'Mass movement across fields when local food supply is exhausted',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitoid wasps and flies, predatory bugs, entomopathogenic viruses and fungi',
    },
    {
      label: 'Sign',
      value:
        'Rapidly stripped foliage, larvae active at night and hidden by day, moth flight after rain',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae are typically smooth, striped caterpillars ranging from green to brown or nearly black, reaching three to four centimetres at maturity, often with a pale stripe along each side. Adults are drab, night-flying moths rarely noticed except in large numbers after migratory flights.',
        },
        {
          type: 'paragraph',
          text: 'The clearest field sign is rapid, extensive defoliation appearing over a short period, often with larvae found hiding under soil clods, in leaf litter, or at the base of plants during the day.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Moths often arrive on wind systems associated with rainfall and lay egg masses on leaves. Larvae pass through several instars, feeding mostly at night, with the final instars responsible for the bulk of defoliation before larvae drop to the soil to pupate. Several generations can occur in a season under favourable conditions.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Dense larval populations can strip leaves from plants within days, and where food is exhausted, larvae move en masse to adjacent, still-green vegetation, extending damage across a field or between fields. Seed heads and stems may also be attacked once foliage is depleted.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include maize, rice, and sorghum, along with pasture grasses and other cereals.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps for adult moths, combined with field scouting for egg masses and young larvae, especially after rainfall events associated with moth migration, support early detection before defoliation becomes severe.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because armyworm populations can escalate quickly, management relies on early detection and rapid response within an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Scout regularly, particularly after rain events linked to moth migration',
            'Conserve parasitoid wasps and flies, predatory bugs, and other natural enemies',
            'Use trenches or barriers to slow mass larval movement between fields where outbreaks occur',
            'Coordinate monitoring at a landscape scale, since outbreaks can affect neighbouring fields quickly',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'grasshoppers' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found across cereal- and pasture-growing regions in Africa, Asia, and beyond; the dominant species, migration patterns, and outbreak frequency vary by region.',
  climateContext:
    'Moth migration and egg-laying are often linked to rainfall events, and warm conditions afterward support rapid larval development and outbreak build-up.',
  limitations: [
    'This entry covers armyworm species other than the fall armyworm, which is treated separately given its distinct global spread and impact.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'fao', citedFor: 'Outbreak monitoring and management context' },
    { sourceId: 'cimmyt', citedFor: 'Cereal pest-management research context' },
    { sourceId: 'usda-aphis', citedFor: 'Regulatory and distribution context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Armyworms',
    description:
      'Armyworms explained: mass-movement biology, rapid defoliation in cereals, migration-linked outbreaks, monitoring, and integrated management.',
    keywords: [
      'armyworms',
      'Spodoptera',
      'Mythimna',
      'cereal defoliation pest',
    ],
  },
  structuredData: { article: true },
};
