/**
 * Deterministic link extraction from rendered HTML.
 *
 * This module parses emitted build output — real `<a href>` anchors — and knows
 * nothing about the content registry, the sitemap, or any navigation model. It
 * is the parsing half of the rendered-link audit; `scripts/rendered-link-audit.ts`
 * is the graph half.
 *
 * Contrast with `registryReachabilityAudit()` in `lib/seo/audit.ts`, which
 * models navigation from the registry and never reads a byte of HTML.
 *
 * Everything here is a pure function of its inputs: same HTML in, same links
 * out, no I/O, no clock, no environment.
 */

/** How an `href` resolves, once classified. */
export type LinkKind =
  /** Same-origin link to a page path. */
  | 'internal'
  /** Different host. */
  | 'external'
  /** Same-page fragment only (`#x`), or an empty/`#` href. */
  | 'fragment'
  | 'mailto'
  | 'tel'
  /** Any other scheme (`javascript:`, `data:`, `ftp:`, …) or an unparseable href. */
  | 'other';

export interface ExtractedLink {
  /** The `href` attribute exactly as it appeared in the HTML. */
  raw: string;
  kind: LinkKind;
  /**
   * Normalised site-relative path for `kind === 'internal'`, else `null`.
   * Never carries a query, fragment, trailing slash, or `.html` suffix.
   */
  path: string | null;
  /**
   * True when the raw href would not be served at `path` as written and the
   * host would have to redirect: a trailing slash (the site sets
   * `trailingSlash: false`) or an explicit `.html`/`index.html` suffix.
   */
  redirecting: boolean;
}

export interface ExtractOptions {
  /** Canonical origin, e.g. `https://agricultureid.com`. No trailing slash. */
  origin: string;
  /**
   * Path of the page being parsed, used to resolve relative hrefs.
   * Defaults to `/`.
   */
  basePath?: string;
  /**
   * Additional hosts to treat as internal (e.g. a preview domain).
   * Compared case-insensitively against the URL host.
   */
  internalHosts?: readonly string[];
}

/** Strip HTML comments so commented-out markup never counts as a link. */
function stripComments(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

const ANCHOR_RE = /<a\b([^>]*)>/gi;
const HREF_RE = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i;

/**
 * Normalise a URL pathname to the site's canonical shape:
 * percent-decoded, no `index.html`, no `.html`, no trailing slash.
 *
 * Case is **preserved**. Path segments are case-sensitive per RFC 3986 and the
 * host serves them that way, so `/Crops` is a genuinely different (and, here,
 * non-existent) path from `/crops`. Lower-casing would hide broken links.
 */
export function normalizeInternalPath(pathname: string): string {
  let p = pathname;
  try {
    p = decodeURIComponent(p);
  } catch {
    // Malformed percent-encoding: keep the raw form rather than throw.
  }
  if (!p.startsWith('/')) p = `/${p}`;
  // `/index.html` and `/foo/index.html` → `/` and `/foo`.
  p = p.replace(/\/index\.html$/i, '/');
  p = p.replace(/\.html$/i, '');
  // Collapse any trailing slash, but never empty the root.
  p = p.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

/** True when the raw href, as written, would require a redirect to reach `path`. */
function isRedirecting(rawPathname: string): boolean {
  if (/\.html$/i.test(rawPathname)) return true;
  // A trailing slash on anything but the root redirects under trailingSlash:false.
  return rawPathname.length > 1 && rawPathname.endsWith('/');
}

/** Classify a single raw `href` value. Pure. */
export function classifyHref(
  raw: string,
  options: ExtractOptions,
): ExtractedLink {
  const { origin, basePath = '/', internalHosts = [] } = options;
  const none = (kind: LinkKind): ExtractedLink => ({
    raw,
    kind,
    path: null,
    redirecting: false,
  });

  const trimmed = raw.trim();
  if (trimmed === '' || trimmed === '#') return none('fragment');
  if (trimmed.startsWith('#')) return none('fragment');

  const lower = trimmed.toLowerCase();
  if (lower.startsWith('mailto:')) return none('mailto');
  if (lower.startsWith('tel:')) return none('tel');

  let url: URL;
  try {
    // Resolving against origin+basePath handles absolute, protocol-relative,
    // root-relative and document-relative hrefs in one step.
    url = new URL(trimmed, `${origin}${basePath}`);
  } catch {
    return none('other');
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    if (url.protocol === 'mailto:') return none('mailto');
    if (url.protocol === 'tel:') return none('tel');
    return none('other');
  }

  const hosts = new Set(
    [new URL(origin).host, ...internalHosts].map((h) => h.toLowerCase()),
  );
  if (!hosts.has(url.host.toLowerCase())) return none('external');

  return {
    raw,
    kind: 'internal',
    path: normalizeInternalPath(url.pathname),
    redirecting: isRedirecting(url.pathname),
  };
}

/**
 * Extract every `<a>` anchor from an HTML document, in document order.
 *
 * Anchors without an `href` are skipped entirely (they are not links).
 * Duplicates are preserved — callers decide whether to dedupe.
 */
export function extractLinks(
  html: string,
  options: ExtractOptions,
): ExtractedLink[] {
  const out: ExtractedLink[] = [];
  const source = stripComments(html);
  ANCHOR_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = ANCHOR_RE.exec(source)) !== null) {
    const attrs = m[1] ?? '';
    const href = HREF_RE.exec(attrs);
    // `<a>` with no href attribute is not a link.
    if (!href) continue;
    const value = href[1] ?? href[2] ?? href[3] ?? '';
    out.push(classifyHref(value, options));
  }
  return out;
}

/** Unique, sorted internal paths from an extraction, excluding self-links. */
export function internalTargets(
  links: readonly ExtractedLink[],
  selfPath?: string,
): string[] {
  const set = new Set<string>();
  for (const l of links) {
    if (l.kind !== 'internal' || l.path === null) continue;
    if (selfPath !== undefined && l.path === selfPath) continue;
    set.add(l.path);
  }
  return [...set].sort();
}

const CANONICAL_RE = /<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*>/i;
const ROBOTS_RE = /<meta\b[^>]*\bname\s*=\s*["']robots["'][^>]*>/i;

function attrValue(tag: string, name: string): string | null {
  const re = new RegExp(
    `\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'=<>\`]+))`,
    'i',
  );
  const m = re.exec(tag);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? null;
}

/** The `<link rel="canonical">` href as written, or `null` if absent. */
export function extractCanonical(html: string): string | null {
  const tag = CANONICAL_RE.exec(stripComments(html));
  if (!tag) return null;
  return attrValue(tag[0], 'href');
}

/** The `<meta name="robots">` content as written, or `null` if absent. */
export function extractRobots(html: string): string | null {
  const tag = ROBOTS_RE.exec(stripComments(html));
  if (!tag) return null;
  return attrValue(tag[0], 'content');
}

/** True when the page's robots meta asks search engines not to index it. */
export function isNoindex(html: string): boolean {
  const robots = extractRobots(html);
  return robots !== null && /\bnoindex\b/i.test(robots);
}
