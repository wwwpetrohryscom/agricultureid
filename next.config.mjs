/** @type {import('next').NextConfig} */

/*
 * Production is a STATIC EXPORT served by Cloudflare Workers static assets
 * (see docs/cloudflare-deployment.md). Every route is prerendered to `out/`;
 * nothing renders on request.
 *
 * The two routes that used to read `searchParams` on the server — /search and
 * /compare/custom — are static shells that read the query string in the
 * browser, which is what lets this be an export at all.
 *
 * Security headers are NOT declared here any more. `headers()` does not apply
 * to an export, so the single source is cloudflare/security-headers.mjs, which
 * the post-build step writes into `out/_headers` for Cloudflare to apply.
 */
const nextConfig = {
  output: 'export',
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
  /*
   * An export has no image optimiser. The one `next/image` on the site (the
   * homepage hero) is served from WebP variants generated at build time by
   * scripts/build-image-variants.mjs; lib/image-loader.ts maps each srcset width
   * to its file. Any other source falls back to the original file unchanged.
   */
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
};

export default nextConfig;
