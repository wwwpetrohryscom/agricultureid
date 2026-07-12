import type { PestContent } from '@/types/content';

export const mealybugs: PestContent = {
  id: 'pest-mealybugs',
  slug: 'mealybugs',
  contentType: 'pest',
  title: 'Mealybugs',
  scientificName: 'Family Pseudococcidae (order Hemiptera)',
  alternativeNames: ['Mealybug'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Pseudococcidae)',
  summary:
    'Mealybugs are soft-bodied, wax-covered sap-feeding insects that weaken plants through direct feeding and honeydew-related sooty mould, and act as virus vectors on grape, cassava, coffee, and cocoa.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mealybugs are small, soft-bodied insects covered in a white, waxy, mealy secretion that gives the group its name. They feed by inserting piercing-sucking mouthparts into plant tissue and are often found clustered in protected sites such as leaf axils, stem crevices, and root crowns.',
    },
    {
      type: 'paragraph',
      text: 'Besides direct feeding damage, mealybugs excrete honeydew that supports sooty mould growth, and some species transmit plant viruses, making them significant pests on a range of perennial and tropical crops.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Hemiptera, family Pseudococcidae',
    },
    {
      label: 'Feeding',
      value: 'Sucking sap from leaves, stems, fruit, and roots',
    },
    {
      label: 'Key concern',
      value:
        'Feeding weakness, honeydew and sooty mould, and virus transmission in some crops',
    },
    {
      label: 'Appearance',
      value: 'Soft body covered in white, waxy, mealy or cottony secretion',
    },
    {
      label: 'Natural enemies',
      value:
        'Ladybird beetles (including mealybug destroyer), parasitoid wasps, lacewings',
    },
    {
      label: 'Sign',
      value:
        'White cottony masses in leaf axils and crevices, honeydew, ants tending colonies',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Mealybugs are oval, soft-bodied insects, typically a few millimetres long, coated in a powdery or cottony white wax that often extends into filaments around the body margin. Colonies cluster in protected sites such as leaf axils, under bark, in fruit clusters, and around root crowns.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include the waxy masses themselves, sticky honeydew on foliage and fruit, black sooty mould growing on the honeydew, and ants actively tending colonies for the honeydew they produce.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Female mealybugs lay eggs in a protective waxy ovisac or give birth to live young, depending on species, and colonies can build up through several overlapping generations per year in warm climates. Young crawlers are the main mobile stage that disperses to new feeding sites and, on wind or via ants, to new plants.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding removes sap and can distort growth, while honeydew and associated sooty mould reduce photosynthesis and fruit or crop quality. On some crops, mealybugs also transmit damaging plant viruses, adding to the direct feeding impact.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include grape, cassava, coffee, and cocoa, among many other perennial, tropical, and greenhouse crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular inspection of protected plant parts — leaf axils, stem crevices, fruit clusters, and root crowns — along with checking for honeydew, sooty mould, and ant activity, helps detect colonies before they build to damaging levels.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Mealybug management fits within integrated pest management, combining biological, cultural, and monitoring-based approaches.',
        },
        {
          type: 'list',
          items: [
            'Conserve and, where suitable, augment natural enemies such as ladybird beetles and parasitoid wasps',
            'Manage ants that protect mealybug colonies from natural enemies',
            'Prune and remove heavily infested plant material where practical',
            'Inspect planting material and avoid moving infested stock between fields or greenhouses',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies given mealybugs’ protected feeding sites. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Widespread in tropical, subtropical, and greenhouse production worldwide; species and host importance vary considerably by crop and region.',
  climateContext:
    'Mealybugs generally build up faster in warm conditions and can be favoured by drought-stressed plants, while natural enemy activity is often reduced in protected microhabitats.',
  limitations: [
    'This is a general overview of a large family, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'cornell-cals', citedFor: 'Monitoring and management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mealybugs',
    description:
      'Mealybugs explained: identification, honeydew and sooty mould effects, biology, monitoring, and integrated management on grape, cassava, and cocoa.',
    keywords: [
      'mealybugs',
      'Pseudococcidae',
      'sap-feeding insect',
      'honeydew pest',
    ],
  },
  structuredData: { article: true },
};
