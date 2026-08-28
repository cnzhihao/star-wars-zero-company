export type EvidenceState =
  | 'verified'
  | 'single-official-source'
  | 'community-lead'
  | 'pending';

export type WikiSource = {
  label: string;
  href: string;
  type: 'official' | 'community' | 'reference';
  note?: string;
};

export type WikiFact = {
  label: string;
  value: string;
};

export type WikiSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  visualEvidence?: WikiVisualEvidence;
};

export type WikiVisualEvidence = {
  src: string;
  alt: string;
  caption: string;
  sourceHref: string;
  sourceLabel: string;
  timestamp: string;
  credit: string;
};

export type WikiEntry = {
  slug: string;
  categorySlug: string;
  /** Use this for a guide or special page that has a non-Wiki canonical path. */
  path?: string;
  title: string;
  pageType: 'entry' | 'guide' | 'access' | 'update';
  summary: string;
  lead: string;
  metaTitle?: string;
  metaDescription?: string;
  status: string;
  evidenceState: EvidenceState;
  updated: string;
  keywords: readonly string[];
  indexable: boolean;
  facts: readonly WikiFact[];
  sections: readonly WikiSection[];
  sources: readonly WikiSource[];
  relatedSlugs: readonly string[];
};

export type WikiCategory = {
  slug: string;
  title: string;
  description: string;
  indexable: boolean;
  entrySlugs: readonly string[];
};
