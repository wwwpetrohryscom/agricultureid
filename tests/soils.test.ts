import { describe, expect, it } from 'vitest';
import {
  BASIS_MAY_AGGREGATE,
  CATEGORICAL_PROPERTIES,
  CLASSIFICATION_SYSTEMS,
  CLASSIFICATION_VALUES,
  SOIL_EVIDENCE_CLASSES,
  SOIL_PROPERTIES,
  SOIL_PROPERTY_UNIT,
  SPATIAL_BASES,
} from '@/types/soil';
import {
  RESERVED_EVIDENCE_CLASSES,
  SOIL_DATASET_CONTRACTS,
  SOIL_DATASET_CONTRACT_MAP,
} from '@/lib/soils/contracts';
import {
  allSoilObservations,
  classificationsPresent,
  jurisdictionsCovered,
  propertySummary,
  soilBodiesIn,
  soilSnapshot,
} from '@/lib/soils/registry';
import { ZONES } from '@/data/geo/zones';
import { regionProfilesData } from '@/data/geo/regions';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { allCountryCoverage } from '@/lib/coverage/derive';

const OBS = allSoilObservations();
const DOCS = buildSearchDocuments();

describe('soils — a representative value is not a measurement', () => {
  it('takes the evidence class from the dataset, never from the record', () => {
    // A row cannot promote itself from a survey's characterisation of a mapped
    // body to a measurement of a field.
    const wrong = OBS.filter(
      (o) =>
        o.evidenceClass !==
        SOIL_DATASET_CONTRACT_MAP.get(o.sourceDatasetId)?.evidenceClass,
    ).map((o) => o.id);
    expect(wrong).toEqual([]);
    expect(new Set(OBS.map((o) => o.evidenceClass))).toEqual(
      new Set(['classified']),
    );
  });

  it('reserves the classes nothing produces, with a reason', () => {
    const produced = new Set(OBS.map((o) => o.evidenceClass));
    const reserved = new Set(
      RESERVED_EVIDENCE_CLASSES.map((r) => r.evidenceClass),
    );
    for (const c of SOIL_EVIDENCE_CLASSES)
      expect(produced.has(c) || reserved.has(c), c).toBe(true);
    for (const r of RESERVED_EVIDENCE_CLASSES) {
      expect(produced.has(r.evidenceClass), r.evidenceClass).toBe(false);
      expect(r.why.length).toBeGreaterThan(40);
    }
  });
});

describe('soils — scale travels with the value', () => {
  it('publishes nothing at a scale its source does not', () => {
    const wrong = OBS.filter(
      (o) =>
        o.spatialBasis !==
        SOIL_DATASET_CONTRACT_MAP.get(o.sourceDatasetId)?.spatialBasis,
    ).map((o) => o.id);
    expect(wrong).toEqual([]);
    expect(SPATIAL_BASES).toContain('survey-area-aggregate');
  });

  it('says how many of the source’s own units each value summarises', () => {
    // Without this a number is unattributable: a value across 61 map units in
    // 35 survey areas is a different claim from one seen once.
    const bad = OBS.filter(
      (o) =>
        o.unitsCovered.surveyAreas < 1 ||
        o.unitsCovered.mapUnits < o.unitsCovered.surveyAreas,
    ).map((o) => o.id);
    expect(bad).toEqual([]);
  });

  it('reports a jurisdiction as a spread, never as one number', () => {
    const ph = propertySummary('US-IA', 'pH')!;
    expect(ph.min).toBeLessThan(ph.max);
    expect(ph.bodies).toBeGreaterThan(100);
  });
});

describe('soils — an agroecological zone is not a jurisdiction', () => {
  it('never uses a zone id as a jurisdiction', () => {
    // A zone crosses borders and has no government. Putting one in a column a
    // reader reads as a state would misdescribe both.
    const zoneIds = new Set(ZONES.map((z) => z.zoneId));
    const leaked = OBS.filter((o) => zoneIds.has(o.jurisdictionId)).map(
      (o) => o.id,
    );
    expect(leaked).toEqual([]);
    for (const c of SOIL_DATASET_CONTRACTS)
      for (const j of c.jurisdictionIds) expect(zoneIds.has(j)).toBe(false);
  });

  it('references only region profiles that already exist', () => {
    // This layer never brings a region profile into being.
    const slugs = new Set(regionProfilesData.map((r) => r.slug));
    const dangling = OBS.filter(
      (o) => o.regionRef && !slugs.has(o.regionRef),
    ).map((o) => o.id);
    expect(dangling).toEqual([]);
  });
});

