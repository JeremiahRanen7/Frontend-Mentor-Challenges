/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'hsl(158, 36%, 37%)',
        cream:'hsl(30, 38%, 92%)',
        darkBlue:'hsl(212, 21%, 14%)',
        darkGrayishBlue:'hsl(228, 12%, 48%)'
      },
      fontFamily:{
        montserrat:['Montserrat', 'Monospace'],
        fraunces:['Fraunces','sans-serif']
      }
    },
  },
  plugins: [],
}

