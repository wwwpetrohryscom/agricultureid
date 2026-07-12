import type { PestContent } from '@/types/content';

export const rootKnotNematode: PestContent = {
  id: 'pest-root-knot-nematode',
  slug: 'root-knot-nematode',
  contentType: 'pest',
  title: 'Root-Knot Nematode',
  scientificName: 'Meloidogyne spp. (phylum Nematoda)',
  alternativeNames: ['Root-knot eelworm'],
  category: 'Nematode pest',
  subcategory: 'Root-galling roundworm',
  pestGroup: 'Nematode — Meloidogyne spp.',
  summary:
    'Root-knot nematodes are microscopic soil-dwelling roundworms, not insects, that invade plant roots and induce characteristic galls, impairing water and nutrient uptake across an unusually broad range of crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Root-knot nematodes are microscopic roundworms in the genus Meloidogyne that live in soil and invade plant roots, where juvenile stages establish permanent feeding sites and induce the plant to form characteristic swellings, or galls, along the root system.',
    },
    {
      type: 'paragraph',
      text: 'Because galled roots take up water and nutrients poorly, above-ground symptoms often resemble general nutrient or water stress, such as stunting, yellowing, and wilting in warm weather, even when soil moisture is adequate. This makes digging up and inspecting roots important for accurate diagnosis. Root-knot nematodes have an extremely broad host range and tend to be most problematic in warm, sandy soils.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Roundworms, phylum Nematoda, genus Meloidogyne' },
    {
      label: 'Feeding',
      value: 'Juveniles feed within roots at a fixed, specialized feeding site',
    },
    {
      label: 'Key concern',
      value: 'Root galling that impairs water and nutrient uptake',
    },
    {
      label: 'Favoured by',
      value: 'Warm soil temperatures and sandy, well-drained soils',
    },
    {
      label: 'Natural enemies',
      value: 'Some nematode-trapping fungi and bacteria',
    },
    {
      label: 'Sign',
      value: 'Visible root galls or swellings when affected plants are dug up',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Diagnosis relies mainly on digging up roots and looking for characteristic galls or swellings, which can range from small bumps to large, knotted masses depending on the species and level of infestation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Root gall',
              description:
                'A swelling on the root caused by the plant’s reaction to a feeding nematode.',
            },
            {
              term: 'Nodule vs. gall',
              description:
                'On legumes such as common bean, nitrogen-fixing rhizobial nodules are typically smaller, more uniform, and detach easily, unlike firmly attached nematode galls.',
            },
            {
              term: 'Juvenile',
              description:
                'The motile, infective larval stage that seeks out and penetrates root tips.',
            },
          ],
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Eggs hatch in soil into motile juveniles that seek out and penetrate root tips. Once inside, juveniles become sedentary, establishing a specialized feeding site and inducing gall formation as they develop through several moults to maturity.',
        },
        {
          type: 'paragraph',
          text: 'Mature females, often pear-shaped, can produce large numbers of eggs in a gelatinous mass on or near the root surface. Generation time is strongly temperature-dependent, with multiple generations possible per season in warm climates.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Galled roots have a reduced capacity to take up water and nutrients, leading to stunting, yellowing, and wilting under moisture stress, along with yield loss. Secondary infection by soil-borne fungi or bacteria through damaged root tissue can compound losses.',
        },
        {
          type: 'paragraph',
          text: 'The host range is unusually broad, including tomato, carrot, cucumber, and common bean among many other vegetables and field crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Soil sampling and laboratory assay for nematode presence and population levels before planting a susceptible crop, combined with digging and inspecting roots of symptomatic plants for galls, are the main monitoring approaches. Field history is also informative, since populations build up under repeated susceptible cropping.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Root-knot nematode management focuses on reducing soil populations and protecting roots rather than direct treatment of established infestations.',
        },
        {
          type: 'list',
          items: [
            'Use resistant or tolerant varieties and rootstocks where available',
            'Rotate with non-host or poor-host crops to reduce soil population over time',
            'Maintain soil organic matter and biological activity, which can support naturally suppressive organisms',
            'Avoid moving infested soil or equipment between fields where practical',
            'Base planting decisions on pre-plant soil sampling where available',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any nematicide or soil treatment use must follow current, locally authorized recommendations and product labels, and should consider effects on beneficial soil organisms. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'common-bean' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in warm and temperate agricultural soils worldwide; species, host preferences, and severity vary by region and soil type.',
  climateContext:
    'Warmer soil temperatures speed nematode development and allow more generations per season, while cooler soils slow activity and reproduction.',
  limitations: [
    'This is a general overview of a genus with many species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Confirming nematode identity and population levels typically requires laboratory soil or root assay.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'ncbi-taxonomy', citedFor: 'Genus and species-level taxonomy' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Root-Knot Nematode',
    description:
      'Root-knot nematode explained: identification, root-galling biology, crop damage, pre-plant soil sampling, and integrated management practices.',
    keywords: [
      'root-knot nematode',
      'Meloidogyne',
      'root galls',
      'nematode pest',
    ],
  },
  structuredData: { article: true },
};
