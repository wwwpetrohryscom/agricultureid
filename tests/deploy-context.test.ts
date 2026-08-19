import { afterEach, describe, expect, it } from 'vitest';
import robots from '@/app/robots';
import {
  NON_PRODUCTION_CONTEXTS,
  isNonProductionDeploy,
} from '@/lib/deploy-context';
import { SITE } from '@/lib/site';

/**
 * Guards the hosting-migration behaviour that is easiest to get catastrophically
 * wrong: which deploys are indexable.
 *
 * The asymmetry is deliberate and asserted here. A crawlable preview is a minor
 * SEO-hygiene problem; a de-indexed production site is an outage. So the
 * predicate allow-lists non-production contexts rather than testing
 * `CONTEXT !== 'production'`, and every unknown value must stay indexable.
 */
describe('isNonProductionDeploy', () => {
  const original = process.env.CONTEXT;

  afterEach(() => {
    if (original === undefined) delete process.env.CONTEXT;
    else process.env.CONTEXT = original;
  });

  it('is true for every Netlify non-production context', () => {
    for (const context of NON_PRODUCTION_CONTEXTS) {
      expect(isNonProductionDeploy({ CONTEXT: context }), context).toBe(true);
    }
  });

  it("is false for Netlify's production context", () => {
    expect(isNonProductionDeploy({ CONTEXT: 'production' })).toBe(false);
  });

  it('is false when CONTEXT is absent (local dev, CI, any other host)', () => {
    expect(isNonProductionDeploy({})).toBe(false);
  });

  it('is false for an unrecognised value — it must fail open, not de-index', () => {
    // If Netlify ever adds a context we do not know about, the safe answer is
    // "indexable". This is why the check is not `CONTEXT !== 'production'`.
    for (const value of ['', 'Production', 'preview', 'staging', 'unknown']) {
      expect(isNonProductionDeploy({ CONTEXT: value }), value).toBe(false);
    }
  });
});

describe('robots.txt by hosting context', () => {
  const original = process.env.CONTEXT;

  afterEach(() => {
    if (original === undefined) delete process.env.CONTEXT;
    else process.env.CONTEXT = original;
  });

  it('production stays fully indexable and advertises the canonical sitemap', () => {
    process.env.CONTEXT = 'production';
    const result = robots();

    expect(result.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(result.sitemap).toBe('https://agricultureid.com/sitemap.xml');
    expect(result.host).toBe('https://agricultureid.com');
  });

  it('an unset CONTEXT is indexable — hosting migration must not change prod', () => {
    delete process.env.CONTEXT;
    const result = robots();

    expect(result.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(result.sitemap).toBe(`${SITE.url}/sitemap.xml`);
  });

  it('deploy previews and branch deploys are disallowed', () => {
    for (const context of ['deploy-preview', 'branch-deploy']) {
      process.env.CONTEXT = context;
      const result = robots();

      expect(result.rules, context).toEqual({ userAgent: '*', disallow: '/' });
    }
  });

  it('a disallowed preview does not advertise the production sitemap', () => {
    process.env.CONTEXT = 'deploy-preview';
    const result = robots();

    // Pointing crawlers at the production sitemap from a noindex host is a
    // mixed signal; previews should simply say nothing.
    expect(result.sitemap).toBeUndefined();
    expect(result.host).toBeUndefined();
  });
});
