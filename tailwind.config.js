/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem'
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
