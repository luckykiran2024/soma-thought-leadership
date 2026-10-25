import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF6E0', // soft ivory-green canvas
        paper: '#FFFFFF',
        surface: '#E6EFD9',
        'surface-subtle': '#D5E2D0',
        ink: {
          DEFAULT: '#01161E',
          light: '#124559',
          muted: '#598392',
          faint: '#AEC3B0',
        },
        navy: {
          950: '#01161E',
          900: '#0A3341',
          800: '#124559',
          700: '#356B7A',
        },
        accent: {
          DEFAULT: '#124559',
          hover: '#01161E',
          soft: '#EFF6E0',
          border: '#AEC3B0',
        },
        editorial: {
          cream: '#EFF6E0',
          warm: '#E6EFD9',
          rule: '#AEC3B0',
          border: '#C8D8C2',
        }
      },
      fontFamily: {
        serif: ['var(--font-editorial)', 'Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '1.85',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.02)',
        'card': '0 0 0 1px rgba(15, 23, 42, 0.05), 0 2px 8px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
