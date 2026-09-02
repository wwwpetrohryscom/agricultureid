import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { isNonProductionDeploy } from '@/lib/deploy-context';

export default function robots(): MetadataRoute.Robots {
  // Deploy Previews and branch deploys are served on public *.netlify.app
  // hosts. Canonical tags, sitemap, JSON-LD and OG URLs always point at
  // https://agricultureid.com (lib/site.ts), so a preview can never
  // canonicalise to itself — but the preview host is still crawlable, which
  // would put duplicate URLs in the index. Keep those contexts out.
  //
  // `isNonProductionDeploy()` allow-lists the known non-production contexts, so
  // production, CI, and local builds all fall through to the indexable branch.
  if (isNonProductionDeploy()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Two sitemaps, because there are two deployments behind this hostname.
    // The Journal generates and serves its own at /journal/sitemap.xml, so
    // publishing an article updates it without this project rebuilding. Naming
    // it here is a one-time change, not a per-publication one.
    sitemap: [`${SITE.url}/sitemap.xml`, `${SITE.url}/journal/sitemap.xml`],
    host: SITE.url,
  };
}
