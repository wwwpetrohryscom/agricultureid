import { describe, it, expect } from 'vitest';
import {
  extractLinks,
  classifyHref,
  normalizeInternalPath,
  internalTargets,
  extractCanonical,
  extractRobots,
  isNoindex,
} from '@/lib/seo/rendered-links';

const ORIGIN = 'https://agricultureid.com';
const opts = { origin: ORIGIN };

/** Wrap fixture markup in a minimal document. */
function doc(body: string): string {
  return `<!doctype html><html><head><title>t</title></head><body>${body}</body></html>`;
}

describe('normalizeInternalPath', () => {
  it('strips a trailing slash but keeps the root', () => {
    expect(normalizeInternalPath('/crops/')).toBe('/crops');
    expect(normalizeInternalPath('/crops/wheat/')).toBe('/crops/wheat');
    expect(normalizeInternalPath('/')).toBe('/');
    expect(normalizeInternalPath('///')).toBe('/');
  });

  it('strips index.html and .html suffixes', () => {
    expect(normalizeInternalPath('/index.html')).toBe('/');
    expect(normalizeInternalPath('/crops/index.html')).toBe('/crops');
    expect(normalizeInternalPath('/crops/wheat.html')).toBe('/crops/wheat');
  });

  it('decodes percent-encoding', () => {
    expect(normalizeInternalPath('/crops/sugar%20beet')).toBe(
      '/crops/sugar beet',
    );
    expect(normalizeInternalPath('/crops/ma%C3%AFze')).toBe('/crops/maïze');
  });

  it('keeps case, because path segments are case-sensitive', () => {
    // Lower-casing here would silently hide a genuinely broken link.
    expect(normalizeInternalPath('/Crops/Wheat')).toBe('/Crops/Wheat');
  });

  it('tolerates malformed percent-encoding without throwing', () => {
    expect(() => normalizeInternalPath('/crops/%E0%A4%A')).not.toThrow();
    expect(normalizeInternalPath('/crops/%E0%A4%A')).toBe('/crops/%E0%A4%A');
  });

  it('adds a leading slash when absent', () => {
    expect(normalizeInternalPath('crops')).toBe('/crops');
  });
});

