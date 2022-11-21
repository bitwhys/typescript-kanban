const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000112',
        white: '#FFFFFF',
        grey: {
          50: '#F4F7FD',
          100: '#E4EBFA',
          200: '#828FA3',
          300: '#3E3F4E',
          400: '#2B2C37',
          500: '#20212C',
        },
        red: {
          DEFAULT: '#EA5555',
          subtle: '#FF9898',
        },
        primary: {
          DEFAULT: '#635FC7',
          subtle: '#A8A4FF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta SansVariable', ...defaultTheme.fontFamily.sans],
      },
      gridAutoColumns: {
        board: `minmax(0,280px)`,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
