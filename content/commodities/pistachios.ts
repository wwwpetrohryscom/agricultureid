import type { CommodityContent } from '@/types/content';

export const pistachios: CommodityContent = {
  id: 'commodity-pistachios',
  slug: 'pistachios',
  contentType: 'commodity',
  title: 'Pistachios',
  alternativeNames: [
    'Pistachio nuts',
    'In-shell pistachios',
    'Green almond (regional name)',
  ],
  category: 'Tree nut commodity',
  subcategory: 'Drupe seed traded as a nut',
  commodityClass: 'nut',
  physicalForm: 'seed',
  harvestedPart:
    'Seed of a drupe, traded predominantly in-shell with the shell naturally split',
  sourceCrop: { type: 'crop', slug: 'pistachio' },
  summary:
    'Pistachios are traded largely in-shell, and are unique in being valued for a shell that splits open naturally at maturity. That same split is a defect gateway: it exposes the kernel, and aflatoxin contamination is a documented and closely regulated hazard for the commodity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pistachios are the seed of a drupe, and the commodity has a feature no other traded nut shares: the shell splits open by itself as the kernel expands toward maturity, and the trade wants it that way. A split shell is what lets a consumer open the nut by hand, and lots are graded on the proportion of nuts that have split. Closed-shell nuts, which would be perfectly ordinary in any other tree nut, are a downgrade here.',
    },
    {
      type: 'paragraph',
      text: "The same split is the commodity's vulnerability. An opening in the shell at maturity, while the nut is still on the tree, is an opening for insects and for the fungi that follow them — and pistachios carry a well-documented aflatoxin risk that shapes how the crop is harvested, processed, sorted, and regulated at import. This is the clearest case in the nut trade of a quality asset and a safety hazard being the same physical feature. This entry describes the traded commodity, not the orchard.",
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Nut (tree nut)' },
    { label: 'Parent crop', value: 'Pistachio (Pistacia vera)' },
    {
      label: 'Botanically',
      value: 'The seed of a drupe, with a hull and a splitting shell',
    },
    {
      label: 'Dominant trade form',
      value: 'In-shell, with the naturally split shell as a graded attribute',
    },
    {
      label: 'Prized kernel trait',
      value: 'Green kernel colour, valued especially in ingredient markets',
    },
    {
      label: 'Documented hazard',
      value: 'Aflatoxin contamination — a regulated food-safety concern',
    },
    {
      label: 'Critical operations',
      value: 'Prompt hulling and drying, and rigorous sorting',
    },
  ],
  sections: [
    {
      id: 'the-split-shell',
      heading: 'The split shell',
      body: [
        {
          type: 'paragraph',
          text: 'As a pistachio matures the kernel grows until it forces the shell apart along a suture, leaving the nut open at one end while still enclosed in its hull. Naturally split nuts are the premium product; nuts that fail to split are diverted to mechanical shelling and sold as kernels, at lower value. The proportion of splits in a lot is therefore a headline grade attribute, and it is set by the season and the orchard rather than by anything a processor can do afterwards.',
        },
        {
          type: 'paragraph',
          text: 'A related distinction matters greatly for safety. A shell that splits naturally at maturity splits cleanly and late; a shell that splits early, or a hull that ruptures while the nut is developing, gives insects and fungi access to the kernel for weeks. The trade calls these early splits, and they are the nuts that attract the most attention at sorting because they are where contamination concentrates.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Split is a grade, early split is a hazard',
          text: 'The natural split at maturity is what the market pays for. An early split — the hull and shell opening prematurely during development — is a different thing entirely and is a recognised risk factor for insect entry and fungal infection.',
        },
      ],
    },
    {
      id: 'aflatoxin-risk',
      heading: 'Aflatoxin risk',
      body: [
        {
          type: 'paragraph',
          text: 'Aflatoxins are toxic metabolites produced by certain Aspergillus species, and their occurrence in pistachios is among the best documented in any tree nut. FAO and EFSA both treat pistachios as a commodity where the hazard is established rather than theoretical, and importing jurisdictions apply maximum levels together with border sampling and testing regimes — a level of scrutiny that has made aflatoxin compliance a defining commercial feature of the pistachio trade rather than a marginal quality issue.',
        },
        {
          type: 'paragraph',
          text: 'The pathway runs through the whole chain. Insect damage and early splits open the kernel to infection in the orchard; delay between harvest and hulling lets moulds develop on nuts sitting in moist hulls; inadequate drying allows growth to continue in store. The controls are correspondingly distributed — pest management in the orchard, prompt hulling, controlled drying, and then sorting to remove the specific nuts that carry the problem, since contamination is characteristically concentrated in a small fraction of a lot rather than spread evenly through it.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No limits or test results are given here',
          text: 'Maximum aflatoxin levels, sampling plans, and testing requirements for pistachios are set by food-safety authorities and differ by jurisdiction. AgricultureID publishes no limits and this page is not a food-safety assessment; consult the rules in force for the market concerned.',
        },
      ],
    },
    {
      id: 'processing-and-drying',
      heading: 'Hulling, drying, and sorting',
      body: [
        {
          type: 'paragraph',
          text: 'Pistachios are shaken from the tree and must be hulled quickly, because a nut left in its moist hull stains through the shell and begins supporting mould growth within a short window. Hulling is followed immediately by drying, which brings the nut to a moisture at which it is stable in store. This harvest-to-hulling-to-drying sequence is compressed more tightly than for almonds or walnuts, and it is the reason pistachio processing capacity is sited close to the orchards.',
        },
        {
          type: 'paragraph',
          text: 'Sorting is unusually intensive and unusually consequential. Beyond removing debris and closed shells, sorting lines target the specific defective nuts most likely to carry contamination, using density separation, optical sorting, and hand sorting in combination. Because the hazard sits in a small proportion of nuts, removing those nuts is the single most effective intervention available downstream — which is why pistachio sorting is a food-safety operation as much as a grading one.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'In-shell lots are graded on the proportion of naturally split nuts, nut size as count per unit weight, shell colour and cleanliness, and defect incidence. Kernel colour is a separate premium attribute: green kernels are prized, particularly for confectionery and ingredient use where the colour is visible in the finished product, and colour is influenced by cultivar and by harvest timing. Shell staining from delayed hulling is a common downgrade.',
        },
        {
          type: 'list',
          items: [
            'Aflatoxin contamination — the regulated hazard, concentrated in damaged and early-split nuts',
            'Insect damage, particularly through split shells and hull breaks',
            'Shell staining from delayed hulling',
            'Closed-shell nuts, diverted from the premium in-shell trade',
            'Blank and poorly filled nuts',
            'Mould growth in nuts hulled or dried late, and rancidity in long-held lots',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Most pistachios are eaten as in-shell snack nuts, roasted and salted, which is the outlet the split shell exists to serve. Kernels — from closed-shell nuts that had to be mechanically shelled, and from lots destined for ingredient use — go into confectionery, ice cream, bakery, and pastes, where the green colour is a selling point in its own right. Shells and hulls are residues handled at the processing plant.',
        },
        {
          type: 'list',
          items: [
            'Food — in-shell roasted and salted nuts, the dominant outlet',
            'Food ingredient — kernels and pastes for confectionery, bakery, and dairy use',
            'Industrial — shells used as fuel and as an abrasive or filler material',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial', 'energy'],
  majorQualityAttributes: [
    'Proportion of naturally split shells',
    'Nut size and count per unit weight',
    'Kernel colour (green preferred)',
    'Shell colour and freedom from staining',
    'Moisture content',
    'Freedom from insect damage and mould',
  ],
  commonDefects: [
    'Aflatoxin contamination',
    'Insect damage',
    'Shell staining',
    'Closed (non-split) shells',
    'Blank and poorly filled nuts',
    'Mould and rancidity',
  ],
  moistureContext:
    "Pistachios are dried immediately after hulling and held on a moisture basis; nuts left moist in the hull stain and support mould growth, which is the pathway to the commodity's principal hazard.",
  storageContext:
    'Stored dry, with cold storage used to protect kernel colour and delay rancidity in long-held lots; insect control and hygiene are standing requirements.',
  transportContext:
    'Ships in cartons, bags, and totes in dry containers; consignments into many markets are subject to documented sampling and testing on arrival.',
  majorProducingRegions: [
    'The Middle East and Central Asia',
    'North America (Pacific coast)',
    'Mediterranean Europe',
    'North Africa',
  ],
  majorTradingRegions: [
    'North America and the Middle East (major exporting regions)',
    'Europe (major importing region, with border testing regimes)',
    'East Asia',
    'South Asia',
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'almonds' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop', 'integrated-pest-management'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Pistachios as a traded tree nut and mycotoxin occurrence in tree nuts',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Aflatoxin hazard characterisation and occurrence in pistachios in the European context',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Pistachio grade attributes, split-shell grading, and defect vocabulary',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Pistachio hulling, drying, sorting, and aflatoxin management research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Aflatoxin limits, sampling plans, grade standards, and import controls are jurisdiction-specific and revised.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a food-safety assessment, testing protocol, or grading determination.',
    'No aflatoxin limits, sampling plans, moisture figures, or storage conditions are given here — these are set by food-safety authorities and standards in each jurisdiction.',
    'Aflatoxin risk is described at concept level; management requires competent, jurisdiction-specific technical and regulatory advice.',
    'Pistachio regions are given as indicative groupings and are not ranked by production or trade volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pistachios: Split Shells and Aflatoxin Risk',
    description:
      'Pistachios as a commodity: the naturally split shell as both grade attribute and defect gateway, prompt hulling and drying, sorting, and aflatoxin risk.',
    keywords: [
      'pistachios',
      'pistachio commodity',
      'split shell pistachios',
      'pistachio aflatoxin',
      'pistachio sorting',
    ],
  },
  structuredData: { article: true },
};
