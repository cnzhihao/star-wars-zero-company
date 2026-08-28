import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { websiteConfig } from '@/config/website';
import {
  findWikiCategory,
  findWikiEntry,
  getWikiEntryHref,
  wikiEntries,
} from '@/content/site';
import { homeHead, siteOrigin, wikiHead } from '@/lib/seo';
import { cn } from '@/lib/utils';

describe('Zero Company field manual contracts', () => {
  it('starts in an isolated template-safe state', () => {
    expect(websiteConfig.name).toBe('Star Wars Zero Company Wiki');
    expect(websiteConfig.brandName).toBe('Zero Company Field Manual');
    expect(websiteConfig.repository).toBe(
      'https://github.com/cnzhihao/game-site-agents-template'
    );
    expect(websiteConfig.isTemplate).toBe(true);
    expect(wikiEntries.every((entry) => !entry.indexable)).toBe(true);
    expect(wikiEntries.every((entry) => entry.sources.length > 0)).toBe(true);
  });

  it('keeps content paths unique and supports custom Guide paths', () => {
    const paths = wikiEntries.map(getWikiEntryHref);
    expect(new Set(paths).size).toBe(paths.length);
    const guide = findWikiEntry('beginner-guide');
    if (!guide) throw new Error('beginner guide fixture is missing');
    expect(getWikiEntryHref(guide)).toBe('/guides/beginner');
  });

  it('builds local and configured absolute metadata safely', () => {
    expect(siteOrigin('https://example.com/')).toBe('https://example.com');
    expect(homeHead('en', 'https://example.com').meta).toContainEqual({
      name: 'robots',
      content: 'noindex, nofollow',
    });
    expect(homeHead('en', 'https://example.com').links).toContainEqual({
      rel: 'canonical',
      href: 'https://example.com/',
    });

    const entry = findWikiEntry('game-overview');
    const category = findWikiCategory('briefing');
    if (!entry || !category) throw new Error('overview fixture is missing');
    expect(
      wikiHead(entry, category, 'https://example.com').links
    ).toContainEqual({
      rel: 'canonical',
      href: 'https://example.com/wiki/briefing/game-overview',
    });
  });

  it('keeps public theme tokens aligned with the CSS', () => {
    const styles = readFileSync('src/styles.css', 'utf8');
    expect(styles).toContain(
      `--background: ${websiteConfig.colors.background};`
    );
    expect(styles).toContain(`--yellow: ${websiteConfig.colors.theme};`);
  });

  it('joins optional class names without false values', () => {
    expect(cn('base', false, null, 'active', undefined)).toBe('base active');
  });
});
