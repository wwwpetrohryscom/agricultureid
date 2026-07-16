import type { PostHarvestDefectContent } from '@/types/content';

export const bruising: PostHarvestDefectContent = {
  id: 'post-harvest-defect-bruising',
  slug: 'bruising',
  contentType: 'post-harvest-defect',
  title: 'Bruising',
  defectClass: 'mechanical',
  alternativeNames: [
    'Bruise damage',
    'Internal bruising',
    'Blackspot bruising (potato)',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Bruising is sub-surface tissue damage caused by mechanical force without the skin necessarily breaking; it is frequently internal and invisible from outside, commonly darkens only some time after the event that caused it, and its appearance rarely reveals whether the force was an impact or a sustained load.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bruising is what mechanical force does to soft tissue. When a fruit, tuber, or root is loaded beyond what its cells can carry, cell walls and membranes rupture below the surface while the skin itself often remains unbroken. The contents of the broken cells mix with enzymes and oxygen that they were previously kept apart from, and the affected tissue discolours, softens, and loses its structure. Nothing is added and nothing is removed: the produce is intact in outline and damaged in substance, which is precisely why bruising is the mechanical defect that inspection handles worst.',
    },
    {
      type: 'paragraph',
      text: 'Bruising is best understood as an outcome rather than as a cause. A bruise is the tissue response, and several quite different mechanical events produce it — a fruit dropped onto a hard transfer point, a tuber carrying the weight of an over-deep bin for weeks, a carton compressed under a badly stacked pallet, a load vibrating over a long road journey. The bruise records that force exceeded tolerance; it does not record which force, applied how, or where in the chain. That gap between what a bruise proves and what it is routinely assumed to prove is the substance of this entry, and it is the reason bruising is so often attributed to the wrong operation, or to disease, or to nobody at all.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — sub-surface tissue rupture from applied force',
    },
    {
      label: 'What it actually is',
      value:
        'An outcome, not a cause: both impact and sustained compression produce bruises, and so can vibration over a long journey',
      note: 'Bruising is the tissue result; the force that produced it is a separate question the bruise does not answer',
    },
    {
      label: 'Visibility',
      value:
        'Frequently internal and invisible from outside, with the skin unbroken over damaged flesh',
      note: 'Found on cutting, at processing, or by the consumer — routinely not at the packing line',
    },
    {
      label: 'Timing of expression',
      value:
        'Discolouration commonly develops and deepens after the causal event, so a bruise can be inconspicuous at packing and obvious later',
    },
    {
      label: 'Route to decay',
      value:
        'Bruised tissue is readily colonised by wound pathogens, so the visible endpoint is often a rot rather than the damage that admitted it',
    },
    {
      label: 'Susceptibility',
      value:
        'Varies with commodity, cultivar, maturity, turgor, and tissue temperature — two lots handled identically need not bruise equally',
    },
    {
      label: 'Where tolerances are set',
      value:
        'Permitted bruising is defined by the applicable grade standard and commodity-specific post-harvest guidance, not by general rule',
      note: 'See FAO, USDA-ARS, and AHDB post-harvest references for the commodity in question',
    },
  ],
  sections: [
    {
      id: 'mechanism',
      heading: 'What a bruise is',
      body: [
        {
          type: 'paragraph',
          text: 'A bruise begins when applied force exceeds the strength of the tissue carrying it. Cell walls fail, membranes rupture, and cell contents that were held in separate compartments come into contact with one another and with air. Enzymatic browning follows in most commodities, which is why a bruise darkens; in others the damaged zone becomes water-soaked, translucent, or simply soft. The skin is often entirely unbroken above all of this, because skin is flexible and the flesh beneath it is not.',
        },
        {
          type: 'paragraph',
          text: 'Two things follow from that mechanism and matter more than any description of appearance. First, the damage is done at the moment of loading, but the discolouration that makes it findable is a chemical process that takes time to develop — the defect and its symptom are separated in the clock. Second, because the visible surface is intact, there is often nothing at all on the outside to find. A bruise is not a mark on the produce; it is a region of ruined tissue underneath a mark that may never appear.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A sound-looking lot at packing is not a lot without bruises',
          text: 'Bruising is commonly internal, and its discolouration commonly develops after the event that caused it. An inspection carried out at packing can therefore pass produce that is conspicuously bruised days later, with the damage already present and irreversible at the moment it was passed. Absence of visible bruising at packing is not evidence that the lot was handled well.',
        },
      ],
    },
    {
      id: 'which-force',
      heading: 'A bruise does not name the force that made it',
      body: [
        {
          type: 'paragraph',
          text: 'Impact damage and compression damage are genuinely different events. An impact is a single dynamic blow delivered in an instant — a drop onto a grading table, a throw into a bin, a fall against the side of a trailer. Compression is a sustained static load carried over time — an over-deep bin, an over-stacked pallet, an over-tight pack. Bruising is what both of them produce, and the resulting tissue damage is the same kind of damage in both cases.',
        },
        {
          type: 'paragraph',
          text: 'There is a widely repeated cue: compression bruises tend to be broad and flattened where the produce meets a contact face or a neighbouring unit, while impact bruises tend to be more localised at the point of the blow. The cue is real enough to be worth noticing and far too weak to diagnose with. Bruise shape is modified by tissue firmness, by the geometry of whatever the produce was resting against, by how far the damage spread after the event, and by whether more than one force acted on the same unit — which, in a real chain, is usual. A broad flattened bruise on the shoulder of a fruit that also fell twice is not evidence of compression.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Shape is suggestive, not diagnostic',
          text: 'The pattern of a bruise may suggest which kind of force was involved. It does not establish it. Attributing a bruise to a specific event, operation, or leg of the chain requires handling records — drop-height surveys, bin-depth records, stacking configuration, journey data — not the appearance of the bruise itself.',
        },
      ],
    },
    {
      id: 'hidden-damage',
      heading: 'Why bruising is systematically under-recorded',
      body: [
        {
          type: 'paragraph',
          text: 'Bruising is under-recorded for three compounding reasons, and they reinforce one another rather than simply adding up.',
        },
        {
          type: 'list',
          items: [
            'It is often invisible. Sub-surface damage under unbroken skin cannot be seen from outside, and only cutting, processing, or peeling reveals it. Non-destructive assessment of internal bruising is an active area of work, not a routine packing-line capability for most commodities.',
            'It is delayed. The browning that makes a bruise findable develops after the causal event, so the inspection nearest to the damage is the one least able to see it, and the inspection that finds it is far downstream from where it happened.',
            'It becomes something else. Bruised tissue is an open door for wound pathogens, and a rot that follows a bruise is recorded as a disease loss. The wound is frequently unrecognisable by the time the rot is the visible endpoint, so the handling failure disappears from the record entirely and the fungus takes the blame.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that bruising rates measured at the point of packing understate the bruising a lot actually carries, and loss statistics that separate "mechanical damage" from "decay" understate mechanical damage in favour of decay. Where a lot shows disproportionate rot after an unremarkable cold chain and clean sanitation, the wounding history upstream is worth examining before the pathogen is treated as the primary problem.',
        },
      ],
    },
    {
      id: 'susceptibility',
      heading: 'Why identical handling gives different results',
      body: [
        {
          type: 'paragraph',
          text: "Bruise susceptibility is a property of the produce as much as of the handling, which is why two lots through the same line can differ substantially. Commodity and cultivar set the baseline. Maturity moves it: over-mature, softer fruit generally bruises more readily, while very firm immature tissue may resist bruising and crack instead. Turgor matters — fully turgid tissue and wilted tissue fail differently under load. Tissue temperature changes the mechanical properties of the flesh. In potatoes, susceptibility to blackspot-type bruising is affected by the tuber's condition and history well before it reaches the store.",
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Commodity and cultivar',
              description:
                "The dominant factor and the one least under a handler's control at the point of packing; cultivar differences in bruise susceptibility are well documented for apples and potatoes in particular.",
            },
            {
              term: 'Maturity and firmness',
              description:
                'Softer, riper tissue generally bruises more readily; firmer tissue may resist bruising and fail by cracking or splitting instead, which is a different defect with a different record.',
            },
            {
              term: 'Turgor and hydration',
              description:
                'Fully turgid and partly wilted tissue respond differently to the same load, so bruise outcomes vary with the water status of the lot at the moment it is handled.',
            },
            {
              term: 'Tissue temperature',
              description:
                'Flesh temperature alters the mechanical behaviour of the tissue and therefore its response to a given force; the direction and size of the effect are commodity-specific and are set out in sourced guidance rather than generalised here.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "None of these are given here as values, thresholds, or rankings, because none of them generalise across commodities. What generalises is the principle: a bruising result is the product of the force applied and the susceptibility of the tissue it was applied to, and a lot cannot be assessed against another lot's handling record.",
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Bruising cannot be treated once it has occurred. The damaged tissue does not recover, the discolouration does not reverse, and no downstream step restores the lot. Management is entirely upstream, and it acts on force rather than on symptoms.',
        },
        {
          type: 'list',
          items: [
            'Reduce force at every transfer point rather than at the one where damage is noticed, since the bruise found in the packhouse may have been made in the field.',
            'Treat drops, throws, and hard contact surfaces as the design problem they are: padding, reduced fall heights, and gentle transitions act on impacts that no inspection will later see.',
            'Limit sustained loading — bin depth, pallet stacking, pack tightness — as a separate problem from impact, because it is a separate mechanism and the two are reduced by different measures.',
            'For potatoes and sweet potatoes, curing after harvest allows wound periderm to form over damage that has broken the skin, which genuinely reduces the route to decay; it does nothing for sub-surface bruising where the skin was never broken.',
            'Assess bruising destructively on a drawn sample when the question matters, rather than relying on a surface inspection that cannot see the defect.',
            'Investigate unexplained decay as a possible wounding problem, not only a sanitation problem.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
  ],
  causedByConditions: [
    'Dynamic impacts at transfer points — drops onto hard surfaces, throws into bins, falls against container walls',
    'Sustained static loading from over-deep bins, over-stacked pallets, or over-tight packing',
    'Vibration over long transport journeys, where repeated low-level contact accumulates damage without any single identifiable event',
    'Tissue condition at the moment of handling: maturity, turgor, and flesh temperature all alter how the same force is absorbed',
    'Cultivar susceptibility, which is set long before the produce reaches the packhouse',
    'Handling equipment with unpadded contact points, abrupt transitions, or excessive fall heights between stages',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Impact damage — an impact is one of the two forces that produce bruising, not a separate appearance; a bruise caused by a blow and a bruise caused by a load are the same kind of tissue damage and are not reliably separable by eye',
    'Compression damage — the other force that produces bruising; broad flattened bruises at contact faces are suggestive of sustained load and are not diagnostic of it, since bruise shape is modified by tissue firmness, contact geometry, and multiple successive events',
    'Abrasion injury — a different mechanism (surface friction removing or scuffing skin, rather than sub-surface rupture), but the two co-occur constantly and abrasion can mask bruising in the tissue beneath it',
    'Blue mould and other storage rots — bruised tissue is a principal entry route for wound pathogens, and by the time the rot is visible the bruise that admitted it is often unrecognisable, so the loss is recorded as disease',
    'Chilling injury — internal browning found on cutting is produced by both, and the discolouration alone does not distinguish a mechanical bruise from a temperature disorder',
    'Freezing injury — also gives water-soaked, collapsed internal tissue, but by ice-crystal rupture rather than applied force',
    'Internal browning disorders — several cultivar-specific and atmosphere-related storage disorders produce internal discolouration that resembles bruising in a cut sample',
  ],
  diagnosticLimitations: [
    'Bruising is frequently internal and invisible from outside, with unbroken skin over ruined flesh. A surface inspection cannot see it, so a lot can pass at the packing line while carrying substantial damage that is found only on cutting, at processing, or by the consumer. This is the single most important limitation on the page.',
    'The symptom is delayed relative to its cause: the discolouration that makes a bruise findable develops and deepens over time after the force was applied. An inspection carried out close to the causal event is therefore the one least able to detect it, and absence of visible bruising at packing is not evidence of sound handling.',
    "A bruise's appearance rarely reveals which force caused it. Impact and compression are different events but produce the same kind of tissue damage, and the pattern cue — compression bruises tending broad and flattened at contact faces, impact bruises tending localised — is suggestive only. It is confounded by tissue firmness, contact geometry, spreading after the event, and the routine reality of several forces acting on the same unit.",
    'Bruising cannot be attributed to a leg of the chain from appearance. The bruise carries no information about where or when it was made, and attribution requires handling records — fall heights, bin depths, stacking configuration, journey data — that symptoms cannot substitute for.',
    'Because bruised tissue is readily colonised by wound pathogens, bruising is systematically under-recorded and its losses are reallocated to decay. The wound is often invisible by the time the rot is the visible endpoint, so mechanical damage is undercounted and disease is overcounted in loss records.',
    'Internal browning seen on cutting does not identify mechanical force as the cause: chilling injury, atmosphere-related disorders, and cultivar-specific internal browning produce overlapping internal symptoms and are not separable from bruising by the discolouration alone.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Mechanical damage in post-harvest handling chains and its contribution to food loss',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Bruise development in fruit, impact and compression mechanisms, and commodity-specific handling recommendations',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Potato bruising susceptibility, handling assessment, and store management practice',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Tuber damage, wound healing, and post-harvest handling of potato',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest handling injury and its relationship to decay in fresh produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Bruise susceptibility is a property of the commodity and cultivar rather than of a region, but the incidence of bruising depends heavily on local chain design — harvest method, container type, road surface, transfer points, and how far produce travels before it is graded.',
  limitations: [
    'This entry gives no bruise tolerances, impact thresholds, load limits, or drop heights. Permitted bruising is defined by the applicable grade standard for the commodity and market, and handling limits are commodity- and cultivar-specific and must be taken from sourced post-harvest guidance.',
    'Bruise susceptibility varies by cultivar, maturity, turgor, and tissue temperature, so guidance written for a commodity may not describe a particular lot, and a handling regime that is adequate for one cultivar may not be for another.',
    'Symptom descriptions here are indicative only. They do not confirm a cause, do not distinguish impact from compression, and do not separate mechanical bruising from disorders with overlapping internal presentations.',
    'Bruising is irreversible once established. Nothing described here recovers an affected lot, and the entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bruising: Why the Damage Is Often Invisible',
    description:
      'Bruising is sub-surface rupture that is often internal and darkens only after the event, so packing inspection misses it. Why a bruise cannot name its cause.',
    keywords: [
      'bruising',
      'internal bruising',
      'mechanical damage',
      'post-harvest handling damage',
      'bruise susceptibility',
    ],
  },
  structuredData: { article: true },
};
