import { describe, it, expect } from 'vitest';
import {
  parseConsent,
  makeRecord,
  serializeConsent,
  readConsent,
  writeConsent,
  clearConsent,
} from '@/lib/consent/storage';
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  CONSENT_MAX_AGE_MS,
} from '@/lib/consent/config';

const NOW = Date.parse('2026-07-19T12:00:00.000Z');

/** Minimal in-memory Storage for node tests. */
function fakeStorage(initial: Record<string, string> = {}): Storage {
  const m = new Map(Object.entries(initial));
  return {
    getItem: (k) => (m.has(k) ? (m.get(k) as string) : null),
    setItem: (k, v) => void m.set(k, String(v)),
    removeItem: (k) => void m.delete(k),
    clear: () => m.clear(),
    key: (i) => [...m.keys()][i] ?? null,
    get length() {
      return m.size;
    },
  } as Storage;
}

/** Storage that throws on every access (models private-mode / denial). */
const throwingStorage: Storage = {
  getItem() {
    throw new Error('denied');
  },
  setItem() {
    throw new Error('denied');
  },
  removeItem() {
    throw new Error('denied');
  },
  clear() {},
  key() {
    return null;
  },
  length: 0,
} as Storage;

const validRaw = (analytics: boolean, decidedAt = '2026-07-18T00:00:00.000Z') =>
  JSON.stringify({
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    decidedAt,
  });

describe('parseConsent — fails closed', () => {
  it('treats no stored value as undecided, analytics off', () => {
    const s = parseConsent(null, NOW);
    expect(s.status).toBe('undecided');
    expect(s.analytics).toBe(false);
    expect(s.necessary).toBe(true);
  });

  it('treats malformed JSON as undecided', () => {
    expect(parseConsent('{not json', NOW).status).toBe('undecided');
    expect(parseConsent('42', NOW).status).toBe('undecided');
    expect(parseConsent('null', NOW).status).toBe('undecided');
  });

  it('treats an unsupported version as undecided (re-ask)', () => {
    const older = JSON.stringify({
      version: CONSENT_VERSION - 1,
      necessary: true,
      analytics: true,
      decidedAt: '2026-07-18T00:00:00.000Z',
    });
    const newer = JSON.stringify({
      version: CONSENT_VERSION + 1,
      necessary: true,
      analytics: true,
      decidedAt: '2026-07-18T00:00:00.000Z',
    });
    expect(parseConsent(older, NOW)).toMatchObject({
      status: 'undecided',
      analytics: false,
    });
    expect(parseConsent(newer, NOW)).toMatchObject({
      status: 'undecided',
      analytics: false,
    });
  });

  it('rejects records that do not affirm necessary=true', () => {
    const raw = JSON.stringify({
      version: CONSENT_VERSION,
      necessary: false,
      analytics: true,
      decidedAt: '2026-07-18T00:00:00.000Z',
    });
    expect(parseConsent(raw, NOW).status).toBe('undecided');
  });

  it('rejects a non-boolean analytics value', () => {
    const raw = JSON.stringify({
      version: CONSENT_VERSION,
      necessary: true,
      analytics: 'yes',
      decidedAt: '2026-07-18T00:00:00.000Z',
    });
    expect(parseConsent(raw, NOW).status).toBe('undecided');
  });

  it('rejects an invalid or missing decidedAt', () => {
    const raw = JSON.stringify({
      version: CONSENT_VERSION,
      necessary: true,
      analytics: true,
      decidedAt: 'not-a-date',
    });
    expect(parseConsent(raw, NOW).status).toBe('undecided');
  });
});

describe('parseConsent — honours a valid decision', () => {
  it('accepts a stored analytics opt-in', () => {
    const s = parseConsent(validRaw(true), NOW);
    expect(s).toMatchObject({
      status: 'decided',
      necessary: true,
      analytics: true,
    });
    expect(s.decidedAt).toBe('2026-07-18T00:00:00.000Z');
  });

  it('accepts a stored analytics opt-out', () => {
    expect(parseConsent(validRaw(false), NOW)).toMatchObject({
      status: 'decided',
      analytics: false,
    });
  });
});

describe('parseConsent — expiry', () => {
  it('honours a decision just inside the retention window', () => {
    const decidedAt = new Date(NOW - CONSENT_MAX_AGE_MS + 60_000).toISOString();
    expect(parseConsent(validRaw(true, decidedAt), NOW).status).toBe('decided');
  });

  it('re-asks once a decision is older than the retention window', () => {
    const decidedAt = new Date(NOW - CONSENT_MAX_AGE_MS - 60_000).toISOString();
    const s = parseConsent(validRaw(true, decidedAt), NOW);
    expect(s.status).toBe('undecided');
    expect(s.analytics).toBe(false);
  });
});

describe('serialize / makeRecord round-trip', () => {
  it('produces a record that parses back to the same decision', () => {
    const rec = makeRecord(true, NOW);
    expect(rec).toMatchObject({
      version: CONSENT_VERSION,
      necessary: true,
      analytics: true,
    });
    expect(rec.decidedAt).toBe(new Date(NOW).toISOString());
    const back = parseConsent(serializeConsent(rec), NOW);
    expect(back).toMatchObject({ status: 'decided', analytics: true });
  });
});

describe('readConsent / writeConsent with storage', () => {
  it('reads undecided from an empty store', () => {
    expect(readConsent(NOW, fakeStorage()).status).toBe('undecided');
  });

  it('reads a previously written decision back', () => {
    const store = fakeStorage();
    const written = writeConsent(true, NOW, store);
    expect(written).toMatchObject({ status: 'decided', analytics: true });
    // Persisted under the documented key.
    expect(store.getItem(CONSENT_STORAGE_KEY)).toContain('"analytics":true');
    expect(readConsent(NOW, store)).toMatchObject({
      status: 'decided',
      analytics: true,
    });
  });

  it('writes an opt-out that reads back as decided + analytics off', () => {
    const store = fakeStorage();
    writeConsent(false, NOW, store);
    expect(readConsent(NOW, store)).toMatchObject({
      status: 'decided',
      analytics: false,
    });
  });

  it('fails closed when storage access is denied', () => {
    expect(readConsent(NOW, throwingStorage).status).toBe('undecided');
    // A failed write reports undecided rather than a false "saved" decision.
    expect(writeConsent(true, NOW, throwingStorage).status).toBe('undecided');
  });

  it('clearConsent removes the record', () => {
    const store = fakeStorage();
    writeConsent(true, NOW, store);
    clearConsent(store);
    expect(store.getItem(CONSENT_STORAGE_KEY)).toBeNull();
    expect(readConsent(NOW, store).status).toBe('undecided');
  });

  it('never stores an identifier, IP, or analytics payload', () => {
    const store = fakeStorage();
    writeConsent(true, NOW, store);
    const raw = store.getItem(CONSENT_STORAGE_KEY)!;
    const keys = Object.keys(JSON.parse(raw)).sort();
    expect(keys).toEqual(['analytics', 'decidedAt', 'necessary', 'version']);
  });
});
