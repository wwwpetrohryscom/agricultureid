import type { PostHarvestDefectContent } from '@/types/content';

export const greening: PostHarvestDefectContent = {
  id: 'post-harvest-defect-greening',
  slug: 'greening',
  contentType: 'post-harvest-defect',
  title: 'Greening',
  defectClass: 'physiological',
  alternativeNames: ['Light greening', 'Green tuber', 'Chlorophyll greening'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Greening is the light-induced formation of chlorophyll in potato tubers, accompanied by an increase in glycoalkaloids through a separate but light-associated response; the green colour is an indicator that the tuber has been exposed to light, and not a measure of what has accumulated in it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A potato tuber is a modified stem that develops underground, and it retains the ability to respond to light as a stem does. When a tuber is exposed to light — in the field before lifting, through a gap in a store, in an open crate in transit, in a translucent bag, or under retail display lighting — it forms chlorophyll in the tissue beneath the skin and turns green. That much is straightforward photobiology, and the chlorophyll itself is the same pigment that makes every green vegetable green; it is not the reason greening receives the attention it does.',
    },
    {
      type: 'paragraph',
      text: "The reason is that light exposure also drives an increase in glycoalkaloids, the tuber's own defensive compounds, through a response that is associated with light but is separate from chlorophyll formation. These two responses are triggered by the same circumstance and are therefore correlated, which is why the green colour has become the everyday proxy for the concern. But they are distinct processes that do not track each other reliably, and confusing them produces a specific and consequential error: reading the intensity of the green as though it measured what had accumulated. It does not. The green reports that light reached the tuber. What that exposure produced beneath the surface is a different question, and one the colour is not competent to answer in either direction.",
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological — light-induced chlorophyll formation in potato',
    },
    {
      label: 'Cause',
      value:
        'Exposure to light, in the field, in store, in transit, in packaging, or on retail display',
      note: 'Not caused by temperature, dormancy, or storage duration in themselves',
    },
    {
      label: 'What the green pigment is',
      value:
        'Chlorophyll — the ordinary green pigment of plant tissue, and not itself the reason greening matters',
    },
    {
      label: 'The associated response',
      value:
        'Light exposure is also accompanied by an increase in glycoalkaloids, through a separate but light-associated response',
    },
    {
      label: 'What the colour indicates',
      value:
        'That the tuber was exposed to light — the green is an indicator of exposure, not a measure of glycoalkaloid content',
      note: 'The relationship fails in both directions: intense green is not a quantity, and no green is not assurance',
    },
    {
      label: 'The control',
      value:
        'Exclusion of light: dark storage, opaque packaging, covered transport, and managed display',
    },
    {
      label: 'Where limits and advice are set',
      value:
        'By food-safety authorities and national guidance, for the specific jurisdiction and use — this entry states no limit and gives no consumption advice',
      note: 'See EFSA, CIP, and national food-safety regulators for the applicable framework',
    },
  ],
  sections: [
    {
      id: 'two-responses',
      heading: 'Two responses to one circumstance',
      body: [
        {
          type: 'paragraph',
          text: 'Getting the causality right is the whole of this page. Light exposure induces chlorophyll formation in the tuber, which is what is seen. Light exposure is also associated with an increase in glycoalkaloids in the tuber. These are two responses to the same trigger, not one response with two visible faces, and not a case of the chlorophyll producing or containing anything. The chlorophyll is a pigment; it is the same compound present in every green leaf eaten routinely, and it is not what the concern is about.',
        },
        {
          type: 'paragraph',
          text: 'Because both responses follow from light, they tend to occur together, and that co-occurrence is genuine and useful up to a point: a green tuber is a tuber that has been in the light, and light exposure is the condition under which both responses proceed. What the co-occurrence does not support is the inference that the amount of green measures the amount of anything else. The two responses proceed at their own rates, are influenced differently by cultivar, by the tissue involved, by temperature, and by the character and duration of the exposure, and can diverge substantially from each other in a way that no amount of looking will reveal.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'The green is an indicator of exposure, not a measure of content',
          text: 'The colour reports one fact reliably: light reached this tuber. It does not report how much of the associated response occurred, and it must not be read as a scale. This failure runs in both directions — glycoalkaloids can increase without proportional visible greening, so the absence of green is not assurance that the exposure response did not occur. Any applicable limit, and any advice on handling or consumption, is set by food-safety authorities and national guidance; this entry states none and gives none.',
        },
      ],
    },
    {
      id: 'both-directions',
      heading: 'Why the colour fails in both directions',
      body: [
        {
          type: 'paragraph',
          text: 'The first direction is the one most people already half-know: a conspicuously green tuber is not a quantified tuber. The depth and extent of the green depend on how the chlorophyll response proceeded — on cultivar, on the tissue, on the exposure, on the temperature at the time — and reading intensity as a dose confuses a pigment response with a separate accumulation that happens to share its trigger.',
        },
        {
          type: 'paragraph',
          text: 'The second direction is the one that matters more and is far less well understood: an absence of green is not an absence of the associated response. Because the two responses are separate, and because they are influenced differently by cultivar, tissue, and the character of the exposure, glycoalkaloids can increase without proportional visible greening. A lot that has been sorted until no green is visible is a lot whose visible green has been removed. That is a real improvement in appearance and in exposure evidence, and it is not a measurement of what remains, nor an assurance about it.',
        },
        {
          type: 'list',
          items: [
            'Depth of green reflects the chlorophyll response, which is a different process from the glycoalkaloid response even though both follow light exposure.',
            'The two responses are influenced differently by cultivar, by the tissue involved, by temperature, and by the character and duration of the exposure, so they can diverge.',
            'Glycoalkaloids can increase without proportional visible greening, so an absence of green does not establish an absence of the response.',
            'Sorting green units out of a lot removes visible evidence of light exposure; it is not a measurement step and does not answer a compositional question.',
            'The question of what a lot actually contains is answered by appropriate analysis against the framework that applies to it, and never by its appearance.',
          ],
        },
      ],
    },
    {
      id: 'where-it-happens',
      heading: 'Where light reaches the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Greening is often thought of as a storage failure, and it is not only that. Light reaches tubers at many points, and some of the most consistent exposure occurs at the very end of the chain, in retail display under lighting, where product may sit illuminated for extended periods in packaging that does not exclude light. A lot can leave a correctly dark store in sound condition and green on the shelf.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'In the field',
              description:
                'Tubers exposed at the soil surface before lifting, where ridging has been inadequate or soil has moved, can begin greening before harvest.',
            },
            {
              term: 'In store',
              description:
                'Light entering through doors, vents, gaps, or work lighting reaches the outer faces of a pile; the store may be dark in intent and lit in fact.',
            },
            {
              term: 'In transit and handling',
              description:
                'Open crates, uncovered loads, and extended periods on lit loading areas expose the crop between controlled spaces.',
            },
            {
              term: 'In packaging',
              description:
                'Translucent or partially transparent bags admit light throughout distribution and display; opaque packaging is the control.',
            },
            {
              term: 'On retail display',
              description:
                'Display lighting is continuous and prolonged, and greening on the shelf is a common outcome that no upstream store condition prevents.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because exposure accumulates across all of these, greening found at the end of the chain does not identify where the light reached the crop. The symptom records that exposure happened, not the leg on which it happened, and establishing that requires the handling record rather than the tuber.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Greening has a single cause and therefore a single control: keep light off the crop. This is unusually clean as post-harvest problems go — there is no dose relationship to balance against another quality outcome, no trade-off with sprouting or sugars, and no ambiguity about the mechanism. Every measure below is a variation on light exclusion.',
        },
        {
          type: 'list',
          items: [
            'Hold ware potatoes in dark storage, and treat light entering through doors, vents, gaps, and work lighting as a real exposure rather than an incidental one.',
            'Use opaque packaging for retail presentation, since packaging that admits light exposes the crop for the whole of distribution and display.',
            'Cover loads and limit time on lit handling and loading areas between controlled spaces.',
            'Manage display: rotate stock and limit the period product spends under display lighting, because retail exposure is continuous and no upstream condition compensates for it.',
            'Address field exposure through adequate ridging and lifting practice, so that tubers do not arrive already greened.',
            'Sort and grade to remove visibly green units from a lot — noting that this addresses appearance and visible evidence of exposure, and is not a compositional or safety step.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This entry gives no limits and no consumption advice',
          text: 'Nothing here states a threshold, a limit, or a quantity, and nothing here advises what should be done with a green tuber by anyone handling or preparing it. Those questions are settled by food-safety authorities and national guidance for the specific jurisdiction and use, and they are the correct place to take them. Consult EFSA, CIP, and the applicable national food-safety regulator.',
        },
      ],
    },
  ],
  affectedCommodities: [{ type: 'commodity', slug: 'ware-potatoes' }],
  causedByConditions: [
    'Exposure of tubers to light at any point: in the field before lifting, in store, in transit, through packaging, or under retail display lighting',
    'Light entering a store through doors, vents, structural gaps, or work lighting and reaching the outer faces of a pile',
    'Translucent or partially transparent retail packaging, which admits light throughout distribution and display',
    'Prolonged periods under continuous retail display lighting, which no upstream storage condition prevents',
    'Tubers exposed at the soil surface before harvest where ridging or lifting practice has left them uncovered',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  confusableWith: [
    'Sprouting — routinely conflated with greening in casual use as the potatoes having "gone off", but a different process with a different cause: sprouting follows the end of dormancy, greening follows light exposure, and either occurs without the other',
    'Cultivar skin colour — some cultivars carry skin tones that read as greenish or olive under artificial light, and the shared cue of "a green-looking tuber" does not separate an inherent skin colour from a light response',
    'Simple surface discolouration — soil staining, residues, skin blemishes, and superficial marks all present as an off-colour surface, and colour alone does not establish that chlorophyll has formed beneath the skin',
    'Bruise-related darkening — impact damage produces darkened tissue that can read as greenish-grey under some lighting, sharing the cue of "discoloured tissue under the skin" with greening while arising from mechanical damage',
    "Ordinary green tissue at the stem end or shoulder — localised greenish colouration can reflect the tuber's own development and position rather than a storage or display exposure",
  ],
  diagnosticLimitations: [
    'The green colour indicates that the tuber was exposed to light; it is not a measure of glycoalkaloid content. Chlorophyll formation and the glycoalkaloid response are separate responses to the same trigger, and the intensity or extent of the green does not quantify the other.',
    'The failure runs in both directions, and the second direction matters more: glycoalkaloids can increase without proportional visible greening, so the absence of green is not assurance that the light-associated response did not occur. A lot sorted until no green is visible has had its visible evidence removed, not its composition established.',
    'Greening cannot be located in the chain from the tuber. Exposure accumulates across field, store, transit, packaging, and display, and the symptom records that light reached the crop without identifying where or for how long; that requires the handling record.',
    'Green colouration is not by itself evidence of chlorophyll: cultivar skin tone, soil staining, superficial blemishes, and bruise-related darkening all present as off-colour tissue, and lighting conditions at inspection alter how each is read.',
    'Cultivar, the tissue involved, temperature, and the character and duration of the exposure influence the two responses differently, so comparisons of visible green between lots, cultivars, or inspection settings do not compare like with like.',
    'This entry supports no judgement about the acceptability, handling, or use of any lot. What a tuber contains is established by appropriate analysis against the applicable framework, and any limit or guidance is set by food-safety authorities and national guidance — not by inspection and not here.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Assessment framework for glycoalkaloids in potato, and the distinction between visible greening and compositional questions',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Potato tuber responses to light exposure, chlorophyll formation, and glycoalkaloid accumulation as distinct light-associated responses',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling and storage of potatoes, including light exclusion in store, packaging, and distribution',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Ware potato storage, light management, and retail display practice',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wherever ware potatoes are grown, stored, distributed, and displayed. The light response is a property of the tuber rather than a region, but exposure risk depends on local store design, packaging conventions, and retail display practice, and any applicable limits or guidance are set nationally.',
  limitations: [
    'This entry states no limit, threshold, or quantity for glycoalkaloids or for greening, and gives no advice on the handling, preparation, or consumption of any tuber. Those matters are set by food-safety authorities and national guidance for the specific jurisdiction and use; consult EFSA, CIP, and the applicable national regulator.',
    'The relationship between visible greening and the associated light response is qualitative and unreliable in both directions; nothing here supports estimating composition from appearance, and no visual assessment substitutes for appropriate analysis.',
    'Susceptibility to both responses varies by cultivar, tissue, maturity, and the character of the exposure, so a general description of the disorder may not describe the behaviour of a particular lot.',
    'Greening is not reversible by returning a tuber to darkness, and the entry is not a basis for accepting, rejecting, or reworking a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Greening in Potato: Light Exposure and Chlorophyll',
    description:
      'Potato greening is light-induced chlorophyll, accompanied by a glycoalkaloid rise. Why the green marks light exposure and never measures what is beneath it.',
    keywords: [
      'potato greening',
      'green potatoes',
      'glycoalkaloids',
      'light exposure',
      'chlorophyll formation',
    ],
  },
  structuredData: { article: true },
};
