import type { CommodityContent } from '@/types/content';

export const driedChillies: CommodityContent = {
  id: 'commodity-dried-chillies',
  slug: 'dried-chillies',
  contentType: 'commodity',
  title: 'Dried Chillies',
  alternativeNames: [
    'Dried chilli peppers',
    'Dry red chillies',
    'Dried capsicum',
  ],
  category: 'Spice commodity',
  subcategory: 'Dried fruit spice',
  commodityClass: 'spice',
  physicalForm: 'other',
  harvestedPart:
    'Fruit (the pungent berry, picked ripe and red, then dried whole)',
  sourceCrop: { type: 'crop', slug: 'chili-pepper' },
  summary:
    'Dried chillies are the ripe fruits of pungent Capsicum, dried whole and traded as a spice. Drying is what turns a perishable fruit into a storable commodity — and doing it badly is the origin of the mould and mycotoxin problems that follow this commodity through the chain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dried chillies are the traded spice commodity of the chilli crop: fruits picked at full red ripeness, dried until they are leathery or brittle, and moved in bulk to processors, grinders, and the food trade. The commodity covers an enormous range of types, from mild colouring chillies grown for pigment to intensely pungent varieties, and it is bought against both colour and pungency because different buyers want different things from the same-looking fruit.',
    },
    {
      type: 'paragraph',
      text: 'This is one of the sharpest transformations in the fresh-to-dry space. A fresh chilli is a perishable vegetable with a life of days; a properly dried chilli is a spice that keeps for a year or more and ships anywhere without refrigeration. Drying is what makes the commodity — and it is also its central risk, because a chilli that is dried too slowly, dried incompletely, or allowed to take moisture back up is the classic substrate for storage moulds. This entry describes the dried fruit as traded; the growing of the crop is on the chili pepper crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Spice' },
    {
      label: 'Parent crop',
      value: 'Chilli pepper (Capsicum species, pungent types)',
    },
    {
      label: 'Harvested part',
      value: 'Fruit, picked fully ripe and dried whole',
    },
    {
      label: 'Defining post-harvest step',
      value: 'Drying — most commonly sun-drying, which creates the commodity',
    },
    {
      label: 'Key quality attributes',
      value:
        'Colour, pungency (capsaicin), moisture, freedom from mould and extraneous matter',
    },
    {
      label: 'Principal food-safety concern',
      value: 'Mould growth and mycotoxins in poorly dried or rewetted lots',
    },
    {
      label: 'Main products',
      value:
        'Chilli powder, flakes, and oleoresin, produced by grinding and extraction',
    },
  ],
  sections: [
    {
      id: 'drying',
      heading: 'Drying makes the commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Chillies for drying are picked fully ripe and red, because colour is a graded attribute and an unripe fruit will never develop it later. The fruit is then dried until its moisture is low enough that microbial life cannot proceed — the whole basis of the commodity’s stability. Most of the world’s dried chillies are sun-dried, spread on ground sheets, mats, yards, or roofs across days or weeks, and this remains the dominant method because it is cheap and works well in a reliable dry season.',
        },
        {
          type: 'paragraph',
          text: 'Sun-drying’s weakness is that it is at the mercy of the weather at exactly the wrong moment. Rain during drying, high humidity, or a thick pile that traps moisture inside leaves the fruit wet for long enough for moulds to establish, and once they are in a lot they do not come out. Mechanical and solar dryers give control at a cost, and they are used where climate or contract makes the risk unacceptable. Drying-surface hygiene matters too: chillies dried in direct contact with soil pick up dirt and microbial load along with grit that shows up as extraneous matter at grading.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Drying is not one decision but two',
          text: 'A lot must be dried adequately in the first place, and then kept dry. Dried chillies are hygroscopic: a properly dried lot stored humid or packed while warm can reabsorb enough moisture to support mould, so drying and storage are one continuous problem rather than sequential steps.',
        },
      ],
    },
    {
      id: 'mould-and-mycotoxins',
      heading: 'Mould and mycotoxin risk',
      body: [
        {
          type: 'paragraph',
          text: 'Poorly dried and poorly stored chillies can develop mould growth, and certain moulds that colonise dried spices produce mycotoxins — aflatoxins and ochratoxin A being the ones documented as a concern in this commodity group. Both fungal groups favour the warm, humid conditions common to chilli-producing regions, and both can establish during a slow or interrupted drying, during storage, or in transit if moisture gets into the load.',
        },
        {
          type: 'paragraph',
          text: 'Two features make this a live commercial issue rather than a theoretical one. Mycotoxins are stable — they survive grinding and most processing, so a contaminated lot carries the problem into the powder made from it, and no downstream step reliably removes it. And contamination is uneven, distributed in pockets rather than spread through a consignment, which makes representative sampling difficult and is why sampling plans for spices are treated as a technical discipline in their own right.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference framing only — no limits are given here',
          text: 'AgricultureID does not publish mycotoxin limits, moisture thresholds, or sampling requirements. Maximum levels for aflatoxins and ochratoxin A in spices are set in law and differ by jurisdiction and by product, and they are revised. Consult the applicable food-safety authority — EFSA and the European Commission in the EU, the FAO and WHO Codex framework internationally, or the relevant national authority — and the standard in force for the market concerned.',
        },
        {
          type: 'paragraph',
          text: 'The practical response in the trade runs upstream rather than downstream: dry the crop properly and fast, keep it off the soil, keep it dry in store, and sort out damaged and mouldy fruit before it contaminates the lot. Insect damage feeds directly into this, since damaged fruit admits moisture and fungi, which is why insect control in store is part of the mycotoxin picture and not a separate concern.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Colour, pungency, and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Dried chillies are bought on two independent axes, and it is important that they are independent. Colour — the depth and stability of the red, measured as extractable colour — matters to buyers using chillies as a pigment for paprika-type products and prepared foods. Pungency, from the capsaicinoids, is what heat buyers pay for. A chilli can be brilliantly coloured and mild, or fiercely hot and dull, and the trade is organised around types that deliver one, the other, or a particular balance.',
        },
        {
          type: 'list',
          items: [
            'Mould growth and mould-damaged fruit — the most serious defect in the commodity',
            'Insect damage and infestation, including live insects and fragments in store',
            'Colour fading and bleaching from over-exposure during drying or storage',
            'Broken and fragmented fruit below whole-chilli grades',
            'Extraneous matter — stalks, dirt, grit, and foreign material',
            'Inadequate or uneven drying leaving soft, moist fruit in the lot',
            'Discoloured or blackened fruit',
          ],
        },
        {
          type: 'paragraph',
          text: 'Colour is also perishable in its own quiet way: the pigments degrade with light, heat, and oxygen, so a lot loses colour value in store, and this ageing is a genuine commercial factor for colouring chillies. Grades are origin- and standard-specific, and the descriptions in force differ between producing countries and between the standards a buyer contracts against.',
        },
      ],
    },
    {
      id: 'storage-and-products',
      heading: 'Storage, trade, and pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Dried chillies ship in bags and containers at ambient temperature, and are stored dry, ventilated, and protected from insects — a durable commodity by fresh-produce standards, though not an inert one, since colour and pungency both fade slowly and moisture uptake reopens the mould problem. Much of the trade moves whole so that the buyer can grind to their own specification, since whole fruit both keeps better and can be inspected in a way powder cannot.',
        },
        {
          type: 'paragraph',
          text: 'Beyond whole dried fruit, the commodity is ground into chilli powders and flakes, and extracted into oleoresins that concentrate the colour and pungency into a liquid for industrial use. These pathways are noted here but are not modelled as separate product pages in this reference, and the honest reason is that a good deal of what is sold as chilli powder is a blend rather than a single-commodity product, which makes a one-to-one commodity–product edge the wrong model for it.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Extractable colour',
    'Pungency (capsaicinoid content)',
    'Moisture content',
    'Freedom from mould',
    'Freedom from extraneous matter',
    'Proportion of whole, unbroken fruit',
  ],
  commonDefects: [
    'Mould growth and mould-damaged fruit',
    'Insect damage and infestation',
    'Colour fading and bleaching',
    'Broken and fragmented fruit',
    'Extraneous matter, stalks, and grit',
    'Inadequately dried, soft fruit',
    'Discoloured or blackened fruit',
  ],
  moistureContext:
    'Stability rests entirely on adequate drying and on staying dry: the fruit is hygroscopic, and moisture reabsorbed in store or in transit reopens the risk of mould and mycotoxin development. Limits are set by the applicable standard and contract.',
  storageContext:
    'Held at ambient temperature in bags and containers, dry, ventilated, and protected from insects; colour and pungency fade slowly with light, heat, and oxygen even in a sound lot.',
  transportContext:
    'Ships in bags and containers without refrigeration; moisture ingress and insect infestation in transit are the main threats, and much of the trade moves whole rather than ground so lots can be inspected.',
  majorProducingRegions: [
    'South Asia',
    'East and Southeast Asia',
    'Sub-Saharan Africa',
    'Latin America',
  ],
  majorTradingRegions: [
    'South and Southeast Asia',
    'Europe',
    'North America',
    'Middle East and North Africa',
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'hermetic-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Dried chillies as a traded spice commodity, drying practice, and mycotoxin prevention framing',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Aflatoxin and ochratoxin A occurrence and risk assessment in dried spices',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Chilli drying methods, colour and pungency attributes, and post-harvest quality',
    },
    {
      sourceId: 'usda',
      citedFor: 'Dried chilli product description and grading attributes',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade; production concentrated in warm regions. Grade descriptions are origin-specific, and mycotoxin limits are set in law and differ by jurisdiction.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No mycotoxin limits, moisture thresholds, colour values, pungency figures, or sampling requirements are given here — these are set in law and by the applicable standard, and are revised. Consult the applicable food-safety authority.',
    'No HS classification code is given here because the correct subheading for dried Capsicum depends on the form, edition, and jurisdiction; confirm with the applicable customs authority.',
    'Chilli powder, flakes, and oleoresin pathways are noted but not modelled as product pages, since much of what is traded as chilli powder is a blend rather than a single-commodity product.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dried Chillies: The Sun-Dried Capsicum Spice',
    description:
      'Dried chillies as a commodity: why drying makes them storable, the mould and mycotoxin risk in poorly dried lots, colour versus pungency, and grading defects.',
    keywords: [
      'dried chillies',
      'dried chilli commodity',
      'chilli sun-drying',
      'chilli colour and pungency',
      'spice mycotoxins',
    ],
  },
  structuredData: { article: true },
};
