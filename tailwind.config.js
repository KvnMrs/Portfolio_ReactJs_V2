/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        'full10': '110%',
      },
      height: {
        'screen90': '90vh',
      },
      colors: {
        dark_blue: "#050810",
        light_blue: "#243B55",
        wild_red: "#F76C6C",
      },
      screens: {
        sm: "450px",
        // => @media (min-width: 400px) { ... }
        md: "650px",
        // => @media (min-width: 650px) { ... }
        lg: "950px",
        // => @media (min-width: 950px) { ... }
        xl: "1300px",
        // => @media (min-width: 950px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
