import type { PostHarvestContent } from '@/types/content';

export const onionStore: PostHarvestContent = {
  id: 'post-harvest-onion-store',
  slug: 'onion-store',
  contentType: 'post-harvest',
  title: 'Onion Store',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Cured bulbs are held in a bulk or in boxes and ventilated with air driven through the mass, and the governing principle is the opposite of most produce storage: onions must be kept dry. A cured bulb is protected by dry outer scales and a sealed neck, and that dryness is the barrier — rewet it and the barrier fails. So the store runs dry air through the bulk to carry away the moisture and heat of respiration, remove any free water on the surface, and keep the necks and skins dry, while holding the bulbs cool enough that they stay dormant and do not sprout or root. Ventilation is continuous or frequent rather than occasional, because a bulk of respiring bulbs generates moisture indefinitely and still air in an onion store means wet necks.',
  riskFactors: [
    'High humidity in the store, which softens the dry scales, wets the necks, and lets rots establish — the reverse of the risk in root storage',
    'Condensation on bulbs when cool air meets warm ones, or when a cold store is opened to warm humid weather',
    'Inadequate curing before storage, so necks are not sealed and skins are not dry when the bulbs go in',
    'Neck rot and bacterial soft rots, which enter through incompletely cured necks and wounds and spread within the bulk',
    'Sprouting and rooting as bulbs break dormancy, which warmth accelerates and which the store cannot reverse',
    'Uneven airflow through the bulk, leaving wet zones where trash, soil, and loose skins block the air path',
    'Mechanical damage at harvest and handling, since bruised and cut bulbs are entry points for rots',
    'Ventilating with humid ambient air, which delivers moisture into a store whose whole purpose is dryness',
    'Fluctuating temperature, which drives condensation and can break dormancy prematurely',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  applicableCommodityClasses: ['vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'garlic-bulbs' },
  ],
  qualityEffects: [
    'Dry skins and sealed necks are maintained, which is what protects the bulb and what buyers assess',
    'Dormancy is prolonged by cool, dry, stable conditions, delaying sprouting and rooting',
    'Water loss continues throughout, so bulbs lose saleable weight over the storage period even when stored well',
    'Rots that enter through poorly cured necks spread within the bulk and are the principal storage loss',
    'Skin quality and colour — a major commercial attribute in onions — are preserved by dryness and degraded by humidity',
    'Storage cannot cure an uncured crop; it can only maintain the condition curing established',
  ],
  environmentalContext:
    'Onion stores range from naturally ventilated structures in dry climates to fully refrigerated and humidity-controlled buildings in humid temperate ones. The determining factor is whether the ambient air is dry enough to do the work: in an arid climate, ambient ventilation keeps a crop dry easily, and traditional slatted stores suffice. In a maritime or humid climate the air itself carries the moisture the store must exclude, and drying or refrigerated air becomes necessary. This is why onion storage infrastructure differs so sharply between growing regions producing the same crop.',
  alternativeNames: [
    'Bulb store',
    'Onion storage shed',
    'Ventilated bulb store',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'An onion store holds cured bulbs in a ventilated bulk, driving dry air through the mass to keep necks and skins dry and bulbs dormant. Unlike root storage, its governing rule is to keep the crop dry.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An onion store is a ventilated bulk store for cured bulbs — onions and garlic — in which air is driven through the mass either continuously or on demand. Physically it resembles a flat grain store or a potato store: a building, a plenum, ducts or a false floor, fans, and a bulk piled above. What distinguishes it is not the hardware but the objective the hardware is used for, and that objective is the reverse of the one that governs most produce storage.',
    },
    {
      type: 'paragraph',
      text: 'Nearly all fresh produce storage is a fight against water loss: keep the humidity high, or the crop shrivels. Onions are the conspicuous exception. A cured bulb is protected by dry papery outer scales and a neck that has dried and sealed shut, and that dryness is precisely what keeps rot organisms out. Store an onion in the humid air that suits a carrot and the scales soften, the neck rewets, and the crop rots. An onion store is therefore an apparatus for keeping a crop dry and cool, and every design decision in one follows from that.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A ventilated bulk or box store for cured onions and garlic',
    },
    {
      label: 'Governing rule',
      value:
        'Keep the crop dry — the opposite of root and most produce storage',
    },
    {
      label: 'What protects the bulb',
      value:
        'Dry outer scales and a sealed neck, both established by curing before storage',
    },
    {
      label: 'Why ventilate',
      value:
        'Respiring bulbs release moisture and heat continuously; still air means wet necks',
    },
    {
      label: 'Second objective',
      value:
        'Hold bulbs cool and stable so dormancy lasts and sprouting is delayed',
    },
    {
      label: 'Main losses',
      value:
        'Neck and soft rots, sprouting and rooting, and continuous water loss',
    },
    {
      label: 'Climate decides the store',
      value:
        'Ambient ventilation suffices in dry climates; humid ones need conditioned air',
    },
  ],
  sections: [
    {
      id: 'dry-not-humid',
      heading: 'Why onions are stored dry',
      body: [
        {
          type: 'paragraph',
          text: 'A carrot or a potato has no protective structure of its own worth speaking of: its skin is thin, water leaves through it readily, and the storage problem is to slow that loss by keeping the surrounding air near saturation. An onion has been given a different solution by its own biology. During curing, the outer scales dry into papery layers and the neck — the point where the leaves met the bulb, and the obvious route for infection — dries and closes. Those dry tissues are a barrier that rot organisms cannot easily cross.',
        },
        {
          type: 'paragraph',
          text: 'A barrier made of dryness only works while it stays dry. Raise the humidity around a cured onion and its scales take up moisture, soften, and cease to be papery; the neck rewets and stops being sealed. Worse, free water on the surface — from condensation, from a humid ventilating airstream — is what rot organisms need to germinate and infect. The bulb has not changed, but its defences have been dissolved. This is why humidity control in an onion store points downward while in almost every neighbouring store it points upward, and why the two crops cannot share a store even though they are both field vegetables lifted in the same season.',
        },
      ],
    },
    {
      id: 'ventilation',
      heading: 'What the fans are for',
      body: [
        {
          type: 'paragraph',
          text: 'A bulk of onions is a bulk of living organs, each respiring: consuming sugars and oxygen, releasing carbon dioxide, heat, and water vapour. That water vapour is released into a store whose entire purpose is to be dry, and it is released continuously for as long as the crop is stored. Ventilation is how it is removed. Air driven through the bulk picks up the moisture and the heat of respiration and carries both out of the store, and it does so at every point in the mass rather than merely at the surface — which matters because the neck of a bulb buried in the middle of a pile is exactly where a rot will start unnoticed.',
        },
        {
          type: 'paragraph',
          text: 'Ventilation is also how the crop is brought down to and held at a temperature at which it stays dormant. But the two aims constrain the air that can be used: air that is cool enough to cool the bulk may be too humid to dry it, and in a maritime climate cool night air is frequently saturated. Ventilating with such air delivers exactly what the store exists to remove. So onion store control is a decision about the ambient air’s temperature and humidity together, and where ambient air cannot satisfy both, refrigerated and dehumidified air is used instead. Target temperatures, humidities, and airflows are commodity- and climate-specific and are set by the applicable national storage guidance.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal settings',
          text: 'Storage temperature, humidity, and airflow for onions and garlic differ by crop, cultivar, intended market, and climate, and are set by the applicable national storage guidance. This entry states none of them.',
        },
      ],
    },
    {
      id: 'curing-first',
      heading: 'The store cannot cure the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Everything an onion store does depends on the bulbs arriving cured. Curing is a distinct operation — holding the harvested crop under warm, moving air until the necks dry and seal and the outer scales become papery — and it happens in the field, in a shed, or in the store operated deliberately in curing mode, before storage conditions are applied. A bulb whose neck has not sealed goes into store with an open route to its interior, and no amount of careful ventilation afterwards closes it.',
        },
        {
          type: 'paragraph',
          text: 'This is why neck rot is the classic onion storage failure and why it is usually a curing failure rather than a storage one. The infection is frequently established in the field before lifting and develops in store, and inadequate curing is what lets it in. The same applies to mechanical damage: bruised, cut, and skinned bulbs are entry points, and a store full of damaged crop will fail regardless of how it is run. What the store controls is whether the condition curing established is maintained. What went into it decides whether there was anything worth maintaining.',
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
              term: 'Versus onion and garlic curing',
              description:
                'Curing is the conditioning step that dries the necks and scales. An onion store maintains the resulting condition. Some buildings do both, in sequence, under different settings — but they are different operations with opposite temperature and airflow objectives.',
            },
            {
              term: 'Versus potato storage',
              description:
                'Same-looking building, opposite humidity target. Potatoes are held humid to prevent shrivel; onions are held dry because dryness is their defence. The crops cannot share a store.',
            },
            {
              term: 'Versus a root cellar',
              description:
                'A cellar is cool and humid — which is precisely wrong for onions. Traditional onion storage in dry climates uses airy, ventilated structures, not earth-contact ones.',
            },
            {
              term: 'Versus cold storage',
              description:
                'Refrigerated onion storage exists and is standard in humid climates, but it is cold storage run dry rather than run humid, which is unusual among refrigerated produce stores.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Onion storage, ventilation, and neck rot management',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Storage conditions and post-harvest behaviour of bulb onions',
    },
    {
      sourceId: 'fao',
      citedFor: 'Onion and garlic curing and storage practice',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Onion post-harvest quality and storage disease',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Store type depends strongly on climate: ambient ventilation suffices in arid regions, while humid and maritime climates require refrigerated or dehumidified air. Settings are set by national guidance.',
  limitations: [
    'This entry states no storage temperature, humidity, airflow, or duration: all are crop-, cultivar-, market-, and climate-specific and are set by the applicable national storage guidance.',
    'Storage cannot cure a crop or repair inadequate curing; neck rot in store usually reflects field infection and curing failure rather than store management.',
    'Cultivars differ substantially in dormancy and storage potential, and a store cannot make a short-storing cultivar keep.',
    'Sprout suppression options are subject to national registration and residue rules that differ by country and are not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Onion Store: Ventilated Dry Storage for Bulbs',
    description:
      'How onion stores work: ventilating cured bulbs with dry air to keep necks and skins dry, and why onions are stored dry when most produce is kept humid.',
    keywords: [
      'onion store',
      'onion storage',
      'bulb storage',
      'neck rot',
      'onion ventilation',
    ],
  },
  structuredData: { article: true },
};
