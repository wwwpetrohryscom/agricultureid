import type { PostHarvestDefectContent } from '@/types/content';

export const crownRot: PostHarvestDefectContent = {
  id: 'post-harvest-defect-crown-rot',
  slug: 'crown-rot',
  contentType: 'post-harvest-defect',
  title: 'Crown Rot',
  defectClass: 'pathological',
  alternativeNames: ['Banana crown rot', 'Crown mould', 'Crown rot of banana'],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Crown rot is a decay of the cut crown surface of banana hands, caused not by one pathogen but by a complex of several fungi acting together; the wound it infects is created deliberately by dehanding, it is largely invisible when the fruit is packed, and it develops during transit and ripening to become a leading cause of rejection on arrival.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Crown rot is the principal post-harvest disease of export bananas, and it is defined by where it occurs rather than by what causes it. When a bunch is broken down into hands, the cut is made through the crown — the length of stalk tissue that holds the fingers of a hand together. That cut leaves a large surface of exposed, wet, nutrient-rich tissue with no skin over it, and that surface is what rots. The decay begins there, blackens and softens the crown, and advances from the crown down into the necks of the fingers, at which point the hand falls apart and is worthless. The same disease is described in pineapple and some other commodities where a cut surface is similarly exposed, but it is in banana that it dominates commercially.',
    },
    {
      type: 'paragraph',
      text: 'What makes this entry different from the other rots in this reference is that there is no single organism to name. Crown rot is a disease of a fungal complex: Colletotrichum, Fusarium, Lasiodiplodia, and a number of other genera are recovered from affected crowns, in combinations that vary by region, by season, by plantation, and even between boxes from the same packing station. They are not alternative explanations competing to be the right one — they act together, and the disease is the joint result. Any account of crown rot that names one causal fungus has simplified it past the point of usefulness.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Pathological — decay of the cut crown surface caused by a complex of several fungi acting together',
    },
    {
      label: 'Causal agents',
      value:
        'A complex, not one pathogen: Colletotrichum, Fusarium, Lasiodiplodia and others are implicated in varying combinations by region and season',
      note: 'The combination differs between origins and consignments, so a single causal organism cannot be assumed',
    },
    {
      label: 'Infection court',
      value:
        'The crown surface cut during dehanding — a large, unprotected wound created deliberately by the packing operation itself',
    },
    {
      label: 'Appearance',
      value:
        'Blackening and softening of the cut crown, with decay advancing from the crown into the finger necks; fungal growth may develop on the crown surface',
    },
    {
      label: 'When it appears',
      value:
        'Largely invisible at packing; develops during transit and ripening and is typically first seen on arrival or at the ripening room',
    },
    {
      label: 'Commercial significance',
      value:
        'A leading cause of rejection on arrival in the export banana trade, because the loss is discovered after the freight has been paid',
    },
    {
      label: 'Mycotoxin relationship',
      value:
        'Genera in the complex include fungi capable of producing mycotoxins under some conditions — the rot does not confirm a toxin, and a clean crown does not exclude one',
      note: 'This entry gives no limits or thresholds; see EFSA and FAO for the applicable framework',
    },
  ],
  sections: [
    {
      id: 'the-wound-is-the-process',
      heading: 'The infection court is made on purpose',
      body: [
        {
          type: 'paragraph',
          text: 'Most wound pathogens exploit an injury that somebody would rather not have caused. Crown rot exploits an injury that is the whole point of the operation. Bananas cannot be packed as bunches; they are dehanded, and dehanding means cutting through the crown. There is no version of the process that omits the wound, which sets crown rot apart from rots that can be addressed by handling more gently. The question is never whether to create the infection court but what condition it is in, how contaminated the environment is when it is created, and how quickly the fruit moves out of the conditions that favour the fungi.',
        },
        {
          type: 'paragraph',
          text: "That reframes where the leverage sits. The cut itself matters: a clean cut with a sharp, clean blade presents a different surface from a ragged one made with a blunt or contaminated one, and knives passing between hundreds of hands distribute inoculum efficiently if they are not maintained. The water the hands are washed in matters, because a dehanded crown sitting in a contaminated tank is being inoculated rather than cleaned. The interval between cutting and cooling matters, because the fungi establish in the exposed tissue while it is warm and wet. And the fruit's own condition matters — crowns cut from fruit that is already advanced towards ripeness offer less resistance than those from fruit at proper harvest maturity.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A wound that cannot be designed out',
          text: 'Crown rot is not evidence of careless handling in the way that a bruise or a puncture is. The wound is intrinsic to dehanding and is present in every box of hands ever packed. What varies is the cleanliness of the cut, the inoculum load meeting it, and how long the fruit remains in conditions the fungi favour.',
        },
      ],
    },
    {
      id: 'complex',
      heading: 'A complex, not a pathogen',
      body: [
        {
          type: 'paragraph',
          text: 'The single most important fact about crown rot, and the one most often lost, is that it does not have a causal organism. Isolations from affected crowns routinely recover several genera together, and the mixture is not consistent: what dominates in one producing region differs from another, what is recovered in one season differs from the last, and consignments from the same packing station in the same week can yield different combinations. Colletotrichum, Fusarium, and Lasiodiplodia appear frequently in the literature, alongside others, but frequency in a survey is not causation in a box.',
        },
        {
          type: 'paragraph',
          text: 'This matters beyond taxonomy. A disease caused by a variable consortium behaves differently from one caused by a single pathogen: the species present interact, tissue colonised by one is opened to another, and the result of the mixture is not predictable from any member of it. It also means that an intervention validated against one organism may not deliver against the assemblage actually present in a given origin, and that results from one region transfer poorly to another. Where identification is needed — in a dispute, or when investigating a persistent failure at one origin — it requires isolation and laboratory identification from the affected material itself, and the answer applies to that material rather than to crown rot in general.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No single organism to name',
          text: 'Crown rot cannot be attributed to one fungus from the appearance of a crown, and it should not be recorded as though it had one. The complex varies by region, season, and consignment; identifying what is present in a particular case requires laboratory isolation from that material, and the finding does not generalise.',
        },
      ],
    },
    {
      id: 'latency',
      heading: 'Invisible at packing, obvious on arrival',
      body: [
        {
          type: 'paragraph',
          text: 'The commercial shape of crown rot is set by its timing. Infection occurs at packing, when the crown is cut and exposed, but at that moment there is nothing to see: the crown looks like freshly cut tissue, because that is what it is. The fungi establish quietly in the exposed surface and develop through the voyage. By the time the fruit reaches the ripening room or the receiving depot, the crown has blackened, the decay has advanced into the finger necks, and hands break apart when handled. A consignment can pass its packhouse inspection legitimately and be rejected on arrival, with nothing having gone wrong in between that anyone could point to.',
        },
        {
          type: 'paragraph',
          text: "The gap between the moment of infection and the moment of expression is where the money is lost, because it spans the most expensive part of the chain. It also makes attribution contentious: the defect surfaces in the importer's hands and originates in the exporter's packing station, and the fruit carries no record of which of the two conditions that favour it — the state of the cut and the environment at packing, or the temperature and duration of the voyage — actually mattered. Ripening accelerates the expression further, so crown rot found at the ripening room may have been determined weeks earlier and merely revealed there.",
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'The rot and the toxin are different questions',
      body: [
        {
          type: 'paragraph',
          text: 'The crown rot complex includes genera that contain toxigenic species — Fusarium and Lasiodiplodia among them — so the mycotoxin question is legitimately raised here rather than being a formality. It must nonetheless be answered carefully, because the appearance of the crown supports no conclusion in either direction. A blackened, obviously rotted crown does not establish that a mycotoxin has been produced: whether any toxin is formed depends on which species of a variable complex were actually present, on the substrate, and on the conditions under which they grew, and none of that can be read off a lesion. A rotted crown is a quality failure and is not automatically a safety finding.',
        },
        {
          type: 'paragraph',
          text: 'The direction that does harm is the other one. A consignment whose crowns look entirely clean may still carry mycotoxin, and the reasons apply with particular force to a defect handled the way this one is. The routine response to crown rot is to trim the affected crown tissue away, and trimming is exactly the operation the logic defeats: mycotoxins diffuse into tissue beyond the visible lesion, so cutting back to sound-looking tissue does not cut back to toxin-free tissue. Toxins persist after the fungus that produced them is dead or has been removed with the trimmings. They are distributed unevenly, so an untrimmed hand tells nothing about the one beside it. And they are invisible, odourless, and tasteless, so no inspection of a trimmed crown could find them.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Trimming a crown removes the rot, not the toxin',
          text: 'Cutting away decayed crown tissue restores the appearance and saleability of a hand. It does not detect a mycotoxin and does not remove one from tissue that has already absorbed it, and it must never be recorded or relied upon as a food-safety measure. Whether a mycotoxin is present is established only by appropriate laboratory analysis on a properly drawn representative sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none. EFSA and FAO publish the applicable framework.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Since the wound cannot be avoided, management works on everything around it. Sharp, clean, maintained cutting tools produce a better surface and stop the knife acting as a distributor of inoculum. Hygiene in the dehanding area and in any water the crowns contact controls the load meeting the fresh cut. Moving the fruit promptly into its correct temperature and holding it there through the voyage slows a decay that would otherwise have the whole transit to develop. Packaging that limits crown damage and physical disturbance protects the surface, and modified atmospheres are used in some banana trades as an additional brake on both decay and ripening. Grading out hands with damaged or poorly cut crowns removes the units most likely to fail.',
        },
        {
          type: 'list',
          items: [
            'Treat the dehanding cut as the infection court it is: sharp, clean, maintained blades and a clean cut surface, recognising that the knife itself moves inoculum between hands.',
            'Control hygiene in the dehanding area and in any water the cut crowns contact, since a contaminated tank inoculates rather than cleans.',
            'Minimise the interval between cutting and cooling, because the fungi establish in exposed tissue while it is warm and wet.',
            'Hold correctly and consistently through transit, since crown rot has the whole voyage in which to develop and the voyage is long.',
            'Pack to protect the crown from further damage and disturbance, and grade out hands whose crowns are damaged or poorly cut.',
            'Do not treat crown trimming as a safety step — it is an appearance and saleability measure, and where a mycotoxin question arises it must go to laboratory testing under the applicable food-safety framework.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [{ type: 'commodity', slug: 'bananas' }],
  causedByConditions: [
    'The crown surface cut during dehanding, which exposes a large area of unprotected, wet, nutrient-rich tissue with no skin over it',
    'Inoculum in the packing environment, on cutting blades passing between hands, and in wash or dump water contacting the cut crowns',
    'Blunt, dirty, or poorly maintained knives producing ragged cut surfaces and distributing fungi between hands',
    'Delay between dehanding and cooling, during which the complex establishes in warm, wet exposed tissue',
    'Extended transit and storage duration, over which an infection invisible at packing develops to commercial significance',
    'Inadequate or inconsistent temperature control through the voyage',
    'Fruit harvested at advanced maturity, whose crown tissue offers less resistance to colonisation',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  confusableWith: [
    'Post-harvest anthracnose — Colletotrichum is a member of the crown rot complex and also causes anthracnose on the fingers, so the same genus produces two defects on the same fruit; the site distinguishes them better than the appearance does, and both may be present at once',
    'Storage rot in general — crown rot is one specific case under that umbrella, and recording it as storage rot conceals the point that no single organism is responsible',
    'Blue mould and grey mould rot — an early crown lesion is soft darkening decay like any other rot, and before any fungal growth develops on the surface it carries no distinguishing feature',
    'Finger drop from over-ripeness — hands also break apart as they become over-ripe, without crown decay being the cause; the endpoint resembles advanced crown rot',
    'Chilling injury — bananas are chilling-sensitive, and chilling-weakened tissue is readily colonised, so a crown rot record may be the visible endpoint of a temperature failure',
    'Mechanical damage to the crown — a crushed or torn crown darkens and may be recorded as rot when it is an injury that has not yet been colonised',
    'Secondary colonisation — fungi arriving on tissue already decaying can dominate the visible crown surface, which is a particular hazard here because the disease is defined by a mixture to begin with',
  ],
  diagnosticLimitations: [
    'Crown rot has no single causal organism, so it cannot be attributed to one pathogen from the appearance of a crown. The complex responsible varies by region, season, plantation, and consignment, and identifying what is present in a particular case requires laboratory isolation from that material — a result that does not generalise to crown rot elsewhere.',
    'The disease is essentially invisible at packing: a freshly cut crown looks like freshly cut tissue whether or not it has been colonised, so no inspection at the packing station can identify the consignments that will fail. Expression comes during transit and ripening, weeks after the moment that determined it.',
    'Because the defect surfaces at destination and originates at packing, the lesion carries no information about which contributing condition mattered — the state of the cut and the packhouse environment, or the temperature and duration of the voyage. Attribution requires the packing and temperature records, not a closer look at the crown.',
    'Visible crown decay does not establish that a mycotoxin is present: whether any toxin was formed depends on which species of a variable complex were actually involved, on the substrate, and on the conditions they grew under.',
    'Critically, a clean-looking or trimmed crown does not establish the absence of mycotoxin. Toxin diffuses beyond the visible lesion, so trimming back to sound-looking tissue does not trim back to toxin-free tissue; it persists after the fungus is removed with the trimmings; it distributes unevenly between hands; and it is invisible, odourless, and tasteless. No inspection, trimming, or washing detects or removes it. Presence and concentration are established only by appropriate laboratory analysis on a properly drawn representative sample, against limits set by food-safety regulation (see EFSA and FAO).',
    'Advanced crown rot and simple over-ripe finger drop reach a similar endpoint of hands breaking apart, and the endpoint does not separate a pathological failure from a maturity one.',
    'Since bananas are chilling-sensitive, decay on arrival may be secondary to a temperature disorder rather than a primary infection, and the rot conceals the disorder that permitted it.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  glossaryTerms: ['inoculum'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible decay and mycotoxin presence are distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Banana post-harvest handling, packing, and transport; mycotoxin prevention and management in stored commodities',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Crown rot of banana as a disease of a fungal complex, and the genera recovered from affected crowns',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest decay of tropical fruit in export supply chains',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Banana and plantain post-harvest disease in tropical production systems',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Occurs wherever bananas are dehanded and packed for distant markets, and is a defining problem of the long-haul export trade from tropical producing regions to temperate ones; the composition of the causal complex differs between producing regions, and mycotoxin limits and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no temperatures, durations, maturity indices, or mycotoxin limits. Holding conditions are commodity- and trade-specific and set by sourced post-harvest guidance; applicable mycotoxin limits are set by food-safety regulation. Consult FAO, USDA-ARS, EFSA, and national regulators.',
    'Because the causal complex varies by region, season, and consignment, findings reported from one origin may not describe the disease at another, and this entry names no organism as the cause of any particular case.',
    'Nothing here supports assessing the safety of a lot by appearance. Visible decay does not confirm contamination, and a clean or trimmed crown does not exclude it; only appropriate laboratory analysis on a properly drawn sample can answer that question.',
    'No fungicide, post-harvest treatment, dip, dose, or application procedure is described here; chemical decay control is governed by product labels, national registration, and importing-country requirements, and requires qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Crown Rot: Banana Decay From a Fungal Complex',
    description:
      'Crown rot decays the cut crown of banana hands, caused by a complex of fungi rather than one pathogen. Invisible at packing, it appears after transit.',
    keywords: [
      'crown rot',
      'banana post-harvest disease',
      'fungal complex',
      'dehanding',
      'export banana rejection',
    ],
  },
  structuredData: { article: true },
};
