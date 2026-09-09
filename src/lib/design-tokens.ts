/**
 * ExploreIndia Design Tokens System
 * Define once, reuse everywhere.
 * 
 * Includes:
 * - Primary Dark: Deep indigo/navy for header, hero, and footer backgrounds
 * - Accent 1 (Warm): Marigold/amber for highlights, active states, CTAs
 * - Accent 2: Vermilion/red-orange for "live now" badges and secondary CTAs
 * - Light Background: Warm off-white for content sections (not pure white)
 * - 7 Event Category Accent Colors (Cultural & Spiritual, Music & Arts, Food & Recreation,
 *   Adventure & Sports, Shopping & Fairs, Nature & Wildlife, National Occasions)
 * - Structural corner tokens vs Pill corner tokens
 */

export const COLOR_TOKENS = {
  // Primary dark: deep indigo/navy for header, hero, and footer backgrounds
  primaryDark: {
    950: '#070A17', // Deepest void navy background
    900: '#0B132B', // Main header, hero, footer background
    800: '#1C2541', // Dark card container fill
    700: '#2A365C', // Dark border & elevated panel highlight
  },
  // Accent 1 (warm): marigold/amber for highlights, active states, CTAs
  marigold: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    400: '#FBBF24',
    500: '#F59E0B', // Primary Marigold / Amber
    600: '#D97706',
    700: '#B45309',
  },
  // Accent 2: vermilion/red-orange for "live now" badges and secondary CTAs
  vermilion: {
    50: '#FFF1F2',
    100: '#FFE4E6',
    500: '#F43F5E',
    600: '#E11D48', // Vermilion Red-Orange
    700: '#BE123C',
  },
  // Light background: warm off-white for content sections (not pure white)
  lightBg: {
    50: '#FDFBF7', // Primary warm off-white section background
    100: '#F5F0EB', // Secondary warm cream background
    200: '#E8E1D9', // Warm border/divider color
    300: '#D5C8B8', // Warm subtle text color
    900: '#1A1816', // Dark contrast text on light bg
  },
} as const;

export const CATEGORY_TOKENS = {
  'Cultural & Spiritual': {
    id: 'cultural-spiritual',
    label: 'Cultural & Spiritual',
    hex: '#D97706',
    twColor: 'amber-600',
    badgeBg: 'bg-amber-500/15',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-500/30',
    dotBg: 'bg-amber-500',
    pillClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  'Music & Arts': {
    id: 'music-arts',
    label: 'Music & Arts',
    hex: '#8B5CF6',
    twColor: 'purple-500',
    badgeBg: 'bg-purple-500/15',
    badgeText: 'text-purple-300',
    badgeBorder: 'border-purple-500/30',
    dotBg: 'bg-purple-500',
    pillClass: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  },
  'Food & Recreation': {
    id: 'food-recreation',
    label: 'Food & Recreation',
    hex: '#F97316',
    twColor: 'orange-500',
    badgeBg: 'bg-orange-500/15',
    badgeText: 'text-orange-300',
    badgeBorder: 'border-orange-500/30',
    dotBg: 'bg-orange-500',
    pillClass: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  },
  'Adventure & Sports': {
    id: 'adventure-sports',
    label: 'Adventure & Sports',
    hex: '#06B6D4',
    twColor: 'cyan-500',
    badgeBg: 'bg-cyan-500/15',
    badgeText: 'text-cyan-300',
    badgeBorder: 'border-cyan-500/30',
    dotBg: 'bg-cyan-500',
    pillClass: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
  'Shopping & Fairs': {
    id: 'shopping-fairs',
    label: 'Shopping & Fairs',
    hex: '#EC4899',
    twColor: 'pink-500',
    badgeBg: 'bg-pink-500/15',
    badgeText: 'text-pink-300',
    badgeBorder: 'border-pink-500/30',
    dotBg: 'bg-pink-500',
    pillClass: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  },
  'Nature & Wildlife': {
    id: 'nature-wildlife',
    label: 'Nature & Wildlife',
    hex: '#10B981',
    twColor: 'emerald-500',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-500/30',
    dotBg: 'bg-emerald-500',
    pillClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  'National Occasions': {
    id: 'national-occasions',
    label: 'National Occasions',
    hex: '#3B82F6',
    twColor: 'blue-500',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    badgeBorder: 'border-blue-500/30',
    dotBg: 'bg-blue-500',
    pillClass: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  },
} as const;

export type EventCategoryName = keyof typeof CATEGORY_TOKENS;

/**
 * Corner rules according to design specifications:
 * Sharp/minimal corners for structural elements (date blocks, section dividers, hero boxes)
 * Rounded-full ONLY for pills, chips, tags, and badges.
 */
export const CORNER_TOKENS = {
  structural: {
    sharp: 'rounded-none',
    minimal: 'rounded-sm',
    card: 'rounded-md',
  },
  pillsOnly: 'rounded-full',
} as const;

export const TYPOGRAPHY_TOKENS = {
  serifDisplay: 'font-serif', // headlines, hero titles, section titles
  sansBody: 'font-sans',      // body text, UI buttons, metadata, labels
} as const;

/**
 * Helper to retrieve category token by name with fallback
 */
export function getCategoryToken(categoryName?: string | null) {
  if (categoryName && categoryName in CATEGORY_TOKENS) {
    return CATEGORY_TOKENS[categoryName as EventCategoryName];
  }
  return CATEGORY_TOKENS['Cultural & Spiritual'];
}
