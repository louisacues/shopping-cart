const sizes = require("./tailwindsizes.config")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xs': '320px',
        xs: '414px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'primary-font': 'Montserrat',
        'secondary-font': 'Lato',
      },
      colors: {
        'success': '#07bc0c',
        'iris-60': '#a5a6f6',
        'table-gray': '#383838',
        'green': '#76db80',
        'purple': '#7544E0',
        'red': '#CF5163',
        'orange': '#D37A4F',
        'yellow': '#DCC25B',
        'pink': '#CF54AB',
        'blue': '#4765D8',
        'light-purple': '#C5AAFF',
        'gray-100': '#EDEDED',
        'gray-200': '#D3D3D3',
        'gray-300': '#8D8D8E',
        'gray-400': '#D1D1D1',
        'gray-500': '#2d2d2f',
        'gray-600': '#313133',
        'gray-800': '#28282c',
        'gray-900': '#232225',
        'artboard': '#1B1B1D',
        'white': '#FFFFFF',
        'dark-400': '#2d2d2f',
        'dark-800': '#0e0e0e',
        'pink-button': '#C052B1',
        'purple-button': '#6D4ED8',
        'purple-hover': '#6232C9',
        'purple-outline': '#663DBD',
      },
      ringWidth: {
        DEFAULT: '1px',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      visibility: ['hover', 'focus'],
      fontSize: {
        ...sizes,
        sm: ['1.2em', { lineHeight: '1.25em'}],
        base: ['1.4em', { lineHeight: '1.42857em'}],
        medium: ['1.6em', { lineHeight: '1.25em'}],
      },
      lineHeight: sizes,
      spacing: sizes,
      minWidth: sizes,
      maxWidth: sizes,
      minHeight: sizes,
      maxHeight: sizes,
      borderRadius: sizes,
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
