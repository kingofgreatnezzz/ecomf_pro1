/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dangle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
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
           dangle: 'dangle 5s infinite ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}