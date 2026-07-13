import type { PostHarvestContent } from '@/types/content';

export const storedGrainInsects: PostHarvestContent = {
  id: 'post-harvest-stored-grain-insects',
  slug: 'stored-grain-insects',
  contentType: 'post-harvest',
  title: 'Stored-Grain Insects',
  postHarvestClass: 'loss-management',
  alternativeNames: ['Stored-product insects', 'Grain storage pests'],
  category: 'Post-harvest operation',
  subcategory: 'Loss management',
  summary:
    'Stored-grain insects — weevils, borers, beetles, and moths — feed on and contaminate stored grain and pulses, causing weight loss, quality loss, and heating. Integrated pest management keeps them below damaging levels.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A group of insects specialises in living on stored grain, seeds, and pulses, and they are among the most important causes of loss after harvest. They include grain weevils and borers that develop inside kernels, and beetles and moths that feed on the grain surface, on broken grain, and on dust. Warm, moist grain suits them best, and because they can breed rapidly in store, small infestations can grow into serious ones within a storage season.',
    },
    {
      type: 'paragraph',
      text: 'Their damage is both direct and indirect. They eat the grain, reducing weight and nutritional value; they contaminate it with bodies, webbing, and waste; and their activity, together with associated moulds, generates heat and moisture that can lead to hot spots and further spoilage. Managing them relies on prevention and monitoring as much as on treatment — an integrated pest management approach.',
    },
  ],
  keyFacts: [
    {
      label: 'What they are',
      value: 'Insects that feed on stored grain, seed, and pulses',
    },
    {
      label: 'Main groups',
      value: 'Weevils, grain borers, flour and grain beetles, and grain moths',
    },
    {
      label: 'Favoured by',
      value: 'Warm, moist grain and dusty, broken, or dirty grain',
    },
    {
      label: 'Damage',
      value: 'Weight and quality loss, contamination, and heating',
    },
    {
      label: 'Two feeding types',
      value:
        'Internal feeders develop inside kernels; external feeders on the surface',
    },
    {
      label: 'Management',
      value:
        'Integrated pest management: prevention, hygiene, monitoring, and treatment',
    },
  ],
  sections: [
    {
      id: 'pests-and-damage',
      heading: 'The pests and their damage',
      body: [
        {
          type: 'paragraph',
          text: 'Stored-grain insects are often divided into internal and external feeders. Internal feeders, such as grain weevils and some borers, lay eggs in or on the kernel, and the larvae develop hidden inside, which makes early infestations hard to detect and hollows out the grain from within. External feeders, including many beetles and the larvae of grain moths, feed on the grain surface, on already-damaged kernels, and on the fine material and dust in a bulk, and moth webbing can bind grain together.',
        },
        {
          type: 'paragraph',
          text: 'Beyond the grain they eat, these insects downgrade grain through contamination and raise its temperature and moisture through their activity, which in turn favours storage moulds. Because they reproduce quickly in warm grain, unchecked populations can cause substantial loss over a storage period.',
        },
      ],
    },
    {
      id: 'ipm',
      heading: 'Integrated pest management',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Prevention and hygiene',
              description:
                'Store clean, well-dried grain in cleaned stores, removing residues and old grain that carry infestations from season to season.',
            },
            {
              term: 'Keeping grain dry and cool',
              description:
                'Drying to safe moisture and aeration to keep grain cool slow insect development and reproduction.',
            },
            {
              term: 'Monitoring',
              description:
                'Regular checks of grain temperature, sampling, and traps detect infestations early, before they spread.',
            },
            {
              term: 'Treatment',
              description:
                'Where needed, hermetic or modified atmospheres, approved contact insecticides, or fumigation are used under strict safety and residue rules.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The emphasis is on preventing infestations and catching them early, because prevention is cheaper and safer than treating a heavily infested bulk. Hermetic storage, by starving insects of oxygen, offers a chemical-free control option.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice and safety',
      body: [
        {
          type: 'list',
          items: [
            'Store only clean, well-dried grain, and clean stores thoroughly between seasons.',
            'Keep grain cool and dry through aeration to slow insect activity.',
            'Monitor temperature and sample for insects regularly, and act early on any found.',
            'Use hermetic storage or approved treatments where appropriate, following label and safety rules.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Fumigant and insecticide safety',
          text: 'Fumigants and grain-protectant insecticides are hazardous and strictly regulated; they must be applied only by trained, authorised users following label, residue, and safety requirements.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'pest', slug: 'weevils' },
    { type: 'crop', slug: 'common-bean' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Stored-grain pests and integrated post-harvest management',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Stored-product insect biology and control research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Stored-product insect pests and their management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Species mix and pressure vary with climate; warmer regions generally face higher pressure.',
  limitations: [
    'The species present and their importance vary by region, commodity, and storage conditions.',
    'Internal-feeding insects are hard to detect early, so infestations can be under-recognised until damage is advanced.',
    'Fumigants and insecticides are hazardous and regulated; permitted products and residue limits vary by country.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Stored-Grain Insects: Weevils, Borers & Moths',
    description:
      'How stored-grain insects — weevils, borers, beetles, and moths — damage stored grain and pulses, and how integrated pest management keeps them in check.',
    keywords: [
      'stored grain insects',
      'grain weevils',
      'stored product pests',
      'grain storage IPM',
      'grain moths',
    ],
  },
  structuredData: { article: true },
};
