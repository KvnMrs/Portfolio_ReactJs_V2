/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: "#141E30",
        light_blue: "#243B55",
        wild_red: "#F76C6C",
      },
      screens: {
        md: "650px",
        // => @media (min-width: 650px) { ... }
        lg: "950px",
        // => @media (min-width: 950px) { ... }
        xl: "1100px",
        // => @media (min-width: 950px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
