/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['"Rubik"', defaultTheme.fontFamily.sans],
      display: ['"Rubik"']
    },
    colors: {
      transparent: colors.transparent,
      gray: colors.slate,
      white: colors.white,
      green: colors.green,
      brand: {
        50: '#E8F7FF',
        100: '#D5EFFF',
        200: '#B3DFFF',
        300: '#85C8FF',
        400: '#56A1FF',
        500: '#2F7BFF',
        600: '#0C4DFF',
        700: '#0042FF',
        800: '#063CCD',
        900: '#000055',
        950: '#020617'
      }
    }
  },
  plugins: []
}
