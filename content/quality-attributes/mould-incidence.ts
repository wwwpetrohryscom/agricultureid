import type { QualityAttributeContent } from '@/types/content';

export const mouldIncidence: QualityAttributeContent = {
  id: 'quality-attribute-mould-incidence',
  slug: 'mould-incidence',
  contentType: 'quality-attribute',
  title: 'Mould Incidence',
  alternativeNames: ['Mould infection rate', 'Visible mould count'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'biological',
  qualityDomain: 'food-feed-safety',
  notAnIndicatorOf: [
    'A mycotoxin measurement: visible mould does not mean a toxin is present, because many storage fungi are not toxigenic and a toxigenic species produces toxin only under some conditions — and, in the far more dangerous direction, the absence of visible mould does not mean the absence of mycotoxin, which is invisible, tasteless, and can persist long after the fungus that produced it has died or been removed by cleaning.',
    'A measure of current fungal viability: dead or dormant mould can look identical to actively growing mould under visual inspection, and appearance alone cannot distinguish them.',
    'A grade in itself: mould incidence is one input a grading or acceptance process may weigh, not a stand-alone grade.',
  ],
  typicalUnits: [
    '% of kernels affected',
    '% of units affected',
    'CFU/g (colony-forming units per gram)',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'barley-grain' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  summary:
    'Mould incidence is the proportion of kernels or units in a sample showing visible mould infection or growth. It is a food- and feed-safety surveillance signal, not a mycotoxin result: visible mould does not confirm toxin, and clean-looking grain is not confirmed toxin-free.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mould incidence records the proportion of kernels or units in a drawn sample that show visible mould infection or surface growth, typically assessed by direct visual inspection under standard conditions. It is a straightforward, fast, low-cost signal used at intake, during storage monitoring, and at delivery to flag lots that warrant closer attention.',
    },
    {
      type: 'paragraph',
      text: 'The single most important fact about mould incidence is what it is not: it is not a mycotoxin measurement, and the relationship between the two runs unreliably in both directions. Many fungi that produce visible growth on stored grain are not toxin producers at all, and even a toxigenic species produces toxin only under some conditions, so visible mould does not confirm contamination. Far more consequentially, the absence of visible mould does not confirm the absence of mycotoxin — the toxin itself is invisible, tasteless, heat-stable in many cases, and can remain in the commodity long after the fungus that made it has died, been removed, or been cleaned away.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The proportion of kernels or units in a drawn sample showing visible mould infection or growth',
    },
    {
      label: 'Primary domain',
      value: 'Food and feed safety surveillance signal',
      note: 'Not a mycotoxin result and not a grade on its own',
    },
    {
      label: 'Not a mycotoxin measurement',
      value:
        'Visible mould does not confirm a toxin is present, and the absence of visible mould does not confirm its absence',
    },
    {
      label: 'Toxin determination',
      value: 'Requires laboratory analysis on a properly drawn sample',
    },
    {
      label: 'Sampling dominates the result',
      value:
        'Contamination is highly heterogeneous — a few badly contaminated kernels in a large lot can drive the outcome',
      note: 'Where and how the sample is drawn matters as much as the analysis itself',
    },
    {
      label: 'Temperature-probe role',
      value:
        'Used as a surveillance proxy for biological heat, not a confirmation that a lot is mould-free',
    },
    {
      label: 'Where limits are set',
      value:
        'The applicable food or feed safety regulation sets maximum mycotoxin levels per commodity and jurisdiction',
    },
  ],
  sections: [
    {
      id: 'what-mould-incidence-measures',
      heading: 'What mould incidence measures',
      body: [
        {
          type: 'paragraph',
          text: 'Mould incidence is assessed by drawing a representative sample from the lot and examining it, usually visually, for kernels or units showing infection or surface fungal growth. The result is reported as a proportion — by count, by mass, or as colony-forming units per gram where a microbiological plate count is used instead of a purely visual assessment. Because it is fast and does not require a laboratory, it is used widely as a first-line screening signal at intake and during storage inspection.',
        },
        {
          type: 'paragraph',
          text: 'As a screening signal, mould incidence is useful for flagging lots for closer attention, for tracking trends in a store over time, and for triggering aeration or turning decisions. It is not, by itself, a determination of whether the lot meets any food- or feed-safety requirement.',
        },
      ],
    },
    {
      id: 'not-a-mycotoxin-measurement',
      heading: 'Mould incidence is not a mycotoxin measurement',
      body: [
        {
          type: 'paragraph',
          text: 'The relationship between visible mould and mycotoxin contamination is asymmetric and counterintuitive. On one side, a lot can show substantial visible mould growth from species that never produce toxin, or from a toxigenic species under conditions that did not favour toxin formation — visible mould, on its own, does not establish contamination. On the other, far more consequential side, a lot with no visible mould at all can already carry mycotoxin: the toxin can have been produced earlier by a fungus that has since died, can be distributed unevenly through the lot away from any visibly affected kernel, and survives cleaning, sorting, and in many cases processing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Mycotoxins are invisible',
          text: 'A clean-looking lot is not a toxin-tested lot. Mycotoxins have no reliable visual, odour, or textural signature, and no amount of visual inspection — however careful — can establish their presence or absence. That determination requires laboratory analysis on a properly drawn sample, assessed against the limits set by the applicable food or feed safety regulation.',
        },
      ],
    },
    {
      id: 'temperature-probe-as-surveillance-proxy',
      heading: 'Temperature monitoring as a surveillance proxy',
      body: [
        {
          type: 'paragraph',
          text: 'Temperature probes are used alongside visual inspection to monitor stored lots because active fungal and insect metabolism generates heat, and a rising temperature near a sensor can flag a developing hot spot before it becomes visible at the surface. This makes temperature monitoring a useful, low-cost, continuous surveillance tool.',
        },
        {
          type: 'paragraph',
          text: 'It is, however, only a proxy, and a limited one. A stable reading at the sensor is not evidence that the lot is free of mould or insects — activity elsewhere in the bulk may not yet have reached the probe, or the sensor spacing may be too coarse to detect a localised pocket. Cooling a lot that has already self-heated slows further biological activity, but it does not remove any mycotoxin that has already formed; a temperature record is a monitoring tool for storage conditions, not a safety clearance.',
        },
      ],
    },
    {
      id: 'laboratory-testing-and-sampling',
      heading: 'Why laboratory testing is a different question',
      body: [
        {
          type: 'paragraph',
          text: 'Mycotoxin contamination in a bulk lot is characteristically heterogeneous: a small number of badly contaminated kernels, clustered rather than evenly spread through an otherwise clean lot, can be responsible for the entire result. This makes sampling, not analytical precision, the dominant source of error in any toxin determination — a poorly drawn sample can produce a result that misrepresents the lot in either direction, regardless of how accurate the laboratory method used on that sample is.',
        },
        {
          type: 'paragraph',
          text: 'Establishing whether a lot exceeds an applicable mycotoxin limit therefore requires both a properly designed sampling protocol and a validated laboratory method, applied together. This entry does not state any toxin limit; the applicable food or feed safety regulation sets maximum levels for the specific commodity, toxin, and jurisdiction.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment and the distinction between visible mould and toxin contamination',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Mould incidence assessment and mycotoxin prevention in stored commodities',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Storage fungi behaviour and stored-grain mould research',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Storage mould identification and stored-product pest and disease context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Mould incidence is assessed by visual inspection of a drawn sample anywhere; applicable mycotoxin limits are commodity- and jurisdiction-specific and are set by food or feed safety regulation, not by this attribute.',
  limitations: [
    'This entry states no mycotoxin limits or thresholds. The applicable food or feed safety regulation sets maximum levels for the specific commodity, toxin, and jurisdiction.',
    'Visible mould presence or absence does not establish mycotoxin presence or absence in either direction; only laboratory analysis on a properly drawn sample can do that.',
    'Because contamination is highly heterogeneous within a lot, sampling error typically dominates the result more than any error in the visual or analytical method used.',
    'A temperature-probe reading is a surveillance proxy for biological heat, not a direct or reliable measurement of mould or insect presence, and cooling a lot does not remove any mycotoxin already formed.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mould Incidence: Not a Mycotoxin Measurement',
    description:
      'Mould incidence counts visibly affected kernels. It does not measure mycotoxin — toxin can be present without visible mould, or absent despite it.',
    keywords: [
      'mould incidence',
      'grain mould',
      'mycotoxin testing',
      'storage fungi',
      'visible mould vs mycotoxin',
    ],
  },
  structuredData: { article: true },
};
