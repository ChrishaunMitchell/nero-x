/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,ts,jsx,tsx}",
  "./src/screens/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {

      fontFamily:{

        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },

      colors:{
        sage: "#7F8C72", /** inside box 20 opacity */
        white: "FFFFFF", 
        dt: "232D19",/**lighter text opacity 80 */
        

      }
    },


  },
  plugins: [],
}
