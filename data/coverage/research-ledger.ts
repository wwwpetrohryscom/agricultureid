import type { CoverageLayer, CoverageStatus } from '@/types/coverage';

/**
 * What was looked for, and what looking found.
 *
 * Coverage status is a claim like any other, so it needs evidence like any
 * other. "Germany: not yet indexed" and "Germany: the register was found and
 * publishes nothing that can be read without guessing" are different findings,
 * and only the second is worth anything to anyone deciding what to do next.
 *
 * Every entry here records research this program actually carried out, cites a
 * source that exists in the corpus, and carries the date it was done. An
 * absence with no entry stays `notResearched`, which is the commonest honest
 * answer and says nothing more than itself.
 *
 * ## Two notes, one for readers and one for the backlog
 *
 * `note` is what a reader is told. `internalNote` is the technical detail that
 * decides what to do next — an HTTP status, a missing bulk export, a robots
 * rule — and it never reaches a page. A reader needs to know whether to trust a
 * blank; they do not need a 403.
 */
export interface ResearchRecord {
  layer: CoverageLayer;
  /** ISO 3166-1 alpha-3, or a supranational key. */
  jurisdiction: string;
  status: CoverageStatus;
  note: string;
  internalNote: string;
  sourceIds: string[];
  verifiedAt: string;
}

export const RESEARCH_LEDGER: readonly ResearchRecord[] = [
  /* -- Wave 15: national pesticide registers probed for a bulk export ------ */
  {
    layer: 'inputs',
    jurisdiction: 'GBR',
    status: 'researchedSourceNotIngestible',
    note: 'The United Kingdom’s official pesticide register was found and read in a browser. It publishes its records through a search form and offers no bulk file, so they cannot be indexed here without scraping the search interface.',
    internalNote:
      'HSE pesticides register: no bulk export or documented API. A register read by scraping a search form is not provenance this layer accepts.',
    sourceIds: ['reg-hse-pesticides-register'],
    verifiedAt: '2026-08-27',
  },
  {
    layer: 'inputs',
    jurisdiction: 'NLD',
    status: 'researchedSourceNotIngestible',
    note: 'The Netherlands’ official pesticide register was found and read in a browser. It publishes its records through a search interface and offers no bulk file.',
    internalNote: 'Ctgb toelatingen: no bulk export or documented API.',
    sourceIds: ['reg-ctgb-toelatingen'],
    verifiedAt: '2026-08-27',
  },
  {
    layer: 'inputs',
    jurisdiction: 'ESP',
    status: 'researchedSourceNotIngestible',
    note: 'Spain’s official pesticide register was found and read in a browser. Its published extract could not be verified in a form this corpus can ingest without inference.',
    internalNote:
      'MAPA registro de productos fitosanitarios: download exists but was not verifiable as a stable, documented extract during Wave 15.',
    sourceIds: ['reg-mapa-registro-fitosanitarios'],
    verifiedAt: '2026-08-27',
  },
  {
    layer: 'inputs',
    jurisdiction: 'USA',
    status: 'researchedSourceNotIngestible',
    note: 'The United States pesticide product label system was found and read in a browser. It publishes labels rather than a structured register of authorisations, so there is nothing here to index as authorisation records.',
    internalNote:
      'EPA PPLS: label images and documents, no structured authorisation extract.',
    sourceIds: ['reg-epa-ppls'],
    verifiedAt: '2026-08-27',
  },

  /* -- Wave 23: soil datasets ---------------------------------------------- */
  {
    layer: 'soils',
    jurisdiction: 'GLOBAL',
    status: 'researchedSourceNotIngestible',
    note: 'A global modelled soil dataset was found and read. It predicts soil properties for grid cells rather than describing mapped soil bodies, and placing those beside a survey’s own units as though they were the same kind of fact would misdescribe both.',
    internalNote:
      'ISRIC SoilGrids v2.0 REST API: works, returns 250 m raster-cell predictions. Needs its own spatial basis (`raster-cell`) and its own contract before it can be ingested; merging it into the SSURGO contract would be scale conflation.',
    sourceIds: ['isric'],
    verifiedAt: '2026-08-27',
  },

  /* -- Wave 18: variety registers ------------------------------------------ */
  {
    layer: 'varieties',
    jurisdiction: 'JPN',
    status: 'researchedSourceNotIngestible',
    note: 'Japan’s plant variety registration database was found and searched. It publishes variety denominations in Japanese script only, so a name in this corpus cannot be identical to one in that register, and identity here is established by identical names.',
    internalNote:
      'MAFF hinshu2 VIPS: romanised queries return no records; コシヒカリ and 日本晴 have no registration of their own — both predate the system and only later derived BL lines are registered.',
    sourceIds: ['jp-maff'],
    verifiedAt: '2026-08-27',
  },
  {
    layer: 'varieties',
    jurisdiction: 'GLOBAL',
    status: 'researchedSourceInaccessible',
    note: 'The international variety database that would have covered several jurisdictions at once was identified but not read, because its publisher’s access rules do not permit it.',
    internalNote:
      'UPOV PLUTO: upov.int/robots.txt disallows /pluto/. Not read; not worked around.',
    sourceIds: ['upov'],
    verifiedAt: '2026-08-27',
  },
];

/**
 * Structural rules for a layer that does not arise at a level of government.
 *
 * These are not gaps. An input authorisation is a national decision under a
 * national statute; a US state does not issue one, and rendering "not yet
 * indexed" against Wyoming would invite a reader to wait for something that is
 * never coming.
 */
export interface NotApplicableRule {
  layer: CoverageLayer;
  level: 'subnational';
  why: string;
}

export const NOT_APPLICABLE_RULES: readonly NotApplicableRule[] = [
  {
    layer: 'inputs',
    level: 'subnational',
    why: 'Authorisation of a plant protection product is a national decision under national law. A state, province or territory does not issue one.',
  },
  {
    layer: 'varieties',
    level: 'subnational',
    why: 'Variety registration and plant variety rights are granted nationally or supranationally. A subdivision maintains no register of its own.',
  },
  {
    layer: 'markets',
    level: 'subnational',
    why: 'The statistical series in this corpus are reported by national statistical authorities to international bodies, and are published at country level only.',
  },
  {
    layer: 'regulations',
    level: 'subnational',
    why: 'The compliance topics here are national or supranational instruments. Subnational rules exist but are a different subject, not a missing part of this one.',
  },
  {
    layer: 'biosecurity',
    level: 'subnational',
    why: 'The listings here are recommendations by an intergovernmental organisation to its member countries. A subdivision is not a member.',
  },
  {
    layer: 'support',
    level: 'subnational',
    why: 'The programmes here are national or supranational schemes. Subnational schemes exist and are outside what this layer indexes.',
  },
  {
    layer: 'extension',
    level: 'subnational',
    why: 'Extension services are indexed by the institution that publishes them, not by the subdivision they serve.',
  },
  {
    layer: 'registries',
    level: 'subnational',
    why: 'A registry is indexed against the government that operates it. Those operated by a subdivision are recorded against that subdivision directly, not as a gap in the national row.',
  },
];
