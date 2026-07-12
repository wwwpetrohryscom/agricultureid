import type { PlantDiseaseContent } from '@/types/content';

export const ergot: PlantDiseaseContent = {
  id: 'disease-ergot',
  slug: 'ergot',
  contentType: 'plant-disease',
  title: 'Ergot',
  scientificName: 'Claviceps purpurea (and related Claviceps species)',
  alternativeNames: ['Ergot of rye', 'Ergot of cereals'],
  category: 'Plant disease',
  subcategory: 'Fungal floret disease',
  causalAgent: 'Fungus Claviceps purpurea',
  pathogenType: 'fungal',
  summary:
    'Ergot is a fungal disease of open-flowering cereals and grasses, caused by Claviceps purpurea, in which dark sclerotia replace developing grain in infected florets. It is favoured by cool, wet weather during flowering and is a recognised grain-quality and food-safety concern because of the alkaloids sclerotia contain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ergot is caused by Claviceps purpurea, a fungus that infects the flowers of rye, wheat, triticale, and many other grasses, replacing the developing grain with a hard, dark resting structure called a sclerotium. Rye is particularly susceptible because of its extended open-flowering habit and cross-pollination.',
    },
    {
      type: 'paragraph',
      text: 'Beyond the direct yield effect of lost grain, ergot sclerotia contain alkaloids that are toxic to humans and livestock if consumed in sufficient quantity, making grain contamination a food- and feed-safety concern in addition to an agronomic one.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal floret disease (Claviceps purpurea)' },
    {
      label: 'Key sign',
      value:
        'Dark purplish-black sclerotia protruding from florets in place of normal grain',
    },
    { label: 'Hosts', value: 'Rye, wheat, and triticale, among other grasses' },
    {
      label: 'Favoured by',
      value: 'Cool, wet weather during an extended flowering period',
    },
    {
      label: 'Spread',
      value:
        'Airborne spores infecting open florets; sclerotia falling to soil or mixing with harvested grain',
    },
    {
      label: 'Management basis',
      value:
        'Clean seed, field sanitation, rotation, and grain cleaning to remove sclerotia',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Infected florets first exude a sticky, sweet-smelling fluid known as honeydew, which contains fungal spores and can attract insects. This stage is followed by the development of a hard, dark purplish-black sclerotium in place of the normal kernel, often protruding noticeably beyond the surrounding grain.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sclerotia vary in size and can be mistaken for foreign material in harvested grain. Where food or feed safety decisions depend on identification, confirm with grain testing or a diagnostic laboratory.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Sclerotia that fall to the soil, or that are returned with contaminated seed, can survive and germinate the following season to produce small, mushroom-like structures that release airborne ascospores. These spores infect open florets during flowering, and secondary spread can occur through insects and rain splash carrying the honeydew stage between florets.',
        },
        {
          type: 'list',
          items: [
            'Sclerotia can persist in soil or as a grain contaminant between seasons',
            'Infection requires open flowers, so crops and grasses with an extended flowering period are more exposed',
            'Nearby infected grasses can serve as an additional source of spores',
          ],
        },
      ],
    },
    {
      id: 'affected-hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: "Rye is the most susceptible major cereal because of its extended open-flowering and cross-pollinating habit. Wheat and triticale can also be affected, with triticale generally more exposed than wheat because it shares some of rye's flowering characteristics. Many wild and forage grasses can also host the fungus.",
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk factors',
      body: [
        {
          type: 'list',
          items: [
            'Cool, wet weather during the flowering period',
            'An extended or uneven flowering period, including in some hybrid seed production systems',
            'Nearby infected grasses or previous ergot-contaminated seed',
            'Reduced or delayed pollination that leaves florets open longer',
          ],
        },
      ],
    },
    {
      id: 'prevention-and-monitoring',
      heading: 'Prevention and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because ergot spreads through open flowers and persists as sclerotia, prevention combines clean planting material, field sanitation, and post-harvest grain cleaning.',
        },
        {
          type: 'list',
          items: [
            'Use certified, ergot-free seed',
            'Rotate away from highly susceptible cereals and control grassy weeds and volunteer plants that can host the fungus',
            'Bury sclerotia through tillage where consistent with the local cropping system',
            'Clean harvested grain to remove sclerotia before use as food or feed',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Food- and feed-safety consideration',
          text: 'Ergot sclerotia contain alkaloids that are toxic to humans and livestock. Grain and feed with ergot contamination should be assessed and handled according to local food- and feed-safety standards.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'rye' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'triticale' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'stem-rust' },
    { type: 'plant-disease', slug: 'common-smut' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; ergot occurs wherever susceptible cereals and grasses are grown, with rye-growing regions historically most affected.',
  climateContext:
    'Favoured by cool, wet weather during flowering, which prolongs floret exposure and favours spore germination and infection.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Food- and feed-safety thresholds for ergot contamination are set by local or national authorities and are not provided here.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cereal disease risk factors and sanitation guidance',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field-level identification and grain-quality guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ergot',
    description:
      'Ergot explained: Claviceps purpurea biology, sclerotia identification, affected cereal hosts, risk factors, and prevention and food-safety considerations.',
    keywords: ['ergot', 'Claviceps purpurea', 'rye disease', 'cereal disease'],
  },
  structuredData: { article: true },
};
