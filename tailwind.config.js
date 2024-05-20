/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary:"#",
        textPrim:"#ffff",
        textSec:"#D4D4D4",
      },
      fontFamily :{ 
        geist: ["geist-regular","sans-serif"], 
        inter:["Inter",...defaultTheme.fontFamily.sans]
      } 
    },
  },
  plugins: [],
}