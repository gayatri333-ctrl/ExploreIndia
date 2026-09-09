import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Dark: deep indigo/navy for header, hero, and footer backgrounds
        'primary-dark': {
          950: '#070A17',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2A365C',
        },
        // Accent 1 (warm): marigold/amber for highlights, active states, CTAs
        marigold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B', // Primary Marigold Amber
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
        'light-bg': {
          50: '#FDFBF7',  // Warm off-white
          100: '#F5F0EB', // Secondary warm cream
          200: '#E8E1D9', // Warm border/divider
          300: '#D5C8B8', // Warm subtle text
          900: '#1A1816', // Dark contrast text on light bg
        },
        // 7 Event Category Accent Colors (distinct, consistent everywhere)
        category: {
          cultural: '#D97706',  // Cultural & Spiritual (Amber Saffron)
          music: '#8B5CF6',     // Music & Arts (Royal Purple)
          food: '#F97316',      // Food & Recreation (Terracotta Orange)
          adventure: '#06B6D4', // Adventure & Sports (Cobalt Cyan)
          shopping: '#EC4899',  // Shopping & Fairs (Magenta Pink)
          nature: '#10B981',    // Nature & Wildlife (Emerald Green)
          national: '#3B82F6',  // National Occasions (Sapphire Blue)
        },
        // Legacy fallbacks for compatibility
        saffron: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        peacock: {
          500: '#007A78',
          600: '#0F5257',
        },
        royal: {
          950: '#070A17',
          900: '#0B132B',
          800: '#1C2541',
        },
        sand: {
          50: '#FDFBF7',
          100: '#F5F0EB',
          200: '#E8E1D9',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      borderRadius: {
        'sharp': '0px',
        'minimal': '2px',
        'structural': '6px',
        // rounded-full remains standard for pills/chips/tags
      },
      boxShadow: {
        'glow-marigold': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'glow-vermilion': '0 0 25px -5px rgba(225, 29, 72, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mandala-pattern': "url('/images/mandala-pattern.svg')",
      }
    },
  },
  plugins: [],
};

export default config;

