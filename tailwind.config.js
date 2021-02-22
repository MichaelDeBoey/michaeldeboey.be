const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: ['index.html'],
  purge: {
    content: ['index.html'],
    options: {
      keyframes: true,
      variables: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        55: '0.55',
        85: '0.85',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
