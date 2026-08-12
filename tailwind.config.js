/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // ── New: editorial italic display face used for headlines/signatures ──
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        'headline-xl':  ['56px', { lineHeight: '60px',  letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg':  ['34px', { lineHeight: '42px',  letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md':  ['24px', { lineHeight: '32px',  fontWeight: '700' }],
        'headline-sm':  ['20px', { lineHeight: '28px',  fontWeight: '700' }],
        'headline-lg-mobile': ['30px', { lineHeight: '38px', fontWeight: '800' }],
        'body-lg':  ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':  ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':  ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        'label-sm': ['11px', { lineHeight: '16px', fontWeight: '700' }],
      },
      colors: {
        // ── Aurora Violet + Neon Lime — bold, high-contrast identity ─────────────
        primary:               '#0E0A1F',   // near-black violet
        'primary-container':   '#1D1638',   // elevated violet surface
        'on-primary':          '#F5F3FF',
        'on-primary-container':'#B3A6E0',
        'primary-fixed':       '#E4DBFF',
        'primary-fixed-dim':   '#C6B8F0',
        'on-primary-fixed':    '#160F2E',
        'on-primary-fixed-variant': '#4A3D75',
        'inverse-primary':     '#C6B8F0',

        secondary:                 '#3D4D00',
        'secondary-container':     '#C6FF3D',   // electric lime accent
        'on-secondary':            '#101B00',
        'on-secondary-container':  '#2E3A00',
        'secondary-fixed':         '#E3FFA0',
        'secondary-fixed-dim':     '#D4FF6E',
        'on-secondary-fixed':      '#1C2400',
        'on-secondary-fixed-variant': '#374600',

        tertiary:                 '#001B3D',
        'tertiary-container':     '#0A3A7A',
        'on-tertiary':            '#ffffff',
        'on-tertiary-container':  '#7CC7FF',
        'tertiary-fixed':         '#D3E4FF',
        'tertiary-fixed-dim':     '#A9CBFF',
        'on-tertiary-fixed':      '#001A40',
        'on-tertiary-fixed-variant': '#004492',

        // ── Surfaces ─────────────────────────────────────────────────────────────
        background:                 '#FAF9FF',
        'on-background':            '#14101F',
        surface:                    '#FAF9FF',
        'on-surface':               '#14101F',
        'surface-variant':          '#E4E0F0',
        'on-surface-variant':       '#4A4460',
        'surface-bright':           '#FAF9FF',
        'surface-dim':              '#DAD5E8',
        'surface-container-lowest': '#ffffff',
        'surface-container-low':    '#F3F0FA',
        'surface-container':        '#ECE7F7',
        'surface-container-high':   '#E4DEF2',
        'surface-container-highest':'#DAD5E8',
        'inverse-surface':          '#2B2540',
        'inverse-on-surface':       '#F2EFFA',
        'surface-tint':             '#6B5FA8',

        // ── Utility ──────────────────────────────────────────────────────────────
        outline:          '#7A7391',
        'outline-variant':'#CBC5DE',
        error:            '#ba1a1a',
        'on-error':       '#ffffff',
        'error-container':'#ffdad6',
        'on-error-container': '#93000a',

        // ── Brand-specific ────────────────────────────────────────────────────────
        'auction-live':     '#FF3D7F',   // magenta – live badge
        'auction-upcoming': '#5B8CFF',   // electric blue – upcoming
        'gold-service':     '#FFD23D',   // amber premium
        'success-green':    '#22C55E',   // settled/success

        // ── Legacy aliases kept so old components don't break ────────────────────
        cream: {
          50:  '#ffffff',
          100: '#FAF9FF',
          200: '#ECE7F7',
          300: '#CBC5DE',
          400: '#7A7391',
        },
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'gutter':          '1.5rem',
        'margin-mobile':   '1rem',
        'stack-sm':        '0.5rem',
        'stack-md':        '1rem',
        'stack-lg':        '2rem',
        'section-padding': '6rem',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm:   '0.125rem',
        md:   '0.375rem',
        lg:   '0.75rem',
        xl:   '1.25rem',
        '2xl':'1.75rem',
        full: '9999px',
      },
      boxShadow: {
        'card-hover': '0px 12px 32px rgba(14, 10, 31, 0.16)',
        'auction':    '0 2px 12px rgba(14, 10, 31, 0.08)',
        'neon':       '0 0 0 1px rgba(198,255,61,0.4), 0 0 24px rgba(198,255,61,0.25)',
        'neon-lg':    '0 0 0 1px rgba(198,255,61,0.5), 0 0 48px rgba(198,255,61,0.35)',
        'chip':       '0 8px 24px rgba(14, 10, 31, 0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        // ── New: floating chip motion paths (each slightly different so the field doesn't feel mechanical) ──
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-4deg)' },
          '50%':      { transform: 'translate(14px, -22px) rotate(3deg)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(3deg)' },
          '50%':      { transform: 'translate(-18px, 16px) rotate(-2deg)' },
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '50%':      { transform: 'translate(10px, 20px) rotate(4deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'drift-a': 'drift-a 7s ease-in-out infinite',
        'drift-b': 'drift-b 9s ease-in-out infinite',
        'drift-c': 'drift-c 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
