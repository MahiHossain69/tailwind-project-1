/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1100px"
      },
      backgroundColor:{
        hbg:"#282828"
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      
      },
      screens:{
        "sm":"375px"
      
      },
  
    },
  },
  plugins: [],
}