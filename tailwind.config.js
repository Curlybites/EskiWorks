/** 
 * @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen/90': '60vh',
      },
      fontFamily: {
        'gamaamli': ['"Ga Maamli"', 'sans-serif'],
        'pt':["PT Sans Narrow", 'sans-serif'],
        'budoni':["Bodoni Moda SC", "serif"]
      },
    },
   
  },
  plugins: [daisyui],
   daisyui: {
    themes: ["nord","dim"]
  },
  
}