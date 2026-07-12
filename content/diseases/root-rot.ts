import type { PlantDiseaseContent } from '@/types/content';

export const rootRot: PlantDiseaseContent = {
  id: 'disease-root-rot',
  slug: 'root-rot',
  contentType: 'plant-disease',
  title: 'Root Rot',
  scientificName:
    'Multiple genera (e.g. Pythium, Phytophthora, Rhizoctonia, Fusarium spp.)',
  alternativeNames: ['Root rot complex'],
  category: 'Plant disease',
  subcategory: 'Soil-borne disease complex',
  causalAgent:
    'A complex of soil-borne fungi and oomycetes, most commonly species of Pythium, Phytophthora, Rhizoctonia, and Fusarium',
  pathogenType: 'other',
  summary:
    'Root rot is a general term for root diseases caused by several different soil-borne fungi and oomycetes rather than a single pathogen. It reduces root function and vigor across a wide range of crops, and accurate diagnosis is essential to choosing an effective response.',
  introduction: [
    {
      type: 'paragraph',
      text: '“Root rot” is not caused by one organism; it describes a shared symptom pattern, decayed and non-functional roots, produced by several unrelated soil-borne fungi and oomycetes. The genera most commonly implicated are Pythium and Phytophthora (oomycetes) and Rhizoctonia and Fusarium (true fungi), acting alone or together depending on the crop, soil, and climate.',
    },
    {
      type: 'paragraph',
      text: 'Because the causal organisms differ in biology and in the conditions that favor them, root rot is best understood as a disease complex: similar-looking root damage can result from more than one pathogen, sometimes compounded by plant stress from waterlogging, soil compaction, or root injury.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Soil-borne disease complex (multiple fungal and oomycete genera)',
    },
    {
      label: 'Key sign',
      value:
        'Discolored, decayed roots with reduced root mass; stunting and wilting above ground',
    },
    {
      label: 'Hosts',
      value:
        'Very broad; most crops are susceptible to at least one causal organism',
    },
    {
      label: 'Favoured by',
      value:
        'Poorly drained or compacted soils and moisture extremes at germination or establishment',
    },
    {
      label: 'Spread',
      value:
        'Soil, water movement, contaminated equipment, and infected seed or transplants',
    },
    {
      label: 'Management basis',
      value:
        'Drainage, resistant varieties, crop rotation, diagnosis-led response',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Above-ground symptoms of root rot are often non-specific: stunted growth, yellowing, wilting (especially under heat or moisture stress), and reduced yield or stand loss. Below ground, roots typically appear discolored, ranging from brown to black to reddish-brown depending on the organism involved, and may be water-soaked or soft in oomycete infections. Fine root mass is often reduced, and in some cases the outer root layer sloughs away, leaving a thin central strand.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Above-ground symptoms of root rot can resemble nutrient deficiency, waterlogging, or other stresses. Confirming the diagnosis, and ideally the specific causal organism or organisms, typically requires laboratory testing.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Causal agents and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Pythium and Phytophthora are oomycetes that thrive in saturated or poorly drained soils and produce swimming zoospores attracted to root tissue, making them especially damaging in wet conditions and under frequent irrigation. Rhizoctonia is a true fungus that survives in soil as mycelium or resting structures called sclerotia, does not require free water to infect, and often damages roots and stems near the soil line. Fusarium species survive as durable resting spores called chlamydospores and frequently behave as opportunists on roots already weakened by other stresses.',
        },
        {
          type: 'table',
          caption: 'Common causal genera at a glance',
          columns: ['Genus', 'Type', 'Favoured conditions'],
          rows: [
            ['Pythium', 'Oomycete', 'Saturated, poorly drained soils'],
            ['Phytophthora', 'Oomycete', 'Wet or waterlogged soils'],
            [
              'Rhizoctonia',
              'Fungus',
              'Broad range; does not require free water',
            ],
            [
              'Fusarium',
              'Fungus',
              'Often secondary, on already-stressed roots',
            ],
          ],
        },
      ],
    },
    {
      id: 'a-disease-complex',
      heading: 'Why root rot is treated as a complex',
      body: [
        {
          type: 'paragraph',
          text: 'Because several unrelated organisms produce similar symptoms and often occur together in the same field, or even the same plant, a management approach effective against one causal organism may do little against another. Drainage improvements, for example, primarily address conditions favoring oomycetes, while sanitation and rotation matter more for fungi with long soil persistence.',
        },
        {
          type: 'list',
          items: [
            'Causal organisms differ in the soil moisture and temperature conditions they favor',
            'Some are oomycetes and some are true fungi, with different control-product classes registered against each group',
            'The pathogen or pathogens present in a field can shift the priority between drainage, sanitation, and variety choice',
          ],
        },
      ],
    },
    {
      id: 'affected-hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Because the causal genera individually have broad host ranges, root rot affects a very wide range of field, vegetable, and horticultural crops. Cereals such as wheat, legumes such as soybean, and vegetables such as tomato are all commonly affected, though the specific organism or organisms responsible vary by crop, soil, and region.',
        },
        {
          type: 'list',
          items: [
            'Wheat: seedling and crown/root rot complexes',
            'Soybean: seedling blights and root or stem rot complexes',
            'Tomato: damping-off and root rot, especially in wet or poorly drained soils',
          ],
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk factors',
      body: [
        {
          type: 'list',
          items: [
            'Poorly drained or compacted soils that remain saturated after rain or irrigation',
            'Cool, wet soils at planting that slow seedling growth and prolong exposure',
            'Drought stress or heat that weakens roots and favors opportunistic fungi',
            'Continuous cropping of the same or related host plants',
            'Injury to roots from nematodes, insects, or cultivation',
            'Low-vigor seed or transplants',
          ],
        },
      ],
    },
    {
      id: 'prevention-and-monitoring',
      heading: 'Prevention and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because root rot can arise from several different organisms, effective management typically starts with correct diagnosis and then addresses the specific conditions favoring the pathogens involved.',
        },
        {
          type: 'list',
          items: [
            'Improve soil drainage and avoid compaction',
            'Avoid overwatering and allow appropriate drying between irrigations where practical',
            'Use high-quality, vigorous seed and transplants',
            'Rotate with non-host or less-susceptible crops',
            'Choose resistant or tolerant varieties where available',
            'Scout fields, especially low or wet spots, and consider laboratory diagnosis when symptoms are unclear',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides, oomycete-specific products, or other control measures must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'soil-ph', 'crop-rotation'],
  geographicScope:
    'Global; root rot complexes occur wherever susceptible crops are grown, with particular impact in poorly drained soils and wet seasons.',
  climateContext:
    'Oomycete-driven root rot is favoured by saturated, poorly drained soils; fungal components can also develop under drought or heat stress that weakens roots.',
  limitations: [
    'Root rot is a symptom-based, multi-organism category; this overview cannot substitute for laboratory identification of the specific causal organism(s) present.',
    'The relative importance of individual causal genera varies substantially by crop, soil type, and region.',
    'Control-product recommendations are jurisdiction- and pathogen-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Root rot causal organisms and disease biology',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field crop root rot diagnosis and risk factors',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Seedling and root rot disease complexes',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Root Rot',
    description:
      'Root rot overview: identification, causal fungi and oomycetes, affected crops, risk factors, and prevention and monitoring principles for growers.',
    keywords: ['root rot', 'root disease', 'Pythium', 'Phytophthora'],
  },
  structuredData: { article: true },
};
