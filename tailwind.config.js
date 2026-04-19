/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    // BMW is angular — zero border-radius by default.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '9999px', // only for the live dot and small circular accents
    },
    extend: {
      fontFamily: {
        // BMWTypeNextLatin is proprietary — closest free approximation is
        // a humanist sans at weight 300. We use Inter for body and a
        // condensed display face for the monumental headlines.
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // BMW dark navy palette (spec colours from brand guidance)
        bmw: {
          navy: '#031E49',   // deep corporate navy
          blue: '#4599FE',   // M-Sport light blue
          red: '#EE0405',    // M red accent
          white: '#FFFDFE',  // near white
          slate: '#2D4046',  // dark slate
          mist: '#B8CAD1',   // light blue-grey (muted text)
        },
        bg: {
          DEFAULT: '#05080F',
          elev: '#0A0F1A',
          deep: '#031E49',
          line: 'rgba(184, 202, 209, 0.12)',
        },
        fg: {
          DEFAULT: '#FFFDFE',
          muted: '#B8CAD1',
          dim: '#6B7C85',
          faint: '#3E4C54',
        },
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.02em',
        wider: '0.08em',
        widest: '0.18em',
        ultra: '0.28em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee': 'marquee 48s linear infinite',
        'ticker': 'ticker 22s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ticker: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
