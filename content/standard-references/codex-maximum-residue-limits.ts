import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const codexMaximumResidueLimits: StandardReferenceContent = {
  id: 'standard-reference-codex-maximum-residue-limits',
  slug: 'codex-maximum-residue-limits',
  contentType: 'standard-reference',
  title: 'Codex Maximum Residue Limits',
  alternativeNames: [
    'Codex MRLs',
    'CXLs',
    'Codex pesticide residue limits',
    'Maximum residue limits',
  ],
  category: 'Standard',
  subcategory: 'Residues and contaminants',
  standardClass: 'standard',
  standardDomain: 'food-safety',
  summary:
    'Codex maximum residue limits are internationally adopted limits for pesticide and veterinary drug residues in specific commodities. They are the international reference under the WTO SPS Agreement — but national MRLs frequently differ from them, and it is the importing country’s limit that decides a consignment.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A maximum residue limit is the highest concentration of a residue of a pesticide or veterinary drug legally permitted in or on a specified food or feed commodity. Codex adopts such limits — commonly called CXLs — commodity by commodity and substance by substance, on the basis of independent scientific advice from expert bodies convened by FAO and WHO. Each limit is its own adopted text with its own history; there is no single document called "the Codex MRLs".',
    },
    {
      type: 'paragraph',
      text: 'The concept behind an MRL is more often misunderstood than the numbers are. An MRL is not a safety threshold in the sense of a line above which food becomes dangerous. It is derived principally from what residue remains when a substance is used correctly according to good agricultural practice, and it is then checked against toxicological reference values to confirm that it is safe. An exceedance is therefore first evidence of misuse rather than proof of harm — and it is nonetheless a rejection, because the limit is the legal test.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'Codex Alimentarius Commission (FAO/WHO)',
    },
    {
      label: 'Common name',
      value: 'CXLs — Codex maximum residue limits',
    },
    {
      label: 'Unit of adoption',
      value:
        'One limit per substance–commodity pair, adopted and revised individually',
    },
    {
      label: 'Scientific basis',
      value:
        'Independent expert advice convened by FAO and WHO, on residue and toxicology data',
    },
    {
      label: 'Derived from',
      value:
        'Residues remaining under good agricultural practice, confirmed against toxicological reference values',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — enforceable only where adopted into national law',
    },
    {
      label: 'Trade role',
      value: 'The international reference standard under the WTO SPS Agreement',
    },
  ],
  sections: [
    {
      id: 'what-an-mrl-is',
      heading: 'What an MRL actually is',
      body: [
        {
          type: 'paragraph',
          text: 'An MRL answers a specific question: if this substance is used on this crop in the approved way, what residue is left at harvest? The limit is set at or near the upper end of the residues found in supervised trials reflecting that approved use. It is then verified against health-based reference values to confirm that dietary exposure at the limit remains acceptable. The result is a limit that is simultaneously a good-practice test and a safety-verified one — which is why it does double duty and why it is so easily misread.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Good agricultural practice basis',
              description:
                'The limit reflects correct, approved use of the substance — dose, timing, and pre-harvest interval. Residue above it indicates use outside that pattern.',
            },
            {
              term: 'Toxicological verification',
              description:
                'The limit is checked against health-based reference values so that exposure at the limit is acceptable. This confirms the limit; it does not define it.',
            },
            {
              term: 'Substance–commodity specificity',
              description:
                'A limit exists for a named substance in a named commodity. A limit for one crop says nothing about another, and absence of a limit is not permission.',
            },
            {
              term: 'Residue definition',
              description:
                'What is actually measured — parent compound, metabolites, or both — is defined per substance and can differ between authorities for the same substance.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'An exceedance is a compliance failure, not automatically a health risk',
          text: 'Because MRLs are set from good-practice residues and then safety-verified, a residue above the limit usually signals misuse rather than danger. It is still a legal breach and still grounds for rejection. Both statements are true and neither excuses the other.',
        },
      ],
    },
    {
      id: 'codex-versus-national',
      heading: 'Why Codex limits and national limits differ',
      body: [
        {
          type: 'paragraph',
          text: 'This is the single most consequential fact on the page. Codex MRLs are an international reference; they are not the law anywhere. National and regional authorities set their own MRLs, and those routinely differ from Codex — sometimes because the authority assessed the same data differently, sometimes because a use is not approved in that country at all, sometimes because the authority has not adopted a Codex limit, and sometimes because policy sets a default limit where no specific one exists.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence for a trader is blunt: conformity with a Codex MRL does not make a consignment admissible anywhere. The operative test is the importing country’s limit for that substance in that commodity, in force on the day of import, measured against that country’s residue definition and sampling rules. A consignment fully compliant at origin and fully compliant with Codex can still be rejected at destination, and this is the ordinary mechanism of residue rejections rather than an anomaly.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The absence of a limit is not a permission',
          text: 'Where an authority has set no MRL for a substance–commodity pair, many jurisdictions apply a default limit at or near the limit of determination. That is frequently stricter than any specific limit would have been, so "no MRL" often means "effectively zero", not "unrestricted".',
        },
      ],
    },
    {
      id: 'role-in-trade',
      heading: 'Role under the SPS Agreement',
      body: [
        {
          type: 'paragraph',
          text: 'Codex MRLs carry weight in trade law because the WTO SPS Agreement designates Codex as the international standard-setting body for food safety. A member whose residue measures conform to the relevant Codex limit is presumed to be consistent with its SPS obligations; a member setting a stricter limit may be asked to justify it on scientific grounds. This does not oblige any member to adopt a CXL, and many do not.',
        },
        {
          type: 'paragraph',
          text: 'The result is a system where Codex limits function as a reference point and a negotiating baseline rather than as a harmonised rule. Divergence between Codex and national limits is a recognised, persistent, and largely unresolved friction in agricultural trade — and it is the mechanism behind a large share of border rejections of fresh produce and other treated commodities.',
        },
      ],
    },
    {
      id: 'not-covered',
      heading: 'What this page does not give you',
      body: [
        {
          type: 'paragraph',
          text: 'No limit values appear on AgricultureID, for any substance, in any commodity, under Codex or any national authority. This is deliberate and not a gap. A residue limit is meaningful only together with its residue definition, its commodity definition, its sampling and analysis rules, and its date of application — and it changes. A number reproduced without that apparatus, or reproduced accurately and then left to age, is worse than no number, because it invites reliance.',
        },
        {
          type: 'list',
          items: [
            'No Codex MRL values — consult the Commission’s official database of adopted limits',
            'No national or regional MRL values — consult the importing authority’s own current instrument',
            'No residue definitions, sampling rules, or analytical methods',
            'No statement of which uses are approved in any country',
            'No assessment of whether any consignment complies',
          ],
        },
      ],
    },
  ],
  standardBody:
    'Codex Alimentarius Commission — the joint FAO/WHO food standards body, advised by independent expert bodies convened by FAO and WHO',
  standardIdentifier:
    'Codex maximum residue limits (CXLs) — adopted individually per substance and commodity',
  edition:
    'Edition not stated here — Codex MRLs are adopted and revised individually, limit by limit, and there is no single dated edition. Verify each limit against the Commission’s current official database.',
  jurisdiction:
    'Global reference. Codex MRLs have no direct legal force in any jurisdiction and apply only where adopted into national or regional law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Internationally adopted maximum residue limits for pesticides and veterinary drugs in named food and feed commodities, established on independent scientific advice from residue and toxicology data. Each limit covers one substance in one commodity, is derived principally from residues remaining under approved good agricultural practice, and is verified against health-based reference values. Scope is limit by limit; there is no general Codex residue rule.',
  conformityAssessment:
    'None at the Codex level. Codex operates no testing, sampling, or certification. Residue conformity is assessed by importing and exporting authorities, and by trading parties, through sampling and laboratory analysis against whichever limit and residue definition the applicable law specifies — which may or may not be the Codex limit.',
  assessedBy:
    'National and regional competent authorities at import and export, and laboratories acting for authorities or trading parties. The Codex Alimentarius Commission tests nothing.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page explains what a maximum residue limit is and how Codex MRLs relate to national limits. It reproduces no residue limit, value, tolerance, or residue definition, for any substance or commodity, under Codex or any national authority.',
    'No numerical limit is stated anywhere on AgricultureID. Limits are meaningless without their residue definition, commodity definition, sampling and analytical rules, and date of application, and they are revised — consult the official instrument directly.',
    'Codex texts and databases are copyrighted publications of FAO and WHO. Verify each limit against the Commission’s current official database.',
    'Codex limits are not the law. The operative limit for any consignment is that of the importing jurisdiction, in force at the time of import, which frequently differs from Codex.',
    'AgricultureID is not a certification body, accreditation body, laboratory, or competent authority, assesses no consignment, and confers no recognition.',
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'fruit',
    'vegetable',
    'oilseed',
    'pulse',
    'nut',
    'beverage-crop',
    'livestock-product',
    'spice',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'eu-organic-regulation' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The nature, scientific basis, and adoption of Codex maximum residue limits',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Residue risk-assessment concepts and the relationship between MRLs and health-based reference values',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The status of Codex limits as the international reference standard under the SPS Agreement',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Good agricultural practice as the basis on which residue limits are derived',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global reference with no direct legal effect. Applicable limits are national or regional and differ from Codex and from one another; divergence is the norm rather than the exception.',
  limitations: [
    'An explanation of what MRLs are and how the Codex and national layers relate — not a source of limit values, and not regulatory or compliance advice.',
    'No limit values, residue definitions, sampling rules, or analytical methods are reproduced for any substance or commodity.',
    'Conformity with a Codex limit does not make a consignment admissible anywhere; the importing country’s limit governs.',
    'Which substances are approved for which uses in which countries is outside the scope of this page and changes continually.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Codex Maximum Residue Limits: What an MRL Is and Is Not',
    description:
      'What a Codex maximum residue limit is, why it reflects good agricultural practice rather than a danger threshold, and why national MRLs decide admissibility.',
    keywords: [
      'Codex MRL',
      'maximum residue limit',
      'CXL',
      'pesticide residues',
      'residue exceedance',
    ],
  },
  structuredData: { article: true },
};