describe('soils — a contract cannot declare a scale the arithmetic denies', () => {
  it('refuses a non-aggregating basis on a value that aggregates', () => {
    // A contract can declare any scale and every record agrees with it, because
    // records take the scale from the contract. The arithmetic cannot be faked:
    // a value summarising 61 map units is not a point observation.
    const impossible = OBS.filter(
      (o) =>
        !BASIS_MAY_AGGREGATE[o.spatialBasis] &&
        (o.unitsCovered.mapUnits > 1 || o.unitsCovered.surveyAreas > 1),
    ).map((o) => o.id);
    expect(impossible).toEqual([]);
  });

  it('knows which bases may summarise more than one unit', () => {
    expect(BASIS_MAY_AGGREGATE.point).toBe(false);
    expect(BASIS_MAY_AGGREGATE['raster-cell']).toBe(false);
    expect(BASIS_MAY_AGGREGATE['survey-area-aggregate']).toBe(true);
  });
});

describe('soils — classification systems are not interchangeable', () => {
  it('checks the VALUES against the system that claims them', () => {
    // Naming a system is not enough. A dataset relabelling its values as
    // another system's passes every consistency check — record and contract
    // agree, and are both wrong.
    const wrong = OBS.filter((o) => {
      if (!o.classification) return false;
      const permitted = CLASSIFICATION_VALUES[o.classification.system];
      return o.classification.value
        .split(' to ')
        .some((part) => !permitted.includes(part.trim()));
    }).map((o) => o.id);
    expect(wrong).toEqual([]);
  });

  it('keeps each system’s vocabulary closed and distinct', () => {
    const usda = CLASSIFICATION_VALUES['USDA Soil Taxonomy'];
    const wrb =
      CLASSIFICATION_VALUES['World Reference Base for Soil Resources'];
    expect(usda).toHaveLength(12);
    expect(new Set(usda).size).toBe(usda.length);
    expect(new Set(wrb).size).toBe(wrb.length);
    // They share a couple of names and are not translations of each other;
    // that overlap is exactly why a name match must never be a crosswalk.
    expect(usda.filter((v) => wrb.includes(v))).toEqual([
      'Histosols',
      'Vertisols',
    ]);
  });

  it('names the system on every classification', () => {
    const unnamed = OBS.filter(
      (o) =>
        o.classification &&
        !CLASSIFICATION_SYSTEMS.includes(o.classification.system),
    ).map((o) => o.id);
    expect(unnamed).toEqual([]);
    expect(
      new Set(OBS.map((o) => o.classification?.system).filter(Boolean)),
    ).toEqual(new Set(['USDA Soil Taxonomy']));
  });

  it('states variation rather than choosing', () => {
    // 500 soil bodies are classified into more than one order within a state.
    // Publishing one would invent a certainty the survey does not have.
    const varying = classificationsPresent().filter((c) =>
      c.value.includes(' to '),
    );
    expect(varying.length).toBeGreaterThan(0);
    const unflagged = OBS.filter(
      (o) =>
        o.classification?.value.includes(' to ') && !o.classification.varies,
    ).map((o) => o.id);
    expect(unflagged).toEqual([]);
  });
});

describe('soils — values keep their units and stay possible', () => {
  it('pins a unit to every numeric property and uses it', () => {
    const wrong = OBS.filter((o) => {
      if (CATEGORICAL_PROPERTIES.includes(o.property)) return Boolean(o.unit);
      return o.unit !== SOIL_PROPERTY_UNIT[o.property];
    }).map((o) => o.id);
    expect(wrong).toEqual([]);
  });

  it('refuses impossible pH, percentages and depths', () => {
    const impossible = OBS.filter((o) => {
      if (o.property === 'pH' && o.range)
        return o.range.min < 0 || o.range.max > 14;
      if (
        ['clayContent', 'sandContent', 'siltContent'].includes(o.property) &&
        o.range
      )
        return o.range.min < 0 || o.range.max > 100;
      if (o.depthRange) return o.depthRange.minCm >= o.depthRange.maxCm;
      return false;
    }).map((o) => o.id);
    expect(impossible).toEqual([]);
  });

  it('keeps the mean inside the range it came from', () => {
    const outside = OBS.filter(
      (o) =>
        o.range &&
        !(o.range.min <= o.range.mean && o.range.mean <= o.range.max),
    ).map((o) => o.id);
    expect(outside).toEqual([]);
  });
});

