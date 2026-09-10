/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EC",
        cream2: "#F1EBDE",
        charcoal: "#211D1B",
        charcoalSoft: "#3A3532",
        gold: "#A9863B",
        goldSoft: "#C9A662",
        plum: "#4B2E39",
        line: "#E4DCC9",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
