import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EcosystemBar } from '@/components/ecosystem/EcosystemBar';
import {
  HELPERG_WEB_PROJECTS,
  HELPERG_APPS,
  appStoreLinks,
} from '@/lib/ecosystem/registry';

/**
 * DOM-level contract for the ecosystem bar.
 *
 * These assert the *markup* a crawler and an assistive technology actually
 * see — real anchors, real disclosure semantics — rather than React internals.
 * The post-build `ecosystem:audit` gate covers the emitted static HTML.
 */

function panels(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLDetailsElement>(
      'details[data-ecosystem-panel]',
    ),
  );
}

beforeEach(() => cleanup());

describe('EcosystemBar — structure', () => {
  it('renders exactly one navigation landmark named "HELPERG Ecosystem"', () => {
    render(<EcosystemBar />);
    const navs = screen.getAllByRole('navigation', {
      name: 'HELPERG Ecosystem',
    });
    expect(navs).toHaveLength(1);
  });

  it('renders all 18 web projects as real anchors with the exact brand name', () => {
    const { container } = render(<EcosystemBar />);
    expect(HELPERG_WEB_PROJECTS).toHaveLength(18);

    for (const project of HELPERG_WEB_PROJECTS) {
      const anchor = container.querySelector<HTMLAnchorElement>(
        `a[href="${project.url}"]`,
      );
      expect(anchor, project.id).not.toBeNull();
      expect(anchor!.tagName).toBe('A');
      expect(anchor!.textContent).toContain(project.name);
    }
  });

  it('renders all 14 app-store destinations as real anchors', () => {
    const { container } = render(<EcosystemBar />);
    const links = HELPERG_APPS.flatMap((a) => appStoreLinks(a));
    expect(links).toHaveLength(14);

    for (const { url, label } of links) {
      const anchor = container.querySelector<HTMLAnchorElement>(
        `a[href="${url}"]`,
      );
      expect(anchor, url).not.toBeNull();
      expect(anchor!.textContent).toContain(label);
    }
  });

  it('names every app exactly once inside the Apps panel', () => {
    const { container } = render(<EcosystemBar />);
    expect(HELPERG_APPS).toHaveLength(8);

    // Scope to the Apps panel. "Twin Phone" legitimately appears twice on the
    // page — once as a web project, once as an app — and that relationship
    // must not be "de-duplicated" away, so a document-wide count is wrong.
    const appsPanel = container.querySelector<HTMLElement>(
      '#ecosystem-apps-panel',
    )!;
    expect(appsPanel).not.toBeNull();

    for (const app of HELPERG_APPS) {
      const hits = Array.from(appsPanel.querySelectorAll('p')).filter(
        (el) => el.textContent === app.name,
      );
      expect(hits.length, app.name).toBe(1);
    }
  });

  it('lists Twin Phone in both panels — a real relationship, not a duplicate', () => {
    const { container } = render(<EcosystemBar />);
    const projects = container.querySelector<HTMLElement>(
      '#ecosystem-projects-panel',
    )!;
    const apps = container.querySelector<HTMLElement>('#ecosystem-apps-panel')!;

    expect(
      projects.querySelector('a[href="https://twin-phone.com"]'),
    ).not.toBeNull();
    expect(
      apps.querySelector('a[href="https://apps.apple.com/app/id6792280945"]'),
    ).not.toBeNull();
  });
});

describe('EcosystemBar — current site', () => {
  it('marks AgricultureID with aria-current and does not open it in a new tab', () => {
    const { container } = render(<EcosystemBar />);
    const self = container.querySelector<HTMLAnchorElement>(
      'a[href="https://agricultureid.com"]',
    )!;
    expect(self).not.toBeNull();
    expect(self.getAttribute('aria-current')).toBe('page');
    expect(self.getAttribute('target')).toBeNull();
    expect(self.textContent).toContain('Current');
  });

  it('opens every other ecosystem link safely in a new tab', () => {
    const { container } = render(<EcosystemBar />);
    const external = [
      ...HELPERG_WEB_PROJECTS.filter((p) => p.id !== 'agricultureid').map(
        (p) => p.url,
      ),
      ...HELPERG_APPS.flatMap((a) => appStoreLinks(a).map((s) => s.url)),
    ];
    expect(external).toHaveLength(31);

    for (const url of external) {
      const a = container.querySelector<HTMLAnchorElement>(`a[href="${url}"]`)!;
      expect(a, url).not.toBeNull();
      expect(a.getAttribute('target'), url).toBe('_blank');
      const rel = a.getAttribute('rel') ?? '';
      expect(rel, url).toContain('noopener');
      expect(rel, url).toContain('noreferrer');
      // Official ecosystem navigation — never sponsored/ugc/nofollow.
      expect(rel, url).not.toContain('sponsored');
      expect(rel, url).not.toContain('ugc');
      expect(rel, url).not.toContain('nofollow');
    }
  });
});

describe('EcosystemBar — disclosure semantics', () => {
  it('exposes two disclosures, closed by default, each controlling its panel', () => {
    const { container } = render(<EcosystemBar />);
    const ds = panels(container);
    expect(ds).toHaveLength(2);

    for (const d of ds) {
      expect(d.open).toBe(false);
      const summary = d.querySelector('summary')!;
      const controls = summary.getAttribute('aria-controls');
      expect(controls).toBeTruthy();
      expect(container.querySelector(`#${controls}`)).not.toBeNull();
    }
  });

  it('keeps every link in the DOM while collapsed, so crawlers still see them', () => {
    const { container } = render(<EcosystemBar />);
    expect(panels(container).every((d) => !d.open)).toBe(true);
    // 18 web + 14 store anchors are present even though nothing is expanded.
    expect(container.querySelectorAll('a[href^="https://"]')).toHaveLength(32);
  });

  it('uses a natively focusable <summary> as the trigger', () => {
    const { container } = render(<EcosystemBar />);

    for (const d of panels(container)) {
      const summary = d.querySelector('summary')!;
      expect(summary.tagName).toBe('SUMMARY');
      // No tabindex hack and no role override: keyboard operability comes from
      // the native element, which is why the bar still works without JS.
      expect(summary.getAttribute('role')).toBeNull();
      expect(summary.getAttribute('tabindex')).toBeNull();

      summary.focus();
      expect(document.activeElement).toBe(summary);
    }

    // NOTE: jsdom does not implement native <summary> activation (Enter/Space
    // toggling `open`), so asserting it here would only exercise a stub. Real
    // Enter/Space/Escape behaviour is verified against Chromium in
    // e2e/ecosystem.spec.ts.
  });

  it('closes the open panel on Escape and restores focus to its trigger', async () => {
    const user = userEvent.setup();
    const { container } = render(<EcosystemBar />);
    const [projects] = panels(container) as [
      HTMLDetailsElement,
      ...HTMLDetailsElement[],
    ];
    const summary = projects.querySelector<HTMLElement>('summary')!;

    projects.open = true;
    projects.dispatchEvent(new Event('toggle'));

    await user.keyboard('{Escape}');

    expect(projects.open).toBe(false);
    expect(document.activeElement).toBe(summary);
  });

  it('only allows one panel open at a time', () => {
    const { container } = render(<EcosystemBar />);
    const all = panels(container);
    expect(all).toHaveLength(2);
    const [projects, apps] = all as [HTMLDetailsElement, HTMLDetailsElement];

    projects.open = true;
    projects.dispatchEvent(new Event('toggle'));
    expect(projects.open).toBe(true);

    apps.open = true;
    apps.dispatchEvent(new Event('toggle'));

    expect(apps.open).toBe(true);
    expect(projects.open).toBe(false);
  });
});
