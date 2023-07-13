/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#251940",
          darker: "#1D103A",
          light: "#B490FF",
          lighter: "#E9DFFD"
        }
      },
      fontFamily: {
        cartoon: ["BD Cartoon Shout", "sans-serif"],
        grotesk: "'Space Grotesk', sans-serif",
      }
    },
  },
  plugins: [],
}

