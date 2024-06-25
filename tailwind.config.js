/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeColor: "#262626",
        lightText: "#6D6D6D",
      },
    },
  },
  plugins: [],
}