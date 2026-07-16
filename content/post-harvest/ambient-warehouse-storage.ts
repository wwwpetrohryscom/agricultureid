import type { PostHarvestContent } from '@/types/content';

export const ambientWarehouseStorage: PostHarvestContent = {
  id: 'post-harvest-ambient-warehouse-storage',
  slug: 'ambient-warehouse-storage',
  contentType: 'post-harvest',
  title: 'Ambient Warehouse Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Durable commodities that have already been dried or processed to a stable condition are held in a building at whatever temperature the local climate produces, with no refrigeration and no conditioning of the commodity itself. Stability comes from the commodity, not the store: a lot dried below the moisture at which moulds and insects can function is shelf-stable at ambient temperature, and the warehouse simply has to avoid undoing that. Its whole function is exclusion and separation — keeping out rain, ground damp, humid air, pests, and contaminating odours, and keeping incompatible goods apart. The building preserves nothing; it protects a condition established before the goods arrived.',
  riskFactors: [
    'Moisture re-uptake from humid ambient air, since a dried commodity in a permeable pack equilibrates with the air around it',
    'Ground damp through an unsealed slab, and condensation on walls that are cooler than the store air',
    'Roof leaks and wind-driven rain at doors, which wet the outer and upper parts of a stack first',
    'Condensation inside the goods themselves when a cool lot is moved into warm humid air, or a warm lot into a cool store',
    'Storage insects breeding continuously in a warm store, and moving between pallets, packs, and residues',
    'Rodents and birds entering a large building with wide doors, contaminating goods with droppings and urine',
    'Odour and taint transfer, which is why aromatic commodities such as coffee, cocoa, and spices cannot share air with fuels, chemicals, or strong-smelling goods',
    'Residual infestation carried over in the building fabric, pallets, and old stock when new stock is placed on top of it',
    'Stock rotation failures, so old lots sit indefinitely at the back and deteriorate unseen',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'nut',
    'beverage-crop',
    'spice',
    'fibre',
    'oilseed',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'commodity', slug: 'dried-chillies' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'almonds' },
    { type: 'commodity', slug: 'cashew-nuts' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'cotton-lint' },
    { type: 'commodity', slug: 'dried-tobacco-leaf' },
  ],
  qualityEffects: [
    'Holds a stable commodity in the condition it arrived in; no ambient store improves what is put into it',
    'Slow quality drift continues regardless — oils in nuts and oilseeds oxidise, spices lose volatile aroma, and colour fades, faster in warm stores than cool ones',
    'Moisture re-uptake in humid climates raises mould and, in susceptible commodities, mycotoxin risk over long holding periods',
    'Taint acquired from neighbouring goods or fuels is generally irreversible in aromatic commodities',
    'Insect infestation in a warm ambient store spreads through stock and is a downgrade and rejection risk in traded lots',
  ],
  environmentalContext:
    'Ambient storage is what most of the world’s durable agricultural goods sit in: producer stores, trader godowns, port warehouses, and processor intake sheds. It is viable wherever the commodity is dry enough to be stable at the local climate’s temperature and humidity — which in a dry temperate region is most durable goods, and in a humid tropical one is fewer than operators generally assume. Where ambient humidity keeps a commodity above its stable moisture, the honest options are dehumidification, sealed or hermetic packaging, cooling, or shorter holding, not better stacking.',
  alternativeNames: [
    'Dry store',
    'Ambient store',
    'Godown',
    'Dry warehouse',
    'Non-refrigerated warehouse',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Ambient warehouse storage holds dried, shelf-stable commodities in an unrefrigerated building. Stability comes from the commodity being dry, not from the store, whose job is exclusion of damp, pests, and taint.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ambient warehouse storage is the unglamorous default of the durable commodity trade: a roofed, unrefrigerated building holding coffee, cocoa, spices, milled rice, pulses, nuts, or fibre at whatever temperature the climate provides. It applies to goods that have already been made stable — dried, cured, processed, or otherwise brought to a condition in which they do not need active conditioning to survive. Unlike a grain store with aeration, or a cold store with refrigeration, an ambient warehouse does nothing to the commodity at all.',
    },
    {
      type: 'paragraph',
      text: 'That is the point worth being precise about. The stability of the lot is a property of the lot, established before it arrived. The building contributes only by not damaging it: keeping rain out, keeping ground damp out, keeping humid air from re-wetting the goods, keeping rodents and insects away, and keeping the commodity apart from anything whose smell it might absorb. A warehouse that fails at any of these does not merely fail to help — it actively destroys value that was already in the lot.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'An unrefrigerated building holding dried, shelf-stable commodities',
    },
    {
      label: 'Where stability comes from',
      value:
        'The commodity being dry enough to be stable at ambient conditions — not from the store',
    },
    {
      label: 'The store’s job',
      value: 'Exclusion: rain, ground damp, humid air, pests, and taint',
    },
    {
      label: 'Main threats',
      value:
        'Moisture re-uptake, condensation, insects, rodents, and odour transfer',
    },
    {
      label: 'Aromatic goods',
      value:
        'Coffee, cocoa, and spices take up taint from shared air; segregation is not optional',
    },
    {
      label: 'Quality still drifts',
      value:
        'Oils oxidise, aroma fades, colour is lost — slower in a cool store, never stopped',
    },
    {
      label: 'Climate limit',
      value:
        'Not viable where ambient humidity holds the commodity above its stable moisture',
    },
  ],
  sections: [
    {
      id: 'stability',
      heading: 'Stability is a property of the goods, not the building',
      body: [
        {
          type: 'paragraph',
          text: 'A dried commodity is stable because water inside it is not available to the organisms that would spoil it. Moulds and insects need water to function, and below the moisture at which they can obtain it they cannot grow. Drying, curing, and processing put a lot into that state, and a lot in that state does not need refrigeration or conditioning — it will simply sit. This is why the world’s durable trade runs on ambient warehouses and why the alternative would be absurdly expensive.',
        },
        {
          type: 'paragraph',
          text: 'But that state is maintained only if the surrounding air permits it. A dried commodity in a permeable pack — a jute sack, a paper bag, a fibre carton — exchanges water vapour with the air around it and drifts toward equilibrium with it. Store a properly dried lot in air humid enough, and the lot will take moisture back until it is no longer stable, without a drop of rain ever touching it. This is the central limitation of ambient storage in humid climates, and the reason it cannot be fixed by better stacking: the problem is the atmosphere in the building, not the arrangement of the goods. The moisture at which a given commodity is stable, and the ambient humidity that maintains it, are set by the applicable national storage guidance and trade standards.',
        },
      ],
    },
    {
      id: 'exclusion',
      heading: 'The four things a warehouse must exclude',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Water',
              description:
                'Rain through the roof, wind-driven rain at doors, ground damp through an unsealed slab, and condensation on cold walls. Goods are stacked on pallets and clear of walls for this reason. The bottom and outer parts of a stack wet first and are inspected least.',
            },
            {
              term: 'Humid air',
              description:
                'The slower, less visible version of the same problem. Where the climate’s air will not hold the commodity at a stable moisture, the answer is dehumidification, sealed packaging, or shorter holding — not more careful stacking.',
            },
            {
              term: 'Pests',
              description:
                'Storage insects breed continuously in a warm store and move between stacks, pallets, and residues; rodents and birds enter through doors and eaves and contaminate goods with droppings and urine, which is a food-safety matter and not only a weight loss.',
            },
            {
              term: 'Taint',
              description:
                'Coffee, cocoa, tea, and spices absorb volatile compounds from the air around them. A lot stored near fuel, solvents, chemicals, or strongly aromatic goods can pick up an odour that renders it unsaleable, and the damage is generally irreversible.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Taint deserves emphasis because it is the one that surprises people. A warehouse that is dry, cool, sound, and pest-free can still destroy a coffee or cocoa lot simply by having stored diesel, treated timber, or onions nearby. There is no processing step that removes an absorbed off-odour from a green coffee lot, and buyers reject on it. Segregation of aromatic and odour-emitting goods is therefore part of warehouse design and stock policy, not a refinement.',
        },
      ],
    },
    {
      id: 'drift',
      heading: 'Stable does not mean unchanging',
      body: [
        {
          type: 'paragraph',
          text: 'Ambient storage suppresses the fast failures — mould, insects, rot — but it does not stop the slow ones, and the slow ones are what decide the value of a lot held for a long time. Oils in nuts, oilseeds, and brown rice oxidise, developing rancid flavours; the reaction is chemical rather than biological, so being dry does not prevent it, and warmth accelerates it. Spices lose the volatile compounds that are the reason to buy them, so a warm-stored lot is measurably weaker in aroma than a cool-stored one. Colour fades. Green coffee ages and loses the characteristics a speciality buyer paid for.',
        },
        {
          type: 'paragraph',
          text: 'None of this is a defect of the warehouse; it is what ambient means. Holding a commodity at tropical ambient temperature for a year is a decision to accept whatever that year of warmth does to it, and for high-value aromatic goods the trade has increasingly moved to cool or conditioned storage for exactly this reason. Rates of quality loss are commodity-specific and are documented in the relevant trade standards and national guidance rather than being generalisable, but the direction is not in question: warmer stores age goods faster.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal figures',
          text: 'Stable moisture, acceptable ambient humidity, and how long a given commodity may be held are commodity- and climate-specific, and are set by the applicable national storage guidance and trade standards. This entry gives none of them.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus a flat grain store',
              description:
                'A flat store holds a bulk and actively conditions it with aeration. An ambient warehouse holds packaged or palletised goods and conditions nothing — it only excludes.',
            },
            {
              term: 'Versus bag stack storage',
              description:
                'Bag stacking is a way of arranging goods inside a store, and most bag stacks sit in ambient warehouses. This entry is about the building and its atmosphere; bag stack storage is about the stack.',
            },
            {
              term: 'Versus a refrigerated warehouse',
              description:
                'A refrigerated warehouse manufactures its own temperature and humidity for goods that would otherwise perish. An ambient warehouse accepts the climate, which is viable only because the goods are already stable.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
    { type: 'crop', slug: 'black-pepper' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'almond' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'refrigerated-warehouse' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Warehouse storage of durable commodities and post-harvest loss reduction',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Storage pests of durable stored products',
    },
    {
      sourceId: 'irri',
      citedFor:
        'Storage of milled rice and moisture equilibrium in tropical stores',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Quality changes in stored durable commodities',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global and dominant for durable commodities. Viability depends on the local climate keeping the commodity at a stable moisture; storage conditions are set by national guidance and trade standards.',
  limitations: [
    'This entry states no stable moisture, ambient humidity target, temperature, or holding duration: all are commodity- and climate-specific and are set by the applicable national storage guidance and trade standards.',
    'Ambient storage is not viable where the local atmosphere holds the commodity above its stable moisture; in humid climates apparently sound practice can still lead to mould and mycotoxin development.',
    'Mycotoxin contamination in susceptible commodities is not reliably visible; a sound-looking lot can carry it, and only appropriate laboratory testing can establish whether it is present.',
    'Warehouse construction, climate, and stock policy vary enormously; the behaviour described is general and does not predict how a particular store performs.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Ambient Warehouse Storage of Dry Commodities',
    description:
      'How ambient dry stores hold coffee, cocoa, spices, rice, and nuts: why stability comes from the goods not the building, and excluding damp, pests, and taint.',
    keywords: [
      'ambient warehouse storage',
      'dry store',
      'durable commodity storage',
      'warehouse taint',
      'godown storage',
    ],
  },
  structuredData: { article: true },
};
