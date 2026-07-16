import type { PostHarvestContent } from '@/types/content';

export const grainStorage: PostHarvestContent = {
  id: 'post-harvest-grain-storage',
  slug: 'grain-storage',
  contentType: 'post-harvest',
  title: 'Grain Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Dry, cool grain is biologically quiet. Storage works by holding the bulk at a moisture and temperature at which the grain itself, the storage moulds, and the insects are all too inactive to cause measurable deterioration, and by moving air through it to keep that state uniform throughout.',
  riskFactors: [
    'Moisture migration driven by temperature differences between the bulk and the outside air, wetting the surface',
    'Hot spots, where localised respiration generates heat and more moisture and spreads through the bulk',
    'Storage insects carried over in a store that was not cleaned between seasons',
    'Storage moulds wherever moisture is above the safe level for the intended holding period',
    'Rodent and bird access',
    'Water ingress through the structure',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  alternativeNames: ['Cereal storage', 'Grain preservation'],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Grain storage is the practice of holding dried grain safely over weeks to years by controlling moisture, temperature, insects, and moulds, so the crop retains its quality and value until it is sold, processed, or consumed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grain storage keeps harvested cereals, pulses, and oilseeds in good condition between harvest and use. Because harvests are seasonal but demand is year-round, most grain is stored — on-farm or in commercial silos — and the way it is stored determines how much is lost to spoilage, insects, and rodents.',
    },
    {
      type: 'paragraph',
      text: 'Safe storage rests on keeping grain dry and cool. Grain that is properly dried, cleaned, and then held cool and protected from moisture and pests can be stored for long periods with little loss; grain stored too moist or too warm can deteriorate within days as moulds and insects multiply.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Preserve dried grain quality and quantity until use',
    },
    {
      label: 'Two key controls',
      value:
        'Moisture (safe, uniform moisture content) and temperature (cool grain)',
    },
    {
      label: 'Main threats',
      value: 'Storage moulds, insects, rodents, and moisture migration',
    },
    {
      label: 'Common structures',
      value:
        'Sealed and unsealed silos/bins, warehouses, and hermetic bags or cocoons',
    },
    {
      label: 'Monitoring',
      value: 'Regular checks of grain temperature, moisture, and pests',
    },
    {
      label: 'Depends on first',
      value: 'Adequate drying and cleaning before storage',
    },
  ],
  sections: [
    {
      id: 'principles',
      heading: 'Principles of safe storage',
      body: [
        {
          type: 'paragraph',
          text: 'The safety of stored grain is governed mainly by moisture and temperature, because these control the biological activity of the grain itself and of the moulds and insects it carries. Dry, cool grain is biologically quiet; moist, warm grain is active and deteriorates. Keeping the bulk uniformly dry and cool, and preventing localised moisture build-up, is the core of good storage.',
        },
        {
          type: 'paragraph',
          text: 'Even correctly dried grain can spoil if moisture migrates within the bulk. Temperature differences between the grain and the outside air drive slow air currents inside a silo that can carry moisture to the cool surface and cause condensation and crusting there. Aeration — moving cool ambient air through the grain — is used to keep the bulk at an even, low temperature and limit this migration.',
        },
      ],
    },
    {
      id: 'methods',
      heading: 'Storage structures and protection',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Aerated silos and bins',
              description:
                'Grain is held in metal or concrete structures with fans that push cool air through the bulk to control temperature and moisture.',
            },
            {
              term: 'Hermetic storage',
              description:
                'Grain is sealed in airtight bags, cocoons, or silos; respiration lowers oxygen and raises carbon dioxide, suppressing insects without chemicals.',
            },
            {
              term: 'Controlled atmosphere / fumigation',
              description:
                'Modified gas atmospheres or approved fumigants are used to control insects in sealed stores, under strict safety and residue rules.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Whatever the structure, protecting grain also means starting clean: storing only well-dried grain, cleaning stores between seasons to remove residual insects, and keeping rodents and birds out. Regular monitoring of temperature and pests allows problems to be caught before they spread through the bulk.',
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
            'Store only grain that has been dried to a safe, uniform moisture content.',
            'Clean and, where appropriate, treat empty stores before filling to remove carry-over insects.',
            'Aerate to keep the bulk cool and even in temperature, limiting moisture migration.',
            'Monitor grain temperature, moisture, and insects regularly, and act early on hot spots.',
            'Keep rodents, birds, and water out of the store.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Confined-space and fumigation hazards',
          text: 'Entering grain bins carries engulfment and suffocation risks, and fumigants are toxic; both require trained personnel and strict safety procedures.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'machinery', slug: 'grain-dryer' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Grain storage and post-harvest loss reduction',
    },
    { sourceId: 'usda-ars', citedFor: 'Stored-grain protection research' },
    { sourceId: 'ahdb', citedFor: 'Grain storage and aeration guidance' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Storage methods and duration vary with climate, scale, and commodity.',
  limitations: [
    'Safe storage times depend on grain moisture, temperature, and pest pressure; this entry gives principles, not guarantees for a given store.',
    'Fumigation and controlled-atmosphere treatments are subject to national registration, residue, and safety rules that vary by country.',
    'Structures and methods described range from smallholder to industrial scale; suitability depends on local conditions and resources.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Storage: Keeping Grain Safe After Harvest',
    description:
      'How grain storage preserves quality by controlling moisture, temperature, insects, and moulds: silos, aeration, hermetic storage, and good practice.',
    keywords: [
      'grain storage',
      'stored grain pests',
      'silo aeration',
      'hermetic storage',
      'post-harvest loss',
    ],
  },
  structuredData: { article: true },
};
