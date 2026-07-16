import type { PostHarvestDefectContent } from '@/types/content';

export const senescence: PostHarvestDefectContent = {
  id: 'post-harvest-defect-senescence',
  slug: 'senescence',
  contentType: 'post-harvest-defect',
  title: 'Senescence',
  defectClass: 'physiological',
  alternativeNames: ['Ageing', 'Over-maturity', 'End of post-harvest life'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Senescence is the normal, programmed end of post-harvest life — not a failure, not a disease, and not something any process prevents; it is the baseline against which every other defect must be judged, and the disorder most often confused in both directions with the failures that merely resemble it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every other entry in this section describes something going wrong. Senescence describes something going right, in the only sense that matters biologically: harvested produce is living tissue running out the end of its own developmental programme, and it does so whether or not anything is mishandled. Ageing is not an insult inflicted on produce from outside. It is what produce does. A lettuce held under textbook conditions in an exemplary cold chain by handlers who make no mistakes will still, eventually, yellow, soften, lose its aroma, break down, and become unsaleable — because that is the end of the sequence it was on when it was cut. Senescence has no cause to find and no responsible party to identify, and any investigation that goes looking for one has misunderstood the problem.',
    },
    {
      type: 'paragraph',
      text: 'This makes senescence the reference line for the whole of post-harvest quality work rather than one more item on the list. Every defect claim is implicitly a claim that a lot is worse than it should be for its age and history — that something happened beyond the ordinary passage of time. That comparison cannot be made without knowing what ordinary looks like for that commodity at that point, which is what senescence describes. It is also where the most common misdiagnosis on this site lives, and it runs in both directions: ordinary ageing gets written up as a defect and investigated as though someone were at fault, while genuine failures — a chilling event, a developing rot, a broken cold chain — get closed out as "it was just old". Both errors are routine, and the second one is the expensive one, because it disposes of the evidence along with the lot.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological — the normal, programmed end of post-harvest life',
    },
    {
      label: 'Not a failure',
      value:
        'Senescence is neither a disease nor a handling fault; it proceeds in correctly handled produce and has no responsible party to identify',
    },
    {
      label: 'Cannot be prevented',
      value:
        'It can only be slowed. No process described anywhere on this site stops senescence, and none reverses it',
      note: 'Cold, controlled atmospheres, ethylene management, and packaging all extend life; none confers exemption from it',
    },
    {
      label: 'Presentation',
      value:
        'Softening, colour change including chlorophyll loss and yellowing in green commodities, loss of aroma and flavour, tissue breakdown, and rising susceptibility to decay',
    },
    {
      label: 'Ethylene accelerates it',
      value:
        'In sensitive commodities, exposure to ethylene brings the whole sequence forward — including from other produce held nearby',
    },
    {
      label: 'The reference line',
      value:
        'Every defect claim is a claim that a lot is worse than its age and history warrant, which cannot be judged without knowing what ordinary ageing looks like',
    },
    {
      label: 'The characteristic misdiagnosis',
      value:
        'It runs both ways: ordinary ageing recorded as a defect, and real failures written off as "it was just old"',
      note: 'The second error closes the case and discards the evidence with the lot',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'A programme, not a fault',
      body: [
        {
          type: 'paragraph',
          text: 'Detached plant tissue does not simply sit still and wait to be eaten. It respires, it continues to develop, and in most commodities it is executing an orderly sequence that ends in the breakdown of the tissue itself. Chlorophyll is dismantled and the yellow and other pigments beneath it are revealed; cell walls are loosened and the tissue softens; the volatile compounds responsible for aroma are lost or altered; membranes lose integrity and the structure gives way. The produce becomes progressively more hospitable to the organisms that will finish it. None of this is damage in the sense the rest of this section uses the word. It is the ordinary conclusion of the life the produce was living.',
        },
        {
          type: 'paragraph',
          text: 'Because it is a programme rather than an event, senescence has no onset to locate and no leg of the chain to attribute it to. It began before the produce was harvested and it continues wherever the produce goes. The only variables are how fast it runs and how much of it has elapsed. This is what separates it categorically from every neighbouring entry: chilling injury is caused by an exposure, blue mould is caused by an infection through a wound, shrivel is caused by water leaving. Senescence is caused by time.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'It can be slowed. It cannot be prevented, and it cannot be reversed.',
          text: 'Cold holding, controlled and modified atmospheres, ethylene management, and prompt cooling all slow the programme, sometimes dramatically, and that is the whole of what post-harvest life extension is. None of them stops it, none of them reverses what has already elapsed, and no process described on this site confers exemption. A lot that has reached the end of its life was not failed by anyone; it simply arrived there.',
        },
      ],
    },
    {
      id: 'baseline',
      heading: 'Why it is the baseline for every other defect',
      body: [
        {
          type: 'paragraph',
          text: 'A defect claim is always comparative, even when it does not sound like one. To say that a lot is defective is to say it is in worse condition than its commodity, age, and handling history would ordinarily produce — that something beyond time has acted on it. That judgement is impossible without a reference for what time alone does, and senescence is that reference. Without it there is no way to distinguish produce that has been harmed from produce that is simply further along.',
        },
        {
          type: 'paragraph',
          text: "The difficulty is that this reference is not a fixed picture. Ordinary ageing looks different in each commodity, moves at a rate set by the commodity and cultivar, and is legitimately accelerated by conditions — notably ethylene exposure — that are not themselves faults. A tomato held near ripening fruit ages faster than one held alone, and neither is defective. So the comparison the defect claim depends on is a judgement against a moving reference, made by someone who usually does not know the lot's full history. This is precisely why so much post-harvest diagnosis fails at exactly this step.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ethylene is the legitimate accelerator',
          text: 'In ethylene-sensitive commodities, exposure — from ripening fruit held nearby, from other produce in a mixed load, or from equipment — advances the whole senescence sequence. Produce aged by ethylene is not damaged produce; it is produce whose ordinary programme has been brought forward. Managing exposure and segregating incompatible commodities is how the rate is controlled, and it does not change what is being controlled.',
        },
      ],
    },
    {
      id: 'misdiagnosis',
      heading: 'The misdiagnosis that runs in both directions',
      body: [
        {
          type: 'paragraph',
          text: 'The first error is calling ordinary senescence a defect. A lot reaches the end of its life on schedule, presents as soft, dull, and yellowing, and is written up as though something had gone wrong. Time is spent looking for a cause that does not exist, a supplier or a leg of the chain is blamed for the passage of time, and the finding — that no fault can be identified — is treated as a failure of the investigation rather than as the correct answer. The real problem in these cases is usually commercial rather than physiological: the lot was too old for the market it was sent to, which is a planning question, not a defect.',
        },
        {
          type: 'paragraph',
          text: 'The second error is worse, and it is the one to watch for. "It was just old" is an explanation that fits almost any tired-looking lot, requires no evidence, satisfies everyone present, and closes the file. Chilling injury expresses as dull colour, softening, loss of aroma, and rapid decay — which is also how ageing looks. A developing rot ends in tissue breakdown — which is also how ageing ends. A cold chain that failed silently produces produce that is prematurely, but only, old-looking. Each of these gets absorbed into "it was just old" without resistance, and once the lot is disposed of on that basis, the temperature record is never pulled, the handling leg is never examined, and the failure recurs on the next consignment because nobody ever established that it happened.',
        },
        {
          type: 'list',
          items: [
            'Ordinary ageing investigated as a defect wastes effort looking for a cause that does not exist, and blames handlers for the passage of time.',
            'Chilling injury presents as dull colour, softening, lost aroma, and rapid decay — the same picture as advanced senescence, and it expresses late, after the causal exposure is long past.',
            'Developing rots end in tissue breakdown and are readily absorbed into an ageing narrative once the lesion is no longer distinct.',
            'A silent cold-chain failure produces produce that is prematurely old-looking, which is indistinguishable from produce that is simply old.',
            'Because "it was just old" requires no evidence and closes the case, it disposes of the lot and the evidence together, and the underlying failure recurs unexamined.',
          ],
        },
      ],
    },
    {
      id: 'endpoint',
      heading: 'Why a finished lot cannot be diagnosed at all',
      body: [
        {
          type: 'paragraph',
          text: 'There is a harder limit here than mere difficulty, and it deserves stating plainly rather than softening. Senescence and several unrelated disorders converge on the same terminal appearance: soft, dull, broken-down, decaying tissue. Convergence means the endpoint carries no information about the route taken to it. A lot that has reached that state cannot be diagnosed retrospectively — not with more experience, not with a better photograph, not by a more careful inspection. By the time produce looks finished, the distinguishing features that would have separated the possible causes are gone, consumed by the same breakdown that every route ends in.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that diagnosis, if it is wanted at all, has to happen before the endpoint — while the lot still shows the features that separate one cause from another — and that the surrounding evidence has to be gathered while it still exists. Temperature records, handling history, the condition of comparable lots from the same source, and the timing of the deterioration relative to the chain all remain informative after the produce itself has stopped being so. Once a terminal lot is written off, the only remaining evidence is the record, and if that was never kept, the question is permanently unanswerable.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The endpoint is unrecoverable in both senses',
          text: 'The lot cannot be recovered, and neither can the answer. A finished lot supports no conclusion about whether it aged normally, was chilled, was infected, or was mishandled — the appearance is the same. Treating a terminal inspection as a diagnosis is the error; the only honest reading of a finished lot is that it is finished.',
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
  ],
  causedByConditions: [
    'The ordinary passage of time in living, detached tissue executing its own developmental programme — senescence proceeds in correctly handled produce and requires no fault',
    'Exposure to ethylene in sensitive commodities, including from ripening produce held nearby or in mixed loads, which advances the whole sequence',
    'Elevated temperature, which raises respiration and runs the programme faster without changing what it is',
    'Extended time in the chain, including delays that consume post-harvest life before the produce reaches its market',
    'Advanced maturity at harvest, which means less of the programme remains to be run after the produce is cut',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  confusableWith: [
    'Chilling injury — dull colour, softening, loss of aroma, and rapid decay are the shared cues, and both express late and away from any single cause; the appearance does not separate a chilled lot from an old one, and chilling injury is routinely closed out as "it was just old"',
    'Shrivel — both give softening, limpness, and dullness, and both worsen with time, so the shared cue cannot say whether the lot lost water or simply aged; the two also genuinely co-occur in old produce',
    'Pathological rots — every rot ends in tissue breakdown, which is also how senescence ends, so once a lesion is no longer distinct the decay is absorbed into an ageing narrative without resistance',
    'A silent cold-chain failure — produce held too warm is prematurely old-looking rather than distinctively damaged, and premature ageing and ordinary ageing present identically',
    'Normal ripening in climacteric fruit — softening and colour change are the desired outcome in a ripening banana or mango and a defect in the same fruit past its market window, so the symptom does not say which side of that line the lot is on',
    'Over-maturity at harvest — fruit cut too far advanced arrives with little post-harvest life left and deteriorates quickly, presenting as a storage or handling failure when the decision was made in the field',
  ],
  diagnosticLimitations: [
    'Senescence and several unrelated disorders converge on the same terminal appearance — soft, dull, broken-down, decaying tissue — so a finished lot cannot be diagnosed retrospectively at all. By the time produce looks finished, the features that would have separated the possible causes have been consumed by the breakdown every route ends in, and the cause is unrecoverable no matter how carefully the lot is examined.',
    '"It was just old" is used to close out lots whose real cause was a temperature or handling failure. The explanation fits any tired-looking lot, requires no evidence, and satisfies everyone present; once the lot is disposed of on that basis the temperature record is never pulled and the failure recurs unexamined on the next consignment.',
    'The error runs the other way too: ordinary ageing is investigated as a defect, and effort is spent looking for a cause that does not exist while handlers are blamed for the passage of time. The finding that no fault can be identified is the correct answer, not a failed investigation.',
    'Judging whether a lot is worse than its age warrants requires knowing the commodity, the cultivar, the maturity at harvest, and the elapsed history — none of which is visible in the produce. Without that history the comparison the defect claim depends on cannot be made at all.',
    'The rate is legitimately accelerated by ethylene exposure and by temperature, so premature ageing is not evidence of a fault: produce aged faster by ethylene from a neighbouring commodity is neither damaged nor mishandled, and looks the same as produce that was held too long.',
    'In climacteric fruit the same softening and colour change is the intended outcome of ripening and a defect past the market window; the symptom carries no information about which, and the judgement is commercial rather than physiological.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest physiology, ageing, and life extension in fresh horticultural produce',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Post-harvest senescence, respiration, ethylene sensitivity, and commodity-specific storage recommendations',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest quality loss and physiological disorders of fresh produce',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Senescence physiology, chlorophyll loss, and ethylene-mediated acceleration in horticultural commodities',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Senescence is a property of living harvested tissue everywhere and is not regional, but how much post-harvest life is consumed before produce reaches its market depends on local chain length, ambient conditions, and the cooling and atmosphere infrastructure available.',
  limitations: [
    'This entry gives no storage lives, holding durations, temperatures, or shelf-life figures. Post-harvest life is commodity-, cultivar-, and maturity-specific and must be taken from sourced post-harvest guidance for the commodity concerned.',
    'Senescence cannot be prevented and cannot be reversed; every process referenced here slows it and none stops it, and nothing described recovers a lot that has reached the end of its life.',
    'Symptom descriptions are indicative only. They do not confirm ageing as the cause and do not separate senescence from chilling injury, water loss, rots, or a silent chain failure, all of which converge on the same terminal appearance.',
    'Whether a lot is acceptable is a commercial and contractual judgement against the applicable standard and market, not a physiological one, and this entry is not a basis for accepting or rejecting a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Senescence: The Normal End of Post-Harvest Life',
    description:
      'Senescence is ageing, not a fault: it can be slowed but never stopped. Why it is the baseline for every defect claim, and why "it was just old" hides failures.',
    keywords: [
      'senescence',
      'post-harvest ageing',
      'shelf life',
      'ethylene sensitivity',
      'produce deterioration',
    ],
  },
  structuredData: { article: true },
};
