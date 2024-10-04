/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#F9FCFE",
        dark: "#333333",
        dark2: "#999999",
        mainblue: '#2980f2',
        secondaryblue: '#1A62B2',
        textblue:'#0F3C6B',
        lightblue1: '#BCD7F6',
        lightblue2: '#E2F3FD',
        lightblue3: '#E1F4FC',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        'xsm': '300px', 
        'galaxysm': '412px',  
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': '1536px',
        'ipadsm': '1640px',
      },
    },
  },

};