/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgb(225, 207, 153)',
      },
    },
  },
}