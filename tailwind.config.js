/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ primary: "#EC711A", secondary:"#E8E1EF"},
      fontFamily:{ sans: ["Poppins", "sans-serif"] },
      container:{
        center:"true",
        padding:{
          "DEFAULT":"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      },
      animation:{
        "spin-slow":"spin 10s linear infinite",
      }, 
      keyframes:{
        spin:{
          from:{
            transform:"rotate(0deg)"
          },
          to:{
            transform:"rotate(360deg)"
          }
        }
      }
    },
  },
  plugins: [],
}

