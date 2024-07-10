/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        softBlue:'hsl(215, 51%, 70%)',
        primary:'hsl(178, 100%, 50%)',
        main:'hsl(217, 54%, 11%)',
        card:'hsl(216, 50%, 16%)',
        line:'hsl(215, 32%, 27%)'
      },
      fontFamily:{
        outfit:['Outfit','sans-serif']
      }
    },
  },
  plugins: [],
}

