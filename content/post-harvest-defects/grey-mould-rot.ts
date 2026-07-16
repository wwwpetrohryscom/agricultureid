import type { PostHarvestDefectContent } from '@/types/content';

export const greyMouldRot: PostHarvestDefectContent = {
  id: 'post-harvest-defect-grey-mould-rot',
  slug: 'grey-mould-rot',
  contentType: 'post-harvest-defect',
  title: 'Grey Mould Rot',
  defectClass: 'pathological',
  alternativeNames: ['Gray mold rot', 'Botrytis rot', 'Botrytis fruit rot'],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Grey mould rot is a post-harvest decay caused by Botrytis cinerea, which colonises wounds and senescing tissue, continues to develop at cold-storage temperatures, and spreads by contact between touching units; it frequently begins as a latent field infection, and it cannot be reliably told apart from blue mould by eye.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grey mould rot is caused by Botrytis cinerea, a fungus with an unusually wide host range and an unusually accommodating set of requirements. It colonises tissue that is wounded, senescing, or otherwise no longer defending itself, and it produces a soft, spreading decay overlaid in time by a characteristic grey-brown fuzzy growth. It is a familiar problem in soft fruit, grapes, and stored vegetables, and it is one of the principal reasons that long-stored and long-hauled produce fails on arrival rather than on despatch.',
    },
    {
      type: 'paragraph',
      text: 'Two properties make it disproportionately important after harvest, and both cut against ordinary expectations of what cold storage achieves. The first is that Botrytis is notably cold-tolerant: it continues to grow at the temperatures used for cold storage, so refrigeration slows the rot without arresting it and a long hold gives the fungus the time it needs. The second is that it spreads by direct contact between adjacent units, so a single infected fruit propagates into the fruit touching it and produces the clustered pockets of decay that packers call nesting. Cold storage therefore does not remove the problem; it changes its timescale, and a lot that is sound at loading can be substantially decayed at destination.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Pathological — fungal rot caused by Botrytis cinerea',
    },
    {
      label: 'Route of entry',
      value:
        'Wounds and senescing or dying tissue, including flower parts retained on the fruit; sound, actively defending tissue resists it far better',
    },
    {
      label: 'Appearance',
      value:
        'Soft, spreading decay bearing grey to grey-brown fuzzy sporulation as the lesion matures',
    },
    {
      label: 'Behaviour in the cold',
      value:
        'Continues to develop at cold-storage temperatures — cooling slows the rot markedly but does not stop it',
      note: 'This is why grey mould is characteristic of long cold storage and long-distance transport rather than only of warm conditions',
    },
    {
      label: 'Spread pattern',
      value:
        'Passes by contact from an infected unit to the units touching it, producing clustered pockets of decay known as nesting',
    },
    {
      label: 'Latency',
      value:
        'Infection is frequently established in the field at flowering and remains quiescent until the fruit senesces, so a rot appearing in store may have originated before harvest',
    },
    {
      label: 'Distinguishing from blue mould',
      value:
        'Not reliably possible by eye — the two overlap in presentation and require laboratory confirmation to separate',
    },
  ],
  sections: [
    {
      id: 'behaviour',
      heading: 'Why cold storage does not settle it',
      body: [
        {
          type: 'paragraph',
          text: 'Most of what is expected of refrigeration rests on the assumption that cold stops microbial growth. For Botrytis that assumption is wrong in a specific and costly way. The fungus is adapted to cool conditions and continues to extend at the temperatures a cold store is built to hold, more slowly than it would in the warm but by no means negligibly. The consequence is arithmetic rather than biological: a rot that would express in days at ambient expresses in weeks in the cold, and a supply chain designed around weeks of storage or transit gives it precisely the interval it needs. Grey mould is thus a signature defect of the long hold, and its appearance at destination is not in itself evidence that the cold chain was breached.',
        },
        {
          type: 'paragraph',
          text: 'Contact spread compounds this. Unlike rots that depend on airborne spores finding a fresh wound, Botrytis grows directly from a colonised unit into the sound one pressed against it, which means the packing geometry becomes part of the disease. One infected berry in a punnet can take its neighbours; a single fruit in a tray can seed the cluster around it. This produces the characteristic finding of a lot in which decay is not scattered at random but concentrated in nests, and it explains why the proportion of a consignment lost can rise sharply during transit from a starting incidence that looked tolerable at packing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Cold slows this rot; it does not arrest it',
          text: 'Holding within the correct temperature range is necessary and worthwhile, but it is not a control that finishes the job for Botrytis. A correctly run cold chain will still deliver grey mould at the end of a sufficiently long hold, and finding it on arrival should not automatically be read as a temperature failure. The applicable holding temperature is commodity-specific and set by sourced post-harvest guidance; none is given here.',
        },
      ],
    },
    {
      id: 'latency',
      heading: 'The infection often predates the store',
      body: [
        {
          type: 'paragraph',
          text: 'Botrytis frequently enters the fruit long before anyone handles it. In soft fruit and grapes in particular, the fungus colonises flower parts during bloom and then establishes in the developing fruit, where it stops. It does not advance, produces no symptom, and cannot be detected by looking; the fruit grows and is harvested carrying an infection that is entirely invisible. What ends the quiescence is the fruit itself: as it ripens and senesces, its defences relax and its tissue becomes hospitable, and the fungus that has been waiting resumes growth. The rot then appears in store, in transit, or on the shelf.',
        },
        {
          type: 'paragraph',
          text: 'This has a direct bearing on attribution. Grey mould emerging in a consignment is routinely treated as a handling or storage failure, and it may not be one — the infection court may have been a flower in a field months earlier, and no packhouse operation could have found it or excluded it. Neither is the reverse safe to assume: Botrytis is also a straightforward wound coloniser, and rough handling genuinely does generate infections. The point is that the rot as observed does not distinguish between these histories, and assigning responsibility from the lesion is not possible. Establishing which applies needs the crop history, the handling record, and the temperature record, not a closer look at the fruit.',
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Visible mould and mycotoxin are not the same question',
      body: [
        {
          type: 'paragraph',
          text: 'Grey mould is a decay organism rather than a fungus known primarily for toxin production, and it would be easy to conclude that the mycotoxin question does not arise here. That conclusion is not safe, for a reason that has little to do with Botrytis itself: a lot that has been rotting has not been rotting in isolation. Tissue broken down by grey mould is readily colonised by other fungi, some of which are toxigenic, and the conditions that permitted one rot commonly permit others. The presence of a grey-brown fuzzy growth therefore tells nothing useful about toxin either way — it does not establish that a mycotoxin has been produced, since that depends on which organisms were actually involved, on the substrate, and on the conditions they grew under.',
        },
        {
          type: 'paragraph',
          text: 'The direction that matters more is the other one, and it holds regardless of which fungus is being discussed. A lot showing no visible mould at all may still carry mycotoxin. Toxins are chemically stable and remain in the commodity after the fungus that made them has died or been picked out; they diffuse into tissue around a lesion, so cutting away the visible decay leaves contaminated material behind in flesh that looks sound; they are distributed unevenly through a lot, so a clean-looking portion is not evidence about the rest; and they are invisible, odourless, and tasteless, offering no sensory cue whatever.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Sorting out mouldy fruit is not a toxin measure',
          text: 'Removing decayed units limits contact spread and improves the appearance and saleability of a lot. It does not detect a mycotoxin and does not remove one, and neither does washing or inspection. Whether a mycotoxin is present is established only by appropriate laboratory analysis on a properly drawn representative sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none. EFSA and FAO publish the applicable framework.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why it cannot be named by eye',
      body: [
        {
          type: 'paragraph',
          text: 'Blue mould and grey mould are treated as obviously different rots and are, in practice, confused constantly. Both produce soft, watery, spreading decay; both sporulate on the lesion surface as it matures; and the colour difference that supposedly separates them does not survive contact with real fruit. Sporulation colour changes as a lesion ages, varies with the substrate the fungus is growing on, and is frequently obscured or replaced entirely by secondary fungi that arrive on tissue already dying. Earlier still, before either has sporulated at all, there is simply nothing to look at: two soft watery lesions, indistinguishable. The blue mould entry in this reference makes the same statement from the other side, and it is worth stating plainly here — these two rots cannot be reliably told apart by eye, and separating them requires laboratory confirmation.',
        },
        {
          type: 'list',
          items: [
            'Grey mould and blue mould cannot be reliably distinguished visually; confident separation requires culture or molecular confirmation by a competent laboratory.',
            'Sporulation colour shifts with lesion age and substrate and is a weak discriminator even between well-separated genera.',
            'Before sporulation, the lesions of many unrelated rots are simply soft watery decay and carry no distinguishing information at all.',
            'Secondary colonisers frequently dominate the surface of decaying tissue, so what is visible need not be what initiated the rot.',
            'Nesting is suggestive of contact spread but does not identify the organism — other rots also propagate between touching units.',
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
          text: 'Because Botrytis exploits wounds and senescing tissue and then travels by contact, the effective levers act on damage, on time, and on how units are held apart. Careful handling reduces the wounds available. Prompt cooling and consistent cold holding extend the interval before the rot becomes commercially significant, which for a cold-tolerant fungus is a genuine gain even though it is not a solution. Removing decayed units interrupts contact spread. Packaging that limits crushing and separates units restricts the nesting pathway, and modified or controlled atmospheres are used for some commodities as an additional brake on both fungal growth and fruit senescence.',
        },
        {
          type: 'list',
          items: [
            'Handle to minimise wounding, and cool promptly — for a cold-tolerant fungus, the time bought by rapid cooling matters more than for most rots.',
            "Hold consistently within the commodity's own range through every link, recognising that this delays grey mould rather than preventing it.",
            'Remove decayed units where practical to interrupt contact spread, treating this as a spread-control and appearance measure and never as a toxin measure.',
            'Use packaging that limits compression and reduces unit-to-unit contact, since the packing geometry is part of how this rot propagates.',
            'Match the intended storage or transit duration to the commodity, because grey mould is fundamentally a defect of the long hold.',
            'Where a mycotoxin question arises, refer it to laboratory testing under the applicable food-safety framework rather than to visual assessment.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'wine-grapes' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'head-cabbage' },
  ],
  causedByConditions: [
    'Latent infection established in the field at flowering, quiescent in the developing fruit until senescence releases it',
    'Wounds from harvest, handling, grading, or packing that expose tissue to a fungus present throughout the growing and storage environment',
    'Senescing or over-mature tissue, including retained flower parts and dying leaves, which the fungus colonises without needing a wound',
    'Extended cold storage or long transit, over which a cold-tolerant fungus continues to develop',
    'Contact between infected and sound units in packaging, permitting direct spread and the formation of nests',
    'Free moisture and condensation on produce surfaces, favouring establishment and sporulation',
    'Delayed or inconsistent cooling, which shortens the interval before the rot becomes commercially significant',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  confusableWith: [
    'Blue mould — both give soft watery decay with surface sporulation as the lesion matures; the colour cue that supposedly separates them shifts with lesion age and substrate, so the two cannot be reliably told apart by eye and require laboratory confirmation',
    'Sour rot — another soft watery decay; its fermented odour is suggestive and its lack of dry powdery sporulation is a further hint, but neither cue is confirmatory and early lesions of the two are not separable',
    'Storage rot in general — grey mould is one specific member of that umbrella category, and before sporulation there is nothing visible to distinguish it from any other rot under the label',
    'Post-harvest anthracnose — both may appear in store from infections established in the field, and both are routinely misattributed to handling; the lesions differ in character once developed but not dependably enough to identify on',
    'Secondary colonisation — a lesion that Botrytis started is readily overgrown by later arrivals, so a rot correctly attributed to grey mould at onset may carry a quite different organism on its surface by the time anyone looks at it',
    'Senescence and over-maturity — tissue that is simply old softens and darkens, and because Botrytis colonises senescing tissue the disorder and the rot appear together and are hard to order causally',
    'Chilling injury followed by decay — chilling-weakened tissue is readily colonised, so a grey mould record may be the visible endpoint of a temperature problem rather than a pathological one',
  ],
  diagnosticLimitations: [
    'Grey mould and blue mould cannot be reliably distinguished by eye. Both present as soft watery decay with surface sporulation, and sporulation colour shifts with lesion age and substrate; separating them confidently requires culture or molecular confirmation by a competent laboratory.',
    'Before sporulation develops, a grey mould lesion is simply soft watery decay and is indistinguishable from the early lesions of several unrelated rots, which is precisely the stage at which an intake or despatch decision is usually made.',
    'A rot appearing in store does not establish that the store caused it. Botrytis infection is frequently latent from flowering and invisible until the fruit senesces, so the lesion carries no information about whether the infection court was a field flower or a handling wound.',
    'Grey mould found on arrival is not in itself evidence of a cold-chain breach: the fungus develops at correct cold-storage temperatures, so a properly held lot can still express the rot at the end of a long hold.',
    'Visible mould does not establish that a mycotoxin is present — toxin production depends on which organisms were involved, on the substrate, and on the conditions they grew under, and decaying tissue is commonly colonised by more organisms than the one being named.',
    'Critically, the absence of visible mould does not establish the absence of mycotoxin. Toxin persists after the fungus is dead or removed, occurs in sound-looking tissue adjacent to lesions that were cut out, is distributed unevenly through a lot, and is invisible and odourless; no inspection, sorting, or washing step detects or removes it. Presence and concentration are established only by appropriate laboratory analysis on a properly drawn representative sample, against limits set by food-safety regulation (see EFSA and FAO).',
    'Nesting indicates contact spread but does not identify the organism responsible, and its absence does not exclude Botrytis.',
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  glossaryTerms: ['inoculum', 'host-plant'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible mould and mycotoxin presence are distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling and cold management of perishable produce; mycotoxin prevention and management in stored commodities',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Botrytis cinerea post-harvest decay of soft fruit, grapes, and stored vegetables',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest decay identification and packhouse management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Botrytis latent infection at flowering and its expression during fruit senescence',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Botrytis cinerea occurs wherever its very wide range of hosts is grown and stored, and is favoured by cool, humid growing and storage conditions; mycotoxin limits and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no temperatures, durations, or mycotoxin limits. Holding conditions are commodity- and cultivar-specific and set by sourced post-harvest guidance; applicable mycotoxin limits are set by food-safety regulation. Consult FAO, USDA-ARS, EFSA, and national regulators.',
    'Identification of the causal fungus from symptoms is not reliable; grey mould overlaps with blue mould and other rots, and confirmation requires a competent laboratory.',
    'Nothing here supports assessing the safety of a lot by appearance. Visible mould does not confirm contamination, and its absence does not exclude it; only appropriate laboratory analysis on a properly drawn sample can answer that question.',
    'No fungicide, treatment, dose, or atmosphere procedure is described here; chemical decay control and controlled-atmosphere operation are governed by product labels, national registration, and facility procedures, and require qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grey Mould Rot: Botrytis in Cold Storage',
    description:
      'Botrytis cinerea rots produce in the cold, spreads between touching fruit, and often starts latent at flowering. Why it cannot be told from blue mould by eye.',
    keywords: [
      'grey mould rot',
      'Botrytis cinerea',
      'post-harvest decay',
      'nesting',
      'latent infection',
    ],
  },
  structuredData: { article: true },
};
