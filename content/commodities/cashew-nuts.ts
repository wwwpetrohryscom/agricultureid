import type { CommodityContent } from '@/types/content';

export const cashewNuts: CommodityContent = {
  id: 'commodity-cashew-nuts',
  slug: 'cashew-nuts',
  contentType: 'commodity',
  title: 'Cashew Nuts',
  alternativeNames: [
    'Raw cashew nuts',
    'RCN',
    'Cashew kernels (processed form)',
  ],
  category: 'Tree nut commodity',
  subcategory: 'Drupe seed traded as a nut',
  commodityClass: 'nut',
  physicalForm: 'seed',
  harvestedPart:
    'Seed borne outside the fleshy cashew apple, traded raw in-shell or as kernels',
  sourceCrop: { type: 'crop', slug: 'cashew' },
  summary:
    'Cashews are traded first as raw cashew nut — the whole nut in its shell — because the shell holds a caustic liquid that makes the kernel inedible until processed. This single fact splits the trade in two: growing regions export the raw nut, and processing regions produce the kernel.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cashews are unusual before you even reach the trade. The nut grows outside the fruit, hanging beneath the fleshy cashew apple rather than inside it, and the apple — the part that looks like the fruit — is the accessory structure, while the nut is the true fruit. But the fact that organises the entire commodity is chemical rather than botanical: the cashew shell contains a caustic liquid that blisters skin and renders the kernel inaccessible without a processing step.',
    },
    {
      type: 'paragraph',
      text: 'No other traded nut requires processing before it can be eaten. You cannot crack a raw cashew and eat it — the shell must be treated to neutralise and remove the liquid before the kernel can be extracted safely. This creates a two-stage commodity: raw cashew nut, traded internationally in bulk from growing regions, and cashew kernel, produced by dedicated processors. This entry describes the traded nut at concept level; the tree belongs to the cashew crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Nut (tree nut)' },
    { label: 'Parent crop', value: 'Cashew (Anacardium occidentale)' },
    {
      label: 'Botanically',
      value: 'The true fruit, borne outside the fleshy cashew apple',
    },
    {
      label: 'Primary traded form',
      value: 'Raw cashew nut (RCN) — the whole nut in its shell',
    },
    {
      label: 'Why processing is mandatory',
      value:
        'The shell holds a caustic liquid; the kernel is not edible until it is removed',
    },
    {
      label: 'Trade structure',
      value:
        'Raw nut exported from growing regions; kernels produced by processors',
    },
    {
      label: 'Kernel grading',
      value: 'By colour, wholeness (wholes versus pieces), and count size',
    },
  ],
  sections: [
    {
      id: 'the-shell-liquid',
      heading: 'The shell liquid and why it defines the commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Between the outer and inner layers of the cashew shell sits cashew nut shell liquid, a caustic, blistering material related chemically to the irritants in poison ivy. It is why cashews are never sold in the shell for consumers to crack, why cashew processing is a specialised industry rather than a simple cracking operation, and why the raw nut and the kernel are two different articles of trade with two different customs lines and two different price series.',
        },
        {
          type: 'paragraph',
          text: 'Removing it is a defined industrial process — the shell is treated to neutralise or drive off the liquid before the kernel is extracted, dried, and peeled of its inner skin. AgricultureID describes this at concept level only: the actual procedures involve heat, caustic material, and an occupational hazard, and they belong to technical processing guidance and to occupational-safety authorities, not to a reference encyclopedia.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Not a home or field operation',
          text: 'Raw cashew nuts cannot be shelled by hand or cracked like other nuts. The shell liquid causes chemical burns, and extraction is an industrial process with occupational-safety requirements. No procedures are given on this page.',
        },
      ],
    },
    {
      id: 'raw-cashew-nut',
      heading: 'Raw cashew nut as a traded good',
      body: [
        {
          type: 'paragraph',
          text: "Raw cashew nut is what most cashew-growing countries actually export. It moves in bulk — bags and containers of whole, dried, unprocessed nuts — and it is bought on attributes that predict how many kernels a processor will recover from it: nut count per unit weight, moisture, and above all outturn, the trade's term for the kernel yield a lot delivers. Outturn is estimated by cutting test samples, and it is the number the price is built on.",
        },
        {
          type: 'paragraph',
          text: 'This structure has long meant that the value added by processing accrues in different countries from those that grow the crop — West Africa exporting raw nut to processors in South and Southeast Asia has been the classic pattern, though origin processing capacity has grown. It is a rare case of a commodity whose trade geography is dictated by a processing hazard.',
        },
        {
          type: 'paragraph',
          text: 'The nuts are dried after harvest and traded on a moisture basis, and like other oil-bearing nuts they are vulnerable to mould in inadequately dried lots and to insect infestation in storage. Raw cashew nut is a resilient commodity by fresh-produce standards but an exacting one by the standards of the buyer estimating outturn.',
        },
      ],
    },
    {
      id: 'kernels-and-grading',
      heading: 'Kernels and grading',
      body: [
        {
          type: 'paragraph',
          text: "Cashew kernels are graded on wholeness, colour, and size. Whole kernels command a substantial premium over pieces, and since kernels break during shelling and peeling, the proportion of wholes a processor recovers is the measure of the operation's quality. Colour grades run from white through scorched and darker categories, reflecting how much heat the kernel met during processing. Size is expressed as count per unit weight, as it is for other nuts.",
        },
        {
          type: 'list',
          items: [
            'Broken and split kernels — reducing the premium whole-kernel fraction',
            'Scorched and discoloured kernels from processing heat',
            'Mould growth and mycotoxin risk in inadequately dried nuts',
            'Insect infestation in stored raw nut and kernels',
            'Immature, shrivelled, and spotted kernels',
            'Rancidity in kernels held warm or long',
          ],
        },
        {
          type: 'paragraph',
          text: 'Kernels are oil-rich and go rancid in the same way as other tree nuts, so packaging under vacuum or in modified atmosphere is standard for export, and cold storage is used to protect quality. Kernel grade standards are jurisdictional and versioned, and international trade also runs on established contract grade descriptions.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Cashew kernels are eaten as snack nuts and used heavily in confectionery, bakery, and cooking, and increasingly in plant-based dairy alternatives. The shell liquid removed during processing is not discarded: it is recovered as an industrial feedstock for resins, brake linings, and coatings, making it a by-product with real value. The cashew apple, though far more abundant by weight than the nut, is highly perishable and is mostly used locally for juice and fermented drinks rather than traded.',
        },
        {
          type: 'list',
          items: [
            'Food — kernels as snack nuts and as a confectionery, bakery, and culinary ingredient',
            'Food processing — kernel pieces and paste, including plant-based dairy alternatives',
            'Industrial — cashew nut shell liquid recovered for resins, friction materials, and coatings',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Outturn (kernel yield from raw nut)',
    'Nut count per unit weight',
    'Moisture content',
    'Proportion of whole kernels after processing',
    'Kernel colour grade',
    'Freedom from mould and insect damage',
  ],
  commonDefects: [
    'Broken and split kernels',
    'Scorched and discoloured kernels',
    'Mould in under-dried nuts',
    'Insect infestation',
    'Immature and shrivelled kernels',
    'Rancidity',
  ],
  moistureContext:
    'Raw cashew nut is dried and traded on a moisture basis; lots held above the moisture appropriate for the storage period support moulds and lose outturn. Limits are set by contract and standard.',
  storageContext:
    'Raw nut is stored dry in bags and bulk; kernels are packed under vacuum or modified atmosphere and often held cold, because oil-rich kernels go rancid rather than spoil.',
  transportContext:
    'Raw cashew nut moves in bulk and in bags in dry containers over long routes from growing regions to processing regions; kernels ship in sealed, atmosphere-controlled packaging.',
  majorProducingRegions: [
    'West and East Africa',
    'South and Southeast Asia',
    'South America',
    'The Caribbean',
  ],
  majorTradingRegions: [
    'West Africa (major raw nut exporting region)',
    'South and Southeast Asia (major processing region)',
    'North America and Europe (major kernel importing markets)',
    'The Middle East',
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'hermetic-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cashew as a traded tree nut, raw nut trade structure, and processing pathway',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Cashew production and value-chain context in West and Central Africa',
    },
    {
      sourceId: 'usda',
      citedFor: 'Cashew kernel grade attributes and defect vocabulary',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on cashew botany and shell liquid',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, contract descriptions, and occupational-safety rules for processing are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not processing guidance, an occupational-safety document, or a grading determination.',
    'Cashew shell processing is described at concept level only. It involves a caustic material and an occupational hazard, and no procedures, temperatures, or methods are given here.',
    'No moisture, outturn, or storage figures are given — these are set by contracts and standards.',
    'The growing, processing, and importing regions listed are indicative of trade structure, not a ranking.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cashew Nuts: Raw Nut and Kernel Trade Forms',
    description:
      'Cashews as a commodity: why the caustic shell liquid makes processing mandatory, raw cashew nut and outturn, the split trade geography, and kernel grading.',
    keywords: [
      'cashew nuts',
      'raw cashew nut',
      'cashew kernels',
      'cashew shell liquid',
      'cashew outturn',
    ],
  },
  structuredData: { article: true },
};
