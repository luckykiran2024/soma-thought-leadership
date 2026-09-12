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
        background: '#FAF9F6', // warm off-white / parchment-tinted editorial canvas
        paper: '#FFFFFF',
        surface: '#F4F3EF',
        'surface-subtle': '#EEEDE8',
        ink: {
          DEFAULT: '#0F172A', // deep charcoal midnight
          light: '#334155',
          muted: '#64748B',
          faint: '#94A3B8',
        },
        navy: {
          950: '#070B14',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2E3D66',
        },
        accent: {
          DEFAULT: '#1D4ED8', // restrained intellectual blue
          hover: '#1E40AF',
          soft: '#EFF6FF',
          border: '#BFDBFE',
        },
        editorial: {
          cream: '#FAF9F5',
          warm: '#F5F2EB',
          rule: '#E5E1D8',
          border: '#E2DFD7',
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
