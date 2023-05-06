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
        russo: "RussoOne",
        dancingScript: "dancingScript",
        amatic: "AmaticSC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
