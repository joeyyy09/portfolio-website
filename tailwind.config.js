/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        russo: "Russo one",
        dancingScript: "Dancing Script",
        amatic: "AmaticSC",
        monteserrat: "monteserrat",
        dancingScript: "Dancing Script",
        russo: "Russo One",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