describe('classifyHref', () => {
  it('treats a root-relative href as internal', () => {
    const l = classifyHref('/crops/wheat', opts);
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/crops/wheat');
  });

  it('treats an absolute URL on the site origin as internal', () => {
    const l = classifyHref('https://agricultureid.com/crops/wheat', opts);
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/crops/wheat');
  });

  it('resolves a document-relative href against the page path', () => {
    const l = classifyHref('barley', { origin: ORIGIN, basePath: '/crops/' });
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/crops/barley');
  });

  it('resolves dot-segment relative hrefs', () => {
    const l = classifyHref('../soils/loam', {
      origin: ORIGIN,
      basePath: '/crops/wheat',
    });
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/soils/loam');
  });

  it('classifies a protocol-relative href by its host', () => {
    expect(classifyHref('//example.com/x', opts).kind).toBe('external');
    const own = classifyHref('//agricultureid.com/crops', opts);
    expect(own.kind).toBe('internal');
    expect(own.path).toBe('/crops');
  });

  it('honours extra internal hosts', () => {
    const l = classifyHref('https://preview.example.dev/crops', {
      origin: ORIGIN,
      internalHosts: ['preview.example.dev'],
    });
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/crops');
  });

  it('classifies external hosts as external', () => {
    expect(classifyHref('https://fao.org/x', opts).kind).toBe('external');
    expect(classifyHref('http://example.com', opts).kind).toBe('external');
    expect(classifyHref('https://fao.org/x', opts).path).toBeNull();
  });

  it('classifies same-page fragments as fragment, not internal', () => {
    for (const raw of ['#x', '#', '', '   ']) {
      const l = classifyHref(raw, opts);
      expect(l.kind).toBe('fragment');
      expect(l.path).toBeNull();
    }
  });

  it('strips a fragment from a real page link', () => {
    const l = classifyHref('/crops/wheat#agronomy', opts);
    expect(l.kind).toBe('internal');
    expect(l.path).toBe('/crops/wheat');
  });

  it('strips a query string', () => {
    expect(classifyHref('/explore?q=wheat', opts).path).toBe('/explore');
    expect(classifyHref('/explore?q=a&b=c#frag', opts).path).toBe('/explore');
  });

  it('classifies mailto and tel', () => {
    expect(classifyHref('mailto:editorial@agricultureid.com', opts).kind).toBe(
      'mailto',
    );
    expect(classifyHref('MAILTO:X@Y.COM', opts).kind).toBe('mailto');
    expect(classifyHref('tel:+441234567890', opts).kind).toBe('tel');
    expect(classifyHref('mailto:a@b.com', opts).path).toBeNull();
  });

  it('classifies other schemes as other', () => {
    expect(classifyHref('javascript:void(0)', opts).kind).toBe('other');
    expect(classifyHref('data:text/html,x', opts).kind).toBe('other');
    expect(classifyHref('ftp://example.com/f', opts).kind).toBe('other');
  });

  it('flags trailing-slash and .html hrefs as redirecting', () => {
    expect(classifyHref('/crops/', opts).redirecting).toBe(true);
    expect(classifyHref('/crops/wheat.html', opts).redirecting).toBe(true);
    expect(classifyHref('/crops', opts).redirecting).toBe(false);
    // The root is served at "/" and does not redirect.
    expect(classifyHref('/', opts).redirecting).toBe(false);
    // …but it still normalises to the root.
    expect(classifyHref('/crops/', opts).path).toBe('/crops');
  });

  it('is deterministic: identical input yields identical output', () => {
    const a = classifyHref('/crops/wheat?x=1#y', opts);
    const b = classifyHref('/crops/wheat?x=1#y', opts);
    expect(a).toEqual(b);
  });
});

