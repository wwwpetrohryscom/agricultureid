/** @type {import('next').NextConfig} */

// Security headers applied to every route. Kept conservative so they remain
// compatible with static + serverless output on any host. No CSP is set, so the
// one third-party runtime script (WebmasterID analytics) is compatible when it
// loads. It is consent-gated and injected client-side only after an explicit
// opt-in (see components/consent/ and components/analytics/Analytics.tsx), never
// in the server-rendered HTML.
//
// This block is the SINGLE canonical source of production security headers.
// Do not duplicate it in netlify.toml or a _headers file — two sources drift.
// Netlify's Next.js adapter applies next.config `headers()` in full.
const securityHeaders = [
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

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the file-tracing root to this project. A lockfile can exist in a parent
  // directory of the build environment, which would otherwise make Next infer
  // the wrong workspace root for output tracing on deploy. Host-agnostic.
  outputFileTracingRoot: import.meta.dirname,
  // Deterministic trailing-slash behaviour keeps canonical URLs stable.
  trailingSlash: false,
  /*
   * One static-generation worker per 400 pages, rather than one per CPU.
   *
   * Next spawns a worker per core for static generation and each one loads the
   * whole data layer, which is 55 MB of TypeScript modules — 3.3 MB of it the
   * FAO crop calendar alone after Wave 44 ingested the complete source file.
   * On a machine with plenty of RAM that is fine and the build is faster for
   * it; in a build container it multiplies a large fixed cost by the core
   * count. Wave 44's first deploy failed on Netlify with Node exit code 4, an
   * internal evaluation failure of the kind a starved worker bootstrap
   * produces, while the same commit built cleanly on a GitHub runner with four
   * times the memory and under the full Netlify adapter locally.
   *
   * 1,831 pages at this floor is four or five workers wherever it runs, which
   * is both bounded and reproducible. It trades build time for the build
   * finishing.
   */
  experimental: {
    staticGenerationMinPagesPerWorker: 400,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
