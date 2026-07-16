import type { PostHarvestDefectContent } from '@/types/content';

export const sprouting: PostHarvestDefectContent = {
  id: 'post-harvest-defect-sprouting',
  slug: 'sprouting',
  contentType: 'post-harvest-defect',
  title: 'Sprouting',
  defectClass: 'physiological',
  alternativeNames: ['Sprout growth', 'Dormancy break', 'Chitting (in store)'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Sprouting is the resumption of growth in a stored tuber or bulb once its natural dormancy has ended — a developmental transition whose timing is cultivar-dependent and modulated, but not created, by storage conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: "Potatoes, onions, and garlic are not inert produce: they are living storage organs whose biological purpose is to survive a dormant period and then grow. Freshly harvested tubers and bulbs pass through a period of dormancy during which they will not sprout even under conditions that would otherwise favour growth. That dormancy has a natural duration which is a property of the crop and the cultivar, and which ends of its own accord. Sprouting is what happens after it does: the organ resumes the growth it was always going to resume, drawing on the reserves it has been holding since harvest. Understood this way, sprouting is not a fault that enters the store from outside — it is the crop completing its own developmental programme on the crop's own schedule.",
    },
    {
      type: 'paragraph',
      text: 'This distinction is easy to lose in practice, because sprouting is usually discussed as though warmth caused it. Storage conditions matter a great deal, but they act on timing rather than on capacity: they influence when dormancy ends and how fast sprouts extend once it has, and they cannot make a dormant tuber sprout or confer sprouting on an organ that had no such programme. A store held well can carry a short-dormancy cultivar for less time than a poorly run store carrying a long-dormancy one, and blaming the building for that outcome misreads the problem. The practical consequence is that sprouting risk has to be anticipated from the crop as much as from the conditions, and that a lot approaching the end of its dormancy is on a different footing from one that is still within it, whatever the store is doing.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological — resumption of growth after dormancy break',
    },
    {
      label: 'Underlying process',
      value:
        'The end of natural dormancy, after which the storage organ resumes growth using its own reserves',
      note: 'Dormancy ends on its own; storage conditions do not create the capacity to sprout',
    },
    {
      label: 'Dormancy duration',
      value:
        'A property of the crop and cultivar, not of the store — cultivars differ substantially in how long they hold',
    },
    {
      label: 'What storage changes',
      value:
        'When dormancy ends and how fast sprouts extend afterwards — the timing, not whether sprouting is possible at all',
    },
    {
      label: 'Affected commodities',
      value: 'Ware potatoes, dry bulb onions, and garlic bulbs',
    },
    {
      label: 'Internal change precedes the sprout',
      value:
        'Mobilisation of reserves and the accompanying texture and composition changes begin before any sprout is externally visible',
      note: 'This is the reason a visibly sprout-free lot is not necessarily an unchanged one',
    },
    {
      label: 'Suppression',
      value:
        'Chemical and non-chemical sprout-suppression options exist, are nationally regulated, and are governed by product labels and qualified advice',
      note: 'No products, doses, or procedures are described here',
    },
  ],
  sections: [
    {
      id: 'dormancy',
      heading: 'Sprouting is a dormancy question first',
      body: [
        {
          type: 'paragraph',
          text: 'A newly lifted potato tuber or a newly harvested onion or garlic bulb is dormant. During that period the organ will not initiate growth, and the store is, in sprouting terms, working with a considerable margin. Dormancy is not indefinite. It has a characteristic duration that varies by crop and, within a crop, by cultivar; it is also influenced by the conditions the crop grew under and by its maturity at harvest. When it ends, the organ becomes capable of sprouting, and from that point the store is no longer preventing sprouting so much as slowing it.',
        },
        {
          type: 'paragraph',
          text: 'This is why two apparently identical stores can produce different outcomes, and why the same store can perform differently between seasons or between cultivars. Storage temperature and the store environment influence the rate at which dormancy runs down and, once it has ended, the speed at which sprouts extend. They do not reset dormancy, and they do not give a dormant organ the ability to sprout. A store cannot be judged on sprouting alone without knowing which cultivar it was holding and how far through its dormancy that cultivar had come.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Conditions modulate timing; they do not create the capacity',
          text: 'Sprouting is often reported as "the store was too warm". Warmth can bring sprouting forward and accelerate it once it has begun, but the crop sprouts because its dormancy has ended, which it was always going to do. Treating sprouting purely as a temperature failure obscures the cultivar and maturity factors that set the timetable in the first place.',
        },
      ],
    },
    {
      id: 'visible-and-internal',
      heading: 'The visible sprout is the late part of the story',
      body: [
        {
          type: 'paragraph',
          text: 'Sprouting is one of the very few post-harvest defects that is genuinely unambiguous on sight. Where most disorders on this site present as symptoms that several different processes could have produced, a sprout is a sprout: nothing else looks like one, and no laboratory is needed to say that a tuber has sprouted. That much is a real and unusual advantage, and it should be stated plainly rather than hedged.',
        },
        {
          type: 'paragraph',
          text: 'The honest difficulty runs the other way. The physiological change that accompanies sprouting does not begin when the sprout becomes visible — it begins earlier, inside the organ. Reserves are mobilised to supply the growing point, and the texture and composition of the tissue change as that proceeds. By the time a sprout has emerged far enough to be seen, that internal transition is already under way and has been for some time. A lot inspected and recorded as sprout-free is therefore not necessarily a lot in which nothing has started; it is a lot in which nothing has yet emerged. The absence of visible sprouts is evidence about the surface, not assurance about the physiology.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The unusual shape of this defect',
          text: 'For sprouting, the visible sign is trustworthy when present and uninformative when absent. That is the reverse of most defects on this site, where the visible sign is the unreliable part. Both failures matter, but for sprouting only the second one does.',
        },
      ],
    },
    {
      id: 'not-greening',
      heading: 'Sprouting and greening are different processes',
      body: [
        {
          type: 'paragraph',
          text: 'In potato especially, sprouting and greening are routinely collapsed into a single complaint — that the potatoes "have gone off" — and they are not the same thing at all. Sprouting is a developmental event driven by the end of dormancy. Greening is a response to light exposure. They have different causes, they are prevented by different means, and a lot can readily show one without the other: a tuber kept dark can sprout, and a tuber well within its dormancy can green.',
        },
        {
          type: 'list',
          items: [
            "Sprouting follows the end of natural dormancy; it is a growth event on the crop's own timetable, and darkness does not prevent it.",
            'Greening follows exposure to light; it is not a dormancy phenomenon and does not indicate that dormancy has ended.',
            'The two frequently appear together simply because a lot that has been held long enough to sprout has often also had opportunities for light exposure — co-occurrence is not a shared cause.',
            'Because they are conflated in casual reporting, a complaint of "sprouting" may describe greening, and a complaint of "greening" may describe sprouting; the underlying observation is worth establishing before the cause is investigated.',
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
          text: 'Management of sprouting begins before the store, with the choice of cultivar against the intended storage duration and market. A cultivar with a short natural dormancy will reach the end of its dormancy sooner regardless of how the store is run, and no storage regime recovers that. Where long holding is required, the crop selected for it has to be capable of it.',
        },
        {
          type: 'list',
          items: [
            'Match cultivar and intended storage duration: dormancy length is a crop characteristic and sets the outer limit of what the store can achieve.',
            'Cure the crop appropriately before storage so that surfaces are sound, then hold it under conditions matched to the commodity and end use, per sourced guidance for that crop.',
            'Hold at the temperature appropriate to the commodity and its market, recognising that in potato the settings that most slow sprouting interact with other quality outcomes and the balance is end-use-specific.',
            "Sort and grade to remove units that have already begun to sprout, so that the lot presented is uniform — noting that this addresses the lot's appearance and uniformity, not the dormancy status of the units that remain.",
            'Anticipate the end of dormancy rather than react to the first visible sprout, since by then the internal change has already begun.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Sprout suppression is a regulated matter',
          text: 'Both chemical and non-chemical sprout-suppression options exist for stored crops. What is permitted, for which crop, and under what conditions is set by national regulation and by the product label, and varies between jurisdictions. This entry names no product, states no dose, and describes no application procedure; anyone considering suppression must work from the applicable label, national registration, and qualified professional advice.',
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'garlic-bulbs' },
  ],
  causedByConditions: [
    'The end of natural dormancy, whose duration is a property of the crop and cultivar and which ends of its own accord',
    'Storage temperature and store environment, which influence when dormancy runs down and how fast sprouts extend once it has ended',
    'Cultivar choice mismatched to the intended storage duration, so the crop reaches the end of its dormancy before the market does',
    'Extended holding that carries a lot past the end of its dormancy, after which the store slows sprouting rather than preventing it',
    'Growing conditions and maturity at harvest, which modify the dormancy the crop arrives in store with',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  confusableWith: [
    'Greening in potato — a different process with a different cause (light exposure, not dormancy break); the two are routinely reported together as the potatoes having "gone off", but either can occur without the other',
    'Normal dormancy break in seed crops — the identical physiological event is the desired outcome where the crop is destined for planting and a defect only where it is destined for the table, so the sprout itself carries no information about which',
    'Root or rootlet development in stored onion and garlic — basal rooting shares the "the bulb is growing again" cue with shoot sprouting but is a distinct expression, and a bulb may show one before the other',
    'General storage deterioration — softening and weight loss accompany advanced sprouting and also arise from water loss and senescence, so the accompanying signs do not by themselves point to dormancy break',
    'Internal sprouting in potato — the growth is real but confined within the tuber, so a lot can be genuinely sprouting while presenting as sound at the surface',
  ],
  diagnosticLimitations: [
    'The internal change that accompanies sprouting begins before any sprout is externally visible: reserves are mobilised and tissue texture and composition alter while the surface still looks sound. A lot recorded as sprout-free is a lot in which nothing has yet emerged, not one in which nothing has started, so absence of visible sprouts is not assurance that the physiological transition has not begun.',
    'A visible sprout confirms that growth has resumed but says nothing about when dormancy ended, how long the transition has been under way, or how far the internal change has progressed; the sprout dates its own emergence, not the event that permitted it.',
    'Sprouting cannot be attributed to storage conditions from the sprout alone. Dormancy duration is cultivar-dependent and modified by growing conditions and maturity at harvest, so separating a store that ran warm from a cultivar that was never going to hold requires the cultivar identity and the storage record, not an inspection.',
    'Internal sprouting in potato develops within the tuber and is not visible externally, so surface inspection can record a lot as unsprouted when growth has demonstrably resumed inside it.',
    "The same visible sprout is a defect in ware crops and the intended outcome in seed crops; the symptom carries no information about the lot's intended use, and the judgement is a market question rather than an observation.",
    'Because sprouting and greening are conflated in casual reporting, a sprouting complaint may in fact describe greening or a mixture of both, and the reported symptom should be established before any cause is inferred from it.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'cip',
      citedFor:
        'Potato tuber dormancy, its cultivar-dependent duration, and sprout development in store',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Storage of ware potatoes and onions, dormancy management, and the regulated status of sprout-suppression options',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling and storage of roots, tubers, and bulb crops',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Storage physiology of potato, onion, and garlic, and reserve mobilisation during sprouting',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever potatoes, onions, or garlic are stored. Dormancy duration is a property of the crop and cultivar rather than a region, but the cultivars grown, the length of the storage season, and the sprout-suppression options that are permitted all vary by country and by market.',
  limitations: [
    'This entry gives no storage temperatures, dormancy durations, or holding periods. Dormancy length is cultivar-specific and the appropriate storage conditions are commodity- and end-use-specific; both must be taken from sourced guidance for the crop in question.',
    'No sprout-suppressant product, dose, or application procedure is described. Permitted suppression options are set by national registration and product labels, vary between jurisdictions, and require qualified professional advice.',
    'Dormancy duration varies by cultivar, growing conditions, and maturity at harvest, so guidance written for a crop may not describe the behaviour of a particular lot.',
    'Nothing here recovers a sprouted lot or reverses the internal changes that accompany sprouting, and the entry is not a basis for accepting or rejecting a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sprouting: Dormancy Break in Potato, Onion, Garlic',
    description:
      'Sprouting is the end of natural dormancy, not simply a warm store. Why cultivar sets the timetable, and why no visible sprout does not mean nothing has started.',
    keywords: [
      'sprouting',
      'tuber dormancy',
      'dormancy break',
      'potato sprouting',
      'onion and garlic storage',
    ],
  },
  structuredData: { article: true },
};
