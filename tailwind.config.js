/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EBDDCD',
          400: '#DEC9B2',
          500: '#CEB294',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EDE4D8',
          300: '#DFD1BF',
          400: '#CDB99F',
        },
        terracotta: {
          50: '#FBF5F2',
          100: '#F7E7E0',
          200: '#ECCEC0',
          300: '#DFAEA0',
          400: '#CA755E',
          500: '#B85D43',
          600: '#9B452D',
          700: '#7E3420',
          800: '#642918',
        },
        olive: {
          50: '#F6F7F2',
          100: '#EBEEE1',
          200: '#D6DBC2',
          300: '#B8BF9A',
          400: '#969F74',
          500: '#7B8456',
          600: '#616942',
        },
        espresso: {
          700: '#46382E',
          800: '#342921',
          900: '#231B15',
          950: '#17110E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
