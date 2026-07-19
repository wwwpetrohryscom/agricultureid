import { describe, it, expect } from 'vitest';
import {
  injectWebmasterID,
  removeWebmasterID,
  hasWebmasterID,
  syncWebmasterID,
  WEBMASTERID_SCRIPT_ID,
  WEBMASTERID_SRC,
  WEBMASTERID_SITE_ID,
  WEBMASTERID_ENDPOINT,
} from '@/lib/analytics/webmasterid';

/**
 * A minimal fake Document sufficient for the injection/teardown contract, so the
 * singleton logic is tested without a full DOM. Registration mirrors the browser:
 * an element becomes findable by id only once appended.
 */
function fakeDoc() {
  const byId = new Map<string, FakeEl>();
  interface FakeEl {
    tagName: string;
    id: string;
    defer: boolean;
    src: string;
    attrs: Record<string, string>;
    setAttribute(k: string, v: string): void;
    getAttribute(k: string): string | null;
    remove(): void;
  }
  const head = {
    children: [] as FakeEl[],
    appendChild(el: FakeEl) {
      this.children.push(el);
      if (el.id) byId.set(el.id, el);
      return el;
    },
  };
  const doc = {
    head,
    documentElement: head,
    getElementById: (id: string) => byId.get(id) ?? null,
    createElement: (tag: string): FakeEl => {
      const attrs: Record<string, string> = {};
      const el: FakeEl = {
        tagName: tag,
        id: '',
        defer: false,
        src: '',
        attrs,
        setAttribute: (k, v) => void (attrs[k] = v),
        getAttribute: (k) => attrs[k] ?? null,
        remove: () => {
          const i = head.children.indexOf(el);
          if (i >= 0) head.children.splice(i, 1);
          if (el.id) byId.delete(el.id);
        },
      };
      return el;
    },
  } as unknown as Document;
  return { doc, head, byId };
}

describe('WebmasterID injection contract', () => {
  it('injects exactly one script with the verified attributes', () => {
    const { doc, head } = fakeDoc();
    injectWebmasterID(doc);
    expect(head.children).toHaveLength(1);
    const el = head.children[0]!;
    expect(el.tagName).toBe('script');
    expect(el.id).toBe(WEBMASTERID_SCRIPT_ID);
    expect(el.defer).toBe(true);
    expect(el.src).toBe(WEBMASTERID_SRC);
    expect(el.getAttribute('data-wmid')).toBe(WEBMASTERID_SITE_ID);
    expect(el.getAttribute('data-endpoint')).toBe(WEBMASTERID_ENDPOINT);
    // Regression guard: never revert to the wrong attribute name.
    expect(el.getAttribute('data-site-id')).toBeNull();
  });

  it('is idempotent — repeated injects never duplicate the script', () => {
    const { doc, head } = fakeDoc();
    injectWebmasterID(doc);
    injectWebmasterID(doc);
    injectWebmasterID(doc);
    expect(head.children).toHaveLength(1);
    expect(hasWebmasterID(doc)).toBe(true);
  });

  it('removeWebmasterID takes the script back out', () => {
    const { doc, head } = fakeDoc();
    injectWebmasterID(doc);
    removeWebmasterID(doc);
    expect(head.children).toHaveLength(0);
    expect(hasWebmasterID(doc)).toBe(false);
    // Removing again is a no-op.
    expect(() => removeWebmasterID(doc)).not.toThrow();
  });

  it('syncWebmasterID mirrors the analytics flag and never duplicates', () => {
    const { doc, head } = fakeDoc();
    syncWebmasterID(doc, false);
    expect(hasWebmasterID(doc)).toBe(false);
    syncWebmasterID(doc, true);
    syncWebmasterID(doc, true); // idempotent
    expect(head.children).toHaveLength(1);
    syncWebmasterID(doc, false);
    expect(hasWebmasterID(doc)).toBe(false);
  });
});
