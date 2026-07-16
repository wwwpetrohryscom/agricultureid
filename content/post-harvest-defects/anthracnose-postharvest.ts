import type { PostHarvestDefectContent } from '@/types/content';

export const anthracnosePostharvest: PostHarvestDefectContent = {
  id: 'post-harvest-defect-anthracnose-postharvest',
  slug: 'anthracnose-postharvest',
  contentType: 'post-harvest-defect',
  title: 'Post-harvest Anthracnose',
  defectClass: 'pathological',
  alternativeNames: [
    'Anthracnose fruit rot',
    'Colletotrichum fruit rot',
    'Quiescent anthracnose',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Post-harvest anthracnose is a Colletotrichum rot that infects fruit in the field while it is still immature, then stays dormant and completely invisible until the fruit ripens, when it erupts as sunken dark lesions; a lot can therefore be genuinely symptomless at packing and unsaleable on arrival, and no visual inspection at the packhouse can detect it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Post-harvest anthracnose is caused by species of Colletotrichum, and it is the clearest example in this reference of a defect that cannot be inspected for. The fungus does not wait for a wound or for the packhouse. It infects the fruit in the field, often long before harvest, while the fruit is still green and immature: a spore lands on the surface, germinates, penetrates the skin directly — no injury required — and then stops. What follows is not disease but suspension. The infection sits in the outer tissue, arrested, producing no lesion, no discolouration, and no cue of any kind, and the fruit continues to grow and is picked in that condition, carrying an infection nobody could have seen.',
    },
    {
      type: 'paragraph',
      text: 'What ends the dormancy is ripening. As the fruit ripens its chemistry shifts, the compounds that were holding the fungus in check decline, and the infection that has been waiting resumes growth — abruptly. Sunken, dark, well-defined lesions appear on fruit that was unblemished days earlier, often several at once, and they enlarge quickly on tissue that is now soft and sugary. The commercial consequence follows directly from the biology: the fruit is symptomless exactly when it is inspected and graded, and symptomatic exactly when it reaches the ripening room, the depot, or the consumer. This is a pre-harvest disease expressed after harvest, and treating it as a storage or cold-chain failure is one of the most common misattributions in fresh produce.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Pathological — fungal rot caused by Colletotrichum species',
    },
    {
      label: 'When infection occurs',
      value:
        'In the field, on immature fruit, frequently long before harvest — not in the packhouse and not in store',
      note: 'The fungus penetrates intact skin directly and needs no wound, unlike blue mould or sour rot',
    },
    {
      label: 'Quiescence',
      value:
        'The infection arrests after penetration and remains dormant, symptomless, and invisible while the fruit is immature',
    },
    {
      label: 'What triggers expression',
      value:
        'Ripening: as the fruit ripens its defensive chemistry declines and the dormant infection resumes growth',
    },
    {
      label: 'Appearance on expression',
      value:
        'Sunken, dark, well-defined lesions that enlarge quickly on softening tissue, often appearing at several points at once',
    },
    {
      label: 'Diagnostic consequence',
      value:
        'No visual inspection at the packhouse can detect it — a genuinely symptomless lot at packing can be unsaleable on arrival',
      note: 'This is the strongest limitation of visual assessment in this section of the reference',
    },
    {
      label: 'Mycotoxin relationship',
      value:
        'Rotting fruit is colonised by further organisms, some toxigenic — visible lesions do not confirm a toxin, and a symptomless lot does not exclude one',
      note: 'This entry gives no limits or thresholds; see EFSA and FAO for the applicable framework',
    },
  ],
  sections: [
    {
      id: 'quiescence',
      heading: 'Infected in the field, dormant until ripening',
      body: [
        {
          type: 'paragraph',
          text: 'The life cycle behind this defect is worth stating precisely, because every practical consequence follows from it. Colletotrichum spores are produced on infected plant tissue and on residues in the orchard or plantation, and are moved onto developing fruit largely by rain splash and by water running over surfaces — which is why anthracnose pressure tracks wet weather during fruit development. A spore that lands on a fruit does not need an injury to get in: it germinates and penetrates the intact skin directly. Then, having established in the outer tissue, it stops. The immature fruit is a hostile substrate — firm, acidic, and containing compounds that suppress the fungus — and the infection is held there, alive but not advancing.',
        },
        {
          type: 'paragraph',
          text: "It stays that way for as long as the fruit stays immature, which may be weeks or months. Nothing about the fruit reveals it. The skin is unbroken, the flesh is sound, the colour is normal, and no measurement made at the packhouse door distinguishes an infected fruit from a clean one. Ripening reverses the conditions that held the fungus: acidity falls, sugars rise, the suppressive compounds decline, the tissue softens, and the infection is released. The lesions that then appear are not new infections — they are the same infections that were present, invisibly, all along. This is why the disease seems to appear from nowhere, and why the point at which it becomes visible is set by the fruit's ripening rather than by anything the handler did.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Symptomless at packing is not the same as uninfected',
          text: 'A lot of fruit carrying quiescent anthracnose is genuinely symptomless — not overlooked, not marginally symptomatic, but showing nothing at all. No visual inspection, grading pass, or packhouse assessment can identify it, and a clean inspection record is not evidence that the lot is clean. The infection becomes visible only once the fruit ripens, by which time it is at or near the market.',
        },
      ],
    },
    {
      id: 'misattribution',
      heading: 'A pre-harvest problem blamed on the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'The pattern is familiar to anyone who has received tropical fruit. The consignment was inspected and passed at origin. It was shipped under temperature control. It arrives, it ripens, and it breaks down with dark sunken lesions across a large share of the fruit. The immediate inference is that something went wrong in transit — a temperature excursion, a delay, a handling failure — and the cold chain is investigated. Frequently nothing is found, because nothing went wrong there. The lesions were determined in the field weeks or months earlier, under rain the exporter could not control, and the voyage merely provided the time and the ripening provided the trigger.',
        },
        {
          type: 'paragraph',
          text: 'This misattribution is costly in both directions. It sends effort and investment into the part of the chain that was working, while the part that actually determines the outcome — field sanitation, canopy and orchard management, harvest timing relative to wet weather, and the disease history of the block the fruit came from — receives no attention because it is out of sight of the people seeing the loss. It also poisons commercial relationships, since the receiver has clear evidence of decay and the shipper has clear evidence of a correct inspection and a correct voyage, and both are right. The honest statement is that the arrival condition does not identify where the failure was, and that resolving it requires the crop history rather than a closer examination of the fruit.',
        },
        {
          type: 'paragraph',
          text: 'None of this means the cold chain is irrelevant. Correct temperature management slows the fungus and, more importantly, slows the ripening that releases it, which is a real and useful delay — it is why cold-held fruit expresses anthracnose later than warm-held fruit. But delaying expression is not preventing infection. The cold chain can move the moment of failure further down the chain; it cannot remove an infection established in the field, and it should not be expected to.',
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Visible lesions and mycotoxin are separate questions',
      body: [
        {
          type: 'paragraph',
          text: 'Colletotrichum is not a fungus discussed principally for toxin production, and the mycotoxin question on this page arises less from the pathogen than from what happens after it. Fruit broken down by anthracnose is soft, sugar-rich, and open, and it is readily colonised by other organisms, some of which are toxigenic — the same conditions that let the lesions expand support what follows them. So visible anthracnose lesions establish nothing about toxin: whether one was produced depends on which organisms were actually involved, on the substrate, and on the conditions under which they grew, and the lesion itself carries none of that information. A lot with obvious lesions is a quality failure, not automatically a safety finding.',
        },
        {
          type: 'paragraph',
          text: 'The opposite direction is the dangerous one, and it lands with unusual force here because this is a disease defined by invisibility. Everything about post-harvest anthracnose trains the eye to be trusted less, and the mycotoxin logic makes the same demand. A lot with no visible mould and no lesion at all may still carry mycotoxin. The toxins are chemically stable and persist after the fungus that produced them is dead or gone; they diffuse into tissue around a lesion, so cutting out the visible damage leaves contaminated material in flesh that looks sound; they are distributed unevenly through a lot, so a clean-looking fruit is not evidence about the box; and they are invisible, odourless, and tasteless. There is no cue to find, and a symptomless lot — the very thing this disease specialises in producing — is not a lot that has been shown to be safe.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Absence of visible mould is not absence of mycotoxin',
          text: 'Sorting out lesioned fruit and cutting away damage improve the appearance and saleability of a lot. Neither detects a mycotoxin and neither removes one from tissue that has already absorbed it, and neither does washing or inspection. Whether a mycotoxin is present is established only by appropriate laboratory analysis on a properly drawn representative sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none. EFSA and FAO publish the applicable framework.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why it cannot be named by eye',
      body: [
        {
          type: 'paragraph',
          text: 'A well-developed anthracnose lesion is among the more characteristic sights in post-harvest pathology — sunken, dark, sharply bounded — and it is still not a diagnosis. The character develops late: early lesions are the same soft darkening decay produced by every other rot in this section, and the stage at which a decision is usually needed is the stage at which nothing is distinctive. Several Colletotrichum species cause the disease and are not separable by eye from one another. The same genus also participates in the banana crown rot complex, so the identical fungus produces two differently named defects on the same fruit. And the sunken dark lesion is not unique to anthracnose: other fruit rots and some physiological disorders present sunken darkened areas, and once secondary organisms arrive on the collapsing tissue they can dominate what is visible entirely.',
        },
        {
          type: 'list',
          items: [
            'The disease is invisible for the whole period during which it could be inspected for, so the absence of symptoms carries no information about whether the lot is infected.',
            'Early lesions are indistinguishable from those of unrelated rots; the characteristic sunken dark appearance develops only as the lesion matures.',
            'Colletotrichum species cannot be separated from one another visually, and identification to species requires culture or molecular confirmation.',
            'The same genus contributes to the banana crown rot complex, so a Colletotrichum finding does not by itself say which defect is being described.',
            'Sunken darkened lesions are also produced by other rots and by some physiological disorders, and secondary colonisers can mask the initiating organism.',
            'The lesion carries no record of when or where infection occurred, so it cannot distinguish a field infection from anything that happened after harvest.',
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
          text: 'Because the infection is established before the fruit is picked, the decisive interventions are in the field and are outside the scope of a post-harvest entry: orchard and plantation sanitation to reduce the inoculum available, canopy management to shorten the periods fruit surfaces stay wet, and harvest planning that accounts for wet weather during fruit development and for the disease history of the block. What post-harvest handling can do is bounded but real. Cold management slows the fungus and slows the ripening that releases it, deferring expression and buying usable market life. Careful handling avoids the additional damage that lets quiescent infections and secondary organisms advance faster. Grading removes fruit that has already begun to express, though not fruit that has not.',
        },
        {
          type: 'list',
          items: [
            'Recognise that the determining decisions were made in the field: inoculum load, wetness during fruit development, and harvest timing set what the packhouse receives.',
            'Do not rely on visual grading to exclude this defect — it excludes fruit already expressing lesions and cannot exclude quiescent infection, which is the whole problem.',
            'Cool promptly and hold consistently: this defers expression by slowing both the fungus and the ripening that triggers it, without removing the infection.',
            'Handle to avoid further damage, which accelerates both the released infection and the organisms that follow it.',
            'Manage ripening deliberately where it is controlled, since ripening is the trigger and the point of expression tracks it.',
            'Investigate arrival breakdown against the crop history and not only the cold chain, because attributing this defect to transit sends effort to the part of the chain that was working.',
            'Where a mycotoxin question arises, refer it to laboratory testing under the applicable food-safety framework rather than to visual assessment.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-pineapples' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
  ],
  causedByConditions: [
    'Infection of immature fruit in the field, by direct penetration of intact skin, requiring no wound',
    'Inoculum carried on infected plant tissue, mummified fruit, and crop residues in the orchard or plantation',
    'Rain and prolonged surface wetness during fruit development, which move spores onto fruit and allow them to germinate',
    'Quiescence of the established infection until ripening removes the conditions suppressing it',
    'Ripening itself — declining acidity and defensive compounds, rising sugars, and softening tissue release the dormant infection',
    'Extended transit and marketing periods, over which fruit ripens and infections express',
    'Handling damage after harvest, which accelerates lesion development and admits secondary organisms',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  confusableWith: [
    'Crown rot of banana — Colletotrichum is a member of that fungal complex, so the same genus produces both defects on the same fruit; the site of the lesion separates them more reliably than its appearance, and both can occur together',
    'Blue mould — both produce decay on stored fruit, but blue mould requires a wound while anthracnose penetrates intact skin; in early lesions, before blue mould sporulates, neither cue is available and the two look alike',
    'Grey mould rot — both may express in store from infections established in the field and both are routinely blamed on handling; once developed the lesions differ in character, but not dependably enough to identify on',
    'Sour rot — another decay of ripening fruit; sour rot disintegrates the tissue and smells fermented while anthracnose lesions stay more defined, but early lesions of the two are not separable and the cues are suggestive only',
    'Storage rot in general — post-harvest anthracnose is one specific member of that umbrella category, and recording it under the general label misattributes a field infection to the store',
    'Chilling injury — a competing explanation for tropical fruit that arrives sound and breaks down on warming; both express after the cold chain, and both are commonly blamed on the other',
    'Physiological pitting and other sunken disorders — sunken darkened areas are not unique to anthracnose, and a disorder followed by secondary colonisation resembles a primary rot',
  ],
  diagnosticLimitations: [
    'This defect is invisible throughout the entire period in which it could be inspected for. Quiescent infection produces no lesion, no discolouration, and no detectable cue while the fruit is immature, so no visual inspection at the packhouse can identify it and a clean grading record is not evidence that a lot is uninfected. A genuinely symptomless lot at packing can be unsaleable on arrival.',
    'Because expression is triggered by ripening rather than by any post-harvest event, the point at which the defect becomes visible carries no information about where or when infection occurred; the lesion cannot distinguish a field infection from anything that happened after harvest.',
    'Breakdown on arrival is routinely attributed to a cold-chain or handling failure when the infection was established in the field weeks or months earlier. The arrival condition does not identify the responsible link, and resolving attribution requires the crop history, not a closer look at the fruit.',
    'Early lesions are indistinguishable from those of unrelated rots, and the characteristic sunken dark appearance develops only as the lesion matures — after the stage at which an intake or despatch decision is made.',
    'Several Colletotrichum species cause the disease and cannot be separated visually; identification to species requires culture or molecular confirmation by a competent laboratory. The same genus also contributes to the banana crown rot complex, so recovering it does not by itself say which defect is present.',
    'Visible lesions do not establish that a mycotoxin is present: anthracnose-damaged tissue is readily colonised by further organisms, some toxigenic, and toxin production depends on species, substrate, and conditions.',
    'Critically, the absence of visible lesions does not establish the absence of mycotoxin — a point that lands with particular force for a disease whose defining feature is producing symptomless fruit. Toxin persists after the fungus is gone, occurs in sound-looking tissue adjacent to lesions that were cut away, distributes unevenly through a lot, and is invisible, odourless, and tasteless. No inspection, sorting, or washing detects or removes it. Presence and concentration are established only by appropriate laboratory analysis on a properly drawn representative sample, against limits set by food-safety regulation (see EFSA and FAO).',
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['inoculum', 'host-plant'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible decay and mycotoxin presence are distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of tropical and subtropical fruit, and mycotoxin prevention and management in stored commodities',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Colletotrichum quiescent infection and post-harvest anthracnose expression on ripening',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Colletotrichum species, host range, and latent infection biology in fruit crops',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Anthracnose in tropical fruit production and post-harvest loss',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever susceptible fruit is grown, with pressure concentrated in warm, humid, high-rainfall tropical and subtropical production regions where wetness during fruit development favours infection; expression occurs wherever the fruit is ripened, which is frequently in a distant temperate market, and mycotoxin limits and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no temperatures, durations, incidence figures, or mycotoxin limits. Holding conditions are commodity- and cultivar-specific and set by sourced post-harvest guidance; applicable mycotoxin limits are set by food-safety regulation. Consult FAO, USDA-ARS, EFSA, and national regulators.',
    'The decisive controls for this defect are pre-harvest and lie outside the scope of a post-harvest entry; field disease management, orchard sanitation, and harvest planning are described here only in outline and require agronomic guidance for the specific crop and region.',
    'Nothing here supports assessing the safety of a lot by appearance, and this defect is a direct demonstration of why: symptomless fruit may be infected, and visible lesions do not confirm contamination. Only appropriate laboratory analysis on a properly drawn sample can answer the mycotoxin question.',
    'No fungicide, post-harvest treatment, dip, dose, or application procedure is described here; chemical control in the field or after harvest is governed by product labels, national registration, and importing-country requirements, and requires qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Post-harvest Anthracnose: Latent Until Ripening',
    description:
      'Colletotrichum infects fruit in the field, stays invisible until ripening, then erupts as sunken lesions. Why no packhouse inspection can detect it.',
    keywords: [
      'post-harvest anthracnose',
      'Colletotrichum',
      'quiescent infection',
      'latent infection',
      'mango anthracnose',
    ],
  },
  structuredData: { article: true },
};
