const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      us: '380px',
      // => @media (min-width: 480px) { ... }

      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bermuda: '#78dcca',
      'canvas-default': '#ffffff',
      'canvas-dark': '#0d1117',
      'border-default': '#d0d7de',
      'border-dark': '#30363d',
      'muted-default': '#57606a',
      'muted-dark': '#8b949e',
      'accent-default': '#0969da',
      'accent-dark': '#58a6ff',
      'syntax-constant': '#0550ae',
      'syntax-string': '#0a3069',
      'entity-tag': '#116329',
    },
    typography: (theme) => ({
      default: {
        css: {
          pre: {
            color: theme('colors.grey.1000'),
            backgroundColor: theme('colors.grey.100'),
          },
          'pre code::before': {
            'padding-left': 'unset',
          },
          'pre code::after': {
            'padding-right': 'unset',
          },
          code: {
            backgroundColor: theme('colors.grey.100'),
            color: '#DD1144',
            fontWeight: '400',
            'border-radius': '0.25rem',
          },
          'code::before': {
            content: '""',
            'padding-left': '0.25rem',
          },
          'code::after': {
            content: '""',
            'padding-right': '0.25rem',
          },
        },
      },
    }),
    extend: {
      fontSize: {
        normal: '18px',
      },
      borderRadius: {
        sm3: '3px',
      },
      boxShadow: {
        bs1: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
        bs2: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        bs3: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        bs4: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        bs5: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        lite: '2px 4px 10px rgba(0, 0, 0, 0.2)',
        mid: '2px 5px 10px rgba(0, 0, 0, 0.3)',
        dark: '2px 4px 10px rgba(0, 0, 0, .6)',
        red: ' 2px 4px 10px rgb(211, 47, 47, .5)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
