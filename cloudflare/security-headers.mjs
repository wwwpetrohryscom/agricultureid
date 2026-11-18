/**
 * Security headers for every response on agricultureid.com.
 *
 * The SINGLE source. The site is a static export, so Next's `headers()` does
 * not apply; cloudflare/write-edge-files.mjs writes these into `out/_headers`,
 * which Cloudflare's static-asset handler applies to every response it serves.
 *
 * Kept conservative and unchanged from the Netlify era. No CSP is set, so the
 * one third-party runtime script (WebmasterID analytics) still loads after
 * consent. It is injected client-side only after an explicit opt-in (see
 * components/consent/ and components/analytics/Analytics.tsx), never in the
 * prerendered HTML.
 *
 * The AgricultureID Journal (served under /journal by its own Worker) declares
 * the same set in its own repository.
 */
export const SECURITY_HEADERS = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];
