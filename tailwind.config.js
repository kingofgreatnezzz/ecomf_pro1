/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clouds: "#ECF0F1",
        concrete: "#95A5A6",
        asbestos: "#7F8C8D",
        silver: "#BDC3C7",
        primeColor: "#262626",
        lightText: "#6D6D6D",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}