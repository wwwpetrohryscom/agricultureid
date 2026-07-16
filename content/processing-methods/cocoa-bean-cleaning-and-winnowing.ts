import type { ProcessingMethodContent } from '@/types/content';

export const cocoaBeanCleaningAndWinnowing: ProcessingMethodContent = {
  id: 'processing-method-cocoa-bean-cleaning-and-winnowing',
  slug: 'cocoa-bean-cleaning-and-winnowing',
  contentType: 'processing-method',
  title: 'Cocoa Bean Cleaning and Winnowing',
  alternativeNames: [
    'Cocoa winnowing',
    'Cracking and fanning',
    'Nib separation',
  ],
  category: 'Processing method',
  subcategory: 'Cocoa processing',
  processingClass: 'separation',
  processStage: 'preparation',
  transformationBasis: 'mechanical',
  summary:
    'Cleaning removes the foreign material that travels with a cocoa lot; winnowing then cracks the bean and uses an air stream to carry the light shell away from the dense nib. It is the step that turns a bean into two entities — nib and shell — each with its own market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A cocoa bean arriving at a factory is a fermented, dried seed still wearing its shell, and it arrives in company: stones, string, sacking fibre, metal, and the debris of a long journey from farm to port. Cleaning removes that company. Winnowing then breaks the bean open and separates the shell from the cocoa nib — the kernel fragment that every downstream cocoa product is made from.',
    },
    {
      type: 'paragraph',
      text: 'The separation is worth understanding precisely because it is not a flavour step. By the time beans reach the winnower, the flavour has already been decided on the farm: fermentation generated the precursors and drying fixed them. Cleaning and winnowing cannot improve a badly fermented bean. What they decide is how much shell rides into the nib stream and how much nib is thrown away with the shell — a purity question and a yield question, not a taste one.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Separation — mechanical cleaning and air classification',
    },
    { label: 'Stage', value: 'Preparation' },
    {
      label: 'Input',
      value: 'Cocoa beans (fermented and dried before arrival)',
    },
    { label: 'Primary output', value: 'Cocoa nibs — the kernel fragments' },
    {
      label: 'By-product',
      value: 'Cocoa shell, a utilised stream rather than a residue',
    },
    {
      label: 'Governing principle',
      value:
        'Shell is light and papery, the nib is dense — an air stream separates them',
    },
    {
      label: 'Depends on',
      value:
        'Fermentation and drying upstream, which set shell release and bean soundness',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The cocoa bean has two parts that matter here: the cotyledon, which is the kernel, and the testa, the thin shell enclosing it. The kernel is what becomes cocoa mass, butter, and powder. The shell is fibrous, carries the contamination the bean has picked up in handling, and behaves quite differently from the kernel in every downstream operation. The objective is therefore to open the bean and part the two cleanly.',
        },
        {
          type: 'paragraph',
          text: 'Cleaning comes first and is a straightforward exploitation of physical differences: sieves classify by size, aspiration lifts light trash, destoners separate by density, and magnets take ferrous metal. Winnowing then relies on a single robust fact — once a bean is cracked, the shell fragments have a large surface area for very little mass, while the nib fragments are dense. An upward or cross-flowing air stream carries the shell away and lets the nib fall. The machine is a classifier, and the property it classifies on is aerodynamic, not chemical.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the shell must come off before, not after',
          text: 'Shell is fibrous and mineral-rich, and it does not grind, melt, or behave like kernel. Left in the stream it contaminates every subsequent product and shows up as a compositional fault. Removing it late is far harder than removing it at the point where the bean is first opened.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave the winnower, and both are sold. The nib is the intended product. The shell is a genuine by-product with established uses — not a disposal problem, and describing it as waste misstates both the material flow and the economics of a cocoa plant.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cocoa nibs',
              description:
                'The broken kernel, freed of shell. The primary product and the feedstock for every downstream cocoa product.',
            },
            {
              term: 'Cocoa shell',
              description:
                'The separated testa. Used as a fuel, as a garden and landscape mulch, as a fibre-bearing component in animal feed where permitted, and as a source of recoverable residual fat.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Where a thermal step sits relative to winnowing varies by plant and by product. Some lines roast whole beans and winnow afterwards, using the heat to loosen and embrittle the shell so it parts more readily; others winnow first and roast the nib, which gives more direct control over the kernel itself. Both configurations are in commercial use, and the choice interacts with flavour development, shell release, and the microbiological condition of the bean. This entry describes the separation, not the thermal step or its settings.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Winnowing is a trade-off run against itself. Push the air harder and the shell stream gets cleaner, but nib fragments — especially the small ones — start leaving with it. Ease the air off and the nib is recovered, but shell rides along into the product. The setting that resolves this is plant-specific and contract-specific, and the shell content permitted in cocoa products is set by the applicable food authority, not by the processor.',
        },
        {
          type: 'paragraph',
          text: 'Upstream condition governs how well the step can work at all. Beans that fermented and dried well release their shell readily. Flat, immature, clustered, or mouldy beans separate poorly, and no winnower recovers the quality they never had. Bean size uniformity matters too: a lot of mixed sizes cracks unevenly, and uneven cracking is the root of most separation faults.',
        },
        {
          type: 'list',
          items: [
            'Nib fragments carried out with the shell stream — recoverable yield leaving in the wrong direction',
            'Shell residue retained in the nib, raising the fibre and mineral load of everything downstream',
            'Fine nib dust lost to aspiration',
            'Under-cracked beans passing through with shell still attached',
            'Spillage and residual stock at transfers',
          ],
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'The step is mechanical and its main demands are electrical energy for cracking and fans, and air handling for the aspiration system. Its material flow is close to fully valorised: the shell, which is a substantial stream, is routinely burnt for process heat, sold as mulch, or directed to feed where regulation allows. The dust generated is both an air-quality matter and a safety one, which is why extraction serves two purposes at once.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Organic dust and rotating machinery',
          text: 'Suspended cocoa and shell dust is a combustible organic dust, and cracking and conveying equipment contains rotating parts and nip points. Plants operate under engineered dust control, ignition management, and guarding designed and commissioned by qualified engineers. This entry describes what the process does; it is not an operating instruction and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'cocoa-beans' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'cocoa-nibs' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'cocoa-shell' }],
  processObjective:
    'Remove the foreign material that accompanies a cocoa lot, then open the bean and separate the shell from the kernel, so that a clean nib stream can go forward and the shell can be recovered as a saleable stream in its own right.',
  operatingPrinciple:
    'Sieving, aspiration, density separation, and magnetic separation remove foreign material by exploiting differences in size, density, and magnetic response. The bean is then cracked, and an air stream classifies the fragments aerodynamically: light, high-surface-area shell is carried away while dense nib falls out. Sizing the cracked fragments before classification makes the air separation sharper.',
  physicalOrBiochemicalBasis:
    'Purely mechanical and physical: fracture of the bean, then classification on differences in density and aerodynamic drag between shell and kernel fragments. No chemical or biochemical change is intended, and none of the flavour chemistry developed during fermentation is altered here.',
  qualityEffects: [
    'Determines the shell content carried into every downstream cocoa product, and therefore its fibre and mineral load',
    'Determines how much kernel is lost to the shell stream, which is a yield rather than a quality effect',
    'Removes foreign material and contamination that the shell has carried through handling and transport',
    'Cannot improve flavour: the precursors were set by fermentation and fixed by drying, both upstream and on-farm',
  ],
  measurableParameters: [
    'Shell content in the nib stream',
    'Nib content in the shell stream',
    'Foreign-material content',
    'Bean size uniformity',
    'Moisture content',
  ],
  lossPoints: [
    'Nib fragments carried out with the shell',
    'Fine nib dust removed by aspiration',
    'Under-cracked beans retaining attached shell',
    'Spillage and residual stock at transfers',
  ],
  environmentalContext:
    'Mechanical and electrically driven, with air handling as the main ancillary demand. The material flow is largely valorised: cocoa shell is a substantial stream that is commonly used as process fuel, as mulch, or in feed where regulation permits, rather than discarded. Dust extraction serves air quality and safety simultaneously.',
  safetyLimitations: [
    'Suspended cocoa and shell dust is a combustible organic dust; plants require engineered dust control, ignition management, and explosion protection designed and commissioned by qualified engineers.',
    'Crackers, conveyors, and fans contain rotating machinery and nip points; guarding and isolation are governed by the facility’s own procedures and applicable occupational-safety regulation.',
    'Where a thermal step is combined with winnowing, hot surfaces and heated air are present; their design and control are engineering matters, not reference-entry matters.',
    'This entry is an educational reference, not an operating instruction: it gives no air settings, roll gaps, temperatures, or process parameters.',
  ],
  jurisdictionalLimitations: [
    'The shell content permitted in cocoa and chocolate products is set by the applicable food authority and differs by jurisdiction.',
    'Use of cocoa shell in animal feed is permitted in some jurisdictions and restricted in others; the applicable feed authority governs.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'winnowing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  connections: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cocoa post-harvest handling and processing context',
    },
    {
      sourceId: 'iita',
      citedFor: 'Cocoa bean quality and West African processing research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Cocoa crop and product handling compendium',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Cocoa bean structure and general processing description',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Most cocoa is fermented and dried at origin and cleaned and winnowed in importing or origin-country grinding plants; equipment configuration and the placement of any thermal step vary by plant and product.',
  limitations: [
    'A reference description of the process, not a plant specification or operating instruction.',
    'No air velocities, roll gaps, temperatures, shell-content figures, or yields are given — they are plant-, lot-, and contract-specific.',
    'Permitted shell content in cocoa products, and the use of shell in feed, differ by jurisdiction; consult the applicable authority.',
    'Whether roasting precedes or follows winnowing varies commercially; this entry describes the separation rather than any particular line configuration.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cocoa Cleaning and Winnowing: From Beans to Nibs',
    description:
      'How cleaning and winnowing separate cocoa beans into nibs and shell: the objective, the air-classification principle, quality effects, and loss points.',
    keywords: [
      'cocoa winnowing',
      'cocoa nibs',
      'cocoa shell',
      'cocoa bean cleaning',
      'cocoa processing',
    ],
  },
  structuredData: { article: true },
};
