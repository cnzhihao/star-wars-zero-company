import { gameConfig } from '@/config/game';
import type {
  WikiCategory,
  WikiEntry,
  WikiSource,
  WikiVisualEvidence,
} from './types';

const checked = '2026-08-28';
const eaGamePage = 'https://www.ea.com/games/starwars/zero-company';
const starWarsGamePage =
  'https://www.starwars.com/games-apps/star-wars-zero-company';
const starWarsFeature = 'https://www.starwars.com/news/star-wars-zero-company';
const officialTrailer = 'https://www.youtube.com/watch?v=WxLUZ1omFA8';
const officialTrailerAtTen = `${officialTrailer}&t=10s`;
const officialTrailerAtMinute = `${officialTrailer}&t=60s`;
const communityGuide = 'https://www.youtube.com/watch?v=bMIWs-xIh44';
const communityGuideAtMap = `${communityGuide}&t=2094s`;

function officialSource(
  label: string,
  href: string,
  note = `Official source checked ${checked}.`
): WikiSource {
  return { label, href, type: 'official', note };
}

function communitySource(
  label: string,
  href: string,
  note: string
): WikiSource {
  return { label, href, type: 'community', note };
}

const officialTacticalVisual: WikiVisualEvidence = {
  src: '/assets/zero-company-official-tactical-00-10.png',
  alt: 'Official Star Wars Zero Company trailer frame showing a squad in an overhead tactical encounter.',
  caption: '00:10 — the official trailer shows an overhead tactical encounter.',
  sourceHref: officialTrailerAtTen,
  sourceLabel: 'EA Star Wars official gameplay trailer',
  timestamp: '00:10',
  credit:
    'EA Star Wars; visual demonstration only. Rights review required before public release.',
};

const officialLoadoutVisual: WikiVisualEvidence = {
  src: '/assets/zero-company-official-loadout-01-00.png',
  alt: "Official Star Wars Zero Company trailer frame showing Tesh Hawks's armory weapon-mod screen with a Hypercharge Capacitor selected.",
  caption:
    "01:00 — the official trailer shows Tesh Hawks's armory and weapon-mod screen.",
  sourceHref: officialTrailerAtMinute,
  sourceLabel: 'EA Star Wars official gameplay trailer',
  timestamp: '01:00',
  credit:
    'EA Star Wars; visible UI reference only. Rights review required before public release.',
};

const communityMapVisual: WikiVisualEvidence = {
  src: '/assets/zero-company-community-galactic-map-34-54.png',
  alt: 'Community guide frame showing Star Wars Zero Company zones, influence tiers and mission choices on the galactic map.',
  caption:
    '34:54 — a community guide example of the Influence and galactic map screen.',
  sourceHref: communityGuideAtMap,
  sourceLabel: 'Dantics community guide',
  timestamp: '34:54',
  credit:
    'Dantics; community example only. Rights review required before public release.',
};

export const wikiCategories: readonly WikiCategory[] = [
  {
    slug: 'briefing',
    title: 'Briefing',
    description: 'The premise, format and first steps for a new operator.',
    indexable: true,
    entrySlugs: ['game-overview', 'beginner-guide'],
  },
  {
    slug: 'operators',
    title: 'Operators',
    description: 'Hawks, squad roles, customization and relationship systems.',
    indexable: true,
    entrySlugs: ['operators-and-bonds', 'hawks', 'named-operatives'],
  },
  {
    slug: 'operations',
    title: 'Operations',
    description: 'Battlefield decisions, The Den and the galaxy map.',
    indexable: true,
    entrySlugs: ['tactical-combat', 'the-den-and-galaxy-map'],
  },
  {
    slug: 'intel',
    title: 'Intel & access',
    description: 'Threats, current platform status and launch-era updates.',
    indexable: true,
    entrySlugs: ['infinite-coil', 'release-platforms', 'launch-updates'],
  },
] as const;

