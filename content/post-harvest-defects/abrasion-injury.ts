import type { PostHarvestDefectContent } from '@/types/content';

export const abrasionInjury: PostHarvestDefectContent = {
  id: 'post-harvest-defect-abrasion-injury',
  slug: 'abrasion-injury',
  contentType: 'post-harvest-defect',
  title: 'Abrasion Injury',
  defectClass: 'mechanical',
  alternativeNames: ['Scuffing', 'Skinning', 'Rub damage', 'Friction injury'],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Abrasion injury is surface damage from friction — produce rubbing against equipment, packaging, grit, or other units — that scuffs or strips the skin rather than rupturing tissue beneath it; its consequences are water loss and infection entry, and it routinely accompanies and conceals bruising in the flesh below.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Abrasion is a surface defect with a surface cause. Where bruising is force delivered through the skin into the flesh, abrasion is force delivered along the skin: produce dragged across a belt, rolled over a brush, vibrated against a neighbour for a whole journey, or lifted through soil carrying grit that acts as an abrasive. The skin is scuffed, scored, or stripped away, and what is lost is the barrier layer rather than the tissue underneath. On potatoes and sweet potatoes lifted before the skin has set, whole sheets of periderm can be removed; on apples, citrus, and mangoes the same mechanism appears as scuff marks and dull scored patches; on onions it strips the dry outer scales that the bulb was cured to develop.',
    },
    {
      type: 'paragraph',
      text: 'It is tempting to treat abrasion as cosmetic, and for grading purposes it often is judged that way. Physiologically it is not. Skin is what holds water in and keeps pathogens out, and produce that has lost its skin loses water faster and is open to wound infection at exactly the point where it was rubbed. The defect also has an awkward relationship with bruising: the same handling that scuffs a surface commonly bruises the flesh, the two arrive together, and a scuffed surface makes the sub-surface damage harder to see — dull, roughened, discoloured skin hides a developing bruise underneath it rather than revealing one. Abrasion is therefore a defect that is both over-read as trivial and capable of masking a defect that is not.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — surface friction damage',
    },
    {
      label: 'The mechanism',
      value:
        'Force acting along the surface (rubbing, dragging, rolling, vibration) rather than through it into the flesh',
      note: 'Distinct from bruising, which is sub-surface tissue rupture, though the two routinely occur together',
    },
    {
      label: 'What is lost',
      value:
        'The skin or periderm — the barrier that retains water and excludes pathogens — rather than the tissue beneath it',
    },
    {
      label: 'Real consequences',
      value:
        'Accelerated water loss and shrivel, an open infection court for wound pathogens, and downgrading on appearance',
    },
    {
      label: 'Highest-risk condition',
      value:
        'Immature or unset skin: tubers and roots lifted before the periderm has hardened skin very readily',
    },
    {
      label: 'Curing is a genuine remedy',
      value:
        'In potatoes and sweet potatoes, curing after harvest allows wound periderm to form over abraded surfaces — one of the few post-harvest steps that actually heals damage rather than merely limiting it',
      note: 'Conditions and duration for curing are commodity-specific and set by sourced post-harvest guidance',
    },
    {
      label: 'Where the tolerances are set',
      value:
        'Permitted skinning and scuffing are defined by the applicable grade standard for the commodity and market',
    },
  ],
  sections: [
    {
      id: 'mechanism',
      heading: 'A different mechanism from bruising',
      body: [
        {
          type: 'paragraph',
          text: 'The distinction between abrasion and bruising is genuinely mechanical rather than a matter of degree. Bruising is compressive or impact loading transmitted through the skin into the flesh, where cells rupture below an often-unbroken surface. Abrasion is shear at the surface: the skin is worn, scored, or peeled by relative movement against something else. The flesh beneath an abrasion may be entirely undamaged, and the skin above a bruise may be entirely intact. They are opposite failures of the same unit.',
        },
        {
          type: 'paragraph',
          text: 'That opposition is why they are worth separating and why they are so hard to separate in practice. The handling that abrades also bruises — a tuber dragged across a harvester web is being rubbed and knocked at once, and a fruit vibrating against its neighbour for a long road journey is both scuffing its skin and taking repeated small loads into its flesh. The two defects share causes, share consignments, and share units, while remaining different things with different consequences.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Abrasion can conceal what matters more',
          text: 'A scuffed, dulled, roughened surface is harder to read than a clean one. Abrasion obscures the visual cues that might otherwise reveal a bruise developing underneath, so a heavily scuffed lot is not merely a lot with a cosmetic problem — it is a lot whose sub-surface condition is less assessable than it looks.',
        },
      ],
    },
    {
      id: 'consequences',
      heading: 'Why skin loss is not cosmetic',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Water loss',
              description:
                'Skin is the principal barrier to transpiration. Abraded produce loses water faster through the damaged area, which shows up as shrivel, softening, loss of gloss, and saleable weight lost between packing and sale.',
            },
            {
              term: 'Infection entry',
              description:
                'An abrasion is a wound, and wound pathogens need exactly that. The Penicillium species behind blue mould and the organisms behind soft rots are poor at penetrating sound skin and entirely capable of entering a scuffed one.',
            },
            {
              term: 'Appearance and grade',
              description:
                'Scuffing dulls gloss and discolours the affected area as the exposed tissue browns, which is a downgrade on appearance criteria in most fresh markets. What counts as acceptable is set by the applicable grade standard, not here.',
            },
            {
              term: 'Loss of a healing window',
              description:
                'For potatoes and sweet potatoes, abrasion is repairable only while the crop can still be cured; damage inflicted after that window, or on a crop that was never cured, stays open.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The infection consequence is the one most often lost from the record. A tuber skinned at harvest and rotting in store is counted as a rot; the abrasion that admitted the organism is no longer visible in the decayed tissue and is not counted at all. Abrasion, like bruising, is therefore systematically under-recorded in loss statistics that separate mechanical damage from disease.',
        },
      ],
    },
    {
      id: 'where',
      heading: 'Where abrasion is created',
      body: [
        {
          type: 'list',
          items: [
            'Lifting or harvesting before the skin has set — the single largest factor for potatoes and sweet potatoes, and one determined by crop management and harvest timing rather than by the packhouse.',
            'Soil, sand, and grit travelling with the crop, which turn every contact into an abrasive one.',
            'Harvester webs, elevators, brush rollers, and roller tables, where produce is deliberately moved relative to a surface.',
            'Long transport, where continuous vibration rubs units against one another and against the package for the whole journey.',
            'Loose packing, which allows the movement that causes rubbing — the inverse of the compression trade-off, since tightening a pack to stop movement increases the load units place on each other.',
            'Dry, dusty conditions and repeated tipping between containers, each transfer adding surface contact.',
            'Wet or turgid produce handled without care, whose skin is more easily torn than the same tissue in another condition.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The packing trade-off deserves emphasis because it is a real design tension rather than an oversight. A pack tight enough to prevent units moving does not abrade them and does load them; a pack loose enough to avoid compression lets them rub for the length of the journey. The balance point is commodity- and journey-specific and is a matter for sourced packaging guidance.',
        },
      ],
    },
    {
      id: 'lookalikes',
      heading: 'What abrasion is mistaken for',
      body: [
        {
          type: 'paragraph',
          text: 'The most consequential confusion is with pre-harvest surface defects, because it changes who is responsible. Russeting on apples and pears is a field phenomenon — a roughened, corky skin arising from growing conditions and cultivar susceptibility — and it can look very like handling scuff. Limb rub and wind scarring occur when fruit is rubbed against a branch or another fruit by wind while it is still on the tree, and they leave exactly the kind of scored, dulled patch that a grading line leaves. A scuffed apple in a carton is not evidence of a packhouse problem: the mark may have been made in the orchard weeks before harvest.',
        },
        {
          type: 'paragraph',
          text: 'Two cues help and neither settles it. Pre-harvest rub marks have usually had time to heal over, so they tend to be corky, dry, and toughened rather than freshly exposed; fresh handling abrasion tends to be moist and to darken as the exposed tissue browns. And pre-harvest marks often follow the geometry of the tree — a branch contact line, a fruit-to-fruit contact face — while line abrasion tends to follow the geometry of the equipment. Both cues are weakened by time in store, by cultivar, and by the fact that an old orchard rub and a fresh line scuff can sit on the same fruit.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Abrasion is unusual among mechanical defects in that part of it is genuinely repairable. For potatoes and sweet potatoes, curing after harvest allows a wound periderm to form over skinned and scuffed surfaces, closing the water-loss route and the infection court together. This is a real healing process, not a containment measure, and it is the reason curing is standard practice for these crops. The conditions and duration required are commodity-specific and are set by sourced post-harvest guidance; none are given here. For onions and garlic, curing serves a related purpose in developing and drying the protective outer scales — which handling then strips off if it is rough.',
        },
        {
          type: 'list',
          items: [
            'Allow skin to set before lifting where the crop and season permit; nothing downstream compensates for harvesting an unset crop.',
            'Cure potatoes, sweet potatoes, onions, and garlic in line with sourced guidance for the commodity, so that wound periderm forms and protective scales develop.',
            'Reduce relative movement between produce and surfaces: fewer transfers, softer and slower contact, less dragging and rolling.',
            'Remove soil and grit early, since abrasive material makes every subsequent contact worse.',
            'Set pack density deliberately, recognising the trade-off between rubbing in a loose pack and compression in a tight one.',
            'Do not read a scuffed lot as merely cosmetic: assess water loss risk, decay risk, and the possibility of bruising hidden beneath the scuffing.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  causedByConditions: [
    'Harvesting or lifting before the skin or periderm has set, leaving the barrier layer easily stripped',
    'Soil, sand, and grit carried with the crop, making every contact abrasive',
    'Movement across harvester webs, elevators, brush rollers, and roller tables',
    'Continuous vibration during transport, rubbing units against neighbours and against packaging for the whole journey',
    'Loose packing that permits movement within the package',
    'Repeated tipping and transfer between containers, each adding surface contact',
    'Rough handling of turgid or wet produce, whose skin tears more readily',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Bruising — a different mechanism (shear at the surface versus rupture of tissue beneath it), but the two arrive together from the same handling, and abrasion actively masks bruising by dulling and discolouring the surface that might otherwise show it',
    'Russeting — a pre-harvest, cultivar- and weather-related roughening of apple and pear skin that closely resembles handling scuff, and which no packhouse caused',
    'Limb rub and wind scarring — fruit rubbed against branches or neighbours on the tree before harvest, leaving scored dull patches indistinguishable in kind from line abrasion',
    'Impact damage — a blow can also break skin, but it does so at a point rather than along a path, and an impact-broken skin and an abraded one both simply present as an open wound once tissue has browned',
    'Blue mould and other storage rots — an abrasion is a wound and a wound is what these pathogens require; by the time the rot is visible the scuff that admitted it is gone, so the loss is recorded as disease',
    'Water loss and shrivel — the shrivel that follows abrasion is often recorded as a storage humidity problem when its cause is a damaged barrier layer rather than the store',
    'Insect feeding scars and mechanical field damage — surface scarring from causes in the field ages into corky marks that resemble healed handling injury',
  ],
  diagnosticLimitations: [
    'Abrasion cannot be dated or located from appearance, and the most important consequence of that is attribution: russeting, limb rub, and wind scarring are pre-harvest surface defects that closely resemble handling scuff, so a scuffed unit is not evidence of a packhouse or transport failure.',
    'The cues that separate old field marks from fresh handling damage — corky and dry versus moist and browning, tree geometry versus equipment geometry — are tendencies. They are weakened by time in store, by cultivar, and by the ordinary case of an old orchard rub and a fresh scuff on the same fruit.',
    'Abrasion masks bruising rather than revealing it. A dulled, roughened surface makes sub-surface damage harder to see, so a scuffed lot is less assessable than a clean one, and the visible defect may not be the important one.',
    'Severity by eye does not predict consequence. A conspicuous scuff on a cured tuber with a formed wound periderm and a slight one on an uncured tuber are not equivalent risks, and appearance does not indicate whether healing has occurred.',
    'Because abraded tissue admits wound pathogens, abrasion losses are routinely recorded as decay. The wound is unrecognisable in rotted tissue, so this defect — like bruising — is systematically under-recorded and the pathogen is blamed for a handling failure.',
    'Shrivel and weight loss following abrasion are commonly attributed to store humidity rather than to a damaged barrier layer, so the mechanical cause is missed and the store is adjusted instead.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Handling injury, curing practice, and post-harvest loss in roots, tubers, and fresh produce',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Skin set, skinning injury, wound healing, and curing in potato and sweet potato',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Surface injury, water loss through damaged skin, and commodity-specific handling recommendations',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Skin set and handling damage assessment in potatoes and field vegetables',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest surface injury and wound-entry decay in fresh produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Abrasion risk follows soil type, harvest timing, and equipment rather than region — gritty soils and crops lifted before skin set produce more of it anywhere — while the water-loss consequences are more severe in dry ambient conditions and long chains.',
  limitations: [
    'This entry gives no curing conditions, durations, temperatures, humidities, or skinning tolerances. Curing regimes are commodity-specific and are set by sourced post-harvest guidance; permitted skinning and scuffing are defined by the applicable grade standard for the commodity and market.',
    'Susceptibility varies with commodity, cultivar, maturity, skin set, and water status at handling, so guidance written for a commodity may not describe a particular lot or a particular season.',
    'Symptom descriptions are indicative only. They do not confirm a handling cause, and they do not separate post-harvest abrasion from pre-harvest russeting, limb rub, or wind scarring.',
    'No machinery operating or adjustment procedures are described here. Harvester and grading-line set-up is governed by manufacturer instructions and site procedures and requires qualified personnel.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Abrasion Injury: Scuffing, Skinning and Rub Damage',
    description:
      'Abrasion strips the skin that holds water in and pathogens out. Why scuffing is not cosmetic, how it hides bruising, and why field rub marks look identical.',
    keywords: [
      'abrasion injury',
      'skinning',
      'scuffing',
      'skin set',
      'curing wound healing',
    ],
  },
  structuredData: { article: true },
};
