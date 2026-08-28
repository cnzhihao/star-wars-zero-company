export const gameConfig = {
  name: 'Star Wars Zero Company',
  shortName: 'Zero Company',
  description:
    'A single-player, turn-based tactics game set in the twilight of the Clone Wars, with a customizable squad, off-battlefield planning and relationship-driven choices.',
  status: 'Released 27 August 2026 · facts checked 28 August 2026',
  defaultLocale: 'en' as const,
  officialLinks: [
    {
      label: 'Official EA game page',
      href: 'https://www.ea.com/games/starwars/zero-company',
    },
    {
      label: 'StarWars.com overview',
      href: 'https://www.starwars.com/games-apps/star-wars-zero-company',
    },
    {
      label: 'Official gameplay trailer',
      href: 'https://www.youtube.com/watch?v=WxLUZ1omFA8',
    },
  ] as const,
} as const;