describe('extractLinks', () => {
  it('extracts anchors in document order and preserves duplicates', () => {
    const html = doc(
      '<a href="/crops">A</a><a href="/soils">B</a><a href="/crops">C</a>',
    );
    const links = extractLinks(html, opts);
    expect(links.map((l) => l.path)).toEqual(['/crops', '/soils', '/crops']);
  });

  it('ignores <a> with no href', () => {
    const html = doc(
      '<a>no href</a><a name="anchor">named</a><a href="/x">y</a>',
    );
    const links = extractLinks(html, opts);
    expect(links).toHaveLength(1);
    expect(links.map((l) => l.path)).toEqual(['/x']);
  });

  it('reads href from single quotes and unquoted values', () => {
    const html = doc(`<a href='/single'>a</a><a href=/unquoted>b</a>`);
    expect(extractLinks(html, opts).map((l) => l.path)).toEqual([
      '/single',
      '/unquoted',
    ]);
  });

  it('finds anchors nested inside panels', () => {
    const html = doc(`
      <section class="panel">
        <div class="panel-body"><ul>
          <li><a class="x" href="/pests/aphids">Aphids</a></li>
          <li><span><a href="/pests/whiteflies">Whiteflies</a></span></li>
        </ul></div>
      </section>`);
    expect(extractLinks(html, opts).map((l) => l.path)).toEqual([
      '/pests/aphids',
      '/pests/whiteflies',
    ]);
  });

  it('handles attributes before and after href, and multiline tags', () => {
    const html = doc(
      `<a\n  class="a b"\n  data-x="1"\n  href="/crops/wheat"\n  rel="next"\n>W</a>`,
    );
    const links = extractLinks(html, opts);
    expect(links).toHaveLength(1);
    expect(links.map((l) => l.path)).toEqual(['/crops/wheat']);
  });

  it('ignores links inside HTML comments', () => {
    const html = doc('<!-- <a href="/ghost">g</a> --><a href="/real">r</a>');
    expect(extractLinks(html, opts).map((l) => l.path)).toEqual(['/real']);
  });

  it('does not mistake non-anchor tags for links', () => {
    const html = doc(
      '<link rel="canonical" href="/canon"><area href="/area"><abbr>a</abbr><a href="/real">r</a>',
    );
    expect(extractLinks(html, opts).map((l) => l.path)).toEqual(['/real']);
  });

  it('classifies a realistic mixed document', () => {
    const html = doc(`
      <a href="#main-content">Skip</a>
      <a href="/">Home</a>
      <a href="/crops/">Crops</a>
      <a href="https://agricultureid.com/soils">Soils</a>
      <a href="//agricultureid.com/pests">Pests</a>
      <a href="https://www.fao.org/faostat">FAOSTAT</a>
      <a href="mailto:editorial@agricultureid.com">Mail</a>
      <a href="tel:+15551234">Call</a>
      <a href="/crops/wheat#agronomy">Wheat</a>
      <a href="/explore?q=maize">Search</a>
      <a>dead</a>
    `);
    const links = extractLinks(html, opts);
    const kinds = links.map((l) => l.kind);
    expect(kinds).toEqual([
      'fragment',
      'internal',
      'internal',
      'internal',
      'internal',
      'external',
      'mailto',
      'tel',
      'internal',
      'internal',
    ]);
    expect(internalTargets(links)).toEqual([
      '/',
      '/crops',
      '/crops/wheat',
      '/explore',
      '/pests',
      '/soils',
    ]);
  });

  it('dedupes and excludes self-links via internalTargets', () => {
    const html = doc(
      '<a href="/crops">1</a><a href="/crops">2</a><a href="/crops/wheat">3</a>',
    );
    const links = extractLinks(html, opts);
    expect(internalTargets(links, '/crops')).toEqual(['/crops/wheat']);
    expect(internalTargets(links)).toEqual(['/crops', '/crops/wheat']);
  });

  it('returns sorted, stable output from internalTargets', () => {
    const html = doc('<a href="/z">z</a><a href="/a">a</a><a href="/m">m</a>');
    const t = internalTargets(extractLinks(html, opts));
    expect(t).toEqual(['/a', '/m', '/z']);
  });

  it('is deterministic across repeated extraction of the same document', () => {
    const html = doc(
      '<a href="/a">1</a><a href="/b#x">2</a><a href="/a?q=1">3</a><a>4</a>',
    );
    const first = extractLinks(html, opts);
    for (let i = 0; i < 3; i++) {
      expect(extractLinks(html, opts)).toEqual(first);
    }
  });

  it('returns no links for a document with none', () => {
    expect(extractLinks(doc('<p>nothing here</p>'), opts)).toEqual([]);
  });
});

describe('canonical and robots extraction', () => {
  it('reads a canonical href', () => {
    const html = `<head><link rel="canonical" href="https://agricultureid.com/crops/wheat"/></head>`;
    expect(extractCanonical(html)).toBe(
      'https://agricultureid.com/crops/wheat',
    );
  });

  it('returns null when no canonical is present', () => {
    expect(extractCanonical('<head><title>t</title></head>')).toBeNull();
  });

  it('reads robots content and detects noindex', () => {
    expect(extractRobots('<meta name="robots" content="index, follow"/>')).toBe(
      'index, follow',
    );
    expect(isNoindex('<meta name="robots" content="index, follow"/>')).toBe(
      false,
    );
    expect(isNoindex('<meta name="robots" content="noindex, nofollow"/>')).toBe(
      true,
    );
    expect(isNoindex('<meta name="robots" content="NOINDEX"/>')).toBe(true);
  });

  it('treats an absent robots meta as indexable', () => {
    expect(extractRobots('<head></head>')).toBeNull();
    expect(isNoindex('<head></head>')).toBe(false);
  });

  it('ignores a canonical inside a comment', () => {
    const html = `<head><!-- <link rel="canonical" href="/ghost"> --><link rel="canonical" href="/real"></head>`;
    expect(extractCanonical(html)).toBe('/real');
  });
});
