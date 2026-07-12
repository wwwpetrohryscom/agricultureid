import type { PestContent } from '@/types/content';

export const coloradoPotatoBeetle: PestContent = {
  id: 'pest-colorado-potato-beetle',
  slug: 'colorado-potato-beetle',
  contentType: 'pest',
  title: 'Colorado Potato Beetle',
  scientificName: 'Leptinotarsa decemlineata',
  alternativeNames: ['CPB', 'Potato bug'],
  category: 'Insect pest',
  subcategory: 'Defoliating beetle',
  pestGroup: 'Insect — Coleoptera (Chrysomelidae)',
  summary:
    'The Colorado potato beetle is a defoliating beetle that can strip potato and other solanaceous crops of foliage. It is notorious for developing resistance to insecticides, making integrated management especially important.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Colorado potato beetle (Leptinotarsa decemlineata) is a leaf beetle in the family Chrysomelidae, native to parts of North America and now established across much of the potato-growing regions of North America, Europe, and Asia. Both adults and larvae feed on foliage, and heavy infestations can defoliate potato plants and reduce yield.',
    },
    {
      type: 'paragraph',
      text: 'The species is particularly notable in pest-management circles for its well-documented ability to develop resistance to a wide range of insecticide classes over successive generations. This history of resistance is a central reason integrated pest management — combining monitoring, cultural practices, natural enemies, and judicious, rotated use of authorized products — is emphasized for this pest rather than repeated reliance on a single control tactic.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insect, order Coleoptera, family Chrysomelidae' },
    { label: 'Feeding', value: 'Chewing foliage; both adults and larvae feed' },
    {
      label: 'Key concern',
      value:
        'Defoliation of potato and other solanaceous crops; well-documented insecticide resistance',
    },
    {
      label: 'Primary host',
      value:
        'Potato, with other solanaceous crops such as tomato also affected',
    },
    {
      label: 'Natural enemies',
      value:
        'Predatory stink bugs, ground beetles, lady beetles (on eggs and larvae), parasitoids',
    },
    {
      label: 'Sign',
      value:
        'Distinctive striped adults, orange-red humpbacked larvae, and stripped or skeletonized foliage',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are rounded, roughly one centimetre long, and yellow-orange with ten black longitudinal stripes running down the wing covers. Larvae are humpbacked, orange-red to pink, with two rows of black spots along each side of the body and a dark head. Eggs are bright yellow-orange and laid upright in tight clusters on the undersides of leaves.',
        },
        {
          type: 'list',
          items: [
            'Adults: yellow-to-orange beetles about 1 cm long with ten black stripes along each wing cover',
            'Larvae: humpbacked, orange-red to pink grubs with two rows of black spots along each side and a black head',
            'Eggs: bright yellow-orange, laid upright in clusters on the undersides of leaves',
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
          text: "Adults overwinter in soil, often near the previous year's host plantings, and emerge in spring as host plants become available. After feeding and mating, females lay clusters of eggs on the undersides of leaves. Larvae pass through four progressively larger instars, feeding heavily throughout, before dropping to the soil to pupate. Depending on climate and the length of the growing season, one to several generations can occur in a single year.",
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Egg',
              description:
                'Laid in upright clusters on leaf undersides; hatching is faster in warm weather.',
            },
            {
              term: 'Larva (four instars)',
              description:
                'Increasingly large, humpbacked stages that feed heavily on foliage before dropping to the soil.',
            },
            {
              term: 'Pupa',
              description:
                'A non-feeding stage in the soil during which the adult form develops.',
            },
            {
              term: 'Adult',
              description:
                'Emerges from the soil to feed and mate, and, in temperate regions, later overwinters.',
            },
          ],
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: "Both larvae and adults chew foliage, and heavy populations can strip plants of leaves entirely — a process known as defoliation. Defoliation reduces the plant's capacity for photosynthesis and can significantly affect tuber yield if it occurs during critical growth stages. The beetle's primary host is potato, but it also feeds on other solanaceous plants, including tomato, and on related solanaceous weeds.",
        },
        {
          type: 'table',
          caption: 'Feeding behaviour by life stage',
          columns: ['Life stage', 'Feeding behaviour'],
          rows: [
            [
              'Early instar larvae',
              'Feed on leaf undersides, causing small holes and skeletonizing tissue.',
            ],
            [
              'Late instar larvae',
              'Consume large amounts of foliage; typically the most damaging feeding stage.',
            ],
            [
              'Adults',
              'Feed on foliage after emerging in spring and again later in the season.',
            ],
          ],
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular field scouting for eggs, larvae, and adults — especially early in the season, as overwintered adults colonize emerging plants — allows management decisions to be made before defoliation becomes severe.',
        },
        {
          type: 'list',
          items: [
            'Inspect leaf undersides for egg clusters and young larvae',
            'Scout field edges first, where colonizing overwintered adults often concentrate',
            'Track larval instar stages, since later instars cause most of the defoliation',
            'Compare counts or defoliation levels against locally established thresholds',
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
          text: 'Because of its history of resistance, Colorado potato beetle management relies on combining several tactics rather than repeated use of any single insecticide.',
        },
        {
          type: 'list',
          items: [
            "Rotate potato plantings away from the previous year's fields where practical, to delay colonization by overwintered adults",
            'Conserve natural enemies such as predatory stink bugs and ground beetles',
            'Use physical barriers, such as trench barriers or row covers, where feasible',
            'Monitor populations closely and, where any insecticide is used, follow guidance on rotating modes of action to slow further resistance development',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Widespread insecticide resistance',
          text: 'Colorado potato beetle populations in many regions have developed resistance to numerous insecticide classes over time. This well-documented history is a primary reason integrated pest management, rather than reliance on any single chemical tactic, is recommended for this pest.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, including guidance on rotating modes of action to manage resistance. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [{ type: 'pest', slug: 'aphids' }],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Overview applicable to regions where Colorado potato beetle is established, including much of North America, Europe, and parts of Asia; regulatory status and pest pressure vary by country.',
  climateContext:
    'Development is faster in warm conditions, and the number of generations per season increases with a longer, warmer growing season.',
  limitations: [
    'This is a species-level overview and does not substitute for region-specific scouting protocols or resistance-management plans.',
    'Insecticide resistance patterns vary by population and region and are not detailed here.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  claims: [
    {
      field: 'morphology',
      statement:
        'Adult Colorado potato beetles are rounded, roughly one centimetre long, yellow-orange with ten black longitudinal stripes running down the wing covers.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cabi',
          evidenceNote:
            'CABI compendium documents Colorado potato beetle adult body size and colouration.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'eppo-gd',
          evidenceNote:
            'EPPO Global Database species profile documents adult morphology and identification features of Leptinotarsa decemlineata.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    {
      sourceId: 'cabi',
      citedFor: 'Biology, hosts, and importance, including resistance',
    },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'psu-extension',
      citedFor: 'Monitoring and management context',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Scientific name and taxonomic classification',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Colorado Potato Beetle',
    description:
      'Colorado potato beetle explained: identification, biology and life cycle, defoliation damage, insecticide resistance, monitoring, and management principles.',
    keywords: [
      'Colorado potato beetle',
      'Leptinotarsa decemlineata',
      'potato pest',
      'insecticide resistance',
    ],
  },
  structuredData: { article: true },
};
