/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "400px" },
      sm: { max: "639px" },
      md: { max: "767px" },
      lgmed: { max: "900px" },
      lg: { max: "1100px" },
      xl: { max: "1200px" },
      xlmed: { max: "1250px" },
      "1xl": { max: "1320px" },
      "2xl": { max: "1535px" },
      "3xl": { max: "1635px" },
    },
    extend: {},
  },
  plugins: [],
};