export const wikiEntries: readonly WikiEntry[] = [
  {
    slug: 'game-overview',
    categorySlug: 'briefing',
    title: 'Star Wars Zero Company: Game Overview',
    pageType: 'entry',
    summary:
      'A plain-language brief on the game format, Clone Wars setting and the systems this Wiki tracks.',
    metaTitle: 'Star Wars Zero Company Game Overview | Field Manual',
    metaDescription:
      'What Star Wars Zero Company is: a single-player, turn-based tactics game about Hawks, a custom squad and a new Clone Wars-era threat.',
    lead: 'Star Wars Zero Company is a single-player, turn-based tactics game set in the twilight of the Clone Wars. You lead Hawks and an unconventional squad through an original story, tactical missions and decisions that can affect later outcomes.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company wiki',
      'star wars zero company',
      'zero company game',
      'zero company gameplay',
    ],
    indexable: true,
    facts: [
      { label: 'Format', value: 'Single-player, turn-based tactics' },
      { label: 'Setting', value: 'The twilight of the Clone Wars' },
      { label: 'Player character', value: 'Hawks, a former Republic officer' },
      {
        label: 'Developer team',
        value: 'Bit Reactor with Respawn and Lucasfilm Games',
      },
    ],
    sections: [
      {
        heading: 'What the game focuses on',
        paragraphs: [
          'Official materials describe a cinematic original story built around tactical operations, investigations and missions. The game also places meaningful decisions on and off the battlefield.',
          'Between missions, the squad returns to a base of operations and uses a galaxy map to choose strategic tasks and tactical missions. That makes the campaign layer as important to track as individual combat encounters.',
        ],
      },
      {
        heading: 'What this Wiki will document',
        paragraphs: [
          'The first content pass follows the game’s clearest player questions: who the operatives are, how squad bonds and customization are described, how The Den and its map fit into the campaign, and where to find current official access information.',
        ],
        bullets: [
          'Use official names and labels as the source of truth.',
          'Keep exact numbers, optimal builds and mission outcomes marked for in-game verification until tested.',
        ],
      },
    ],
    sources: [
      officialSource('EA official game page', eaGamePage),
      officialSource('StarWars.com game overview', starWarsGamePage),
    ],
    relatedSlugs: [
      'beginner-guide',
      'operators-and-bonds',
      'release-platforms',
    ],
  },
  {
    slug: 'beginner-guide',
    path: '/guides/beginner',
    categorySlug: 'briefing',
    title: 'Star Wars Zero Company Beginner Guide',
    pageType: 'guide',
    summary:
      'A safe first route through the campaign layer, squad preparation and tactical decisions.',
    metaTitle: 'Star Wars Zero Company Beginner Guide | First Steps',
    metaDescription:
      'Start Star Wars Zero Company with a source-backed primer on The Den, squad preparation, tactical missions and relationship choices.',
    lead: 'Treat your first hours as a loop between the base of operations and the battlefield: use the campaign layer to choose a task, prepare a squad whose abilities fit the mission, then record the choices and relationships that shape what comes next.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company beginner guide',
      'zero company how to play',
      'star wars zero company tips',
    ],
    indexable: true,
    facts: [
      {
        label: 'Campaign format',
        value: 'Base-of-operations layer plus tactical missions',
      },
      { label: 'First planning stop', value: 'The Den on the Ring of Kafrene' },
      {
        label: 'Squad focus',
        value: 'Operative abilities, loadouts and bonds',
      },
      { label: 'Exact combat values', value: 'Add after live-build testing' },
    ],
    sections: [
      {
        heading: '1. Start with the campaign context',
        paragraphs: [
          'Before treating a mission as an isolated fight, read what the current strategic task is asking you to do. Official material places mission selection and story consequences in the campaign layer, so the choice of where to go matters.',
        ],
      },
      {
        heading: '2. Prepare the squad around the task',
        paragraphs: [
          'The official game description supports a squad made from different character archetypes, with customizable appearances, loadouts and abilities. Use this page as a checklist for comparing those choices; do not assume a universal best squad before the live build is tested.',
        ],
        bullets: [
          'Check each operator’s specialty before deployment.',
          'Treat abilities and loadouts as a team plan, not isolated rankings.',
          'Record which characters are sent together for later bond testing.',
        ],
        visualEvidence: officialLoadoutVisual,
      },
      {
        heading: '3. Track choices and bonds',
        paragraphs: [
          'Official previews say that squadmates can build relationships and unlock combat synergies as they work together. Log the people you send on missions and the decisions you make so later guides can be tied to a specific campaign state.',
        ],
      },
    ],
    sources: [
      officialSource('StarWars.com game overview', starWarsGamePage),
      officialSource('StarWars.com feature', starWarsFeature),
      officialSource(
        'EA Star Wars official gameplay trailer',
        officialTrailer,
        'Official trailer checked 2026-08-28; the 01:00 frame is visual evidence for the armory screen only.'
      ),
    ],
    relatedSlugs: [
      'game-overview',
      'operators-and-bonds',
      'the-den-and-galaxy-map',
      'tactical-combat',
    ],
  },
  {
    slug: 'operators-and-bonds',
    categorySlug: 'operators',
    title: 'Operators & Squad Bonds',
    pageType: 'entry',
    summary:
      'What the official materials confirm about operatives, customization and the bond system.',
    metaTitle: 'Operators & Squad Bonds | Star Wars Zero Company Wiki',
    metaDescription:
      'Learn how Star Wars Zero Company describes operatives, custom characters, loadouts, abilities and squad bonds.',
    lead: 'Zero Company lets you recruit a mix of authored and custom characters, tailor appearances, loadouts and abilities, and develop squad bonds through missions. The practical rule is to evaluate the squad as a group while keeping untested numbers out of the guide.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company operators',
      'zero company squad',
      'zero company bonds',
      'zero company best squad',
    ],
    indexable: true,
    facts: [
      { label: 'Recruitment', value: 'Authored and custom characters' },
      { label: 'Customization', value: 'Appearance, loadout and abilities' },
      {
        label: 'Archetypes',
        value: 'From scoundrels and astromechs to a Jedi',
      },
      { label: 'Bond payoff', value: 'Potential combat synergies' },
    ],
    sections: [
      {
        heading: 'Build a team, not a list of names',
        paragraphs: [
          'The official description frames operators around specialties and tactical abilities. That supports a team-building page organized by role and mission need, while exact class rankings and damage values remain live-build research tasks.',
        ],
      },
      {
        heading: 'What is confirmed',
        paragraphs: [
          'Players can customize Hawks and fill the rest of the company with original and custom-made Star Wars characters. The squad improves through missions, and characters who work together can unlock new combat synergies.',
        ],
        bullets: [
          'Track appearance, loadout and ability changes separately.',
          'Record repeated pairings when testing relationship effects.',
          'Keep “best squad” recommendations tied to a named mission and build version.',
        ],
      },
      {
        heading: 'Still needs in-game verification',
        paragraphs: [
          'The public official overview does not provide a complete stat table, action economy, class tree or universal squad-size rule. Those pages stay out of the launch build until they are captured and checked in-game.',
        ],
      },
    ],
    sources: [
      officialSource('EA Operators and features page', eaGamePage),
      officialSource('StarWars.com game overview', starWarsGamePage),
      officialSource('StarWars.com feature', starWarsFeature),
    ],
    relatedSlugs: [
      'hawks',
      'named-operatives',
      'beginner-guide',
      'tactical-combat',
    ],
  },
  {
    slug: 'hawks',
    categorySlug: 'operators',
    title: 'Hawks',
    pageType: 'entry',
    summary:
      'The former Republic officer who leads Zero Company through the Clone Wars-era campaign.',
    metaTitle: 'Hawks | Star Wars Zero Company Wiki',
    metaDescription:
      'Who Hawks is in Star Wars Zero Company, what the official sources say about the leader and which parts remain to be tested.',
    lead: 'Hawks is a former Republic officer who leads Zero Company. Official materials say players can customize Hawks’s combat class and appearance while directing the company through the game’s original story.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'hawks zero company',
      'star wars zero company hawks',
      'zero company protagonist',
    ],
    indexable: false,
    facts: [
      { label: 'Role', value: 'Leader of Zero Company' },
      { label: 'Background', value: 'Former Republic officer' },
      { label: 'Customization', value: 'Combat class and appearance' },
    ],
    sections: [
      {
        heading: 'Story role',
        paragraphs: [
          'Hawks is the player-facing anchor for an unconventional group of professionals recruited for an operation against an emerging threat. The story is set in the twilight of the Clone Wars and uses Hawks’s company as its ground-level perspective.',
        ],
      },
      {
        heading: 'Customization boundary',
        paragraphs: [
          'The official pages confirm customization of Hawks’s combat class and appearance. A full class breakdown, ability list and optimal build should be added only after the live game is tested.',
        ],
      },
    ],
    sources: [
      officialSource('StarWars.com game overview', starWarsGamePage),
      officialSource('EA official game page', eaGamePage),
    ],
    relatedSlugs: ['operators-and-bonds', 'game-overview', 'named-operatives'],
  },
  {
    slug: 'named-operatives',
    categorySlug: 'operators',
    title: 'Named Operatives',
    pageType: 'entry',
    summary:
      'A launch reference for official character names and the relationship-driven squad structure.',
    metaTitle: 'Named Operatives | Star Wars Zero Company Wiki',
    metaDescription:
      'Reference the named Star Wars Zero Company operatives introduced by official sources, including Trick, Luco Bronc and Cly Kullervo.',
    lead: 'Official StarWars.com materials introduce both original and customizable squadmates. The first named-operatives list includes Trick, Luco Bronc, Cly Kullervo and Tel-Rea Vokoss; their complete combat data belongs in separate pages after live verification.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company characters',
      'zero company characters',
      'trick zero company',
      'luco bronc',
      'cly kullervo',
      'tel rea vokoss',
    ],
    indexable: false,
    facts: [
      {
        label: 'Named examples',
        value: 'Trick, Luco Bronc, Cly Kullervo and Tel-Rea Vokoss',
      },
      {
        label: 'Squad construction',
        value: 'Original and custom-made characters',
      },
      {
        label: 'Relationship system',
        value: 'Bonds can grow through shared missions',
      },
    ],
    sections: [
      {
        heading: 'Confirmed names',
        paragraphs: [
          'The official feature introduces a clone soldier named Trick, an incendiary sharpshooter named Luco Bronc, a Mandalorian gunslinger named Cly Kullervo and a Tognath Jedi Padawan named Tel-Rea Vokoss. The official game page also maintains a broader databank of Zero Company characters.',
        ],
      },
      {
        heading: 'Why names are only the first layer',
        paragraphs: [
          'The game’s official description emphasizes characters who grow together and unlock combat synergies. The useful Wiki structure is therefore one page per confirmed operator plus a separate bond log, rather than a static name list.',
        ],
      },
      {
        heading: 'Pending details',
        paragraphs: [
          'Exact stats, starting equipment, unlock conditions and mission-specific recommendations are not filled from the public overview. Keep those queries visible for the next in-game research pass.',
        ],
      },
    ],
    sources: [
      officialSource('StarWars.com feature', starWarsFeature),
      officialSource('StarWars.com game databank', starWarsGamePage),
    ],
    relatedSlugs: ['operators-and-bonds', 'hawks', 'beginner-guide'],
  },
  {
    slug: 'tactical-combat',
    categorySlug: 'operations',
    title: 'Tactical Combat Primer',
    pageType: 'entry',
    summary:
      'A source-bound combat primer for turn-based decisions, tactical abilities and campaign consequences.',
    metaTitle: 'Tactical Combat Primer | Star Wars Zero Company Wiki',
    metaDescription:
      'A cautious Star Wars Zero Company combat primer covering turn-based tactics, abilities, squad composition and decision consequences.',
    lead: 'Official materials confirm turn-based tactical combat with a varied squad, tactical abilities and choices that can change the outcome of a playthrough. Use this page for the decision framework; exact damage, range and action rules require live testing.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company combat',
      'zero company turn based combat',
      'zero company abilities',
      'zero company tactics',
    ],
    indexable: true,
    facts: [
      { label: 'Combat format', value: 'Turn-based tactical battles' },
      { label: 'Core tool', value: 'A varied arsenal of tactical abilities' },
      { label: 'Decision scope', value: 'Battlefield and campaign choices' },
      { label: 'Numeric rules', value: 'Pending live-build capture' },
    ],
    sections: [
      {
        heading: 'Plan around the mission, not a single move',
        paragraphs: [
          'The official feature describes operations, investigations and other missions alongside an ever-shifting battlefield. Start a combat note with the mission objective and the squad’s intended jobs before filling in build advice.',
        ],
        visualEvidence: officialTacticalVisual,
      },
      {
        heading: 'Use the squad’s differences',
        paragraphs: [
          'The official game page describes operatives ranging from scoundrels and astromechs to a Jedi, each bringing tactical abilities. That variety is the reliable foundation for future role, ability and mission pages.',
        ],
      },
      {
        heading: 'Do not publish invented combat math',
        paragraphs: [
          'The public overview does not establish a complete action-point system, damage table, cover formula or universal optimal turn order. These topics remain research tasks until observed in the launch build and tied to a version.',
        ],
      },
    ],
    sources: [
      officialSource('EA official features page', eaGamePage),
      officialSource('StarWars.com game overview', starWarsGamePage),
      officialSource(
        'EA Star Wars official gameplay trailer',
        officialTrailer,
        'Official trailer checked 2026-08-28; the 00:10 frame shows a tactical encounter without proving the full combat rules.'
      ),
    ],
    relatedSlugs: [
      'operators-and-bonds',
      'beginner-guide',
      'the-den-and-galaxy-map',
    ],
  },
  {
    slug: 'the-den-and-galaxy-map',
    path: '/guides/map',
    categorySlug: 'operations',
    title: 'The Den & Galaxy Map Guide',
    pageType: 'guide',
    summary:
      'How the official campaign overview connects The Den, strategic tasks, tactical missions and story choices.',
    metaTitle: 'The Den & Galaxy Map Guide | Star Wars Zero Company Wiki',
    metaDescription:
      'Understand The Den on the Ring of Kafrene and the galaxy map choices that lead into Star Wars Zero Company missions.',
    lead: 'The Den is Zero Company’s base of operations on the Ring of Kafrene. Official material says its galaxy map is where players choose strategic tasks and tactical missions, and that travel and mission choices can affect the story.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company the den',
      'zero company galaxy map',
      'zero company map guide',
      'zero company ring of kafrene',
    ],
    indexable: true,
    facts: [
      { label: 'Base', value: 'The Den' },
      { label: 'Location', value: 'The Ring of Kafrene' },
      {
        label: 'Map purpose',
        value: 'Choose strategic tasks and tactical missions',
      },
      {
        label: 'Choice impact',
        value: 'Locations and missions can affect the story',
      },
    ],
    sections: [
      {
        heading: '1. Return to The Den between missions',
        paragraphs: [
          'The official feature places The Den between trips across the galaxy. Treat it as the campaign planning surface rather than just a lore location.',
        ],
      },
      {
        heading: '2. Read the galaxy map as a decision point',
        paragraphs: [
          'The galaxy map presents strategic tasks and tactical missions. Before choosing, record the destination, the mission type and which operators you expect to send; that gives later route notes a reproducible campaign state.',
        ],
        visualEvidence: communityMapVisual,
      },
      {
        heading: '3. Log story-facing choices',
        paragraphs: [
          'Official examples say the places visited, missions undertaken and relationships developed can influence the story. Keep those observations separate from universal mechanics until the live build confirms how each choice resolves.',
        ],
      },
    ],
    sources: [
      officialSource('StarWars.com feature', starWarsFeature),
      officialSource('StarWars.com game overview', starWarsGamePage),
      communitySource(
        'Dantics — The Ultimate Starting Guide',
        communityGuide,
        'Community source checked 2026-08-28; the 34:54 frame is an illustrative map example, not universal rules proof.'
      ),
    ],
    relatedSlugs: ['beginner-guide', 'tactical-combat', 'game-overview'],
  },
  {
    slug: 'infinite-coil',
    categorySlug: 'intel',
    title: 'The Infinite Coil',
    pageType: 'entry',
    summary:
      'The emerging threat highlighted in the official Star Wars Zero Company materials.',
    metaTitle: 'The Infinite Coil | Star Wars Zero Company Wiki',
    metaDescription:
      'What official Star Wars Zero Company sources establish about the Infinite Coil and which enemy details still need in-game verification.',
    lead: 'The Infinite Coil is the central threat named in the official launch materials. EA presents it as an elusive enemy, while the official game page identifies Kundri Fathom as its leader; the complete enemy roster and mechanics remain to be verified in-game.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'star wars zero company enemies',
      'infinite coil zero company',
      'kundri fathom',
      'zero company enemy guide',
    ],
    indexable: false,
    facts: [
      { label: 'Threat', value: 'The Infinite Coil' },
      { label: 'Named leader', value: 'Kundri Fathom' },
      { label: 'Official framing', value: 'An elusive enemy to plan against' },
      { label: 'Enemy mechanics', value: 'Pending live-build verification' },
    ],
    sections: [
      {
        heading: 'What the official sources establish',
        paragraphs: [
          'The EA game page gives the Infinite Coil its own enemy spotlight and asks players to learn more about the threat before forming a strategy. The official game databank also lists Kundri Fathom among the named figures connected to Zero Company’s conflict.',
        ],
      },
      {
        heading: 'What this page will add next',
        paragraphs: [
          'A useful enemy dossier needs observed attack patterns, mission appearances, counters and version notes. None of those should be filled from a search snippet or a competing Wiki; they need a source or a clearly labeled in-game capture.',
        ],
      },
    ],
    sources: [
      officialSource('EA official enemies page', eaGamePage),
      officialSource('StarWars.com game databank', starWarsGamePage),
    ],
    relatedSlugs: ['tactical-combat', 'game-overview', 'release-platforms'],
  },
  {
    slug: 'release-platforms',
    categorySlug: 'intel',
    title: 'Release & Platforms',
    pageType: 'access',
    summary:
      'Current official release status and platform destinations for Star Wars Zero Company.',
    metaTitle: 'Star Wars Zero Company Release & Platforms | Wiki',
    metaDescription:
      'Check Star Wars Zero Company’s 27 August 2026 release and official PC, PlayStation 5 and Xbox Series X|S destinations.',
    lead: 'As checked on 28 August 2026, Star Wars Zero Company is released. The official EA page links players to EA app for Windows, Xbox Store, PlayStation Store, Steam and Epic Games Store; StarWars.com lists PC, PlayStation 5 and Xbox Series X|S.',
    status: gameConfig.status,
    evidenceState: 'verified',
    updated: checked,
    keywords: [
      'zero company release date',
      'zero company platforms',
      'zero company steam',
      'zero company ps5',
      'zero company xbox',
    ],
    indexable: false,
    facts: [
      { label: 'Release date', value: '27 August 2026' },
      {
        label: 'Console platforms',
        value: 'PlayStation 5 and Xbox Series X|S',
      },
      {
        label: 'PC destinations',
        value: 'EA app for Windows, Steam and Epic Games Store',
      },
      { label: 'Checked', value: '28 August 2026' },
    ],
    sections: [
      {
        heading: 'Official platform links',
        paragraphs: [
          'Use the official EA destination below as the source of truth for current store routing. Prices, regional availability and edition contents can change, so they are intentionally not copied into this static first pass.',
        ],
        bullets: [
          'EA app for Windows',
          'Steam',
          'Epic Games Store',
          'PlayStation Store',
          'Xbox Store',
        ],
      },
      {
        heading: 'Recheck before publication',
        paragraphs: [
          'Recheck price, edition contents, language support, refunds and any subscription access immediately before switching this page to indexable. Those are dynamic facts, not permanent game identity.',
        ],
      },
    ],
    sources: [
      officialSource('EA official game page', eaGamePage),
      officialSource('StarWars.com game overview', starWarsGamePage),
    ],
    relatedSlugs: ['game-overview', 'launch-updates', 'beginner-guide'],
  },
  {
    slug: 'launch-updates',
    categorySlug: 'intel',
    title: 'Launch Updates & Version Notes',
    pageType: 'update',
    summary:
      'A version-aware record for launch news, patch notes and facts that need recurring rechecks.',
    metaTitle: 'Launch Updates & Version Notes | Star Wars Zero Company Wiki',
    metaDescription:
      'Track official Star Wars Zero Company launch news and keep patch, price, platform and edition facts tied to a checked date.',
    lead: 'This launch-era page records only official update signals. The official EA page currently shows a Welcome Operators news item dated 27 August 2026; detailed patch notes are not added until an official note is available.',
    status: gameConfig.status,
    evidenceState: 'single-official-source',
    updated: checked,
    keywords: [
      'zero company update',
      'zero company patch notes',
      'zero company latest news',
      'star wars zero company update',
    ],
    indexable: false,
    facts: [
      {
        label: 'Current review',
        value: 'Launch-era official page checked 28 August 2026',
      },
      {
        label: 'Visible official signal',
        value: 'Welcome Operators news item dated 27 August 2026',
      },
      {
        label: 'Patch detail',
        value: 'Awaiting an official note before publication',
      },
    ],
    sections: [
      {
        heading: 'Publication rule',
        paragraphs: [
          'Separate confirmed official changes from player reports. A community observation can be a useful lead, but it cannot become a universal launch-build rule without a reproducible capture or an official announcement.',
        ],
      },
      {
        heading: 'Recheck list',
        paragraphs: [
          'Before this page becomes indexable, check official patch notes, platform status, edition or DLC details, language support and any current access restrictions. Record the source date beside each change.',
        ],
      },
    ],
    sources: [officialSource('EA official game page', eaGamePage)],
    relatedSlugs: ['release-platforms', 'game-overview', 'infinite-coil'],
  },
] as const;

export function findWikiCategory(slug: string) {
  return wikiCategories.find((category) => category.slug === slug);
}

export function findWikiEntry(slug: string) {
  return wikiEntries.find((entry) => entry.slug === slug);
}

export function getWikiCategoryHref(category: WikiCategory) {
  return `/wiki/${category.slug}`;
}

export function getWikiEntryHref(entry: WikiEntry) {
  return entry.path ?? `/wiki/${entry.categorySlug}/${entry.slug}`;
}

export function getCategoryEntries(categorySlug: string) {
  const category = findWikiCategory(categorySlug);
  if (!category) return [];
  return category.entrySlugs
    .map((slug) => findWikiEntry(slug))
    .filter((entry): entry is WikiEntry => Boolean(entry));
}
