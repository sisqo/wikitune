/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // oklch(0.97 0.008 240) — barely cool near-white, not cream/ivory
        bg:       '#F2F5F8',
        surface:  '#FFFFFF',
        // oklch(0.12 0.025 255)
        ink:      '#0F1623',
        // oklch(0.42 0.02 255) — 5.5:1 on bg, safe AA
        muted:    '#546070',
        gold:     '#C4872A',
        'gold-lt':'#FBF2E4',
        spruce:   '#2C4A2E',
        // oklch(0.88 0.01 245)
        border:   '#D0D8E4',
      },
      fontFamily: {
        // Titillium Web — designed at the Accademia di Belle Arti di Urbino,
        // Italian origin, direct and reliable, NOT on the reflex-reject list
        sans:    ['var(--font-titillium)', 'system-ui', 'sans-serif'],
        display: ['var(--font-titillium)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0F1623',
            maxWidth: 'none',
            lineHeight: '1.75',
            fontSize: '1.0625rem',
            a: {
              color: '#C4872A',
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': { textDecoration: 'underline' },
            },
            h2: {
              fontFamily: 'var(--font-titillium), system-ui, sans-serif',
              fontWeight: '700',
              fontSize: '1.5em',
              color: '#0F1623',
              marginTop: '2em',
              letterSpacing: '-0.01em',
            },
            h3: {
              fontFamily: 'var(--font-titillium), system-ui, sans-serif',
              fontWeight: '700',
              fontSize: '1.2em',
              color: '#0F1623',
            },
            'code': {
              fontFamily: 'var(--font-jetbrains), monospace',
              color: '#C4872A',
              backgroundColor: '#FBF2E4',
              padding: '0.1em 0.35em',
              borderRadius: '0.2em',
              fontWeight: '400',
              fontSize: '0.88em',
            },
            'code::before': { content: '""' },
            'code::after':  { content: '""' },
            blockquote: {
              borderLeftColor: '#C4872A',
              borderLeftWidth: '3px',
              fontStyle: 'normal',
              fontWeight: '600',
              color: '#2C4A2E',
              paddingLeft: '1.25em',
              backgroundColor: '#FBF2E4',
              paddingTop: '0.75em',
              paddingBottom: '0.75em',
              paddingRight: '1em',
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after':   { content: '""' },
            strong: { color: '#0F1623', fontWeight: '700' },
            hr:     { borderColor: '#D0D8E4' },
            'thead th': {
              color: '#0F1623',
              fontFamily: 'var(--font-titillium), system-ui, sans-serif',
              fontWeight: '700',
              fontSize: '0.8em',
              letterSpacing: '0.03em',
              backgroundColor: '#FBF2E4',
              paddingTop: '0.6em',
              paddingBottom: '0.6em',
            },
            'tbody td': {
              fontFamily: 'var(--font-titillium), system-ui, sans-serif',
              fontSize: '0.95em',
              color: '#0F1623',
            },
            'tbody tr': { borderBottomColor: '#D0D8E4' },
            table: { fontSize: '1em' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
