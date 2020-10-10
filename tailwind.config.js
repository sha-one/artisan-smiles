module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
    },
  },

  theme: {
    extend: {
      colors: {
        'as-red': '#A1465E',
        'as-red-dark': '#6A2F3E',
        'as-red-darker': '#230F14',
        'as-green': '#2EA2A7',
        'as-green-dark': '#236C6E',
        'as-green-darker': '#0C2424',
      }
    },
  },
  variants: {},
  plugins: [],
};
