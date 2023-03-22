/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
  "./App.{js,ts,jsx,tsx}",
  "./src/screens/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {

      fontFamily:{

        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors:{
        sage: "#7F8C72", /** inside box 20 opacity */
        white: "FFFFFF", 
        dt: "232D19",/**lighter text opacity 80 */
        

      }
    },


  },
  variants: {},
  plugins: [],
}

