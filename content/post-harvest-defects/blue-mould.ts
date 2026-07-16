import type { PostHarvestDefectContent } from '@/types/content';

export const blueMould: PostHarvestDefectContent = {
  id: 'post-harvest-defect-blue-mould',
  slug: 'blue-mould',
  contentType: 'post-harvest-defect',
  title: 'Blue Mould',
  defectClass: 'pathological',
  alternativeNames: ['Blue mold', 'Penicillium rot', 'Blue mould rot'],
  category: 'Post-harvest defect',
  subcategory: 'Pathological disorder',
  summary:
    'Blue mould is a post-harvest rot caused by Penicillium species that enter through wounds and produce soft, watery decay bearing blue-green spore masses; some species associated with it can also produce mycotoxins, and neither the presence nor the absence of visible mould establishes whether a toxin is present.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Blue mould is among the most common post-harvest rots of stored fruit. It is caused by species of the genus Penicillium — Penicillium expansum on apples and pears, Penicillium italicum on citrus, and other species on bulbs — which are near-ubiquitous in packhouses, orchards, and storage air. These fungi are overwhelmingly wound pathogens: intact, undamaged skin is a substantial barrier, and infection typically follows a puncture, a stem-end tear, a bruise, or a handling injury that exposes tissue. The rot advances as a soft, watery decay, and the characteristic blue-green powdery sporulation develops on the surface as the lesion matures.',
    },
    {
      type: 'paragraph',
      text: 'The reason blue mould receives attention beyond simple spoilage is that some of the species involved can produce mycotoxins under some conditions. This creates a hazard whose logic is genuinely counterintuitive and which is the most consequential point on this page: the relationship between what is visible and what is present runs in neither direction reliably. Visible mould does not establish that a mycotoxin has been produced, and — far more importantly — the absence of visible mould does not establish that a lot is free of mycotoxin. Sorting out mouldy units improves appearance; it is not a toxin-removal step, and it should never be treated as one.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Pathological — fungal rot caused by Penicillium species',
    },
    {
      label: 'Route of entry',
      value:
        'Predominantly wounds: punctures, stem-end tears, bruises, and handling injuries',
      note: 'Intact skin is a substantial barrier, which links this rot directly to mechanical damage upstream',
    },
    {
      label: 'Appearance',
      value:
        'Soft, watery decay with blue-green powdery sporulation developing on the lesion surface',
    },
    {
      label: 'Mycotoxin relationship',
      value:
        'Some associated species can produce mycotoxins under some conditions — visible mould does not confirm a toxin, and no visible mould does not confirm its absence',
      note: 'This entry gives no limits or thresholds; see EFSA and FAO for the applicable framework',
    },
    {
      label: 'Spreads in store',
      value:
        'Sporulating lesions release spores that infect wounded neighbours, so an affected lot deteriorates progressively',
    },
    {
      label: 'Distinguishing from grey mould',
      value:
        'Not reliably possible by eye — the two rots overlap in presentation and require laboratory confirmation to separate',
    },
    {
      label: 'Where the limits are set',
      value:
        'Any applicable mycotoxin limit is jurisdiction-, commodity-, and use-specific and is set by food-safety regulation, not by inspection',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'How blue mould establishes',
      body: [
        {
          type: 'paragraph',
          text: 'Penicillium spores are effectively always present in the storage environment, so the availability of inoculum is rarely the limiting factor. What limits infection is access. These fungi cannot usually penetrate sound skin, and the great majority of blue-mould lesions can be traced to a wound created at harvest, during handling, in the packhouse, or in transit. This makes blue mould substantially a mechanical-damage problem that presents as a disease problem: the visible rot is the pathological consequence of a handling failure that occurred earlier and left no obvious mark of its own.',
        },
        {
          type: 'paragraph',
          text: 'Once established, a lesion sporulates, and those spores infect wounded neighbours within the same store or carton. Deterioration is therefore progressive rather than static, and a lot inspected as marginal early can be substantially worse later. Cold holding slows the fungus but does not stop it — blue mould is well able to develop at storage temperatures, which is why it is a characteristic rot of long-stored fruit rather than only of warm conditions.',
        },
      ],
    },
    {
      id: 'mycotoxin',
      heading: 'Visible mould and mycotoxins are different questions',
      body: [
        {
          type: 'paragraph',
          text: 'The most damaging misconception about mould in stored produce is that appearance answers the safety question. It does not, and the failure runs in both directions. A lot with conspicuous blue-green sporulation may or may not carry a mycotoxin: toxin production depends on the species involved, on the substrate, and on the conditions the lesion developed under, and a visibly mouldy lot is not automatically a contaminated one. Conversely — and this is the direction that causes actual harm — a lot with no visible mould at all may still carry mycotoxin. Toxin can persist after the fungus that produced it is gone, it can be present in tissue adjacent to a lesion that was itself removed, and it can be distributed unevenly through a lot in a way that no visual inspection could reveal.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Absence of visible mould is not absence of mycotoxin',
          text: 'Removing mouldy units improves the appearance of a lot. It does not make the lot toxin-free, and it must never be recorded or relied upon as a safety measure. Mycotoxins are invisible, odourless, and not detectable by sorting, washing, or inspection; establishing their presence or absence requires appropriate laboratory analysis on a properly drawn sample. Any applicable limit is set by food-safety regulation for the specific commodity, jurisdiction, and intended use — this entry states none.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that mould control and mycotoxin control are related but not interchangeable programmes. Good handling, cold management, and sanitation reduce the conditions under which toxigenic fungi grow, and that is worth doing on its own terms. But the question "is this lot within the applicable limit?" is answered only by testing against the framework that applies to it, and never by looking at it. EFSA and FAO publish the relevant assessment and management framework; growers and handlers should work to that and to their national regulation rather than to appearance.',
        },
      ],
    },
    {
      id: 'confusion',
      heading: 'Why it cannot be named by eye',
      body: [
        {
          type: 'paragraph',
          text: 'Blue mould and grey mould are routinely distinguished in conversation and routinely confused in practice. Both produce soft, spreading, watery decay; both sporulate on the lesion surface; and the colour cue that supposedly separates them is unreliable in the field. Sporulation colour changes as a lesion ages, varies with the substrate, and can be obscured entirely by secondary colonisers arriving on tissue that is already rotting. On citrus the problem is sharper still: blue mould and green mould are caused by different Penicillium species that differ mainly in spore colour, a difference too subtle and too variable to carry a reliable identification.',
        },
        {
          type: 'list',
          items: [
            'Sporulation colour shifts with lesion age and is a weak discriminator between Penicillium species and between blue and grey mould.',
            'Secondary fungi colonise decaying tissue and can dominate the visible surface, so what is seen is not necessarily what initiated the rot.',
            'Several unrelated rots present as soft watery decay in early lesions, before any sporulation is visible at all.',
            'Reliable identification to species requires culture or molecular confirmation by a competent laboratory; naming the fungus from a photograph or a carton is not diagnosis.',
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
          text: 'Because blue mould is a wound pathogen, the most effective controls act on wounding rather than on the fungus. Careful harvest and handling, well-adjusted grading equipment, appropriate packaging, and reduced drop heights all cut the number of infection courts available. Packhouse and store sanitation reduces the inoculum load that meets those wounds, and prompt cooling followed by consistent cold holding slows lesion development — without arresting it.',
        },
        {
          type: 'list',
          items: [
            'Minimise wounding at every transfer point, since intact skin is the principal barrier this fungus must overcome.',
            'Maintain packhouse and store hygiene to reduce the spore load meeting any wound that does occur.',
            'Cool promptly and hold consistently: cold slows blue mould markedly but does not stop it, and long-stored fruit remains at risk.',
            'Remove and dispose of sporulating units to limit spread — noting that this is a spread-control and appearance measure, not a mycotoxin measure.',
            'Where a mycotoxin question arises, refer it to laboratory testing under the applicable food-safety framework rather than to visual assessment.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'garlic-bulbs' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
  ],
  causedByConditions: [
    'Wounds from harvest, grading, packing, or transit that expose tissue to ubiquitous Penicillium spores',
    'High inoculum load from poor packhouse or store sanitation, or from decaying units left in the lot',
    'Extended storage duration, over which cold-tolerant Penicillium species continue to develop',
    'Delayed or inconsistent cooling, which allows lesions to establish faster after wounding',
    'Sporulating lesions in the same store or carton, which infect wounded neighbours',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  confusableWith: [
    'Grey mould rot — both give soft watery decay with surface sporulation; the two cannot be reliably separated by eye and require laboratory confirmation',
    'Green mould on citrus — a different Penicillium species differing mainly in spore colour, a cue too variable to identify on',
    'Sour rot — another soft watery decay of citrus and other fruit, distinguished by odour and lesion character but not dependably by appearance',
    'Storage rot in general — early lesions of many unrelated rots look alike before any sporulation develops',
    'Secondary colonisation — fungi arriving on tissue already rotting can dominate the visible surface and mask the initiating pathogen',
    'Bruising or impact damage — the underlying wound that admitted the fungus may be recorded as the defect when the rot is the visible endpoint',
  ],
  diagnosticLimitations: [
    'Visible blue-green mould does not establish that a mycotoxin is present: toxin production depends on species, substrate, and the conditions the lesion developed under, and a mouldy lot is not automatically a contaminated one.',
    'Critically, the absence of visible mould does not establish the absence of mycotoxin. Toxin can persist after the fungus is gone, can occur in tissue next to a lesion that was removed, and can be distributed unevenly through a lot; mycotoxins are invisible and odourless, and no inspection, sorting, or washing step detects or removes them. Presence or absence is established only by appropriate laboratory analysis on a properly drawn sample, against limits set by food-safety regulation (see EFSA and FAO).',
    'Blue mould and grey mould cannot be reliably distinguished by eye; sporulation colour shifts with lesion age and substrate, and confident separation requires culture or molecular confirmation.',
    'On citrus, blue and green mould are different Penicillium species separated mainly by spore colour — a difference too subtle and variable to support identification without a laboratory.',
    'Secondary colonisers frequently dominate the surface of decaying tissue, so the fungus that is visible is not necessarily the one that initiated the rot.',
    'Because infection follows wounding, a blue-mould record often describes the pathological endpoint of an earlier mechanical-damage failure that left no separate visible mark.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment framework, and the principle that visible mould and mycotoxin presence are distinct questions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Mycotoxin prevention and management in stored commodities; post-harvest handling and sanitation principles',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest Penicillium decay of pome fruit and citrus',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest decay identification and packhouse management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Penicillium species associated with post-harvest decay occur wherever susceptible commodities are stored; mycotoxin limits and testing requirements are jurisdiction-specific and set by national or regional food-safety regulation.',
  limitations: [
    'This entry gives no mycotoxin limits, thresholds, or testing specifications. Applicable limits are commodity-, jurisdiction-, and use-specific and are set by food-safety regulation; consult EFSA, FAO, and national regulators.',
    'Nothing here supports assessing the safety of a lot by appearance. Visible mould does not confirm contamination, and its absence does not exclude it; only appropriate laboratory analysis on a properly drawn sample can answer that question.',
    'Identification of the causal fungus from symptoms is not reliable; blue mould overlaps with grey mould and other rots, and confirmation requires a competent laboratory.',
    'No fungicide, treatment, dose, or application procedure is described here; chemical decay control is governed by product labels and national registration and requires qualified advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Blue Mould: Penicillium Rot in Stored Produce',
    description:
      'Blue mould is a wound-entry Penicillium rot of stored fruit. Why it cannot be told from grey mould by eye, and why no visible mould does not mean no mycotoxin.',
    keywords: [
      'blue mould',
      'Penicillium rot',
      'post-harvest decay',
      'storage rot',
      'mycotoxin',
    ],
  },
  structuredData: { article: true },
};
