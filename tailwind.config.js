/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'], // Add your font here
        cur: ['"Sour Gummy"', 'cursive']
      },
    },
  },
  plugins: [],
};
