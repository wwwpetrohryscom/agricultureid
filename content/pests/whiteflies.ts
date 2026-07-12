import type { PestContent } from '@/types/content';

export const whiteflies: PestContent = {
  id: 'pest-whiteflies',
  slug: 'whiteflies',
  contentType: 'pest',
  title: 'Whiteflies',
  scientificName: 'Family Aleyrodidae (order Hemiptera)',
  alternativeNames: ['White flies', 'Aleyrodids'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Aleyrodidae)',
  summary:
    'Whiteflies are small, moth-like sap-feeding insects found on the undersides of leaves. They weaken plants through feeding and honeydew production, and several species are important vectors of plant viruses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Whiteflies are small insects, typically only one to two millimetres long, with a powdery white wax coating that gives adults a moth-like appearance. They are true bugs in the order Hemiptera, related to aphids and scale insects, and are found worldwide on a very wide range of host plants, particularly in warm climates and protected growing environments such as greenhouses.',
    },
    {
      type: 'paragraph',
      text: 'Like aphids, whiteflies feed by inserting piercing-sucking mouthparts into plant tissue to withdraw sap, and they excrete sugary honeydew as a byproduct. Certain whitefly species, most notably Bemisia tabaci, are also highly efficient vectors of plant viruses, including begomoviruses that can cause severe disease in tomato and other crops.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Aleyrodidae' },
    { label: 'Feeding', value: 'Sucking sap from the undersides of leaves' },
    {
      label: 'Key concern',
      value:
        'Direct feeding damage, honeydew and sooty mould, and virus transmission',
    },
    {
      label: 'Reproduction',
      value:
        'Rapid in warm conditions; many overlapping generations are possible',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitic wasps, predatory beetles, lacewings, predatory bugs',
    },
    {
      label: 'Sign',
      value:
        'Adults flying up in clouds when foliage is disturbed; sticky honeydew and sooty mould',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult whiteflies are tiny, winged insects covered in a fine white wax, usually resting on the undersides of leaves. Immature stages (nymphs) are flattened, oval, and scale-like, ranging from translucent to pale yellow, and remain fixed in place while feeding on the underside of leaves.',
        },
        {
          type: 'list',
          items: [
            'Adults fly up in a small cloud when infested foliage is disturbed',
            'Sticky honeydew on leaves and surfaces below, often with black sooty mould growing on it',
            'Yellowing, wilting, or reduced vigour under heavy, sustained infestation',
            'Pale, flattened nymphs and cast skins visible on the undersides of leaves',
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
          text: 'Eggs are laid on the undersides of leaves, often anchored by a short stalk and sometimes arranged in a circular or arc-shaped pattern. After hatching, a brief mobile "crawler" stage settles to begin feeding, after which the nymph passes through several flattened, immobile instars before a final non-feeding stage that precedes adult emergence.',
        },
        {
          type: 'table',
          caption: 'Whitefly life stages',
          columns: ['Stage', 'Description'],
          rows: [
            [
              'Egg',
              'Laid on the underside of leaves, often anchored by a short stalk.',
            ],
            [
              'Crawler (1st instar)',
              'Brief mobile stage; settles to begin feeding.',
            ],
            [
              'Sessile nymphal instars',
              'Flattened, scale-like, immobile stages that feed continuously.',
            ],
            [
              'Pupal (final) stage',
              'Non-feeding stage preceding adult emergence.',
            ],
            [
              'Adult',
              'Winged, mobile stage capable of dispersal and, in some species, virus transmission.',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'In warm climates and protected environments such as greenhouses, generations overlap continuously, so all life stages may be present at once and populations can persist without a clear seasonal gap.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Direct feeding by large whitefly populations can weaken plants, cause yellowing, and reduce vigour. Honeydew excreted during feeding coats leaves and fruit, and the sooty mould that grows on it can further reduce photosynthesis and lower produce quality. For many crops, however, the greatest economic impact comes from the plant viruses that some whitefly species transmit while feeding.',
        },
        {
          type: 'paragraph',
          text: 'Whiteflies attack a very broad range of host crops. Notable hosts include tomato, potato, and soybean, alongside many other vegetables and ornamentals, with the specific pest species and dominant biotype varying by region and cropping system.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Virus transmission is species- and biotype-specific',
          text: 'Whitefly-transmitted viruses, such as tomato yellow leaf curl virus, are associated with particular whitefly species and biotypes and are most damaging in specific regions and cropping systems. Local extension guidance is the best source for which viruses and vectors are relevant to a given area.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular scouting for whiteflies focuses on the undersides of leaves and on field or greenhouse margins, where colonization often begins, so that trends can be tracked before populations become difficult to manage.',
        },
        {
          type: 'list',
          items: [
            'Yellow sticky traps placed within the canopy to catch flying adults',
            'Inspection of leaf undersides for eggs, nymphs, and cast skins',
            'Gently disturbing foliage to observe adults flushing into flight',
            'Prioritizing field edges or greenhouse entry points where infestations often start',
          ],
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Whitefly management, like that of other sap-feeding pests, relies on combining several tactics within an integrated pest management approach rather than a single control method.',
        },
        {
          type: 'list',
          items: [
            'Conserve natural enemies such as parasitic wasps, predatory beetles, and lacewings',
            'Avoid excessive nitrogen fertilization, which can encourage lush growth attractive to whiteflies',
            'Use reflective mulches or fine screening in greenhouses to reduce colonization where practical',
            'Remove heavily infested crop residues and manage weeds that can host whiteflies between crops',
            'Monitor with traps and leaf inspection, and use local thresholds to guide any intervention',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. Whitefly populations in some regions have also developed resistance to certain insecticide classes, reinforcing the value of an integrated approach. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'soybean' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Global overview of a large insect family; pest species, biotypes, virus relationships, and guidance vary by region and by production system (open field versus protected cultivation).',
  climateContext:
    'Whitefly populations build fastest in warm conditions and can persist year-round in greenhouses and mild climates.',
  limitations: [
    'This is a general overview of a large insect family, not species- or biotype-level guidance for a specific crop or region.',
    'Virus-vector relationships differ among whitefly species and biotypes and are not exhaustively covered here.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'uc-ipm',
      citedFor: 'Whitefly identification and IPM principles',
    },
    { sourceId: 'cabi', citedFor: 'Whitefly biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Monitoring and management context in field crops',
    },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory context for whitefly-vectored plant viruses',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Whiteflies',
    description:
      'Whiteflies explained: identification, biology and life cycle, crop damage, virus transmission, monitoring, and integrated management principles.',
    keywords: ['whiteflies', 'Aleyrodidae', 'sap-feeding insect', 'crop pest'],
  },
  structuredData: { article: true },
};
