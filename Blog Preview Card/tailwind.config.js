/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'hsl(47, 88%, 63%)',
        secondary:'hsl(0, 0%, 7%)',
        tertiary:'hsl(0, 0%, 50%)'
      },
      fontFamily: {
        'fig': ['Figtree','sans-serif'],
      },
      boxShadow:{
        'card-shadow': '10px 10px 0px hsl(0, 0%, 7%)'
      }
    },
  },
  plugins: [],
}

