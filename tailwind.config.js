/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      gray1: 'rgb(var(--color-gray1) / <alpha-value>)',
      gray2: 'rgb(var(--color-gray2) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)'
    },
    fontFamily: {
      sansserif: ["Segoe UI", 'Roboto',"Helvetica Neue", 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji","Segoe UI Symbol"]
    }
  },
  plugins: [],
}

