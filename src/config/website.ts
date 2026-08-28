export const websiteConfig = {
  name: 'Star Wars Zero Company Wiki',
  brandName: 'Zero Company Field Manual',
  description:
    'An unofficial, source-aware Star Wars Zero Company Wiki for operators, squad bonds, The Den and tactical missions.',
  /** Set this to the production origin before a real site is launched. */
  url: null as string | null,
  repository: 'https://github.com/cnzhihao/game-site-agents-template',
  /** Keep true until a production origin and launch audit are complete. */
  isTemplate: true,
  defaultTheme: 'dark' as const,
  themeStorageKey: 'zero-company-field-manual-theme',
  colors: {
    background: '#070b12',
    theme: '#9eeada',
  },
  manifest: {
    id: '/',
    startUrl: '/',
    scope: '/',
  },
  navigation: [
    { href: '/wiki', labelKey: 'nav_wiki' },
    { href: '/guides', labelKey: 'nav_guides' },
    { href: '/wiki/access', labelKey: 'nav_access' },
  ],
} as const;
