/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'olga': ['Olga', 'sans-serif'],
        'glaci': ['Glaciall', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
