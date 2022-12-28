/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
      xs: "520px",
      ss: "620px",
      sm: "768px",
      md: "920px",
      lg: "1200px",
      xl: "1700px",
    },},
  },
  plugins: [],
}