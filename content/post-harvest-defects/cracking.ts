import type { PostHarvestDefectContent } from '@/types/content';

export const cracking: PostHarvestDefectContent = {
  id: 'post-harvest-defect-cracking',
  slug: 'cracking',
  contentType: 'post-harvest-defect',
  title: 'Cracking',
  defectClass: 'mechanical',
  alternativeNames: [
    'Fissuring',
    'Stress cracking',
    'Checking',
    'Growth cracks',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Cracking is fracture of tissue or kernel without full separation into pieces; much of it originates before harvest in growing conditions and is merely discovered afterwards, and in grain it is commonly created by drying stress and remains invisible until the kernel breaks at milling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cracking is a fracture that does not go all the way. A crack may be confined to the skin, run into the flesh, or exist entirely inside a kernel as an internal fissure with an unmarked surface; the unit remains in one piece. It is classed here as mechanical because the immediate cause is always a stress the tissue could not carry, but that classification conceals the most important point about the defect: the stress is very often not a handling stress, and very often was not applied post-harvest at all. Fruit and root crops crack in the field. Grain cracks during drying. Both are then found later, by someone downstream, who did not cause them.',
    },
    {
      type: 'paragraph',
      text: 'This makes cracking the mechanical defect most likely to be misattributed. A cracked tomato in a carton, a split-skinned grape in a punnet, a fissured carrot at intake — the natural reading is that something in the chain was rough, and the natural reading is frequently wrong. Rain or irrigation after a dry spell, a change in growth rate, and cultivar susceptibility produce cracks on the plant, days or weeks before anyone touched the crop. A crack discovered in the packhouse is evidence that a crack exists. It is not evidence of a post-harvest handling failure, and treating it as one sends an investigation to the wrong place and blames the wrong people.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — fracture without full separation of the unit',
    },
    {
      label: 'Most cracks are not handling damage',
      value:
        'Many cracks in fruit, roots, and vegetables originate pre-harvest from growing conditions and are only discovered post-harvest',
      note: 'Finding a crack in the packhouse does not establish that the packhouse, or any handler, caused it',
    },
    {
      label: 'Pre-harvest drivers',
      value:
        'Rain or irrigation following a dry spell, changes in growth rate, water uptake outpacing skin expansion, and cultivar susceptibility',
    },
    {
      label: 'In grain',
      value:
        'Drying stress cracks kernels internally — over-rapid or over-hot drying, and rewetting of dried grain, set up moisture gradients the kernel cannot accommodate',
      note: 'No rates or temperatures are given here; they are commodity- and dryer-specific and set by sourced drying guidance',
    },
    {
      label: 'Grain cracks are usually invisible',
      value:
        'Internal fissures leave the kernel surface intact and are found by transmitted-light inspection or revealed later as breakage during milling',
    },
    {
      label: 'Relationship to splitting',
      value:
        'Heavily overlapping terms used inconsistently between commodities; the boundary is largely conventional rather than mechanistic',
    },
    {
      label: 'Where the tolerances are set',
      value:
        'Permitted cracking, and how it is named and counted, are defined by the applicable grade standard for the commodity and market',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What counts as a crack',
      body: [
        {
          type: 'paragraph',
          text: 'A crack is a failure in tension. Tissue is pulled apart rather than crushed, and it parts along the line where it was weakest. This is a different failure from bruising, which is a compressive failure of cells beneath an intact surface, and it tends to affect different material: firm, turgid, low-elasticity tissue cracks where soft tissue would bruise. The same lot can do both — over-mature units bruising while immature ones crack under the same handling — which is one reason a defect record that lumps all mechanical damage together explains very little.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Surface or skin cracks',
              description:
                'Fractures confined to the skin or cuticle. Common in tomato, grape, and cherry; the flesh beneath may be entirely sound and the unit still loses its barrier layer.',
            },
            {
              term: 'Growth cracks',
              description:
                'Deeper fractures formed on the plant as tissue expands faster than the skin covering it can accommodate. Characteristic of carrot, tomato, and cabbage, and typically healed over and corky by the time of harvest.',
            },
            {
              term: 'Internal fissures',
              description:
                'Fractures inside a kernel or a fleshy tissue with no external mark at all. The dominant form in cereal grains, and the reason grain cracking is discovered at milling rather than at intake.',
            },
            {
              term: 'Checking',
              description:
                'Fine, shallow, often networked surface cracking. The term is used differently across commodities and processing contexts, which is part of the terminology problem this entry describes.',
            },
          ],
        },
      ],
    },
    {
      id: 'pre-harvest',
      heading: 'Most cracks are made before harvest',
      body: [
        {
          type: 'paragraph',
          text: 'The classic pre-harvest cracking event is water. A crop that has been growing under dry conditions, whose skin has hardened and whose expansion has slowed, receives rain or irrigation; the tissue takes up water and swells faster than the skin can stretch, and the skin fails. Tomatoes crack radially or concentrically at the shoulder, cabbages split at the head, carrots crack longitudinally, grapes split at the berry, and cherries and plums crack at the surface. Nothing has been mishandled. The event is meteorological or agronomic, and it happened while the crop was on the plant.',
        },
        {
          type: 'list',
          items: [
            'Rain or irrigation after a dry period, driving water uptake that outpaces skin expansion — the single most common cause of cracking in fruit and vegetables.',
            'Cultivar susceptibility, which varies substantially within every affected commodity and is a breeding target precisely because it is a field problem.',
            'Growth-rate changes during development, where a period of rapid expansion follows a check.',
            'Maturity at harvest, since over-mature fruit and over-mature heads crack more readily on the plant.',
            'Temperature swings and dew or surface wetness on fruit, affecting how much water is taken up through the skin.',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'A crack in the packhouse is not evidence of a packhouse problem',
          text: 'Cracks arriving from the field are discovered post-harvest because that is where produce is finally inspected, not because that is where they were made. Before a cracking finding is treated as a handling failure, the field history — rainfall or irrigation following a dry spell, cultivar, maturity at harvest — should be examined. Attribution to handling requires evidence that handling was involved; the crack itself provides none.',
        },
        {
          type: 'paragraph',
          text: 'One partial cue is age. A crack formed on the plant has usually had time to heal, so its edges tend to be dry, corky, and suberised, while a fresh crack is moist with exposed tissue that browns as it ages. The cue is useful and not decisive: a crack made shortly before harvest has not healed, a healed crack can be reopened by handling, and old and new cracks appear on the same unit. Time in store also blurs the distinction as fresh cracks dry out.',
        },
      ],
    },
    {
      id: 'grain',
      heading: 'Stress cracking in grain',
      body: [
        {
          type: 'paragraph',
          text: 'Cereal kernels crack for a mechanistically distinct reason: moisture gradients. A kernel that dries too quickly, or is dried with too much heat, loses water from its outer layers far faster than from its core. The outer material contracts around a still-moist interior, the resulting internal stress exceeds what the kernel structure can carry, and it fractures internally — while the outside of the kernel remains unmarked. The same thing happens in reverse when dried grain re-adsorbs moisture: the outer layers swell against a dry core, and the kernel fissures. Maize and rice are the classic cases, and in rice the consequence is measured commercially as broken grains after milling.',
        },
        {
          type: 'paragraph',
          text: 'Stress cracking is the clearest example in this batch of a defect that is invisible when it is created and expensive when it is discovered. A fissured kernel looks like a sound kernel. It weighs the same, it flows the same, and it passes a visual intake inspection. It then breaks during hulling, milling, or handling, and the loss appears as breakage — a downgrade attributed to the mill, the sheller, or the handler, when it was caused by the dryer, possibly a season earlier. Fissures are detectable before that point by transmitted-light examination of a drawn sample, which is why that inspection exists.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No drying rates or temperatures are given here',
          text: 'That over-rapid and over-hot drying cause stress cracking is a general principle. The rates, temperatures, tempering practice, and moisture targets that avoid it are specific to the commodity, the cultivar, the dryer type, and the intended end use, and are set by sourced drying guidance — see FAO, IRRI for rice, CIMMYT for maize, and the applicable national extension references. A universal figure would be wrong for most of the lots it was applied to.',
        },
        {
          type: 'paragraph',
          text: 'Stress cracking should also be distinguished from the mechanical breakage that threshing, shelling, and augering inflict directly. Both end as broken kernels. But a kernel that arrives at the sheller already fissured breaks under handling that a sound kernel would survive, so a breakage problem attributed to equipment may in fact be a drying problem that the equipment merely exposed. Equipment adjustment will not fix that, and the investigation of a breakage complaint should include the drying history.',
        },
      ],
    },
    {
      id: 'terminology',
      heading: 'Cracking, splitting, and the words in between',
      body: [
        {
          type: 'paragraph',
          text: 'Cracking and splitting are not cleanly separable terms, and this entry does not pretend otherwise. The rough convention is that a crack is a partial fracture and a split is a fuller separation that opens the unit, but the usage is commodity-specific and inconsistent between standards, industries, and countries. Tomato growers speak of cracking for defects that cabbage growers would call splitting. Legume trade calls separated cotyledons splits; nobody calls them cracks. Grain trade calls internal fissures stress cracks and calls broken kernels breakage, and the boundary between a badly fissured kernel and a broken one is a matter of whether it happened to come apart yet.',
        },
        {
          type: 'paragraph',
          text: 'The practical upshot is that the distinction is largely conventional rather than mechanistic — both are tensile failures, and the difference is one of degree and of what the local standard calls things. Which term applies to a given defect on a given commodity should be taken from the applicable grade standard, and data recorded under one term should not be compared with data recorded under another without checking that the definitions match. Two lots with different-looking defect records may have the same defect described in two vocabularies.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because the causes divide into field and drying, so do the remedies, and neither is a handling measure. Post-harvest handling has a role only in not opening healed cracks and in not compounding fissured grain, and cracked units that arrive from the field can be removed but not repaired.',
        },
        {
          type: 'list',
          items: [
            'For fruit and vegetables, treat cracking primarily as a field problem: cultivar choice, irrigation consistency, and harvest timing act on it, and no handling improvement will prevent cracks that formed on the plant.',
            'For grain, manage drying to the applicable sourced guidance for the commodity and dryer type, and control re-wetting of dried grain, since the reverse gradient fissures kernels just as drying does.',
            'Take drying history into account when investigating breakage complaints, rather than assuming the mill or the sheller created the damage it revealed.',
            'Sort out cracked units where the grade standard requires it, recognising that this removes the defect from the lot and does not address whatever caused it.',
            'Recognise that a crack, healed or fresh, is a defect in the barrier layer and therefore a route for wound pathogens; cracked fruit in store frequently ends as a rot record.',
            'Record the field history — rainfall or irrigation after dry weather, cultivar, maturity — so that a cracking finding can be attributed correctly rather than by default to whoever handled the crop last.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
  ],
  causedByConditions: [
    'Rain or irrigation following a dry period, driving water uptake that outpaces skin expansion while the crop is still in the field',
    'Cultivar susceptibility, which varies substantially within every affected commodity',
    'Changes in growth rate during development, particularly rapid expansion following a check',
    'Over-mature fruit, roots, or heads, which crack more readily on the plant',
    'Over-rapid or over-hot drying of grain, creating moisture gradients between the kernel surface and its core',
    'Re-adsorption of moisture by dried grain, which fissures kernels by the reverse gradient',
    'Handling that reopens healed field cracks, or that breaks kernels already weakened by internal fissures',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Splitting — the terms overlap heavily and are applied inconsistently across commodities and standards; the boundary between a partial fracture and a full separation is largely conventional rather than mechanistic, and both are tensile failures',
    'Impact damage — a hard enough blow can fracture firm tissue, so an impact and a field crack can present as the same opening; the crack does not record which occurred, and the field origin is the more common explanation in fruit and vegetables',
    'Growth cracks and field splitting — pre-harvest defects discovered post-harvest, routinely misrecorded as handling damage because the packhouse is where produce is finally inspected',
    'Grain breakage from threshing, shelling, and augering — mechanical breakage and stress cracking both end as broken kernels, but a fissured kernel breaks under handling a sound one would survive, so equipment is often blamed for damage that drying created',
    'Bruising — a different failure mode (compressive rupture beneath intact skin versus tensile fracture), and the two sort by tissue condition: firm tissue cracks where soft tissue bruises',
    'Blue mould and other storage rots — a crack is a breach of the barrier layer and an entry route for wound pathogens, so cracked fruit in store commonly ends as a decay record with the crack no longer visible',
    'Russeting and healed surface scarring — old healed cracks become corky and resemble other pre-harvest surface defects, further obscuring their origin',
  ],
  diagnosticLimitations: [
    'A crack does not record where it was made. Many cracks in fruit, roots, and vegetables originate pre-harvest from rain or irrigation after a dry spell, cultivar susceptibility, and growth-rate changes, and are merely discovered post-harvest. Finding a crack in the packhouse is not evidence of a post-harvest handling failure.',
    'The healing cue — field cracks tending dry, corky, and suberised, fresh cracks moist and browning — is suggestive and not decisive. A crack formed shortly before harvest has not healed, healed cracks can be reopened by handling, fresh cracks dry out in store, and old and new cracks occur on the same unit.',
    'In grain, stress cracking is invisible: internal fissures leave the kernel surface unmarked, so intake inspection passes fissured lots as sound. The damage is revealed only as breakage at milling, by which point it is attributed to the mill or the handler rather than to the dryer that caused it, possibly much earlier.',
    'Stress cracking and direct mechanical breakage cannot be separated from the broken kernels that result. A fissured kernel breaks under handling a sound kernel would survive, so a breakage record cannot apportion the cause between drying history and equipment without the drying history.',
    'The cracking and splitting distinction is not diagnostic. It is applied inconsistently across commodities and standards, so a defect record under one term is not comparable with a record under the other unless the definitions have been checked to match.',
    'Cracks are entry routes for wound pathogens, so cracked units frequently end as decay records with the originating crack no longer visible; cracking, like other mechanical defects, is therefore under-recorded relative to the rot that follows it.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Grain drying principles, post-harvest quality loss, and handling of cracked and fissured produce',
    },
    {
      sourceId: 'irri',
      citedFor:
        'Stress cracking and fissuring in rice, drying practice, and the relationship between fissures and milling breakage',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize drying practice and kernel stress cracking',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Fruit and vegetable cracking disorders, pre-harvest water relations, and grain stress-crack assessment',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Field cracking and splitting disorders in vegetables and cereals',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with a strong climatic component: cracking in fruit and vegetables tracks rainfall patterns and irrigation practice, being most common where dry periods are broken by rain near maturity, while grain stress cracking follows drying practice and is concentrated where high-moisture grain is dried rapidly.',
  limitations: [
    'This entry gives no drying rates, temperatures, tempering schedules, moisture targets, or cracking tolerances. Drying parameters are commodity-, cultivar-, dryer-, and end-use-specific and are set by sourced guidance; permitted cracking is defined by the applicable grade standard.',
    'The cracking and splitting terminology is genuinely inconsistent between commodities, standards, and countries. Terms here are used in their common sense and are not a substitute for the definitions in the standard that applies to a lot.',
    'Symptom descriptions are indicative only and do not establish when or where a crack was made; in particular they do not distinguish pre-harvest cracking from post-harvest damage with any reliability.',
    'No dryer operating procedures, equipment settings, or machinery adjustment steps are described here. Drying and milling equipment operation is governed by manufacturer instructions and site procedures and requires qualified personnel.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cracking: Field Origin, Packhouse Discovery',
    description:
      'Most cracks form in the field before harvest, and grain stress cracks form in the dryer. Why a crack found in the packhouse is not proof of a handling failure.',
    keywords: [
      'cracking',
      'stress cracking',
      'grain fissures',
      'growth cracks',
      'fruit cracking',
    ],
  },
  structuredData: { article: true },
};
