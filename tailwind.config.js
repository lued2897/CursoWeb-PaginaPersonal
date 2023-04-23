/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': {
          100: '#3b657a',
          200: '#123142',
          300: '#142026',
          400: '#5d2d4e',
        },
        cream:{
          100: '#FFFDEC'
        },
        'black':{
          100: '#4e031e',
        },
        'palette':{
          100: '#56A3A6',
          200: '#538890',
          300: '#4F6D7A',
          400: '#E3B505',
          500: '#DF8328',
          600: '#DB504A',
          700: '#AA3F3A',
          800: '#724E56',
          900: '#084C61',
        }
      },
      screens:{
        'sm': '144px',
        'md': '640px',
      },
    },
  },
  plugins: [
    require("./src/theme/navbar.js"),
    require("./src/theme/mainContainer.js"),
    require("./src/theme/card.js")
  ],
}

