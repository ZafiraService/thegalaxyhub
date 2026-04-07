/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          dark: "#050505",
          card: "#0f0f0f",
          gold: "#f59e0b", // Un oro vibrante
          accent: "#fbbf24",
        },
      },
    },
  },
  plugins: [],
}