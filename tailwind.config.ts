import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: '#f8f1ff',
        foreground: '#1a1a1a',
        main: {
          100: '#f8f1ff',
          200: '#f1e3ff',
          300: '#e9d6ff',
          400: '#dcbcff',
          500: '#cfb2ff',
          600: '#c2a8ff',
          700: '#b59eff',
          800: '#a88ff5',
          900: '#9b85eb',
        },
        aux: {
          100: '#f1f1f1',
          200: '#e3e3e3',
          300: '#d6d6d6',
          400: '#c8c8c8',
          500: '#bcbcbc',
          600: '#afafaf',
          700: '#a1a1a1',
          800: '#949494',
          900: '#878787',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
}
export default config
