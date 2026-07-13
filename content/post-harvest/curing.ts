import type { PostHarvestContent } from '@/types/content';

export const curing: PostHarvestContent = {
  id: 'post-harvest-curing',
  slug: 'curing',
  contentType: 'post-harvest',
  title: 'Curing (Roots, Tubers & Bulbs)',
  postHarvestClass: 'handling',
  alternativeNames: ['Wound healing', 'Skin set', 'Suberisation'],
  category: 'Post-harvest operation',
  subcategory: 'Handling & conditioning',
  summary:
    'Curing is a short conditioning period, at warm temperature and usually high humidity, that heals harvest wounds and sets the skin of roots, tubers, and bulbs so they resist water loss and decay in storage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Curing is the deliberate holding of freshly harvested roots, tubers, and bulbs under conditions that let their surfaces heal before storage. Lifting and handling inevitably cause cuts, bruises, and skinning, and these injuries are entry points for decay and routes for water loss. During curing the crop is held so that wounds heal and the skin firms, greatly improving how well the crop then stores.',
    },
    {
      type: 'paragraph',
      text: 'For potatoes and sweet potatoes, curing encourages the wound periderm to form and the skin to set; for bulb crops such as onions and garlic, an analogous drying of the neck and outer scales seals the bulb. The precise conditions differ by crop — sweet potatoes and yams are cured warm and humid, potatoes somewhat cooler, and onions by drying — but the purpose is the same: a sound, sealed surface before long storage.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value: 'Heals harvest wounds and sets or dries the skin before storage',
    },
    {
      label: 'Applies to',
      value:
        'Roots and tubers (potato, sweet potato, yam, cassava) and bulbs (onion, garlic)',
    },
    {
      label: 'Typical conditions',
      value: 'A short warm period at controlled humidity, crop-dependent',
    },
    {
      label: 'Why it matters',
      value: 'Cured crops lose less water and resist decay in storage',
    },
    {
      label: 'Timing',
      value: 'Carried out soon after harvest, before long-term storage',
    },
    {
      label: 'Crop differences',
      value:
        'Root and tuber curing is warm and humid; bulbs are cured by drying',
    },
  ],
  sections: [
    {
      id: 'why-cure',
      heading: 'Why curing improves storage',
      body: [
        {
          type: 'paragraph',
          text: 'Freshly lifted roots and tubers have delicate, easily damaged skins and unhealed wounds from harvest. Held under warm, humid conditions for a short period, they form a protective wound periderm over cuts and the outer skin toughens (a process related to suberisation). This healed, set surface strongly reduces both moisture loss and the invasion of decay organisms, so a cured crop keeps far better than an uncured one.',
        },
        {
          type: 'paragraph',
          text: 'Curing is therefore best thought of as the bridge between harvest and storage: a crop that is cured well enters storage with sound surfaces, while one put straight into store with fresh wounds is far more likely to rot or shrivel.',
        },
      ],
    },
    {
      id: 'by-crop',
      heading: 'Curing by crop group',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Potatoes',
              description:
                'Held warm and humid for a short period after harvest to heal wounds and set skins before cooling to storage temperature.',
            },
            {
              term: 'Sweet potatoes and yams',
              description:
                'Cured at warm temperature and high humidity, which promotes rapid wound healing and much longer storage life.',
            },
            {
              term: 'Onions and garlic',
              description:
                'Cured by drying the necks and outer scales, in the field or with warm moving air, to seal the bulb against moisture and decay.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the ideal temperature and humidity differ between these groups, curing conditions are matched to the crop. What they share is that curing precedes, and is distinct from, the cooler holding temperatures used for long-term storage.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Cure soon after harvest, before wounds can become infected.',
            'Use the warm, humid conditions appropriate to root and tuber crops, or drying conditions for bulbs.',
            'Provide airflow to remove excess moisture and heat and to keep conditions even.',
            'After curing, cool roots and tubers to their storage temperature; store cured bulbs dry.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Curing conditions are crop-specific',
          text: 'Warm, humid curing suits potatoes, sweet potatoes, and yams, whereas onions and garlic are cured by drying; using the wrong conditions can promote sprouting or decay.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'yam' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Curing and wound healing of roots, tubers, and bulbs',
    },
    {
      sourceId: 'cip',
      citedFor: 'Curing of potato and sweet potato for storage',
    },
    {
      sourceId: 'fao',
      citedFor: 'Curing in post-harvest handling of roots, tubers, and bulbs',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Curing conditions differ by crop and are adapted to local climate and storage facilities.',
  limitations: [
    'Optimum curing temperature, humidity, and duration are crop-specific; this entry gives principles, not exact settings.',
    'Root and tuber curing (warm, humid) and bulb curing (drying) are distinct processes and must not be confused.',
    'Curing improves storage but cannot compensate for severe harvest damage, disease, or poor storage conditions afterwards.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Curing Roots, Tubers & Bulbs for Storage',
    description:
      'How curing heals harvest wounds and sets the skin of potatoes, sweet potatoes, yams, onions, and garlic — warm humid curing versus drying, and good practice.',
    keywords: [
      'curing',
      'wound healing',
      'skin set',
      'potato curing',
      'sweet potato curing',
    ],
  },
  structuredData: { article: true },
};
