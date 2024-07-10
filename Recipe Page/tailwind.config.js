/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        nutmeg:'hsl(14, 45%, 36%)',
        raspberry:'hsl(332, 51%, 32%)',
        rosyWhite:'hsl(330, 100%, 98%)',
        egg:'hsl(30, 54%, 90%)',
        lightgrey:'hsl(30, 18%, 87%)',
        wenge:'hsl(30, 10%, 34%)',
        charcoal:'hsl(24, 5%, 18%)'
      },
      fontFamily:{
        youngSerif:['Young Serif', 'sans-serif'],
        outfit:['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

