/** @type {import('next').NextConfig} */

// Security headers applied to every route. Kept conservative so they remain
// compatible with Vercel's static + serverless output. No CSP is set, so the
// one third-party runtime script (WebmasterID analytics, see
// components/analytics/Analytics.tsx) loads without a policy change.
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
  // Pin the file-tracing root to this project. A lockfile exists in a parent
  // directory of the build environment, which would otherwise make Next infer
  // the wrong workspace root for output tracing on deploy.
  outputFileTracingRoot: import.meta.dirname,
  // Deterministic trailing-slash behaviour keeps canonical URLs stable.
  trailingSlash: false,
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
