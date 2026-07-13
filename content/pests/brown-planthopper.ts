import type { PestContent } from '@/types/content';

export const brownPlanthopper: PestContent = {
  id: 'pest-brown-planthopper',
  slug: 'brown-planthopper',
  contentType: 'pest',
  title: 'Brown Planthopper',
  scientificName: 'Nilaparvata lugens (Hemiptera: Delphacidae)',
  alternativeNames: ['BPH', 'Rice brown planthopper'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding planthopper',
  pestGroup: 'Insect — Hemiptera (Delphacidae)',
  summary:
    'Brown planthopper is a sap-feeding insect of rice that lives at the base of the plant, can cause plants to dry and collapse in patches ("hopperburn"), and transmits damaging rice viruses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brown planthopper is one of the most damaging insect pests of rice across Asia. Adults and nymphs congregate near the waterline at the base of the plant, where they feed by sucking sap from the stem. Because it feeds low in the canopy and is small and brownish, early infestations are easily overlooked until damage becomes visible.',
    },
    {
      type: 'paragraph',
      text: 'Heavy feeding drains the plant and can cause circular patches of wilted, dried plants known as hopperburn, which may expand rapidly under favourable conditions. The species also transmits rice viruses, so its importance extends beyond direct feeding. Populations are strongly influenced by weather, varietal susceptibility, and management practices such as nitrogen use and insecticide choice.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Delphacidae' },
    { label: 'Host', value: 'Primarily rice' },
    {
      label: 'Feeding',
      value: 'Sucks sap from the stem base near the waterline',
    },
    {
      label: 'Key concern',
      value: 'Hopperburn and transmission of rice viruses',
    },
    {
      label: 'Natural enemies',
      value: 'Mirid bugs, spiders, and egg parasitoids',
    },
    {
      label: 'Sign',
      value: 'Yellowing then drying of plants in circular patches',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, brown, wedge-shaped insects a few millimetres long, occurring in both long-winged (migratory) and short-winged (resident) forms. Nymphs are pale to brownish and wingless. Colonies are concentrated at the base of the tillers, often just above the water surface, and disperse quickly when the plant is disturbed.',
        },
        {
          type: 'paragraph',
          text: 'The most conspicuous field sign is hopperburn: patches of plants that turn yellow, then brown, and dry out. Sticky honeydew and associated sooty mould may also be present at the plant base. Related planthoppers and leafhoppers can look similar, so inspecting the feeding position and body form helps confirm identity.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females insert eggs into the leaf sheath and midrib tissue. Nymphs pass through several instars before becoming adults, and generations are short in warm weather, allowing populations to build quickly within a single crop. Long-winged adults migrate over considerable distances, so infestations can arrive from other regions on seasonal winds.',
        },
        {
          type: 'paragraph',
          text: 'Population outbreaks are often associated with warm, humid conditions, dense lush canopies from high nitrogen, and the loss of natural enemies following broad-spectrum insecticide use, which can trigger a resurgence of the pest.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Direct feeding removes plant sap and can cause stunting, reduced tillering, and, in severe cases, hopperburn that collapses stands in expanding patches. Feeding wounds and honeydew also predispose plants to secondary problems. As a virus vector, the brown planthopper is associated with grassy stunt and ragged stunt diseases of rice, which can add substantially to losses where those viruses are present.',
        },
        {
          type: 'paragraph',
          text: 'Rice is the principal host. Damage severity depends on crop stage, variety, weather, and the abundance of natural enemies, and can differ widely between fields and seasons.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Scouting focuses on parting the canopy and inspecting the base of tillers near the waterline for adults and nymphs, and on watching for early yellowing that can precede hopperburn. Light traps are used in some areas to track migratory adult flights, and the ratio of planthoppers to natural enemies helps judge outbreak risk against local economic thresholds.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Brown planthopper management is a classic case for integrated pest management, because indiscriminate insecticide use can worsen outbreaks by killing natural enemies.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant rice varieties where they are available and appropriate',
            'Avoid excessive nitrogen and overly dense canopies that favour the pest',
            'Conserve natural enemies such as mirid bugs, spiders, and egg parasitoids by avoiding unnecessary broad-spectrum sprays',
            'Use synchronous planting and field sanitation across an area to reduce carry-over',
            'Base any intervention on scouting and local economic thresholds rather than calendar spraying',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies, because poorly chosen products can trigger planthopper resurgence. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'rice' }],
  connections: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'leafhoppers' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Major pest of rice in tropical and temperate Asia, with migratory populations moving seasonally; pressure, viruses, and guidance vary by region.',
  climateContext:
    'Warm, humid weather speeds development and shortens generation time, while seasonal winds carry migratory adults into new areas.',
  limitations: [
    'This is a general overview of the pest, not variety- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Associated virus pressure varies regionally and should be assessed locally.',
  ],
  sourceReferences: [
    { sourceId: 'irri', citedFor: 'Rice pest biology and IPM guidance' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Brown Planthopper',
    description:
      'Brown planthopper (Nilaparvata lugens) in rice: identification, biology, hopperburn and virus damage, monitoring, and integrated pest management.',
    keywords: [
      'brown planthopper',
      'Nilaparvata lugens',
      'rice pest',
      'hopperburn',
    ],
  },
  structuredData: { article: true },
};
