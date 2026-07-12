import { describe, expect, it } from 'vitest';
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  itemListSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from '@/lib/schema/jsonld';
import { contentBreadcrumbs } from '@/lib/seo/breadcrumbs';
import {
  PUBLISHED_CONTENT,
  contentUrlPath,
  GLOSSARY,
} from '@/lib/content/registry';

function isSerializable(obj: unknown): boolean {
  const json = JSON.stringify(obj);
  return typeof json === 'string' && json.length > 0;
}

describe('structured data serialization', () => {
  it('emits valid site-level schema', () => {
    for (const node of [organizationSchema(), websiteSchema()]) {
      expect(node['@context']).toBe('https://schema.org');
      expect(node['@type']).toBeTruthy();
      expect(isSerializable(node)).toBe(true);
    }
  });

  it('emits WebPage, Article, and Breadcrumb schema for every content page', () => {
    for (const item of PUBLISHED_CONTENT) {
      const path = contentUrlPath(item);
      const web = webPageSchema({
        name: item.title,
        description: item.summary,
        path,
      });
      expect(web['@type']).toBe('WebPage');
      expect(isSerializable(web)).toBe(true);

      const crumbs = breadcrumbSchema(
        contentBreadcrumbs(item.contentType, item.title, item.slug),
      );
      expect(crumbs['@type']).toBe('BreadcrumbList');
      expect(Array.isArray(crumbs.itemListElement)).toBe(true);

      if (item.structuredData?.article) {
        const article = articleSchema(item, path);
        expect(article['@type']).toBe('Article');
        expect(article.dateModified).toBe(item.updatedAt);
        expect(isSerializable(article)).toBe(true);
      }
    }
  });

  it('emits DefinedTerm schema for glossary entries', () => {
    for (const term of GLOSSARY) {
      const node = definedTermSchema(term);
      expect(node['@type']).toBe('DefinedTerm');
      expect(node.name).toBe(term.term);
    }
  });

  it('emits ItemList schema with a matching item count', () => {
    const items = PUBLISHED_CONTENT.slice(0, 5).map((i) => ({
      name: i.title,
      path: contentUrlPath(i),
    }));
    const list = itemListSchema({ name: 'Test', path: '/crops', items });
    expect(list['@type']).toBe('ItemList');
    expect(list.numberOfItems).toBe(items.length);
  });
});
