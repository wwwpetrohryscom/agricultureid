import type { PestContent } from '@/types/content';

export const sweetpotatoWeevil: PestContent = {
  id: 'pest-sweetpotato-weevil',
  slug: 'sweetpotato-weevil',
  contentType: 'pest',
  title: 'Sweetpotato Weevil',
  scientificName: 'Cylas formicarius (Coleoptera: Brentidae)',
  alternativeNames: ['Sweet potato weevil'],
  category: 'Insect pest',
  subcategory: 'Root- and vine-boring weevil',
  pestGroup: 'Insect — Coleoptera (Brentidae)',
  summary:
    'Sweetpotato weevil is a slender, ant-like weevil whose larvae tunnel through sweet potato vines and storage roots; feeding triggers bitter compounds that render even lightly damaged roots unpalatable, making it the crop’s most serious pest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweetpotato weevil is widely regarded as the most damaging pest of sweet potato in tropical and warm regions. The adult is a distinctive, slender, ant-like weevil, and its larvae bore through the vines and, critically, into the storage roots that are the harvested product.',
    },
    {
      type: 'paragraph',
      text: 'Beyond the direct tunnelling, the plant reacts to weevil feeding by producing bitter, unpleasant compounds, so even roots with limited visible damage can become unpalatable and unmarketable. Infestation continues in storage, and the pest carries over on volunteer plants and left-over roots, making sanitation and clean planting material essential.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Coleoptera, family Brentidae' },
    { label: 'Host', value: 'Sweet potato' },
    {
      label: 'Damaging stage',
      value: 'Larva (tunnels vines and storage roots)',
    },
    {
      label: 'Key concern',
      value: 'Root tunnelling plus bitter compounds that spoil roots',
    },
    {
      label: 'Distinctive trait',
      value: 'Slender, ant-like adult with long snout',
    },
    {
      label: 'Sign',
      value: 'Tunnels and dark frass in roots and thickened stems',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The adult is unusual and easy to recognize: slender and ant-like, with a long snout, a reddish-orange thorax and legs, and a dark metallic blue-black head and wing covers. Larvae are pale, legless grubs found tunnelling inside vines and roots. Because larvae are concealed, the pest is often detected by root and stem damage.',
        },
        {
          type: 'paragraph',
          text: 'Infested storage roots show tunnels packed with dark frass, and cut roots often smell and taste bitter. Thickened, cracked areas at the base of stems can also indicate larval feeding. The distinctive adult is a reliable identification cue when found.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs in small cavities in stems and exposed roots, sealing them over. Larvae tunnel and feed inside, then pupate within the plant, and adults emerge to continue the cycle. Generations are short in warm conditions and overlap, and breeding continues on stored roots, so populations can build steadily where hosts remain available.',
        },
        {
          type: 'paragraph',
          text: 'Cracks in the soil that expose storage roots give adults access for egg-laying, so soil moisture, hilling, and harvest timing strongly influence infestation. Volunteer plants and cull roots between crops serve as reservoirs.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval tunnelling in storage roots directly destroys marketable produce, and the plant’s defensive response produces bitter compounds that make even lightly infested roots inedible. Vine tunnelling can weaken plants, and damage continues to accumulate in storage. Because tolerance for damaged or bitter roots is very low, even modest infestation can cause major losses.',
        },
        {
          type: 'paragraph',
          text: 'Sweet potato is the host of concern. The weevil’s close dependence on the crop’s stems and storage roots underpins both its damage and the sanitation-based logic of its management.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are used to detect and monitor adult males and help time management, and inspection of stems and roots checks for tunnelling, frass, and adults. Monitoring stored roots and checking fields for soil cracking and exposed roots help anticipate and limit infestation.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management relies on clean planting material, sanitation, and cultural practices that protect roots, within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Use clean, weevil-free planting material and, where available, less susceptible varieties',
            'Practise crop rotation and strict sanitation, destroying crop residues, cull roots, and volunteers',
            'Hill soil over roots and maintain soil moisture to prevent cracks that expose roots to egg-laying',
            'Harvest promptly and avoid leaving mature roots in warm, dry, cracking soil',
            'Use pheromone trapping for monitoring, and manage stored roots carefully to limit carry-over',
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
  hostCrops: [{ type: 'crop', slug: 'sweet-potato' }],
  connections: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'soil-topic', slug: 'soil-crusting' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'wireworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'The key sweet potato pest across tropical and warm regions, damaging in both field and storage; pressure and guidance vary by region.',
  climateContext:
    'Warm conditions shorten the life cycle and favour many generations, and dry, cracking soils expose roots to egg-laying adults.',
  limitations: [
    'This is a general overview of the pest, not region-specific field or storage guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Storage losses depend heavily on the cleanliness of planting material and store management.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'cip',
      citedFor: 'Sweet potato pest management research',
    },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Sweetpotato Weevil',
    description:
      'Sweetpotato weevil (Cylas formicarius): identification, biology, root and vine tunnelling damage, monitoring, sanitation, and integrated management.',
    keywords: [
      'sweetpotato weevil',
      'Cylas formicarius',
      'sweet potato pest',
      'root weevil',
    ],
  },
  structuredData: { article: true },
};
