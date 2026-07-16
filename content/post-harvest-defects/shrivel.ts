import type { PostHarvestDefectContent } from '@/types/content';

export const shrivel: PostHarvestDefectContent = {
  id: 'post-harvest-defect-shrivel',
  slug: 'shrivel',
  contentType: 'post-harvest-defect',
  title: 'Shrivel',
  defectClass: 'physiological',
  alternativeNames: ['Water loss', 'Desiccation', 'Wilting', 'Weight loss'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Shrivel is the visible consequence of water loss from harvested produce — loss of turgor, wrinkling, softening, and dullness — and is simultaneously a quality defect and a direct loss of saleable weight, accumulating irreversibly across the whole chain rather than at any one point in it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Harvested produce is mostly water, and from the moment it is detached it is losing that water to the air around it with nothing to replace it. A growing plant draws water continuously from the soil and can afford to transpire; a harvested carrot, lettuce, or bunch of grapes cannot. Water continues to leave through the skin, through the cut surface, through the stem scar, and through any wound, and the tissue slowly gives up the internal pressure that makes it crisp. The result is shrivel: wrinkled surfaces, limp or rubbery texture, dulled appearance, and produce that no longer looks or feels like the thing that was harvested.',
    },
    {
      type: 'paragraph',
      text: 'What makes shrivel commercially distinctive among post-harvest defects is that it is two losses at once. It is a quality defect — the produce is downgraded or rejected on appearance and texture — and it is also, quite literally, the loss of weight that was going to be sold. Produce is sold by mass, and every gram of water that leaves is a gram that will not be paid for, whether or not the unit is ever rejected on looks. Most defects cost money by making produce unsaleable. Shrivel does that and also quietly reduces the amount there is to sell, which is why it is taken seriously by handlers who have never had a load rejected for it.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological — water loss from detached tissue',
    },
    {
      label: 'Presentation',
      value:
        'Loss of turgor, wrinkling and surface shrinkage, softening or rubberiness, dull appearance, and loss of crispness',
    },
    {
      label: 'The commercial double loss',
      value:
        'A quality defect and a direct loss of saleable weight at the same time — produce is sold by mass, and the water that leaves is not paid for',
    },
    {
      label: 'What drives it',
      value:
        'The vapour-pressure deficit between the produce and the air around it, surface-area-to-volume ratio, skin and cuticle integrity, wounding, and air movement over the surface',
      note: 'No humidity or vapour-pressure figures are given here; the applicable conditions are commodity-specific and set by sourced guidance',
    },
    {
      label: 'Susceptibility varies by commodity',
      value:
        'Leafy and thin-skinned produce with a high surface-area-to-volume ratio loses water far faster than compact, well-skinned commodities',
    },
    {
      label: 'Cumulative and irreversible',
      value:
        'Water lost at every stage adds up across the chain, and rehydration does not restore produce that has shrivelled',
    },
    {
      label: 'Curing genuinely helps',
      value:
        'In potato, onion, and sweet potato, curing sets the skin and heals wounds, and a sound sealed surface measurably reduces later water loss',
    },
  ],
  sections: [
    {
      id: 'drivers',
      heading: 'What actually drives water loss',
      body: [
        {
          type: 'paragraph',
          text: 'Water leaves produce because the air around it is drier than the produce is — more precisely, because of the vapour-pressure deficit between the saturated tissue and the surrounding atmosphere. That deficit is the engine. Everything else either increases the surface across which it acts, weakens the barrier resisting it, or sweeps away the humid boundary layer that would otherwise slow it down.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Vapour-pressure deficit',
              description:
                'The difference in water-vapour pressure between the produce and the air around it. It is the driving force for water loss, and it depends on both temperature and humidity together — which is why neither figure alone describes the risk, and why no figure for either is given here.',
            },
            {
              term: 'Surface-area-to-volume ratio',
              description:
                'The more surface a unit presents relative to its mass, the faster it loses water. A leaf loses water quickly; a compact root or a dense head loses it slowly. This is a property of the commodity and largely fixed.',
            },
            {
              term: 'Skin and cuticle integrity',
              description:
                'An intact cuticle or a set skin is the principal barrier. Where it is thin, immature, unset, or abraded, water leaves freely — which is why skinning damage matters out of proportion to how it looks.',
            },
            {
              term: 'Wounding',
              description:
                'Cuts, punctures, abrasion, and trimmed surfaces bypass the barrier entirely and expose saturated tissue directly to the air. Wounds are routes for water out as well as routes for pathogens in.',
            },
            {
              term: 'Air movement',
              description:
                'Moving air strips away the humid boundary layer at the produce surface and maintains the deficit at its maximum. Air movement necessary for cooling is also air movement that dries, and the two have to be balanced.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Different commodities lose water in characteristically different ways for these reasons. Lettuce and broccoli, with vast surface areas and thin cuticles, wilt rapidly. Carrots lose water through skin that was never a storage barrier and go limp. Grapes present the problem at the rachis — the stem framework dries and browns while the berries themselves still look acceptable. Onions and potatoes, well cured, resist water loss well; the same crops uncured or skinned do not. The mechanism is uniform; the expression is not.',
        },
      ],
    },
    {
      id: 'cumulative',
      heading: 'Cumulative across the chain, blamed on the last handler',
      body: [
        {
          type: 'paragraph',
          text: 'Shrivel is discovered where it becomes visible, which is almost never where it was caused. Water loss proceeds from the moment of harvest and continues through field waiting, transport to the packhouse, grading, packing, cooling, storage, distribution, and display. Each leg contributes, usually without producing any visible change of its own, and the total accumulates. Shrivel becomes apparent only once enough water has gone to be seen — by which time it is the last handler holding the produce, and the last handler who is blamed.',
        },
        {
          type: 'paragraph',
          text: 'That attribution is usually wrong, or at least badly incomplete. A retailer may be holding produce that lost most of its water on a hot loading dock a week earlier, and the visible outcome is identical to produce that was handled well throughout and merely displayed poorly. Nothing about a shrivelled unit records where its water went. Separating a genuine failure at the end of the chain from an inherited one requires the handling history and, where they exist, weight records — not an inspection at the point where the symptom surfaced.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Irreversible: rehydration does not restore it',
          text: 'Shrivelled produce cannot be recovered by wetting, misting, or soaking. Water can be reabsorbed at the surface enough to alter appearance temporarily, but the turgor, texture, and cell condition that were lost are not restored, and the weight that was lost was lost. Shrivel is managed by preventing water loss at every leg, not by attempting to reverse it at the last one.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'What it is mistaken for',
      body: [
        {
          type: 'paragraph',
          text: 'Softening and dullness are the two most over-subscribed symptoms in post-harvest work: almost everything ends there. Shrivel shares them with senescence, which is simply the produce reaching the end of its life, and the two are readily confused because both give limp, dull, unappealing produce and both worsen with time in the chain. They also genuinely co-occur — old produce has usually also been losing water for a long time — so the question is rarely which one, but how much of each.',
        },
        {
          type: 'list',
          items: [
            'Senescence produces softening, dullness, and loss of quality on its own, and a lot that looks shrivelled may simply be old; time in the chain drives both, so the correlation between them proves nothing about which acted.',
            'Chilling injury in sensitive commodities gives dull, pitted, sometimes sunken surfaces that read as desiccation, and its symptoms also appear late and away from their cause.',
            'Commodity-specific drying patterns mislead: grape rachis drying signals water loss while the berries still look sound, and carrot and other root surfaces go limp before any wrinkling is obvious.',
            'Wilting from a water deficit at harvest — produce that came in already short of water — presents identically to water lost afterwards in store or transit.',
            'Mechanical or skinning damage accelerates local water loss, so the visible shrivel may be the endpoint of a handling failure rather than of the storage conditions being blamed.',
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because shrivel accumulates everywhere, it is reduced everywhere or not at all. There is no single intervention that fixes it and no stage at which it can be recovered, so the work is to reduce the driving deficit, protect the barrier, and shorten the exposure at every leg of the chain.',
        },
        {
          type: 'list',
          items: [
            'Cool promptly and hold cold: lowering produce temperature reduces the vapour-pressure deficit driving water out, which is why precooling and an unbroken cold chain do as much for shrivel as they do for decay.',
            'Protect the barrier. Cure crops that respond to it — in potato, onion, and sweet potato, wound healing and skin set create a sound sealed surface that genuinely reduces later water loss.',
            'Minimise wounding and skinning at every transfer, since damaged surfaces lose water freely and disproportionately.',
            'Use packaging as a water-loss barrier: appropriate packing and modified-atmosphere packaging restrict water movement away from the produce as well as managing the atmosphere around it.',
            'Manage air movement deliberately, recognising that the airflow required for cooling also dries, and that the balance is commodity-specific.',
            'Shorten exposure: time on lit or warm loading areas, in field waiting, and in transit between controlled spaces is time spent losing water that will never be recovered.',
            'Track weight through the chain where possible, since shrivel is the one defect that shows up in mass records before it shows up in appearance.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The holding conditions appropriate to any given commodity — the temperature and humidity combination that keeps the driving deficit acceptable without creating condensation and the rots that follow it — are commodity-specific and are not given here. They are set by sourced post-harvest guidance for the commodity in question; consult FAO, USDA-ARS, or the relevant extension handling references before setting a store.',
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'cucumbers' },
    { type: 'commodity', slug: 'sweet-peppers' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-apples' },
  ],
  causedByConditions: [
    'A vapour-pressure deficit between the produce and the surrounding air, which depends on temperature and humidity together and is the driving force for water loss',
    'A high surface-area-to-volume ratio, which exposes leafy and thin-skinned commodities to far faster loss than compact, well-skinned ones',
    'Thin, immature, unset, or abraded skin and cuticle, which weakens the principal barrier resisting water movement',
    'Wounding, skinning, cutting, and trimming, which bypass the barrier and expose saturated tissue directly to the air',
    'Air movement over the produce surface, which strips the humid boundary layer and sustains the deficit — including the airflow required for cooling',
    'Cumulative exposure across field waiting, transport, grading, storage, distribution, and display, with no single leg necessarily at fault',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'curing' },
  ],
  confusableWith: [
    'Senescence — both give softening, limpness, and dull colour, and both worsen with time in the chain, so the shared cue cannot separate produce that has lost water from produce that has simply reached the end of its life; the two also genuinely co-occur',
    'Chilling injury — dull, sunken, pitted surfaces in chilling-sensitive commodities read as desiccation, and both disorders express late and away from the conditions that caused them, so the appearance separates neither the mechanism nor the leg',
    'Grape rachis drying — the stem framework browns and dries while the berries still look acceptable, so the shared cue of "the bunch looks tired" attaches to a commodity-specific expression of water loss that a berry inspection misses entirely',
    'Limpness in root crops such as carrot — loss of crispness appears well before any wrinkling is visible, so the absence of the classic shrivelled surface does not mean water loss has not already downgraded the lot',
    'Wilting from a pre-harvest water deficit — produce harvested already short of water presents identically to produce that lost water in store or transit, and the symptom does not date itself',
    'Mechanical and skinning damage — damaged surfaces lose water locally and fast, so visible shrivel can be the endpoint of a handling failure rather than of the storage conditions being blamed for it',
  ],
  diagnosticLimitations: [
    'Shrivel accumulates across every leg of the chain and becomes visible only once enough water has gone to be seen, which is almost never where or when it was caused; the produce is discovered in the hands of the last handler and routinely attributed to them, and nothing about a shrivelled unit records where its water actually went.',
    'Softening and dullness are shared with senescence and with chilling injury, and the three co-occur in old, badly held produce; appearance cannot apportion how much of an observed condition is water loss and how much is something else.',
    'Produce that has already lost commercially significant water may show no wrinkling at all — loss of crispness and turgor precedes visible surface change — so a lot that looks acceptable can already be downgraded in weight and texture.',
    "Rehydration alters appearance without restoring condition: surface wetting or misting can make shrivelled produce look better temporarily while the lost turgor, texture, and weight remain lost, so appearance after handling is not evidence of the lot's real state.",
    'The symptom does not date itself. Produce harvested already short of water is indistinguishable on inspection from produce that lost water afterwards, so a pre-harvest deficit and a cold-chain failure present alike.',
    'Attributing shrivel to a particular leg requires handling history and, ideally, weight records through the chain; without them the visible symptom supports no conclusion about cause, and weight loss is detectable in mass records before it is detectable by eye.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest water loss, weight loss, and humidity management in the handling of fresh produce',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Transpiration and water-loss rates of fresh commodities, and commodity-specific storage recommendations',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest physiological disorders and quality loss in fresh produce',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Storage and handling of field vegetables and stored crops, including skin set and water-loss control',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Water loss is a physical process affecting every harvested commodity everywhere, but its severity depends on local ambient conditions, the length and design of the chain, and the packaging and cooling infrastructure available between harvest and market.',
  limitations: [
    'This entry gives no humidity, vapour-pressure-deficit, temperature, or weight-loss figures. The conditions that keep water loss acceptable without causing condensation are commodity-specific and must be taken from sourced post-harvest guidance for the commodity concerned.',
    'Susceptibility varies by commodity, cultivar, maturity, and skin condition at harvest, so a general description of the disorder may not describe the behaviour of a particular lot.',
    'Symptom descriptions are indicative only; they do not confirm water loss as the cause and do not separate shrivel from senescence, chilling injury, or a pre-harvest water deficit.',
    'Shrivel is irreversible: nothing described here recovers an affected lot or restores lost weight, and the entry is not a basis for accepting or rejecting a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Shrivel: Post-Harvest Water Loss and Weight Loss',
    description:
      'Shrivel is water loss made visible: lost turgor, wrinkling, and lost saleable weight. What drives it, why it accumulates across the chain, and why it is final.',
    keywords: [
      'shrivel',
      'post-harvest water loss',
      'weight loss in produce',
      'desiccation',
      'loss of turgor',
    ],
  },
  structuredData: { article: true },
};
