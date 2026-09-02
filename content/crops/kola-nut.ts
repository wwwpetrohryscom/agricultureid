import type { CropContent } from '@/types/content';

export const kolaNut: CropContent = {
  id: 'crop-kola-nut',
  slug: 'kola-nut',
  contentType: 'crop',
  title: 'Kola Nut',
  scientificName: 'Cola nitida',
  alternativeNames: ['Kola', 'Goro', 'Big kola'],
  category: 'Beverage crop',
  subcategory: 'West African tree crop grown for a stimulant seed',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Perennial',
  summary:
    'Kola is sold and consumed fresh, never dried, because its seed is recalcitrant — it cannot be dried without dying — and that single seed property built one of the oldest long-distance trades in West Africa.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kola is a forest tree of West Africa grown for a seed chewed as a stimulant and used in ceremony across the region. In the forest zone it is among the most important indigenous cash crops, and it has been an article of long-distance trade for centuries, carried north across the Sahel to the savanna and beyond.',
    },
    {
      type: 'paragraph',
      text: 'The seed cannot be dried. Kola has recalcitrant storage behaviour, meaning it dies if its moisture is reduced, so the entire trade in it moves fresh nuts kept moist — traditionally wrapped in leaves in baskets — rather than a dried commodity. Everything about how kola is handled follows from that.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Harvested organ', value: 'Seed, consumed fresh' },
    {
      label: 'Seed storage behaviour',
      value: 'Recalcitrant; the seed dies if dried',
    },
    {
      label: 'Species distinction',
      value: 'Cola nitida has two cotyledons; Cola acuminata has three to six',
    },
    { label: 'Reported caffeine', value: 'About 2.8 per cent of the seed' },
    {
      label: 'Role',
      value: 'Cash crop, stimulant and ceremonial good across West Africa',
    },
  ],
  sections: [
    {
      id: 'recalcitrant',
      heading: 'A seed that cannot be dried',
      body: [
        {
          type: 'paragraph',
          text: 'Kola seed is recalcitrant: reducing its moisture kills it. Every other tree crop traded at distance — cocoa, coffee, nutmeg — is dried to make it storable, and kola cannot be. Nuts are therefore kept moist, traditionally wrapped in leaves in baskets, where they hold for months and reportedly for a year or more. The whole logistics of the crop is the logistics of a living seed.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'trade',
      heading: 'An old long-distance trade',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh kola moved from the West African forest zone north into the savanna and Sahel for centuries, and the crop remains a substantial regional trade today. That a perishable, undryable product sustained long-distance commerce says something about how much demand there was for it, and it is the reason kola is a crop with historical infrastructure rather than a minor forest product.',
        },
      ],
    },
    {
      id: 'two-species',
      heading: 'Two kola species, two products',
      body: [
        {
          type: 'paragraph',
          text: 'Cola nitida is distinguished by seeds with two cotyledons and Cola acuminata by three to six. They are traded separately in West African markets — big kola and small or bitter kola — and command different prices for different uses. A record naming only "kola" cannot be assigned to a species without further evidence, and neither is bitter kola in the sense of Garcinia kola, which is a different genus again.',
        },
      ],
    },
    {
      id: 'caffeine',
      heading: 'A caffeine crop that is not a beverage',
      body: [
        {
          type: 'paragraph',
          text: 'Kola seed carries caffeine, at the level recorded in the key facts, together with theobromine and other compounds, and it is chewed rather than brewed. That places it with coffee, tea and cocoa chemically and outside them entirely in how it is used, processed and sold. AgricultureID records the composition as an agricultural fact; consumption questions belong to food and health authorities.',
        },
      ],
    },
    {
      id: 'ceremony',
      heading: 'A ceremonial good as much as a commodity',
      body: [
        {
          type: 'paragraph',
          text: "Kola is presented at weddings, funerals, negotiations and formal welcomes across much of West Africa, and a large share of demand is ceremonial rather than dietary. Prices and volumes respond to social calendars in a way no other tree crop's do, which is a real feature of the market and not folklore.",
        },
      ],
    },
    {
      id: 'agroforestry',
      heading: 'Grown in mixed forest gardens',
      body: [
        {
          type: 'paragraph',
          text: 'Kola is typically grown in mixed stands with cocoa, oil palm, plantain and food crops rather than in monoculture, and it tolerates shade. Its production is therefore embedded in the same smallholder forest-garden systems that carry cocoa, and its yields are rarely recorded separately.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'bearing',
      heading: 'A long wait and irregular yields',
      body: [
        {
          type: 'paragraph',
          text: 'Seedling trees take years to bear and yield irregularly between years, and grafting is used to shorten the wait and fix quality. As with other long-cycle tree crops, planting decisions respond to prices with a lag that outlasts most price cycles.',
        },
      ],
    },
    {
      id: 'weevils',
      heading: 'Storage pests in a fresh product',
      body: [
        {
          type: 'paragraph',
          text: "Kola weevils attack the nuts in store, and because the product cannot be dried the usual defence against storage insects is unavailable. Managing them in a moist product held for months is the crop's principal post-harvest problem.",
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'cola',
      heading: 'The drink and the crop',
      body: [
        {
          type: 'paragraph',
          text: "Kola extract was an original ingredient of cola soft drinks, and the crop's name survives in theirs. Modern cola formulations do not generally use kola extract, so the drink industry is not a market for the crop, and the association misleads anyone reading demand for one from the other.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'modified-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'tea' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    "The West African forest zone — Nigeria, Ghana, Côte d'Ivoire, Sierra Leone, Guinea and Cameroon — with regional trade north into the Sahel.",
  climateContext:
    'Humid tropical forest zone; high rainfall, shade tolerance and no dry-season tolerance to speak of.',
  limitations: [
    'Composition figures are reported values from the research literature and vary with species, provenance and maturity.',
    'Consumption and health questions are outside the scope of this page.',
    'Production statistics are thin because most kola is grown in mixed stands and traded regionally.',
  ],
  sourceReferences: [
    { sourceId: 'iita', citedFor: 'West African tree crop research' },
    {
      sourceId: 'cgiar',
      citedFor: 'Agroforestry and tree crop germplasm research',
    },
    { sourceId: 'cabi', citedFor: 'Cola nitida compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Tree crop production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Kola Nut',
    description:
      'Cola nitida as a crop: a seed that cannot be dried, the old fresh-nut trade across West Africa, two kola species, caffeine content and ceremonial demand.',
    keywords: [
      'kola nut',
      'Cola nitida',
      'recalcitrant seed',
      'West Africa',
      'stimulant crop',
    ],
  },
  structuredData: { article: true },
};
