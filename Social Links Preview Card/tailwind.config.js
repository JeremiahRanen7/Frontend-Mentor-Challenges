/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: 'hsl(75, 94%, 57%)',
        secondary: 'hsl(0, 0%, 20%)',
        tertiary: 'hsl(0, 0%, 12%)',
        dark: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif','system-ui'],
      },
    },
  },
  plugins: [],
}