describe('soils — presence is not suitability', () => {
  it('links no crop to any soil', () => {
    // The corpus does carry editorial crop→soil-type links. This layer adds
    // none: that a crop is grown where a soil occurs is not evidence.
    const leaked = OBS.filter((o) =>
      ['cropRef', 'suitableCrops', 'suitability'].some(
        (k) => k in (o as unknown as Record<string, unknown>),
      ),
    ).map((o) => o.id);
    expect(leaked).toEqual([]);
  });
});

describe('soils — identity, wiring and integration', () => {
  it('never merges two soil bodies the survey keeps apart', () => {
    // SSURGO publishes both `Xerorthents` and `Xerorthents,` in California.
    // A slug turned them into one and the id scheme had to change.
    for (const c of SOIL_DATASET_CONTRACTS) {
      const snap = soilSnapshot(c);
      const inBodies = new Set(
        snap.rows.map((r) => `${r.stateCode}|${r.series}`),
      );
      const outBodies = new Set(
        OBS.filter((o) => o.sourceDatasetId === c.datasetId).map(
          (o) => `${o.jurisdictionId}|${o.soilBody}`,
        ),
      );
      expect(outBodies.size, c.datasetId).toBe(inBodies.size);
    }
    const ids = OBS.map((o) => o.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('fails closed for a dataset with no contract', () => {
    expect(SOIL_DATASET_CONTRACT_MAP.get('not-a-dataset')).toBeUndefined();
  });

  it('reaches every property in the vocabulary', () => {
    const used = new Set(OBS.map((o) => o.property));
    for (const p of SOIL_PROPERTIES) expect(used, p).toContain(p);
  });

  it('publishes one hub and no page per soil body', () => {
    // 13,390 soil-body pages would each hold less than the survey row behind it.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain('/soil-surveys');
    expect(paths.filter((p) => p.startsWith('/soil-surveys/'))).toHaveLength(0);
  });

  it('leaves the soil-type reference hub where it was', () => {
    // `/soils` is the index of twenty-one soil-type reference pages and answers
    // a different question. The survey layer took that path once and had to
    // give it back.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain('/soils');
    expect(paths.filter((p) => p.startsWith('/soils/')).length).toBeGreaterThan(
      15,
    );
  });

  it('indexes one hub document that cannot outrank the soil-type pages', () => {
    const docs = DOCS.filter((d) => d.type === 'soil-observation');
    expect(docs).toHaveLength(1);
    // "clay soil" and "soil pH" belong to the existing soil and soil-topic
    // pages; carrying them at name weight here would take those queries.
    expect(
      docs[0]!.names.some((n) => /clay soil|soil ph|chernozem|loam/i.test(n)),
    ).toBe(false);
  });

  it('gives the coverage layer a soils dimension without hand-maintaining it', () => {
    const soils = allCountryCoverage().filter((c) => c.layer === 'soils');
    expect(soils.length).toBeGreaterThan(0);
    const usa = soils.find((c) => c.jurisdiction === 'USA')!;
    expect(usa.status).toBe('verified');
    expect(usa.recordCount).toBe(OBS.length);
    // Every other country is not-yet-indexed, never "no soil survey exists".
    expect(
      soils
        .filter((c) => c.jurisdiction !== 'USA')
        .every((c) => c.status === 'notResearched'),
    ).toBe(true);
  });

  it('covers the thirteen jurisdictions its contract declares', () => {
    expect(jurisdictionsCovered()).toHaveLength(13);
    expect(soilBodiesIn('US-IA').length).toBeGreaterThan(500);
    expect(soilBodiesIn('US-XX')).toEqual([]);
  });
});
