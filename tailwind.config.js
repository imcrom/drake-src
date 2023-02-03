/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'md': {'max': '1052px'},
      'sm': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}
