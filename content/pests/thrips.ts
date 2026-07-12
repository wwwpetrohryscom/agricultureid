import type { PestContent } from '@/types/content';

export const thrips: PestContent = {
  id: 'pest-thrips',
  slug: 'thrips',
  contentType: 'pest',
  title: 'Thrips',
  scientificName: 'Order Thysanoptera',
  alternativeNames: ['Thunderflies', 'Storm flies'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Thysanoptera',
  summary:
    'Thrips are minute, slender insects that feed by piercing and rasping plant tissue. Several species also transmit damaging plant viruses, making monitoring and integrated management central to controlling their impact.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Thrips are a large order of tiny, elongate insects, most no more than one to two millimetres long, with characteristic narrow, fringed wings when winged forms are present. Hundreds of species are recognized worldwide, and a relatively small number are significant agricultural pests, feeding on vegetables, fruit, ornamentals, and field crops.',
    },
    {
      type: 'paragraph',
      text: 'Beyond the direct injury caused by their feeding, some thrips species are efficient vectors of tospoviruses, a group of plant viruses that can cause severe losses in susceptible crops. This dual role — as both a feeding pest and a virus vector — makes thrips an important target of integrated pest management programs in many regions.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Thysanoptera' },
    { label: 'Size', value: 'Roughly 1–2 mm long as adults' },
    {
      label: 'Feeding',
      value:
        'Piercing and rasping leaf, flower, and fruit tissue to feed on cell contents',
    },
    {
      label: 'Key concern',
      value:
        'Feeding damage and, in some species, transmission of tospoviruses',
    },
    {
      label: 'Natural enemies',
      value: 'Minute pirate bugs, predatory mites, predatory thrips, lacewings',
    },
    {
      label: 'Sign',
      value:
        'Silvery stippling, black flecks of excrement, distorted growing points',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Thrips are slender, spindle-shaped insects that are easily overlooked without close inspection or a hand lens. Adults of many pest species are pale yellow to dark brown or black, and winged individuals have two pairs of narrow wings fringed with long hairs, a feature reflected in the order name Thysanoptera ("fringed wing").',
        },
        {
          type: 'list',
          items: [
            'Silvery or bronzed stippling on leaf and fruit surfaces where cell contents have been removed',
            'Tiny black flecks of excrement (frass) on leaves',
            'Distorted, streaked, or discoloured flowers and growing points',
            'Insects visible when flowers or leaf whorls are shaken over a white surface',
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
          text: 'Thrips develop through an egg stage, two active larval instars, and non-feeding prepupal and pupal stages before becoming adults. Eggs are typically inserted into plant tissue with a saw-like ovipositor, while the prepupal and pupal stages often occur in soil, leaf litter, or sheltered plant structures such as flowers.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Egg',
              description:
                'Inserted into plant tissue; not visible without dissection.',
            },
            {
              term: 'Larva (two instars)',
              description:
                'Active, feeding stage resembling a small, wingless adult.',
            },
            {
              term: 'Prepupa and pupa',
              description:
                'Non-feeding, largely immobile stages, often found in soil or sheltered plant sites.',
            },
            {
              term: 'Adult',
              description:
                'Winged or wingless depending on species; capable of dispersal and, in some species, virus transmission.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Many pest thrips can build populations quickly under favourable temperatures, and colonies often develop unnoticed within concealed sites such as flowers and leaf whorls before damage becomes obvious.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Thrips feeding punctures individual plant cells and removes their contents, leaving behind characteristic silvery or bronzed scarring as air replaces the emptied cells. Heavy feeding can distort leaves, flowers, and fruit, and feeding on growing points can stunt or deform new growth.',
        },
        {
          type: 'paragraph',
          text: 'A smaller number of thrips species, including the western flower thrips, are recognized as efficient vectors of tospoviruses such as tomato spotted wilt virus. Transmission generally requires larvae to acquire the virus while feeding on an infected plant; the virus is then carried through to the adult stage, which can spread it further. Host crops affected by thrips and thrips-vectored viruses include a wide range of vegetables and ornamentals, with tomato and potato among the notable examples.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Virus transmission is species-specific',
          text: 'Not all thrips species transmit plant viruses, and the relationship between a given thrips species, virus, and crop is specific. Confirming which species and viruses are relevant locally is an important first step before assuming a virus risk.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because thrips are small and often hide within flowers, leaf whorls, and other sheltered plant parts, monitoring typically combines several methods rather than relying on visual inspection alone.',
        },
        {
          type: 'list',
          items: [
            'Blue or yellow sticky traps placed within or above the canopy to catch dispersing adults',
            'Tapping or shaking flowers and foliage over a white surface or beat sheet to dislodge and count insects',
            'Direct inspection of flowers and new growth, where thrips often concentrate',
            'Tracking trends over time and comparing counts with locally established thresholds',
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
          text: 'Thrips management fits within an integrated pest management framework that favours prevention and monitoring over reliance on any single tactic.',
        },
        {
          type: 'list',
          items: [
            'Conserve natural enemies such as minute pirate bugs, predatory mites, and lacewings',
            'Remove or manage weeds and volunteer plants that can host thrips or the viruses they transmit',
            'Use virus-tested or certified planting material where thrips-vectored viruses are a concern',
            'Monitor regularly with traps and direct inspection, and use local thresholds to guide any response',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels. Thrips populations in many regions have developed resistance to multiple insecticide classes, which is a further reason monitoring and integrated approaches are emphasized over repeated treatments. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Global overview of a diverse insect order; pest species, virus relationships, hosts, and guidance vary by region.',
  climateContext:
    'Thrips development and population growth accelerate in warm, dry conditions and slow in cool or wet weather.',
  limitations: [
    'This is a general overview of a large and diverse insect order, not species-level guidance for a specific crop or region.',
    'Virus-vector relationships are specific to particular thrips species and viruses and are not exhaustively covered here.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'uc-ipm',
      citedFor: 'Thrips identification and IPM principles',
    },
    { sourceId: 'cabi', citedFor: 'Thrips biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Monitoring and management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Thrips',
    description:
      'Thrips explained: identification, biology and life cycle, feeding damage, virus transmission, monitoring, and integrated management principles.',
    keywords: ['thrips', 'Thysanoptera', 'sap-feeding insect', 'crop pest'],
  },
  structuredData: { article: true },
};
