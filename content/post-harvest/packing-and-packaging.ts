import type { PostHarvestContent } from '@/types/content';

export const packingAndPackaging: PostHarvestContent = {
  id: 'post-harvest-packing-and-packaging',
  slug: 'packing-and-packaging',
  contentType: 'post-harvest',
  title: 'Packing and Packaging',
  postHarvestClass: 'handling',
  alternativeNames: ['Packaging', 'Packing', 'Produce packaging'],
  category: 'Post-harvest operation',
  subcategory: 'Handling & conditioning',
  summary:
    'Packing and packaging protect harvested produce and grain during handling, storage, and transport — containing and stacking the product, cushioning it against damage, and helping maintain the conditions that preserve quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Packing and packaging place harvested produce or grain into containers designed to protect it and make it easier to handle, store, transport, and sell. Packaging ranges from sacks and bulk bins for grain to crates, cartons, and consumer packs for fresh fruit and vegetables. Well-chosen packaging is a quiet but important part of reducing post-harvest loss, because much damage happens during handling and transport.',
    },
    {
      type: 'paragraph',
      text: 'Good packaging does several jobs at once: it contains the product in convenient units, protects it from crushing, impact, and abrasion, allows safe stacking, and can help maintain conditions such as ventilation, humidity, or a modified atmosphere. Poor packaging — too weak, badly ventilated, or overfilled — is itself a major cause of bruising and decay.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Contain, protect, and handle produce and grain through the chain',
    },
    {
      label: 'Protects against',
      value: 'Crushing, impact, abrasion, and contamination',
    },
    {
      label: 'Forms',
      value:
        'Sacks and bins for grain; crates, cartons, and consumer packs for produce',
    },
    {
      label: 'Can maintain',
      value: 'Ventilation, humidity, and modified atmospheres for perishables',
    },
    {
      label: 'Loss risk if poor',
      value:
        'Weak, overfilled, or badly ventilated packs cause bruising and decay',
    },
    {
      label: 'Works with',
      value: 'Sorting, cooling, and the cold chain',
    },
  ],
  sections: [
    {
      id: 'functions',
      heading: 'What packaging does',
      body: [
        {
          type: 'paragraph',
          text: 'The primary function of packaging is protection. Fresh produce is easily bruised and cut, and the compression, vibration, and impacts of stacking and transport cause much of the damage seen at market. A package sized and built for the product cushions it, limits movement, and lets units be stacked without crushing those beneath. For grain, packaging in sacks or the design of bulk handling protects against spillage, contamination, and moisture.',
        },
        {
          type: 'paragraph',
          text: 'Packaging also carries out secondary roles: it forms convenient handling and selling units, provides ventilation to remove heat of respiration, helps hold humidity around perishables, and in some cases creates a modified atmosphere. It also carries the labelling and traceability information that supply chains and regulators require.',
        },
      ],
    },
    {
      id: 'choosing',
      heading: 'Choosing packaging',
      body: [
        {
          type: 'list',
          items: [
            'Match the strength and size of the package to the product and the stacking it must withstand.',
            'Provide ventilation for perishables to release heat of respiration and avoid moisture build-up.',
            'Avoid overfilling, which crushes produce, and underfilling, which lets it move and bruise.',
            'Use clean packaging and, for reused containers, ensure they do not carry decay or contamination.',
            'Consider cost, availability, and whether packaging is returnable, recyclable, or single-use.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Packaging supports the whole chain',
          text: 'Packaging works best alongside good sorting, prompt cooling, and an intact cold chain; on its own it cannot preserve produce that is warm, damaged, or unsound.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'paragraph',
          text: 'The best package is the one that delivers the product to its destination in sound condition at acceptable cost. That means selecting packaging appropriate to the commodity, the distance and conditions of transport, and the market, and pairing it with careful handling. Because damage is cumulative, protecting produce at every transfer point — from field to pack to transport to store — matters as much as the packaging itself.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Packaging of fresh produce and post-harvest loss reduction',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Packaging and handling research for fresh produce',
    },
    {
      sourceId: 'usda',
      citedFor: 'Post-harvest handling and packaging of fruits and vegetables',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Packaging choices depend on commodity, transport conditions, market, and cost.',
  limitations: [
    'The best packaging is commodity- and supply-chain-specific; there is no single package suited to all products.',
    'Packaging protects and maintains conditions but cannot preserve produce that is warm, damaged, or already unsound.',
    'Packaging choices involve trade-offs among protection, ventilation, cost, and environmental impact that vary by context.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Packing and Packaging of Produce and Grain',
    description:
      'How packing and packaging protect produce and grain in handling, storage, and transport — containment, cushioning, ventilation, and choosing the right package.',
    keywords: [
      'packing and packaging',
      'produce packaging',
      'post-harvest packaging',
      'crates and cartons',
      'transport damage',
    ],
  },
  structuredData: { article: true },
};
