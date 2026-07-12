import { describe, expect, it } from 'vitest';
import { absoluteUrl, buildMetadata, fullTitle } from '@/lib/seo/metadata';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SITE } from '@/lib/site';

describe('metadata builders', () => {
  it('builds absolute URLs from site-relative paths', () => {
    expect(absoluteUrl('/crops/wheat')).toBe(`${SITE.url}/crops/wheat`);
    expect(absoluteUrl('https://example.com/x')).toBe('https://example.com/x');
  });

  it('applies the brand title suffix deterministically', () => {
    expect(fullTitle('Wheat')).toBe('Wheat · AgricultureID');
    expect(fullTitle()).toContain('AgricultureID');
    expect(fullTitle(SITE.name)).toBe(`${SITE.name} — ${SITE.tagline}`);
  });

  it('sets a canonical path and article Open Graph type', () => {
    const meta = buildMetadata({
      title: 'Wheat',
      description: 'A test description that is sufficiently long for metadata.',
      path: '/crops/wheat',
      ogType: 'article',
    });
    expect(meta.alternates?.canonical).toBe('/crops/wheat');
    expect(meta.openGraph?.url).toBe(absoluteUrl('/crops/wheat'));
    // @ts-expect-error narrow OG union in test only
    expect(meta.openGraph?.type).toBe('article');
  });
});

describe('metadata uniqueness across published content', () => {
  it('has unique SEO titles', () => {
    const titles = PUBLISHED_CONTENT.map((i) => i.seo.title.toLowerCase());
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('has unique SEO descriptions', () => {
    const descriptions = PUBLISHED_CONTENT.map((i) =>
      i.seo.description.toLowerCase(),
    );
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it('keeps SEO descriptions within a reasonable length', () => {
    for (const item of PUBLISHED_CONTENT) {
      expect(item.seo.description.length).toBeGreaterThanOrEqual(70);
      expect(item.seo.description.length).toBeLessThanOrEqual(170);
    }
  });
});
